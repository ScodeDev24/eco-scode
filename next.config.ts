import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Enforces React's strict mode in development
  swcMinify: true,        // Uses the faster SWC compiler for minification
  turbo: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
};

export default nextConfig;
