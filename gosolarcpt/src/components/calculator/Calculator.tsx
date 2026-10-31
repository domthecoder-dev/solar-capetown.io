"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import { calculate, type Backup, type Orientation } from "@/lib/solarModel";
import { AS_OF, zar } from "@/lib/constants";
import { track } from "@/lib/analytics";
import SunArc from "@/components/SunArc";
import LeadForm from "@/components/LeadForm";

function Counter({ value, format }: { value: number; format: (n: number) => string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = format(value);
      prev.current = value;
      return;
    }
    const controls = animate(prev.current, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => (el.textContent = format(v)),
    });
    prev.current = value;
    return () => controls.stop();
  }, [value, reduce, format]);
  return <span ref={ref}>{format(value)}</span>;
}

const ORIENTATIONS: { id: Orientation; label: string; hint: string }[] = [
  { id: "north", label: "North-facing", hint: "Best yield" },
  { id: "eastWest", label: "East / West", hint: "Spread across the day" },
  { id: "unsure", label: "Not sure", hint: "We'll assume average" },
];
const BACKUPS: { id: Backup; label: string; hint: string }[] = [
  { id: "none", label: "Just cut my bill", hint: "No battery" },
  { id: "essentials", label: "Essentials backup", hint: "~5kWh battery" },
  { id: "wholeHome", label: "Whole-home backup", hint: "~15kWh battery" },
];

const fmtR = (n: number) => zar(n);
const fmtKw = (n: number) => n.toFixed(1) + " kWp";
const fmtInt = (n: number) => Math.round(n).toString();

export default function Calculator() {
  const [step, setStep] = useState(0);
  const [bill, setBill] = useState(2500);
  const [orientation, setOrientation] = useState<Orientation>("north");
  const [backup, setBackup] = useState<Backup>("essentials");
  const started = useRef(false);

  const result = useMemo(() => calculate({ monthlyBill: bill, orientation, backup }), [bill, orientation, backup]);

  const go = (n: number) => {
    if (!started.current) {
      started.current = true;
      track("calculator_start");
    }
    track("calculator_step", { step: n });
    setStep(n);
  };

  const summary = `Bill R${bill}/m; ${orientation}; ${backup}; est. ${result.systemKwp}kWp, ${result.batteryKwh}kWh battery, ${zar(result.costLow)}-${zar(result.costHigh)}, saving ~${zar(result.monthlySaving)}/m`;

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
      <div className="bg-white/10 backdrop-blur rounded-2xl p-4 flex flex-col justify-center">
        <SunArc orientation={orientation} kwp={result.systemKwp} />
        <p className="text-center text-sm text-white/80 mt-2">
          Drag the slider to follow the sun across your roof.
        </p>
      </div>

      <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="flex gap-2 mb-6" aria-label="Progress">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`h-1.5 flex-1 rounded ${i <= step ? "bg-amber-500" : "bg-gray-200"}`} />
          ))}
        </div>

        {step === 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-1">What's your monthly electricity bill?</h2>
            <p className="text-gray-600 mb-6">Check your City of Cape Town account. An average month is fine.</p>
            <div className="text-5xl font-extrabold text-amber-600 mb-4" aria-live="polite">{zar(bill)}</div>
            <input
              type="range" min={500} max={10000} step={100} value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full accent-amber-500"
              aria-label="Monthly electricity bill in rand"
            />
            <div className="flex justify-between text-sm text-gray-500"><span>R500</span><span>R10 000+</span></div>
            <button className="btn-primary w-full mt-8" onClick={() => go(1)}>Next</button>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Which way does your main roof face?</h2>
            <div className="grid gap-3">
              {ORIENTATIONS.map((o) => (
                <button key={o.id} onClick={() => setOrientation(o.id)}
                  className={`text-left border-2 rounded-xl p-4 transition ${orientation === o.id ? "border-amber-500 bg-amber-50" : "border-gray-200 hover:border-amber-300"}`}
                  aria-pressed={orientation === o.id}>
                  <span className="font-semibold">{o.label}</span>
                  <span className="block text-sm text-gray-600">{o.hint}</span>
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <button className="px-5 py-3 rounded-lg border" onClick={() => go(0)}>Back</button>
              <button className="btn-primary flex-1" onClick={() => go(2)}>Next</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What do you want solar to do?</h2>
            <div className="grid gap-3">
              {BACKUPS.map((o) => (
                <button key={o.id} onClick={() => setBackup(o.id)}
                  className={`text-left border-2 rounded-xl p-4 transition ${backup === o.id ? "border-amber-500 bg-amber-50" : "border-gray-200 hover:border-amber-300"}`}
                  aria-pressed={backup === o.id}>
                  <span className="font-semibold">{o.label}</span>
                  <span className="block text-sm text-gray-600">{o.hint}</span>
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <button className="px-5 py-3 rounded-lg border" onClick={() => go(1)}>Back</button>
              <button className="btn-primary flex-1" onClick={() => go(3)}>Show my estimate</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl font-bold mb-4">Your indicative estimate</h2>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl bg-amber-50 p-4">
                <div className="text-sm text-gray-600">Est. monthly saving</div>
                <div className="text-3xl font-extrabold text-amber-700"><Counter value={result.monthlySaving} format={fmtR} /></div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <div className="text-sm text-gray-600">System size</div>
                <div className="text-3xl font-extrabold"><Counter value={result.systemKwp} format={fmtKw} /></div>
                <div className="text-xs text-gray-500">~{result.panels} panels{result.batteryKwh ? `, ${result.batteryKwh}kWh battery` : ""}</div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 col-span-2">
                <div className="text-sm text-gray-600">Typical installed cost</div>
                <div className="text-2xl font-bold">{zar(result.costLow)} – {zar(result.costHigh)}</div>
                <div className="text-sm text-gray-600 mt-1">Simple payback roughly {result.paybackLow}–{result.paybackHigh} years</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Indicative only, as of {AS_OF}. Based on average Cape Town sunshine and tariff assumptions. Real savings depend on your usage, roof and tariff. Installers provide firm quotes.
            </p>
            <h3 className="text-lg font-bold mb-3">Get up to 3 free, no-obligation quotes</h3>
            <LeadForm source="calculator" summary={summary} compact />
            <button className="mt-4 text-sm underline text-gray-600" onClick={() => go(0)}>Start over</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
