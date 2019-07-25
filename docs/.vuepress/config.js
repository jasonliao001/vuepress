module.exports = {
  title: 'bxliao',
  description: '记录，分享，技术成长',
  base: '/vuepress/',
  themeConfig: {
    // { text: '数据结构与算法', link: '/Algorithm/Algorithm' }
    nav: [{ text: '前端导航', link: '/SiteNav/basic' }, { text: '优选文章', link: '/Article/' }, { text: '学习归纳', link: '/Summary/designPattern' }, { text: '前端自检', link: '/CheckList/Javascript/grammar' }],
    sidebar: {
      '/Summary/': [['/Summary/designPattern', '设计模式'], ['/Summary/cssworld', 'Css世界'], ['/Summary/webpack', 'Webpack']],
      '/Article/': [['/Article/', '优选文章']],
      '/CheckList/': [
        {
          title: 'Javascript',
          children: [['/CheckList/Javascript/grammar', '语法'], ['/CheckList/Javascript/object', '标准库']]
        },
        {
          title: 'Algorithm',
          children: [['/CheckList/Algorithm/DataStruct', '数据结构'], ['/CheckList/Algorithm/Algorithm', '算法']]
        },
        {
          title: 'Framework',
          children: [['/CheckList/Framework/Vue/Vue', 'Vue'], ['/CheckList/Framework/React/React', 'React']]
        },
        {
          title: 'Browser',
          children: [['/CheckList/Browser/ajax', '网络请求'], ['/CheckList/Browser/window', 'window'], ['/CheckList/Browser/dom', 'dom']]
        }
      ],
      '/SiteNav/': [
        {
          title: '前端导航',
          children: [['/SiteNav/basic', '前端基础'], ['/SiteNav/blog', '开发博客'], ['/SiteNav/github', 'Github'], ['/SiteNav/weekly', '技术周刊'], ['/SiteNav/meeting', '前端大会'], ['/SiteNav/backend', '后端开发'], ['/SiteNav/site', '社区门户']]
        }
      ]
    }
  }
};
