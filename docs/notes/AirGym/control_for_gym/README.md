---
title: Control Bridge for PX4
createTime: 2025/01/26 17:55:32
permalink: /AirGym/control_for_gym/
icon: 'grommet-icons:install'
---

`control_for_gym` is a PX4 middleware stack to publish NN-inferenced commands to expected levels of PX4 control loop. Two functions are primarily implemented: constructing a finite state machine (FSM) to enable switching between trained policy control and classical PID control; and forwarding control commands to the PX4 Autopilot controller based on the selected control hierarchy.

During DRL training, quadrotors are often initialized from a specific state, such as hovering stably at a certain position. This requires the quadrotor to stabilize to the desired state before inference in reality, ensuring continuous control and improving the success rate of sim-to-real transfer. To this end, a simple FSM is constructed for providing steady switching. While transferring policy to the wild, we first conduct an automatic taking-off behaviour and then hover in place to ensure the quadrotor starts to infer with an appropriate state. Subsequently, the model computes the right commands.

After the inference is done to compute an action, it should be transmitted to the flight controller for execution. In our work, we remap the action topic to the corresponding execution topic, to send specific message type of control commands at different levels to the PX4 controller via MAVROS.