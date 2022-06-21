/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    NEXT_HOSTNAME: process.env.NEXT_HOSTNAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
