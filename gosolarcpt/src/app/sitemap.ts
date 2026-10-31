import type { MetadataRoute } from "next";
import { AREAS } from "@/lib/areas";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/how-it-works", "/solar-cost-cape-town", "/guides", "/contact", "/about", "/privacy", "/terms", "/cookies", ...AREAS.map((a) => `/areas/${a.slug}`)];
  return paths.map((p) => ({ url: `${SITE.url}${p}/`.replace(/([^:])\/\/$/, "$1/"), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
