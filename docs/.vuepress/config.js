module.exports = {
  title: "bxliao",
  description: "记录，分享，技术成长",
  base: "/vuepress/",
  themeConfig: {
    nav: [
      { text: "网址导航", link: "/SiteNav/recommend" },
      { text: "前端大全", link: "/CheckList/Javascript/grammar" },
      { text: "Node", link: "/Node/basic" },
      { text: "计算机知识", link: "/Computer/Linux" },
      { text: "设计模式与算法", link: "/Algorithm/DataStruct" },
      { text: "关于我", link: "/About" }
    ],
    sidebar: {
      "/CheckList/": [
        {
          title: "前端基础",
          children: [
            ["/CheckList/Javascript/grammar", "语法"],
            ["/CheckList/Javascript/object", "标准库"],
            ["/CheckList/Browser/ajax", "网络请求"],
            ["/CheckList/Browser/window", "Window"],
            ["/CheckList/Browser/dom", "Dom"],
            ["/CheckList/Browser/event", "Event"],
            ["/CheckList/Browser/other", "其他"]
          ]
        },
        {
          title: "前端规范",
          children: [["/CheckList/rule/ide", "IDE"]]
        },
        {
          title: "前端工程化",
          children: [
            ["/CheckList/project/npm", "NPM"],
            ["/CheckList/project/babel", "BABEL"],
            ["/CheckList/project/build", "BUILD"],
            ["/CheckList/project/cli", "CLI"]
          ]
        }
      ],
      "/Computer/Linux": [
        ["/Computer/Linux", "Linux"],
        ["/Computer/Nginx", "Nginx"],
        ["/Computer/Mysql", "Mysql"],
        ["/Computer/Mongose", "Mongose"],
        ["/Computer/Docker", "Docker"]
      ],
      "/SiteNav": [
        ["/SiteNav/recommend", "网址收录"],
        ["/SiteNav/article", "文章收录"]
        // ["/SiteNav/basic", "前端基础"],
        // ["/SiteNav/blog", "开发博客"],
        // ["/SiteNav/github", "Github"],
        // ["/SiteNav/weekly", "技术周刊"],
        // ["/SiteNav/meeting", "前端大会"],
        // ["/SiteNav/backend", "后端开发"],
        // ["/SiteNav/site", "社区门户"]
      ],
      "/Node": [["/Node/basic", "Node"]],
      "/Algorithm": [
        ["/Algorithm/DataStruct", "数据结构"],
        ["/Algorithm/designPattern", "设计模式"]
      ]
    }
  }
};
