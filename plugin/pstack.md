# pstack

个人必装。提供设计、排查、实现、审查和验证流程，完整插件包含 Skills、Agent 配置与 Hooks。

- 上游仓库：[michael-denyer/pstack-claude](https://github.com/michael-denyer/pstack-claude)。
- 上游安装说明：[Install](https://github.com/michael-denyer/pstack-claude#install)。
- GitHub Skills 目录：[plugins/pstack/skills](https://github.com/michael-denyer/pstack-claude/tree/main/plugins/pstack/skills)。
- 核心入口：[poteto-mode/SKILL.md](https://github.com/michael-denyer/pstack-claude/blob/main/plugins/pstack/skills/poteto-mode/SKILL.md)。

## Claude Code

在会话中逐条发送，每条作为一次独立输入：

```text
/plugin marketplace add michael-denyer/pstack-claude
/plugin install pstack@pstack-claude
```

重新启动会话，在 `/plugin` 中确认已安装并启用。运行 `/pstack:setup-pstack` 配置目标环境的模型。

## Codex

在终端执行：

```bash
codex plugin marketplace add michael-denyer/pstack-claude
codex plugin add pstack@pstack-claude
```

运行 `codex`，在 `/hooks` 中检查并信任插件的路由 Hook，再开始新会话。桌面端需要重启应用。安装插件不会自动信任 Hooks，参见 [OpenAI 插件文档](https://developers.openai.com/plugins/build/plugins)。

确认插件已启用，并检查新会话能否加载 pstack 路由规则。按 Codex 的工具和模型配置使用 `setup-pstack`，不要直接沿用 Claude 模型名。具体工作流的额外工具按上游说明配置。

## 其他平台与 Skills 替代方式

上游还提供 Pi、GitHub Copilot 及其他平台的适配，见[上游安装说明](https://github.com/michael-denyer/pstack-claude#install)和[共享 Skills 安装说明](https://github.com/michael-denyer/pstack-claude/blob/main/docs/reference.md#shared-skills-installation)。这些平台未在本仓库执行安装验收。

目标平台没有原生适配时，从上方 GitHub Skills 目录获取所需内容，保留相互引用的同级技能和资源。工具名、子代理调用、模型名和全局配置路径需要按目标平台调整，不能承诺直接兼容。只安装 Skills 不会自动安装路由 Hook 或 Agent 配置。

## 本机记录

2026-10-17 核对：Claude Code 安装登记为 `0.9.84`，用户配置启用；Codex 缓存为 `0.9.67`，用户配置启用，路由 Hook 有信任记录。该快照不是新电脑必须锁定的版本，也不是所有功能的运行验收。

## 与架构技能的关系

pstack 按本文的安装方法安装，不复制它的全部 Skills。按插件安装方式保留 Hook、Agent 和脚本。

这三份共享技能不在已检查的 pstack 版本中以同名形式提供，但存在能力重叠：

| 未收录的共享技能 | pstack 中的相近能力 | 差别 |
|---|---|---|
| `codebase-design` | `architect`、`principle-minimize-reader-load` | 设计和简化模块；不是原文中的同一套深模块术语。 |
| `domain-modeling` | `principle-model-the-domain` | 都涉及领域建模；不等同于原技能的术语表和 ADR 流程。 |
| `improve-codebase-architecture` | `thermo-nuclear-code-quality-review`、重构流程 | 都能审查架构；不等同于原技能的 HTML 报告和逐项追问。 |

该对应关系基于本机 pstack `0.9.67` 的文件检查，不表示完全替代。未改动本机的插件安装。

返回[插件清单](README.md)。
