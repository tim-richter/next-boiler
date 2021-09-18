const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const i18n = require('./next-i18next.config');

// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  ...i18n,
};

const withVanillaExtract = createVanillaExtractPlugin();
module.exports = withPlugins(
  [withVanillaExtract, withBundleAnalyzer],
  nextConfig,
);
