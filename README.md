# SinSkills

English | [简体中文](README.zh-CN.md)

A personal collection of portable agent skills, plugin installation guides, and global instructions. The default skills focus on UI reconstruction and web animation; specialized skills are optional.

For platforms with native plugins, start with the [plugin catalog](plugin/README.md), then install the selected skills from this repository. Avoid installing a second copy of skills already supplied by a plugin.

## Default skills

| Skill | Purpose |
|---|---|
| [crop-the-image](skills/crop-the-image/SKILL.md) | Reconstruct a UI from designs and supplied assets, measure layouts, and compare screenshots. |
| [gsap-core](skills/gsap-core/SKILL.md) | Tweens, easing, staggering, responsive animation, and reduced motion. |
| [gsap-timeline](skills/gsap-timeline/SKILL.md) | Sequence and overlap animations, nest timelines, and control playback. |
| [gsap-scrolltrigger](skills/gsap-scrolltrigger/SKILL.md) | Scroll-linked animation, pinning, and horizontal scrolling. |
| [gsap-react](skills/gsap-react/SKILL.md) | Scope animations and manage their lifecycle and cleanup in React. |
| [gsap-frameworks](skills/gsap-frameworks/SKILL.md) | Integrate animations with Vue, Nuxt, and Svelte. |

Plugin APIs, utilities, and performance guidance live under `skills/gsap-core/references/`, without extra skill entry points. Install all five GSAP skills together because they reference each other. Original UI design and motion direction still require visual references and evaluation of the finished result; this collection has not been evaluated for improvements in visual quality.

## Optional skills

| Skill | Purpose and requirements |
|---|---|
| [grilling](optional/grilling/SKILL.md) | Clarify an unclear goal or plan through one question at a time, with recommendations, before implementation. Adapted from [mattpocock/skills](https://github.com/mattpocock/skills). |
| [prototype](optional/prototype/SKILL.md) | Compare structurally different UI approaches or validate a logic model. |
| [uni-app](optional/uni-app/SKILL.md) | Develop uni-app projects with component, API, and configuration references. The uni-helper MCP integration is optional. |
| [course-report-diagrams](optional/course-report-diagrams/SKILL.md) | Create Mermaid or PlantUML diagrams for Chinese course reports. |
| [writing-great-skills](optional/writing-great-skills/SKILL.md) | Write, split, and simplify skills. Check invocation behavior in the target agent. |
| [git-story-film](optional/git-story-film/SKILL.md) | Make an animated film from Git history using the included engine and examples. Rendering requires Node.js 22.12+, `puppeteer-core`, a browser, and ffmpeg. Python utilities require 3.8+. |
| [cc-clean](optional/cc-clean/SKILL.md) | Inspect Claude Code state and perform authorized cleanup. Local scripts require Python 3.10+; credential handling depends on the operating system. |

PPT skills are supplied by the host environment in this setup and are not included.

## Use on a new machine

1. Clone this repository. Follow the [plugin catalog](plugin/README.md) for the target platform, then choose default or optional skills.
2. Copy each selected skill's complete directory into the target agent's skills directory. Preserve scripts, `references/`, `examples/`, `assets/`, and licenses.
3. Keep all five `gsap-*` directories side by side. Copy only the optional skills you need rather than installing the entire repository.
4. If the destination already contains a skill with the same name, compare versions before changing it. Restart or refresh the target agent and confirm that it discovers the skills.

These locations reflect the current local setup. Follow the target tool's configuration when it differs:

| Environment | Example global directory |
|---|---|
| Codex | `~/.codex/skills/`; custom setups may use `CODEX_HOME`. |
| Claude Code | `~/.claude/skills/`; follow the target environment's configuration. |
| Other agents supporting Agent Skills | Use the directory specified by that tool, without carrying over absolute paths from another machine. |

Installing a skill does not install its runtime dependencies, MCP servers, fonts, or browser. Check each GSAP example's `package.json` or skill instructions for its setup.

For film rendering, install `puppeteer-core` in the prepared film project and point `CHROME` to an isolated Chromium executable. This copy uses one browser and preserves intermediate directories for manual cleanup.

## Plugins

The [plugin catalog](plugin/README.md) contains platform installation instructions and upstream GitHub Skills alternatives for [pstack](plugin/pstack.md) and [ponytail](plugin/ponytail.md). Prefer native plugins where available and avoid duplicating their bundled skills.

## Global instructions

The [rules catalog](rules/README.md) contains the latest synced [Codex global instructions](rules/codex/AGENTS.md). Compare them with the target machine's existing instructions before installing. This repository's root `AGENTS.md` remains project-specific.

## Validation

Requires Python 3.10+ and Node.js 22.12+:

```bash
python3 scripts/check.py
npm ci
npx playwright install chromium
npm test
```

`check.py` validates skill metadata, collection membership, local Markdown links, and machine-specific paths. The browser test checks horizontal scrolling, reverse scrolling, resizing, reduced motion, and the original documentation snippet. It uses an isolated headless Chromium instance, a temporary local port, and the installed GSAP package without accessing a personal browser profile.

React, Vue, and Nuxt examples keep their own upstream dependencies. Passing the collection checks and scroll test does not establish that every framework example runs correctly. Film rendering, account cleanup, and online authentication are outside these checks.

See [SOURCES.md](SOURCES.md) for provenance, licenses, and local changes. Plugin details and source notes are currently in Chinese.
