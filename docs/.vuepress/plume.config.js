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
  footer: {message:"",copyright:"Copyright © 2024 emNavi 版权所有"},
  appearance: true,


  social: [
    { icon: 'github', link: '/' },
  ],

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
