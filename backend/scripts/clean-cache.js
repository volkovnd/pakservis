const fs = require("fs");
const path = require("path");

const backendPath = path.resolve("../backend");

const cachePath = path.join(backendPath, "public/core/cache");

if (fs.existsSync(cachePath)) {
  fs.rmSync(cachePath, {
    recursive: true,
  });
}
