/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  runtime: 'experimental-edge',
  images: {
    domains: ['www.linkpicture.com'],
  },
};

module.exports = nextConfig;
