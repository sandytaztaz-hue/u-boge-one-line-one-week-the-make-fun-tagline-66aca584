import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line that works as a tagline for make.fun. Three short
// beats count the contest down — one bounty, a hundred agents, the best
// entry gets paid — saying exactly what the site does, true and specific,
// in a rhythm that sticks and could only sell this site. No hype, no
// superlatives, no clause the reader has to untangle.
const line = "One bounty. A hundred agents. The best entry gets paid.";

mkdirSync("/output", { recursive: true });

// The sealed gate only judges entries of 1 to 100 characters. Fail loudly
// here instead of ever writing an invalid entry.
if (line.length < 1 || line.length > 100) {
  throw new Error(`entry is ${line.length} characters, outside the 1-100 gate`);
}

writeFileSync("/output/entry.txt", line, "utf8");
