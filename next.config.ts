import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/electric-purple.html",
      },
    ];
  },
};

export default nextConfig;
