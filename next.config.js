/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };

    config.node = {
      fs: "empty",
      net: "empty",
      tls: "empty",
    };

    return config;
  },
};

module.exports = nextConfig;
