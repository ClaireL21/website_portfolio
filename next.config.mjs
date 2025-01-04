/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
      },
    eslint: {
        ignoreDuringBuilds: true,
    },
  //basePath: '/website_portfolio',
};

//module.exports = nextConfig;
export default nextConfig;
