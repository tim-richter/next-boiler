const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  managerWebpack: async (config, options) => {
    // Update config here
    return config;
  },
  managerBabel: async (config, options) => {
    // Update config here
    return config;
  },
  webpackFinal(baseConfig, options) {
    const { module = {}, plugins = {}, resolve = {}} = baseConfig;

    return {
      ...baseConfig,
      plugins: [
        ...plugins,
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin(),
      ],
      resolve: {
        ...resolve,
        plugins: [
          ...(resolve.plugins || []),
          new TsconfigPathsPlugin({
            extensions: baseConfig.resolve.extensions
          }),
        ]
      },
      module: {
        ...module,
        rules: [
          ...(module.rules || []),
          {
            test: /\.css$/i,
            sideEffects: true,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          }
        ]
      }
    }
  },
  babel: async (config, options) => {
    return config;
  },
};
