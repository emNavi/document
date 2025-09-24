<template>
    <div class="intro-container" id="next-section">
        <div class="intro-content">
            <p class="intro-segment">
                为了在 GPS 信号拒止的环境中实现精准的飞行定位，我们将视觉惯性里程计 (VIO) 与视觉定位系统 (VPS) 相结合，实现了 GhostLoc 系统。该系统仅需使用单个摄像头、消费级惯性测量单元
                (IMU) 和气压计，即可在飞行中提供与 GPS 相当的精度。
            </p>

            <div class="lrshow-image">
                <img src="https://file.emnavi.tech/MEDIA_ASSETS/GhostLoc/sat_loc_result.png" alt="Feature Image"
                    style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>

            <p class="intro-segment">
                易部署，手掌尺寸，轻量级设计，满足各型飞行载具。先进定位融合算法，保证常见飞行场景下 6 Dof 位姿数据，高空米级定位精度，定位轨迹平滑。
            </p>
        </div>
        <div class="intro-video-container">
            <video class="intro-video" controls>
                <source src="http://file.emnavi.tech/GhostLocVideo/GNSS_VPS_demo3.mp4" type="video/mp4">
                您的浏览器不支持 video 标签。
            </video>
        </div>

        <div class="result-card" role="region" aria-label="多组飞行测试结果">
            <table class="result-table">
                <thead>
                    <tr class="thead-row">
                        <th class="corner-cell" scope="col"></th>
                        <th scope="col">1</th>
                        <th scope="col">2</th>
                        <th scope="col">3</th>
                        <th scope="col">4</th>
                        <th scope="col">5</th>
                        <th scope="col">6</th>
                        <th class="mean-cell" scope="col">均值</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row" class="row-title">与 GPS 误差</th>
                        <td class="center">2.3 m</td>
                        <td class="center">3.9 m</td>
                        <td class="center">5.9 m</td>
                        <td class="center">7.6 m</td>
                        <td class="center">5.0 m</td>
                        <td class="center">8.2 m</td>
                        <td class="center strong">5.1 m</td>
                    </tr>

                    <tr>
                        <th scope="row" class="row-title">航程</th>
                        <td class="center">598 m</td>
                        <td class="center">906 m</td>
                        <td class="center">2958 m</td>
                        <td class="center">3554 m</td>
                        <td class="center">4326 m</td>
                        <td class="center">5237 m</td>
                        <td class="center"></td>
                    </tr>
                </tbody>
            </table>

            <p class="note">
                多组飞行测试结果表，误差度量使用对齐的 RMSE 统计 ATE（绝对轨迹误差）
            </p>
        </div>

    </div>
</template>

<style scoped>
html[data-theme="light"] .intro-segment {
    color: rgba(0, 0, 0, 0.65);
    padding: 0 24px;
    text-align: left;
    font-family: Poppins, PingFang SC, Microsoft YaHei, Helvetica Neue, Hiragino Sans GB, WenQuanYi Micro Hei, Arial, "sans-serif";
}

html[data-theme="dark"] .intro-segment {
    color: #aaaaaa;
    padding: 0 24px;
    text-align: left;
    font-family: Poppins, PingFang SC, Microsoft YaHei, Helvetica Neue, Hiragino Sans GB, WenQuanYi Micro Hei, Arial, "sans-serif";
}


.intro-container {
    max-width: 900px;
    margin: 60px auto 0 auto;
}

.intro-content p {
    font-size: 22px;
    line-height: 1.6;
    color: #22232a;

    margin-bottom: 24px;
    font-family: Poppins, PingFang SC, Microsoft YaHei, Helvetica Neue, Hiragino Sans GB, WenQuanYi Micro Hei, Arial, "sans-serif";
}

/* 容器 Card */
.result-card {
    /* background: #eaf4ff; */
    border-radius: 8px;
    overflow: hidden;
    margin-top: 40px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    max-width: 100%;
    padding-bottom: 8px;
    box-sizing: border-box;
}

/* 表格基础 */
.result-table {
    width: 100%;
    border-collapse: collapse;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    font-size: 15px;
}

html[data-theme="light"] .result-table {
    background: #e4edf7;
    color: #000;
}
html[data-theme="dark"] .result-table {
    background: #616161;
    color: #fff;
}

/* 表头行背景 */
html[data-theme="light"] .thead-row {
    background: #d6eaff;
    color: rgba(0, 0, 0, 0.65);

}
html[data-theme="dark"] .thead-row {
    background: #3a3a3a;
}

/* 单元格通用样式 */
.result-table th,
.result-table td {
    padding: 12px 8px;
    text-align: center;
}
html[data-theme="light"] .result-table td {
    border-bottom: 1px solid #e0e7ef;
    color: rgba(0, 0, 0, 0.65);

}
html[data-theme="dark"] .result-table td {
    border-bottom: 1px solid #4a4a4a;
}


/* 第一列（行标题）样式 */
.row-title {
    text-align: left;
    padding: 10px 8px;
    font-weight: 700;
}
html[data-theme="light"] .row-title {
    color: rgba(0, 0, 0, 0.65);
    
}

/* 空白左上角单元格（如果需要特殊处理） */
.corner-cell {
    padding: 12px 8px;
    font-weight: 500;
}

/* 均值列特殊强调 */
.mean-cell {
    font-weight: 700;
}

/* 居中类（对数值单元格） */
.center {
    text-align: center;
}

/* 强调样式（粗体） */
.strong {
    font-weight: 700;
}

/* 底部说明文字 */
.note {
    padding: 12px 16px 8px 16px;
    font-style: italic;
    font-size: 16px;
    text-align: center;
    margin: 0;
}
html[data-theme="light"] .note {
    color: rgba(0, 0, 0, 0.65);
    background: #eaf4ff;
}
html[data-theme="dark"] .note {
    color: #d3d3d3;
    background: #616161;
}

/* 响应式：小屏时减少内边距、字体 */
@media (max-width: 480px) {

    .result-table th,
    .result-table td {
        padding: 8px 6px;
        font-size: 14px;
    }

    .note {
        font-size: 13px;
        padding: 10px 12px;
    }
}
</style>