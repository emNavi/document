import { defineThemeConfig } from 'vuepress-theme-plume'
import { zhNavbar } from './navbar'
import { zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'notebook.svg',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',
  footer: {message:"京ICP备2025111037号    联系方式: +86 18910736716",copyright:"Copyright © 2025 emNavi.All Rights Reserved."},
  appearance: true,


  // social: [
  //   { icon: 'github', link: '/' },
  // ],

  locales: {
    '/': {
      profile: {
        avatar: 'notebook.svg',
        name: 'emNavi',
        description: '',
        // circle: true,
        // location: '',
        organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
  },
})
