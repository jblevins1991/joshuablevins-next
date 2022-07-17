/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['cdn.sanity.io']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [{
                removeViewBox: false
              }]
            },
            titleProp: true
          }
        }
      ]
    });

    return config;
  },
  env: {
    NEXT_HOSTNAME: process.env.NEXT_HOSTNAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION,
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
