---
name: course-report-diagrams
description: Create Mermaid or PlantUML diagrams for course-design reports, experiment reports, graduation-project docs, and defense PPTs. Use when the user asks for business flowcharts, system architecture diagrams, ER diagrams, class diagrams, use-case diagrams, sequence diagrams, module diagrams, or wants diagrams to follow a fixed academic-report style such as black-and-white, concise professional layout, Chinese labels, and ready-to-paste figure captions.
---

# Course Report Diagrams

## Overview

Generate report-ready diagram code that follows a stable academic style instead of ad hoc visual choices. Default to concise, professional, Chinese-labeled diagrams that can be pasted into Markdown, Mermaid editors, PlantUML renderers, reports, or PPTs with minimal cleanup.

## Workflow

1. Identify the diagram type and report context.
2. Read `references/report-style.md` before drafting any diagram code.
3. Read `references/diagram-templates.md` and pick the matching template rules for the requested diagram type.
4. Output code first, with the exact labels and structure needed by the user's current report section.
5. When the request is report-oriented, also provide a recommended figure caption in the form `图 x-x xxx`.

## Output Rules

- Default to Chinese labels unless the user explicitly asks for English.
- Default to a black-white or restrained professional style. Do not add playful colors, gradients, mascots, or decorative wording unless the user asks.
- Prefer direct, renderable code blocks. Do not only describe the diagram verbally.
- Keep node text short and academically named. Prefer terms such as `前端页面`, `后端服务`, `数据库`, `设备端`, `控制请求`, `历史数据`.
- Keep diagram structure clean enough to fit reports and答辩 PPTs. Avoid unnecessary branches, dense crossing lines, or oversized labels.
- When the user is writing a report, prefer returning:
  1. `推荐图注`
  2. `推荐代码`
  3. `使用说明`
- If the user only asks for code, return only the code and a one-line caption suggestion.

## Tool Choice

- Prefer `Mermaid` for:
  - 业务流程图
  - 系统分层架构图
  - 模块关系图
  - 时序图
  - E-R 图
- Prefer `PlantUML` for:
  - 类图
  - 用例图
  - relationships that need clearer UML semantics
- If the user explicitly names a format, follow that format.
- If the report needs easy Markdown embedding, bias toward `Mermaid`.

## Behavior Rules

- Do not invent hardware-layer details when the user says the report only covers the application layer.
- Reuse the user's confirmed terminology from the current project whenever available.
- If the user already approved a previous style in the thread, keep following it unless asked to change.
- When the user asks for “按之前那个标准”, reuse the same black-white academic style, concise node naming, and caption style without asking again.
- When a diagram is likely to be inserted into WPS/Word/PPT, prefer vertical or compact layouts over ultra-wide layouts unless the content clearly benefits from horizontal flow.

## References

- Always read `references/report-style.md`.
- Read `references/diagram-templates.md` for diagram-type-specific rules and output templates.
