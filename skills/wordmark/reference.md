# Wordmark — reference

Load for the craft rubric, SVG checklist, board/SVG templates, or process notes. This skill is for **any** wordmark — not a single brand.

## What matters most (ranked)

| Priority | Focus | Why |
| --- | --- | --- |
| 1 | Typography | Establishes the brand's personality |
| 2 | Kerning and proportions | Makes the design feel professional |
| 3 | Distinctiveness | Helps people recognize and remember it |
| 4 | Legibility | Keeps it usable at different sizes |
| 5 | Simplicity | Avoids unnecessary visual noise |
| 6 | SVG precision | Ensures clean, reliable rendering |
| 7 | Effects and decoration | Usually optional, rarely the foundation |

**Principle:** A wordmark should look intentional, not merely attractive. Every letterform, spacing decision, and proportion should reinforce the same brand personality.

For modern software brands, default to excellent typography, restrained customization, carefully adjusted kerning, and monochrome. Add flourishes only when they make the wordmark **more recognizable**.

## The 8 focus areas

### 1. Typography and personality

The type establishes character before someone reads the name. Decide whether the brand should feel technical, premium, playful, editorial, traditional, or authoritative — then choose posture accordingly. **Brand category changes the advice** (SaaS ≠ luxury ≠ personal ≠ traditional).

### 2. Distinctiveness

Avoid a wordmark that looks like text typed in a popular font. Customize one or two letterforms, terminals, ligatures, or proportions to make it ownable. Do not modify letters just for decoration.

### 3. Kerning and spacing

Adjust space between **individual letter pairs**, not only overall tracking. Gaps should look optically balanced even when mathematical widths differ.

### 4. Proportions and rhythm

Check wide vs narrow letters, round vs straight shapes, ascenders, descenders, and overall word width. Letters must feel like one visual system.

### 5. Legibility at small sizes

Test at **16, 24, 32, and 48** px height. Thin strokes, tight counters, and tiny custom details may disappear. If it must work as a favicon, prefer a separate monogram/symbol (`logomark`) over crushing the full word.

### 6. Contrast and versatility

Must work in pure black and white, on light and dark backgrounds, without gradients or shadows. Do not depend on effects to stay recognizable.

### 7. SVG quality

Clean vector paths, consistent curves, precise alignment, tight viewBox. Remove unnecessary metadata and transforms where practical. Convert text to paths when the final face cannot be assumed installed.

### 8. Real-world context

Preview in a website navbar, browser tab (via separate mark if needed), business card, app UI, and social profile. A beautiful artboard logo can fail in product.

## Avoid

- Soft monoline / “friendly SaaS geometric” as the default first draft
- Unmodified popular font outlines shipped as the final custom mark
- Gradients, glows, 3D, shadows, embedded rasters, filters for identity
- Designs that need color or effects to read
- Secondary word at the same weight as the primary
- Custom details that dominate at display size (“feature” instead of recognition)
- Lookalike logotypes of major brands
- Redesigning a locked symbol inside this skill
- Forcing the full wordmark into a 16px favicon role

## Type → path workflow

1. Pick a **base posture** appropriate to category (named face or constructed equivalent).  
2. Convert to paths for font independence.  
3. Customize **1–2** letters / terminals / proportions for ownability.  
4. Optical kerning by pair; state the approach in round notes.  
5. If a secondary string exists: redraw at true lighter weight (not opacity-as-weight) + ~70% scale unless the brief overrides.  
6. If a locked symbol exists and you add proprietary cuts, match **literal** geometry from the mark.

## SVG checklist (before finalize)

- [ ] `viewBox` tightly fits the artwork without clipping  
- [ ] Transparent background unless a background is intentional  
- [ ] No unnecessary filters, gradients, or embedded rasters  
- [ ] Consistent stroke weights if the lettering uses strokes (prefer fills for finals)  
- [ ] Text converted to paths when font independence is required  
- [ ] Adequate whitespace / optical padding around the mark  
- [ ] Clean rendering at 16 / 24 / 32 / 48  
- [ ] Light and dark variants if needed  
- [ ] No opacity faking a second weight  

## Process template (critique arc — brand-agnostic)

Typical failure: soft or generic first draft → looks typed, not designed.

Path that works:

1. Reject the soft/generic draft explicitly.  
2. Show three posture + customization directions; stop for ranking.  
3. Rebuild the winner’s family from construction, not nudges.  
4. Fix hierarchy (secondary lighter when present).  
5. Surgical passes — name defects; change only those (e.g. quiet a loud custom detail; sharpen a structural cut; tighten pair gaps).  
6. When a symbol is locked, make shared moves literal.  
7. Lock at intentional craft parity — not infinite polish.

## Board template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Wordmark drafts — round N</title>
  <style>
    :root { color-scheme: light; font-family: ui-sans-serif, system-ui, sans-serif; }
    body { margin: 2rem; background: #f5f5f5; color: #111; }
    h1 { font-size: 1rem; font-weight: 600; margin-bottom: 1.5rem; }
    .grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
    article { background: #fff; padding: 1rem; border: 1px solid #e5e5e5; }
    .name { font-weight: 600; margin: 0 0 0.25rem; }
    .why { margin: 0 0 1rem; font-size: 0.875rem; color: #444; }
    .row { display: flex; gap: 0.75rem; align-items: end; flex-wrap: wrap; }
    .swatch { display: grid; place-items: center; padding: 0.5rem 0.75rem; }
    .swatch.light { background: #fff; border: 1px solid #ddd; }
    .swatch.dark { background: #000; }
    .swatch.wide { min-width: 220px; height: 72px; }
    .swatch.h48 { height: 48px; min-width: 120px; }
    .swatch.h32 { height: 32px; min-width: 96px; }
    .swatch.h24 { height: 24px; min-width: 80px; }
    .swatch.h16 { height: 16px; min-width: 64px; }
    img, svg { max-height: 80%; max-width: 95%; display: block; }
    .label { font-size: 0.7rem; color: #666; margin-top: 0.35rem; text-align: center; }
  </style>
</head>
<body>
  <h1>Round N — three wordmarks</h1>
  <div class="grid">
    <article>
      <p class="name">01 — Direction Name</p>
      <p class="why">Posture + customization bet.</p>
      <div class="row">
        <div><div class="swatch light wide"><img src="01-slug.svg" alt="" /></div><div class="label">black / white</div></div>
        <div><div class="swatch dark wide"><img src="01-slug.svg" alt="" style="filter: invert(1)" /></div><div class="label">on black</div></div>
      </div>
      <div class="row" style="margin-top:0.75rem">
        <div><div class="swatch light h48"><img src="01-slug.svg" alt="" /></div><div class="label">48</div></div>
        <div><div class="swatch light h32"><img src="01-slug.svg" alt="" /></div><div class="label">32</div></div>
        <div><div class="swatch light h24"><img src="01-slug.svg" alt="" /></div><div class="label">24</div></div>
        <div><div class="swatch light h16"><img src="01-slug.svg" alt="" /></div><div class="label">16</div></div>
      </div>
    </article>
  </div>
</body>
</html>
```

On finalize boards, add a simple navbar strip and one denser context mock. Prefer true inverted fills for on-dark when practical; CSS `invert` is board-only.

## SVG skeleton

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <path fill="#000" d="..." />
</svg>
```

Wide viewBox; optically padded; minimal markup; paths not live `<text>` in finals. Lockups compose symbol SVG + wordmark — do not redraw the symbol.
