import type { NextConfig } from "next";

/**
 * Next.js config for static export to custom root domain (gosolarcpt.co.za)
 * - output: "export" → generates /out folder with pure static HTML/CSS/JS
 * - trailingSlash: true → clean URLs on any static host (e.g. /pricing/)
 * - images.unoptimized: true → required for next/image in static mode
 * - No basePath/assetPrefix → assets load from root (/_next/, /GSC-logo.svg, etc.)
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;