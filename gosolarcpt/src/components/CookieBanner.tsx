"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "gosolarcpt-consent-v1";

type Choice = "granted" | "denied";

function applyConsent(c: Choice) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", { analytics_storage: c });
  }
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(KEY); } catch {}
    if (saved === "granted" || saved === "denied") applyConsent(saved);
    else setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const choose = (c: Choice) => {
    try { localStorage.setItem(KEY, c); } catch {}
    applyConsent(c);
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-gray-200">
      <p className="text-sm text-gray-800">
        We use Google Analytics cookies to see how the site is used so we can improve it. They only run if you accept. See our{" "}
        <Link href="/cookies/" className="underline text-teal-800">Cookie Notice</Link> and{" "}
        <Link href="/privacy/" className="underline text-teal-800">Privacy Policy</Link>.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={() => choose("granted")} className="btn-primary !py-2.5 !px-5 text-sm">Accept analytics</button>
        <button onClick={() => choose("denied")} className="rounded-lg border-2 border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50">Decline</button>
      </div>
    </div>
  );
}
