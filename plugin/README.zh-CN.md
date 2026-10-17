# 插件清单

[English](README.md) | 简体中文

这里保存个人精选插件的来源、平台安装方式和上游 Skills 地址。当前必装两项，插件源码由各平台从上游安装，不复制插件缓存或账号配置。

| 插件 | 用途 | Claude Code | Codex | 上游 Skills |
|---|---|---|---|---|
| [pstack](pstack.md) | 设计、排查、实现、审查和验证的工作流程。 | 原生插件 | 原生插件 | [Skills 目录](https://github.com/michael-denyer/pstack-claude/tree/main/plugins/pstack/skills) |
| [ponytail](ponytail.md) | 约束过度设计，优先复用、标准库和满足需求的最少代码。 | 原生插件 | 原生插件 | [Skills 目录](https://github.com/DietrichGebert/ponytail/tree/main/skills) |

## 按平台选择安装方式

1. 先查看对应插件文档的安装方式。有原生插件、扩展或包时，优先使用目标平台的官方适配，不重复安装它自带的 Skills。
2. 平台没有原生插件但支持 Agent Skills 时，使用各条目中的 GitHub Skills 地址。保留技能间的目录关系、脚本和参考资料，先确认平台的工具、模型和路径适配。
3. 只安装 Skills 不会自动获得插件的 Hooks、Agent 配置、状态保存或自动路由。平台也不支持 Agent Skills 时，不能直接套用 Skills，按上游规则文件或平台适配说明处理。
4. 支持情况未核实的平台标为未核实，不把它写成不支持。其他平台的适配说明也列在各插件文档中。

## 维护要求

- 每个插件单独用一份 Markdown 记录用途、上游仓库、平台支持情况、安装方法、确认方法和 GitHub Skills 地址。
- 各平台独立安装和管理版本，不迁移旧电脑的绝对路径或 Hook 信任记录。
- 平台自带的文档、PDF、表格和演示工具按环境提供，不全部列为个人必装插件。
- pstack 管工作流程，ponytail 约束实现规模。精简不能削减明确要求的 UI 还原、动画效果、可访问性或验证。

核对日期为 2026-10-17。命令和来源已核对，未做全新环境的安装验收；本机原有安装保持不动。返回[仓库首页](../README.zh-CN.md)。
