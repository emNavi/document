import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '开发指南',
    icon: 'material-symbols:menu-book',
    items: [{ text: '示例', link: '/notes/demo/README.md' },
      { text: '无人机开发套件', link: '/notes/droneKit/README.md' },
    ]
  },
  {text: '关于', link: '/about.md'}
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

