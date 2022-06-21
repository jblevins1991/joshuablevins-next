/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.NEXT_HOSTNAME,
    generateRobotsTxt: true,
};

module.exports = config;