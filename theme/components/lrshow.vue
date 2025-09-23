<template>
    <div style="text-align: center; margin-top: 20px;">
        <br>
        <div class="lrshow-container">

            <div class="lrshow-image">
                <video src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/X280_video/NoMachine.mp4" controls autoplay loop muted style="width: 100%; height: 100%; object-fit: cover; display: block;"></video>
            </div>
            <div class="lrshow-content">
                <div class="lrshow-title-small">视觉定位，突破限制</div>
                <div class="lrshow-title-large">GPS拒止环境下的定位系统</div>
                <div class="lrshow-desc">
                    本系统基于视觉传感与智能算法，在GPS信号受限或拒止环境下，实现高精度定位。适用于复杂场景，保障设备在无卫星信号条件下依然能够精准导航与定位，助力多领域智能应用。
                </div>
            </div>
        </div>
    </div>

    <br>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    document.documentElement.classList.add('dark');
});
</script>

<style scoped>
.lrshow-container {
    display: flex;
    align-items: stretch;
    background: #ffffff;
    border-radius: 24px;
    overflow: hidden;
    color: #77ace9;
    max-width: 1100px;
    margin: 0 auto;
    
    /* background: var(--vp-c-bg-alt, #ffffff); */
    
}
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
