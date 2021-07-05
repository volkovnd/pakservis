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

          if (!/\/design\//.test(relativePath)) {
            return '@import "@theme";';
          }

          return "";
        },
      },
    },
  },

  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    config.plugins.delete("html");
    config.plugins.delete("copy");

    config.resolve.alias.merge(aliases);

    config.plugin("entrypoints").use(require.resolve("assets-webpack-plugin"), [
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
  proxy: {
    "/*": {
      target: "https://pakservis.loc",
      secure: false,
      changeOrigin: true,
      autoRewrite: true,
    },
  },

  writeToDisk: true,
};
