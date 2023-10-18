/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    APP_ENV: process.env.APP_ENV,
    ...require(`./src/configs/${process.env.APP_ENV || "local"}.json`),
    APP_VERSION: process.env.npm_package_version,
    APP_STARTUP_TIME: new Date(),
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value: `default-src 'self' data: 'unsafe-inline' 'unsafe-eval'`,
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), camera=(self)",
          },
        ],
      },
    ];
  },
};

console.log("-----------------NEXT CONFIG-----------------------------------");
console.log(nextConfig);
console.log("---------------------------------------------------------------");
if (process.env.APP_ENV === "local") {
  console.log("Developers go to http://localhost:3000/todo/search");
  console.log(
    "---------------------------------------------------------------",
  );
}

module.exports = nextConfig;
