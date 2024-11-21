import { defineNoteConfig, defineNotesConfig, } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  // sidebar: ['', 'foo', 'bar'],
  sidebar: 'auto',
  // sidebar: [
  //   { text: 'X152b', collapsed: true, items: [
  //     { text: 'foo', link: 'foo' },
  //     { text: 'bar', link: 'bar' },
  //   ] },
  //   { text: 'X190g', collapsed: true, items: [
  //     { text: 'foo', link: 'foo' },
  //     { text: 'bar', link: 'bar' },
  //   ] },
  //   { text: 'X255c',  link: '/ppx', collapsed: true, items: 'auto',},
  //   // { text: '介绍', link: 'foo' },
  //   // { text: '使用', link: 'bar' },
  // ]
})

const zhDroneKitNote = defineNoteConfig({
  dir: 'droneKit',
  link: '/droneKit',
  sidebar: 'auto',
})


export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhDemoNote,zhDroneKitNote],
})


