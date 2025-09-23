<template>
    <div style="text-align: center; margin-top: 20px;">
        <br>
        <div class="lrshow-container">

            <div class="lrshow-image">
              <img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/GhostLoc.png" alt="Feature Image" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <div class="lrshow-content">
                <div class="lrshow-title-small">天空地表皆智能，一体适配全场景</div>
                <div class="lrshow-title-large">无惧干扰</div>
                <div class="lrshow-desc">
                    仅使用内置传感器，无惧GNSS拒止环境，100 km² 区域，首次大范围搜索定位所需时间低于5秒。后续持续提供不低于 15Hz 的 6-Dof 平滑定位输出
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

