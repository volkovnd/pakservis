const path = require("path");

const resolve = (p) => path.resolve(__dirname, p);

const aliases = {
  "@": "src",
  "@theme": "src/theme/index.scss",
  "@assets": "src/assets",
  "@constants": "src/constants.js",
};

for (const alias in aliases) {
  const aliasPath = aliases[alias];

  aliases[alias] = resolve(aliasPath);
}

module.exports = aliases;
