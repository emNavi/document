import{_ as c,c as p,a as i,b as s,e as a,f as e,r,o as m}from"./app-CCicB6Oj.js";const h={},v={class:"vp-steps"},u={class:"vp-steps"};function g(k,n){const o=r("LinkCard"),d=r("Tabs");return m(),p("div",null,[n[13]||(n[13]=i("div",{class:"hint-container note"},[i("p",{class:"hint-container-title"},"本篇目标：完成对 X152b 无人机电脑的远程访问。"),i("p",null,[s("在使用过程中，无人机经常需要在飞行中调试，因此能"),i("strong",null,"无线远程访问"),s("无人机电脑是必要的。")]),i("p",null,"下面将引导你进行无线远程访问的配置，只需配置一次，即可进行远程访问功能。")],-1)),a(d,{id:"8",data:[{id:"<strong>【推荐】使用 emnavidiscover + vscode 远程访问</strong>"},{id:"使用 Nomachine 远程访问"}]},{title0:e(({value:t,isActive:l})=>n[0]||(n[0]=[i("strong",null,"【推荐】使用 emnavidiscover + vscode 远程访问",-1)])),title1:e(({value:t,isActive:l})=>n[1]||(n[1]=[s("使用 Nomachine 远程访问")])),tab0:e(({value:t,isActive:l})=>[i("div",v,[i("ul",null,[i("li",null,[n[2]||(n[2]=i("h3",{id:"准备工作",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#准备工作"},[i("span",null,"准备工作")])],-1)),n[3]||(n[3]=i("p",null,[s("在自己的电脑上下载 "),i("strong",null,"emnavidiscover"),s(" （集成网络连接、远程终端等常用调试的小工具）")],-1)),a(o,{title:"点击下载 emnavidiscover",href:"https://github.com/emNavi/emnavidiscover.git"})]),n[4]||(n[4]=i("li",null,[i("h3",{id:"使用-emnavidiscover-将无人机连上wifi",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#使用-emnavidiscover-将无人机连上wifi"},[i("span",null,"使用 emnavidiscover 将无人机连上WIFI")])]),i("p",null,"第一次启动无人机机载电脑时，无人机默认开启AP模式（即无人机作为 wifi 热点），需要将自己的电脑连接到该无人机 wifi 热点"),i("p",null,[s("（名称通常是 "),i("code",null,"emNavi-unknown-X-XXXX"),s(", wifi密码默认是 "),i("code",null,"12341234"),s("）")]),i("p",null,[s("连接成功后，打开 emnavidiscover，稍等几秒，就能在软件界面刷新出无人机设备，如下图所示： "),i("img",{src:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_1.png",alt:""})]),i("p",null,[s("点击"),i("code",null,"连接 wlan0"),s(" ，输入无人机的用户名和密码（默认账户信息如下）")]),i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"默认用户名"),i("th",{style:{"text-align":"center"}},"默认密码")])]),i("tbody",null,[i("tr",null,[i("td",null,"emnavi"),i("td",{style:{"text-align":"center"}},"123456")])])]),i("p",null,[i("img",{src:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_2.png",alt:""})]),i("p",null,[s("点击登录，就能进入到该界面，下面进行无人机网络的配置 "),i("img",{src:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_3.png",alt:""}),i("img",{src:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_4.png",alt:""})])],-1)),n[5]||(n[5]=i("li",null,[i("h3",{id:"再次验证连接",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#再次验证连接"},[i("span",null,"再次验证连接")])]),i("p",null,"重启 emnavidiscover 软件，将自己的电脑连接的 wifi 也切换到无人机同一 wifi下。稍等几秒，就能在软件界面刷新出无人机设备，如下图所示："),i("p",null,[s("此时可以看到无人机的wifi的IP地址（wlan0）已经更新： "),i("img",{src:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_5.png",alt:""})]),i("p",null,[s("至此，现在你的电脑与无人机处于同一局域网下了，并且清楚此时无人机的IP地址(wlan0)，然后你可以参考下面的配置流程，在 "),i("code",null,"vscode"),s(" 中使用 "),i("code",null,"Remote-SSH"),s(" 插件对无人机电脑进行远程访问。")]),i("div",null,[i("video",{width:"800",controls:""},[i("source",{src:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/intro/vscode-ssh.mp4",type:"video/mp4"}),s(" 您的浏览器不支持 video 标签。 ")])])],-1))])])]),tab1:e(({value:t,isActive:l})=>[i("div",u,[n[12]||(n[12]=i("div",{class:"hint-container warning"},[i("p",{class:"hint-container-title"},"由于 Nomachine 这类远程桌面软件非常消耗无人机电脑性能（尤其是当有大量动态画面时），可能会对算法运行造成影响，因此不是我们最推荐的远程访问方式。")],-1)),i("ul",null,[n[9]||(n[9]=i("li",null,[i("h3",{id:"准备工作-1",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#准备工作-1"},[i("span",null,"准备工作")])]),i("p",null,"准备无人机和另一台电脑，其中另一台电脑用于远程使用（通常是你自己的电脑），保证它们都处于同一个局域网范围（通常是 Wifi、移动热点等）内。"),i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"建议设置名称简单的纯英文wifi名称以便于连接使用。")])],-1)),n[10]||(n[10]=i("li",null,[i("h3",{id:"有线连接",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#有线连接"},[i("span",null,"有线连接")])]),i("div",null,[i("video",{width:"800",controls:""},[i("source",{src:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/intro/usb_connect_drone.mp4",type:"video/mp4"}),s(" 您的浏览器不支持 video 标签。 ")])]),i("h3",{id:"",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#"},[i("span")])])],-1)),n[11]||(n[11]=i("li",null,[i("h3",{id:"将无人机电脑连接到局域网wifi",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#将无人机电脑连接到局域网wifi"},[i("span",null,"将无人机电脑连接到局域网Wifi")])]),i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"无人机机载电脑USB网口的默认IP为 192.168.108.1")]),i("p",null,"首次进入系统，X152b 的默认系统账户信息如下:"),i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"用户名"),i("th",{style:{"text-align":"center"}},"默认密码")])]),i("tbody",null,[i("tr",null,[i("td",null,"emnavi"),i("td",{style:{"text-align":"center"}},"123456")])])]),i("div",{class:"language-bash line-numbers-mode","data-ext":"bash","data-title":"bash"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 在自己的电脑的终端，通过SSH连接到机载电脑：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"ssh"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," emnavi@192.168.108.1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 第一次执行时终端会提示 `Are you sure you want to continue connecting (yes/no/[fingerprint])?` ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 输入yes，然后输入无人机电脑密码 123456")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 连接成功后，终端会变为机载电脑的终端")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])]),i("p",null,[s("通过 SSH 连接到机载电脑后，可以通过 "),i("code",null,"nmcli"),s(" 命令连接 wifi")]),i("div",{class:"language-bash line-numbers-mode","data-ext":"bash","data-title":"bash"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 1.搜索网络")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"sudo"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," nmcli"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," device"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," wifi"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," list")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"输入密码123456")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 2.连接网络")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"sudo"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," nmcli"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," device"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," wifi"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," connect"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," 填入要连接的wifi名"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," password"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," 填入wifi密码")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 当终端提示 `Device 'wlan0' successfully activated with` 时表明已连接上")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 3.查看已有的连接，确保已连接上")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"nmcli"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," connection"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," show")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 4.连接 wifi 成功后，查看当前机载电脑 IP 地址，记一下，方便下一步配置 Nomachine")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"ifconfig")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])]),i("p",null,"至此，无人机机载电脑已连接 Wifi。你可以拔掉连接到电脑的数据线，在无线局域网里进行远程访问了。")],-1)),i("li",null,[n[6]||(n[6]=i("h3",{id:"使用-nomachine-中远程访问无人机机载电脑",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#使用-nomachine-中远程访问无人机机载电脑"},[i("span",null,"使用 Nomachine 中远程访问无人机机载电脑")])],-1)),n[7]||(n[7]=i("p",null,"打开自己电脑的 Nomachine，进行如下操作：",-1)),n[8]||(n[8]=i("div",null,[i("video",{width:"800",controls:""},[i("source",{src:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/intro/nomachine_add_drone.mp4",type:"video/mp4"}),s(" 您的浏览器不支持 video 标签。 ")])],-1)),a(o,{title:"点击排查 Nomachine 常见问题",href:"/droneKit/电脑问题排查/Nomachine远程工具问题/"})])])])]),_:1}),n[14]||(n[14]=i("p",null,"至此，你已经完成了 X152b 无人机电脑的远程访问，下一步你可以进行飞行前的准备。",-1)),n[15]||(n[15]=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"如果网络更换，你仍然需要对新网络重新配置远程访问")],-1))])}const y=c(h,[["render",g],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/droneKit/%E9%85%8D%E7%BD%AE%E8%BF%9C%E7%A8%8B%E8%AE%BF%E9%97%AE/","title":"配置远程访问","lang":"zh-CN","frontmatter":{"title":"配置远程访问","createTime":"2024/10/20 00:06:10","permalink":"/droneKit/配置远程访问/","readingTime":false,"description":"本篇目标：完成对 X152b 无人机电脑的远程访问。 在使用过程中，无人机经常需要在飞行中调试，因此能无线远程访问无人机电脑是必要的。 下面将引导你进行无线远程访问的配置，只需配置一次，即可进行远程访问功能。 至此，你已经完成了 X152b 无人机电脑的远程访问，下一步你可以进行飞行前的准备。 如果网络更换，你仍然需要对新网络重新配置远程访问","head":[["meta",{"property":"og:url","content":"https://emnavi.tech/droneKit/%E9%85%8D%E7%BD%AE%E8%BF%9C%E7%A8%8B%E8%AE%BF%E9%97%AE/"}],["meta",{"property":"og:site_name","content":"emNavi"}],["meta",{"property":"og:title","content":"配置远程访问"}],["meta",{"property":"og:description","content":"本篇目标：完成对 X152b 无人机电脑的远程访问。 在使用过程中，无人机经常需要在飞行中调试，因此能无线远程访问无人机电脑是必要的。 下面将引导你进行无线远程访问的配置，只需配置一次，即可进行远程访问功能。 至此，你已经完成了 X152b 无人机电脑的远程访问，下一步你可以进行飞行前的准备。 如果网络更换，你仍然需要对新网络重新配置远程访问"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-26T18:36:17.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-26T18:36:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置远程访问\\",\\"image\\":[\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_1.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_2.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_3.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_4.png\\",\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/emnavidiscover_step_5.png\\"],\\"dateModified\\":\\"2025-01-26T18:36:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":3.95,"words":1186},"git":{"createdTime":1729388885000,"updatedTime":1737916577000,"contributors":[{"name":"Derkai","email":"2363104914@qq.com","commits":10}]},"autoDesc":true,"filePathRelative":"notes/droneKit/1.快速上手/2.配置远程访问.md"}');export{y as comp,A as data};
