# 多技术教程网站（Kotlin + LVGL）设计文档

- **日期**：2026-08-03
- **状态**：已获用户认可
- **仓库**：`kotlin-tutorial`（现有 GitHub Pages 教材站，remote: `git@github.com:Helioswei/kotlin-tutorial.git`）

## 1. 目标

把现有 `kotlin-tutorial` 静态教材网站从单一 Kotlin 教程扩展为 **Kotlin + LVGL 双技术线**网站：

1. **保留并迁移**现有 16 章 Kotlin 教程（内容不变，仅调整目录结构与链接）。
2. **新增**一套「LVGL 从入门到深入」教程（16 章，中文，导师体系），内容以 `lvgl-sample` 工作区（LVGL v9.5.0 库 + LVGL Pro CLI）为真实案例。
3. **根目录改造**为多技术门户首页。

## 2. 站点架构（已定：方案 A 子目录化）

```
kotlin-tutorial/  ← GitHub Pages 仓库根
├── index.html        新：多技术门户首页
├── style.css         扩展：技术线配色、门户卡片
├── script.js         扩展：导航高亮、下拉
├── kotlin/
│   ├── index.html    Kotlin 目录（迁移自根 index.html）
│   └── chapter01-16.html（迁移，改相对链接）
├── lvgl/
│   ├── index.html    LVGL 目录（新）
│   └── chapter01-16.html（新）
└── README.md、CLAUDE.md  更新为多技术说明
```

### 导航模型

- 顶栏统一为：`首页 | Kotlin ▾ | LVGL ▾`；每个技术线下拉列出该技术线的分章链接。
- 章节页保留「该技术线局部下拉导航 + 底部 上一章/下一章」的既有模式。
- 相对路径：子目录页引用 `../style.css`、`../script.js`、`../index.html`。

### 门户首页（根 index.html）

- Hero：站点名（暂定「Helios 技术教程」）+ tagline。
- 两张技术卡片：**Kotlin Android 开发教程**、**LVGL 嵌入式图形库教程**，各带简介与进入链接。
- 延续现有 Catppuccin 风格与 `.container` 布局。

## 3. Kotlin 迁移

- `index.html` → `kotlin/index.html`，导航改为技术线下拉（去掉「目录」旧链接，新增「LVGL」tab）。
- `chapter01-16.html` → `kotlin/chapter01-16.html`：所有内部链接改相对路径（`../style.css`、`../script.js`、`../index.html`、同级 `chapterXX.html`）；每页导航同步加「LVGL」tab；底部上一/下一章链接保持同级。
- **代价**：旧 URL（如 `chapter05.html`）变为 `/kotlin/chapter05.html`，已在需求对齐时确认接受。

## 4. LVGL 教程大纲（16 章）

全部基于 `lvgl-sample/` 真实内容：`lv_conf_template.h`/`lv_conf.h` 配置、CMake 集成、SDL 模拟器、`examples/porting` 模板、`src/` 子系统（core/widgets/draw/display/indev/layouts/libs/font/image）、`examples/xml_project` + `lved generate` 的 XML→C 流程。

| 部分 | 章 | 标题 | 导师 |
|------|----|------|------|
| 认识 LVGL | 01 | LVGL 的崛起与本仓库解剖 | 费曼 |
| | 02 | 开发环境搭建与第一个程序 | 鲁班 |
| 核心机制 | 03 | 对象模型与屏幕 | 柯南 |
| | 04 | 显示、输入与渲染缓冲 | 鲁班 |
| | 05 | 常用 Widgets 上手 | 狄仁杰 |
| | 06 | 样式系统 | 达芬奇 |
| 交互与表现 | 07 | Flex/Grid 布局引擎 | 诸葛亮 |
| | 08 | 事件系统 | 柯南 |
| | 09 | 动画与过渡 | 达芬奇 |
| 资源与数据 | 10 | 图像与字体 | 福尔摩斯 |
| | 11 | 数据绑定与 Observer | 费曼 |
| | 12 | LVGL Pro CLI 工作流（XML→C） | 鲁班 |
| 深入与实战 | 13 | 综合实战：用本仓库做一个完整界面 | 狄仁杰 |
| | 14 | 性能优化与内存管理 | 诸葛亮 |
| | 15 | 集成与多平台部署 | 包青天 |
| | 16 | 生态、成长路线与资源 | 费曼 |

每章结构沿用 Kotlin 教程约定：导师人设引导、章节正文、代码块（Catppuccin 手动 `<span>` 高亮）、章末 3-5 道折叠练习（入门/进阶/挑战三档，含提示与答案）。

## 5. 构建方式与工具

- **零依赖手写 HTML**：不引入框架/构建工具，严格遵循 `kotlin-tutorial/CLAUDE.md` 既有约定（全中文、`.tip`/`.warning` 标注、`.container` 宽 860px、768/480 响应式断点）。
- **首章模板先行**：先手工完成 `lvgl/chapter01.html` 作为风格基准，再批量产出其余章节，保证一致性。
- **可用 skill/agent**：门户与导航改版用 `frontend-design` skill 打磨；章节批量生成可用 `Agent`（如 Frontend Developer）并行，但模板已固定。
- **实施**：通过 `superpowers:writing-plans` 产出逐步实施计划后执行。

## 6. 文档更新

- `kotlin-tutorial/CLAUDE.md`：更新为多技术站点结构、迁移后的链接约定、LVGL 章节导航同步规则。
- `kotlin-tutorial/README.md`：更新为双技术线说明与新目录结构。

## 7. Git 与部署

- 所有改动提交到 `kotlin-tutorial` 仓库（唯一 remote 即 GitHub Pages）。
- 部署不变：GitHub Pages；迁移后 `/` → 门户，`/kotlin/`、`/lvgl/` → 各技术线。
- `lvgl-sample` 父目录不是 git 仓库，不参与提交。

## 8. 测试与验收

- 本地 `python3 -m http.server` 预览。
- 全站链接检查：门户 → 两技术线 → 章节 → 上一/下一章 闭环；子目录相对路径正确。
- 每个技术线导航下拉与高亮正确；Kotlin 章节内容零改动。
- 提交后（可选）push 到 GitHub Pages 验证线上。

## 9. 范围外（YAGNI）

- 不引入 JS 框架、静态站点生成器或构建流水线。
- 不新增第三门技术线（架构预留，本期不做）。
- 不重写 Kotlin 章节内容；不做搜索/深色模式/评论等增强。
