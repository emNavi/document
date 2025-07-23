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

const zhMaidouNote = defineNoteConfig({
  dir: 'X280',
  link: '/X280',
  sidebar: 'auto',
})

const zhDroneKitNote = defineNoteConfig({
  dir: 'droneKit',
  link: '/droneKit',
  sidebar: 'auto',
})

const enAirGymNote = defineNoteConfig({
  dir: 'AirGym',
  link: '/AirGym/',
  sidebar: [
    { text: 'AirGym Sim2Real', link: '/AirGym/'},
    { text: 'System Overview',  link: '/AirGym/Overview/'},
    { text: 'AirGym-Sim',  link: '/AirGym/AirGym-Sim/', collapsed: true, 
      items:[{text: 'Dynamics', link: '/AirGym/AirGym-Sim/dynamics/'},
        {text: 'Tasks', link: '/AirGym/AirGym-Sim/tasks/'},]},
    { text: 'rlPx4Controller',  link: '/AirGym/rlPx4Controller/'},
    { text: 'AirGym-Real',  link: '/AirGym/AirGym-Real/',},
    { text: 'control_for_gym',  link: '/AirGym/control_for_gym/'},]

})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhDemoNote,zhMaidouNote,zhDroneKitNote, enAirGymNote],
})


