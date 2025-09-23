<script setup lang="ts">
// 这里是 bigtitle.vue 的脚本部分
// 你可以根据图片内容自定义标题、副标题和按钮文字
import { ref, defineProps } from 'vue'

const title = ref(' GhostLoc\n匹配定位系统')
const subtitle = ref('无惧干扰，实时恢复相机位姿')
const buttonText = ref('EXPLORE')

const props = defineProps({
    planetUrl: {
        type: String,
        default: 'https://w.wallhaven.cc/full/d5/wallhaven-d5vkgl.jpg'
    }
})
const planetUrl = props.planetUrl
</script>

<template>
    <div class="bigtitle-container">
        <div class="bigtitle-content">
            <h1 class="bigtitle-title">
                <span v-for="line in title.split('\n')" :key="line">{{ line }}</span>
            </h1>
            <p class="bigtitle-subtitle">{{ subtitle }}</p>
            <button class="bigtitle-btn">
                {{ buttonText }}
                <span class="arrow">→</span>
            </button>
        </div>
        <div class="bigtitle-planet" :style="{ backgroundImage: `url('${planetUrl}')` }"></div>
    </div>
</template>


<style scoped>
.bigtitle-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    background: #000;
    position: relative;
    overflow: hidden;
}
.bigtitle-content {
    z-index: 2;
    color: #fff;
    margin-left: 10%;
    max-width: 700px;
}
.bigtitle-title {
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.1;
    letter-spacing: 2px;
    margin-bottom: 24px;
}
.bigtitle-title span {
    display: block;
}
.bigtitle-subtitle {
    font-size: 1.1rem;
    margin-bottom: 32px;
    color: #ccc;
}
.bigtitle-btn {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 12px 32px;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
}
.bigtitle-btn:hover {
    background: #fff;
    color: #000;
}
.arrow {
    font-size: 1.2em;
}
.bigtitle-planet {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 50vw;
    height: 100vh;
    background: url('https://sxcontent9668.azureedge.us/cms-assets/assets/mars2020_homepage_3840x2560_9e6c9b6c3e.jpg') no-repeat center right;
    background-size: cover;
    mask-image: radial-gradient(circle at 60% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle at 60% 50%, #000 70%, transparent 100%);
    pointer-events: none;
}
@media (max-width: 900px) {
    .bigtitle-title {
        font-size: 2.2rem;
    }
    .bigtitle-planet {
        width: 100vw;
        opacity: 0.3;
        left: 0;
        right: unset;
        top: unset;
        bottom: 0;
        height: 50vh;
        transform: none;
        background-position: center bottom;
    }
    .bigtitle-content {
        margin-left: 12px;
        max-width: 95vw;
    }
}
</style>
