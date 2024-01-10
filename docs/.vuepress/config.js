import { defaultTheme, defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  lang: 'zh-CN',
  title: '絮语',
  description: '闲言',
  plugins: [
    mdEnhancePlugin({
      mathjax: true,
      mermaid: true,
      mark: true,
      footnote: true,
      tabs: true,
      alert: true,
      component: true
    })
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "车辆工程笔记",
        link: "/车辆工程笔记"
      }
    ]
  }),
  markdown: {
    headers: {
      level: [1, 3]
    }
  }
})