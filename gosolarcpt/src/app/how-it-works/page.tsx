import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Camera, ClipboardList, FileText, Handshake, Receipt, SunMedium, Zap } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Faq from "@/components/ui/Faq";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "How It Works: Free Solar Quotes in Cape Town",
  description:
    "Estimate your savings, tell us your suburb, and we pass your request to up to 3 installers who serve your area. See exactly what happens at every step, and what we do and don't do.",
  alternates: { canonical: "/how-it-works/" },
};

const STEPS = [
  {
    icon: SunMedium,
    title: "Estimate your savings",
    time: "About a minute",
    body: "Tell the calculator your monthly bill, which way your roof faces and whether you want backup. You get an indicative system size, cost range and monthly saving straight away. Nothing is sent to anyone yet.",
  },
  {
    icon: ClipboardList,
    title: "Tell us where you are",
    time: "About a minute",
    body: "Add your name, WhatsApp number, email and suburb. We ask whether you own or rent and when you want to install, so installers can prepare the right system. You tick a consent box so we can share your details.",
  },
  {
    icon: Handshake,
    title: "We introduce up to 3 installers",
    time: "Usually within one business day",
    body: "We pass your request to up to 3 installers who serve your suburb. They contact you by phone or WhatsApp. You can ignore any of them, and you decide who gets a site visit.",
  },
  {
    icon: FileText,
    title: "Compare written quotes",
    time: "Your pace",
    body: "Most installers visit to check your roof and distribution board before quoting. Put the quotes side by side, ask questions, then pick one or none. You never owe us anything.",
  },
];

const READY = [
  { icon: Receipt, title: "A recent electricity bill", body: "Shows your usage and tariff, so quotes are sized properly." },
  { icon: Camera, title: "Photos of your roof and DB board", body: "Lets installers spot problems and give a firmer first price." },
  { icon: Zap, title: "What you want solar to do", body: "Cut the bill, keep essentials on in an outage, or both." },
  { icon: BadgeCheck, title: "Landlord or body-corporate OK", body: "If you rent or live in a complex, approval is usually needed first." },
];

const FAQ = [
  ["Is it really free?", "Yes. Installers pay us for introductions, so it costs you nothing and you are never obliged to accept a quote."],
  ["Are you an installer?", "No. We are a lead-matching service. We do not install, supply or guarantee any system, and we are not a party to your agreement with an installer."],
  ["How many companies will contact me?", "Up to 3, based on your suburb. If fewer serve your area, you may hear from fewer."],
  ["Can I stay anonymous until I choose?", "We need your contact details to introduce you, so installers will contact you. You can decline any of them."],
  ["What does an installer need to do for a legal installation?", "Connected systems in Cape Town must be registered with the City, and the installation needs an electrical Certificate of Compliance. Ask every installer to confirm they will handle both."],
  ["What if I change my mind?", "Message us on WhatsApp and we will remove your details and ask installers to stop contacting you."],
] as const;

export default function HowItWorks() {
  return (
    <>
      <PageHero
        title="From “how much could I save?” to written quotes in four steps"
        lede="No sales call to get started and no cost at any point. Here is exactly what happens to your details and what you can expect."
      >
        <Link href="/contact/" className="btn-primary">Start my free quotes</Link>
        <Link href="/" className="btn-ghost">Try the calculator first</Link>
      </PageHero>

      <section className="wrap py-16">
        <h2 className="text-3xl font-bold mb-10">What happens, step by step</h2>
        <ol className="relative max-w-3xl">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-amber-300" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative pl-20 pb-12 last:pb-0">
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-gray-900 shadow-md">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-teal-700">Step {i + 1} · {s.time}</p>
              <h3 className="text-2xl font-bold mt-0.5">{s.title}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-16">
        <div className="wrap grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">Have these ready and quotes come faster</h2>
            <p className="mt-3 text-gray-700">You do not need any of it to request quotes, but installers will ask for it.</p>
          </div>
          <ul className="lg:col-span-3 divide-y divide-gray-200 rounded-2xl ring-1 ring-gray-200 bg-gray-50">
            {READY.map((r) => (
              <li key={r.title} className="flex gap-4 p-5">
                <r.icon className="h-6 w-6 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div><p className="font-semibold">{r.title}</p><p className="text-gray-700">{r.body}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-16">
        <h2 className="text-3xl font-bold mb-8">What we do, and what we don't</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-teal-900 text-white p-8">
            <h3 className="text-xl font-bold mb-4">We do</h3>
            <ul className="space-y-3 text-teal-50">
              <li>Give you an honest, indicative estimate with the assumptions shown</li>
              <li>Introduce you to up to 3 installers in your area</li>
              <li>Tell you how we are paid: installers pay for introductions</li>
              <li>Remove your details if you ask</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-8">
            <h3 className="text-xl font-bold mb-4">We don't</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Install, supply or guarantee any solar system</li>
              <li>Charge you or take a deposit</li>
              <li>Promise a specific price, saving or payback period</li>
              <li>Sell your details to anyone beyond the installers you consent to</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap pb-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Questions people ask</h2>
        <Faq items={FAQ} />
      </section>
      <CtaBand />
    </>
  );
}
