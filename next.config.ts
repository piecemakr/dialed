import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m6abtmz27b.ufs.sh",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
