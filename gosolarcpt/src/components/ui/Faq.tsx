import { ChevronDown } from "lucide-react";

export default function Faq({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="divide-y divide-gray-200 rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
      {items.map(([q, a]) => (
        <details key={q} className="group px-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 font-semibold text-gray-900">
            {q}
            <ChevronDown className="chev h-5 w-5 shrink-0 text-teal-700 transition-transform" aria-hidden="true" />
          </summary>
          <p className="pb-5 text-gray-700 leading-relaxed max-w-prose">{a}</p>
        </details>
      ))}
    </div>
  );
}
