import{_ as a,c as o,a as i,e as n,b as t,d as l,o as r,r as d}from"./app-CCicB6Oj.js";const c={},p={class:"hint-container details"},m={class:"hint-container details"};function u(h,e){const s=d("Icon");return r(),o("div",null,[e[4]||(e[4]=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"提示"),i("p",null,"在出厂前，我们已经做好了标定工作，而且算法对标定误差有一定的容忍度。因此你可以跳过本节直接使用。")],-1)),e[5]||(e[5]=i("p",null,"如果你确实需要标定，这里给出两种标定的方法，以供你选择：",-1)),i("details",p,[i("summary",null,[n(s,{name:"noto:high-voltage",color:"currentColor",size:"2em"}),e[0]||(e[0]=t("【快速】利用视觉里程计算法自动标定"))]),e[1]||(e[1]=l(`<p>启动 <code>Vins-Fusion</code> 视觉里程计算法，开启内外参自动优化参数，进行标定。</p><p>首先修改 <code>src/emnavi_sdk/global_interface/config/vins_fusion/realsense_stereo_imu_config.yaml</code></p><p>将 <code>estimate_extrinsic</code> 参数的值设置为 <code>1</code> ，以开启 Vins-Fusion 内外参自动优化功能。</p><p>当无人机放置好后，可以开始运行算法：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 进入 X152b 项目根目录执行</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> X152b</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 初始化无人机</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> scripts/one_shot_single.sh</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 启动 Vins-Fusion 视觉里程计</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> src/vins_fusion/run.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化完成后，然后用手缓慢拿起无人机，在纹理充足的场地中慢速（ &lt;1m/s）走一段距离,一般可以通过绕场地一圈回到出发点：</p><div><video width="800" controls><source src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/intro/vins_fast_calibration_demo.mp4" type="video/mp4"> 您的浏览器不支持 video 标签。 </video></div><p>运行过程中不断优化得到的外参结果会写入到 <code>src/emnavi_sdk/global_interface/config/vins_fusion/output/estimate_extrinsic.yaml</code> 中，关闭程序，可手动复制该文件结果进行使用。</p><p>修改 <code>src/emnavi_sdk/global_interface/config/vins_fusion/realsense_stereo_imu_config.yaml</code></p><p>重新将 <code>estimate_extrinsic</code> 参数的值设置为 <code>0</code> ，以关闭外参自动优化。</p><p>至此，你已经快速的完成了相机-IMU的外参标定。</p>`,11))]),i("details",m,[i("summary",null,[n(s,{name:"noto:bullseye",color:"currentColor",size:"2em"}),e[2]||(e[2]=t(" 【准确】使用 Kalibr 标定工具进行精细的标定"))]),e[3]||(e[3]=i("p",null,"待更新...",-1))])])}const g=a(c,[["render",u],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/droneKit/%E4%BC%A0%E6%84%9F%E5%99%A8%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5/%E4%BC%A0%E6%84%9F%E5%99%A8%E6%A0%87%E5%AE%9A/","title":"传感器标定","lang":"zh-CN","frontmatter":{"title":"传感器标定","createTime":"2024/10/24 19:42:31","permalink":"/droneKit/传感器问题排查/传感器标定/","readingTime":false,"description":"提示 在出厂前，我们已经做好了标定工作，而且算法对标定误差有一定的容忍度。因此你可以跳过本节直接使用。 如果你确实需要标定，这里给出两种标定的方法，以供你选择： 启动 Vins-Fusion 视觉里程计算法，开启内外参自动优化参数，进行标定。 首先修改 src/emnavi_sdk/global_interface/config/vins_fusion...","head":[["meta",{"property":"og:url","content":"https://emnavi.tech/droneKit/%E4%BC%A0%E6%84%9F%E5%99%A8%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5/%E4%BC%A0%E6%84%9F%E5%99%A8%E6%A0%87%E5%AE%9A/"}],["meta",{"property":"og:site_name","content":"emNavi"}],["meta",{"property":"og:title","content":"传感器标定"}],["meta",{"property":"og:description","content":"提示 在出厂前，我们已经做好了标定工作，而且算法对标定误差有一定的容忍度。因此你可以跳过本节直接使用。 如果你确实需要标定，这里给出两种标定的方法，以供你选择： 启动 Vins-Fusion 视觉里程计算法，开启内外参自动优化参数，进行标定。 首先修改 src/emnavi_sdk/global_interface/config/vins_fusion..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-11T10:55:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-11T10:55:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"传感器标定\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-11T10:55:02.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.44,"words":431},"git":{"createdTime":1729782475000,"updatedTime":1733914502000,"contributors":[{"name":"Derkai","email":"2363104914@qq.com","commits":6}]},"autoDesc":true,"filePathRelative":"notes/droneKit/3.常见问题/3.传感器问题排查/3.传感器标定.md"}');export{g as comp,_ as data};
