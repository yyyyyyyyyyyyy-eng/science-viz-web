export const UNIT = {
  "id": "mech-u7",
  "code": "7",
  "titleZh": "振动",
  "titleEn": "Oscillations",
  "subject": "mech",
  "layer": "ap"
};
export const TOPICS = {
  "7.1": {
    "id": "mech/mech-u7/7.1",
    "subject": "mech",
    "chapterId": "mech-u7",
    "unitCode": "7",
    "unitTitleZh": "振动",
    "unitTitleEn": "Oscillations",
    "code": "7.1",
    "titleZh": "周期运动",
    "titleEn": "Periodic Motion",
    "layer": "ap",
    "summary": "简谐运动由 \\(F=-kx\\) 与 \\(a=-\\omega^{2}x\\) 定义；受迫振动在驱动频率接近固有频率时发生共振，振幅显著增大。 · SHM is defined by \\(F=-kx\\) and \\(a=-\\omega^{2}x\\); a forced oscillator exhibits resonance when the driving frequency approaches its natural frequency, with a large increase in amplitude.",
    "learningObjectives": [
      "能写出简谐运动的动力学判据与运动学解，并由系统参数求固有频率。 · Write the dynamical criterion and kinematic solution of SHM, and find the natural frequency from system parameters.",
      "能区分自由振动与受迫振动，说明稳态振动频率等于驱动频率。 · Distinguish free from forced oscillation and explain that the steady-state frequency equals the driving frequency.",
      "能解释共振条件、共振曲线的峰值与阻尼影响，并用能量观点说明振幅为何增大。 · Explain the resonance condition, the peak of the resonance curve, and the effect of damping, and use energy reasoning to explain the amplitude growth.",
      "能识别共振的利弊，并用改变固有频率、增加阻尼或避免同频驱动等方案控制共振。 · Identify benefits and hazards of resonance and control it by changing the natural frequency, adding damping, or avoiding sustained driving at the same frequency.",
      "能完成 AP 风格的计算与主张—证据—推理题，并检查单位、极限与图像特征。 · Solve AP-style quantitative and claim-evidence-reasoning problems and check units, limits, and graph features."
    ],
    "essentialKnowledge": [
      "周期运动是状态随时间重复的运动；简谐运动（SHM）是最基本的周期运动，回复力与位移成正比且方向相反：\\(F=-kx\\)，因此 \\(a=-\\omega^{2}x\\)。 · Periodic motion repeats in time; simple harmonic motion (SHM) is the basic case, with a restoring force proportional and opposite to displacement: \\(F=-kx\\), so \\(a=-\\omega^{2}x\\).",
      "SHM 的运动学解为 \\(x=A\\cos(\\omega t+\\phi)\\)，其中 \\(\\omega=\\sqrt{\\dfrac{k}{m}}\\)，周期 \\(T=\\dfrac{2\\pi}{\\omega}=2\\pi\\sqrt{\\dfrac{m}{k}}\\)；振幅不影响周期。 · The kinematic solution of SHM is \\(x=A\\cos(\\omega t+\\phi)\\), with \\(\\omega=\\sqrt{\\dfrac{k}{m}}\\) and period \\(T=\\dfrac{2\\pi}{\\omega}=2\\pi\\sqrt{\\dfrac{m}{k}}\\); the amplitude does not affect the period.",
      "平衡位置速度最大、加速度为零；端点速度为零、加速度最大；能量在动能 \\(K\\) 与弹性势能 \\(U_s\\) 之间转化，\\(E=\\dfrac{1}{2}kA^{2}\\)。 · At equilibrium the speed is maximum and acceleration is zero; at the endpoints the speed is zero and acceleration is maximum; energy alternates between kinetic energy \\(K\\) and elastic potential energy \\(U_s\\), with \\(E=\\dfrac{1}{2}kA^{2}\\).",
      "受迫振动由外加正弦驱动力 \\(F_{\\mathrm{ext}}(t)=F_0\\cos(\\omega_d t)\\) 维持；经过暂态后进入稳态，系统以驱动频率 \\(\\omega_d\\) 振动，而不是以固有频率振动。 · Forced oscillation is maintained by a sinusoidal driving force \\(F_{\\mathrm{ext}}(t)=F_0\\cos(\\omega_d t)\\); after transients decay, the steady state oscillates at the driving frequency \\(\\omega_d\\), not at the natural frequency.",
      "固有频率由系统本身决定，例如弹簧振子 \\(\\omega_0=\\sqrt{\\dfrac{k}{m}}\\)、\\(f_0=\\dfrac{\\omega_0}{2\\pi}\\)，单摆 \\(\\omega_0=\\sqrt{\\dfrac{g}{L}}\\)。 · The natural frequency is set by the system itself: for a spring oscillator \\(\\omega_0=\\sqrt{\\dfrac{k}{m}}\\) and \\(f_0=\\dfrac{\\omega_0}{2\\pi}\\), and for a simple pendulum \\(\\omega_0=\\sqrt{\\dfrac{g}{L}}\\).",
      "共振发生在驱动频率接近固有频率时（\\(\\omega_d\\approx\\omega_0\\)）：稳态振幅达到最大，系统从驱动力中吸收能量的效率最高。 · Resonance occurs when the driving frequency approaches the natural frequency (\\(\\omega_d\\approx\\omega_0\\)): the steady-state amplitude is maximum and energy transfer from the driving force is most efficient.",
      "真实系统总有阻尼；阻尼越大，共振峰越低、越宽，峰值频率略低于无阻尼固有频率；无阻尼时振幅会不断增大，这是理想化极限。 · Real systems always have damping; larger damping lowers and broadens the resonance peak, and the peak frequency lies slightly below the undamped natural frequency; without damping the amplitude would grow without bound, an idealized limit.",
      "共振既可被利用（乐器、微波炉、核磁共振），也可造成危害（桥梁、建筑、机械共振）；工程上通过改变固有频率、增加阻尼或避免持续同频驱动来控制。 · Resonance can be useful (musical instruments, microwave ovens, nuclear magnetic resonance) or harmful (bridges, buildings, machine resonance); engineering controls include changing the natural frequency, adding damping, or avoiding sustained driving at the same frequency.",
      "在共振曲线中，横轴是驱动频率、纵轴是稳态振幅；峰的位置给出固有频率，峰的高度和宽度反映阻尼大小。 · On a resonance curve, the horizontal axis is driving frequency and the vertical axis is steady-state amplitude; the peak position gives the natural frequency, while its height and width reflect the amount of damping.",
      "受迫振动的相位随驱动频率变化：远低于共振时位移与驱动力近似同相，共振时位移落后 \\(\\dfrac{\\pi}{2}\\)，远高于共振时近似反相（相差 \\(\\pi\\)）。 · The phase of forced oscillation changes with driving frequency: well below resonance the displacement is nearly in phase with the driving force, at resonance it lags by \\(\\dfrac{\\pi}{2}\\), and well above resonance it is nearly opposite (a difference of \\(\\pi\\))."
    ],
    "definition": "周期运动是状态随时间重复的运动；简谐运动（SHM）的回复力与位移成正比且方向相反，\\(F=-kx\\)，因此 \\(a=-\\omega^{2}x\\)。运动学解为 \\(x=A\\cos(\\omega t+\\phi)\\)，其中 \\(\\omega=\\sqrt{\\dfrac{k}{m}}\\)，周期 \\(T=2\\pi\\sqrt{\\dfrac{m}{k}}\\)。当系统受到正弦驱动力 \\(F_{\\mathrm{ext}}=F_0\\cos(\\omega_d t)\\) 作用时，经过暂态后进入受迫振动稳态，以驱动频率 \\(\\omega_d\\) 振动；若 \\(\\omega_d\\) 接近系统的固有频率 \\(\\omega_0\\)，稳态振幅达到最大，这就是共振（resonance）。真实系统有阻尼，因此共振峰有限，峰值频率略低于无阻尼固有频率。 · Periodic motion repeats in time; for simple harmonic motion (SHM) the restoring force is proportional and opposite to displacement, \\(F=-kx\\), so \\(a=-\\omega^{2}x\\). The kinematic solution is \\(x=A\\cos(\\omega t+\\phi)\\), with \\(\\omega=\\sqrt{\\dfrac{k}{m}}\\) and period \\(T=2\\pi\\sqrt{\\dfrac{m}{k}}\\). When a sinusoidal driving force \\(F_{\\mathrm{ext}}=F_0\\cos(\\omega_d t)\\) acts on the system, it enters a steady forced oscillation at the driving frequency \\(\\omega_d\\) after transients decay; if \\(\\omega_d\\) approaches the natural frequency \\(\\omega_0\\), the steady-state amplitude becomes maximum. This is resonance. Real systems have damping, so the resonance peak is finite and its frequency lies slightly below the undamped natural frequency.",
    "intuition": "推秋千时，只有在秋千自然来回的节奏上反复施力，振幅才会越推越大；推得太快或太慢，力有时与运动方向相反，振幅反而小。这就是共振：驱动力频率与系统固有频率匹配时，能量输入效率最高。 · When pushing a swing, the amplitude grows only if you push in rhythm with the swing's natural motion; pushing too fast or too slow makes the force oppose the motion part of the time, so the amplitude stays small. This is resonance: energy input is most efficient when the driving frequency matches the natural frequency.",
    "formulas": [
      {
        "latex": "F=-kx,\\quad a=-\\omega^{2}x",
        "note": "SHM 的动力学判据。 · Dynamical criterion for SHM."
      },
      {
        "latex": "x=A\\cos(\\omega t+\\phi),\\quad v=-A\\omega\\sin(\\omega t+\\phi)",
        "note": "位移与速度。 · Displacement and velocity."
      },
      {
        "latex": "\\omega=\\sqrt{\\dfrac{k}{m}},\\quad T=\\dfrac{2\\pi}{\\omega}=2\\pi\\sqrt{\\dfrac{m}{k}}",
        "note": "角频率与周期。 · Angular frequency and period."
      },
      {
        "latex": "E=\\dfrac{1}{2}kA^{2}=\\dfrac{1}{2}mv^{2}+\\dfrac{1}{2}kx^{2}",
        "note": "SHM 的能量守恒。 · Energy conservation in SHM."
      },
      {
        "latex": "F_{\\mathrm{ext}}(t)=F_0\\cos(\\omega_d t)",
        "note": "正弦驱动力；\\(\\omega_d\\) 是驱动角频率，不一定等于固有频率。 · Sinusoidal driving force; \\(\\omega_d\\) is the driving angular frequency, not necessarily the natural frequency."
      },
      {
        "latex": "\\omega_0=\\sqrt{\\dfrac{k}{m}},\\quad f_0=\\dfrac{\\omega_0}{2\\pi}",
        "note": "弹簧振子的固有角频率与固有频率。 · Natural angular frequency and natural frequency of a spring oscillator."
      },
      {
        "latex": "\\omega_d\\approx\\omega_0",
        "note": "共振条件；无阻尼时严格相等，有阻尼时峰值略低于 \\(\\omega_0\\)。 · Resonance condition; exact without damping, with the peak slightly below \\(\\omega_0\\) when damping is present."
      },
      {
        "latex": "A(\\omega_d)=\\dfrac{\\dfrac{F_0}{m}}{\\sqrt{\\left(\\omega_0^{2}-\\omega_d^{2}\\right)^{2}+\\left(\\dfrac{b\\omega_d}{m}\\right)^{2}}}",
        "note": "线性阻尼下受迫振动的稳态振幅；分母最小时振幅最大。 · Steady-state amplitude of a forced oscillator with linear damping; the amplitude is largest when the denominator is smallest."
      }
    ],
    "derivationNotes": [
      {
        "from": "牛顿第二定律 + 正弦驱动力 · Newton's second law + sinusoidal driving force",
        "to": "受迫振动方程 · Forced-oscillation equation",
        "note": "取 \\(x\\) 从平衡位置量起，\\(m\\ddot{x}+b\\dot{x}+kx=F_0\\cos(\\omega_d t)\\)。 · With \\(x\\) measured from equilibrium, \\(m\\ddot{x}+b\\dot{x}+kx=F_0\\cos(\\omega_d t)\\)."
      },
      {
        "from": "暂态与稳态 · Transient and steady state",
        "to": "稳态解 · Steady-state solution",
        "note": "齐次解随时间衰减，长期只剩与驱动力同频率的特解 \\(x=A\\cos(\\omega_d t-\\delta)\\)。 · The homogeneous solution decays, leaving the particular solution \\(x=A\\cos(\\omega_d t-\\delta)\\) at the driving frequency."
      },
      {
        "from": "代入受迫振动方程 · Substitute into the forced equation",
        "to": "振幅公式 · Amplitude formula",
        "note": "比较 \\(\\cos\\) 与 \\(\\sin\\) 的系数，得到 \\(A(\\omega_d)\\) 的分母含 \\(\\left(\\omega_0^{2}-\\omega_d^{2}\\right)^{2}\\)。 · Matching cosine and sine coefficients gives the denominator of \\(A(\\omega_d)\\) containing \\(\\left(\\omega_0^{2}-\\omega_d^{2}\\right)^{2}\\)."
      },
      {
        "from": "共振条件 · Resonance condition",
        "to": "振幅最大 · Maximum amplitude",
        "note": "无阻尼时分母在 \\(\\omega_d=\\omega_0\\) 处为零；有阻尼时分母在 \\(\\omega_d\\) 略小于 \\(\\omega_0\\) 处最小。 · Without damping the denominator vanishes at \\(\\omega_d=\\omega_0\\); with damping it is smallest at a frequency slightly below \\(\\omega_0\\)."
      },
      {
        "from": "能量平衡 · Energy balance",
        "to": "稳态振幅 · Steady-state amplitude",
        "note": "共振时驱动力与速度同相，每周期输入能量最大；稳态时输入能量等于阻尼耗散能量。 · At resonance the driving force is in phase with velocity, so the energy input per cycle is maximum; in steady state the input equals the energy dissipated by damping."
      }
    ],
    "conditions": [
      "回复力近似线性（\\(F=-kx\\)），阻尼也近似线性；非线性系统可能出现跳跃、滞回或混沌。 · The restoring force is approximately linear (\\(F=-kx\\)) and damping is approximately linear; nonlinear systems may show jumps, hysteresis, or chaos.",
      "驱动力是幅值与频率恒定的正弦力；实际驱动可能含多个频率成分。 · The driving force is sinusoidal with constant amplitude and frequency; real driving may contain several frequency components.",
      "讨论的是暂态衰减后的稳态；刚接通驱动力时的暂态含固有频率成分。 · The discussion concerns the steady state after transients decay; immediately after the driving force is applied, the transient contains natural-frequency components.",
      "共振条件是 \\(\\omega_d\\approx\\omega_0\\)；无阻尼时严格相等，有阻尼时峰值略低于 \\(\\omega_0\\)。 · The resonance condition is \\(\\omega_d\\approx\\omega_0\\); it is exact without damping, and the peak lies slightly below \\(\\omega_0\\) with damping.",
      "真实振幅受阻尼、非线性与结构强度限制；理想无阻尼共振的振幅会无限增大，只是数学极限。 · Real amplitudes are limited by damping, nonlinearity, and structural strength; the unbounded growth of ideal undamped resonance is only a mathematical limit.",
      "受迫振动稳态频率等于驱动频率，而不是固有频率；固有频率只决定共振响应的位置。 · The steady-state frequency of forced oscillation equals the driving frequency, not the natural frequency; the natural frequency only sets where the resonance response peaks."
    ],
    "keyPoints": [
      "固有频率由系统参数决定，不随驱动力幅值改变。 · The natural frequency is set by system parameters and does not change with the driving-force amplitude.",
      "受迫振动达到稳态后，以驱动频率振动；共振时驱动频率才与固有频率近似相等。 · In steady state a forced oscillator vibrates at the driving frequency; only at resonance are the driving and natural frequencies approximately equal.",
      "共振时稳态振幅最大，系统从驱动力吸收能量的效率最高。 · At resonance the steady-state amplitude is maximum and energy absorption from the driving force is most efficient.",
      "阻尼使共振峰降低并变宽，峰值频率略低于无阻尼固有频率。 · Damping lowers and broadens the resonance peak, and the peak frequency is slightly below the undamped natural frequency.",
      "共振曲线可直接读出固有频率（峰位）和阻尼大小（峰高与宽度）。 · A resonance curve directly gives the natural frequency (peak position) and the damping (peak height and width).",
      "共振时位移落后驱动力 \\(\\dfrac{\\pi}{2}\\)，驱动力与速度同相，因此输入功率最大。 · At resonance the displacement lags the driving force by \\(\\dfrac{\\pi}{2}\\), so the driving force is in phase with velocity and the input power is maximum.",
      "工程上通过改变固有频率、增加阻尼、避免同频持续驱动或采用隔振来防止有害共振。 · Engineering practice prevents harmful resonance by changing the natural frequency, adding damping, avoiding sustained driving at the same frequency, or using vibration isolation."
    ],
    "misconceptions": [
      "认为只要振幅大就是共振；共振还要求驱动频率与固有频率匹配。 · Thinking any large amplitude is resonance; resonance also requires the driving frequency to match the natural frequency.",
      "认为受迫振动总是以固有频率振动；稳态实际以驱动频率振动。 · Thinking forced oscillation always occurs at the natural frequency; the steady state actually oscillates at the driving frequency.",
      "认为共振时振幅一定无限大；真实系统有阻尼，振幅有限。 · Thinking resonance always gives infinite amplitude; real systems have damping and finite amplitude.",
      "认为阻尼越大共振峰越高；阻尼越大峰越低、越宽。 · Thinking more damping raises the resonance peak; more damping lowers and broadens it.",
      "认为驱动频率越高振幅越大；振幅在共振频率附近最大，远离共振反而减小。 · Thinking higher driving frequency always gives larger amplitude; the amplitude peaks near resonance and decreases away from it.",
      "认为共振只发生在机械系统；声学、电磁与电路系统也有共振。 · Thinking resonance occurs only in mechanical systems; acoustic, electromagnetic, and electrical systems also resonate.",
      "认为改变驱动力幅值会改变固有频率；驱动力幅值只按比例缩放响应，不改变固有频率。 · Thinking changing the driving-force amplitude changes the natural frequency; it only scales the response and does not change the natural frequency.",
      "认为共振时位移与驱动力同相；共振时位移落后驱动力 \\(\\dfrac{\\pi}{2}\\)，与速度同相的是驱动力。 · Thinking displacement and driving force are in phase at resonance; displacement lags by \\(\\dfrac{\\pi}{2}\\), and it is the velocity that is in phase with the driving force."
    ],
    "examples": [
      {
        "title": "例 1 · 固有频率与共振 · Example 1: Natural frequency and resonance",
        "prompt": "弹簧振子质量 \\(m=0.50\\,\\mathrm{kg}\\)，劲度系数 \\(k=50\\,\\mathrm{N/m}\\)，线性阻尼系数 \\(b=0.20\\,\\mathrm{kg/s}\\)，驱动力幅值 \\(F_0=0.20\\,\\mathrm{N}\\)。求固有频率；分别求驱动频率为 \\(1.59\\,\\mathrm{Hz}\\) 与 \\(3.18\\,\\mathrm{Hz}\\) 时的稳态振幅，并解释差异。 · A spring oscillator has mass \\(m=0.50\\,\\mathrm{kg}\\), spring constant \\(k=50\\,\\mathrm{N/m}\\), linear damping coefficient \\(b=0.20\\,\\mathrm{kg/s}\\), and driving-force amplitude \\(F_0=0.20\\,\\mathrm{N}\\). Find the natural frequency and the steady-state amplitudes at driving frequencies \\(1.59\\,\\mathrm{Hz}\\) and \\(3.18\\,\\mathrm{Hz}\\), then explain the difference.",
        "steps": [
          "\\(\\omega_0=\\sqrt{\\dfrac{k}{m}}=\\sqrt{\\dfrac{50}{0.50}}=10\\,\\mathrm{rad/s}\\)，所以 \\(f_0=\\dfrac{\\omega_0}{2\\pi}\\approx1.59\\,\\mathrm{Hz}\\)。 · \\(\\omega_0=\\sqrt{\\dfrac{k}{m}}=\\sqrt{\\dfrac{50}{0.50}}=10\\,\\mathrm{rad/s}\\), so \\(f_0=\\dfrac{\\omega_0}{2\\pi}\\approx1.59\\,\\mathrm{Hz}\\).",
          "在共振附近 \\(\\omega_d=2\\pi(1.59\\,\\mathrm{Hz})=10\\,\\mathrm{rad/s}\\)：\\(A=\\dfrac{F_0}{b\\omega_0}=\\dfrac{0.20}{(0.20)(10)}=0.10\\,\\mathrm{m}\\)。 · Near resonance, \\(\\omega_d=2\\pi(1.59\\,\\mathrm{Hz})=10\\,\\mathrm{rad/s}\\): \\(A=\\dfrac{F_0}{b\\omega_0}=\\dfrac{0.20}{(0.20)(10)}=0.10\\,\\mathrm{m}\\).",
          "在 \\(\\omega_d=2\\pi(3.18\\,\\mathrm{Hz})=20\\,\\mathrm{rad/s}\\)：\\(A=\\dfrac{\\dfrac{F_0}{m}}{\\sqrt{\\left(\\omega_0^{2}-\\omega_d^{2}\\right)^{2}+\\left(\\dfrac{b\\omega_d}{m}\\right)^{2}}}=\\dfrac{0.40}{\\sqrt{(100-400)^{2}+(8.0)^{2}}}\\approx1.3\\times10^{-3}\\,\\mathrm{m}\\)。 · At \\(\\omega_d=2\\pi(3.18\\,\\mathrm{Hz})=20\\,\\mathrm{rad/s}\\): \\(A=\\dfrac{\\dfrac{F_0}{m}}{\\sqrt{\\left(\\omega_0^{2}-\\omega_d^{2}\\right)^{2}+\\left(\\dfrac{b\\omega_d}{m}\\right)^{2}}}=\\dfrac{0.40}{\\sqrt{(100-400)^{2}+(8.0)^{2}}}\\approx1.3\\times10^{-3}\\,\\mathrm{m}\\)."
        ],
        "solution": "\\(f_0\\approx1.59\\,\\mathrm{Hz}\\)；共振时 \\(A\\approx0.10\\,\\mathrm{m}\\)，远离共振时仅约 \\(1.3\\,\\mathrm{mm}\\)，前者约为后者的 75 倍。 · \\(f_0\\approx1.59\\,\\mathrm{Hz}\\); at resonance \\(A\\approx0.10\\,\\mathrm{m}\\), while far from resonance it is only about \\(1.3\\,\\mathrm{mm}\\), roughly 75 times smaller.",
        "solutionLatex": "f_0\\approx1.59\\,\\mathrm{Hz},\\qquad A_{\\mathrm{res}}\\approx0.10\\,\\mathrm{m},\\qquad A(3.18\\,\\mathrm{Hz})\\approx1.3\\times10^{-3}\\,\\mathrm{m}"
      },
      {
        "title": "例 2 · 读共振曲线 · Example 2: Reading a resonance curve",
        "prompt": "某受迫振动的共振曲线显示：驱动频率为 \\(2.0\\,\\mathrm{Hz}\\) 时振幅最大；增大阻尼后，峰值降为原来的 \\(0.60\\)，峰变宽。求固有频率，并解释阻尼对峰值和宽度的影响。 · A resonance curve peaks at a driving frequency of \\(2.0\\,\\mathrm{Hz}\\); after damping is increased, the peak falls to \\(0.60\\) of its original height and becomes broader. Find the natural frequency and explain the effect of damping on peak height and width.",
        "steps": [
          "峰值位置近似给出固有频率：\\(f_0\\approx2.0\\,\\mathrm{Hz}\\)；有阻尼时峰值略低于无阻尼固有频率，轻阻尼下可近似相等。 · The peak position gives the natural frequency: \\(f_0\\approx2.0\\,\\mathrm{Hz}\\); with damping the peak lies slightly below the undamped natural frequency, and for light damping the two are approximately equal.",
          "阻尼每周期耗散能量；共振附近输入能量最大，但稳态振幅由输入与耗散的平衡决定，阻尼越大稳态振幅越小。 · Damping dissipates energy every cycle; near resonance the energy input is largest, but the steady-state amplitude is set by the balance between input and dissipation, so larger damping gives a smaller steady amplitude.",
          "阻尼增大使共振峰变宽：在更宽的驱动频率范围内系统都有明显响应，品质因数降低。 · Larger damping broadens the resonance peak: the system responds appreciably over a wider range of driving frequencies, and the quality factor decreases."
        ],
        "solution": "\\(f_0\\approx2.0\\,\\mathrm{Hz}\\)；阻尼增大使峰降低、变宽，但峰位仍在 \\(f_0\\) 附近。 · \\(f_0\\approx2.0\\,\\mathrm{Hz}\\); increasing damping lowers and broadens the peak, while the peak position remains near \\(f_0\\).",
        "solutionLatex": "f_0\\approx2.0\\,\\mathrm{Hz},\\qquad A_{\\mathrm{peak}}\\propto\\dfrac{1}{b}\\ \\text{(light damping)}"
      },
      {
        "title": "例 3 · 共振的能量论证 · Example 3: Energy argument for resonance",
        "prompt": "用功—能观点解释：为什么驱动频率等于固有频率时振幅最大？ · Use work–energy reasoning to explain why the amplitude is largest when the driving frequency equals the natural frequency.",
        "steps": [
          "驱动力做功的功率为 \\(P=F_{\\mathrm{ext}}v\\)；只有当力与速度在一个周期内大部分时间方向相同时，净输入能量才大。 · The power delivered by the driving force is \\(P=F_{\\mathrm{ext}}v\\); the net energy input is large only when the force and velocity point in the same direction for most of a cycle.",
          "共振时驱动力与速度同相（位移落后驱动力 \\(\\dfrac{\\pi}{2}\\)），每个周期输入的功最大。 · At resonance the driving force is in phase with velocity (displacement lags the force by \\(\\dfrac{\\pi}{2}\\)), so the work input per cycle is maximum.",
          "振幅增大使阻尼耗散增大；当每周期输入能量等于阻尼耗散能量时达到稳态。远离共振时力与速度部分反相，净输入小，稳态振幅也小。 · A larger amplitude increases damping losses; steady state is reached when the energy input per cycle equals the damping loss. Far from resonance the force and velocity are partly opposite, so the net input and steady amplitude are smaller."
        ],
        "solution": "共振时驱动力与速度同相，能量输入效率最高；稳态振幅由输入与阻尼耗散的平衡决定。 · At resonance the driving force is in phase with velocity, so energy input is most efficient; the steady amplitude is set by the balance between input and damping loss.",
        "solutionLatex": "\\omega_d=\\omega_0,\\qquad P=F_{\\mathrm{ext}}v"
      },
      {
        "title": "例 4 · 桥梁共振与工程控制 · Example 4: Bridge resonance and engineering control",
        "prompt": "一队士兵齐步走过桥，若步频接近桥的固有频率，可能引起大幅振动。用共振原理解释，并给出两种工程控制措施。 · Soldiers marching in step can excite large vibrations if their step frequency is near the bridge's natural frequency. Explain with resonance and give two engineering controls.",
        "steps": [
          "齐步走提供周期性驱动力；步频接近桥的固有频率时发生共振，振幅增大。 · Marching provides a periodic driving force; when the step frequency is near the bridge's natural frequency, resonance occurs and the amplitude grows.",
          "桥梁有阻尼，能量耗散使振幅有限；但若驱动力持续且阻尼不足，振幅仍可能达到危险水平。 · The bridge has damping, so energy dissipation limits the amplitude; however, if the driving persists and damping is insufficient, the amplitude can still become dangerous.",
          "控制措施：改变桥的固有频率（调整质量或刚度）、增加阻尼器、限制或打散同频激励（如便步过桥）。 · Controls include changing the bridge's natural frequency (by adjusting mass or stiffness), adding dampers, and limiting or breaking up same-frequency excitation (for example, marching out of step)."
        ],
        "solution": "避免驱动力频率与固有频率匹配；工程上通过改变固有频率、增加阻尼和规范使用来控制共振。 · Avoid matching the driving frequency to the natural frequency; engineering practice controls resonance by changing the natural frequency, adding damping, and regulating use.",
        "solutionLatex": "\\omega_d\\approx\\omega_0\\ \\Rightarrow\\ A\\ \\text{large}"
      }
    ],
    "examTips": [
      "先由系统参数求 \\(f_0\\)，再与驱动频率比较。 · Find \\(f_0\\) from the system parameters first, then compare it with the driving frequency.",
      "受迫振动稳态频率等于驱动频率；共振时二者才近似相等。 · In steady state a forced oscillator vibrates at the driving frequency; only at resonance are the two approximately equal.",
      "共振曲线：峰位读 \\(f_0\\)，峰高与宽度读阻尼。 · On a resonance curve, read \\(f_0\\) from the peak position and damping from the peak height and width.",
      "用能量输入与阻尼耗散解释振幅，不只说“振幅变大”。 · Explain amplitude with energy input and damping loss, not just by saying the amplitude grows.",
      "区分暂态与稳态；暂态含固有频率成分，稳态由驱动决定。 · Distinguish transient from steady state; the transient contains natural-frequency components, while the steady state is set by the driving.",
      "工程题要给出可操作措施：改变固有频率、增加阻尼、避免同频持续驱动。 · For engineering questions, give actionable measures: change the natural frequency, add damping, and avoid sustained driving at the same frequency."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.8",
        "title": "弹簧力与非理想弹簧 · Spring Forces and Nonideal Springs",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.5",
        "title": "变力做功与势能函数 · Work by Variable Forces and Potential Energy Functions",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u7",
        "code": "7.2",
        "title": "单摆 · Pendulums",
        "relation": "后续 · follow-up"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u7",
        "code": "7.3",
        "title": "复摆 · Physical Pendulums",
        "relation": "后续 · follow-up"
      }
    ],
    "modules": [
      {
        "id": "shm",
        "title": "简谐振动"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u7",
    "connections": [
      "上游：2.8 的胡克定律给出 \\(F=-kx\\)，3.5 的势能给出 \\(U_s=\\dfrac{1}{2}kx^{2}\\)，共同构成 SHM 的动力学基础。 · Upstream: Hooke's law in 2.8 gives \\(F=-kx\\), and potential energy in 3.5 gives \\(U_s=\\dfrac{1}{2}kx^{2}\\); together they form the dynamical basis of SHM.",
      "下游：7.2 的单摆与 7.3 的复摆、扭摆都是不同回复力下的振子，共振概念同样适用于它们。 · Downstream: the simple pendulum in 7.2 and the physical and torsion pendulums in 7.3 are oscillators with different restoring forces, and resonance applies to them as well.",
      "数学：受迫振动是二阶线性微分方程，稳态解与驱动同频率；共振曲线由振幅对驱动频率的函数给出。 · Mathematics: forced oscillation is a second-order linear differential equation whose steady-state solution has the driving frequency; the resonance curve is the amplitude as a function of driving frequency.",
      "工程与跨学科：桥梁、建筑、乐器、洗衣机、核磁共振与电路调谐都涉及共振；设计时需要利用或抑制它。 · Engineering and cross-disciplinary connections: bridges, buildings, musical instruments, washing machines, nuclear magnetic resonance, and circuit tuning all involve resonance, which must be exploited or suppressed in design."
    ],
    "intuitionDetailed": "把受迫振动想成推秋千：秋千自己有一个来回的固有节奏 \\(f_0\\)。如果你每次都在它向前运动时推，力与速度同向，能量不断输入，振幅越来越大；如果你推的节奏太快或太慢，有时会在秋千向后时推，做负功，净输入就小。共振就是“推的节奏刚好对上秋千的节奏”。真实系统有摩擦和空气阻力，振幅不会无限增大：当每周期推入的能量等于每周期耗散的能量时，振幅稳定下来。阻尼越大，能量耗散越快，共振峰越低、越宽。共振曲线以驱动频率为横轴、稳态振幅为纵轴：峰位告诉你固有频率，峰高和宽度告诉你阻尼大小。共振时位移落后驱动力 \\(\\dfrac{\\pi}{2}\\)，所以驱动力与速度同相，输入功率最大；远低于共振时位移与力近似同相，远高于共振时近似反相。 · Think of forced oscillation as pushing a swing: the swing has its own natural rhythm \\(f_0\\). If you push every time it moves forward, force and velocity are in the same direction, energy keeps entering, and the amplitude grows; if you push too fast or too slow, you sometimes push while it moves backward, doing negative work, so the net input is small. Resonance is “pushing exactly in rhythm with the swing.” Real systems have friction and air resistance, so the amplitude does not grow without bound: it stabilizes when the energy input per cycle equals the energy dissipated per cycle. Larger damping dissipates energy faster and makes the resonance peak lower and broader. A resonance curve plots steady-state amplitude against driving frequency: the peak position gives the natural frequency, and the peak height and width give the damping. At resonance the displacement lags the driving force by \\(\\dfrac{\\pi}{2}\\), so the driving force is in phase with velocity and the input power is maximum; well below resonance displacement and force are nearly in phase, and well above resonance they are nearly opposite.",
    "development": [
      "识别回复力与系统参数，求固有频率 \\(f_0\\)。 · Identify the restoring force and system parameters, and find the natural frequency \\(f_0\\).",
      "区分自由振动与受迫振动，写出驱动力与运动方程。 · Distinguish free from forced oscillation and write the driving force and equation of motion.",
      "说明稳态以驱动频率振动，暂态含固有频率成分。 · Explain that the steady state oscillates at the driving frequency while the transient contains natural-frequency components.",
      "用共振条件与能量输入—耗散平衡解释振幅增大。 · Use the resonance condition and the input–dissipation energy balance to explain the amplitude growth.",
      "读共振曲线，比较不同阻尼下的峰高、峰宽与峰位，并联系工程应用。 · Read resonance curves, compare peak height, width, and position for different damping, and connect them to engineering applications."
    ],
    "checks": [
      "什么决定固有频率？改变驱动力幅值会改变它吗？ · What determines the natural frequency? Does changing the driving-force amplitude change it?",
      "受迫振动达到稳态后以什么频率振动？共振时又有什么特殊？ · At what frequency does a forced oscillator vibrate in steady state, and what is special at resonance?",
      "为什么阻尼会降低共振峰？能量到哪里去了？ · Why does damping lower the resonance peak, and where does the energy go?",
      "如何从共振曲线读出固有频率与阻尼大小？ · How do you read the natural frequency and damping from a resonance curve?",
      "为什么桥梁或建筑要避免与周期性驱动力同频？可以采取哪些措施？ · Why should bridges or buildings avoid matching a periodic driving frequency, and what measures can be taken?",
      "共振时位移与驱动力、速度的相位关系分别是什么？ · What are the phase relations among displacement, driving force, and velocity at resonance?"
    ],
    "vocabulary": [
      {
        "termZh": "周期运动",
        "termEn": "periodic motion",
        "defZh": "状态随时间重复的运动，每隔一个周期回到相同状态。",
        "defEn": "Motion whose state repeats in time, returning to the same state every period."
      },
      {
        "termZh": "简谐运动",
        "termEn": "simple harmonic motion (SHM)",
        "defZh": "回复力与位移成正比且反向的振动，满足 \\(a=-\\omega^{2}x\\)。",
        "defEn": "Oscillation with a restoring force proportional and opposite to displacement, satisfying \\(a=-\\omega^{2}x\\)."
      },
      {
        "termZh": "固有频率",
        "termEn": "natural frequency",
        "defZh": "系统自由振动时由自身参数决定的频率，如弹簧振子 \\(f_0=\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{k}{m}}\\)。",
        "defEn": "The frequency of free oscillation set by the system's own parameters, such as \\(f_0=\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{k}{m}}\\) for a spring oscillator."
      },
      {
        "termZh": "驱动频率",
        "termEn": "driving frequency",
        "defZh": "外加周期性驱动力的频率；受迫振动稳态以该频率振动。",
        "defEn": "The frequency of an external periodic driving force; a forced oscillator vibrates at this frequency in steady state."
      },
      {
        "termZh": "受迫振动",
        "termEn": "forced oscillation",
        "defZh": "在周期性外力持续作用下发生的振动，稳态频率等于驱动频率。",
        "defEn": "Oscillation maintained by a sustained periodic external force, with steady-state frequency equal to the driving frequency."
      },
      {
        "termZh": "共振",
        "termEn": "resonance",
        "defZh": "驱动频率接近固有频率时稳态振幅显著增大的现象。",
        "defEn": "The phenomenon in which the steady-state amplitude becomes large when the driving frequency approaches the natural frequency."
      },
      {
        "termZh": "阻尼",
        "termEn": "damping",
        "defZh": "耗散振动能量的效应；阻尼越大，共振峰越低、越宽。",
        "defEn": "An effect that dissipates oscillation energy; larger damping gives a lower and broader resonance peak."
      },
      {
        "termZh": "共振曲线",
        "termEn": "resonance curve",
        "defZh": "稳态振幅随驱动频率变化的图像，峰位对应固有频率，峰高与宽度反映阻尼。",
        "defEn": "A graph of steady-state amplitude versus driving frequency; the peak position gives the natural frequency, and its height and width reflect damping."
      }
    ]
  },
  "7.2": {
    "id": "mech/mech-u7/7.2",
    "subject": "mech",
    "chapterId": "mech-u7",
    "unitCode": "7",
    "unitTitleZh": "振动",
    "unitTitleEn": "Oscillations",
    "code": "7.2",
    "titleZh": "单摆",
    "titleEn": "Pendulums",
    "layer": "ap",
    "summary": "单摆 · Pendulums",
    "learningObjectives": [
      "能陈述「单摆」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Pendulums：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "单摆（Pendulums）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「单摆」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "T=2\\pi\\sqrt{\\dfrac{L}{g}}",
        "note": "单摆周期。"
      },
      {
        "latex": "\\omega=\\sqrt{\\dfrac{g}{L}}",
        "note": "单摆角频率。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「单摆」的工作方程或机制链。"
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
      "单摆：细线质量可忽略、摆球视为质点",
      "小角度近似 sinθ≈θ（通常 θ<10°）",
      "g 为当地重力加速度"
    ],
    "keyPoints": [
      "掌握 7.2「单摆」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「单摆」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「单摆」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{L}{g}}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「单摆」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「单摆」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「单摆」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "mech-u7",
        "code": "7.1",
        "title": "周期运动",
        "relation": "prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u7",
        "code": "7.3",
        "title": "复摆",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "shm",
        "title": "简谐振动"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「单摆」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「单摆」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「单摆」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.3": {
    "id": "mech/mech-u7/7.3",
    "subject": "mech",
    "chapterId": "mech-u7",
    "unitCode": "7",
    "unitTitleZh": "振动",
    "unitTitleEn": "Oscillations",
    "code": "7.3",
    "titleZh": "复摆",
    "titleEn": "Physical Pendulums",
    "layer": "ap",
    "summary": "复摆由重力矩提供回复，扭摆由扭转金属丝的回复力矩 \\(\\tau=-\\kappa\\theta\\) 提供回复；两者都做简谐运动，但复摆周期依赖 \\(g\\)，扭摆周期 \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\) 不依赖 \\(g\\)。 · A physical pendulum is restored by gravity, while a torsion pendulum is restored by a twisted wire with \\(\\tau=-\\kappa\\theta\\); both undergo SHM, but the physical-pendulum period depends on \\(g\\), whereas the torsion-pendulum period \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\) does not.",
    "learningObjectives": [
      "能写出复摆的小角度运动方程，并用平行轴定理求绕转轴的转动惯量。 · Write the small-angle equation of motion for a physical pendulum and use the parallel-axis theorem to find the moment of inertia about the pivot.",
      "能推导并使用复摆周期 \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)，并说明等效单摆长度。 · Derive and use the physical-pendulum period \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\), and explain the equivalent simple-pendulum length.",
      "能描述扭摆的扭转回复力矩 \\(\\tau=-\\kappa\\theta\\)，并推导 \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\)。 · Describe the torsion restoring torque \\(\\tau=-\\kappa\\theta\\) and derive \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\).",
      "能比较复摆、单摆与扭摆的回复机制、周期公式及对 \\(g\\) 的依赖。 · Compare physical, simple, and torsion pendulums in restoring mechanism, period formula, and dependence on \\(g\\).",
      "能完成周期、转动惯量与扭转常数的计算，并检查单位、极限与比例关系。 · Calculate periods, moments of inertia, and torsion constants, and check units, limits, and proportional relationships."
    ],
    "essentialKnowledge": [
      "复摆（物理摆）是绕固定水平轴摆动的刚体；小角度下重力矩 \\(\\tau=-mgd\\sin\\theta\\approx-mgd\\theta\\)，运动方程 \\(I\\ddot{\\theta}=-mgd\\theta\\)。 · A physical pendulum is a rigid body swinging about a fixed horizontal axis; at small angles the gravitational torque is \\(\\tau=-mgd\\sin\\theta\\approx-mgd\\theta\\), and the equation of motion is \\(I\\ddot{\\theta}=-mgd\\theta\\).",
      "复摆周期 \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)，其中 \\(I\\) 是绕转轴的转动惯量，\\(d\\) 是质心到转轴的距离。 · The physical-pendulum period is \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\), where \\(I\\) is the moment of inertia about the pivot and \\(d\\) is the distance from the pivot to the center of mass.",
      "平行轴定理 \\(I=I_{\\mathrm{cm}}+md^{2}\\) 常用于求绕转轴的转动惯量；等效单摆长度 \\(L_{\\mathrm{eq}}=\\dfrac{I}{md}>d\\)。 · The parallel-axis theorem \\(I=I_{\\mathrm{cm}}+md^{2}\\) is often used to find the moment of inertia about the pivot; the equivalent simple-pendulum length is \\(L_{\\mathrm{eq}}=\\dfrac{I}{md}>d\\).",
      "单摆是复摆的特例：\\(d=L\\)、\\(I=mL^{2}\\)，代入复摆周期得 \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\)。 · The simple pendulum is a special case of the physical pendulum: with \\(d=L\\) and \\(I=mL^{2}\\), the physical-pendulum formula reduces to \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\).",
      "扭摆是把刚体（如圆盘）悬挂在竖直金属丝上、绕金属丝轴扭转后释放的系统；金属丝扭转 \\(\\theta\\) 产生与 \\(\\theta\\) 成正比且反向的回复力矩 \\(\\tau=-\\kappa\\theta\\)，\\(\\kappa\\) 为扭转常数，单位是 \\(\\mathrm{N\\,m/rad}\\)。 · A torsion pendulum consists of a rigid body (such as a disk) suspended by a vertical wire and twisted about the wire axis before release; a twist \\(\\theta\\) produces a restoring torque \\(\\tau=-\\kappa\\theta\\) proportional and opposite to \\(\\theta\\), where \\(\\kappa\\) is the torsion constant in \\(\\mathrm{N\\,m/rad}\\).",
      "由转动定律 \\(I\\ddot{\\theta}=\\tau\\) 得 \\(I\\ddot{\\theta}=-\\kappa\\theta\\)，因此扭摆做简谐运动，\\(\\omega=\\sqrt{\\dfrac{\\kappa}{I}}\\)，\\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\)。 · Newton's second law for rotation, \\(I\\ddot{\\theta}=\\tau\\), gives \\(I\\ddot{\\theta}=-\\kappa\\theta\\), so the torsion pendulum undergoes SHM with \\(\\omega=\\sqrt{\\dfrac{\\kappa}{I}}\\) and \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\).",
      "扭摆周期不含 \\(g\\)：它由转动惯量 \\(I\\) 与扭转常数 \\(\\kappa\\) 决定；\\(I\\) 越大周期越长，金属丝越“硬”（\\(\\kappa\\) 越大）周期越短。 · The torsion-pendulum period does not contain \\(g\\): it is set by the moment of inertia \\(I\\) and the torsion constant \\(\\kappa\\); a larger \\(I\\) gives a longer period, and a stiffer wire (larger \\(\\kappa\\)) gives a shorter period.",
      "复摆需要小角度近似 \\(\\sin\\theta\\approx\\theta\\) 才能化为简谐运动；理想扭摆的回复力矩本身与 \\(\\theta\\) 成正比，因此在弹性范围内不需要 \\(\\sin\\theta\\) 近似，但仍受弹性限度、阻尼与非线性限制。 · A physical pendulum requires the small-angle approximation \\(\\sin\\theta\\approx\\theta\\) to become SHM; an ideal torsion pendulum has a torque proportional to \\(\\theta\\) itself, so it needs no \\(\\sin\\theta\\) approximation within the elastic range, though elastic limits, damping, and nonlinearity still apply.",
      "两者都是角简谐运动：回复力矩与角位移反向，能量在转动动能 \\(\\dfrac{1}{2}I\\omega^{2}\\) 与势能（重力势能或扭转势能 \\(\\dfrac{1}{2}\\kappa\\theta^{2}\\)）之间转化。 · Both are angular SHM: the restoring torque opposes angular displacement, and energy alternates between rotational kinetic energy \\(\\dfrac{1}{2}I\\omega^{2}\\) and potential energy (gravitational or torsional potential energy \\(\\dfrac{1}{2}\\kappa\\theta^{2}\\)).",
      "常见转动惯量：均匀实心圆盘绕中心轴 \\(I=\\dfrac{1}{2}mR^{2}\\)，细圆环绕中心轴 \\(I=mR^{2}\\)；质量分布越远离轴，\\(I\\) 越大，扭摆周期越长。 · Common moments of inertia: a uniform solid disk about its central axis has \\(I=\\dfrac{1}{2}mR^{2}\\), and a thin ring about its central axis has \\(I=mR^{2}\\); mass farther from the axis gives a larger \\(I\\) and a longer torsion-pendulum period."
    ],
    "definition": "复摆（物理摆）是绕固定水平轴摆动的刚体。小角度下，重力矩 \\(\\tau=-mgd\\sin\\theta\\approx-mgd\\theta\\)，运动方程 \\(I\\ddot{\\theta}=-mgd\\theta\\)，周期 \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)，其中 \\(I\\) 是绕转轴的转动惯量，\\(d\\) 是质心到转轴的距离。扭摆（torsion pendulum）是把刚体（如圆盘）悬挂在竖直金属丝上、绕金属丝轴扭转后释放的系统；金属丝扭转 \\(\\theta\\) 产生与 \\(\\theta\\) 成正比且反向的回复力矩 \\(\\tau=-\\kappa\\theta\\)，\\(\\kappa\\) 为扭转常数。由转动定律 \\(I\\ddot{\\theta}=-\\kappa\\theta\\) 得简谐运动，周期 \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\)。 · A physical pendulum is a rigid body swinging about a fixed horizontal axis. At small angles the gravitational torque is \\(\\tau=-mgd\\sin\\theta\\approx-mgd\\theta\\), the equation of motion is \\(I\\ddot{\\theta}=-mgd\\theta\\), and the period is \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\), where \\(I\\) is the moment of inertia about the pivot and \\(d\\) is the distance from the pivot to the center of mass. A torsion pendulum is a rigid body (such as a disk) suspended by a vertical wire and twisted about the wire axis before release; a twist \\(\\theta\\) produces a restoring torque \\(\\tau=-\\kappa\\theta\\) proportional and opposite to \\(\\theta\\), where \\(\\kappa\\) is the torsion constant. Newton's second law for rotation, \\(I\\ddot{\\theta}=-\\kappa\\theta\\), gives SHM with period \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\).",
    "intuition": "复摆像“不能再看成质点的单摆”：重力把质心拉回最低点，质量分布通过转动惯量影响摆动快慢。扭摆则像一根“旋转弹簧”：金属丝被扭过 \\(\\theta\\) 后，会施加一个与 \\(\\theta\\) 成正比的反向力矩，把圆盘转回原方向。两者都是“离平衡越远，回复越强”，所以都做简谐运动；区别在于回复力矩来自重力还是金属丝扭转。 · A physical pendulum is like a simple pendulum that can no longer be treated as a point mass: gravity pulls the center of mass back toward the lowest point, and the mass distribution affects the motion through the moment of inertia. A torsion pendulum is like a rotational spring: after the wire is twisted by \\(\\theta\\), it exerts a restoring torque proportional and opposite to \\(\\theta\\), turning the disk back. Both have a restoring effect that grows with displacement, so both undergo SHM; the difference is whether the restoring torque comes from gravity or from the twisted wire.",
    "formulas": [
      {
        "latex": "T=2\\pi\\sqrt{\\dfrac{I}{mgd}}",
        "note": "复摆周期（小角度）；\\(I\\) 相对转轴，\\(d\\) 为转轴到质心的距离。 · Physical-pendulum period at small angles; \\(I\\) is about the pivot and \\(d\\) is the pivot-to-center-of-mass distance."
      },
      {
        "latex": "\\omega=\\sqrt{\\dfrac{mgd}{I}}",
        "note": "复摆角频率。 · Physical-pendulum angular frequency."
      },
      {
        "latex": "I=I_{\\mathrm{cm}}+md^{2}",
        "note": "平行轴定理。 · Parallel-axis theorem."
      },
      {
        "latex": "L_{\\mathrm{eq}}=\\dfrac{I}{md}",
        "note": "等效单摆长度，\\(L_{\\mathrm{eq}}>d\\)。 · Equivalent simple-pendulum length, with \\(L_{\\mathrm{eq}}>d\\)."
      },
      {
        "latex": "\\tau=-\\kappa\\theta",
        "note": "扭摆的扭转回复力矩；\\(\\kappa\\) 为扭转常数，单位 \\(\\mathrm{N\\,m/rad}\\)。 · Torsion restoring torque; \\(\\kappa\\) is the torsion constant in \\(\\mathrm{N\\,m/rad}\\)."
      },
      {
        "latex": "I\\ddot{\\theta}=-\\kappa\\theta",
        "note": "扭摆的运动方程；与 \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) 对比得 \\(\\omega^{2}=\\dfrac{\\kappa}{I}\\)。 · Torsion-pendulum equation of motion; comparing with \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) gives \\(\\omega^{2}=\\dfrac{\\kappa}{I}\\)."
      },
      {
        "latex": "\\omega=\\sqrt{\\dfrac{\\kappa}{I}},\\quad T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}",
        "note": "扭摆的角频率与周期；不含 \\(g\\)。 · Torsion-pendulum angular frequency and period; no \\(g\\) appears."
      },
      {
        "latex": "I_{\\mathrm{disk}}=\\dfrac{1}{2}mR^{2},\\quad I_{\\mathrm{ring}}=mR^{2}",
        "note": "均匀实心圆盘与细圆环绕中心轴的转动惯量。 · Moments of inertia of a uniform solid disk and a thin ring about their central axes."
      }
    ],
    "derivationNotes": [
      {
        "from": "重力矩与转动定律 · Gravitational torque and rotation law",
        "to": "复摆运动方程 · Physical-pendulum equation",
        "note": "\\(\\tau=-mgd\\sin\\theta=I\\ddot{\\theta}\\)，小角时 \\(\\sin\\theta\\approx\\theta\\)，得 \\(I\\ddot{\\theta}=-mgd\\theta\\)。 · \\(\\tau=-mgd\\sin\\theta=I\\ddot{\\theta}\\); for small angles \\(\\sin\\theta\\approx\\theta\\), so \\(I\\ddot{\\theta}=-mgd\\theta\\)."
      },
      {
        "from": "平行轴定理 · Parallel-axis theorem",
        "to": "周期表达式 · Period expression",
        "note": "把 \\(I\\) 写成 \\(I_{\\mathrm{cm}}+md^{2}\\)，可直接看出质量分布对周期的影响。 · Writing \\(I\\) as \\(I_{\\mathrm{cm}}+md^{2}\\) shows directly how mass distribution affects the period."
      },
      {
        "from": "简谐形式 · SHM form",
        "to": "复摆周期 · Physical-pendulum period",
        "note": "与 \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) 对比得 \\(\\omega^{2}=\\dfrac{mgd}{I}\\)，所以 \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)。 · Comparing with \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) gives \\(\\omega^{2}=\\dfrac{mgd}{I}\\), hence \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)."
      },
      {
        "from": "金属丝扭转 · Twisting the wire",
        "to": "扭转回复力矩 · Torsion restoring torque",
        "note": "在弹性范围内，金属丝的回复力矩与扭转角成正比且反向：\\(\\tau=-\\kappa\\theta\\)。 · Within the elastic range, the wire's restoring torque is proportional and opposite to the twist angle: \\(\\tau=-\\kappa\\theta\\)."
      },
      {
        "from": "转动定律 · Rotation law",
        "to": "扭摆方程 · Torsion-pendulum equation",
        "note": "\\(I\\ddot{\\theta}=\\tau=-\\kappa\\theta\\)，即 \\(\\ddot{\\theta}=-\\dfrac{\\kappa}{I}\\theta\\)。 · \\(I\\ddot{\\theta}=\\tau=-\\kappa\\theta\\), so \\(\\ddot{\\theta}=-\\dfrac{\\kappa}{I}\\theta\\)."
      },
      {
        "from": "简谐形式 · SHM form",
        "to": "扭摆周期 · Torsion-pendulum period",
        "note": "与 \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) 对比得 \\(\\omega^{2}=\\dfrac{\\kappa}{I}\\)，所以 \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\)。 · Comparing with \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) gives \\(\\omega^{2}=\\dfrac{\\kappa}{I}\\), hence \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\)."
      }
    ],
    "conditions": [
      "复摆：刚体绕固定水平轴摆动，转轴无摩擦；\\(I\\) 必须绕该转轴计算。 · Physical pendulum: the rigid body swings about a fixed horizontal axis without friction; \\(I\\) must be computed about that pivot.",
      "复摆：小角度近似 \\(\\sin\\theta\\approx\\theta\\)；大角度时周期随振幅增大，不能直接用该公式。 · Physical pendulum: the small-angle approximation \\(\\sin\\theta\\approx\\theta\\) is required; at large angles the period grows with amplitude and the formula no longer applies directly.",
      "扭摆：金属丝在弹性范围内，回复力矩满足 \\(\\tau=-\\kappa\\theta\\)；超过弹性限度后关系非线性甚至永久变形。 · Torsion pendulum: the wire remains within its elastic range and the restoring torque satisfies \\(\\tau=-\\kappa\\theta\\); beyond the elastic limit the relation becomes nonlinear or the wire deforms permanently.",
      "扭摆：转轴沿金属丝并通过刚体质心，重力矩为零或可忽略；若转轴不竖直，重力矩会额外参与。 · Torsion pendulum: the rotation axis is along the wire and through the center of mass, so the gravitational torque is zero or negligible; if the axis is not vertical, gravity also contributes.",
      "扭摆：\\(I\\) 绕金属丝轴计算；\\(\\kappa\\) 由金属丝材料、长度、半径决定，换金属丝会改变 \\(\\kappa\\)。 · Torsion pendulum: \\(I\\) is about the wire axis; \\(\\kappa\\) depends on the wire's material, length, and radius, so changing the wire changes \\(\\kappa\\).",
      "两种摆都要求阻尼较小，才能把周期视为常数；强阻尼会显著改变响应，甚至使系统不振动。 · Both pendulums require small damping for the period to be treated as constant; strong damping significantly changes the response and can prevent oscillation."
    ],
    "keyPoints": [
      "复摆的回复力矩来自重力，扭摆的回复力矩来自金属丝扭转。 · A physical pendulum is restored by gravity, while a torsion pendulum is restored by a twisted wire.",
      "复摆周期 \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\) 依赖 \\(g\\)；扭摆周期 \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\) 不依赖 \\(g\\)。 · The physical-pendulum period \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\) depends on \\(g\\), while the torsion-pendulum period \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\) does not.",
      "扭摆中 \\(I\\) 越大周期越长，\\(\\kappa\\) 越大周期越短：\\(T\\propto\\sqrt{I}\\)，\\(T\\propto\\dfrac{1}{\\sqrt{\\kappa}}\\)。 · For a torsion pendulum, a larger \\(I\\) gives a longer period and a larger \\(\\kappa\\) gives a shorter period: \\(T\\propto\\sqrt{I}\\) and \\(T\\propto\\dfrac{1}{\\sqrt{\\kappa}}\\).",
      "复摆需要小角度近似；理想扭摆的力矩本身与 \\(\\theta\\) 成正比，因此在弹性范围内是“天然”的简谐运动。 · A physical pendulum needs the small-angle approximation; an ideal torsion pendulum has a torque proportional to \\(\\theta\\) itself, so within the elastic range it is naturally simple harmonic.",
      "平行轴定理 \\(I=I_{\\mathrm{cm}}+md^{2}\\) 是复摆计算的核心工具；等效单摆长度 \\(L_{\\mathrm{eq}}=\\dfrac{I}{md}>d\\)。 · The parallel-axis theorem \\(I=I_{\\mathrm{cm}}+md^{2}\\) is the key tool for physical pendulums; the equivalent simple-pendulum length is \\(L_{\\mathrm{eq}}=\\dfrac{I}{md}>d\\).",
      "单摆是复摆的特例：\\(d=L\\)、\\(I=mL^{2}\\)，得到 \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\)。 · The simple pendulum is a special case of the physical pendulum: with \\(d=L\\) and \\(I=mL^{2}\\), it gives \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\).",
      "均匀实心圆盘绕中心轴 \\(I=\\dfrac{1}{2}mR^{2}\\)，细圆环 \\(I=mR^{2}\\)；质量分布越远离轴，\\(I\\) 越大。 · A uniform solid disk about its central axis has \\(I=\\dfrac{1}{2}mR^{2}\\), and a thin ring has \\(I=mR^{2}\\); mass farther from the axis gives a larger \\(I\\).",
      "两种摆的能量都在转动动能与势能之间转化；扭摆的势能是 \\(\\dfrac{1}{2}\\kappa\\theta^{2}\\)。 · Both pendulums exchange energy between rotational kinetic energy and potential energy; for a torsion pendulum the potential energy is \\(\\dfrac{1}{2}\\kappa\\theta^{2}\\)."
    ],
    "misconceptions": [
      "把扭摆当成复摆，直接套用 \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)；扭摆应使用 \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\)。 · Treating a torsion pendulum as a physical pendulum and using \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\); a torsion pendulum requires \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\).",
      "认为扭摆周期依赖 \\(g\\)；扭摆周期只由 \\(I\\) 与 \\(\\kappa\\) 决定。 · Thinking the torsion-pendulum period depends on \\(g\\); it is set only by \\(I\\) and \\(\\kappa\\).",
      "把扭转常数 \\(\\kappa\\)（单位 \\(\\mathrm{N\\,m/rad}\\)）与弹簧劲度系数 \\(k\\)（单位 \\(\\mathrm{N/m}\\)）混为一谈。 · Confusing the torsion constant \\(\\kappa\\) (units \\(\\mathrm{N\\,m/rad}\\)) with the spring constant \\(k\\) (units \\(\\mathrm{N/m}\\)).",
      "认为扭摆周期只由质量决定；周期取决于转动惯量 \\(I\\)，而 \\(I\\) 取决于质量分布。 · Thinking the torsion period depends only on mass; it depends on the moment of inertia \\(I\\), which depends on mass distribution.",
      "认为扭摆也必须用小角度 \\(\\sin\\theta\\approx\\theta\\)；理想扭摆的力矩已经与 \\(\\theta\\) 成正比，但仍需在弹性范围内。 · Thinking a torsion pendulum also requires \\(\\sin\\theta\\approx\\theta\\); the ideal torsion torque is already proportional to \\(\\theta\\), but the elastic range is still required.",
      "认为扭摆振幅越大周期一定越长；线性扭摆在弹性范围内周期与振幅无关。 · Thinking a larger torsion amplitude always gives a longer period; a linear torsion pendulum is isochronous within its elastic range.",
      "计算复摆时忘记 \\(I\\) 必须绕转轴，误用绕质心的 \\(I_{\\mathrm{cm}}\\)。 · Forgetting that \\(I\\) in the physical-pendulum formula must be about the pivot, and using \\(I_{\\mathrm{cm}}\\) instead.",
      "把 \\(d\\) 当成杆长或摆长，而不是质心到转轴的距离。 · Treating \\(d\\) as the rod length or pendulum length instead of the distance from the pivot to the center of mass."
    ],
    "examples": [
      {
        "title": "例 1 · 圆盘扭摆周期 · Example 1: Period of a disk torsion pendulum",
        "prompt": "质量 \\(m=0.50\\,\\mathrm{kg}\\)、半径 \\(R=0.10\\,\\mathrm{m}\\) 的均匀圆盘，用一根扭转常数 \\(\\kappa=2.0\\times10^{-3}\\,\\mathrm{N\\,m/rad}\\) 的金属丝悬挂在圆心。求绕中心轴的转动惯量与扭摆周期。 · A uniform disk of mass \\(m=0.50\\,\\mathrm{kg}\\) and radius \\(R=0.10\\,\\mathrm{m}\\) is suspended at its center by a wire with torsion constant \\(\\kappa=2.0\\times10^{-3}\\,\\mathrm{N\\,m/rad}\\). Find its moment of inertia about the central axis and the torsion-pendulum period.",
        "steps": [
          "\\(I=\\dfrac{1}{2}mR^{2}=\\dfrac{1}{2}(0.50)(0.10)^{2}=2.5\\times10^{-3}\\,\\mathrm{kg\\,m^{2}}\\)。 · \\(I=\\dfrac{1}{2}mR^{2}=\\dfrac{1}{2}(0.50)(0.10)^{2}=2.5\\times10^{-3}\\,\\mathrm{kg\\,m^{2}}\\).",
          "\\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}=2\\pi\\sqrt{\\dfrac{2.5\\times10^{-3}}{2.0\\times10^{-3}}}=2\\pi\\sqrt{1.25}\\approx7.0\\,\\mathrm{s}\\)。 · \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}=2\\pi\\sqrt{\\dfrac{2.5\\times10^{-3}}{2.0\\times10^{-3}}}=2\\pi\\sqrt{1.25}\\approx7.0\\,\\mathrm{s}\\)."
        ],
        "solution": "\\(I=2.5\\times10^{-3}\\,\\mathrm{kg\\,m^{2}}\\)，\\(T\\approx7.0\\,\\mathrm{s}\\)。 · \\(I=2.5\\times10^{-3}\\,\\mathrm{kg\\,m^{2}}\\) and \\(T\\approx7.0\\,\\mathrm{s}\\).",
        "solutionLatex": "I=2.5\\times10^{-3}\\,\\mathrm{kg\\,m^{2}},\\qquad T\\approx7.0\\,\\mathrm{s}"
      },
      {
        "title": "例 2 · 由周期测扭转常数 · Example 2: Torsion constant from the period",
        "prompt": "某扭摆的转动惯量 \\(I=5.0\\times10^{-4}\\,\\mathrm{kg\\,m^{2}}\\)，测得小振幅周期 \\(T=1.20\\,\\mathrm{s}\\)。求金属丝的扭转常数 \\(\\kappa\\)。 · A torsion pendulum has moment of inertia \\(I=5.0\\times10^{-4}\\,\\mathrm{kg\\,m^{2}}\\) and a small-amplitude period \\(T=1.20\\,\\mathrm{s}\\). Find the torsion constant \\(\\kappa\\) of the wire.",
        "steps": [
          "由 \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\) 得 \\(\\kappa=\\dfrac{4\\pi^{2}I}{T^{2}}\\)。 · From \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\), \\(\\kappa=\\dfrac{4\\pi^{2}I}{T^{2}}\\).",
          "\\(\\kappa=\\dfrac{4\\pi^{2}(5.0\\times10^{-4})}{(1.20)^{2}}\\approx1.4\\times10^{-2}\\,\\mathrm{N\\,m/rad}\\)。 · \\(\\kappa=\\dfrac{4\\pi^{2}(5.0\\times10^{-4})}{(1.20)^{2}}\\approx1.4\\times10^{-2}\\,\\mathrm{N\\,m/rad}\\)."
        ],
        "solution": "\\(\\kappa\\approx1.4\\times10^{-2}\\,\\mathrm{N\\,m/rad}\\)。 · \\(\\kappa\\approx1.4\\times10^{-2}\\,\\mathrm{N\\,m/rad}\\).",
        "solutionLatex": "\\kappa=\\dfrac{4\\pi^{2}I}{T^{2}}\\approx1.4\\times10^{-2}\\,\\mathrm{N\\,m\\,rad^{-1}}"
      },
      {
        "title": "例 3 · 比例推理：换金属丝 · Example 3: Proportional reasoning with a new wire",
        "prompt": "某扭摆周期为 \\(2.0\\,\\mathrm{s}\\)。保持圆盘不变，换用同材料、同半径但长度加倍的金属丝；扭转常数与长度成反比。求新周期。 · A torsion pendulum has period \\(2.0\\,\\mathrm{s}\\). The disk is unchanged, but the wire is replaced by one of the same material and radius with twice the length; the torsion constant is inversely proportional to length. Find the new period.",
        "steps": [
          "圆盘不变，\\(I\\) 不变；金属丝长度加倍使 \\(\\kappa\\) 变为原来的一半。 · The disk is unchanged, so \\(I\\) is unchanged; doubling the wire length halves \\(\\kappa\\).",
          "因为 \\(T\\propto\\dfrac{1}{\\sqrt{\\kappa}}\\)，所以 \\(T'=T\\sqrt{\\dfrac{\\kappa}{\\kappa'}}=2.0\\sqrt{2}\\approx2.8\\,\\mathrm{s}\\)。 · Because \\(T\\propto\\dfrac{1}{\\sqrt{\\kappa}}\\), \\(T'=T\\sqrt{\\dfrac{\\kappa}{\\kappa'}}=2.0\\sqrt{2}\\approx2.8\\,\\mathrm{s}\\)."
        ],
        "solution": "新周期约为 \\(2.8\\,\\mathrm{s}\\)，是原周期的 \\(\\sqrt{2}\\) 倍。 · The new period is about \\(2.8\\,\\mathrm{s}\\), or \\(\\sqrt{2}\\) times the original.",
        "solutionLatex": "T'=T\\sqrt{\\dfrac{\\kappa}{\\kappa'}}=2.0\\sqrt{2}\\approx2.8\\,\\mathrm{s}"
      },
      {
        "title": "例 4 · 复摆与扭摆的对照 · Example 4: Physical versus torsion pendulum",
        "prompt": "同一圆盘可以绕边缘的水平轴摆动（复摆），也可以绕通过圆心的竖直金属丝扭转（扭摆）。比较两者的回复力矩、周期公式和对 \\(g\\) 的依赖。 · The same disk can swing about a horizontal axis through its edge (physical pendulum) or twist about a vertical wire through its center (torsion pendulum). Compare the restoring torques, period formulas, and dependence on \\(g\\).",
        "steps": [
          "复摆：重力矩 \\(\\tau=-mgd\\sin\\theta\\approx-mgd\\theta\\)，小角度下 \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)，依赖 \\(g\\)。 · Physical pendulum: the gravitational torque is \\(\\tau=-mgd\\sin\\theta\\approx-mgd\\theta\\), and at small angles \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\), which depends on \\(g\\).",
          "扭摆：金属丝扭转力矩 \\(\\tau=-\\kappa\\theta\\)，\\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\)，不依赖 \\(g\\)。 · Torsion pendulum: the wire's restoring torque is \\(\\tau=-\\kappa\\theta\\), and \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\), which does not depend on \\(g\\).",
          "两者都是 \\(\\tau\\propto-\\theta\\) 的简谐运动；复摆需要小角度近似，理想扭摆的力矩本身与 \\(\\theta\\) 成正比。 · Both are SHM with \\(\\tau\\propto-\\theta\\); the physical pendulum requires the small-angle approximation, while the ideal torsion torque is itself proportional to \\(\\theta\\)."
        ],
        "solution": "复摆周期依赖 \\(g\\)，扭摆周期不依赖 \\(g\\)；两者周期公式中的 \\(I\\) 都必须绕各自的转轴计算。 · The physical-pendulum period depends on \\(g\\), while the torsion-pendulum period does not; in both formulas \\(I\\) must be computed about the respective rotation axis.",
        "solutionLatex": "T_{\\mathrm{phys}}=2\\pi\\sqrt{\\dfrac{I}{mgd}},\\qquad T_{\\mathrm{tors}}=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}"
      }
    ],
    "examTips": [
      "先判断回复力矩来自重力还是扭转金属丝，再选周期公式。 · Decide first whether the restoring torque comes from gravity or from a twisted wire, then choose the period formula.",
      "复摆用 \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)；扭摆用 \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\)，不要混用。 · Use \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\) for a physical pendulum and \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\) for a torsion pendulum; do not mix them.",
      "复摆的 \\(I\\) 绕转轴，先用平行轴定理；圆盘 \\(I=\\dfrac{1}{2}mR^{2}\\)。 · For a physical pendulum, \\(I\\) is about the pivot; use the parallel-axis theorem first, and for a disk \\(I=\\dfrac{1}{2}mR^{2}\\).",
      "扭摆周期不含 \\(g\\)，可用于在轨道或不同重力环境下测转动惯量。 · The torsion period contains no \\(g\\), so it can be used to measure moments of inertia in orbit or under different gravitational conditions.",
      "比例推理：\\(T\\propto\\sqrt{I}\\)，\\(T\\propto\\dfrac{1}{\\sqrt{\\kappa}}\\)；\\(I\\) 加倍使 \\(T\\) 变为 \\(\\sqrt{2}\\) 倍。 · Proportional reasoning: \\(T\\propto\\sqrt{I}\\) and \\(T\\propto\\dfrac{1}{\\sqrt{\\kappa}}\\); doubling \\(I\\) multiplies \\(T\\) by \\(\\sqrt{2}\\).",
      "检查单位：\\(\\kappa\\) 用 \\(\\mathrm{N\\,m/rad}\\)，\\(I\\) 用 \\(\\mathrm{kg\\,m^{2}}\\)，两者之比开方后单位为 \\(\\mathrm{s^{-1}}\\)。 · Check units: \\(\\kappa\\) in \\(\\mathrm{N\\,m/rad}\\) and \\(I\\) in \\(\\mathrm{kg\\,m^{2}}\\); the square root of their ratio has units of \\(\\mathrm{s^{-1}}\\)."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u7",
        "code": "7.1",
        "title": "周期运动 · Periodic Motion",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u7",
        "code": "7.2",
        "title": "单摆 · Pendulums",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u5",
        "code": "5.3",
        "title": "转动动力学 · Rotational Dynamics and Energy",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.1",
        "title": "转动动能 · Rotational Kinetic Energy",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "shm",
        "title": "简谐振动"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u7",
    "connections": [
      "上游：5.3 的转动定律 \\(\\tau=I\\alpha\\) 与 6.1 的转动动能给出角简谐运动的动力学与能量基础。 · Upstream: the rotation law \\(\\tau=I\\alpha\\) in 5.3 and rotational kinetic energy in 6.1 provide the dynamical and energetic basis for angular SHM.",
      "下游：扭摆是测量转动惯量与微弱力矩的经典工具，也用于钟表、地震仪与引力实验（如扭秤）。 · Downstream: torsion pendulums are classic tools for measuring moments of inertia and tiny torques, and are used in clocks, seismometers, and gravitational experiments such as the torsion balance.",
      "对照：复摆的回复来自重力、依赖 \\(g\\)；扭摆的回复来自金属丝、不依赖 \\(g\\)，两者周期公式形式相似但物理来源不同。 · Contrast: a physical pendulum is restored by gravity and depends on \\(g\\); a torsion pendulum is restored by a wire and does not depend on \\(g\\). Their period formulas look similar but have different physical origins.",
      "数学：两者都化为 \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) 的角简谐运动，可用同一套相位、周期与能量方法分析。 · Mathematics: both reduce to angular SHM \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) and can be analyzed with the same phase, period, and energy methods."
    ],
    "intuitionDetailed": "复摆的关键是“质心离转轴越远，重力矩越大；但转动惯量也随质量分布变化”。由平行轴定理 \\(I=I_{\\mathrm{cm}}+md^{2}\\)，周期 \\(T=2\\pi\\sqrt{\\dfrac{I_{\\mathrm{cm}}+md^{2}}{mgd}}\\)。当 \\(d\\to0\\)（质心在轴上）时没有回复力矩，周期趋于无穷；当 \\(d\\) 很大时，复摆趋近于长度为 \\(d\\) 的单摆。扭摆的关键是“金属丝像旋转弹簧”：扭过 \\(\\theta\\) 就产生 \\(\\kappa\\theta\\) 的回复力矩，方向总是指回平衡位置。由 \\(I\\ddot{\\theta}=-\\kappa\\theta\\) 得 \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\)。若 \\(\\kappa\\to0\\)（金属丝很软），回复很弱，周期趋于无穷；若 \\(\\kappa\\) 很大（金属丝很硬），周期趋于零。增大圆盘半径或把质量移到远离轴的位置，会增大 \\(I\\)，从而增大周期；换更长或更细的金属丝会减小 \\(\\kappa\\)，也增大周期。扭摆不依赖 \\(g\\)，所以可以在失重环境中工作；复摆则依赖 \\(g\\)。 · The key to a physical pendulum is that a center of mass farther from the pivot gives a larger gravitational torque, but the moment of inertia also changes with mass distribution. By the parallel-axis theorem \\(I=I_{\\mathrm{cm}}+md^{2}\\), the period is \\(T=2\\pi\\sqrt{\\dfrac{I_{\\mathrm{cm}}+md^{2}}{mgd}}\\). As \\(d\\to0\\) (center of mass on the axis), there is no restoring torque and the period tends to infinity; for large \\(d\\), the physical pendulum approaches a simple pendulum of length \\(d\\). The key to a torsion pendulum is that the wire acts like a rotational spring: a twist \\(\\theta\\) produces a restoring torque \\(\\kappa\\theta\\) directed back toward equilibrium. From \\(I\\ddot{\\theta}=-\\kappa\\theta\\), \\(T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}\\). If \\(\\kappa\\to0\\) (a very soft wire), the restoring torque is weak and the period tends to infinity; if \\(\\kappa\\) is large (a very stiff wire), the period tends to zero. Increasing the disk radius or moving mass away from the axis increases \\(I\\) and therefore the period; using a longer or thinner wire decreases \\(\\kappa\\) and also increases the period. A torsion pendulum does not depend on \\(g\\), so it works in weightlessness; a physical pendulum does depend on \\(g\\).",
    "development": [
      "识别转轴与回复力矩的来源：重力还是金属丝扭转。 · Identify the rotation axis and the source of the restoring torque: gravity or a twisted wire.",
      "写出转动惯量 \\(I\\) 与力矩 \\(\\tau\\)，用 \\(\\tau=I\\alpha\\) 建立运动方程。 · Write the moment of inertia \\(I\\) and torque \\(\\tau\\), and use \\(\\tau=I\\alpha\\) to set up the equation of motion.",
      "与 \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) 对比，得到角频率与周期。 · Compare with \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) to obtain the angular frequency and period.",
      "用平行轴定理、圆盘或圆环的 \\(I\\) 计算具体周期，并检查单位与极限。 · Compute a specific period using the parallel-axis theorem and the \\(I\\) of a disk or ring, then check units and limits.",
      "比较复摆、单摆与扭摆的回复机制、周期公式与对 \\(g\\) 的依赖。 · Compare physical, simple, and torsion pendulums in restoring mechanism, period formula, and dependence on \\(g\\)."
    ],
    "checks": [
      "复摆与扭摆的回复力矩分别来自什么？ · What provides the restoring torque in a physical pendulum and in a torsion pendulum?",
      "为什么扭摆周期不含 \\(g\\)，而复摆周期含 \\(g\\)？ · Why does the torsion-pendulum period contain no \\(g\\), while the physical-pendulum period does?",
      "若转动惯量加倍、扭转常数不变，周期变为原来的几倍？ · If the moment of inertia doubles while the torsion constant is unchanged, by what factor does the period change?",
      "为什么复摆需要小角度近似，而理想扭摆不需要 \\(\\sin\\theta\\approx\\theta\\)？ · Why does a physical pendulum need the small-angle approximation, while an ideal torsion pendulum does not need \\(\\sin\\theta\\approx\\theta\\)?",
      "换用更长或更细的金属丝，扭摆周期如何变化？为什么？ · How does the torsion-pendulum period change if a longer or thinner wire is used, and why?",
      "如何用实验数据区分复摆与扭摆？ · How could experimental data distinguish a physical pendulum from a torsion pendulum?"
    ],
    "vocabulary": [
      {
        "termZh": "复摆",
        "termEn": "physical pendulum",
        "defZh": "绕固定水平轴摆动的刚体，回复力矩来自重力，周期 \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)。",
        "defEn": "A rigid body swinging about a fixed horizontal axis, restored by gravity, with period \\(T=2\\pi\\sqrt{\\dfrac{I}{mgd}}\\)."
      },
      {
        "termZh": "扭摆",
        "termEn": "torsion pendulum",
        "defZh": "悬挂在金属丝上、绕金属丝轴扭转后释放的刚体，回复力矩来自金属丝扭转。",
        "defEn": "A rigid body suspended by a wire and twisted about the wire axis before release, restored by the twisted wire."
      },
      {
        "termZh": "扭转常数",
        "termEn": "torsion constant",
        "defZh": "描述金属丝抗扭能力的常数 \\(\\kappa\\)，满足 \\(\\tau=-\\kappa\\theta\\)，单位 \\(\\mathrm{N\\,m/rad}\\)。",
        "defEn": "The constant \\(\\kappa\\) describing a wire's resistance to twisting, satisfying \\(\\tau=-\\kappa\\theta\\), with units \\(\\mathrm{N\\,m/rad}\\)."
      },
      {
        "termZh": "扭转回复力矩",
        "termEn": "torsion restoring torque",
        "defZh": "金属丝扭转后产生的、与角位移成正比且反向的力矩 \\(\\tau=-\\kappa\\theta\\)。",
        "defEn": "The torque produced by a twisted wire, proportional and opposite to angular displacement: \\(\\tau=-\\kappa\\theta\\)."
      },
      {
        "termZh": "转动惯量",
        "termEn": "moment of inertia",
        "defZh": "描述刚体转动惯性的量 \\(I\\)，取决于质量及其到转轴的分布。",
        "defEn": "The quantity \\(I\\) describing rotational inertia, depending on mass and its distribution about the axis."
      },
      {
        "termZh": "平行轴定理",
        "termEn": "parallel-axis theorem",
        "defZh": "绕任意平行轴的转动惯量 \\(I=I_{\\mathrm{cm}}+md^{2}\\)。",
        "defEn": "The moment of inertia about any parallel axis is \\(I=I_{\\mathrm{cm}}+md^{2}\\)."
      },
      {
        "termZh": "等效单摆长度",
        "termEn": "equivalent simple-pendulum length",
        "defZh": "使单摆周期与复摆相同的摆长 \\(L_{\\mathrm{eq}}=\\dfrac{I}{md}\\)。",
        "defEn": "The simple-pendulum length giving the same period as a physical pendulum: \\(L_{\\mathrm{eq}}=\\dfrac{I}{md}\\)."
      },
      {
        "termZh": "角简谐运动",
        "termEn": "angular simple harmonic motion",
        "defZh": "角位移满足 \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\) 的振动，复摆与扭摆在小角度或线性扭转下都属此类。",
        "defEn": "Oscillation whose angular displacement satisfies \\(\\ddot{\\theta}=-\\omega^{2}\\theta\\); physical and torsion pendulums both belong to this class at small angles or under linear torsion."
      }
    ]
  }
};
