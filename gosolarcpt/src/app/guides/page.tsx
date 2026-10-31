import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import Faq from "@/components/ui/Faq";
import CtaBand from "@/components/ui/CtaBand";
import { AS_OF, FACTS, MODEL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cape Town Solar Guides: SSEG, Batteries, Feed-in & FAQs",
  description: "Plain-English guides to going solar in Cape Town: City registration, feed-in tariffs, hybrid vs grid-tied, batteries, tax, renting and sectional title, and maintenance.",
  alternates: { canonical: "/guides/" },
};

const FEED_IN = `${(MODEL.feedInRPerKwhExVat * 100).toFixed(2)} c/kWh`;

const FAQ = [
  ["Do I need to register my solar system with the City of Cape Town?", FACTS.ssegNote + " Systems that export power need a bi-directional meter and reverse power flow protection."],
  ["Is there a tax rebate for home solar?", FACTS.taxNote],
  ["Is there still load shedding in Cape Town?", FACTS.loadSheddingNote],
  ["Can I be paid for exporting power?", `The City publishes a residential feed-in tariff in its annual budget. The 2026/27 annexure lists about ${FEED_IN} excluding VAT. Rates are reviewed each year, so confirm the current rate on the City's website.`],
  ["Hybrid or grid-tied?", "Grid-tied systems have no battery and switch off during an outage. Hybrid systems add a battery so selected circuits stay on. Hybrids cost more but give backup."],
  ["How long does approval take?", "Secondary guides suggest roughly 2–4 weeks for City authorisation. Ask your installer for their current experience."],
] as const;

const TOC = [
  ["registration", "Registering with the City"],
  ["system-types", "Grid-tied, hybrid or off-grid"],
  ["batteries", "Batteries explained"],
  ["feed-in", "Selling power back"],
  ["outages", "Solar and power cuts"],
  ["tax", "Tax and incentives"],
  ["renting", "Renting or sectional title"],
  ["maintenance", "Looking after your system"],
  ["faq", "Quick answers"],
] as const;

export default function Guides() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
      <PageHero
        title="Cape Town solar, explained without the jargon"
        lede={`Registration, batteries, feed-in, tax and more. Reviewed ${AS_OF}. Rules and tariffs change, so confirm key points with the City of Cape Town or your installer.`}
      >
        <Link href="/contact/" className="btn-primary">Get free quotes</Link>
      </PageHero>

      <div className="wrap py-14 grid lg:grid-cols-[16rem_1fr] gap-12">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-24 space-y-1 border-l border-gray-300">
            {TOC.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className="block -ml-px border-l-2 border-transparent pl-4 py-1.5 text-gray-700 hover:border-amber-500 hover:text-teal-900">{label}</a></li>
            ))}
          </ul>
        </nav>

        <article className="prose-page max-w-3xl">
          <section id="registration">
            <h2 className="!mt-0">Registering with the City of Cape Town</h2>
            <p>{FACTS.ssegNote}</p>
            <ul>
              <li>Your installer normally submits the application and uses a City-approved inverter.</li>
              <li>Systems that export need a bi-directional meter and reverse power flow protection.</li>
              <li>You need to be on the Home User tariff to register solar.</li>
              <li>Ask for the electrical Certificate of Compliance when the work is finished.</li>
            </ul>
            <p>Unregistered systems can lead to fines and problems with insurance or selling your home, so do not skip it.</p>
          </section>

          <section id="system-types">
            <h2>Grid-tied, hybrid or off-grid</h2>
            <p><strong>Grid-tied</strong> systems have no battery. They cut your bill during the day but switch off when the grid does. <strong>Hybrid</strong> systems add a battery, so selected circuits stay on during an outage and you can use stored energy in the evening. <strong>Off-grid</strong> systems disconnect entirely and are uncommon in suburbs because they need much larger batteries.</p>
            <p>Most Cape Town homes that want backup choose hybrid. See <Link href="/solar-cost-cape-town/">what each costs</Link>.</p>
          </section>

          <section id="batteries">
            <h2>Batteries explained</h2>
            <ul>
              <li><strong>kWh</strong> is how much energy the battery stores. <strong>kW</strong> is how much it can deliver at once. You need both to be big enough for the appliances you want to run.</li>
              <li>Most new home batteries use lithium iron phosphate (LFP) chemistry. Check the cycle count and warranty.</li>
              <li>Size the battery to the load you want to back up, not to the biggest one on the market.</li>
              <li>Heavy loads such as geysers, ovens and pool pumps drain a battery quickly. Consider a solar geyser or timer.</li>
            </ul>
          </section>

          <section id="feed-in">
            <h2>Selling power back to the City</h2>
            <p>The City publishes a residential feed-in tariff each year in its budget. The 2026/27 annexure lists about {FEED_IN} excluding VAT, and rates are reviewed annually. To be paid for exports you need a bi-directional meter. Many homes use most of the power they generate, so export income is often a small part of the saving.</p>
          </section>

          <section id="outages">
            <h2>Solar and power cuts</h2>
            <p>{FACTS.loadSheddingNote}</p>
            <p>A grid-tied system without a battery gives no power during a cut. If backup matters, you need a hybrid system, and you should decide whether it needs to run essentials only or the whole house.</p>
          </section>

          <section id="tax">
            <h2>Tax and incentives</h2>
            <p>{FACTS.taxNote} Older guides still mention a 25% rebate (up to R15 000) and the 125% business allowance. Both have ended. Check the SARS website or ask an accountant, especially if you run a business.</p>
          </section>

          <section id="renting">
            <h2>Renting or sectional title</h2>
            <p>Tenants need their landlord's written approval and usually shouldn't invest in a fixed system. In sectional title schemes the body corporate generally must approve any rooftop installation, and roofs are often shared, so ask whether a shared system is possible.</p>
          </section>

          <section id="maintenance">
            <h2>Looking after your system</h2>
            <ul>
              <li>Check the monitoring app now and then for faults or drops in output.</li>
              <li>Clean panels if dust or bird droppings build up, using water and a soft brush, from the ground where possible.</li>
              <li>Keep records: the Certificate of Compliance, registration and warranties.</li>
              <li>Have a technician inspect the system if production drops without explanation.</li>
            </ul>
          </section>

          <section id="faq">
            <h2>Quick answers</h2>
            <div className="not-prose mt-4"><Faq items={FAQ} /></div>
          </section>
        </article>
      </div>
      <CtaBand />
    </>
  );
}
