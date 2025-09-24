import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '飞行平台系列',
    icon: 'material-symbols:airplane-ticket',
    items: [
      { text: 'X152b 飞行平台', link: '/notes/X152b/README.md' },
      { text: 'X280 飞行平台', link: '/notes/X280/README.md' },
    ]
  },
  // {text: '视觉定位导航套件', link: '/notes/GhostLoc/README.md'}
  // {text: '关于', link: '/about.md'}
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

