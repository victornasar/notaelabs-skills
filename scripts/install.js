#!/usr/bin/env node
/**
 * Symlink every skill in this repo into coding-agent skill directories.
 * Symlinks keep agents pointed at the repo so edits apply everywhere.
 *
 * Targets:
 *   ~/.claude/skills/<name>   Claude Code
 *   ~/.cursor/skills/<name>   Cursor
 *   ~/.agents/skills/<name>   Codex (current) + other agents
 *   ~/.codex/skills/<name>    Codex (legacy)
 */
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

function removeIfPresent(dest) {
  try {
    fs.lstatSync(dest);
    fs.rmSync(dest, { recursive: true, force: true });
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }
}

function linkSkill(skillName) {
  const src = path.join(SKILLS_DIR, skillName);
  for (const root of TARGET_ROOTS) {
    fs.mkdirSync(root, { recursive: true });
    const dest = path.join(root, skillName);
    try {
      removeIfPresent(dest);
      fs.symlinkSync(src, dest, "dir");
      console.log(`Linked ${skillName} → ${dest}`);
    } catch (err) {
      console.warn(`Skipped ${dest}: ${err.message}`);
    }
  }
}

const skills = listSkills();
if (skills.length === 0) {
  console.error("No skills found (expected skills/*/SKILL.md).");
  process.exit(1);
}

for (const name of skills) linkSkill(name);
console.log(`Done. Installed: ${skills.join(", ")}`);
