const path = require("path");
const AssetsWebpackPlugin = require("assets-webpack-plugin");

const aliases = require("./aliases.config");

/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  assetsDir: "assets",
  runtimeCompiler: true,
  productionSourceMap: false,
  lintOnSave: false,

  css: {
    sourceMap: process.env.NODE_ENV !== "production",

    loaderOptions: {
      scss: {
        prependData: (loaderContext) => {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);

          if (!/\/theme\//.test(relativePath)) {
            return '@import "@theme";';
          }

          return "";
        },
      },
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias.merge(aliases);

    config.module
      .rule("svg")
      .uses.clear()
      .end()
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");

    config.plugins
      .delete("prefetch")
      .delete("preload")
      .delete("html")
      .delete("copy");

    config.plugin("assets").use(AssetsWebpackPlugin, [
      {
        entrypoints: true,
        useCompilerPath: true,
        prettyPrint: true,
        filename: "entrypoints.json",
      },
    ]);
  },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") {
      config.devtool = "source-map";
    }
  },
};

/** @type {import("webpack-dev-server").Configuration} */
module.exports.devServer = {
  index: "",
  port: 3000,

  proxy: {
    "/*": {
      target: "https://pakservis.loc",
      secure: false,
      changeOrigin: true,
      context: () => true,

      // autoRewrite: true,
      // followRedirects: true,
      // prependPath: true,
    },
  },

  writeToDisk: true,
};
