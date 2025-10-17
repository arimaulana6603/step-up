/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: "https://stepup.lifetech.co.id/",
  experimental: {
    forceStatic: true,
  },
};

export default nextConfig;
