const path = require("path");

const aliases = {
  "@": "src",
  "@design": "src/design/index.scss",
  "@assets": "src/assets",
  "@constants": "src/constants.js",
};

for (const alias in aliases) {
  const aliasPath = aliases[alias];

  aliases[alias] = path.resolve(__dirname, aliasPath);
}

module.exports = aliases;
