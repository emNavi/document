<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
    videoUrl: {
        type: String,
        default: 'https://file.emnavi.tech/MEDIA_ASSETS/GhostLoc/ghostloc_intro_video.m4v' // 替换为你的视频链接
    },
    planetUrl: {
        type: String,
        default: 'https://w.wallhaven.cc/full/d5/wallhaven-d5vkgl.jpg'
    },
    title: {
        type: String,
        default: 'GhostLoc\n高空视觉定位系统'
    },
    subtitle: {
        type: String,
        default: '无惧干扰，实时精准定位'
    },
    buttonText: {
        type: String,
        default: 'EXPLORE'
    }
})
const videoUrl = props.videoUrl
const title = ref(props.title)
const subtitle = ref(props.subtitle)
const buttonText = ref(props.buttonText)
</script>

<template>
    <div class="bigtitle-container">
        <div class="bigtitle-content">
            <h1 class="bigtitle-title">
                <span v-for="line in title.split('\n')" :key="line">{{ line }}</span>
            </h1>
            <p class="bigtitle-subtitle">{{ subtitle }}</p >
            <a href="#next-section" class="bigtitle-btn">
                {{ buttonText }}
                <span class="arrow">→</span>
            </a>
        </div>
        <video
            class="bigtitle-video"
            :src="videoUrl"
            autoplay
            loop
            muted
            playsinline
        ></video>
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
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.bigtitle-btn:hover {
    background: #fff;
    color: #000;
}
.arrow {
    font-size: 1.2em;
}
.bigtitle-video {
    position: absolute;
    right: 0;
    top: 44%;
    transform: translateY(-50%);
    width: 65vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
    pointer-events: none;
    mask-image: radial-gradient(circle at 60% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle at 60% 50%, #000 70%, transparent 100%);
}
@media (max-width: 980px) {
    .bigtitle-title {
        font-size: 2.2rem;
        /* vertical-align: bottom; */
    }
    .bigtitle-video {
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        max-height: 60vh;
        left: 0;
        right: 0;
        top: 0vh;
        bottom: 0;
        opacity: 0.9;
        position: absolute;
        transform: none;
        /* object-fit: cover; */
        object-position: center right;
        max-width: 100vw;
    }
    .bigtitle-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /* min-height: 50vh; */
        background: #000;
        position: relative;
        overflow: hidden;
    }
}
/* @media (max-width: 600px) {
    .bigtitle-subtitle {
        font-size: 0.9rem;
    }
    .bigtitle-btn {
        padding: 10px 24px;
        font-size: 0.9rem;
    }
    .bigtitle-video {
        width: 100vw;
        opacity: 0.3;
        left: 0;
        right: unset;
        top: unset;
        bottom: 0;
        height: 50vh;
        transform: none;
        object-position: top bottom;
    }
} */
</style>