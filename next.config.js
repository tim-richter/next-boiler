const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const i18n = require('./next-i18next.config');

// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  ...i18n,
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
