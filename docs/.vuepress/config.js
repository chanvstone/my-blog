import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: 'zh-CN',
  title: '絮语',
  description: '碎语闲言叙人间繁芜',
  theme: hopeTheme({
    author: {
      name: "SiO2",
      url: "github.com/chanvstone",
      email: "unlimiteds@qq.com"
    },
    blog: {
      name: "SiO2",
      avatar: "../.author/dog.jpg",
      roundAvatar: true,
      description: "学习真的好累啊！！！",
      medias: {
        GitHub: "https://github.com/chanvstone",
        QQ: "https://qm.qq.com/q/QwjyHAF4Ye",
        Wechat: "https://u.wechat.com/EKxaipzroTnhlP-MFS-iVa4"
      }
    }
    ,
    navbar: [
      {
        text: "文章分类",
        link: "/category"
      },
      {
        text: "标签浏览",
        link: "/tag"
      },
      {
        text: "时间线",
        link: "/timeline"
      },
      {
        text: "星标文章",
        link: "/star"
      }
    ],
    plugins: {
      blog: true,
      mdEnhance: {
        mathjax: true,
        mermaid: true,
        mark: true,
        footnote: true,
        tabs: true,
        alert: true,
        component: true
      }
    }
  }, {

  }),
  markdown: {
    headers: {
      level: [1, 3]
    }
  }
})