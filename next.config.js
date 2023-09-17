/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
};

console.log("http://localhost:3000/todo/search");

module.exports = nextConfig;
