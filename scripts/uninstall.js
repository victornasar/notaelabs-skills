#!/usr/bin/env node
/** Remove notaelabs-skills symlinks from coding-agent skill directories. */
const fs = require("fs");
const path = require("path");
const os = require("os");

const ROOT = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(ROOT, "skills");
const HOME = os.homedir();

const TARGET_ROOTS = [
  path.join(HOME, ".claude", "skills"),
  path.join(HOME, ".cursor", "skills"),
  path.join(HOME, ".agents", "skills"),
  path.join(HOME, ".codex", "skills"),
];

function listSkills() {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !name.startsWith("."))
    .filter((name) => fs.existsSync(path.join(SKILLS_DIR, name, "SKILL.md")));
}

for (const skillName of listSkills()) {
  for (const root of TARGET_ROOTS) {
    const dest = path.join(root, skillName);
    try {
      fs.lstatSync(dest);
      fs.rmSync(dest, { recursive: true, force: true });
      console.log(`Removed ${dest}`);
    } catch (err) {
      if (err.code !== "ENOENT") console.warn(`Skipped ${dest}: ${err.message}`);
    }
  }
}
