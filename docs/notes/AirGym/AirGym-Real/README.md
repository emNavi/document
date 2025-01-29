---
title: AirGym Sim2Real Deployment
createTime: 2025/01/26 19:02:24
permalink: /AirGym/AirGym-Real/
icon: 'grommet-icons:install'
---


We maintain a ROS node named `inference` to obtain state from PX4 autopilot and camera, as well as to conduct the inference. This node will load the pretrained model at the initialization, and subscribe two main topics: `/mavros/local_position/` and `/camera/depth/image_rect_raw/`. Then publish the command to `/airgym/cmd/`, as shown below.

<div align="center">
  <img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/airgym/rosnode.png" width="600">
</div>

The estimated states are from an implemented `vins_fusion`, to obtain odometry data under a local framework. The depth image comes from Realsense D430, and it is sent into neural network after a simple processing. The depth values on each pixal beyond our expectation are clipped and colored as black.