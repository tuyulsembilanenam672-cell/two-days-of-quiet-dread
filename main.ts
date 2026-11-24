// Two Days of Quiet Dread — a code review comment that approves a pull
// request while carrying quiet existential dread. Writes one line to
// /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "LGTM. I read every line. I understood half of them. The other half now owns the roadmap.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`line is ${codePoints} code points, must be 1-140`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
