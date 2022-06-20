/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || "https://joshuablevins.net",
    generateRobotsTxt: true,
};

export default config