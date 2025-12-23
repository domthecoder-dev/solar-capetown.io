import PricingCard from "@/components/PricingCard";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="py-24 container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-4">Solar Pricing Guide 2025</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Average turn-key prices in Cape Town (incl. VAT & installation)</p>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <PricingCard
          title="5kW Grid-Tied System"
          price="~R89,000"
          features={["10–15 panels", "No battery", "Pays itself in 5–7 years"]}
        />
        <PricingCard
          title="8kW Hybrid System"
          price="~R149,000"
          popular
          features={["20+ panels", "Hybrid inverter", "Future battery ready"]}
        />
        <PricingCard
          title="10kW + 10kWh Battery"
          price="~R249,000"
          features={["Full backup during loadshedding", "10–15kWh battery", "100% energy independence"]}
        />
      </div>

      <div className="text-center mt-16">
        <Link href="/contact" className="btn-primary text-2xl inline-block">
          Get Your Exact Quote Today
        </Link>
      </div>
    </section>
  );
}