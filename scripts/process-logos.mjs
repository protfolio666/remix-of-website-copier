/**
 * Post-process Tencent (dark matte) + Indian Oil (black canvas → transparent).
 * Does not touch wyzmindz.png or tech-mahindra.png.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logos = path.join(__dirname, "..", "src", "assets", "logos");

function knockDark(data, w, h, ch, maxRgb) {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * ch;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (Math.max(r, g, b) < maxRgb) data[i + 3] = 0;
    }
  }
}

async function processTencent() {
  const file = path.join(logos, "tencent.png");
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const buf = Buffer.from(data);
  knockDark(buf, info.width, info.height, info.channels, 48);
  const out = file + ".tmp";
  await sharp(buf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  fs.renameSync(out, file);
  console.log("tencent.png: removed near-black background");
}

async function processIndianOil() {
  const file = path.join(logos, "indian-oil.png");
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const buf = Buffer.from(data);
  knockDark(buf, info.width, info.height, info.channels, 40);
  const out = file + ".tmp";
  await sharp(buf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  fs.renameSync(out, file);
  console.log("indian-oil.png: removed near-black background");
}

await processTencent();
await processIndianOil();
