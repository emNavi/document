<script setup lang="ts">
import { ref } from 'vue'
import type { ThemeHomeConfigBase } from 'vuepress-theme-plume'
import { defineProps } from 'vue'

const props = defineProps<ThemeHomeConfigBase & {
//   imageUrl: string
//   title: string
//   intro: string
}>()

const title = ref(props.title)
const intro = ref(props.intro)

const image_url = ref(props.imageUrl)
</script>

<template>
    <div style="text-align: center; margin-top: 20px;">
        <br>
        <div style="font-size: 48px; color: #6ba6c7; font-weight: 400; margin-bottom: 20px">
            {{ title }}
        </div>
        <div style="font-size: 20px; color: #444; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">
            <b>{{ intro }}</b> 匹配定位系统通过图像与地图匹配，实时恢复相机位姿，具备高精度、鲁棒性强等优势，适用于导航、AR、机器人等场景
        </div>
        <div style="border-radius: 16px; padding: 24px 0; display: flex; justify-content: center; align-items: center;">
            <img :src="image_url" alt="Image" style="max-width: 55%; border-radius: 12px;" />
        </div>
    </div>
</template>
