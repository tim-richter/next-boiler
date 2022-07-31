const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withSentryConfig } = require('@sentry/nextjs');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const i18n = require('./next-i18next.config');

// @ts-check
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  ...i18n,
};

const configWithPlugins = (_phase, { defaultConfig }) => {
  const plugins = [createVanillaExtractPlugin(), withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...defaultConfig,
    ...nextConfig,
  });
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  silent: true,
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(
  configWithPlugins,
  sentryWebpackPluginOptions,
);
