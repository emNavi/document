---
title: 什么是 emNavi ?
createTime: 2024/09/06 22:07:13
permalink: /droneKit/
readingTime: false
---

*Embodied Navigation* (**emNavi**) 是一项基于感知的无人机具身智能导航与控制的研究项目。旨在将最前沿的人工智能与优化方法部署于嵌入式层级的移动机器人之上。
该项目开发了无人机科研平台 **X152b**、 **X660** 等，精简并集成了多种基于无人机平台的前沿研究算法。本文介绍了 **emNavi** 项目基于 **X152b** 型无人机的二次开发平台，以及几种典型智能算法的一键部署。

## X152b平台

X152b 是一款集成了双目深度相机 D430、轻量级机载算力平台 Edge2、Mini PX4 飞控、以及穿越机动力套件的自主飞行无人机。

<!-- TODO(Derkai):修改图片 -->
<ImageCard
  image="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/intro/X152b-main.png"
  title="X152b"
  description="集成了双目深度相机 D430、轻量级机载算力平台 Edge2、Mini PX4 飞控、以及穿越机动力套件的自主飞行无人机。"
  href="/"
  author="emnavi"
  date="2024/08/16"
/>

## 我能用它做什么？

X152b 预装载了 Ubuntu20.04.6-LTS 操作系统，并提供基于此环境的无人机感知、规划、控制、以及学习的二次开发平台。

## 我该如何使用它？

你可以通过本文档来全面的熟悉 emNavi 项目，本文档分为三个部分，主要内容概括如下：

- 快速配置：快速上手X152b。

- 算法部署：介绍基于X152b的前沿开源算法部署方法。该部分将会随着我们对更多算法的优化与适配而不断扩充。

- 问题答疑：针对无人机软硬件各种常见问题的解答。

