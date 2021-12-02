const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
  ],

  webpackFinal: async config => {
    // Remove the existing css rule
    config.module.rules = config.module.rules.filter(
      f => f.test?.toString() !== '/\\.css$/'
    );

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: true, // Enable modules to help you using className
        }
      }],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
  
};
