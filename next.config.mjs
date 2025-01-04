/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  //basePath: '/website_portfolio',
};

//module.exports = nextConfig;
export default nextConfig;
