module.exports = {
  title: 'bxliao',
  description: '记录，分享，技术成长',
  base: '/vuepress/',
  themeConfig: {
    nav: [{ text: '前端导航', link: '/SiteNav/basic' }, { text: '精选文章', link: '/Article/' }, { text: '数据结构与算法', link: '/Algorithm/Algorithm' }],
    sidebar: {
      '/Article/': [
        {
          title: '文章精选',
          children: ['']
        }
      ],
      '/SiteNav/': [
        {
          title: '前端导航',
          children: [['/SiteNav/basic', '前端基础'], ['/SiteNav/blog', '开发博客'], ['/SiteNav/github', 'Github'], ['/SiteNav/weekly', '技术周刊'], ['/SiteNav/meeting', '前端大会'], ['/SiteNav/backend', '后端开发'], ['/SiteNav/site', '社区门户']]
        }
      ],
      '/Algorithm/': [
        {
          title: '数据结构与算法',
          children: [
            {
              title: '数据结构',
              collapsable: false,
              children: ['/Algorithm/Algorithm']
            },
            {
              title: '算法',
              collapsable: false,
              children: ['/Algorithm/DataStruct']
            }
          ]
        }
      ]
    }
  }
};
