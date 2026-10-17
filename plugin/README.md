# Plugin catalog

English | [简体中文](README.zh-CN.md)

A personal selection of plugins, platform installation instructions, and upstream Skills links. Both entries are part of the default setup. Install plugin code from upstream through the target platform; plugin caches and account configuration are not stored here.

| Plugin | Purpose | Claude Code | Codex | Upstream Skills |
|---|---|---|---|---|
| [pstack](pstack.md) | Workflows for design, debugging, implementation, review, and verification. | Native plugin | Native plugin | [Skills directory](https://github.com/michael-denyer/pstack-claude/tree/main/plugins/pstack/skills) |
| [ponytail](ponytail.md) | Limit overengineering and prefer reuse, standard libraries, and the smallest implementation that meets the requirements. | Native plugin | Native plugin | [Skills directory](https://github.com/DietrichGebert/ponytail/tree/main/skills) |

The individual plugin guides are currently in Chinese and include installation commands, upstream links, and local installation notes.

## Choose an installation method

1. Check the individual plugin guide. Prefer a native plugin, extension, or package when one exists; avoid a second installation of its bundled skills.
2. If the platform has no native plugin but supports Agent Skills, use the linked GitHub Skills directory. Preserve references and resources, and check tool, model, and path compatibility.
3. Skills alone do not install hooks, agent definitions, persistent state, or automatic routing. If the platform does not support Agent Skills either, follow the upstream rules-file or platform adapter instructions.
4. Treat platforms that have not been checked as unverified rather than unsupported. Each guide also links to upstream instructions for other platforms.

## Maintain this catalog

- Keep one Markdown guide per plugin with its purpose, repository, platform support, installation and confirmation steps, and GitHub Skills links.
- Manage installations and versions separately on each platform. Do not migrate machine-specific paths or hook trust records.
- Document, PDF, spreadsheet, and presentation tools supplied by the host environment are not all required personal plugins.
- pstack provides workflows; ponytail limits implementation scope. Simplification must preserve requested UI fidelity, animation, accessibility, and verification.

Sources were checked on 2026-10-17. Fresh installation has not been tested on every platform, and existing local installations remain unchanged. Return to the [repository home](../README.md).
