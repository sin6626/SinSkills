# 来源与修订

整理日期为 2026-10-17。所有操作针对本仓库副本，本机安装目录没有写入。

## 来源

| 内容 | 来源 | 版本或说明 |
|---|---|---|
| `crop-the-image`、四个可选共享技能 | 本机共享 Skills 的完整目录 | `prototype`、`uni-app`、`course-report-diagrams`、`writing-great-skills`；未核实其初始上游版本。 |
| 五个 GSAP 入口 | 本机已安装的共享 Skills | 保留正文，作必要修复和引用调整。 |
| GSAP 插件、工具函数、性能资料及四套示例 | [greensock/gsap-skills](https://github.com/greensock/gsap-skills/tree/aed9cfd3277740755f6bfc1155c7aa645403b760) | 固定提交 `aed9cfd3277740755f6bfc1155c7aa645403b760`，没有跟随浮动分支自动更新。 |
| `git-story-film` | 本机个人 Skill 的完整目录 | 包含原有引擎、脚本、参考资料和 Raven 示例。 |
| `cc-clean` | 本机个人 Skill 的完整目录 | 正文标注 `v0.2.2`，包含只读检查工具和报告模板。 |

## 插件安装清单的依据

清单位于 [plugin/README.md](plugin/README.md)，每项包含平台安装方式及上游 GitHub Skills 地址。不导入插件源码、缓存或用户配置。核对日期为 2026-10-17。

- [pstack 上游安装说明](https://github.com/michael-denyer/pstack-claude#install)及本机两平台插件 manifest。Claude Code 安装登记为 `0.9.84`，Codex 缓存为 `0.9.67`，两平台配置均启用。
- [ponytail 上游安装说明](https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md)、[Claude Code manifest](https://github.com/DietrichGebert/ponytail/blob/main/.claude-plugin/plugin.json)和 [Codex manifest](https://github.com/DietrichGebert/ponytail/blob/main/.codex-plugin/plugin.json)。两平台均有原生插件；本机实际使用手工 Hooks 与配套 Skill，未发现可核实的本地版本号。
- [OpenAI 插件文档](https://developers.openai.com/plugins/build/plugins)说明安装插件后仍需检查并信任其 Hooks。本机 CLI 的 `--help` 也确认了两平台文档中使用的 marketplace 与插件子命令。

安装记录与原生插件功能的运行验收分别记录。本轮未安装、升级或重新配置插件，未修改本机 Skills 或 Hooks。

## 许可证

GSAP Skills 上游采用 MIT，五个 GSAP 目录均附带上游 `LICENSE`。这是文档和示例仓库的许可证，不替代 GSAP 运行库本身的使用条款。

`git-story-film/engine/LICENSE.hand-drawn-canvas-animation` 随原目录保留。其他本机技能未发现统一的顶层许可证，因此本仓库没有为全部导入内容重新声明一个统一许可。再次分发时应核实各部分的授权。

## 本仓库修订

- 把 `gsap-plugins`、`gsap-utils`、`gsap-performance` 三份上游内容保存为参考资料，并将跨技能引用改为相对链接。
- 补齐原生 JavaScript、React、Vue、Nuxt 示例。原有示例按对应 Skill 分类，不依赖上游仓库的外部 `examples/` 路径。
- 修复横向滚动文档中的 `Max.max`、像素距离误用 `xPercent`、缺少 `scrub` 和动态宽度刷新配置；增加可运行示例与浏览器回归检查。
- 按 [ScrollTrigger 官方文档](https://gsap.com/docs/v3/Plugins/ScrollTrigger/#refreshPriority) 修正刷新优先级说明，较大数值先刷新。
- 修复 Vue 示例导入文件名的大小写差异；移除 Nuxt 示例和文档中重复的 `Plugins` 类型声明；修正 Nuxt 页面的卸载清理、作用域和异步加载后卸载的处理。
- 将 uni-app 的 uni-helper 工具和 MCP 改为可选依赖，缺失时使用已有工具和官方资料。
- 更新 `git-story-film` 两份 README 中的旧项目路径。
- 将视频渲染限制为一个浏览器，保留中间目录供手动清理，移除递归删除。未执行影片渲染。

GSAP 引用资料由完整上游正文导入，仅移除技能发现 frontmatter 并调整本地交叉引用，避免被识别为额外的默认 Skill。
