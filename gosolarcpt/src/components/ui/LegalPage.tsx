import type { ReactNode } from "react";
import { LEGAL } from "@/lib/legal";

export default function LegalPage({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white">
        <div className="wrap py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-balance">{title}</h1>
          <p className="mt-3 text-teal-100">Last updated {LEGAL.lastUpdated}</p>
          {intro && <p className="mt-4 text-lg text-teal-50 max-w-2xl">{intro}</p>}
        </div>
      </section>
      <article className="wrap py-12 max-w-3xl prose-page">{children}</article>
    </>
  );
}

export function ResponsibleParty() {
  const rows: [string, string][] = [
    ["Trading name", LEGAL.tradingName],
    ["Registered name", LEGAL.legalName],
    ["Registration number", LEGAL.registrationNumber],
    ["Physical address", LEGAL.address],
    ["Information Officer", LEGAL.informationOfficer],
    ["Privacy email", LEGAL.privacyEmail],
    ["WhatsApp", LEGAL.whatsapp],
  ];
  return (
    <dl className="my-4 grid grid-cols-[10rem_1fr] gap-x-4 gap-y-2 rounded-2xl bg-white p-5 ring-1 ring-gray-200 text-gray-800">
      {rows.filter(([, v]) => v).map(([k, v]) => (
        <div key={k} className="contents"><dt className="font-semibold">{k}</dt><dd>{v}</dd></div>
      ))}
    </dl>
  );
}
