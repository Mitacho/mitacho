/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
  },
};

module.exports = nextConfig;
