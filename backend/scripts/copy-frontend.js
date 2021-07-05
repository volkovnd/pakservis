const path = require("path");
const fs = require("fs");

const backendPath = path.resolve("../backend");
const frontendPath = path.resolve("../frontend");

const distPath = path.join(frontendPath, "dist");

const readDir = (dir = "") => {
  let context = distPath;

  if (dir) {
    context = path.join(context, dir);
  }

  const files = fs.readdirSync(context);

  files.forEach((file) => {
    if (/\.[\w]+$/i.test(file)) {
      const dest = path.join(backendPath, "public", dir, file);

      fs.copyFileSync(path.join(context, file), dest);
    } else {
      readDir(path.join(dir, file));
    }
  });
};

if (fs.existsSync(distPath)) {
  readDir();
}
