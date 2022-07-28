/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      'www.logo.wine',
      'links.papareact.com',
      'logodownload.org',
      'image.tmdb.org',
    ],
  },
};
