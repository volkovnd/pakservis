const path = require("path");

const resolve = (p) => path.resolve(__dirname, p);

module.exports = {
  "@": resolve("src"),
  "@theme": resolve("src/theme/index.scss"),
};
