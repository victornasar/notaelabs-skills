---
name: wordmark
description: >-
  Design SVG wordmarks through a brand-dependent draft → critique → rebuild →
  surgical refine → lock pipeline. Use when the user wants a wordmark, logotype,
  brand name lettering, or type lockup — not standalone symbols (use logomark).
---

Design a **wordmark** for **any brand** (custom lettering for the name — not a standalone symbol). Work it as a **pipeline of rounds**. Each round ends by stopping for the user. Do not invent the next round until they answer.

If the user asks only for a symbol/logomark/favicon mark, point them to `logomark`. Wordmarks that must work as a 16px favicon usually need a separate monogram or symbol — do not force the full name into a tab icon.

**Dependency:** typography posture depends on brand category + personality. Do not invent directions until Round 0 has those (or the user already stated them clearly).

Default craft: intentional over merely attractive; excellent typography first; restrained ownability (1–2 letter edits, not decoration); optical kerning; monochrome primary; clean SVG paths. No gradients, glows, 3D, shadows, or image-gen for the deliverable. Prefer a named base face → convert to paths → customize; ban shipping unmodified font outlines as “custom.” Hand-author final SVG. Follow the brief when it overrides; keep the pipeline.

Write artifacts under the **current workspace cwd**: `wordmark-drafts/`, `wordmark-final/`. Never into the skills repo.

Rubric, SVG checklist, board template, and process notes: [reference.md](reference.md).

### Round 0 — intake

**Blocker gate.** One intake round max, then draft. Ask only what would change the directions if wrong.

**Hard blockers** before Round 1:

- (a) primary string to letter
- (b) secondary string if any (`Labs`, descriptor) — or none
- (c) **brand category** (e.g. SaaS / research-infra / luxury / personal / traditional / other)
- (d) personality in a few words (technical, premium, playful, editorial, traditional, authoritative, …)
- (e) locked symbol path if any (`logo-final/mark.svg`, user path, or none)

**Optional frontier** — casing, accent allowed?, primary surfaces, anything fixed. When (a)–(e) already support three directions, apply optional defaults **silently** and go to Round 1.

When Round 0 fires:

```
❓ **Q1** - **<title>**: <body>

➡️ <recommended answer>
```

Optional ➡️ defaults when those Qs fire:

- **Secondary word** → Lighter weight + ~70% scale so its cap height meets primary x-height; never same weight as the primary.
- **Accent** → None by default. At most one restrained accent if the brief demands it. Must still read in pure B/W.
- **Casing** → Match the brief; for modern software, prefer the casing the product already uses in UI.
- **Locked symbol?** → If present, boards include horizontal + stacked lockups; shared geometry with the mark must be literal when you customize letters. If none, wordmark standalone only.
- **Anything fixed?** → Nothing fixed; fresh wordmark.

After Round 0, write `wordmark-drafts/BRIEF.md` — settled answers + defaults assumed, one page max.

### Round 1+ — drafts

**Do not ship the soft first draft.** Equal-stroke “friendly geometric,” lazy monoline, or an unmodified popular font outlined as SVG is the failure mode — reject it and rebuild from construction / a deliberate type posture.

Invent **three distinct directions** (unless the user overrides the count) — different **typography posture + customization bet** for *this* brand category, not recolors, tracking nudges, or a fixed global triad:

1. Posture A + one clear customization thesis  
2. Posture B + a different thesis  
3. Posture C + a different thesis  

Each customization = **1–2** letterforms, terminals, ligatures, or proportions that increase recognition — never decoration for its own sake.

Write:

- `wordmark-drafts/round-N/NN-slug.svg` (standalone, black fills, text as paths)
- `wordmark-drafts/round-N/board.html` — black on white, white on black, **16 / 24 / 32 / 48** px height previews, name + one-sentence rationale. If a locked symbol exists, add horizontal + stacked lockups.
- Short construction / type notes in the board or `NOTES.md` (base face or construction model, stem strategy, pair kerning approach)

Grade each direction against the rubric in [reference.md](reference.md) before you stop. Prefer opening the board (or screenshots) over claiming it “looks fine.”

Then stop:

```
🖼 **Round N** — three wordmarks in `wordmark-drafts/round-N/`

1. **<name>** — <posture + customization bet in one sentence>
2. **<name>** — <...>
3. **<name>** — <...>

➡️ Restart (new brief notes), select N (+ fix notes), or finalize N.
```

### Branch on their answer

- **Restart** — bump the round, three new directions. Prior rounds stay on disk unless they say discard.
- **Select + fix** — **surgical only.** Name 1–3 defects in craft language; change only those. Save in the next round folder; re-emit the board; stop with the same close format (list only what is still in play).
- **Finalize N** — copy to `wordmark-final/wordmark.svg` (and on-dark if needed), plus lockups if a symbol was in play. Run the SVG checklist. Add **navbar** preview + **one** denser context (card or social) in `wordmark-final/board.html`. Confirm size ladder still reads. Pipeline done.

### Process moves (from the critique template — any brand)

1. Don’t ship the soft / generic first draft.  
2. Show structurally distinct directions, then **stop** for a taste call.  
3. Rank and reject in craft language (soft, competing secondary, feature announces itself, tracking loose, chosen-font, etc.).  
4. Rebuild from posture and construction — not tiny nudges on a failed draft.  
5. Surgical passes: 1–3 named fixes; keep grid, weight relationship, and kerning rules unless reopened.  
6. Secondary hierarchy when a descriptor exists (lighter, not just smaller).  
7. If a locked mark exists, shared DNA must become **literal shared geometry**, not a vague “echo.”  
8. Lock when craft is intentional and at parity with the rest of the system — not when every critique is exhausted.

Word the close so a short reply ("2, tighten o–n / softer custom terminal" / "restart, more editorial" / "finalize 2") is enough to continue.
