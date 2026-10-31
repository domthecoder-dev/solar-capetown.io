import type { Metadata } from "next";
import { BadgeCheck, Clock, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Free Solar Quotes in Cape Town",
  description: "Request up to 3 free, no-obligation solar quotes from Cape Town installers. Takes about a minute.",
  alternates: { canonical: "/contact/" },
};

const POINTS = [
  { icon: BadgeCheck, title: "Free and no obligation", body: "Installers pay us for introductions. You pay nothing." },
  { icon: Clock, title: "About a minute", body: "Six quick questions, then installers get in touch, usually within a business day." },
  { icon: ShieldCheck, title: "Up to 3 installers only", body: "Your details go to the installers serving your suburb, and nobody else." },
];

export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 min-h-[calc(100vh-5rem)]">
      <div className="wrap py-12 md:py-16 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 text-white lg:pt-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-balance">Get your free solar quotes</h1>
          <p className="mt-4 text-lg text-teal-50">Tell us a bit about your home. We introduce you to up to 3 Cape Town installers who can send written quotes.</p>
          <ul className="mt-8 space-y-6">
            {POINTS.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-teal-950"><p.icon className="h-5 w-5" aria-hidden="true" /></span>
                <div><p className="font-bold">{p.title}</p><p className="text-teal-100">{p.body}</p></div>
              </li>
            ))}
          </ul>
          <a href={`https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(SITE.whatsappText)}`} className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 font-semibold hover:bg-white/20 transition">
            <FaWhatsapp className="h-6 w-6 text-[#25D366]" aria-hidden="true" />
            <span>Prefer WhatsApp? Message {SITE.phoneDisplay}</span>
          </a>
        </div>
        <div className="lg:col-span-3 rounded-3xl bg-white p-6 md:p-10 shadow-2xl">
          <h2 className="text-2xl font-bold mb-1">Your details</h2>
          <p className="text-gray-600 mb-6">We only share them with the installers you consent to.</p>
          <LeadForm source="contact" compact />
        </div>
      </div>
    </section>
  );
}
