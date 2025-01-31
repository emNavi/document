---
title: Demonstrating Sim-to-Real of Reinforcement Learning for Quadrotor System in the Wild
createTime: 2025/01/26 22:07:13
permalink: /AirGym/
---

::: note Brief: This work is implemented for end-to-end deep reinforcement learning Sim2Real applied on quadrotors. To this end, we develop a series of toolkits including hardware and software, to facilitate RL based methods deployed in reality, especially outside the laboratory.
::: 

<div>
<video width="900" controls>
    <source src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/airgym/final2.0_pressed.mp4" type="video/mp4" />
</video>
</div>

## **Abstract**
<div class="custom-line-height">
The deployment of end-to-end learning-based methods for quadrotor control in unstructured outdoor environments poses significant challenges, including the scarcity of reliable real-world observations, stringent requirements for onboard real-time inference, and the sim-to-real gap inherent to dynamic, noisy settings. Current works have made a great breakthrough in applying the learning-based method to the end-to-end control of drones, but rarely mention the infrastructure system from simulation to reality. This makes it challenging to reproduce or generalize many research outcomes in real-world scenarios, thereby limiting the practical application of learning-based approaches. To bridge this gap, we propose a system that enables the seamless transfer of end-to-end DRL policies. Our system is built on the open-sourced community and strictly aligned with the real-world system. Besides, we further introduce an intermediate software layer comprising AirGym-Real and control_for_gym, which harmonize sensor data, actuator dynamics, and control interfaces between simulated and real-world domains. It is vital that we utilize a set of skills, including domain randomization, hover throttle alignment, and hierarchical state processing, to enable the seamless policy transfer. Through extensive empirical validation, we demonstrate robust outdoor flight performance under real-world perturbations, including wind gusts and sensor noise, and systematically analyze critical factors—such as domain randomization and observational fidelity—that underpin successful zero-shot transfer.
</div>

## **Motivation**
<div class="custom-line-height">
Current works have made a great breakthrough in applying the learning-based method to the end-to-end control of drones, but rarely mention the infrastructure system from simulation to reality. This makes it challenging to reproduce or generalize many research outcomes in real-world scenarios, thereby limiting the practical application of learning-based approaches. <span style="color: pink; "><strong>Therefore, we aim to develop a system that facilitates both training and real-world deployment, minimizing the gap of Sim-to-Real as much as possible for DRL approaches used outside the ideal environments</strong></span>.
</div>

## **Contributions**

:::: steps

- <div class="custom-line-height"> We demonstrate a comprehensive open-source solution spanning hardware, firmware, and software, from training to deployment. </div>
- <div class="custom-line-height"> We validate the sim-to-real performance of quadrotor DRL in the wild, using distinct control policies via different hierarchies. The results show the effectiveness of our system.</div>
- <div class="custom-line-height"> Key factors of transferring a DRL policy to reality outside the laboratory are proposed and discussed. </div>