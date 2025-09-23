<template>
    <div style="text-align: center; margin-top: 20px;">
        <br>
        <div class="lrshow-container">

            <div class="lrshow-image">
              <img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/m300drone.jpg" alt="Feature Image" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <div class="lrshow-content">
                <div class="lrshow-title-small">轻巧之躯，硬核之芯，任意平台轻松驾驭</div>
                <div class="lrshow-title-large">轻巧澎湃</div>
                <div class="lrshow-desc">
                    仅使用单个摄像头、消费级惯性测量单元 (IMU) 和气压计，手掌尺寸，轻量级设计，满足各型飞行载具。
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
