const fs = require("fs");
const path = require("path");

const rootPath = path.resolve("../frontend");

const distPath = path.resolve(rootPath, "dist");

if (fs.existsSync(distPath)) {
  fs.readdirSync(distPath).forEach((f) => {
    if (/\.hot-update\./i.test(f)) {
      fs.rmSync(path.join(distPath, f));
    }
  });
}
