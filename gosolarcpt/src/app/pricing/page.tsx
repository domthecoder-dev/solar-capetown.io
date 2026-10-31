import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Pricing",
  alternates: { canonical: "/solar-cost-cape-town/" },
  robots: { index: false, follow: true },
};

export default function Pricing() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Our pricing guide has moved</h1>
      <Link href="/solar-cost-cape-town/" className="btn-primary">See solar costs in Cape Town</Link>
    </section>
  );
}
