import type { ReactNode } from "react";

// Shared hero for inner pages: same teal world as the home page, with a quiet sun-arc.
export default function PageHero({ title, lede, children }: { title: string; lede: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white">
      <svg aria-hidden="true" viewBox="0 0 400 220" className="absolute -right-16 -bottom-6 w-[34rem] max-w-none opacity-30 hidden md:block">
        <path d="M 20 210 A 180 170 0 0 1 380 210" fill="none" stroke="#fde68a" strokeWidth="1.5" strokeDasharray="3 7" />
        <path d="M 70 210 A 130 120 0 0 1 330 210" fill="none" stroke="#fde68a" strokeWidth="1.5" strokeDasharray="3 7" />
        <circle cx="270" cy="62" r="22" fill="#fbbf24" />
      </svg>
      <div className="wrap relative py-14 md:py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl text-balance">{title}</h1>
        <p className="mt-4 text-lg md:text-xl text-teal-50 max-w-2xl">{lede}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
