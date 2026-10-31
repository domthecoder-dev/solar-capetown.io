import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/ui/LegalPage";
import CookieSettingsLink from "@/components/CookieSettingsLink";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Which cookies and similar technologies GoSolarCPT uses, why, and how to change your choice.",
  alternates: { canonical: "/cookies/" },
};

export default function Cookies() {
  return (
    <LegalPage title="Cookie Notice" intro="We keep cookies to a minimum. Analytics only runs if you accept it.">
      <h2 className="!mt-0">What we use</h2>
      <div className="overflow-x-auto rounded-2xl ring-1 ring-gray-200 bg-white not-prose">
        <table className="w-full text-left text-sm">
          <thead className="bg-teal-900 text-white"><tr><th className="p-3">Name</th><th className="p-3">Provider</th><th className="p-3">Purpose</th><th className="p-3">Needs consent</th></tr></thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="p-3">_ga, _ga_*</td><td className="p-3">Google Analytics 4</td><td className="p-3">Counts visitors and shows which pages and calculator steps are used. Stored for up to 2 years.</td><td className="p-3">Yes</td></tr>
            <tr><td className="p-3">gosolarcpt-consent-v1</td><td className="p-3">This site (local storage)</td><td className="p-3">Remembers your analytics choice so we do not ask again.</td><td className="p-3">No, strictly necessary</td></tr>
          </tbody>
        </table>
      </div>
      <p>We do not use advertising or tracking cookies, and Google Analytics is set to receive no information until you accept. Data collected by Google Analytics is processed by Google, which may be outside South Africa. See the <Link href="/privacy/">Privacy Policy</Link>.</p>

      <h2>Change your choice</h2>
      <p>You can change or withdraw your choice at any time: <span className="font-semibold text-teal-800 underline"><CookieSettingsLink /></span>. You can also delete cookies in your browser settings.</p>
    </LegalPage>
  );
}
