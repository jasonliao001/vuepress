module.exports = {
  title: 'bxLiao',
  description: '分享，记录，一个人的技术成长',
  base: '/vuepress/',
  themeConfig: {
    // nav: [{ text: '大前端', link: '/fontend/' }, { text: '前端导航', link: '/siteNav/fontendbasic' }, { text: '精选文章', link: '/article/' }, { text: '数据结构与算法', link: '/' }, { text: '标签', link: '/' }, { text: '关于我', link: '' }],
    nav: [{ text: '前端导航', link: '/SiteNav/fontendbasic' }, { text: '精选文章', link: '/Article/' }, { text: '数据结构与算法', link: '/Algorithm/Algorithm' }],
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
          children: [['/SiteNav/fontendbasic', '前端基础'], ['/SiteNav/blog', '开发博客']]
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
