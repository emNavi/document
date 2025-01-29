---
title: System Overview
createTime: 2025/01/26 22:32:35
permalink: /AirGym/Overview/
icon: 'grommet-icons:install'
---

## **Hardware**

<div class="custom-line-height">
X152b is a self-designed quadrotor for DRL. It integrates racing drone power, sensing, and onboard computating capability. The X152b flight platform features a 152mm frame size and utilizes the Khadas Edge2 onboard computing platform, integrated with the Rockchip RK3588S chip. It is powered by a 4×Cortex-A76 + 4×Cortex-A55 processor setup, delivering 6 TOPS of AI computing power. The platform is equipped with a RealSense D430 camera, capable of capturing stereo infrared and depth images. The X152b employs a 5-inch racing drone propulsion system, offering agile and powerful performance during high-maneuverability operations, with a maximum speed of up to 30 m/s. Additionally, it incorporates burly high-impact shell from OddityRC, making it safe and durable.
</div>

<ImageCard
  image="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/airgym/X152b_explain.png"
  title="X152b display"
  description="Hardware platform"
  href="/"
/>


## **Software**
<div class="custom-line-height">
The software pipeline of our demonstration system is illustrated below, where we have implemented two separate closed-loop DRL frameworks for training and deployment, tailored for simulation and real-world environments. 
</div>

<ImageCard
  image="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/airgym/pipeline.png"
  title="Pipeline"
  description="System overview: describe the relationship between four toolkits: AirGym, AirGym-Real, rlPx4Controller, and control_for_gym"
  href="/"
/>

:::: tip AirGym: a parallel simulation platform for quadrotor deep reinforcement learning.
<LinkCard title="AirGym simulation platform" href="/AirGym/AirGym-Sim/README.md" > </LinkCard>
::::

:::: tip rlPx4Controller: a strict PX4-like geometric flight controller for different levels of controls.
<LinkCard title="rlPx4Controller parallel PX4 autopilot" href="/AirGym/rlPx4Controller/README.md" > </LinkCard>
::::

:::: tip AirGym-Real: a sim-to-real ROS node for sensing processing and neural network reasoning, with onboard state estimation implementation.
<LinkCard title="AirGym-Real sim-to-real implementation" href="/AirGym/AirGym-Real/README.md" > </LinkCard>
::::

:::: tip control_for_gym: a ROS based control bridge for neural network inference.
<LinkCard title="control_for_gym ROS bridge for inference" href="/AirGym/control_for_gym/README.md" > </LinkCard>
::::
