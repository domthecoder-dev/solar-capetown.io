"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/emailjs";
import { SUBURB_OPTIONS } from "@/lib/areas";
import { SITE } from "@/lib/constants";
import { CONSENT_TEXT, LEGAL } from "@/lib/legal";
import { track } from "@/lib/analytics";

const SA_PHONE = /^(\+27|0027|27|0)[6-8][0-9]{8}$|^(\+27|0027|27|0)[1-5][0-9]{8}$/;

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .transform((v) => v.replace(/[\s()-]/g, ""))
    .refine((v) => SA_PHONE.test(v), "Enter a valid South African number"),
  suburb: z.string().min(3, "Tell us your suburb"),
  ownership: z.enum(["own", "rent", "business"]),
  timeline: z.enum(["asap", "1-3m", "3-6m", "research"]),
  consent: z.literal(true, { error: "Please agree so we can contact you" }),
  website: z.string().max(0).optional(), // honeypot
});

type FormInput = z.input<typeof schema>;
type FormOutput = z.output<typeof schema>;

const input =
  "w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-300 bg-white text-gray-900 placeholder:text-gray-500";

export default function LeadForm({
  source = "form",
  summary = "",
  compact = false,
}: {
  source?: string;
  summary?: string;
  compact?: boolean;
}) {
  const loadedAt = useRef(Date.now());
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(schema),
    defaultValues: { ownership: "own", timeline: "1-3m" },
  });

  const onSubmit = async (d: FormOutput) => {
    setFailed(false);
    // Bots fill the hidden field or submit instantly.
    if (d.website || Date.now() - loadedAt.current < 2500) {
      setDone(true);
      return;
    }
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: d.name,
          from_email: d.email,
          phone: d.phone,
          suburb: d.suburb,
          message: [
            `New solar lead (${source}) from ${d.suburb}`,
            `Property: ${d.ownership}; timeline: ${d.timeline}`,
            summary && `Calculator: ${summary}`,
            `Consent recorded ${new Date().toISOString()} (version ${LEGAL.consentVersion}): "${CONSENT_TEXT}"`,
          ]
            .filter(Boolean)
            .join("\n"),
        },
        EMAILJS_PUBLIC_KEY
      );
      track("generate_lead", { source, currency: "ZAR", value: 1500 });
      setDone(true);
    } catch (e) {
      console.error("Lead submission failed", e);
      setFailed(true);
    }
  };

  if (done) {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center" role="status">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Request received</h3>
        <p className="text-green-900">
          Thanks! We'll be in touch on WhatsApp or by phone, usually within one business day.
        </p>
      </div>
    );
  }

  const err = (m?: string) =>
    m ? (
      <p className="text-red-600 text-sm mt-1" role="alert">
        {m}
      </p>
    ) : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${compact ? "" : "max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl"}`}
      noValidate
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${source}-website`}>Website</label>
        <input id={`${source}-website`} tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${source}-name`} className="block font-medium mb-1">Name</label>
          <input id={`${source}-name`} autoComplete="name" className={input} {...register("name")} aria-invalid={!!errors.name} />
          {err(errors.name?.message)}
        </div>
        <div>
          <label htmlFor={`${source}-phone`} className="block font-medium mb-1">WhatsApp number</label>
          <input id={`${source}-phone`} type="tel" inputMode="tel" autoComplete="tel" placeholder="082 123 4567" className={input} {...register("phone")} aria-invalid={!!errors.phone} />
          {err(errors.phone?.message)}
        </div>
      </div>

      <div>
        <label htmlFor={`${source}-email`} className="block font-medium mb-1">Email</label>
        <input id={`${source}-email`} type="email" autoComplete="email" className={input} {...register("email")} aria-invalid={!!errors.email} />
        {err(errors.email?.message)}
      </div>

      <div>
        <label htmlFor={`${source}-suburb`} className="block font-medium mb-1">Suburb</label>
        <input id={`${source}-suburb`} list="suburb-list" autoComplete="address-level2" className={input} {...register("suburb")} aria-invalid={!!errors.suburb} />
        <datalist id="suburb-list">
          {SUBURB_OPTIONS.map((s) => <option key={s} value={s} />)}
        </datalist>
        {err(errors.suburb?.message)}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${source}-own`} className="block font-medium mb-1">I...</label>
          <select id={`${source}-own`} className={input} {...register("ownership")}>
            <option value="own">Own my home</option>
            <option value="rent">Rent (landlord approval needed)</option>
            <option value="business">Am a business</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${source}-time`} className="block font-medium mb-1">Looking to install</label>
          <select id={`${source}-time`} className={input} {...register("timeline")}>
            <option value="asap">As soon as possible</option>
            <option value="1-3m">In 1–3 months</option>
            <option value="3-6m">In 3–6 months</option>
            <option value="research">Just researching</option>
          </select>
        </div>
      </div>

      <div>
        <label className="flex gap-3 text-sm text-gray-700">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-amber-500" {...register("consent")} />
          <span>
            {CONSENT_TEXT} I have read the{" "}
            <Link href="/privacy/" className="underline">Privacy Policy</Link>. I can withdraw consent at any time.
          </span>
        </label>
        {err(errors.consent?.message)}
      </div>

      <p className="text-xs text-gray-600">
        Why we ask: to match you with installers in your area. We keep your details only as long as needed for that purpose. See the <Link href="/privacy/" className="underline">Privacy Policy</Link> for your rights.
      </p>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full text-lg disabled:opacity-70">
        {isSubmitting ? "Sending..." : "Get my free quotes"}
      </button>
      {failed && (
        <p className="text-red-600 text-sm" role="alert">
          Something went wrong. Please try again or WhatsApp us on {SITE.phoneDisplay}.
        </p>
      )}
    </form>
  );
}
