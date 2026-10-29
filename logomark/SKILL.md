---
name: logomark
description: >-
  Design SVG logomarks through an iterative draft → select/fix → finalize
  pipeline. Use when the user wants a logo, logomark, brand mark, symbol, or
  favicon mark — not wordmarks or lockups.
---

Design a **logomark** (standalone symbol only — never a wordmark, never symbol+name). Work it as a **pipeline of rounds**. Each round ends by stopping for the user. Do not invent the next round until they answer.

If the user asks for a wordmark or lockup, refuse inside this skill: finish or pause the mark first; do not expand scope under `logomark`.

Default craft: premium, minimal, geometric, flat vector, black/white primary, strong silhouette, intentional negative space, legible at 16×16. No gradients, glows, 3D, textures, or image-gen. Hand-author SVG. Follow the brief when it overrides the default taste; keep the pipeline.

Write all artifacts under the **current workspace cwd**: `logo-drafts/`, `logo-final/`. Never into the skills repo.

For the avoid list, board HTML, and SVG skeleton, see [reference.md](reference.md).

### Round 0 — intake

**Blocker gate.** Ask only what would change the four directions if wrong. One intake round max, then draft. Further clarification happens via restart / select+fix after marks exist. Finding facts you can look up is your job; brand decisions are the user's.

**Hard blockers** — need these before Round 1: (a) name/subject, (b) what they do or category, (c) essence in a few words. Hard avoids/competitors only if the user stated any; if none stated, use the default avoid list in [reference.md](reference.md) and do not invent avoids.

**Optional frontier** — primary surface, construction, name-root, anything fixed. When (a)–(c) already support four directions, apply optional defaults **silently** and go to Round 1. When the brief is thin, conflicting, or unsure, ask the open optional Qs in the same intake round.

When Round 0 fires, use this format (word Qs so "yes" accepts the ➡️):

```
❓ **Q1** - **<title>**: <body>

➡️ <recommended answer>
```

Optional ➡️ defaults when those Qs fire:

- **Primary surface** → Optimize for app icon + favicon (16–32px), then scale up.
- **Construction** → Either pure abstract or monogram-derived — whichever yields the stronger mark.
- **Name-root** → Honor etymology/meaning in geometry only if the name clearly carries it; otherwise ignore.
- **Anything fixed?** → Nothing fixed; fresh mark.

After Round 0 (or on skip), write `logo-drafts/BRIEF.md` — settled answers + defaults assumed, one page max. Update it if a restart changes the brief.

### Round 1+ — drafts

Invent **four distinct directions** (unless the user explicitly overrides the count for that round) — different structure, not recolors or nudges. Write:

- `logo-drafts/round-N/NN-slug.svg` for each mark
- `logo-drafts/round-N/board.html` — large on white, large on black, 32×32, 16×16, name + one-sentence rationale per direction

Then stop. Format the close like so:

```
🖼 **Round N** — four logomarks in `logo-drafts/round-N/`

1. **<name>** — <one-sentence rationale>
2. **<name>** — <one-sentence rationale>
3. **<name>** — <one-sentence rationale>
4. **<name>** — <one-sentence rationale>

➡️ Restart (new brief notes), select N (+ fix notes), or finalize N.
```

### Branch on their answer

- **Restart** — bump the round, four new directions. Prior rounds stay on disk as reference unless they say discard.
- **Select + fix** — revise only the chosen direction(s); save in the next round folder; re-emit a board for the active set; stop with the same close format (list only what is still in play).
- **Finalize N** — copy the chosen mark to `logo-final/mark.svg` (black on transparent) and `logo-final/mark-on-dark.svg` if needed. No wordmark or lockup. Confirm 16×16 still reads. Pipeline done.

Word the close so a short reply ("2, sharper void at small size" / "restart, more industrial" / "finalize 3") is enough to continue.
