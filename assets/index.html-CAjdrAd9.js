import{_ as t,c as h,a as s,d as a,b as l,e as k,o as p,r as e}from"./app-CNBdBIP0.js";const d={},r={class:"vp-steps"},g={class:"hint-container details"},D={class:"hint-container details"};function y(A,i){const n=e("LinkCard");return p(),h("div",null,[i[5]||(i[5]=s("h2",{id:"算法使用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#算法使用"},[s("span",null,"算法使用")])],-1)),s("div",r,[s("ul",null,[i[4]||(i[4]=a(`<li><h3 id="选择合适的场景" tabindex="-1"><a class="header-anchor" href="#选择合适的场景"><span>选择合适的场景</span></a></h3><p>由于相机前置安装，因此无人机仅能检测到前方的障碍物。因此避免设置让无人机大转向后立即避障的场景。</p><p>当障碍物密集时，尤其是钻洞场景，在接近障碍物时需要更多的点以引导无人机尽可能接近，否则无人机可能会在察觉到可用路径前提前绕行，导致最终没有按预想路径飞行。</p></li><li><h3 id="设定航点" tabindex="-1"><a class="header-anchor" href="#设定航点"><span>设定航点</span></a></h3><p>程序将读取配置文件中设置的目标点，并依次执行抵达他们的飞行任务。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 打开配置文件，翻到大约第 20 行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">src/emnavi_sdk/global_interface/config/ego_planner_swarm_v1/param.xml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>预设最大可执行目标点数默认为6个。这里 <code>point_num</code> 数量为实际执行的目标点个数。 比如这里 <code>point_num</code> 设置为 <code>2</code> 个 (&lt; <code>6</code>)，那就只执行前2个点，后面的目标点都不执行。</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 预设目标点数 --&gt;</span></span>
<span class="line has-focus"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point_num</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里给出具体每个目标点的坐标：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 目标点为相对里程计初始化点的x、y、z坐标，单位 m --&gt;</span></span>
<span class="line has-focus"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point0_x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line has-focus"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point0_y</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line has-focus"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point0_z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point1_x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line has-focus"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point1_y</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line has-focus"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point1_z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">......</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 建议最后一个点设置为 0 0 1 ，以方便降落 --&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>默认的 6个目标点不够用，想要设置更多？</summary><p>在配置文件 <code>param.xml</code> 中添加新目标点（包含XYZ三个值）</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point4_x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point4_y</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point4_z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point5_x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point5_y</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point5_z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 在大约第 45 行左右添加 --&gt;</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point6_x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  &lt;!-- 新增加点的 X 值 --&gt;</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point6_y</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  &lt;!-- 新增加点的 Y 值 --&gt;</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">point6_z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  &lt;!-- 新增加点的 Z 值 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">......</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fsm/waypoint4_x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$(arg point4_x)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fsm/waypoint4_y</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$(arg point4_y)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fsm/waypoint4_z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$(arg point4_z)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fsm/waypoint5_x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$(arg point5_x)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fsm/waypoint5_y</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$(arg point5_y)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fsm/waypoint5_z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$(arg point5_z)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 在大约第 107 行左右添加 --&gt;</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fsm/waypoint6_x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$(arg point6_x)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  &lt;!-- 新增加点的 X --&gt;</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fsm/waypoint6_y</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$(arg point6_y)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  &lt;!-- 新增加点的 Y --&gt;</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fsm/waypoint6_z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$(arg point6_z)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  &lt;!-- 新增加点的 Z --&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li><li><h3 id="运行算法" tabindex="-1"><a class="header-anchor" href="#运行算法"><span>运行算法</span></a></h3><p>手持无人机，先启动视觉里程计，再启动 Ego-Planner，即可看到实时规划轨迹结果。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 打开第一个终端，初始化无人机</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> X152b</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> scripts/one_shot_single.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 打开第二个终端，启动里程计（这里使用Vins-Fusion为例）</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> X152b</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> src/vins_fusion/run.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 打开第三个终端，启动 Ego-Planner 规划算法</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> X152b</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> src/ego_planner_swarm_v1/run.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3)),s("li",null,[i[3]||(i[3]=s("h3",{id:"评估和可视化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#评估和可视化"},[s("span",null,"评估和可视化")])],-1)),s("details",g,[i[1]||(i[1]=s("summary",null,"[可选] 使用 Foxglove 远程可视化",-1)),i[2]||(i[2]=s("p",null,[l("算法运行过程中，打开 Foxglove，可对程序运行状况进行可视化，如下图所示： "),s("img",{src:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/vins_fusion_and_ego_planner.png",alt:"vins_fusion_and_ego_planner.png"})],-1)),s("details",D,[i[0]||(i[0]=s("summary",null,"这里提供了布局配置文件，在Foxglove中导入该布局，实现上图",-1)),k(n,{title:"点击下载本例中的 Foxglove 布局图（需解压后导入）",href:"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/intro/foxglove_VINS-Fusion.zip"})])])])])]),i[6]||(i[6]=a(`<details class="hint-container details"><summary>实际飞行时，速度不满意？</summary><p>设置规划轨迹时允许的最大运行速度和最大加速度</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">max_vel</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> default</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">arg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">max_acc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> default</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">由于D430相机是卷帘相机，且视觉里程计更新频率不是特别高，因此设置过高的运行速度会导致规划失败</p></div></details><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Q: 无人机在穿越障碍时会撞到障碍物。</p><p>可以通过录制rosbag包离线运行算法或手持无人机到撞机点附近，复现异常场景。可能的原因包含：</p><p>1、无人机飞行太快，Ego-Planner 规划结果还未能完全得到执行或里程计延迟太高</p><p>2、在撞机点附近的深度图，导致生成的点云占据栅格地图出现非理想情况（生成错误或生成缺失）</p><p>通常的做法是先检查相机在撞机点附近的深度图可靠（没有大片空洞或者异常点云）</p><p>再考虑调整场地环境（环境灯光、障碍物摆放空间关系）、深度相机参数、点云占据栅格生成参数等来保证该处的规划可行。</p></div>`,3))])}const B=t(d,[["render",y],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/droneKit/Ego-Planner%E8%A7%84%E5%88%92%E7%AE%97%E6%B3%95/","title":"Ego-Planner 规划算法","lang":"zh-CN","frontmatter":{"title":"Ego-Planner 规划算法","createTime":"2024/10/20 00:09:27","permalink":"/droneKit/Ego-Planner规划算法/","readingTime":false,"description":"算法使用 选择合适的场景 由于相机前置安装，因此无人机仅能检测到前方的障碍物。因此避免设置让无人机大转向后立即避障的场景。 当障碍物密集时，尤其是钻洞场景，在接近障碍物时需要更多的点以引导无人机尽可能接近，否则无人机可能会在察觉到可用路径前提前绕行，导致最终没有按预想路径飞行。 设定航点 程序将读取配置文件中设置的目标点，并依次执行抵达他们的飞行任务。...","head":[["meta",{"property":"og:url","content":"https://emnavi.tech/droneKit/Ego-Planner%E8%A7%84%E5%88%92%E7%AE%97%E6%B3%95/"}],["meta",{"property":"og:site_name","content":"emNavi"}],["meta",{"property":"og:title","content":"Ego-Planner 规划算法"}],["meta",{"property":"og:description","content":"算法使用 选择合适的场景 由于相机前置安装，因此无人机仅能检测到前方的障碍物。因此避免设置让无人机大转向后立即避障的场景。 当障碍物密集时，尤其是钻洞场景，在接近障碍物时需要更多的点以引导无人机尽可能接近，否则无人机可能会在察觉到可用路径前提前绕行，导致最终没有按预想路径飞行。 设定航点 程序将读取配置文件中设置的目标点，并依次执行抵达他们的飞行任务。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/vins_fusion_and_ego_planner.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-11T10:55:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-11T10:55:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ego-Planner 规划算法\\",\\"image\\":[\\"https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/vins_fusion_and_ego_planner.png\\"],\\"dateModified\\":\\"2024-12-11T10:55:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"算法使用","slug":"算法使用","link":"#算法使用","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"readingTime":{"minutes":3.82,"words":1146},"git":{"createdTime":1729388885000,"updatedTime":1733914502000,"contributors":[{"name":"Derkai","email":"2363104914@qq.com","commits":5}]},"autoDesc":true,"filePathRelative":"notes/droneKit/2.算法部署/4.Ego-Planner规划算法.md"}');export{B as comp,u as data};