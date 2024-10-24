---
title: 算法部署
createTime: 2024/10/20 00:07:48
permalink: /droneKit/算法部署/
readingTime: false
icon: 'carbon:demo'
---

::: tip

在出厂时已经预先配置好各算法并完成了试验，因此可以直接进行使用
::: details 项目太旧或者损坏，需要更新项目代码 ？

```bash
# 进入机载电脑终端，删除原有项目文件

# 下载项目代码最新版本
git clone --recursive https://github.com/emNavi/X152b.git

# 环境配置与模块编译
cd X152b
bash scripts/build.sh
```
:::

::: details 不了解项目各模块功能 ？

本项目提供了丰富的前沿无人机自主飞行算法，你可以通过这个文件树来简单了解该项目的各文件主要功能：
::: file-tree

- x152b/
  - scripts  \# 存放常用工具脚本
    - build.sh \# 通用环境配置
    - one_shot_single.sh \# 无人机初始化
    - takeoff.sh \# 起飞
    - land.sh \# 降落
    - kill_one_shot.sh \# 关闭所有程序
  - src
    - autonomous_drone_sdk \# 各类基础功能实现
        - global_interface/ \# 接口层（存放参数文件、通讯接口等）
        - modules/ \# 飞控驱动、相机驱动、通讯驱动等实现
    - 算法1
        - 算法1_setup.sh \# 算法环境配置脚本
        - 算法1_run.sh \# 算法一键运行脚本
        - ...
    - 算法2/
        - 算法1_setup.sh \# 算法环境配置脚本
        - 算法1_run.sh \# 算法一键运行脚本
        - ...
    - ... \# 更多适配算法持续更新中
:::


在无人机准备就绪后，仅需3步即可部署算法进行实机飞行：

:::: steps

- ### 传感器标定
  <LinkCard icon="twemoji:astonished-face" title="传感器标定" href="/droneKit/传感器问题排查/传感器标定/" > </LinkCard>
- ### 组合你的算法并部署
  <LinkCard icon="twemoji:astonished-face" title="组合你的算法并部署" href="/droneKit/组合你的算法并部署/">  </LinkCard>
- ### 算法可视化与评估
  <LinkCard icon="twemoji:astonished-face" title="算法可视化与评估" href="/droneKit/算法可视化与评估/">  </LinkCard>

