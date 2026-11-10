export const UNIT = {
  "id": "mech-u6",
  "code": "6",
  "titleZh": "转动系统的能量与动量",
  "titleEn": "Energy and Momentum of Rotating Systems",
  "subject": "mech",
  "layer": "ap"
};
export const TOPICS = {
  "6.1": {
    "id": "mech/mech-u6/6.1",
    "subject": "mech",
    "chapterId": "mech-u6",
    "unitCode": "6",
    "unitTitleZh": "转动系统的能量与动量",
    "unitTitleEn": "Energy and Momentum of Rotating Systems",
    "code": "6.1",
    "titleZh": "转动动能",
    "titleEn": "Rotational Kinetic Energy",
    "layer": "ap",
    "summary": "刚体的转动动能等于各质元平动动能之和，\\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)；即使质心静止，各质元仍以 \\(v_i=\\omega r_i\\) 运动，系统仍有动能；转动动能是标量。 · The rotational kinetic energy of a rigid system is the sum of the kinetic energies of its point elements, \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\). Even when the center of mass is at rest, each element moves with \\(v_i=\\omega r_i\\), so the system still has kinetic energy. Rotational kinetic energy is a scalar.",
    "learningObjectives": [
      "能写出定轴刚体的转动动能 \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)，并说明 \\(I\\) 与 \\(\\omega\\) 的物理意义。 · Write the rotational kinetic energy of a rigid body about a fixed axis, \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\), and explain the physical meaning of \\(I\\) and \\(\\omega\\).",
      "能用各质元的线速度 \\(v_i=\\omega r_i\\) 写出并求和各自的平动动能，解释为什么质心静止的刚体仍可有转动动能。 · Sum the linear kinetic energies of the point elements, using \\(v_i=\\omega r_i\\), to explain why a rigid system can have rotational kinetic energy while its center of mass is at rest.",
      "能对质点、离散质量分布和连续刚体计算 \\(I\\) 与 \\(K_{\\mathrm{rot}}\\)，并正确使用平行轴定理。 · Calculate \\(I\\) and \\(K_{\\mathrm{rot}}\\) for a point mass, a discrete mass distribution, and a continuous rigid body, and apply the parallel-axis theorem correctly.",
      "能说明转动动能是标量，可与平动动能代数相加：\\(K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}\\)。 · Explain that rotational kinetic energy is a scalar that adds algebraically to translational kinetic energy: \\(K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}\\).",
      "能比较相同 \\(M\\)、\\(R\\)、\\(\\omega\\) 下不同质量分布的转动动能，并用质量分布解释差异。 · Compare rotational kinetic energies for the same \\(M\\), \\(R\\), and \\(\\omega\\) with different mass distributions, and explain the difference in terms of mass distribution."
    ],
    "essentialKnowledge": [
      "定轴转动刚体的转动动能 \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)，其中 \\(I\\) 是绕该轴的转动惯量，\\(\\omega\\) 是角速度（\\(\\mathrm{rad\\,s^{-1}}\\)）。 · For a rigid body rotating about a fixed axis, \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\), where \\(I\\) is the rotational inertia about that axis and \\(\\omega\\) is the angular speed in \\(\\mathrm{rad\\,s^{-1}}\\).",
      "对半径为 \\(r\\) 的质点，\\(I=mr^{2}\\)、\\(v=\\omega r\\)，于是 \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}=\\dfrac{1}{2}mv^{2}\\)：定轴转动动能与该速率下的平动动能等价。 · For a point mass at radius \\(r\\), \\(I=mr^{2}\\) and \\(v=\\omega r\\), so \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}=\\dfrac{1}{2}mv^{2}\\): the rotational kinetic energy about the fixed axis equals the translational kinetic energy at that speed.",
      "刚体由大量质元组成。质心静止时，质元仍在绕轴做圆周运动，速率 \\(v_i=\\omega r_i\\)；把所有质元的平动动能相加：\\(K=\\sum_i\\dfrac{1}{2}m_iv_i^{2}=\\dfrac{1}{2}\\left(\\sum_i m_ir_i^{2}\\right)\\omega^{2}=\\dfrac{1}{2}I\\omega^{2}\\)。 · A rigid body consists of many point elements. Even when the center of mass is at rest, each element still moves in a circle about the axis with speed \\(v_i=\\omega r_i\\). Summing their translational kinetic energies gives \\(K=\\sum_i\\dfrac{1}{2}m_iv_i^{2}=\\dfrac{1}{2}\\left(\\sum_i m_ir_i^{2}\\right)\\omega^{2}=\\dfrac{1}{2}I\\omega^{2}\\).",
      "因此，质心静止只说明系统没有整体平动动能，不说明系统没有动能：定轴转动的实心球、离心机转子和车轮都可以在质心（或转轴上的点）不动时具有 \\(K_{\\mathrm{rot}}>0\\)。 · Thus, a center of mass at rest means only that the system has no bulk translational kinetic energy; it does not mean the system has no kinetic energy. A fixed-axis solid sphere, a centrifuge rotor, and a wheel can all have \\(K_{\\mathrm{rot}}>0\\) while the center of mass (or the point on the axis) is at rest.",
      "\\(I\\) 与转轴的位置有关；同一物体绕不同轴的 \\(I\\) 不同，因此 \\(K_{\\mathrm{rot}}\\) 也随所选轴改变。平行轴定理 \\(I=I_{\\mathrm{cm}}+Md^{2}\\) 把质心轴的 \\(I\\) 移到相距 \\(d\\) 的平行轴。 · \\(I\\) depends on the location of the axis. The same body has different values of \\(I\\) about different axes, so \\(K_{\\mathrm{rot}}\\) also depends on the chosen axis. The parallel-axis theorem \\(I=I_{\\mathrm{cm}}+Md^{2}\\) shifts \\(I\\) from the center-of-mass axis to a parallel axis a distance \\(d\\) away.",
      "一般运动刚体的总动能等于质心平动动能与绕质心转动动能之和：\\(K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}\\)。定轴转动且轴过质心时 \\(v_{\\mathrm{cm}}=0\\)，只剩转动项。 · The total kinetic energy of a rigid body in general motion is the sum of its center-of-mass translational kinetic energy and its rotational kinetic energy about the center of mass: \\(K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}\\). For rotation about a fixed axis through the center of mass, \\(v_{\\mathrm{cm}}=0\\), leaving only the rotational term.",
      "转动动能是标量，恒为非负；多个刚体的转动动能直接代数相加，没有方向抵消。这与角动量（矢量）不同。 · Rotational kinetic energy is a scalar and is never negative; the rotational kinetic energies of several bodies add algebraically, with no directional cancellation. This differs from angular momentum, which is a vector.",
      "单位检查：\\(I\\) 用 \\(\\mathrm{kg\\,m^{2}}\\)，\\(\\omega\\) 用 \\(\\mathrm{rad\\,s^{-1}}\\)，\\(K_{\\mathrm{rot}}\\) 用 \\(\\mathrm{J}\\)；\\(\\omega\\) 必须用弧度制。 · Unit check: \\(I\\) in \\(\\mathrm{kg\\,m^{2}}\\), \\(\\omega\\) in \\(\\mathrm{rad\\,s^{-1}}\\), and \\(K_{\\mathrm{rot}}\\) in \\(\\mathrm{J}\\); \\(\\omega\\) must be in radians per second."
    ],
    "definition": "转动动能是刚体绕轴转动时具有的动能，等于刚体各质元平动动能之和：\\(K_{\\mathrm{rot}}=\\sum_i\\dfrac{1}{2}m_iv_i^{2}=\\dfrac{1}{2}I\\omega^{2}\\)，其中 \\(I=\\sum_i m_ir_i^{2}\\) 是绕该轴的转动惯量，\\(v_i=\\omega r_i\\)。即使质心静止，只要各质元绕轴运动，系统仍有转动动能。转动动能是标量，单位为焦耳。 · Rotational kinetic energy is the kinetic energy a rigid body has because it rotates about an axis. It equals the sum of the translational kinetic energies of its point elements: \\(K_{\\mathrm{rot}}=\\sum_i\\dfrac{1}{2}m_iv_i^{2}=\\dfrac{1}{2}I\\omega^{2}\\), where \\(I=\\sum_i m_ir_i^{2}\\) is the rotational inertia about that axis and \\(v_i=\\omega r_i\\). Even if the center of mass is at rest, the system has rotational kinetic energy as long as its elements move about the axis. Rotational kinetic energy is a scalar measured in joules.",
    "intuition": "把刚体想成“被钉子固定住的一群小碎块”：整体没有平动，但每个碎块都在绕钉子转，都有 \\(v_i=\\omega r_i\\)，所以都有 \\(\\dfrac{1}{2}m_iv_i^{2}\\)。 · Think of a rigid body as a cluster of small pieces pinned in place: the whole does not translate, but every piece circles the pin with \\(v_i=\\omega r_i\\), so every piece carries \\(\\dfrac{1}{2}m_iv_i^{2}\\).",
    "formulas": [
      {
        "latex": "K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}",
        "note": "定轴转动刚体的转动动能。 · Rotational kinetic energy of a rigid body about a fixed axis."
      },
      {
        "latex": "K=\\sum_i\\dfrac{1}{2}m_iv_i^{2}",
        "note": "把刚体看成质元集合时的总动能。 · Total kinetic energy when the rigid body is treated as a collection of point elements."
      },
      {
        "latex": "v_i=\\omega r_i",
        "note": "定轴转动时第 \\(i\\) 个质元的线速度。 · Linear speed of the \\(i\\)th element in fixed-axis rotation."
      },
      {
        "latex": "I=\\sum_i m_ir_i^{2}=\\int r^{2}\\,\\mathrm{d}m",
        "note": "离散与连续质量分布的转动惯量。 · Rotational inertia for discrete and continuous mass distributions."
      },
      {
        "latex": "I=I_{\\mathrm{cm}}+Md^{2}",
        "note": "平行轴定理；两轴平行且其中一轴过质心。 · Parallel-axis theorem; the axes are parallel and one passes through the center of mass."
      },
      {
        "latex": "K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}",
        "note": "一般运动刚体的总动能。 · Total kinetic energy of a rigid body in general motion."
      }
    ],
    "derivationNotes": [
      {
        "from": "刚体模型：质元集合",
        "to": "每个质元的线速度",
        "note": "刚体各质元相对位置固定，绕同一轴转动时角速度相同，故 \\(v_i=\\omega r_i\\)，方向沿各自圆周的切线。 · Because the distances between elements of a rigid body are fixed, all elements share the same angular speed about the axis, so \\(v_i=\\omega r_i\\), directed tangent to each circle."
      },
      {
        "from": "质元平动动能",
        "to": "总动能求和",
        "note": "即：\\(K=\\sum_i\\dfrac{1}{2}m_iv_i^{2}=\\sum_i\\dfrac{1}{2}m_i(\\omega r_i)^{2}=\\dfrac{1}{2}\\left(\\sum_i m_ir_i^{2}\\right)\\omega^{2}\\)。 · \\(K=\\sum_i\\dfrac{1}{2}m_iv_i^{2}=\\sum_i\\dfrac{1}{2}m_i(\\omega r_i)^{2}=\\dfrac{1}{2}\\left(\\sum_i m_ir_i^{2}\\right)\\omega^{2}\\)."
      },
      {
        "from": "转动惯量定义",
        "to": "转动动能公式",
        "note": "识别括号内为 \\(I=\\sum_i m_ir_i^{2}\\)，即得 \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)。 · Recognize the bracket as \\(I=\\sum_i m_ir_i^{2}\\) to obtain \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)."
      },
      {
        "from": "质心静止条件",
        "to": "仍有转动动能",
        "note": "质心静止使 \\(\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}=0\\)，但 \\(v_i=\\omega r_i\\neq0\\)，因此 \\(K_{\\mathrm{rot}}>0\\)。 · A center of mass at rest makes \\(\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}=0\\), but \\(v_i=\\omega r_i\\neq0\\), so \\(K_{\\mathrm{rot}}>0\\)."
      },
      {
        "from": "定轴转动",
        "to": "一般运动",
        "note": "把运动分解为质心平动与绕质心转动，总动能 \\(K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}\\)。 · Decompose the motion into center-of-mass translation and rotation about the center of mass to get \\(K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}\\)."
      }
    ],
    "conditions": [
      "刚体绕固定轴转动；轴上各点（包括质心）可以静止。 · The rigid body rotates about a fixed axis; points on the axis, including the center of mass, may be at rest.",
      "\\(I\\) 必须关于所讨论的同一转轴；换轴必须重新计算或使用平行轴定理。 · \\(I\\) must be taken about the same axis under discussion; changing the axis requires recomputing \\(I\\) or using the parallel-axis theorem.",
      "\\(\\omega\\) 必须用 \\(\\mathrm{rad\\,s^{-1}}\\)，不能用角度制。 · \\(\\omega\\) must be in \\(\\mathrm{rad\\,s^{-1}}\\), not degrees per unit time.",
      "平行轴定理要求两轴平行，且其中一轴过质心。 · The parallel-axis theorem requires parallel axes with one passing through the center of mass.",
      "转动动能是标量且非负，不分配给某个方向；可与其他动能项直接相加。 · Rotational kinetic energy is a nonnegative scalar with no direction; it adds directly to other kinetic-energy terms.",
      "若转轴本身加速或刚体同时平动，应把总动能分解为质心平动项与绕质心转动项。 · If the axis itself accelerates or the body also translates, decompose the total kinetic energy into a center-of-mass translational term and a rotation-about-the-center-of-mass term."
    ],
    "keyPoints": [
      "\\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)，\\(I\\) 与 \\(\\omega\\) 都相对于同一转轴。 · \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\), with both \\(I\\) and \\(\\omega\\) referred to the same axis.",
      "刚体的转动动能就是所有质元 \\(\\dfrac{1}{2}m_iv_i^{2}\\) 的和。 · The rotational kinetic energy of a rigid body is the sum of \\(\\dfrac{1}{2}m_iv_i^{2}\\) over all its elements.",
      "质心静止不代表动能为零：各质元仍有线速度 \\(v_i=\\omega r_i\\)。 · A center of mass at rest does not imply zero kinetic energy: each element still has linear speed \\(v_i=\\omega r_i\\).",
      "转动动能是标量，可直接相加，没有方向抵消。 · Rotational kinetic energy is a scalar; it adds directly and has no directional cancellation.",
      "\\(I\\) 依赖转轴位置；平行轴定理中 \\(Md^{2}\\) 总是增加 \\(I\\)。 · \\(I\\) depends on the axis location; in the parallel-axis theorem, \\(Md^{2}\\) always increases \\(I\\).",
      "一般运动总动能 = 质心平动动能 + 绕质心转动动能。 · For general motion, total kinetic energy = center-of-mass translational kinetic energy + rotational kinetic energy about the center of mass.",
      "同样 \\(M\\)、\\(R\\)、\\(\\omega\\) 时，质量越靠外，\\(I\\) 与 \\(K_{\\mathrm{rot}}\\) 越大。 · For the same \\(M\\), \\(R\\), and \\(\\omega\\), the farther the mass is from the axis, the larger \\(I\\) and \\(K_{\\mathrm{rot}}\\)."
    ],
    "misconceptions": [
      "认为质心静止的刚体没有动能。纠正：质元仍在绕轴运动，\\(K_{\\mathrm{rot}}=\\sum\\dfrac{1}{2}m_iv_i^{2}>0\\)。 · Thinking a rigid body with its center of mass at rest has no kinetic energy. Correction: its elements still move about the axis, so \\(K_{\\mathrm{rot}}=\\sum\\dfrac{1}{2}m_iv_i^{2}>0\\).",
      "把转动动能写成 \\(\\dfrac{1}{2}mv^{2}\\) 并代入质心速度。纠正：应使用 \\(\\dfrac{1}{2}I\\omega^{2}\\)，或对每个质元求和。 · Writing rotational kinetic energy as \\(\\dfrac{1}{2}mv^{2}\\) and substituting the center-of-mass speed. Correction: use \\(\\dfrac{1}{2}I\\omega^{2}\\), or sum over the point elements.",
      "认为 \\(I\\) 与转轴无关。纠正：同一物体绕不同轴的 \\(I\\) 不同，\\(K_{\\mathrm{rot}}\\) 也不同。 · Thinking \\(I\\) is independent of the axis. Correction: the same body has different \\(I\\) about different axes, so \\(K_{\\mathrm{rot}}\\) changes too.",
      "在平行轴定理中漏掉 \\(Md^{2}\\)，或在两轴不平行时使用该定理。 · Omitting \\(Md^{2}\\) in the parallel-axis theorem, or using it when the axes are not parallel.",
      "把 \\(\\omega\\) 用角度制（如 rpm 直接代入）计算。纠正：先换成 \\(\\mathrm{rad\\,s^{-1}}\\)。 · Substituting \\(\\omega\\) in degree-based units such as rpm. Correction: first convert to \\(\\mathrm{rad\\,s^{-1}}\\).",
      "把转动动能当作矢量，给 \\(K_{\\mathrm{rot}}\\) 附加方向或做矢量分解。 · Treating rotational kinetic energy as a vector and assigning it a direction or resolving it into components.",
      "纯滚动时只算平动动能或只算转动动能。纠正：总动能是两项之和。 · Counting only translational or only rotational kinetic energy for rolling without slipping. Correction: the total is the sum of both terms.",
      "认为角速度加倍时转动动能也加倍。纠正：\\(K_{\\mathrm{rot}}\\propto\\omega^{2}\\)，应变为四倍。 · Thinking doubling the angular speed doubles the rotational kinetic energy. Correction: \\(K_{\\mathrm{rot}}\\propto\\omega^{2}\\), so it becomes four times larger."
    ],
    "examples": [
      {
        "title": "例 1 · 定轴实心球：质心静止仍有动能 · Example 1: Fixed-axis sphere with the center of mass at rest",
        "prompt": "质量 \\(2.0\\,\\mathrm{kg}\\)、半径 \\(0.10\\,\\mathrm{m}\\) 的均匀实心球绕通过球心的固定轴以 \\(20\\,\\mathrm{rad\\,s^{-1}}\\) 转动。求转动动能；并用质元速度说明质心静止但动能不为零。 · A uniform solid sphere of mass \\(2.0\\,\\mathrm{kg}\\) and radius \\(0.10\\,\\mathrm{m}\\) rotates about a fixed axis through its center at \\(20\\,\\mathrm{rad\\,s^{-1}}\\). Find its rotational kinetic energy, and use element speeds to explain why the kinetic energy is nonzero although the center of mass is at rest.",
        "steps": [
          "实心球绕直径：\\(I=\\dfrac{2}{5}MR^{2}=\\dfrac{2}{5}(2.0)(0.10)^{2}=8.0\\times10^{-3}\\,\\mathrm{kg\\,m^{2}}\\)。 · For a solid sphere about a diameter, \\(I=\\dfrac{2}{5}MR^{2}=\\dfrac{2}{5}(2.0)(0.10)^{2}=8.0\\times10^{-3}\\,\\mathrm{kg\\,m^{2}}\\).",
          "即：\\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}=\\dfrac{1}{2}(8.0\\times10^{-3})(20)^{2}=1.6\\,\\mathrm{J}\\)。 · \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}=\\dfrac{1}{2}(8.0\\times10^{-3})(20)^{2}=1.6\\,\\mathrm{J}\\).",
          "边缘质元 \\(r=R\\) 的速率 \\(v=\\omega R=2.0\\,\\mathrm{m\\,s^{-1}}\\)；对均匀球，\\(r^{2}\\) 的质量加权平均为 \\(\\dfrac{2}{5}R^{2}\\)，所以 \\(\\sum\\dfrac{1}{2}m_iv_i^{2}=\\dfrac{1}{2}M\\omega^{2}\\left(\\dfrac{2}{5}R^{2}\\right)=1.6\\,\\mathrm{J}\\)，与 \\(\\dfrac{1}{2}I\\omega^{2}\\) 一致。 · An element at the rim has speed \\(v=\\omega R=2.0\\,\\mathrm{m\\,s^{-1}}\\); for a uniform sphere the mass-weighted average of \\(r^{2}\\) is \\(\\dfrac{2}{5}R^{2}\\), so \\(\\sum\\dfrac{1}{2}m_iv_i^{2}=\\dfrac{1}{2}M\\omega^{2}\\left(\\dfrac{2}{5}R^{2}\\right)=1.6\\,\\mathrm{J}\\), matching \\(\\dfrac{1}{2}I\\omega^{2}\\)."
        ],
        "solution": "\\(K_{\\mathrm{rot}}=1.6\\,\\mathrm{J}\\)。质心不动，但各质元以 \\(v_i=\\omega r_i\\) 运动，因此系统仍有动能。 · \\(K_{\\mathrm{rot}}=1.6\\,\\mathrm{J}\\). The center of mass is at rest, but each element moves with \\(v_i=\\omega r_i\\), so the system still has kinetic energy.",
        "solutionLatex": "K_{\\mathrm{rot}}=1.6\\,\\mathrm{J}"
      },
      {
        "title": "例 2 · 离心机转子 · Example 2: Centrifuge rotor",
        "prompt": "离心机转子可视为质量 \\(1.2\\,\\mathrm{kg}\\)、半径 \\(0.15\\,\\mathrm{m}\\) 的均匀圆盘，以 \\(3000\\,\\mathrm{rpm}\\) 转动。求角速度、转动惯量与转动动能。 · A centrifuge rotor is modeled as a uniform disk of mass \\(1.2\\,\\mathrm{kg}\\) and radius \\(0.15\\,\\mathrm{m}\\), spinning at \\(3000\\,\\mathrm{rpm}\\). Find its angular speed, rotational inertia, and rotational kinetic energy.",
        "steps": [
          "即：\\(\\omega=2\\pi\\dfrac{3000}{60}=314\\,\\mathrm{rad\\,s^{-1}}\\)。 · \\(\\omega=2\\pi\\dfrac{3000}{60}=314\\,\\mathrm{rad\\,s^{-1}}\\).",
          "即：\\(I=\\dfrac{1}{2}MR^{2}=\\dfrac{1}{2}(1.2)(0.15)^{2}=1.35\\times10^{-2}\\,\\mathrm{kg\\,m^{2}}\\)。 · \\(I=\\dfrac{1}{2}MR^{2}=\\dfrac{1}{2}(1.2)(0.15)^{2}=1.35\\times10^{-2}\\,\\mathrm{kg\\,m^{2}}\\).",
          "即：\\(K_{\\mathrm{rot}}=\\dfrac{1}{2}(1.35\\times10^{-2})(314)^{2}\\approx6.7\\times10^{2}\\,\\mathrm{J}\\)。 · \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}(1.35\\times10^{-2})(314)^{2}\\approx6.7\\times10^{2}\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(\\omega\\approx3.1\\times10^{2}\\,\\mathrm{rad\\,s^{-1}}\\)，\\(K_{\\mathrm{rot}}\\approx6.7\\times10^{2}\\,\\mathrm{J}\\)。转子中心不动，但管壁处样品速度很大。 · \\(\\omega\\approx3.1\\times10^{2}\\,\\mathrm{rad\\,s^{-1}}\\), \\(K_{\\mathrm{rot}}\\approx6.7\\times10^{2}\\,\\mathrm{J}\\). The hub is at rest, but samples near the rim move very fast.",
        "solutionLatex": "\\omega\\approx3.1\\times10^{2}\\,\\mathrm{rad\\,s^{-1}},\\;K_{\\mathrm{rot}}\\approx6.7\\times10^{2}\\,\\mathrm{J}"
      },
      {
        "title": "例 3 · 两个质元的系统 · Example 3: System of two point masses",
        "prompt": "一根质量可忽略的杆长 \\(0.60\\,\\mathrm{m}\\)，两端各固定质量 \\(0.50\\,\\mathrm{kg}\\) 的小球，绕杆中点以 \\(4.0\\,\\mathrm{rad\\,s^{-1}}\\) 转动。求系统转动惯量与转动动能；若把两球移到距中点 \\(0.15\\,\\mathrm{m}\\) 处而角速度仍为 \\(4.0\\,\\mathrm{rad\\,s^{-1}}\\)，动能变为多少？ · A massless rod \\(0.60\\,\\mathrm{m}\\) long carries a \\(0.50\\,\\mathrm{kg}\\) ball at each end and rotates about its midpoint at \\(4.0\\,\\mathrm{rad\\,s^{-1}}\\). Find the system’s rotational inertia and kinetic energy. If both balls are moved to \\(0.15\\,\\mathrm{m}\\) from the midpoint while the angular speed stays \\(4.0\\,\\mathrm{rad\\,s^{-1}}\\), what is the new kinetic energy?",
        "steps": [
          "即：\\(I=\\sum m_ir_i^{2}=2(0.50)(0.30)^{2}=0.090\\,\\mathrm{kg\\,m^{2}}\\)。 · \\(I=\\sum m_ir_i^{2}=2(0.50)(0.30)^{2}=0.090\\,\\mathrm{kg\\,m^{2}}\\).",
          "即：\\(K_{\\mathrm{rot}}=\\dfrac{1}{2}(0.090)(4.0)^{2}=0.72\\,\\mathrm{J}\\)。 · \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}(0.090)(4.0)^{2}=0.72\\,\\mathrm{J}\\).",
          "移动后 \\(I_{f}=2(0.50)(0.15)^{2}=0.0225\\,\\mathrm{kg\\,m^{2}}\\)，\\(K_{f}=\\dfrac{1}{2}(0.0225)(4.0)^{2}=0.18\\,\\mathrm{J}\\)。 · After moving, \\(I_{f}=2(0.50)(0.15)^{2}=0.0225\\,\\mathrm{kg\\,m^{2}}\\) and \\(K_{f}=\\dfrac{1}{2}(0.0225)(4.0)^{2}=0.18\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(I=0.090\\,\\mathrm{kg\\,m^{2}}\\)，\\(K_{\\mathrm{rot}}=0.72\\,\\mathrm{J}\\)；移动后 \\(K_{f}=0.18\\,\\mathrm{J}\\)。注意：若系统孤立、角动量守恒，角速度会随 \\(I\\) 减小而增大，不能保持 \\(4.0\\,\\mathrm{rad\\,s^{-1}}\\)。 · \\(I=0.090\\,\\mathrm{kg\\,m^{2}}\\), \\(K_{\\mathrm{rot}}=0.72\\,\\mathrm{J}\\); after moving, \\(K_{f}=0.18\\,\\mathrm{J}\\). Note: if the system is isolated and angular momentum is conserved, the angular speed would increase as \\(I\\) decreases rather than staying at \\(4.0\\,\\mathrm{rad\\,s^{-1}}\\).",
        "solutionLatex": "I=0.090\\,\\mathrm{kg\\,m^{2}},\\;K_{\\mathrm{rot}}=0.72\\,\\mathrm{J}"
      },
      {
        "title": "例 4 · 平行轴定理 · Example 4: Parallel-axis theorem",
        "prompt": "质量 \\(1.0\\,\\mathrm{kg}\\)、长 \\(1.0\\,\\mathrm{m}\\) 的细杆，求绕中心轴与绕一端轴的转动惯量。 · For a thin rod of mass \\(1.0\\,\\mathrm{kg}\\) and length \\(1.0\\,\\mathrm{m}\\), find the rotational inertia about its center and about one end.",
        "steps": [
          "绕中心：\\(I_{\\mathrm{cm}}=\\dfrac{1}{12}ML^{2}=\\dfrac{1}{12}(1.0)(1.0)^{2}=0.083\\,\\mathrm{kg\\,m^{2}}\\)。 · About the center: \\(I_{\\mathrm{cm}}=\\dfrac{1}{12}ML^{2}=\\dfrac{1}{12}(1.0)(1.0)^{2}=0.083\\,\\mathrm{kg\\,m^{2}}\\).",
          "绕一端：\\(I=I_{\\mathrm{cm}}+M\\left(\\dfrac{L}{2}\\right)^{2}=0.083+1.0(0.25)=0.333\\,\\mathrm{kg\\,m^{2}}\\)。 · About one end: \\(I=I_{\\mathrm{cm}}+M\\left(\\dfrac{L}{2}\\right)^{2}=0.083+1.0(0.25)=0.333\\,\\mathrm{kg\\,m^{2}}\\).",
          "若两者都以 \\(6.0\\,\\mathrm{rad\\,s^{-1}}\\) 转动，则 \\(K_{\\mathrm{center}}=1.5\\,\\mathrm{J}\\)，\\(K_{\\mathrm{end}}=6.0\\,\\mathrm{J}\\)。 · If both rotate at \\(6.0\\,\\mathrm{rad\\,s^{-1}}\\), then \\(K_{\\mathrm{center}}=1.5\\,\\mathrm{J}\\) and \\(K_{\\mathrm{end}}=6.0\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(I_{\\mathrm{center}}\\approx0.083\\,\\mathrm{kg\\,m^{2}}\\)，\\(I_{\\mathrm{end}}\\approx0.333\\,\\mathrm{kg\\,m^{2}}\\)。同一物体换轴后转动惯量与转动动能都改变。 · \\(I_{\\mathrm{center}}\\approx0.083\\,\\mathrm{kg\\,m^{2}}\\), \\(I_{\\mathrm{end}}\\approx0.333\\,\\mathrm{kg\\,m^{2}}\\). Changing the axis changes both the rotational inertia and the rotational kinetic energy.",
        "solutionLatex": "I_{\\mathrm{center}}\\approx0.083\\,\\mathrm{kg\\,m^{2}},\\;I_{\\mathrm{end}}\\approx0.333\\,\\mathrm{kg\\,m^{2}}"
      },
      {
        "title": "例 5 · 圆环与圆盘 · Example 5: Ring versus disk",
        "prompt": "质量均为 \\(2.0\\,\\mathrm{kg}\\)、半径均为 \\(0.20\\,\\mathrm{m}\\) 的薄圆环与均匀圆盘，都以 \\(10\\,\\mathrm{rad\\,s^{-1}}\\) 绕中心轴转动。比较两者的转动动能。 · A thin ring and a uniform disk, each of mass \\(2.0\\,\\mathrm{kg}\\) and radius \\(0.20\\,\\mathrm{m}\\), both rotate about their central axes at \\(10\\,\\mathrm{rad\\,s^{-1}}\\). Compare their rotational kinetic energies.",
        "steps": [
          "圆环 \\(I_{\\mathrm{ring}}=MR^{2}=(2.0)(0.20)^{2}=0.080\\,\\mathrm{kg\\,m^{2}}\\)。 · Ring: \\(I_{\\mathrm{ring}}=MR^{2}=(2.0)(0.20)^{2}=0.080\\,\\mathrm{kg\\,m^{2}}\\).",
          "圆盘 \\(I_{\\mathrm{disk}}=\\dfrac{1}{2}MR^{2}=0.040\\,\\mathrm{kg\\,m^{2}}\\)。 · Disk: \\(I_{\\mathrm{disk}}=\\dfrac{1}{2}MR^{2}=0.040\\,\\mathrm{kg\\,m^{2}}\\).",
          "即：\\(K_{\\mathrm{ring}}=\\dfrac{1}{2}(0.080)(10)^{2}=4.0\\,\\mathrm{J}\\)，\\(K_{\\mathrm{disk}}=2.0\\,\\mathrm{J}\\)。 · \\(K_{\\mathrm{ring}}=\\dfrac{1}{2}(0.080)(10)^{2}=4.0\\,\\mathrm{J}\\) and \\(K_{\\mathrm{disk}}=2.0\\,\\mathrm{J}\\)."
        ],
        "solution": "圆环的转动动能是圆盘的两倍；圆环质量集中在边缘，\\(I\\) 更大。 · The ring has twice the disk’s rotational kinetic energy because its mass is concentrated at the rim, giving a larger \\(I\\).",
        "solutionLatex": "K_{\\mathrm{ring}}=4.0\\,\\mathrm{J},\\;K_{\\mathrm{disk}}=2.0\\,\\mathrm{J}"
      },
      {
        "title": "例 6 · 纯滚动总动能 · Example 6: Total kinetic energy in rolling without slipping",
        "prompt": "实心球从高 \\(1.0\\,\\mathrm{m}\\) 的斜面由静止纯滚动到底端。求质心速率（\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)）。 · A solid sphere starts from rest and rolls without slipping down a \\(1.0\\,\\mathrm{m}\\) high incline. Find its center-of-mass speed (\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)).",
        "steps": [
          "能量：\\(mgh=\\dfrac{1}{2}mv^{2}+\\dfrac{1}{2}I\\omega^{2}\\)，\\(\\omega=\\dfrac{v}{R}\\)。 · Energy: \\(mgh=\\dfrac{1}{2}mv^{2}+\\dfrac{1}{2}I\\omega^{2}\\) with \\(\\omega=\\dfrac{v}{R}\\).",
          "即：\\(I=\\dfrac{2}{5}mR^{2}\\Rightarrow mgh=\\dfrac{1}{2}mv^{2}+\\dfrac{1}{5}mv^{2}=\\dfrac{7}{10}mv^{2}\\)。 · \\(I=\\dfrac{2}{5}mR^{2}\\Rightarrow mgh=\\dfrac{1}{2}mv^{2}+\\dfrac{1}{5}mv^{2}=\\dfrac{7}{10}mv^{2}\\).",
          "即：\\(v=\\sqrt{\\dfrac{10gh}{7}}=\\sqrt{\\dfrac{10(9.8)(1.0)}{7}}\\approx3.7\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v=\\sqrt{\\dfrac{10gh}{7}}=\\sqrt{\\dfrac{10(9.8)(1.0)}{7}}\\approx3.7\\,\\mathrm{m\\,s^{-1}}\\)."
        ],
        "solution": "\\(v\\approx3.7\\,\\mathrm{m\\,s^{-1}}\\)。总动能由平动项与转动项共同组成，不能只算其中一项。 · \\(v\\approx3.7\\,\\mathrm{m\\,s^{-1}}\\). The total kinetic energy contains both translational and rotational terms; neither alone is sufficient.",
        "solutionLatex": "v\\approx3.7\\,\\mathrm{m\\,s^{-1}}"
      }
    ],
    "examTips": [
      "CED Unit 6：转动动能；先定轴，再写 \\(I\\)，最后代 \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)。 · CED Unit 6: rotational kinetic energy. Choose the axis first, then write \\(I\\), then substitute into \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\).",
      "题目说“质心静止”时不要立刻判 \\(K=0\\)：检查各质元是否绕轴运动。 · When a problem says the center of mass is at rest, do not immediately conclude \\(K=0\\); check whether the elements move about an axis.",
      "涉及换轴时用平行轴定理，别漏 \\(Md^{2}\\)；只有两轴平行且一轴过质心时才可用。 · Use the parallel-axis theorem when changing axes, and do not omit \\(Md^{2}\\); it applies only when the axes are parallel and one passes through the center of mass.",
      "纯滚动先用 \\(v_{\\mathrm{cm}}=R\\omega\\) 把两个动能项合并，再比较不同形状的滚动快慢。 · For rolling without slipping, first combine the two kinetic-energy terms using \\(v_{\\mathrm{cm}}=R\\omega\\), then compare how different shapes roll.",
      "答案检查：\\(K_{\\mathrm{rot}}\\) 应随 \\(\\omega^{2}\\) 变化，并具有 \\(\\mathrm{kg\\,m^{2}\\,s^{-2}}=\\mathrm{J}\\) 的单位。 · Check the answer: \\(K_{\\mathrm{rot}}\\) should scale with \\(\\omega^{2}\\) and carry units \\(\\mathrm{kg\\,m^{2}\\,s^{-2}}=\\mathrm{J}\\)."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u5",
        "code": "5.3",
        "title": "转动动力学 · Rotational Dynamics and Energy",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.2",
        "title": "角动量 · Angular Momentum",
        "relation": "相关 · Related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.3",
        "title": "滚动 · Rolling",
        "relation": "后续 · Follow-up"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.1",
        "title": "动能定理 · Work–Energy Theorem",
        "relation": "相关 · Related"
      }
    ],
    "modules": [
      {
        "id": "rigid-rotation",
        "title": "刚体转动与转动惯量 · Rigid Rotation and Rotational Inertia"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u6",
    "connections": [
      "先修：5.3 的 \\(I\\)、平行轴定理与转动定律是计算 \\(K_{\\mathrm{rot}}\\) 的工具。 · Prerequisite: the rotational inertia, parallel-axis theorem, and rotational dynamics of 5.3 supply the tools for computing \\(K_{\\mathrm{rot}}\\).",
      "相关：6.2 角动量守恒时 \\(I\\omega\\) 不变，但转动动能可以改变；两者必须分开判断。 · Related: when angular momentum is conserved in 6.2, \\(I\\omega\\) stays constant but rotational kinetic energy can change; the two quantities must be judged separately.",
      "后续：6.3 滚动的总动能就是质心平动动能与绕质心转动动能之和。 · Follow-up: the total kinetic energy of rolling in 6.3 is the sum of center-of-mass translational kinetic energy and rotational kinetic energy about the center of mass.",
      "跨单元：3.1 的动能定理 \\(W_{\\mathrm{net}}=\\Delta K\\) 可用于转动情形，\\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)。 · Cross-unit: the work–energy theorem \\(W_{\\mathrm{net}}=\\Delta K\\) of 3.1 applies to rotation through \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\)."
    ],
    "intuitionDetailed": "质心静止 ≠ 系统静止。旋转的实心球，球心不动，但表面点以 \\(v=\\omega R\\) 运动；离心机转子中心不动，但管壁上的样品以高速运动。把每个质元的 \\(\\dfrac{1}{2}m_iv_i^{2}\\) 加起来，\\(\\omega^{2}\\) 是公因子，剩下的 \\(\\sum m_ir_i^{2}\\) 正是 \\(I\\)，于是得到 \\(\\dfrac{1}{2}I\\omega^{2}\\)。这也解释了为什么同样质量与半径，圆环（质量都在边缘）的转动动能是圆盘的两倍：圆环 \\(I=MR^{2}\\)，圆盘 \\(I=\\dfrac{1}{2}MR^{2}\\)。 · A center of mass at rest does not mean the system is at rest. For a spinning solid sphere the center stays fixed, yet surface points move at \\(v=\\omega R\\); for a centrifuge rotor the hub stays fixed, yet samples at the rim move at high speed. Adding \\(\\dfrac{1}{2}m_iv_i^{2}\\) for all elements, the common factor \\(\\omega^{2}\\) can be pulled out, and the remaining \\(\\sum m_ir_i^{2}\\) is exactly \\(I\\), giving \\(\\dfrac{1}{2}I\\omega^{2}\\). This also explains why, for the same mass and radius, a ring (mass concentrated at the rim) has twice the rotational kinetic energy of a disk: \\(I_{\\mathrm{ring}}=MR^{2}\\) while \\(I_{\\mathrm{disk}}=\\dfrac{1}{2}MR^{2}\\).",
    "development": [
      "先修检查：转动惯量 \\(I=\\sum m_ir_i^{2}\\)、角速度与线速度关系 \\(v=\\omega r\\)。 · Prerequisite check: rotational inertia \\(I=\\sum m_ir_i^{2}\\) and the relation between angular and linear speed, \\(v=\\omega r\\).",
      "逐质元求动能：写出每个质元的 \\(\\dfrac{1}{2}m_iv_i^{2}\\)，并代入 \\(v_i=\\omega r_i\\)。 · Element-by-element kinetic energy: write \\(\\dfrac{1}{2}m_iv_i^{2}\\) for each element and substitute \\(v_i=\\omega r_i\\).",
      "求和得公式：提取 \\(\\omega^{2}\\)，识别 \\(\\sum m_ir_i^{2}=I\\)，得到 \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\)。 · Sum to obtain the formula: factor out \\(\\omega^{2}\\), recognize \\(\\sum m_ir_i^{2}=I\\), and obtain \\(K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}\\).",
      "解释质心静止情形：平动项为零，但质元项不为零，所以 \\(K_{\\mathrm{rot}}>0\\)。 · Explain the center-of-mass-at-rest case: the translational term vanishes, but the element terms do not, so \\(K_{\\mathrm{rot}}>0\\).",
      "迁移到一般运动与纯滚动：总动能 = 质心平动 + 绕质心转动，并用 \\(v_{\\mathrm{cm}}=R\\omega\\) 化简。 · Transfer to general motion and rolling: total kinetic energy = center-of-mass translation + rotation about the center of mass, simplified with \\(v_{\\mathrm{cm}}=R\\omega\\)."
    ],
    "checks": [
      "一个绕固定轴转动的飞轮，质心静止，为什么仍有动能？请用 \\(v_i=\\omega r_i\\) 与求和式解释。 · A flywheel rotates about a fixed axis with its center of mass at rest. Why does it still have kinetic energy? Explain using \\(v_i=\\omega r_i\\) and the sum.",
      "同样 \\(\\omega\\) 下，为什么绕一端的细杆比绕中心的细杆转动动能大？ · For the same \\(\\omega\\), why does a rod about one end have more rotational kinetic energy than about its center?",
      "两个质点组成的系统，如何由各质点的角动量和转动惯量求 \\(K_{\\mathrm{rot}}\\)？ · For a two-point-mass system, how do you find \\(K_{\\mathrm{rot}}\\) from the parts’ rotational inertias?",
      "圆环与圆盘质量、半径相同且 \\(\\omega\\) 相同，谁的转动动能大？为什么？ · A ring and a disk have the same mass and radius and rotate at the same \\(\\omega\\). Which has more rotational kinetic energy, and why?",
      "转动动能是矢量还是标量？两个刚体的转动动能如何相加？ · Is rotational kinetic energy a vector or a scalar? How do the rotational kinetic energies of two bodies add?",
      "纯滚动时总动能如何分解？为什么不能只算 \\(\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}\\)？ · How is total kinetic energy decomposed in rolling without slipping? Why is \\(\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}\\) alone insufficient?"
    ],
    "vocabulary": [
      {
        "termZh": "转动动能",
        "termEn": "rotational kinetic energy",
        "defZh": "刚体因绕轴转动而具有的动能，等于各质元平动动能之和 \\(\\dfrac{1}{2}I\\omega^{2}\\)。",
        "defEn": "The kinetic energy a rigid body has because it rotates about an axis; it equals the sum of the translational kinetic energies of its elements, \\(\\dfrac{1}{2}I\\omega^{2}\\)."
      },
      {
        "termZh": "转动惯量",
        "termEn": "rotational inertia (moment of inertia)",
        "defZh": "质量相对转轴分布的度量，\\(I=\\sum m_ir_i^{2}\\)；决定同一角速度下转动动能的大小。",
        "defEn": "A measure of how mass is distributed about an axis, \\(I=\\sum m_ir_i^{2}\\); it sets the rotational kinetic energy at a given angular speed."
      },
      {
        "termZh": "质元",
        "termEn": "point element (mass element)",
        "defZh": "把刚体划分成的足够小的质量小块；第 \\(i\\) 个质元的质量为 \\(m_i\\)、到轴距离为 \\(r_i\\)。",
        "defEn": "A sufficiently small piece of a rigid body; the \\(i\\)th element has mass \\(m_i\\) and distance \\(r_i\\) from the axis."
      },
      {
        "termZh": "定轴",
        "termEn": "fixed axis",
        "defZh": "在惯性系中保持不动的转轴；定轴转动时刚体各点绕同一轴做圆周运动。",
        "defEn": "An axis that remains at rest in an inertial frame; in fixed-axis rotation every point moves in a circle about that axis."
      },
      {
        "termZh": "线速度",
        "termEn": "linear (tangential) speed",
        "defZh": "质元沿圆周运动的速率，定轴转动时 \\(v_i=\\omega r_i\\)，方向沿圆周切线。",
        "defEn": "The speed of an element along its circular path; for fixed-axis rotation \\(v_i=\\omega r_i\\), directed tangent to the circle."
      },
      {
        "termZh": "质心",
        "termEn": "center of mass",
        "defZh": "系统质量分布的加权平均位置；质心静止只表示整体无平动，不表示系统无动能。",
        "defEn": "The mass-weighted average position of a system; a center of mass at rest means no bulk translation, not zero kinetic energy."
      },
      {
        "termZh": "平动动能",
        "termEn": "translational kinetic energy",
        "defZh": "系统整体平动的动能 \\(\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}\\)；与绕质心的转动动能相加得总动能。",
        "defEn": "The kinetic energy of bulk translation, \\(\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}\\); adding it to rotation about the center of mass gives the total kinetic energy."
      },
      {
        "termZh": "平行轴定理",
        "termEn": "parallel-axis theorem",
        "defZh": "把质心轴的转动惯量移到相距 \\(d\\) 的平行轴：\\(I=I_{\\mathrm{cm}}+Md^{2}\\)。",
        "defEn": "Shifts the rotational inertia from the center-of-mass axis to a parallel axis a distance \\(d\\) away: \\(I=I_{\\mathrm{cm}}+Md^{2}\\)."
      }
    ]
  },
  "6.2": {
    "id": "mech/mech-u6/6.2",
    "subject": "mech",
    "chapterId": "mech-u6",
    "unitCode": "6",
    "unitTitleZh": "转动系统的能量与动量",
    "unitTitleEn": "Energy and Momentum of Rotating Systems",
    "code": "6.2",
    "titleZh": "角动量",
    "titleEn": "Angular Momentum",
    "layer": "ap",
    "summary": "角动量 \\(\\vec L=\\vec r\\times\\vec p\\)（刚体 \\(L=I\\omega\\)）；净力矩等于 \\(L\\)–\\(t\\) 图的斜率，角冲量等于 \\(\\tau\\)–\\(t\\) 图的有符号面积且等于 \\(\\Delta L\\)；系统总角动量是各组成部分之和，选择系统决定角动量是否守恒。 · Angular momentum is \\(\\vec L=\\vec r\\times\\vec p\\) (for a rigid body, \\(L=I\\omega\\)). Net torque equals the slope of an \\(L\\)–\\(t\\) graph, and angular impulse equals the signed area under a \\(\\tau\\)–\\(t\\) graph and equals \\(\\Delta L\\). A system’s total angular momentum is the sum of its parts, and the choice of system determines whether angular momentum is conserved.",
    "learningObjectives": [
      "能计算质点与定轴刚体的角动量，并说明其方向与参考点或转轴的关系。 · Calculate the angular momentum of a particle and of a rigid body about a fixed axis, and explain how its direction depends on the reference point or axis.",
      "能把净外力矩与 \\(L\\)–\\(t\\) 图的斜率联系起来，并由图像求力矩。 · Relate the net external torque to the slope of an \\(L\\)–\\(t\\) graph, and determine torque from the graph.",
      "能把角冲量与 \\(\\tau\\)–\\(t\\) 图曲线下的有符号面积联系起来，并用 \\(J_{\\mathrm{ang}}=\\Delta L\\) 求解。 · Relate angular impulse to the signed area under a \\(\\tau\\)–\\(t\\) graph, and use \\(J_{\\mathrm{ang}}=\\Delta L\\) to solve problems.",
      "能求由多个部分组成的系统绕同一轴的总角动量，并说明“同一轴”的必要性。 · Find the total angular momentum of a composite system about one axis, and explain why all parts must be referred to the same axis.",
      "能用系统选择判断角动量是否改变：内力矩成对抵消，外力矩改变系统角动量。 · Use system selection to decide whether angular momentum changes: internal torques cancel in pairs, while external torques change the system’s angular momentum.",
      "能分析非刚体系统改变形状时 \\(I\\)、\\(\\omega\\)、\\(L\\) 与 \\(K\\) 的变化，并区分角动量守恒与动能守恒。 · Analyze how \\(I\\), \\(\\omega\\), \\(L\\), and \\(K\\) change when a nonrigid system changes shape, and distinguish conservation of angular momentum from conservation of kinetic energy."
    ],
    "essentialKnowledge": [
      "质点角动量 \\(\\vec L=\\vec r\\times\\vec p=m(\\vec r\\times\\vec v)\\)，大小 \\(L=mvr\\sin\\theta\\)，方向由右手定则确定；绕固定轴转动的刚体 \\(L=I\\omega\\)。 · For a particle, \\(\\vec L=\\vec r\\times\\vec p=m(\\vec r\\times\\vec v)\\), with magnitude \\(L=mvr\\sin\\theta\\) and direction from the right-hand rule; for a rigid body about a fixed axis, \\(L=I\\omega\\).",
      "角动量定理：\\(\\tau_{\\mathrm{net}}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}\\)。因此净外力矩等于 \\(L\\)–\\(t\\) 图切线的斜率：正斜率对应正方向净力矩，负斜率对应反方向净力矩，水平线对应零净外力矩。 · Angular momentum theorem: \\(\\tau_{\\mathrm{net}}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}\\). Hence the net external torque equals the slope of the tangent to an \\(L\\)–\\(t\\) graph: a positive slope means net torque in the positive direction, a negative slope means the opposite direction, and a horizontal line means zero net external torque.",
      "角冲量是力矩对时间的累积：\\(J_{\\mathrm{ang}}=\\int_{t_i}^{t_f}\\tau_{\\mathrm{net}}\\,\\mathrm{d}t\\)。它等于 \\(\\tau\\)–\\(t\\) 图曲线与时间轴之间的有符号面积：轴上方面积为正，轴下方面积为负。 · Angular impulse is the time accumulation of torque: \\(J_{\\mathrm{ang}}=\\int_{t_i}^{t_f}\\tau_{\\mathrm{net}}\\,\\mathrm{d}t\\). It equals the signed area between the \\(\\tau\\)–\\(t\\) curve and the time axis: area above the axis is positive and area below is negative.",
      "角冲量–动量定理：\\(J_{\\mathrm{ang}}=\\Delta L=L_f-L_i\\)。角冲量的方向与施力矩的方向相同；恒力矩时 \\(J_{\\mathrm{ang}}=\\tau_{\\mathrm{net}}\\Delta t\\)。 · Angular impulse–momentum theorem: \\(J_{\\mathrm{ang}}=\\Delta L=L_f-L_i\\). Angular impulse has the same direction as the torque producing it; for constant torque, \\(J_{\\mathrm{ang}}=\\tau_{\\mathrm{net}}\\Delta t\\).",
      "由 \\(\\tau\\)–\\(t\\) 图求角冲量时，把曲线下的几何区域分块求面积（矩形、三角形、梯形）再按符号相加；若正负面积相等，净角冲量为零，角动量回到初值。 · To find angular impulse from a \\(\\tau\\)–\\(t\\) graph, split the region under the curve into geometric shapes (rectangles, triangles, trapezoids) and add them with signs. If the positive and negative areas cancel, the net angular impulse is zero and the angular momentum returns to its initial value.",
      "系统绕某轴的总角动量等于各组成部分绕同一轴的角动量之和：\\(L_{\\mathrm{sys}}=\\sum_i L_i\\)。对刚体，各质元同轴转动，\\(v_i=\\omega r_i\\)，求和得 \\(L=I\\omega\\)；对复合系统，可把各刚体或质点的角动量直接相加。 · The total angular momentum of a system about an axis is the sum of the angular momenta of its parts about the same axis: \\(L_{\\mathrm{sys}}=\\sum_i L_i\\). For a rigid body, all elements share the same axis and \\(v_i=\\omega r_i\\), so the sum gives \\(L=I\\omega\\); for a composite system, add the angular momenta of the individual rigid bodies or particles.",
      "角动量守恒：若所选系统所受净外力矩为零，则 \\(L\\) 恒定。内力矩总是成对出现、等大反向（牛顿第三定律），只能在系统内部转移角动量，不能改变系统总角动量。 · Conservation of angular momentum: if the net external torque on the selected system is zero, \\(L\\) is constant. Internal torques occur in equal and opposite pairs (Newton’s third law); they can transfer angular momentum within the system but cannot change its total.",
      "在所有相互作用中，角动量在相互作用双方之间等量反向地转移；若把双方都包含进系统，总角动量守恒。对子系统而言，角动量的改变等于外界对它的角冲量。 · In every interaction, angular momentum is transferred between the two interacting objects in equal and opposite amounts; if both are included in the system, the total angular momentum is conserved. For a subsystem, the change in angular momentum equals the external angular impulse on it.",
      "选择系统会改变“外力矩”的清单：只把转盘看作系统，轴对盘的摩擦力矩是外力矩，盘的 \\(L\\) 改变；把转盘、电机和地球一起看作系统，这些力矩成为内力矩，总 \\(L\\) 守恒。 · The choice of system changes which torques count as external: if only the turntable is the system, the axle’s friction torque is external and the turntable’s \\(L\\) changes; if the turntable, motor, and Earth are included, those torques become internal and the total \\(L\\) is conserved.",
      "非刚体改变形状时，\\(I\\) 改变而 \\(L\\) 可保持不变，于是 \\(I_i\\omega_i=I_f\\omega_f\\)。角动量守恒不保证动能守恒：收臂时肌肉做内功，\\(K\\) 可以增加；释放时 \\(K\\) 可以减少。 · When a nonrigid system changes shape, \\(I\\) changes while \\(L\\) may remain constant, so \\(I_i\\omega_i=I_f\\omega_f\\). Conservation of angular momentum does not imply conservation of kinetic energy: pulling the arms in involves internal work by muscles and can increase \\(K\\), while letting them out can decrease \\(K\\)."
    ],
    "definition": "角动量描述物体或系统绕参考点或转轴的转动“动量”：质点 \\(\\vec L=\\vec r\\times\\vec p=m(\\vec r\\times\\vec v)\\)，大小 \\(L=mvr\\sin\\theta\\)；绕固定轴转动的刚体 \\(L=I\\omega\\)。净外力矩等于角动量的时间变化率，\\(\\tau_{\\mathrm{net}}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}\\)，也就是 \\(L\\)–\\(t\\) 图的斜率；在时间 \\(\\Delta t\\) 内，角冲量 \\(J_{\\mathrm{ang}}=\\int\\tau_{\\mathrm{net}}\\,\\mathrm{d}t\\) 等于 \\(\\tau\\)–\\(t\\) 图曲线下的有符号面积，并等于角动量变化 \\(\\Delta L\\)。系统绕某轴的总角动量等于各组成部分绕同一轴的角动量之和，\\(L_{\\mathrm{sys}}=\\sum L_i\\)；当所选系统所受净外力矩为零时，系统总角动量守恒。 · Angular momentum describes the rotational “momentum” of an object or system about a reference point or axis: for a particle, \\(\\vec L=\\vec r\\times\\vec p=m(\\vec r\\times\\vec v)\\), with magnitude \\(L=mvr\\sin\\theta\\); for a rigid body about a fixed axis, \\(L=I\\omega\\). The net external torque equals the time rate of change of angular momentum, \\(\\tau_{\\mathrm{net}}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}\\), which is the slope of an \\(L\\)–\\(t\\) graph. Over a time interval \\(\\Delta t\\), the angular impulse \\(J_{\\mathrm{ang}}=\\int\\tau_{\\mathrm{net}}\\,\\mathrm{d}t\\) equals the signed area under the \\(\\tau\\)–\\(t\\) graph and equals the change in angular momentum \\(\\Delta L\\). The total angular momentum of a system about an axis is the sum of the angular momenta of its parts about the same axis, \\(L_{\\mathrm{sys}}=\\sum L_i\\). When the net external torque on the selected system is zero, the system’s total angular momentum is conserved.",
    "intuition": "角动量是“转动的动量”，角冲量是“力矩在时间上的累积”。看 \\(L\\)–\\(t\\) 图：斜率就是净力矩；看 \\(\\tau\\)–\\(t\\) 图：面积就是角冲量。两者互逆，像 \\(v\\)–\\(t\\) 图的斜率与 \\(a\\)–\\(t\\) 图的面积。 · Angular momentum is “momentum for rotation,” and angular impulse is “torque accumulated over time.” On an \\(L\\)–\\(t\\) graph the slope is the net torque; on a \\(\\tau\\)–\\(t\\) graph the area is the angular impulse. The two statements are inverses, like the slope of a \\(v\\)–\\(t\\) graph and the area under an \\(a\\)–\\(t\\) graph.",
    "formulas": [
      {
        "latex": "\\vec L=\\vec r\\times\\vec p=m(\\vec r\\times\\vec v)",
        "note": "质点角动量；方向由右手定则。 · Angular momentum of a particle; direction from the right-hand rule."
      },
      {
        "latex": "L=I\\omega",
        "note": "刚体绕固定轴的角动量。 · Angular momentum of a rigid body about a fixed axis."
      },
      {
        "latex": "\\tau_{\\mathrm{net}}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}",
        "note": "角动量定理；净力矩是 \\(L\\)–\\(t\\) 图的斜率。 · Angular momentum theorem; net torque is the slope of the \\(L\\)–\\(t\\) graph."
      },
      {
        "latex": "J_{\\mathrm{ang}}=\\int_{t_i}^{t_f}\\tau_{\\mathrm{net}}\\,\\mathrm{d}t",
        "note": "角冲量；等于 \\(\\tau\\)–\\(t\\) 图曲线下的有符号面积。 · Angular impulse; equals the signed area under the \\(\\tau\\)–\\(t\\) graph."
      },
      {
        "latex": "J_{\\mathrm{ang}}=\\Delta L=L_f-L_i",
        "note": "角冲量–动量定理。 · Angular impulse–momentum theorem."
      },
      {
        "latex": "L_{\\mathrm{sys}}=\\sum_i L_i",
        "note": "系统总角动量；各分量必须关于同一轴。 · Total system angular momentum; all parts must use the same axis."
      },
      {
        "latex": "I_i\\omega_i=I_f\\omega_f\\quad(\\tau_{\\mathrm{ext}}=0)",
        "note": "转动惯量改变时的角动量守恒。 · Conservation of angular momentum when the rotational inertia changes."
      }
    ],
    "derivationNotes": [
      {
        "from": "质点角动量定义",
        "to": "角动量定理",
        "note": "对 \\(\\vec L=\\vec r\\times\\vec p\\) 求导，利用 \\(\\vec v\\times\\vec p=0\\) 与 \\(\\vec F=\\dfrac{\\mathrm{d}\\vec p}{\\mathrm{d}t}\\)，得 \\(\\dfrac{\\mathrm{d}\\vec L}{\\mathrm{d}t}=\\vec r\\times\\vec F=\\vec\\tau\\)。 · Differentiate \\(\\vec L=\\vec r\\times\\vec p\\), use \\(\\vec v\\times\\vec p=0\\) and \\(\\vec F=\\dfrac{\\mathrm{d}\\vec p}{\\mathrm{d}t}\\), and obtain \\(\\dfrac{\\mathrm{d}\\vec L}{\\mathrm{d}t}=\\vec r\\times\\vec F=\\vec\\tau\\)."
      },
      {
        "from": "角动量定理",
        "to": "角冲量–动量定理",
        "note": "对 \\(\\mathrm{d}\\vec L=\\vec\\tau\\,\\mathrm{d}t\\) 从 \\(t_i\\) 到 \\(t_f\\) 积分，得 \\(\\int\\vec\\tau\\,\\mathrm{d}t=\\Delta\\vec L\\)。 · Integrate \\(\\mathrm{d}\\vec L=\\vec\\tau\\,\\mathrm{d}t\\) from \\(t_i\\) to \\(t_f\\) to obtain \\(\\int\\vec\\tau\\,\\mathrm{d}t=\\Delta\\vec L\\)."
      },
      {
        "from": "角冲量积分",
        "to": "图像面积",
        "note": "定积分在几何上就是曲线与时间轴之间的有符号面积：轴上为正、轴下为负。 · A definite integral is geometrically the signed area between the curve and the time axis: positive above the axis and negative below it."
      },
      {
        "from": "角动量定理",
        "to": "图像斜率",
        "note": "导数在图像上就是切线斜率；\\(\\tau_{\\mathrm{net}}\\) 等于 \\(L\\)–\\(t\\) 图在该时刻的斜率。 · A derivative is the slope of the tangent on a graph; \\(\\tau_{\\mathrm{net}}\\) equals the slope of the \\(L\\)–\\(t\\) graph at that instant."
      },
      {
        "from": "质点角动量",
        "to": "刚体角动量",
        "note": "刚体各质元绕同一轴转动，\\(v_i=\\omega r_i\\)，求和 \\(L=\\sum m_ir_i^{2}\\omega=I\\omega\\)。 · For a rigid body, all elements rotate about the same axis with \\(v_i=\\omega r_i\\); summing gives \\(L=\\sum m_ir_i^{2}\\omega=I\\omega\\)."
      },
      {
        "from": "系统与内力矩",
        "to": "角动量守恒",
        "note": "内力矩成对等大反向，矢量和为零；只有净外力矩 \\(\\int\\tau_{\\mathrm{ext}}\\,\\mathrm{d}t\\) 能改变系统总角动量。 · Internal torques occur in equal and opposite pairs and sum to zero; only the net external angular impulse \\(\\int\\tau_{\\mathrm{ext}}\\,\\mathrm{d}t\\) can change the system’s total angular momentum."
      }
    ],
    "conditions": [
      "\\(L\\) 与 \\(\\tau\\) 必须关于同一参考点或同一转轴；换轴后不能直接比较或相加。 · \\(L\\) and \\(\\tau\\) must refer to the same reference point or axis; after changing the axis they cannot be compared or added directly.",
      "\\(L=I\\omega\\) 适用于绕固定轴转动的刚体，或绕质心轴转动的刚体；一般情形需用 \\(\\vec L=I\\vec\\omega\\) 的张量形式。 · \\(L=I\\omega\\) applies to a rigid body about a fixed axis or about its center-of-mass axis; general cases require the tensor form \\(\\vec L=I\\vec\\omega\\).",
      "角动量守恒的条件是净外力矩为零，不是净外力为零；合外力为零时仍可能有外力矩。 · Conservation requires zero net external torque, not zero net external force; zero net force can coexist with a nonzero torque.",
      "对所选系统使用角冲量定理时，\\(\\tau_{\\mathrm{net}}\\) 只包括系统外部施加的力矩。 · When applying the angular impulse theorem to a chosen system, \\(\\tau_{\\mathrm{net}}\\) includes only torques exerted by the surroundings.",
      "\\(\\tau\\)–\\(t\\) 图面积与 \\(L\\)–\\(t\\) 图斜率都要带符号；先规定正方向（通常逆时针为正）。 · Areas on a \\(\\tau\\)–\\(t\\) graph and slopes on an \\(L\\)–\\(t\\) graph carry signs; first choose a positive direction (usually counterclockwise).",
      "\\(L\\) 与 \\(\\omega\\) 的方向沿转轴，由右手定则确定；角冲量的方向与力矩方向相同。 · The directions of \\(L\\) and \\(\\omega\\) are along the axis, given by the right-hand rule; angular impulse has the same direction as the torque."
    ],
    "keyPoints": [
      "质点 \\(\\vec L=\\vec r\\times\\vec p\\)，刚体定轴 \\(L=I\\omega\\)；方向由右手定则。 · Particle: \\(\\vec L=\\vec r\\times\\vec p\\); rigid body about a fixed axis: \\(L=I\\omega\\); direction from the right-hand rule.",
      "\\(\\tau_{\\mathrm{net}}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}\\)：\\(L\\)–\\(t\\) 图的斜率就是净力矩。 · \\(\\tau_{\\mathrm{net}}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}\\): the slope of an \\(L\\)–\\(t\\) graph is the net torque.",
      "角冲量 \\(J_{\\mathrm{ang}}\\) 等于 \\(\\tau\\)–\\(t\\) 图曲线下的有符号面积。 · Angular impulse \\(J_{\\mathrm{ang}}\\) equals the signed area under a \\(\\tau\\)–\\(t\\) graph.",
      "\\(J_{\\mathrm{ang}}=\\Delta L\\)：角冲量改变角动量，方向与力矩相同。 · \\(J_{\\mathrm{ang}}=\\Delta L\\): angular impulse changes angular momentum and points in the torque direction.",
      "系统总角动量是各部分绕同一轴的角动量之和。 · A system’s total angular momentum is the sum of its parts’ angular momenta about the same axis.",
      "净外力矩为零时系统角动量守恒；内力矩只转移角动量，不改变总量。 · When the net external torque is zero, the system’s angular momentum is conserved; internal torques only transfer angular momentum.",
      "系统选择决定哪些力矩算外力矩：把施力矩的物体纳入系统，角动量就可能守恒。 · System selection determines which torques are external: including the torque source in the system can make angular momentum conserved.",
      "角动量守恒不代表动能守恒：\\(I\\) 改变时 \\(\\omega\\) 改变，\\(K=\\dfrac{L^{2}}{2I}\\) 也随之改变。 · Conservation of angular momentum does not imply conservation of kinetic energy: when \\(I\\) changes, \\(\\omega\\) changes and so does \\(K=\\dfrac{L^{2}}{2I}\\)."
    ],
    "misconceptions": [
      "认为合外力为零角动量就守恒。纠正：守恒条件是净外力矩为零，力矩可能不为零。 · Thinking zero net force implies conservation of angular momentum. Correction: the condition is zero net external torque; the torque may still be nonzero.",
      "认为角动量守恒时动能也守恒。纠正：滑冰收臂时 \\(L\\) 不变而 \\(K\\) 增加，肌肉做内功。 · Thinking kinetic energy is conserved whenever angular momentum is. Correction: when a skater pulls in the arms, \\(L\\) is constant while \\(K\\) increases because muscles do internal work.",
      "把 \\(L\\)–\\(t\\) 图的斜率当成 \\(L\\) 的值，或把 \\(\\tau\\)–\\(t\\) 图的面积当成 \\(\\tau\\)。纠正：斜率是力矩，面积是角冲量。 · Confusing the slope of an \\(L\\)–\\(t\\) graph with the value of \\(L\\), or the area under a \\(\\tau\\)–\\(t\\) graph with \\(\\tau\\). Correction: the slope is torque and the area is angular impulse.",
      "在计算 \\(\\Delta L\\) 或系统总角动量时混用不同参考轴。纠正：所有角动量必须关于同一轴。 · Mixing different reference axes when computing \\(\\Delta L\\) or a system total. Correction: all angular momenta must refer to the same axis.",
      "认为内力矩能改变系统总角动量。纠正：内力矩成对抵消，只能在各部分间转移角动量。 · Thinking internal torques can change a system’s total angular momentum. Correction: internal torques cancel in pairs and only redistribute angular momentum among the parts.",
      "把“角动量在所有相互作用中守恒”误解为“任意选择的子系统角动量都不变”。纠正：子系统会因外力矩而改变，只有包含所有相互作用对象的系统才守恒。 · Misreading “angular momentum is conserved in all interactions” as “any chosen subsystem has constant angular momentum.” Correction: a subsystem can change due to external torque; only a system containing all interacting objects is conserved.",
      "忽略 \\(\\tau\\)–\\(t\\) 图中时间轴下方的负面积，直接把所有面积相加。 · Ignoring negative area below the time axis in a \\(\\tau\\)–\\(t\\) graph and adding all areas as positive.",
      "把角冲量当作矢量面积或把 \\(J_{\\mathrm{ang}}\\) 的单位写成 \\(\\mathrm{N\\,m}\\)。纠正：单位是 \\(\\mathrm{N\\,m\\,s}=\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)。 · Treating angular impulse as a vector area or giving it units of \\(\\mathrm{N\\,m}\\). Correction: the units are \\(\\mathrm{N\\,m\\,s}=\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)."
    ],
    "examples": [
      {
        "title": "例 1 · \\(\\tau\\)–\\(t\\) 图面积求角冲量 · Example 1: Angular impulse from the area under a \\(\\tau\\)–\\(t\\) graph",
        "prompt": "半径 \\(0.20\\,\\mathrm{m}\\) 的圆盘 \\(I=0.20\\,\\mathrm{kg\\,m^{2}}\\) 初始静止。净力矩随时间变化：\\(0\\) 到 \\(2.0\\,\\mathrm{s}\\) 由 \\(0\\) 线性增至 \\(0.60\\,\\mathrm{N\\,m}\\)，\\(2.0\\) 到 \\(3.0\\,\\mathrm{s}\\) 保持 \\(0.60\\,\\mathrm{N\\,m}\\)，\\(3.0\\) 到 \\(4.0\\,\\mathrm{s}\\) 线性减至零。求总角冲量与 \\(t=4.0\\,\\mathrm{s}\\) 时的角速度。 · A disk with \\(I=0.20\\,\\mathrm{kg\\,m^{2}}\\) and radius \\(0.20\\,\\mathrm{m}\\) starts from rest. The net torque rises linearly from \\(0\\) to \\(0.60\\,\\mathrm{N\\,m}\\) during \\(0\\)–\\(2.0\\,\\mathrm{s}\\), stays at \\(0.60\\,\\mathrm{N\\,m}\\) during \\(2.0\\)–\\(3.0\\,\\mathrm{s}\\), then decreases linearly to zero during \\(3.0\\)–\\(4.0\\,\\mathrm{s}\\). Find the total angular impulse and the angular speed at \\(t=4.0\\,\\mathrm{s}\\).",
        "steps": [
          "把 \\(\\tau\\)–\\(t\\) 图分成三块：三角形 \\(\\dfrac{1}{2}(2.0)(0.60)=0.60\\)，矩形 \\((1.0)(0.60)=0.60\\)，三角形 \\(\\dfrac{1}{2}(1.0)(0.60)=0.30\\)，单位均为 \\(\\mathrm{N\\,m\\,s}\\)。 · Split the \\(\\tau\\)–\\(t\\) graph into three regions: a triangle \\(\\dfrac{1}{2}(2.0)(0.60)=0.60\\), a rectangle \\((1.0)(0.60)=0.60\\), and a triangle \\(\\dfrac{1}{2}(1.0)(0.60)=0.30\\), all in \\(\\mathrm{N\\,m\\,s}\\).",
          "总角冲量 \\(J_{\\mathrm{ang}}=0.60+0.60+0.30=1.5\\,\\mathrm{N\\,m\\,s}\\)。 · Total angular impulse: \\(J_{\\mathrm{ang}}=0.60+0.60+0.30=1.5\\,\\mathrm{N\\,m\\,s}\\).",
          "\\(J_{\\mathrm{ang}}=\\Delta L=I\\omega_f\\)，故 \\(\\omega_f=\\dfrac{1.5}{0.20}=7.5\\,\\mathrm{rad\\,s^{-1}}\\)。 · \\(J_{\\mathrm{ang}}=\\Delta L=I\\omega_f\\), so \\(\\omega_f=\\dfrac{1.5}{0.20}=7.5\\,\\mathrm{rad\\,s^{-1}}\\).",
          "全程平均力矩 \\(\\tau_{\\mathrm{avg}}=\\dfrac{J_{\\mathrm{ang}}}{\\Delta t}=\\dfrac{1.5}{4.0}=0.375\\,\\mathrm{N\\,m}\\)。 · The average torque over the interval is \\(\\tau_{\\mathrm{avg}}=\\dfrac{J_{\\mathrm{ang}}}{\\Delta t}=\\dfrac{1.5}{4.0}=0.375\\,\\mathrm{N\\,m}\\)."
        ],
        "solution": "\\(J_{\\mathrm{ang}}=1.5\\,\\mathrm{N\\,m\\,s}\\)，\\(\\omega_f=7.5\\,\\mathrm{rad\\,s^{-1}}\\)。角冲量就是 \\(\\tau\\)–\\(t\\) 图曲线下的面积。 · \\(J_{\\mathrm{ang}}=1.5\\,\\mathrm{N\\,m\\,s}\\) and \\(\\omega_f=7.5\\,\\mathrm{rad\\,s^{-1}}\\). The angular impulse is the area under the \\(\\tau\\)–\\(t\\) graph.",
        "solutionLatex": "J_{\\mathrm{ang}}=1.5\\,\\mathrm{N\\,m\\,s},\\;\\omega_f=7.5\\,\\mathrm{rad\\,s^{-1}}"
      },
      {
        "title": "例 2 · \\(L\\)–\\(t\\) 图斜率求净力矩 · Example 2: Net torque from the slope of an \\(L\\)–\\(t\\) graph",
        "prompt": "某系统绕固定轴的角动量随时间变化：\\(t=0\\) 时 \\(L=1.0\\)，\\(t=2.0\\,\\mathrm{s}\\) 时 \\(L=5.0\\)，\\(t=4.0\\,\\mathrm{s}\\) 时仍为 \\(5.0\\)，\\(t=6.0\\,\\mathrm{s}\\) 时降为 \\(2.0\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)。各段均为直线。求 \\(0\\)–\\(2.0\\,\\mathrm{s}\\)、\\(2.0\\)–\\(4.0\\,\\mathrm{s}\\)、\\(4.0\\)–\\(6.0\\,\\mathrm{s}\\) 的净外力矩。 · A system’s angular momentum about a fixed axis is \\(L=1.0\\) at \\(t=0\\), \\(L=5.0\\) at \\(t=2.0\\,\\mathrm{s}\\), \\(L=5.0\\) at \\(t=4.0\\,\\mathrm{s}\\), and \\(L=2.0\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\) at \\(t=6.0\\,\\mathrm{s}\\). Each segment is straight. Find the net external torque during \\(0\\)–\\(2.0\\,\\mathrm{s}\\), \\(2.0\\)–\\(4.0\\,\\mathrm{s}\\), and \\(4.0\\)–\\(6.0\\,\\mathrm{s}\\).",
        "steps": [
          "\\(0\\)–\\(2.0\\,\\mathrm{s}\\)：斜率 \\(\\dfrac{5.0-1.0}{2.0}=2.0\\,\\mathrm{N\\,m}\\)。 · \\(0\\)–\\(2.0\\,\\mathrm{s}\\): slope \\(\\dfrac{5.0-1.0}{2.0}=2.0\\,\\mathrm{N\\,m}\\).",
          "\\(2.0\\)–\\(4.0\\,\\mathrm{s}\\)：\\(L\\) 不变，斜率 \\(0\\)，净外力矩为零，角动量守恒。 · \\(2.0\\)–\\(4.0\\,\\mathrm{s}\\): \\(L\\) is constant, the slope is \\(0\\), the net external torque is zero, and angular momentum is conserved.",
          "\\(4.0\\)–\\(6.0\\,\\mathrm{s}\\)：斜率 \\(\\dfrac{2.0-5.0}{2.0}=-1.5\\,\\mathrm{N\\,m}\\)，力矩方向与正方向相反。 · \\(4.0\\)–\\(6.0\\,\\mathrm{s}\\): slope \\(\\dfrac{2.0-5.0}{2.0}=-1.5\\,\\mathrm{N\\,m}\\), so the torque points opposite the positive direction."
        ],
        "solution": "\\(\\tau=+2.0\\,\\mathrm{N\\,m}\\)、\\(0\\)、\\(-1.5\\,\\mathrm{N\\,m}\\)。\\(L\\)–\\(t\\) 图的斜率直接给出净力矩；水平段表示角动量守恒。 · \\(\\tau=+2.0\\,\\mathrm{N\\,m}\\), \\(0\\), and \\(-1.5\\,\\mathrm{N\\,m}\\). The slope of the \\(L\\)–\\(t\\) graph gives the net torque directly; a horizontal segment means conservation of angular momentum.",
        "solutionLatex": "\\tau=+2.0\\,\\mathrm{N\\,m},\\;0,\\;-1.5\\,\\mathrm{N\\,m}"
      },
      {
        "title": "例 3 · 复合系统角动量相加与守恒 · Example 3: Adding angular momenta in a composite system",
        "prompt": "水平转盘 \\(I_0=0.10\\,\\mathrm{kg\\,m^{2}}\\) 以 \\(3.0\\,\\mathrm{rad\\,s^{-1}}\\) 转动，盘上两个各 \\(0.50\\,\\mathrm{kg}\\) 的小物块距轴 \\(0.20\\,\\mathrm{m}\\)。求系统总角动量；若物块沿径向滑到距轴 \\(0.10\\,\\mathrm{m}\\)，求新的角速度与转动动能。 · A horizontal turntable with \\(I_0=0.10\\,\\mathrm{kg\\,m^{2}}\\) rotates at \\(3.0\\,\\mathrm{rad\\,s^{-1}}\\). Two \\(0.50\\,\\mathrm{kg}\\) blocks sit \\(0.20\\,\\mathrm{m}\\) from the axis. Find the system’s total angular momentum. If the blocks slide radially inward to \\(0.10\\,\\mathrm{m}\\), find the new angular speed and rotational kinetic energy.",
        "steps": [
          "即：\\(I_i=0.10+2(0.50)(0.20)^{2}=0.10+0.040=0.14\\,\\mathrm{kg\\,m^{2}}\\)。 · \\(I_i=0.10+2(0.50)(0.20)^{2}=0.10+0.040=0.14\\,\\mathrm{kg\\,m^{2}}\\).",
          "\\(L_{\\mathrm{sys}}=I_i\\omega_i=(0.14)(3.0)=0.42\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)；方向沿转轴。 · \\(L_{\\mathrm{sys}}=I_i\\omega_i=(0.14)(3.0)=0.42\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\), directed along the axis.",
          "无外力矩，\\(L\\) 守恒：\\(I_f=0.10+2(0.50)(0.10)^{2}=0.11\\,\\mathrm{kg\\,m^{2}}\\)，\\(\\omega_f=\\dfrac{0.42}{0.11}=3.8\\,\\mathrm{rad\\,s^{-1}}\\)。 · With no external torque, \\(L\\) is conserved: \\(I_f=0.10+2(0.50)(0.10)^{2}=0.11\\,\\mathrm{kg\\,m^{2}}\\), so \\(\\omega_f=\\dfrac{0.42}{0.11}=3.8\\,\\mathrm{rad\\,s^{-1}}\\).",
          "\\(K_i=\\dfrac{1}{2}(0.14)(3.0)^{2}=0.63\\,\\mathrm{J}\\)，\\(K_f=\\dfrac{1}{2}(0.11)(3.8)^{2}=0.80\\,\\mathrm{J}\\)；增加的动能来自把物块向内拉时做的内功。 · \\(K_i=\\dfrac{1}{2}(0.14)(3.0)^{2}=0.63\\,\\mathrm{J}\\) and \\(K_f=\\dfrac{1}{2}(0.11)(3.8)^{2}=0.80\\,\\mathrm{J}\\); the increase comes from internal work done while pulling the blocks inward."
        ],
        "solution": "\\(L_{\\mathrm{sys}}=0.42\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)，\\(\\omega_f\\approx3.8\\,\\mathrm{rad\\,s^{-1}}\\)，\\(K_f\\approx0.80\\,\\mathrm{J}\\)。系统总角动量是各部分之和，且 \\(L\\) 守恒不意味着 \\(K\\) 守恒。 · \\(L_{\\mathrm{sys}}=0.42\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\), \\(\\omega_f\\approx3.8\\,\\mathrm{rad\\,s^{-1}}\\), and \\(K_f\\approx0.80\\,\\mathrm{J}\\). The system’s total angular momentum is the sum of its parts, and conserved \\(L\\) does not imply conserved \\(K\\).",
        "solutionLatex": "L_{\\mathrm{sys}}=0.42\\,\\mathrm{kg\\,m^{2}\\,s^{-1}},\\;\\omega_f\\approx3.8\\,\\mathrm{rad\\,s^{-1}}"
      },
      {
        "title": "例 4 · 系统选择：接球前后 · Example 4: Choosing the system when catching a ball",
        "prompt": "质量 \\(0.20\\,\\mathrm{kg}\\) 的球以 \\(6.0\\,\\mathrm{m\\,s^{-1}}\\) 水平飞来，其速度线到转轴的距离为 \\(0.50\\,\\mathrm{m}\\)。站在可自由转动凳上的人（含凳）\\(I=3.0\\,\\mathrm{kg\\,m^{2}}\\) 初始静止，接住球后一起转动。求接球后角速度，并分别以“人+凳”、“人+凳+球”为系统说明角动量是否守恒。 · A \\(0.20\\,\\mathrm{kg}\\) ball flies horizontally at \\(6.0\\,\\mathrm{m\\,s^{-1}}\\) along a line \\(0.50\\,\\mathrm{m}\\) from the rotation axis. A person on a freely rotating stool (person + stool \\(I=3.0\\,\\mathrm{kg\\,m^{2}}\\)) is initially at rest and catches the ball. Find the angular speed after the catch, and explain whether angular momentum is conserved for the system “person + stool” versus “person + stool + ball.”",
        "steps": [
          "球的角动量 \\(L_{\\mathrm{ball}}=mvr_{\\perp}=(0.20)(6.0)(0.50)=0.60\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)。 · Ball angular momentum: \\(L_{\\mathrm{ball}}=mvr_{\\perp}=(0.20)(6.0)(0.50)=0.60\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\).",
          "把球、人、凳作为系统，接球过程中外力矩可忽略，\\(L\\) 守恒：\\(0.60=(3.0+0.20(0.50)^{2})\\omega_f\\)。 · Take ball + person + stool as the system. During the catch the external torque is negligible, so \\(L\\) is conserved: \\(0.60=(3.0+0.20(0.50)^{2})\\omega_f\\).",
          "\\(I_{\\mathrm{ball}}=0.20(0.50)^{2}=0.050\\,\\mathrm{kg\\,m^{2}}\\)，故 \\(\\omega_f=\\dfrac{0.60}{3.05}=0.20\\,\\mathrm{rad\\,s^{-1}}\\)。 · \\(I_{\\mathrm{ball}}=0.20(0.50)^{2}=0.050\\,\\mathrm{kg\\,m^{2}}\\), so \\(\\omega_f=\\dfrac{0.60}{3.05}=0.20\\,\\mathrm{rad\\,s^{-1}}\\).",
          "若只以“人+凳”为系统，球在接球时对人施加力矩，属于外力矩，所以人+凳的角动量从 \\(0\\) 变为约 \\(3.0(0.20)=0.59\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)，不守恒；把球纳入系统后总 \\(L\\) 守恒。 · If only “person + stool” is the system, the ball exerts an external torque during the catch, so its angular momentum changes from \\(0\\) to about \\(3.0(0.20)=0.59\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\) and is not conserved; including the ball restores conservation of the total \\(L\\)."
        ],
        "solution": "\\(\\omega_f=0.20\\,\\mathrm{rad\\,s^{-1}}\\)。系统选择决定角动量是否改变：人+凳的 \\(L\\) 改变，人+凳+球的 \\(L\\) 守恒。 · \\(\\omega_f=0.20\\,\\mathrm{rad\\,s^{-1}}\\). System choice determines whether \\(L\\) changes: the \\(L\\) of person + stool changes, while the \\(L\\) of person + stool + ball is conserved.",
        "solutionLatex": "\\omega_f=0.20\\,\\mathrm{rad\\,s^{-1}}"
      },
      {
        "title": "例 5 · 有符号面积：先加速后减速 · Example 5: Signed area when speeding up then slowing down",
        "prompt": "某刚体受到的净力矩 \\(\\tau=(4.0-2.0t)\\,\\mathrm{N\\,m}\\)，作用时间为 \\(0\\) 到 \\(4.0\\,\\mathrm{s}\\)。求净角冲量与角速度变化；并说明何时角速度最大。 · A rigid body experiences a net torque \\(\\tau=(4.0-2.0t)\\,\\mathrm{N\\,m}\\) from \\(0\\) to \\(4.0\\,\\mathrm{s}\\). Find the net angular impulse and the change in angular speed, and state when the angular speed is greatest.",
        "steps": [
          "\\(\\tau=0\\) 时 \\(t=2.0\\,\\mathrm{s}\\)：前 \\(2.0\\,\\mathrm{s}\\) 力矩为正，后 \\(2.0\\,\\mathrm{s}\\) 力矩为负。 · \\(\\tau=0\\) at \\(t=2.0\\,\\mathrm{s}\\): torque is positive during the first \\(2.0\\,\\mathrm{s}\\) and negative during the last \\(2.0\\,\\mathrm{s}\\).",
          "正面积 \\(\\dfrac{1}{2}(2.0)(4.0)=4.0\\,\\mathrm{N\\,m\\,s}\\)，负面积 \\(\\dfrac{1}{2}(2.0)(-4.0)=-4.0\\,\\mathrm{N\\,m\\,s}\\)。 · Positive area \\(\\dfrac{1}{2}(2.0)(4.0)=4.0\\,\\mathrm{N\\,m\\,s}\\); negative area \\(\\dfrac{1}{2}(2.0)(-4.0)=-4.0\\,\\mathrm{N\\,m\\,s}\\).",
          "净角冲量 \\(J_{\\mathrm{ang}}=4.0-4.0=0\\)，故 \\(\\Delta L=0\\)，末角速度等于初角速度。 · Net angular impulse \\(J_{\\mathrm{ang}}=4.0-4.0=0\\), so \\(\\Delta L=0\\) and the final angular speed equals the initial value.",
          "角速度在 \\(t=2.0\\,\\mathrm{s}\\) 最大，因为此前角冲量一直为正、此后开始抵消。 · The angular speed is greatest at \\(t=2.0\\,\\mathrm{s}\\), because angular impulse is positive before then and begins to cancel after."
        ],
        "solution": "\\(J_{\\mathrm{ang}}=0\\)，\\(\\Delta\\omega=0\\)；\\(t=2.0\\,\\mathrm{s}\\) 时角速度最大。\\(\\tau\\)–\\(t\\) 图面积必须按正负号相加。 · \\(J_{\\mathrm{ang}}=0\\) and \\(\\Delta\\omega=0\\); the angular speed is greatest at \\(t=2.0\\,\\mathrm{s}\\). Areas on a \\(\\tau\\)–\\(t\\) graph must be added with signs.",
        "solutionLatex": "J_{\\mathrm{ang}}=0,\\;\\Delta\\omega=0"
      },
      {
        "title": "例 6 · 滑冰收臂 · Example 6: A skater pulling in the arms",
        "prompt": "滑冰者转动惯量由 \\(4.0\\) 降到 \\(1.0\\,\\mathrm{kg\\,m^{2}}\\)，初角速度 \\(2.0\\,\\mathrm{rad\\,s^{-1}}\\)。求末角速度与动能变化。 · A skater’s rotational inertia drops from \\(4.0\\) to \\(1.0\\,\\mathrm{kg\\,m^{2}}\\), starting at \\(2.0\\,\\mathrm{rad\\,s^{-1}}\\). Find the final angular speed and the change in kinetic energy.",
        "steps": [
          "无外力矩，角动量守恒：\\(I_i\\omega_i=I_f\\omega_f\\)。 · With no external torque, angular momentum is conserved: \\(I_i\\omega_i=I_f\\omega_f\\).",
          "即：\\(\\omega_f=\\dfrac{4.0(2.0)}{1.0}=8.0\\,\\mathrm{rad\\,s^{-1}}\\)。 · \\(\\omega_f=\\dfrac{4.0(2.0)}{1.0}=8.0\\,\\mathrm{rad\\,s^{-1}}\\).",
          "\\(K_i=\\dfrac{1}{2}(4.0)(2.0)^{2}=8.0\\,\\mathrm{J}\\)，\\(K_f=\\dfrac{1}{2}(1.0)(8.0)^{2}=32\\,\\mathrm{J}\\)；动能增加来自肌肉做的内功。 · \\(K_i=\\dfrac{1}{2}(4.0)(2.0)^{2}=8.0\\,\\mathrm{J}\\) and \\(K_f=\\dfrac{1}{2}(1.0)(8.0)^{2}=32\\,\\mathrm{J}\\); the increase comes from internal work by the muscles."
        ],
        "solution": "\\(\\omega_f=8.0\\,\\mathrm{rad\\,s^{-1}}\\)，\\(K\\) 由 \\(8.0\\,\\mathrm{J}\\) 增至 \\(32\\,\\mathrm{J}\\)。\\(L\\) 守恒而 \\(K\\) 不守恒。 · \\(\\omega_f=8.0\\,\\mathrm{rad\\,s^{-1}}\\), and \\(K\\) increases from \\(8.0\\,\\mathrm{J}\\) to \\(32\\,\\mathrm{J}\\). \\(L\\) is conserved but \\(K\\) is not.",
        "solutionLatex": "\\omega_f=8.0\\,\\mathrm{rad\\,s^{-1}},\\;K_f=32\\,\\mathrm{J}"
      }
    ],
    "examTips": [
      "CED Unit 6：先选参考点或转轴，再写 \\(L\\) 与 \\(\\tau\\)；两者必须同轴。 · CED Unit 6: choose the reference point or axis first, then write \\(L\\) and \\(\\tau\\); they must share the same axis.",
      "遇到 \\(L\\)–\\(t\\) 图先读斜率：斜率 = 净力矩；水平线 = 角动量守恒。 · For an \\(L\\)–\\(t\\) graph, read the slope first: slope = net torque; a horizontal line = conserved angular momentum.",
      "遇到 \\(\\tau\\)–\\(t\\) 图先算面积，并按时间轴上下取正负；面积 = 角冲量 = \\(\\Delta L\\)。 · For a \\(\\tau\\)–\\(t\\) graph, compute the area and assign signs above and below the time axis; area = angular impulse = \\(\\Delta L\\).",
      "多体系统先判断“谁在系统内”：内力矩不改变总角动量，外力矩才会。 · For a multi-body system, first decide what is inside the system: internal torques do not change the total angular momentum, but external torques do.",
      "角动量守恒时用 \\(I_i\\omega_i=I_f\\omega_f\\)，但动能要单独计算，不要假设守恒。 · When angular momentum is conserved, use \\(I_i\\omega_i=I_f\\omega_f\\), but compute kinetic energy separately and do not assume it is conserved.",
      "单位检查：\\(L\\) 与 \\(J_{\\mathrm{ang}}\\) 都用 \\(\\mathrm{kg\\,m^{2}\\,s^{-1}}=\\mathrm{N\\,m\\,s}\\)。 · Unit check: both \\(L\\) and \\(J_{\\mathrm{ang}}\\) use \\(\\mathrm{kg\\,m^{2}\\,s^{-1}}=\\mathrm{N\\,m\\,s}\\)."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u5",
        "code": "5.3",
        "title": "转动动力学 · Rotational Dynamics and Energy",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.1",
        "title": "转动动能 · Rotational Kinetic Energy",
        "relation": "相关 · Related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.3",
        "title": "滚动 · Rolling",
        "relation": "相关 · Related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u4",
        "code": "4.1",
        "title": "冲量与动量 · Impulse and Momentum",
        "relation": "类比 · Analogy"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.6",
        "title": "万有引力 · Gravitation",
        "relation": "应用 · Application"
      }
    ],
    "modules": [
      {
        "id": "rigid-rotation",
        "title": "刚体转动与转动惯量 · Rigid Rotation and Rotational Inertia"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u6",
    "connections": [
      "先修：4.1 的冲量–动量定理 \\(\\int F\\,\\mathrm{d}t=\\Delta p\\) 与本节 \\(\\int\\tau\\,\\mathrm{d}t=\\Delta L\\) 完全平行。 · Prerequisite: the impulse–momentum theorem \\(\\int F\\,\\mathrm{d}t=\\Delta p\\) in 4.1 is exactly parallel to \\(\\int\\tau\\,\\mathrm{d}t=\\Delta L\\) here.",
      "相关：6.1 的转动动能 \\(K=\\dfrac{1}{2}I\\omega^{2}\\) 与 \\(L=I\\omega\\) 共同决定 \\(K=\\dfrac{L^{2}}{2I}\\)；\\(L\\) 守恒时 \\(K\\) 仍可变。 · Related: rotational kinetic energy \\(K=\\dfrac{1}{2}I\\omega^{2}\\) from 6.1 and \\(L=I\\omega\\) give \\(K=\\dfrac{L^{2}}{2I}\\); even with conserved \\(L\\), \\(K\\) can change.",
      "后续：6.4 卫星在中心力场中角动量守恒，对应开普勒第二定律。 · Follow-up: in 6.4 a satellite in a central force field conserves angular momentum, which is Kepler’s second law.",
      "跨单元：2.6 万有引力提供中心力，力矩为零，因此行星与卫星的角动量守恒。 · Cross-unit: gravitation in 2.6 provides a central force with zero torque, so planetary and satellite angular momenta are conserved."
    ],
    "intuitionDetailed": "读 \\(L\\)–\\(t\\) 图时先看切线斜率：正斜率表示正方向净力矩，负斜率表示反方向净力矩，水平线表示净外力矩为零、角动量守恒；斜率突变意味着出现了冲量式的短时大扭矩。读 \\(\\tau\\)–\\(t\\) 图时，把曲线与时间轴之间的面积按正负相加：轴上方为正角冲量，轴下方为负角冲量；若正负面积相等，净角冲量为零，角动量回到初值。选择系统决定哪些力矩算“外力矩”：只把转盘看作系统，轴对盘的摩擦力矩是外力矩，盘的角动量会变；把转盘、电机和地球一起看作系统，这些力矩变成内力矩，总角动量守恒。 · When reading an \\(L\\)–\\(t\\) graph, look at the tangent slope: a positive slope means net torque in the positive direction, a negative slope means the opposite, and a horizontal line means zero net external torque and conserved angular momentum; a sudden change in slope signals a brief, impulsive torque. When reading a \\(\\tau\\)–\\(t\\) graph, add the areas between the curve and the time axis with signs: above the axis is positive angular impulse and below is negative; if the positive and negative areas cancel, the net angular impulse is zero and the angular momentum returns to its initial value. The choice of system determines which torques count as external: if only the turntable is the system, the axle’s friction torque is external and the turntable’s angular momentum changes; if the turntable, motor, and Earth are included, those torques become internal and the total angular momentum is conserved.",
    "development": [
      "角动量的定义与方向：质点用 \\(\\vec L=\\vec r\\times\\vec p\\)，刚体定轴用 \\(L=I\\omega\\)。 · Definition and direction of angular momentum: \\(\\vec L=\\vec r\\times\\vec p\\) for a particle and \\(L=I\\omega\\) for a rigid body about a fixed axis.",
      "角动量定理与图像：由 \\(\\tau_{\\mathrm{net}}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}\\) 读出 \\(L\\)–\\(t\\) 图的斜率。 · Angular momentum theorem and graphs: read the slope of an \\(L\\)–\\(t\\) graph from \\(\\tau_{\\mathrm{net}}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}\\).",
      "角冲量与图像：由 \\(J_{\\mathrm{ang}}=\\int\\tau\\,\\mathrm{d}t\\) 读出 \\(\\tau\\)–\\(t\\) 图的面积，并用 \\(J_{\\mathrm{ang}}=\\Delta L\\) 求速度变化。 · Angular impulse and graphs: read the area under a \\(\\tau\\)–\\(t\\) graph from \\(J_{\\mathrm{ang}}=\\int\\tau\\,\\mathrm{d}t\\) and use \\(J_{\\mathrm{ang}}=\\Delta L\\) to find speed changes.",
      "系统角动量：把各组成部分关于同一轴的 \\(L_i\\) 相加，得到 \\(L_{\\mathrm{sys}}\\)。 · System angular momentum: add the \\(L_i\\) of the parts about the same axis to obtain \\(L_{\\mathrm{sys}}\\).",
      "系统选择与守恒：区分内力矩与外力矩，判断所选系统的 \\(L\\) 是否恒定。 · System selection and conservation: distinguish internal from external torques and decide whether the chosen system’s \\(L\\) is constant.",
      "变形系统：\\(I\\) 改变时用 \\(I_i\\omega_i=I_f\\omega_f\\)，并单独分析 \\(K\\) 的变化。 · Changing-shape systems: when \\(I\\) changes, use \\(I_i\\omega_i=I_f\\omega_f\\) and analyze the change in \\(K\\) separately."
    ],
    "checks": [
      "一条水平 \\(L\\)–\\(t\\) 线说明什么？一条倾斜直线呢？ · What does a horizontal \\(L\\)–\\(t\\) line mean? What about a straight line with nonzero slope?",
      "\\(\\tau\\)–\\(t\\) 图中时间轴上下面积相等，角动量如何变化？ · If the areas above and below the time axis on a \\(\\tau\\)–\\(t\\) graph are equal, how does the angular momentum change?",
      "为什么系统总角动量必须让各组成部分关于同一轴相加？ · Why must all parts of a system use the same axis when their angular momenta are added?",
      "把电机和地球纳入系统前后，转盘的角动量是否守恒？为什么？ · Is the turntable’s angular momentum conserved before and after including the motor and Earth in the system? Why?",
      "滑冰者收臂时 \\(L\\)、\\(\\omega\\)、\\(K\\) 各如何变化？ · When a skater pulls in the arms, how do \\(L\\), \\(\\omega\\), and \\(K\\) change?",
      "“角动量在所有相互作用中守恒”与“任意子系统的角动量不变”有什么区别？ · What is the difference between “angular momentum is conserved in all interactions” and “any subsystem’s angular momentum is constant”?"
    ],
    "vocabulary": [
      {
        "termZh": "角动量",
        "termEn": "angular momentum",
        "defZh": "描述物体或系统绕参考点或轴转动“动量”的矢量，质点 \\(\\vec L=\\vec r\\times\\vec p\\)，刚体定轴 \\(L=I\\omega\\)。",
        "defEn": "A vector describing the rotational “momentum” of an object or system about a point or axis: \\(\\vec L=\\vec r\\times\\vec p\\) for a particle and \\(L=I\\omega\\) for a rigid body about a fixed axis."
      },
      {
        "termZh": "角冲量",
        "termEn": "angular impulse",
        "defZh": "力矩对时间的累积 \\(J_{\\mathrm{ang}}=\\int\\tau\\,\\mathrm{d}t\\)，等于 \\(\\tau\\)–\\(t\\) 图曲线下的有符号面积。",
        "defEn": "The time accumulation of torque, \\(J_{\\mathrm{ang}}=\\int\\tau\\,\\mathrm{d}t\\); it equals the signed area under a \\(\\tau\\)–\\(t\\) graph."
      },
      {
        "termZh": "角冲量–动量定理",
        "termEn": "angular impulse–momentum theorem",
        "defZh": "角冲量等于角动量变化：\\(J_{\\mathrm{ang}}=\\Delta L=L_f-L_i\\)。",
        "defEn": "Angular impulse equals the change in angular momentum: \\(J_{\\mathrm{ang}}=\\Delta L=L_f-L_i\\)."
      },
      {
        "termZh": "力矩",
        "termEn": "torque",
        "defZh": "力使物体绕轴转动的作用，\\(\\vec\\tau=\\vec r\\times\\vec F\\)；净力矩是 \\(L\\)–\\(t\\) 图的斜率。",
        "defEn": "The turning effect of a force about an axis, \\(\\vec\\tau=\\vec r\\times\\vec F\\); net torque is the slope of an \\(L\\)–\\(t\\) graph."
      },
      {
        "termZh": "转动惯量",
        "termEn": "rotational inertia (moment of inertia)",
        "defZh": "质量相对转轴分布的度量 \\(I=\\sum m_ir_i^{2}\\)；刚体定轴角动量 \\(L=I\\omega\\)。",
        "defEn": "A measure of mass distribution about an axis, \\(I=\\sum m_ir_i^{2}\\); for a rigid body about a fixed axis, \\(L=I\\omega\\)."
      },
      {
        "termZh": "系统边界",
        "termEn": "system boundary",
        "defZh": "区分系统与环境的界线；跨越边界的力矩是外力矩，会改变系统角动量。",
        "defEn": "The boundary separating a system from its environment; torques crossing it are external and change the system’s angular momentum."
      },
      {
        "termZh": "外力矩",
        "termEn": "external torque",
        "defZh": "系统外部对系统施加的力矩；只有净外力矩能改变系统总角动量。",
        "defEn": "A torque exerted on a system by its surroundings; only the net external torque can change the system’s total angular momentum."
      },
      {
        "termZh": "角动量守恒",
        "termEn": "conservation of angular momentum",
        "defZh": "所选系统净外力矩为零时，系统总角动量保持不变；非刚体可用 \\(I_i\\omega_i=I_f\\omega_f\\)。",
        "defEn": "When the net external torque on a chosen system is zero, its total angular momentum is constant; for a nonrigid system, \\(I_i\\omega_i=I_f\\omega_f\\)."
      }
    ]
  },
  "6.3": {
    "id": "mech/mech-u6/6.3",
    "subject": "mech",
    "chapterId": "mech-u6",
    "unitCode": "6",
    "unitTitleZh": "转动系统的能量与动量",
    "unitTitleEn": "Energy and Momentum of Rotating Systems",
    "code": "6.3",
    "titleZh": "滚动",
    "titleEn": "Rolling",
    "layer": "ap",
    "summary": "滚动 · Rolling",
    "learningObjectives": [
      "能陈述「滚动」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Rolling：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "滚动（Rolling）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「滚动」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "v_{\\mathrm{cm}}=R\\omega",
        "note": "纯滚动条件。"
      },
      {
        "latex": "K=\\dfrac{1}{2}Mv_{\\mathrm{cm}}^{2}+\\dfrac{1}{2}I_{\\mathrm{cm}}\\omega^{2}",
        "note": "滚动体的总动能。"
      },
      {
        "latex": "a_{\\mathrm{cm}}=R\\alpha",
        "note": "纯滚动的加速度关系。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「滚动」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "纯滚动（无滑动）时成立；静摩擦不做功",
      "R 为半径；I_cm 相对质心轴",
      "有滑动时用动摩擦，v_cm≠Rω"
    ],
    "keyPoints": [
      "掌握 6.3「滚动」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「滚动」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「滚动」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "v_{\\mathrm{cm}}=R\\omega"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「滚动」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「滚动」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「滚动」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.2",
        "title": "角动量",
        "relation": "prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.4",
        "title": "轨道",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "rigid-rotation",
        "title": "刚体转动与转动惯量"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「滚动」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「滚动」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「滚动」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "6.4": {
    "id": "mech/mech-u6/6.4",
    "subject": "mech",
    "chapterId": "mech-u6",
    "unitCode": "6",
    "unitTitleZh": "转动系统的能量与动量",
    "unitTitleEn": "Energy and Momentum of Rotating Systems",
    "code": "6.4",
    "titleZh": "轨道",
    "titleEn": "Orbits",
    "layer": "ap",
    "summary": "卫星轨道受守恒定律约束：圆轨道中总机械能、引力势能、动能与角动量各自恒定；椭圆轨道中总机械能与角动量恒定，而势能与动能相互转化；引力势能以无穷远为零，逃逸对应总机械能为零。 · Satellite motion is constrained by conservation laws: in a circular orbit the total mechanical energy, gravitational potential energy, kinetic energy, and angular momentum are each constant; in an elliptical orbit the total mechanical energy and angular momentum are constant while potential and kinetic energy exchange; gravitational potential energy is zero at infinity, and escape corresponds to zero total mechanical energy.",
    "learningObjectives": [
      "能由“引力提供向心力”求圆轨道速度与周期，并说明 \\(E\\)、\\(U\\)、\\(K\\)、\\(L\\) 各自恒定。 · Derive circular-orbit speed and period from “gravity provides the centripetal force,” and explain that \\(E\\), \\(U\\), \\(K\\), and \\(L\\) are each constant.",
      "能说明椭圆轨道中 \\(E\\) 与 \\(L\\) 恒定，而 \\(U\\) 与 \\(K\\) 随位置改变、总和不变。 · Explain that in an elliptical orbit \\(E\\) and \\(L\\) are constant while \\(U\\) and \\(K\\) vary with position and their sum stays constant.",
      "能用近地点与远地点比较速度、动能与势能，并用 \\(r_pv_p=r_av_a\\) 求速率比。 · Compare speed, kinetic energy, and potential energy at periapsis and apoapsis, and use \\(r_pv_p=r_av_a\\) to find the speed ratio.",
      "能说明引力势能以无穷远为零，\\(U_g=-G\\dfrac{m_1m_2}{r}\\)，并正确判断其符号与变化。 · Explain that gravitational potential energy is zero at infinity, \\(U_g=-G\\dfrac{m_1m_2}{r}\\), and correctly interpret its sign and changes.",
      "能由机械能为零导出逃逸速度，并与同半径圆轨道速度比较。 · Derive escape speed from zero mechanical energy and compare it with the circular-orbit speed at the same radius.",
      "能用 \\(K\\)、\\(U\\)、\\(L\\) 的对照分析同一近地点处的圆轨道与椭圆轨道。 · Use \\(K\\), \\(U\\), and \\(L\\) comparisons to analyze a circular and an elliptical orbit that share the same periapsis."
    ],
    "essentialKnowledge": [
      "圆轨道由引力提供向心力：\\(\\dfrac{GMm}{r^{2}}=\\dfrac{mv^{2}}{r}\\)，故 \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r}}\\)，周期 \\(T=2\\pi\\sqrt{\\dfrac{r^{3}}{GM}}\\)。 · In a circular orbit gravity provides the centripetal force: \\(\\dfrac{GMm}{r^{2}}=\\dfrac{mv^{2}}{r}\\), so \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r}}\\) and \\(T=2\\pi\\sqrt{\\dfrac{r^{3}}{GM}}\\).",
      "圆轨道中 \\(r\\) 与速率都不变，因此动能 \\(K=\\dfrac{GMm}{2r}\\)、势能 \\(U=-\\dfrac{GMm}{r}\\)、总机械能 \\(E=K+U=-\\dfrac{GMm}{2r}\\) 以及角动量 \\(L=mvr=m\\sqrt{GMr}\\) 都各自恒定（不只是总和恒定）。 · In a circular orbit both \\(r\\) and the speed are constant, so the kinetic energy \\(K=\\dfrac{GMm}{2r}\\), potential energy \\(U=-\\dfrac{GMm}{r}\\), total mechanical energy \\(E=K+U=-\\dfrac{GMm}{2r}\\), and angular momentum \\(L=mvr=m\\sqrt{GMr}\\) are each constant, not merely their sum.",
      "圆轨道能量关系：\\(K=-\\dfrac{1}{2}U\\)，\\(E=\\dfrac{1}{2}U=-K\\)。势能是负的，且 \\(|U|=2K\\)。 · Circular-orbit energy relations: \\(K=-\\dfrac{1}{2}U\\) and \\(E=\\dfrac{1}{2}U=-K\\). The potential energy is negative and \\(|U|=2K\\).",
      "椭圆轨道中总机械能 \\(E=-\\dfrac{GMm}{2a}\\) 与角动量 \\(L\\) 恒定；引力势能 \\(U\\) 与动能 \\(K\\) 可以各自改变，但 \\(K+U=E\\) 保持不变。 · In an elliptical orbit the total mechanical energy \\(E=-\\dfrac{GMm}{2a}\\) and the angular momentum \\(L\\) are constant; gravitational potential energy \\(U\\) and kinetic energy \\(K\\) can each change, but \\(K+U=E\\) remains constant.",
      "椭圆轨道近地点 \\(r_p\\) 处 \\(U\\) 最小（最负）、\\(K\\) 与速率最大；远地点 \\(r_a\\) 处 \\(U\\) 最大（最接近零）、\\(K\\) 与速率最小。角动量守恒给出 \\(r_pv_p=r_av_a\\)（两处速度均垂直于位矢）。 · At periapsis \\(r_p\\), \\(U\\) is minimum (most negative) and \\(K\\) and speed are maximum; at apoapsis \\(r_a\\), \\(U\\) is maximum (closest to zero) and \\(K\\) and speed are minimum. Conservation of angular momentum gives \\(r_pv_p=r_av_a\\), because the velocity is perpendicular to the radius at both points.",
      "引力势能属于卫星与中心天体组成的系统，取无穷远为零：\\(U_g=-G\\dfrac{m_1m_2}{r}\\)。有限距离处 \\(U_g<0\\)；\\(r\\) 增大时 \\(U_g\\) 增大并趋近于零。 · Gravitational potential energy belongs to the satellite–central-body system and is zero at infinity: \\(U_g=-G\\dfrac{m_1m_2}{r}\\). At finite distance \\(U_g<0\\); as \\(r\\) increases, \\(U_g\\) increases toward zero.",
      "角动量守恒的根源是引力为有心力：力沿位矢方向，\\(\\vec\\tau=\\vec r\\times\\vec F=0\\)。因此卫星的角动量方向（轨道平面）与大小都恒定，开普勒第二定律（等面积）是其几何表现。 · Angular momentum is conserved because gravity is a central force: the force is along the radial direction, so \\(\\vec\\tau=\\vec r\\times\\vec F=0\\). The satellite’s angular momentum direction (the orbital plane) and magnitude are therefore constant; Kepler’s second law (equal areas) is its geometric expression.",
      "轨道类型由总机械能符号决定：\\(E<0\\) 为束缚轨道（圆或椭圆），\\(E=0\\) 为抛物线逃逸，\\(E>0\\) 为双曲线非束缚轨道。总能量只由半长轴决定：\\(E=-\\dfrac{GMm}{2a}\\)。 · The orbit type is set by the sign of the total mechanical energy: \\(E<0\\) is a bound orbit (circle or ellipse), \\(E=0\\) is parabolic escape, and \\(E>0\\) is an unbound hyperbolic orbit. The total energy depends only on the semimajor axis: \\(E=-\\dfrac{GMm}{2a}\\).",
      "逃逸速度由 \\(E=0\\) 导出：\\(\\dfrac{1}{2}mv_{\\mathrm{esc}}^{2}-\\dfrac{GMm}{r}=0\\)，故 \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}=\\sqrt{2}\\,v_{\\mathrm{circ}}\\)。它与卫星质量无关。 · Escape speed follows from \\(E=0\\): \\(\\dfrac{1}{2}mv_{\\mathrm{esc}}^{2}-\\dfrac{GMm}{r}=0\\), so \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}=\\sqrt{2}\\,v_{\\mathrm{circ}}\\). It is independent of the satellite’s mass.",
      "同一近地点处，椭圆轨道的近地点速率大于该半径的圆轨道速率，因此椭圆轨道具有更大的角动量和更大的（较不负的）总机械能；它仍被束缚，因为 \\(E<0\\)。 · At the same periapsis, an elliptical orbit has a greater periapsis speed than the circular orbit at that radius, so it has larger angular momentum and larger (less negative) total mechanical energy; it remains bound because \\(E<0\\)."
    ],
    "definition": "卫星轨道是卫星在中心天体引力作用下的运动轨迹。圆轨道由引力提供向心力：\\(\\dfrac{GMm}{r^{2}}=\\dfrac{mv^{2}}{r}\\)，故 \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r}}\\)，\\(T=2\\pi\\sqrt{\\dfrac{r^{3}}{GM}}\\)。圆轨道中 \\(E\\)、\\(U\\)、\\(K\\)、\\(L\\) 各自恒定；椭圆轨道中 \\(E\\) 与 \\(L\\) 恒定，\\(U\\) 与 \\(K\\) 相互转化。引力势能取无穷远为零：\\(U_g=-G\\dfrac{m_1m_2}{r}\\)。总机械能 \\(E=-\\dfrac{GMm}{2a}\\)（\\(a\\) 为半长轴，圆轨道 \\(a=r\\)），逃逸对应 \\(E=0\\)。 · A satellite orbit is the path of a satellite under the gravitational attraction of a central body. In a circular orbit gravity provides the centripetal force: \\(\\dfrac{GMm}{r^{2}}=\\dfrac{mv^{2}}{r}\\), so \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r}}\\) and \\(T=2\\pi\\sqrt{\\dfrac{r^{3}}{GM}}\\). In a circular orbit \\(E\\), \\(U\\), \\(K\\), and \\(L\\) are each constant; in an elliptical orbit \\(E\\) and \\(L\\) are constant while \\(U\\) and \\(K\\) exchange. Gravitational potential energy is zero at infinity: \\(U_g=-G\\dfrac{m_1m_2}{r}\\). The total mechanical energy is \\(E=-\\dfrac{GMm}{2a}\\) (\\(a\\) is the semimajor axis; for a circle \\(a=r\\)), and escape corresponds to \\(E=0\\).",
    "intuition": "圆轨道像匀速转圈的滑冰者：半径不变、速率不变，\\(K\\)、\\(U\\)、\\(L\\) 都不需要“交换”。椭圆轨道像过山车：近地点低而快、远地点高而慢，\\(K\\) 与 \\(U\\) 互相转化，但总和与角动量不变。 · A circular orbit is like a skater tracing a circle at constant speed: the radius and speed do not change, so \\(K\\), \\(U\\), and \\(L\\) need no “exchange.” An elliptical orbit is like a roller coaster: it is low and fast at periapsis and high and slow at apoapsis; \\(K\\) and \\(U\\) exchange, but their sum and the angular momentum stay constant.",
    "formulas": [
      {
        "latex": "U_g=-G\\dfrac{m_1m_2}{r}",
        "note": "引力势能；取无穷远为零。 · Gravitational potential energy; zero at infinity."
      },
      {
        "latex": "v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r}}",
        "note": "圆轨道速度；与卫星质量无关。 · Circular-orbit speed; independent of the satellite’s mass."
      },
      {
        "latex": "T=2\\pi\\sqrt{\\dfrac{r^{3}}{GM}}",
        "note": "圆轨道周期（开普勒第三定律）。 · Circular-orbit period (Kepler’s third law)."
      },
      {
        "latex": "K_{\\mathrm{circ}}=\\dfrac{GMm}{2r}",
        "note": "圆轨道动能；等于 \\(-\\dfrac{1}{2}U\\)。 · Circular-orbit kinetic energy; equal to \\(-\\dfrac{1}{2}U\\)."
      },
      {
        "latex": "E=-\\dfrac{GMm}{2a}=-\\dfrac{GMm}{2r}\\;(\\text{circle})",
        "note": "轨道总机械能；圆轨道 \\(a=r\\)。 · Total orbital mechanical energy; for a circle \\(a=r\\)."
      },
      {
        "latex": "L=mvr\\sin\\theta=m\\sqrt{GMr}\\;(\\text{circle})",
        "note": "轨道角动量；有心力下守恒。 · Orbital angular momentum; conserved under a central force."
      },
      {
        "latex": "r_pv_p=r_av_a",
        "note": "近地点与远地点速率关系，由角动量守恒得出。 · Periapsis–apoapsis speed relation from conservation of angular momentum."
      },
      {
        "latex": "v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}=\\sqrt{2}\\,v_{\\mathrm{circ}}",
        "note": "逃逸速度；对应总机械能为零。 · Escape speed; corresponds to zero total mechanical energy."
      }
    ],
    "derivationNotes": [
      {
        "from": "牛顿万有引力",
        "to": "圆轨道速度",
        "note": "令 \\(\\dfrac{GMm}{r^{2}}=\\dfrac{mv^{2}}{r}\\)，得 \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r}}\\)；卫星质量 \\(m\\) 约去。 · Set \\(\\dfrac{GMm}{r^{2}}=\\dfrac{mv^{2}}{r}\\) to obtain \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r}}\\); the satellite mass \\(m\\) cancels."
      },
      {
        "from": "圆轨道速度",
        "to": "周期与角动量",
        "note": "即：\\(T=\\dfrac{2\\pi r}{v}=2\\pi\\sqrt{\\dfrac{r^{3}}{GM}}\\)，\\(L=mvr=m\\sqrt{GMr}\\)。 · \\(T=\\dfrac{2\\pi r}{v}=2\\pi\\sqrt{\\dfrac{r^{3}}{GM}}\\) and \\(L=mvr=m\\sqrt{GMr}\\)."
      },
      {
        "from": "圆轨道速度",
        "to": "能量分配",
        "note": "\\(K=\\dfrac{1}{2}mv^{2}=\\dfrac{GMm}{2r}\\)，\\(U=-\\dfrac{GMm}{r}\\)，故 \\(E=-\\dfrac{GMm}{2r}\\)，且 \\(K=-\\dfrac{1}{2}U\\)。 · \\(K=\\dfrac{1}{2}mv^{2}=\\dfrac{GMm}{2r}\\), \\(U=-\\dfrac{GMm}{r}\\), so \\(E=-\\dfrac{GMm}{2r}\\) and \\(K=-\\dfrac{1}{2}U\\)."
      },
      {
        "from": "机械能守恒与角动量守恒",
        "to": "椭圆轨道的近远地点",
        "note": "近地点与远地点速度都垂直于位矢，\\(L=mr_pv_p=mr_av_a\\)；能量守恒给出 \\(\\dfrac{1}{2}v_p^{2}-\\dfrac{GM}{r_p}=\\dfrac{1}{2}v_a^{2}-\\dfrac{GM}{r_a}\\)，联立可求两处速率。 · At periapsis and apoapsis the velocity is perpendicular to the radius, so \\(L=mr_pv_p=mr_av_a\\); energy conservation gives \\(\\dfrac{1}{2}v_p^{2}-\\dfrac{GM}{r_p}=\\dfrac{1}{2}v_a^{2}-\\dfrac{GM}{r_a}\\), and the two equations determine the speeds."
      },
      {
        "from": "机械能守恒",
        "to": "逃逸速度",
        "note": "令无穷远处动能为零、势能为零，\\(\\dfrac{1}{2}mv_{\\mathrm{esc}}^{2}-\\dfrac{GMm}{r}=0\\)，得 \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)。 · Set the kinetic and potential energy at infinity to zero: \\(\\dfrac{1}{2}mv_{\\mathrm{esc}}^{2}-\\dfrac{GMm}{r}=0\\), giving \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)."
      }
    ],
    "conditions": [
      "中心天体质量远大于卫星，可视为固定；\\(r\\) 从中心天体质心算起，不是离地高度。 · The central body is much more massive than the satellite and can be treated as fixed; \\(r\\) is measured from the central body’s center of mass, not from its surface.",
      "圆轨道要求速度方向垂直于位矢，速率恰好等于 \\(v_{\\mathrm{circ}}\\)；速度偏大或偏小会得到椭圆轨道。 · A circular orbit requires the velocity to be perpendicular to the radius with speed exactly \\(v_{\\mathrm{circ}}\\); a larger or smaller speed gives an elliptical orbit.",
      "忽略大气阻力、其他天体摄动与非球形引力；这些效应会使轨道能量与角动量缓慢改变。 · Atmospheric drag, perturbations from other bodies, and non-spherical gravity are neglected; these effects slowly change orbital energy and angular momentum.",
      "引力势能取无穷远为零；有限距离处 \\(U_g<0\\)，这是束缚轨道的能量基准。 · Gravitational potential energy is zero at infinity; at finite distance \\(U_g<0\\), which sets the energy baseline for bound orbits.",
      "束缚轨道 \\(E<0\\)；逃逸 \\(E=0\\)；非束缚 \\(E>0\\)。圆轨道与椭圆轨道都属于 \\(E<0\\)。 · Bound orbits have \\(E<0\\), escape has \\(E=0\\), and unbound orbits have \\(E>0\\). Circular and elliptical orbits are both bound, with \\(E<0\\).",
      "角动量守恒要求取中心天体为参考点；引力沿位矢，力矩为零。 · Conservation of angular momentum requires the central body as the reference point; gravity is radial, so its torque is zero."
    ],
    "keyPoints": [
      "圆轨道：\\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r}}\\)，\\(T=2\\pi\\sqrt{\\dfrac{r^{3}}{GM}}\\)，速率与卫星质量无关。 · Circular orbit: \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r}}\\) and \\(T=2\\pi\\sqrt{\\dfrac{r^{3}}{GM}}\\); the speed is independent of the satellite’s mass.",
      "圆轨道中 \\(E\\)、\\(U\\)、\\(K\\)、\\(L\\) 各自恒定：\\(K=\\dfrac{GMm}{2r}\\)，\\(U=-\\dfrac{GMm}{r}\\)，\\(E=-\\dfrac{GMm}{2r}\\)，\\(L=m\\sqrt{GMr}\\)。 · In a circular orbit \\(E\\), \\(U\\), \\(K\\), and \\(L\\) are each constant: \\(K=\\dfrac{GMm}{2r}\\), \\(U=-\\dfrac{GMm}{r}\\), \\(E=-\\dfrac{GMm}{2r}\\), and \\(L=m\\sqrt{GMr}\\).",
      "椭圆轨道中 \\(E\\) 与 \\(L\\) 恒定，\\(U\\) 与 \\(K\\) 相互转化。 · In an elliptical orbit \\(E\\) and \\(L\\) are constant while \\(U\\) and \\(K\\) exchange.",
      "近地点速率最大、远地点速率最小；\\(r_pv_p=r_av_a\\)。 · Speed is greatest at periapsis and least at apoapsis; \\(r_pv_p=r_av_a\\).",
      "引力势能以无穷远为零，\\(U_g=-G\\dfrac{m_1m_2}{r}\\)，有限距离处为负。 · Gravitational potential energy is zero at infinity, \\(U_g=-G\\dfrac{m_1m_2}{r}\\), and negative at finite distance.",
      "总机械能 \\(E=-\\dfrac{GMm}{2a}\\) 只由半长轴决定；圆轨道 \\(a=r\\)。 · Total mechanical energy \\(E=-\\dfrac{GMm}{2a}\\) depends only on the semimajor axis; for a circle \\(a=r\\).",
      "逃逸对应 \\(E=0\\)，\\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}=\\sqrt{2}\\,v_{\\mathrm{circ}}\\)。 · Escape corresponds to \\(E=0\\), with \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}=\\sqrt{2}\\,v_{\\mathrm{circ}}\\).",
      "同一近地点处，椭圆轨道比圆轨道更快、角动量更大、总能量更不负；但仍 \\(E<0\\)。 · At the same periapsis, an elliptical orbit is faster, has larger angular momentum, and has less negative total energy than the circular orbit, yet still has \\(E<0\\)."
    ],
    "misconceptions": [
      "认为轨道越高，卫星速度越大。纠正：圆轨道 \\(v\\propto\\dfrac{1}{\\sqrt{r}}\\)，轨道越高速度越小、周期越大。 · Thinking a higher orbit means a faster satellite. Correction: for circular orbits \\(v\\propto\\dfrac{1}{\\sqrt{r}}\\), so higher orbits are slower and have longer periods.",
      "认为卫星“失重”是因为没有重力。纠正：卫星仍受引力，只是与卫星一起自由下落，视重为零。 · Thinking a satellite is weightless because gravity is absent. Correction: gravity still acts; the satellite and its contents are in free fall, so apparent weight is zero.",
      "认为椭圆轨道中速率改变所以角动量改变。纠正：\\(L=mvr\\sin\\theta\\) 恒定，近地点 \\(r\\) 小则 \\(v\\) 大；速度方向改变但角动量不变。 · Thinking the changing speed in an ellipse means changing angular momentum. Correction: \\(L=mvr\\sin\\theta\\) is constant; smaller \\(r\\) at periapsis means larger \\(v\\), even though the velocity direction changes.",
      "认为椭圆轨道中动能或势能恒定。纠正：只有 \\(E\\) 与 \\(L\\) 恒定，\\(K\\) 与 \\(U\\) 各自改变而总和不变。 · Thinking kinetic or potential energy is constant in an ellipse. Correction: only \\(E\\) and \\(L\\) are constant; \\(K\\) and \\(U\\) each vary while their sum stays fixed.",
      "认为引力势能在有限距离处为正，或把无穷远取为零后仍写 \\(U=+\\dfrac{GMm}{r}\\)。纠正：束缚轨道 \\(U_g<0\\)。 · Thinking gravitational potential energy is positive at finite distance, or writing \\(U=+\\dfrac{GMm}{r}\\) after choosing zero at infinity. Correction: bound orbits have \\(U_g<0\\).",
      "认为逃逸速度是“到达无穷远后仍保留的速度”。纠正：逃逸对应到达无穷远时速度恰好为零，\\(E=0\\)。 · Thinking escape speed is the speed retained after reaching infinity. Correction: escape corresponds to reaching infinity with zero speed, so \\(E=0\\).",
      "把 \\(r\\) 当作离地高度而不是到中心天体球心的距离。 · Treating \\(r\\) as altitude above the surface rather than distance from the central body’s center.",
      "认为圆轨道只要求总能量恒定，不需要 \\(K\\)、\\(U\\)、\\(L\\) 各自恒定。纠正：圆轨道半径与速率都不变，四项分别恒定。 · Thinking a circular orbit only requires constant total energy, not constant \\(K\\), \\(U\\), and \\(L\\). Correction: the radius and speed are both constant, so all four quantities are separately constant."
    ],
    "examples": [
      {
        "title": "例 1 · 圆轨道能量与角动量清单 · Example 1: Energy and angular-momentum inventory for a circular orbit",
        "prompt": "质量 \\(500\\,\\mathrm{kg}\\) 的卫星在半径 \\(7.0\\times10^{6}\\,\\mathrm{m}\\) 的圆轨道上绕地球运行，取 \\(GM=3.99\\times10^{14}\\,\\mathrm{m^{3}\\,s^{-2}}\\)。求速率、动能、势能、总机械能与角动量，并说明哪些量恒定。 · A \\(500\\,\\mathrm{kg}\\) satellite orbits Earth in a circular orbit of radius \\(7.0\\times10^{6}\\,\\mathrm{m}\\). Take \\(GM=3.99\\times10^{14}\\,\\mathrm{m^{3}\\,s^{-2}}\\). Find its speed, kinetic energy, potential energy, total mechanical energy, and angular momentum, and state which quantities are constant.",
        "steps": [
          "即：\\(v=\\sqrt{\\dfrac{GM}{r}}=\\sqrt{\\dfrac{3.99\\times10^{14}}{7.0\\times10^{6}}}\\approx7.6\\times10^{3}\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v=\\sqrt{\\dfrac{GM}{r}}=\\sqrt{\\dfrac{3.99\\times10^{14}}{7.0\\times10^{6}}}\\approx7.6\\times10^{3}\\,\\mathrm{m\\,s^{-1}}\\).",
          "即：\\(K=\\dfrac{1}{2}mv^{2}\\approx\\dfrac{1}{2}(500)(7.6\\times10^{3})^{2}\\approx1.4\\times10^{10}\\,\\mathrm{J}\\)；\\(U=-\\dfrac{GMm}{r}\\approx-2.9\\times10^{10}\\,\\mathrm{J}\\)。 · \\(K=\\dfrac{1}{2}mv^{2}\\approx\\dfrac{1}{2}(500)(7.6\\times10^{3})^{2}\\approx1.4\\times10^{10}\\,\\mathrm{J}\\); \\(U=-\\dfrac{GMm}{r}\\approx-2.9\\times10^{10}\\,\\mathrm{J}\\).",
          "\\(E=K+U\\approx-1.4\\times10^{10}\\,\\mathrm{J}\\)，与 \\(-\\dfrac{GMm}{2r}\\) 一致；\\(K=-E\\)。 · \\(E=K+U\\approx-1.4\\times10^{10}\\,\\mathrm{J}\\), matching \\(-\\dfrac{GMm}{2r}\\); \\(K=-E\\).",
          "即：\\(L=mvr\\approx(500)(7.6\\times10^{3})(7.0\\times10^{6})\\approx2.7\\times10^{13}\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)。 · \\(L=mvr\\approx(500)(7.6\\times10^{3})(7.0\\times10^{6})\\approx2.7\\times10^{13}\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)."
        ],
        "solution": "\\(v\\approx7.6\\,\\mathrm{km\\,s^{-1}}\\)，\\(K\\approx1.4\\times10^{10}\\,\\mathrm{J}\\)，\\(U\\approx-2.9\\times10^{10}\\,\\mathrm{J}\\)，\\(E\\approx-1.4\\times10^{10}\\,\\mathrm{J}\\)，\\(L\\approx2.7\\times10^{13}\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\)。圆轨道中这五个量都恒定。 · \\(v\\approx7.6\\,\\mathrm{km\\,s^{-1}}\\), \\(K\\approx1.4\\times10^{10}\\,\\mathrm{J}\\), \\(U\\approx-2.9\\times10^{10}\\,\\mathrm{J}\\), \\(E\\approx-1.4\\times10^{10}\\,\\mathrm{J}\\), and \\(L\\approx2.7\\times10^{13}\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}\\). All five quantities are constant in a circular orbit.",
        "solutionLatex": "E\\approx-1.4\\times10^{10}\\,\\mathrm{J},\\;L\\approx2.7\\times10^{13}\\,\\mathrm{kg\\,m^{2}\\,s^{-1}}"
      },
      {
        "title": "例 2 · 椭圆轨道近远地点 · Example 2: Periapsis and apoapsis of an elliptical orbit",
        "prompt": "同一卫星进入椭圆轨道，近地点 \\(r_p=7.0\\times10^{6}\\,\\mathrm{m}\\)，远地点 \\(r_a=1.4\\times10^{7}\\,\\mathrm{m}\\)。求半长轴、总机械能、两处速率，并验证角动量守恒。 · The same satellite enters an elliptical orbit with periapsis \\(r_p=7.0\\times10^{6}\\,\\mathrm{m}\\) and apoapsis \\(r_a=1.4\\times10^{7}\\,\\mathrm{m}\\). Find the semimajor axis, total mechanical energy, and speeds at both points, and verify conservation of angular momentum.",
        "steps": [
          "即：\\(a=\\dfrac{r_p+r_a}{2}=1.05\\times10^{7}\\,\\mathrm{m}\\)，\\(E=-\\dfrac{GMm}{2a}\\approx-9.5\\times10^{9}\\,\\mathrm{J}\\)。 · \\(a=\\dfrac{r_p+r_a}{2}=1.05\\times10^{7}\\,\\mathrm{m}\\) and \\(E=-\\dfrac{GMm}{2a}\\approx-9.5\\times10^{9}\\,\\mathrm{J}\\).",
          "近地点：\\(U_p=-\\dfrac{GMm}{r_p}\\approx-2.85\\times10^{10}\\,\\mathrm{J}\\)，\\(K_p=E-U_p\\approx1.90\\times10^{10}\\,\\mathrm{J}\\)，\\(v_p=\\sqrt{\\dfrac{2K_p}{m}}\\approx8.7\\times10^{3}\\,\\mathrm{m\\,s^{-1}}\\)。 · At periapsis: \\(U_p=-\\dfrac{GMm}{r_p}\\approx-2.85\\times10^{10}\\,\\mathrm{J}\\), \\(K_p=E-U_p\\approx1.90\\times10^{10}\\,\\mathrm{J}\\), and \\(v_p=\\sqrt{\\dfrac{2K_p}{m}}\\approx8.7\\times10^{3}\\,\\mathrm{m\\,s^{-1}}\\).",
          "远地点：\\(U_a\\approx-1.425\\times10^{10}\\,\\mathrm{J}\\)，\\(K_a=E-U_a\\approx4.75\\times10^{9}\\,\\mathrm{J}\\)，\\(v_a\\approx4.4\\times10^{3}\\,\\mathrm{m\\,s^{-1}}\\)。 · At apoapsis: \\(U_a\\approx-1.425\\times10^{10}\\,\\mathrm{J}\\), \\(K_a=E-U_a\\approx4.75\\times10^{9}\\,\\mathrm{J}\\), and \\(v_a\\approx4.4\\times10^{3}\\,\\mathrm{m\\,s^{-1}}\\).",
          "验证：\\(r_pv_p\\approx(7.0\\times10^{6})(8.7\\times10^{3})\\approx6.1\\times10^{10}\\)，\\(r_av_a\\approx(1.4\\times10^{7})(4.4\\times10^{3})\\approx6.1\\times10^{10}\\)，两者相等。 · Check: \\(r_pv_p\\approx(7.0\\times10^{6})(8.7\\times10^{3})\\approx6.1\\times10^{10}\\) and \\(r_av_a\\approx(1.4\\times10^{7})(4.4\\times10^{3})\\approx6.1\\times10^{10}\\), which agree."
        ],
        "solution": "\\(E\\approx-9.5\\times10^{9}\\,\\mathrm{J}\\)；\\(v_p\\approx8.7\\,\\mathrm{km\\,s^{-1}}\\)，\\(v_a\\approx4.4\\,\\mathrm{km\\,s^{-1}}\\)。近地点 \\(K\\) 最大、\\(U\\) 最负；远地点相反，但 \\(K+U\\) 与 \\(L\\) 恒定。 · \\(E\\approx-9.5\\times10^{9}\\,\\mathrm{J}\\); \\(v_p\\approx8.7\\,\\mathrm{km\\,s^{-1}}\\) and \\(v_a\\approx4.4\\,\\mathrm{km\\,s^{-1}}\\). At periapsis \\(K\\) is maximum and \\(U\\) is most negative; at apoapsis the reverse holds, but \\(K+U\\) and \\(L\\) are constant.",
        "solutionLatex": "v_p\\approx8.7\\times10^{3}\\,\\mathrm{m\\,s^{-1}},\\;v_a\\approx4.4\\times10^{3}\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 3 · 地球同步轨道 · Example 3: Geosynchronous orbit",
        "prompt": "地球同步卫星的周期为 \\(24\\,\\mathrm{h}\\)。取 \\(GM=3.99\\times10^{14}\\,\\mathrm{m^{3}\\,s^{-2}}\\)，估算其轨道半径，并与地球半径 \\(6.37\\times10^{6}\\,\\mathrm{m}\\) 比较。 · A geosynchronous satellite has a period of \\(24\\,\\mathrm{h}\\). Take \\(GM=3.99\\times10^{14}\\,\\mathrm{m^{3}\\,s^{-2}}\\), estimate its orbital radius, and compare it with Earth’s radius of \\(6.37\\times10^{6}\\,\\mathrm{m}\\).",
        "steps": [
          "由 \\(T^{2}=\\dfrac{4\\pi^{2}r^{3}}{GM}\\) 得 \\(r^{3}=\\dfrac{GMT^{2}}{4\\pi^{2}}\\)。 · From \\(T^{2}=\\dfrac{4\\pi^{2}r^{3}}{GM}\\), \\(r^{3}=\\dfrac{GMT^{2}}{4\\pi^{2}}\\).",
          "\\(T=8.64\\times10^{4}\\,\\mathrm{s}\\)，代入得 \\(r^{3}\\approx7.5\\times10^{22}\\,\\mathrm{m^{3}}\\)。 · With \\(T=8.64\\times10^{4}\\,\\mathrm{s}\\), \\(r^{3}\\approx7.5\\times10^{22}\\,\\mathrm{m^{3}}\\).",
          "\\(r\\approx4.2\\times10^{7}\\,\\mathrm{m}\\)，约为地球半径的 \\(6.6\\) 倍。 · \\(r\\approx4.2\\times10^{7}\\,\\mathrm{m}\\), about \\(6.6\\) Earth radii."
        ],
        "solution": "\\(r\\approx4.2\\times10^{7}\\,\\mathrm{m}\\)。同步卫星必须在该半径的赤道上空，周期才与地球自转相同。 · \\(r\\approx4.2\\times10^{7}\\,\\mathrm{m}\\). A geosynchronous satellite must orbit above the equator at this radius so its period matches Earth’s rotation.",
        "solutionLatex": "r\\approx4.2\\times10^{7}\\,\\mathrm{m}"
      },
      {
        "title": "例 4 · 无穷远为零的势能 · Example 4: Potential energy zero at infinity",
        "prompt": "解释为什么 \\(U_g=-G\\dfrac{m_1m_2}{r}\\) 在有限距离处为负，并说明卫星从 \\(r_1\\) 移到更大 \\(r_2\\) 时 \\(U_g\\)、\\(K\\) 与 \\(E\\) 如何变化。 · Explain why \\(U_g=-G\\dfrac{m_1m_2}{r}\\) is negative at finite distance, and describe how \\(U_g\\), \\(K\\), and \\(E\\) change when a satellite moves from \\(r_1\\) to a larger \\(r_2\\).",
        "steps": [
          "取无穷远为零：把卫星从 \\(r\\) 移到无穷远，引力做负功，势能增加 \\(G\\dfrac{m_1m_2}{r}\\)，故 \\(U_g(\\infty)-U_g(r)=G\\dfrac{m_1m_2}{r}\\)。 · With zero at infinity: moving the satellite from \\(r\\) to infinity requires negative work by gravity and increases potential energy by \\(G\\dfrac{m_1m_2}{r}\\), so \\(U_g(\\infty)-U_g(r)=G\\dfrac{m_1m_2}{r}\\).",
          "由 \\(U_g(\\infty)=0\\) 得 \\(U_g(r)=-G\\dfrac{m_1m_2}{r}<0\\)。 · Since \\(U_g(\\infty)=0\\), \\(U_g(r)=-G\\dfrac{m_1m_2}{r}<0\\).",
          "在椭圆轨道上从近地点到远地点，\\(r\\) 增大，\\(U_g\\) 增大（趋近零），\\(K\\) 减小，但 \\(E=K+U_g\\) 不变。 · On an elliptical orbit from periapsis to apoapsis, \\(r\\) increases, \\(U_g\\) increases toward zero, \\(K\\) decreases, but \\(E=K+U_g\\) stays constant."
        ],
        "solution": "有限距离处 \\(U_g<0\\) 是“以无穷远为零”的必然结果；\\(E\\) 恒定，\\(U_g\\) 与 \\(K\\) 反号变化。 · \\(U_g<0\\) at finite distance follows from choosing zero at infinity; \\(E\\) is constant while \\(U_g\\) and \\(K\\) change in opposite senses.",
        "solutionLatex": "U_g(r)=-G\\dfrac{m_1m_2}{r}<0"
      },
      {
        "title": "例 5 · 逃逸速度 · Example 5: Escape speed",
        "prompt": "求地球表面（\\(R=6.37\\times10^{6}\\,\\mathrm{m}\\)，\\(GM=3.99\\times10^{14}\\,\\mathrm{m^{3}\\,s^{-2}}\\)）的逃逸速度，并与近地圆轨道速度比较。 · Find the escape speed at Earth’s surface (\\(R=6.37\\times10^{6}\\,\\mathrm{m}\\), \\(GM=3.99\\times10^{14}\\,\\mathrm{m^{3}\\,s^{-2}}\\)) and compare it with the circular-orbit speed near the surface.",
        "steps": [
          "即：\\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{R}}=\\sqrt{\\dfrac{2(3.99\\times10^{14})}{6.37\\times10^{6}}}\\approx1.12\\times10^{4}\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{R}}=\\sqrt{\\dfrac{2(3.99\\times10^{14})}{6.37\\times10^{6}}}\\approx1.12\\times10^{4}\\,\\mathrm{m\\,s^{-1}}\\).",
          "即：\\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{R}}\\approx7.9\\times10^{3}\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{R}}\\approx7.9\\times10^{3}\\,\\mathrm{m\\,s^{-1}}\\).",
          "即：\\(\\dfrac{v_{\\mathrm{esc}}}{v_{\\mathrm{circ}}}=\\sqrt{2}\\approx1.41\\)。 · \\(\\dfrac{v_{\\mathrm{esc}}}{v_{\\mathrm{circ}}}=\\sqrt{2}\\approx1.41\\)."
        ],
        "solution": "\\(v_{\\mathrm{esc}}\\approx11.2\\,\\mathrm{km\\,s^{-1}}\\)，是近地圆轨道速度的 \\(\\sqrt{2}\\) 倍。逃逸对应总机械能恰好为零。 · \\(v_{\\mathrm{esc}}\\approx11.2\\,\\mathrm{km\\,s^{-1}}\\), \\(\\sqrt{2}\\) times the near-surface circular speed. Escape corresponds to exactly zero total mechanical energy.",
        "solutionLatex": "v_{\\mathrm{esc}}\\approx1.12\\times10^{4}\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 6 · 同近地点圆轨道与椭圆轨道对照 · Example 6: Circular versus elliptical orbit at the same periapsis",
        "prompt": "某卫星在地球上方 \\(r_p=7.0\\times10^{6}\\,\\mathrm{m}\\) 处。比较以该半径为圆轨道与以该点为近地点的椭圆轨道的 \\(v\\)、\\(K\\)、\\(U\\)、\\(E\\)、\\(L\\)。 · A satellite is at \\(r_p=7.0\\times10^{6}\\,\\mathrm{m}\\) from Earth’s center. Compare \\(v\\), \\(K\\), \\(U\\), \\(E\\), and \\(L\\) for a circular orbit at that radius and for an elliptical orbit having that point as its periapsis.",
        "steps": [
          "\\(U\\) 只由 \\(r\\) 决定，两轨道在该点 \\(U\\) 相同。 · \\(U\\) depends only on \\(r\\), so both orbits have the same \\(U\\) at that point.",
          "圆轨道 \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r_p}}\\approx7.6\\,\\mathrm{km\\,s^{-1}}\\)；椭圆轨道在该点必须更快，才能向外爬到远地点，\\(v_p\\approx8.7\\,\\mathrm{km\\,s^{-1}}\\)。 · The circular orbit has \\(v_{\\mathrm{circ}}=\\sqrt{\\dfrac{GM}{r_p}}\\approx7.6\\,\\mathrm{km\\,s^{-1}}\\); the ellipse must be faster at that point to climb to apoapsis, with \\(v_p\\approx8.7\\,\\mathrm{km\\,s^{-1}}\\).",
          "因此椭圆在该点的 \\(K\\) 更大、\\(E\\) 更不负（但仍 \\(<0\\)）、\\(L=mv_pr_p\\) 更大；两轨道在该点的 \\(U\\) 相同。 · Therefore the ellipse has larger \\(K\\), less negative \\(E\\) (still \\(<0\\)), and larger \\(L=mv_pr_p\\) at that point; both share the same \\(U\\)."
        ],
        "solution": "同一点：椭圆 \\(v\\)、\\(K\\)、\\(L\\) 更大，\\(E\\) 更不负；\\(U\\) 相同。圆轨道是 \\(E\\) 最小（最负）的束缚轨道。 · At the same point, the ellipse has larger \\(v\\), \\(K\\), and \\(L\\), and a less negative \\(E\\); \\(U\\) is the same. The circular orbit is the lowest-energy (most negative) bound orbit at that radius.",
        "solutionLatex": "v_{\\mathrm{ellipse}}>v_{\\mathrm{circ}},\\;L_{\\mathrm{ellipse}}>L_{\\mathrm{circ}},\\;E_{\\mathrm{ellipse}}>E_{\\mathrm{circ}}"
      }
    ],
    "examTips": [
      "CED Unit 6：圆轨道先写“引力 = 向心力”，再求 \\(v\\) 或 \\(T\\)；轨道半径从中心天体球心量起。 · CED Unit 6: for a circular orbit, start with “gravity = centripetal force,” then find \\(v\\) or \\(T\\); measure the orbital radius from the central body’s center.",
      "圆轨道题要分别列出 \\(K\\)、\\(U\\)、\\(E\\)、\\(L\\)，并说明它们各自恒定；不要只写总能量守恒。 · In circular-orbit problems, list \\(K\\), \\(U\\), \\(E\\), and \\(L\\) separately and state that each is constant; do not mention only total-energy conservation.",
      "椭圆轨道题用两个守恒：能量 \\(K+U=E\\) 与角动量 \\(r_pv_p=r_av_a\\)。 · For elliptical orbits, use two conservation laws: energy \\(K+U=E\\) and angular momentum \\(r_pv_p=r_av_a\\).",
      "势能符号最容易错：取无穷远为零后，有限距离处 \\(U_g<0\\)，且 \\(|U|=2K\\) 只对圆轨道成立。 · Potential-energy signs are the most common error: with zero at infinity, \\(U_g<0\\) at finite distance, and \\(|U|=2K\\) holds only for circular orbits.",
      "逃逸速度由 \\(E=0\\) 导出，是圆轨道速度的 \\(\\sqrt{2}\\) 倍；与卫星质量无关。 · Escape speed follows from \\(E=0\\) and is \\(\\sqrt{2}\\) times the circular speed; it is independent of the satellite’s mass."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.6",
        "title": "万有引力 · Gravitation",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.4",
        "title": "圆周运动 · Circular Motion",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.2",
        "title": "角动量 · Angular Momentum",
        "relation": "相关 · Related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.3",
        "title": "机械能守恒 · Conservation of Energy",
        "relation": "相关 · Related"
      }
    ],
    "modules": [
      {
        "id": "gravity-orbit",
        "title": "万有引力与轨道 · Gravitation and Orbits"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u6",
    "connections": [
      "先修：2.6 的 \\(U_g=-G\\dfrac{m_1m_2}{r}\\) 与逃逸速度是本节能量分析的起点。 · Prerequisite: \\(U_g=-G\\dfrac{m_1m_2}{r}\\) and escape speed from 2.6 are the starting point for the energy analysis here.",
      "相关：6.2 的角动量守恒解释开普勒第二定律：有心力力矩为零，\\(L\\) 恒定。 · Related: conservation of angular momentum from 6.2 explains Kepler’s second law: a central force has zero torque, so \\(L\\) is constant.",
      "相关：3.3 的机械能守恒给出 \\(K+U=E\\)，用于椭圆轨道近远地点速率。 · Related: conservation of mechanical energy from 3.3 gives \\(K+U=E\\), used for periapsis and apoapsis speeds on an ellipse.",
      "后续：7.1 的简谐运动可与“穿过地球隧道”的引力回复力类比，但轨道能量问题仍以本节守恒定律为主。 · Follow-up: simple harmonic motion in 7.1 can be compared with the restoring force for a tunnel through Earth, but orbital energy problems rely on the conservation laws here."
    ],
    "intuitionDetailed": "把轨道能量画成条形图：圆轨道上 \\(U\\) 是一条固定的负值，\\(K\\) 是固定的正值，两者之和 \\(E\\) 为负且不变；改变半径会同时改变 \\(U\\)、\\(K\\) 与 \\(E\\)，但同一圆轨道上四项都不随时间变。椭圆轨道上，近地点 \\(U\\) 最负、\\(K\\) 最大，远地点 \\(U\\) 最接近零、\\(K\\) 最小；条形图的 \\(K\\) 与 \\(U\\) 长度此消彼长，总长度 \\(E\\) 不变，角动量则保证 \\(r_pv_p=r_av_a\\)。势能的零点是无穷远，所以所有有限距离的 \\(U\\) 都是负的；\\(E<0\\) 表示卫星被束缚，\\(E=0\\) 恰好逃逸。 · Picture orbital energy as a bar chart: on a circular orbit \\(U\\) is a fixed negative value, \\(K\\) is a fixed positive value, and their sum \\(E\\) is negative and constant; changing the radius changes \\(U\\), \\(K\\), and \\(E\\), but on a given circular orbit all four are time-independent. On an ellipse, \\(U\\) is most negative and \\(K\\) is largest at periapsis, while \\(U\\) is closest to zero and \\(K\\) is smallest at apoapsis; the \\(K\\) and \\(U\\) bars trade length while the total \\(E\\) stays fixed, and angular momentum enforces \\(r_pv_p=r_av_a\\). The zero of potential energy is at infinity, so every finite-distance \\(U\\) is negative; \\(E<0\\) means the satellite is bound, and \\(E=0\\) is exactly escape.",
    "development": [
      "圆轨道：由引力提供向心力推出 \\(v_{\\mathrm{circ}}\\) 与 \\(T\\)，并确认 \\(r\\) 与速率恒定。 · Circular orbit: derive \\(v_{\\mathrm{circ}}\\) and \\(T\\) from gravity as the centripetal force, and confirm that \\(r\\) and the speed are constant.",
      "圆轨道能量清单：计算 \\(K\\)、\\(U\\)、\\(E\\)、\\(L\\)，说明四项各自恒定并验证 \\(K=-\\dfrac{1}{2}U\\)。 · Circular-orbit inventory: compute \\(K\\), \\(U\\), \\(E\\), and \\(L\\), show that each is constant, and verify \\(K=-\\dfrac{1}{2}U\\).",
      "椭圆轨道：用 \\(E\\) 与 \\(L\\) 两个守恒量分析近地点与远地点，理解 \\(K\\) 与 \\(U\\) 的相互转化。 · Elliptical orbit: use the two conserved quantities \\(E\\) and \\(L\\) to analyze periapsis and apoapsis, and understand the exchange between \\(K\\) and \\(U\\).",
      "势能基准：取无穷远为零，写出 \\(U_g=-G\\dfrac{m_1m_2}{r}\\)，解释负号与 \\(r\\) 增大时的变化。 · Potential-energy baseline: choose zero at infinity, write \\(U_g=-G\\dfrac{m_1m_2}{r}\\), and explain the negative sign and the change as \\(r\\) increases.",
      "逃逸与轨道分类：由 \\(E=0\\) 导出 \\(v_{\\mathrm{esc}}\\)，用 \\(E\\) 的符号区分束缚、逃逸与非束缚轨道。 · Escape and orbit classification: derive \\(v_{\\mathrm{esc}}\\) from \\(E=0\\), and use the sign of \\(E\\) to distinguish bound, escape, and unbound orbits."
    ],
    "checks": [
      "圆轨道上 \\(E\\)、\\(U\\)、\\(K\\)、\\(L\\) 中哪些随时间改变？为什么？ · Which of \\(E\\), \\(U\\), \\(K\\), and \\(L\\) change with time on a circular orbit, and why?",
      "椭圆轨道从近地点到远地点，\\(K\\)、\\(U\\)、\\(E\\)、\\(L\\) 各如何变化？ · On an elliptical orbit from periapsis to apoapsis, how do \\(K\\), \\(U\\), \\(E\\), and \\(L\\) change?",
      "为什么取无穷远为零后，有限距离的引力势能是负的？ · Why is gravitational potential energy negative at finite distance when zero is chosen at infinity?",
      "逃逸速度为什么是同一半径圆轨道速度的 \\(\\sqrt{2}\\) 倍？ · Why is escape speed \\(\\sqrt{2}\\) times the circular-orbit speed at the same radius?",
      "同一近地点处，圆轨道与椭圆轨道的 \\(v\\)、\\(L\\)、\\(E\\) 谁大？哪些量相同？ · At the same periapsis, which orbit has larger \\(v\\), \\(L\\), and \\(E\\)? Which quantities are the same?",
      "角动量守恒为什么对应开普勒第二定律？ · Why does conservation of angular momentum correspond to Kepler’s second law?"
    ],
    "vocabulary": [
      {
        "termZh": "圆轨道",
        "termEn": "circular orbit",
        "defZh": "速率与半径都不变的束缚轨道；引力恰好提供向心力，\\(v=\\sqrt{\\dfrac{GM}{r}}\\)。",
        "defEn": "A bound orbit with constant radius and speed; gravity provides exactly the centripetal force, \\(v=\\sqrt{\\dfrac{GM}{r}}\\)."
      },
      {
        "termZh": "椭圆轨道",
        "termEn": "elliptical orbit",
        "defZh": "总机械能与角动量恒定、但半径与速率周期变化的束缚轨道；近地点最快、远地点最慢。",
        "defEn": "A bound orbit with constant total mechanical energy and angular momentum but periodically varying radius and speed; fastest at periapsis and slowest at apoapsis."
      },
      {
        "termZh": "近地点",
        "termEn": "periapsis (perigee for Earth)",
        "defZh": "椭圆轨道上距中心天体最近的点；\\(r\\) 最小、\\(U\\) 最负、\\(K\\) 与速率最大。",
        "defEn": "The point on an elliptical orbit closest to the central body; \\(r\\) is smallest, \\(U\\) is most negative, and \\(K\\) and speed are greatest."
      },
      {
        "termZh": "远地点",
        "termEn": "apoapsis (apogee for Earth)",
        "defZh": "椭圆轨道上距中心天体最远的点；\\(r\\) 最大、\\(U\\) 最接近零、\\(K\\) 与速率最小。",
        "defEn": "The point on an elliptical orbit farthest from the central body; \\(r\\) is largest, \\(U\\) is closest to zero, and \\(K\\) and speed are smallest."
      },
      {
        "termZh": "引力势能",
        "termEn": "gravitational potential energy",
        "defZh": "卫星与中心天体组成的系统因相对位置而具有的能量，\\(U_g=-G\\dfrac{m_1m_2}{r}\\)，取无穷远为零。",
        "defEn": "Energy of the satellite–central-body system due to relative position, \\(U_g=-G\\dfrac{m_1m_2}{r}\\), with zero at infinity."
      },
      {
        "termZh": "机械能",
        "termEn": "mechanical energy",
        "defZh": "轨道上动能与引力势能之和 \\(E=K+U_g\\)；无耗散时恒定，圆或椭圆轨道 \\(E<0\\)。",
        "defEn": "The sum of kinetic and gravitational potential energy on an orbit, \\(E=K+U_g\\); constant without dissipation, and \\(E<0\\) for circular or elliptical orbits."
      },
      {
        "termZh": "逃逸速度",
        "termEn": "escape speed",
        "defZh": "使卫星–中心天体系统总机械能恰好为零、能到达无穷远的速度，\\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)。",
        "defEn": "The speed that makes the satellite–central-body system’s total mechanical energy exactly zero so the satellite can reach infinity, \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)."
      },
      {
        "termZh": "开普勒第二定律",
        "termEn": "Kepler’s second law",
        "defZh": "行星与中心天体的连线在相等时间内扫过相等面积；等价于角动量守恒。",
        "defEn": "The line joining a planet and the central body sweeps equal areas in equal times; equivalent to conservation of angular momentum."
      }
    ]
  }
};
