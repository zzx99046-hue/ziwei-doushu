/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lunar-javascript'],
  output: 'export',
  basePath: '/ziwei-doushu',
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: '/ziwei-doushu' },
};

module.exports = nextConfig;
