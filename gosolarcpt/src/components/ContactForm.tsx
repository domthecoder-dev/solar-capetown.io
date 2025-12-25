"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid SA phone number required"),
  suburb: z.string().min(3, "Suburb required"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_03d40fs",
        "template_oafbbpb",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          suburb: data.suburb,
          message: `New solar lead from ${data.suburb}`,
        },
        "3AQTcP4wujQ23AfJS"
      );

      // SUCCESS: Fire GA4 conversion event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "form",
          event_label: "Solar Quote Request",
          value: 1, // optional — helps with conversion value reporting
        });
      }

      alert("Quote request sent! We'll contact you in <24hrs");
      reset();
    } catch (e) {
      alert("Something went wrong. Please WhatsApp us directly.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl"
    >
      <div>
        <label className="block font-medium mb-2">Name</label>
        <input
          {...register("name")}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-2">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-2">Phone (WhatsApp)</label>
        <input
          {...register("phone")}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="0827841234"
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && (
          <p className="text-red-600 text-sm mt-1" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-2">Suburb in Cape Town</label>
        <input
          {...register("suburb")}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          aria-invalid={errors.suburb ? "true" : "false"}
        />
        {errors.suburb && (
          <p className="text-red-600 text-sm mt-1" role="alert">
            {errors.suburb.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-xl disabled:opacity-70 disabled:cursor-not-allowed"
        aria-label={isSubmitting ? "Sending quote request" : "Submit quote request"}
      >
        {isSubmitting ? "Sending..." : "Get My Free Quotes"}
      </button>
    </form>
  );
}