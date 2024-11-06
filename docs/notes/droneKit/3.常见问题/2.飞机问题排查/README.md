---
title: 飞机问题排查
createTime: 2024/10/24 11:16:29
permalink: /droneKit/飞机问题排查/
readingTime: false
---

::: warning Q: 不能正常起飞（电机不转、 电机旋转错误、 起飞时直接翻转）
<LinkCard icon="twemoji:astonished-face" title="需要检查遥控器是否校准、电机设置是否正确" href="/droneKit/飞机问题排查/使用QGC进行飞行器设置/#测试螺旋桨" > </LinkCard>
:::

::: warning Q: 能正常起飞，但飞机起飞后漂移

<LinkCard icon="twemoji:astonished-face" title="需要检查遥控器、陀螺仪、加速度计、地平线是否校准" href="/droneKit/飞机问题排查/使用QGC进行飞行器设置/#进行陀螺仪校准" > </LinkCard>
:::

::: warning Q: 能正常起飞，但是飞机很晃

可能存在结构松动，硬件接触不良、地效影响，排除这些影响后，可以看看是否需要重新调试一下PID。
PID可以用QGC的自动调试完成。

首先将飞机使用 hold 模式起飞，将油门置于中位，保证距地有一定距离并且无风干扰的环境下再启动PID自动调试。
<!-- TODO(Derkai): 这里缺一个PID自动调试的教程 -->

:::



