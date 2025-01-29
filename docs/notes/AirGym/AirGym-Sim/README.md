---
title: AirGym Simulation Platform
createTime: 2025/01/26 17:55:19
permalink: /AirGym/AirGym-Sim/
icon: 'grommet-icons:install'
---

<div class="custom-line-height">
We develop AirGym <a href="https://github.com/emNavi/AirGym">https://github.com/emNavi/AirGym</a> platform based on <a href="https://developer.nvidia.com/isaac-gym" title="IsaacGym">IsaacGym</a> and previous work <a href="https://github.com/ntnu-arl/aerial_gym_simulator">Aerial Gym</a>. Compared with Aerial Gym, we rebuild the flight dynamics and make massive changes to align reality and simulation. 

1. We use the physical dynamics parameters and real robot mesh file to replace general simplified quadrotor. 
2. We also add more assets to make the task more realistic and attempt to keep consistent sensing, as shown blow. 
3. More control levels of RL policies are provide, similar to the control settings in <a href="https://github.com/btx0424/OmniDrones">OmniDrones</a>, including PY, LV, CTA, CTBR, and single-rotor thrust (SRT).
</div>


<div>
<video width="900" controls>
    <source src="https://emnavi-doc-img.oss-cn-beijing.aliyuncs.com/emnavi_video/airgym/random-gen-pressed.mp4" type="video/mp4" />
</video>
</div>