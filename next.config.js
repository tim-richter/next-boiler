const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withOffline = require('next-offline');
const i18n = require('./next-i18next.config');

// @ts-check
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transformManifest: (manifest) => ['/'].concat(manifest), // add the homepage to the cache

  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  ...i18n,
};

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withPlugins(
  [withOffline, withVanillaExtract, withBundleAnalyzer],
  nextConfig,
);
