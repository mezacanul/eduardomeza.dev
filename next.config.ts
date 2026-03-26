import type { NextConfig } from "next";
const remoteHost = new URL(
  process.env.NEXT_PUBLIC_CMS_URL as string
).hostname;
// console.log("remoteHost", remoteHost);

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
        hostname: "localhost",
        port: "5000",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: remoteHost,
        pathname: "/images/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
};
