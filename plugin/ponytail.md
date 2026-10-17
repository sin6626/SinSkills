# ponytail

个人必装。约束过度设计，优先复用、标准库和满足需求的最少代码。它是包含 Skill 与 Hooks 的插件，Skill 保存规则，Hooks 自动加载规则并跟踪模式。

- 上游仓库：[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)。
- 上游安装说明：[INSTALL.md](https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md)。
- GitHub Skills 目录：[skills](https://github.com/DietrichGebert/ponytail/tree/main/skills)。
- 核心入口：[ponytail/SKILL.md](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail/SKILL.md)。

## Claude Code

在会话中逐条发送，每条作为一次独立输入：

```text
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

重新启动会话，在 `/plugin` 中确认已安装并启用，检查是否加载 ponytail 模式规则。

## Codex

在终端执行：

```bash
codex plugin marketplace add DietrichGebert/ponytail
codex plugin add ponytail@ponytail
```

运行 `codex`，在 `/hooks` 中检查并信任插件的 Hooks，再开始新会话。桌面端需要重启应用。确认插件已启用、新会话已加载 ponytail 模式规则。规则加载不能证明输出质量。

Hooks 需要非交互环境也能找到 `node`。安装插件不会自动信任 Hooks，参见 [OpenAI 插件文档](https://developers.openai.com/plugins/build/plugins)。

## 其他平台与 Skills 替代方式

上游安装文档还列出 Cursor、Copilot、Pi、OpenCode、Gemini CLI 等环境的适配方式，按[对应平台章节](https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md)安装。本仓库未对这些环境逐一验收。

目标平台没有原生插件但支持 Agent Skills 时，从上方 GitHub Skills 目录获取需要的完整技能目录。只复制 Skills 不会自动获得 Hooks、跨轮次的模式状态或状态栏。如果平台使用规则文件，按上游平台章节处理，不把整个上游 `AGENTS.md` 覆盖到现有项目中。

## 本机记录

2026-10-17 核对：本机两平台均使用手工 Hooks 加配套 Skill，没有原生 ponytail 插件安装登记。

| 平台 | 手工 Hooks 目录 |
|---|---|
| Claude Code | `~/.claude/hooks/ponytail/` |
| Codex | `~/.codex/hooks/ponytail-windows/` |

本机通过 `SessionStart`、`UserPromptSubmit`、`SubagentStart` 加载规则或跟踪模式。`windows` 是迁移遗留名，本机脚本已适配 macOS。未找到可核实的原件版本号，不标为当前上游版本。

新电脑直接安装原生插件。如果以后迁移本机手工安装，先核对旧 Hooks 并避免重复加载。本轮未安装、升级、替换或删除本机插件与 Hooks。

返回[插件清单](README.md)。
