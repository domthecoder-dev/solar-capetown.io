import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { ResponsibleParty } from "@/components/ui/LegalPage";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy (POPIA)",
  description: "How GoSolarCPT collects, uses, shares and protects your personal information under the Protection of Personal Information Act (POPIA), and your rights.",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what personal information we collect, why, who we share it with and what rights you have under the Protection of Personal Information Act 4 of 2013 (POPIA)."
    >
      <h2 className="!mt-0">1. Who is responsible for your information</h2>
      <p>The responsible party (as defined in POPIA) is:</p>
      <ResponsibleParty />
      <p>Contact the Information Officer for any privacy question or request using the details above or on WhatsApp.</p>

      <h2>2. What we do</h2>
      <p>{LEGAL.tradingName} is a lead-matching service. We help homeowners and businesses in Cape Town get solar quotes by introducing them to up to 3 solar installers. We are not an installer.</p>

      <h2>3. Information we collect</h2>
      <ul>
        <li><strong>You give us:</strong> name, mobile or WhatsApp number, email address, suburb, whether you own, rent or run a business, when you want to install, and your calculator answers (monthly bill range, roof direction, backup preference).</li>
        <li><strong>Collected automatically (only if you accept analytics):</strong> device and browser type, pages viewed, approximate location and how you arrived, through Google Analytics 4. See the <Link href="/cookies/">Cookie Notice</Link>.</li>
        <li><strong>If you message us on WhatsApp:</strong> your number, profile name and what you send.</li>
      </ul>
      <p>You are not required to give us this information, but we cannot match you with installers without it. We do not knowingly collect information about anyone under 18.</p>

      <h2>4. Why we use it, and our legal basis</h2>
      <ul>
        <li><strong>To match you with installers and let them contact you with quotes.</strong> Basis: your consent, given when you tick the box on our forms.</li>
        <li><strong>To reply to you</strong> on WhatsApp, phone or email. Basis: your request and our legitimate interest in responding.</li>
        <li><strong>To measure and improve the site.</strong> Basis: your consent to analytics cookies.</li>
        <li><strong>To keep records and meet legal duties,</strong> including proof of your consent. Basis: legal obligation and legitimate interest.</li>
      </ul>
      <p>We use your information only for these purposes, or for a closely related purpose.</p>

      <h2>5. Who we share it with</h2>
      <ul>
        <li><strong>Up to 3 solar installers</strong> serving your suburb, only after you consent. They receive your name, contact details, suburb, property type, timeline and calculator answers, and may contact you by phone, WhatsApp or email about your quote. They become responsible for the information they hold, and we require them to use it only to give you a quote and to follow POPIA.</li>
        <li><strong>Service providers (operators)</strong> that process information for us: EmailJS (delivers form submissions to our email), Google (analytics), GitHub (website hosting) and Meta Platforms (WhatsApp). They may use it only to provide their service to us.</li>
        <li><strong>Authorities</strong> where the law requires it.</li>
      </ul>
      <p>We do not sell your information to anyone other than by introducing you to installers as described above, and we do not share it with other third parties for their own marketing.</p>

      <h2>6. Sending information outside South Africa</h2>
      <p>Some of our service providers store or process information outside South Africa, including in the United States and the European Union. We use providers that are bound by data-protection obligations, and by submitting a form you consent to this transfer where POPIA requires consent.</p>

      <h2>7. Marketing</h2>
      <p>We do not send you marketing about unrelated products. We contact you about the quote you requested. Installers may only contact you about that quote, and you can tell them or us to stop at any time.</p>

      <h2>8. How long we keep it</h2>
      <p>We keep lead information for up to 24 months after your request, then delete or de-identify it, unless you ask for earlier deletion or the law requires us to keep it longer. Records of consent are kept for as long as we hold the related information. Installers keep information according to their own policies and the law.</p>

      <h2>9. How we protect it</h2>
      <p>We take reasonable technical and organisational measures to prevent loss, damage and unauthorised access, including encrypted connections (HTTPS), limiting access to those who need it, and using reputable providers. No system is perfectly secure.</p>
      <p>If there is a security compromise that puts your information at risk, we will notify the Information Regulator and affected people as POPIA requires, as soon as reasonably possible.</p>

      <h2>10. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>ask whether we hold your information and get a copy;</li>
        <li>ask us to correct or delete information that is inaccurate, outdated, excessive or unlawfully held;</li>
        <li>withdraw your consent at any time (this does not affect processing already done);</li>
        <li>object to processing on reasonable grounds;</li>
        <li>object to direct marketing; and</li>
        <li>complain to the Information Regulator.</li>
      </ul>
      <p>To use these rights, contact the Information Officer. We will respond within a reasonable time and may need to verify your identity first. If you withdraw consent we will stop sharing your details and ask installers we sent them to to stop contacting you and delete them.</p>

      <h2>11. Complaints</h2>
      <p>If you are unhappy with how we handle your information, contact us first so we can try to fix it. You may also complain to the Information Regulator (South Africa) at <a href="https://inforegulator.org.za" rel="noopener noreferrer">inforegulator.org.za</a>.</p>

      <h2>12. Access to information (PAIA)</h2>
      <p>Requests for records under the Promotion of Access to Information Act 2 of 2000 can be sent to the Information Officer.</p>

      <h2>13. Changes to this policy</h2>
      <p>We may update this policy. The date at the top shows the latest version, and we will ask for fresh consent if a change affects how we share your information.</p>
    </LegalPage>
  );
}
