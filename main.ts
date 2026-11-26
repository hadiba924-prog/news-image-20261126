// Entry program for the make.fun news-image-20261126 bounty.
//
// Contract: copy the pre-built entry.png next to this file into
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output), after verifying it is a
// whole PNG or JPEG of at most 1 MiB and exactly 1024x1024 pixels.
// The copy is byte-for-byte, so two runs write identical bytes and the
// program is deterministic. Node 22, standard library only, no network.
import { copyFileSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const MAX_BYTES = 1048576;
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;

function sha256(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex");
}

function pngDimensions(bytes: Buffer): { width: number; height: number } | null {
  if (bytes.length < 33) return null;
  if (bytes[0] !== 0x89 || bytes[1] !== 0x50 || bytes[2] !== 0x4e || bytes[3] !== 0x47) return null;
  if (bytes.readUInt32BE(12) !== 0x49484452) return null;
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

function jpegDimensions(bytes: Buffer): { width: number; height: number } | null {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff) return null;
  let offset = 2;
  while (offset + 9 < bytes.length) {
    if (bytes[offset] !== 0xff) return null;
    const marker = bytes[offset + 1];
    if (marker === 0xd9 || marker === 0xda) return null;
    const length = bytes.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: bytes.readUInt16BE(offset + 5), width: bytes.readUInt16BE(offset + 7) };
    }
    offset += 2 + length;
  }
  return null;
}

const source = "entry.png";
if (!existsSync(source)) {
  throw new Error(`missing ${source} next to main.ts`);
}
const bytes = readFileSync(source);
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the ${MAX_BYTES} byte limit`);
}
const dims = pngDimensions(bytes) ?? jpegDimensions(bytes);
if (dims === null) {
  throw new Error("entry.png is neither a whole PNG nor a whole JPEG");
}
if (dims.width !== EXPECTED_WIDTH || dims.height !== EXPECTED_HEIGHT) {
  throw new Error(`entry.png is ${dims.width}x${dims.height}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.png");
copyFileSync(source, outPath);

const written = readFileSync(outPath);
if (written.length !== bytes.length || sha256(written) !== sha256(bytes)) {
  throw new Error("copied entry.png does not match the source byte for byte");
}
console.log(`wrote ${outPath} (${written.length} bytes, ${dims.width}x${dims.height}, sha256 ${sha256(written)})`);
