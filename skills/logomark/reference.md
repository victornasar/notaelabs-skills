# Logomark — reference

Load for craft detail, the avoid list, or the board/SVG templates.

## Quality bar

Credible on a research paper, developer dashboard, enterprise deck, and product site. Proprietary geometry — not a typed letter, emoji, or stock icon. Cultural or linguistic origins only through proportion and construction, never literally.

## Avoid

- Brains, neural nets, robots, circuit boards
- Microphones, headphones, speakers, cameras (unless the brief insists — still prefer abstract)
- Generic sound-wave / equalizer / pulse icons
- Mythology, religious, or occult imagery
- Marks that need color to be recognizable
- Trendy chrome, gloss, or deco
- Lookalikes of major tech marks (OpenAI, Anthropic, ElevenLabs, DeepMind, Stripe, Linear, …)
- Lettering inside the mark file (monogram-as-geometry is fine if it reads as a symbol)

## Direction split

Four directions must diverge on structure: primary geometry, positive/negative space, construction story, and at least one extreme-simple few-shape mark. Name each in 2–4 words.

## Board template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Logomark drafts — round N</title>
  <style>
    :root { color-scheme: light; font-family: ui-sans-serif, system-ui, sans-serif; }
    body { margin: 2rem; background: #f5f5f5; color: #111; }
    h1 { font-size: 1rem; font-weight: 600; margin-bottom: 1.5rem; }
    .grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
    article { background: #fff; padding: 1rem; border: 1px solid #e5e5e5; }
    .name { font-weight: 600; margin: 0 0 0.25rem; }
    .why { margin: 0 0 1rem; font-size: 0.875rem; color: #444; }
    .row { display: flex; gap: 0.75rem; align-items: end; flex-wrap: wrap; }
    .swatch { display: grid; place-items: center; }
    .swatch.light { background: #fff; border: 1px solid #ddd; }
    .swatch.dark { background: #000; }
    .swatch.lg { width: 120px; height: 120px; }
    .swatch.sm { width: 32px; height: 32px; }
    .swatch.xs { width: 16px; height: 16px; }
    img, svg { width: 70%; height: 70%; display: block; }
    .label { font-size: 0.7rem; color: #666; margin-top: 0.35rem; text-align: center; }
  </style>
</head>
<body>
  <h1>Round N — four logomarks</h1>
  <div class="grid">
    <article>
      <p class="name">01 — Direction Name</p>
      <p class="why">One-sentence rationale.</p>
      <div class="row">
        <div><div class="swatch light lg"><img src="01-slug.svg" alt="" /></div><div class="label">black / white</div></div>
        <div><div class="swatch dark lg"><img src="01-slug.svg" alt="" style="filter: invert(1)" /></div><div class="label">on black</div></div>
        <div><div class="swatch light sm"><img src="01-slug.svg" alt="" /></div><div class="label">32</div></div>
        <div><div class="swatch light xs"><img src="01-slug.svg" alt="" /></div><div class="label">16</div></div>
      </div>
    </article>
  </div>
</body>
</html>
```

Prefer true inverted fills for on-dark when practical; CSS `invert` is board-only.

## SVG skeleton

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path fill="#000" d="..." />
</svg>
```

Square viewBox; optically centered; ~2–4 units padding from edges; minimal markup.
