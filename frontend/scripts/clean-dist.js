const fs = require("fs");
const path = require("path");

const rootPath = path.resolve("../frontend");

const distPath = path.join(rootPath, "dist");

if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true });
}
