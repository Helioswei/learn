# CLAUDE.md

本文件为 Claude Code（claude.ai/code）在操作本仓库时提供指引。

## 项目概览

**Helios 技术教程** — 多技术静态教程站：**Kotlin**（Android 开发）、**LVGL**（嵌入式图形库）、**ESP32 电子墨水屏**（电子书阅读器实战）三条技术线，各 16 章。纯 HTML + CSS + 原生 JavaScript，零框架、零构建工具，直接以静态文件部署到 GitHub Pages（仓库根）。

- Kotlin 线：从语言特性到 Android 实战（语法、协程、Jetpack Compose、架构等）。
- LVGL 线：基于真实 `lvgl-master` 源码仓库（版本 **9.6.0-dev**）的嵌入式图形教程。
- ESP32 电子墨水屏线：基于真实 `diy-esp32-epub-reader` 项目的电子书阅读器实战（EPUB 解析、EPDiy 渲染、低功耗）。

## 目录结构

- `index.html` — 门户首页（两条技术线入口）
- `style.css` — 统一浅色设计系统：顶部 `:root` 定义 design tokens（颜色 / 字体 / 圆角 / 阴影），`body.track-lvgl` / `body.track-epub` 覆盖各线强调色（Kotlin 朱砂红 · LVGL 墨藏蓝 · ESP32 琥珀金）；改全站观感只改这里
- `site-nav.js` — **导航数据单一来源**：`window.MENTORS`（导师 → emoji）+ `window.SITE_NAV`（站名、技术线、分部、章节、导师、方法论）
- `script.js` — 依赖 `site-nav.js`，负责顶栏下拉导航、底部上一章/下一章、目录页 TOC、代码复制按钮的渲染
- `preview.html` — 设计系统预览页（组件与 tokens 一览，仅作开发参考）
- `kotlin/` — `index.html`（目录页）+ `chapter01-16.html`
- `lvgl/` — `index.html`（目录页）+ `chapter01-16.html`
- `epub/` — `index.html`（目录页）+ `chapter01-16.html`
- `tools/check-links.js` — 全站链接 + SITE_NAV 导航校验脚本（Node，由 Task 8 建立；用法见「校验」）
- `docs/` — superpowers 设计与计划文档（非站点内容）

## 导航约定（关键）

- **改导航 / 章节 / 导师 → 只改 `site-nav.js` 的 `SITE_NAV` / `MENTORS`**。禁止在页面 HTML 里写死导航——顶栏、目录、上一章/下一章均由 `script.js` 依据 `SITE_NAV` 自动渲染。
- 每个页面 `<body>` 必须声明：
  - `class="track-*"` — 技术线标识（`track-kotlin` / `track-lvgl` / `track-epub`），决定强调色
  - `data-track` — 技术线 id（`kotlin` / `lvgl` / `epub`）；门户与 preview 页可省略
  - `data-chapter` — 章节页编号（章节页必填）；Kotlin 用两位补零（如 `"01"`），LVGL 用非补零（如 `"1"`），`script.js` 用 `parseInt` 解析，两者均可
  - `data-root` — 相对根：子目录章节/目录页用 `"../"`，根目录页面（门户、preview）用 `"./"`
- **链接一律相对路径**。GitHub Pages 部署在 `/learn/` 子路径，以 `/` 开头的根绝对路径会失效。
- **脚本顺序**：`site-nav.js` 必须在 `script.js` 之前加载。

## 提交规范

- git 提交信息**不带** `Co-Authored-By: Claude <noreply@anthropic.com>` 尾注。

## 内容约定

- **语言**：全站中文（zh-CN）。正文、UI 标签、HTML 注释一律中文。
- **导师体系**：每章一位导师（费曼、柯南、福尔摩斯、诸葛亮、狄仁杰、达芬奇、鲁班、包青天），以 `mentor-card` 区块 + 人设引言开场，章末按导师方法论收束。
- **代码高亮**：手动 `<span>` 类标记（无 JS 高亮库），类名：`.kw`、`.type`、`.str`、`.num`、`.cmt`、`.fn`、`.ann`、`.op`、`.param`。
- **组件**：`.tip`（含 `.tip-title`）、`.warning`、`.exercise`（章末练习，入门/进阶/挑战三档 + 折叠提示/答案）、`.cpp-note`（C++ 开发者对照，Kotlin 线）。
- **LVGL 内容真实性**：所有引用（API 名、宏、结构体、路径）必须真实存在于 `/Users/helios/work/project/lvgl-sample/lvgl-master/`；版本号统一为 **9.6.0-dev**（以 `lv_version.h` 为准）。

## 校验

全站链接校验（Node；`tools/check-links.js` 由 Task 8 建立——若 `tools/` 尚不存在，则先执行 Task 8，本说明记录最终用法）：

```bash
cd /Users/helios/work/project/lvgl-sample/learn && node tools/check-links.js
```

预期输出 `OK: all links resolve`，退出码 0=通过 / 1=失败；出现 `BROKEN` 时修复对应页面后重跑。

## 本地预览

```bash
python3 -m http.server 8000
```

浏览器访问 `http://localhost:8000`（若 8000 被其他服务占用，改用空闲端口如 `8090`）；或直接用浏览器打开 `index.html`。
