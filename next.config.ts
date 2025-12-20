/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // This enables static export
  trailingSlash: true,        // GitHub Pages loves this
  images: {
    unoptimized: true         // Required for static export when using next/image
  }
};

export default nextConfig;