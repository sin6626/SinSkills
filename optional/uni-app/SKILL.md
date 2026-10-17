---
name: uni-app
description: >-
  Use when working on uni-app or uniapp projects, pages.json, manifest.json, Vue-based uni-app pages or components, uni APIs, condition compilation, mini-program, App, H5, HarmonyOS cross-platform development, uni-helper tooling, or any task mentioning uni-app, uniapp, 小程序, App 端, H5 端, or 跨端开发.
---

> The skill is based on uni-app documentation, generated at 2026-01-30.

uni-app is a Vue.js-based cross-platform framework for developing applications that run on iOS, Android, HarmonyOS, Web (responsive), and various mini-program platforms (WeChat/Alipay/Baidu/Douyin/Feishu/QQ/Kuaishou/DingTalk/Taobao/Jingdong/Xiaohongshu).

## Core

| Topic | Description | Reference |
|-------|-------------|-----------|
| Core Framework | Project structure, platform support, condition compilation | [core-framework](references/core-framework.md) |
| View Components | view, scroll-view, swiper, movable-area, cover-view | [core-view-components](references/core-view-components.md) |
| Form Components | input, textarea, picker, checkbox, radio, switch, slider | [core-form-components](references/core-form-components.md) |

## Features

### UI Components

| Topic | Description | Reference |
|-------|-------------|-----------|
| Media Components | image, video, camera, live-player, map | [feature-media-components](references/feature-media-components.md) |
| Navigation | navigator, routing, page navigation | [feature-navigation](references/feature-navigation.md) |
| UI Feedback | toast, modal, loading, action sheet, pull refresh | [feature-ui-feedback](references/feature-ui-feedback.md) |

### APIs

| Topic | Description | Reference |
|-------|-------------|-----------|
| Network | HTTP requests, file upload/download, WebSocket | [feature-network](references/feature-network.md) |
| Storage | Local storage, file system, caching | [feature-storage](references/feature-storage.md) |
| System Info | Device info, network status, screen, vibration | [feature-system-info](references/feature-system-info.md) |
| File Operations | Image/video selection, file system operations | [feature-file-operations](references/feature-file-operations.md) |
| Location | Geolocation, map component, address selection | [feature-location](references/feature-location.md) |
| Lifecycle | App and page lifecycle hooks | [feature-lifecycle](references/feature-lifecycle.md) |

## Configuration

| Topic | Description | Reference |
|-------|-------------|-----------|
| pages.json | Page routing, tab bar, global styles, sub-packages | [config-pages](references/config-pages.md) |
| manifest.json | App config, permissions, platform settings | [config-manifest](references/config-manifest.md) |

## Platform Support

| Platform | Support Level |
|----------|---------------|
| iOS App | Full support |
| Android App | Full support |
| HarmonyOS Next | Full support |
| H5/Web | Full support |
| WeChat Mini Program | Full support |
| Alipay Mini Program | Full support |
| Baidu Smart Program | Full support |
| Douyin Mini Program | Full support |
| QQ Mini Program | Full support |
| Kuaishou Mini Program | Full support |
| Feishu Mini Program | Full support |
| JD Mini Program | Full support |
| HarmonyOS Meta Service | Full support |

## Key Concepts

### Condition Compilation

Use special comments to write platform-specific code:

```vue
<!-- #ifdef APP-PLUS -->
<view>App only</view>
<!-- #endif -->

<!-- #ifdef MP-WEIXIN -->
<view>WeChat only</view>
<!-- #endif -->
```

### API Promise Support

Most uni-app APIs support Promise when no callback is provided:

```javascript
const res = await uni.request({ url: 'https://api.example.com' })
```

### UTS Custom Playground Boundary

For Android uni-app / uni-app x projects, do not ask the user to remake a custom playground just because normal app code changed.

- If the user only changed `.vue`, ordinary JavaScript, stores, or business logic in `utssdk/app-android/index.uts`, run on the already installed custom playground / device instead of cloud packaging again.
- Remake the custom playground only when the change affects the native shell: adding/removing native UTS plugins, `AndroidManifest.xml`, `res`, `assets`, `libs`, `config.json`, Android permissions, package name, native Gradle/dependency config, or `UTSAndroidHookProxy`.
- When diagnosing UTS build/runtime issues, first classify the change as "native shell change" vs "logic-only change" because cloud packaging queues are slow and unnecessary rebuilds hurt iteration speed.

### Cross-Platform Best Practices

1. Use uni-app components and APIs instead of platform-specific ones
2. Use condition compilation for platform-specific features
3. Test on all target platforms
4. Use rpx for responsive layouts
5. Handle platform differences in manifest.json
6. Use uni-helper tools when the project has them configured; otherwise use the project's existing tools.


### MCP扩展

当需要查询 uni-app 官方文档时，优先调用 `search-docs-by-Uniapp-official` MCP 工具搜索相关 API 文档和使用示例。

**使用场景：**
- 用户询问特定 API 的详细用法
- 需要官方文档中的代码示例
- 查询组件的属性和事件
- 了解 API 的平台兼容性

**工具安装：**
如果该 MCP 工具不可用，直接查阅 uni-app 官方文档和本技能的 references，不把安装 MCP 作为开工前提。用户需要该集成时，再提供 https://github.com/uni-helper/mcp 。
