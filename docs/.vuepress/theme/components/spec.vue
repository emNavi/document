<script setup lang="ts">
import { computed } from 'vue'
import { ref, defineProps } from 'vue'

const props = defineProps({
    specs: {
        type: Array as () => Array<{ header: string, items: string[] }>,
        default: () => [
            {
                header: 'CPU:',
                items: [
                    '2.25GHz A76 x4 + 1.8GHz A55 x4',
                    '6TOPS Build-in NPU'
                ]
            },
            {
                header: 'GPU&VPU:',
                items: [
                    'ARM Mali-G610 MC4 (up to 700MHz clock speed)',
                    'Max Resolution of Decoding up to 8K@60fps',
                    'Max Resolution of Encoding up to 8K@30fps'
                ]
            },
            {
                header: 'Storage:',
                items: [
                    'Basic: 8GB 64-bit 2112MHz LPDDR4X + 32GB eMMC 5.1',
                    'Pro: 16GB 64-bit 2112MHz LPDDR4X + 64GB eMMC 5.1'
                ]
            },
            {
                header: 'Interface:',
                items: [
                    'Ampak AP6275P Wi-Fi6, MAX to 800Mbits/sec',
                    'HDMI2.1, Max Resolution up to 8K@60fps',
                    'Full-featured type-C port',
                    'MIPI-CSI x3, up to 48MP',
                    'MIPI-DSI x2, up to 4K@60Hz'
                ]
            },
            {
                header: 'Khadas Only:',
                items: [
                    'Khadas TST',
                    'Khadas KBI',
                    'OOWOW',
                    'Fenix'
                ]
            }
        ]
    }
})
</script>

<template>
    <div class="specs-container">
        <h1 class="specs-title">产品规格</h1>
        <div class="specs-grid">
            <div v-for="(spec, idx) in props.specs" :key="idx">
                <h2 class="specs-header">{{ spec.header }}</h2>
                <ul>
                    <li v-for="(item, i) in spec.items" :key="i">{{ item }}</li>
                </ul>
            </div>
        </div>
        <!-- <div class="specs-btn-wrap">
            <button class="specs-btn">Full Specs</button>
        </div> -->
        <br/>
        <br/>
    </div>
    
</template>

<style>
/* 样式同前 */
html[data-theme="light"] .specs-container {
    background: #ffffff;
    padding: 40px 20px;
    /* min-height: 100vh; */
    font-family: 'Montserrat', Arial, sans-serif;
    color: rgba(0, 0, 0, 0.65);
}


html[data-theme="dark"] .specs-container {
    background: rgb(27, 27, 31);
    padding: 40px 20px;
    /* min-height: 100vh; */
    font-family: 'Montserrat', Arial, sans-serif;
    color: rgba(255, 255, 255, 0.65);
}

.specs-title {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 40px;
}


.specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 32px 48px;
    max-width: 1000px;
    margin: 0 auto 40px auto;
}
.specs-header {
    color: #00baff;
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-weight: bold;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
li {
    margin-bottom: 6px;
    font-size: 1rem;
}
.specs-btn-wrap {
    text-align: center;
}
.specs-btn {
    background: #00baff;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 10px 32px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
}
.specs-btn:hover {
    background: #009fd9;
}
</style>