import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun news-image-20261126: copy the dense front page
// (entry.png, drawn for Thursday 26 November 2026) into the output
// directory, verifying it first. Node 22, standard library only.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const target = join(outDir, "entry.png");

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

if (!existsSync(source)) {
  fail("entry.png is missing from the repository");
}
const bytes = readFileSync(source);
if (bytes.length > 1048576) {
  fail(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
const pngMagic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
for (let i = 0; i < pngMagic.length; i++) {
  if (bytes[i] !== pngMagic[i]) {
    fail("entry.png is not a PNG file");
  }
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  fail(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
const sha = createHash("sha256").update(bytes).digest("hex");
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const copied = readFileSync(target);
const copiedSha = createHash("sha256").update(copied).digest("hex");
if (copiedSha !== sha) {
  fail("copied entry.png does not match the source hash");
}
console.log(`entry.png: ${width}x${height}, ${bytes.length} bytes, sha256 ${sha}`);
