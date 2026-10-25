import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Dockerfile ships only .next/standalone + static assets, not node_modules.
  output: "standalone",
};

export default nextConfig;
