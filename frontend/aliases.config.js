const path = require("path");

const aliases = {
  "@": "src",
  "@theme": "src/theme/index.scss",
};

const resolve = (p) => path.resolve(__dirname, p);

for (const aliasName in aliases) {
  aliases[aliasName] = resolve(aliases[aliasName]);
}

module.exports = aliases;
