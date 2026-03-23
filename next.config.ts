import type { NextConfig } from "next";

export default {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,

  // i18n config would also work if using module.exports in a JS config,
  // but since this is a TypeScript file using ES modules, keep using export default.
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        // hostname: "localhost",
        hostname: "127.0.0.1",
        port: "5000",
        pathname: "/images/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
};