/* Helios 技术教程 · 导航数据单一来源（只改这里，全站导航同步） */
window.MENTORS = {
  "费曼": "🔬", "柯南": "🔍", "福尔摩斯": "🎩", "诸葛亮": "🪶",
  "狄仁杰": "🏛️", "达芬奇": "🎨", "鲁班": "🔨", "包青天": "⚖️"
};

window.SITE_NAV = {
  siteName: "Helios 技术教程",
  homeLabel: "首页",
  tracks: [
    {
      id: "kotlin",
      name: "Kotlin",
      accent: "#b3402f",
      desc: "Kotlin Android 开发教程",
      tagline: "从语言特性到 Android 实战，为有编程基础的开发者打造的系统化学习路径",
      parts: [
        { title: "认识 Kotlin", chapters: [
          { num: 1, title: "Kotlin 的崛起与设计哲学", mentor: "费曼", method: "第一性原理" },
          { num: 2, title: "开发环境搭建", mentor: "鲁班", method: "工欲善其事" }
        ]},
        { title: "Kotlin 语言核心", chapters: [
          { num: 3, title: "基础语法速览", mentor: "柯南", method: "真相只有一个" },
          { num: 4, title: "面向对象编程", mentor: "诸葛亮", method: "运筹帷幄" },
          { num: 5, title: "Kotlin 的杀手级特性", mentor: "福尔摩斯", method: "排除不可能" },
          { num: 6, title: "协程入门", mentor: "费曼", method: "物理直觉" }
        ]},
        { title: "Android 开发入门", chapters: [
          { num: 7, title: "Android 应用基础", mentor: "狄仁杰", method: "系统分析" },
          { num: 8, title: "Jetpack Compose UI", mentor: "达芬奇", method: "艺术与工程" },
          { num: 9, title: "数据与网络", mentor: "柯南", method: "追踪数据流" }
        ]},
        { title: "踩坑与成长", chapters: [
          { num: 10, title: "新人成长路线与资源推荐", mentor: "费曼", method: "教是最好的学" }
        ]},
        { title: "深入进阶", chapters: [
          { num: 11, title: "泛型与异常处理", mentor: "福尔摩斯", method: "类型推理" },
          { num: 12, title: "Flow 响应式编程", mentor: "柯南", method: "链式推理" },
          { num: 13, title: "Compose 动画与副作用", mentor: "达芬奇", method: "赋予画面生命" }
        ]},
        { title: "工程实践", chapters: [
          { num: 14, title: "依赖注入实战", mentor: "诸葛亮", method: "架构如棋局" },
          { num: 15, title: "测试入门", mentor: "包青天", method: "铁面无私" },
          { num: 16, title: "综合项目实战", mentor: "狄仁杰", method: "统揽全局" }
        ]}
      ]
    },
    {
      id: "lvgl",
      name: "LVGL",
      accent: "#35536b",
      desc: "LVGL 嵌入式图形库教程",
      tagline: "从 MCU 到桌面模拟器，系统掌握 LVGL 嵌入式图形开发",
      parts: [
        { title: "认识 LVGL", chapters: [
          { num: 1, title: "LVGL 的崛起与本仓库解剖", mentor: "费曼", method: "第一性原理" },
          { num: 2, title: "开发环境搭建与第一个程序", mentor: "鲁班", method: "工欲善其事" }
        ]},
        { title: "核心机制", chapters: [
          { num: 3, title: "对象模型与屏幕", mentor: "柯南", method: "真相只有一个" },
          { num: 4, title: "显示、输入与渲染缓冲", mentor: "鲁班", method: "工欲善其事" },
          { num: 5, title: "常用 Widgets 上手", mentor: "狄仁杰", method: "系统分析" },
          { num: 6, title: "样式系统", mentor: "达芬奇", method: "艺术与工程" }
        ]},
        { title: "交互与表现", chapters: [
          { num: 7, title: "Flex/Grid 布局引擎", mentor: "诸葛亮", method: "运筹帷幄" },
          { num: 8, title: "事件系统", mentor: "柯南", method: "真相只有一个" },
          { num: 9, title: "动画与过渡", mentor: "达芬奇", method: "赋予画面生命" }
        ]},
        { title: "资源与数据", chapters: [
          { num: 10, title: "图像与字体", mentor: "福尔摩斯", method: "排除不可能" },
          { num: 11, title: "数据绑定与 Observer", mentor: "费曼", method: "第一性原理" },
          { num: 12, title: "LVGL Pro CLI 工作流（XML→C）", mentor: "鲁班", method: "工欲善其事" }
        ]},
        { title: "深入与实战", chapters: [
          { num: 13, title: "综合实战：做一个完整界面", mentor: "狄仁杰", method: "统揽全局" },
          { num: 14, title: "性能优化与内存管理", mentor: "诸葛亮", method: "运筹帷幄" },
          { num: 15, title: "集成与多平台部署", mentor: "包青天", method: "铁面无私" },
          { num: 16, title: "生态、成长路线与资源", mentor: "费曼", method: "教是最好的学" }
        ]}
      ]
    }
  ]
};
