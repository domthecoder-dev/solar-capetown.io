"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { PRICE_RANGES, zar } from "@/lib/constants";

const MIN = 50_000;
const MAX = 450_000;
const pos = (n: number) => ((n - MIN) / (MAX - MIN)) * 100;

const FIT: Record<string, string[]> = {
  starter: ["Smaller homes or flats", "Lights, fridge, Wi-Fi and TV during an outage", "Cutting the bill without whole-home backup"],
  family: ["Typical family homes", "Cooking and several appliances in an outage", "A bigger battery for evenings"],
  large: ["Large homes and small businesses", "Pools, workshops and heavy appliances", "Longer backup or higher daily usage"],
};

export default function CostExplorer() {
  const [id, setId] = useState<string>(PRICE_RANGES[1].id);
  const tier = PRICE_RANGES.find((p) => p.id === id)!;

  return (
    <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 overflow-hidden">
      <div role="tablist" aria-label="System size" className="grid grid-cols-3 bg-gray-100">
        {PRICE_RANGES.map((p) => (
          <button
            key={p.id}
            role="tab"
            id={`tab-${p.id}`}
            aria-selected={id === p.id}
            aria-controls="tier-panel"
            onClick={() => setId(p.id)}
            className={`px-3 py-4 text-sm md:text-base font-semibold transition ${id === p.id ? "bg-white text-teal-900 shadow-[inset_0_-3px_0_#f59e0b]" : "text-gray-600 hover:text-gray-900"}`}
          >
            {p.title}
          </button>
        ))}
      </div>
      <div id="tier-panel" role="tabpanel" aria-labelledby={`tab-${id}`} className="p-6 md:p-10 grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600">Typical installed price</p>
          <p className="text-4xl md:text-5xl font-extrabold text-teal-900 mt-1">{zar(tier.from)} – {zar(tier.to)}</p>
          <p className="mt-3 text-gray-700">{tier.spec}</p>

          <div className="mt-8" aria-hidden="true">
            <div className="relative h-3 rounded-full bg-gray-200">
              <div
                className="absolute top-0 h-3 rounded-full bg-amber-500 transition-[left,width] duration-500 ease-out"
                style={{ left: `${pos(tier.from)}%`, width: `${pos(tier.to) - pos(tier.from)}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-600"><span>{zar(MIN)}</span><span>{zar(MAX)}</span></div>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-3">A good fit for</p>
          <ul className="space-y-2 text-gray-700">
            {FIT[tier.id].map((f) => <li key={f} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />{f}</li>)}
          </ul>
          <p className="mt-4 text-gray-700">{tier.note}</p>
          <Link href="/" className="btn-primary mt-6">Estimate for my home</Link>
        </div>
      </div>
    </div>
  );
}
