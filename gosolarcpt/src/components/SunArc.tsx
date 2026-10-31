"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Orientation } from "@/lib/solarModel";

// Stylised sun path over a roof. Time slider moves the sun along an arc;
// the roof glows according to how directly the sun hits the chosen facing.
export default function SunArc({ orientation, kwp }: { orientation: Orientation; kwp: number }) {
  const reduce = useReducedMotion();
  const [t, setT] = useState(0.5); // 0 = sunrise, 1 = sunset

  const cx = 200, cy = 190, r = 150;
  const angle = Math.PI * (1 - t);
  const sx = cx + r * Math.cos(angle);
  const sy = cy - r * Math.sin(angle) * 0.9;

  // Northern-hemisphere: north-facing is strongest at midday; E/W peaks morning/afternoon.
  const noon = Math.sin(Math.PI * t);
  const intensity =
    orientation === "north" ? noon
    : orientation === "eastWest" ? 0.55 + 0.35 * Math.abs(Math.cos(Math.PI * t)) * 0.8 + 0.1 * noon
    : 0.5 + 0.4 * noon;
  const pct = Math.round(Math.max(0, Math.min(1, intensity)) * 100);
  const hour = Math.round(6 + t * 12);
  const panelCount = Math.min(10, Math.max(4, Math.round(kwp)));

  return (
    <div className="w-full">
      <svg viewBox="0 0 400 230" className="w-full h-auto" role="img"
        aria-label={`Sun at ${hour}:00 over a roof with ${panelCount} solar panels, about ${pct}% of peak output`}>
        <defs>
          <radialGradient id="sunGlow"><stop offset="0" stopColor="#fde68a" /><stop offset="1" stopColor="#f59e0b" stopOpacity="0" /></radialGradient>
        </defs>
        <path d={`M ${cx - r} ${cy} A ${r} ${r * 0.9} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="rgba(255,255,255,.35)" strokeDasharray="4 6" />
        <motion.g animate={{ x: sx, y: sy }} transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 20 }}>
          <circle r="34" fill="url(#sunGlow)" />
          <circle r="14" fill="#fbbf24" />
        </motion.g>
        <rect x="0" y={cy} width="400" height="40" fill="#0f3d3a" />
        {/* house */}
        <rect x="130" y="150" width="140" height="40" fill="#e5e7eb" />
        <polygon points="115,150 200,100 285,150" fill="#374151" />
        {Array.from({ length: panelCount }).map((_, i) => {
          const col = i % 5, row = Math.floor(i / 5);
          return (
            <polygon key={i}
              points={`${150 + col * 20},${140 - row * 14} ${168 + col * 20},${140 - row * 14} ${166 + col * 20},${130 - row * 14} ${152 + col * 20},${130 - row * 14}`}
              fill="#1e3a8a" stroke="#93c5fd" strokeWidth="0.8" opacity={0.6 + 0.4 * intensity} />
          );
        })}
      </svg>
      <div className="flex items-center gap-3 px-2">
        <span className="text-white text-sm w-12">{hour}:00</span>
        <input type="range" min={0} max={1} step={0.01} value={t}
          onChange={(e) => setT(Number(e.target.value))}
          className="flex-1 accent-amber-400" aria-label="Time of day" />
        <span className="text-white text-sm w-20 text-right">{pct}% output</span>
      </div>
    </div>
  );
}
