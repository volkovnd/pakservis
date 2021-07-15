const path = require("path");

/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  assetsDir: "assets",
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV !== "production",
    loaderOptions: {
      scss: {
        prependData: (loaderContext) => {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);

          if (!/\/design\//.test(relativePath)) {
            return '@import "@design";';
          }
          return "";
        },
      },
    },
  },

  chainWebpack: (config) => {
    config.plugins.delete("html");
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    config.plugins.delete("copy");

    config.resolve.alias.merge(require("./aliases.config"));

    config.module
      .rule("svg")
      .uses.clear()
      .end()
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");

    config.plugin("assets").use(require.resolve("assets-webpack-plugin"), [
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
      context: () => true,
      secure: false,
      changeOrigin: true,
      autoRewrite: true,
      followRedirects: true,
      prependPath: true,
    },
  },
  writeToDisk: true,
};
