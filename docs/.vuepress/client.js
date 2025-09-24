import { defineClientConfig } from 'vuepress/client'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import CustomComponent from './theme/components/Custom.vue'
import Intro from './theme/components/intro.vue'

import LrShow from './theme/components/lrshow.vue'
import BigTitle from './theme/components/bigtitle.vue'
import Spec from './theme/components/spec.vue'
import UsageSteps from './theme/components/usage_steps.vue'
import BlankRow from './theme/components/blank_row.vue'
import FeatureType1 from './theme/components/feature_type_1.vue'
import FeatureType2 from './theme/components/feature_type_2.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('RepoCard', RepoCard)
    app.component('CustomComponent', CustomComponent)
    app.component('Intro', Intro)
    app.component('LrShow', LrShow)
    app.component('BigTitle', BigTitle)
    app.component('Spec',Spec)
    app.component('UsageSteps',UsageSteps)
    app.component('BlankRow',BlankRow)
    app.component('FeatureType1', FeatureType1)
    app.component('FeatureType2', FeatureType2)
  },
})