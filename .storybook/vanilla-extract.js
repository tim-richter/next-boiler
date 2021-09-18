const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpackFinal(baseConfig, options) {
    const { module = {}, plugins = {}} = baseConfig;

    return {
      ...baseConfig,
      plugins: [
        ...plugins,
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin(),
      ],
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
};
