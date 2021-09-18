const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpackFinal(baseConfig, options) {
    const { resolve = {} } = baseConfig;

    return {
      ...baseConfig,
      resolve: {
        ...resolve,
        plugins: [
          ...(resolve.plugins || []),
          new TsconfigPathsPlugin({
            extensions: baseConfig.resolve.extensions
          }),
        ]
      },
    }
  },
};
