import Link from "next/link";
import { AREAS } from "@/lib/areas";
import { SITE } from "@/lib/constants";
import { LEGAL } from "@/lib/legal";
import CookieSettingsLink from "./CookieSettingsLink";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="wrap grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="text-white font-bold text-lg mb-2">{SITE.name}</p>
          <p>Free solar quote matching for Cape Town homes and businesses. We are a lead-matching service, not an installer. Installers pay us for introductions.</p>
        </div>
        <nav aria-label="Areas">
          <p className="text-white font-semibold mb-2">Areas</p>
          <ul className="space-y-1">
            {AREAS.map((a) => (
              <li key={a.slug}><Link href={`/areas/${a.slug}/`} className="hover:text-white">{a.name}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className="text-white font-semibold mb-2">Learn &amp; legal</p>
          <ul className="space-y-1">
            <li><Link href="/solar-cost-cape-town/" className="hover:text-white">Solar cost in Cape Town</Link></li>
            <li><Link href="/guides/" className="hover:text-white">Guides</Link></li>
            <li><Link href="/about/" className="hover:text-white">About us</Link></li>
            <li><Link href="/privacy/" className="hover:text-white">Privacy policy</Link></li>
            <li><Link href="/terms/" className="hover:text-white">Terms of use</Link></li>
            <li><Link href="/cookies/" className="hover:text-white">Cookie notice</Link></li>
            <li><CookieSettingsLink /></li>
          </ul>
        </nav>
      </div>
      <p className="wrap mt-8 text-xs text-gray-500">© {new Date().getFullYear()} {LEGAL.legalName || SITE.name}. Powered by DE Innovative Solutions. Prices and savings are indicative and not a quote.</p>
    </footer>
  );
}
