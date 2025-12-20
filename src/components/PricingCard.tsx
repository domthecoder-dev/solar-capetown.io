import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ title, price, features, popular }: PricingCardProps) {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-xl border-4 ${popular ? "border-green-600" : "border-gray-200"} relative`}>
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-bold text-green-600 mb-6">{price}</p>
      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-600">✓</span> {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="btn-primary w-full text-center block">
        Get Exact Quote
      </Link>
    </div>
  );
}