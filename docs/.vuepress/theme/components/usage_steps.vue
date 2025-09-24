<template>
    <div class="hero-top"></div>

    <div class="cards-row">
        <div class="card">
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                <rect x="40" y="30" width="60" height="80" rx="10" stroke="#B3B3C6" stroke-width="2" />
                <circle cx="70" cy="110" r="5" stroke="#B3B3C6" stroke-width="2" />
                <path d="M70 70L20 20" stroke="#3BB3FF" stroke-width="2" />
                <path d="M70 70L120 20" stroke="#3BB3FF" stroke-width="2" />
                <path d="M70 70L20 120" stroke="#3BB3FF" stroke-width="2" />
                <path d="M70 70L120 120" stroke="#3BB3FF" stroke-width="2" />
                <rect x="60" y="60" width="20" height="20" stroke="#3BB3FF" stroke-width="2" />
            </svg>
            
        </div>
        <div class="card">
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                <ellipse cx="70" cy="70" rx="45" ry="45" stroke="#B3B3C6" stroke-width="2" />
                <ellipse cx="70" cy="70" rx="45" ry="20" stroke="#B3B3C6" stroke-width="2" />
                <ellipse cx="70" cy="70" rx="20" ry="45" stroke="#B3B3C6" stroke-width="2" />
                <g>
                    <circle cx="40" cy="100" r="12" fill="#000" />
                    <circle cx="40" cy="100" r="10" stroke="#3BB3FF" stroke-width="2" />
                    <path d="M40 95v10M35 100h10" stroke="#3BB3FF" stroke-width="2" />
                </g>
                <g>
                    <circle cx="100" cy="60" r="12" fill="#000" />
                    <circle cx="100" cy="60" r="10" stroke="#3BB3FF" stroke-width="2" />
                    <path d="M100 55v10M95 60h10" stroke="#3BB3FF" stroke-width="2" />
                </g>
                <g>
                    <circle cx="80" cy="40" r="12" fill="#000" />
                    <circle cx="80" cy="40" r="10" stroke="#3BB3FF" stroke-width="2" />
                    <path d="M80 35v10M75 40h10" stroke="#3BB3FF" stroke-width="2" />
                </g>
            </svg>
        </div>
        <div class="card">
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                <rect x="30" y="50" width="80" height="40" rx="10" stroke="#B3B3C6" stroke-width="2" />
                <rect x="60" y="60" width="40" height="20" rx="8" fill="#000" stroke="#B3B3C6" stroke-width="2" />
                <rect x="75" y="65" width="20" height="10" rx="5" fill="#3BB3FF" />
                <text x="85" y="73" text-anchor="middle" alignment-baseline="middle" font-size="10" fill="#222"></text>
                <circle cx="40" cy="60" r="5" fill="#B3B3C6" />
            </svg>
        </div>
    </div>

    <div class="steps-row">
        <div class="step">
            <div class="step-title">1. 安装</div>
            <div class="step-text">
                首先将 GhostLoc 系统装载至任意飞行平台，只需保持视角朝下即可开机运行。
            </div>
        </div>
        <div class="step">
            <div class="step-title">2. 连接</div>
            <div class="step-text">
                连接至 GhostLoc，通过内置组网，支持与飞行平台、用户移动端等设备通讯
            </div>
        </div>
        <div class="step">
            <div class="step-title">3. 使用</div>
            <div class="step-text">
                进行各类任务，发布导航任务，获得当前设备位姿
            </div>
        </div>
    </div>

    <div class="hero-bottom"></div>
</template>
<style scoped>
/* 公共结构 */
.hero-top {
    height: 100px;
    background: var(--c-bg-top);
}

.cards-row {
    /* max-width: 80%; */
    /* align-items: center; */
    display: flex;
    gap: 40px;
    justify-content: center;
    background: var(--c-bg-cards);
    padding: 40px 0;
}

.card {
    background: var(--c-card);
    border-radius: 48px;
    border: 2px solid #d6d7d8;
    width: calc(420px * 0.8);
    height: calc(340px * 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

html[data-theme="light"] .card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

html[data-theme="dark"] .card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.steps-row {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-top: 32px;

}
html[data-theme="light"] .step {
    color: rgba(0, 0, 0, 0.65);
}

html[data-theme="dark"] .step {
    color: rgba(255, 255, 255, 0.65);
}

.step {
    width: calc(420px * 0.8);
}

.step-title {
    font-size: 2.4rem;
    font-weight: bold;
    color: var(--c-text-title);
    margin-bottom: 12px;
}

.step-text {
    font-size: 1.3rem;
    color: var(--c-text-body);
}

.hero-bottom {
    height: 120px;
}

@media (max-width: 980px) {

.card {
    background: var(--c-card);
    border-radius: 48px;
    border: 2px solid #d6d7d8;
    width: calc(420px * 0.2);
    height: calc(340px * 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.steps-row {
    flex-direction: column;
    margin-top: 16px;
    margin-left: 16px;
}
}


/* ---------- 主题变量 ---------- */

/* 默认 light */
html[data-theme="light"] {
    --c-bg-top: #fff;
    --c-bg-cards: #fcfbfc;
    --c-card: #000;
    --c-text-title: #181a20;
    --c-text-body: #181a20;
}

/* dark */
html[data-theme="dark"] {
    --c-bg-top: #181a20;
    --c-bg-cards: #000;
    --c-card: #222;
    --c-text-title: #fff;
    --c-text-body: #ddd;
}
</style>