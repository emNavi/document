---
title: 算法部署
createTime: 2024/10/20 00:07:48
permalink: /droneKit/算法部署/
readingTime: false
icon: 'carbon:demo'
---

## 下载项目代码最新版本

```bash
git clone --recursive https://gitee.com/emnavi/X152b.git

# 编译(首次编译时耗时较长，需要耐心等待)
cd X152b
catkin_make -j4
```

本项目提供了丰富的前沿无人机自主飞行算法，你可以通过这个文件树来简单了解该项目的各文件主要功能：

::: file-tree

- scripts  \# 存放常用工具脚本
  - one_shot_single.sh \# 无人机初始化
  - takeoff.sh \# 起飞
  - land.sh \# 降落
  - kill_one_shot.sh \# 关闭所有程序
- src \# 存放代码文件
  - autonomous_drone_sdk \# 各类基础功能实现
      - global_interface/ \# 接口层（存放参数文件、通讯接口等）
      - modules/ \# 飞控驱动、相机驱动、通讯驱动等实现
  - 算法1
      - setup.sh \# 算法环境配置脚本
      - run.sh \# 算法一键运行脚本
      - ...
  - 算法2/
      - setup.sh \# 算法环境配置脚本
      - run.sh \# 算法一键运行脚本
      - ...
  - ... \# 更多适配算法持续更新中

:::
