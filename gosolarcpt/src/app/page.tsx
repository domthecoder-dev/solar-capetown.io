import Link from "next/link";
import Calculator from "@/components/calculator/Calculator";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { AREAS } from "@/lib/areas";
import { AS_OF, FACTS, PRICE_RANGES, zar } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Solar quote matching in Cape Town",
          serviceType: "Solar installation lead matching",
          areaServed: { "@type": "City", name: "Cape Town" },
          provider: { "@type": "Organization", name: "GoSolarCPT" },
        }}
      />
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white py-14 md:py-20">
        <div className="wrap">
          <div className="max-w-3xl mb-10">
            <p className="text-amber-300 font-semibold mb-2">Cape Town solar, made simple</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              See how much solar could save you in Cape Town
            </h1>
            <p className="text-lg md:text-xl text-teal-50">
              Answer 3 quick questions, get an instant estimate, then receive up to 3 free quotes from local installers. No obligation.
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      <section className="py-14 wrap">
        <h2 className="text-3xl font-bold text-center mb-8">How it works</h2>
        <ol className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            ["Estimate", "Use the calculator to size a system and see an indicative saving."],
            ["Get matched", "Tell us your suburb. We pass your request to up to 3 installers who serve your area."],
            ["Compare quotes", "Installers contact you with firm quotes. You choose, or walk away at no cost."],
          ].map(([t, d], i) => (
            <li key={t} className="bg-white rounded-xl p-6 shadow">
              <div className="text-4xl font-extrabold text-amber-500 mb-2">{i + 1}</div>
              <h3 className="text-xl font-bold mb-1">{t}</h3>
              <p className="text-gray-700">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-14 bg-white">
        <div className="wrap max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-2">What does solar cost in Cape Town?</h2>
          <p className="text-center text-gray-600 mb-8">Indicative installed price ranges, {AS_OF}. Your quote will vary.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICE_RANGES.map((p) => (
              <div key={p.id} className="border rounded-xl p-6 bg-gray-50">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-2xl font-extrabold text-teal-800 my-2">{zar(p.from)} – {zar(p.to)}</p>
                <p className="text-sm text-gray-600 mb-2">{p.spec}</p>
                <p className="text-gray-700">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6"><Link href="/solar-cost-cape-town/" className="text-teal-700 underline font-semibold">Full Cape Town solar cost guide →</Link></p>
        </div>
      </section>

      <section className="py-14 wrap max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Why Capetonians are going solar in 2026</h2>
        <div className="prose-page">
          <p>{FACTS.loadSheddingNote} Many households still choose solar to cut their bill, protect against tariff increases and keep essentials running during faults and maintenance outages.</p>
          <p>{FACTS.ssegNote} A reputable installer will handle the application and issue a Certificate of Compliance. {FACTS.taxNote}</p>
          <p><Link href="/guides/">Read our Cape Town solar guides</Link> for registration, batteries, feed-in tariffs and more.</p>
        </div>
      </section>

      <section className="py-14 bg-gray-100">
        <div className="wrap max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-6">Areas we cover</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {AREAS.map((a) => (
              <li key={a.slug}><Link href={`/areas/${a.slug}/`} className="block bg-white rounded-lg p-4 shadow hover:shadow-md font-medium">{a.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14">
        <div className="wrap">
          <h2 className="text-3xl font-bold text-center mb-8">Prefer to skip the calculator?</h2>
          <LeadForm source="home" />
        </div>
      </section>
    </>
  );
}
