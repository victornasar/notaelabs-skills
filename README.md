# notaelabs-skills

Agent skills from Notae Labs. Same `SKILL.md` format works across **Claude Code**, **Cursor**, and **Codex**.

```
notaelabs-skills/
  skills/
    logomark/          # one folder per skill (SKILL.md + optional reference)
    wordmark/
  scripts/             # install / uninstall into agent skill dirs
  package.json
  README.md
```

| Skill | Purpose |
| --- | --- |
| [`logomark`](./skills/logomark/) | Iterative SVG logomark pipeline (4 drafts → select/fix → final) |
| [`wordmark`](./skills/wordmark/) | Brand-dependent SVG wordmark pipeline (posture + customize → critique → surgical refine → lock) |

## Install

From this repo:

```bash
npm run install-skills
```

Symlinks each `skills/<name>` into:

| Agent | Path |
| --- | --- |
| Claude Code | `~/.claude/skills/<name>` |
| Cursor | `~/.cursor/skills/<name>` |
| Codex (current) | `~/.agents/skills/<name>` |
| Codex (legacy) | `~/.codex/skills/<name>` |

Edits in this clone apply to every agent without reinstalling. Restart the agent if a new skill doesn’t show up.

```bash
npm run uninstall-skills
```

## Usage

Invoke by name or natural language triggers in the skill description (e.g. “logomark for …”, “wordmark for …”). Artifacts write to the **project cwd** (`logo-drafts/` / `wordmark-drafts/`, finals beside them), not into this repo.

## License

Private / proprietary unless otherwise noted.
