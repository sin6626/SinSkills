---
name: crop-the-image
description: Pixel-perfect frontend reconstruction from a design screenshot, Lanhu/Figma-style generated code, sliced image assets, or a visual reference. Use when the user asks to restore a page 1:1, compare implementation against UI images, wire existing APIs without changing business logic, or iterate on spacing, typography, image assets, colors, and layout until the screen matches the design.
---

# Crop The Image

Use this skill to turn a provided design image and slices into a faithful frontend page. Treat the design as the source of truth and keep business logic stable unless the user explicitly asks for logic changes.

## Workflow

1. Gather the actual design source first: screenshot, design export code, sliced assets folder, current rendered screenshot, and the target page path.
2. Inspect existing code before editing: route config, page component, child components, asset paths, API wrappers, and current git status.
3. If design-generated code is provided, run or translate that structure first, then reconnect existing project APIs. Do not invent new API calls when wrappers already exist.
4. Preserve existing business behavior. Limit edits to template/style/data mapping needed for the visual result.
5. Prefer a repeated component when the design repeats the same visual unit, such as cards, envelopes, rows, or list items.
6. Use real sliced assets from the project when available. Ask for missing slices instead of approximating with CSS when the design relies on bitmap texture, seals, stamps, shadows, or paper.
7. Match layout by measured design values: width, height, margins, font family, font size, line-height, colors, truncation, safe area, tabbar overlap, and empty states.
8. Keep API field mapping explicit and boring. If a backend field is missing, use the agreed temporary hard-coded value and mark it as such in code only when needed.
9. Verify with the closest runnable target available: HBuilder screenshot, browser/dev server screenshot, emulator screenshot, or static visual diff. Iterate from largest mismatch to smallest.
10. Commit visual fixes separately from debug logging or investigation changes.

## Guardrails

- Do not change request semantics, pagination, deletion, navigation, authentication, or persistence just to make a page display.
- Do not use backend fields that the team decided to ignore; log them only when debugging and remove logs afterward.
- Do not leave design-debug `console.log` calls in the final version.
- Do not hand-roll assets when the slices folder has the real image.
- Do not guess unclear API parameters. Tell the user what backend detail is missing.

## Pixel Checklist

- Page background and status/navigation spacing match the target device.
- First content block offset matches the design.
- Repeated items are centered and spaced by the measured value.
- Text uses the named font stack or bundled font file if the project has it.
- Multi-line content preserves user line breaks and clamps at the specified line count.
- Image assets use the right color/state variant from backend or agreed mapping.
- Bottom tabbar/safe-area spacing does not cover content.
