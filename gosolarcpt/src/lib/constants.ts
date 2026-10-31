// Single source of truth for every dated fact and model assumption on the site.
// Update this file (and AS_OF) when prices, tariffs or rules change.

export const AS_OF = "October 2026";

export const SITE = {
  name: "GoSolarCPT",
  url: "https://gosolarcpt.co.za",
  phoneDisplay: "064 321 2426",
  phoneIntl: "27643212426",
  whatsappText: "Hi! I want a free solar quote for my home in Cape Town",
};

// Indicative installed prices, Cape Town, 2026 (installer guides vary widely).
export const PRICE_RANGES = [
  {
    id: "starter",
    title: "Starter hybrid",
    spec: "3–5kW hybrid inverter, ~5kWh battery, 6–8 panels",
    from: 75_000,
    to: 120_000,
    note: "Covers essentials: lights, fridge, Wi-Fi, TV during an outage.",
  },
  {
    id: "family",
    title: "Family hybrid",
    spec: "5–8kW hybrid inverter, 10–15kWh battery, 10–14 panels",
    from: 120_000,
    to: 220_000,
    note: "Runs most of a household, including cooking, for several hours.",
  },
  {
    id: "large",
    title: "Large home / small business",
    spec: "8–12kW inverter, 15–30kWh battery, 16–24 panels",
    from: 220_000,
    to: 400_000,
    note: "High usage, pools, workshops, multiple heavy appliances.",
  },
] as const;

export const COMPONENT_RANGES = [
  { item: "5kW hybrid inverter (installed)", from: 14_000, to: 35_000 },
  { item: "5kWh lithium battery", from: 22_000, to: 38_000 },
] as const;

// --- Calculator model assumptions (indicative only) ---
export const MODEL = {
  // ASSUMPTION: blended Home User tariff incl. VAT, R/kWh. Verify against the
  // City of Cape Town 2026/27 tariff schedule before launch.
  tariffRPerKwh: 3.6,
  // ASSUMPTION: annual kWh per kWp, north-facing, Cape Town.
  yieldKwhPerKwp: 1600,
  orientationFactor: { north: 1, eastWest: 0.88, unsure: 0.94 },
  // Share of monthly consumption the system is sized to offset.
  offsetTarget: 0.75,
  // Share of generated energy actually used at home (rest exported / lost).
  selfUse: { none: 0.65, essentials: 0.8, wholeHome: 0.85 },
  // Installed cost per kWp of panels+inverter, and per kWh battery (rand).
  costPerKwp: { low: 14_000, high: 22_000 },
  costPerKwhBattery: { low: 4_500, high: 7_500 },
  batteryKwh: { none: 0, essentials: 5, wholeHome: 15 },
  minKwp: 3,
  maxKwp: 15,
  // ASSUMPTION: City 2026/27 residential feed-in, excl. VAT, R/kWh (not used in
  // savings: conservative). Shown in guides only. Confirm on capetown.gov.za.
  feedInRPerKwhExVat: 1.0798,
};

export const FACTS = {
  loadSheddingNote:
    "Eskom has not load shed nationally since 16 May 2025. Localised load reduction and other outages can still occur.",
  taxNote:
    "There is currently no income-tax rebate for rooftop solar on a primary residence. The Section 12B allowance applies to businesses.",
  ssegNote:
    "All solar and battery systems connected to the City of Cape Town grid must be registered and authorised as Small-Scale Embedded Generation (SSEG).",
};

export const zar = (n: number) =>
  "R" + Math.round(n).toLocaleString("en-ZA").replace(/,/g, " ");
