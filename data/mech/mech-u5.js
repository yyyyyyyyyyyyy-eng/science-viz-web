export const UNIT = {
  "id": "mech-u5",
  "code": "5",
  "titleZh": "力矩与转动动力学",
  "titleEn": "Torque and Rotational Dynamics",
  "subject": "mech",
  "layer": "ap"
};
export const TOPICS = {
  "5.1": {
    "id": "mech/mech-u5/5.1",
    "subject": "mech",
    "chapterId": "mech-u5",
    "unitCode": "5",
    "unitTitleZh": "力矩与转动动力学",
    "unitTitleEn": "Torque and Rotational Dynamics",
    "code": "5.1",
    "titleZh": "力矩与静力学",
    "titleEn": "Torque and Rotational Statics",
    "layer": "ap",
    "summary": "力矩描述力使刚体绕轴转动的效果，力臂是转轴到力的作用线的垂直距离；力图把每个力画在实际作用点并标出转轴与力臂，用来列 Στ=0。转动平衡只要求合力矩为零，角速度可以是非零常量；它与平动平衡互不蕴含。 · Torque measures how effectively a force rotates a rigid system about an axis, with the lever arm being the perpendicular distance from the axis to the force's line of action. A force diagram places each force at its actual point of application relative to the axis and is used to write Στ=0. Rotational equilibrium requires only zero net torque, so the angular velocity may be a nonzero constant; it neither implies nor is implied by translational equilibrium.",
    "learningObjectives": [
      "能区分力臂与转轴到作用点的距离，用 \\(\\tau=rF\\sin\\theta=Fd\\) 计算力矩并判断正负。 · Distinguish the lever arm from the distance to the point of application, compute torque with \\(\\tau=rF\\sin\\theta=Fd\\), and assign its sign.",
      "能画出刚体力图：标出转轴、每个力的实际作用点和力臂，并说明它与质点自由体图的区别。 · Draw a force diagram for a rigid system that marks the axis, each force's actual application point, and the lever arm, and explain how it differs from a point-mass free-body diagram.",
      "能判断转动平衡（\\(\\sum\\tau=0\\)，\\(\\omega\\) 可恒定非零），并举出转动平衡而非平动平衡、或平动平衡而非转动平衡的实例。 · Determine rotational equilibrium (\\(\\sum\\tau=0\\) with possibly constant nonzero \\(\\omega\\)) and give examples of rotational equilibrium without translational equilibrium and vice versa.",
      "能对静力平衡问题选取合适的转轴，联立 \\(\\sum F=0\\) 与 \\(\\sum\\tau=0\\) 求解未知力。 · Choose a convenient axis for static-equilibrium problems and solve for unknown forces using \\(\\sum F=0\\) together with \\(\\sum\\tau=0\\)."
    ],
    "essentialKnowledge": [
      "力矩 \\(\\tau=rF\\sin\\theta=Fd\\)，其中 \\(d=r\\sin\\theta\\) 是力臂，即转轴到力的作用线的垂直距离；只有垂直于位矢的力分量产生力矩。 · Torque is \\(\\tau=rF\\sin\\theta=Fd\\), where \\(d=r\\sin\\theta\\) is the lever arm, the perpendicular distance from the axis to the force's line of action; only the force component perpendicular to the position vector produces torque.",
      "力矩的正负由转向约定给出：通常逆时针为正、顺时针为负；同一题中必须保持一致，AP 只需说明顺/逆时针。 · The sign of torque follows a rotational convention: typically counterclockwise is positive and clockwise negative; keep it consistent within a problem, and AP only requires clockwise/counterclockwise descriptions.",
      "当力的作用线通过转轴时 \\(d=0\\)，力矩为零；力越大或力臂越长，使刚体转动的效果越强。 · If the force's line of action passes through the axis, \\(d=0\\) and the torque is zero; a larger force or a longer lever arm gives a stronger rotational effect.",
      "力图画在刚体上：每个力画在实际作用点，箭头长度表示相对大小，并标出转轴与各力的力臂；质点自由体图把物体缩成一点、把所有外力平移到质心，只用于分析平动。 · A force diagram is drawn on the extended rigid system: each force is placed at its actual point of application, arrow lengths show relative magnitudes, and the axis and lever arms are marked. A point-mass free-body diagram shrinks the object to a dot and translates all external forces to the center of mass, so it analyzes translation only.",
      "力图中保留作用点相对转轴的位置是关键；力矩要用从转轴到作用点的位矢 \\(\\vec r\\)，不能把力平移到质心后再用质心位置算力矩。 · Preserving each application point relative to the axis is essential in a force diagram; torque uses the position vector \\(\\vec r\\) from the axis to the application point, so a force cannot be moved to the center of mass and then combined with the center-of-mass position.",
      "静力平衡要求 \\(\\sum\\vec F=0\\)、\\(\\sum\\tau=0\\) 且系统的平动速度和角速度都为零；转动平衡只要求关于所选轴的 \\(\\sum\\tau=0\\)，允许 \\(\\omega\\) 为非零常量。 · Static equilibrium requires \\(\\sum\\vec F=0\\), \\(\\sum\\tau=0\\), and zero translational and angular velocities; rotational equilibrium requires only \\(\\sum\\tau=0\\) about the chosen axis and allows a constant nonzero \\(\\omega\\).",
      "转动平衡不蕴含平动平衡：刚体绕不通过质心的固定轴以恒定 \\(\\omega\\) 转动时，质心做圆周运动、合力不为零，但关于该轴的合力矩可以为零。 · Rotational equilibrium does not imply translational equilibrium: when a rigid system rotates at constant \\(\\omega\\) about a fixed axis that does not pass through its center of mass, the center of mass moves in a circle and the net force is nonzero, yet the net torque about that axis can be zero.",
      "平动平衡也不蕴含转动平衡：一对等大、反向、不共线的力（力偶）合力为零，但合力矩不为零，刚体会绕质心产生角加速度。 · Translational equilibrium does not imply rotational equilibrium: a couple of equal, opposite, noncollinear forces has zero net force but nonzero net torque, so the rigid system develops angular acceleration about its center of mass.",
      "转动牛顿第一定律的推论：只有关于所选轴的合力矩为零，系统的角速度才保持不变；\\(\\sum\\tau\\neq0\\) 时角速度必然改变。 · The rotational corollary of Newton's first law: a system's angular velocity stays constant only if the net torque about the chosen axis is zero; if \\(\\sum\\tau\\neq0\\), the angular velocity must change.",
      "均匀刚体的重力作用在重心，均匀重力场中重心与质心重合；静摩擦可以提供力矩，其大小在 \\(0\\) 到 \\(\\mu_sN\\) 之间自动调整，达到最大值时即将打滑。 · Weight of a uniform rigid body acts at its center of gravity, which coincides with the center of mass in a uniform gravitational field. Static friction can provide torque and adjusts between \\(0\\) and \\(\\mu_sN\\); slipping is imminent at the maximum."
    ],
    "definition": "力矩（torque）是力使刚体绕某一轴转动倾向的量度：\\(\\tau=rF\\sin\\theta=Fd\\)，其中 \\(\\vec r\\) 从转轴指向力的作用点，\\(\\theta\\) 是 \\(\\vec r\\) 与 \\(\\vec F\\) 的夹角，\\(d=r\\sin\\theta\\) 是力臂。力图（force diagram）与自由体图相似，但它画在刚体上，把每个力放在实际作用点并标出转轴，以便读出力和力臂、分析力矩。转动平衡（rotational equilibrium）是关于所选轴合力矩为零的力矩配置，此时角速度保持恒定（可以是非零常量）；静力平衡还要求合力为零且系统静止。 · Torque is a measure of a force's tendency to rotate a rigid system about an axis: \\(\\tau=rF\\sin\\theta=Fd\\), where \\(\\vec r\\) points from the axis to the force's application point, \\(\\theta\\) is the angle between \\(\\vec r\\) and \\(\\vec F\\), and \\(d=r\\sin\\theta\\) is the lever arm. A force diagram resembles a free-body diagram, but it is drawn on the extended rigid system, places every force at its actual application point, and marks the axis so that forces and lever arms can be read for torque analysis. Rotational equilibrium is a configuration of torques with zero net torque about the chosen axis, so the angular velocity remains constant (possibly a nonzero constant); static equilibrium additionally requires zero net force and a system at rest.",
    "intuition": "开门时推得越远、方向越垂直于门面，越容易转动；力矩把“力的大小”和“力臂”合成一个量。力图像一张“标好作用点的受力地图”：不看作用点就无法判断哪些力产生力矩。转动平衡不等于“不转”，而是“转速不变”；平动平衡也不等于“不动”，而是“质心速度不变”。 · When opening a door, pushing farther from the hinge and perpendicular to the door works best; torque combines the force magnitude and the lever arm into one quantity. A force diagram is a force map with application points marked: without the application points you cannot tell which forces produce torque. Rotational equilibrium does not mean “not rotating”; it means “angular velocity constant.” Translational equilibrium does not mean “at rest”; it means “center-of-mass velocity constant.”",
    "formulas": [
      {
        "latex": "\\tau=rF\\sin\\theta=Fd",
        "note": "力矩大小；\\(d=r\\sin\\theta\\) 是力臂。 · Torque magnitude; \\(d=r\\sin\\theta\\) is the lever arm."
      },
      {
        "latex": "\\vec\\tau=\\vec r\\times\\vec F",
        "note": "力矩矢量；方向由右手定则给出，AP 只需说明顺/逆时针。 · Torque vector; the direction follows the right-hand rule, while AP only requires clockwise/counterclockwise."
      },
      {
        "latex": "\\sum\\tau=0",
        "note": "转动平衡；角速度可以恒定非零。 · Rotational equilibrium; the angular velocity may be constant and nonzero."
      },
      {
        "latex": "\\sum F_x=0,\\quad \\sum F_y=0,\\quad \\sum\\tau=0",
        "note": "静力平衡；还需系统初始静止（\\(v_{\\mathrm{cm}}=0\\)、\\(\\omega=0\\)）。 · Static equilibrium; the system must also be initially at rest (\\(v_{\\mathrm{cm}}=0\\), \\(\\omega=0\\))."
      },
      {
        "latex": "\\tau_{\\mathrm{net}}=I\\alpha",
        "note": "非平衡时角速度改变；本主题只取 \\(\\alpha=0\\) 的转动平衡情形。 · When not balanced, the angular velocity changes; this topic uses only the \\(\\alpha=0\\) rotational-equilibrium case."
      }
    ],
    "derivationNotes": [
      {
        "from": "力臂定义 · Definition of lever arm",
        "to": "力矩大小 · Torque magnitude",
        "note": "\\(d=r\\sin\\theta\\)，所以 \\(\\tau=rF\\sin\\theta=Fd\\)；平行于位矢的力分量不产生力矩。 · Since \\(d=r\\sin\\theta\\), \\(\\tau=rF\\sin\\theta=Fd\\); the force component parallel to the position vector produces no torque."
      },
      {
        "from": "力矩求和 · Sum of torques",
        "to": "转动平衡 · Rotational equilibrium",
        "note": "\\(\\sum\\tau=0\\) 意味着 \\(\\alpha=0\\)，所以 \\(\\omega\\) 恒定；若初始 \\(\\omega=0\\) 则保持静止。 · \\(\\sum\\tau=0\\) implies \\(\\alpha=0\\), so \\(\\omega\\) is constant; if the initial \\(\\omega=0\\), the system remains at rest."
      },
      {
        "from": "力偶 · Couple",
        "to": "平动平衡但非转动平衡 · Translational but not rotational equilibrium",
        "note": "两个等大反向、相距 \\(d\\) 的力：\\(\\sum F=0\\)，但 \\(\\sum\\tau=Fd\\neq0\\)。 · Two equal, opposite forces separated by \\(d\\): \\(\\sum F=0\\), but \\(\\sum\\tau=Fd\\neq0\\)."
      },
      {
        "from": "固定轴转动 · Fixed-axis rotation",
        "to": "转动平衡但非平动平衡 · Rotational but not translational equilibrium",
        "note": "轴对刚体的力作用在轴上、关于轴无力矩；质心不在轴上时质心做圆周运动，需要向心力，故 \\(\\sum F\\neq0\\)。 · The axle force acts at the axis and has no torque about it; when the center of mass is off the axis, it moves in a circle and needs centripetal force, so \\(\\sum F\\neq0\\)."
      }
    ],
    "conditions": [
      "刚体；形变忽略，转轴固定或瞬时固定。 · Rigid system with negligible deformation; the axis is fixed or instantaneously fixed.",
      "\\(\\theta\\) 是位矢与力的夹角；力臂 \\(d\\) 是转轴到力的作用线的垂直距离，不是到作用点的距离。 · \\(\\theta\\) is the angle between the position vector and the force; the lever arm \\(d\\) is the perpendicular distance from the axis to the line of action, not the distance to the application point.",
      "同一题中所有力矩必须关于同一轴；平衡时可任选轴，通常选未知力最多的点以消去未知量。 · All torques in one problem must be taken about the same axis; in equilibrium the axis may be chosen freely, usually through the point with the most unknown forces to eliminate them.",
      "转动平衡只要求 \\(\\sum\\tau=0\\)，不要求 \\(\\sum F=0\\)；静力平衡同时要求两者且 \\(\\omega=0\\)。 · Rotational equilibrium requires only \\(\\sum\\tau=0\\), not \\(\\sum F=0\\); static equilibrium requires both and \\(\\omega=0\\).",
      "均匀规则物体的重力作用在重心（几何中心）；非均匀物体需用质心位置。 · Weight of a uniform regular object acts at its center of gravity (geometric center); a nonuniform object requires its center-of-mass location.",
      "静摩擦力在 \\(0\\) 到 \\(\\mu_sN\\) 之间自动调整；超过最大值则打滑，静力平衡被破坏。 · Static friction adjusts between \\(0\\) and \\(\\mu_sN\\); beyond the maximum the object slips and static equilibrium fails.",
      "力图中的力必须画在实际作用点；若只关心平动，才可把物体简化为质点并画自由体图。 · Forces in a force diagram must be drawn at their actual application points; only when translation alone matters may the object be reduced to a point-mass free-body diagram."
    ],
    "keyPoints": [
      "力矩 = 力 × 力臂；力臂是转轴到作用线的垂直距离。 · Torque = force × lever arm; the lever arm is the perpendicular distance from the axis to the line of action.",
      "力的作用线穿过转轴时力矩为零。 · Torque is zero when the line of action passes through the axis.",
      "力图画在刚体上、保留作用点；自由体图把物体缩成一点。 · A force diagram is drawn on the rigid system and keeps application points; a free-body diagram shrinks the object to a dot.",
      "静力平衡：\\(\\sum F=0\\)、\\(\\sum\\tau=0\\)、\\(\\omega=0\\)。 · Static equilibrium: \\(\\sum F=0\\), \\(\\sum\\tau=0\\), and \\(\\omega=0\\).",
      "转动平衡：\\(\\sum\\tau=0\\)，\\(\\omega\\) 可非零恒定。 · Rotational equilibrium: \\(\\sum\\tau=0\\) with possibly constant nonzero \\(\\omega\\).",
      "转动平衡与平动平衡互不蕴含。 · Rotational and translational equilibrium do not imply each other.",
      "力偶：\\(\\sum F=0\\) 但 \\(\\sum\\tau\\neq0\\)。 · Couple: \\(\\sum F=0\\) but \\(\\sum\\tau\\neq0\\).",
      "选轴以消去最多未知力。 · Choose the axis that eliminates the most unknown forces."
    ],
    "misconceptions": [
      "把力臂当成转轴到作用点的距离；力臂是到作用线的垂直距离。 · Treating the lever arm as the distance from the axis to the application point; it is the perpendicular distance to the line of action.",
      "只检查 \\(\\sum F=0\\) 而漏掉 \\(\\sum\\tau=0\\)。 · Checking only \\(\\sum F=0\\) and forgetting \\(\\sum\\tau=0\\).",
      "认为转动平衡就是 \\(\\omega=0\\)；转动平衡允许恒定非零角速度。 · Thinking rotational equilibrium means \\(\\omega=0\\); it allows a constant nonzero angular velocity.",
      "认为 \\(\\sum F=0\\) 必然 \\(\\sum\\tau=0\\)，或反之；力偶与偏心转动是反例。 · Assuming \\(\\sum F=0\\) forces \\(\\sum\\tau=0\\), or vice versa; couples and off-center rotation are counterexamples.",
      "认为力矩平衡与转轴选择有关；完整平衡时对任意轴合力矩都为零，但仅转动平衡时只保证所选轴。 · Thinking torque balance depends on the axis; in full equilibrium the net torque is zero about any axis, but rotational equilibrium alone guarantees only the chosen axis.",
      "忘记均匀物体的重力作用在重心。 · Forgetting that a uniform object's weight acts at its center of gravity.",
      "把静摩擦力当作固定值 \\(\\mu_sN\\)；它会在范围内调整。 · Treating static friction as the fixed value \\(\\mu_sN\\); it adjusts within its range.",
      "在力图中把力平移到质心后仍按原作用点算力矩，或画自由体图时漏掉作用点信息。 · Translating forces to the center of mass in a force diagram and still using the original application point, or omitting application-point information in a free-body diagram."
    ],
    "examples": [
      {
        "title": "例 1 · 跷跷板 · Example 1: Seesaw",
        "prompt": "质量 \\(30\\,\\mathrm{kg}\\) 的小孩坐在距支点 \\(2.0\\,\\mathrm{m}\\) 处，质量 \\(20\\,\\mathrm{kg}\\) 的小孩应坐在另一侧多远处才能平衡？ · A \\(30\\,\\mathrm{kg}\\) child sits \\(2.0\\,\\mathrm{m}\\) from the pivot. How far from the pivot on the other side must a \\(20\\,\\mathrm{kg}\\) child sit for balance?",
        "steps": [
          "关于支点取矩：\\(30g(2.0)=20g(d)\\)。 · Take torques about the pivot: \\(30g(2.0)=20g(d)\\).",
          "\\(d=\\dfrac{60}{20}=3.0\\,\\mathrm{m}\\)。 · \\(d=\\dfrac{60}{20}=3.0\\,\\mathrm{m}\\)."
        ],
        "solution": "\\(d=3.0\\,\\mathrm{m}\\)。 · \\(d=3.0\\,\\mathrm{m}\\).",
        "solutionLatex": "d=3.0\\,\\mathrm{m}"
      },
      {
        "title": "例 2 · 双支点横梁 · Example 2: Beam on two supports",
        "prompt": "\\(4.0\\,\\mathrm{m}\\) 长、\\(20\\,\\mathrm{kg}\\) 的均匀横梁两端各有一个支点，\\(60\\,\\mathrm{kg}\\) 的人站在距左端 \\(1.0\\,\\mathrm{m}\\) 处。求两支持力。 · A uniform \\(20\\,\\mathrm{kg}\\) beam is \\(4.0\\,\\mathrm{m}\\) long and supported at both ends. A \\(60\\,\\mathrm{kg}\\) person stands \\(1.0\\,\\mathrm{m}\\) from the left end. Find the two support forces.",
        "steps": [
          "总重 \\((60+20)(9.8)=784\\,\\mathrm{N}\\)。 · Total weight: \\((60+20)(9.8)=784\\,\\mathrm{N}\\).",
          "关于左端取矩：\\(N_R(4.0)=60(9.8)(1.0)+20(9.8)(2.0)=980\\Rightarrow N_R=245\\,\\mathrm{N}\\)。 · Take torques about the left end: \\(N_R(4.0)=60(9.8)(1.0)+20(9.8)(2.0)=980\\Rightarrow N_R=245\\,\\mathrm{N}\\).",
          "\\(N_L=784-245=539\\,\\mathrm{N}\\)。 · \\(N_L=784-245=539\\,\\mathrm{N}\\)."
        ],
        "solution": "\\(N_L\\approx 5.4\\times10^{2}\\,\\mathrm{N}\\)，\\(N_R\\approx 2.5\\times10^{2}\\,\\mathrm{N}\\)。 · \\(N_L\\approx 5.4\\times10^{2}\\,\\mathrm{N}\\) and \\(N_R\\approx 2.5\\times10^{2}\\,\\mathrm{N}\\).",
        "solutionLatex": "N_L\\approx 5.4\\times10^{2}\\,\\mathrm{N},\\;N_R\\approx 2.5\\times10^{2}\\,\\mathrm{N}"
      },
      {
        "title": "例 3 · 悬挂横梁 · Example 3: Hanging beam",
        "prompt": "\\(2.0\\,\\mathrm{m}\\) 长、\\(10\\,\\mathrm{kg}\\) 的均匀横梁一端铰接在墙上，另一端用竖直绳拉住，梁水平。求绳张力。 · A uniform \\(10\\,\\mathrm{kg}\\) beam is \\(2.0\\,\\mathrm{m}\\) long, hinged at one end to a wall and held horizontal by a vertical rope at the other end. Find the rope tension.",
        "steps": [
          "重力作用在中点，力臂 \\(1.0\\,\\mathrm{m}\\)；张力力臂 \\(2.0\\,\\mathrm{m}\\)。 · Weight acts at the midpoint with lever arm \\(1.0\\,\\mathrm{m}\\); the tension has lever arm \\(2.0\\,\\mathrm{m}\\).",
          "关于铰链取矩：\\(T(2.0)=mg(1.0)\\)。 · Take torques about the hinge: \\(T(2.0)=mg(1.0)\\).",
          "\\(T=\\dfrac{10(9.8)}{2}=49\\,\\mathrm{N}\\)。 · \\(T=\\dfrac{10(9.8)}{2}=49\\,\\mathrm{N}\\)."
        ],
        "solution": "\\(T=49\\,\\mathrm{N}\\)。 · \\(T=49\\,\\mathrm{N}\\).",
        "solutionLatex": "T=49\\,\\mathrm{N}"
      },
      {
        "title": "例 4 · 梯子与力图 · Example 4: Ladder and force diagram",
        "prompt": "均匀梯子质量 \\(12\\,\\mathrm{kg}\\)、长 \\(4.0\\,\\mathrm{m}\\)，斜靠在光滑竖直墙上，与地面成 \\(60^\\circ\\)。地面有摩擦，求墙的支持力与地面摩擦力。取 \\(g=9.8\\,\\mathrm{m/s^{2}}\\)。 · A uniform ladder of mass \\(12\\,\\mathrm{kg}\\) and length \\(4.0\\,\\mathrm{m}\\) leans against a smooth vertical wall at \\(60^\\circ\\) to the ground. The floor is rough. Find the wall normal force and the friction force. Take \\(g=9.8\\,\\mathrm{m/s^{2}}\\).",
        "steps": [
          "梯子受力：重力 \\(mg\\) 在重心（距两端各 \\(2.0\\,\\mathrm{m}\\)）、墙的法向力 \\(N_w\\) 在顶端水平向里、地面的法向力 \\(N_f\\) 与静摩擦 \\(f\\) 在底端。 · Forces on the ladder: weight \\(mg\\) at the center (2.0 m from each end), wall normal \\(N_w\\) at the top acting horizontally inward, and floor normal \\(N_f\\) plus static friction \\(f\\) at the bottom.",
          "关于底端取矩，消去 \\(N_f\\) 和 \\(f\\)：\\(N_w(4.0\\sin60^\\circ)=mg(2.0\\cos60^\\circ)\\)。 · Take torques about the bottom to eliminate \\(N_f\\) and \\(f\\): \\(N_w(4.0\\sin60^\\circ)=mg(2.0\\cos60^\\circ)\\).",
          "\\(N_w=\\dfrac{12(9.8)(2.0)(0.50)}{4.0(0.866)}=34\\,\\mathrm{N}\\)。 · \\(N_w=\\dfrac{12(9.8)(2.0)(0.50)}{4.0(0.866)}=34\\,\\mathrm{N}\\).",
          "水平方向 \\(f=N_w=34\\,\\mathrm{N}\\)；竖直方向 \\(N_f=mg=118\\,\\mathrm{N}\\)。 · Horizontally \\(f=N_w=34\\,\\mathrm{N}\\); vertically \\(N_f=mg=118\\,\\mathrm{N}\\)."
        ],
        "solution": "\\(N_w\\approx 34\\,\\mathrm{N}\\)，\\(f\\approx 34\\,\\mathrm{N}\\)。 · \\(N_w\\approx 34\\,\\mathrm{N}\\) and \\(f\\approx 34\\,\\mathrm{N}\\).",
        "solutionLatex": "N_w=\\dfrac{mg(2.0\\cos60^\\circ)}{4.0\\sin60^\\circ}\\approx34\\,\\mathrm{N},\\qquad f=N_w\\approx34\\,\\mathrm{N}"
      },
      {
        "title": "例 5 · 力偶：平动平衡但非转动平衡 · Example 5: A couple—translational but not rotational equilibrium",
        "prompt": "一根长 \\(0.40\\,\\mathrm{m}\\) 的均匀细杆静止在无摩擦水平面上，在两端各施加 \\(10\\,\\mathrm{N}\\) 的力，两力等大反向且都垂直于杆。求合力与关于质心的合力矩，并说明杆的运动。 · A uniform rod of length \\(0.40\\,\\mathrm{m}\\) rests on a frictionless horizontal surface. Equal and opposite \\(10\\,\\mathrm{N}\\) forces are applied at its two ends, perpendicular to the rod. Find the net force and the net torque about the center of mass, and describe the motion.",
        "steps": [
          "两力等大反向，\\(\\sum F=0\\)，质心保持静止（平动平衡）。 · The forces are equal and opposite, so \\(\\sum F=0\\) and the center of mass stays at rest (translational equilibrium).",
          "关于质心，两力都产生同向力矩，力臂各为 \\(0.20\\,\\mathrm{m}\\)：\\(\\tau_{\\mathrm{net}}=2(10)(0.20)=4.0\\,\\mathrm{N\\,m}\\)。 · About the center of mass both forces produce torque in the same sense, each with lever arm \\(0.20\\,\\mathrm{m}\\): \\(\\tau_{\\mathrm{net}}=2(10)(0.20)=4.0\\,\\mathrm{N\\,m}\\).",
          "合力矩不为零，杆开始绕质心转动，角速度改变。 · The net torque is nonzero, so the rod begins to rotate about its center of mass and its angular velocity changes."
        ],
        "solution": "平动平衡但非转动平衡：\\(\\sum F=0\\)，\\(\\tau_{\\mathrm{net}}=4.0\\,\\mathrm{N\\,m}\\)。 · Translational equilibrium without rotational equilibrium: \\(\\sum F=0\\) and \\(\\tau_{\\mathrm{net}}=4.0\\,\\mathrm{N\\,m}\\).",
        "solutionLatex": "\\sum F=0,\\qquad \\tau_{\\mathrm{net}}=2(10)(0.20)=4.0\\,\\mathrm{N\\,m}"
      },
      {
        "title": "例 6 · 偏心转动：转动平衡但非平动平衡 · Example 6: Off-center rotation—rotational but not translational equilibrium",
        "prompt": "一个哑铃由两个小球和轻杆组成，绕通过杆上某点的竖直固定轴以恒定 \\(\\omega\\) 转动，轴不通过质心。说明为什么它处于转动平衡但不是平动平衡。 · A dumbbell made of two small masses on a light rod rotates at constant \\(\\omega\\) about a fixed vertical axis through a point on the rod that is not the center of mass. Explain why it is in rotational equilibrium but not translational equilibrium.",
        "steps": [
          "恒定 \\(\\omega\\) 意味着 \\(\\alpha=0\\)，关于轴的合力矩为零；轴的支持力作用在轴上，关于轴无力矩。 · Constant \\(\\omega\\) means \\(\\alpha=0\\), so the net torque about the axis is zero; the axle force acts at the axis and has zero torque about it.",
          "质心不在轴上，质心做半径为 \\(r_{\\mathrm{cm}}\\) 的圆周运动，需要向心力 \\(M\\omega^{2}r_{\\mathrm{cm}}\\)，所以 \\(\\sum F\\neq0\\)。 · The center of mass is off the axis and moves in a circle of radius \\(r_{\\mathrm{cm}}\\), requiring centripetal force \\(M\\omega^{2}r_{\\mathrm{cm}}\\), so \\(\\sum F\\neq0\\).",
          "因此转动平衡（\\(\\sum\\tau=0\\)）成立，但平动平衡（\\(\\sum F=0\\)）不成立。 · Therefore rotational equilibrium (\\(\\sum\\tau=0\\)) holds while translational equilibrium (\\(\\sum F=0\\)) does not."
        ],
        "solution": "\\(\\sum\\tau=0\\) 但 \\(\\sum F=M\\omega^{2}r_{\\mathrm{cm}}\\neq0\\)：转速恒定，质心却在做圆周运动。 · \\(\\sum\\tau=0\\) but \\(\\sum F=M\\omega^{2}r_{\\mathrm{cm}}\\neq0\\): the angular velocity is constant while the center of mass moves in a circle.",
        "solutionLatex": "\\sum\\tau=0,\\qquad \\sum F=M\\omega^{2}r_{\\mathrm{cm}}\\neq0"
      }
    ],
    "examTips": [
      "先画力图：标出转轴、作用点、力臂，再写 \\(\\sum\\tau=0\\)。 · Draw the force diagram first: mark the axis, application points, and lever arms, then write \\(\\sum\\tau=0\\).",
      "力臂是到作用线的垂直距离，倾斜力用 \\(rF\\sin\\theta\\)。 · The lever arm is the perpendicular distance to the line of action; for a tilted force use \\(rF\\sin\\theta\\).",
      "选轴以消去最多未知力（铰链、支点）。 · Choose the axis to eliminate the most unknown forces (hinge or support).",
      "区分静力平衡、转动平衡、平动平衡；题目问“角速度恒定”时只需 \\(\\sum\\tau=0\\)。 · Distinguish static, rotational, and translational equilibrium; when a question says “constant angular velocity,” only \\(\\sum\\tau=0\\) is required.",
      "力偶问题先看 \\(\\sum F\\) 再看 \\(\\sum\\tau\\)。 · For couple problems, check \\(\\sum F\\) first and then \\(\\sum\\tau\\).",
      "检查单位 \\(\\mathrm{N\\,m}\\) 与方向（顺/逆时针）。 · Check units of \\(\\mathrm{N\\,m}\\) and the sense (clockwise/counterclockwise)."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u5",
        "code": "5.2",
        "title": "转动运动学 · Rotational Kinematics",
        "relation": "后续 · downstream"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u5",
        "code": "5.3",
        "title": "转动动力学 · Rotational Dynamics and Energy",
        "relation": "后续 · downstream"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.1",
        "title": "质心 · Center of Mass",
        "relation": "先修 · prerequisite"
      }
    ],
    "modules": [
      {
        "id": "rigid-rotation",
        "title": "刚体转动与转动惯量 · Rigid-body rotation and rotational inertia"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u5",
    "connections": [
      "先修：2.3 牛顿第一、第二定律与 2.1 质心；力、力矩与重心的概念在这里合并。 · Prerequisite: Newton's first and second laws in 2.3 and center of mass in 2.1; force, torque, and center-of-gravity ideas combine here.",
      "后续：5.2 转动运动学用 \\(\\theta,\\omega,\\alpha\\) 描述转动；5.3 转动动力学用 \\(\\tau_{\\mathrm{net}}=I\\alpha\\) 解释非平衡情形。 · Downstream: 5.2 rotational kinematics describes rotation with \\(\\theta,\\omega,\\alpha\\), and 5.3 rotational dynamics explains the non-equilibrium case with \\(\\tau_{\\mathrm{net}}=I\\alpha\\).",
      "应用：梯子、横梁、跷跷板、铰链与摩擦力矩；先画力图再列方程。 · Applications: ladders, beams, seesaws, hinges, and friction torques; draw the force diagram before writing equations.",
      "跨学科：人体关节与肌肉力矩、桥梁与结构平衡都使用同一套力矩语言。 · Cross-disciplinary: joint and muscle torques in the body and the balance of bridges and structures use the same torque language."
    ],
    "intuitionDetailed": "先把刚体画出来而不是画成一个点：在图上标出转轴、每个力的实际作用点和力的方向。对每个力作作用线的垂线，垂足到转轴的距离就是力臂；力臂越大，同样的力产生的力矩越大。若力的作用线穿过转轴，力臂为零，这个力再大也不能使物体绕该轴转动。列方程时先选轴——通常选未知力最多的点——这样这些未知力的力矩为零。平衡问题中 \\(\\sum\\tau=0\\) 与 \\(\\sum F=0\\) 是两条独立的条件：力偶说明 \\(\\sum F=0\\) 不能保证 \\(\\sum\\tau=0\\)；偏心转动说明 \\(\\sum\\tau=0\\) 也不能保证 \\(\\sum F=0\\)。 · Draw the rigid system itself rather than reducing it to a dot: mark the axis and the actual application point and direction of every force. Drop a perpendicular from the axis to each force's line of action; the distance to that foot is the lever arm, and a longer lever arm gives a larger torque for the same force. If the line of action passes through the axis, the lever arm is zero and even a large force cannot rotate the system about that axis. When writing equations, choose the axis first—usually through the point with the most unknown forces—so those unknowns have zero torque. In equilibrium problems \\(\\sum\\tau=0\\) and \\(\\sum F=0\\) are independent conditions: a couple shows that \\(\\sum F=0\\) does not guarantee \\(\\sum\\tau=0\\), and off-center rotation shows that \\(\\sum\\tau=0\\) does not guarantee \\(\\sum F=0\\).",
    "development": [
      "画出刚体与转轴，标出每个力的实际作用点。 · Draw the rigid system and axis, and mark each force's actual application point.",
      "作每个力的作用线，求力臂 \\(d=r\\sin\\theta\\) 并判断力矩正负。 · Construct each line of action, find the lever arm \\(d=r\\sin\\theta\\), and assign the torque sign.",
      "区分问题要求：静力平衡、转动平衡还是平动平衡。 · Decide whether the problem asks for static, rotational, or translational equilibrium.",
      "选轴并写 \\(\\sum\\tau=0\\)；静力平衡再写 \\(\\sum F=0\\)。 · Choose the axis and write \\(\\sum\\tau=0\\); for static equilibrium also write \\(\\sum F=0\\).",
      "用极限情形检查：力臂趋于零时力矩是否趋于零？两力共线时力偶是否消失？ · Check with limits: does the torque vanish as the lever arm goes to zero? Does the couple vanish when the two forces become collinear?"
    ],
    "checks": [
      "力臂与“转轴到作用点的距离”有什么区别？何时两者相等？ · How does the lever arm differ from “the distance from the axis to the application point,” and when are they equal?",
      "为什么转动平衡允许非零恒定角速度？举一个例子。 · Why does rotational equilibrium allow a constant nonzero angular velocity? Give an example.",
      "给出一个平动平衡但非转动平衡的实例，并画出力图。 · Give an example of translational equilibrium without rotational equilibrium and draw its force diagram.",
      "力图中哪些信息是质点自由体图没有的？为什么这些信息对力矩问题必需？ · What information does a force diagram contain that a point-mass free-body diagram does not, and why is it essential for torque problems?",
      "若把转轴改选到另一个点，\\(\\sum\\tau=0\\) 是否仍成立？在什么条件下？ · If the axis is moved to another point, does \\(\\sum\\tau=0\\) still hold, and under what condition?"
    ],
    "vocabulary": [
      {
        "termZh": "力矩",
        "termEn": "torque",
        "defZh": "力使刚体绕轴转动倾向的量度，\\(\\tau=rF\\sin\\theta=Fd\\)。",
        "defEn": "A measure of a force's tendency to rotate a rigid system about an axis, \\(\\tau=rF\\sin\\theta=Fd\\)."
      },
      {
        "termZh": "力臂",
        "termEn": "lever arm",
        "defZh": "转轴到力的作用线的垂直距离，\\(d=r\\sin\\theta\\)。",
        "defEn": "The perpendicular distance from the axis to the force's line of action, \\(d=r\\sin\\theta\\)."
      },
      {
        "termZh": "力的作用线",
        "termEn": "line of action",
        "defZh": "沿力方向延伸的直线；作用线通过转轴时力矩为零。",
        "defEn": "The line extending along the force; when it passes through the axis, the torque is zero."
      },
      {
        "termZh": "力图",
        "termEn": "force diagram",
        "defZh": "画在刚体上、把每个力放在实际作用点并标出转轴的受力图，用于分析力矩。",
        "defEn": "A diagram drawn on the rigid system that places each force at its actual application point and marks the axis, used to analyze torques."
      },
      {
        "termZh": "自由体图",
        "termEn": "free-body diagram",
        "defZh": "把物体视为质点、只画外力的图，用于分析平动；不保留作用点位置。",
        "defEn": "A diagram that treats the object as a point and shows only external forces for translation analysis; it does not retain application-point locations."
      },
      {
        "termZh": "转动平衡",
        "termEn": "rotational equilibrium",
        "defZh": "关于所选轴合力矩为零的力矩配置，角速度恒定（可非零）。",
        "defEn": "A configuration of torques with zero net torque about the chosen axis, so the angular velocity is constant (possibly nonzero)."
      },
      {
        "termZh": "平动平衡",
        "termEn": "translational equilibrium",
        "defZh": "合力为零的配置，质心速度恒定（可非零）。",
        "defEn": "A configuration with zero net force, so the center-of-mass velocity is constant (possibly nonzero)."
      },
      {
        "termZh": "力偶",
        "termEn": "couple",
        "defZh": "两个等大、反向、不共线的力；合力为零但合力矩不为零。",
        "defEn": "Two equal, opposite, noncollinear forces; the net force is zero but the net torque is not."
      }
    ]
  },
  "5.2": {
    "id": "mech/mech-u5/5.2",
    "subject": "mech",
    "chapterId": "mech-u5",
    "unitCode": "5",
    "unitTitleZh": "力矩与转动动力学",
    "unitTitleEn": "Torque and Rotational Dynamics",
    "code": "5.2",
    "titleZh": "转动运动学",
    "titleEn": "Rotational Kinematics",
    "layer": "ap",
    "summary": "角位移是刚体上一点绕指定轴扫过的角度（弧度）；角速度与角加速度分别是角位置、角速度对时间的变化率。同一刚体各点的 \\(\\omega\\)、\\(\\alpha\\) 相同，但线速度、切向加速度随半径增大。 · Angular displacement is the angle in radians swept by a point on a rigid system about a specified axis; angular velocity and angular acceleration are the time rates of change of angular position and angular velocity. All points of a rigid system share the same \\(\\omega\\) and \\(\\alpha\\), while linear speed and tangential acceleration grow with radius.",
    "learningObjectives": [
      "用角位移、角速度、角加速度描述刚体随时间的转动，并说明角位移是绕指定轴扫过的角度（弧度）。 · Describe a rigid system's rotation over time with angular displacement, angular velocity, and angular acceleration, and explain that angular displacement is the angle in radians swept about a specified axis.",
      "在 \\(\\theta\\)–\\(t\\)、\\(\\omega\\)–\\(t\\)、\\(\\alpha\\)–\\(t\\) 图之间转换：斜率与面积。 · Convert among \\(\\theta\\)–\\(t\\), \\(\\omega\\)–\\(t\\), and \\(\\alpha\\)–\\(t\\) graphs using slopes and areas.",
      "对同一刚体区分角量与线量：\\(s=r\\theta\\)、\\(v=r\\omega\\)、\\(a_t=r\\alpha\\)、\\(a_c=\\omega^{2}r\\)，并说明各点 \\(\\omega\\)、\\(\\alpha\\) 相同而 \\(v\\)、\\(a_t\\) 不同。 · Distinguish angular from linear quantities for one rigid system: \\(s=r\\theta\\), \\(v=r\\omega\\), \\(a_t=r\\alpha\\), and \\(a_c=\\omega^{2}r\\), noting that \\(\\omega\\) and \\(\\alpha\\) are shared while \\(v\\) and \\(a_t\\) vary with radius.",
      "在 \\(\\alpha\\) 恒定时选择并应用转动运动学方程，检查单位与符号。 · Select and apply rotational kinematics equations when \\(\\alpha\\) is constant, checking units and signs."
    ],
    "essentialKnowledge": [
      "角位移 \\(\\Delta\\theta\\) 是刚体上一点绕指定轴转过的角度，单位为弧度；它不是该点走过的弧长，也不是该点的线位移。 · Angular displacement \\(\\Delta\\theta\\) is the angle through which a point on a rigid system rotates about a specified axis, measured in radians; it is neither the arc length nor the linear displacement of that point.",
      "弧度定义为 \\(\\theta=\\dfrac{s}{r}\\)，一周为 \\(2\\pi\\) rad；只有弧度制下 \\(s=r\\theta\\)、\\(v=r\\omega\\)、\\(a_t=r\\alpha\\) 才成立。 · Radian measure is defined by \\(\\theta=\\dfrac{s}{r}\\), with one revolution equal to \\(2\\pi\\) rad; only in radians do \\(s=r\\theta\\), \\(v=r\\omega\\), and \\(a_t=r\\alpha\\) hold.",
      "角速度是角位置的变化率：平均角速度 \\(\\omega_{\\mathrm{avg}}=\\dfrac{\\Delta\\theta}{\\Delta t}\\)，瞬时角速度 \\(\\omega=\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}\\)。 · Angular velocity is the rate of change of angular position: average \\(\\omega_{\\mathrm{avg}}=\\dfrac{\\Delta\\theta}{\\Delta t}\\) and instantaneous \\(\\omega=\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}\\).",
      "角加速度是角速度的变化率：平均角加速度 \\(\\alpha_{\\mathrm{avg}}=\\dfrac{\\Delta\\omega}{\\Delta t}\\)，瞬时角加速度 \\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\)。 · Angular acceleration is the rate of change of angular velocity: average \\(\\alpha_{\\mathrm{avg}}=\\dfrac{\\Delta\\omega}{\\Delta t}\\) and instantaneous \\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\).",
      "转向约定：逆时针为正、顺时针为负（或反之），同一题必须一致。AP 边界：只要求能用矢量约定运算角量的大小，不考角速度、角加速度矢量的方向；方向描述限于相对给定转轴的顺时针/逆时针。 · Sign convention: counterclockwise positive and clockwise negative (or the reverse), consistent within a problem. AP boundary: students must manipulate the magnitudes of angular quantities using vector conventions, but the directions of the angular vectors are not assessed; direction descriptions are limited to clockwise and counterclockwise about a given axis.",
      "刚体保持形状，但转动时不同点沿不同方向运动，因此刚体不能简化为一个质点；当绕轴转动可由质心运动很好描述时，才可把系统当作单个物体（例如地球自转相对于公转可忽略）。 · A rigid system holds its shape, but during rotation different points move in different directions, so it cannot be modeled as a point object; only when rotation about an axis is well described by the center-of-mass motion may the system be treated as a single object (for example, Earth's spin is negligible compared with its orbit).",
      "匀角加速（\\(\\alpha\\) 恒定）方程：\\(\\omega=\\omega_0+\\alpha t\\)，\\(\\theta=\\theta_0+\\omega_0t+\\dfrac{1}{2}\\alpha t^{2}\\)，\\(\\omega^{2}=\\omega_0^{2}+2\\alpha(\\theta-\\theta_0)\\)；它们与一维匀加速方程一一对应。 · For constant angular acceleration: \\(\\omega=\\omega_0+\\alpha t\\), \\(\\theta=\\theta_0+\\omega_0t+\\dfrac{1}{2}\\alpha t^{2}\\), and \\(\\omega^{2}=\\omega_0^{2}+2\\alpha(\\theta-\\theta_0)\\), exactly parallel to the one-dimensional constant-acceleration equations.",
      "图像关系：\\(\\theta\\)–\\(t\\) 图斜率是 \\(\\omega\\)；\\(\\omega\\)–\\(t\\) 图斜率是 \\(\\alpha\\)、曲线下面积是 \\(\\Delta\\theta\\)；\\(\\alpha\\)–\\(t\\) 图曲线下面积是 \\(\\Delta\\omega\\)。 · Graph relations: the slope of \\(\\theta\\)–\\(t\\) is \\(\\omega\\); the slope of \\(\\omega\\)–\\(t\\) is \\(\\alpha\\) and its area is \\(\\Delta\\theta\\); the area under \\(\\alpha\\)–\\(t\\) is \\(\\Delta\\omega\\).",
      "同一刚体所有点具有相同的 \\(\\omega\\) 和相同的 \\(\\alpha\\)：在相同时间内所有点转过相同的角度；但 \\(v=r\\omega\\)、\\(a_t=r\\alpha\\) 与到轴距离成正比，各点不同。 · Every point of a rigid system has the same \\(\\omega\\) and the same \\(\\alpha\\): all points rotate through the same angle in the same time. However, \\(v=r\\omega\\) and \\(a_t=r\\alpha\\) are proportional to the distance from the axis and therefore differ from point to point.",
      "转动中的加速度有两个分量：切向 \\(a_t=r\\alpha\\) 改变速率，径向（向心）\\(a_c=\\omega^{2}r=\\dfrac{v^{2}}{r}\\) 改变方向；总加速度大小为 \\(a=\\sqrt{a_t^{2}+a_c^{2}}\\)。 · Acceleration in rotation has two components: tangential \\(a_t=r\\alpha\\) changes speed and radial (centripetal) \\(a_c=\\omega^{2}r=\\dfrac{v^{2}}{r}\\) changes direction; the total acceleration has magnitude \\(a=\\sqrt{a_t^{2}+a_c^{2}}\\)."
    ],
    "definition": "转动运动学用角位移 \\(\\Delta\\theta\\)、角速度 \\(\\omega\\)、角加速度 \\(\\alpha\\) 描述刚体绕固定轴随时间的转动。角位移是刚体上一点绕指定轴扫过的角度，单位为弧度；角速度是角位置的变化率，角加速度是角速度的变化率。刚体保持形状，但转动时不同点运动方向不同，因此不能把刚体当作质点。同一刚体所有点的 \\(\\omega\\) 与 \\(\\alpha\\) 相同；线量 \\(s\\)、\\(v\\)、\\(a_t\\) 与半径成正比。 · Rotational kinematics describes a rigid system's rotation about a fixed axis over time using angular displacement \\(\\Delta\\theta\\), angular velocity \\(\\omega\\), and angular acceleration \\(\\alpha\\). Angular displacement is the angle in radians swept by a point about a specified axis; angular velocity is the rate of change of angular position, and angular acceleration is the rate of change of angular velocity. A rigid system holds its shape, but different points move in different directions during rotation, so it cannot be modeled as a point object. All points of the same rigid system share \\(\\omega\\) and \\(\\alpha\\), while the linear quantities \\(s\\), \\(v\\), and \\(a_t\\) are proportional to radius.",
    "intuition": "把转动想成“角度版的直线运动”：\\(\\theta\\) 对应 \\(x\\)、\\(\\omega\\) 对应 \\(v\\)、\\(\\alpha\\) 对应 \\(a\\)，方程形式完全平行。角位移只关心转过多大的角，不关心点走了多长的弧；同一刚体像一张转动的唱片，所有点同步转过同样的角度，但外圈点要走更长的弧、具有更大的线速度。 · Think of rotation as the “angle version” of straight-line motion: \\(\\theta\\) corresponds to \\(x\\), \\(\\omega\\) to \\(v\\), and \\(\\alpha\\) to \\(a\\), with exactly parallel equation forms. Angular displacement cares only about the angle turned, not the arc length traveled; a rigid system is like a spinning record—every point turns through the same angle, but points near the rim travel a longer arc and have a larger linear speed.",
    "formulas": [
      {
        "latex": "\\theta=\\dfrac{s}{r}",
        "note": "弧度定义；\\(s\\) 是半径 \\(r\\) 的圆弧上对应的弧长。 · Definition of the radian; \\(s\\) is the arc length on a circle of radius \\(r\\)."
      },
      {
        "latex": "\\omega_{\\mathrm{avg}}=\\dfrac{\\Delta\\theta}{\\Delta t},\\quad \\omega=\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}",
        "note": "平均与瞬时角速度。 · Average and instantaneous angular velocity."
      },
      {
        "latex": "\\alpha_{\\mathrm{avg}}=\\dfrac{\\Delta\\omega}{\\Delta t},\\quad \\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}",
        "note": "平均与瞬时角加速度。 · Average and instantaneous angular acceleration."
      },
      {
        "latex": "\\omega=\\omega_0+\\alpha t",
        "note": "匀角加速方程（\\(\\alpha\\) 恒定）。 · Constant-angular-acceleration equation (\\(\\alpha\\) constant)."
      },
      {
        "latex": "\\theta=\\theta_0+\\omega_0t+\\dfrac{1}{2}\\alpha t^{2}",
        "note": "角位置随时间的变化（\\(\\alpha\\) 恒定）。 · Angular position versus time (\\(\\alpha\\) constant)."
      },
      {
        "latex": "\\omega^{2}=\\omega_0^{2}+2\\alpha(\\theta-\\theta_0)",
        "note": "消去时间的角速度—角位移关系（\\(\\alpha\\) 恒定）。 · Time-independent relation between angular velocity and angular displacement (\\(\\alpha\\) constant)."
      },
      {
        "latex": "s=r\\theta,\\quad v=r\\omega,\\quad a_t=r\\alpha",
        "note": "角量与线量的关系；\\(r\\) 是该点到轴的距离，角量用弧度。 · Relations between angular and linear quantities; \\(r\\) is the distance from the point to the axis, and angular quantities are in radians."
      },
      {
        "latex": "a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r,\\quad a=\\sqrt{a_t^{2}+a_c^{2}}",
        "note": "向心加速度与总加速度大小；切向分量改变速率，径向分量改变方向。 · Centripetal acceleration and total acceleration magnitude; the tangential component changes speed and the radial component changes direction."
      }
    ],
    "derivationNotes": [
      {
        "from": "角位移与弧长 · Angular displacement and arc length",
        "to": "弧度关系 · Radian relation",
        "note": "弧度定义为弧长与半径之比，所以 \\(s=r\\theta\\)；角度制必须先换成弧度。 · The radian is defined as arc length divided by radius, so \\(s=r\\theta\\); degree measure must first be converted to radians."
      },
      {
        "from": "角速度定义 · Definition of angular velocity",
        "to": "线速度 · Linear speed",
        "note": "对 \\(s=r\\theta\\) 求导（\\(r\\) 固定）：\\(v=\\dfrac{\\mathrm{d}s}{\\mathrm{d}t}=r\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}=r\\omega\\)。 · Differentiate \\(s=r\\theta\\) with fixed \\(r\\): \\(v=\\dfrac{\\mathrm{d}s}{\\mathrm{d}t}=r\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}=r\\omega\\)."
      },
      {
        "from": "角加速度定义 · Definition of angular acceleration",
        "to": "切向加速度 · Tangential acceleration",
        "note": "\\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}=r\\alpha\\)。 · \\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}=r\\alpha\\)."
      },
      {
        "from": "匀角加速 · Constant angular acceleration",
        "to": "三个转动方程 · Three rotational equations",
        "note": "由 \\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\) 与 \\(\\omega=\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}\\) 积分，得到与一维匀加速完全平行的三式。 · Integrate \\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\) and \\(\\omega=\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}\\) to obtain three equations exactly parallel to the one-dimensional constant-acceleration set."
      },
      {
        "from": "速度方向改变 · Changing direction of velocity",
        "to": "向心加速度 · Centripetal acceleration",
        "note": "即使速率不变，圆周运动的速度方向也在改变，因此存在指向轴的 \\(a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r\\)；总加速度是两个垂直分量的矢量和。 · Even at constant speed, the direction of velocity in circular motion changes, so there is an acceleration \\(a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r\\) toward the axis; total acceleration is the vector sum of two perpendicular components."
      },
      {
        "from": "刚体约束 · Rigid-body constraint",
        "to": "公共角量与不同线量 · Shared angular but different linear quantities",
        "note": "刚体保持形状，任意两点间距离不变，所有点在相同 \\(\\Delta t\\) 内转过相同 \\(\\Delta\\theta\\)，故 \\(\\omega\\)、\\(\\alpha\\) 相同；\\(v=r\\omega\\) 随 \\(r\\) 变。 · A rigid system holds its shape, so the distance between any two points is fixed; all points turn through the same \\(\\Delta\\theta\\) in the same \\(\\Delta t\\), giving common \\(\\omega\\) and \\(\\alpha\\), while \\(v=r\\omega\\) varies with \\(r\\)."
      }
    ],
    "conditions": [
      "定轴转动；转轴固定或瞬时固定（如纯滚动的接触点）。 · Fixed-axis rotation; the axis is fixed or instantaneously fixed (as at the contact point in rolling without slipping).",
      "角量必须用弧度；角度制先乘 \\(\\dfrac{\\pi}{180}\\)。 · Angular quantities must be in radians; convert degrees by multiplying by \\(\\dfrac{\\pi}{180}\\).",
      "匀角加速方程仅适用于 \\(\\alpha\\) 恒定；\\(\\alpha\\) 变化时要用微积分或图像。 · The constant-angular-acceleration equations apply only when \\(\\alpha\\) is constant; if \\(\\alpha\\) varies, use calculus or graphs.",
      "同一刚体各点 \\(\\omega\\)、\\(\\alpha\\) 相同，但 \\(v\\)、\\(a_t\\)、\\(a_c\\) 随 \\(r\\) 改变。 · All points of one rigid system share \\(\\omega\\) and \\(\\alpha\\), but \\(v\\), \\(a_t\\), and \\(a_c\\) vary with \\(r\\).",
      "刚体不能当质点；只有当绕轴转动相对质心运动可忽略时，才可把系统当作单个物体。 · A rigid system cannot be treated as a point object; only when its rotation is negligible compared with the center-of-mass motion may it be treated as a single object.",
      "AP 边界：只考角量大小的矢量约定运算，不考角速度、角加速度矢量的方向；方向描述只用顺/逆时针。 · AP boundary: only magnitude manipulations with vector conventions are assessed, not the directions of angular-velocity or angular-acceleration vectors; direction descriptions use clockwise/counterclockwise only.",
      "转速 \\(n\\) 先换算：\\(n\\) 以 rev/s 计时 \\(\\omega=2\\pi n\\)；以 rpm 计时 \\(\\omega=\\dfrac{2\\pi n}{60}\\)。 · Convert rotational speed \\(n\\) first: \\(\\omega=2\\pi n\\) for \\(n\\) in rev/s, and \\(\\omega=\\dfrac{2\\pi n}{60}\\) for \\(n\\) in rpm.",
      "皮带、齿轮、纯滚动不打滑时，接触点线速度相同，\\(\\omega\\) 与半径成反比。 · For belts, gears, and rolling without slipping, contact points have equal linear speeds, so \\(\\omega\\) is inversely proportional to radius."
    ],
    "keyPoints": [
      "角位移是绕指定轴扫过的角度，不是弧长或线位移。 · Angular displacement is the angle swept about a specified axis, not arc length or linear displacement.",
      "弧度制是 \\(s=r\\theta\\)、\\(v=r\\omega\\)、\\(a_t=r\\alpha\\) 成立的前提。 · Radian measure is required for \\(s=r\\theta\\), \\(v=r\\omega\\), and \\(a_t=r\\alpha\\).",
      "\\(\\omega=\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}\\)，\\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\)。 · \\(\\omega=\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}\\) and \\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\).",
      "匀角加速三方程与一维匀加速一一对应，但只在 \\(\\alpha\\) 恒定时可用。 · The three constant-angular-acceleration equations parallel the one-dimensional set but require constant \\(\\alpha\\).",
      "图像：\\(\\theta\\)–\\(t\\) 斜率 \\(\\omega\\)；\\(\\omega\\)–\\(t\\) 斜率 \\(\\alpha\\)、面积 \\(\\Delta\\theta\\)；\\(\\alpha\\)–\\(t\\) 面积 \\(\\Delta\\omega\\)。 · Graphs: the slope of \\(\\theta\\)–\\(t\\) is \\(\\omega\\); the slope of \\(\\omega\\)–\\(t\\) is \\(\\alpha\\) and its area is \\(\\Delta\\theta\\); the area under \\(\\alpha\\)–\\(t\\) is \\(\\Delta\\omega\\).",
      "同一刚体所有点 \\(\\omega\\)、\\(\\alpha\\) 相同；\\(v\\)、\\(a_t\\) 与 \\(r\\) 成正比。 · All points of a rigid system share \\(\\omega\\) and \\(\\alpha\\); \\(v\\) and \\(a_t\\) are proportional to \\(r\\).",
      "加速度有切向与径向分量，总加速度是两者的矢量和。 · Acceleration has tangential and radial components, and total acceleration is their vector sum.",
      "刚体 ≠ 质点；转速先换算，传动问题抓住接触点线速度相同。 · A rigid system is not a point object; convert rotational speed first, and for drives use equal linear speed at contact points."
    ],
    "misconceptions": [
      "把角位移与弧长或线位移混淆。 · Confusing angular displacement with arc length or linear displacement.",
      "用角度制代入 \\(s=r\\theta\\)、\\(v=r\\omega\\) 或 \\(a_t=r\\alpha\\)。 · Substituting degree measure into \\(s=r\\theta\\), \\(v=r\\omega\\), or \\(a_t=r\\alpha\\).",
      "认为同一刚体上各点线速度相同。 · Assuming all points of one rigid system have the same linear speed.",
      "认为 \\(\\omega\\) 相同则 \\(a_c\\) 相同；\\(a_c=\\omega^{2}r\\) 随半径增大。 · Assuming equal \\(\\omega\\) implies equal \\(a_c\\); \\(a_c=\\omega^{2}r\\) grows with radius.",
      "把向心加速度与切向加速度混为一谈，或忘记总加速度是矢量和。 · Confusing centripetal with tangential acceleration, or forgetting that total acceleration is a vector sum.",
      "\\(\\alpha\\) 变化时仍用匀角加速方程。 · Using the constant-angular-acceleration equations when \\(\\alpha\\) varies.",
      "转速用 rpm 时未换算就直接当作 \\(\\omega\\)。 · Using an rpm value directly as \\(\\omega\\) without conversion.",
      "认为 AP 要考角速度或角加速度矢量的方向；实际只考大小与顺/逆时针。 · Thinking AP assesses the directions of angular-velocity or angular-acceleration vectors; it assesses magnitudes and clockwise/counterclockwise only.",
      "把刚体当作质点，忽略不同点运动方向不同。 · Treating a rigid system as a point object and ignoring that different points move in different directions."
    ],
    "examples": [
      {
        "title": "例 1 · 飞轮启动 · Example 1: Flywheel startup",
        "prompt": "飞轮从静止开始以 \\(3.0\\,\\mathrm{rad/s^{2}}\\) 匀角加速转动 \\(4.0\\,\\mathrm{s}\\)。求末角速度、转过的角度与圈数。 · A flywheel starts from rest and accelerates uniformly at \\(3.0\\,\\mathrm{rad/s^{2}}\\) for \\(4.0\\,\\mathrm{s}\\). Find the final angular velocity, angular displacement, and number of revolutions.",
        "steps": [
          "\\(\\omega=\\alpha t=3.0(4.0)=12\\,\\mathrm{rad/s}\\)。 · \\(\\omega=\\alpha t=3.0(4.0)=12\\,\\mathrm{rad/s}\\).",
          "\\(\\theta=\\dfrac{1}{2}\\alpha t^{2}=\\dfrac{1}{2}(3.0)(16)=24\\,\\mathrm{rad}\\)。 · \\(\\theta=\\dfrac{1}{2}\\alpha t^{2}=\\dfrac{1}{2}(3.0)(16)=24\\,\\mathrm{rad}\\).",
          "圈数 \\(N=\\dfrac{24}{2\\pi}=3.82\\)。 · Number of revolutions \\(N=\\dfrac{24}{2\\pi}=3.82\\)."
        ],
        "solution": "\\(\\omega=12\\,\\mathrm{rad/s}\\)，\\(\\theta=24\\,\\mathrm{rad}\\)，约 \\(3.8\\) 圈。 · \\(\\omega=12\\,\\mathrm{rad/s}\\), \\(\\theta=24\\,\\mathrm{rad}\\), about \\(3.8\\) revolutions.",
        "solutionLatex": "\\omega=12\\,\\mathrm{rad\\,s^{-1}},\\qquad \\theta=24\\,\\mathrm{rad},\\qquad N=3.82"
      },
      {
        "title": "例 2 · 砂轮制动 · Example 2: Grinding wheel braking",
        "prompt": "砂轮以 \\(60\\,\\mathrm{rad/s}\\) 转动，\\(10\\,\\mathrm{s}\\) 内匀减速停止。求角加速度与转过的角度。 · A grinding wheel rotates at \\(60\\,\\mathrm{rad/s}\\) and stops uniformly in \\(10\\,\\mathrm{s}\\). Find the angular acceleration and angular displacement.",
        "steps": [
          "\\(\\alpha=\\dfrac{0-60}{10}=-6.0\\,\\mathrm{rad/s^{2}}\\)。 · \\(\\alpha=\\dfrac{0-60}{10}=-6.0\\,\\mathrm{rad/s^{2}}\\).",
          "\\(\\theta=\\dfrac{\\omega_0+\\omega}{2}t=\\dfrac{60+0}{2}(10)=300\\,\\mathrm{rad}\\)。 · \\(\\theta=\\dfrac{\\omega_0+\\omega}{2}t=\\dfrac{60+0}{2}(10)=300\\,\\mathrm{rad}\\)."
        ],
        "solution": "\\(\\alpha=-6.0\\,\\mathrm{rad/s^{2}}\\)，\\(\\theta=300\\,\\mathrm{rad}\\)。 · \\(\\alpha=-6.0\\,\\mathrm{rad/s^{2}}\\) and \\(\\theta=300\\,\\mathrm{rad}\\).",
        "solutionLatex": "\\alpha=-6.0\\,\\mathrm{rad\\,s^{-2}},\\qquad \\theta=300\\,\\mathrm{rad}"
      },
      {
        "title": "例 3 · 皮带传动 · Example 3: Belt drive",
        "prompt": "半径 \\(0.10\\,\\mathrm{m}\\) 的轮以 \\(30\\,\\mathrm{rad/s}\\) 转动，通过皮带带动半径 \\(0.30\\,\\mathrm{m}\\) 的轮。求大轮角速度。 · A wheel of radius \\(0.10\\,\\mathrm{m}\\) turns at \\(30\\,\\mathrm{rad/s}\\) and drives a wheel of radius \\(0.30\\,\\mathrm{m}\\) through a belt. Find the angular velocity of the larger wheel.",
        "steps": [
          "皮带不打滑，两轮边缘线速度相同：\\(\\omega_1r_1=\\omega_2r_2\\)。 · The belt does not slip, so the rim linear speeds are equal: \\(\\omega_1r_1=\\omega_2r_2\\).",
          "\\(\\omega_2=\\dfrac{30(0.10)}{0.30}=10\\,\\mathrm{rad/s}\\)。 · \\(\\omega_2=\\dfrac{30(0.10)}{0.30}=10\\,\\mathrm{rad/s}\\)."
        ],
        "solution": "\\(\\omega_2=10\\,\\mathrm{rad/s}\\)。 · \\(\\omega_2=10\\,\\mathrm{rad/s}\\).",
        "solutionLatex": "\\omega_2=\\dfrac{\\omega_1r_1}{r_2}=10\\,\\mathrm{rad\\,s^{-1}}"
      },
      {
        "title": "例 4 · 同一刚体的角位移与线量 · Example 4: Angular displacement and linear quantities on one rigid body",
        "prompt": "半径 \\(0.50\\,\\mathrm{m}\\) 的圆盘绕中心轴在 \\(0.50\\,\\mathrm{s}\\) 内匀速转过 \\(2.0\\,\\mathrm{rad}\\)。比较盘缘（\\(r=0.50\\,\\mathrm{m}\\)）与 \\(r=0.20\\,\\mathrm{m}\\) 处的角位移、弧长、角速度与线速度。 · A disk of radius \\(0.50\\,\\mathrm{m}\\) turns uniformly through \\(2.0\\,\\mathrm{rad}\\) about its central axis in \\(0.50\\,\\mathrm{s}\\). Compare the angular displacement, arc length, angular velocity, and linear speed at the rim (\\(r=0.50\\,\\mathrm{m}\\)) and at \\(r=0.20\\,\\mathrm{m}\\).",
        "steps": [
          "角位移是绕轴扫过的角度：两点都是 \\(\\Delta\\theta=2.0\\,\\mathrm{rad}\\)。 · Angular displacement is the angle swept about the axis: both points have \\(\\Delta\\theta=2.0\\,\\mathrm{rad}\\).",
          "弧长 \\(s=r\\theta\\)：盘缘 \\(s=0.50(2.0)=1.0\\,\\mathrm{m}\\)；\\(r=0.20\\,\\mathrm{m}\\) 处 \\(s=0.40\\,\\mathrm{m}\\)。 · Arc length \\(s=r\\theta\\): at the rim \\(s=0.50(2.0)=1.0\\,\\mathrm{m}\\); at \\(r=0.20\\,\\mathrm{m}\\), \\(s=0.40\\,\\mathrm{m}\\).",
          "角速度 \\(\\omega=\\dfrac{\\Delta\\theta}{\\Delta t}=\\dfrac{2.0}{0.50}=4.0\\,\\mathrm{rad/s}\\)，两点相同。 · Angular velocity \\(\\omega=\\dfrac{\\Delta\\theta}{\\Delta t}=\\dfrac{2.0}{0.50}=4.0\\,\\mathrm{rad/s}\\), the same for both points.",
          "线速度 \\(v=r\\omega\\)：盘缘 \\(v=2.0\\,\\mathrm{m/s}\\)；\\(r=0.20\\,\\mathrm{m}\\) 处 \\(v=0.80\\,\\mathrm{m/s}\\)。 · Linear speed \\(v=r\\omega\\): at the rim \\(v=2.0\\,\\mathrm{m/s}\\); at \\(r=0.20\\,\\mathrm{m}\\), \\(v=0.80\\,\\mathrm{m/s}\\)."
        ],
        "solution": "同盘两点 \\(\\Delta\\theta=2.0\\,\\mathrm{rad}\\)、\\(\\omega=4.0\\,\\mathrm{rad/s}\\) 相同；弧长 \\(1.0\\,\\mathrm{m}\\) 与 \\(0.40\\,\\mathrm{m}\\)、线速度 \\(2.0\\,\\mathrm{m/s}\\) 与 \\(0.80\\,\\mathrm{m/s}\\) 不同。 · The two points share \\(\\Delta\\theta=2.0\\,\\mathrm{rad}\\) and \\(\\omega=4.0\\,\\mathrm{rad/s}\\), but their arc lengths (\\(1.0\\,\\mathrm{m}\\) vs \\(0.40\\,\\mathrm{m}\\)) and linear speeds (\\(2.0\\,\\mathrm{m/s}\\) vs \\(0.80\\,\\mathrm{m/s}\\)) differ.",
        "solutionLatex": "\\Delta\\theta=2.0\\,\\mathrm{rad},\\quad \\omega=4.0\\,\\mathrm{rad\\,s^{-1}},\\quad s_1=1.0\\,\\mathrm{m},\\;s_2=0.40\\,\\mathrm{m},\\quad v_1=2.0\\,\\mathrm{m\\,s^{-1}},\\;v_2=0.80\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 5 · 切向与径向加速度 · Example 5: Tangential and radial acceleration",
        "prompt": "半径 \\(0.30\\,\\mathrm{m}\\) 的圆盘在某时刻 \\(\\omega=2.0\\,\\mathrm{rad/s}\\)、\\(\\alpha=3.0\\,\\mathrm{rad/s^{2}}\\)。求盘缘点的切向加速度、向心加速度与总加速度大小。 · At one instant a disk of radius \\(0.30\\,\\mathrm{m}\\) has \\(\\omega=2.0\\,\\mathrm{rad/s}\\) and \\(\\alpha=3.0\\,\\mathrm{rad/s^{2}}\\). Find the tangential acceleration, centripetal acceleration, and total acceleration magnitude at the rim.",
        "steps": [
          "\\(a_t=r\\alpha=0.30(3.0)=0.90\\,\\mathrm{m/s^{2}}\\)。 · \\(a_t=r\\alpha=0.30(3.0)=0.90\\,\\mathrm{m/s^{2}}\\).",
          "\\(a_c=\\omega^{2}r=(2.0)^{2}(0.30)=1.2\\,\\mathrm{m/s^{2}}\\)。 · \\(a_c=\\omega^{2}r=(2.0)^{2}(0.30)=1.2\\,\\mathrm{m/s^{2}}\\).",
          "\\(a=\\sqrt{0.90^{2}+1.2^{2}}=1.5\\,\\mathrm{m/s^{2}}\\)。 · \\(a=\\sqrt{0.90^{2}+1.2^{2}}=1.5\\,\\mathrm{m/s^{2}}\\)."
        ],
        "solution": "\\(a_t=0.90\\,\\mathrm{m/s^{2}}\\)，\\(a_c=1.2\\,\\mathrm{m/s^{2}}\\)，\\(a\\approx1.5\\,\\mathrm{m/s^{2}}\\)。 · \\(a_t=0.90\\,\\mathrm{m/s^{2}}\\), \\(a_c=1.2\\,\\mathrm{m/s^{2}}\\), and \\(a\\approx1.5\\,\\mathrm{m/s^{2}}\\).",
        "solutionLatex": "a_t=r\\alpha=0.90\\,\\mathrm{m\\,s^{-2}},\\qquad a_c=\\omega^{2}r=1.2\\,\\mathrm{m\\,s^{-2}},\\qquad a=\\sqrt{a_t^{2}+a_c^{2}}=1.5\\,\\mathrm{m\\,s^{-2}}"
      },
      {
        "title": "例 6 · 图像读斜率与面积 · Example 6: Slopes and areas on rotational graphs",
        "prompt": "某飞轮的 \\(\\omega\\)–\\(t\\) 图从 \\(t=0\\) 的 \\(0\\) 线性增加到 \\(t=4.0\\,\\mathrm{s}\\) 的 \\(12\\,\\mathrm{rad/s}\\)，随后保持恒定到 \\(t=6.0\\,\\mathrm{s}\\)。求角加速度、前 \\(4.0\\,\\mathrm{s}\\) 与后 \\(2.0\\,\\mathrm{s}\\) 的角位移，以及总角位移。 · A flywheel's \\(\\omega\\)–\\(t\\) graph rises linearly from \\(0\\) at \\(t=0\\) to \\(12\\,\\mathrm{rad/s}\\) at \\(t=4.0\\,\\mathrm{s}\\), then stays constant until \\(t=6.0\\,\\mathrm{s}\\). Find the angular acceleration, the angular displacements in the first \\(4.0\\,\\mathrm{s}\\) and the next \\(2.0\\,\\mathrm{s}\\), and the total angular displacement.",
        "steps": [
          "前 \\(4.0\\,\\mathrm{s}\\) 的斜率：\\(\\alpha=\\dfrac{12-0}{4.0}=3.0\\,\\mathrm{rad/s^{2}}\\)。 · Slope during the first \\(4.0\\,\\mathrm{s}\\): \\(\\alpha=\\dfrac{12-0}{4.0}=3.0\\,\\mathrm{rad/s^{2}}\\).",
          "前 \\(4.0\\,\\mathrm{s}\\) 的面积：\\(\\Delta\\theta_1=\\dfrac{1}{2}(4.0)(12)=24\\,\\mathrm{rad}\\)。 · Area during the first \\(4.0\\,\\mathrm{s}\\): \\(\\Delta\\theta_1=\\dfrac{1}{2}(4.0)(12)=24\\,\\mathrm{rad}\\).",
          "后 \\(2.0\\,\\mathrm{s}\\) 的面积：\\(\\Delta\\theta_2=(2.0)(12)=24\\,\\mathrm{rad}\\)。 · Area during the next \\(2.0\\,\\mathrm{s}\\): \\(\\Delta\\theta_2=(2.0)(12)=24\\,\\mathrm{rad}\\).",
          "总角位移：\\(\\Delta\\theta=24+24=48\\,\\mathrm{rad}\\)。 · Total angular displacement: \\(\\Delta\\theta=24+24=48\\,\\mathrm{rad}\\)."
        ],
        "solution": "\\(\\alpha=3.0\\,\\mathrm{rad/s^{2}}\\)，两段各 \\(24\\,\\mathrm{rad}\\)，总 \\(48\\,\\mathrm{rad}\\)。 · \\(\\alpha=3.0\\,\\mathrm{rad/s^{2}}\\), \\(24\\,\\mathrm{rad}\\) in each interval, and \\(48\\,\\mathrm{rad}\\) total.",
        "solutionLatex": "\\alpha=3.0\\,\\mathrm{rad\\,s^{-2}},\\qquad \\Delta\\theta_1=24\\,\\mathrm{rad},\\qquad \\Delta\\theta_2=24\\,\\mathrm{rad},\\qquad \\Delta\\theta=48\\,\\mathrm{rad}"
      }
    ],
    "examTips": [
      "先判断 \\(\\alpha\\) 是否恒定，再选方程；不要盲目套用三式。 · Decide whether \\(\\alpha\\) is constant before choosing equations; do not apply the three-equation set blindly.",
      "角量统一用弧度，转速先换算。 · Use radians for all angular quantities and convert rotational speed first.",
      "同一刚体抓 \\(\\omega\\)、\\(\\alpha\\) 相同，线量按半径缩放。 · For one rigid system, use the shared \\(\\omega\\) and \\(\\alpha\\) and scale linear quantities by radius.",
      "图像题：\\(\\theta\\)–\\(t\\) 读斜率，\\(\\omega\\)–\\(t\\) 读斜率与面积，\\(\\alpha\\)–\\(t\\) 读面积。 · Graph questions: read the slope of \\(\\theta\\)–\\(t\\), the slope and area of \\(\\omega\\)–\\(t\\), and the area of \\(\\alpha\\)–\\(t\\).",
      "切向与径向分量分开算，再矢量合成。 · Compute tangential and radial components separately, then combine them as vectors.",
      "AP 方向只写顺/逆时针，不写角速度矢量方向。 · For AP, describe direction only as clockwise/counterclockwise, not as an angular-velocity vector direction.",
      "皮带、齿轮问题抓住“接触点线速度相同”。 · For belt and gear problems, use “equal linear speed at the contact point.”"
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u5",
        "code": "5.1",
        "title": "力矩与静力学 · Torque and Rotational Statics",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u5",
        "code": "5.3",
        "title": "转动动力学 · Rotational Dynamics and Energy",
        "relation": "后续 · downstream"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u1",
        "code": "1.1",
        "title": "一维运动学 · Kinematics in One Dimension",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.1",
        "title": "转动动能 · Rotational Kinetic Energy",
        "relation": "后续 · downstream"
      }
    ],
    "modules": [
      {
        "id": "rigid-rotation",
        "title": "刚体转动与转动惯量 · Rigid-body rotation and rotational inertia"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u5",
    "connections": [
      "先修：5.1 力矩与静力学建立转轴、力矩和刚体概念；1.1 一维运动学提供 \\(x\\)、\\(v\\)、\\(a\\) 的类比。 · Prerequisite: 5.1 torque and rotational statics establishes axis, torque, and rigid-system ideas; 1.1 one-dimensional kinematics provides the \\(x\\), \\(v\\), \\(a\\) analogy.",
      "后续：5.3 用 \\(\\tau_{\\mathrm{net}}=I\\alpha\\) 把角加速度与力矩联系起来；6.1 用 \\(\\omega\\) 计算转动动能。 · Downstream: 5.3 links angular acceleration to torque with \\(\\tau_{\\mathrm{net}}=I\\alpha\\), and 6.1 uses \\(\\omega\\) to compute rotational kinetic energy.",
      "数学：弧度、导数、积分与图像斜率/面积；角量方程是直线运动方程的角量版本。 · Mathematics: radians, derivatives, integrals, and graph slopes/areas; the angular equations are the angular version of straight-line motion.",
      "应用：车轮、飞轮、皮带与齿轮传动、离心机与纯滚动；同一刚体不同半径处的线量不同。 · Applications: wheels, flywheels, belt and gear drives, centrifuges, and rolling without slipping; linear quantities differ at different radii of one rigid system."
    ],
    "intuitionDetailed": "先抓住“谁在转、绕哪条轴转”。角位移是刚体上一点绕该轴扫过的角度，不是它走过的弧长；同样转过 \\(2\\pi\\)，半径大的点走的路更长。把所有点想成固定在同一张唱片上：它们在相同时间内转过相同角度，所以 \\(\\omega\\)、\\(\\alpha\\) 是整张唱片的属性；但线速度 \\(v=r\\omega\\) 是每个点自己的属性，越靠外越大。加速度也要分两种：切向分量 \\(r\\alpha\\) 让点转得越来越快或越来越慢，径向分量 \\(\\omega^{2}r\\) 只改变速度方向。图像题则把“斜率”和“面积”对应起来：\\(\\theta\\)–\\(t\\) 的斜率是 \\(\\omega\\)，\\(\\omega\\)–\\(t\\) 下的面积是 \\(\\Delta\\theta\\)。 · First identify what is rotating and about which axis. Angular displacement is the angle swept by a point about that axis, not the arc it travels; for the same \\(2\\pi\\) turn, a point at a larger radius travels farther. Picture all points fixed on one spinning record: they turn through the same angle in the same time, so \\(\\omega\\) and \\(\\alpha\\) belong to the whole record, while the linear speed \\(v=r\\omega\\) belongs to each point and grows outward. Acceleration also splits in two: the tangential part \\(r\\alpha\\) changes how fast the point turns, and the radial part \\(\\omega^{2}r\\) changes only the direction of velocity. For graphs, connect slopes and areas: the slope of \\(\\theta\\)–\\(t\\) is \\(\\omega\\), and the area under \\(\\omega\\)–\\(t\\) is \\(\\Delta\\theta\\).",
    "development": [
      "明确转轴与刚体，区分角位移与弧长。 · Identify the axis and rigid system, and distinguish angular displacement from arc length.",
      "用弧度定义 \\(s=r\\theta\\) 连接角量与线量。 · Use the radian definition \\(s=r\\theta\\) to connect angular and linear quantities.",
      "由 \\(\\theta(t)\\) 求导得 \\(\\omega\\)、\\(\\alpha\\)，或由图像读斜率。 · Differentiate \\(\\theta(t)\\) to obtain \\(\\omega\\) and \\(\\alpha\\), or read slopes from graphs.",
      "判断 \\(\\alpha\\) 是否恒定；恒定则用三方程，否则用积分或面积。 · Decide whether \\(\\alpha\\) is constant; if so use the three equations, otherwise integrate or use areas.",
      "对同一刚体把 \\(\\omega\\)、\\(\\alpha\\) 与各点的 \\(v\\)、\\(a_t\\)、\\(a_c\\) 分开处理。 · For one rigid system, treat the shared \\(\\omega\\), \\(\\alpha\\) separately from each point's \\(v\\), \\(a_t\\), and \\(a_c\\)."
    ],
    "checks": [
      "角位移与弧长有什么区别？为什么角位移用弧度？ · How do angular displacement and arc length differ, and why is angular displacement measured in radians?",
      "同一刚体上不同点的 \\(\\omega\\)、\\(\\alpha\\)、\\(v\\)、\\(a_t\\) 中，哪些相同、哪些不同？ · Which of \\(\\omega\\), \\(\\alpha\\), \\(v\\), and \\(a_t\\) are the same and which differ for points on one rigid system?",
      "从 \\(\\omega\\)–\\(t\\) 图如何读出 \\(\\alpha\\) 与 \\(\\Delta\\theta\\)？ · How do you read \\(\\alpha\\) and \\(\\Delta\\theta\\) from an \\(\\omega\\)–\\(t\\) graph?",
      "为什么匀速圆周运动仍有加速度？它的方向指向哪里？ · Why does uniform circular motion still have acceleration, and where does it point?",
      "AP 对转动运动学矢量的方向要求是什么？ · What does AP require about the directions of rotational-kinematics vectors?"
    ],
    "vocabulary": [
      {
        "termZh": "角位移",
        "termEn": "angular displacement",
        "defZh": "刚体上一点绕指定轴转过的角度，单位为弧度。",
        "defEn": "The angle through which a point on a rigid system rotates about a specified axis, measured in radians."
      },
      {
        "termZh": "弧度",
        "termEn": "radian",
        "defZh": "弧长与半径之比定义的角单位，一周为 \\(2\\pi\\) rad。",
        "defEn": "An angle unit defined as arc length divided by radius; one revolution is \\(2\\pi\\) rad."
      },
      {
        "termZh": "角速度",
        "termEn": "angular velocity",
        "defZh": "角位置对时间的变化率，\\(\\omega=\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}\\)。",
        "defEn": "The rate of change of angular position, \\(\\omega=\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}\\)."
      },
      {
        "termZh": "角加速度",
        "termEn": "angular acceleration",
        "defZh": "角速度对时间的变化率，\\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\)。",
        "defEn": "The rate of change of angular velocity, \\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\)."
      },
      {
        "termZh": "刚体",
        "termEn": "rigid system / rigid body",
        "defZh": "保持形状、各点间距离不变的系统；转动时不同点运动方向不同。",
        "defEn": "A system that holds its shape with fixed distances between points; during rotation different points move in different directions."
      },
      {
        "termZh": "切向加速度",
        "termEn": "tangential acceleration",
        "defZh": "沿速度方向的加速度分量，\\(a_t=r\\alpha\\)，改变速率。",
        "defEn": "The acceleration component along the velocity, \\(a_t=r\\alpha\\), which changes speed."
      },
      {
        "termZh": "向心加速度",
        "termEn": "centripetal acceleration",
        "defZh": "指向转轴的加速度分量，\\(a_c=\\omega^{2}r=\\dfrac{v^{2}}{r}\\)，改变速度方向。",
        "defEn": "The acceleration component toward the axis, \\(a_c=\\omega^{2}r=\\dfrac{v^{2}}{r}\\), which changes the direction of velocity."
      },
      {
        "termZh": "匀角加速",
        "termEn": "constant angular acceleration",
        "defZh": "\\(\\alpha\\) 恒定，可使用与一维匀加速平行的三个转动方程。",
        "defEn": "A state with constant \\(\\alpha\\) in which the three rotational equations parallel the one-dimensional constant-acceleration equations."
      }
    ]
  },
  "5.3": {
    "id": "mech/mech-u5/5.3",
    "subject": "mech",
    "chapterId": "mech-u5",
    "unitCode": "5",
    "unitTitleZh": "力矩与转动动力学",
    "unitTitleEn": "Torque and Rotational Dynamics",
    "code": "5.3",
    "titleZh": "转动动力学",
    "titleEn": "Rotational Dynamics and Energy",
    "layer": "ap",
    "summary": "力矩在角位移上做功 \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)；恒力矩时 \\(W=\\tau\\Delta\\theta\\)，\\(\\tau\\)–\\(\\theta\\) 图曲线与 \\(\\theta\\) 轴之间的有符号面积就是功，轴上方面积为正、下方为负。功率 \\(P=\\tau\\omega\\)，转动动能定理 \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\)。 · A torque does work over an angular displacement, \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\); for constant torque \\(W=\\tau\\Delta\\theta\\). The signed area between a \\(\\tau\\)–\\(\\theta\\) graph and the \\(\\theta\\) axis equals the work—positive above the axis and negative below. Power is \\(P=\\tau\\omega\\), and the rotational work–energy theorem is \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\).",
    "learningObjectives": [
      "用 \\(\\tau_{\\mathrm{net}}=I\\alpha\\) 分析定轴转动，并说明 \\(I\\) 与轴的位置有关。 · Use \\(\\tau_{\\mathrm{net}}=I\\alpha\\) for fixed-axis rotation and explain that \\(I\\) depends on the axis.",
      "计算转动惯量并使用平行轴定理。 · Calculate rotational inertia and use the parallel-axis theorem.",
      "用力矩做功 \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)（恒力矩 \\(W=\\tau\\Delta\\theta\\)）和 \\(\\tau\\)–\\(\\theta\\) 图的有符号面积求功。 · Find work from torque using \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\) (with \\(W=\\tau\\Delta\\theta\\) for constant torque) and from the signed area under a \\(\\tau\\)–\\(\\theta\\) graph.",
      "用转动动能定理与功率 \\(P=\\tau\\omega\\) 分析能量转化。 · Use the rotational work–energy theorem and power \\(P=\\tau\\omega\\) to analyze energy transfer.",
      "联立平动与转动方程处理滑轮、滚动等系统。 · Combine translational and rotational equations for pulleys, rolling, and similar systems."
    ],
    "essentialKnowledge": [
      "转动牛顿第二定律 \\(\\tau_{\\mathrm{net}}=I\\alpha\\)；\\(\\tau\\) 与 \\(I\\) 必须关于同一轴。 · Rotational Newton's second law \\(\\tau_{\\mathrm{net}}=I\\alpha\\); \\(\\tau\\) and \\(I\\) must refer to the same axis.",
      "转动惯量 \\(I=\\sum m_ir_i^{2}=\\int r^{2}\\,\\mathrm{d}m\\)，取决于质量、质量分布和轴的位置。 · Rotational inertia \\(I=\\sum m_ir_i^{2}=\\int r^{2}\\,\\mathrm{d}m\\) depends on the mass, its distribution, and the axis location.",
      "平行轴定理 \\(I=I_{\\mathrm{cm}}+Md^{2}\\)，其中 \\(d\\) 是两平行轴之间的垂直距离。 · Parallel-axis theorem \\(I=I_{\\mathrm{cm}}+Md^{2}\\), where \\(d\\) is the perpendicular distance between the parallel axes.",
      "常见转动惯量：细杆绕中心 \\(\\dfrac{1}{12}ML^{2}\\)、绕一端 \\(\\dfrac{1}{3}ML^{2}\\)；圆盘 \\(\\dfrac{1}{2}MR^{2}\\)；圆环 \\(MR^{2}\\)；实心球 \\(\\dfrac{2}{5}MR^{2}\\)。 · Common moments of inertia: rod about its center \\(\\dfrac{1}{12}ML^{2}\\) or about one end \\(\\dfrac{1}{3}ML^{2}\\); disk \\(\\dfrac{1}{2}MR^{2}\\); hoop \\(MR^{2}\\); solid sphere \\(\\dfrac{2}{5}MR^{2}\\).",
      "力矩做功 \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)；恒力矩时 \\(W=\\tau\\Delta\\theta\\)。力矩与角位移同向做正功，反向做负功。 · Work done by torque is \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\); for constant torque \\(W=\\tau\\Delta\\theta\\). Work is positive when torque and angular displacement are in the same rotational sense and negative when opposite.",
      "在 \\(\\tau\\)–\\(\\theta\\) 图上，曲线与 \\(\\theta\\) 轴之间的有符号面积等于该力矩做的功：\\(\\theta\\) 轴上方为正，下方为负，净功是各段面积的代数和。 · On a \\(\\tau\\)–\\(\\theta\\) graph, the signed area between the curve and the \\(\\theta\\) axis equals the work done by that torque: area above the axis is positive, below is negative, and the net work is the algebraic sum of the pieces.",
      "功率 \\(P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}=\\tau\\omega\\)；恒力矩时也写作 \\(P=\\tau\\omega\\)，变力矩时用该时刻的 \\(\\tau\\) 与 \\(\\omega\\)。 · Power is \\(P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}=\\tau\\omega\\); it also applies for constant torque, and for variable torque use the instantaneous \\(\\tau\\) and \\(\\omega\\).",
      "转动动能 \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)；定轴转动的动能定理 \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}-\\dfrac{1}{2}I\\omega_0^{2}\\)。 · Rotational kinetic energy is \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\); the fixed-axis work–energy theorem is \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}-\\dfrac{1}{2}I\\omega_0^{2}\\).",
      "有摩擦时摩擦力矩做负功，必须计入 \\(\\tau_{\\mathrm{net}}\\) 或能量方程；机械能不守恒。 · With friction, the friction torque does negative work and must be included in \\(\\tau_{\\mathrm{net}}\\) or the energy equation; mechanical energy is not conserved.",
      "滑轮与物块系统联立 \\(F=ma\\)、\\(\\tau=I\\alpha\\)、\\(a=R\\alpha\\)；能量法可绕开张力，但要同时计入平动和转动动能。 · For pulley–block systems, combine \\(F=ma\\), \\(\\tau=I\\alpha\\), and \\(a=R\\alpha\\); an energy approach avoids tension but must include both translational and rotational kinetic energy.",
      "纯滚动（无滑动）时 \\(v_{\\mathrm{cm}}=R\\omega\\)、\\(a_{\\mathrm{cm}}=R\\alpha\\)，接触点瞬时静止；总动能 \\(K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}\\)。 · For rolling without slipping, \\(v_{\\mathrm{cm}}=R\\omega\\) and \\(a_{\\mathrm{cm}}=R\\alpha\\), the contact point is instantaneously at rest, and total kinetic energy is \\(K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}\\)."
    ],
    "definition": "转动动力学把力矩与角加速度联系起来：\\(\\tau_{\\mathrm{net}}=I\\alpha\\)，其中转动惯量 \\(I=\\sum m_ir_i^{2}\\) 取决于质量分布和转轴位置，平行轴定理 \\(I=I_{\\mathrm{cm}}+Md^{2}\\)。力矩在角位移上做功 \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)；恒力矩时 \\(W=\\tau\\Delta\\theta\\)，而 \\(\\tau\\)–\\(\\theta\\) 图上曲线与 \\(\\theta\\) 轴之间的有符号面积等于该力矩做的功。功率为 \\(P=\\tau\\omega\\)，转动动能为 \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)，定轴转动的动能定理为 \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\)。 · Rotational dynamics connects torque to angular acceleration: \\(\\tau_{\\mathrm{net}}=I\\alpha\\), where the rotational inertia \\(I=\\sum m_ir_i^{2}\\) depends on the mass distribution and the axis, and the parallel-axis theorem gives \\(I=I_{\\mathrm{cm}}+Md^{2}\\). A torque does work over an angular displacement, \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\); for constant torque \\(W=\\tau\\Delta\\theta\\), and the signed area between a \\(\\tau\\)–\\(\\theta\\) graph and the \\(\\theta\\) axis equals the work done by that torque. Power is \\(P=\\tau\\omega\\), rotational kinetic energy is \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\), and the fixed-axis work–energy theorem is \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\).",
    "intuition": "转动惯量像“转动版质量”：质量越远离转轴，越难启动或停下；同样的力矩，\\(I\\) 越大角加速度越小。力矩做功像力做功的角量版本：\\(W=\\int\\tau\\,\\mathrm{d}\\theta\\) 对应 \\(W=\\int F\\,\\mathrm{d}x\\)，\\(\\tau\\)–\\(\\theta\\) 图面积对应 \\(F\\)–\\(x\\) 图面积；功率 \\(P=\\tau\\omega\\) 对应 \\(P=Fv\\)。正负号由力矩与角位移的转向关系决定。 · Rotational inertia is the “rotational mass”: mass farther from the axis is harder to start or stop, and for the same torque a larger \\(I\\) gives a smaller angular acceleration. Work by torque is the angular analog of work by force: \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\) corresponds to \\(W=\\int F\\,\\mathrm{d}x\\), and the area under a \\(\\tau\\)–\\(\\theta\\) graph corresponds to the area under an \\(F\\)–\\(x\\) graph; power \\(P=\\tau\\omega\\) corresponds to \\(P=Fv\\). The sign is set by whether the torque and angular displacement are in the same rotational sense.",
    "formulas": [
      {
        "latex": "\\tau_{\\mathrm{net}}=I\\alpha",
        "note": "转动牛顿第二定律；\\(\\tau\\) 与 \\(I\\) 必须关于同一轴。 · Rotational Newton's second law; \\(\\tau\\) and \\(I\\) must refer to the same axis."
      },
      {
        "latex": "I=\\sum m_ir_i^{2}",
        "note": "离散质量分布的转动惯量；连续体用 \\(I=\\int r^{2}\\,\\mathrm{d}m\\)。 · Rotational inertia for a discrete mass distribution; for a continuous body use \\(I=\\int r^{2}\\,\\mathrm{d}m\\)."
      },
      {
        "latex": "I=I_{\\mathrm{cm}}+Md^{2}",
        "note": "平行轴定理；\\(d\\) 是两平行轴的垂直距离。 · Parallel-axis theorem; \\(d\\) is the perpendicular distance between the parallel axes."
      },
      {
        "latex": "I_{\\mathrm{rod,center}}=\\dfrac{1}{12}ML^{2},\\quad I_{\\mathrm{rod,end}}=\\dfrac{1}{3}ML^{2}",
        "note": "细杆绕中心与绕一端的转动惯量。 · Moments of inertia of a thin rod about its center and about one end."
      },
      {
        "latex": "I_{\\mathrm{disk}}=\\dfrac{1}{2}MR^{2},\\quad I_{\\mathrm{hoop}}=MR^{2},\\quad I_{\\mathrm{sphere}}=\\dfrac{2}{5}MR^{2}",
        "note": "常见刚体的转动惯量。 · Moments of inertia of common rigid bodies."
      },
      {
        "latex": "W=\\int\\tau\\,\\mathrm{d}\\theta",
        "note": "变力矩做功；\\(\\tau\\)–\\(\\theta\\) 图的有符号面积等于功。 · Work by a variable torque; the signed area under the \\(\\tau\\)–\\(\\theta\\) graph equals the work."
      },
      {
        "latex": "W=\\tau\\Delta\\theta",
        "note": "恒力矩做功。 · Work by a constant torque."
      },
      {
        "latex": "P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}=\\tau\\omega",
        "note": "转动功率；变力矩时用瞬时 \\(\\tau\\) 与 \\(\\omega\\)。 · Rotational power; for variable torque use instantaneous \\(\\tau\\) and \\(\\omega\\)."
      },
      {
        "latex": "K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2},\\quad W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}",
        "note": "转动动能与定轴转动的动能定理。 · Rotational kinetic energy and the fixed-axis work–energy theorem."
      },
      {
        "latex": "v_{\\mathrm{cm}}=R\\omega,\\quad a_{\\mathrm{cm}}=R\\alpha",
        "note": "纯滚动（无滑动）条件；接触点瞬时静止。 · Rolling-without-slipping conditions; the contact point is instantaneously at rest."
      }
    ],
    "derivationNotes": [
      {
        "from": "力矩定义 + 牛顿第二定律 · Torque definition + Newton's second law",
        "to": "转动牛顿第二定律 · Rotational Newton's second law",
        "note": "\\(\\tau_{\\mathrm{net}}=I\\alpha\\) 与 \\(F_{\\mathrm{net}}=ma\\) 对应；\\(I\\) 是转动惯性的量度。 · \\(\\tau_{\\mathrm{net}}=I\\alpha\\) corresponds to \\(F_{\\mathrm{net}}=ma\\); \\(I\\) measures rotational inertia."
      },
      {
        "from": "质量分布 · Mass distribution",
        "to": "转动惯量与平行轴定理 · Rotational inertia and parallel-axis theorem",
        "note": "\\(I=\\sum m_ir_i^{2}\\)；把质心轴结果平移到距离 \\(d\\) 的平行轴，多出 \\(Md^{2}\\)。 · \\(I=\\sum m_ir_i^{2}\\); shifting a center-of-mass result to a parallel axis at distance \\(d\\) adds \\(Md^{2}\\)."
      },
      {
        "from": "力矩做功 · Work by torque",
        "to": "功的积分与图面积 · Work integral and graph area",
        "note": "\\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)；恒力矩时 \\(\\tau\\) 提出积分号得 \\(W=\\tau\\Delta\\theta\\)。\\(\\tau\\)–\\(\\theta\\) 图下面积就是该积分。 · \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\); for constant torque, \\(\\tau\\) factors out and \\(W=\\tau\\Delta\\theta\\). The area under the \\(\\tau\\)–\\(\\theta\\) graph is exactly this integral."
      },
      {
        "from": "功率定义 · Definition of power",
        "to": "转动功率 · Rotational power",
        "note": "\\(P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}=\\tau\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}=\\tau\\omega\\)。 · \\(P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}=\\tau\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t}=\\tau\\omega\\)."
      },
      {
        "from": "功–能定理 · Work–energy theorem",
        "to": "转动动能变化 · Change in rotational kinetic energy",
        "note": "对定轴刚体，\\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}-\\dfrac{1}{2}I\\omega_0^{2}\\)。 · For a fixed-axis rigid body, \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}-\\dfrac{1}{2}I\\omega_0^{2}\\)."
      },
      {
        "from": "纯滚动条件 · Rolling-without-slipping condition",
        "to": "平动与转动的联系 · Link between translation and rotation",
        "note": "接触点瞬时静止，所以 \\(v_{\\mathrm{cm}}=R\\omega\\)、\\(a_{\\mathrm{cm}}=R\\alpha\\)。 · The contact point is instantaneously at rest, so \\(v_{\\mathrm{cm}}=R\\omega\\) and \\(a_{\\mathrm{cm}}=R\\alpha\\)."
      }
    ],
    "conditions": [
      "定轴转动；\\(\\tau\\) 与 \\(I\\) 必须关于同一轴。 · Fixed-axis rotation; \\(\\tau\\) and \\(I\\) must refer to the same axis.",
      "刚体；定轴转动过程中 \\(I\\) 保持不变。 · Rigid system; \\(I\\) remains constant during fixed-axis rotation.",
      "恒力矩才可简化为 \\(W=\\tau\\Delta\\theta\\)；变力矩必须积分或读 \\(\\tau\\)–\\(\\theta\\) 图面积。 · Only constant torque simplifies to \\(W=\\tau\\Delta\\theta\\); variable torque requires integration or the area under the \\(\\tau\\)–\\(\\theta\\) graph.",
      "\\(\\tau\\)–\\(\\theta\\) 图的面积有符号：轴上为正、轴下为负，净功是代数和。 · The area on a \\(\\tau\\)–\\(\\theta\\) graph is signed: positive above the axis, negative below, and net work is the algebraic sum.",
      "\\(P=\\tau\\omega\\) 用瞬时值；恒力矩时也成立，但加速过程中 \\(\\omega\\) 在变。 · \\(P=\\tau\\omega\\) uses instantaneous values; it also holds for constant torque, but \\(\\omega\\) changes during acceleration.",
      "有摩擦时摩擦力矩做负功，必须计入 \\(\\tau_{\\mathrm{net}}\\) 或能量方程；机械能不守恒。 · With friction, the friction torque does negative work and must be included in \\(\\tau_{\\mathrm{net}}\\) or the energy equation; mechanical energy is not conserved.",
      "纯滚动要求无滑动，\\(v_{\\mathrm{cm}}=R\\omega\\)、\\(a_{\\mathrm{cm}}=R\\alpha\\)；有滑动时这些关系不成立。 · Rolling without slipping requires \\(v_{\\mathrm{cm}}=R\\omega\\) and \\(a_{\\mathrm{cm}}=R\\alpha\\); these fail when slipping occurs.",
      "平行轴定理中的 \\(d\\) 是两平行轴之间的垂直距离，不是到质心的距离沿任意方向的分量。 · In the parallel-axis theorem, \\(d\\) is the perpendicular distance between the parallel axes, not an arbitrary component of the distance to the center of mass."
    ],
    "keyPoints": [
      "\\(I\\) 取决于轴的位置，不是唯一值；质量越远离轴，\\(I\\) 越大。 · \\(I\\) depends on the axis and is not a single fixed value; mass farther from the axis gives a larger \\(I\\).",
      "\\(\\tau_{\\mathrm{net}}=I\\alpha\\) 与 \\(F_{\\mathrm{net}}=ma\\) 一一对应。 · \\(\\tau_{\\mathrm{net}}=I\\alpha\\) corresponds directly to \\(F_{\\mathrm{net}}=ma\\).",
      "平行轴定理：\\(I=I_{\\mathrm{cm}}+Md^{2}\\)。 · Parallel-axis theorem: \\(I=I_{\\mathrm{cm}}+Md^{2}\\).",
      "\\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)；恒力矩时 \\(W=\\tau\\Delta\\theta\\)。 · \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\); for constant torque \\(W=\\tau\\Delta\\theta\\).",
      "\\(\\tau\\)–\\(\\theta\\) 图面积就是功，注意正负面积。 · The area under a \\(\\tau\\)–\\(\\theta\\) graph is the work; track positive and negative areas.",
      "\\(P=\\tau\\omega\\)，用瞬时值。 · \\(P=\\tau\\omega\\), using instantaneous values.",
      "\\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)，\\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\)。 · \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\) and \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\).",
      "滑轮问题联立 \\(F=ma\\)、\\(\\tau=I\\alpha\\)、\\(a=R\\alpha\\)。 · For pulleys, combine \\(F=ma\\), \\(\\tau=I\\alpha\\), and \\(a=R\\alpha\\).",
      "纯滚动 \\(v_{\\mathrm{cm}}=R\\omega\\)，总动能含平动与转动两部分。 · For rolling without slipping, \\(v_{\\mathrm{cm}}=R\\omega\\) and total kinetic energy has both translational and rotational parts.",
      "摩擦做负功，能量法中不能忽略。 · Friction does negative work and cannot be ignored in energy analysis."
    ],
    "misconceptions": [
      "认为同一物体绕不同轴的 \\(I\\) 相同。 · Assuming the same object has the same \\(I\\) about different axes.",
      "把 \\(I\\) 当作质量本身。 · Treating \\(I\\) as the mass itself.",
      "在 \\(\\tau=I\\alpha\\) 中使用与 \\(\\tau\\) 不同轴的 \\(I\\)。 · Using an \\(I\\) about a different axis than the one for \\(\\tau\\) in \\(\\tau=I\\alpha\\).",
      "忘记平行轴定理中的 \\(Md^{2}\\) 项。 · Forgetting the \\(Md^{2}\\) term in the parallel-axis theorem.",
      "认为力矩做功与角位移无关；只有恒力矩才简化为 \\(\\tau\\Delta\\theta\\)。 · Thinking work by torque is independent of angular displacement; only constant torque simplifies to \\(\\tau\\Delta\\theta\\).",
      "把 \\(\\tau\\)–\\(\\theta\\) 图面积当成功率或角冲量，或忽略负面积。 · Mistaking the area under a \\(\\tau\\)–\\(\\theta\\) graph for power or angular impulse, or ignoring negative area.",
      "认为 \\(P=\\tau\\omega\\) 只适用于恒力矩；它对瞬时值也成立。 · Thinking \\(P=\\tau\\omega\\) applies only to constant torque; it holds for instantaneous values as well.",
      "有摩擦时漏掉摩擦力矩，或认为机械能守恒。 · Omitting the friction torque or assuming mechanical energy is conserved when friction is present.",
      "纯滚动时仍用 \\(v\\neq R\\omega\\)，或忘记总动能中的转动部分。 · Using \\(v\\neq R\\omega\\) for rolling without slipping, or omitting the rotational part of total kinetic energy."
    ],
    "examples": [
      {
        "title": "例 1 · 圆盘 · Example 1: Disk",
        "prompt": "质量 \\(2.0\\,\\mathrm{kg}\\)、半径 \\(0.30\\,\\mathrm{m}\\) 的均匀圆盘绕中心轴转动，受 \\(1.2\\,\\mathrm{N\\,m}\\) 的净力矩。求角加速度。 · A uniform disk of mass \\(2.0\\,\\mathrm{kg}\\) and radius \\(0.30\\,\\mathrm{m}\\) rotates about its central axis under a net torque of \\(1.2\\,\\mathrm{N\\,m}\\). Find the angular acceleration.",
        "steps": [
          "\\(I=\\dfrac{1}{2}MR^{2}=\\dfrac{1}{2}(2.0)(0.30)^{2}=0.090\\,\\mathrm{kg\\,m^{2}}\\)。 · \\(I=\\dfrac{1}{2}MR^{2}=\\dfrac{1}{2}(2.0)(0.30)^{2}=0.090\\,\\mathrm{kg\\,m^{2}}\\).",
          "\\(\\alpha=\\dfrac{\\tau}{I}=\\dfrac{1.2}{0.090}=13.3\\,\\mathrm{rad/s^{2}}\\)。 · \\(\\alpha=\\dfrac{\\tau}{I}=\\dfrac{1.2}{0.090}=13.3\\,\\mathrm{rad/s^{2}}\\)."
        ],
        "solution": "\\(\\alpha\\approx 13\\,\\mathrm{rad/s^{2}}\\)。 · \\(\\alpha\\approx 13\\,\\mathrm{rad/s^{2}}\\).",
        "solutionLatex": "\\alpha=\\dfrac{\\tau}{I}\\approx 13\\,\\mathrm{rad\\,s^{-2}}"
      },
      {
        "title": "例 2 · 滑轮与物块 · Example 2: Pulley and block",
        "prompt": "\\(0.20\\,\\mathrm{kg}\\) 的物块挂在绳上，绳绕在质量 \\(0.50\\,\\mathrm{kg}\\)、半径 \\(0.10\\,\\mathrm{m}\\) 的圆盘滑轮边缘。求物块加速度（忽略轴摩擦）。 · A \\(0.20\\,\\mathrm{kg}\\) block hangs from a string wound around a disk pulley of mass \\(0.50\\,\\mathrm{kg}\\) and radius \\(0.10\\,\\mathrm{m}\\). Find the block's acceleration (ignore axle friction).",
        "steps": [
          "物块：\\(mg-T=ma\\)；滑轮：\\(TR=I\\alpha\\)，\\(a=R\\alpha\\)。 · Block: \\(mg-T=ma\\); pulley: \\(TR=I\\alpha\\) with \\(a=R\\alpha\\).",
          "\\(I=\\dfrac{1}{2}(0.50)(0.10)^{2}=2.5\\times10^{-3}\\,\\mathrm{kg\\,m^{2}}\\)，\\(\\dfrac{I}{R^{2}}=0.25\\,\\mathrm{kg}\\)。 · \\(I=\\dfrac{1}{2}(0.50)(0.10)^{2}=2.5\\times10^{-3}\\,\\mathrm{kg\\,m^{2}}\\), so \\(\\dfrac{I}{R^{2}}=0.25\\,\\mathrm{kg}\\).",
          "\\(a=\\dfrac{mg}{m+\\dfrac{I}{R^{2}}}=\\dfrac{0.20(9.8)}{0.20+0.25}=4.36\\,\\mathrm{m/s^{2}}\\)。 · \\(a=\\dfrac{mg}{m+\\dfrac{I}{R^{2}}}=\\dfrac{0.20(9.8)}{0.20+0.25}=4.36\\,\\mathrm{m/s^{2}}\\)."
        ],
        "solution": "\\(a\\approx 4.4\\,\\mathrm{m/s^{2}}\\)，\\(T\\approx 1.1\\,\\mathrm{N}\\)。 · \\(a\\approx 4.4\\,\\mathrm{m/s^{2}}\\) and \\(T\\approx 1.1\\,\\mathrm{N}\\).",
        "solutionLatex": "a\\approx 4.4\\,\\mathrm{m\\,s^{-2}},\\qquad T\\approx 1.1\\,\\mathrm{N}"
      },
      {
        "title": "例 3 · 转动动能 · Example 3: Rotational kinetic energy",
        "prompt": "转动惯量 \\(0.050\\,\\mathrm{kg\\,m^{2}}\\) 的离心机以 \\(3000\\,\\mathrm{rpm}\\) 转动。求角速度与转动动能。 · A centrifuge with rotational inertia \\(0.050\\,\\mathrm{kg\\,m^{2}}\\) spins at \\(3000\\,\\mathrm{rpm}\\). Find its angular velocity and rotational kinetic energy.",
        "steps": [
          "\\(\\omega=2\\pi\\dfrac{3000}{60}=314\\,\\mathrm{rad/s}\\)。 · \\(\\omega=2\\pi\\dfrac{3000}{60}=314\\,\\mathrm{rad/s}\\).",
          "\\(K=\\dfrac{1}{2}I\\omega^{2}=\\dfrac{1}{2}(0.050)(314)^{2}=2.47\\times10^{3}\\,\\mathrm{J}\\)。 · \\(K=\\dfrac{1}{2}I\\omega^{2}=\\dfrac{1}{2}(0.050)(314)^{2}=2.47\\times10^{3}\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(K\\approx 2.5\\times10^{3}\\,\\mathrm{J}\\)。 · \\(K\\approx 2.5\\times10^{3}\\,\\mathrm{J}\\).",
        "solutionLatex": "K=\\dfrac{1}{2}I\\omega^{2}\\approx 2.5\\times10^{3}\\,\\mathrm{J}"
      },
      {
        "title": "例 4 · 力矩–角位置图面积 · Example 4: Area under a torque–angular-position graph",
        "prompt": "某飞轮的净力矩随角位置变化：\\(\\theta=0\\) 到 \\(2.0\\,\\mathrm{rad}\\) 由 \\(0\\) 线性增至 \\(4.0\\,\\mathrm{N\\,m}\\)，\\(2.0\\) 到 \\(5.0\\,\\mathrm{rad}\\) 保持 \\(4.0\\,\\mathrm{N\\,m}\\)，\\(5.0\\) 到 \\(7.0\\,\\mathrm{rad}\\) 线性减至 \\(0\\)。求总功；若 \\(I=2.0\\,\\mathrm{kg\\,m^{2}}\\) 且从静止开始，求末角速度。 · A flywheel's net torque varies with angular position: it rises linearly from \\(0\\) to \\(4.0\\,\\mathrm{N\\,m}\\) over \\(0\\) to \\(2.0\\,\\mathrm{rad}\\), stays at \\(4.0\\,\\mathrm{N\\,m}\\) from \\(2.0\\) to \\(5.0\\,\\mathrm{rad}\\), and falls linearly to \\(0\\) from \\(5.0\\) to \\(7.0\\,\\mathrm{rad}\\). Find the total work; if \\(I=2.0\\,\\mathrm{kg\\,m^{2}}\\) and the flywheel starts from rest, find the final angular velocity.",
        "steps": [
          "面积分三段：\\(\\dfrac{1}{2}(2.0)(4.0)=4.0\\,\\mathrm{J}\\)，\\((3.0)(4.0)=12\\,\\mathrm{J}\\)，\\(\\dfrac{1}{2}(2.0)(4.0)=4.0\\,\\mathrm{J}\\)。 · Three area pieces: \\(\\dfrac{1}{2}(2.0)(4.0)=4.0\\,\\mathrm{J}\\), \\((3.0)(4.0)=12\\,\\mathrm{J}\\), and \\(\\dfrac{1}{2}(2.0)(4.0)=4.0\\,\\mathrm{J}\\).",
          "总功 \\(W=4.0+12+4.0=20\\,\\mathrm{J}\\)。 · Total work \\(W=4.0+12+4.0=20\\,\\mathrm{J}\\).",
          "由 \\(W=\\dfrac{1}{2}I\\omega^{2}\\)：\\(20=\\dfrac{1}{2}(2.0)\\omega^{2}\\Rightarrow \\omega=4.5\\,\\mathrm{rad/s}\\)。 · From \\(W=\\dfrac{1}{2}I\\omega^{2}\\): \\(20=\\dfrac{1}{2}(2.0)\\omega^{2}\\Rightarrow \\omega=4.5\\,\\mathrm{rad/s}\\)."
        ],
        "solution": "\\(W=20\\,\\mathrm{J}\\)，\\(\\omega\\approx4.5\\,\\mathrm{rad/s}\\)。 · \\(W=20\\,\\mathrm{J}\\) and \\(\\omega\\approx4.5\\,\\mathrm{rad/s}\\).",
        "solutionLatex": "W=\\dfrac{1}{2}(2.0)(4.0)+(3.0)(4.0)+\\dfrac{1}{2}(2.0)(4.0)=20\\,\\mathrm{J},\\qquad \\omega=\\sqrt{\\dfrac{2W}{I}}=4.5\\,\\mathrm{rad\\,s^{-1}}"
      },
      {
        "title": "例 5 · 有符号面积与功率 · Example 5: Signed area and power",
        "prompt": "力矩在 \\(\\theta=0\\) 到 \\(2.0\\,\\mathrm{rad}\\) 为 \\(+6.0\\,\\mathrm{N\\,m}\\)，在 \\(2.0\\) 到 \\(4.0\\,\\mathrm{rad}\\) 为 \\(-3.0\\,\\mathrm{N\\,m}\\)。求净功；若 \\(I=1.5\\,\\mathrm{kg\\,m^{2}}\\) 且从静止开始，求末角速度。在正向力矩阶段某时刻 \\(\\omega=5.0\\,\\mathrm{rad/s}\\)，求该时刻功率。 · The torque is \\(+6.0\\,\\mathrm{N\\,m}\\) from \\(\\theta=0\\) to \\(2.0\\,\\mathrm{rad}\\) and \\(-3.0\\,\\mathrm{N\\,m}\\) from \\(2.0\\) to \\(4.0\\,\\mathrm{rad}\\). Find the net work; if \\(I=1.5\\,\\mathrm{kg\\,m^{2}}\\) and the system starts from rest, find the final angular velocity. At an instant during the positive-torque interval when \\(\\omega=5.0\\,\\mathrm{rad/s}\\), find the power.",
        "steps": [
          "正面积 \\((6.0)(2.0)=12\\,\\mathrm{J}\\)，负面积 \\((-3.0)(2.0)=-6.0\\,\\mathrm{J}\\)。 · Positive area \\((6.0)(2.0)=12\\,\\mathrm{J}\\); negative area \\((-3.0)(2.0)=-6.0\\,\\mathrm{J}\\).",
          "净功 \\(W=12-6.0=6.0\\,\\mathrm{J}\\)。 · Net work \\(W=12-6.0=6.0\\,\\mathrm{J}\\).",
          "由 \\(W=\\dfrac{1}{2}I\\omega^{2}\\)：\\(6.0=\\dfrac{1}{2}(1.5)\\omega^{2}\\Rightarrow \\omega=2.83\\,\\mathrm{rad/s}\\)。 · From \\(W=\\dfrac{1}{2}I\\omega^{2}\\): \\(6.0=\\dfrac{1}{2}(1.5)\\omega^{2}\\Rightarrow \\omega=2.83\\,\\mathrm{rad/s}\\).",
          "功率 \\(P=\\tau\\omega=(6.0)(5.0)=30\\,\\mathrm{W}\\)。 · Power \\(P=\\tau\\omega=(6.0)(5.0)=30\\,\\mathrm{W}\\)."
        ],
        "solution": "\\(W=6.0\\,\\mathrm{J}\\)，\\(\\omega\\approx2.8\\,\\mathrm{rad/s}\\)，\\(P=30\\,\\mathrm{W}\\)。 · \\(W=6.0\\,\\mathrm{J}\\), \\(\\omega\\approx2.8\\,\\mathrm{rad/s}\\), and \\(P=30\\,\\mathrm{W}\\).",
        "solutionLatex": "W=12-6.0=6.0\\,\\mathrm{J},\\qquad \\omega=\\sqrt{\\dfrac{2W}{I}}=2.83\\,\\mathrm{rad\\,s^{-1}},\\qquad P=\\tau\\omega=30\\,\\mathrm{W}"
      }
    ],
    "examTips": [
      "先定轴，再选对应 \\(I\\)；平行轴定理别忘了 \\(Md^{2}\\)。 · Fix the axis first, then choose the matching \\(I\\); do not forget \\(Md^{2}\\) in the parallel-axis theorem.",
      "力矩做功看 \\(\\tau\\)–\\(\\theta\\) 图面积，注意正负面积。 · For work by torque, use the area under the \\(\\tau\\)–\\(\\theta\\) graph and track positive and negative areas.",
      "恒力矩用 \\(W=\\tau\\Delta\\theta\\)；变力矩积分或读面积。 · Use \\(W=\\tau\\Delta\\theta\\) for constant torque; integrate or read areas for variable torque.",
      "\\(P=\\tau\\omega\\) 用瞬时值，不要用平均角速度代替。 · Use instantaneous values in \\(P=\\tau\\omega\\), not an average angular velocity.",
      "能量法要同时计入平动动能与转动动能，并检查摩擦做负功。 · In energy methods include both translational and rotational kinetic energy, and account for negative work by friction.",
      "滑轮联立 \\(a=R\\alpha\\)；纯滚动用 \\(v_{\\mathrm{cm}}=R\\omega\\)。 · For pulleys use \\(a=R\\alpha\\); for rolling without slipping use \\(v_{\\mathrm{cm}}=R\\omega\\)."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u5",
        "code": "5.1",
        "title": "力矩与静力学 · Torque and Rotational Statics",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u5",
        "code": "5.2",
        "title": "转动运动学 · Rotational Kinematics",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.1",
        "title": "转动动能 · Rotational Kinetic Energy",
        "relation": "后续 · downstream"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.1",
        "title": "动能定理 · Work–Energy Theorem",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "rigid-rotation",
        "title": "刚体转动与转动惯量 · Rigid-body rotation and rotational inertia"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u5",
    "connections": [
      "先修：5.1 力矩与 5.2 转动运动学；\\(\\tau=I\\alpha\\) 把两者合在一起。 · Prerequisite: 5.1 torque and 5.2 rotational kinematics; \\(\\tau=I\\alpha\\) combines them.",
      "后续：6.1 转动动能与角动量守恒；本主题的 \\(K_{\\mathrm{rot}}\\) 与功–能关系是基础。 · Downstream: 6.1 rotational kinetic energy and angular-momentum conservation; this topic's \\(K_{\\mathrm{rot}}\\) and work–energy relation are the foundation.",
      "类比：\\(W=\\int\\tau\\,\\mathrm{d}\\theta\\) 对应 \\(W=\\int F\\,\\mathrm{d}x\\)，\\(P=\\tau\\omega\\) 对应 \\(P=Fv\\)。 · Analogy: \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\) corresponds to \\(W=\\int F\\,\\mathrm{d}x\\), and \\(P=\\tau\\omega\\) to \\(P=Fv\\).",
      "应用：飞轮储能、滑轮、离心机、纯滚动与刹车；\\(\\tau\\)–\\(\\theta\\) 图面积可直接读出功。 · Applications: flywheel energy storage, pulleys, centrifuges, rolling without slipping, and braking; the area under a \\(\\tau\\)–\\(\\theta\\) graph directly gives the work."
    ],
    "intuitionDetailed": "先把转动问题翻译成“平动的角量版本”：质量换成 \\(I\\)，力换成 \\(\\tau\\)，位移换成 \\(\\theta\\)，速度换成 \\(\\omega\\)。这样 \\(F=ma\\) 变成 \\(\\tau=I\\alpha\\)，\\(W=\\int F\\,\\mathrm{d}x\\) 变成 \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)，\\(P=Fv\\) 变成 \\(P=\\tau\\omega\\)。\\(\\tau\\)–\\(\\theta\\) 图就是转动版的 \\(F\\)–\\(x\\) 图：曲线与横轴之间的面积是功，横轴上方为正、下方为负；如果题目给的是分段直线，就把面积分成三角形和矩形相加。若还要求角速度，就用 \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\) 把功和 \\(\\omega\\) 连起来。注意 \\(I\\) 必须与力矩关于同一轴，换轴时用平行轴定理。 · First translate a rotational problem into the “angular version” of translation: mass becomes \\(I\\), force becomes \\(\\tau\\), displacement becomes \\(\\theta\\), and velocity becomes \\(\\omega\\). Then \\(F=ma\\) becomes \\(\\tau=I\\alpha\\), \\(W=\\int F\\,\\mathrm{d}x\\) becomes \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\), and \\(P=Fv\\) becomes \\(P=\\tau\\omega\\). A \\(\\tau\\)–\\(\\theta\\) graph is the rotational version of an \\(F\\)–\\(x\\) graph: the area between the curve and the horizontal axis is the work, positive above the axis and negative below; for piecewise straight segments, add triangles and rectangles. If the angular velocity is also requested, connect work to \\(\\omega\\) with \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\). Remember that \\(I\\) must refer to the same axis as the torque; when changing axes, use the parallel-axis theorem.",
    "development": [
      "确定转轴与刚体，写出对应的 \\(I\\)（必要时用平行轴定理）。 · Identify the axis and rigid system, and write the corresponding \\(I\\) (using the parallel-axis theorem if needed).",
      "画受力/力矩图，写 \\(\\tau_{\\mathrm{net}}=I\\alpha\\) 或平衡条件。 · Draw the force/torque diagram and write \\(\\tau_{\\mathrm{net}}=I\\alpha\\) or the equilibrium condition.",
      "判断力矩是否恒定：恒定用 \\(W=\\tau\\Delta\\theta\\)，变化用积分或 \\(\\tau\\)–\\(\\theta\\) 图面积。 · Decide whether the torque is constant: use \\(W=\\tau\\Delta\\theta\\) if constant, otherwise integrate or use the \\(\\tau\\)–\\(\\theta\\) area.",
      "用 \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\) 联系功与角速度，或用 \\(P=\\tau\\omega\\) 求功率。 · Connect work to angular velocity with \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\), or find power with \\(P=\\tau\\omega\\).",
      "对滑轮/滚动系统加平动方程与约束 \\(a=R\\alpha\\) 或 \\(v=R\\omega\\)。 · For pulleys or rolling, add the translational equation and the constraint \\(a=R\\alpha\\) or \\(v=R\\omega\\).",
      "检查能量：摩擦做负功、转动与平动动能都要计入。 · Check the energy: friction does negative work, and both rotational and translational kinetic energy must be included."
    ],
    "checks": [
      "同一物体绕不同轴的 \\(I\\) 为什么不同？平行轴定理怎样修正？ · Why does the same object have different \\(I\\) about different axes, and how does the parallel-axis theorem correct it?",
      "\\(\\tau\\)–\\(\\theta\\) 图面积代表什么？轴下方的面积如何处理？ · What does the area under a \\(\\tau\\)–\\(\\theta\\) graph represent, and how is area below the axis handled?",
      "恒力矩与变力矩做功的公式有什么区别？ · How do the work formulas differ for constant and variable torque?",
      "为什么 \\(P=\\tau\\omega\\) 在加速过程中也要用瞬时 \\(\\omega\\)？ · Why must instantaneous \\(\\omega\\) be used in \\(P=\\tau\\omega\\) during acceleration?",
      "有摩擦的转动问题中，能量法和力矩法各要注意什么？ · In a rotational problem with friction, what must be handled in the energy method and in the torque method?"
    ],
    "vocabulary": [
      {
        "termZh": "转动惯量",
        "termEn": "rotational inertia",
        "defZh": "刚体绕轴转动惯性的量度，\\(I=\\sum m_ir_i^{2}\\)，取决于质量分布与轴的位置。",
        "defEn": "A measure of a rigid system's resistance to rotational change, \\(I=\\sum m_ir_i^{2}\\), depending on the mass distribution and axis."
      },
      {
        "termZh": "平行轴定理",
        "termEn": "parallel-axis theorem",
        "defZh": "\\(I=I_{\\mathrm{cm}}+Md^{2}\\)，把质心轴的转动惯量移到相距 \\(d\\) 的平行轴。",
        "defEn": "\\(I=I_{\\mathrm{cm}}+Md^{2}\\), which shifts a center-of-mass moment of inertia to a parallel axis a distance \\(d\\) away."
      },
      {
        "termZh": "转动动能",
        "termEn": "rotational kinetic energy",
        "defZh": "刚体绕轴转动的动能，\\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)。",
        "defEn": "The kinetic energy of a rigid system rotating about an axis, \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)."
      },
      {
        "termZh": "力矩做功",
        "termEn": "work done by torque",
        "defZh": "力矩在角位移上的累积，\\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)；恒力矩时 \\(W=\\tau\\Delta\\theta\\)。",
        "defEn": "The accumulation of torque over angular displacement, \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\); for constant torque \\(W=\\tau\\Delta\\theta\\)."
      },
      {
        "termZh": "力矩–角位置图",
        "termEn": "torque–angular position graph",
        "defZh": "以力矩为纵轴、角位置为横轴的图像；曲线与横轴间的有符号面积等于功。",
        "defEn": "A graph of torque versus angular position; the signed area between the curve and the horizontal axis equals the work."
      },
      {
        "termZh": "有符号面积",
        "termEn": "signed area",
        "defZh": "横轴上方取正、下方取负的面积；净功是各段面积的代数和。",
        "defEn": "Area taken as positive above the horizontal axis and negative below; net work is the algebraic sum of the pieces."
      },
      {
        "termZh": "转动功率",
        "termEn": "rotational power",
        "defZh": "力矩做功的速率，\\(P=\\tau\\omega\\)。",
        "defEn": "The rate at which torque does work, \\(P=\\tau\\omega\\)."
      },
      {
        "termZh": "转动动能定理",
        "termEn": "rotational work–energy theorem",
        "defZh": "定轴转动中合力矩做的净功等于转动动能变化，\\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\)。",
        "defEn": "For fixed-axis rotation, the net work done by the net torque equals the change in rotational kinetic energy, \\(W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}\\)."
      }
    ]
  }
};
