const stylexPlugin = require('@stylexjs/nextjs-plugin');

/** @types {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = stylexPlugin(nextConfig);
