<template>
    <div class="feature-type-container" >
        <br>
        <div class="lrshow-container">

            <div class="lrshow-image">
                <img :src=imageUrl alt="Feature Image" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <div class="lrshow-content">
                <div class="lrshow-title-small">{{ subtitle }}</div>
                <div class="lrshow-title-large">{{ title }}</div>
                <div class="lrshow-desc">
                    {{ description }}
                </div>
            </div>
        </div>
    </div>

    <!-- <br> -->
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: '无惧干扰'
    },
    subtitle: {
        type: String,
        default: '天空地表皆智能，一体适配全场景'
    },
    description: {
        type: String,
        default: '仅使用内置传感器，无惧GNSS拒止环境，100 km² 区域，首次大范围搜索定位所需时间低于5秒。后续持续提供不低于 15Hz 的 6-Dof 平滑定位输出'
    },
    imageUrl: {
        type: String,
        default: 'http://file.emnavi.tech/MEDIA_ASSETS/GhostLoc/GhostLoc_render.png'
    }
})
const title = props.title
const subtitle = props.subtitle
const description = props.description
const imageUrl = props.imageUrl


</script>

<style scoped>
.feature-type-container {
    margin-top: 15px;
    text-align: center;
    margin-bottom: 15px;
}
html[data-theme="light"] .feature-type-container {
    background: #ffffff;
}
html[data-theme="dark"] .feature-type-container {
    background: rgb(27, 27, 31);
}
.lrshow-container {
    display: flex;
    align-items: stretch;
    border-radius: 24px;
    overflow: hidden;
    color: #77ace9;
    max-width: 1100px;
    margin: 0 auto;
    
    /* background: var(--vp-c-bg-alt, #ffffff); */
    
}
html[data-theme="light"] .lrshow-container {
    background: #f8f8f8b2;
    border-color: #f8f8f8;
    border-width: 1px;
    border-style: solid;
}
html[data-theme="dark"] .lrshow-container {
    background: #27292c;

}


/*  */
.lrshow-image {
    flex: 1.2;
    min-width: 0;
}
.lrshow-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
html[data-theme="light"] img {
    filter: brightness(1);
}

html[data-theme="dark"] img {
    filter: brightness(0.8);
}

.lrshow-content {
    flex: 1.5;
    padding: 60px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.lrshow-title-small {
    font-size: 20px;
    color: #b3c7e6;
    margin-bottom: 16px;
}
.lrshow-title-large {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 24px;
    line-height: 1.2;
}
.lrshow-desc {
    font-size: 18px;
    color: #86909e;
    line-height: 1.7;
}
</style>

