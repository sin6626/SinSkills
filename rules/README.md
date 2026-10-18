# Global instructions

English | [简体中文](README.zh-CN.md)

| Platform | Repository copy | Destination |
|---|---|---|
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `~/.codex/AGENTS.md`, or `AGENTS.md` under your custom `CODEX_HOME`. |

Synced from the local Codex global instructions on 2026-10-18, including the resource-management requirement. The Chinese instructions retain the user's wording. The sample API domain, member ID, and user identifier have been replaced with example values for public distribution.

## Use on another machine

1. Compare the repository copy with the target machine's global instructions. Back up any existing file before merging or replacing it.
2. Place the reviewed content at the destination above. Keep this repository's root `AGENTS.md` as project guidance rather than installing it globally.
3. Check whether the destination also has an `AGENTS.override.md`, which takes precedence. Start a new Codex session and confirm that the expected global instructions are loaded.

This directory stores instruction text, not Codex command-approval `.rules` files, account configuration, MCP configuration, or plugin hooks. Cloning this repository does not install these global instructions automatically. See the [official instruction-discovery guide](https://learn.chatgpt.com/docs/agent-configuration/agents-md).

For future updates, compare against the current local file and review examples for private data before publishing. This sync leaves the local source unchanged. Return to the [repository home](../README.md).
