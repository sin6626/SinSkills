# 全局指令

[English](README.md) | 简体中文

| 平台 | 仓库副本 | 安装位置 |
|---|---|---|
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `~/.codex/AGENTS.md`，自定义 `CODEX_HOME` 时放在对应目录中。 |

于 2026-10-18 从本机 Codex 全局指令同步，包含新增的电脑资源管理要求。指令保留中文原文；公开副本仅将接口示例的域名、会员 ID 和用户标识替换为示例值。

## 在新电脑使用

1. 对比仓库副本和目标电脑已有的全局指令，备份原文件后再合并或替换。
2. 将确认后的内容放到上述安装位置。仓库根目录的 `AGENTS.md` 仍是项目维护约定，不应作为全局指令安装。
3. 检查目标位置是否还有优先级更高的 `AGENTS.override.md`。开启新的 Codex 会话，确认预期的全局指令已加载。

这里保存的是个性化指令文本，不是 Codex 命令审批策略的 `.rules` 文件，也不包含账号配置、MCP 或插件 Hooks。克隆仓库不会自动安装全局指令。加载规则见[官方说明](https://learn.chatgpt.com/docs/agent-configuration/agents-md)。

以后本机全局指令更新时，再对比并同步到此目录，公开前检查示例数据。本次同步没有改动本机原文件。返回[仓库首页](../README.zh-CN.md)。
