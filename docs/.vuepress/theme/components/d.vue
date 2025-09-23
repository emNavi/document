<template>
    <div class="container">
        <div class="left">
            <div class="subtitle">鹰隼难及之地，也能从容应对</div>
            <div class="title">全域定位</div>
            <div class="desc">
                自研 VIO+VPS 融合定位算法，海量数据训练感知模型，适用各种复杂场景
            </div>
        </div>
        <div class="right">
            <div class="chart chart-top">
                <svg width="260" height="120">
                    <!-- Real trajectory -->
                    <polyline points="20,30 60,50 110,40 170,70 230,90" fill="none" stroke="#1e90ff" stroke-width="3"/>
                    <!-- VIO trajectory -->
                    <polyline points="20,30 60,60 110,70 170,90 230,100" fill="none" stroke="#ff4d4f" stroke-dasharray="5,5" stroke-width="2"/>
                    <!-- Start point -->
                    <circle cx="20" cy="30" r="7" fill="#ff4d4f" stroke="#fff" stroke-width="2"/>
                </svg>
                <div class="legend legend-top">
                    <div><span class="legend-vio"></span>仅VIO轨迹</div>
                    <div><span class="legend-real"></span>真实轨迹</div>
                </div>
            </div>
            <div class="chart chart-bottom">
                <svg width="260" height="120">
                    <!-- Real trajectory -->
                    <polyline points="20,30 60,50 110,40 170,70 230,90" fill="none" stroke="#1e90ff" stroke-width="3"/>
                    <!-- VIO+VPS trajectory -->
                    <polyline points="20,30 60,48 110,42 170,68 230,88" fill="none" stroke="#ff4d4f" stroke-dasharray="5,5" stroke-width="2"/>
                    <!-- VPS points -->
                    <circle v-for="(p, i) in vpsPoints" :key="i" :cx="p[0]" :cy="p[1]" r="8" fill="none" stroke="#ffc53d" stroke-width="3"/>
                    <!-- Start point -->
                    <circle cx="20" cy="30" r="7" fill="#ff4d4f" stroke="#fff" stroke-width="2"/>
                </svg>
                <div class="legend legend-bottom">
                    <div><span class="legend-vio"></span>VIO+VPS融合轨迹</div>
                    <div><span class="legend-real"></span>真实轨迹</div>
                    <div><span class="legend-vps"></span>VPS定位点</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const vpsPoints = [
    [45, 49],
    [75, 45],
    [110, 42],
    [140, 55],
    [170, 68],
    [200, 80],
    [230, 88]
]
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    font-family: "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
}
.left {
    flex: 1.2;
    text-align: center;
    color: #b3c7e6;
}
.subtitle {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
}
.title {
    font-size: 3.2rem;
    font-weight: bold;
    color: #7db7f7;
    margin-bottom: 1.5rem;
}
.desc {
    font-size: 1.6rem;
    color: #b3c7e6;
    margin-bottom: 2rem;
}
.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
}
.chart {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 8px #e6f7ff;
    padding: 10px 20px 10px 10px;
    margin-bottom: 10px;
    width: 280px;
}
.legend {
    font-size: 1.1rem;
    margin-top: 6px;
    display: flex;
    gap: 18px;
    align-items: center;
}
.legend span {
    display: inline-block;
    width: 18px;
    height: 4px;
    border-radius: 2px;
    margin-right: 4px;
    vertical-align: middle;
}
.legend-vio {
    background: #1e90ff;
}
.legend-real {
    background: #ff4d4f;
}
.legend-vps {
    background: #ffc53d;
    height: 8px;
    width: 8px;
    border-radius: 50%;
}
.legend-top {
    color: #1e90ff;
}
.legend-top div:last-child {
    color: #ff4d4f;
}
.legend-bottom div:nth-child(1) {
    color: #1e90ff;
}
.legend-bottom div:nth-child(2) {
    color: #ff4d4f;
}
.legend-bottom div:nth-child(3) {
    color: #ffc53d;
}
</style>