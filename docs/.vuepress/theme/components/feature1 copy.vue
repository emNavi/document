<script setup lang="ts">
import { ref, onMounted } from 'vue'

const title = ref('无惧干扰')
const intro = ref('GhostLoc')

const video_url = ref('https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/intro/GNSS_VPS_demo34.mp4')

// 手动实现 loop，避免重新下载
onMounted(() => {
  const video = document.getElementById('demo-video') as HTMLVideoElement
  if (video) {
    video.addEventListener('ended', () => {
      video.currentTime = 0
      video.play()
    })
  }
})
</script>

<template>
  <div style="text-align: center; margin-top: 20px;">
    <br />
    <div style="font-size: 48px; color: #6ba6c7; font-weight: 400; margin-bottom: 20px">
      {{ title }}
    </div>
    <div
      style="font-size: 20px; color: #444; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;"
    >
      <b>{{ intro }}</b> 视觉定位系统通过图像与地图匹配，实时恢复无人机位置，具备高精度鲁棒性强等优势，适用于高空导航、定位安全等场景
    </div>
    <div
      style="border-radius: 16px; padding: 24px 0; display: flex; justify-content: center; align-items: center;"
    >
      <video
        id="demo-video"
        :src="video_url"
        autoplay
        muted
        playsinline
        preload="auto"
        controlslist="nodownload"
        style="max-width: 90%; width: 50%; border-radius: 12px"
      ></video>
    </div>
  </div>
</template>