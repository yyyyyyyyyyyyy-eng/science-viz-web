export const UNIT = {
  "id": "mech-u2",
  "code": "2",
  "titleZh": "力与平动动力学",
  "titleEn": "Force and Translational Dynamics",
  "subject": "mech",
  "layer": "ap"
};
export const TOPICS = {
  "2.1": {
    "id": "mech/mech-u2/2.1",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.1",
    "titleZh": "质心",
    "titleEn": "Center of Mass",
    "layer": "ap",
    "summary": "质心是质量加权平均位置；连续体用 dm 积分，非均匀杆用 λ(x) 计算；内部结构决定能否把系统当作质点、刚体或多体模型。 · The center of mass is the mass-weighted average position; continuous bodies use dm integrals and a nonuniform rod uses λ(x); internal structure determines whether a point-particle, rigid-body, or multi-body model applies.",
    "learningObjectives": [
      "能计算离散与连续系统的质心。 · Calculate the center of mass for discrete and continuous systems.",
      "能对非均匀杆用 dm=λ(x)dx 建立积分并求质心。 · Set up dm = λ(x)dx for a nonuniform rod and integrate to find its center of mass.",
      "能应用质心运动定理解释系统整体运动。 · Apply the center-of-mass theorem to explain the overall motion of a system.",
      "能根据内部结构判断应使用质点、刚体还是多体模型。 · Decide whether a point-particle, rigid-body, or multi-body model is appropriate from the system’s internal structure.",
      "能利用对称性判断质心位置并检查结果。 · Use symmetry to locate the center of mass and check the result."
    ],
    "essentialKnowledge": [
      "质心是质量加权平均位置：\\(\\mathbf r_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\mathbf r_i}{M}\\)。 · The center of mass is the mass-weighted average position: \\(\\mathbf r_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\mathbf r_i}{M}\\).",
      "连续体 \\(\\mathbf r_{\\mathrm{cm}}=\\dfrac{1}{M}\\int\\mathbf r\\,\\mathrm{d}m\\)。 · For a continuous body, \\(\\mathbf r_{\\mathrm{cm}}=\\dfrac{1}{M}\\int\\mathbf r\\,\\mathrm{d}m\\).",
      "一维线状物体取质量元 \\(\\mathrm{d}m=\\lambda(x)\\,\\mathrm{d}x\\)，线质量密度 \\(\\lambda(x)=\\dfrac{\\mathrm{d}m}{\\mathrm{d}x}\\)。 · For a one-dimensional linear body take a mass element \\(\\mathrm{d}m=\\lambda(x)\\,\\mathrm{d}x\\), where the linear mass density is \\(\\lambda(x)=\\dfrac{\\mathrm{d}m}{\\mathrm{d}x}\\).",
      "非均匀杆 \\(x_{\\mathrm{cm}}=\\dfrac{\\int x\\lambda(x)\\,\\mathrm{d}x}{\\int\\lambda(x)\\,\\mathrm{d}x}\\)，分母就是总质量 \\(M=\\int\\lambda(x)\\,\\mathrm{d}x\\)。 · For a nonuniform rod, \\(x_{\\mathrm{cm}}=\\dfrac{\\int x\\lambda(x)\\,\\mathrm{d}x}{\\int\\lambda(x)\\,\\mathrm{d}x}\\); the denominator is the total mass \\(M=\\int\\lambda(x)\\,\\mathrm{d}x\\).",
      "系统总动量 \\(\\mathbf p=M\\mathbf v_{\\mathrm{cm}}\\)；合外力决定质心加速度，内力不改变质心运动。 · Total momentum is \\(\\mathbf p=M\\mathbf v_{\\mathrm{cm}}\\); the net external force determines the center-of-mass acceleration, and internal forces do not change the center-of-mass motion.",
      "质心不一定在物体上；对称性可快速定位质心，例如均匀圆环的质心在圆心。 · The center of mass need not lie on the object; symmetry quickly locates it, for example the center of a uniform ring.",
      "内部结构影响模型选择：只关心整体平动时可用质点模型；转动、形变或内部振动重要时，必须用刚体、多体或连续体模型。 · Internal structure affects model choice: use a point-particle model when only overall translation matters; use a rigid-body, multi-body, or continuous model when rotation, deformation, or internal vibration matters.",
      "质量分布不仅决定质心，也决定转动惯量；总质量相同、分布不同，转动惯量可以不同。 · Mass distribution determines not only the center of mass but also the moment of inertia; the same total mass distributed differently can give different moments of inertia.",
      "质点模型把所有质量集中在质心并忽略内部结构；它只适用于内部结构对所研究运动没有影响的情形。 · The point-particle model concentrates all mass at the center of mass and ignores internal structure; it applies only when internal structure does not affect the motion being studied.",
      "质心运动定理在惯性系中成立；均匀重力场中质心与重心重合。 · The center-of-mass theorem holds in inertial frames; in a uniform gravitational field the center of mass and center of gravity coincide."
    ],
    "definition": "质心是系统质量分布的加权平均位置：\\(\\mathbf r_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\mathbf r_i}{M}\\)，连续体为 \\(\\mathbf r_{\\mathrm{cm}}=\\dfrac{1}{M}\\int\\mathbf r\\,\\mathrm{d}m\\)。对一维非均匀杆，取质量元 \\(\\mathrm{d}m=\\lambda(x)\\,\\mathrm{d}x\\)，则 \\(x_{\\mathrm{cm}}=\\dfrac{\\int x\\lambda(x)\\,\\mathrm{d}x}{\\int\\lambda(x)\\,\\mathrm{d}x}\\)。质心是整体平动的等效作用点：合外力对系统整体平动的效果，与把全部质量集中在质心时相同。内部结构（质量分布、刚性、形变能力）决定我们能否把系统简化为质点，还是必须用刚体或多体模型。 · The center of mass is the mass-weighted average position of a system: \\(\\mathbf r_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\mathbf r_i}{M}\\), and for a continuous body \\(\\mathbf r_{\\mathrm{cm}}=\\dfrac{1}{M}\\int\\mathbf r\\,\\mathrm{d}m\\). For a one-dimensional nonuniform rod, take \\(\\mathrm{d}m=\\lambda(x)\\,\\mathrm{d}x\\), so \\(x_{\\mathrm{cm}}=\\dfrac{\\int x\\lambda(x)\\,\\mathrm{d}x}{\\int\\lambda(x)\\,\\mathrm{d}x}\\). The center of mass is the effective point for overall translation: the net external force produces the same translational effect as if all mass were concentrated there. Internal structure—mass distribution, rigidity, and deformability—determines whether we may simplify the system to a point particle or must use a rigid-body or multi-body model.",
    "intuition": "质心是系统的“平衡点”：把整个系统看成质量集中在这一点，外力对整体平动的效果不变。 · The center of mass is the system’s “balance point”: treat the whole system as if its mass were concentrated there, and the external force produces the same overall translation.",
    "formulas": [
      {
        "latex": "\\mathbf r_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\mathbf r_i}{M}",
        "note": "离散系统质心。 · Center of mass of a discrete system."
      },
      {
        "latex": "\\mathbf r_{\\mathrm{cm}}=\\dfrac{1}{M}\\int\\mathbf r\\,\\mathrm{d}m",
        "note": "连续体质心。 · Center of mass of a continuous body."
      },
      {
        "latex": "\\mathrm{d}m=\\lambda(x)\\,\\mathrm{d}x",
        "note": "一维线状物体的质量元；λ 为线质量密度。 · Mass element of a one-dimensional linear body; λ is the linear mass density."
      },
      {
        "latex": "x_{\\mathrm{cm}}=\\dfrac{\\int x\\lambda(x)\\,\\mathrm{d}x}{\\int\\lambda(x)\\,\\mathrm{d}x}",
        "note": "非均匀杆的质心；分母为总质量。 · Center of mass of a nonuniform rod; the denominator is the total mass."
      },
      {
        "latex": "\\mathbf p=M\\mathbf v_{\\mathrm{cm}}",
        "note": "系统总动量。 · Total momentum of the system."
      },
      {
        "latex": "\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}",
        "note": "质心运动定理。 · Center-of-mass theorem."
      }
    ],
    "derivationNotes": [
      {
        "from": "质量加权平均 · Mass-weighted average",
        "to": "质心定义 · Center-of-mass definition",
        "note": "每个质量乘以其位置，再除以总质量。 · Multiply each mass by its position and divide by the total mass."
      },
      {
        "from": "质心定义对时间求导 · Differentiate the definition with respect to time",
        "to": "总动量 · Total momentum",
        "note": "\\(M\\mathbf v_{\\mathrm{cm}}=\\sum m_i\\mathbf v_i=\\mathbf p\\)。 · \\(M\\mathbf v_{\\mathrm{cm}}=\\sum m_i\\mathbf v_i=\\mathbf p\\)."
      },
      {
        "from": "系统牛顿第二定律 · Newton’s second law for the system",
        "to": "质心运动定理 · Center-of-mass theorem",
        "note": "内力成对抵消，只剩外力。 · Internal forces cancel in pairs, leaving only external forces."
      },
      {
        "from": "一维连续体 · One-dimensional continuous body",
        "to": "非均匀杆积分 · Nonuniform-rod integral",
        "note": "先写 \\(\\mathrm{d}m=\\lambda(x)\\,\\mathrm{d}x\\)，再算 \\(M=\\int\\lambda\\,\\mathrm{d}x\\) 与一阶矩 \\(\\int x\\lambda\\,\\mathrm{d}x\\)。 · First write \\(\\mathrm{d}m=\\lambda(x)\\,\\mathrm{d}x\\), then compute \\(M=\\int\\lambda\\,\\mathrm{d}x\\) and the first moment \\(\\int x\\lambda\\,\\mathrm{d}x\\)."
      },
      {
        "from": "内部结构 · Internal structure",
        "to": "模型选择 · Model choice",
        "note": "只问整体平动用质点；涉及转动、形变或内部振动时，质点模型会丢失自由度。 · Use a point particle for overall translation only; when rotation, deformation, or internal vibration is involved, the point-particle model loses degrees of freedom."
      }
    ],
    "conditions": [
      "质量分布给定；变质量系统需重新定义系统与质心。 · The mass distribution is given; a variable-mass system requires redefining the system and its center of mass.",
      "质心运动定理在惯性系中成立。 · The center-of-mass theorem holds in an inertial frame.",
      "均匀重力场中质心与重心重合。 · In a uniform gravitational field the center of mass and center of gravity coincide.",
      "连续体公式要求质量分布可积；非均匀杆必须给出 λ(x)。 · The continuous-body formula requires an integrable mass distribution; a nonuniform rod must specify λ(x).",
      "质点模型要求内部结构对所研究运动没有影响；转动或形变重要时不能用。 · The point-particle model requires internal structure to be irrelevant to the motion; it fails when rotation or deformation matters.",
      "刚体模型要求形状和大小不变；变形体需要多体或连续体模型。 · The rigid-body model requires fixed shape and size; a deformable body needs a multi-body or continuous model."
    ],
    "keyPoints": [
      "质心是质量加权点，不一定在物体上。 · The center of mass is a mass-weighted point and need not lie on the object.",
      "系统总动量等于总质量乘质心速度。 · Total momentum equals total mass times center-of-mass velocity.",
      "外力只影响质心平动，内力不影响。 · External forces affect center-of-mass translation; internal forces do not.",
      "对称性可快速定位质心。 · Symmetry quickly locates the center of mass.",
      "质心运动轨迹由合外力决定。 · The center-of-mass trajectory is determined by the net external force.",
      "非均匀杆先写 \\(\\mathrm{d}m=\\lambda(x)\\,\\mathrm{d}x\\)，再积分求 M 和 \\(x_{\\mathrm{cm}}\\)。 · For a nonuniform rod, first write \\(\\mathrm{d}m=\\lambda(x)\\,\\mathrm{d}x\\), then integrate for M and \\(x_{\\mathrm{cm}}\\).",
      "内部结构决定模型：质点、刚体或多体。 · Internal structure determines the model: point particle, rigid body, or multi-body.",
      "质量分布同时决定质心和转动惯量。 · Mass distribution determines both the center of mass and the moment of inertia."
    ],
    "misconceptions": [
      "认为质心一定在物体内部。 · Thinking the center of mass must lie inside the object.",
      "把质心与重心混为一谈（非均匀重力场中不同）。 · Confusing the center of mass with the center of gravity (they differ in a nonuniform field).",
      "认为质心处一定受力。 · Thinking a force must act at the center of mass.",
      "认为质心速度等于各点速度的算术平均（应按质量加权）。 · Thinking the center-of-mass velocity is the arithmetic average of all velocities (it is mass-weighted).",
      "认为内力可以改变质心运动。 · Thinking internal forces can change the center-of-mass motion.",
      "对非均匀杆直接套用 \\(x_{\\mathrm{cm}}=\\dfrac{L}{2}\\)，而不积分。 · Applying \\(x_{\\mathrm{cm}}=\\dfrac{L}{2}\\) to a nonuniform rod without integrating.",
      "把质点模型用于有明显转动或形变的物体。 · Using a point-particle model for an object with significant rotation or deformation.",
      "认为总质量相同则质心和转动惯量都相同。 · Thinking systems with the same total mass have the same center of mass and moment of inertia."
    ],
    "examples": [
      {
        "title": "例 1 · 两质点 · Example 1 · Two point masses",
        "prompt": "\\(m_1=2.0\\,\\mathrm{kg}\\) 在 \\(x=0\\)，\\(m_2=3.0\\,\\mathrm{kg}\\) 在 \\(x=5.0\\,\\mathrm{m}\\)。求质心位置。 · \\(m_1=2.0\\,\\mathrm{kg}\\) is at \\(x=0\\) and \\(m_2=3.0\\,\\mathrm{kg}\\) is at \\(x=5.0\\,\\mathrm{m}\\). Find the center of mass.",
        "steps": [
          "\\(x_{\\mathrm{cm}}=\\dfrac{m_1x_1+m_2x_2}{m_1+m_2}\\)。 · \\(x_{\\mathrm{cm}}=\\dfrac{m_1x_1+m_2x_2}{m_1+m_2}\\).",
          "\\(x_{\\mathrm{cm}}=\\dfrac{2.0(0)+3.0(5.0)}{5.0}=3.0\\,\\mathrm{m}\\)。 · \\(x_{\\mathrm{cm}}=\\dfrac{2.0(0)+3.0(5.0)}{5.0}=3.0\\,\\mathrm{m}\\)."
        ],
        "solution": "\\(x_{\\mathrm{cm}}=3.0\\,\\mathrm{m}\\)。 · \\(x_{\\mathrm{cm}}=3.0\\,\\mathrm{m}\\).",
        "solutionLatex": "x_{\\mathrm{cm}}=3.0\\,\\mathrm{m}"
      },
      {
        "title": "例 2 · 均匀细杆 · Example 2 · Uniform thin rod",
        "prompt": "长 \\(L\\) 的均匀细杆，求质心位置。 · Find the center of mass of a uniform thin rod of length \\(L\\).",
        "steps": [
          "设杆沿 \\(x\\) 轴，从 \\(0\\) 到 \\(L\\)，线密度 \\(\\lambda=\\dfrac{m}{L}\\)。 · Let the rod lie along the \\(x\\) axis from \\(0\\) to \\(L\\) with linear density \\(\\lambda=\\dfrac{m}{L}\\).",
          "\\(x_{\\mathrm{cm}}=\\dfrac{1}{m}\\int_0^L x\\lambda\\,\\mathrm{d}x=\\dfrac{1}{L}\\cdot\\dfrac{L^{2}}{2}=\\dfrac{L}{2}\\)。 · \\(x_{\\mathrm{cm}}=\\dfrac{1}{m}\\int_0^L x\\lambda\\,\\mathrm{d}x=\\dfrac{1}{L}\\cdot\\dfrac{L^{2}}{2}=\\dfrac{L}{2}\\)."
        ],
        "solution": "质心在杆的中点。 · The center of mass is at the midpoint of the rod."
      },
      {
        "title": "例 3 · 爆炸后质心 · Example 3 · Center of mass after an explosion",
        "prompt": "炮弹在最高点炸成两块，忽略空气阻力。爆炸后系统质心如何运动？ · A shell explodes into two pieces at its highest point, with air resistance neglected. How does the system’s center of mass move after the explosion?",
        "steps": [
          "爆炸内力远大于外力，但外力仍只有重力。 · The internal explosion forces greatly exceed the external forces, but the only external force is still gravity.",
          "质心运动定理：\\(M\\mathbf a_{\\mathrm{cm}}=M\\mathbf g\\)。 · Center-of-mass theorem: \\(M\\mathbf a_{\\mathrm{cm}}=M\\mathbf g\\).",
          "质心继续沿原抛物线运动，与爆炸前相同。 · The center of mass continues along the original parabola, exactly as before the explosion."
        ],
        "solution": "质心仍按原抛物线运动；两块绕质心分开。 · The center of mass still follows the original parabola; the two pieces separate about it."
      },
      {
        "title": "例 4 · 非均匀杆的质心 · Example 4 · Center of mass of a nonuniform rod",
        "prompt": "长 \\(L\\) 的细杆沿 \\(x\\) 轴放置，线质量密度 \\(\\lambda(x)=\\lambda_0\\left(1+\\dfrac{x}{L}\\right)\\)，\\(0\\le x\\le L\\)。求总质量与质心位置。 · A thin rod of length \\(L\\) lies along the \\(x\\) axis with linear mass density \\(\\lambda(x)=\\lambda_0\\left(1+\\dfrac{x}{L}\\right)\\), \\(0\\le x\\le L\\). Find its total mass and center of mass.",
        "steps": [
          "总质量：\\(M=\\int_0^L\\lambda_0\\left(1+\\dfrac{x}{L}\\right)\\mathrm{d}x=\\lambda_0\\left(L+\\dfrac{L}{2}\\right)=\\dfrac{3}{2}\\lambda_0L\\)。 · Total mass: \\(M=\\int_0^L\\lambda_0\\left(1+\\dfrac{x}{L}\\right)\\mathrm{d}x=\\lambda_0\\left(L+\\dfrac{L}{2}\\right)=\\dfrac{3}{2}\\lambda_0L\\).",
          "一阶矩：\\(\\int_0^L x\\lambda_0\\left(1+\\dfrac{x}{L}\\right)\\mathrm{d}x=\\lambda_0\\left(\\dfrac{L^{2}}{2}+\\dfrac{L^{2}}{3}\\right)=\\dfrac{5}{6}\\lambda_0L^{2}\\)。 · First moment: \\(\\int_0^L x\\lambda_0\\left(1+\\dfrac{x}{L}\\right)\\mathrm{d}x=\\lambda_0\\left(\\dfrac{L^{2}}{2}+\\dfrac{L^{2}}{3}\\right)=\\dfrac{5}{6}\\lambda_0L^{2}\\).",
          "相除：\\(x_{\\mathrm{cm}}=\\dfrac{\\dfrac{5}{6}\\lambda_0L^{2}}{\\dfrac{3}{2}\\lambda_0L}=\\dfrac{5}{9}L\\)。质心比中点更靠右，因为右端更密。 · Divide: \\(x_{\\mathrm{cm}}=\\dfrac{\\dfrac{5}{6}\\lambda_0L^{2}}{\\dfrac{3}{2}\\lambda_0L}=\\dfrac{5}{9}L\\). The center of mass is to the right of the midpoint because the rod is denser on the right."
        ],
        "solution": "\\(M=\\dfrac{3}{2}\\lambda_0L\\)，\\(x_{\\mathrm{cm}}=\\dfrac{5}{9}L\\)。 · \\(M=\\dfrac{3}{2}\\lambda_0L\\) and \\(x_{\\mathrm{cm}}=\\dfrac{5}{9}L\\).",
        "solutionLatex": "M=\\dfrac{3}{2}\\lambda_0L,\\qquad x_{\\mathrm{cm}}=\\dfrac{5}{9}L"
      },
      {
        "title": "例 5 · 内部结构与模型选择 · Example 5 · Internal structure and model choice",
        "prompt": "两个物块 \\(m_1\\)、\\(m_2\\) 用轻弹簧相连，放在光滑水平面上，水平外力 \\(F\\) 作用在 \\(m_1\\) 上。说明为什么质心模型只能给出整体运动，而内部振动需要多体模型。 · Two blocks \\(m_1\\) and \\(m_2\\) are connected by a light spring on a frictionless horizontal surface, and a horizontal external force \\(F\\) acts on \\(m_1\\). Explain why the center-of-mass model gives only the overall motion while the internal oscillation requires a multi-body model.",
        "steps": [
          "取两物块与弹簧为系统，水平外力只有 \\(F\\)，所以 \\(a_{\\mathrm{cm}}=\\dfrac{F}{m_1+m_2}\\)。 · Take the two blocks and spring as the system; the only horizontal external force is \\(F\\), so \\(a_{\\mathrm{cm}}=\\dfrac{F}{m_1+m_2}\\).",
          "质心运动定理只描述整体平动，无法给出两物块相对距离的变化。 · The center-of-mass theorem describes only overall translation and cannot give the change in separation between the blocks.",
          "弹簧形变使两物块相对振动；要求相对运动，必须分别对两个物块写牛顿第二定律，并用弹簧力 \\(F_s=-k\\Delta x\\) 耦合。 · The spring deformation makes the blocks oscillate relative to each other; to find that relative motion, write Newton’s second law for each block and couple them with the spring force \\(F_s=-k\\Delta x\\).",
          "因此：只问质心轨迹时用质点/质心模型；涉及内部结构或相对运动时用多体模型。 · Therefore: use the point-particle/center-of-mass model for the center-of-mass trajectory alone; use a multi-body model when internal structure or relative motion matters."
        ],
        "solution": "质心加速度为 \\(\\dfrac{F}{m_1+m_2}\\)；内部振动需两体模型。 · The center-of-mass acceleration is \\(\\dfrac{F}{m_1+m_2}\\); the internal oscillation requires a two-body model.",
        "solutionLatex": "a_{\\mathrm{cm}}=\\dfrac{F}{m_1+m_2},\\qquad \\text{internal motion: }m_1a_1=F-F_s,\\;m_2a_2=F_s"
      }
    ],
    "examTips": [
      "CED Unit 2：质心与系统 · CED Unit 2: center of mass and systems",
      "先建立坐标系，再用质量加权公式。 · Set up coordinates first, then use the mass-weighted formula.",
      "非均匀杆：先写 λ(x) 和 dm，再积分；不要直接取中点。 · Nonuniform rod: write λ(x) and dm first, then integrate; do not simply take the midpoint.",
      "对称物体优先用对称性找质心。 · For symmetric objects, use symmetry to locate the center of mass first.",
      "多体问题可用质心运动定理简化整体分析。 · Use the center-of-mass theorem to simplify the overall analysis of multi-body problems.",
      "判断模型：只问整体平动用质点；涉及转动、形变、内部振动要用刚体/多体。 · Choose the model: point particle for overall translation only; rigid body or multi-body for rotation, deformation, or internal vibration."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.2",
        "title": "系统 · Systems",
        "relation": "后续 · follow-up"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton’s Laws of Motion: First and Second Law",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u4",
        "code": "4.1",
        "title": "冲量与动量 · Impulse and Momentum",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.6",
        "title": "万有引力 · Gravitation",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.1",
        "title": "转动惯量 · Moment of Inertia",
        "relation": "后续 · follow-up"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面 · Newton’s second law and the incline"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律。 · Upstream: earlier topics in this unit provide definitions or laws for later derivations.",
      "下游：质心与总动量把系统整体运动与 4.1 的冲量—动量定理连接起来。 · Downstream: the center of mass and total momentum connect overall system motion to the impulse–momentum theorem in 4.1.",
      "数学：质量加权平均、定积分与一阶矩；非均匀杆是 dm=λ(x)dx 的直接应用。 · Mathematics: mass-weighted averages, definite integrals, and first moments; the nonuniform rod is a direct application of dm = λ(x)dx.",
      "跨学科：生物力学用质心描述人体整体运动，工程用质心与转动惯量分析车辆和飞行器的稳定性。 · Cross-disciplinary: biomechanics uses the center of mass to describe whole-body motion, and engineering uses the center of mass and moment of inertia to analyze vehicle and aircraft stability."
    ],
    "intuitionDetailed": "质心不一定在物体内部（如圆环、回旋镖）。均匀对称物体的质心在对称中心；复合物体可按质量加权求。非均匀杆的线密度 λ(x) 随位置变化，必须先写出 dm=λ(x)dx，再分别积分求总质量和一阶矩。内部结构也很关键：一块滑块若只平动，可当质点；若它滚动或旋转，质量分布和转动惯量就进入分析；若系统会形变或爆炸，还要考虑内部能量。 · The center of mass need not lie inside the object (for example, a ring or a boomerang). For a uniform symmetric object it lies at the symmetry center; for a composite object, use the mass-weighted sum. For a nonuniform rod, the linear density λ(x) varies with position, so first write dm = λ(x)dx, then integrate separately for the total mass and the first moment. Internal structure also matters: a block that only slides can be treated as a point particle; if it rolls or rotates, the mass distribution and moment of inertia enter the analysis; if the system deforms or explodes, internal energy must also be considered.",
    "development": [
      "质心定义 · Definition of the center of mass",
      "离散与连续质量分布 · Discrete and continuous mass distributions",
      "非均匀杆的 dm=λ(x)dx 积分 · dm = λ(x)dx integration for a nonuniform rod",
      "质心速度与总动量 · Center-of-mass velocity and total momentum",
      "质心运动定理 · Center-of-mass theorem",
      "内部结构与模型选择 · Internal structure and model choice"
    ],
    "checks": [
      "质心一定在物体内部吗？ · Must the center of mass lie inside the object?",
      "内力能改变质心运动吗？ · Can internal forces change the center-of-mass motion?",
      "为什么爆炸后质心仍沿原轨迹运动？ · Why does the center of mass still follow the original trajectory after an explosion?",
      "非均匀杆的质心为什么不能直接取中点？ · Why can’t the center of mass of a nonuniform rod simply be taken at the midpoint?",
      "什么情况下可以把有内部结构的系统当作质点？ · When can a system with internal structure be treated as a point particle?",
      "质量分布相同但总质量不同，质心位置会改变吗？ · If the mass distribution is the same but the total mass differs, does the center-of-mass position change?"
    ],
    "vocabulary": [
      {
        "termZh": "质心",
        "termEn": "center of mass",
        "defZh": "系统质量分布的加权平均位置，整体平动的等效作用点。",
        "defEn": "The mass-weighted average position of a system and the effective point for overall translation."
      },
      {
        "termZh": "质量元",
        "termEn": "mass element",
        "defZh": "连续体中取出的微小质量 dm，用于积分求质心、转动惯量等。",
        "defEn": "A small mass dm taken from a continuous body, used to integrate the center of mass, moment of inertia, and similar quantities."
      },
      {
        "termZh": "线质量密度",
        "termEn": "linear mass density",
        "defZh": "单位长度的质量 λ(x)=dm/dx，用于细杆等一维物体。",
        "defEn": "Mass per unit length, λ(x)=dm/dx, used for thin rods and other one-dimensional bodies."
      },
      {
        "termZh": "连续体",
        "termEn": "continuous body",
        "defZh": "质量连续分布的物体，质心用积分而不是求和计算。",
        "defEn": "A body with a continuous mass distribution, whose center of mass is found by integration rather than summation."
      },
      {
        "termZh": "质点模型",
        "termEn": "point-particle model",
        "defZh": "忽略物体大小和内部结构、把全部质量集中在质心的模型。",
        "defEn": "A model that ignores size and internal structure and concentrates all mass at the center of mass."
      },
      {
        "termZh": "刚体模型",
        "termEn": "rigid-body model",
        "defZh": "假设物体形状和大小不变，但允许转动的模型。",
        "defEn": "A model that assumes fixed shape and size while allowing rotation."
      },
      {
        "termZh": "质心运动定理",
        "termEn": "center-of-mass theorem",
        "defZh": "系统质心加速度由合外力决定：\\(\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}\\)。",
        "defEn": "The center-of-mass acceleration is determined by the net external force: \\(\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}\\)."
      },
      {
        "termZh": "对称性",
        "termEn": "symmetry",
        "defZh": "物体在旋转、反射等变换下保持不变的性质，可用来快速确定质心位置。",
        "defEn": "A property that remains unchanged under rotations, reflections, and similar transformations, used to locate the center of mass quickly."
      }
    ]
  },
  "2.2": {
    "id": "mech/mech-u2/2.2",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.2",
    "titleZh": "系统",
    "titleEn": "Systems",
    "layer": "ap",
    "summary": "系统是人为选定的物体集合；系统性质由内部相互作用决定，开放边界还允许质量与能量跨边界传递；只有外力改变系统总动量。 · A system is a chosen collection of objects; its properties are determined by internal interactions, an open boundary also allows mass and energy transfer, and only external forces change the system’s total momentum.",
    "learningObjectives": [
      "能选定系统并区分内力与外力。 · Choose a system and distinguish internal from external forces.",
      "能说明系统宏观性质如何由组成对象的相互作用决定。 · Explain how a system’s macroscopic properties are determined by interactions among its constituent objects.",
      "能区分开放、封闭与隔离系统，并分析跨边界的质量与能量传递。 · Distinguish open, closed, and isolated systems and analyze mass and energy transfer across a boundary.",
      "能对系统应用质心运动定理与动量定理。 · Apply the center-of-mass theorem and the momentum theorem to a system.",
      "能解释内力为何不改变系统总动量。 · Explain why internal forces do not change the system’s total momentum."
    ],
    "essentialKnowledge": [
      "系统是分析前人为选定的一组物体，系统边界区分内力与外力。 · A system is a chosen collection of objects; the system boundary separates internal from external forces.",
      "系统性质（总动量、质心运动、温度、压强、内能等）由组成对象之间的相互作用决定；改变内部相互作用会改变这些性质。 · System properties (total momentum, center-of-mass motion, temperature, pressure, internal energy, and so on) are determined by interactions among the constituent objects; changing those interactions changes the properties.",
      "内力成对出现，不改变系统总动量，但可以改变内部相对运动、动能分配和内部能量。 · Internal forces occur in pairs and do not change the system’s total momentum, but they can change relative motion, the distribution of kinetic energy, and internal energy.",
      "开放系统允许质量或能量跨边界传递；封闭系统不允许质量交换但允许能量交换；隔离系统两者都不允许。 · An open system allows mass or energy to cross its boundary; a closed system allows energy but not mass exchange; an isolated system allows neither.",
      "质量跨边界时会携带动量与能量，因此开放系统的动量/能量方程要计入流入与流出。 · Mass crossing a boundary carries momentum and energy, so momentum and energy equations for an open system must include inflow and outflow.",
      "能量可以通过做功或传热跨边界传递；系统选择决定哪些能量算“内部”，哪些算“外部”。 · Energy crosses a boundary as work or heat; the choice of system determines which energy is “internal” and which is “external.”",
      "对系统，\\(\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}\\)，内力不改变系统总动量。 · For a system, \\(\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}\\), and internal forces do not change the total momentum.",
      "系统总动量 \\(\\mathbf p_{\\mathrm{sys}}=M\\mathbf v_{\\mathrm{cm}}\\)，变化只由合外冲量决定。 · The system’s total momentum is \\(\\mathbf p_{\\mathrm{sys}}=M\\mathbf v_{\\mathrm{cm}}\\), and only the net external impulse changes it.",
      "内力可做功并改变各部分动能，但不改变系统总动量。 · Internal forces can do work and change the kinetic energy of the parts, but they do not change the system’s total momentum.",
      "系统成员固定时用常量 M；有质量进出时需用变质量或动量流修正。 · Use a constant M when the membership is fixed; when mass enters or leaves, use a variable-mass or momentum-flow correction."
    ],
    "definition": "系统是分析前人为选定的一组物体；系统边界把内力与外力分开。系统性质由组成对象之间的相互作用决定：内部碰撞、摩擦、化学键等可以改变温度、压强、内能和相对运动，但内力成对抵消，不改变系统总动量。开放系统还允许质量或能量跨边界传递，质量流会携带动量与能量。对系统，牛顿第二定律写成 \\(\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}\\)，其中 \\(M=\\sum m_i\\)，\\(\\mathbf a_{\\mathrm{cm}}\\) 是质心加速度。 · A system is a chosen collection of objects; the system boundary separates internal from external forces. System properties are determined by interactions among the constituent objects: internal collisions, friction, and chemical bonds can change temperature, pressure, internal energy, and relative motion, but internal forces cancel in pairs and do not change the system’s total momentum. An open system also allows mass or energy to cross its boundary, and mass flow carries momentum and energy. For a system, Newton’s second law is written \\(\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}\\), where \\(M=\\sum m_i\\) and \\(\\mathbf a_{\\mathrm{cm}}\\) is the center-of-mass acceleration.",
    "intuition": "先画边界：只有穿过边界的力才是外力。边界内物体之间再怎么推挤，也只改变内部相对运动与能量分配，不会改变整体质心的运动。 · Draw the boundary first: only forces crossing it are external. No matter how the objects inside push and pull, they only change internal relative motion and energy distribution, not the overall center-of-mass motion.",
    "formulas": [
      {
        "latex": "\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}",
        "note": "系统牛顿第二定律。 · Newton’s second law for a system."
      },
      {
        "latex": "\\mathbf a_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\mathbf a_i}{M}",
        "note": "质心加速度。 · Center-of-mass acceleration."
      },
      {
        "latex": "\\mathbf p_{\\mathrm{sys}}=M\\mathbf v_{\\mathrm{cm}}",
        "note": "系统总动量。 · Total momentum of the system."
      },
      {
        "latex": "\\Delta\\mathbf p_{\\mathrm{sys}}=\\int\\sum\\mathbf F_{\\mathrm{ext}}\\,\\mathrm{d}t",
        "note": "系统动量定理：只有外冲量改变总动量。 · System momentum theorem: only external impulse changes the total momentum."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}M}{\\mathrm{d}t}=\\dot m_{\\mathrm{in}}-\\dot m_{\\mathrm{out}}",
        "note": "开放系统的质量平衡；质量流率以 kg/s 计。 · Mass balance for an open system; mass flow rates are in kg/s."
      },
      {
        "latex": "\\Delta E_{\\mathrm{sys}}=W_{\\mathrm{ext}}+Q+E_{\\mathrm{mass,in}}-E_{\\mathrm{mass,out}}",
        "note": "开放系统的能量平衡：功、热与质量流都可使系统能量改变。 · Energy balance for an open system: work, heat, and mass flow can all change the system energy."
      }
    ],
    "derivationNotes": [
      {
        "from": "对每个质点用牛顿第二定律 · Apply Newton’s second law to each particle",
        "to": "系统方程 · System equation",
        "note": "把所有 \\(\\mathbf F_i=m_i\\mathbf a_i\\) 相加，内力由第三定律成对抵消。 · Add all \\(\\mathbf F_i=m_i\\mathbf a_i\\); internal forces cancel in pairs by the third law."
      },
      {
        "from": "质心定义 · Center-of-mass definition",
        "to": "系统总动量 · Total system momentum",
        "note": "对 \\(\\mathbf r_{\\mathrm{cm}}\\) 求导得 \\(\\mathbf p_{\\mathrm{sys}}=M\\mathbf v_{\\mathrm{cm}}\\)。 · Differentiate \\(\\mathbf r_{\\mathrm{cm}}\\) to obtain \\(\\mathbf p_{\\mathrm{sys}}=M\\mathbf v_{\\mathrm{cm}}\\)."
      },
      {
        "from": "系统动量定理 · System momentum theorem",
        "to": "动量守恒 · Momentum conservation",
        "note": "若合外力为零或冲量可忽略，则 \\(\\mathbf p_{\\mathrm{sys}}\\) 守恒。 · If the net external force is zero or its impulse is negligible, \\(\\mathbf p_{\\mathrm{sys}}\\) is conserved."
      },
      {
        "from": "内部相互作用 · Internal interactions",
        "to": "系统性质 · System properties",
        "note": "碰撞、摩擦、化学键改变内部相对运动与内能，但内力成对抵消，不改变总动量；温度、压强等宏观性质正是这些微观相互作用的统计结果。 · Collisions, friction, and chemical bonds change internal relative motion and internal energy, but internal forces cancel in pairs and do not change total momentum; macroscopic properties such as temperature and pressure are the statistical result of these microscopic interactions."
      },
      {
        "from": "开放边界 · Open boundary",
        "to": "质量与能量记账 · Mass and energy accounting",
        "note": "把流入、流出分别写成质量流率与能量流；系统内部的变化等于跨边界净输入加上内部源项。 · Write inflow and outflow as mass and energy flow rates; the change inside the system equals the net input across the boundary plus internal source terms."
      }
    ],
    "conditions": [
      "在惯性参考系中列方程。 · Write the equations in an inertial reference frame.",
      "系统成员固定时可用常量 M；有质量进出时需用变质量或动量流修正。 · A constant M may be used when membership is fixed; when mass enters or leaves, use a variable-mass or momentum-flow correction.",
      "外力指系统外物体对系统内物体的力。 · External forces are exerted by objects outside the system on objects inside it.",
      "内力可以做功、改变内部动能，但不改变系统总动量。 · Internal forces can do work and change internal kinetic energy, but they do not change the system’s total momentum.",
      "开放系统必须同时记录质量、动量和能量的流入与流出。 · An open system requires tracking the inflow and outflow of mass, momentum, and energy.",
      "系统边界一旦选定，受力分析和守恒量判断必须始终围绕这个边界。 · Once the boundary is chosen, force analysis and conservation judgments must remain consistent with it."
    ],
    "keyPoints": [
      "系统边界可自由选择，但选定后要一致。 · The system boundary can be chosen freely, but it must be used consistently once chosen.",
      "系统性质由内部相互作用决定，不能只看单个成员。 · System properties are determined by internal interactions, not by a single member alone.",
      "内力不改变总动量，但可改变各部分的动量、动能与内能。 · Internal forces do not change total momentum, but they can change the momentum, kinetic energy, and internal energy of the parts.",
      "开放系统交换质量与能量；封闭系统只交换能量；隔离系统两者都不交换。 · An open system exchanges mass and energy; a closed system exchanges only energy; an isolated system exchanges neither.",
      "系统总动量的变化只由合外冲量决定。 · Only the net external impulse changes the system’s total momentum.",
      "质心运动代表系统整体平动。 · Center-of-mass motion represents the system’s overall translation.",
      "均匀重力场中重力可视为作用在质心。 · In a uniform gravitational field, gravity can be treated as acting at the center of mass.",
      "选好系统可以消去内力、减少外力，使守恒量更明显。 · A good choice of system removes internal forces, reduces external forces, and makes conserved quantities more evident."
    ],
    "misconceptions": [
      "把内力当成外力列入系统方程。 · Including internal forces as external forces in the system equation.",
      "认为内力一定不做功（爆炸、摩擦生热时内力可做功）。 · Thinking internal forces never do work (they do work in explosions and in friction heating).",
      "反复改变系统边界，导致同一个力被重复计算。 · Changing the system boundary repeatedly, so the same force is counted twice.",
      "认为系统总动量为零就没有内部运动（爆炸后总动量仍可为零）。 · Thinking zero total momentum means no internal motion (after an explosion the total momentum can still be zero).",
      "认为系统性质与内部相互作用无关，只由外部条件决定。 · Thinking system properties are independent of internal interactions and determined only by external conditions.",
      "忽略流入或流出物质携带的动量与能量。 · Ignoring the momentum and energy carried by incoming or outgoing material.",
      "把开放系统当作质量固定的封闭系统处理。 · Treating an open system as a closed system with fixed mass.",
      "混淆封闭系统（不交换质量）与隔离系统（不交换质量也不交换能量）。 · Confusing a closed system (no mass exchange) with an isolated system (no mass or energy exchange)."
    ],
    "examples": [
      {
        "title": "例 1 · 两木块 · Example 1 · Two blocks",
        "prompt": "光滑水平面上，\\(m_1=2.0\\,\\mathrm{kg}\\) 与 \\(m_2=3.0\\,\\mathrm{kg}\\) 紧靠。水平力 \\(F=10\\,\\mathrm{N}\\) 作用在 \\(m_1\\) 上。求加速度与 \\(m_1\\) 对 \\(m_2\\) 的推力。 · Two blocks with \\(m_1=2.0\\,\\mathrm{kg}\\) and \\(m_2=3.0\\,\\mathrm{kg}\\) are in contact on a frictionless horizontal surface. A horizontal force \\(F=10\\,\\mathrm{N}\\) acts on \\(m_1\\). Find the acceleration and the push of \\(m_1\\) on \\(m_2\\).",
        "steps": [
          "取两木块为系统：水平方向只有 \\(F\\) 是外力，\\(a=\\dfrac{F}{m_1+m_2}=\\dfrac{10}{5.0}=2.0\\,\\mathrm{m\\,s^{-2}}\\)。 · Take the two blocks as the system: the only horizontal external force is \\(F\\), so \\(a=\\dfrac{F}{m_1+m_2}=\\dfrac{10}{5.0}=2.0\\,\\mathrm{m\\,s^{-2}}\\).",
          "对 \\(m_2\\) 单独分析：水平方向只受接触力 \\(F_{12}\\)，故 \\(F_{12}=m_2a=3.0\\times2.0=6.0\\,\\mathrm{N}\\)。 · Analyze \\(m_2\\) alone: the only horizontal force is the contact force \\(F_{12}\\), so \\(F_{12}=m_2a=3.0\\times2.0=6.0\\,\\mathrm{N}\\).",
          "检验：对 \\(m_1\\)，\\(F-F_{21}=10-6=4\\,\\mathrm{N}=m_1a\\)，一致。 · Check: for \\(m_1\\), \\(F-F_{21}=10-6=4\\,\\mathrm{N}=m_1a\\), consistent."
        ],
        "solution": "\\(a=2.0\\,\\mathrm{m\\,s^{-2}}\\)，接触力 \\(6.0\\,\\mathrm{N}\\)。 · \\(a=2.0\\,\\mathrm{m\\,s^{-2}}\\) and the contact force is \\(6.0\\,\\mathrm{N}\\).",
        "solutionLatex": "a=2.0\\,\\mathrm{m\\,s^{-2}},\\;F_{12}=6.0\\,\\mathrm{N}"
      },
      {
        "title": "例 2 · 爆炸 · Example 2 · Explosion",
        "prompt": "静止的 \\(2.0\\,\\mathrm{kg}\\) 物体炸成 \\(0.50\\,\\mathrm{kg}\\) 与 \\(1.5\\,\\mathrm{kg}\\) 两块。轻块以 \\(12\\,\\mathrm{m\\,s^{-1}}\\) 向右运动，求重块速度，并说明动能来源。 · A stationary \\(2.0\\,\\mathrm{kg}\\) object explodes into \\(0.50\\,\\mathrm{kg}\\) and \\(1.5\\,\\mathrm{kg}\\) pieces. The lighter piece moves right at \\(12\\,\\mathrm{m\\,s^{-1}}\\). Find the velocity of the heavier piece and explain the source of the kinetic energy.",
        "steps": [
          "爆炸内力远大于外力，系统总动量守恒：\\(0=0.50(12)+1.5v\\)。 · The internal explosion forces greatly exceed external forces, so total momentum is conserved: \\(0=0.50(12)+1.5v\\).",
          "\\(v=-\\dfrac{6.0}{1.5}=-4.0\\,\\mathrm{m\\,s^{-1}}\\)，即向左 \\(4.0\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v=-\\dfrac{6.0}{1.5}=-4.0\\,\\mathrm{m\\,s^{-1}}\\), that is, \\(4.0\\,\\mathrm{m\\,s^{-1}}\\) to the left.",
          "初动能为零，末动能 \\(=\\dfrac12(0.50)(12)^{2}+\\dfrac12(1.5)(4.0)^{2}=36+12=48\\,\\mathrm{J}\\)，来自内部化学能。 · The initial kinetic energy is zero; the final kinetic energy is \\(=\\dfrac12(0.50)(12)^{2}+\\dfrac12(1.5)(4.0)^{2}=36+12=48\\,\\mathrm{J}\\), supplied by internal chemical energy."
        ],
        "solution": "重块向左 \\(4.0\\,\\mathrm{m\\,s^{-1}}\\)；动能来自内部能量。 · The heavier piece moves left at \\(4.0\\,\\mathrm{m\\,s^{-1}}\\); the kinetic energy comes from internal energy.",
        "solutionLatex": "v_2=-4.0\\,\\mathrm{m\\,s^{-1}},\\;\\Delta K=48\\,\\mathrm{J}"
      },
      {
        "title": "例 3 · 人在车上走 · Example 3 · A person walking on a cart",
        "prompt": "人站在静止小车上，忽略地面摩擦。人向右走，车如何运动？ · A person stands on a stationary cart, with ground friction neglected. The person walks to the right; how does the cart move?",
        "steps": [
          "取人+车为系统，水平方向合外力为零，总动量守恒且始终为零。 · Take the person and cart as the system; the horizontal net external force is zero, so total momentum is conserved and remains zero.",
          "人向右获得动量，车必须向左获得等大反向的动量。 · The person gains momentum to the right, so the cart must gain equal momentum to the left.",
          "质心保持静止；人相对车的位移由质量比决定。 · The center of mass remains at rest; the person’s displacement relative to the cart is set by the mass ratio."
        ],
        "solution": "车向左运动；系统质心不动。 · The cart moves left; the system’s center of mass stays fixed."
      },
      {
        "title": "例 4 · 封闭盒中的气体 · Example 4 · Gas in a closed box",
        "prompt": "一定量气体密封在刚性盒中，从外部缓慢加热。以气体为系统，说明温度、压强这些系统性质如何由分子相互作用和外部能量输入共同决定。 · A fixed amount of gas is sealed in a rigid box and slowly heated from outside. Taking the gas as the system, explain how properties such as temperature and pressure are determined by molecular interactions and external energy input.",
        "steps": [
          "气体分子不断碰撞盒壁，碰撞的统计平均效果表现为压强；分子平均动能对应温度。 · Gas molecules continually collide with the walls; the statistical average of these collisions appears as pressure, and the mean molecular kinetic energy corresponds to temperature.",
          "加热使能量以热的形式跨边界进入，分子平均动能增大，温度升高。 · Heating transfers energy across the boundary as heat, increasing the mean molecular kinetic energy and therefore the temperature.",
          "盒子刚性且密封，质量不进出；体积不变，但压强随温度升高而增大。 · The rigid, sealed box prevents mass transfer; the volume is fixed, but the pressure increases as the temperature rises.",
          "若把盒子也纳入系统，能量输入变成系统内部的能量分配，但总能量仍守恒。 · If the box is included in the system, the energy input becomes an internal redistribution of energy, but the total energy is still conserved."
        ],
        "solution": "温度由分子平均动能决定，压强由碰撞的统计效果决定；加热使系统内能增加。 · Temperature is set by the mean molecular kinetic energy and pressure by the statistical effect of collisions; heating increases the system’s internal energy."
      },
      {
        "title": "例 5 · 传送带上的质量流 · Example 5 · Mass flow onto a conveyor belt",
        "prompt": "沙子以 \\(\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}=3.0\\,\\mathrm{kg\\,s^{-1}}\\) 的速率竖直落到以 \\(v=2.0\\,\\mathrm{m\\,s^{-1}}\\) 水平运动的传送带上。忽略摩擦，求维持传送带匀速所需的水平力。 · Sand falls vertically onto a horizontal conveyor belt moving at \\(v=2.0\\,\\mathrm{m\\,s^{-1}}\\) at a rate \\(\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}=3.0\\,\\mathrm{kg\\,s^{-1}}\\). Neglecting friction, find the horizontal force needed to keep the belt moving at constant speed.",
        "steps": [
          "取传送带上的沙子为系统；每秒有质量 \\(\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}\\) 从静止被加速到 \\(v\\)。 · Take the sand on the belt as the system; each second a mass \\(\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}\\) is accelerated from rest to \\(v\\).",
          "质量流携带的动量变化率为 \\(\\dfrac{\\mathrm{d}p}{\\mathrm{d}t}=v\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}\\)。 · The rate of momentum change carried by the mass flow is \\(\\dfrac{\\mathrm{d}p}{\\mathrm{d}t}=v\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}\\).",
          "所需水平力 \\(F=v\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}=(2.0)(3.0)=6.0\\,\\mathrm{N}\\)。 · The required horizontal force is \\(F=v\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}=(2.0)(3.0)=6.0\\,\\mathrm{N}\\).",
          "这是开放系统：质量不断流入，动量方程必须计入流入沙子带来的动量变化。 · This is an open system: mass continuously enters, so the momentum equation must include the momentum change carried by the incoming sand."
        ],
        "solution": "需要 \\(6.0\\,\\mathrm{N}\\) 的水平力。 · A horizontal force of \\(6.0\\,\\mathrm{N}\\) is required.",
        "solutionLatex": "F=v\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}=(2.0)(3.0)=6.0\\,\\mathrm{N}"
      }
    ],
    "examTips": [
      "CED Unit 2：系统、质心与牛顿定律 · CED Unit 2: systems, center of mass, and Newton’s laws",
      "先画系统边界，再只列外力；内力不要写进系统方程。 · Draw the system boundary first, then list only external forces; do not put internal forces in the system equation.",
      "动量守恒的条件是合外冲量为零（或可忽略），不是“没有力”。 · Momentum conservation requires zero (or negligible) net external impulse, not “no forces.”",
      "多体问题常用“整体求加速度、隔离求内力”的两步法。 · For multi-body problems, use the two-step method: whole system for acceleration, isolated body for internal force.",
      "遇到质量进出，先判断开放系统，再写质量、动量和能量的流入流出。 · When mass enters or leaves, identify an open system first, then write the inflow and outflow of mass, momentum, and energy.",
      "系统性质题要指出“哪些内部相互作用导致了这个宏观性质”。 · For system-property questions, state which internal interactions produce the macroscopic property."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.1",
        "title": "质心 · Center of Mass",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton’s Laws of Motion: First and Second Law",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.5",
        "title": "牛顿第三定律 · Newton’s Laws of Motion: Third Law",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u4",
        "code": "4.1",
        "title": "冲量与动量 · Impulse and Momentum",
        "relation": "后续 · follow-up"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.3",
        "title": "机械能守恒 · Conservation of Mechanical Energy",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面 · Newton’s second law and the incline"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：2.1 的质心定义给出系统整体运动的代表点；2.3 的牛顿第二定律提供动力学方程。 · Upstream: the center of mass in 2.1 gives a representative point for overall motion, and Newton’s second law in 2.3 provides the dynamical equation.",
      "数学：求和、积分与流率；开放系统把“变化率 = 净流入 + 内部源”写成质量与能量平衡。 · Mathematics: sums, integrals, and flow rates; open systems express “rate of change = net inflow + internal source” as mass and energy balances.",
      "下游：4.1 的冲量—动量定理与碰撞问题都依赖系统边界和内力抵消；3.3 的能量守恒需要区分封闭与开放系统。 · Downstream: the impulse–momentum theorem and collision problems in 4.1 rely on system boundaries and internal-force cancellation; energy conservation in 3.3 requires distinguishing closed from open systems.",
      "跨学科：生态学把种群与环境交换能量和物质视为开放系统；工程中的火箭、传送带和换热器都要做质量流与能量流核算。 · Cross-disciplinary: ecology treats a population exchanging energy and matter with its environment as an open system; rockets, conveyors, and heat exchangers in engineering all require mass-flow and energy-flow accounting."
    ],
    "intuitionDetailed": "系统选择不唯一：同一问题可以把箱子单独作为系统，也可以把箱子与地球一起作为系统。选得好，外力少、守恒量多，方程更简单。系统边界一旦选定，受力分析必须始终围绕这个边界。系统性质不是单个成员性质的简单相加：温度、压强、内能来自大量微观相互作用的统计效果；内部摩擦或爆炸会改变内能分配，却不改变总动量。开放系统像一间有门窗的房间：能量可以以热或功的形式进出，质量也可以随物质进出；这时要同时记账质量、动量和能量。 · The choice of system is not unique: in the same problem you can take a box alone as the system, or the box plus Earth. A good choice reduces external forces, increases conserved quantities, and simplifies the equations. Once the boundary is chosen, force analysis must remain consistent with it. System properties are not simply the sum of individual properties: temperature, pressure, and internal energy arise from the statistical effects of many microscopic interactions; internal friction or an explosion can redistribute internal energy without changing total momentum. An open system is like a room with doors and windows: energy can enter or leave as heat or work, and mass can enter or leave with matter, so mass, momentum, and energy must all be tracked.",
    "development": [
      "选定系统与边界 · Choose the system and boundary",
      "区分内力与外力 · Distinguish internal from external forces",
      "用内部相互作用解释系统性质 · Explain system properties through internal interactions",
      "对系统用牛顿第二定律 · Apply Newton’s second law to the system",
      "用质心代表整体运动 · Use the center of mass for overall motion",
      "处理开放系统的质量与能量流 · Handle mass and energy flow in open systems",
      "过渡到动量守恒 · Transition to momentum conservation"
    ],
    "checks": [
      "系统总动量由什么决定？ · What determines the system’s total momentum?",
      "内力能改变系统总动能吗？ · Can internal forces change the system’s total kinetic energy?",
      "为什么爆炸问题中总动量可以守恒？ · Why can total momentum be conserved in an explosion?",
      "系统性质如何由内部相互作用决定？请用气体压强或摩擦生热举例。 · How are system properties determined by internal interactions? Use gas pressure or friction heating as an example.",
      "开放、封闭与隔离系统的区别是什么？ · What distinguishes open, closed, and isolated systems?",
      "质量流入传送带时，为什么需要外力维持匀速？ · Why is an external force needed to keep a conveyor belt moving at constant speed when mass flows onto it?"
    ],
    "vocabulary": [
      {
        "termZh": "系统",
        "termEn": "system",
        "defZh": "分析前人为选定的一组物体，其性质由内部相互作用及与环境的作用决定。",
        "defEn": "A chosen collection of objects whose properties are determined by internal interactions and interactions with the environment."
      },
      {
        "termZh": "系统边界",
        "termEn": "system boundary",
        "defZh": "区分系统内部与外部、区分内力与外力的假想边界。",
        "defEn": "An imaginary boundary that separates the system from the environment and internal from external forces."
      },
      {
        "termZh": "内力",
        "termEn": "internal force",
        "defZh": "系统内部物体之间的力，成对出现，不改变系统总动量。",
        "defEn": "A force between objects inside the system; internal forces occur in pairs and do not change the system’s total momentum."
      },
      {
        "termZh": "外力",
        "termEn": "external force",
        "defZh": "系统外物体对系统内物体的力，能改变系统总动量和质心运动。",
        "defEn": "A force exerted by an object outside the system on an object inside it; it can change the system’s total momentum and center-of-mass motion."
      },
      {
        "termZh": "开放系统",
        "termEn": "open system",
        "defZh": "允许质量或能量跨边界传递的系统。",
        "defEn": "A system that allows mass or energy to cross its boundary."
      },
      {
        "termZh": "封闭系统",
        "termEn": "closed system",
        "defZh": "不允许质量交换、但允许能量交换的系统。",
        "defEn": "A system that allows energy exchange but not mass exchange."
      },
      {
        "termZh": "隔离系统",
        "termEn": "isolated system",
        "defZh": "既不允许质量交换也不允许能量交换的系统。",
        "defEn": "A system that allows neither mass nor energy exchange."
      },
      {
        "termZh": "质量流",
        "termEn": "mass flow",
        "defZh": "单位时间跨边界进入或离开系统的质量，会携带动量与能量。",
        "defEn": "Mass entering or leaving a system per unit time; it carries momentum and energy."
      }
    ]
  },
  "2.3": {
    "id": "mech/mech-u2/2.3",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.3",
    "titleZh": "牛顿第一与第二定律",
    "titleEn": "Newton’s Laws of Motion: First and Second Law",
    "layer": "ap",
    "summary": "牛顿第一定律说明惯性，第二定律把合外力与加速度联系起来；自由体图用质心点表示物体、只画外力，张力是绳内相邻微段相互作用的宏观表现，静摩擦系数通常大于动摩擦系数。 · Newton’s first law describes inertia and the second law links net force to acceleration; a free-body diagram represents the object by its center-of-mass dot and shows only external forces, tension is the macroscopic result of interactions between adjacent string segments, and the coefficient of static friction is typically greater than the coefficient of kinetic friction.",
    "learningObjectives": [
      "能陈述牛顿第一与第二定律，并判断惯性参考系。 · State Newton’s first and second laws and identify an inertial reference frame.",
      "能用自由体图、分量方程和整体—隔离法解题。 · Solve problems with free-body diagrams, component equations, and the whole-system/isolated-body method.",
      "能说明自由体图为何用质心点表示物体，以及为什么所有外力箭头都从该点出发。 · Explain why a free-body diagram represents an object by its center-of-mass dot and why all external force arrows originate there.",
      "能解释张力的微观来源、理想绳条件，以及张力何时均匀、何时变化。 · Explain the microscopic origin of tension, the ideal-string conditions, and when tension is uniform or variable.",
      "能比较静摩擦与动摩擦，说明为什么同一对表面的 μs 通常大于 μk。 · Compare static and kinetic friction and explain why μs is typically greater than μk for the same pair of surfaces."
    ],
    "essentialKnowledge": [
      "牛顿第一定律：在惯性参考系中，若物体所受合外力为零，则速度保持不变（静止或匀速直线运动）。 · Newton’s first law: in an inertial frame, if the net external force on an object is zero, its velocity remains constant (at rest or in uniform straight-line motion).",
      "牛顿第二定律：\\(\\sum\\vec F=m\\vec a\\)，加速度与合外力成正比、与质量成反比，方向沿合外力，且是瞬时关系。 · Newton’s second law: \\(\\sum\\vec F=m\\vec a\\); acceleration is proportional to the net force and inversely proportional to mass, points along the net force, and is an instantaneous relation.",
      "质量是惯性大小的量度；重量是重力的大小 \\(W=mg\\)，两者概念不同。 · Mass measures inertia; weight is the magnitude of gravity, \\(W=mg\\), and the two are conceptually different.",
      "平衡条件 \\(\\sum\\vec F=0\\) 包括静止与匀速直线运动两种状态。 · The equilibrium condition \\(\\sum\\vec F=0\\) includes both rest and uniform straight-line motion.",
      "自由体图把研究对象简化为一个位于质心的点，只画环境作用在该对象上的外力，所有力矢量都从这个质心点出发。 · A free-body diagram reduces the object to a dot at its center of mass, shows only external forces exerted by the environment, and draws every force vector from that center-of-mass dot.",
      "把物体或系统当作“质量全部集中在质心”来处理，是自由体图能用点表示物体、用平移方程求整体加速度的依据；若转动或形变重要，还要另画力矩图或分体图。 · Treating an object or system as if all its mass were at the center of mass is why a free-body diagram can use a dot and translational equations can find the overall acceleration; if rotation or deformation matters, draw a separate torque or multi-body diagram.",
      "多物体问题要为每个物体分别画自由体图；一对第三定律力分别出现在两张图上，不能画在同一张图上相互抵消。 · For multi-body problems, draw a separate free-body diagram for each object; a third-law pair appears once on each diagram and cannot cancel on one diagram.",
      "坐标轴的选择应使方程最简单：通常取一个轴沿加速度方向，另一个轴垂直于它；斜面问题取沿斜面和垂直斜面。 · Choose axes that simplify the equations: usually one axis along the acceleration and one perpendicular to it; for inclines use axes along and perpendicular to the incline.",
      "张力是绳、缆、链等系统内部相邻微小段在外力作用下相互作用的宏观净效果，是原子间电磁作用的宏观表现，不是一种新的基本力。 · Tension is the macroscopic net result of forces that adjacent infinitesimal segments of a string, cable, or chain exert on each other in response to an external force; it is a macroscopic effect of interatomic electromagnetic interactions, not a new fundamental force.",
      "理想绳质量可忽略且不可伸长；在没有切向外力、摩擦和质量的理想情况下，绳中张力处处相同。若绳有质量或存在加速度，张力可以沿绳变化。 · An ideal string has negligible mass and is inextensible; under ideal conditions with no tangential external force, friction, or mass, the tension is the same everywhere. If the string has mass or accelerates, tension can vary along it.",
      "静摩擦力在零到最大值之间自动取值：\\(0\\le f_s\\le\\mu_sN\\)，方向由防止相对滑动的需要决定。 · Static friction adjusts automatically from zero to its maximum: \\(0\\le f_s\\le\\mu_sN\\), with a direction set by the need to prevent relative sliding.",
      "动摩擦力大小为 \\(f_k=\\mu_kN\\)，方向与相对滑动方向相反；同一对表面的静摩擦系数通常大于动摩擦系数，\\(\\mu_s>\\mu_k\\)。 · Kinetic friction has magnitude \\(f_k=\\mu_kN\\) and points opposite the relative sliding; for the same pair of surfaces the coefficient of static friction is typically greater than the coefficient of kinetic friction, \\(\\mu_s>\\mu_k\\).",
      "摩擦系数由接触面的材料、粗糙度和表面状况决定；静摩擦不一定取最大值，动摩擦在相对滑动时近似恒定。 · Friction coefficients depend on the materials, roughness, and surface conditions; static friction is not always at its maximum, while kinetic friction is approximately constant during sliding.",
      "支持力、张力或秤的读数不一定等于重力，它们由运动状态和其他力共同决定。 · A normal force, tension, or scale reading is not necessarily equal to weight; it depends on the motion and the other forces."
    ],
    "definition": "牛顿第一定律：在惯性参考系中，若物体所受合外力为零，则速度保持不变（静止或匀速直线运动）。牛顿第二定律：物体加速度与合外力成正比、与质量成反比，方向沿合外力，写作 \\(\\sum\\vec F=m\\vec a\\)。自由体图（free-body diagram）把研究对象简化为位于质心的点，只画环境作用在该对象上的外力，所有力矢量都从质心点出发。张力（tension）是绳、缆、链等内部相邻微小段在外力作用下相互作用的宏观净效果；理想绳质量可忽略且不可伸长，在没有切向外力和摩擦时张力处处相同。静摩擦系数 \\(\\mu_s\\) 描述即将滑动前的最大静摩擦，动摩擦系数 \\(\\mu_k\\) 描述滑动时的摩擦；同一对表面通常 \\(\\mu_s>\\mu_k\\)。 · Newton’s first law: in an inertial frame, if the net external force on an object is zero, its velocity remains constant (at rest or in uniform straight-line motion). Newton’s second law: acceleration is proportional to the net force and inversely proportional to mass, points along the net force, and is written \\(\\sum\\vec F=m\\vec a\\). A free-body diagram reduces the object to a dot at its center of mass, shows only external forces exerted by the environment, and draws every force vector from that dot. Tension is the macroscopic net result of forces that adjacent infinitesimal segments of a string, cable, or chain exert on each other in response to an external force; an ideal string has negligible mass and is inextensible, so tension is the same everywhere when there is no tangential external force or friction. The coefficient of static friction \\(\\mu_s\\) describes the maximum static friction just before sliding, and the coefficient of kinetic friction \\(\\mu_k\\) describes friction during sliding; for the same pair of surfaces, typically \\(\\mu_s>\\mu_k\\).",
    "intuition": "力不是维持运动的原因，而是改变运动状态的原因；合外力决定加速度，而不是速度本身。画自由体图时，把自己想象成那个物体：只感受别人对你的力，不感受你对别人的力。 · Force does not maintain motion; it changes motion. The net force determines acceleration, not velocity itself. When drawing a free-body diagram, imagine being the object: you feel only the forces others exert on you, not the forces you exert on them.",
    "formulas": [
      {
        "latex": "\\sum\\vec F=0\\;\\Longleftrightarrow\\;\\vec a=0",
        "note": "牛顿第一定律的平衡形式。 · Equilibrium form of Newton’s first law."
      },
      {
        "latex": "\\sum\\vec F=m\\vec a",
        "note": "牛顿第二定律（矢量形式）。 · Newton’s second law (vector form)."
      },
      {
        "latex": "\\sum F_x=ma_x,\\quad \\sum F_y=ma_y",
        "note": "直角坐标分量形式。 · Cartesian component form."
      },
      {
        "latex": "W=mg",
        "note": "重力大小；质量与重量不同。 · Magnitude of weight; mass and weight are different."
      },
      {
        "latex": "0\\le f_s\\le\\mu_sN",
        "note": "静摩擦在一个范围内自动调整，最大值由 μsN 给出。 · Static friction adjusts within a range, with maximum value μsN."
      },
      {
        "latex": "f_k=\\mu_kN",
        "note": "动摩擦大小；方向与相对滑动方向相反。 · Magnitude of kinetic friction; it points opposite the relative sliding."
      },
      {
        "latex": "\\mu_s>\\mu_k\\quad\\text{(typically)}",
        "note": "同一对表面通常静摩擦系数大于动摩擦系数。 · For the same pair of surfaces, the static coefficient is typically larger than the kinetic coefficient."
      },
      {
        "latex": "T(x+\\Delta x)-T(x)=\\Delta m\\,a",
        "note": "绳微段的切向方程；理想无质量绳 \\(\\Delta m=0\\)，所以张力处处相同。 · Tangential equation for a string segment; for an ideal massless string \\(\\Delta m=0\\), so tension is uniform."
      }
    ],
    "derivationNotes": [
      {
        "from": "牛顿第一定律 · Newton’s first law",
        "to": "平衡条件 · Equilibrium condition",
        "note": "合外力为零时速度不变；因此静止和匀速直线运动都属于平衡。 · When the net force is zero, velocity is constant; rest and uniform straight-line motion are both equilibrium."
      },
      {
        "from": "牛顿第二定律 · Newton’s second law",
        "to": "分量方程 · Component equations",
        "note": "把每个力分解到坐标轴上，分别写 \\(\\sum F_x=ma_x\\) 与 \\(\\sum F_y=ma_y\\)。 · Resolve each force onto the axes and write \\(\\sum F_x=ma_x\\) and \\(\\sum F_y=ma_y\\)."
      },
      {
        "from": "质心点模型 · Center-of-mass point model",
        "to": "自由体图 · Free-body diagram",
        "note": "把物体或系统看成质量集中在质心，外力对整体平动的效果不变；因此用一个点表示物体，所有外力箭头从该点出发。 · Treat the object or system as if its mass were at the center of mass; the effect of external forces on overall translation is unchanged, so a dot represents the object and all external force arrows start there."
      },
      {
        "from": "绳微段 · String segment",
        "to": "张力是否均匀 · Whether tension is uniform",
        "note": "取一小段绳 \\(\\Delta m\\)，两端受 \\(T(x+\\Delta x)\\) 与 \\(T(x)\\)；无质量时 \\(\\Delta m=0\\)，两张力等大；有质量且有加速度时，差值提供该段的 \\(\\Delta m\\,a\\)。 · Take a small string segment \\(\\Delta m\\) with \\(T(x+\\Delta x)\\) and \\(T(x)\\) at its ends; when massless, \\(\\Delta m=0\\) and the tensions are equal; when it has mass and accelerates, the difference supplies \\(\\Delta m\\,a\\)."
      },
      {
        "from": "静摩擦阈值 · Static-friction threshold",
        "to": "动摩擦 · Kinetic friction",
        "note": "静摩擦随外加力增大而增大，直到 \\(f_s^{\\max}=\\mu_sN\\)；一旦开始滑动，接触面的微观键不断断裂与重组，摩擦降为近似恒定的 \\(\\mu_kN\\)。 · Static friction grows with the applied force until \\(f_s^{\\max}=\\mu_sN\\); once sliding starts, microscopic bonds continually break and re-form, and friction drops to the approximately constant \\(\\mu_kN\\)."
      },
      {
        "from": "多物体隔离 · Isolating multiple bodies",
        "to": "接触处的力 · Contact force at an interface",
        "note": "先把它当作一个系统求共同加速度，再隔离其中一个物体，用它的自由体图求接触力。 · First treat the bodies as one system to find the common acceleration, then isolate one body and use its free-body diagram to find the contact force."
      }
    ],
    "conditions": [
      "牛顿第一、第二定律在惯性参考系中成立；在非惯性系中分析时需引入惯性力。 · Newton’s first and second laws hold in inertial frames; in a noninertial frame, introduce a fictitious force.",
      "质量恒定；变质量系统应回到动量形式。 · Mass is constant; a variable-mass system should be treated with the momentum form.",
      "自由体图只画作用在被隔离对象上的外力，不画反作用力、内力或 \\(m\\vec a\\)。 · A free-body diagram shows only external forces on the isolated object, not reaction forces, internal forces, or \\(m\\vec a\\).",
      "理想绳要求质量可忽略、不可伸长；若有质量或切向外力，张力沿绳变化。 · An ideal string has negligible mass and is inextensible; if it has mass or a tangential external force, tension varies along it.",
      "静摩擦可在零到最大值之间取值，方向由防止相对滑动的需要决定；不要默认摩擦力总与运动方向相反。 · Static friction can take any value from zero to its maximum, with a direction set by the need to prevent relative sliding; do not assume friction always opposes motion.",
      "摩擦系数由接触面材料与表面状况决定；同一对表面通常 \\(\\mu_s>\\mu_k\\)，但不是数学定理。 · Friction coefficients depend on the materials and surface conditions; for the same pair of surfaces typically \\(\\mu_s>\\mu_k\\), but this is not a mathematical theorem.",
      "支持力垂直于接触面，大小由运动状态和其他力共同决定，不一定等于 \\(mg\\)。 · The normal force is perpendicular to the contact surface and its magnitude depends on the motion and other forces; it is not always \\(mg\\)."
    ],
    "keyPoints": [
      "力改变运动状态，不维持运动。 · Force changes motion; it does not maintain motion.",
      "合力方向等于加速度方向，不一定等于速度方向。 · The net force points along the acceleration, not necessarily along the velocity.",
      "质量是惯性量度，重量是力。 · Mass measures inertia; weight is a force.",
      "平衡条件 \\(\\sum F=0\\) 包括静止与匀速直线运动。 · The equilibrium condition \\(\\sum F=0\\) includes rest and uniform straight-line motion.",
      "自由体图用质心点表示物体，所有外力箭头从该点出发，只画外力。 · A free-body diagram uses a center-of-mass dot, draws every external force from that dot, and shows only external forces.",
      "张力是相邻绳段相互作用的宏观净效果；理想绳中张力处处相同。 · Tension is the macroscopic net effect of adjacent string segments; in an ideal string it is uniform.",
      "静摩擦自动调整，最大值 \\(\\mu_sN\\)；动摩擦近似恒定，\\(\\mu_kN\\)。 · Static friction adjusts automatically up to \\(\\mu_sN\\); kinetic friction is approximately constant at \\(\\mu_kN\\).",
      "同一对表面通常 \\(\\mu_s>\\mu_k\\)，因此启动比维持滑动更费力。 · For the same surfaces typically \\(\\mu_s>\\mu_k\\), so starting motion takes more force than keeping it sliding.",
      "多物体问题先整体求加速度，再隔离求接触力。 · For multi-body problems, find the acceleration of the whole system first, then isolate a body to find the contact force."
    ],
    "misconceptions": [
      "认为“没有力物体就会停下”。 · Thinking an object stops when no force acts.",
      "把合力方向与速度方向混为一谈。 · Confusing the direction of the net force with the direction of velocity.",
      "认为支持力总等于 \\(mg\\)（斜面、加速电梯中不是）。 · Thinking the normal force always equals \\(mg\\) (it does not on inclines or in accelerating elevators).",
      "把作用力与反作用力画在同一个物体上。 · Drawing an action–reaction pair on the same object.",
      "在非惯性系中直接套用 \\(\\sum F=ma\\) 而不加惯性力。 · Applying \\(\\sum F=ma\\) in a noninertial frame without adding the fictitious force.",
      "把力的箭头画在实际接触点而不是质心点，导致平移受力图混乱。 · Drawing force arrows at actual contact points instead of the center-of-mass dot, which confuses the translational free-body diagram.",
      "认为张力是绳子“自己产生”的，或认为任何绳中张力都处处相同。 · Thinking tension is generated by the string itself, or that tension is always uniform in every string.",
      "认为静摩擦总等于 \\(\\mu_sN\\)。 · Thinking static friction always equals \\(\\mu_sN\\).",
      "认为 \\(\\mu_k>\\mu_s\\)，或把摩擦系数当成与表面无关的普适常数。 · Thinking \\(\\mu_k>\\mu_s\\), or treating friction coefficients as universal constants independent of the surfaces."
    ],
    "examples": [
      {
        "title": "例 1 · 斜向拉力 · Example 1 · Angled pull",
        "prompt": "质量 \\(5.0\\,\\mathrm{kg}\\) 的物块在光滑水平面上，受 \\(20\\,\\mathrm{N}\\)、与水平成 \\(30^\\circ\\) 的拉力。求加速度与支持力（\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)）。 · A \\(5.0\\,\\mathrm{kg}\\) block on a frictionless horizontal surface is pulled by a \\(20\\,\\mathrm{N}\\) force at \\(30^\\circ\\) above the horizontal. Find the acceleration and normal force (\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)).",
        "steps": [
          "水平方向：\\(F\\cos30^\\circ=ma_x\\Rightarrow a_x=\\dfrac{20(0.866)}{5.0}=3.46\\,\\mathrm{m\\,s^{-2}}\\)。 · Horizontal: \\(F\\cos30^\\circ=ma_x\\Rightarrow a_x=\\dfrac{20(0.866)}{5.0}=3.46\\,\\mathrm{m\\,s^{-2}}\\).",
          "竖直方向无加速度：\\(N+F\\sin30^\\circ-mg=0\\Rightarrow N=49-10=39\\,\\mathrm{N}\\)。 · No vertical acceleration: \\(N+F\\sin30^\\circ-mg=0\\Rightarrow N=49-10=39\\,\\mathrm{N}\\)."
        ],
        "solution": "\\(a=3.5\\,\\mathrm{m\\,s^{-2}}\\)，\\(N=39\\,\\mathrm{N}\\)。 · \\(a=3.5\\,\\mathrm{m\\,s^{-2}}\\) and \\(N=39\\,\\mathrm{N}\\).",
        "solutionLatex": "a=3.5\\,\\mathrm{m\\,s^{-2}},\\;N=39\\,\\mathrm{N}"
      },
      {
        "title": "例 2 · 电梯视重 · Example 2 · Apparent weight in an elevator",
        "prompt": "质量 \\(60\\,\\mathrm{kg}\\) 的人站在电梯秤上。求电梯以 \\(2.0\\,\\mathrm{m\\,s^{-2}}\\) 向上加速、向下加速时秤的读数。 · A \\(60\\,\\mathrm{kg}\\) person stands on a scale in an elevator. Find the scale reading when the elevator accelerates upward and downward at \\(2.0\\,\\mathrm{m\\,s^{-2}}\\).",
        "steps": [
          "向上加速：\\(N-mg=ma\\Rightarrow N=60(9.8+2.0)=708\\,\\mathrm{N}\\)。 · Upward acceleration: \\(N-mg=ma\\Rightarrow N=60(9.8+2.0)=708\\,\\mathrm{N}\\).",
          "向下加速：\\(mg-N=ma\\Rightarrow N=60(9.8-2.0)=468\\,\\mathrm{N}\\)。 · Downward acceleration: \\(mg-N=ma\\Rightarrow N=60(9.8-2.0)=468\\,\\mathrm{N}\\)."
        ],
        "solution": "向上加速约 \\(708\\,\\mathrm{N}\\)，向下加速约 \\(468\\,\\mathrm{N}\\)；自由落体时读数为零。 · About \\(708\\,\\mathrm{N}\\) upward and \\(468\\,\\mathrm{N}\\) downward; in free fall the reading is zero.",
        "solutionLatex": "N_{\\mathrm{up}}=708\\,\\mathrm{N},\\;N_{\\mathrm{down}}=468\\,\\mathrm{N}"
      },
      {
        "title": "例 3 · 阿特伍德机 · Example 3 · Atwood machine",
        "prompt": "轻绳跨过无摩擦定滑轮，两端分别挂 \\(3.0\\,\\mathrm{kg}\\) 与 \\(5.0\\,\\mathrm{kg}\\) 的物块。求加速度与绳张力。 · A light string passes over a frictionless fixed pulley with \\(3.0\\,\\mathrm{kg}\\) and \\(5.0\\,\\mathrm{kg}\\) blocks hanging from its ends. Find the acceleration and tension.",
        "steps": [
          "整体：\\((m_2-m_1)g=(m_1+m_2)a\\Rightarrow a=\\dfrac{2(9.8)}{8}=2.45\\,\\mathrm{m\\,s^{-2}}\\)。 · Whole system: \\((m_2-m_1)g=(m_1+m_2)a\\Rightarrow a=\\dfrac{2(9.8)}{8}=2.45\\,\\mathrm{m\\,s^{-2}}\\).",
          "隔离轻的一侧：\\(T-m_1g=m_1a\\Rightarrow T=3(9.8+2.45)=36.8\\,\\mathrm{N}\\)。 · Isolate the lighter side: \\(T-m_1g=m_1a\\Rightarrow T=3(9.8+2.45)=36.8\\,\\mathrm{N}\\)."
        ],
        "solution": "\\(a=2.45\\,\\mathrm{m\\,s^{-2}}\\)，\\(T=36.8\\,\\mathrm{N}\\)。 · \\(a=2.45\\,\\mathrm{m\\,s^{-2}}\\) and \\(T=36.8\\,\\mathrm{N}\\).",
        "solutionLatex": "a=2.45\\,\\mathrm{m\\,s^{-2}},\\;T=36.8\\,\\mathrm{N}"
      },
      {
        "title": "例 4 · 用质心点画系统受力图 · Example 4 · System free-body diagram from the center of mass",
        "prompt": "光滑水平面上两个紧靠的物块被水平力 \\(F\\) 推动。以两物块为系统画自由体图，并说明为什么所有外力箭头都从质心点出发。 · Two blocks in contact on a frictionless horizontal surface are pushed by a horizontal force \\(F\\). Draw the free-body diagram of the two-block system and explain why all external force arrows start at the center-of-mass dot.",
        "steps": [
          "系统：两物块。系统外力有 \\(F\\)、总重力 \\((m_1+m_2)g\\)、地面对两物块的支持力；两物块之间的接触力是内力，不画。 · System: the two blocks. External forces are \\(F\\), the total weight \\((m_1+m_2)g\\), and the normal forces from the floor; the contact forces between the blocks are internal and are not drawn.",
          "用质心点表示系统，把 \\(F\\)、总重力、支持力都画成从该点出发的箭头。 · Represent the system by its center-of-mass dot and draw \\(F\\), the total weight, and the normal forces as arrows from that dot.",
          "因为系统可视为质量全部集中在质心，整体平动的加速度由 \\(\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}\\) 决定；力的实际作用点不影响整体平移方程。 · Because the system can be treated as if all mass were at the center of mass, the overall translational acceleration is determined by \\(\\sum\\mathbf F_{\\mathrm{ext}}=M\\mathbf a_{\\mathrm{cm}}\\); the actual application points do not affect the translational equation.",
          "若要分析物块间的接触力，再分别隔离 \\(m_1\\)、\\(m_2\\) 画两张自由体图。 · To analyze the contact force between the blocks, isolate \\(m_1\\) and \\(m_2\\) and draw two separate free-body diagrams."
        ],
        "solution": "系统图只画 \\(F\\)、总重力与支持力，所有箭头从质心点出发；接触力是内力，不在系统图上出现。 · The system diagram shows only \\(F\\), the total weight, and the normal forces, all from the center-of-mass dot; the contact force is internal and does not appear."
      },
      {
        "title": "例 5 · 有质量绳中的张力变化 · Example 5 · Tension variation in a massive rope",
        "prompt": "一根质量 \\(0.50\\,\\mathrm{kg}\\)、长 \\(2.0\\,\\mathrm{m}\\) 的均匀绳竖直悬挂，下端挂 \\(2.0\\,\\mathrm{kg}\\) 的物块，系统静止。求绳顶端和底端的张力，并说明为什么理想绳模型不能给出这个差异。 · A uniform rope of mass \\(0.50\\,\\mathrm{kg}\\) and length \\(2.0\\,\\mathrm{m}\\) hangs vertically with a \\(2.0\\,\\mathrm{kg}\\) block attached to its lower end; the system is at rest. Find the tension at the top and bottom of the rope and explain why the ideal-string model cannot produce this difference.",
        "steps": [
          "绳底端只拉物块：\\(T_{\\mathrm{bottom}}=m_{\\mathrm{block}}g=2.0(9.8)=19.6\\,\\mathrm{N}\\)。 · The bottom of the rope pulls only the block: \\(T_{\\mathrm{bottom}}=m_{\\mathrm{block}}g=2.0(9.8)=19.6\\,\\mathrm{N}\\).",
          "绳顶端还要支撑整根绳：\\(T_{\\mathrm{top}}=(m_{\\mathrm{block}}+m_{\\mathrm{rope}})g=(2.0+0.50)(9.8)=24.5\\,\\mathrm{N}\\)。 · The top must also support the whole rope: \\(T_{\\mathrm{top}}=(m_{\\mathrm{block}}+m_{\\mathrm{rope}})g=(2.0+0.50)(9.8)=24.5\\,\\mathrm{N}\\).",
          "取绳的一小段 \\(\\Delta m\\)：上端张力比下端大 \\(\\Delta m\\,g\\)，差值用来支撑该段重量。 · Take a small rope segment \\(\\Delta m\\): the upper tension exceeds the lower tension by \\(\\Delta m\\,g\\), the difference needed to support that segment’s weight.",
          "理想绳假设质量可忽略，所以 \\(\\Delta m\\to0\\)，张力处处相同；真实绳有质量时张力沿绳变化。 · The ideal-string model assumes negligible mass, so \\(\\Delta m\\to0\\) and tension is uniform; a real rope with mass has tension varying along its length."
        ],
        "solution": "\\(T_{\\mathrm{top}}=24.5\\,\\mathrm{N}\\)，\\(T_{\\mathrm{bottom}}=19.6\\,\\mathrm{N}\\)；差异来自绳自身重量。 · \\(T_{\\mathrm{top}}=24.5\\,\\mathrm{N}\\) and \\(T_{\\mathrm{bottom}}=19.6\\,\\mathrm{N}\\); the difference comes from the rope’s own weight.",
        "solutionLatex": "T_{\\mathrm{top}}=(m_{\\mathrm{block}}+m_{\\mathrm{rope}})g=24.5\\,\\mathrm{N},\\qquad T_{\\mathrm{bottom}}=m_{\\mathrm{block}}g=19.6\\,\\mathrm{N}"
      },
      {
        "title": "例 6 · 静摩擦阈值与动摩擦 · Example 6 · Static-friction threshold and kinetic friction",
        "prompt": "质量 \\(10\\,\\mathrm{kg}\\) 的箱子放在水平地面上，\\(\\mu_s=0.50\\)、\\(\\mu_k=0.35\\)。水平推力从零缓慢增大。求箱子开始运动前的最大静摩擦、开始运动后 \\(F=60\\,\\mathrm{N}\\) 时的加速度，并描述摩擦力随推力变化的图像。 · A \\(10\\,\\mathrm{kg}\\) crate rests on a horizontal floor with \\(\\mu_s=0.50\\) and \\(\\mu_k=0.35\\). A horizontal push increases slowly from zero. Find the maximum static friction before motion, the acceleration at \\(F=60\\,\\mathrm{N}\\) after motion starts, and describe the friction-versus-push graph.",
        "steps": [
          "支持力 \\(N=mg=10(9.8)=98\\,\\mathrm{N}\\)，最大静摩擦 \\(f_s^{\\max}=\\mu_sN=0.50(98)=49\\,\\mathrm{N}\\)。 · Normal force \\(N=mg=10(9.8)=98\\,\\mathrm{N}\\), so maximum static friction \\(f_s^{\\max}=\\mu_sN=0.50(98)=49\\,\\mathrm{N}\\).",
          "当推力 \\(F\\le49\\,\\mathrm{N}\\) 时，静摩擦自动等于 \\(F\\)，箱子不动；超过 \\(49\\,\\mathrm{N}\\) 后开始滑动。 · When \\(F\\le49\\,\\mathrm{N}\\), static friction automatically equals \\(F\\) and the crate stays at rest; above \\(49\\,\\mathrm{N}\\) it begins to slide.",
          "滑动后动摩擦 \\(f_k=\\mu_kN=0.35(98)=34.3\\,\\mathrm{N}\\)，加速度 \\(a=\\dfrac{60-34.3}{10}=2.57\\,\\mathrm{m\\,s^{-2}}\\)。 · During sliding, kinetic friction is \\(f_k=\\mu_kN=0.35(98)=34.3\\,\\mathrm{N}\\), so \\(a=\\dfrac{60-34.3}{10}=2.57\\,\\mathrm{m\\,s^{-2}}\\).",
          "图像：静摩擦段沿 \\(f=F\\) 上升，到 \\(\\mu_sN\\) 达峰；一旦滑动，摩擦力骤降到 \\(\\mu_kN\\) 并近似保持水平。因为 \\(\\mu_s>\\mu_k\\)，峰值高于滑动平台。 · Graph: static friction rises along \\(f=F\\) to the peak \\(\\mu_sN\\); once sliding starts, friction drops abruptly to \\(\\mu_kN\\) and stays approximately horizontal. Because \\(\\mu_s>\\mu_k\\), the peak is above the sliding plateau."
        ],
        "solution": "\\(f_s^{\\max}=49\\,\\mathrm{N}\\)；\\(F=60\\,\\mathrm{N}\\) 时 \\(a=2.57\\,\\mathrm{m\\,s^{-2}}\\)；图像先升到 \\(\\mu_sN\\) 再降到 \\(\\mu_kN\\)。 · \\(f_s^{\\max}=49\\,\\mathrm{N}\\); at \\(F=60\\,\\mathrm{N}\\), \\(a=2.57\\,\\mathrm{m\\,s^{-2}}\\); the graph rises to \\(\\mu_sN\\) and then drops to \\(\\mu_kN\\).",
        "solutionLatex": "f_s^{\\max}=\\mu_sN=49\\,\\mathrm{N},\\qquad a=\\dfrac{F-\\mu_kN}{m}=2.57\\,\\mathrm{m\\,s^{-2}}"
      }
    ],
    "examTips": [
      "CED Unit 2：力与平动动力学 · CED Unit 2: force and translational dynamics",
      "先画受力图，再定正方向，最后写分量方程。 · Draw the free-body diagram, choose the positive direction, then write component equations.",
      "自由体图用质心点，所有外力箭头从该点出发；不要画反作用力、内力或 \\(m\\vec a\\)。 · Use a center-of-mass dot and draw all external force arrows from it; do not draw reaction forces, internal forces, or \\(m\\vec a\\).",
      "连接体：整体求 \\(a\\)，隔离求内力。 · Connected bodies: whole system for \\(a\\), isolated body for internal force.",
      "区分“平衡”与“静止”：匀速直线运动同样合力为零。 · Distinguish “equilibrium” from “rest”: uniform straight-line motion also has zero net force.",
      "张力题先判断绳是否理想；有质量或加速度时，张力可能沿绳变化。 · In tension problems, first decide whether the string is ideal; with mass or acceleration, tension may vary along it.",
      "摩擦题先算最大静摩擦 \\(\\mu_sN\\)，判断是否滑动；滑动后用 \\(\\mu_kN\\)。 · For friction problems, compute the maximum static friction \\(\\mu_sN\\) first and decide whether sliding occurs; use \\(\\mu_kN\\) after sliding."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.2",
        "title": "系统 · Systems",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.1",
        "title": "质心 · Center of Mass",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.4",
        "title": "圆周运动 · Circular Motion",
        "relation": "后续 · follow-up"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.5",
        "title": "牛顿第三定律 · Newton’s Laws of Motion: Third Law",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.7",
        "title": "阻力与终端速度 · Resistive Forces and Terminal Velocity",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面 · Newton’s second law and the incline"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "先修：2.1 的质心点模型说明为什么自由体图可以用一个点表示物体；2.2 的系统边界决定哪些力是内力、哪些是外力。 · Upstream: the center-of-mass point model in 2.1 explains why a free-body diagram can represent an object by a dot; the system boundary in 2.2 determines which forces are internal or external.",
      "数学：把力分解到坐标轴，得到两个标量方程；多物体问题得到联立方程，消元时注意第三定律力对的大小相等。 · Mathematics: resolve forces onto axes to obtain two scalar equations; multi-body problems give simultaneous equations, and third-law pairs have equal magnitudes when eliminating variables.",
      "下游：2.4 的圆周运动、2.6 的视重与等效原理、2.7 的摩擦与阻力、2.8 的弹簧力都要先画自由体图；张力与摩擦是接触力的典型例子。 · Downstream: circular motion in 2.4, apparent weight and the equivalence principle in 2.6, friction and drag in 2.7, and spring forces in 2.8 all begin with a free-body diagram; tension and friction are typical contact forces.",
      "跨学科：生物力学中的地面反作用力与肌腱张力、工程中的绳索与传动带、材料科学中的摩擦与磨损，都可以用自由体图和接触力分析。 · Cross-disciplinary: ground reaction forces and tendon tension in biomechanics, ropes and belts in engineering, and friction and wear in materials science can all be analyzed with free-body diagrams and contact forces."
    ],
    "intuitionDetailed": "解题时先选系统、画受力图，再沿运动方向与垂直方向分解。若 \\(\\sum F=0\\)，物体可以静止也可以匀速运动；若合力与速度同向则加速，反向则减速，垂直则只改变方向。电梯视重、连接体与斜面问题都归结为“合力 → 加速度”。自由体图的关键是“只看别人对研究对象施加的力”，并用质心点代表物体；这样平移方程最简洁。张力不是一种新的力，而是绳内无数微小段之间电磁相互作用的宏观合力；理想绳把质量忽略后，相邻段的张力必须相等。摩擦则要看静摩擦是否达到阈值：静摩擦会自动调整，动摩擦在滑动后近似恒定，而同一对表面的 \\(\\mu_s\\) 通常大于 \\(\\mu_k\\)，所以“推动”往往比“维持滑动”更费力。 · Start by choosing the system and drawing the free-body diagram, then resolve forces along and perpendicular to the motion. If \\(\\sum F=0\\), the object can be at rest or in uniform motion; if the net force is along the velocity, the object speeds up, if opposite it slows down, and if perpendicular only the direction changes. Elevator apparent weight, connected bodies, and inclines all reduce to “net force → acceleration.” The key to a free-body diagram is “show only the forces others exert on the object” and represent the object by its center-of-mass dot, which keeps the translational equations simple. Tension is not a new force; it is the macroscopic net of electromagnetic interactions among countless tiny string segments. In an ideal string, neglecting mass forces the tension in adjacent segments to be equal. Friction depends on whether static friction has reached its threshold: static friction adjusts automatically, kinetic friction is approximately constant during sliding, and \\(\\mu_s\\) is typically greater than \\(\\mu_k\\) for the same surfaces, so starting motion usually takes more force than keeping it sliding.",
    "development": [
      "惯性参考系 · Inertial reference frames",
      "受力图与合力 · Free-body diagrams and net force",
      "分量形式的第二定律 · Component form of the second law",
      "质心点表示与多体隔离 · Center-of-mass representation and multi-body isolation",
      "张力的微观来源与理想绳 · Microscopic origin of tension and ideal strings",
      "静摩擦、动摩擦与阈值 · Static friction, kinetic friction, and thresholds",
      "视重与连接体 · Apparent weight and connected bodies",
      "平衡与匀速运动 · Equilibrium and uniform motion"
    ],
    "checks": [
      "为什么匀速运动的物体合力也为零？ · Why is the net force zero for an object in uniform motion?",
      "支持力什么时候不等于 \\(mg\\)？ · When does the normal force differ from \\(mg\\)?",
      "连接体问题中如何求绳张力？ · How do you find the string tension in a connected-body problem?",
      "自由体图为什么用质心点表示物体，而不是画在实际接触点？ · Why does a free-body diagram use the center-of-mass dot instead of actual contact points?",
      "为什么理想绳中张力处处相同？有质量绳中张力为什么可以不同？ · Why is tension uniform in an ideal string, and why can it vary in a massive rope?",
      "静摩擦什么时候等于 \\(\\mu_sN\\)？滑动后摩擦力如何变化？ · When does static friction equal \\(\\mu_sN\\)? How does friction change after sliding starts?",
      "为什么同一对表面通常 \\(\\mu_s>\\mu_k\\)？ · Why is \\(\\mu_s>\\mu_k\\) typical for the same pair of surfaces?"
    ],
    "vocabulary": [
      {
        "termZh": "自由体图",
        "termEn": "free-body diagram",
        "defZh": "用质心点表示研究对象、只画环境作用在该对象上的外力的受力图。",
        "defEn": "A force diagram that represents the object by its center-of-mass dot and shows only external forces exerted by the environment."
      },
      {
        "termZh": "质心点模型",
        "termEn": "center-of-mass point model",
        "defZh": "把物体或系统的全部质量集中在质心、用平移方程分析整体运动的模型。",
        "defEn": "A model that concentrates all mass at the center of mass and analyzes overall motion with translational equations."
      },
      {
        "termZh": "张力",
        "termEn": "tension",
        "defZh": "绳、缆、链等内部相邻微小段在外力作用下相互作用的宏观净效果，沿绳方向作用。",
        "defEn": "The macroscopic net result of forces that adjacent infinitesimal segments of a string, cable, or chain exert on each other in response to an external force, acting along the string."
      },
      {
        "termZh": "理想绳",
        "termEn": "ideal string",
        "defZh": "质量可忽略、不可伸长，且在没有切向外力与摩擦时张力处处相同的绳模型。",
        "defEn": "A string model with negligible mass and negligible stretching, whose tension is uniform when there is no tangential external force or friction."
      },
      {
        "termZh": "静摩擦",
        "termEn": "static friction",
        "defZh": "物体有相对滑动趋势但尚未滑动时，接触面施加的、阻止相对滑动的力。",
        "defEn": "The force exerted by a surface to prevent relative sliding when an object tends to slide but has not yet moved."
      },
      {
        "termZh": "动摩擦",
        "termEn": "kinetic friction",
        "defZh": "物体相对接触面滑动时施加的、方向与相对滑动相反的力。",
        "defEn": "The force exerted when an object slides relative to a surface, directed opposite the relative sliding."
      },
      {
        "termZh": "静摩擦系数",
        "termEn": "coefficient of static friction",
        "defZh": "最大静摩擦与支持力的比值，\\(\\mu_s=\\dfrac{f_s^{\\max}}{N}\\)。",
        "defEn": "The ratio of maximum static friction to the normal force, \\(\\mu_s=\\dfrac{f_s^{\\max}}{N}\\)."
      },
      {
        "termZh": "动摩擦系数",
        "termEn": "coefficient of kinetic friction",
        "defZh": "滑动摩擦与支持力的比值，\\(\\mu_k=\\dfrac{f_k}{N}\\)。",
        "defEn": "The ratio of kinetic friction to the normal force, \\(\\mu_k=\\dfrac{f_k}{N}\\)."
      }
    ]
  },
  "2.4": {
    "id": "mech/mech-u2/2.4",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.4",
    "titleZh": "圆周运动",
    "titleEn": "Circular Motion",
    "layer": "ap",
    "summary": "圆周运动的速度沿切线；总加速度是向心加速度与切向加速度的矢量和，匀速圆周运动只有向心分量，变速圆周运动两者兼有。 · Velocity is tangent to the circle; the net acceleration is the vector sum of centripetal and tangential components—uniform circular motion has only the centripetal part, while nonuniform circular motion has both.",
    "learningObjectives": [
      "能陈述圆周运动的核心定义与适用条件。 · State the core definition and conditions of circular motion.",
      "能用向心加速度的三种等价写法分析问题。 · Analyze problems with the three equivalent forms of centripetal acceleration.",
      "能把向心加速度与切向加速度矢量合成，求总加速度的大小和方向。 · Combine centripetal and tangential acceleration as vectors to find the magnitude and direction of the net acceleration.",
      "能分析竖直圆周运动的临界条件。 · Analyze critical conditions in vertical circular motion.",
      "能识别“额外画向心力”“把加速度标量相加”等常见误用并纠正。 · Identify and correct common errors such as drawing an extra centripetal force or adding accelerations as scalars."
    ],
    "essentialKnowledge": [
      "速度沿圆周切线；速度方向改变需要向心加速度，速率改变需要切向加速度。 · Velocity is tangent to the circle; changing the direction requires centripetal acceleration, and changing the speed requires tangential acceleration.",
      "向心加速度 \\(a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r=\\dfrac{4\\pi^{2}r}{T^{2}}\\)，方向指向圆心。 · Centripetal acceleration is \\(a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r=\\dfrac{4\\pi^{2}r}{T^{2}}\\), directed toward the center.",
      "切向加速度 \\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\alpha\\)，方向沿切线；加速时与速度同向，减速时与速度反向。 · Tangential acceleration is \\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\alpha\\), directed along the tangent; it is parallel to velocity when speeding up and opposite when slowing down.",
      "总加速度是向心加速度与切向加速度的矢量和：\\(\\vec a=\\vec a_c+\\vec a_t\\)，两者互相垂直。 · The net acceleration is the vector sum of centripetal and tangential acceleration: \\(\\vec a=\\vec a_c+\\vec a_t\\), and the two components are perpendicular.",
      "总加速度大小 \\(a=\\sqrt{a_c^{2}+a_t^{2}}\\)，方向与径向的夹角满足 \\(\\tan\\varphi=\\dfrac{a_t}{a_c}\\)。 · The net acceleration has magnitude \\(a=\\sqrt{a_c^{2}+a_t^{2}}\\), and its angle with the radial direction satisfies \\(\\tan\\varphi=\\dfrac{a_t}{a_c}\\).",
      "匀速圆周运动 \\(a_t=0\\)，总加速度就是向心加速度；变速圆周运动两者都不为零，总加速度不再指向圆心。 · For uniform circular motion \\(a_t=0\\), so the net acceleration is centripetal; for nonuniform circular motion both components are nonzero and the net acceleration no longer points toward the center.",
      "向心力不是一种新的力，而是合外力沿径向的分量；它由绳张力、重力、摩擦力、支持力或它们的合力提供。 · Centripetal force is not a new force but the radial component of the net external force; it is provided by tension, gravity, friction, normal force, or their resultant.",
      "径向牛顿第二定律：\\(\\sum F_{\\mathrm{radial}}=m\\dfrac{v^{2}}{r}\\)。 · Radial Newton’s second law: \\(\\sum F_{\\mathrm{radial}}=m\\dfrac{v^{2}}{r}\\).",
      "竖直圆周运动要分位置讨论：最高点、最低点的径向合力方向不同，张力或支持力随高度变化；临界条件常令约束力为零。 · Vertical circular motion must be analyzed position by position: the radial net force differs at the top and bottom, tension or normal force varies with height, and critical conditions often set a constraint force to zero.",
      "卫星绕行时万有引力提供向心力；汽车过拱桥最高点时支持力小于 \\(mg\\)。 · For a satellite, gravity provides the centripetal force; a car at the top of a humpback bridge has a normal force smaller than \\(mg\\)."
    ],
    "definition": "圆周运动是物体沿圆周轨道的运动。匀速圆周运动速度大小不变、方向不断改变，因此存在指向圆心的向心加速度 \\(a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r=\\dfrac{4\\pi^{2}r}{T^{2}}\\)。若速率也变化，还存在沿切线的切向加速度 \\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\alpha\\)。总加速度是两者的矢量和：\\(\\vec a=\\vec a_c+\\vec a_t\\)，大小 \\(a=\\sqrt{a_c^{2}+a_t^{2}}\\)，方向由 \\(\\tan\\varphi=\\dfrac{a_t}{a_c}\\) 给出。向心力不是新的力，而是合外力沿径向的分量。 · Circular motion is motion along a circular path. In uniform circular motion the speed is constant but the direction changes continuously, so there is a centripetal acceleration toward the center: \\(a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r=\\dfrac{4\\pi^{2}r}{T^{2}}\\). If the speed also changes, there is a tangential acceleration \\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\alpha\\) along the tangent. The net acceleration is their vector sum: \\(\\vec a=\\vec a_c+\\vec a_t\\), with magnitude \\(a=\\sqrt{a_c^{2}+a_t^{2}}\\) and direction given by \\(\\tan\\varphi=\\dfrac{a_t}{a_c}\\). Centripetal force is not a new force but the radial component of the net external force.",
    "intuition": "速度沿切线，向心加速度指向圆心；没有向心力，物体将沿切线飞出去。切向加速度只负责“变快或变慢”，向心加速度只负责“转弯”。 · Velocity is tangent to the circle and centripetal acceleration points toward the center; without a centripetal force the object would fly off along the tangent. Tangential acceleration changes only the speed, while centripetal acceleration changes only the direction.",
    "formulas": [
      {
        "latex": "a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r=\\dfrac{4\\pi^{2}r}{T^{2}}",
        "note": "向心加速度的三种等价写法。 · Three equivalent forms of centripetal acceleration."
      },
      {
        "latex": "a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\alpha",
        "note": "切向加速度；改变速率。 · Tangential acceleration; it changes speed."
      },
      {
        "latex": "\\vec a=\\vec a_c+\\vec a_t",
        "note": "总加速度是向心与切向加速度的矢量和。 · The net acceleration is the vector sum of centripetal and tangential acceleration."
      },
      {
        "latex": "a=\\sqrt{a_c^{2}+a_t^{2}}",
        "note": "因为两分量互相垂直，总加速度大小用勾股定理。 · Because the components are perpendicular, the net magnitude follows from the Pythagorean theorem."
      },
      {
        "latex": "\\tan\\varphi=\\dfrac{a_t}{a_c}",
        "note": "总加速度与径向的夹角。 · Angle between the net acceleration and the radial direction."
      },
      {
        "latex": "\\sum F_{\\mathrm{radial}}=m\\dfrac{v^{2}}{r}",
        "note": "径向牛顿第二定律。 · Radial Newton’s second law."
      },
      {
        "latex": "v=\\dfrac{2\\pi r}{T},\\quad \\omega=\\dfrac{2\\pi}{T}",
        "note": "线速度、角速度与周期的关系。 · Relations among speed, angular speed, and period."
      },
      {
        "latex": "\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}",
        "note": "角加速度；与切向加速度满足 \\(a_t=r\\alpha\\)。 · Angular acceleration; it satisfies \\(a_t=r\\alpha\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "速度方向改变 · Changing velocity direction",
        "to": "向心加速度 · Centripetal acceleration",
        "note": "在很短时间 \\(\\Delta t\\) 内，速度矢量转过小角 \\(\\Delta\\theta\\)，方向变化率的大小为 \\(\\dfrac{v^{2}}{r}\\)，指向圆心。 · In a short time \\(\\Delta t\\), the velocity vector turns through a small angle \\(\\Delta\\theta\\); the magnitude of its direction-change rate is \\(\\dfrac{v^{2}}{r}\\), directed toward the center."
      },
      {
        "from": "速率改变 · Changing speed",
        "to": "切向加速度 · Tangential acceleration",
        "note": "\\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\) 沿切线；它只改变速度大小，不改变速度方向。 · \\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\) is along the tangent; it changes only the speed, not the direction of velocity."
      },
      {
        "from": "两个垂直分量 · Two perpendicular components",
        "to": "总加速度 · Net acceleration",
        "note": "径向与切向互相垂直，所以矢量合成给出 \\(a=\\sqrt{a_c^{2}+a_t^{2}}\\)，方向满足 \\(\\tan\\varphi=\\dfrac{a_t}{a_c}\\)。 · The radial and tangential directions are perpendicular, so vector addition gives \\(a=\\sqrt{a_c^{2}+a_t^{2}}\\) with direction \\(\\tan\\varphi=\\dfrac{a_t}{a_c}\\)."
      },
      {
        "from": "径向牛顿第二定律 · Radial Newton’s second law",
        "to": "向心力的来源 · Source of centripetal force",
        "note": "把真实力分解到径向，径向合力等于 \\(m\\dfrac{v^{2}}{r}\\)；不要额外添加“向心力”。 · Resolve real forces onto the radial direction; the radial net force equals \\(m\\dfrac{v^{2}}{r}\\). Do not add an extra “centripetal force.”"
      },
      {
        "from": "临界条件 · Critical condition",
        "to": "约束力为零 · Zero constraint force",
        "note": "绳松弛、支持力为零或轨道失去接触时，令相应约束力为零，再由径向方程求临界速度。 · When a string goes slack, a normal force vanishes, or contact is lost, set the corresponding constraint force to zero and solve the radial equation for the critical speed."
      }
    ],
    "conditions": [
      "圆周半径 \\(r\\) 固定；圆心与半径先明确。 · The radius \\(r\\) is fixed; identify the center and radius first.",
      "匀速圆周运动只有径向加速度；变速圆周运动还有切向分量。 · Uniform circular motion has only radial acceleration; nonuniform circular motion also has a tangential component.",
      "向心力必须由真实力提供，不能凭空添加。 · Centripetal force must be provided by real forces and cannot be invented.",
      "绳、轨道等约束力有方向限制：绳只能拉、轨道只能推，临界条件常令约束力为零。 · Constraint forces have directional limits: a string can only pull and a track can only push, so critical conditions often set a constraint force to zero.",
      "\\(a_c=\\dfrac{v^{2}}{r}\\) 适用于圆周路径；一般曲线用曲率半径 \\(\\rho\\) 代替 \\(r\\)。 · \\(a_c=\\dfrac{v^{2}}{r}\\) applies to a circular path; for a general curve replace \\(r\\) with the radius of curvature \\(\\rho\\).",
      "切向加速度只改变速率，不改变速度方向；向心加速度只改变方向，不改变速率。 · Tangential acceleration changes only the speed, not the direction; centripetal acceleration changes only the direction, not the speed."
    ],
    "keyPoints": [
      "速度沿切线，向心加速度指向圆心。 · Velocity is tangent to the circle and centripetal acceleration points toward the center.",
      "切向加速度沿切线，改变速率。 · Tangential acceleration is along the tangent and changes speed.",
      "总加速度是两者的矢量和，大小用勾股定理，方向由 \\(\\tan\\varphi=\\dfrac{a_t}{a_c}\\) 给出。 · The net acceleration is their vector sum; its magnitude uses the Pythagorean theorem and its direction follows from \\(\\tan\\varphi=\\dfrac{a_t}{a_c}\\).",
      "匀速圆周运动 \\(a_t=0\\)，总加速度就是向心加速度。 · For uniform circular motion \\(a_t=0\\), so the net acceleration is centripetal.",
      "向心力是合力沿径向的分量，不是独立力。 · Centripetal force is the radial component of the net force, not an independent force.",
      "周期越小、半径越小，向心加速度越大。 · Smaller periods and smaller radii give larger centripetal acceleration.",
      "汽车过拱桥最高点支持力小于 \\(mg\\)。 · A car at the top of a humpback bridge has a normal force smaller than \\(mg\\).",
      "卫星的向心力由万有引力提供。 · For a satellite, gravity provides the centripetal force.",
      "临界问题常令约束力为零（绳松弛、支持力为零）。 · Critical problems often set a constraint force to zero (string slack, zero normal force)."
    ],
    "misconceptions": [
      "在受力图上额外画一个“向心力”。 · Drawing an extra “centripetal force” on the free-body diagram.",
      "认为向心力与速度同向（实际垂直）。 · Thinking centripetal force is along the velocity (it is perpendicular).",
      "认为匀速圆周运动加速度为零。 · Thinking uniform circular motion has zero acceleration.",
      "把 \\(a_c=\\dfrac{v^{2}}{r}\\) 用于非圆周轨道而不改用曲率半径。 · Using \\(a_c=\\dfrac{v^{2}}{r}\\) for a noncircular path without replacing \\(r\\) by the radius of curvature.",
      "忽略竖直圆周运动中张力随位置变化。 · Ignoring the variation of tension with position in vertical circular motion.",
      "把 \\(a_c\\) 与 \\(a_t\\) 代数相加，而不是矢量合成。 · Adding \\(a_c\\) and \\(a_t\\) algebraically instead of as vectors.",
      "认为变速圆周运动的总加速度仍指向圆心。 · Thinking the net acceleration of nonuniform circular motion still points toward the center.",
      "认为切向加速度会改变速度方向。 · Thinking tangential acceleration changes the direction of velocity."
    ],
    "examples": [
      {
        "title": "例 1 · 汽车转弯 · Example 1 · Car turning",
        "prompt": "汽车以 \\(20\\,\\mathrm{m\\,s^{-1}}\\) 通过半径 \\(50\\,\\mathrm{m}\\) 的水平弯道。求所需最小静摩擦因数（\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)）。 · A car moves at \\(20\\,\\mathrm{m\\,s^{-1}}\\) through a horizontal curve of radius \\(50\\,\\mathrm{m}\\). Find the minimum coefficient of static friction (\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)).",
        "steps": [
          "静摩擦力提供向心力：\\(f_s=m\\dfrac{v^{2}}{r}\\)。 · Static friction provides the centripetal force: \\(f_s=m\\dfrac{v^{2}}{r}\\).",
          "最大静摩擦 \\(f_s\\le\\mu_s mg\\)，临界时 \\(\\mu_s=\\dfrac{v^{2}}{rg}=\\dfrac{400}{490}=0.816\\)。 · Maximum static friction is \\(f_s\\le\\mu_s mg\\); at the threshold \\(\\mu_s=\\dfrac{v^{2}}{rg}=\\dfrac{400}{490}=0.816\\)."
        ],
        "solution": "\\(\\mu_s\\ge 0.82\\)。 · \\(\\mu_s\\ge 0.82\\).",
        "solutionLatex": "\\mu_s\\ge 0.82"
      },
      {
        "title": "例 2 · 水平圆周 · Example 2 · Horizontal circle",
        "prompt": "质量 \\(0.20\\,\\mathrm{kg}\\) 的小球在光滑水平桌面上用 \\(0.50\\,\\mathrm{m}\\) 的绳拉着做匀速圆周运动，周期 \\(0.40\\,\\mathrm{s}\\)。求绳张力。 · A \\(0.20\\,\\mathrm{kg}\\) ball on a frictionless horizontal table is pulled by a \\(0.50\\,\\mathrm{m}\\) string in uniform circular motion with period \\(0.40\\,\\mathrm{s}\\). Find the tension.",
        "steps": [
          "\\(v=\\dfrac{2\\pi r}{T}=\\dfrac{2\\pi(0.50)}{0.40}=7.85\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v=\\dfrac{2\\pi r}{T}=\\dfrac{2\\pi(0.50)}{0.40}=7.85\\,\\mathrm{m\\,s^{-1}}\\).",
          "\\(T_{\\mathrm{tension}}=m\\dfrac{v^{2}}{r}=0.20\\dfrac{61.7}{0.50}=24.7\\,\\mathrm{N}\\)。 · \\(T_{\\mathrm{tension}}=m\\dfrac{v^{2}}{r}=0.20\\dfrac{61.7}{0.50}=24.7\\,\\mathrm{N}\\)."
        ],
        "solution": "\\(T\\approx 25\\,\\mathrm{N}\\)。 · \\(T\\approx 25\\,\\mathrm{N}\\).",
        "solutionLatex": "T\\approx 25\\,\\mathrm{N}"
      },
      {
        "title": "例 3 · 拱桥 · Example 3 · Humpback bridge",
        "prompt": "汽车以速度 \\(v\\) 通过半径 \\(r\\) 的拱桥最高点。求支持力为零时的临界速度。 · A car passes the top of a humpback bridge of radius \\(r\\) at speed \\(v\\). Find the critical speed at which the normal force becomes zero.",
        "steps": [
          "最高点径向合力向下：\\(mg-N=m\\dfrac{v^{2}}{r}\\)。 · At the top the radial net force is downward: \\(mg-N=m\\dfrac{v^{2}}{r}\\).",
          "令 \\(N=0\\)，得 \\(v=\\sqrt{gr}\\)。 · Set \\(N=0\\) to obtain \\(v=\\sqrt{gr}\\)."
        ],
        "solution": "\\(v_{\\mathrm{crit}}=\\sqrt{gr}\\)；超过此速度汽车将离开桥面。 · \\(v_{\\mathrm{crit}}=\\sqrt{gr}\\); above this speed the car leaves the road.",
        "solutionLatex": "v_{\\mathrm{crit}}=\\sqrt{gr}"
      },
      {
        "title": "例 4 · 向心与切向加速度的矢量合成 · Example 4 · Vector sum of centripetal and tangential acceleration",
        "prompt": "汽车在半径 \\(r=50\\,\\mathrm{m}\\) 的圆轨道上行驶，某时刻速率 \\(v=10\\,\\mathrm{m\\,s^{-1}}\\)，切向加速度 \\(a_t=2.0\\,\\mathrm{m\\,s^{-2}}\\) 与速度同向。求总加速度的大小和方向。 · A car moves on a circular track of radius \\(r=50\\,\\mathrm{m}\\). At one instant its speed is \\(v=10\\,\\mathrm{m\\,s^{-1}}\\) and its tangential acceleration is \\(a_t=2.0\\,\\mathrm{m\\,s^{-2}}\\) in the direction of motion. Find the magnitude and direction of the net acceleration.",
        "steps": [
          "向心加速度 \\(a_c=\\dfrac{v^{2}}{r}=\\dfrac{(10)^{2}}{50}=2.0\\,\\mathrm{m\\,s^{-2}}\\)，指向圆心。 · Centripetal acceleration \\(a_c=\\dfrac{v^{2}}{r}=\\dfrac{(10)^{2}}{50}=2.0\\,\\mathrm{m\\,s^{-2}}\\), toward the center.",
          "切向与径向垂直：\\(a=\\sqrt{a_c^{2}+a_t^{2}}=\\sqrt{(2.0)^{2}+(2.0)^{2}}=2.83\\,\\mathrm{m\\,s^{-2}}\\)。 · Tangential and radial directions are perpendicular: \\(a=\\sqrt{a_c^{2}+a_t^{2}}=\\sqrt{(2.0)^{2}+(2.0)^{2}}=2.83\\,\\mathrm{m\\,s^{-2}}\\).",
          "方向：\\(\\tan\\varphi=\\dfrac{a_t}{a_c}=1.0\\)，所以 \\(\\varphi=45^\\circ\\)，总加速度偏向速度方向（前方）。 · Direction: \\(\\tan\\varphi=\\dfrac{a_t}{a_c}=1.0\\), so \\(\\varphi=45^\\circ\\); the net acceleration tilts toward the velocity (forward).",
          "若汽车减速，\\(a_t\\) 与速度反向，总加速度偏向后方，但大小仍为 \\(2.83\\,\\mathrm{m\\,s^{-2}}\\)。 · If the car slows down, \\(a_t\\) points opposite the velocity, the net acceleration tilts backward, but its magnitude is still \\(2.83\\,\\mathrm{m\\,s^{-2}}\\)."
        ],
        "solution": "\\(a=2.83\\,\\mathrm{m\\,s^{-2}}\\)，与径向成 \\(45^\\circ\\) 偏向速度方向。 · \\(a=2.83\\,\\mathrm{m\\,s^{-2}}\\), at \\(45^\\circ\\) from the radial direction toward the velocity.",
        "solutionLatex": "a=\\sqrt{(2.0)^{2}+(2.0)^{2}}=2.83\\,\\mathrm{m\\,s^{-2}},\\qquad \\tan\\varphi=\\dfrac{a_t}{a_c}=1.0"
      },
      {
        "title": "例 5 · 竖直圆周最高点临界速度 · Example 5 · Critical speed at the top of a vertical circle",
        "prompt": "小球用长 \\(1.0\\,\\mathrm{m}\\) 的轻绳系着在竖直平面内做圆周运动。求小球能通过最高点的最小速度（\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)）。 · A ball on a \\(1.0\\,\\mathrm{m}\\) light string moves in a vertical circle. Find the minimum speed needed to pass the highest point (\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)).",
        "steps": [
          "最高点径向合力向下：\\(T+mg=m\\dfrac{v^{2}}{r}\\)。 · At the top the radial net force is downward: \\(T+mg=m\\dfrac{v^{2}}{r}\\).",
          "绳只能拉，临界时 \\(T=0\\)，所以 \\(mg=m\\dfrac{v^{2}}{r}\\)。 · A string can only pull, so at the threshold \\(T=0\\) and \\(mg=m\\dfrac{v^{2}}{r}\\).",
          "\\(v_{\\mathrm{crit}}=\\sqrt{gr}=\\sqrt{(9.8)(1.0)}=3.1\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v_{\\mathrm{crit}}=\\sqrt{gr}=\\sqrt{(9.8)(1.0)}=3.1\\,\\mathrm{m\\,s^{-1}}\\).",
          "低于此速度，绳在最高点前松弛，小球离开圆周轨道。 · Below this speed the string goes slack before the top and the ball leaves the circular path."
        ],
        "solution": "\\(v_{\\mathrm{crit}}=3.1\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v_{\\mathrm{crit}}=3.1\\,\\mathrm{m\\,s^{-1}}\\).",
        "solutionLatex": "v_{\\mathrm{crit}}=\\sqrt{gr}=\\sqrt{(9.8)(1.0)}=3.1\\,\\mathrm{m\\,s^{-1}}"
      }
    ],
    "examTips": [
      "CED Unit 2：圆周运动 · CED Unit 2: circular motion",
      "先找圆心与半径，再沿径向写 \\(\\sum F=ma_c\\)。 · Locate the center and radius first, then write \\(\\sum F=ma_c\\) along the radial direction.",
      "竖直圆周要分位置讨论，张力/支持力随高度变化。 · Analyze vertical circular motion position by position; tension or normal force varies with height.",
      "临界条件常令约束力为零（绳松弛、支持力为零）。 · Critical conditions often set a constraint force to zero (string slack, zero normal force).",
      "总加速度题先分别求 \\(a_c\\) 与 \\(a_t\\)，再用矢量合成；不要代数相加。 · For net-acceleration problems, find \\(a_c\\) and \\(a_t\\) separately, then combine them as vectors; do not add them algebraically.",
      "切向加速度与速度同向时加速，反向时减速；它不改变速度方向。 · Tangential acceleration speeds the object up when along the velocity and slows it when opposite; it does not change the direction of velocity."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u1",
        "code": "1.2",
        "title": "二维运动学 · Two-Dimensional Kinematics",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton’s Laws of Motion: First and Second Law",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.6",
        "title": "万有引力 · Gravitation",
        "relation": "应用 · application"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.4",
        "title": "轨道 · Orbits",
        "relation": "后续 · follow-up"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面 · Newton’s second law and the incline"
      },
      {
        "id": "gravity-orbit",
        "title": "万有引力轨道 · Gravitational orbits"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "先修：1.2 二维运动学给出速度与加速度的矢量语言；2.3 牛顿第二定律提供径向方程。 · Upstream: two-dimensional kinematics in 1.2 provides the vector language of velocity and acceleration, and Newton’s second law in 2.3 provides the radial equation.",
      "数学：径向与切向是互相垂直的坐标方向；总加速度大小用勾股定理，方向用正切。 · Mathematics: radial and tangential directions are perpendicular coordinate directions; the net magnitude uses the Pythagorean theorem and the direction uses the tangent.",
      "应用：2.6 万有引力把卫星轨道中的重力作为向心力；6.4 进一步分析椭圆轨道与轨道能量。 · Applications: gravitation in 2.6 uses gravity as the centripetal force for satellite orbits; 6.4 analyzes elliptical orbits and orbital energy.",
      "跨学科：离心机、车辆转弯、过山车和旋转机械都涉及向心与切向加速度的合成；生物力学中的旋转运动也使用同一套矢量分解。 · Cross-disciplinary: centrifuges, vehicle turns, roller coasters, and rotating machinery all involve the vector sum of centripetal and tangential acceleration; rotational motion in biomechanics uses the same decomposition."
    ],
    "intuitionDetailed": "向心力由真实的力提供：绳张力、重力、摩擦力、支持力或它们的合力。匀速圆周运动只有径向加速度；若速率也变化，还存在切向加速度 \\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\alpha\\)。汽车过拱桥、圆锥摆、卫星绕行都是“径向合力 = \\(\\dfrac{mv^{2}}{r}\\)”。把加速度想成两个独立旋钮：径向旋钮控制“转弯”，切向旋钮控制“快慢”；实际总加速度是这两个垂直矢量的合成。加速转弯时总加速度偏离圆心，减速转弯时偏向后方；只有匀速圆周运动的总加速度才严格指向圆心。 · Centripetal force is provided by real forces: tension, gravity, friction, normal force, or their resultant. Uniform circular motion has only radial acceleration; if the speed also changes, there is a tangential acceleration \\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\alpha\\). A car on a humpback bridge, a conical pendulum, and a satellite all reduce to “radial net force = \\(\\dfrac{mv^{2}}{r}\\).” Think of acceleration as two independent knobs: the radial knob controls “turning” and the tangential knob controls “speeding up or slowing down”; the actual net acceleration is the vector sum of these perpendicular components. When speeding up through a turn, the net acceleration tilts away from the center; when slowing down, it tilts backward; only uniform circular motion has a net acceleration pointing exactly toward the center.",
    "development": [
      "角速度与周期 · Angular speed and period",
      "向心加速度 · Centripetal acceleration",
      "向心力的来源 · Sources of centripetal force",
      "切向加速度与角加速度 · Tangential and angular acceleration",
      "向心与切向加速度的矢量合成 · Vector sum of centripetal and tangential acceleration",
      "竖直圆周与临界条件 · Vertical circles and critical conditions",
      "变速圆周运动 · Nonuniform circular motion"
    ],
    "checks": [
      "向心力为什么不是一种新的力？ · Why is centripetal force not a new force?",
      "汽车过拱桥时支持力为什么变小？ · Why does the normal force decrease when a car crosses a humpback bridge?",
      "竖直圆周最高点的临界速度如何得到？ · How is the critical speed at the top of a vertical circle obtained?",
      "匀速圆周运动和变速圆周运动的总加速度分别由哪些分量组成？ · Which components make up the net acceleration in uniform and nonuniform circular motion?",
      "为什么总加速度的大小用 \\(\\sqrt{a_c^{2}+a_t^{2}}\\) 而不是 \\(a_c+a_t\\)？ · Why is the net acceleration magnitude \\(\\sqrt{a_c^{2}+a_t^{2}}\\) rather than \\(a_c+a_t\\)?",
      "加速转弯和减速转弯时，总加速度的方向分别偏向哪一侧？ · When speeding up or slowing down through a turn, which way does the net acceleration tilt?"
    ],
    "vocabulary": [
      {
        "termZh": "向心加速度",
        "termEn": "centripetal acceleration",
        "defZh": "指向圆心的加速度，\\(a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r\\)，只改变速度方向。",
        "defEn": "Acceleration toward the center, \\(a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r\\), which changes only the direction of velocity."
      },
      {
        "termZh": "切向加速度",
        "termEn": "tangential acceleration",
        "defZh": "沿切线方向的加速度，\\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\alpha\\)，只改变速率。",
        "defEn": "Acceleration along the tangent, \\(a_t=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=r\\alpha\\), which changes only the speed."
      },
      {
        "termZh": "总加速度",
        "termEn": "net acceleration",
        "defZh": "向心加速度与切向加速度的矢量和，\\(\\vec a=\\vec a_c+\\vec a_t\\)。",
        "defEn": "The vector sum of centripetal and tangential acceleration, \\(\\vec a=\\vec a_c+\\vec a_t\\)."
      },
      {
        "termZh": "角加速度",
        "termEn": "angular acceleration",
        "defZh": "角速度的变化率，\\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\)，与切向加速度满足 \\(a_t=r\\alpha\\)。",
        "defEn": "The rate of change of angular speed, \\(\\alpha=\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t}\\), related to tangential acceleration by \\(a_t=r\\alpha\\)."
      },
      {
        "termZh": "匀速圆周运动",
        "termEn": "uniform circular motion",
        "defZh": "速率不变、只有向心加速度的圆周运动。",
        "defEn": "Circular motion with constant speed and only centripetal acceleration."
      },
      {
        "termZh": "变速圆周运动",
        "termEn": "nonuniform circular motion",
        "defZh": "速率变化、同时具有向心与切向加速度的圆周运动。",
        "defEn": "Circular motion with changing speed, having both centripetal and tangential acceleration."
      },
      {
        "termZh": "向心力",
        "termEn": "centripetal force",
        "defZh": "合外力沿径向的分量，不是独立的新力，由真实力提供。",
        "defEn": "The radial component of the net external force, not an independent new force, provided by real forces."
      },
      {
        "termZh": "曲率半径",
        "termEn": "radius of curvature",
        "defZh": "一般曲线在某点最贴近的圆的半径，用于 \\(a_c=\\dfrac{v^{2}}{\\rho}\\)。",
        "defEn": "The radius of the circle that best fits a general curve at a point, used in \\(a_c=\\dfrac{v^{2}}{\\rho}\\)."
      }
    ]
  },
  "2.5": {
    "id": "mech/mech-u2/2.5",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.5",
    "titleZh": "牛顿第三定律",
    "titleEn": "Newton's Laws of Motion: Third Law",
    "layer": "ap",
    "summary": "接触力是物体相互接触时产生的宏观力，其微观根源是原子间的电磁作用；自由体图只画作用在一个物体上的外力，第三定律力对分别作用在不同物体上。 · Contact forces arise when objects touch and are macroscopic effects of interatomic electric forces; a free-body diagram shows only the external forces on one object, and third-law pairs act on different objects.",
    "learningObjectives": [
      "能把接触力解释为原子间电磁作用的宏观表现，并列举法向力、摩擦力、张力等例子。 · Explain contact forces as macroscopic effects of interatomic electric forces and give examples such as normal force, friction, and tension.",
      "能为单个物体或多物体系统画出正确的自由体图，只画环境作用在该物体上的力，并从质心位置画矢量。 · Draw correct free-body diagrams for a single object or a multi-body system, showing only forces exerted on that object by the environment and drawing vectors from the center of mass.",
      "能区分作用力—反作用力对与同一物体上的平衡力，并说明第三定律力对为什么不能相互抵消。 · Distinguish action–reaction pairs from balanced forces on the same object and explain why third-law pairs cannot cancel.",
      "能选择沿加速度方向的坐标轴，分解力并写出牛顿第二定律的分量方程。 · Choose coordinate axes with one axis along the acceleration, resolve forces, and write the component equations of Newton's second law.",
      "能用自由体图与第三定律分析两物体接触处的力，例如推两个相互接触的物块或阿特伍德机。 · Use free-body diagrams and the third law to analyze contact forces between two bodies, such as two pushed blocks or an Atwood machine."
    ],
    "essentialKnowledge": [
      "力是物体或系统之间的相互作用，是矢量；接触力只在物体或系统相互接触时出现。 · A force is an interaction between objects or systems and is a vector; a contact force appears only when the objects or systems touch.",
      "接触力是原子间电磁作用的宏观表现，不是一种新的基本力。宏观上“接触”时，表面原子靠得很近，电子云相互排斥，原子间还可能有吸引与成键作用；这些微观电磁作用的合力表现为法向力、摩擦力、张力等。 · Contact forces are macroscopic effects of interatomic electric forces, not a new fundamental force. When surfaces “touch” macroscopically, their atoms are very close, electron clouds repel, and atoms may also attract or bond; the net effect of these microscopic electromagnetic interactions appears as normal force, friction, tension, and similar forces.",
      "法向力垂直于接触面，摩擦力平行于接触面，张力沿绳或杆的方向；它们都是接触力，只是方向与微观机制的不同表现。 · The normal force is perpendicular to the contact surface, friction is parallel to it, and tension is along a string or rod; all are contact forces, differing in direction and microscopic mechanism.",
      "牛顿第三定律：两物体相互作用时，作用力与反作用力大小相等、方向相反、沿同一直线，分别作用在两个不同物体上，同时产生、同时消失。 · Newton's third law: when two objects interact, the action and reaction forces are equal in magnitude, opposite in direction, collinear, act on two different objects, and arise and vanish together.",
      "自由体图把一个物体或系统从环境中“隔离”出来：用点表示物体或质心，只画环境作用在该物体上的力，不画该物体对环境的力，不画内力，也不把 \\(m\\vec a\\) 当成一个力。 · A free-body diagram isolates an object or system from its environment: represent the object or its center of mass by a dot, draw only the forces exerted on it by the environment, and do not draw forces it exerts on the environment, internal forces, or \\(m\\vec a\\) as if it were a force.",
      "多物体问题要为每个物体分别画自由体图；一对第三定律力分别出现在两张图上，不能画在同一张图上相互抵消；若把几个物体选为一个系统，则只画系统外的力。 · For multi-body problems, draw a separate free-body diagram for each object; a third-law pair appears once on each diagram and cannot be drawn on the same diagram to cancel; if several objects are chosen as one system, draw only external forces on the system.",
      "坐标轴的选择应使方程最简单：通常取一个轴沿加速度方向，另一个轴垂直于它；沿斜面运动时取沿斜面和垂直斜面两个轴，沿绳运动时取沿绳方向。 · Choose axes that make the equations simplest: usually one axis along the acceleration and the other perpendicular to it; for motion on an incline use axes along and perpendicular to the incline, and for motion along a string use the direction of the string.",
      "在惯性系中，合外力决定加速度；支持力、张力或秤的读数不一定等于重力，它们由运动状态和其他力共同决定，这为 2.6 的视重与等效原理埋下伏笔。 · In an inertial frame the net force determines the acceleration; a normal force, tension, or scale reading is not necessarily equal to weight, because it also depends on the motion and other forces, which prepares the way for apparent weight and the equivalence principle in 2.6."
    ],
    "definition": "接触力（contact force）是物体或系统相互接触时产生的力，是原子间电磁作用的宏观表现；法向力、摩擦力、张力和弹簧力都属于接触力。自由体图（free-body diagram, FBD）把一个物体或系统从环境中隔离出来，用点表示物体或质心，只画环境作用在该物体上的力。牛顿第三定律指出，两物体相互作用时 \\(\\vec F_{AB}=-\\vec F_{BA}\\)：作用力与反作用力等大、反向、共线、异体、同时存在。 · A contact force is a force that arises when objects or systems touch and is a macroscopic effect of interatomic electric forces; normal force, friction, tension, and spring force are all contact forces. A free-body diagram (FBD) isolates an object or system from its environment, represents it or its center of mass by a dot, and shows only the forces exerted on it by the environment. Newton's third law states that for two interacting objects, \\(\\vec F_{AB}=-\\vec F_{BA}\\): the action and reaction forces are equal in magnitude, opposite in direction, collinear, act on different objects, and exist simultaneously.",
    "intuition": "你推墙时，手与墙的原子靠得极近，电子云相互排斥，墙对手的力就是这种微观电磁作用的宏观合力；你并没有“创造”一种新的推力。画自由体图时，把自己想象成那个物体：只感受别人对你的力，不感受你对别人的力。 · When you push a wall, the atoms of your hand and the wall come very close and their electron clouds repel; the force of the wall on your hand is the macroscopic net of those microscopic electromagnetic interactions, not a new kind of push. When drawing a free-body diagram, imagine being the object: you feel only the forces others exert on you, not the forces you exert on them.",
    "formulas": [
      {
        "latex": "\\vec F_{AB}=-\\vec F_{BA}",
        "note": "牛顿第三定律：作用力与反作用力等大、反向、共线、作用在不同物体上。 · Newton's third law: action and reaction are equal in magnitude, opposite in direction, collinear, and act on different objects."
      },
      {
        "latex": "\\sum\\vec F=m\\vec a",
        "note": "牛顿第二定律；\\(\\sum\\vec F\\) 是作用在该物体上的合外力。 · Newton's second law; \\(\\sum\\vec F\\) is the net external force on that object."
      },
      {
        "latex": "\\sum F_x=ma_x,\\qquad \\sum F_y=ma_y",
        "note": "自由体图沿坐标轴分解后的分量方程。 · Component equations obtained by resolving the free-body diagram along the chosen axes."
      },
      {
        "latex": "\\vec F_{\\mathrm{net}}=\\sum_i\\vec F_i",
        "note": "合外力是各外力的矢量和；内力在系统内部成对抵消。 · The net force is the vector sum of the external forces; internal forces cancel in pairs inside a system."
      }
    ],
    "derivationNotes": [
      {
        "from": "原子间电磁作用 · Interatomic electromagnetic interaction",
        "to": "宏观接触力 · Macroscopic contact force",
        "note": "两表面靠近时，原子间距减小，电子云重叠产生强烈排斥，同时可能有分子间吸引与化学键作用；大量原子作用的统计合力表现为法向力与摩擦力。 · As two surfaces approach, atomic separations decrease, electron clouds overlap and repel strongly, and intermolecular attraction or bonding may also act; the statistical net of many atomic interactions appears as normal force and friction."
      },
      {
        "from": "第三定律 · Third law",
        "to": "系统动量守恒 · Conservation of system momentum",
        "note": "系统内每对内力都等大反向，矢量和为零，因此内力不改变系统总动量；只有外力能改变系统动量。 · Every pair of internal forces is equal and opposite, so their vector sum is zero; internal forces do not change the system's total momentum, and only external forces can."
      },
      {
        "from": "自由体图 · Free-body diagram",
        "to": "分量方程 · Component equations",
        "note": "先选一个轴沿加速度，把每个力分解到坐标轴上，再分别写 \\(\\sum F_x=ma_x\\) 与 \\(\\sum F_y=ma_y\\)；垂直于加速度的方向常用于求支持力或张力。 · First choose one axis along the acceleration, resolve every force onto the axes, and then write \\(\\sum F_x=ma_x\\) and \\(\\sum F_y=ma_y\\); the direction perpendicular to the acceleration often determines the normal force or tension."
      },
      {
        "from": "多物体隔离 · Isolating multiple bodies",
        "to": "接触处的力 · Contact force at an interface",
        "note": "先把它当作一个系统求共同加速度，再隔离其中一个物体，用它的自由体图求接触力；两物体之间的接触力是一对第三定律力，大小相等、方向相反。 · First treat the bodies as one system to find the common acceleration, then isolate one body and use its free-body diagram to find the contact force; the contact forces between the two bodies are a third-law pair, equal in magnitude and opposite in direction."
      }
    ],
    "conditions": [
      "接触力要求物体宏观接触，微观上表面间距达到原子尺度；理想“刚体”和“无摩擦表面”都是模型，实际接触面会发生微小形变。 · A contact force requires macroscopic contact, with surface separations at the atomic scale; the ideal “rigid body” and “frictionless surface” are models, and real surfaces deform slightly.",
      "法向力垂直于接触面，摩擦力平行于接触面；绳的张力沿绳方向，理想绳质量可忽略且不可伸长。 · The normal force is perpendicular to the contact surface, friction is parallel to it, and tension is along the string; an ideal string has negligible mass and is inextensible.",
      "第三定律适用于两个物体之间的任何相互作用，包括接触力与场力；分析时要把每个力明确归到受力物体上。 · The third law applies to any interaction between two objects, including contact and field forces; in analysis, assign every force to the object that feels it.",
      "牛顿第一、第二定律在惯性参考系中成立；在非惯性系中分析时需引入惯性力，并把接触力与惯性力区分开。 · Newton's first and second laws hold in inertial reference frames; in a noninertial frame, introduce a fictitious force and distinguish it from contact forces.",
      "静摩擦力可以在零到最大值之间取值，方向由防止相对滑动的需要决定；不要默认摩擦力总与运动方向相反。 · Static friction can take any value from zero to its maximum, with the direction needed to prevent relative sliding; do not assume friction always opposes motion."
    ],
    "keyPoints": [
      "接触力是原子间电磁作用的宏观表现，不是新的基本力；法向力、摩擦力、张力都是接触力。 · Contact forces are macroscopic effects of interatomic electric forces, not a new fundamental force; normal force, friction, and tension are all contact forces.",
      "自由体图只画作用在被隔离物体上的外力，不画反作用力、内力或 \\(m\\vec a\\)。 · A free-body diagram shows only external forces on the isolated object, not reaction forces, internal forces, or \\(m\\vec a\\).",
      "第三定律力对等大、反向、共线、异体、同时，永远不能在同一物体的受力分析中抵消。 · Third-law pairs are equal in magnitude, opposite in direction, collinear, on different bodies, and simultaneous; they never cancel in the force analysis of one object.",
      "平衡力作用在同一物体上，可以抵消；作用力—反作用力作用在不同物体上，不能抵消。 · Balanced forces act on the same object and can cancel; action–reaction forces act on different objects and cannot.",
      "多物体问题先整体求加速度，再隔离求接触力；每个物体都有自己的自由体图。 · For multi-body problems, first find the acceleration of the whole system, then isolate a body to find the contact force; each body has its own free-body diagram.",
      "坐标轴通常取一个沿加速度、一个垂直于加速度，这样可以把矢量方程变成两个标量方程。 · Choose one axis along the acceleration and one perpendicular to it, turning the vector equation into two scalar equations.",
      "支持力、张力或秤的读数由运动状态决定，不一定等于重力。 · A normal force, tension, or scale reading depends on the motion and is not necessarily equal to weight."
    ],
    "misconceptions": [
      "认为接触力是一种独立的基本力；实际上它是原子间电磁作用的宏观表现，法向力、摩擦力、张力都源于电磁作用。 · Thinking a contact force is an independent fundamental force; it is a macroscopic effect of interatomic electric forces, and normal force, friction, and tension all have electromagnetic origins.",
      "把物体对环境的力画进该物体的自由体图，或把一对作用力—反作用力画在同一张图上试图抵消。 · Drawing the force the object exerts on the environment in that object's free-body diagram, or putting an action–reaction pair on the same diagram and trying to cancel them.",
      "认为“物体静止就没有力”或“支持力总等于重力”；静止只说明合力为零，支持力还取决于加速度、斜面和其它外力。 · Thinking “no motion means no force” or “the normal force always equals weight”; rest only means zero net force, and the normal force also depends on acceleration, inclines, and other forces.",
      "把 \\(m\\vec a\\) 当成一个力画进自由体图；\\(m\\vec a\\) 是合力产生的效果，不是环境施加的力。 · Treating \\(m\\vec a\\) as a force in the free-body diagram; \\(m\\vec a\\) is the effect of the net force, not a force exerted by the environment.",
      "认为摩擦力总与运动方向相反；静摩擦力的方向由防止相对滑动的需要决定，可以与运动方向相同。 · Thinking friction always opposes motion; the direction of static friction is set by the need to prevent relative sliding and may be the same as the motion.",
      "认为两物体接触就一定有摩擦力；没有相对滑动趋势或相对运动时，静摩擦力可以为零。 · Thinking contact always produces friction; static friction can be zero when there is no tendency for relative sliding or relative motion.",
      "把第三定律与平衡混淆：等大反向不一定是一对作用力—反作用力，还要看是否作用在不同物体上、是否同时产生。 · Confusing the third law with equilibrium: equal and opposite forces are not necessarily an action–reaction pair; check whether they act on different objects and arise together.",
      "在非惯性系中漏掉惯性力，或把惯性力误认为真实的接触力。 · Omitting the fictitious force in a noninertial frame, or mistaking it for a real contact force."
    ],
    "examples": [
      {
        "title": "例 1 · 桌面支持力的微观来源 · Example 1: Microscopic origin of the normal force",
        "prompt": "书静止在桌面上。用原子间电磁作用解释桌面对书的支持力，并说明为什么不能说“支持力就是书的重力”。 · A book rests on a table. Explain the normal force of the table on the book in terms of interatomic electric forces, and explain why the normal force is not simply “the weight of the book.”",
        "steps": [
          "书与桌面的原子靠得很近，电子云重叠并相互排斥；桌面发生微小形变，大量原子间的电磁作用形成一个向上的宏观合力，这就是支持力。 · The atoms of the book and table are very close, their electron clouds overlap and repel; the table deforms slightly, and the electromagnetic interactions of many atoms produce an upward macroscopic net force, the normal force.",
          "支持力作用在书上，重力也作用在书上；二者大小相等、方向相反，是同一物体上的平衡力。 · The normal force acts on the book, and so does gravity; they are equal and opposite balanced forces on the same object.",
          "重力的反作用力是书对地球的引力，支持力的反作用力是书对桌面的压力；它们分别作用在地球和桌面上，不是支持力本身。 · The reaction to gravity is the book's gravitational pull on Earth, and the reaction to the normal force is the book's push on the table; they act on Earth and the table, respectively, not on the book.",
          "若电梯竖直加速或桌面倾斜，支持力不再等于重力，但“原子间电磁作用”这一微观来源不变。 · If the elevator accelerates vertically or the table is tilted, the normal force is no longer equal to weight, but its microscopic origin in interatomic electromagnetic interactions is unchanged."
        ],
        "solution": "支持力是桌面原子与书原子间电磁排斥的宏观合力；它和重力只是恰好平衡，并不是重力的反作用力。 · The normal force is the macroscopic net of electromagnetic repulsion between table and book atoms; it merely balances gravity in this case and is not gravity's reaction force.",
        "solutionLatex": "N=-F_{\\text{book on table}},\\qquad W=-F_{\\text{book on Earth}}"
      },
      {
        "title": "例 2 · 斜面上物块受力图 · Example 2: Free-body diagram on an incline",
        "prompt": "质量 \\(m=5.0\\,\\mathrm{kg}\\) 的物块在倾角 \\(30^\\circ\\) 的光滑斜面上，受沿斜面向上的绳子拉力 \\(T=30\\,\\mathrm{N}\\)。画出物块受力图，取沿斜面向上的轴为 \\(x\\) 轴，求支持力与加速度。取 \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)。 · A block of mass \\(m=5.0\\,\\mathrm{kg}\\) is on a frictionless \\(30^\\circ\\) incline and is pulled by a rope with tension \\(T=30\\,\\mathrm{N}\\) up the incline. Draw the free-body diagram, take the up-incline direction as the \\(x\\) axis, and find the normal force and acceleration. Use \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
        "steps": [
          "受力图：重力 \\(mg\\) 竖直向下，支持力 \\(N\\) 垂直斜面向上，张力 \\(T\\) 沿斜面向上；不要画物块对斜面或对绳的力。 · Free-body diagram: weight \\(mg\\) downward, normal force \\(N\\) perpendicular to the incline, and tension \\(T\\) up the incline; do not draw the forces the block exerts on the incline or rope.",
          "取 \\(x\\) 轴沿斜面向上、\\(y\\) 轴垂直斜面向上。重力分解为沿斜面向下的 \\(mg\\sin30^\\circ\\) 和垂直斜面向里的 \\(mg\\cos30^\\circ\\)。 · Take \\(x\\) up the incline and \\(y\\) perpendicular to the incline. Resolve gravity into \\(mg\\sin30^\\circ\\) down the incline and \\(mg\\cos30^\\circ\\) into the incline.",
          "\\(y\\) 方向无加速度：\\(N-mg\\cos30^\\circ=0\\)，所以 \\(N=mg\\cos30^\\circ=(5.0)(9.8)(0.866)=42\\,\\mathrm{N}\\)。 · No acceleration in \\(y\\): \\(N-mg\\cos30^\\circ=0\\), so \\(N=mg\\cos30^\\circ=(5.0)(9.8)(0.866)=42\\,\\mathrm{N}\\).",
          "\\(x\\) 方向：\\(T-mg\\sin30^\\circ=ma\\)，所以 \\(a=\\dfrac{30-24.5}{5.0}=1.1\\,\\mathrm{m\\,s^{-2}}\\)，沿斜面向上。 · In \\(x\\): \\(T-mg\\sin30^\\circ=ma\\), so \\(a=\\dfrac{30-24.5}{5.0}=1.1\\,\\mathrm{m\\,s^{-2}}\\) up the incline."
        ],
        "solution": "\\(N\\approx42\\,\\mathrm{N}\\)，\\(a\\approx1.1\\,\\mathrm{m\\,s^{-2}}\\) 沿斜面向上。 · \\(N\\approx42\\,\\mathrm{N}\\) and \\(a\\approx1.1\\,\\mathrm{m\\,s^{-2}}\\) up the incline.",
        "solutionLatex": "N=mg\\cos30^\\circ=42\\,\\mathrm{N},\\qquad a=\\dfrac{T-mg\\sin30^\\circ}{m}=\\dfrac{30-24.5}{5.0}=1.1\\,\\mathrm{m\\,s^{-2}}"
      },
      {
        "title": "例 3 · 两个相互接触的物块 · Example 3: Two blocks in contact",
        "prompt": "光滑水平面上有两个相互接触的物块，\\(m_1=2.0\\,\\mathrm{kg}\\)、\\(m_2=3.0\\,\\mathrm{kg}\\)。水平力 \\(F=10\\,\\mathrm{N}\\) 推 \\(m_1\\)，方向指向 \\(m_2\\)。求系统的加速度以及两物块之间的接触力。 · Two blocks in contact rest on a frictionless horizontal surface, with \\(m_1=2.0\\,\\mathrm{kg}\\) and \\(m_2=3.0\\,\\mathrm{kg}\\). A horizontal force \\(F=10\\,\\mathrm{N}\\) pushes \\(m_1\\) toward \\(m_2\\). Find the acceleration and the contact force between the blocks.",
        "steps": [
          "先把两物块看成一个系统：水平方向只有外力 \\(F\\)，所以 \\(a=\\dfrac{F}{m_1+m_2}=\\dfrac{10}{5.0}=2.0\\,\\mathrm{m\\,s^{-2}}\\)。 · First treat the two blocks as one system: the only horizontal external force is \\(F\\), so \\(a=\\dfrac{F}{m_1+m_2}=\\dfrac{10}{5.0}=2.0\\,\\mathrm{m\\,s^{-2}}\\).",
          "隔离 \\(m_2\\)：水平方向只受 \\(m_1\\) 对它的接触力 \\(F_{12}\\)，所以 \\(F_{12}=m_2a=(3.0)(2.0)=6.0\\,\\mathrm{N}\\)，方向向右。 · Isolate \\(m_2\\): the only horizontal force is the contact force \\(F_{12}\\) from \\(m_1\\), so \\(F_{12}=m_2a=(3.0)(2.0)=6.0\\,\\mathrm{N}\\) to the right.",
          "隔离 \\(m_1\\)：水平方向受 \\(F=10\\,\\mathrm{N}\\) 向右和 \\(m_2\\) 对它的接触力 \\(F_{21}\\) 向左；\\(10-6.0=(2.0)(2.0)=4.0\\,\\mathrm{N}\\)，符合。 · Isolate \\(m_1\\): it feels \\(F=10\\,\\mathrm{N}\\) to the right and the contact force \\(F_{21}\\) from \\(m_2\\) to the left; \\(10-6.0=(2.0)(2.0)=4.0\\,\\mathrm{N}\\), which checks.",
          "两接触力是一对第三定律力：\\(F_{12}\\) 与 \\(F_{21}\\) 等大反向，分别作用在 \\(m_2\\) 与 \\(m_1\\) 上，不能在同一张受力图上抵消。 · The two contact forces are a third-law pair: \\(F_{12}\\) and \\(F_{21}\\) are equal and opposite, act on \\(m_2\\) and \\(m_1\\), respectively, and cannot cancel on the same free-body diagram."
        ],
        "solution": "\\(a=2.0\\,\\mathrm{m\\,s^{-2}}\\)，接触力大小为 \\(6.0\\,\\mathrm{N}\\)。 · \\(a=2.0\\,\\mathrm{m\\,s^{-2}}\\), and the contact force has magnitude \\(6.0\\,\\mathrm{N}\\).",
        "solutionLatex": "a=\\dfrac{F}{m_1+m_2}=2.0\\,\\mathrm{m\\,s^{-2}},\\qquad F_{12}=m_2a=6.0\\,\\mathrm{N}"
      },
      {
        "title": "例 4 · 桌面—滑轮连接体 · Example 4: Table–pulley system",
        "prompt": "质量 \\(m_1=4.0\\,\\mathrm{kg}\\) 的物块在光滑水平桌面上，通过轻绳绕过理想滑轮与悬挂的 \\(m_2=2.0\\,\\mathrm{kg}\\) 物块相连。求加速度与绳中张力。取 \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)。 · A block of mass \\(m_1=4.0\\,\\mathrm{kg}\\) on a frictionless table is connected by a light string over an ideal pulley to a hanging block of mass \\(m_2=2.0\\,\\mathrm{kg}\\). Find the acceleration and the tension. Use \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
        "steps": [
          "分别画两张受力图：桌面物块受重力、支持力、绳的拉力 \\(T\\)；悬挂物块受重力 \\(m_2g\\) 与绳的拉力 \\(T\\)。理想绳与理想滑轮使两端张力大小相同。 · Draw two free-body diagrams: the table block feels weight, normal force, and tension \\(T\\); the hanging block feels weight \\(m_2g\\) and tension \\(T\\). An ideal string and pulley make the tension magnitude the same at both ends.",
          "取桌面物块运动方向为正：\\(T=m_1a\\)。悬挂物块向下运动：\\(m_2g-T=m_2a\\)。 · Take the table block's direction of motion as positive: \\(T=m_1a\\). The hanging block moves downward: \\(m_2g-T=m_2a\\).",
          "两式相加消去 \\(T\\)：\\(m_2g=(m_1+m_2)a\\)，所以 \\(a=\\dfrac{(2.0)(9.8)}{4.0+2.0}=3.3\\,\\mathrm{m\\,s^{-2}}\\)。 · Add the equations to eliminate \\(T\\): \\(m_2g=(m_1+m_2)a\\), so \\(a=\\dfrac{(2.0)(9.8)}{4.0+2.0}=3.3\\,\\mathrm{m\\,s^{-2}}\\).",
          "代回 \\(T=m_1a=(4.0)(3.3)=13\\,\\mathrm{N}\\)。绳对两物块的拉力大小相同，但不要把它们误称为一对第三定律力：绳对物块的力的反作用力是物块对绳的力。 · Substitute back: \\(T=m_1a=(4.0)(3.3)=13\\,\\mathrm{N}\\). The tension forces on the two blocks have the same magnitude, but they are not a third-law pair: the reaction to the rope's force on a block is the block's force on the rope."
        ],
        "solution": "\\(a\\approx3.3\\,\\mathrm{m\\,s^{-2}}\\)，\\(T\\approx13\\,\\mathrm{N}\\)。 · \\(a\\approx3.3\\,\\mathrm{m\\,s^{-2}}\\) and \\(T\\approx13\\,\\mathrm{N}\\).",
        "solutionLatex": "a=\\dfrac{m_2g}{m_1+m_2}=3.3\\,\\mathrm{m\\,s^{-2}},\\qquad T=m_1a=13\\,\\mathrm{N}"
      },
      {
        "title": "例 5 · 平衡力还是第三定律力对？ · Example 5: Balanced forces or a third-law pair?",
        "prompt": "书静止在桌面上。有人把“书受的重力”和“桌面对书的支持力”称为一对作用力—反作用力。这个说法对吗？请用第三定律和自由体图说明。 · A book rests on a table. Someone calls “gravity on the book” and “the normal force of the table on the book” an action–reaction pair. Is this correct? Explain using the third law and a free-body diagram.",
        "steps": [
          "重力（地球对书）的反作用力是书对地球的引力，作用在地球上；支持力（桌对书）的反作用力是书对桌面的压力，作用在桌面上。 · The reaction to gravity (Earth on book) is the book's gravitational pull on Earth, which acts on Earth; the reaction to the normal force (table on book) is the book's push on the table, which acts on the table.",
          "重力和支持力都作用在书上，大小相等、方向相反，所以它们是同一物体上的平衡力，不是第三定律力对。 · Gravity and the normal force both act on the book and are equal and opposite, so they are balanced forces on the same object, not a third-law pair.",
          "若把书隔离，自由体图上只画重力与支持力；书对地球、书对桌面的力不出现在这张图上。 · Isolating the book, the free-body diagram shows only gravity and the normal force; the forces of the book on Earth and on the table do not appear on this diagram.",
          "判断第三定律力对的关键：是否作用在两个不同物体上、是否同时产生、是否属于同一种相互作用。 · The key tests for a third-law pair: do the forces act on two different objects, arise simultaneously, and belong to the same interaction?"
        ],
        "solution": "说法错误。重力与支持力是书上的平衡力；它们的反作用力分别作用在地球和桌面上。 · The statement is wrong. Gravity and the normal force are balanced forces on the book; their reaction forces act on Earth and the table, respectively.",
        "solutionLatex": "W_{\\text{Earth on book}}=-W_{\\text{book on Earth}},\\qquad N_{\\text{table on book}}=-N_{\\text{book on table}}"
      }
    ],
    "examTips": [
      "先判断力属于哪个物体：自由体图只画“作用在该物体上的力”，反作用力和内力都不画。 · First decide which object feels each force: a free-body diagram shows only forces on that object, never reaction forces or internal forces.",
      "涉及接触力时，先找接触面：法向力垂直面，摩擦力沿面，张力沿绳；不要凭空多画一个“推力”。 · For contact forces, identify the contact surface first: normal force perpendicular to it, friction along it, tension along the string; do not invent an extra “push.”",
      "第三定律题要明确指出“哪两个物体相互作用”；等大反向但作用在同一物体上的力是平衡力，不是第三定律力对。 · On third-law questions, name the two interacting objects; equal and opposite forces on the same object are balanced forces, not a third-law pair.",
      "多物体问题先整体求加速度，再隔离求接触力；两张受力图上的第三定律力方向相反。 · For multi-body problems, find the acceleration of the whole system first, then isolate a body to find the contact force; the third-law forces point in opposite directions on the two diagrams.",
      "坐标轴取一个沿加速度、一个垂直于加速度；斜面问题取沿斜面和垂直斜面，避免把重力分解错。 · Choose one axis along the acceleration and one perpendicular to it; on inclines use axes along and perpendicular to the incline to avoid misresolving gravity.",
      "若题目问“支持力/秤的读数”，不要直接写 \\(mg\\)；先看加速度方向，再写牛顿第二定律。 · If a question asks for a normal force or scale reading, do not write \\(mg\\) automatically; determine the acceleration direction first, then write Newton's second law."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.2",
        "title": "系统 · Systems",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.4",
        "title": "圆周运动 · Circular Motion",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.6",
        "title": "万有引力 · Gravitation",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.8",
        "title": "弹簧力与非理想弹簧 · Spring Forces and Nonideal Springs",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面 · Newton's second law and incline"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：2.2 的系统边界决定哪些力是内力、哪些是外力；2.3 的牛顿第二定律把自由体图上的合力与加速度联系起来。 · Upstream: the system boundary in 2.2 determines which forces are internal or external, and Newton's second law in 2.3 connects the net force on a free-body diagram to acceleration.",
      "数学：把力分解到坐标轴，得到两个标量方程；多物体问题得到联立方程，消元时注意第三定律力对的大小相等。 · Mathematics: resolve forces onto axes to obtain two scalar equations; multi-body problems give simultaneous equations, and third-law pairs have equal magnitudes when eliminating variables.",
      "下游：2.6 的视重与等效原理、2.7 的摩擦力与阻力、2.8 的弹簧力都要先画自由体图；接触力的微观解释也帮助理解法向力与摩擦力。 · Downstream: apparent weight and the equivalence principle in 2.6, friction and drag in 2.7, and spring forces in 2.8 all begin with a free-body diagram; the microscopic picture of contact forces also clarifies normal force and friction.",
      "跨学科：生物力学中的地面反作用力、工程中的接触应力与摩擦、材料科学中的原子间作用，都可以追溯到接触力的电磁本质。 · Cross-disciplinary: ground reaction forces in biomechanics, contact stress and friction in engineering, and interatomic interactions in materials science all trace back to the electromagnetic nature of contact forces."
    ],
    "intuitionDetailed": "接触力的关键是“宏观接触、微观电磁”。两个表面看起来光滑，微观上仍有大量凸起；真正接触的是少数原子，原子靠得太近时电子云强烈排斥，靠得稍远时又可能有分子间吸引。法向力就是这些排斥与吸引的合力在垂直表面方向的分量，摩擦力则是沿表面方向的分量。你推墙越用力，墙的原子被挤得越近，排斥越强，所以墙对你的力也越大；这不是“墙主动反抗”，而是电磁作用随距离变化的自然结果。 · The key to contact forces is “macroscopic contact, microscopic electromagnetism.” Surfaces that look smooth are rough at the atomic scale; only some atoms actually touch. When atoms are too close, their electron clouds repel strongly; at slightly larger separations they may attract. The normal force is the component of this net interaction perpendicular to the surface, and friction is the component along the surface. The harder you push a wall, the closer its atoms are pressed and the stronger the repulsion, so the wall pushes back harder; the wall is not “actively resisting,” it is simply responding through the distance dependence of electromagnetic interactions. 画自由体图时，先选定研究对象，再问“谁在接触它或隔空吸引它？”只把环境对它的力画成从质心出发的箭头；然后把每个力分解到沿加速度和垂直加速度的轴上。 · When drawing a free-body diagram, choose the object first, then ask “who touches it or pulls it from a distance?” Draw only the forces of the environment on it as arrows from the center of mass, then resolve each force onto axes along and perpendicular to the acceleration.",
    "development": [
      "明确研究对象与系统边界，列出环境对它的所有力。 · Identify the object and the system boundary, and list every force the environment exerts on it.",
      "区分接触力与场力，并指出接触力的微观电磁来源。 · Distinguish contact forces from field forces and identify the microscopic electromagnetic origin of contact forces.",
      "画自由体图：点表示质心，箭头表示力；不画反作用力、内力或 \\(m\\vec a\\)。 · Draw the free-body diagram: a dot for the center of mass and arrows for forces; do not draw reaction forces, internal forces, or \\(m\\vec a\\).",
      "选坐标轴，通常一个沿加速度、一个垂直于加速度；分解力并写分量方程。 · Choose axes, usually one along the acceleration and one perpendicular to it; resolve forces and write component equations.",
      "若有多个物体，先整体求加速度，再隔离求接触力，并用第三定律检查两图上的力对。 · For multiple bodies, find the acceleration of the whole system first, then isolate a body to find the contact force, and use the third law to check the pair on the two diagrams."
    ],
    "checks": [
      "为什么说接触力是原子间电磁作用的宏观表现？请以支持力和摩擦力各举一例。 · Why are contact forces macroscopic effects of interatomic electric forces? Give one example each for normal force and friction.",
      "自由体图上为什么不能画 \\(m\\vec a\\)？它和合力有什么区别？ · Why can't \\(m\\vec a\\) be drawn on a free-body diagram? How does it differ from the net force?",
      "书静止在桌面上，重力与支持力是第三定律力对吗？它们的反作用力分别作用在谁上？ · A book rests on a table. Are gravity and the normal force a third-law pair? On what objects do their reaction forces act?",
      "两个相互接触的物块被推动时，如何求它们之间的接触力？为什么要先整体后隔离？ · When two blocks in contact are pushed, how do you find the contact force? Why first treat them as a whole and then isolate one?",
      "斜面上的物块加速下滑时，支持力还等于 \\(mg\\cos\\theta\\) 吗？什么情况下不等于？ · For a block accelerating down an incline, is the normal force still equal to \\(mg\\cos\\theta\\)? When is it not?",
      "若电梯向上加速，秤的读数比体重大还是小？这个读数对应哪个力？ · If an elevator accelerates upward, is the scale reading larger or smaller than the person's weight? Which force does the reading represent?"
    ],
    "vocabulary": [
      {
        "termZh": "接触力",
        "termEn": "contact force",
        "defZh": "物体或系统相互接触时产生的力，是原子间电磁作用的宏观表现。",
        "defEn": "A force that arises when objects or systems touch; it is a macroscopic effect of interatomic electric forces."
      },
      {
        "termZh": "原子间电磁作用",
        "termEn": "interatomic electric interaction",
        "defZh": "原子或分子之间由于电荷分布产生的吸引或排斥，是接触力的微观根源。",
        "defEn": "Attraction or repulsion between atoms or molecules due to their charge distributions; the microscopic origin of contact forces."
      },
      {
        "termZh": "自由体图",
        "termEn": "free-body diagram",
        "defZh": "用点表示物体或质心、只画环境作用在该物体上的力的受力图。",
        "defEn": "A force diagram that represents an object or its center of mass by a dot and shows only the forces exerted on it by the environment."
      },
      {
        "termZh": "法向力",
        "termEn": "normal force",
        "defZh": "接触面垂直作用于物体的力，方向垂直于接触面。",
        "defEn": "The force exerted by a contact surface perpendicular to itself."
      },
      {
        "termZh": "张力",
        "termEn": "tension",
        "defZh": "绳、线或杆因被拉伸而对物体施加的沿绳方向的接触力。",
        "defEn": "The contact force along a string, cable, or rod due to its being stretched."
      },
      {
        "termZh": "作用力—反作用力对",
        "termEn": "action–reaction pair",
        "defZh": "两物体相互作用时产生的一对力，等大、反向、共线、作用在不同物体上、同时存在。",
        "defEn": "A pair of forces from an interaction between two objects: equal in magnitude, opposite in direction, collinear, acting on different objects, and simultaneous."
      },
      {
        "termZh": "内力",
        "termEn": "internal force",
        "defZh": "系统内部物体之间的力；在系统内部成对抵消，不改变系统总动量。",
        "defEn": "A force between objects inside a system; internal forces cancel in pairs and do not change the system's total momentum."
      },
      {
        "termZh": "平衡力",
        "termEn": "balanced forces",
        "defZh": "作用在同一物体上、矢量和为零的一组力，可以使物体保持静止或匀速运动。",
        "defEn": "A set of forces on the same object whose vector sum is zero, allowing the object to remain at rest or move at constant velocity."
      }
    ]
  },
  "2.6": {
    "id": "mech/mech-u2/2.6",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.6",
    "titleZh": "万有引力",
    "titleEn": "Gravitation",
    "layer": "ap",
    "summary": "牛顿万有引力给出质点与球对称质量间的平方反比力；在加速参考系中视重可与引力局部不可区分（等效原理）；惯性质量与引力质量实验上相等；均匀实心球内部引力与到球心的距离成正比。 · Newton's law of universal gravitation gives an inverse-square force between point masses and spherically symmetric bodies; in a noninertial frame apparent weight can be locally indistinguishable from gravitational force (the equivalence principle); inertial and gravitational mass are experimentally equal; inside a uniform solid sphere the gravitational force is proportional to the distance from the center. 引力场把非接触的引力作用分配到空间每一点；均匀球对称分布的净引力是各质量元引力的矢量和。 · The gravitational field assigns the noncontact gravitational effect to every point in space; the net force from a uniform spherical distribution is the vector sum of the forces from its mass elements.",
    "learningObjectives": [
      "能应用万有引力定律与引力场强度，计算 \\(g\\)、重量、引力势能与逃逸速度。 · Apply Newton's law of universal gravitation and gravitational field strength to calculate \\(g\\), weight, gravitational potential energy, and escape speed.",
      "能区分重量、视重与秤的读数，分析电梯加速、自由落体等情形，并陈述等效原理。 · Distinguish weight, apparent weight, and scale readings; analyze accelerating elevators and free fall; and state the equivalence principle.",
      "能区分惯性质量与引力质量，说明两者在实验上等效，并解释为什么所有物体在真空中下落一样快。 · Distinguish inertial mass from gravitational mass, state their experimental equivalence, and explain why all objects fall at the same rate in vacuum.",
      "能应用球壳定理：球外等效为质点、球壳内部净引力为零、均匀实心球内部 \\(F\\propto r\\)，并推导 \\(M(r)\\propto r^{3}\\)。 · Apply the shell theorem: outside a sphere it acts like a point mass, inside a shell the net force is zero, and inside a uniform solid sphere \\(F\\propto r\\); derive \\(M(r)\\propto r^{3}\\).",
      "能读懂 \\(F\\)–\\(r\\) 与 \\(g\\)–\\(r\\) 图像，说明球内线性、球外平方反比、表面处连续，并用它分析穿过地球的隧道运动。 · Interpret \\(F\\)–\\(r\\) and \\(g\\)–\\(r\\) graphs, explaining the linear interior, inverse-square exterior, continuity at the surface, and use them to analyze motion through a tunnel through Earth.",
      "能用场模型描述非接触引力，并说明均匀球对称分布的净引力是各质量元引力的矢量和。 · Use the field model to describe noncontact gravity and explain that the net force from a uniform spherical distribution is the vector sum of the forces from its mass elements."
    ],
    "essentialKnowledge": [
      "牛顿万有引力定律：两质点间引力大小 \\(F=G\\dfrac{m_1m_2}{r^{2}}\\)，方向沿连线相互吸引；\\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\)，\\(r\\) 从质心算起。 · Newton's law of universal gravitation: the force between two point masses has magnitude \\(F=G\\dfrac{m_1m_2}{r^{2}}\\), points along the line joining them and is attractive; \\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\), and \\(r\\) is measured center to center.",
      "场模型：场给空间每一点赋予一个矢量，用来描述非接触作用；引力场强 \\(\\vec g(\\vec r)=\\dfrac{\\vec F_g(\\vec r)}{m}\\)，即单位质量物体在该点受到的引力。球对称场源外部的场强 \\(g=\\dfrac{GM}{r^{2}}\\)，方向指向场源；即使没有试探质量，场仍然存在。 · Field model: a field assigns a vector to every point in space to describe a noncontact interaction; the gravitational field strength is \\(\\vec g(\\vec r)=\\dfrac{\\vec F_g(\\vec r)}{m}\\), the gravitational force per unit mass at that point. Outside a spherically symmetric source, \\(g=\\dfrac{GM}{r^{2}}\\), directed toward the source; the field exists even without a test mass.",
      "均匀球对称分布的净引力是各质量元引力的矢量和：把物体分成质量元 \\(\\mathrm{d}m\\)，每个质量元对物体的引力为 \\(\\mathrm{d}\\vec F_g\\)，总引力 \\(\\vec F_{g,\\mathrm{net}}=\\int\\mathrm{d}\\vec F_g\\)。对称性使垂直于连线的分量成对抵消，沿连线分量相加；外部结果等效于质量集中在球心，球壳内部净力为零。 · The net gravitational force from a uniform spherically symmetric distribution is the vector sum of the forces from its mass elements: divide the body into elements \\(\\mathrm{d}m\\), each contributing \\(\\mathrm{d}\\vec F_g\\), so the total is \\(\\vec F_{g,\\mathrm{net}}=\\int\\mathrm{d}\\vec F_g\\). Symmetry cancels the components perpendicular to the line joining the centers in pairs and adds the components along that line; outside, the result is equivalent to all mass at the center, and inside a shell the net force is zero.",
      "重量是引力对物体的作用，\\(w=m_g g\\)；视重是支持物或秤对物体的作用力大小，通常等于法向力或张力。视重可以大于、小于或等于重量，取决于物体的加速度。 · Weight is the gravitational force on an object, \\(w=m_g g\\); apparent weight is the magnitude of the supporting force or scale reading, usually the normal force or tension. Apparent weight can be larger than, smaller than, or equal to weight, depending on the acceleration.",
      "电梯中取向上为正：若加速度向上为 \\(a\\)，则 \\(N-mg=ma\\)，所以 \\(N=m(g+a)\\)；若加速度向下为 \\(a\\)，则 \\(mg-N=ma\\)，所以 \\(N=m(g-a)\\)。自由落体时 \\(N=0\\)，出现“失重”；若向下加速度大于 \\(g\\)，支持物无法拉物体，物体离开支持面。 · In an elevator with upward positive, an upward acceleration \\(a\\) gives \\(N-mg=ma\\), so \\(N=m(g+a)\\); a downward acceleration \\(a\\) gives \\(mg-N=ma\\), so \\(N=m(g-a)\\). In free fall \\(N=0\\), giving “weightlessness”; if the downward acceleration exceeds \\(g\\), the support cannot pull the object and contact is lost.",
      "等效原理：在非惯性参考系中，观察者无法在局部区分物体的视重与引力场对物体的引力。一个以 \\(a\\) 向上加速的无窗电梯，与一个静止在重力场强为 \\(g=a\\) 的行星表面的电梯，局部力学实验给出相同结果；自由落体电梯则局部等效于远离任何质量的惯性系。 · Equivalence principle: in a noninertial reference frame, an observer cannot locally distinguish an object's apparent weight from the gravitational force exerted by a gravitational field. A windowless elevator accelerating upward at \\(a\\) gives the same local mechanical results as one at rest on a planet with field strength \\(g=a\\); a freely falling elevator is locally equivalent to an inertial frame far from any mass.",
      "等效原理是局部的：只在足够小的空间范围和足够短的时间内成立。真实引力场不均匀，不同位置的 \\(g\\) 大小或方向略有不同，潮汐力（tidal force）会让自由下落的粒子相互靠近或远离，从而暴露出引力的存在；强引力场还需要广义相对论。 · The equivalence principle is local: it holds only over a sufficiently small region and a sufficiently short time. A real gravitational field is nonuniform, so \\(g\\) varies slightly in magnitude or direction; tidal forces make freely falling particles approach or separate, revealing the gravitational field. Strong fields require general relativity.",
      "惯性质量 \\(m_i\\) 衡量物体抵抗加速的能力，出现在 \\(\\sum\\vec F=m_i\\vec a\\) 中；引力质量 \\(m_g\\) 衡量物体与引力场耦合的强弱，出现在 \\(F_g=G\\dfrac{Mm_g}{r^{2}}\\) 与 \\(w=m_g g\\) 中。二者概念不同，不能由定义直接等同。 · Inertial mass \\(m_i\\) measures an object's resistance to acceleration in \\(\\sum\\vec F=m_i\\vec a\\); gravitational mass \\(m_g\\) measures the strength of its coupling to a gravitational field in \\(F_g=G\\dfrac{Mm_g}{r^{2}}\\) and \\(w=m_g g\\). They are conceptually different and are not equal by definition.",
      "实验表明惯性质量与引力质量等效：厄特弗什扭秤、自由落体与落塔实验、月球激光测距和 MICROSCOPE 卫星等把 \\(\\dfrac{m_i}{m_g}\\) 与 1 的偏差限制在约 \\(10^{-15}\\) 以内。因此自由落体加速度 \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\) 与物体的质量、组成无关；在真空中所有物体下落一样快。 · Experiments show that inertial and gravitational mass are equivalent: the Eötvös torsion balance, free-fall and drop-tower tests, lunar laser ranging, and the MICROSCOPE satellite constrain the deviation of \\(\\dfrac{m_i}{m_g}\\) from 1 to about \\(10^{-15}\\). Hence free-fall acceleration \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\) is independent of the object's mass and composition; in vacuum all objects fall at the same rate.",
      "球壳定理：均匀球壳对壳外一点的引力等效于把壳的全部质量集中在球心；对壳内任意一点，球壳各部分的引力矢量和为零。证明思路：从内点向球壳张两个相对的小立体角，对应面积元质量正比于距离平方，而引力按距离平方反比，两个面积元的引力恰好抵消。 · Shell theorem: a uniform spherical shell attracts an external point as if all its mass were at the center; at any point inside the shell, the vector sum of gravitational forces from all parts of the shell is zero. Proof idea: from an interior point, draw two opposite small solid angles; the corresponding area elements have masses proportional to the square of the distance, while gravity falls as the inverse square, so the two contributions cancel exactly.",
      "均匀实心球可看成许多同心球壳：球外等效为质量集中在球心的质点；球内半径 \\(r\\) 处只有半径 \\(r\\) 以内的质量有贡献，外壳层的净引力为零。均匀密度下 \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\)，所以 \\(F=\\dfrac{GM(r)m}{r^{2}}=\\dfrac{GMm}{R^{3}}r\\)，即 \\(F\\propto r\\)，方向指向球心；球心处为零，表面处回到 \\(\\dfrac{GMm}{R^{2}}\\)。 · A uniform solid sphere can be viewed as many concentric shells: outside it acts like a point mass at the center; at radius \\(r\\) inside, only the mass within radius \\(r\\) contributes, while the outer shells exert zero net force. For uniform density, \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\), so \\(F=\\dfrac{GM(r)m}{r^{2}}=\\dfrac{GMm}{R^{3}}r\\), meaning \\(F\\propto r\\) toward the center; it is zero at the center and returns to \\(\\dfrac{GMm}{R^{2}}\\) at the surface.",
      "引力势能取无穷远为零：\\(U=-\\dfrac{GMm}{r}\\)，越远越大并趋近零；引力做正功时势能减少。逃逸速度由 \\(\\dfrac{1}{2}mv_{\\mathrm{esc}}^{2}-\\dfrac{GMm}{r}=0\\) 得 \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)。在均匀实心球内部，势能函数不同（见推导拓展），但力仍由 \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\) 给出。 · Gravitational potential energy is zero at infinity: \\(U=-\\dfrac{GMm}{r}\\), which increases toward zero with distance; it decreases when gravity does positive work. Escape speed follows from \\(\\dfrac{1}{2}mv_{\\mathrm{esc}}^{2}-\\dfrac{GMm}{r}=0\\), giving \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\). Inside a uniform solid sphere the potential-energy function is different (see the derivation extension), but the force is still given by \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\)."
    ],
    "definition": "牛顿万有引力定律：两质点间引力大小 \\(F=G\\dfrac{m_1m_2}{r^{2}}\\)，方向沿连线相互吸引，\\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\)；球对称质量分布可视为质量集中在球心（球壳定理）。重量是引力对物体的作用 \\(w=m_g g\\)，视重是支持力或秤的读数；在加速参考系中二者可以不同，但等效原理指出观察者无法在局部区分视重与引力场的作用。惯性质量 \\(m_i\\) 与引力质量 \\(m_g\\) 概念不同，实验却验证它们相等。均匀实心球内部的引力与到球心的距离成正比：\\(F_{g,\\mathrm{partial}}=-kr\\)，其中 \\(k=\\dfrac{GMm}{R^{3}}\\)。 · Newton's law of universal gravitation: the force between two point masses has magnitude \\(F=G\\dfrac{m_1m_2}{r^{2}}\\), points along the line joining them and is attractive, with \\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\); a spherically symmetric mass distribution acts as if its mass were at the center (shell theorem). Weight is the gravitational force on an object, \\(w=m_g g\\), while apparent weight is the supporting force or scale reading; they can differ in an accelerating frame, but the equivalence principle states that an observer cannot locally distinguish apparent weight from the effect of a gravitational field. Inertial mass \\(m_i\\) and gravitational mass \\(m_g\\) are conceptually different, yet experiments show they are equal. Inside a uniform solid sphere the gravitational force is proportional to the distance from the center: \\(F_{g,\\mathrm{partial}}=-kr\\), with \\(k=\\dfrac{GMm}{R^{3}}\\). 场模型把非接触的引力作用分配到空间每一点：\\(\\vec g=\\dfrac{\\vec F_g}{m}\\)，球对称场源外部 \\(g=\\dfrac{GM}{r^{2}}\\)。均匀球对称分布的净引力是各质量元引力的矢量和；对称性使横向分量抵消，外部等效为球心质点，球壳内部净力为零。 · The field model assigns the noncontact gravitational effect to every point in space: \\(\\vec g=\\dfrac{\\vec F_g}{m}\\), with \\(g=\\dfrac{GM}{r^{2}}\\) outside a spherically symmetric source. The net force from a uniform spherically symmetric distribution is the vector sum of the forces from its mass elements; symmetry cancels the transverse components, the exterior is equivalent to a point mass at the center, and the net force inside a shell is zero.",
    "intuition": "万有引力像一盏“随距离变暗的灯”：距离加倍，亮度变成四分之一。到了均匀实心球内部，情况反而变得“越靠里越暗、球心全黑”，因为球心处外壳层从四面八方拉你，恰好抵消；离球心越远，包围的质量按 \\(r^{3}\\) 增长，而平方反比只按 \\(r^{2}\\) 衰减，两者相抵后净引力与 \\(r\\) 成正比。等效原理则像“关掉窗户的电梯”：你感觉到的“重量”可能来自引力，也可能来自电梯在加速，单靠局部实验无法区分。 · Universal gravitation is like a lamp that dims with distance: double the distance and the brightness falls to one quarter. Inside a uniform solid sphere the situation reverses: it gets “darker” toward the center, and at the center it is completely dark, because shells pull from all directions and cancel. Farther from the center the enclosed mass grows as \\(r^{3}\\) while the inverse square falls as \\(r^{2}\\), so the net force grows in proportion to \\(r\\). The equivalence principle is like a windowless elevator: the “weight” you feel may come from gravity or from the elevator's acceleration, and local experiments alone cannot tell which. 场可以想成“空间每一点都有一支箭头”，箭头方向就是该点引力对单位质量物体的方向；把球体切成无数小质量元，每元都贡献一支小箭头，对称性让横向箭头两两抵消，只剩指向球心的合箭头。 · A field can be pictured as “an arrow at every point in space,” pointing in the direction of the gravitational force on a unit mass there; slicing a sphere into countless mass elements gives one small arrow per element, and symmetry cancels the transverse arrows in pairs, leaving a net arrow toward the center.",
    "formulas": [
      {
        "latex": "F_g=G\\dfrac{m_1m_2}{r^{2}}",
        "note": "万有引力定律；\\(r\\) 为质心距离，力沿连线相互吸引。 · Universal gravitation; \\(r\\) is the center-to-center distance and the force is attractive along the line joining the masses."
      },
      {
        "latex": "g=\\dfrac{GM}{r^{2}}",
        "note": "球对称场源外部的引力场强度；近地面可近似为常量。 · Gravitational field strength outside a spherically symmetric source; approximately constant near Earth's surface."
      },
      {
        "latex": "w=m_g g",
        "note": "重量是引力对物体的作用；与视重（支持力或秤的读数）不同。 · Weight is the gravitational force on an object; it differs from apparent weight (the supporting force or scale reading)."
      },
      {
        "latex": "N=m(g+a)\\quad\\text{or}\\quad N=m(g-a)",
        "note": "电梯视重：向上加速取 \\(+\\)，向下加速取 \\(-\\)；自由落体时 \\(N=0\\)。 · Apparent weight in an elevator: use \\(+\\) for upward acceleration and \\(-\\) for downward acceleration; in free fall \\(N=0\\)."
      },
      {
        "latex": "m_i a=m_g g\\;\\Rightarrow\\;a=\\left(\\dfrac{m_g}{m_i}\\right)g",
        "note": "自由落体加速度；实验上 \\(m_i=m_g\\)，所以 \\(a=g\\) 与物体质量无关。 · Free-fall acceleration; experimentally \\(m_i=m_g\\), so \\(a=g\\) independent of the object's mass."
      },
      {
        "latex": "M(r)=M\\dfrac{r^{3}}{R^{3}}",
        "note": "均匀实心球内半径 \\(r\\) 以内包围的质量；密度均匀时成立。 · Enclosed mass within radius \\(r\\) inside a uniform solid sphere; valid for uniform density."
      },
      {
        "latex": "F_{g,\\mathrm{partial}}=-\\dfrac{GMm}{R^{3}}r=-kr",
        "note": "均匀实心球内部引力与 \\(r\\) 成正比，方向指向球心；\\(k=\\dfrac{GMm}{R^{3}}\\)。 · Inside a uniform solid sphere the force is proportional to \\(r\\) toward the center; \\(k=\\dfrac{GMm}{R^{3}}\\)."
      },
      {
        "latex": "g(r)=\\dfrac{GMr}{R^{3}}",
        "note": "均匀实心球内部的场强；球心为零，表面为 \\(\\dfrac{GM}{R^{2}}\\)。 · Field strength inside a uniform solid sphere; zero at the center and \\(\\dfrac{GM}{R^{2}}\\) at the surface."
      },
      {
        "latex": "U=-\\dfrac{GMm}{r},\\qquad v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}",
        "note": "球外引力势能与逃逸速度；零势能取在无穷远。 · Gravitational potential energy outside a sphere and escape speed; zero potential energy at infinity."
      },
      {
        "latex": "\\vec g(\\vec r)=\\dfrac{\\vec F_g(\\vec r)}{m}",
        "note": "引力场强的定义：单位质量物体在该点受到的引力。 · Definition of gravitational field strength: gravitational force per unit mass at a point."
      },
      {
        "latex": "\\mathrm{d}\\vec F_g=-G\\dfrac{m\\,\\mathrm{d}M}{r^{2}}\\hat{\\mathbf r},\\qquad \\vec F_{g,\\mathrm{net}}=\\int\\mathrm{d}\\vec F_g",
        "note": "质量元引力的矢量叠加；对称性使横向分量抵消。 · Vector superposition of mass-element forces; symmetry cancels the transverse components."
      }
    ],
    "derivationNotes": [
      {
        "from": "万有引力定律 · Law of universal gravitation",
        "to": "表面重力加速度 · Surface gravitational acceleration",
        "note": "在半径 \\(R\\) 的球面上，重量等于万有引力：\\(mg=\\dfrac{GMm}{R^{2}}\\)，所以 \\(g=\\dfrac{GM}{R^{2}}\\)。 · On the surface of a sphere of radius \\(R\\), weight equals gravitational force: \\(mg=\\dfrac{GMm}{R^{2}}\\), so \\(g=\\dfrac{GM}{R^{2}}\\)."
      },
      {
        "from": "非接触作用 · Noncontact interaction",
        "to": "场模型 · Field model",
        "note": "场是给空间每一点赋予一个矢量的数学描述；把场源单独看待，物体在任意位置受到的引力写成 \\(\\vec F_g=m\\vec g(\\vec r)\\)，不需要场源与物体直接接触。 · A field is a mathematical description that assigns a vector to every point in space; treating the source separately, the force on an object at any position is \\(\\vec F_g=m\\vec g(\\vec r)\\), without direct contact between source and object."
      },
      {
        "from": "质量元引力 · Mass-element forces",
        "to": "球对称分布的净引力 · Net force of a spherically symmetric distribution",
        "note": "对每个质量元写 \\(\\mathrm{d}\\vec F_g\\)，积分前先用对称性配对：垂直于对称轴的分量成对抵消，只剩沿连线分量；因此外部等效为球心质点，球壳内部为零。 · Write \\(\\mathrm{d}\\vec F_g\\) for each mass element and pair contributions by symmetry before integrating: components perpendicular to the symmetry axis cancel in pairs, leaving only the component along the line of centers. Hence the exterior is equivalent to a point mass at the center, and the interior of a shell gives zero."
      },
      {
        "from": "加速参考系 · Accelerating reference frame",
        "to": "视重与等效原理 · Apparent weight and equivalence principle",
        "note": "在向上加速 \\(a\\) 的电梯中，物体相对电梯的加速度为零，但合外力为 \\(N-mg\\)；由 \\(N-mg=ma\\) 得 \\(N=m(g+a)\\)。在电梯参考系中可引入向下的惯性力 \\(ma\\)，等效重力场强为 \\(g+a\\)；局部无法区分“引力更强”与“电梯在加速”。 · In an elevator accelerating upward at \\(a\\), the object has zero acceleration relative to the elevator, but the net force is \\(N-mg\\); \\(N-mg=ma\\) gives \\(N=m(g+a)\\). In the elevator frame one may introduce a downward fictitious force \\(ma\\), giving an effective field \\(g+a\\); locally, “stronger gravity” and “acceleration of the elevator” are indistinguishable."
      },
      {
        "from": "惯性质量与引力质量 · Inertial and gravitational mass",
        "to": "自由落体普适性 · Universality of free fall",
        "note": "自由落体只受重力：\\(m_i a=m_g g\\)，所以 \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\)。实验上 \\(m_i=m_g\\)，因此 \\(a=g\\) 与质量、组成无关；这不是“质量在方程两边约掉”的数学巧合，而是实验事实。 · A freely falling object feels only gravity: \\(m_i a=m_g g\\), so \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\). Experimentally \\(m_i=m_g\\), so \\(a=g\\) independent of mass and composition; this is not a mathematical accident of canceling mass, but an experimental fact."
      },
      {
        "from": "球壳定理 · Shell theorem",
        "to": "均匀实心球内部 · Inside a uniform solid sphere",
        "note": "球内半径 \\(r\\) 处，外部球壳的净引力为零，只有 \\(M(r)=\\rho\\dfrac{4}{3}\\pi r^{3}=M\\dfrac{r^{3}}{R^{3}}\\) 有贡献；所以 \\(F=\\dfrac{G M(r)m}{r^{2}}=\\dfrac{GMm}{R^{3}}r\\)，与 \\(r\\) 成正比，方向指向球心。 · At radius \\(r\\) inside the sphere, the outer shells exert zero net force, and only \\(M(r)=\\rho\\dfrac{4}{3}\\pi r^{3}=M\\dfrac{r^{3}}{R^{3}}\\) contributes; hence \\(F=\\dfrac{G M(r)m}{r^{2}}=\\dfrac{GMm}{R^{3}}r\\), proportional to \\(r\\) toward the center."
      },
      {
        "from": "内部引力 · Interior force",
        "to": "内部势能（拓展） · Interior potential energy (extension)",
        "note": "由 \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\) 积分并令表面与 \\(U=-\\dfrac{GMm}{R}\\) 连续，得 \\(U(r)=-\\dfrac{GMm}{2R^{3}}\\left(3R^{2}-r^{2}\\right)\\)；球心处为 \\(-\\dfrac{3GMm}{2R}\\)。 · Integrate \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\) and match \\(U=-\\dfrac{GMm}{R}\\) at the surface to obtain \\(U(r)=-\\dfrac{GMm}{2R^{3}}\\left(3R^{2}-r^{2}\\right)\\); at the center it is \\(-\\dfrac{3GMm}{2R}\\)."
      },
      {
        "from": "引力做功 · Work by gravity",
        "to": "引力势能与逃逸速度 · Potential energy and escape speed",
        "note": "\\(U=-\\int_{\\infty}^{r}\\vec F_g\\cdot\\mathrm{d}\\vec r=-\\dfrac{GMm}{r}\\)；令总能量 \\(E=0\\) 可得 \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)。 · \\(U=-\\int_{\\infty}^{r}\\vec F_g\\cdot\\mathrm{d}\\vec r=-\\dfrac{GMm}{r}\\); setting the total energy \\(E=0\\) gives \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)."
      }
    ],
    "conditions": [
      "万有引力定律适用于质点，或球对称质量分布的外部；\\(r\\) 必须从质心算起，不是从表面或高度算起。 · The law applies to point masses or outside spherically symmetric distributions; \\(r\\) is measured from the center, not from the surface or an altitude.",
      "球壳定理要求球壳质量分布均匀；均匀实心球的线性内部场还要求密度均匀。真实行星分层，密度随深度变化，内部 \\(g(r)\\) 不是严格线性。 · The shell theorem assumes a uniform spherical shell; the linear interior field also assumes uniform density. Real planets are layered, so \\(g(r)\\) inside is not strictly linear.",
      "等效原理是局部原理：只在足够小的空间区域和足够短的时间内成立；非均匀引力场会产生潮汐力，强场需要广义相对论。 · The equivalence principle is local: it holds over a sufficiently small region and short time; a nonuniform field produces tidal forces, and strong fields require general relativity.",
      "视重由支持力或秤的读数定义，要求秤与物体相对静止；若物体与支持面分离，视重为零。 · Apparent weight is defined by the supporting force or scale reading when the scale is at rest relative to the object; if contact is lost, apparent weight is zero.",
      "牛顿定律在惯性系中成立；在加速参考系中可引入惯性力，把等效引力场与真实引力场相加。 · Newton's laws hold in inertial frames; in an accelerating frame, introduce a fictitious force and add it to the real gravitational field.",
      "近地面 \\(g\\) 近似常量只在高度变化远小于地球半径时成立；忽略地球自转、其他天体和空气阻力。 · The approximation of constant \\(g\\) near Earth holds only when the height change is much smaller than Earth's radius; Earth's rotation, other bodies, and air resistance are neglected.",
      "场模型是描述非接触作用的数学工具；场强由场源和质量分布决定，与试探质量无关（试探质量只决定受力大小）。 · The field model is a mathematical tool for describing noncontact interactions; the field strength is set by the source and its mass distribution, not by the test mass (the test mass only sets the force magnitude).",
      "用矢量叠加求球对称分布的净引力时，必须先利用球对称性配对抵消横向分量；均匀密度假设只用于球内线性场和 \\(M(r)\\propto r^{3}\\)。 · When using vector superposition for a spherically symmetric distribution, first pair and cancel the transverse components by spherical symmetry; the uniform-density assumption is needed only for the linear interior field and \\(M(r)\\propto r^{3}\\)."
    ],
    "keyPoints": [
      "万有引力总是吸引，成对出现（第三定律），大小与两质量乘积成正比、与质心距离平方成反比。 · Gravitation is always attractive, occurs in third-law pairs, and is proportional to the product of the masses and inversely proportional to the square of the center-to-center distance.",
      "球外 \\(g=\\dfrac{GM}{r^{2}}\\)；均匀实心球内 \\(g(r)=\\dfrac{GMr}{R^{3}}\\propto r\\)；球壳内部净引力为零。 · Outside a sphere \\(g=\\dfrac{GM}{r^{2}}\\); inside a uniform solid sphere \\(g(r)=\\dfrac{GMr}{R^{3}}\\propto r\\); inside a shell the net force is zero.",
      "重量是引力，视重是支持力或秤的读数；加速电梯中视重可以大于、小于或等于重量。 · Weight is gravitational force, while apparent weight is the supporting force or scale reading; in an accelerating elevator apparent weight can be larger than, smaller than, or equal to weight.",
      "等效原理：非惯性系中的观察者无法局部区分视重与引力场的作用；向上加速等效于更强的引力，自由落体等效于失重。 · Equivalence principle: an observer in a noninertial frame cannot locally distinguish apparent weight from the effect of a gravitational field; upward acceleration mimics stronger gravity, and free fall mimics weightlessness.",
      "惯性质量与引力质量概念不同，但实验验证它们等效；因此真空中所有物体以同样加速度下落。 · Inertial and gravitational mass are conceptually different, but experiments show they are equivalent; therefore all objects fall with the same acceleration in vacuum.",
      "均匀实心球内部只有包围质量 \\(M(r)\\propto r^{3}\\) 有贡献，平方反比与 \\(r^{3}\\) 相抵，得到 \\(F\\propto r\\)。 · Inside a uniform solid sphere only the enclosed mass \\(M(r)\\propto r^{3}\\) contributes; the inverse square and the \\(r^{3}\\) growth combine to give \\(F\\propto r\\).",
      "\\(F\\)–\\(r\\) 图：球内为过原点的直线，球外按 \\(\\dfrac{1}{r^{2}}\\) 衰减，表面处连续；球心处为零。 · \\(F\\)–\\(r\\) graph: a straight line through the origin inside, an inverse-square decrease outside, continuous at the surface, and zero at the center.",
      "球内线性回复力 \\(F=-kr\\) 会导致穿过地球隧道的简谐运动，周期只由星球质量和半径决定。 · The linear restoring force \\(F=-kr\\) inside a sphere leads to simple harmonic motion through a tunnel through Earth, with a period set only by the planet's mass and radius.",
      "场给空间每一点赋予引力场强 \\(\\vec g\\)，某点 \\(\\vec g=\\dfrac{\\vec F_g}{m}\\)，与试探质量无关。 · A field assigns a gravitational field strength \\(\\vec g\\) to every point; at a point \\(\\vec g=\\dfrac{\\vec F_g}{m}\\), independent of the test mass.",
      "球对称分布的净引力是各质量元引力的矢量和；对称性抵消横向分量，外部等效为球心质点。 · The net force from a spherically symmetric distribution is the vector sum of mass-element forces; symmetry cancels transverse components, and the exterior is equivalent to a point mass at the center.",
      "球壳内部净力为零，不是“没有引力场”，而是各质量元引力矢量恰好抵消。 · Inside a shell the net force is zero—not because there is no field, but because the mass-element force vectors cancel exactly."
    ],
    "misconceptions": [
      "认为太空中没有引力；实际上引力场延伸到很远，卫星在轨道上仍受地球引力，只是处于自由落体状态，视重为零。 · Thinking there is no gravity in space; the field extends far, and a satellite still feels Earth's gravity, but it is in free fall, so its apparent weight is zero.",
      "认为质量大的物体下落更快；在真空中 \\(m_i=m_g\\) 使所有物体加速度相同，空气阻力才导致差异。 · Thinking heavier objects fall faster; in vacuum \\(m_i=m_g\\) makes the acceleration the same for all objects, and only air resistance causes differences.",
      "把视重等同于重量，或认为秤的读数总等于 \\(mg\\)；秤读的是支持力，电梯加速时读数会改变。 · Equating apparent weight with weight, or assuming a scale always reads \\(mg\\); a scale reads the normal force, which changes when the elevator accelerates.",
      "把等效原理理解为“引力和加速度在任何地方都完全相同”；它只是局部等效，非均匀场中的潮汐力可以区分二者。 · Interpreting the equivalence principle as “gravity and acceleration are everywhere identical”; it is only locally valid, and tidal forces in a nonuniform field can distinguish them.",
      "认为均匀实心球内部引力为零；只有球壳内部才是零，实心球内部引力随 \\(r\\) 线性增大。 · Thinking the gravitational force inside a uniform solid sphere is zero; only inside a shell is it zero, while inside a solid sphere it grows linearly with \\(r\\).",
      "把球内引力写成 \\(\\dfrac{1}{r^{2}}\\)；球内只有包围质量有贡献，\\(M(r)\\propto r^{3}\\)，所以 \\(F\\propto r\\)，不是 \\(\\dfrac{1}{r^{2}}\\)。 · Writing an inverse-square force inside the sphere; only the enclosed mass contributes, and \\(M(r)\\propto r^{3}\\), so \\(F\\propto r\\), not \\(\\dfrac{1}{r^{2}}\\).",
      "认为惯性质量与引力质量“本来就是同一个量”；它们是不同的概念，数值相等是实验事实，也是广义相对论的基石之一。 · Thinking inertial and gravitational mass are “the same quantity by definition”; they are distinct concepts, and their numerical equality is an experimental fact and a foundation of general relativity.",
      "认为球心处引力最大；球心处各方向引力抵消，\\(g=0\\)，最大场强在星球表面。 · Thinking gravity is strongest at the center; contributions cancel there, so \\(g=0\\), and the maximum field strength is at the surface.",
      "忽略地球自转和分层，把真实地球当作均匀球体；线性内部场只是模型，真实 \\(g(r)\\) 需要密度分布数据。 · Ignoring Earth's rotation and layering and treating Earth as a uniform sphere; the linear interior field is only a model, and the real \\(g(r)\\) requires the density distribution.",
      "认为场必须由试探质量才能存在；场由场源产生，试探质量只是用来测量它。 · Thinking a field exists only when a test mass is present; the field is produced by the source, and a test mass merely measures it.",
      "把场当成一种力；场是“单位质量所受的力”，力是 \\(\\vec F_g=m\\vec g\\)。 · Treating the field as a force; the field is “force per unit mass,” while the force is \\(\\vec F_g=m\\vec g\\).",
      "直接把球对称分布的净引力写成质点公式，却不说明它是各质量元引力的矢量和、也不说明横向分量为何抵消。 · Writing the point-mass formula for a spherically symmetric distribution without explaining that it is the vector sum of mass-element forces and why the transverse components cancel.",
      "把“球壳内部净力为零”误解为“球壳内部没有场”或“球心处引力最大”。 · Misreading “zero net force inside a shell” as “no field inside a shell” or “gravity is strongest at the center.”"
    ],
    "examples": [
      {
        "title": "例 1 · 电梯中的视重 · Example 1: Apparent weight in an elevator",
        "prompt": "质量 \\(m=60\\,\\mathrm{kg}\\) 的人站在电梯里的秤上。分别求电梯以 \\(2.0\\,\\mathrm{m\\,s^{-2}}\\) 向上加速、以 \\(2.0\\,\\mathrm{m\\,s^{-2}}\\) 向下加速、以及自由落体时秤的读数。取 \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)。 · A person of mass \\(m=60\\,\\mathrm{kg}\\) stands on a scale in an elevator. Find the scale reading when the elevator accelerates upward at \\(2.0\\,\\mathrm{m\\,s^{-2}}\\), downward at \\(2.0\\,\\mathrm{m\\,s^{-2}}\\), and in free fall. Use \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
        "steps": [
          "秤的读数等于支持力 \\(N\\)，不是重力。取向上为正，人的加速度与电梯相同。 · The scale reads the normal force \\(N\\), not the weight. Take upward as positive; the person's acceleration equals the elevator's.",
          "向上加速：\\(N-mg=ma\\)，所以 \\(N=m(g+a)=60(9.8+2.0)=708\\,\\mathrm{N}\\)，比重力 \\(588\\,\\mathrm{N}\\) 大。 · Upward acceleration: \\(N-mg=ma\\), so \\(N=m(g+a)=60(9.8+2.0)=708\\,\\mathrm{N}\\), larger than the weight \\(588\\,\\mathrm{N}\\).",
          "向下加速：\\(mg-N=ma\\)，所以 \\(N=m(g-a)=60(9.8-2.0)=468\\,\\mathrm{N}\\)，比重力小。 · Downward acceleration: \\(mg-N=ma\\), so \\(N=m(g-a)=60(9.8-2.0)=468\\,\\mathrm{N}\\), smaller than the weight.",
          "自由落体：\\(a=g\\)，\\(N=m(g-g)=0\\)，人处于失重状态；此时重力仍为 \\(588\\,\\mathrm{N}\\)，只是没有支持力。 · Free fall: \\(a=g\\), so \\(N=m(g-g)=0\\), and the person is apparently weightless; gravity is still \\(588\\,\\mathrm{N}\\), but there is no supporting force."
        ],
        "solution": "向上加速 \\(708\\,\\mathrm{N}\\)；向下加速 \\(468\\,\\mathrm{N}\\)；自由落体 \\(0\\)。 · Upward acceleration \\(708\\,\\mathrm{N}\\); downward acceleration \\(468\\,\\mathrm{N}\\); free fall \\(0\\).",
        "solutionLatex": "N_{\\text{up}}=m(g+a)=708\\,\\mathrm{N},\\qquad N_{\\text{down}}=m(g-a)=468\\,\\mathrm{N},\\qquad N_{\\text{free fall}}=0"
      },
      {
        "title": "例 2 · 等效原理：无窗电梯 · Example 2: Equivalence principle in a windowless elevator",
        "prompt": "你在一部没有窗户的电梯里，站在秤上，秤的读数等于你在地球表面的体重。你能仅凭电梯内部的局部力学实验判断自己是在地球上静止，还是在远离任何星球的太空中以 \\(9.8\\,\\mathrm{m\\,s^{-2}}\\) 向上加速吗？请用主张—证据—推理作答，并说明什么情况下可以区分。 · You are in a windowless elevator standing on a scale whose reading equals your weight on Earth. Can local mechanical experiments inside the elevator tell whether you are at rest on Earth or accelerating upward at \\(9.8\\,\\mathrm{m\\,s^{-2}}\\) far from any planet? Answer with a claim, evidence, and reasoning, and state when the two situations could be distinguished.",
        "steps": [
          "主张：仅靠电梯内部的局部力学实验不能区分这两种情况。 · Claim: local mechanical experiments entirely inside the elevator cannot distinguish the two situations.",
          "证据：在这两种情况下，电梯内所有物体都受到相同的等效重力场；释放物体后它以 \\(9.8\\,\\mathrm{m\\,s^{-2}}\\) 相对电梯下落，秤的读数都是 \\(mg\\)，单摆周期、抛体轨迹也相同。 · Evidence: in both cases every object inside feels the same effective gravitational field; a released object falls relative to the elevator at \\(9.8\\,\\mathrm{m\\,s^{-2}}\\), the scale reads \\(mg\\), and pendulum periods and projectile trajectories are identical.",
          "推理：等效原理说非惯性系中的观察者无法局部区分视重与引力场的作用；向上加速 \\(a\\) 的参考系等效于一个大小为 \\(a\\)、方向向下的附加引力场。 · Reasoning: the equivalence principle says an observer in a noninertial frame cannot locally distinguish apparent weight from the effect of a gravitational field; a frame accelerating upward at \\(a\\) is equivalent to an additional downward field of magnitude \\(a\\).",
          "可区分的情形：若电梯足够大或实验持续时间足够长，你可以测量不同高度的 \\(g\\) 是否略有不同，或观察两个自由下落的粒子是否相互靠近（潮汐力）；真实引力场不均匀，而匀加速参考系的等效场是均匀的。 · When they can be distinguished: if the elevator is large enough or the experiment lasts long enough, you can measure whether \\(g\\) varies slightly with height or observe two freely falling particles approach each other (tidal forces); a real gravitational field is nonuniform, while the effective field of a uniformly accelerating frame is uniform."
        ],
        "solution": "局部无法区分；只有利用引力场的不均匀性（潮汐力）或借助外部信息才能区分。 · They cannot be distinguished locally; only the nonuniformity of the gravitational field (tidal forces) or external information can tell them apart.",
        "solutionLatex": "\\vec g_{\\text{eff}}=\\vec g-\\vec a,\\qquad \\text{local equivalence: }\\vec g_{\\text{eff}}\\text{ is indistinguishable from a real field}"
      },
      {
        "title": "例 3 · 惯性质量与引力质量 · Example 3: Inertial and gravitational mass",
        "prompt": "两个物体在真空中从同一高度由静止释放，一个由铁制成，一个由木材制成。若惯性质量与引力质量的比值分别为 \\(1\\) 和 \\(1.01\\)，它们的下落加速度相差多少？实验对 \\(\\dfrac{m_i}{m_g}\\) 的偏差给出了什么限制？ · Two objects are released from rest at the same height in vacuum, one made of iron and one of wood. If their ratios of inertial to gravitational mass were \\(1\\) and \\(1.01\\), by what fraction would their free-fall accelerations differ? What limit do experiments place on the deviation of \\(\\dfrac{m_i}{m_g}\\) from 1?",
        "steps": [
          "自由落体只受重力：\\(m_i a=m_g g\\)，所以 \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\)。比值 \\(\\dfrac{m_g}{m_i}\\) 越大，加速度越大；等价地，\\(\\dfrac{m_i}{m_g}\\) 越大，加速度越小。 · A freely falling object feels only gravity: \\(m_i a=m_g g\\), so \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\). A larger \\(\\dfrac{m_g}{m_i}\\) gives a larger acceleration; equivalently, a larger \\(\\dfrac{m_i}{m_g}\\) gives a smaller acceleration.",
          "若 \\(\\dfrac{m_i}{m_g}=1\\)，则 \\(a=g\\)；若 \\(\\dfrac{m_i}{m_g}=1.01\\)，则 \\(a=\\dfrac{g}{1.01}\\approx0.990g\\)，比前者小约 \\(1\\%\\)。 · If \\(\\dfrac{m_i}{m_g}=1\\), then \\(a=g\\); if \\(\\dfrac{m_i}{m_g}=1.01\\), then \\(a=\\dfrac{g}{1.01}\\approx0.990g\\), about \\(1\\%\\) smaller.",
          "实验（厄特弗什扭秤、落塔、月球激光测距、MICROSCOPE 卫星）没有发现这样的差异，把 \\(\\dfrac{m_i}{m_g}\\) 与 1 的偏差限制在约 \\(10^{-15}\\) 以内。 · Experiments (Eötvös torsion balance, drop towers, lunar laser ranging, and the MICROSCOPE satellite) find no such difference, constraining the deviation of \\(\\dfrac{m_i}{m_g}\\) from 1 to about \\(10^{-15}\\).",
          "因此“所有物体下落一样快”不是把质量“约掉”的数学结果，而是惯性质量与引力质量实验等效的物理结论；在真空中，铁、木、羽毛的加速度相同。 · Therefore “all objects fall at the same rate” is not a mathematical result of canceling mass, but the physical consequence of the experimental equivalence of inertial and gravitational mass; in vacuum, iron, wood, and feathers have the same acceleration."
        ],
        "solution": "若比值相差 \\(1\\%\\)，加速度约相差 \\(1\\%\\)；实验把偏差限制在约 \\(10^{-15}\\)，故真空中所有物体下落一样快。 · A \\(1\\%\\) difference in the ratio would give about a \\(1\\%\\) difference in acceleration; experiments limit the deviation to about \\(10^{-15}\\), so all objects fall at the same rate in vacuum.",
        "solutionLatex": "a=\\left(\\dfrac{m_g}{m_i}\\right)g,\\qquad \\left|\\dfrac{m_i}{m_g}-1\\right|<10^{-15}"
      },
      {
        "title": "例 4 · 均匀实心球内部的引力 · Example 4: Gravity inside a uniform solid sphere",
        "prompt": "把地球近似为质量 \\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\)、半径 \\(R=6.37\\times10^{6}\\,\\mathrm{m}\\) 的均匀实心球。求距地心 \\(r=\\dfrac{R}{2}\\) 处的重力加速度，以及 \\(1.0\\,\\mathrm{kg}\\) 物体受到的引力；再与距地面高度 \\(\\dfrac{R}{2}\\) 处的 \\(g\\) 比较。 · Model Earth as a uniform solid sphere of mass \\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\) and radius \\(R=6.37\\times10^{6}\\,\\mathrm{m}\\). Find the gravitational acceleration at \\(r=\\dfrac{R}{2}\\) from the center and the force on a \\(1.0\\,\\mathrm{kg}\\) object; compare with \\(g\\) at a height \\(\\dfrac{R}{2}\\) above the surface.",
        "steps": [
          "球内半径 \\(r\\) 处只有包围质量 \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\) 有贡献；外部球壳的净引力为零。 · At radius \\(r\\) inside, only the enclosed mass \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\) contributes; the outer shells exert zero net force.",
          "\\(g(r)=\\dfrac{GM(r)}{r^{2}}=\\dfrac{GM}{R^{3}}r\\)，所以 \\(g\\left(\\dfrac{R}{2}\\right)=\\dfrac{GM}{2R^{2}}=\\dfrac{g_{\\text{surface}}}{2}\\approx4.9\\,\\mathrm{m\\,s^{-2}}\\)。 · \\(g(r)=\\dfrac{GM(r)}{r^{2}}=\\dfrac{GM}{R^{3}}r\\), so \\(g\\left(\\dfrac{R}{2}\\right)=\\dfrac{GM}{2R^{2}}=\\dfrac{g_{\\text{surface}}}{2}\\approx4.9\\,\\mathrm{m\\,s^{-2}}\\).",
          "对 \\(1.0\\,\\mathrm{kg}\\) 物体：\\(F=mg=(1.0)(4.9)=4.9\\,\\mathrm{N}\\)，方向指向地心。 · For the \\(1.0\\,\\mathrm{kg}\\) object: \\(F=mg=(1.0)(4.9)=4.9\\,\\mathrm{N}\\) toward the center.",
          "高度 \\(\\dfrac{R}{2}\\) 处到地心距离为 \\(\\dfrac{3R}{2}\\)，球外平方反比：\\(g=\\dfrac{GM}{\\left(\\dfrac{3R}{2}\\right)^{2}}=\\dfrac{4}{9}g_{\\text{surface}}\\approx4.4\\,\\mathrm{m\\,s^{-2}}\\)。 · At height \\(\\dfrac{R}{2}\\), the distance to the center is \\(\\dfrac{3R}{2}\\), and the exterior inverse square gives \\(g=\\dfrac{GM}{\\left(\\dfrac{3R}{2}\\right)^{2}}=\\dfrac{4}{9}g_{\\text{surface}}\\approx4.4\\,\\mathrm{m\\,s^{-2}}\\).",
          "比较：同样离表面“半个地球半径”的尺度，向内 \\(g\\) 减半，向外只降到约 \\(\\dfrac{4}{9}\\)；这是因为内部包围质量随 \\(r^{3}\\) 减少，而外部距离按 \\(r^{2}\\) 增加。 · Comparison: at the same “half-Earth-radius” scale, inward \\(g\\) halves while outward \\(g\\) falls only to about \\(\\dfrac{4}{9}\\); inside, the enclosed mass decreases as \\(r^{3}\\), while outside the distance grows as \\(r^{2}\\)."
        ],
        "solution": "\\(g\\left(\\dfrac{R}{2}\\right)\\approx4.9\\,\\mathrm{m\\,s^{-2}}\\)，\\(F\\approx4.9\\,\\mathrm{N}\\)；高度 \\(\\dfrac{R}{2}\\) 处 \\(g\\approx4.4\\,\\mathrm{m\\,s^{-2}}\\)。 · \\(g\\left(\\dfrac{R}{2}\\right)\\approx4.9\\,\\mathrm{m\\,s^{-2}}\\), \\(F\\approx4.9\\,\\mathrm{N}\\); at height \\(\\dfrac{R}{2}\\), \\(g\\approx4.4\\,\\mathrm{m\\,s^{-2}}\\).",
        "solutionLatex": "g\\left(\\dfrac{R}{2}\\right)=\\dfrac{GM}{2R^{2}}=4.9\\,\\mathrm{m\\,s^{-2}},\\qquad F=4.9\\,\\mathrm{N},\\qquad g\\left(\\dfrac{3R}{2}\\right)=\\dfrac{4GM}{9R^{2}}=4.4\\,\\mathrm{m\\,s^{-2}}"
      },
      {
        "title": "例 5 · 穿过地球的隧道（拓展） · Example 5: Tunnel through Earth (extension)",
        "prompt": "在均匀地球模型中挖一条穿过地心的直隧道，物体在隧道内无摩擦运动。证明物体做简谐运动，并求周期。取 \\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\)、\\(R=6.37\\times10^{6}\\,\\mathrm{m}\\)。 · In a uniform-Earth model, a straight frictionless tunnel passes through the center. Show that an object in the tunnel undergoes simple harmonic motion and find the period. Use \\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\) and \\(R=6.37\\times10^{6}\\,\\mathrm{m}\\).",
        "steps": [
          "取地心为原点，物体在半径 \\(r\\) 处受到的引力为 \\(F_r=-\\dfrac{GMm}{R^{3}}r=-kr\\)，其中 \\(k=\\dfrac{GMm}{R^{3}}\\)。 · Take the center as the origin; at radius \\(r\\) the force is \\(F_r=-\\dfrac{GMm}{R^{3}}r=-kr\\), with \\(k=\\dfrac{GMm}{R^{3}}\\).",
          "这是线性回复力，形式与胡克定律相同，所以物体做简谐运动，角频率 \\(\\omega=\\sqrt{\\dfrac{k}{m}}=\\sqrt{\\dfrac{GM}{R^{3}}}\\)。 · This is a linear restoring force of the same form as Hooke's law, so the motion is simple harmonic with angular frequency \\(\\omega=\\sqrt{\\dfrac{k}{m}}=\\sqrt{\\dfrac{GM}{R^{3}}}\\).",
          "周期 \\(T=\\dfrac{2\\pi}{\\omega}=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}\\)。 · The period is \\(T=\\dfrac{2\\pi}{\\omega}=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}\\).",
          "代入数据：\\(\\dfrac{R^{3}}{GM}=\\dfrac{(6.37\\times10^{6})^{3}}{(6.67\\times10^{-11})(5.97\\times10^{24})}\\approx6.49\\times10^{5}\\,\\mathrm{s^{2}}\\)，\\(T\\approx2\\pi(806\\,\\mathrm{s})\\approx5.1\\times10^{3}\\,\\mathrm{s}\\approx84\\,\\mathrm{min}\\)。 · Substituting: \\(\\dfrac{R^{3}}{GM}=\\dfrac{(6.37\\times10^{6})^{3}}{(6.67\\times10^{-11})(5.97\\times10^{24})}\\approx6.49\\times10^{5}\\,\\mathrm{s^{2}}\\), so \\(T\\approx2\\pi(806\\,\\mathrm{s})\\approx5.1\\times10^{3}\\,\\mathrm{s}\\approx84\\,\\mathrm{min}\\).",
          "注意：这个结果只在均匀地球模型中成立；真实地球密度分层，周期会略有不同，而且隧道需要承受高温高压。 · Note: this result holds only in the uniform-Earth model; the real Earth is layered, so the period differs slightly, and such a tunnel would face extreme temperature and pressure."
        ],
        "solution": "\\(F=-kr\\)，故为简谐运动；\\(T=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}\\approx84\\,\\mathrm{min}\\)。 · \\(F=-kr\\), so the motion is simple harmonic; \\(T=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}\\approx84\\,\\mathrm{min}\\).",
        "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}=2\\pi\\sqrt{\\dfrac{(6.37\\times10^{6})^{3}}{(6.67\\times10^{-11})(5.97\\times10^{24})}}\\approx5.1\\times10^{3}\\,\\mathrm{s}\\approx84\\,\\mathrm{min}"
      },
      {
        "title": "例 6 · 场模型与质量元矢量叠加 · Example 6 · Field model and vector superposition of mass elements",
        "prompt": "把地球近似为均匀球体，\\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\)、\\(R=6.37\\times10^{6}\\,\\mathrm{m}\\)。求距地面高度 \\(h=4.00\\times10^{5}\\,\\mathrm{m}\\) 处的引力场强，并说明为什么可以把地球的引力等效为质量集中在球心。 · Model Earth as a uniform sphere with \\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\) and \\(R=6.37\\times10^{6}\\,\\mathrm{m}\\). Find the gravitational field strength at altitude \\(h=4.00\\times10^{5}\\,\\mathrm{m}\\), and explain why Earth’s gravity can be treated as if all mass were at the center.",
        "steps": [
          "到地心距离 \\(r=R+h=6.37\\times10^{6}+4.00\\times10^{5}=6.77\\times10^{6}\\,\\mathrm{m}\\)。 · Distance to Earth’s center: \\(r=R+h=6.37\\times10^{6}+4.00\\times10^{5}=6.77\\times10^{6}\\,\\mathrm{m}\\).",
          "场强 \\(g=\\dfrac{GM}{r^{2}}=\\dfrac{(6.67\\times10^{-11})(5.97\\times10^{24})}{(6.77\\times10^{6})^{2}}=8.68\\,\\mathrm{m\\,s^{-2}}\\)，方向指向地心。 · Field strength \\(g=\\dfrac{GM}{r^{2}}=\\dfrac{(6.67\\times10^{-11})(5.97\\times10^{24})}{(6.77\\times10^{6})^{2}}=8.68\\,\\mathrm{m\\,s^{-2}}\\), directed toward Earth’s center.",
          "把地球分成质量元 \\(\\mathrm{d}M\\)，每个质量元对物体的引力为 \\(\\mathrm{d}\\vec F_g\\)；由于球对称，垂直于“物体—地心”连线的分量两两抵消，沿连线的分量相加。 · Divide Earth into mass elements \\(\\mathrm{d}M\\), each exerting \\(\\mathrm{d}\\vec F_g\\) on the object; by spherical symmetry, components perpendicular to the object–center line cancel in pairs, and components along that line add.",
          "因此总引力 \\(\\vec F_{g,\\mathrm{net}}\\) 与把全部质量集中在球心的质点引力相同；这正是球壳定理的矢量叠加解释。 · Hence the net force \\(\\vec F_{g,\\mathrm{net}}\\) equals that of a point mass with all mass at the center; this is the vector-superposition explanation of the shell theorem."
        ],
        "solution": "\\(g=8.68\\,\\mathrm{m\\,s^{-2}}\\)，方向指向地心；球对称质量元的横向引力分量成对抵消，外部等效为球心质点。 · \\(g=8.68\\,\\mathrm{m\\,s^{-2}}\\) toward Earth’s center; the transverse gravitational components of spherically symmetric mass elements cancel in pairs, so the exterior is equivalent to a point mass at the center.",
        "solutionLatex": "g=\\dfrac{GM}{(R+h)^{2}}=8.68\\,\\mathrm{m\\,s^{-2}},\\qquad \\vec F_{g,\\mathrm{net}}=\\int\\mathrm{d}\\vec F_g"
      }
    ],
    "examTips": [
      "先统一 \\(r\\) 为质心距离：球外是表面高度加半径，球内是到球心的距离；不要把 \\(r\\) 当成高度。 · First make \\(r\\) the center-to-center distance: outside it is altitude plus radius, inside it is the distance to the center; never treat \\(r\\) as height.",
      "看到“秤的读数”“视重”先写法向力方程，不要直接写 \\(mg\\)；电梯向上加速 \\(N=m(g+a)\\)，向下加速 \\(N=m(g-a)\\)。 · For a scale reading or apparent weight, write the normal-force equation instead of writing \\(mg\\); an elevator accelerating upward gives \\(N=m(g+a)\\), and downward gives \\(N=m(g-a)\\).",
      "等效原理题要强调“局部”：无窗电梯内无法区分，但潮汐力、引力场不均匀性或外部信息可以区分。 · On equivalence-principle questions, emphasize “local”: inside a windowless elevator the two cases are indistinguishable, but tidal forces, field nonuniformity, or external information can distinguish them.",
      "惯性质量与引力质量：先写 \\(m_i a=m_g g\\)，再说明实验上 \\(m_i=m_g\\)，所以 \\(a=g\\)；不要只说“质量约掉”。 · Inertial and gravitational mass: write \\(m_i a=m_g g\\), then state that experiments give \\(m_i=m_g\\), so \\(a=g\\); do not simply say “mass cancels.”",
      "球壳定理三句话：球外等效为质点，球壳内部净引力为零，均匀实心球内部 \\(F\\propto r\\)；推导时先写 \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\)。 · Three statements of the shell theorem: outside it acts like a point mass, inside a shell the net force is zero, and inside a uniform solid sphere \\(F\\propto r\\); begin the derivation with \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\).",
      "画 \\(F\\)–\\(r\\) 或 \\(g\\)–\\(r\\) 图时标出球心为零、表面连续且最大、球外按 \\(\\dfrac{1}{r^{2}}\\) 衰减；注意表面处斜率不连续。 · When drawing an \\(F\\)–\\(r\\) or \\(g\\)–\\(r\\) graph, mark zero at the center, continuity and maximum at the surface, and inverse-square decrease outside; note that the slope is discontinuous at the surface.",
      "场模型题：先写 \\(\\vec g=\\dfrac{\\vec F_g}{m}\\)，再说明场由场源决定、与试探质量无关；球外 \\(g=\\dfrac{GM}{r^{2}}\\)。 · For field-model questions, write \\(\\vec g=\\dfrac{\\vec F_g}{m}\\), state that the field is set by the source and independent of the test mass, and use \\(g=\\dfrac{GM}{r^{2}}\\) outside a sphere.",
      "球对称分布题：先写“净引力 = 各质量元引力的矢量和”，再用对称性说明横向分量抵消；不要只背球壳定理结论。 · For spherically symmetric distributions, write “net force = vector sum of mass-element forces,” then use symmetry to cancel transverse components; do not merely quote the shell theorem."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.4",
        "title": "圆周运动 · Circular Motion",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.5",
        "title": "牛顿第三定律 · Newton's Laws of Motion: Third Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能 · Forces and Potential Energy",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.4",
        "title": "轨道 · Orbits",
        "relation": "后续 · follow-up"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u7",
        "code": "7.1",
        "title": "周期运动 · Periodic Motion",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "gravity-orbit",
        "title": "万有引力轨道 · Gravitational orbits"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：2.3 的牛顿第二定律与 2.4 的圆周运动提供动力学工具；2.5 的第三定律说明引力也是成对的作用力—反作用力。 · Upstream: Newton's second law in 2.3 and circular motion in 2.4 provide the dynamical tools; the third law in 2.5 shows that gravitation also comes in action–reaction pairs.",
      "数学：平方反比、球壳定理的对称性论证、\\(M(r)\\propto r^{3}\\) 的比例推理，以及 \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\) 的微积分联系。 · Mathematics: inverse-square reasoning, symmetry arguments for the shell theorem, proportionality \\(M(r)\\propto r^{3}\\), and the calculus link \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\).",
      "下游：6.4 的轨道运动把引力作为向心力；3.2 与 3.3 用引力势能分析能量；7.1 的简谐运动与穿过地球隧道的线性回复力相通。 · Downstream: orbits in 6.4 use gravity as the centripetal force; 3.2 and 3.3 analyze energy with gravitational potential energy; simple harmonic motion in 7.1 connects to the linear restoring force in a tunnel through Earth.",
      "跨学科：地球物理用 \\(g(r)\\) 推断行星内部密度；卫星导航与航天依赖精确的引力场模型；等效原理是广义相对论的实验基础之一。 · Cross-disciplinary: geophysics infers planetary interior density from \\(g(r)\\); satellite navigation and spaceflight rely on precise gravitational field models; the equivalence principle is one of the experimental foundations of general relativity.",
      "场模型把“超距作用”改写成空间每一点的局部性质：场源产生场，物体在所在位置与场相互作用；这与电场、磁场的处理方式一致。 · The field model replaces “action at a distance” with a local property at every point in space: the source produces the field, and an object interacts with the field at its location; this mirrors the treatment of electric and magnetic fields.",
      "质量元矢量叠加是球壳定理的微观解释：对称性把复杂积分化为“等效质点”，这是物理学中对称性简化问题的典型例子。 · Vector superposition of mass elements is the microscopic explanation of the shell theorem: symmetry reduces a complicated integral to an “equivalent point mass,” a classic example of symmetry simplifying a physics problem."
    ],
    "intuitionDetailed": "先抓住“球外”和“球内”的分界。球外，所有质量的效果像集中在球心，距离从球心算起，力按 \\(\\dfrac{1}{r^{2}}\\) 衰减；球内，外面的球壳从四面八方拉你，净效果为零，只有半径 \\(r\\) 以内的质量在拉你。均匀球体的包围质量按体积 \\(r^{3}\\) 增长，而引力按 \\(r^{2}\\) 衰减，所以净力与 \\(r\\) 成正比：越靠近球心，能拉你的质量越少，力越小，球心处正好为零。 · First fix the boundary between “outside” and “inside.” Outside, the entire mass acts as if concentrated at the center, distance is measured from the center, and the force falls as \\(\\dfrac{1}{r^{2}}\\); inside, the outer shells pull from all directions with zero net effect, and only the mass within radius \\(r\\) pulls you. For a uniform sphere the enclosed mass grows with volume as \\(r^{3}\\), while gravity falls as \\(r^{2}\\), so the net force is proportional to \\(r\\): closer to the center, less mass pulls you, the force is smaller, and at the center it is exactly zero. 等效原理则把“视重”与“引力”放在一起：秤读的是支持力，电梯加速时支持力会变；但在没有窗户的电梯里，你无法局部判断这个支持力是因为地球引力还是因为电梯在加速。 · The equivalence principle then places “apparent weight” and “gravity” side by side: a scale reads the supporting force, which changes when the elevator accelerates; but in a windowless elevator you cannot locally tell whether that support comes from Earth's gravity or from the elevator's acceleration. 场模型的关键是把“地球隔空拉物体”拆成两步：地球先在其周围空间产生引力场 \\(\\vec g(\\vec r)\\)，物体再在所在位置受到 \\(\\vec F_g=m\\vec g\\)。场强只由场源决定，换一个试探质量只改变受力大小，不改变场。球对称分布的净引力则要把每个质量元的引力当作矢量相加：先利用对称性把垂直于连线的分量配对抵消，再沿连线积分。这样既解释了为什么球外可以看成质量集中在球心，也解释了为什么球壳内部净力为零。 · The key to the field model is splitting “Earth pulls an object from a distance” into two steps: Earth first produces a gravitational field \\(\\vec g(\\vec r)\\) in the surrounding space, and the object then feels \\(\\vec F_g=m\\vec g\\) at its location. The field strength is set only by the source; changing the test mass changes the force magnitude but not the field. For a spherically symmetric distribution, add the forces from all mass elements as vectors: first pair and cancel the components perpendicular to the line of centers by symmetry, then integrate along that line. This explains both why the exterior acts like a point mass at the center and why the net force inside a shell is zero.",
    "development": [
      "先判断研究点在球外、球壳内部还是均匀实心球内部，选择对应的 \\(g(r)\\) 表达式。 · Decide whether the point is outside the sphere, inside a shell, or inside a uniform solid sphere, and choose the corresponding \\(g(r)\\).",
      "球外直接用 \\(g=\\dfrac{GM}{r^{2}}\\)；球内先写包围质量 \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\)，再用 \\(F=\\dfrac{GM(r)m}{r^{2}}\\)。 · Outside use \\(g=\\dfrac{GM}{r^{2}}\\); inside first write the enclosed mass \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\), then use \\(F=\\dfrac{GM(r)m}{r^{2}}\\).",
      "涉及视重时画受力图，写 \\(N\\) 与 \\(mg\\) 的方程；明确加速度方向与正方向。 · For apparent weight, draw a free-body diagram and write the equation relating \\(N\\) and \\(mg\\); specify the acceleration direction and positive direction.",
      "涉及等效原理时先说明“局部”，再举无窗电梯或自由落体电梯的例子，最后指出潮汐力可以区分。 · For the equivalence principle, first state “local,” then use a windowless or freely falling elevator, and finally note that tidal forces can distinguish the cases.",
      "涉及惯性质量与引力质量时，先区分两个定义，再写 \\(m_i a=m_g g\\)，最后引用实验限制。 · For inertial and gravitational mass, distinguish the two definitions, write \\(m_i a=m_g g\\), and cite the experimental bound.",
      "画 \\(F\\)–\\(r\\) 图：球内过原点的直线、球外 \\(\\dfrac{1}{r^{2}}\\) 曲线、表面连续；用图检查极限与量纲。 · Draw the \\(F\\)–\\(r\\) graph: a straight line through the origin inside, an inverse-square curve outside, continuous at the surface; use it to check limits and units.",
      "场模型：非接触作用的空间描述 · Field model: a spatial description of noncontact interaction",
      "质量元引力的矢量叠加与对称性 · Vector superposition of mass-element forces and symmetry"
    ],
    "checks": [
      "为什么说视重不一定等于重量？电梯向上加速、向下加速和自由落体时，秤的读数分别如何变化？ · Why is apparent weight not always equal to weight? How does a scale reading change when an elevator accelerates upward, downward, and in free fall?",
      "等效原理为什么是“局部”的？在什么实验中最容易暴露出引力场的不均匀性？ · Why is the equivalence principle “local”? In what experiment is the nonuniformity of a gravitational field most likely to show up?",
      "惯性质量与引力质量的定义分别是什么？为什么“所有物体下落一样快”是实验结论而不是定义？ · What are the definitions of inertial and gravitational mass? Why is “all objects fall at the same rate” an experimental conclusion rather than a definition?",
      "均匀实心球内部为什么是 \\(F\\propto r\\) 而不是 \\(F\\propto\\dfrac{1}{r^{2}}\\)？请用 \\(M(r)\\) 说明。 · Why is \\(F\\propto r\\) inside a uniform solid sphere rather than \\(F\\propto\\dfrac{1}{r^{2}}\\)? Explain using \\(M(r)\\).",
      "球壳内部的净引力为什么为零？球外为什么可以看成质量集中在球心？ · Why is the net gravitational force inside a shell zero? Why can the outside be treated as if all mass were at the center?",
      "在 \\(F\\)–\\(r\\) 图上，球心、表面和远处的斜率与数值各有什么特征？ · On an \\(F\\)–\\(r\\) graph, what are the values and slopes at the center, at the surface, and far away?",
      "若把地球视为均匀球体，穿过地心的隧道运动周期与什么量有关？为什么与振幅无关？ · If Earth is modeled as a uniform sphere, what determines the period of motion in a tunnel through the center? Why is it independent of amplitude?",
      "什么是场？为什么用场而不用“超距作用”描述非接触力？ · What is a field, and why use it instead of “action at a distance” to describe a noncontact force?",
      "均匀球对称分布的净引力为什么是各质量元引力的矢量和？横向分量为什么抵消？ · Why is the net force from a uniform spherically symmetric distribution the vector sum of mass-element forces, and why do the transverse components cancel?",
      "“球壳内部净力为零”是否意味着球壳内部没有引力场？ · Does “zero net force inside a shell” mean there is no gravitational field inside the shell?"
    ],
    "vocabulary": [
      {
        "termZh": "万有引力",
        "termEn": "universal gravitation",
        "defZh": "任何两个有质量的物体之间的相互吸引，大小与质量乘积成正比、与质心距离平方成反比。",
        "defEn": "The mutual attraction between any two objects with mass, proportional to the product of the masses and inversely proportional to the square of the center-to-center distance."
      },
      {
        "termZh": "引力场",
        "termEn": "gravitational field",
        "defZh": "给空间每一点赋予引力场强的模型，用来描述非接触的引力作用；某点场强等于单位质量物体所受的引力。",
        "defEn": "A model that assigns a gravitational field strength to every point in space to describe noncontact gravitational effects; the field strength at a point is the gravitational force per unit mass."
      },
      {
        "termZh": "视重",
        "termEn": "apparent weight",
        "defZh": "支持物或秤对物体的作用力大小，通常等于法向力或张力，可以与重量不同。",
        "defEn": "The magnitude of the supporting force or scale reading, usually the normal force or tension, which may differ from weight."
      },
      {
        "termZh": "等效原理",
        "termEn": "equivalence principle",
        "defZh": "非惯性系中的观察者无法局部区分视重与引力场对物体的引力作用。",
        "defEn": "An observer in a noninertial frame cannot locally distinguish apparent weight from the gravitational force exerted by a gravitational field."
      },
      {
        "termZh": "惯性质量",
        "termEn": "inertial mass",
        "defZh": "物体抵抗加速的性质，出现在 \\(\\sum\\vec F=m_i\\vec a\\) 中。",
        "defEn": "The property that measures an object's resistance to acceleration, appearing in \\(\\sum\\vec F=m_i\\vec a\\)."
      },
      {
        "termZh": "引力质量",
        "termEn": "gravitational mass",
        "defZh": "物体与引力场耦合的强弱，出现在 \\(F_g=G\\dfrac{Mm_g}{r^{2}}\\) 与 \\(w=m_g g\\) 中。",
        "defEn": "The strength of an object's coupling to a gravitational field, appearing in \\(F_g=G\\dfrac{Mm_g}{r^{2}}\\) and \\(w=m_g g\\)."
      },
      {
        "termZh": "球壳定理",
        "termEn": "shell theorem",
        "defZh": "均匀球壳对壳外一点的引力等效于质量集中在球心，对壳内任意一点的净引力为零；它是各质量元引力矢量叠加与对称性的结果。",
        "defEn": "A uniform spherical shell attracts an external point as if its mass were at the center, and exerts zero net force at any point inside; it follows from vector superposition of mass-element forces and symmetry."
      },
      {
        "termZh": "质量元",
        "termEn": "mass element",
        "defZh": "连续质量分布中取出的微小质量 dm；每个质量元都对物体贡献一个引力，净引力是这些贡献的矢量和。",
        "defEn": "A small mass dm taken from a continuous distribution; each mass element contributes a gravitational force, and the net force is the vector sum of these contributions."
      }
    ]
  },
  "2.7": {
    "id": "mech/mech-u2/2.7",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.7",
    "titleZh": "阻力与终端速度",
    "titleEn": "Resistive Forces and Terminal Velocity",
    "layer": "ap",
    "summary": "阻力与速度反向且随速度增大；用分离变量解出 \\(v(t)\\)，终端速度是合力为零时的渐近速度。 · Resistive force opposes velocity and grows with speed; separation of variables gives \\(v(t)\\), and terminal velocity is the asymptotic speed when the net force is zero.",
    "learningObjectives": [
      "能区分线性阻力 \\(F_r=-bv\\) 与二次阻力 \\(F_r=-c|v|v\\)，并说明各自的适用速度范围。 · Distinguish linear drag \\(F_r=-bv\\) from quadratic drag \\(F_r=-c|v|v\\) and state the speed regime in which each model is used.",
      "能对下落物体写出 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\) 或 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}\\)，并用分离变量求解。 · Set up \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\) or \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}\\) for a falling object and solve it by separation of variables.",
      "能求终端速度，并用 \\(v\\)–\\(t\\) 图的渐近线、初始条件和极限行为检验结果。 · Find terminal velocity and check the result with the asymptote of the \\(v\\)–\\(t\\) graph, initial conditions, and limiting behavior."
    ],
    "essentialKnowledge": [
      "阻力是速度依赖力，方向总与速度相反；一维中可写为 \\(F_r=-bv\\)（线性）或 \\(F_r=-c|v|v\\)（二次）。 · A resistive force is velocity-dependent and always opposite the velocity; in one dimension it is \\(F_r=-bv\\) (linear) or \\(F_r=-c|v|v\\) (quadratic).",
      "线性模型多用于低速、黏性阻力或简化模型；二次模型多用于较高速度、惯性阻力，例如空气中快速下落的雨滴或跳伞者。 · The linear model is used at low speed, for viscous drag, or as a simplification; the quadratic model is used at higher speed where inertial drag dominates, such as a fast raindrop or skydiver in air.",
      "竖直下落取向下为正：线性模型 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\)，二次模型 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}\\)。 · With downward positive for vertical fall, the linear model is \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\) and the quadratic model is \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}\\).",
      "终端速度由合力为零定义，即 \\(a=0\\)：线性 \\(v_t=\\dfrac{mg}{b}\\)，二次 \\(v_t=\\sqrt{\\dfrac{mg}{c}}\\)。 · Terminal velocity is defined by zero net force, \\(a=0\\): \\(v_t=\\dfrac{mg}{b}\\) for linear drag and \\(v_t=\\sqrt{\\dfrac{mg}{c}}\\) for quadratic drag.",
      "线性情形从静止释放：\\(v(t)=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)\\)，时间常数 \\(\\tau=\\dfrac{m}{b}\\)；二次情形从静止释放：\\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\)。 · Released from rest, the linear case gives \\(v(t)=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)\\) with time constant \\(\\tau=\\dfrac{m}{b}\\); the quadratic case gives \\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\).",
      "初始条件会改变解：从静止下落、向下抛出、向上抛出再下落对应不同的积分常数；向上运动时阻力向下，速度过零后阻力随之换向。 · Initial conditions change the solution: dropped from rest, thrown downward, or thrown upward and then falling give different constants of integration; while moving upward the drag points down, and after the velocity reverses the drag reverses too.",
      "\\(v\\)–\\(t\\) 图有一条水平渐近线 \\(v=v_t\\)，初始斜率等于 \\(g\\)；线性模型以指数方式趋近，二次模型以 \\(\\tanh\\) 方式更快趋近。 · The \\(v\\)–\\(t\\) graph has a horizontal asymptote \\(v=v_t\\) and initial slope \\(g\\); the linear model approaches exponentially while the quadratic model approaches faster with a \\(\\tanh\\) shape.",
      "由 \\(v(t)\\) 再积分可得 \\(x(t)\\)；AP 题更常要求速度、终端条件和图像特征，但位移可由面积或积分得到。 · Integrating \\(v(t)\\) once more gives \\(x(t)\\); AP questions more often ask for velocity, terminal conditions, and graph features, but displacement follows from the area or the integral."
    ],
    "definition": "阻力（drag，resistive force）是大小随速度变化、方向总与物体速度相反的力。线性模型写作 \\(F_r=-bv\\)，二次模型写作 \\(F_r=-c|v|v\\)，其中 \\(b\\) 的单位是 kg/s，\\(c\\) 的单位是 kg/m。对竖直下落取向下为正，牛顿第二定律给出速度的一阶微分方程；当阻力增大到与重力等大反向时，合力为零，速度不再增加，这个最大速度就是终端速度（terminal velocity）。 · A resistive force (drag) depends on speed and always points opposite the velocity. The linear model is \\(F_r=-bv\\) and the quadratic model is \\(F_r=-c|v|v\\), where \\(b\\) has units of kg/s and \\(c\\) has units of kg/m. For vertical fall with downward positive, Newton's second law gives a first-order differential equation for velocity. When drag grows to balance weight, the net force is zero, the speed stops increasing, and that maximum speed is the terminal velocity.",
    "intuition": "把阻力想成“速度越大，刹车越强”。开始时物体几乎只受重力，斜率接近 \\(g\\)；随着速度增大，阻力追上重力，加速度变小，\\(v\\)–\\(t\\) 曲线逐渐变平。终端速度不是“突然出现”的开关，而是 \\(t\\to\\infty\\) 的渐近值；经过几个时间常数后，实际速度已经非常接近它。 · Think of drag as a brake that gets stronger with speed. At the start the object feels almost only gravity, so the slope is close to \\(g\\); as speed grows, drag catches up with weight, acceleration shrinks, and the \\(v\\)–\\(t\\) curve flattens. Terminal velocity is not a switch that suddenly turns on; it is the \\(t\\to\\infty\\) asymptote, and after a few time constants the actual speed is already very close to it.",
    "formulas": [
      {
        "latex": "\\vec F_r=-b\\vec v",
        "note": "线性阻力：低速、黏性阻力或简化模型；一维分量形式为 \\(F=-bv\\)，方向自动随速度反向。 · Linear drag: low speed, viscous drag, or a simplified model; in one dimension \\(F=-bv\\), with the sign automatically reversing with velocity."
      },
      {
        "latex": "\\vec F_r=-c|\\vec v|\\vec v",
        "note": "二次阻力：较高速度的惯性阻力；一维分量形式为 \\(F=-cv^{2}\\)，但符号必须随速度反向。 · Quadratic drag: inertial drag at higher speed; in one dimension \\(F=-cv^{2}\\), but the sign must follow the velocity."
      },
      {
        "latex": "m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv",
        "note": "线性阻力下的竖直下落方程，取向下为正。 · Vertical-fall equation with linear drag, downward positive."
      },
      {
        "latex": "v(t)=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)",
        "note": "线性阻力、从静止释放的解；\\(\\tau=\\dfrac{m}{b}\\) 是时间常数。 · Linear-drag solution released from rest; \\(\\tau=\\dfrac{m}{b}\\) is the time constant."
      },
      {
        "latex": "v_t=\\dfrac{mg}{b}",
        "note": "线性阻力的终端速度。 · Terminal speed for linear drag."
      },
      {
        "latex": "m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}",
        "note": "二次阻力下的竖直下落方程，取向下为正且 \\(v\\ge 0\\)。 · Vertical-fall equation with quadratic drag, downward positive and \\(v\\ge 0\\)."
      },
      {
        "latex": "v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)",
        "note": "二次阻力、从静止释放的解；也可写成 \\(\\tanh\\left(\\dfrac{\\sqrt{cg}\\,t}{\\sqrt{m}}\\right)\\) 的等价形式。 · Quadratic-drag solution released from rest; equivalently \\(\\tanh\\left(\\dfrac{\\sqrt{cg}\\,t}{\\sqrt{m}}\\right)\\)."
      },
      {
        "latex": "v_t=\\sqrt{\\dfrac{mg}{c}}",
        "note": "二次阻力的终端速度。 · Terminal speed for quadratic drag."
      }
    ],
    "derivationNotes": [
      {
        "from": "牛顿第二定律 + 阻力模型 · Newton's second law + drag model",
        "to": "一阶微分方程 · First-order differential equation",
        "note": "取向下为正，合力为 \\(mg-bv\\)（或 \\(mg-cv^{2}\\)），得到 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\)。 · With downward positive, the net force is \\(mg-bv\\) (or \\(mg-cv^{2}\\)), so \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\)."
      },
      {
        "from": "分离变量 · Separation of variables",
        "to": "积分 · Integrate",
        "note": "线性情形写成 \\(\\dfrac{\\mathrm{d}v}{v_t-v}=\\dfrac{b}{m}\\mathrm{d}t\\)，从 \\(v(0)=0\\) 积到 \\(v(t)\\)。 · For the linear case write \\(\\dfrac{\\mathrm{d}v}{v_t-v}=\\dfrac{b}{m}\\mathrm{d}t\\) and integrate from \\(v(0)=0\\) to \\(v(t)\\)."
      },
      {
        "from": "积分结果 · Integrated result",
        "to": "指数解 · Exponential solution",
        "note": "\\(\\ln\\dfrac{v_t}{v_t-v}=\\dfrac{b}{m}t\\)，解得 \\(v=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)\\)。 · \\(\\ln\\dfrac{v_t}{v_t-v}=\\dfrac{b}{m}t\\), hence \\(v=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)\\)."
      },
      {
        "from": "终端条件 · Terminal condition",
        "to": "终端速度 · Terminal speed",
        "note": "令 \\(a=0\\) 得 \\(mg=bv_t\\) 或 \\(mg=cv_t^{2}\\)；不要令 \\(v=0\\)。 · Set \\(a=0\\) to get \\(mg=bv_t\\) or \\(mg=cv_t^{2}\\); do not set \\(v=0\\)."
      },
      {
        "from": "二次情形 · Quadratic case",
        "to": "双曲正切解 · Hyperbolic-tangent solution",
        "note": "对 \\(\\dfrac{\\mathrm{d}v}{v_t^{2}-v^{2}}=\\dfrac{c}{m}\\mathrm{d}t\\) 积分，利用 \\(\\int\\dfrac{\\mathrm{d}u}{a^{2}-u^{2}}\\) 得 \\(\\tanh\\) 形式。 · Integrate \\(\\dfrac{\\mathrm{d}v}{v_t^{2}-v^{2}}=\\dfrac{c}{m}\\mathrm{d}t\\) with the standard integral \\(\\int\\dfrac{\\mathrm{d}u}{a^{2}-u^{2}}\\) to obtain the \\(\\tanh\\) form."
      }
    ],
    "conditions": [
      "阻力模型是经验模型；线性与二次之间没有尖锐分界，具体问题会指定用哪一个。 · Drag laws are empirical; there is no sharp boundary between linear and quadratic, and each problem states which model to use.",
      "物体质量恒定，重力近似恒定（近地面），流体性质和物体形状不变。 · The mass is constant, gravity is approximately constant near Earth's surface, and the fluid properties and object shape do not change.",
      "一维竖直运动，正方向一旦选定就保持不变；速度反向时阻力项要随 \\(v\\) 的符号换向。 · The motion is one-dimensional and vertical with a fixed positive direction; when velocity reverses, the drag term must reverse with the sign of \\(v\\).",
      "\\(b\\) 或 \\(c\\) 不是普适常数：它们依赖流体密度、黏度、物体形状、截面和表面性质。 · \\(b\\) and \\(c\\) are not universal constants: they depend on fluid density, viscosity, object shape, cross-section, and surface properties.",
      "终端速度要求存在与阻力反向的恒定驱动力；自由落体在 \\(g\\) 恒定时满足这一条件。 · Terminal speed requires a constant driving force opposite the drag; free fall with constant \\(g\\) satisfies this condition."
    ],
    "keyPoints": [
      "阻力方向永远与速度相反，不是永远与坐标轴负方向相反。 · Drag always opposes velocity, not necessarily the negative coordinate direction.",
      "终端速度由 \\(a=0\\) 得到，不是由 \\(v=0\\) 得到。 · Terminal speed follows from \\(a=0\\), not from \\(v=0\\).",
      "线性与二次模型的 \\(v_t\\) 公式不同，单位检查可防止 \\(b\\)、\\(c\\) 混用。 · The linear and quadratic \\(v_t\\) formulas differ; a unit check prevents mixing \\(b\\) and \\(c\\).",
      "分离变量时把含 \\(v\\) 的项放一边，积分限对应初始时刻和任意时刻。 · In separation of variables, put all \\(v\\)-terms on one side and use limits for the initial and arbitrary times.",
      "用 \\(t=0\\)、\\(t\\to\\infty\\) 和初始斜率 \\(g\\) 检验解与图像。 · Check the solution and graph with \\(t=0\\), \\(t\\to\\infty\\), and the initial slope \\(g\\).",
      "速度反向时，阻力方向改变，但“与速度相反”这一条始终成立。 · When velocity reverses, drag reverses too; the rule “opposite velocity” always holds."
    ],
    "misconceptions": [
      "把 \\(F_r=-cv^{2}\\) 当成总沿坐标轴负方向；物体向上运动时阻力应向下，必须用 \\(F_r=-c|v|v\\) 或分段换号。 · Treating \\(F_r=-cv^{2}\\) as always along the negative axis; for upward motion the drag is downward, so use \\(F_r=-c|v|v\\) or switch signs piecewise.",
      "认为终端速度与抛出速度有关；终端速度只由 \\(m\\)、\\(g\\) 和阻力系数决定。 · Thinking terminal speed depends on launch speed; it is set only by \\(m\\), \\(g\\), and the drag coefficient.",
      "把 \\(v_t\\) 写成 \\(mg\\)，或把线性模型的 \\(b\\) 与二次模型的 \\(c\\) 混用。 · Writing \\(v_t=mg\\), or mixing the linear coefficient \\(b\\) with the quadratic coefficient \\(c\\).",
      "有阻力时仍使用 \\(v=at\\)；阻力使加速度随时间变化，必须解微分方程或读 \\(v\\)–\\(t\\) 图。 · Using \\(v=at\\) when drag is present; drag makes acceleration nonconstant, so solve the differential equation or read the \\(v\\)–\\(t\\) graph.",
      "认为“渐近”意味着永远达不到，因此终端速度没有实际意义；经过几个时间常数后速度已与 \\(v_t\\) 几乎不可区分。 · Thinking “asymptotic” means never reached, so terminal speed is meaningless; after a few time constants the speed is practically indistinguishable from \\(v_t\\).",
      "速度反向时忘记让阻力换向，导致上升和下降阶段用错符号。 · Forgetting to reverse the drag when velocity reverses, so the upward and downward stages use the wrong sign.",
      "把线性情形的指数解直接套到二次阻力上；二次情形应得到 \\(\\tanh\\) 解。 · Applying the linear exponential solution to quadratic drag; the quadratic case gives a \\(\\tanh\\) solution."
    ],
    "examples": [
      {
        "title": "例 1 · 由终端速度求阻力系数 · Example 1: Drag coefficient from terminal speed",
        "prompt": "质量 \\(m=0.20\\,\\mathrm{kg}\\) 的雨滴在空气中下落，观测到终端速度 \\(v_t=4.0\\,\\mathrm{m/s}\\)。取 \\(g=9.8\\,\\mathrm{m/s^{2}}\\)，按线性阻力模型求 \\(b\\)，并求时间常数 \\(\\tau=\\dfrac{m}{b}\\)。 · A raindrop of mass \\(m=0.20\\,\\mathrm{kg}\\) falls with an observed terminal speed \\(v_t=4.0\\,\\mathrm{m/s}\\). Taking \\(g=9.8\\,\\mathrm{m/s^{2}}\\), find \\(b\\) in the linear-drag model and the time constant \\(\\tau=\\dfrac{m}{b}\\).",
        "steps": [
          "终端时 \\(a=0\\)，合力为零：\\(mg=bv_t\\)。 · At terminal speed \\(a=0\\), so the net force is zero: \\(mg=bv_t\\).",
          "\\(b=\\dfrac{mg}{v_t}=\\dfrac{(0.20)(9.8)}{4.0}=0.49\\,\\mathrm{kg/s}\\)。 · \\(b=\\dfrac{mg}{v_t}=\\dfrac{(0.20)(9.8)}{4.0}=0.49\\,\\mathrm{kg/s}\\).",
          "\\(\\tau=\\dfrac{m}{b}=\\dfrac{0.20}{0.49}=0.41\\,\\mathrm{s}\\)。 · \\(\\tau=\\dfrac{m}{b}=\\dfrac{0.20}{0.49}=0.41\\,\\mathrm{s}\\)."
        ],
        "solution": "\\(b\\approx 0.49\\,\\mathrm{kg/s}\\)，\\(\\tau\\approx 0.41\\,\\mathrm{s}\\)。 · \\(b\\approx 0.49\\,\\mathrm{kg/s}\\) and \\(\\tau\\approx 0.41\\,\\mathrm{s}\\).",
        "solutionLatex": "b=\\dfrac{mg}{v_t}=\\dfrac{(0.20)(9.8)}{4.0}=0.49\\,\\mathrm{kg\\,s^{-1}},\\qquad \\tau=\\dfrac{m}{b}=\\dfrac{0.20}{0.49}=0.41\\,\\mathrm{s}"
      },
      {
        "title": "例 2 · 线性阻力的 v(t) · Example 2: v(t) with linear drag",
        "prompt": "同一雨滴从静止释放，\\(v_t=4.0\\,\\mathrm{m/s}\\)，\\(\\tau=0.41\\,\\mathrm{s}\\)。求 \\(t=0.50\\,\\mathrm{s}\\) 时的速度，以及达到 \\(0.90v_t\\) 所需的时间。 · The same raindrop is released from rest with \\(v_t=4.0\\,\\mathrm{m/s}\\) and \\(\\tau=0.41\\,\\mathrm{s}\\). Find its speed at \\(t=0.50\\,\\mathrm{s}\\) and the time needed to reach \\(0.90v_t\\).",
        "steps": [
          "线性解：\\(v(t)=v_t\\left(1-e^{-\\frac{t}{\\tau}}\\right)\\)。 · Linear solution: \\(v(t)=v_t\\left(1-e^{-\\frac{t}{\\tau}}\\right)\\).",
          "\\(v(0.50)=4.0\\left(1-e^{-\\dfrac{0.50}{0.41}}\\right)=4.0(1-0.295)=2.8\\,\\mathrm{m/s}\\)。 · \\(v(0.50)=4.0\\left(1-e^{-\\dfrac{0.50}{0.41}}\\right)=4.0(1-0.295)=2.8\\,\\mathrm{m/s}\\).",
          "令 \\(v=0.90v_t\\)：\\(1-e^{-\\frac{t}{\\tau}}=0.90\\)，所以 \\(t=-\\tau\\ln 0.10=0.41(2.30)=0.94\\,\\mathrm{s}\\)。 · Set \\(v=0.90v_t\\): \\(1-e^{-\\frac{t}{\\tau}}=0.90\\), so \\(t=-\\tau\\ln 0.10=0.41(2.30)=0.94\\,\\mathrm{s}\\)."
        ],
        "solution": "\\(v(0.50\\,\\mathrm{s})\\approx 2.8\\,\\mathrm{m/s}\\)；达到 \\(0.90v_t\\) 约需 \\(0.94\\,\\mathrm{s}\\)。 · \\(v(0.50\\,\\mathrm{s})\\approx 2.8\\,\\mathrm{m/s}\\); reaching \\(0.90v_t\\) takes about \\(0.94\\,\\mathrm{s}\\).",
        "solutionLatex": "v(0.50)=4.0\\left(1-e^{-\\dfrac{0.50}{0.41}}\\right)=2.8\\,\\mathrm{m\\,s^{-1}},\\qquad t=-\\tau\\ln(0.10)=0.94\\,\\mathrm{s}"
      },
      {
        "title": "例 3 · 二次阻力的 v(t) · Example 3: v(t) with quadratic drag",
        "prompt": "质量 \\(m=0.50\\,\\mathrm{kg}\\) 的物体在空气中从静止下落，二次阻力系数 \\(c=0.20\\,\\mathrm{kg/m}\\)，取 \\(g=9.8\\,\\mathrm{m/s^{2}}\\)。求终端速度与 \\(v(t)\\)，并求 \\(t=0.50\\,\\mathrm{s}\\) 时的速度。 · An object of mass \\(m=0.50\\,\\mathrm{kg}\\) falls from rest in air with quadratic drag coefficient \\(c=0.20\\,\\mathrm{kg/m}\\) and \\(g=9.8\\,\\mathrm{m/s^{2}}\\). Find the terminal speed, \\(v(t)\\), and the speed at \\(t=0.50\\,\\mathrm{s}\\).",
        "steps": [
          "终端速度：\\(v_t=\\sqrt{\\dfrac{mg}{c}}=\\sqrt{\\dfrac{(0.50)(9.8)}{0.20}}=\\sqrt{24.5}=4.95\\,\\mathrm{m/s}\\)。 · Terminal speed: \\(v_t=\\sqrt{\\dfrac{mg}{c}}=\\sqrt{\\dfrac{(0.50)(9.8)}{0.20}}=\\sqrt{24.5}=4.95\\,\\mathrm{m/s}\\).",
          "从静止释放：\\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\)。 · Released from rest: \\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\).",
          "\\(t=0.50\\,\\mathrm{s}\\)：\\(\\dfrac{gt}{v_t}=\\dfrac{(9.8)(0.50)}{4.95}=0.990\\)，\\(v=4.95\\tanh(0.990)=4.95(0.757)=3.75\\,\\mathrm{m/s}\\)。 · At \\(t=0.50\\,\\mathrm{s}\\): \\(\\dfrac{gt}{v_t}=\\dfrac{(9.8)(0.50)}{4.95}=0.990\\), so \\(v=4.95\\tanh(0.990)=4.95(0.757)=3.75\\,\\mathrm{m/s}\\)."
        ],
        "solution": "\\(v_t\\approx 5.0\\,\\mathrm{m/s}\\)，\\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\)，\\(v(0.50\\,\\mathrm{s})\\approx 3.8\\,\\mathrm{m/s}\\)。 · \\(v_t\\approx 5.0\\,\\mathrm{m/s}\\), \\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\), and \\(v(0.50\\,\\mathrm{s})\\approx 3.8\\,\\mathrm{m/s}\\).",
        "solutionLatex": "v_t=\\sqrt{\\dfrac{mg}{c}}=4.95\\,\\mathrm{m\\,s^{-1}},\\qquad v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right),\\qquad v(0.50)=3.75\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 4 · 上抛后下落：阻力换向 · Example 4: Thrown upward, then falling: drag reverses",
        "prompt": "小球以初速度 \\(v_0\\) 竖直向上抛出，取向上为正，线性阻力系数为 \\(b\\)。写出上升阶段与下降阶段的运动方程，并说明为什么不能把阻力项始终写成同一个方向的恒力。 · A ball is thrown vertically upward with initial speed \\(v_0\\), with upward positive and linear drag coefficient \\(b\\). Write the equations for the upward and downward stages and explain why the drag cannot be treated as a constant force in one fixed direction.",
        "steps": [
          "上升阶段 \\(v>0\\)：重力向下，阻力也向下，\\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\)。 · Going up, \\(v>0\\): gravity and drag both point down, so \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\).",
          "下降阶段 \\(v<0\\)：重力向下，阻力向上，但同一表达式仍给出 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\)，因为此时 \\(-bv>0\\)。 · Coming down, \\(v<0\\): gravity is down and drag is up, yet the same expression \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\) still works because \\(-bv>0\\).",
          "最高点 \\(v=0\\) 时阻力为零，只剩重力；若用大小 \\(b|v|\\) 写阻力，则必须显式加上与 \\(v\\) 相反的符号。 · At the top \\(v=0\\), drag is zero and only gravity acts; if drag is written with magnitude \\(b|v|\\), its direction opposite to \\(v\\) must be inserted explicitly."
        ],
        "solution": "用带符号速度时，一个方程 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\) 可贯穿全程；用阻力大小时必须分段换向。下降的终端速度为向下的 \\(\\dfrac{mg}{b}\\)。 · With signed velocity, one equation \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\) covers the whole motion; with drag magnitude, the direction must be switched piecewise. The downward terminal speed is \\(\\dfrac{mg}{b}\\).",
        "solutionLatex": "m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv,\\qquad v<0:\\ -bv>0,\\qquad v_t=\\dfrac{mg}{b}\\ \\text{(downward)}"
      }
    ],
    "examTips": [
      "先定正方向，再写阻力符号；速度反向时重新检查每一项。 · Choose the positive direction first, then write the drag sign; recheck every term when velocity reverses.",
      "终端条件是 \\(a=0\\)，不是 \\(v=0\\)；令合力为零再解 \\(v_t\\)。 · The terminal condition is \\(a=0\\), not \\(v=0\\); set the net force to zero and solve for \\(v_t\\).",
      "线性与二次的 \\(v_t\\) 公式不同，用单位检查 \\(b\\)（kg/s）与 \\(c\\)（kg/m）。 · The linear and quadratic \\(v_t\\) formulas differ; use units of \\(b\\) (kg/s) and \\(c\\) (kg/m) to check.",
      "分离变量时把含 \\(v\\) 的项集中到一边，积分限从 \\(0\\) 到 \\(t\\)、从 \\(0\\) 到 \\(v\\)。 · In separation of variables, collect \\(v\\)-terms on one side and integrate from \\(0\\) to \\(t\\) and from \\(0\\) to \\(v\\).",
      "用 \\(t=0\\)、\\(t\\to\\infty\\) 和初始斜率 \\(g\\) 检验解；图像题要标出渐近线。 · Check the solution with \\(t=0\\), \\(t\\to\\infty\\), and initial slope \\(g\\); on graph questions, mark the asymptote.",
      "题目给出“达到 \\(0.90v_t\\)”这类条件时，先解指数或 \\(\\tanh\\) 方程，再代入时间常数。 · When a question gives a condition such as “reaches \\(0.90v_t\\),” solve the exponential or \\(\\tanh\\) equation first, then substitute the time constant."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-prep-math",
        "code": "P3.4",
        "title": "微分方程直觉 · Differential Equation Intuition",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.8",
        "title": "弹簧力与非理想弹簧 · Spring Forces and Nonideal Springs",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.3",
        "title": "机械能守恒 · Conservation of Energy",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面（阻力建模基础） · Newton's second law and incline (foundation for drag modeling)"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：牛顿第二定律给出 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{net}}\\)，阻力模型把它变成一阶微分方程。 · Upstream: Newton's second law gives \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{net}}\\), and a drag model turns it into a first-order differential equation.",
      "数学：分离变量、指数函数与双曲正切函数；终端速度对应 \\(t\\to\\infty\\) 的渐近线。 · Mathematics: separation of variables, exponentials, and hyperbolic tangent; terminal speed is the \\(t\\to\\infty\\) asymptote.",
      "下游：阻力做负功，机械能不守恒；终端速度用于雨滴、跳伞、沉降和黏性流体问题。 · Downstream: drag does negative work, so mechanical energy is not conserved; terminal speed appears in raindrop, skydiving, sedimentation, and viscous-fluid problems.",
      "跨学科：足球、自行车和降落伞的空气阻力常用二次模型；微小颗粒在液体中的沉降常用线性模型。 · Cross-disciplinary: air drag on balls, bicycles, and parachutes is often quadratic; tiny particles settling in a liquid are often modeled linearly."
    ],
    "intuitionDetailed": "先画受力图：重力向下，阻力向上，且阻力随速度增大。刚开始阻力很小，加速度接近 \\(g\\)；速度增大后阻力变大，加速度减小；当阻力等于重力时加速度为零，速度达到终端速度。线性模型的数学是“指数趋近”，二次模型是“双曲正切趋近”；两者都有水平渐近线，但二次模型在早期上升得更快。若物体被向上抛出，阻力先向下，过最高点后阻力向上，因此必须让阻力方向跟随速度，而不是固定不变。 · Start with a free-body diagram: weight down, drag up, with drag growing with speed. Initially drag is small and acceleration is close to \\(g\\); as speed grows, drag increases and acceleration decreases; when drag equals weight, acceleration is zero and speed reaches terminal velocity. The linear model approaches exponentially and the quadratic model approaches as a hyperbolic tangent; both have a horizontal asymptote, but the quadratic curve rises faster early on. If the object is thrown upward, drag first points down and then up after the top, so drag must follow the velocity direction rather than stay fixed.",
    "development": [
      "选择阻力模型并说明适用速度范围。 · Choose the drag model and state its speed range.",
      "画受力图，定正方向，写合外力与牛顿第二定律。 · Draw the free-body diagram, choose the positive direction, and write the net force and Newton's second law.",
      "把方程整理成一阶微分方程，判断能否分离变量。 · Rearrange into a first-order differential equation and decide whether it is separable.",
      "分离变量、积分并代入初始条件，得到 \\(v(t)\\)。 · Separate, integrate, and apply the initial condition to obtain \\(v(t)\\).",
      "令 \\(a=0\\) 求 \\(v_t\\)，再用图像、极限和初始斜率检验。 · Set \\(a=0\\) to find \\(v_t\\), then check with the graph, limits, and initial slope."
    ],
    "checks": [
      "终端速度对应 \\(a=0\\) 还是 \\(v=0\\)？为什么？ · Does terminal speed correspond to \\(a=0\\) or \\(v=0\\)? Why?",
      "若物体向上运动，二次阻力应写成 \\(-cv^{2}\\) 还是 \\(-c|v|v\\)？ · If the object moves upward, should quadratic drag be written \\(-cv^{2}\\) or \\(-c|v|v\\)?",
      "从 \\(v(t)\\) 的图像上，如何读出 \\(v_t\\) 和初始加速度？ · How do you read \\(v_t\\) and the initial acceleration from a \\(v(t)\\) graph?",
      "为什么线性解中的时间常数越大，趋近终端速度越慢？ · Why does a larger time constant in the linear solution mean a slower approach to terminal speed?"
    ],
    "vocabulary": [
      {
        "termZh": "阻力",
        "termEn": "resistive force / drag",
        "defZh": "方向与速度相反、大小通常随速度增大的力。",
        "defEn": "A force opposite the velocity whose magnitude usually grows with speed."
      },
      {
        "termZh": "线性阻力",
        "termEn": "linear drag",
        "defZh": "与速度一次方成正比的阻力，\\(F_r=-bv\\)。",
        "defEn": "Drag proportional to the first power of speed, \\(F_r=-bv\\)."
      },
      {
        "termZh": "二次阻力",
        "termEn": "quadratic drag",
        "defZh": "与速度平方成正比的阻力，一维中写作 \\(F_r=-c|v|v\\)。",
        "defEn": "Drag proportional to the square of speed, written \\(F_r=-c|v|v\\) in one dimension."
      },
      {
        "termZh": "终端速度",
        "termEn": "terminal velocity",
        "defZh": "恒定驱动力与阻力等大反向时达到的最大速度。",
        "defEn": "The maximum speed reached when a constant driving force is balanced by drag."
      },
      {
        "termZh": "时间常数",
        "termEn": "time constant",
        "defZh": "线性阻力下 \\(\\tau=\\dfrac{m}{b}\\)，描述速度趋近终端速度的快慢。",
        "defEn": "For linear drag, \\(\\tau=\\dfrac{m}{b}\\), describing how quickly the speed approaches terminal velocity."
      },
      {
        "termZh": "分离变量",
        "termEn": "separation of variables",
        "defZh": "把微分方程两边的变量分开后分别积分的方法。",
        "defEn": "A method that separates the variables on the two sides of a differential equation before integrating."
      },
      {
        "termZh": "渐近线",
        "termEn": "asymptote",
        "defZh": "曲线无限接近但一般不相交的直线；\\(v\\)–\\(t\\) 图中的 \\(v=v_t\\) 就是水平渐近线。",
        "defEn": "A line that a curve approaches without generally crossing; \\(v=v_t\\) is the horizontal asymptote of the \\(v\\)–\\(t\\) graph."
      }
    ]
  },
  "2.8": {
    "id": "mech/mech-u2/2.8",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.8",
    "titleZh": "弹簧力与非理想弹簧",
    "titleEn": "Spring Forces and Nonideal Springs",
    "layer": "ap",
    "summary": "理想弹簧服从胡克定律且力总指向平衡位置；非理想弹簧的 \\(F(x)\\) 不线性，必须读图或积分，不能盲目套用 \\(F=-kx\\) 与 \\(U=\\dfrac{1}{2}kx^{2}\\)。 · An ideal spring obeys Hooke's law with a force always toward equilibrium; a nonideal spring has a nonlinear \\(F(x)\\), so read the graph or integrate instead of blindly using \\(F=-kx\\) and \\(U=\\dfrac{1}{2}kx^{2}\\). 弹簧的宏观形变对应内部子结构变化；外力、温度等外部变量改变时，内部构型也会改变；多个弹簧可用一个等效劲度系数描述。 · A spring’s macroscopic deformation corresponds to changes in its internal substructure; external variables such as applied force and temperature also change that substructure; a combination of springs can be described by one equivalent spring constant.",
    "learningObjectives": [
      "能描述理想弹簧的力：大小与形变成正比，方向总指向平衡位置。 · Describe the force of an ideal spring: magnitude proportional to deformation and direction always toward equilibrium.",
      "能计算串联与并联弹簧的等效劲度系数，并判断等效劲度变大还是变小。 · Calculate the equivalent spring constant for series and parallel combinations and decide whether it increases or decreases.",
      "能从非线性 \\(F\\)–\\(x\\) 图像读出给定形变下的力，并说明为什么不能用 \\(F=-kx\\) 或 \\(\\dfrac{1}{2}kx^{2}\\)。 · Read the force at a given deformation from a nonlinear \\(F\\)–\\(x\\) graph and explain why \\(F=-kx\\) or \\(\\dfrac{1}{2}kx^{2}\\) no longer applies.",
      "能画拉伸与压缩时的弹簧受力图，并正确标出弹簧对物体的力。 · Draw free-body diagrams for stretched and compressed springs and correctly show the force exerted on the object.",
      "能说明外部变量（外力、温度、介质）如何改变弹簧的内部子结构，并判断胡克定律是否仍适用。 · Explain how external variables (applied force, temperature, medium) change a spring’s internal substructure and decide whether Hooke’s law still applies.",
      "能写出 n 个弹簧串联或并联的等效劲度通式，并用“同一力/同一形变”判断组合方式。 · Write the general equivalent-spring-constant formulas for n springs in series or parallel and identify the combination from “same force” or “same deformation.”"
    ],
    "essentialKnowledge": [
      "理想弹簧质量可忽略，力与“相对自然长度的形变”成正比，且总指向平衡位置。 · An ideal spring has negligible mass, exerts a force proportional to the change from its relaxed length, and always points toward equilibrium.",
      "弹簧的宏观形变对应内部子结构变化：线圈间距、原子间距离与键角都会改变。外力、温度、介质等外部变量改变时，内部构型随之改变；超过弹性限度后还会发生永久变形，胡克定律不再适用。 · A spring’s macroscopic deformation corresponds to changes in its internal substructure: coil spacing, interatomic distances, and bond angles all change. When external variables such as applied force, temperature, or the surrounding medium change, the internal configuration changes too; beyond the elastic limit the deformation becomes permanent and Hooke’s law no longer applies.",
      "胡克定律：\\(F_s=-k\\Delta x\\)（或 \\(F=-kx\\)，\\(x\\) 从平衡位置量起）；大小 \\(F_s=k|\\Delta x|\\)。 · Hooke's law: \\(F_s=-k\\Delta x\\) (or \\(F=-kx\\) with \\(x\\) measured from equilibrium); magnitude \\(F_s=k|\\Delta x|\\).",
      "非理想弹簧要么质量不可忽略，要么力不与形变成正比；例如 \\(F_x=-(kx+\\beta x^{3})\\)。 · A nonideal spring either has nonnegligible mass or a force not proportional to deformation; for example \\(F_x=-(kx+\\beta x^{3})\\).",
      "对非理想弹簧，\\(\\dfrac{1}{2}k(\\Delta x)^{2}\\) 一般不是势能；势能必须由 \\(F(x)\\) 积分得到。 · For a nonideal spring, \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\) is generally not the potential energy; the potential energy must be obtained by integrating \\(F(x)\\).",
      "串联：\\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}+\\cdots+\\dfrac{1}{k_n}\\)，等效劲度小于最小的单个劲度；并联：\\(k_{\\mathrm{eq}}=k_1+k_2+\\cdots+k_n\\)。 · Series: \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}+\\cdots+\\dfrac{1}{k_n}\\), so the equivalent constant is smaller than the smallest individual constant; parallel: \\(k_{\\mathrm{eq}}=k_1+k_2+\\cdots+k_n\\).",
      "串联时各弹簧受力大小相同、形变相加；并联时各弹簧形变相同、力相加。 · In series, each spring feels the same force and the deformations add; in parallel, each spring has the same deformation and the forces add.",
      "弹簧对物体的力总指向平衡位置；拉伸时拉回，压缩时推回。 · The spring force on the object always points toward equilibrium: it pulls back when stretched and pushes back when compressed.",
      "在 \\(F\\)–\\(x\\) 图上，理想弹簧是一条过原点的直线，斜率 \\(-k\\)；非线性弹簧是曲线，给定 \\(x\\) 处的力要读纵坐标，局部劲度要读切线斜率。 · On an \\(F\\)–\\(x\\) graph, an ideal spring is a straight line through the origin with slope \\(-k\\); a nonlinear spring is curved, so read the force from the vertical coordinate and the local stiffness from the tangent slope.",
      "等效弹簧模型把一组弹簧的力—形变关系用一个 \\(k_{\\mathrm{eq}}\\) 代替：串联时各弹簧受力相同、形变相加；并联时各弹簧形变相同、力相加。该模型要求弹簧理想、质量可忽略，并且只由纯串联或纯并联组成。 · The equivalent-spring model replaces a combination of springs by one \\(k_{\\mathrm{eq}}\\): in series each spring feels the same force and the deformations add; in parallel each spring has the same deformation and the forces add. The model requires ideal, massless springs and a purely series or purely parallel arrangement."
    ],
    "definition": "弹簧力是弹簧因形变而对物体施加的接触力。理想弹簧模型要求弹簧质量可忽略、形变在弹性范围内，并且力与相对自然长度的形变成正比：\\(F_s=-k\\Delta x\\)，负号表示力总指向平衡位置。非理想弹簧（nonideal spring，亦写作 non-ideal spring）则要么质量不可忽略，要么力与形变不成正比，例如 \\(F_x=-(kx+\\beta x^{3})\\)；这时胡克定律和 \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\) 都不能直接套用。 · A spring force is the contact force a spring exerts on an object because of its deformation. The ideal-spring model assumes negligible spring mass, deformation within the elastic range, and a force proportional to the change from the relaxed length: \\(F_s=-k\\Delta x\\), where the minus sign means the force points toward equilibrium. A nonideal spring either has nonnegligible mass or a force not proportional to deformation, such as \\(F_x=-(kx+\\beta x^{3})\\); then Hooke's law and \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\) cannot be used directly. 弹簧的形变不是单纯的“外形改变”，而是内部线圈间距、原子间距与键角的改变；外力、温度等外部变量可以改变这些内部子结构，从而改变劲度系数或使胡克定律失效。多个弹簧对同一物体作用时，可用一个等效弹簧代替：串联 \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{k_i}\\)，并联 \\(k_{\\mathrm{eq}}=\\sum_i k_i\\)。 · A spring’s deformation is not merely a change in shape: it changes coil spacing, interatomic distances, and bond angles. External variables such as applied force and temperature can change this internal substructure, thereby changing the spring constant or making Hooke’s law fail. When several springs act on the same object, they can be replaced by one equivalent spring: series \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{k_i}\\), parallel \\(k_{\\mathrm{eq}}=\\sum_i k_i\\).",
    "intuition": "把弹簧想成一根“记得自己自然长度”的弹簧：你拉长它，它往回拉；你压缩它，它往回推；形变越大，力越大。理想弹簧的 \\(F\\)–\\(x\\) 图是一条直线，所以“斜率”就是劲度；非理想弹簧的图是弯的，同样的形变可能对应更大的力，局部斜率也会随位置改变。 · Think of a spring as remembering its relaxed length: stretch it and it pulls back; compress it and it pushes back; the larger the deformation, the larger the force. An ideal spring has a straight \\(F\\)–\\(x\\) graph, so its slope is the spring constant; a nonideal spring has a curved graph, so the same deformation may give a larger force and the local slope changes with position. 把弹簧想成一串可伸长的“原子弹簧”：外力拉长它时，每个线圈和每条原子键都分担一点形变；温度升高会让原子振动加剧、键更容易变形，所以劲度可能变小。多个弹簧串起来像“接力”分担同一个力，整体更软；并排则像“多人一起抬”，同一形变更费力，整体更硬。 · Think of a spring as a chain of stretchable “atomic springs”: when an external force stretches it, every coil and every atomic bond shares some of the deformation; higher temperature increases atomic vibrations and makes bonds easier to deform, so the stiffness may decrease. Springs in series “relay” the same force and are softer overall; springs side by side share the same deformation and require more force, so the combination is stiffer.",
    "formulas": [
      {
        "latex": "\\vec F_s=-k\\Delta\\vec x",
        "note": "胡克定律；\\(\\Delta x\\) 从自然长度量起，负号表示指向平衡位置。 · Hooke's law; \\(\\Delta x\\) is measured from the relaxed length and the minus sign points toward equilibrium."
      },
      {
        "latex": "F_s=k|\\Delta x|",
        "note": "弹簧力的大小；拉伸与压缩都取形变大小。 · Magnitude of the spring force; use the magnitude of deformation for both stretch and compression."
      },
      {
        "latex": "\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}",
        "note": "两个弹簧串联；等效劲度小于任一单个劲度。 · Two springs in series; the equivalent constant is smaller than either individual constant."
      },
      {
        "latex": "k_{\\mathrm{eq}}=k_1+k_2",
        "note": "两个弹簧并联；等效劲度为两者之和。 · Two springs in parallel; the equivalent constant is the sum."
      },
      {
        "latex": "k_{\\mathrm{eq}}=\\dfrac{k_1k_2}{k_1+k_2}",
        "note": "两个弹簧串联的等价写法（仅两个弹簧）。 · Equivalent two-spring series form (two springs only)."
      },
      {
        "latex": "F_x=-(kx+\\beta x^{3})",
        "note": "非理想弹簧的一个具体模型；\\(\\beta\\) 项破坏线性。 · A concrete nonideal-spring model; the \\(\\beta\\) term breaks linearity."
      },
      {
        "latex": "U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}",
        "note": "上述非理想弹簧的势能（取 \\(U(0)=0\\)）；不能只用 \\(\\dfrac{1}{2}kx^{2}\\)。 · Potential energy for the nonideal spring above with \\(U(0)=0\\); \\(\\dfrac{1}{2}kx^{2}\\) alone is not enough."
      },
      {
        "latex": "\\dfrac{1}{k_{\\mathrm{eq}}}=\\sum_{i=1}^{n}\\dfrac{1}{k_i}",
        "note": "n 个弹簧纯串联的等效劲度；等效值小于任一个 \\(k_i\\)。 · Equivalent constant for n springs purely in series; it is smaller than any individual \\(k_i\\)."
      },
      {
        "latex": "k_{\\mathrm{eq}}=\\sum_{i=1}^{n}k_i",
        "note": "n 个弹簧纯并联的等效劲度；等效值大于任一个 \\(k_i\\)。 · Equivalent constant for n springs purely in parallel; it is larger than any individual \\(k_i\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "胡克定律 · Hooke's law",
        "to": "受力图 · Free-body diagram",
        "note": "弹簧对物体的力沿弹簧方向指向平衡位置；拉伸与压缩时方向相反。 · The spring force on the object points along the spring toward equilibrium; its direction reverses between stretch and compression."
      },
      {
        "from": "串联：同一力、形变相加 · Series: same force, deformations add",
        "to": "等效劲度 · Equivalent constant",
        "note": "\\(\\Delta x=\\Delta x_1+\\Delta x_2=\\dfrac{F}{k_1}+\\dfrac{F}{k_2}\\)，故 \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}\\)。 · \\(\\Delta x=\\Delta x_1+\\Delta x_2=\\dfrac{F}{k_1}+\\dfrac{F}{k_2}\\), hence \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}\\)."
      },
      {
        "from": "并联：同一形变、力相加 · Parallel: same deformation, forces add",
        "to": "等效劲度 · Equivalent constant",
        "note": "\\(F=F_1+F_2=(k_1+k_2)\\Delta x\\)，故 \\(k_{\\mathrm{eq}}=k_1+k_2\\)。 · \\(F=F_1+F_2=(k_1+k_2)\\Delta x\\), hence \\(k_{\\mathrm{eq}}=k_1+k_2\\)."
      },
      {
        "from": "非理想力 \\(F(x)\\) · Nonideal force \\(F(x)\\)",
        "to": "势能 · Potential energy",
        "note": "\\(U(x)=-\\int F_x\\,\\mathrm{d}x\\)；对 \\(F_x=-(kx+\\beta x^{3})\\) 积分得 \\(\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}\\)。 · \\(U(x)=-\\int F_x\\,\\mathrm{d}x\\); integrating \\(F_x=-(kx+\\beta x^{3})\\) gives \\(\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}\\)."
      },
      {
        "from": "n 个弹簧串联 · n springs in series",
        "to": "等效劲度通式 · General equivalent constant",
        "note": "每个弹簧受力都是 \\(F\\)，总形变 \\(\\Delta x=\\sum_i\\Delta x_i=F\\sum_i\\dfrac{1}{k_i}\\)，所以 \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{k_i}\\)。 · Each spring feels the same force \\(F\\), and the total deformation is \\(\\Delta x=\\sum_i\\Delta x_i=F\\sum_i\\dfrac{1}{k_i}\\), so \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{k_i}\\)."
      },
      {
        "from": "n 个弹簧并联 · n springs in parallel",
        "to": "等效劲度通式 · General equivalent constant",
        "note": "每个弹簧形变相同 \\(\\Delta x\\)，总力 \\(F=\\sum_iF_i=\\Delta x\\sum_i k_i\\)，所以 \\(k_{\\mathrm{eq}}=\\sum_i k_i\\)。 · Each spring has the same deformation \\(\\Delta x\\), and the total force is \\(F=\\sum_iF_i=\\Delta x\\sum_i k_i\\), so \\(k_{\\mathrm{eq}}=\\sum_i k_i\\)."
      },
      {
        "from": "外部变量 · External variables",
        "to": "内部子结构变化 · Internal substructure change",
        "note": "外力改变线圈间距与原子键长；温度改变原子振动幅度与平均键长；介质可能引起腐蚀或溶胀。这些都会改变 \\(k\\)，或使 \\(F\\)–\\(x\\) 关系偏离线性。 · An applied force changes coil spacing and bond lengths; temperature changes atomic vibration amplitudes and average bond lengths; the surrounding medium may cause corrosion or swelling. All of these can change \\(k\\) or make the \\(F\\)–\\(x\\) relation nonlinear."
      }
    ],
    "conditions": [
      "理想弹簧：质量可忽略、线性弹性、无形变滞后，且形变在弹性限度内。 · Ideal spring: negligible mass, linear elasticity, no hysteresis, and deformation within the elastic limit.",
      "\\(\\Delta x\\) 必须从自然长度量起，不是弹簧的总长度。 · \\(\\Delta x\\) must be measured from the relaxed length, not the total length of the spring.",
      "串并联公式假设弹簧理想、质量可忽略，并且系统只由纯串联或纯并联组成；AP C 不要求混合串并联。 · The series/parallel formulas assume ideal, massless springs and a purely series or purely parallel arrangement; AP C does not require mixed series-parallel combinations.",
      "非理想弹簧的 \\(F(x)\\) 必须由题目给出或实验测得；\\(\\beta\\) 可正可负，模型只在给定范围内有效。 · The nonideal \\(F(x)\\) must be given or measured; \\(\\beta\\) may be positive or negative, and the model is valid only over the stated range.",
      "弹簧力方向始终指向平衡位置；若弹簧有质量，弹簧内部各点的力不再相同。 · The spring force always points toward equilibrium; if the spring has mass, the force is no longer the same at every point along it.",
      "外部变量（外力、温度、介质、辐照等）可能改变弹簧的内部子结构；题目给出温度依赖或非线性 \\(F(x)\\) 时，不能默认 \\(k\\) 不变。 · External variables (applied force, temperature, medium, radiation, and so on) may change a spring’s internal substructure; when a problem gives a temperature dependence or a nonlinear \\(F(x)\\), do not assume \\(k\\) is constant.",
      "等效劲度通式只适用于纯串联或纯并联的理想弹簧组合；混合连接需要逐步化简，不能直接套用通式。 · The general equivalent-constant formulas apply only to purely series or purely parallel ideal-spring combinations; mixed connections require step-by-step reduction and cannot use the general formula directly."
    ],
    "keyPoints": [
      "胡克定律只适用于理想弹簧，且 \\(x\\) 从平衡位置量起。 · Hooke's law applies only to an ideal spring, with \\(x\\) measured from equilibrium.",
      "弹簧力总指向平衡位置：拉伸时拉回，压缩时推回。 · The spring force always points toward equilibrium: pull back when stretched, push back when compressed.",
      "串联等效劲度变小，并联等效劲度变大。 · Series lowers the equivalent spring constant; parallel raises it.",
      "非线性弹簧的力要读 \\(F\\)–\\(x\\) 图，局部劲度是切线斜率的绝对值。 · For a nonlinear spring, read the force from the \\(F\\)–\\(x\\) graph and take the local stiffness as the absolute value of the tangent slope.",
      "非理想弹簧的势能不能直接用 \\(\\dfrac{1}{2}kx^{2}\\)，必须积分 \\(F(x)\\)。 · The potential energy of a nonideal spring cannot be taken as \\(\\dfrac{1}{2}kx^{2}\\); integrate \\(F(x)\\) instead.",
      "弹簧对物体的力与物体对弹簧的力是一对作用力—反作用力，作用在不同物体上。 · The force of the spring on the object and the force of the object on the spring are an action–reaction pair acting on different objects.",
      "弹簧形变对应内部线圈间距、原子间距与键角的变化；外部变量可以改变这些子结构。 · Spring deformation corresponds to changes in coil spacing, interatomic distances, and bond angles; external variables can change this substructure.",
      "温度升高、材料老化或超过弹性限度都会改变 \\(k\\) 或使 \\(F\\)–\\(x\\) 关系非线性。 · Higher temperature, material aging, or exceeding the elastic limit can change \\(k\\) or make the \\(F\\)–\\(x\\) relation nonlinear.",
      "n 个弹簧串联用倒数相加，并联用劲度直接相加；先判断“同一力”还是“同一形变”。 · For n springs, add reciprocals in series and add spring constants directly in parallel; first decide “same force” or “same deformation.”"
    ],
    "misconceptions": [
      "把 \\(\\Delta x\\) 当成弹簧的总长度，而不是相对自然长度的变化。 · Treating \\(\\Delta x\\) as the total length of the spring rather than the change from its relaxed length.",
      "认为弹簧力总与运动方向相反；实际上它总指向平衡位置，可以与运动方向相同或相反。 · Thinking the spring force always opposes motion; it actually points toward equilibrium and may be with or against the motion.",
      "拉伸和压缩时忘记弹簧力的方向会反转。 · Forgetting that the spring force reverses direction between stretch and compression.",
      "对非线性弹簧继续使用 \\(F=-kx\\) 或 \\(U=\\dfrac{1}{2}kx^{2}\\)。 · Continuing to use \\(F=-kx\\) or \\(U=\\dfrac{1}{2}kx^{2}\\) for a nonlinear spring.",
      "串联时把劲度直接相加，或并联时把劲度取倒数相加。 · Adding spring constants directly for series, or adding reciprocals for parallel.",
      "认为并联后的等效劲度小于单个弹簧；并联是“共同分担形变”，等效劲度变大。 · Thinking a parallel combination has a smaller equivalent constant; parallel springs share the same deformation, so the equivalent constant is larger.",
      "忽略弹簧质量却同时使用非理想弹簧模型，导致模型自相矛盾。 · Ignoring spring mass while also invoking a nonideal-spring model, which makes the model inconsistent.",
      "认为弹簧形变只是外形改变，与内部原子结构无关。 · Thinking spring deformation is only a change in shape and unrelated to the internal atomic structure.",
      "认为弹簧的劲度系数是永远不变的材料常数，忽略温度、老化或大形变的影响。 · Thinking a spring constant is an unchanging material constant, ignoring temperature, aging, or large deformation.",
      "对 n 个弹簧的串并联仍只套用两个弹簧的特例公式，或把混合连接直接当作纯串/纯并联。 · Applying only the two-spring special formulas to n springs, or treating a mixed connection as purely series or parallel."
    ],
    "examples": [
      {
        "title": "例 1 · 串联与并联的等效劲度 · Example 1: Equivalent constant in series and parallel",
        "prompt": "两个理想弹簧 \\(k_1=200\\,\\mathrm{N/m}\\)、\\(k_2=300\\,\\mathrm{N/m}\\)。分别求串联与并联时的等效劲度。 · Two ideal springs have \\(k_1=200\\,\\mathrm{N/m}\\) and \\(k_2=300\\,\\mathrm{N/m}\\). Find the equivalent spring constant in series and in parallel.",
        "steps": [
          "串联：\\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{200}+\\dfrac{1}{300}=\\dfrac{5}{600}\\)，所以 \\(k_{\\mathrm{eq}}=120\\,\\mathrm{N/m}\\)。 · Series: \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{200}+\\dfrac{1}{300}=\\dfrac{5}{600}\\), so \\(k_{\\mathrm{eq}}=120\\,\\mathrm{N/m}\\).",
          "并联：\\(k_{\\mathrm{eq}}=200+300=500\\,\\mathrm{N/m}\\)。 · Parallel: \\(k_{\\mathrm{eq}}=200+300=500\\,\\mathrm{N/m}\\).",
          "检查：串联结果 \\(120<200\\)，并联结果 \\(500>300\\)，符合“串联变小、并联变大”。 · Check: the series result \\(120<200\\) and the parallel result \\(500>300\\), consistent with “series smaller, parallel larger.”"
        ],
        "solution": "串联 \\(120\\,\\mathrm{N/m}\\)，并联 \\(500\\,\\mathrm{N/m}\\)。 · Series \\(120\\,\\mathrm{N/m}\\), parallel \\(500\\,\\mathrm{N/m}\\).",
        "solutionLatex": "k_{\\mathrm{eq,series}}=\\dfrac{(200)(300)}{200+300}=120\\,\\mathrm{N\\,m^{-1}},\\qquad k_{\\mathrm{eq,parallel}}=200+300=500\\,\\mathrm{N\\,m^{-1}}"
      },
      {
        "title": "例 2 · 非线性弹簧的力与势能 · Example 2: Force and potential energy of a nonlinear spring",
        "prompt": "某非理想弹簧的力为 \\(F_x=-(800x+2000x^{3})\\,\\mathrm{N}\\)，\\(x\\) 以 m 为单位。求 \\(x=0.10\\,\\mathrm{m}\\) 时的弹簧力，并求从 \\(0\\) 到 \\(0.10\\,\\mathrm{m}\\) 弹簧势能的变化。 · A nonideal spring exerts \\(F_x=-(800x+2000x^{3})\\,\\mathrm{N}\\) with \\(x\\) in meters. Find the spring force at \\(x=0.10\\,\\mathrm{m}\\) and the change in spring potential energy from \\(0\\) to \\(0.10\\,\\mathrm{m}\\).",
        "steps": [
          "代入 \\(x=0.10\\)：\\(F_x=-[800(0.10)+2000(0.10)^{3}]=-(80+2.0)=-82\\,\\mathrm{N}\\)。 · Substitute \\(x=0.10\\): \\(F_x=-[800(0.10)+2000(0.10)^{3}]=-(80+2.0)=-82\\,\\mathrm{N}\\).",
          "势能变化 \\(\\Delta U=-\\int_0^{0.10}F_x\\,\\mathrm{d}x=\\int_0^{0.10}(800x+2000x^{3})\\,\\mathrm{d}x\\)。 · Potential-energy change \\(\\Delta U=-\\int_0^{0.10}F_x\\,\\mathrm{d}x=\\int_0^{0.10}(800x+2000x^{3})\\,\\mathrm{d}x\\).",
          "\\(\\Delta U=\\left[400x^{2}+500x^{4}\\right]_0^{0.10}=4.0+0.050=4.05\\,\\mathrm{J}\\)。 · \\(\\Delta U=\\left[400x^{2}+500x^{4}\\right]_0^{0.10}=4.0+0.050=4.05\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(F_x(0.10)=-82\\,\\mathrm{N}\\)（指向平衡位置），\\(\\Delta U=4.05\\,\\mathrm{J}\\)。 · \\(F_x(0.10)=-82\\,\\mathrm{N}\\) (toward equilibrium) and \\(\\Delta U=4.05\\,\\mathrm{J}\\).",
        "solutionLatex": "F_x(0.10)=-82\\,\\mathrm{N},\\qquad \\Delta U=\\int_0^{0.10}(800x+2000x^{3})\\,\\mathrm{d}x=4.05\\,\\mathrm{J}"
      },
      {
        "title": "例 3 · 拉伸与压缩的受力图 · Example 3: Free-body diagrams for stretch and compression",
        "prompt": "水平弹簧左端固定，右端连接物块，弹簧劲度 \\(k=500\\,\\mathrm{N/m}\\)。分别讨论弹簧被拉伸 \\(0.040\\,\\mathrm{m}\\) 与被压缩 \\(0.040\\,\\mathrm{m}\\) 时，弹簧对物块的力。 · A horizontal spring is fixed at its left end and attached to a block at its right end, with \\(k=500\\,\\mathrm{N/m}\\). Discuss the force on the block when the spring is stretched by \\(0.040\\,\\mathrm{m}\\) and when it is compressed by \\(0.040\\,\\mathrm{m}\\).",
        "steps": [
          "拉伸时，物块离平衡位置更远，弹簧把物块拉回平衡位置（向左），大小 \\(F=k(0.040)=20\\,\\mathrm{N}\\)。 · When stretched, the block is farther from equilibrium and the spring pulls it back toward equilibrium (to the left) with magnitude \\(F=k(0.040)=20\\,\\mathrm{N}\\).",
          "压缩时，物块在平衡位置另一侧，弹簧把物块推回平衡位置（向右），大小仍为 \\(20\\,\\mathrm{N}\\)。 · When compressed, the block is on the other side of equilibrium and the spring pushes it back toward equilibrium (to the right), again with magnitude \\(20\\,\\mathrm{N}\\).",
          "两种情况下力的方向都指向平衡位置，而不是“总与速度相反”。 · In both cases the force points toward equilibrium, not necessarily opposite the velocity."
        ],
        "solution": "拉伸：\\(20\\,\\mathrm{N}\\) 向左；压缩：\\(20\\,\\mathrm{N}\\) 向右。 · Stretched: \\(20\\,\\mathrm{N}\\) to the left; compressed: \\(20\\,\\mathrm{N}\\) to the right.",
        "solutionLatex": "|F_s|=k|\\Delta x|=(500)(0.040)=20\\,\\mathrm{N},\\qquad \\vec F_s\\ \\text{toward equilibrium}"
      },
      {
        "title": "例 4 · 由斜率求局部劲度 · Example 4: Local stiffness from the tangent slope",
        "prompt": "对例 2 的非线性弹簧，求 \\(x=0.10\\,\\mathrm{m}\\) 处的局部劲度 \\(k_{\\mathrm{loc}}=-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}\\)，并与理想弹簧的 \\(800\\,\\mathrm{N/m}\\) 比较。 · For the nonlinear spring of Example 2, find the local stiffness \\(k_{\\mathrm{loc}}=-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}\\) at \\(x=0.10\\,\\mathrm{m}\\) and compare it with the ideal-spring value \\(800\\,\\mathrm{N/m}\\).",
        "steps": [
          "\\(F_x=-(800x+2000x^{3})\\)，所以 \\(-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}=800+6000x^{2}\\)。 · \\(F_x=-(800x+2000x^{3})\\), so \\(-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}=800+6000x^{2}\\).",
          "在 \\(x=0.10\\)：\\(k_{\\mathrm{loc}}=800+6000(0.010)=860\\,\\mathrm{N/m}\\)。 · At \\(x=0.10\\): \\(k_{\\mathrm{loc}}=800+6000(0.010)=860\\,\\mathrm{N/m}\\).",
          "局部劲度比线性项大约 \\(7.5\\%\\)，说明 \\(F\\)–\\(x\\) 曲线在该处已经明显偏离直线。 · The local stiffness is about \\(7.5\\%\\) larger than the linear term, so the \\(F\\)–\\(x\\) curve has visibly departed from a straight line there."
        ],
        "solution": "\\(k_{\\mathrm{loc}}(0.10)=860\\,\\mathrm{N/m}\\)，大于 \\(800\\,\\mathrm{N/m}\\)。 · \\(k_{\\mathrm{loc}}(0.10)=860\\,\\mathrm{N/m}\\), larger than \\(800\\,\\mathrm{N/m}\\).",
        "solutionLatex": "k_{\\mathrm{loc}}=-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}=800+6000x^{2}\\Big|_{x=0.10}=860\\,\\mathrm{N\\,m^{-1}}"
      },
      {
        "title": "例 5 · 温度改变弹簧的内部子结构 · Example 5 · Temperature changes a spring’s internal substructure",
        "prompt": "一根金属弹簧在 \\(20^\\circ\\mathrm{C}\\) 时 \\(k=500\\,\\mathrm{N\\,m^{-1}}\\)，加热到 \\(200^\\circ\\mathrm{C}\\) 后劲度系数变为 \\(450\\,\\mathrm{N\\,m^{-1}}\\)。分别求两种温度下拉伸 \\(2.0\\,\\mathrm{cm}\\) 所需的力，并说明温度这个外部变量如何改变内部子结构。 · A metal spring has \\(k=500\\,\\mathrm{N\\,m^{-1}}\\) at \\(20^\\circ\\mathrm{C}\\) and \\(k=450\\,\\mathrm{N\\,m^{-1}}\\) after heating to \\(200^\\circ\\mathrm{C}\\). Find the force needed to stretch it by \\(2.0\\,\\mathrm{cm}\\) at each temperature, and explain how temperature as an external variable changes the internal substructure.",
        "steps": [
          "\\(20^\\circ\\mathrm{C}\\)：\\(F=kx=(500)(0.020)=10\\,\\mathrm{N}\\)。 · At \\(20^\\circ\\mathrm{C}\\): \\(F=kx=(500)(0.020)=10\\,\\mathrm{N}\\).",
          "\\(200^\\circ\\mathrm{C}\\)：\\(F=(450)(0.020)=9.0\\,\\mathrm{N}\\)。 · At \\(200^\\circ\\mathrm{C}\\): \\(F=(450)(0.020)=9.0\\,\\mathrm{N}\\).",
          "温度升高使原子振动加剧、平均键长和键角略有变化，原子间恢复力变弱，所以同样形变只需要较小的力，\\(k\\) 变小。 · Higher temperature increases atomic vibrations and slightly changes average bond lengths and angles, weakening the interatomic restoring force; the same deformation then needs less force, so \\(k\\) decreases.",
          "若温度继续升高或形变超过弹性限度，原子面发生滑移或键断裂，弹簧会产生永久变形，胡克定律不再适用。 · If the temperature rises further or the deformation exceeds the elastic limit, atomic planes can slip or bonds can break, producing permanent deformation and making Hooke’s law invalid."
        ],
        "solution": "\\(20^\\circ\\mathrm{C}\\) 时 \\(10\\,\\mathrm{N}\\)，\\(200^\\circ\\mathrm{C}\\) 时 \\(9.0\\,\\mathrm{N}\\)；温度改变原子间恢复力，使 \\(k\\) 变小。 · \\(10\\,\\mathrm{N}\\) at \\(20^\\circ\\mathrm{C}\\) and \\(9.0\\,\\mathrm{N}\\) at \\(200^\\circ\\mathrm{C}\\); temperature changes the interatomic restoring force and lowers \\(k\\).",
        "solutionLatex": "F_{20}=500(0.020)=10\\,\\mathrm{N},\\qquad F_{200}=450(0.020)=9.0\\,\\mathrm{N}"
      },
      {
        "title": "例 6 · 三个弹簧的等效劲度 · Example 6 · Equivalent constant of three springs",
        "prompt": "三个理想弹簧 \\(k_1=100\\,\\mathrm{N\\,m^{-1}}\\)、\\(k_2=200\\,\\mathrm{N\\,m^{-1}}\\)、\\(k_3=300\\,\\mathrm{N\\,m^{-1}}\\)。分别求三者纯串联与纯并联时的等效劲度，并检查结果是否合理。 · Three ideal springs have \\(k_1=100\\,\\mathrm{N\\,m^{-1}}\\), \\(k_2=200\\,\\mathrm{N\\,m^{-1}}\\), and \\(k_3=300\\,\\mathrm{N\\,m^{-1}}\\). Find the equivalent constant for a purely series and a purely parallel combination, and check whether the results are reasonable.",
        "steps": [
          "串联：\\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{100}+\\dfrac{1}{200}+\\dfrac{1}{300}=\\dfrac{6+3+2}{600}=\\dfrac{11}{600}\\)，所以 \\(k_{\\mathrm{eq}}=\\dfrac{600}{11}=54.5\\,\\mathrm{N\\,m^{-1}}\\)。 · Series: \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{100}+\\dfrac{1}{200}+\\dfrac{1}{300}=\\dfrac{6+3+2}{600}=\\dfrac{11}{600}\\), so \\(k_{\\mathrm{eq}}=\\dfrac{600}{11}=54.5\\,\\mathrm{N\\,m^{-1}}\\).",
          "并联：\\(k_{\\mathrm{eq}}=100+200+300=600\\,\\mathrm{N\\,m^{-1}}\\)。 · Parallel: \\(k_{\\mathrm{eq}}=100+200+300=600\\,\\mathrm{N\\,m^{-1}}\\).",
          "检查：串联结果 \\(54.5<100\\)，小于最小单个劲度；并联结果 \\(600>300\\)，大于最大单个劲度，符合“串联变软、并联变硬”。 · Check: the series result \\(54.5<100\\) is smaller than the smallest individual constant; the parallel result \\(600>300\\) is larger than the largest, consistent with “series softer, parallel stiffer.”"
        ],
        "solution": "串联 \\(54.5\\,\\mathrm{N\\,m^{-1}}\\)，并联 \\(600\\,\\mathrm{N\\,m^{-1}}\\)。 · Series \\(54.5\\,\\mathrm{N\\,m^{-1}}\\), parallel \\(600\\,\\mathrm{N\\,m^{-1}}\\).",
        "solutionLatex": "k_{\\mathrm{eq,series}}=\\dfrac{600}{11}=54.5\\,\\mathrm{N\\,m^{-1}},\\qquad k_{\\mathrm{eq,parallel}}=600\\,\\mathrm{N\\,m^{-1}}"
      }
    ],
    "examTips": [
      "先判断是不是理想弹簧；题目给出非线性 \\(F(x)\\) 时，胡克定律不再自动成立。 · First decide whether the spring is ideal; if a nonlinear \\(F(x)\\) is given, Hooke's law no longer applies automatically.",
      "受力图只画“弹簧对物体”的力，方向指向平衡位置；不要把它和物体对弹簧的力画在同一物体上。 · On a free-body diagram, draw only the force of the spring on the object, toward equilibrium; do not put the object-on-spring force on the same object.",
      "串联“同一力、形变相加”，并联“同一形变、力相加”，用这两句话代替死记公式。 · Use “series: same force, deformations add” and “parallel: same deformation, forces add” instead of memorizing blindly.",
      "非理想弹簧的势能要用积分，不能用 \\(\\dfrac{1}{2}kx^{2}\\)；若只求功，可用 \\(F\\)–\\(x\\) 图面积。 · For a nonideal spring, integrate to get potential energy; do not use \\(\\dfrac{1}{2}kx^{2}\\). If only work is asked, use the area under the \\(F\\)–\\(x\\) graph.",
      "读图题先看坐标轴单位与曲线是否过原点；局部劲度是切线斜率的绝对值。 · On graph questions, check axis units and whether the curve passes through the origin; local stiffness is the absolute value of the tangent slope.",
      "遇到“外部变量改变”题，先判断它改变的是弹簧的内部构型还是外部受力；若 \\(k\\) 改变或 \\(F\\)–\\(x\\) 非线性，就不能直接套 \\(F=-kx\\)。 · For “external variable changes” questions, decide whether the variable changes the spring’s internal configuration or only the external load; if \\(k\\) changes or \\(F\\)–\\(x\\) is nonlinear, do not apply \\(F=-kx\\) blindly.",
      "n 个弹簧题先数清个数，再写通式；串联结果一定小于最小 \\(k\\)，并联结果一定大于最大 \\(k\\)，可用作快速检查。 · For n-spring problems, count the springs and write the general formula; the series result must be smaller than the smallest \\(k\\), and the parallel result larger than the largest \\(k\\), which provides a quick check."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.5",
        "title": "变力做功与势能函数 · Work by Variable Forces and Potential Energy Functions",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u7",
        "code": "7.1",
        "title": "周期运动 · Periodic Motion",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能 · Forces and Potential Energy",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.1",
        "title": "质心 · Center of Mass",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.2",
        "title": "系统 · Systems",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "shm",
        "title": "简谐振动（理想弹簧） · Simple harmonic motion (ideal spring)"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：牛顿第三定律说明弹簧与物体之间的力成对出现；受力图只画弹簧对物体的力。 · Upstream: Newton's third law pairs the forces between spring and object; a free-body diagram shows only the force of the spring on the object.",
      "下游：弹簧势能与变力做功把 \\(F(x)\\) 与 \\(U(x)\\) 连接起来，见 3.5；理想弹簧的线性回复力导致简谐振动。 · Downstream: spring potential energy and variable-force work connect \\(F(x)\\) to \\(U(x)\\), as in 3.5; the linear restoring force of an ideal spring leads to simple harmonic motion.",
      "工程：串联弹簧用于减震与悬挂，并联弹簧用于增加刚度；非理想弹簧常见于橡胶、泡沫和超弹性材料。 · Engineering: series springs appear in suspension and shock absorption, parallel springs increase stiffness, and nonideal springs appear in rubber, foam, and hyperelastic materials.",
      "跨学科：生物组织、肌腱和血管壁的力—伸长曲线通常是非线性的，不能只用单一 \\(k\\) 描述。 · Cross-disciplinary: force–extension curves of biological tissues, tendons, and blood-vessel walls are usually nonlinear and cannot be described by a single \\(k\\).",
      "系统与内部结构：弹簧是一个有内部子结构的系统；只关心整体伸长时可用等效弹簧，关心内部振动或永久变形时必须用多体/连续体模型。 · Systems and internal structure: a spring is a system with internal substructure; use an equivalent spring when only the overall extension matters, and a multi-body or continuous model when internal vibration or permanent deformation matters.",
      "材料科学：弹簧的 \\(k\\) 与原子间势能的曲率有关；温度、合金成分和热处理通过改变微观结构影响宏观劲度。 · Materials science: a spring’s \\(k\\) is related to the curvature of the interatomic potential; temperature, alloy composition, and heat treatment affect macroscopic stiffness by changing the microstructure."
    ],
    "intuitionDetailed": "先抓住“平衡位置”这个基准：弹簧的力不是由它有多长决定，而是由它比自然长度长了或短了多少决定。理想弹簧的 \\(F\\)–\\(x\\) 图是直线，所以 \\(k\\) 是常数；非理想弹簧的图弯了，同样的形变可能产生更大的力，曲线越陡表示局部越硬。串联时两个弹簧分担同一个力，形变却相加，所以整体更“软”；并联时两个弹簧被迫有相同形变，力相加，所以整体更“硬”。 · Anchor everything to the equilibrium position: the spring force depends not on how long the spring is, but on how much longer or shorter it is than its relaxed length. An ideal spring has a straight \\(F\\)–\\(x\\) graph, so \\(k\\) is constant; a nonideal spring has a curved graph, the same deformation may produce a larger force, and a steeper curve means greater local stiffness. In series the springs share the same force while their deformations add, so the combination is softer; in parallel they share the same deformation while their forces add, so the combination is stiffer. 把弹簧的“软硬”追到原子尺度：原子间势能在平衡位置附近近似抛物线，曲率越大，恢复力越强，宏观 \\(k\\) 越大。拉伸弹簧时，原子间距和键角偏离平衡，整根弹簧把形变分配到许多线圈和许多原子键上。温度升高使原子振动幅度增大，平均键长和势能曲率改变，因此 \\(k\\) 可以随温度变化；超过弹性限度后，原子面滑移，形变不可恢复。多个弹簧组合时，串联让每个弹簧分担同一个力、形变相加，所以整体更软；并联让每个弹簧承受同一形变、力相加，所以整体更硬。 · Trace a spring’s “softness” to the atomic scale: near equilibrium the interatomic potential is approximately parabolic, and a larger curvature gives a stronger restoring force and a larger macroscopic \\(k\\). When a spring stretches, interatomic distances and bond angles depart from equilibrium, and the whole spring distributes the deformation over many coils and many atomic bonds. Higher temperature increases atomic vibration amplitudes and changes average bond lengths and potential curvature, so \\(k\\) can depend on temperature; beyond the elastic limit, atomic planes slip and the deformation becomes permanent. For combinations, series lets each spring share the same force while deformations add, so the combination is softer; parallel forces each spring to share the same deformation while forces add, so the combination is stiffer.",
    "development": [
      "先判断弹簧是否理想，并明确自然长度与平衡位置。 · Decide whether the spring is ideal and identify the relaxed length and equilibrium position.",
      "画受力图：只看弹簧对物体的力，标出方向与形变。 · Draw the free-body diagram: only the spring force on the object, with its direction and deformation.",
      "理想弹簧用 \\(F=-kx\\)；非理想弹簧读图或使用给定的 \\(F(x)\\)。 · Use \\(F=-kx\\) for an ideal spring; read the graph or use the given \\(F(x)\\) for a nonideal spring.",
      "串并联先判断“同一力”还是“同一形变”，再写等效劲度。 · For series and parallel, decide “same force” or “same deformation” before writing the equivalent constant.",
      "若要求能量，对 \\(F(x)\\) 积分；不要对非理想弹簧直接套用 \\(\\dfrac{1}{2}kx^{2}\\)。 · If energy is needed, integrate \\(F(x)\\); do not apply \\(\\dfrac{1}{2}kx^{2}\\) directly to a nonideal spring.",
      "外部变量与内部子结构 · External variables and internal substructure",
      "n 个弹簧的等效劲度通式 · General equivalent-constant formulas for n springs"
    ],
    "checks": [
      "弹簧被压缩时，弹簧对物体的力指向哪边？为什么？ · When the spring is compressed, which way does the spring force on the object point? Why?",
      "两个弹簧串联后，等效劲度比最小的那个大还是小？ · After two springs are connected in series, is the equivalent constant larger or smaller than the smallest one?",
      "非线性弹簧的 \\(F\\)–\\(x\\) 图不过原点或不是直线时，哪些公式不能直接使用？ · If a nonlinear spring's \\(F\\)–\\(x\\) graph is not a straight line through the origin, which formulas can no longer be used directly?",
      "如何从 \\(F\\)–\\(x\\) 图的切线求某一点的局部劲度？ · How do you find the local stiffness at a point from the tangent to an \\(F\\)–\\(x\\) graph?",
      "温度升高时，弹簧的 \\(k\\) 为什么可能变小？请从原子间恢复力解释。 · Why can a spring’s \\(k\\) decrease when temperature rises? Explain using the interatomic restoring force.",
      "什么情况下弹簧会发生永久变形，胡克定律不再适用？ · When does a spring deform permanently so that Hooke’s law no longer applies?",
      "n 个弹簧串联/并联的等效劲度通式分别是什么？如何用结果大小检查？ · What are the general equivalent-constant formulas for n springs in series and parallel, and how can the result be checked by its size?"
    ],
    "vocabulary": [
      {
        "termZh": "理想弹簧",
        "termEn": "ideal spring",
        "defZh": "质量可忽略、力与形变成正比且无滞后、劲度不随外部变量改变的弹簧模型。",
        "defEn": "A spring model with negligible mass, force proportional to deformation, no hysteresis, and a spring constant independent of external variables."
      },
      {
        "termZh": "胡克定律",
        "termEn": "Hooke's law",
        "defZh": "理想弹簧的力与相对自然长度的形变成正比：\\(F_s=-k\\Delta x\\)。",
        "defEn": "For an ideal spring, force is proportional to the change from the relaxed length: \\(F_s=-k\\Delta x\\)."
      },
      {
        "termZh": "劲度系数",
        "termEn": "spring constant",
        "defZh": "描述弹簧软硬的量，单位 N/m；越大表示同样形变需要越大的力。",
        "defEn": "A measure of spring stiffness in N/m; a larger value means a larger force for the same deformation."
      },
      {
        "termZh": "非理想弹簧",
        "termEn": "nonideal spring",
        "defZh": "质量不可忽略，或力与形变不成正比的弹簧。",
        "defEn": "A spring with nonnegligible mass or a force not proportional to deformation."
      },
      {
        "termZh": "非线性弹簧",
        "termEn": "nonlinear spring",
        "defZh": "\\(F\\)–\\(x\\) 图像不是过原点直线的弹簧，例如 \\(F_x=-(kx+\\beta x^{3})\\)。",
        "defEn": "A spring whose \\(F\\)–\\(x\\) graph is not a straight line through the origin, such as \\(F_x=-(kx+\\beta x^{3})\\)."
      },
      {
        "termZh": "等效劲度系数",
        "termEn": "equivalent spring constant",
        "defZh": "把一组弹簧看成一个弹簧时，具有相同力—形变关系的劲度；串联用倒数相加，并联用劲度相加。",
        "defEn": "The single spring constant that gives the same force–deformation relation as a combination of springs; add reciprocals in series and add constants in parallel."
      },
      {
        "termZh": "串联",
        "termEn": "series",
        "defZh": "弹簧首尾相接，各弹簧受力相同、形变相加。",
        "defEn": "Springs end to end, so each feels the same force and their deformations add."
      },
      {
        "termZh": "并联",
        "termEn": "parallel",
        "defZh": "弹簧并排连接，各弹簧形变相同、力相加。",
        "defEn": "Springs side by side, so each has the same deformation and their forces add."
      }
    ]
  }
};
