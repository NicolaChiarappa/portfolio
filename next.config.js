/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["panel.nicolach.com", "placehold.co"],
  },
};

module.exports = nextConfig;
