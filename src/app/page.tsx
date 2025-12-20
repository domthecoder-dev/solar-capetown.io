import ContactForm from "@/components/ContactForm";
//import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Go Solar CPT – Beat Loadshedding Forever
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Free quotes from Cape Town’s top installers in 24hrs
          </p>
          <Link href="/contact" className="btn-primary text-2xl inline-block">
            Get My Free Quote Now
          </Link>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Request Your Free Quotes</h2>
          <ContactForm />
        </div>
      </section>

      {/* Testimonials 
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Capetonians Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <TestimonialCard name="Thabo M." text="Saved R3,500/month on electricity. Best decision ever!" />
          <TestimonialCard name="Sarah K." text="Got 3 quotes in 18hrs. Installed within 2 weeks!" />
          <TestimonialCard name="Johan V." text="Professional installers, zero hassles. Highly recommend." />
        </div>
      </section>*/}

      {/* Pricing Preview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Typical System Prices</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <PricingCard title="5kW System" price="~R89,000" features={["Full backup", "10–15 panels", "5-year warranty"]} />
            <PricingCard title="8kW System" price="~R149,000" popular features={["Larger homes", "20+ panels", "10-year warranty"]} />
            <PricingCard title="10kW + Battery" price="~R249,000" features={["100% off-grid capable", "Battery backup", "15-year warranty"]} />
          </div>
          <Link href="/pricing" className="mt-12 inline-block text-2xl underline text-green-600 hover:text-green-700">
            See Full Pricing Guide →
          </Link>
        </div>
      </section>
    </>
  );
}