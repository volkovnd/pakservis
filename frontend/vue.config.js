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

    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    config.plugins.delete("html");
    config.plugins.delete("copy");

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
  port: 3000,

  proxy: {
    "/*": {
      target: "https://pakservis.loc",
      secure: false,
      changeOrigin: true,
      context: () => true,

      autoRewrite: true,
      followRedirects: true,
      prependPath: true,
    },
  },

  writeToDisk: true,
};
