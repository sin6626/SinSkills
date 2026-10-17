# SinSkills

保存个人精选 Skills 和插件安装清单，供更换电脑或 Agent 环境时使用。默认 Skills 侧重 UI 还原和网页动画；专项技能按需安装。

支持原生插件的平台先按下方清单安装插件，再复制本仓库的精选 Skills。插件内已有的 Skills 不再单独复制。

## 默认集合

| Skill | 用途 |
|---|---|
| [crop-the-image](skills/crop-the-image/SKILL.md) | 根据设计稿和切图还原 UI，测量布局并对照截图验收。 |
| [gsap-core](skills/gsap-core/SKILL.md) | Tween、缓动、错峰、响应式和减少动画偏好。 |
| [gsap-timeline](skills/gsap-timeline/SKILL.md) | 多元素动画的先后、重叠、时间线与播放控制。 |
| [gsap-scrolltrigger](skills/gsap-scrolltrigger/SKILL.md) | 滚动联动、固定和横向滚动。 |
| [gsap-react](skills/gsap-react/SKILL.md) | React 动画的作用域、生命周期和清理。 |
| [gsap-frameworks](skills/gsap-frameworks/SKILL.md) | Vue、Nuxt、Svelte 动画接入。 |

插件、工具函数和性能资料位于 `skills/gsap-core/references/`，没有增加独立的 Skill 入口。GSAP 五项相互引用，安装时整组保留。原创 UI 的视觉决策和动效编排仍需真实参考与成品验证，本仓库尚未证明能提升这些能力。

## 可选集合

| Skill | 用途与环境要求 |
|---|---|
| [prototype](optional/prototype/SKILL.md) | 比较结构不同的 UI 方案，或验证逻辑模型。 |
| [uni-app](optional/uni-app/SKILL.md) | uni-app 跨端开发，包含组件、API 和配置参考；uni-helper MCP 为可选集成。 |
| [course-report-diagrams](optional/course-report-diagrams/SKILL.md) | 中文课程报告中的 Mermaid 或 PlantUML 图。 |
| [writing-great-skills](optional/writing-great-skills/SKILL.md) | 编写、拆分和精简 Skills；调用策略需按目标 Agent 确认。 |
| [git-story-film](optional/git-story-film/SKILL.md) | 从 Git 历史制作动画影片，包含引擎和示例。渲染需要 Node.js 22.12+、`puppeteer-core`、浏览器和 ffmpeg；Python 工具需要 3.8+。 |
| [cc-clean](optional/cc-clean/SKILL.md) | Claude Code 环境的只读检查和经授权的清理流程；本地脚本需要 Python 3.10+，平台凭据处理另按实际系统确认。 |

PPT 技能按当前使用约定由环境提供，本仓库不收录。

## 在新环境使用

