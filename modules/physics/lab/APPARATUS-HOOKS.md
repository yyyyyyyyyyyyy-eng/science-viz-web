# index.js 挂钩说明：冲击摆与杠杆天平 · index.js hooks for the ballistic pendulum and balance lever

分支 `lab-apparatus-wip` 新增了两个力学器材（`world.ballistics` / `world.levers`）。
`physics.mjs`、`view.js`、`presets.mjs` 与测试均已就绪；按下述最小补丁即可让它们出现在
调色板、检查器与删除/大纲路径中。本会话无权改 `index.js`，留给整合者应用。

器材与物理模型（供检查器文案参考）：

- **冲击摆 `ballisticPendulum`**（`addBallistic`，预设 `mech-u4-ballistic-pendulum`）：
  首个自由飞行的弹体进入摆锤捕获域即嵌入。捕获瞬间绕支点角动量守恒
  ω = mv⊥L ⁄ (M+m)L²；此后上摆机械能守恒。读数用 `ballisticReadout(world, b)`：
  `angleDeg`、`maxAngleDeg`、`riseHeight`、`inferredSpeed`（由最大摆角反推射出速度）、
  `catchMass`、`catches`、`tension`、`effectiveMass`、`keBefore`、`keAfter`、`keLossFraction`。
  已捕获后（`catches === 1`）不再捕获，后续弹体正常落地（`'landing'` 事件照旧）。
  捕获时写入 `world.events`：`{ type: 'catch', ballisticId, bodyId, mass, speed, time }`。
- **杠杆天平 `lever`**（`addLever`，预设 `mech-u5-lever-balance`）：
  梁质心低于支点 `beamDrop`，挂钩码在带符号距离 `d`（正为右）。平衡判据 Σ m d = 0；
  不平衡时静置角 θeq = atan(−Σ m d ⁄ (M · h))。读数用 `leverReadout(world, l)`：
  `angleDeg`、`leftTorque`、`rightTorque`、`beamTorque`、`netTorque`、`imbalance`、
  `inertia`、`equilibriumDeg`、`balanced`。挂钩编辑用 `setLeverHanger` /
  `addLeverHanger`（上限 6 个）/ `removeLeverHanger`。

补丁全部位于 `modules/physics/lab/index.js`：

1. 顶部从 `./physics.mjs` 的 import 增补：`addBallistic`、`addLever`、
   `ballisticReadout`、`leverReadout`（以及挂钩编辑所需 `addLeverHanger`、
   `removeLeverHanger`、`setLeverHanger`）。

2. `ZH_EN` 增加标签：

   ```js
   ballisticPendulum: ['冲击摆', 'Ballistic pendulum'],
   lever: ['杠杆天平', 'Balance lever'],
   ```

3. `kindLabel()` 增加两个分支（其它路径走 `ZH_EN` 自动生效）：

   ```js
   if (entity.type === 'ballisticPendulum') return ZH_EN.ballisticPendulum;
   if (entity.type === 'lever') return ZH_EN.lever;
   ```

4. `paletteGroups`：「发射与碰撞」组追加 `['ballistic', '冲击摆', 'Ballistic pendulum']`；
   「旋转与圆周」组追加 `['lever', '杠杆天平', 'Balance lever']`。

5. `entityById()` 增加分支（或直接改用 `findSceneEntity`，其已支持两类）：

   ```js
   if (type === 'ballisticPendulum') return world.ballistics.find((b) => b.id === id) || null;
   if (type === 'lever') return world.levers.find((l) => l.id === id) || null;
   ```

6. `addApparatus(kind)` 增加两个 case（仿 `pendulum` 的形态）：

   ```js
   } else if (kind === 'ballistic') {
     const spot = nextPlacement(kind);
     entity = addBallistic(world, {
       x: spot.x, y: 3.0, z: spot.z, length: 1.2, bobMass: 0.6, radius: 0.22, damping: 0,
     });
   } else if (kind === 'lever') {
     const spot = nextPlacement(kind);
     entity = addLever(world, {
       x: spot.x, y: 1.2, z: spot.z, arm: 1.2, beamMass: 2.4, beamDrop: 0.18,
       damping: 4.5, hang: 0.4, theta0: 12,
       hangers: [{ d: -0.8, mass: 2 }, { d: 0.8, mass: 1 }, { d: 0.4, mass: 2 }],
     });
   }
   ```

7. `apparatusBoxes()` 增加避让盒（放置新器材时不会重叠）：

   ```js
   for (const b of world.ballistics) boxes.push({ x: b.x, z: b.z, halfX: 0.7, halfZ: 0.7 });
   for (const l of world.levers) boxes.push({ x: l.x, z: l.z, halfX: l.arm + 0.3, halfZ: 0.6 });
   ```

8. `deleteEntity()` 的类型链追加（两类都是纯数据，无 cannon 体）：

   ```js
   } else if (entity.type === 'ballisticPendulum') {
     world.ballistics = world.ballistics.filter((b) => b.id !== entity.id);
   } else if (entity.type === 'lever') {
     world.levers = world.levers.filter((l) => l.id !== entity.id);
   }
   ```

9. `sceneEntities()` 与 `isEmpty()`（`updateEmpty` 依赖）各追加 `...world.ballistics,`
   `...world.levers,`（仿 `world.pendulums` 的位置）。

10. 缩放路径 `captureDimensions` / `applyScaleFrom`：仿 `rod` 用
    `setBallisticLength(world, entity, start.length * f)` 与
    `setLeverArm(world, entity, start.arm * f)`（`setLeverArm` 会自动把挂钩距离夹到新臂长内）。

11. `buildInspector()` 建议字段与读数（全部使用上文导出的 API，文案遵循中文在前、双语的规范）：
    - 冲击摆：滑杆 `length`（0.2–3 m）、`bobMass`（0.01–5 kg）、`damping`（0–3）；读数区显示
      最大摆角、上升高度、推算速度、捕获质量、动能损失比例；提示语可写
      「用发射器向摆锤射出小球，由最大摆角反推射出速度。 · Fire a ball into the catcher; the
      rise angle infers the launch speed.」
    - 杠杆：滑杆 `arm`（0.4–2.5 m）、`beamMass`（0.05–8 kg）、`beamDrop`（0.02–0.5 m）、
      `damping`（0–12）；挂钩列表每项给 `d`（−arm–arm）与 `mass`（0.01–5 kg）两个滑杆，
      外加「添加挂钩 · Add hanger」「删除挂钩 · Remove hanger」按钮；读数区显示左/右力矩、
      净力矩、当前倾角、预测平衡角与「已平衡 · Balanced」状态。

12. 传感器目标下拉（`launcher:<id>` 一带）无需改动：发射器行为未变；冲击摆预设里运动
    传感器已按 `setSensorTarget(..., 'launcher', { type: 'launcher' })` 指向发射器，
    `serializeScene` 已持久化 `targetId` / `targetType`。

未做的事（供参考）：调色板图标与 `lab.css` 不需要新规则（沿用现有 `plab-addmenu` 结构）；
`view.js` 已含两器材的建模、签名与每帧动画，点选走既有 raycast→`userData.entity` 通路，
补完 `entityById` 后即可选中、拖动与吸附。
