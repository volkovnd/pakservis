const path = require("path");

const resolve = (p) => path.resolve(__dirname, p);

module.exports = {
  "@": resolve("src"),
  "@theme": resolve("src/theme/index.scss"),
  "@assets": resolve("src/assets"),
  "@constants": resolve("src/constants.js"),
  "@directives": resolve("src/directives"),
};
