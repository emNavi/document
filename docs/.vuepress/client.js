import { defineClientConfig } from 'vuepress/client'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import CustomComponent from './theme/components/Custom.vue'
import Intro from './theme/components/intro.vue'
import Feature1 from './theme/components/feature1.vue'
import Feature2 from './theme/components/feature2.vue'
import Feature3 from './theme/components/feature3.vue'
import LrShow from './theme/components/lrshow.vue'
import BigTitle from './theme/components/bigtitle.vue'
import Spec from './theme/components/spec.vue'
import UsageSteps from './theme/components/usage_steps.vue'
import BlankRow from './theme/components/blank_row.vue'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('RepoCard', RepoCard)
    app.component('CustomComponent', CustomComponent)
    app.component('Intro', Intro)
    app.component('Feature1', Feature1)
    app.component('Feature2', Feature2)
    app.component('Feature3', Feature3)
    app.component('LrShow', LrShow)
    app.component('BigTitle', BigTitle)
    app.component('Spec',Spec)
    app.component('UsageSteps',UsageSteps)
    app.component('BlankRow',BlankRow)
  },
})