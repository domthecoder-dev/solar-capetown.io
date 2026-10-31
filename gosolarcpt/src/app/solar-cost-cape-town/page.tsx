import type { Metadata } from "next";
import Link from "next/link";
import { BatteryCharging, Check, Cable, FileCheck2, Home, PanelTop, Zap } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import Faq from "@/components/ui/Faq";
import CtaBand from "@/components/ui/CtaBand";
import CostExplorer from "./CostExplorer";
import { AS_OF, COMPONENT_RANGES, FACTS, zar } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solar Cost in Cape Town 2026: Prices, Batteries & Payback",
  description: `What solar and battery systems cost in Cape Town (${AS_OF}). Indicative price ranges, what drives the price, hybrid vs grid-tied, and how to compare installer quotes.`,
  alternates: { canonical: "/solar-cost-cape-town/" },
};

const DRIVERS = [
  { icon: BatteryCharging, title: "Battery size", body: "Usually the biggest single cost. A bill-saving system needs far less battery than whole-home backup." },
  { icon: Zap, title: "Inverter type", body: "Hybrid inverters cost more than grid-tied but allow a battery and backup power." },
  { icon: PanelTop, title: "Panels and mounting", body: "More panels cost more. Tile and slate roofs, and coastal wind ratings, add labour or hardware." },
  { icon: Cable, title: "Wiring and the DB board", body: "Older homes may need electrical upgrades before solar can be connected safely." },
  { icon: FileCheck2, title: "Compliance", body: "City registration and the Certificate of Compliance should be included. Ask." },
  { icon: Home, title: "Brand and warranty", body: "Established brands cost more but come with longer, easier-to-claim warranties." },
];

const FAQ = [
  ["Why do quotes differ so much?", "Battery size, inverter brand, panel count, roof type and what is included (VAT, registration, compliance certificate) all change the total. Compare the same spec, not just the headline price."],
  ["Is there a government rebate for home solar?", FACTS.taxNote],
  ["How long does solar take to pay back?", "It depends on your usage, tariff and system. Our calculator gives an indicative range for your bill, but treat any fixed 'pays itself off in X years' promise with caution."],
  ["Is cheaper always worse?", "Not always, but very low prices often leave out compliance, use small batteries or use lower-grade components. Ask what is excluded."],
  ["Do prices include VAT?", "Not always. Ask each installer to state whether the quote includes VAT."],
] as const;

export default function SolarCost() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://gosolarcpt.co.za/" },
        { "@type": "ListItem", position: 2, name: "Solar cost in Cape Town", item: "https://gosolarcpt.co.za/solar-cost-cape-town/" } ] }} />
      <PageHero
        title="What solar really costs in Cape Town in 2026"
        lede={`Indicative installed price ranges, last reviewed ${AS_OF}. Pick a system size to see what it typically covers and what you might pay.`}
      />

      <section className="wrap -mt-8 relative z-10">
        <CostExplorer />
        <p className="mt-3 text-sm text-gray-600">Ranges are gathered from published Cape Town installer guides and vary widely. They are not quotes.</p>
      </section>

      <section className="wrap py-16">
        <h2 className="text-3xl font-bold mb-2">What moves the price</h2>
        <p className="text-gray-700 mb-8 max-w-2xl">Two quotes for the same house can be R50 000 apart. These are the usual reasons.</p>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {DRIVERS.map((d) => (
            <li key={d.title} className="flex gap-4">
              <d.icon className="h-7 w-7 text-teal-700 shrink-0 mt-1" aria-hidden="true" />
              <div><h3 className="font-bold text-lg">{d.title}</h3><p className="text-gray-700">{d.body}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-16">
        <div className="wrap grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Grid-tied or hybrid?</h2>
            <p className="text-gray-700 mb-6">The choice that changes your price the most.</p>
            <div className="overflow-x-auto rounded-2xl ring-1 ring-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-teal-900 text-white"><tr><th className="p-4"></th><th className="p-4">Grid-tied</th><th className="p-4">Hybrid</th></tr></thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Battery", "No", "Yes"],
                    ["Works during an outage", "No, it switches off", "Yes, on selected circuits"],
                    ["Upfront cost", "Lower", "Higher"],
                    ["City registration", "Required", "Required"],
                  ].map(([a, b, c]) => (
                    <tr key={a}><th scope="row" className="p-4 font-semibold bg-gray-50">{a}</th><td className="p-4">{b}</td><td className="p-4">{c}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Component price guide</h2>
            <p className="text-gray-700 mb-6">Useful for sense-checking a quote.</p>
            <ul className="divide-y divide-gray-200 rounded-2xl ring-1 ring-gray-200">
              {COMPONENT_RANGES.map((c) => (
                <li key={c.item} className="flex items-baseline justify-between gap-4 p-5">
                  <span className="font-medium">{c.item}</span>
                  <span className="font-bold text-teal-900 whitespace-nowrap">{zar(c.from)} – {zar(c.to)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600">{FACTS.ssegNote}</p>
          </div>
        </div>
      </section>

      <section className="wrap py-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Before you accept a quote, check that it states</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {["Panel, inverter and battery brands and models", "Battery size in kWh and inverter size in kW", "VAT included or excluded", "City SSEG registration included", "Certificate of Compliance included", "Warranty terms in writing", "Installation timeline", "Payment schedule and deposit"].map((t) => (
            <li key={t} className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-gray-200"><Check className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />{t}</li>
          ))}
        </ul>
        <p className="mt-6 text-gray-700">Want help comparing? Get quotes through us, then see <Link href="/guides/" className="text-teal-700 underline">our guides</Link>.</p>
      </section>

      <section className="wrap pb-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Cost questions</h2>
        <Faq items={FAQ} />
      </section>
      <CtaBand title="See what it would cost for your home" />
    </>
  );
}
