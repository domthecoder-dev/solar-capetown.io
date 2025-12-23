import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // ← This is what generates the /out folder
  trailingSlash: true,        // Clean URLs on any static host
  images: {
    unoptimized: true         // Required for static export with next/image
  },
};

export default nextConfig;