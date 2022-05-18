const withPwa = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
}

module.exports = withPwa({
  ...nextConfig,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    runtimeCaching,
  },
})
