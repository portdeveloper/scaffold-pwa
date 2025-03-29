import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants.js";
import type { NextConfig } from "next";

/** @type {(phase: string) => Promise<NextConfig>} */
const nextJsConfig = async (phase: string): Promise<NextConfig> => {
  /** @type {NextConfig} */
  const nextConfig: NextConfig = {
    reactStrictMode: true,
    devIndicators: false,
    typescript: {
      ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
    },
    eslint: {
      ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
    },
    webpack: config => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      config.externals.push("pino-pretty", "lokijs", "encoding");
      return config;
    },
  };

  // Apply IPFS-specific settings if needed
  if (process.env.NEXT_PUBLIC_IPFS_BUILD === "true") {
    nextConfig.output = "export";
    nextConfig.trailingSlash = true;
    nextConfig.images = {
      unoptimized: true,
    };
  }

  // Apply Serwist service worker wrapper only in dev or production builds
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withSerwist = (await import("@serwist/next")).default({
      swSrc: "app/sw.ts",
      swDest: "public/sw.js",
    });
    return withSerwist(nextConfig);
  }

  return nextConfig;
};

export default nextJsConfig;
