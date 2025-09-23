<template>
    <div class="intro-container">
        <h1 class="intro-title"></h1>
        <div class="intro-content">
            <p>
                为了在 GPS 信号拒止的环境中实现精准的飞行定位，我们将视觉惯性里程计 (VIO) 与视觉定位系统 (VPS) 相结合，实现了 GhostLoc 系统。该系统仅需使用单个摄像头、消费级惯性测量单元 (IMU) 和气压计，即可在飞行中提供与 GPS 相当的精度。
            </p>
            <p>
                易部署，手掌尺寸，轻量级设计，满足各型飞行载具

                先进定位融合算法，保证常见飞行场景下 6 Dof 位姿数据，高空米级定位精度，定位轨迹平滑。。
            </p>
        </div>
        <div class="intro-video-container">
            <video class="intro-video" controls>
            <source src="http://file.emnavi.tech/GhostLocVideo/GNSS_VPS_demo3.mp4" type="video/mp4">
            您的浏览器不支持 video 标签。
            </video>
        </div>

        <div style="background: #eaf4ff; border-radius: 8px; overflow: hidden; margin-top: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <table style="width:100%; border-collapse:collapse;">
                <thead>
                    <tr style="background: #d6eaff;">
                        <th style="padding: 12px 8px; font-weight: 500; text-align: center; border-bottom: 1px solid #e0e7ef;"></th>
                        <th style="padding: 12px 8px; font-weight: 500; text-align: center; border-bottom: 1px solid #e0e7ef;">1</th>
                        <th style="padding: 12px 8px; font-weight: 500; text-align: center; border-bottom: 1px solid #e0e7ef;">2</th>
                        <th style="padding: 12px 8px; font-weight: 500; text-align: center; border-bottom: 1px solid #e0e7ef;">3</th>
                        <th style="padding: 12px 8px; font-weight: 500; text-align: center; border-bottom: 1px solid #e0e7ef;">4</th>
                        <th style="padding: 12px 8px; font-weight: 500; text-align: center; border-bottom: 1px solid #e0e7ef;">5</th>
                        <th style="padding: 12px 8px; font-weight: 500; text-align: center; border-bottom: 1px solid #e0e7ef;">6</th>
                        <th style="padding: 12px 8px; font-weight: bold; text-align: center; border-bottom: 1px solid #e0e7ef;">均值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: bold; padding: 10px 8px; border-bottom: 1px solid #e0e7ef;">与 GPS 误差</td>
                        <td style="text-align: center;">2.3 m</td>
                        <td style="text-align: center;">3.9 m</td>
                        <td style="text-align: center;">5.9 m</td>
                        <td style="text-align: center;">7.6 m</td>
                        <td style="text-align: center;">5.0 m</td>
                        <td style="text-align: center;">8.2 m</td>
                        <td style="text-align: center; font-weight: bold;">5.1 m</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 10px 8px;">航程</td>
                        <td style="text-align: center;">598 m</td>
                        <td style="text-align: center;">906 m</td>
                        <td style="text-align: center;">2958 m</td>
                        <td style="text-align: center;">3554 m</td>
                        <td style="text-align: center;">4326 m</td>
                        <td style="text-align: center;">5237 m</td>
                        <td style="text-align: center; font-weight: bold;"></td>
                    </tr>
                </tbody>
            </table>
            <div style="padding: 12px 16px 8px 16px; font-style: italic; color: #555; font-size: 16px; text-align: center;">
                多组飞行测试结果表，误差度量使用对齐的 RMSE 统计 ATE（绝对轨迹误差）
            </div>
        </div>

    </div>
</template>

<style scoped>
.intro-container {
    max-width: 900px;
    margin: 60px auto 0 auto;
    padding: 0 24px;
    text-align: left;
}

.intro-title {
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 48px;
    color: #111217;
}

.intro-content p {
    font-size: 22px;
    line-height: 1.6;
    color: #22232a;
    margin-bottom: 24px;
}

.intro-button {
    margin-top: 24px;
    background: #eaff3c;
    color: #22232a;
    border: none;
    border-radius: 12px;
    padding: 18px 28px;
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
    transition: background 0.2s;
}

.intro-button:hover {
    background: #d7e800;
}
</style>