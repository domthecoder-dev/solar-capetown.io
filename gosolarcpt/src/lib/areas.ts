export interface Area {
  slug: string;
  name: string;
  suburbs: string[];
  intro: string;
  considerations: { title: string; body: string }[];
}

export const AREAS: Area[] = [
  {
    slug: "southern-suburbs",
    name: "Southern Suburbs",
    suburbs: ["Claremont", "Newlands", "Rondebosch", "Constantia", "Bishopscourt", "Wynberg", "Tokai"],
    intro:
      "Established homes, mature trees and a mix of tile, slate and corrugated roofs make the Southern Suburbs a site-by-site solar job. A good installer starts with a shading and roof-condition check, not a standard package.",
    considerations: [
      { title: "Shading from trees", body: "Mature trees can cut output on part of a roof. Panel placement, optimisers or micro-inverters can limit the loss, so ask installers to show a shading assessment." },
      { title: "Older roofs and wiring", body: "Older homes may need roof repairs or a distribution-board upgrade before solar is added, and a Certificate of Compliance for the installation is required." },
      { title: "Heritage areas", body: "Some properties sit in heritage overlay zones. Check with the City whether panel visibility from the street needs approval." },
    ],
  },
  {
    slug: "northern-suburbs",
    name: "Northern Suburbs",
    suburbs: ["Bellville", "Parow", "Goodwood", "Kraaifontein", "Brackenfell", "Kuils River"],
    intro:
      "Larger, flatter roofs and plenty of north-facing sections often make the Northern Suburbs well suited to solar. Higher household usage means the savings case can be strong.",
    considerations: [
      { title: "Roof space and orientation", body: "North-facing roof planes give the best annual yield in Cape Town. East-west splits produce a little less in total but spread output across the day." },
      { title: "Households with high usage", body: "Pool pumps, geysers and electric cooking raise your bill. A solar geyser or geyser timer can pair well with panels." },
      { title: "Registering with the City", body: "Every system connected to the City grid must be registered as SSEG. Your installer should handle the application." },
    ],
  },
  {
    slug: "atlantic-seaboard",
    name: "Atlantic Seaboard",
    suburbs: ["Sea Point", "Camps Bay", "Bantry Bay", "Clifton", "Green Point", "Fresnaye"],
    intro:
      "Salt air, strong south-easters and apartment buildings shape solar here. Corrosion-rated mounting, wind-rated fixings and body-corporate approval matter as much as the panels.",
    considerations: [
      { title: "Wind and salt", body: "Ask for marine-grade or anodised mounting and wind-load rated installation. Coastal conditions shorten the life of cheap hardware." },
      { title: "Sectional title", body: "In complexes, the body corporate usually must approve rooftop installations, and shared roofs may call for a shared system." },
      { title: "Battery-only options", body: "If roof space is limited, a battery with a hybrid inverter can still cut your bill by shifting usage. It still needs City registration." },
    ],
  },
  {
    slug: "durbanville",
    name: "Durbanville",
    suburbs: ["Durbanville", "Aurora", "Sonstraal", "Uitzicht", "Eversdal"],
    intro:
      "Larger homes and newer builds in Durbanville often have good roof space and modern wiring, which keeps installation straightforward.",
    considerations: [
      { title: "Newer homes", body: "Recent builds usually need less electrical remedial work, which can reduce installation cost." },
      { title: "Estates and HOAs", body: "Many estates require design or HOA approval for panels. Get this before you accept a quote." },
      { title: "Sizing for backup", body: "Decide whether you want essentials-only or whole-home backup first. It is the biggest driver of battery size and price." },
    ],
  },
  {
    slug: "table-view-blouberg",
    name: "Table View & Blouberg",
    suburbs: ["Table View", "Bloubergstrand", "Milnerton", "Sunningdale", "Parklands", "Melkbosstrand"],
    intro:
      "Strong coastal wind and salt exposure are the main design factors. Open roofs with little shading give good solar potential when the installation is built for the conditions.",
    considerations: [
      { title: "Wind-rated installation", body: "Ask how panels are fixed and what wind rating the mounting meets." },
      { title: "Corrosion protection", body: "Choose coastal-rated hardware and check the warranty does not exclude salt-air damage." },
      { title: "Municipal supply area", body: "Most of these areas are supplied by the City of Cape Town, but confirm whether your property is City- or Eskom-supplied, as the registration route differs." },
    ],
  },
  {
    slug: "somerset-west-helderberg",
    name: "Somerset West & Helderberg",
    suburbs: ["Somerset West", "Strand", "Gordon's Bay", "Helderberg", "Sir Lowry's Pass"],
    intro:
      "Wind exposure, estate rules and a mix of older and newer homes shape solar in the Helderberg. Some properties in the wider area are supplied directly by Eskom rather than the City, and the supplier decides the registration process.",
    considerations: [
      { title: "Check your supplier", body: "Check your electricity account to see whether the City of Cape Town or Eskom supplies you. The registration process differs, so confirm it before choosing an installer." },
      { title: "Wind exposure", body: "Gordon's Bay and Strand see strong south-easters, so mounting quality matters." },
      { title: "Estate rules", body: "Estates often require approval before installation." },
    ],
  },
];

export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug);

export const SUBURB_OPTIONS = AREAS.flatMap((a) => a.suburbs).sort();
