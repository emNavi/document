---
title: rlPx4Controller
createTime: 2025/01/26 17:55:35
permalink: /AirGym/rlPx4Controller/
icon: 'grommet-icons:install'
---

<div align="center">
  <img src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/airgym/ctl_pipeline.png" width="600">
</div>

<strong style="color: pink">rlPx4Controller</strong> (<a href="https://github.com/emNavi/rlPx4Controller">https://github.com/emNavi/rlPx4Controller</a>) is a quadcopter control library implemented in C++ and provides a python interface through pybind11. The motivation of this work is to build a parallel flight control for large-scale quadrotor reinforcement learning (RL) and Sim-to-Real on the PX4 stack. Thus, the implementation of the controller is consistent with the Px4 flight control to ensure the consistency of sim2real.

### Features
- CPU-based parallel flight geometric control computation.
- Strict PX4-like flight controller with differential flatness.
- Parallel control for different levels that supports: position & yaw control (PY), velocity & yaw control (LV), collective thrust & attitude angle (CTA), collective thrust & body rate (CTBR)

4 modules have been implemented so far:

- PolyTrajGen: Fifth degree polynomial trajectory generation
- Lemniscate: Figure-eight curve generation
- pyControl: Single aircraft controller
- pyParallelControl：Multi-aircraft controller for reinforcement learning in vectorized environments.

### Usage
rlPx4Controller provides a very simple way to install and use:

Install:
```bash
git clone git@github.com:emNavi/rlPx4Controller.git
cd rlPx4Controller
pip install -e .
```

Use:
```bash
from rlPx4Controller import ParallelRateControl, ParallelVelControl, ParallelAttiControl, ParallelPosControl
# According to which control layer is selected
# Use Rate control as an example
controller = ParallelRateControl(num_envs)
controller.set_status(status, dt)
cmd_thrusts = controller.update(actions)
```
`num_envs` denotes how many environments are paralleled, `dt` is controller's simulation interval. `set_status()` inputs the status of the drone, including position, attitude in quaternion, linear velocity, and angular velocity. `update()` returns commands of thrust.
