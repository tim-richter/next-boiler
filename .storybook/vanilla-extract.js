const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  managerWebpack: async (baseConfig, options) => {
    return baseConfig;
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
          ...(module.rules && module.rules.filter(rule => !rule?.test?.test('test.css')) || []),
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ]
      }
    }
  },
  babel: async (config, options) => {
    return config;
  },
};
