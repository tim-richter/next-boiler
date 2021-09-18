const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    path.resolve('./.storybook/vanilla-extract'),
    path.resolve('./.storybook/ts-paths'),
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-a11y"
  ],
};
