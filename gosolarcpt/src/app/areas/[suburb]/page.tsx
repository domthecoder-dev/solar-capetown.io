import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { AREAS, getArea } from "@/lib/areas";
import { AS_OF, FACTS, PRICE_RANGES, zar } from "@/lib/constants";

export const dynamicParams = false;
export const generateStaticParams = () => AREAS.map((a) => ({ suburb: a.slug }));

export async function generateMetadata({ params }: { params: Promise<{ suburb: string }> }): Promise<Metadata> {
  const a = getArea((await params).suburb);
  if (!a) return {};
  return {
    title: `Solar Installers & Quotes in ${a.name}, Cape Town`,
    description: `Free solar and battery quotes for ${a.name} (${a.suburbs.slice(0, 4).join(", ")}). Local considerations, indicative costs and up to 3 installer quotes.`,
    alternates: { canonical: `/areas/${a.slug}/` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ suburb: string }> }) {
  const a = getArea((await params).suburb);
  if (!a) notFound();
  return (
    <article className="container mx-auto px-4 py-14 max-w-4xl prose-page">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: `Solar quote matching in ${a.name}`, areaServed: a.suburbs.map((s) => ({ "@type": "Place", name: `${s}, Cape Town` })), provider: { "@type": "Organization", name: "GoSolarCPT" } }} />
      <h1 className="text-4xl font-extrabold">Solar quotes in {a.name}, Cape Town</h1>
      <p>{a.intro}</p>
      <p><strong>Suburbs we cover:</strong> {a.suburbs.join(", ")}.</p>
      <h2>What to know in {a.name}</h2>
      {a.considerations.map((c) => (
        <div key={c.title}><h3>{c.title}</h3><p>{c.body}</p></div>
      ))}
      <h2>Indicative costs ({AS_OF})</h2>
      <ul>{PRICE_RANGES.map((p) => <li key={p.id}>{p.title}: {zar(p.from)} – {zar(p.to)}</li>)}</ul>
      <p>{FACTS.ssegNote} See our <Link href="/solar-cost-cape-town/">full cost guide</Link>.</p>
      <h2>Get quotes for {a.name}</h2>
      <LeadForm source={`area-${a.slug}`} />
    </article>
  );
}
