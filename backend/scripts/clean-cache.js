const fs = require("fs");
const path = require("path");

const cachePath = path.resolve("../backend/public/core/cache");

if (fs.existsSync(cachePath)) {
  fs.rmSync(cachePath, { recursive: true });
}
