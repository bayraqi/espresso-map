import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint during production builds (e.g., Vercel)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during builds (useful for CI/CD)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
