import{_ as s,c as n,d as t,a,e as o,o as m,r}from"./app-CCicB6Oj.js";const c={},p={class:"vp-steps"};function g(l,e){const i=r("LinkCard");return m(),n("div",null,[e[1]||(e[1]=t('<p><strong>需要准备的物料：</strong><img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/deploy_system_list.png" alt="deploy_system_list"></p><details class="hint-container details"><summary>如何制作一个用于刷系统的U盘？</summary><p>1、准备一个空的U盘，格式化成 exFat 格式（重要）。</p><p>2、下载我们提供的镜像文件，将文件存放在U盘内即可。</p><table><thead><tr><th>镜像列表</th><th style="text-align:left;">下载链接</th><th style="text-align:left;">发布日期</th><th style="text-align:center;">SHA256校验码</th></tr></thead><tbody><tr><td><strong>(最新)</strong> V1.1</td><td style="text-align:left;"><a href="http://file.emnavi.tech/edge2/edge2-241121.130200-62537072640-bytes-disk.img.zst" target="_blank" rel="noopener noreferrer">edge2-241121.130200-62537072640-bytes-disk.img.zst</a></td><td style="text-align:left;">24年11月21日</td><td style="text-align:center;">6e07b468da8362752acbf507189c350180199b8e85f61439f86d86539b108b0e</td></tr></tbody></table></details><div class="hint-container warning"><p class="hint-container-title">刷入系统大约需要 8 ~ 10分钟，因此需要确保无人机的供电可用。</p></div><p>当物料准备齐全后，按本视频流程，进入无人机电脑的 OOWOW 工具界面：</p><div><video width="800" controls><source src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/intro/entry_oowow.mp4" type="video/mp4"> 您的浏览器不支持 video 标签。 </video></div><p>启动 OOWOW - 按住机载电脑的 FUNCTION(F) 并短按 RESET(R) ，然后松开 FUNCTION 接下来你可以在显示器上看到 OOWOW 工具界面，你可使用方向键进行选择。</p><h2 id="使用-oowow-工具刷入系统流程" tabindex="-1"><a class="header-anchor" href="#使用-oowow-工具刷入系统流程"><span>使用 OOWOW 工具刷入系统流程</span></a></h2>',7)),a("div",p,[e[0]||(e[0]=t('<ul><li><h3 id="第一步先使用方向键移动至【exit】选项-然后按下回车键执行" tabindex="-1"><a class="header-anchor" href="#第一步先使用方向键移动至【exit】选项-然后按下回车键执行"><span>第一步先使用方向键移动至【Exit】选项，然后按下回车键执行：</span></a></h3><p>该步骤是为了退出 Wizard 功能，返回到功能菜单列表。 <img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_0.png" alt="write_image_step_0.png"></p></li><li><h3 id="选择【write-image-to-emmc】功能" tabindex="-1"><a class="header-anchor" href="#选择【write-image-to-emmc】功能"><span>选择【Write image to eMMC】功能</span></a></h3><p><img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_1.png" alt="write_image_step_1.png"></p></li><li><h3 id="在u盘文件树中找到镜像文件" tabindex="-1"><a class="header-anchor" href="#在u盘文件树中找到镜像文件"><span>在U盘文件树中找到镜像文件</span></a></h3><p>可以先返回上一级目录查找： <img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_2.png" alt="write_image_step_2.png"> 这里的 USB-sda1-XXXX 是U盘，选择进入： <img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_3.png" alt="write_image_step_3.png"> 找到所需要刷入的镜像文件，通常以<code>.zst</code> 为名称后缀。然后选择【Okay】键确认： <img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_4.png" alt="write_image_step_4.png"></p></li><li><h3 id="开始将镜像刷进无人机电脑" tabindex="-1"><a class="header-anchor" href="#开始将镜像刷进无人机电脑"><span>开始将镜像刷进无人机电脑</span></a></h3><p>该过程大约等待8~10分钟即可完成： <img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_5.png" alt="write_image_step_5.png"></p></li><li><h3 id="最后一步" tabindex="-1"><a class="header-anchor" href="#最后一步"><span>最后一步</span></a></h3><div class="hint-container warning"><p class="hint-container-title">这一步非常重要，不要直接断电，而是正常的通过关机或重启来关闭无人机电脑，否则系统可能刷失败。</p><p><img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_6.png" alt="write_image_step_6.png"></p></div></li></ul><p>至此，你已经重刷了新系统，接下来可以：</p>',2)),o(i,{title:"重新配置远程访问",href:"/droneKit/配置远程访问/"})])])}const _=s(c,[["render",g],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/droneKit/%E7%94%B5%E8%84%91%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5/%E9%87%8D%E5%88%B7%E7%94%B5%E8%84%91%E7%B3%BB%E7%BB%9F/","title":"重刷电脑系统","lang":"zh-CN","frontmatter":{"title":"重刷电脑系统","createTime":"2024/10/24 22:11:08","permalink":"/droneKit/电脑问题排查/重刷电脑系统/","readingTime":false,"description":"需要准备的物料： deploy_system_list 如何制作一个用于刷系统的U盘？ 1、准备一个空的U盘，格式化成 exFat 格式（重要）。 2、下载我们提供的镜像文件，将文件存放在U盘内即可。 刷入系统大约需要 8 ~ 10分钟，因此需要确保无人机的供电可用。 当物料准备齐全后，按本视频流程，进入无人机电脑的 OOWOW 工具界面： 启动 OO...","head":[["meta",{"property":"og:url","content":"https://emnavi.tech/droneKit/%E7%94%B5%E8%84%91%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5/%E9%87%8D%E5%88%B7%E7%94%B5%E8%84%91%E7%B3%BB%E7%BB%9F/"}],["meta",{"property":"og:site_name","content":"emNavi"}],["meta",{"property":"og:title","content":"重刷电脑系统"}],["meta",{"property":"og:description","content":"需要准备的物料： deploy_system_list 如何制作一个用于刷系统的U盘？ 1、准备一个空的U盘，格式化成 exFat 格式（重要）。 2、下载我们提供的镜像文件，将文件存放在U盘内即可。 刷入系统大约需要 8 ~ 10分钟，因此需要确保无人机的供电可用。 当物料准备齐全后，按本视频流程，进入无人机电脑的 OOWOW 工具界面： 启动 OO..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/deploy_system_list.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-24T13:57:32.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-24T13:57:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"重刷电脑系统\\",\\"image\\":[\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/deploy_system_list.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_0.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_1.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_2.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_3.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_4.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_5.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/write_image_step_6.png\\"],\\"dateModified\\":\\"2025-03-24T13:57:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用 OOWOW 工具刷入系统流程","slug":"使用-oowow-工具刷入系统流程","link":"#使用-oowow-工具刷入系统流程","children":[]}],"readingTime":{"minutes":1.94,"words":581},"git":{"createdTime":1729782475000,"updatedTime":1742824652000,"contributors":[{"name":"Derkai","email":"2363104914@qq.com","commits":8},{"name":"hyaline","email":"1097611989@qq.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/droneKit/3.常见问题/1.电脑问题排查/3.重刷电脑系统.md"}');export{_ as comp,h as data};
