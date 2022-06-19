/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: process.env.SITE_URL || "https://joshuablevins.net",
  generateRobotsTxt: true,
  reactStrictMode: true,
}

module.exports = nextConfig
