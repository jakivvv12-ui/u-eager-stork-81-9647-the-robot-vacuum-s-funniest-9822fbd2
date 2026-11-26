import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I didn't get stuck; I was charging my courage under the couch after the sock ambushed me.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, `${entry}\n`);