1. 克隆本仓库，按[必装插件清单](#必装插件清单)完成目标平台的原生插件安装，再选择默认 Skills 或需要的可选项。
2. 将每个 Skill 的完整目录复制到目标 Agent 的 Skills 目录。保留脚本、`references/`、`examples/`、`assets/` 和许可证。
3. 安装 GSAP 时，保留五个 `gsap-*` 目录的同级关系。可选项只复制选中的目录，不要直接安装整个仓库。
4. 目标位置已有同名目录时，先对比版本再决定如何处理。重新打开或刷新目标 Agent 后确认能发现这些技能。

本机已使用的目录可作为新环境的参考，实际路径以目标工具配置为准：

| 环境 | 全局目录示例 |
|---|---|
| Codex | `~/.codex/skills/`，自定义配置以 `CODEX_HOME` 为准。 |
| Claude Code | `~/.claude/skills/`，自定义配置以目标环境为准。 |
| 其他支持 Agent Skills 的工具 | 使用该工具文档指定的目录；不要沿用旧电脑上的绝对路径。 |

安装 Skill 不会自动安装运行依赖、MCP、字体或浏览器。GSAP 示例的依赖安装和启动方式见对应的 `package.json` 或 Skill 说明。

视频渲染前在准备好的影片项目根目录安装 `puppeteer-core`，将 `CHROME` 指向隔离的 Chromium 可执行文件。仓库副本限定一个浏览器，并保留中间目录供手动清理。

## 必装插件清单

这是个人环境的默认配置，当前保留两项。每个平台分别安装并管理自己的插件，不共享插件缓存或账号配置。

| 插件 | 用途 | Claude Code | Codex | 仓库保存方式 |
|---|---|---|---|---|
| [pstack](https://github.com/michael-denyer/pstack-claude) | 设计、排查、实现、审查和验证的工作流程，包含 Skills、Agent 配置与 Hooks。 | 原生插件 | 原生插件 | 只记录来源和安装方法。 |
| [ponytail](https://github.com/DietrichGebert/ponytail) | 约束过度设计，优先复用、标准库和满足需求的最少代码；通过 Hooks 加载工作规则。 | 原生插件 | 原生插件 | 只记录来源和安装方法。 |

Skill 是任务说明和资源，Hook 是在会话或提示等事件发生时运行的程序，插件负责将它们打包并适配平台。因此 ponytail 同时包含 Skill 和 Hooks，安装完整插件才能保留其自动加载与模式切换能力。只复制 `SKILL.md` 不能迁移这些能力。

平台自带的文档、PDF、表格和演示工具按环境提供，不收录为个人 Skills，也不因本机装过就全部列为必装。以后新增插件时，记录用途、来源、支持平台和安装后的确认方法。

### 在 Claude Code 安装

在 Claude Code 会话中逐条发送以下命令，每条作为一次独立输入：

```text
/plugin marketplace add michael-denyer/pstack-claude
/plugin install pstack@pstack-claude
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

重新启动会话，在 `/plugin` 中确认两项已安装并启用。按目标模型配置 pstack，可运行 `/pstack:setup-pstack`。不要沿用其他平台的模型名称。

### 在 Codex 安装

在终端执行：

```bash
codex plugin marketplace add michael-denyer/pstack-claude
codex plugin add pstack@pstack-claude
codex plugin marketplace add DietrichGebert/ponytail
codex plugin add ponytail@ponytail
```

运行 `codex`，在 `/hooks` 中检查并信任这些插件的 Hooks，再开始新会话。桌面端需要重启应用。安装或启用插件不会自动信任 Hooks，参见 [OpenAI 插件文档](https://developers.openai.com/plugins/build/plugins)。

在插件列表中确认 pstack、ponytail 已启用，在 `/hooks` 中确认它们的事件定义已受信任。新会话应能加载 pstack 路由规则和 ponytail 模式规则。这只能确认规则加载，不能证明输出质量。安装命令来自 [pstack 安装说明](https://github.com/michael-denyer/pstack-claude#install)和 [ponytail 安装说明](https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md)。

### 运行条件与迁移

ponytail 的 Hooks 需要非交互环境也能找到 `node`。pstack 的具体工作流可能需要额外工具，按所调用流程配置。

两者共同使用时，pstack 管工作流程，ponytail 约束实现规模。精简代码不能削减已明确要求的 UI 还原、动画效果、可访问性或验证。不要另外复制插件自带的同名 Skills，或在项目指令中粘贴整套规则。

截至 2026-10-17，本机状态如下。这是安装记录核对结果，不是所有平台功能的运行验收，也不是新电脑必须锁定的版本：

| 内容 | Claude Code | Codex |
|---|---|---|
| pstack | 插件登记为 `0.9.84`，用户配置已启用。 | 插件缓存为 `0.9.67`，用户配置已启用，路由 Hook 有信任记录。 |
| ponytail | 手工 Hooks，位于 `~/.claude/hooks/ponytail/`，不在原生插件安装登记中。 | 手工迁移的 Hooks，位于 `~/.codex/hooks/ponytail-windows/`，不在原生插件安装登记中。 |

本机 ponytail 通过 `SessionStart`、`UserPromptSubmit`、`SubagentStart` 加载规则或跟踪模式。目录名中的 `windows` 是迁移遗留名，本机脚本已适配 macOS；未找到可核实的原件版本号，不把它标为当前上游版本。

新电脑直接安装原生插件，不复制上述手工 Hooks、旧绝对路径或信任记录。如果以后将本机手工安装改为原生插件，需要先核对旧 Hooks 并避免重复加载；本轮没有安装、升级、替换或删除本机插件与 Hooks。

安装命令会从对应 marketplace 解析版本。本仓库未锁定插件依赖，也未执行全新安装验收；迁移后记录实际版本，更新时重新检查 Hook 定义。

### pstack 与架构技能

pstack 按上方必装清单安装，不复制它的全部 Skills。按插件安装方式保留 Hook、Agent 和脚本。

这三份共享技能不在已检查的 pstack 版本中以同名形式提供，但存在能力重叠：

| 未收录的共享技能 | pstack 中的相近能力 | 差别 |
|---|---|---|
| `codebase-design` | `architect`、`principle-minimize-reader-load` | 设计和简化模块；不是原文中的同一套深模块术语。 |
| `domain-modeling` | `principle-model-the-domain` | 都涉及领域建模；不等同于原技能的术语表和 ADR 流程。 |
| `improve-codebase-architecture` | `thermo-nuclear-code-quality-review`、重构流程 | 都能审查架构；不等同于原技能的 HTML 报告和逐项追问。 |

该对应关系基于本机 pstack `0.9.67` 的文件检查，不表示完全替代。未改动本机的插件安装。

## 校验

需要 Python 3.10+ 和 Node.js 22.12+：

```bash
python3 scripts/check.py
npm ci
npx playwright install chromium
npm test
```

`check.py` 检查入口字段、目录分类、仓库内部 Markdown 链接和本机绝对路径。浏览器测试验证横向滚动的位置、回滚、缩放、减少动画模式，以及原有文档代码片段的实际行为。测试使用隔离的无头 Chromium、临时本地端口和已安装的 GSAP，不访问用户浏览器配置。

React、Vue 和 Nuxt 示例各自保留上游项目依赖；仓库结构检查或横向滚动测试通过，不代表这些框架项目全部完成运行验证。视频渲染、账号清理和在线登录也不在上述测试范围内。

来源、许可证和仓库内修订见 [SOURCES.md](SOURCES.md)。
