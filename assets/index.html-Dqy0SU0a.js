import{_ as o,c as r,d as a,a as e,e as n,o as p,r as s}from"./app-CNBdBIP0.js";const c={},d={class:"hint-container warning"},l={class:"hint-container warning"};function m(h,t){const i=s("LinkCard");return p(),r("div",null,[t[2]||(t[2]=a('<div class="hint-container warning"><p class="hint-container-title">Q: 飞机长时间没飞会滴滴的响</p><p>这是电调出于安全考虑，当长时间没有收到信号时（大约5分钟），设计的一种提示信号（防止飞机飞丢了找不到或者认为你长时间没用它）</p><p>如果觉得吵，一般可以通过以下两种方式解决问题</p><p>1、使用遥控器快速的解锁和上锁，使电调停止提示，如下面视频所示：</p><div><video width="500" controls><source src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/intro/dididi.mp4" type="video/mp4"> 您的浏览器不支持 video 标签。 </video></div><p>2、在仅使用无人机电脑的时候，可拔下电脑供电口，改为自行插充电器供电，而不是电池供电。</p></div><div class="hint-container warning"><p class="hint-container-title">Q: 遥控器无法解锁</p><p>给飞机和遥控器上电，检查飞机接收机是否处于连接状态（红灯常亮）</p><p>若可以连接到无人机接收机，则将飞机连接到QGC中，检查遥控器项中，各通道和拨杆是否有正确的对应反馈，避免出现油门反向，解锁键设置错误的情况</p><p>若遥控器设置无误，则可以检查飞机是否需要重新校准加速度计，避免方向设置错误，导致飞机认为不在水平面上，于是无法解锁</p></div>',2)),e("div",d,[t[0]||(t[0]=e("p",{class:"hint-container-title"},"Q: 不能正常起飞（电机不转、 电机旋转错误、 起飞时直接翻转）",-1)),n(i,{title:"需要检查遥控器是否校准、电机设置是否正确",href:"/droneKit/飞机问题排查/使用QGC进行飞行器设置/#测试螺旋桨"})]),e("div",l,[t[1]||(t[1]=e("p",{class:"hint-container-title"},"Q: 能正常起飞，但飞机起飞后漂移",-1)),n(i,{title:"需要检查遥控器、陀螺仪、加速度计、地平线是否校准",href:"/droneKit/飞机问题排查/使用QGC进行飞行器设置/#进行陀螺仪校准"})]),t[3]||(t[3]=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Q: 能正常起飞，但是飞机很晃"),e("p",null,"可能存在结构松动，硬件接触不良、地效影响，排除这些影响后，可以看看是否需要重新调试一下PID。 PID可以用QGC的自动调试完成。"),e("p",null,"首先将飞机使用 hold 模式起飞，将油门置于中位，保证距地有一定距离并且无风干扰的环境下再启动PID自动调试。")],-1))])}const g=o(c,[["render",m],["__file","index.html.vue"]]),E=JSON.parse('{"path":"/droneKit/%E5%B8%B8%E8%A7%81%E9%A3%9E%E6%9C%BA%E9%97%AE%E9%A2%98/","title":"常见飞机问题","lang":"zh-CN","frontmatter":{"title":"常见飞机问题","createTime":"2024/11/20 22:45:59","permalink":"/droneKit/常见飞机问题/","description":"Q: 飞机长时间没飞会滴滴的响 这是电调出于安全考虑，当长时间没有收到信号时（大约5分钟），设计的一种提示信号（防止飞机飞丢了找不到或者认为你长时间没用它） 如果觉得吵，一般可以通过以下两种方式解决问题 1、使用遥控器快速的解锁和上锁，使电调停止提示，如下面视频所示： 2、在仅使用无人机电脑的时候，可拔下电脑供电口，改为自行插充电器供电，而不是电池供电。","head":[["meta",{"property":"og:url","content":"https://emnavi.tech/droneKit/%E5%B8%B8%E8%A7%81%E9%A3%9E%E6%9C%BA%E9%97%AE%E9%A2%98/"}],["meta",{"property":"og:site_name","content":"emNavi"}],["meta",{"property":"og:title","content":"常见飞机问题"}],["meta",{"property":"og:description","content":"Q: 飞机长时间没飞会滴滴的响 这是电调出于安全考虑，当长时间没有收到信号时（大约5分钟），设计的一种提示信号（防止飞机飞丢了找不到或者认为你长时间没用它） 如果觉得吵，一般可以通过以下两种方式解决问题 1、使用遥控器快速的解锁和上锁，使电调停止提示，如下面视频所示： 2、在仅使用无人机电脑的时候，可拔下电脑供电口，改为自行插充电器供电，而不是电池供电。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:02:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:02:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见飞机问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:02:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.08,"words":623},"git":{"createdTime":1729747846000,"updatedTime":1732244573000,"contributors":[{"name":"Derkai","email":"2363104914@qq.com","commits":2}]},"autoDesc":true,"filePathRelative":"notes/droneKit/3.常见问题/2.飞机问题排查/1.常见飞机问题.md"}');export{g as comp,E as data};