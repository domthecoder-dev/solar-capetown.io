// Legal identity used by Privacy, Terms and Cookies pages. Fill every TODO before launch:
// POPIA requires the responsible party's name/address and an Information Officer contact,
// and the Electronic Communications and Transactions Act (ECTA s43) requires supplier details on a commercial site.
export const LEGAL = {
  tradingName: "GoSolarCPT",
  // TODO(owner): registered company or sole-proprietor name, e.g. "GoSolarCPT (Pty) Ltd"
  legalName: "Dominic E.",
  // TODO(owner): CIPC registration number (leave empty for a sole proprietor)
  registrationNumber: "",
  // TODO(owner): physical address (needed for ECTA and POPIA notices)
  address: "",
  // TODO(owner): a monitored email address for privacy requests
  privacyEmail: "info@deinnovativesolutions.com",
  // TODO(owner): name of the Information Officer (the owner or director by default)
  informationOfficer: "Dominic E.",
  whatsapp: "064 321 2426",
  lastUpdated: "31 October 2026",
  // Bump when consent wording changes; recorded with each lead.
  consentVersion: "2026-10-31-v1",
};

export const CONSENT_TEXT =
  "I agree that GoSolarCPT may share my name, phone number, email address, suburb and quote preferences with up to 3 solar installers so they can contact me about a quote.";

export const legalMissing = (): string[] =>
  (["legalName", "address", "privacyEmail", "informationOfficer"] as const).filter((k) => !LEGAL[k]);
