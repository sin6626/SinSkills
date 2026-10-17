# SinSkills

保存个人精选 Skills 和插件安装清单，供更换电脑或 Agent 环境时使用。默认 Skills 侧重 UI 还原和网页动画；专项技能按需安装。

支持原生插件的平台先按 [plugin/ 插件清单](plugin/README.md)安装插件，再复制本仓库的精选 Skills。插件内已有的 Skills 不再单独复制。

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

1. 克隆本仓库，按[必装插件清单](plugin/README.md)完成目标平台的原生插件安装，再选择默认 Skills 或需要的可选项。
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

## 插件

必装插件、平台安装方法和 GitHub Skills 替代地址统一放在 [plugin/](plugin/README.md)，当前包括 [pstack](plugin/pstack.md) 和 [ponytail](plugin/ponytail.md)。有原生插件时按平台安装，不重复复制插件自带的 Skills。

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
