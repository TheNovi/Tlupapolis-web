/* eslint-disable @typescript-eslint/no-var-requires */
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin(),
      new PurgecssPlugin({
        paths: glob
          .sync(`${__dirname}/node_modules/vuetify/**/*.ts`)
          .concat(glob.sync(`${__dirname}/src/**/*`, { nodir: true })),
        safelist: [
          "v-application",
          "v-application--wrap",
          /^v-((?!application).)*$/,
          /^theme--*/,
          /.*-transition/
        ]
      })
    ]
  }
};
