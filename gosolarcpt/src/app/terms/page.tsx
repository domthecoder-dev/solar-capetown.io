import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { ResponsibleParty } from "@/components/ui/LegalPage";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using the GoSolarCPT website and quote-matching service, including how estimates work and our responsibilities.",
  alternates: { canonical: "/terms/" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" intro="By using this website or requesting quotes you agree to these terms. If you do not agree, please do not use the site.">
      <h2 className="!mt-0">1. About us</h2>
      <ResponsibleParty />

      <h2>2. What the service is</h2>
      <p>{LEGAL.tradingName} is a free quote-matching service. With your consent, we introduce you to up to 3 independent solar installers who serve your area. We are not an installer, contractor, electrician or financial adviser. Installers are independent businesses and are not our employees or agents.</p>

      <h2>3. Your agreement is with the installer</h2>
      <p>Any contract for the supply or installation of a solar system is solely between you and the installer you choose. We are not a party to it and we do not guarantee the quality, price, timing, warranty or legality of any installer's work or products. Check each installer's qualifications, insurance, references, Certificate of Compliance process and City of Cape Town registration process before you commit. Do not pay deposits you are uncomfortable with.</p>

      <h2>4. Estimates and information are indicative only</h2>
      <p>The calculator, price ranges, savings, payback periods and guides are general estimates based on assumptions and published sources, dated where shown. They are not quotes, offers, financial, tax, legal or engineering advice. Actual cost and savings depend on your usage, tariff, roof, equipment and installer. Tariffs, rules and incentives change, so confirm important points with the City of Cape Town, SARS or a qualified professional.</p>

      <h2>5. Using the site</h2>
      <p>You agree to give true and complete information, be at least 18 years old, and not to submit someone else's details without their permission. You also agree not to misuse the site, including by sending spam, attempting to break or overload it, scraping it, or using automated tools to submit forms.</p>

      <h2>6. Your information</h2>
      <p>How we handle personal information is explained in the <Link href="/privacy/">Privacy Policy</Link> and <Link href="/cookies/">Cookie Notice</Link>, which form part of these terms.</p>

      <h2>7. Intellectual property</h2>
      <p>The site's content, design and logo belong to {LEGAL.tradingName} or its licensors. You may view and print pages for personal use but may not copy or republish them commercially without written permission.</p>

      <h2>8. Third-party links</h2>
      <p>Links to other sites are for convenience. We do not control them and are not responsible for their content or practices.</p>

      <h2>9. Availability</h2>
      <p>We try to keep the site available and accurate but do not promise it will be uninterrupted, error-free or always up to date.</p>

      <h2>10. Limitation of liability</h2>
      <p>To the extent the law allows, we are not liable for any loss or damage (including lost savings, indirect or consequential loss) arising from your use of the site, your reliance on estimates, or dealings with any installer. Nothing in these terms excludes liability that cannot lawfully be excluded, including under the Consumer Protection Act 68 of 2008, or for our gross negligence or intentional misconduct.</p>

      <h2>11. Changes</h2>
      <p>We may update these terms and the date above will change. Continued use after an update means you accept it.</p>

      <h2>12. Law and disputes</h2>
      <p>These terms are governed by the laws of the Republic of South Africa. Disputes fall under the jurisdiction of the South African courts, and you may also approach the National Consumer Commission or another competent forum where the Consumer Protection Act applies.</p>

      <h2>13. Contact</h2>
      <p>Questions about these terms: use the contact details in section 1, or WhatsApp {LEGAL.whatsapp}.</p>
    </LegalPage>
  );
}
