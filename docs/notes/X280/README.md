---
title: 什么是 emNavi X280?
createTime: 2025/07/06 22:07:13
permalink: /X280/
readingTime: false
---

*Embodied Navigation* (**emNavi**) 是一项基于感知的无人机具身智能导航与控制的研究项目。旨在将最前沿的人工智能与优化方法部署于嵌入式层级的移动机器人之上。
该项目开发了无人机科研平台 **X280**、 **X152b** 等，精简并集成了多种基于无人机平台的前沿研究算法。本文介绍了 **emNavi** 项目基于 **X280** 型无人机的二次开发平台，以及几种典型智能算法的一键部署。

## X280飞行平台

X280 是一款集成了的固态激光雷达 Livox-Mid-360、双目深度相机 RealSense D455、轻量级机载算力平台 NVIDIA orin nx、Mini PX4 飞控、以及穿越机动力套件的自主飞行无人机。

<!-- TODO(Derkai):修改图片 -->
<ImageCard
  image="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_assets/X280/X280_2.jpg"
  title="X280"
  description="集成了的固态激光雷达 Livox-Mid-360、双目深度相机 D455、轻量级机载算力平台 NVIDIA Jetson Orin NX、Mini PX4 飞控、以及穿越机动力套件的自主飞行无人机"
  href="/"
/>

## 我能用它做什么？

X280 预装载了 Ubuntu20.04.6-LTS 操作系统，并提供基于此环境的无人机感知、规划、控制、以及学习的二次开发平台。

## 我该如何使用它？

你可以通过本文档来全面的熟悉 emNavi 项目，本文档分为三个部分，主要内容概括如下：

- 快速上手：快速上手X280，熟悉SSH通信连接X280、NoMachine的使用

- 飞行指南：介绍基于X280的前沿开源算法部署方法。该部分将会随着我们对更多算法的优化与适配而不断扩充。

- 常见参数设置：设置X280的自主飞行的飞行参数。

- 代码结构：X280代码目录框架和飞行脚本文件 

