export const UNIT = {
  "id": "mech-u1",
  "code": "1",
  "titleZh": "运动学",
  "titleEn": "Kinematics",
  "subject": "mech",
  "layer": "ap"
};
export const TOPICS = {
  "1.1": {
    "id": "mech/mech-u1/1.1",
    "subject": "mech",
    "chapterId": "mech-u1",
    "unitCode": "1",
    "unitTitleZh": "运动学",
    "unitTitleEn": "Kinematics",
    "code": "1.1",
    "titleZh": "一维运动学",
    "titleEn": "Kinematics in One Dimension",
    "layer": "ap",
    "summary": "一维运动学用位置、位移、平均量与瞬时量描述直线运动；对时间求导得到瞬时速度与加速度，积分则从加速度还原速度与位置，观察者所选参考系决定测得的方向与大小。 · One-dimensional kinematics describes straight-line motion with position, displacement, average and instantaneous quantities; differentiating with respect to time gives instantaneous velocity and acceleration, integrating recovers velocity and position from acceleration, and the observer's reference frame determines the direction and magnitude of every measurement.",
    "learningObjectives": [
      "能说明点对象模型忽略大小、形状与内部结构，把物体视为带质量、电荷等广延性质的质点，并判断它何时适用。 · Explain that the object model ignores size, shape, and internal configuration, treating the object as a point with extensive properties such as mass and charge, and judge when the model applies.",
      "能区分位置、位移与路程，并在给定一维坐标中计算位移与路程。 · Distinguish position, displacement, and distance, and calculate displacement and distance on a given one-dimensional axis.",
      "能用初末状态求平均速度、平均速率与平均加速度，并比较同一运动在不同时间区间上的平均量。 · Calculate average velocity, average speed, and average acceleration from initial and final states, and compare averages over different time intervals.",
      "能说明当时间间隔趋于零时平均量趋近瞬时量，割线趋近切线，并从图像读出瞬时速度与瞬时加速度。 · Explain that averages approach instantaneous values as the time interval approaches zero, that a secant approaches a tangent, and read instantaneous velocity and acceleration from graphs.",
      "能描述给定观察者的参考系，并说明参考系的选择如何改变测得的位置、位移与速度的方向和大小。 · Describe the reference frame of a given observer and explain how the choice of frame changes the measured direction and magnitude of position, displacement, and velocity.",
      "能在两个惯性参考系之间做伽利略位置与速度变换，并用它解决一维相对运动问题。 · Convert position and velocity measurements between inertial frames with the Galilean transformation and use it to solve one-dimensional relative-motion problems.",
      "能判断加速度是否恒定，选择相应的匀加速方程或回到导数定义，并用符号、单位与图像检验结果。 · Decide whether acceleration is constant, choose the appropriate constant-acceleration equation or return to the derivative definition, and check results with signs, units, and graphs.",
      "能对加速度随时间变化的非匀加速运动，用 \\(v(t)=v_0+\\int_{0}^{t}a(t')\\,\\mathrm{d}t'\\) 与 \\(x(t)=x_0+\\int_{0}^{t}v(t')\\,\\mathrm{d}t'\\) 逐次积分还原运动，并用初始条件确定积分常数。 · For motion with time-dependent, nonuniform acceleration, recover the motion by integrating \\(v(t)=v_0+\\int_{0}^{t}a(t')\\,\\mathrm{d}t'\\) and \\(x(t)=x_0+\\int_{0}^{t}v(t')\\,\\mathrm{d}t'\\) in succession, using the initial conditions to fix the constants of integration."
    ],
    "essentialKnowledge": [
      "点对象模型（object model）忽略物体的大小、形状和内部结构，只保留质量、电荷等广延性质；当物体尺寸远小于所研究的运动尺度，且转动、形变与内部运动都不重要时使用。 · The object model ignores an object's size, shape, and internal configuration and keeps only extensive properties such as mass and charge; it applies when the object is small compared with the motion scale and rotation, deformation, and internal motion do not matter.",
      "位置 \\(x(t)\\) 是相对参考系原点的坐标，是矢量；一维中正负号表示方向。位移 \\(\\Delta x=x_f-x_i\\) 只由初末位置决定，路程 \\(s\\) 是实际轨迹长度，是标量。 · Position \\(x(t)\\) is a vector coordinate measured from the frame's origin; in one dimension its sign gives the direction. Displacement \\(\\Delta x=x_f-x_i\\) depends only on the initial and final positions, while distance \\(s\\) is the scalar length of the actual path.",
      "平均速度用位移，平均速率用路程：\\(\\bar v=\\dfrac{\\Delta x}{\\Delta t}\\)，平均速率 \\(v_{\\mathrm{avg}}=\\dfrac{s}{\\Delta t}\\)。闭合往返运动位移为零，平均速度为零，但平均速率不为零。 · Average velocity uses displacement and average speed uses distance: \\(\\bar v=\\dfrac{\\Delta x}{\\Delta t}\\) and average speed \\(v_{\\mathrm{avg}}=\\dfrac{s}{\\Delta t}\\). For a closed round trip the displacement is zero, so average velocity is zero while average speed is not.",
      "平均加速度是速度变化除以时间间隔：\\(\\bar a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{v_f-v_i}{\\Delta t}\\)。它对任意运动都成立，只由初末速度和时间间隔决定，不要求加速度恒定。 · Average acceleration is velocity change divided by the time interval: \\(\\bar a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{v_f-v_i}{\\Delta t}\\). It is defined for any motion and depends only on the initial and final velocities and the interval, not on constant acceleration.",
      "平均量只记录区间两端的初末状态，会抹去中间细节；同一运动在不同时间区间上的平均速度、平均加速度一般不同，比较时必须说明所用区间。 · An average records only the endpoint states of an interval and hides intermediate details; the same motion generally has different average velocities and accelerations over different intervals, so the interval must be stated when comparing.",
      "当 \\(\\Delta t\\to 0\\) 时，平均速度趋近瞬时速度、平均加速度趋近瞬时加速度。在 \\(x\\text{-}t\\) 图上，平均速度是割线斜率，瞬时速度是切线斜率；在 \\(v\\text{-}t\\) 图上，平均加速度是割线斜率，瞬时加速度是切线斜率。 · As \\(\\Delta t\\to 0\\), average velocity approaches instantaneous velocity and average acceleration approaches instantaneous acceleration. On an \\(x\\text{-}t\\) graph the average velocity is a secant slope and the instantaneous velocity is a tangent slope; on a \\(v\\text{-}t\\) graph the average acceleration is a secant slope and the instantaneous acceleration is a tangent slope.",
      "位置、速度和加速度都可以写成时间的函数 \\(x(t)\\)、\\(v(t)\\)、\\(a(t)\\)。对时间求导逐级得到瞬时量：\\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)、\\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}^{2}x}{\\mathrm{d}t^{2}}\\)；反向则积分：\\(v(t)=v_0+\\int_{0}^{t}a(t')\\,\\mathrm{d}t'\\)、\\(x(t)=x_0+\\int_{0}^{t}v(t')\\,\\mathrm{d}t'\\)，对任意（包括非匀）加速度都成立。 · Position, velocity, and acceleration can each be written as functions of time, \\(x(t)\\), \\(v(t)\\), and \\(a(t)\\). Differentiating with respect to time gives the instantaneous quantities level by level: \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) and \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}^{2}x}{\\mathrm{d}t^{2}}\\); reversing the process uses integration: \\(v(t)=v_0+\\int_{0}^{t}a(t')\\,\\mathrm{d}t'\\) and \\(x(t)=x_0+\\int_{0}^{t}v(t')\\,\\mathrm{d}t'\\), valid for any acceleration, including nonuniform acceleration.",
      "定积分给出一段时间内的变化量：\\(\\Delta v=\\int_{t_i}^{t_f}a\\,\\mathrm{d}t\\) 是 \\(a\\text{-}t\\) 图的有向面积，\\(\\Delta x=\\int_{t_i}^{t_f}v\\,\\mathrm{d}t\\) 是 \\(v\\text{-}t\\) 图的有向面积；曲线在时间轴下方时面积取负。 · A definite integral gives the change over a time interval: \\(\\Delta v=\\int_{t_i}^{t_f}a\\,\\mathrm{d}t\\) is the signed area under the \\(a\\text{-}t\\) graph, and \\(\\Delta x=\\int_{t_i}^{t_f}v\\,\\mathrm{d}t\\) is the signed area under the \\(v\\text{-}t\\) graph; area below the time axis counts as negative.",
      "不定积分带积分常数，必须用初始条件确定：已知 \\(a(t)\\) 时，先由 \\(v(0)=v_0\\) 定出速度表达式中的常数，再由 \\(x(0)=x_0\\) 定出位置表达式中的常数；把结果求导回去可检验。 · An indefinite integral carries a constant of integration that must be fixed by the initial conditions: given \\(a(t)\\), use \\(v(0)=v_0\\) to fix the constant in the velocity, then \\(x(0)=x_0\\) to fix the constant in the position; differentiating the result checks it.",
      "匀加速只是 \\(a(t)=\\text{const}\\) 的特例：对常数积分一次得 \\(v=v_0+at\\)，再积分一次得 \\(x=x_0+v_0t+\\dfrac{1}{2}at^{2}\\)；第三式由前两式消去 \\(t\\) 得到。因此匀加速方程是积分与代数消元的结果，而不是独立于微积分的新规则。 · Constant acceleration is just the special case \\(a(t)=\\text{const}\\): integrating once gives \\(v=v_0+at\\), and integrating again gives \\(x=x_0+v_0t+\\dfrac{1}{2}at^{2}\\); the third equation follows by eliminating \\(t\\) from the first two. The constant-acceleration equations are therefore integration plus algebra, not new rules independent of calculus.",
      "参考系由观察者、坐标原点、坐标轴方向和时钟共同定义。同一运动在不同参考系中测得的位置、位移和速度可以不同，但物理规律的形式相同。 · A reference frame is defined by an observer, an origin, coordinate-axis directions, and a clock. The same motion can give different measured positions, displacements, and velocities in different frames, while the laws of physics keep the same form.",
      "惯性参考系之间以恒定速度相对运动。若新参考系相对旧参考系的速度为 \\(u\\)，则 \\(x'=x-ut\\)、\\(v'=v-u\\)、\\(a'=a\\)。速度是相对的，而加速度在所有惯性系中相同。 · Inertial frames move at constant velocity relative to one another. If the new frame moves at velocity \\(u\\) relative to the old frame, then \\(x'=x-ut\\), \\(v'=v-u\\), and \\(a'=a\\). Velocity is relative, while acceleration is the same in every inertial frame.",
      "一维中的“负”只表示与选定正方向相反，不表示“减速”。速度与加速度同号时速率增大，异号时速率减小。 · In one dimension, negative means opposite the chosen positive direction, not necessarily slowing down. Speed increases when velocity and acceleration have the same sign and decreases when they have opposite signs.",
      "匀加速方程只在加速度恒定时成立；一般运动必须回到 \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)、\\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\)，或利用图像的斜率与面积。 · The constant-acceleration equations hold only when acceleration is constant; for general motion, return to \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\), \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\), or use graph slopes and areas.",
      "\\(x\\text{-}t\\) 图的斜率是速度，\\(v\\text{-}t\\) 图的斜率是加速度、面积是位移；曲线某点的切线给出该时刻的瞬时量。 · The slope of an \\(x\\text{-}t\\) graph is velocity; the slope of a \\(v\\text{-}t\\) graph is acceleration and its area is displacement; the tangent at a point gives the instantaneous value at that time."
    ],
    "definition": "一维运动学（kinematics in one dimension）研究物体沿一条直线的位置随时间的变化。使用点对象模型时，忽略物体的大小、形状和内部结构，把物体视为一个带质量、电荷等广延性质的质点；只有当物体尺寸远小于所研究的距离、且整体平动是唯一关心的运动时，这个模型才适用。取定观察者参考系和正方向后，位置记为 \\(x(t)\\)，位移 \\(\\Delta x=x_f-x_i\\)，路程 \\(s\\) 是轨迹长度（标量）。平均速度 \\(\\bar v=\\dfrac{\\Delta x}{\\Delta t}\\)，平均加速度 \\(\\bar a=\\dfrac{\\Delta v}{\\Delta t}\\)；当 \\(\\Delta t\\to 0\\) 时，它们分别趋近瞬时速度 \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) 和瞬时加速度 \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\)。换到以恒定速度 \\(u\\) 相对运动的新参考系时，\\(x'=x-ut\\)、\\(v'=v-u\\)，而 \\(a'=a\\)。若加速度不是常量，三个匀加速方程不再适用，应回到 \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\) 与 \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)，对时间积分：\\(v(t)=v_0+\\int_{0}^{t}a(t')\\,\\mathrm{d}t'\\)、\\(x(t)=x_0+\\int_{0}^{t}v(t')\\,\\mathrm{d}t'\\)，积分常数由初速度与初位置确定。 · One-dimensional kinematics studies how an object's position along a line changes with time. In the object model, the object's size, shape, and internal configuration are ignored and the object is treated as a point carrying extensive properties such as mass and charge; this model applies when the object is small compared with the distances involved and overall translation is the only motion of interest. After choosing an observer's reference frame and a positive direction, position is \\(x(t)\\), displacement is \\(\\Delta x=x_f-x_i\\), and distance \\(s\\) is the scalar path length. Average velocity is \\(\\bar v=\\dfrac{\\Delta x}{\\Delta t}\\) and average acceleration is \\(\\bar a=\\dfrac{\\Delta v}{\\Delta t}\\); as \\(\\Delta t\\to 0\\) they approach the instantaneous velocity \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) and acceleration \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\). In a new frame moving at constant velocity \\(u\\), \\(x'=x-ut\\), \\(v'=v-u\\), and \\(a'=a\\). When acceleration is not constant, the three constant-acceleration equations no longer apply; return to \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\) and \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) and integrate over time: \\(v(t)=v_0+\\int_{0}^{t}a(t')\\,\\mathrm{d}t'\\) and \\(x(t)=x_0+\\int_{0}^{t}v(t')\\,\\mathrm{d}t'\\), with the constants fixed by the initial velocity and position.",
    "intuition": "先选观察者和正方向，再区分“位置”“走了多远”和“位置变了多少”。平均量像一张只拍起点和终点的照片，时间间隔越短，这张照片越接近某一瞬间的真实状态。换参考系时，相当于把整条坐标轴以恒定速度平移：位置和速度会变，但加速度不变，因为两个观察者看到的速度变化率相同。若加速度随时间变化，就把 \\(a(t)\\) 看成一连串极短时间内的微小速度变化，积分把它们累加成总的速度变化；再用 \\(v(t)\\) 重复一次，得到位置变化。 · Choose the observer and positive direction first, then separate position, path length, and change of position. An average is like a photograph that records only the start and end of an interval; the shorter the interval, the closer it comes to the true state at an instant. Changing frames shifts the whole coordinate axis at constant velocity: positions and velocities change, but acceleration does not, because both observers see the same rate of change of velocity. If acceleration changes with time, treat \\(a(t)\\) as a succession of tiny velocity changes over very short intervals; integration adds them into the total velocity change, and repeating the process with \\(v(t)\\) gives the change in position.",
    "formulas": [
      {
        "latex": "\\Delta x=x_f-x_i",
        "note": "一维位移：只看初末位置，与路径无关。 · One-dimensional displacement: it depends only on the initial and final positions, not the path."
      },
      {
        "latex": "\\bar v=\\dfrac{\\Delta x}{\\Delta t}",
        "note": "平均速度（矢量），对任意运动成立。 · Average velocity (a vector), defined for any motion."
      },
      {
        "latex": "v_{\\mathrm{avg}}=\\dfrac{s}{\\Delta t}",
        "note": "平均速率（标量），分子是路程而不是位移的大小。 · Average speed (a scalar); the numerator is distance, not the magnitude of displacement."
      },
      {
        "latex": "\\bar a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{v_f-v_i}{\\Delta t}",
        "note": "平均加速度（矢量），对任意运动成立。 · Average acceleration (a vector), defined for any motion."
      },
      {
        "latex": "v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t},\\quad a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}^{2}x}{\\mathrm{d}t^{2}}",
        "note": "瞬时速度与瞬时加速度：平均量在 \\(\\Delta t\\to 0\\) 时的极限。 · Instantaneous velocity and acceleration: the limits of the averages as \\(\\Delta t\\to 0\\)."
      },
      {
        "latex": "v(t)=v_0+\\int_{0}^{t}a(t')\\,\\mathrm{d}t'",
        "note": "任意加速度下由 \\(a(t)\\) 积分求速度；\\(v_0\\) 是 \\(t=0\\) 时的速度。 · Velocity from integrating \\(a(t)\\) for arbitrary acceleration; \\(v_0\\) is the velocity at \\(t=0\\)."
      },
      {
        "latex": "x(t)=x_0+\\int_{0}^{t}v(t')\\,\\mathrm{d}t'",
        "note": "由 \\(v(t)\\) 积分求位置；\\(x_0\\) 是 \\(t=0\\) 时的位置。 · Position from integrating \\(v(t)\\); \\(x_0\\) is the position at \\(t=0\\)."
      },
      {
        "latex": "\\Delta v=\\int_{t_i}^{t_f}a\\,\\mathrm{d}t,\\quad \\Delta x=\\int_{t_i}^{t_f}v\\,\\mathrm{d}t",
        "note": "定积分形式：\\(a\\text{-}t\\) 图的有向面积给速度变化，\\(v\\text{-}t\\) 图的有向面积给位移。 · Definite-integral form: signed area under the \\(a\\text{-}t\\) graph gives velocity change, and signed area under the \\(v\\text{-}t\\) graph gives displacement."
      },
      {
        "latex": "v(t)=\\int a(t)\\,\\mathrm{d}t+C_1,\\quad x(t)=\\int v(t)\\,\\mathrm{d}t+C_2",
        "note": "不定积分形式；\\(C_1,C_2\\) 由初始条件 \\(v(0)=v_0\\)、\\(x(0)=x_0\\) 确定。 · Indefinite-integral form; \\(C_1\\) and \\(C_2\\) are fixed by the initial conditions \\(v(0)=v_0\\) and \\(x(0)=x_0\\)."
      },
      {
        "latex": "v=v_0+at",
        "note": "匀加速直线运动的速度方程。 · Velocity equation for constant acceleration in one dimension."
      },
      {
        "latex": "x=x_0+v_0t+\\dfrac{1}{2}at^{2}",
        "note": "匀加速的位置方程。 · Position equation for constant acceleration."
      },
      {
        "latex": "v^{2}=v_0^{2}+2a\\Delta x",
        "note": "消去时间后的速度—位移关系，适合“无 \\(t\\)”问题。 · Velocity-displacement relation after eliminating time; useful when \\(t\\) is not given."
      },
      {
        "latex": "\\bar v=\\dfrac{v_0+v}{2}",
        "note": "仅匀加速时平均速度等于初末速度的算术平均。 · Only for constant acceleration does average velocity equal the arithmetic mean of initial and final velocity."
      },
      {
        "latex": "x'=x-ut",
        "note": "伽利略位置变换：新参考系相对旧参考系以恒定速度 \\(u\\) 运动。 · Galilean position transformation: the new frame moves at constant velocity \\(u\\) relative to the old frame."
      },
      {
        "latex": "v'=v-u,\\quad a'=a",
        "note": "对位置变换求导；惯性系之间加速度不变。 · Differentiate the position transformation; acceleration is invariant between inertial frames."
      }
    ],
    "derivationNotes": [
      {
        "from": "位置与位移的定义 · Definition of position and displacement",
        "to": "平均速度与平均速率 · Average velocity and average speed",
        "note": "由 \\(\\Delta x=x_f-x_i\\) 除以 \\(\\Delta t\\) 得 \\(\\bar v=\\dfrac{\\Delta x}{\\Delta t}\\)；若把分子换成实际路程 \\(s\\)，得到标量平均速率 \\(v_{\\mathrm{avg}}=\\dfrac{s}{\\Delta t}\\)。 · Divide \\(\\Delta x=x_f-x_i\\) by \\(\\Delta t\\) to get \\(\\bar v=\\dfrac{\\Delta x}{\\Delta t}\\); replacing the numerator by the actual path length \\(s\\) gives the scalar average speed \\(v_{\\mathrm{avg}}=\\dfrac{s}{\\Delta t}\\)."
      },
      {
        "from": "平均速度 · Average velocity",
        "to": "瞬时速度与切线 · Instantaneous velocity and the tangent",
        "note": "令时间间隔 \\(\\Delta t\\to 0\\)，割线斜率 \\(\\dfrac{\\Delta x}{\\Delta t}\\) 趋近 \\(x\\text{-}t\\) 曲线在该点的切线斜率，即 \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)；对 \\(v\\text{-}t\\) 图重复同样的极限得到 \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\)。 · Let \\(\\Delta t\\to 0\\); the secant slope \\(\\dfrac{\\Delta x}{\\Delta t}\\) approaches the tangent slope of the \\(x\\text{-}t\\) curve, so \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\). Repeating the same limit on a \\(v\\text{-}t\\) graph gives \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\)."
      },
      {
        "from": "加速度恒定 · Constant acceleration",
        "to": "三个匀加速方程 · The three constant-acceleration equations",
        "note": "由 \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\) 积分得 \\(v=v_0+at\\)；再由 \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) 积分得 \\(x=x_0+v_0t+\\dfrac{1}{2}at^{2}\\)；两式消去 \\(t\\) 得 \\(v^{2}=v_0^{2}+2a\\Delta x\\)。 · Integrate \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\) to get \\(v=v_0+at\\); integrate \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) to get \\(x=x_0+v_0t+\\dfrac{1}{2}at^{2}\\); eliminate \\(t\\) to obtain \\(v^{2}=v_0^{2}+2a\\Delta x\\)."
      },
      {
        "from": "加速度函数 · Acceleration function",
        "to": "速度函数 · Velocity function",
        "note": "对 \\(a(t)\\) 积分：\\(v(t)=v_0+\\int_{0}^{t}a(t')\\,\\mathrm{d}t'\\)；若 \\(a\\) 为常量，积分给出 \\(v=v_0+at\\)。 · Integrate \\(a(t)\\): \\(v(t)=v_0+\\int_{0}^{t}a(t')\\,\\mathrm{d}t'\\); if \\(a\\) is constant, the integral gives \\(v=v_0+at\\)."
      },
      {
        "from": "速度函数 · Velocity function",
        "to": "位置函数 · Position function",
        "note": "再对 \\(v(t)\\) 积分：\\(x(t)=x_0+\\int_{0}^{t}v(t')\\,\\mathrm{d}t'\\)；对常数加速度重复积分得到 \\(x=x_0+v_0t+\\dfrac{1}{2}at^{2}\\)。 · Integrate \\(v(t)\\) again: \\(x(t)=x_0+\\int_{0}^{t}v(t')\\,\\mathrm{d}t'\\); repeating the integration for constant acceleration gives \\(x=x_0+v_0t+\\dfrac{1}{2}at^{2}\\)."
      },
      {
        "from": "初始条件 · Initial conditions",
        "to": "积分常数 · Constants of integration",
        "note": "把 \\(t=0\\) 代入并令 \\(v(0)=v_0\\)、\\(x(0)=x_0\\) 可定出两个积分常数；对结果求导回代是最快的检验。 · Substitute \\(t=0\\) and set \\(v(0)=v_0\\) and \\(x(0)=x_0\\) to fix the two constants of integration; differentiating the result is the quickest check."
      },
      {
        "from": "伽利略位置变换 · Galilean position transformation",
        "to": "速度与加速度变换 · Velocity and acceleration transformations",
        "note": "对 \\(x'=x-ut\\) 关于时间求导得 \\(v'=v-u\\)；再求导一次，因 \\(u\\) 恒定，\\(\\dfrac{\\mathrm{d}u}{\\mathrm{d}t}=0\\)，所以 \\(a'=a\\)。 · Differentiate \\(x'=x-ut\\) with respect to time to get \\(v'=v-u\\); differentiating again with constant \\(u\\) gives \\(a'=a\\) because \\(\\dfrac{\\mathrm{d}u}{\\mathrm{d}t}=0\\)."
      },
      {
        "from": "平均量只依赖端点 · Averages depend only on endpoints",
        "to": "区间比较 · Comparing intervals",
        "note": "平均速度只由 \\(x_i,x_f,t_i,t_f\\) 决定，因此同一运动在长度不同或起点不同的区间上一般给出不同的平均速度；在 \\(x\\text{-}t\\) 图上，这些差别表现为不同割线的斜率。 · Average velocity depends only on \\(x_i,x_f,t_i,t_f\\), so the same motion generally gives different averages over intervals of different length or starting point; on an \\(x\\text{-}t\\) graph these differences appear as slopes of different secants."
      },
      {
        "from": "点对象模型 · Object model",
        "to": "适用性检验 · Validity check",
        "note": "比较物体尺寸与运动距离：若尺寸远小于距离，且转动、形变和内部运动不影响所问问题，才可把物体当作质点；否则必须保留形状或内部结构。 · Compare the object's size with the distance traveled: only when the size is much smaller and rotation, deformation, and internal motion do not affect the question may the object be treated as a point; otherwise its shape or internal structure must be retained."
      }
    ],
    "conditions": [
      "一维直线运动，先选定正方向并在全程保持一致；换方向时必须重新检查符号。 · The motion is one-dimensional along a straight line; choose a positive direction once and keep it, rechecking signs whenever the direction changes.",
      "点对象模型要求物体尺寸远小于运动尺度，且转动、形变与内部结构对所研究的问题可忽略。 · The object model requires the object to be small compared with the motion scale and rotation, deformation, and internal structure to be negligible for the question.",
      "三个匀加速方程只在加速度恒定时成立；加速度变化时必须用导数、图像面积或分段处理。 · The three constant-acceleration equations hold only for constant acceleration; when acceleration changes, use derivatives, graph areas, or piecewise analysis.",
      "用积分还原运动时，必须先知道 \\(a(t)\\)（或 \\(v(t)\\)）的函数形式与一个初始条件；分段函数要在每一段分别积分，并在交界处匹配速度与位置。 · To recover motion by integration, the function \\(a(t)\\) (or \\(v(t)\\)) and one initial condition must be known; for piecewise functions, integrate each interval separately and match velocity and position at the boundaries.",
      "定积分面积有正负：曲线在时间轴下方时贡献负的 \\(\\Delta v\\) 或 \\(\\Delta x\\)，不能只取几何面积的大小。 · Definite-integral areas are signed: below the time axis the contribution to \\(\\Delta v\\) or \\(\\Delta x\\) is negative, so the geometric area alone is not enough.",
      "平均量对任意运动都有定义，但只描述区间两端；瞬时量是 \\(\\Delta t\\to 0\\) 的极限，二者不能混用。 · Averages are defined for any motion but describe only the interval endpoints; instantaneous quantities are the \\(\\Delta t\\to 0\\) limit, and the two must not be confused.",
      "伽利略变换只适用于相对速度恒定的惯性参考系，且相对速率远小于光速；加速参考系需要引入惯性力。 · The Galilean transformation applies only to inertial frames with constant relative velocity much less than the speed of light; accelerating frames require fictitious forces.",
      "自由落体忽略空气阻力，取向上为正时 \\(a=-g\\)；有阻力时加速度不再恒定。 · Free fall ignores air resistance and has \\(a=-g\\) with upward positive; with drag, acceleration is no longer constant."
    ],
    "keyPoints": [
      "点对象模型保留质量、电荷等广延性质，但忽略大小、形状和内部结构。 · The object model keeps extensive properties such as mass and charge but ignores size, shape, and internal configuration.",
      "位置是坐标，位移是位置的变化，路程是轨迹长度；三者不能互相替代。 · Position is a coordinate, displacement is a change of position, and distance is path length; they are not interchangeable.",
      "平均速度用位移，平均速率用路程；往返一圈平均速度为零而平均速率不为零。 · Average velocity uses displacement and average speed uses distance; for one closed lap the average velocity is zero while the average speed is not.",
      "平均加速度对变加速运动同样有定义，只由初末速度和区间决定。 · Average acceleration is defined even for nonconstant acceleration and depends only on the endpoint velocities and the interval.",
      "时间间隔越短，平均量越接近瞬时量；图像上割线趋近切线。 · The shorter the interval, the closer an average is to the instantaneous value; on a graph, the secant approaches the tangent.",
      "参考系决定测得的位置、位移和速度；换到惯性系时加速度不变。 · The reference frame determines measured position, displacement, and velocity; acceleration is unchanged when switching between inertial frames.",
      "先判断加速度是否恒定，再选择方程；负号只表示方向，不自动表示减速。 · Decide whether acceleration is constant before choosing equations; a negative sign gives direction and does not by itself mean slowing down.",
      "求导与积分互逆：由 \\(x(t)\\) 求导得 \\(v(t)\\)、\\(a(t)\\)；由 \\(a(t)\\) 逐次积分并代入初始条件得 \\(v(t)\\)、\\(x(t)\\)。 · Differentiation and integration are inverse operations: differentiating \\(x(t)\\) gives \\(v(t)\\) and \\(a(t)\\); integrating \\(a(t)\\) twice with initial conditions gives \\(v(t)\\) and \\(x(t)\\).",
      "三个匀加速方程由积分（必要时再消去 \\(t\\)）得到；非匀加速必须保留 \\(a(t)\\) 并积分。 · The three constant-acceleration equations come from integration (plus eliminating \\(t\\) where needed); for nonuniform acceleration, keep \\(a(t)\\) and integrate.",
    ],
    "misconceptions": [
      "把位置当作位移：位置是相对原点的坐标，位移是 \\(x_f-x_i\\)，两者起点不同。 · Treating position as displacement: position is a coordinate relative to the origin, while displacement is \\(x_f-x_i\\), and the two have different reference points.",
      "认为路程等于位移的大小：只有在单向直线运动中二者才相等，往返或曲线运动时不相等。 · Thinking distance equals the magnitude of displacement: they are equal only for one-way straight-line motion, not for round trips or curved paths.",
      "认为平均速率等于平均速度的大小：平均速度为零的往返运动中平均速率可以很大。 · Thinking average speed equals the magnitude of average velocity: in a round trip with zero average velocity, the average speed can be large.",
      "认为只有匀加速运动才有平均加速度：平均加速度对任意运动都有定义，只是不一定等于瞬时加速度。 · Thinking average acceleration exists only for constant acceleration: it is defined for any motion, though it need not equal the instantaneous acceleration.",
      "认为速度为零时加速度也为零：抛体最高点速度为零，但加速度仍为 \\(g\\)。 · Thinking acceleration is zero whenever velocity is zero: at the top of a projectile's path the velocity is zero but the acceleration is still \\(g\\).",
      "看到负加速度就认为物体在减速：还要看速度的符号，只有速度与加速度异号时才减速。 · Assuming negative acceleration means slowing down: the sign of velocity also matters, and speed decreases only when velocity and acceleration have opposite signs.",
      "认为地面参考系是“绝对”的：不同惯性系测得的位置与速度不同，但物理规律相同。 · Treating the ground frame as absolute: different inertial frames measure different positions and velocities, but the laws of physics are the same.",
      "在伽利略变换中把 \\(u\\) 的符号写反：先明确新参考系相对旧参考系的速度方向，再代入 \\(x'=x-ut\\)、\\(v'=v-u\\)。 · Reversing the sign of \\(u\\) in a Galilean transformation: first identify the velocity of the new frame relative to the old one, then substitute \\(x'=x-ut\\) and \\(v'=v-u\\).",
      "无条件使用点对象模型：当转动、形变或内部结构影响结果时，质点模型会丢失关键信息。 · Using the object model unconditionally: when rotation, deformation, or internal structure affects the result, the point model loses essential information.",
      "认为图像面积一定等于位移或速度变化的大小：面积是有向的，轴下方取负；而且只有 \\(v\\text{-}t\\) 面积是位移，\\(a\\text{-}t\\) 面积是速度变化。 · Thinking a graph area always equals the magnitude of displacement or velocity change: area is signed and below the axis is negative; only the \\(v\\text{-}t\\) area is displacement, while the \\(a\\text{-}t\\) area is velocity change.",
      "积分时漏掉积分常数或初始条件：不定积分给出含常数的一族函数，必须用 \\(v(0)=v_0\\)、\\(x(0)=x_0\\) 选出实际运动。 · Dropping the constant of integration or initial conditions: an indefinite integral gives a family of functions, and \\(v(0)=v_0\\) and \\(x(0)=x_0\\) select the actual motion.",
    ],
    "examples": [
      {
        "title": "例 1 · 点对象模型的适用性 · Example 1: Validity of the object model",
        "prompt": "一架长 \\(40\\,\\mathrm{m}\\) 的飞机沿 \\(600\\,\\mathrm{km}\\) 的航线飞行。研究整架飞机的位置随时间变化时，能否使用点对象模型？研究机翼的转动或机舱内乘客的运动时呢？ · An airplane \\(40\\,\\mathrm{m}\\) long flies a \\(600\\,\\mathrm{km}\\) route. Can the object model describe the position of the whole airplane versus time? What about the rotation of a wing or the motion of a passenger inside?",
        "steps": [
          "把飞机长度与航线长度比较：\\(\\dfrac{40}{6.0\\times 10^{5}}\\approx 6.7\\times 10^{-5}\\ll 1\\)，飞机尺寸远小于运动尺度。 · Compare the airplane length with the route length: \\(\\dfrac{40}{6.0\\times 10^{5}}\\approx 6.7\\times 10^{-5}\\ll 1\\), so the airplane is much smaller than the motion scale.",
          "整体平动时，飞机各点的位置差别可忽略，可把它当作带质量与电荷等广延性质的质点，位置用一个坐标描述。 · For overall translation, the position differences among points on the airplane are negligible, so it can be treated as a point with extensive properties such as mass and charge, located by a single position.",
          "机翼转动和乘客走动属于内部结构与内部运动；点对象模型忽略了这些自由度，因此不能用来描述它们。 · Wing rotation and passenger motion are internal structure and internal motion; the object model ignores these degrees of freedom and cannot describe them."
        ],
        "solution": "研究整架飞机的航线位置时可以用点对象模型；研究机翼转动或乘客运动时不能用，因为这些问题依赖被忽略的形状与内部结构。 · The object model is valid for the airplane's overall position along the route but not for wing rotation or passenger motion, which depend on the ignored shape and internal structure.",
        "solutionLatex": "\\text{object model: } \\dfrac{40\\,\\mathrm{m}}{600\\,\\mathrm{km}}\\approx 6.7\\times 10^{-5}\\ll 1"
      },
      {
        "title": "例 2 · 平均速度与平均速率 · Example 2: Average velocity and average speed",
        "prompt": "运动员在 \\(50\\,\\mathrm{s}\\) 内沿 \\(400\\,\\mathrm{m}\\) 跑道跑完一圈；前 \\(200\\,\\mathrm{m}\\) 用 \\(20\\,\\mathrm{s}\\)，后 \\(200\\,\\mathrm{m}\\) 用 \\(30\\,\\mathrm{s}\\)。求全程位移、平均速度、平均速率，并比较前后半圈的平均速率。 · An athlete completes one \\(400\\,\\mathrm{m}\\) lap in \\(50\\,\\mathrm{s}\\), covering the first \\(200\\,\\mathrm{m}\\) in \\(20\\,\\mathrm{s}\\) and the second \\(200\\,\\mathrm{m}\\) in \\(30\\,\\mathrm{s}\\). Find the displacement, average velocity, and average speed for the whole lap, and compare the average speeds of the two halves.",
        "steps": [
          "跑完一圈回到起点：\\(\\Delta x=0\\)，所以平均速度 \\(\\bar v=\\dfrac{0}{50}=0\\)。 · Returning to the start gives \\(\\Delta x=0\\), so the average velocity is \\(\\bar v=\\dfrac{0}{50}=0\\).",
          "路程 \\(s=400\\,\\mathrm{m}\\)，平均速率 \\(v_{\\mathrm{avg}}=\\dfrac{400}{50}=8.0\\,\\mathrm{m\\,s^{-1}}\\)。 · The distance is \\(s=400\\,\\mathrm{m}\\), so the average speed is \\(v_{\\mathrm{avg}}=\\dfrac{400}{50}=8.0\\,\\mathrm{m\\,s^{-1}}\\).",
          "前半圈 \\(v_1=\\dfrac{200}{20}=10\\,\\mathrm{m\\,s^{-1}}\\)，后半圈 \\(v_2=\\dfrac{200}{30}=6.7\\,\\mathrm{m\\,s^{-1}}\\)。 · The first half has \\(v_1=\\dfrac{200}{20}=10\\,\\mathrm{m\\,s^{-1}}\\) and the second half has \\(v_2=\\dfrac{200}{30}=6.7\\,\\mathrm{m\\,s^{-1}}\\).",
          "两个半圈的路程相同但用时不同，所以平均速率不同；全程 \\(8.0\\,\\mathrm{m\\,s^{-1}}\\) 不是 \\(10\\) 与 \\(6.7\\) 的简单算术平均，而是按时间加权的结果。 · The two halves have equal distance but different times, so their average speeds differ; the whole-lap value \\(8.0\\,\\mathrm{m\\,s^{-1}}\\) is not the simple arithmetic mean of \\(10\\) and \\(6.7\\) but a time-weighted result."
        ],
        "solution": "全程位移为零，平均速度为零，平均速率为 \\(8.0\\,\\mathrm{m\\,s^{-1}}\\)；前后半圈平均速率分别为 \\(10\\,\\mathrm{m\\,s^{-1}}\\) 与 \\(6.7\\,\\mathrm{m\\,s^{-1}}\\)，说明平均量依赖所选区间。 · The whole-lap displacement and average velocity are zero, and the average speed is \\(8.0\\,\\mathrm{m\\,s^{-1}}\\); the two halves have average speeds \\(10\\,\\mathrm{m\\,s^{-1}}\\) and \\(6.7\\,\\mathrm{m\\,s^{-1}}\\), showing that averages depend on the chosen interval.",
        "solutionLatex": "\\Delta x=0,\\quad \\bar v=0,\\quad v_{\\mathrm{avg}}=8.0\\,\\mathrm{m\\,s^{-1}},\\quad v_1=10\\,\\mathrm{m\\,s^{-1}},\\quad v_2=6.7\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 3 · 平均加速度与速度变化矢量 · Example 3: Average acceleration and the velocity-change vector",
        "prompt": "小球以 \\(6.0\\,\\mathrm{m\\,s^{-1}}\\) 垂直撞墙，经 \\(0.020\\,\\mathrm{s}\\) 后以 \\(4.0\\,\\mathrm{m\\,s^{-1}}\\) 沿相反方向弹回。取初速度方向为正，求平均加速度，并说明速度变化矢量的方向。 · A ball hits a wall perpendicularly at \\(6.0\\,\\mathrm{m\\,s^{-1}}\\) and rebounds in the opposite direction at \\(4.0\\,\\mathrm{m\\,s^{-1}}\\) after \\(0.020\\,\\mathrm{s}\\). Taking the initial velocity direction as positive, find the average acceleration and state the direction of the velocity-change vector.",
        "steps": [
          "取初速度方向为正：\\(v_i=+6.0\\,\\mathrm{m\\,s^{-1}}\\)，\\(v_f=-4.0\\,\\mathrm{m\\,s^{-1}}\\)。 · With the initial direction positive, \\(v_i=+6.0\\,\\mathrm{m\\,s^{-1}}\\) and \\(v_f=-4.0\\,\\mathrm{m\\,s^{-1}}\\).",
          "速度变化 \\(\\Delta v=v_f-v_i=-4.0-6.0=-10.0\\,\\mathrm{m\\,s^{-1}}\\)，负号表示 \\(\\Delta\\vec v\\) 指向离开墙的方向。 · The velocity change is \\(\\Delta v=v_f-v_i=-4.0-6.0=-10.0\\,\\mathrm{m\\,s^{-1}}\\); the minus sign shows that \\(\\Delta\\vec v\\) points away from the wall.",
          "平均加速度 \\(\\bar a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{-10.0}{0.020}=-5.0\\times 10^{2}\\,\\mathrm{m\\,s^{-2}}\\)，大小约 \\(500\\,\\mathrm{m\\,s^{-2}}\\)，方向离开墙。 · The average acceleration is \\(\\bar a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{-10.0}{0.020}=-5.0\\times 10^{2}\\,\\mathrm{m\\,s^{-2}}\\), with magnitude about \\(500\\,\\mathrm{m\\,s^{-2}}\\) directed away from the wall.",
          "这里加速度并不恒定，但平均加速度仍可由初末速度定义；若要求撞击过程中的瞬时加速度，需要更细的 \\(v\\text{-}t\\) 数据。 · Acceleration is not constant here, yet average acceleration is still defined by the endpoint velocities; finding the instantaneous acceleration during the collision would require finer \\(v\\text{-}t\\) data."
        ],
        "solution": "平均加速度约为 \\(5.0\\times 10^{2}\\,\\mathrm{m\\,s^{-2}}\\)，方向与初速度相反（离开墙）；\\(\\Delta\\vec v\\) 也从初速度矢量的箭头指向末速度矢量的箭头。 · The average acceleration is about \\(5.0\\times 10^{2}\\,\\mathrm{m\\,s^{-2}}\\) opposite the initial velocity (away from the wall); \\(\\Delta\\vec v\\) also points from the tip of the initial velocity arrow to the tip of the final velocity arrow.",
        "solutionLatex": "\\bar a=\\dfrac{v_f-v_i}{\\Delta t}=\\dfrac{-4.0-6.0}{0.020}=-5.0\\times 10^{2}\\,\\mathrm{m\\,s^{-2}}"
      },
      {
        "title": "例 4 · 割线趋近切线 · Example 4: From secant to tangent",
        "prompt": "物体沿 \\(x\\) 轴运动，位置为 \\(x(t)=2.0t^{2}\\)（\\(x\\) 以 m、\\(t\\) 以 s 计）。求从 \\(t=2.0\\,\\mathrm{s}\\) 到 \\(2.1\\,\\mathrm{s}\\)、\\(2.01\\,\\mathrm{s}\\)、\\(2.001\\,\\mathrm{s}\\) 的平均速度，并求 \\(t=2.0\\,\\mathrm{s}\\) 的瞬时速度。 · An object moves along the \\(x\\)-axis with \\(x(t)=2.0t^{2}\\) (\\(x\\) in m, \\(t\\) in s). Find the average velocity from \\(t=2.0\\,\\mathrm{s}\\) to \\(2.1\\,\\mathrm{s}\\), \\(2.01\\,\\mathrm{s}\\), and \\(2.001\\,\\mathrm{s}\\), and the instantaneous velocity at \\(t=2.0\\,\\mathrm{s}\\).",
        "steps": [
          "\\(x(2.0)=8.00\\,\\mathrm{m}\\)；\\(x(2.1)=8.82\\,\\mathrm{m}\\)，平均速度 \\(=\\dfrac{8.82-8.00}{0.10}=8.2\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(x(2.0)=8.00\\,\\mathrm{m}\\) and \\(x(2.1)=8.82\\,\\mathrm{m}\\), so the average velocity is \\(\\dfrac{8.82-8.00}{0.10}=8.2\\,\\mathrm{m\\,s^{-1}}\\).",
          "\\(x(2.01)=8.0802\\,\\mathrm{m}\\)，平均速度 \\(=\\dfrac{0.0802}{0.01}=8.02\\,\\mathrm{m\\,s^{-1}}\\)；\\(x(2.001)=8.008002\\,\\mathrm{m}\\)，平均速度 \\(=\\dfrac{0.008002}{0.001}=8.002\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(x(2.01)=8.0802\\,\\mathrm{m}\\) gives \\(8.02\\,\\mathrm{m\\,s^{-1}}\\), and \\(x(2.001)=8.008002\\,\\mathrm{m}\\) gives \\(8.002\\,\\mathrm{m\\,s^{-1}}\\).",
          "随着 \\(\\Delta t\\to 0\\)，割线斜率从 \\(8.2\\) 趋近 \\(8.0\\,\\mathrm{m\\,s^{-1}}\\)，这就是 \\(t=2.0\\,\\mathrm{s}\\) 处切线的斜率。 · As \\(\\Delta t\\to 0\\), the secant slope approaches \\(8.0\\,\\mathrm{m\\,s^{-1}}\\) from \\(8.2\\), which is the tangent slope at \\(t=2.0\\,\\mathrm{s}\\).",
          "用导数验证：\\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=4.0t\\)，在 \\(t=2.0\\,\\mathrm{s}\\) 时 \\(v=8.0\\,\\mathrm{m\\,s^{-1}}\\)。 · Check with the derivative: \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=4.0t\\), so at \\(t=2.0\\,\\mathrm{s}\\), \\(v=8.0\\,\\mathrm{m\\,s^{-1}}\\)."
        ],
        "solution": "平均速度依次为 \\(8.2\\)、\\(8.02\\)、\\(8.002\\,\\mathrm{m\\,s^{-1}}\\)，趋近瞬时速度 \\(8.0\\,\\mathrm{m\\,s^{-1}}\\)；平均割线在极限中变成切线。 · The average velocities are \\(8.2\\), \\(8.02\\), and \\(8.002\\,\\mathrm{m\\,s^{-1}}\\), approaching the instantaneous velocity \\(8.0\\,\\mathrm{m\\,s^{-1}}\\); the average secant becomes the tangent in the limit.",
        "solutionLatex": "\\bar v_{[2,2.1]}=8.2,\\quad \\bar v_{[2,2.01]}=8.02,\\quad \\bar v_{[2,2.001]}=8.002,\\quad v(2.0)=8.0\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 5 · 描述观察者的参考系 · Example 5: Describing an observer's reference frame",
        "prompt": "列车以 \\(20\\,\\mathrm{m\\,s^{-1}}\\) 沿直轨向东行驶，车厢内桌面上放着一只杯子。分别以地面观察者和车厢内乘客为参考系，描述杯子的位置与速度；若乘客以 \\(2.0\\,\\mathrm{m\\,s^{-1}}\\) 相对车厢向车头走，地面观察者测得他的速度是多少？ · A train moves east at \\(20\\,\\mathrm{m\\,s^{-1}}\\) along a straight track, and a cup rests on a table inside. Describe the cup's position and velocity in the ground frame and in the passenger's frame; if the passenger walks toward the front at \\(2.0\\,\\mathrm{m\\,s^{-1}}\\) relative to the train, what velocity does the ground observer measure?",
        "steps": [
          "参考系由观察者、原点、坐标轴方向和时钟定义。取地面原点为车站、向东为正；取车厢原点为桌面、向东为正。 · A frame is defined by an observer, an origin, axis directions, and a clock. Take the station as the ground origin and east as positive; take the tabletop as the train-frame origin and east as positive.",
          "车厢观察者测得杯子位置不变、速度为零；地面观察者测得杯子随车以 \\(20\\,\\mathrm{m\\,s^{-1}}\\) 向东运动。两个测量都正确，只是参考系不同。 · The train observer measures a constant cup position and zero velocity; the ground observer measures the cup moving east at \\(20\\,\\mathrm{m\\,s^{-1}}\\) with the train. Both measurements are correct in their own frames.",
          "乘客相对车厢的速度 \\(u_{PT}=+2.0\\,\\mathrm{m\\,s^{-1}}\\)，车厢相对地面 \\(u_{TG}=+20\\,\\mathrm{m\\,s^{-1}}\\)，所以 \\(u_{PG}=u_{PT}+u_{TG}=22\\,\\mathrm{m\\,s^{-1}}\\)。 · The passenger's velocity relative to the train is \\(u_{PT}=+2.0\\,\\mathrm{m\\,s^{-1}}\\) and the train's velocity relative to the ground is \\(u_{TG}=+20\\,\\mathrm{m\\,s^{-1}}\\), so \\(u_{PG}=u_{PT}+u_{TG}=22\\,\\mathrm{m\\,s^{-1}}\\).",
          "若乘客向车尾走，则 \\(u_{PT}=-2.0\\,\\mathrm{m\\,s^{-1}}\\)，地面测得 \\(18\\,\\mathrm{m\\,s^{-1}}\\) 向东；可见参考系改变的是测得的速度，而不是物理规律。 · If the passenger walks toward the rear, \\(u_{PT}=-2.0\\,\\mathrm{m\\,s^{-1}}\\) and the ground measurement is \\(18\\,\\mathrm{m\\,s^{-1}}\\) east; changing the frame changes the measured velocity, not the laws of physics."
        ],
        "solution": "车厢系中杯子静止、乘客速度为 \\(2.0\\,\\mathrm{m\\,s^{-1}}\\)；地面系中杯子速度为 \\(20\\,\\mathrm{m\\,s^{-1}}\\) 向东，乘客速度为 \\(22\\,\\mathrm{m\\,s^{-1}}\\)（向车头走）或 \\(18\\,\\mathrm{m\\,s^{-1}}\\)（向车尾走）。 · In the train frame the cup is at rest and the passenger moves at \\(2.0\\,\\mathrm{m\\,s^{-1}}\\); in the ground frame the cup moves east at \\(20\\,\\mathrm{m\\,s^{-1}}\\) and the passenger at \\(22\\,\\mathrm{m\\,s^{-1}}\\) toward the front or \\(18\\,\\mathrm{m\\,s^{-1}}\\) toward the rear.",
        "solutionLatex": "v_{\\mathrm{cup,g}}=+20\\,\\mathrm{m\\,s^{-1}},\\quad v_{P,g}=2.0+20=22\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 6 · 匀加速 · Example 6: Constant acceleration",
        "prompt": "汽车从静止开始在 \\(5.0\\,\\mathrm{s}\\) 内匀加速到 \\(20\\,\\mathrm{m\\,s^{-1}}\\)。求加速度与这段时间的位移。 · A car accelerates uniformly from rest to \\(20\\,\\mathrm{m\\,s^{-1}}\\) in \\(5.0\\,\\mathrm{s}\\). Find its acceleration and displacement during this time.",
        "steps": [
          "\\(a=\\dfrac{v-v_0}{t}=\\dfrac{20-0}{5.0}=4.0\\,\\mathrm{m\\,s^{-2}}\\)。 · \\(a=\\dfrac{v-v_0}{t}=\\dfrac{20-0}{5.0}=4.0\\,\\mathrm{m\\,s^{-2}}\\).",
          "\\(\\Delta x=\\dfrac{v_0+v}{2}t=\\dfrac{0+20}{2}(5.0)=50\\,\\mathrm{m}\\)。 · \\(\\Delta x=\\dfrac{v_0+v}{2}t=\\dfrac{0+20}{2}(5.0)=50\\,\\mathrm{m}\\)."
        ],
        "solution": "\\(a=4.0\\,\\mathrm{m\\,s^{-2}}\\)，\\(\\Delta x=50\\,\\mathrm{m}\\)。 · \\(a=4.0\\,\\mathrm{m\\,s^{-2}}\\) and \\(\\Delta x=50\\,\\mathrm{m}\\).",
        "solutionLatex": "a=4.0\\,\\mathrm{m\\,s^{-2}},\\qquad \\Delta x=50\\,\\mathrm{m}"
      },
      {
        "title": "例 7 · 竖直上抛 · Example 7: Vertical throw",
        "prompt": "以 \\(15\\,\\mathrm{m\\,s^{-1}}\\) 竖直向上抛出小球，忽略空气阻力，\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)。求最大高度与落回抛出点的时间。 · A ball is thrown vertically upward at \\(15\\,\\mathrm{m\\,s^{-1}}\\), ignoring air resistance, with \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\). Find the maximum height and the time to return to the launch point.",
        "steps": [
          "最高点 \\(v=0\\)：\\(0=v_0^{2}-2gh\\Rightarrow h=\\dfrac{v_0^{2}}{2g}=\\dfrac{225}{19.6}=11.5\\,\\mathrm{m}\\)。 · At the top \\(v=0\\): \\(0=v_0^{2}-2gh\\Rightarrow h=\\dfrac{v_0^{2}}{2g}=\\dfrac{225}{19.6}=11.5\\,\\mathrm{m}\\).",
          "上升与下落时间对称：\\(t_{\\mathrm{total}}=\\dfrac{2v_0}{g}=\\dfrac{30}{9.8}=3.06\\,\\mathrm{s}\\)。 · The upward and downward times are symmetric: \\(t_{\\mathrm{total}}=\\dfrac{2v_0}{g}=\\dfrac{30}{9.8}=3.06\\,\\mathrm{s}\\)."
        ],
        "solution": "最大高度约 \\(11.5\\,\\mathrm{m}\\)，总时间约 \\(3.1\\,\\mathrm{s}\\)。 · The maximum height is about \\(11.5\\,\\mathrm{m}\\) and the total time is about \\(3.1\\,\\mathrm{s}\\).",
        "solutionLatex": "h=\\dfrac{v_0^{2}}{2g}=11.5\\,\\mathrm{m},\\qquad t=\\dfrac{2v_0}{g}=3.06\\,\\mathrm{s}"
      },
      {
        "title": "例 8 · 非匀加速的积分还原 · Example 8: Recovering nonuniform motion by integration",
        "prompt": "小车从静止出发，加速度随时间线性增大：\\(a(t)=(3.0\\,\\mathrm{m\\,s^{-3}})t\\)，\\(0\\le t\\le 2.0\\,\\mathrm{s}\\)，初位置 \\(x_0=0\\)。求 \\(v(t)\\)、\\(x(t)\\) 以及 \\(t=2.0\\,\\mathrm{s}\\) 的速度与位置，并用 \\(a\\text{-}t\\) 与 \\(v\\text{-}t\\) 图的面积核对。 · A cart starts from rest with acceleration increasing linearly with time, \\(a(t)=(3.0\\,\\mathrm{m\\,s^{-3}})t\\) for \\(0\\le t\\le 2.0\\,\\mathrm{s}\\), and initial position \\(x_0=0\\). Find \\(v(t)\\), \\(x(t)\\), and the velocity and position at \\(t=2.0\\,\\mathrm{s}\\), and check with the areas under the \\(a\\text{-}t\\) and \\(v\\text{-}t\\) graphs.",
        "steps": [
          "由 \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\) 积分：\\(v(t)=0+\\int_{0}^{t}3.0t'\\,\\mathrm{d}t'=1.5t^{2}\\,\\mathrm{m\\,s^{-1}}\\)（\\(t\\) 以 s 计）。 · Integrate \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\): \\(v(t)=0+\\int_{0}^{t}3.0t'\\,\\mathrm{d}t'=1.5t^{2}\\,\\mathrm{m\\,s^{-1}}\\) with \\(t\\) in seconds.",
          "再对 \\(v(t)\\) 积分：\\(x(t)=0+\\int_{0}^{t}1.5t'^{2}\\,\\mathrm{d}t'=0.5t^{3}\\,\\mathrm{m}\\)。 · Integrate \\(v(t)\\) again: \\(x(t)=0+\\int_{0}^{t}1.5t'^{2}\\,\\mathrm{d}t'=0.5t^{3}\\,\\mathrm{m}\\).",
          "在 \\(t=2.0\\,\\mathrm{s}\\)：\\(v=1.5(2.0)^{2}=6.0\\,\\mathrm{m\\,s^{-1}}\\)，\\(x=0.5(2.0)^{3}=4.0\\,\\mathrm{m}\\)。 · At \\(t=2.0\\,\\mathrm{s}\\), \\(v=1.5(2.0)^{2}=6.0\\,\\mathrm{m\\,s^{-1}}\\) and \\(x=0.5(2.0)^{3}=4.0\\,\\mathrm{m}\\).",
          "\\(a\\text{-}t\\) 图是过原点的直线，\\(0\\) 到 \\(2.0\\,\\mathrm{s}\\) 的三角形面积 \\(\\dfrac{1}{2}(2.0)(6.0)=6.0\\,\\mathrm{m\\,s^{-1}}\\)，等于 \\(\\Delta v\\)；\\(v\\text{-}t\\) 图是抛物线，面积 \\(\\int_{0}^{2.0}1.5t^{2}\\,\\mathrm{d}t=4.0\\,\\mathrm{m}\\)，等于 \\(\\Delta x\\)。 · The \\(a\\text{-}t\\) graph is a straight line through the origin; the triangle area from \\(0\\) to \\(2.0\\,\\mathrm{s}\\) is \\(\\dfrac{1}{2}(2.0)(6.0)=6.0\\,\\mathrm{m\\,s^{-1}}\\), equal to \\(\\Delta v\\). The \\(v\\text{-}t\\) graph is a parabola whose area is \\(\\int_{0}^{2.0}1.5t^{2}\\,\\mathrm{d}t=4.0\\,\\mathrm{m}\\), equal to \\(\\Delta x\\).",
          "平均加速度 \\(\\bar a=\\dfrac{6.0-0}{2.0}=3.0\\,\\mathrm{m\\,s^{-2}}\\)，而 \\(t=2.0\\,\\mathrm{s}\\) 的瞬时加速度 \\(a=6.0\\,\\mathrm{m\\,s^{-2}}\\)；两者不同，说明非匀加速时不能把平均加速度当作全程常量。 · The average acceleration is \\(\\bar a=\\dfrac{6.0-0}{2.0}=3.0\\,\\mathrm{m\\,s^{-2}}\\), while the instantaneous acceleration at \\(t=2.0\\,\\mathrm{s}\\) is \\(a=6.0\\,\\mathrm{m\\,s^{-2}}\\); they differ, so average acceleration cannot be treated as a constant over the whole interval."
        ],
        "solution": "\\(v(t)=1.5t^{2}\\,\\mathrm{m\\,s^{-1}}\\)，\\(x(t)=0.5t^{3}\\,\\mathrm{m}\\)；在 \\(t=2.0\\,\\mathrm{s}\\)，\\(v=6.0\\,\\mathrm{m\\,s^{-1}}\\)，\\(x=4.0\\,\\mathrm{m}\\)。 · \\(v(t)=1.5t^{2}\\,\\mathrm{m\\,s^{-1}}\\) and \\(x(t)=0.5t^{3}\\,\\mathrm{m}\\); at \\(t=2.0\\,\\mathrm{s}\\), \\(v=6.0\\,\\mathrm{m\\,s^{-1}}\\) and \\(x=4.0\\,\\mathrm{m}\\).",
        "solutionLatex": "v(t)=1.5t^{2},\\quad x(t)=0.5t^{3},\\quad v(2.0)=6.0\\,\\mathrm{m\\,s^{-1}},\\quad x(2.0)=4.0\\,\\mathrm{m}"
      }
    ],
    "examTips": [
      "先写清观察者、参考系与正方向，再写位移、速度和加速度的符号。 · State the observer, frame, and positive direction before writing signs for displacement, velocity, and acceleration.",
      "遇到“平均”先看区间端点；遇到“瞬时”才取 \\(\\Delta t\\to 0\\) 或求导。 · For average quantities use the interval endpoints; for instantaneous quantities take \\(\\Delta t\\to 0\\) or differentiate.",
      "位移用 \\(x_f-x_i\\)，路程用实际轨迹长度；两者不要混用。 · Use \\(x_f-x_i\\) for displacement and actual path length for distance; do not mix them.",
      "匀加速方程按“缺哪个量”选择，先确认加速度恒定再代入。 · Choose a constant-acceleration equation by the missing quantity, and confirm constant acceleration before substituting.",
      "换参考系时先写 \\(x'=x-ut\\)、\\(v'=v-u\\)，再由题意确定 \\(u\\) 的符号。 · When changing frames, write \\(x'=x-ut\\) and \\(v'=v-u\\), then determine the sign of \\(u\\) from the situation.",
      "用图像斜率、面积、单位与极限情形检查答案是否合理。 · Check answers with graph slopes, areas, units, and limiting cases.",
      "看到 \\(a\\) 不是常量或题目给出 \\(a(t)\\)，立即改写为 \\(\\mathrm{d}v=a\\,\\mathrm{d}t\\) 并积分；不要套用匀加速方程。 · When \\(a\\) is not constant or \\(a(t)\\) is given, rewrite as \\(\\mathrm{d}v=a\\,\\mathrm{d}t\\) and integrate immediately; do not use the constant-acceleration equations.",
      "积分后先用初始条件定常数，再代具体时刻；最后用求导和图像面积双向检查。 · After integrating, apply the initial conditions to fix the constants, then evaluate at the requested time; check both by differentiating and by graph area."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u1",
        "code": "1.2",
        "title": "二维运动学 · Kinematics in Two Dimensions",
        "relation": "后续 · next"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "应用 · application"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.1",
        "title": "动能定理 · Work-Energy Theorem",
        "relation": "跨主题 · cross-topic"
      }
    ],
    "modules": [
      {
        "id": "projectile",
        "title": "抛体运动（含一维运动图像） · Projectile Motion (with 1D motion graphs)"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u1",
    "connections": [
      "上游：先修数学中的导数与斜率给出瞬时速度和瞬时加速度；本主题把平均量取极限得到导数定义，并把导数反过来用积分从 \\(a(t)\\) 还原 \\(v(t)\\) 与 \\(x(t)\\)。 · Upstream: prerequisite calculus on derivatives and slopes supplies instantaneous velocity and acceleration; this topic obtains the derivative definitions by taking limits of averages and reverses differentiation with integrals that recover \\(v(t)\\) and \\(x(t)\\) from \\(a(t)\\).",
      "下游：1.2 二维运动学把一维分量组合成矢量运动；牛顿定律用 \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\) 连接力与运动。 · Downstream: 1.2 combines one-dimensional components into vector motion, and Newton's laws connect force to motion through \\(a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}\\).",
      "跨主题：参考系与相对运动为动量、碰撞和波的观察者问题提供语言；伽利略变换是低速相对论极限。 · Cross-topic: reference frames and relative motion provide the language for momentum, collisions, and observer problems in wave physics; the Galilean transformation is the low-speed limit of relativity.",
      "建模：点对象模型是后续质点、刚体和系统建模的第一层理想化，适用性判断决定哪些内部结构可以忽略。 · Modeling: the object model is the first idealization for particles, rigid bodies, and systems; judging its validity decides which internal structure may be ignored."
    ],
    "intuitionDetailed": "先画一条坐标轴并标出正方向，再标出初末位置：位移是终点减起点，路程是实际走过的那段轨迹。平均速度是连接 \\(x\\text{-}t\\) 图上两点的割线斜率；把第二点向第一点移动，割线逐渐转成切线，切线斜率就是瞬时速度。平均加速度同理，在 \\(v\\text{-}t\\) 图上连接初末速度点。若加速度恒定，\\(v\\text{-}t\\) 图是一条直线，斜率是 \\(a\\)，面积是位移，三个匀加速方程只是这条直线与坐标轴围成图形的代数表达。\n\n参考系是观察者随身携带的坐标网格和时钟。站在站台上看，杯子随列车以 \\(20\\,\\mathrm{m\\,s^{-1}}\\) 前进；站在车厢里看，杯子静止。两种描述都对，因为速度是相对于参考系定义的。换到以恒定速度 \\(u\\) 运动的新参考系时，所有位置都减去 \\(ut\\)，所有速度都减去 \\(u\\)，但速度的变化率不变，所以加速度相同。若新参考系在加速，这个简单变换就失效，需要引入惯性力。\\n\\n当加速度随时间变化时，微积分把“瞬时”和“累积”连接起来：\\(a(t)\\) 是速度曲线的斜率，\\(v\\text{-}t\\) 图下的有向面积是速度变化；反过来，已知 \\(a(t)\\) 就先积分一次得到 \\(v(t)\\)，再积分一次得到 \\(x(t)\\)。每一步都产生一个积分常数，分别由初速度和初位置确定。非匀加速的典型例子是加速度线性增大的小车：速度按二次函数增长，位置按三次函数增长，平均加速度与瞬时加速度不再相等。 · Draw an axis, mark the positive direction, and mark the initial and final positions: displacement is final minus initial, while distance is the actual path traveled. Average velocity is the slope of the secant joining two points on the \\(x\\text{-}t\\) graph; moving the second point toward the first turns the secant into the tangent, whose slope is the instantaneous velocity. Average acceleration works the same way on a \\(v\\text{-}t\\) graph. For constant acceleration, the \\(v\\text{-}t\\) graph is a straight line, its slope is \\(a\\), its area is displacement, and the three constant-acceleration equations are just algebra for the shape under that line.\n\nA reference frame is the coordinate grid and clock carried by an observer. From the station platform, the cup moves forward with the train at \\(20\\,\\mathrm{m\\,s^{-1}}\\); from inside the train, the cup is at rest. Both descriptions are correct because velocity is defined relative to a frame. Changing to a new frame moving at constant velocity \\(u\\) subtracts \\(ut\\) from every position and \\(u\\) from every velocity, but the rate of change of velocity stays the same, so acceleration is unchanged. If the new frame accelerates, this simple transformation fails and fictitious forces are needed. When acceleration changes with time, calculus connects the instantaneous and the accumulated descriptions: \\(a(t)\\) is the slope of the velocity curve, and the signed area under the \\(v\\text{-}t\\) graph is the change in velocity; conversely, given \\(a(t)\\), integrate once to obtain \\(v(t)\\) and again to obtain \\(x(t)\\). Each integration produces a constant, fixed by the initial velocity and initial position. A typical nonuniform case is a cart whose acceleration grows linearly with time: velocity then grows quadratically and position cubically, and average acceleration no longer equals instantaneous acceleration.",
    "development": [
      "明确对象与模型：判断物体能否视为质点，写出被忽略的大小、形状与内部结构。 · Identify the object and model: decide whether it can be treated as a point and state the ignored size, shape, and internal structure.",
      "选参考系与坐标：标出观察者、原点、正方向和时钟，写出位置函数 \\(x(t)\\)。 · Choose the frame and coordinates: mark the observer, origin, positive direction, and clock, then write the position function \\(x(t)\\).",
      "区分位移与路程：由初末位置算 \\(\\Delta x\\)，由实际路径算 \\(s\\)。 · Distinguish displacement from distance: compute \\(\\Delta x\\) from the endpoints and \\(s\\) from the actual path.",
      "由初末态算平均量，再取 \\(\\Delta t\\to 0\\) 得瞬时量；必要时读图求割线与切线斜率。 · Compute averages from endpoints, then take \\(\\Delta t\\to 0\\) for instantaneous values; read secant and tangent slopes when graphs are given.",
      "判断加速度是否恒定：恒定则用三个匀加速方程，否则回到导数或分段图像。 · Decide whether acceleration is constant: use the three constant-acceleration equations if it is, otherwise return to derivatives or piecewise graphs.",
      "非匀加速：若给出 \\(a(t)\\)，积分一次得 \\(v(t)\\)、再积分一次得 \\(x(t)\\)，每次都用初始条件定常数，并求导回检；分段函数要在交界处匹配。 · Nonuniform acceleration: if \\(a(t)\\) is given, integrate once for \\(v(t)\\) and again for \\(x(t)\\), fixing constants with initial conditions and checking by differentiation; match piecewise solutions at their boundaries.",
      "换参考系：写出 \\(x'=x-ut\\)、\\(v'=v-u\\)，检查 \\(u\\) 的符号与 \\(a'=a\\)，最后用极限和单位检验。 · Change frames: write \\(x'=x-ut\\) and \\(v'=v-u\\), check the sign of \\(u\\) and \\(a'=a\\), and verify with limits and units."
    ],
    "checks": [
      "点对象模型忽略了哪些信息？在什么情况下这些信息会变得重要？ · What information does the object model ignore, and when does that information become important?",
      "位移为零时路程一定为零吗？此时平均速度与平均速率各是多少？ · If the displacement is zero, must the distance be zero? What are the average velocity and average speed then?",
      "为什么平均加速度对变加速运动也有定义？它在什么条件下等于瞬时加速度？ · Why is average acceleration defined even for nonconstant acceleration, and when does it equal the instantaneous acceleration?",
      "在 \\(x\\text{-}t\\) 图上，如何从两点割线的斜率过渡到某点的切线斜率？ · On an \\(x\\text{-}t\\) graph, how does the slope of a two-point secant become the tangent slope at a point?",
      "若已知 \\(x(t)\\)，如何得到任意时刻的 \\(v(t)\\) 与 \\(a(t)\\)？反过来，已知 \\(a(t)\\) 时如何还原速度和位置？ · Given \\(x(t)\\), how do you obtain \\(v(t)\\) and \\(a(t)\\) at any instant, and given \\(a(t)\\), how do you recover velocity and position?",
      "地面观察者与列车观察者测得杯子的速度不同，这是否意味着物理规律不同？ · The ground observer and the train observer measure different cup velocities; does that mean the laws of physics differ?",
      "伽利略变换 \\(x'=x-ut\\) 中，\\(u\\) 的符号应如何确定？若参考系在加速，这个变换还能用吗？ · How is the sign of \\(u\\) determined in \\(x'=x-ut\\), and can the transformation be used if the frame accelerates?",
      "已知 \\(a(t)=kt\\)，物体从静止、\\(x_0=0\\) 出发，如何求 \\(v(t)\\) 与 \\(x(t)\\)？积分常数由什么确定？ · Given \\(a(t)=kt\\) and an object starting from rest at \\(x_0=0\\), how do you find \\(v(t)\\) and \\(x(t)\\), and what fixes the constants?",
      "为什么 \\(a\\text{-}t\\) 图的面积给 \\(\\Delta v\\)，而 \\(v\\text{-}t\\) 图的面积给 \\(\\Delta x\\)？轴下方面积如何处理？ · Why does the area under the \\(a\\text{-}t\\) graph give \\(\\Delta v\\) while the area under the \\(v\\text{-}t\\) graph gives \\(\\Delta x\\), and how is area below the axis handled?",
      "三个匀加速方程能否由积分得到？在什么条件下成立？ · Can the three constant-acceleration equations be obtained by integration, and under what condition do they hold?"
    ],
    "vocabulary": [
      {
        "termZh": "位置",
        "termEn": "position",
        "defZh": "物体相对参考系原点的坐标，是矢量。",
        "defEn": "The vector coordinate of an object relative to the origin of a reference frame."
      },
      {
        "termZh": "位移",
        "termEn": "displacement",
        "defZh": "位置的变化 \\(\\Delta x=x_f-x_i\\)，只由初末位置决定，是矢量。",
        "defEn": "The change in position \\(\\Delta x=x_f-x_i\\), determined only by the initial and final positions; a vector."
      },
      {
        "termZh": "路程",
        "termEn": "distance",
        "defZh": "物体实际运动轨迹的长度，是标量。",
        "defEn": "The length of the actual path traveled; a scalar."
      },
      {
        "termZh": "平均速度",
        "termEn": "average velocity",
        "defZh": "位移除以时间间隔，\\(\\bar v=\\dfrac{\\Delta x}{\\Delta t}\\)，对任意运动成立。",
        "defEn": "Displacement divided by the time interval, \\(\\bar v=\\dfrac{\\Delta x}{\\Delta t}\\), defined for any motion."
      },
      {
        "termZh": "平均加速度",
        "termEn": "average acceleration",
        "defZh": "速度变化除以时间间隔，\\(\\bar a=\\dfrac{\\Delta v}{\\Delta t}\\)，对任意运动成立。",
        "defEn": "Velocity change divided by the time interval, \\(\\bar a=\\dfrac{\\Delta v}{\\Delta t}\\), defined for any motion."
      },
      {
        "termZh": "瞬时速度",
        "termEn": "instantaneous velocity",
        "defZh": "时间间隔趋于零时平均速度的极限，\\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)。",
        "defEn": "The limit of average velocity as the time interval approaches zero, \\(v=\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)."
      },
      {
        "termZh": "参考系",
        "termEn": "reference frame",
        "defZh": "由观察者、原点、坐标轴方向和时钟共同定义的测量框架。",
        "defEn": "A measurement framework defined by an observer, an origin, coordinate-axis directions, and a clock."
      },
      {
        "termZh": "相对速度",
        "termEn": "relative velocity",
        "defZh": "一个物体相对另一参考系或另一物体的速度，等于二者速度的矢量差。",
        "defEn": "The velocity of one object relative to another frame or object, equal to the vector difference of their velocities."
      }
    ]
  },
  "1.2": {
    "id": "mech/mech-u1/1.2",
    "subject": "mech",
    "chapterId": "mech-u1",
    "unitCode": "1",
    "unitTitleZh": "运动学",
    "unitTitleEn": "Kinematics",
    "code": "1.2",
    "titleZh": "二维运动学",
    "titleEn": "Kinematics in Two Dimensions",
    "layer": "ap",
    "summary": "二维与三维运动用带方向的矢量描述；箭头长度表示大小、朝向表示方向，分量与单位矢量把几何转化为代数，各分量可用同一时间分别求解，参考系变换则联系不同观察者的测量。 · Two- and three-dimensional motion is described by vectors; arrow length represents magnitude and orientation represents direction, components and unit vectors turn geometry into algebra, each component can be solved separately with a common time, and frame transformations connect measurements made by different observers.",
    "learningObjectives": [
      "能区分标量与矢量，并用大小和方向描述矢量，用大小单独描述标量。 · Distinguish scalar and vector quantities, describing a vector by magnitude and direction and a scalar by magnitude alone.",
      "能把矢量画成按比例缩放的箭头，说明箭头长度表示大小、箭头朝向表示方向，并能从图中读出分量。 · Draw a vector as a scaled arrow, explain that its length represents magnitude and its orientation represents direction, and read components from the drawing.",
      "能用单位矢量 \\(\\hat i,\\hat j,\\hat k\\) 表示二维或三维矢量，并在分量形式与“大小加方向”形式之间转换。 · Express two- or three-dimensional vectors in unit-vector notation \\(\\hat i,\\hat j,\\hat k\\) and convert between component form and magnitude-direction form.",
      "能用作图法和分量法完成矢量加法与减法，并解释两种方法为什么等价。 · Add and subtract vectors graphically and by components, and explain why the two methods agree.",
      "能把二维运动分解为相互独立的分量，并用分量方程分析抛体运动。 · Resolve two-dimensional motion into independent components and analyze projectile motion with component equations.",
      "能描述不同惯性参考系中的测量，并用伽利略变换在参考系之间转换位置与速度。 · Describe measurements in different inertial frames and convert positions and velocities between frames with the Galilean transformation.",
      "能合成物体速度与参考系速度，解决船与河流、风与飞机等相对速度问题。 · Combine an object's velocity with a frame's velocity to solve relative-velocity problems such as boats in rivers and aircraft in wind.",
      "能把二维或三维运动分解为沿各坐标轴的一维运动，用同一时间联系各分量，并说明这种分解何时成立。 · Resolve two- or three-dimensional motion into one-dimensional motions along the coordinate axes, link the components with a common time, and explain when this separation is valid.",
      "能分析各方向加速度不同、且可能随时间变化的运动：对每个分量分别求导或积分，再合成位置、速度与加速度。 · Analyze motion whose acceleration differs from dimension to dimension and may change with time: differentiate or integrate each component separately, then recombine position, velocity, and acceleration."
    ],
    "essentialKnowledge": [
      "标量只有大小，例如路程、速率、质量、时间和能量；矢量既有大小又有方向，例如位置、位移、速度、加速度和力。 · A scalar has magnitude only, such as distance, speed, mass, time, and energy; a vector has both magnitude and direction, such as position, displacement, velocity, acceleration, and force.",
      "矢量可以用箭头直观表示：箭头长度按选定比例表示大小，箭头朝向表示方向，箭头尖端表示矢量的终点；反向箭头表示相反方向。 · A vector can be modeled by an arrow: its length on a chosen scale represents magnitude, its orientation represents direction, and its tip marks the vector's endpoint; a reversed arrow represents the opposite direction.",
      "单位矢量记法把矢量写成 \\(\\vec A=A_x\\hat i+A_y\\hat j+A_z\\hat k\\)，其中 \\(\\hat i,\\hat j,\\hat k\\) 是沿 \\(x,y,z\\) 轴正方向的单位矢量，分量 \\(A_x,A_y,A_z\\) 是带正负号的标量。 · Unit-vector notation writes a vector as \\(\\vec A=A_x\\hat i+A_y\\hat j+A_z\\hat k\\), where \\(\\hat i,\\hat j,\\hat k\\) are unit vectors along the positive \\(x,y,z\\) axes and the components \\(A_x,A_y,A_z\\) are signed scalars.",
      "由分量求大小：\\(A=\\sqrt{A_x^{2}+A_y^{2}+A_z^{2}}\\)；二维方向角由 \\(\\tan\\theta=\\dfrac{A_y}{A_x}\\) 给出，但必须结合分量符号判断象限。 · Magnitude from components is \\(A=\\sqrt{A_x^{2}+A_y^{2}+A_z^{2}}\\); in two dimensions the direction angle satisfies \\(\\tan\\theta=\\dfrac{A_y}{A_x}\\), but the signs of the components must be used to choose the quadrant.",
      "三维方向也可用方向余弦表示：\\(\\cos\\theta_x=\\dfrac{A_x}{A}\\)、\\(\\cos\\theta_y=\\dfrac{A_y}{A}\\)、\\(\\cos\\theta_z=\\dfrac{A_z}{A}\\)，其中 \\(\\theta_x,\\theta_y,\\theta_z\\) 是与各坐标轴的夹角。 · Three-dimensional direction can be given by direction cosines: \\(\\cos\\theta_x=\\dfrac{A_x}{A}\\), \\(\\cos\\theta_y=\\dfrac{A_y}{A}\\), and \\(\\cos\\theta_z=\\dfrac{A_z}{A}\\), where \\(\\theta_x,\\theta_y,\\theta_z\\) are the angles with the coordinate axes.",
      "矢量相加遵循平行四边形或首尾相接法则；直角坐标中逐个分量相加：\\((\\vec A+\\vec B)_x=A_x+B_x\\)，其他分量同理。矢量减法等于加上相反矢量，\\(\\vec A-\\vec B=\\vec A+(-\\vec B)\\)。 · Vectors add by the parallelogram or tip-to-tail rule; in Cartesian coordinates the components add separately: \\((\\vec A+\\vec B)_x=A_x+B_x\\), and likewise for the other components. Subtraction is addition of the opposite vector, \\(\\vec A-\\vec B=\\vec A+(-\\vec B)\\).",
      "速度变化矢量 \\(\\Delta\\vec v=\\vec v_f-\\vec v_i\\) 从初速度箭头的尖端指向末速度箭头的尖端（把两箭头起点放在同一点时）；平均加速度 \\(\\bar{\\vec a}=\\dfrac{\\Delta\\vec v}{\\Delta t}\\) 与 \\(\\Delta\\vec v\\) 同向。 · The velocity-change vector \\(\\Delta\\vec v=\\vec v_f-\\vec v_i\\) points from the tip of the initial velocity arrow to the tip of the final velocity arrow when both are drawn from a common origin; average acceleration \\(\\bar{\\vec a}=\\dfrac{\\Delta\\vec v}{\\Delta t}\\) points along \\(\\Delta\\vec v\\).",
      "二维或三维运动用位置矢量 \\(\\vec r=x\\hat i+y\\hat j+z\\hat k\\) 描述，\\(\\vec v=\\dfrac{\\mathrm{d}\\vec r}{\\mathrm{d}t}\\)、\\(\\vec a=\\dfrac{\\mathrm{d}\\vec v}{\\mathrm{d}t}\\)；对时间求导逐分量进行，因此每个分量都服从一维运动学关系。只要各分量的加速度互不影响，就可以把运动分解为沿各坐标轴的一维运动，并用同一个时间 \\(t\\) 联系。 · Two- or three-dimensional motion is described by the position vector \\(\\vec r=x\\hat i+y\\hat j+z\\hat k\\), with \\(\\vec v=\\dfrac{\\mathrm{d}\\vec r}{\\mathrm{d}t}\\) and \\(\\vec a=\\dfrac{\\mathrm{d}\\vec v}{\\mathrm{d}t}\\); differentiation with respect to time acts component by component, so each component obeys one-dimensional kinematic relations. As long as the acceleration components do not affect one another, the motion can be separated into one-dimensional motions along the coordinate axes, linked by the same time \\(t\\).",
      "三维轨迹是空间曲线，可以投影到 \\(xy\\)、\\(xz\\)、\\(yz\\) 平面分别观察；每个投影都是一条二维轨迹，三个投影共用同一时间参数，合起来才给出空间中的实际路径。 · A three-dimensional trajectory is a space curve that can be projected onto the \\(xy\\), \\(xz\\), and \\(yz\\) planes; each projection is a two-dimensional trajectory, and all three projections share the same time parameter and together give the actual path in space.",
      "各方向的加速度可以不同，也可以随时间变化：\\(a_x(t)\\)、\\(a_y(t)\\)、\\(a_z(t)\\) 之间没有必须相等或恒定的关系。某个分量只有在它的加速度于该时间区间内为常量时才能使用匀加速方程；否则必须对该分量积分或读图。 · The accelerations in different dimensions may differ and may change with time: \\(a_x(t)\\), \\(a_y(t)\\), and \\(a_z(t)\\) need not be equal or constant. A component may use the constant-acceleration equations only if its acceleration is constant over the interval; otherwise integrate that component or use its graph.",
      "分量分解成立的前提是“解耦”：一个方向的加速度只由该方向的位置、速度或时间决定，不依赖于另一方向的坐标或速度。若 \\(a_x\\) 依赖于 \\(y\\)，则 \\(x\\) 与 \\(y\\) 的方程耦合，不能当作两个独立的一维问题。 · Component separation requires decoupling: the acceleration in one dimension depends only on that dimension's position, velocity, or time, not on another dimension's coordinate or velocity. If \\(a_x\\) depends on \\(y\\), the \\(x\\) and \\(y\\) equations are coupled and cannot be treated as two independent one-dimensional problems.",
      "非匀加速的分量运动通过逐分量积分还原：\\(v_x(t)=v_{0x}+\\int_{0}^{t}a_x(t')\\,\\mathrm{d}t'\\)、\\(x(t)=x_0+\\int_{0}^{t}v_x(t')\\,\\mathrm{d}t'\\)，\\(y,z\\) 分量同理；每个分量有自己的初始条件。 · Nonuniform component motion is recovered by integrating each component: \\(v_x(t)=v_{0x}+\\int_{0}^{t}a_x(t')\\,\\mathrm{d}t'\\) and \\(x(t)=x_0+\\int_{0}^{t}v_x(t')\\,\\mathrm{d}t'\\), with the same procedure for \\(y\\) and \\(z\\); each component has its own initial condition.",
      "抛体运动是 \\(a_x=0\\)、\\(a_y=-g\\) 的特例：水平方向匀速，竖直方向匀加速；最高点竖直速度为零而水平速度不为零，轨迹是抛物线。 · Projectile motion is the special case \\(a_x=0\\), \\(a_y=-g\\): horizontal motion is uniform and vertical motion has constant acceleration; at the top the vertical velocity is zero while the horizontal velocity is not, and the path is a parabola.",
      "惯性参考系之间以恒定速度相对运动。同一物体在不同惯性系中的位置和速度可以不同，但加速度相同，物理规律形式相同；观察者的参考系选择决定测得速度的方向和大小。 · Inertial frames move at constant velocity relative to one another. The same object can have different positions and velocities in different inertial frames, but its acceleration and the form of the physical laws are the same; the observer's choice of frame determines the measured direction and magnitude of velocity.",
      "伽利略变换把一个惯性系的测量换到另一个惯性系：若新系相对旧系速度为 \\(\\vec u\\)，则 \\(\\vec r'=\\vec r-\\vec u t\\)、\\(\\vec v'=\\vec v-\\vec u\\)、\\(\\vec a'=\\vec a\\)（两系原点在 \\(t=0\\) 重合）。 · The Galilean transformation converts measurements from one inertial frame to another: if the new frame moves at velocity \\(\\vec u\\) relative to the old one, then \\(\\vec r'=\\vec r-\\vec u t\\), \\(\\vec v'=\\vec v-\\vec u\\), and \\(\\vec a'=\\vec a\\), with the origins coinciding at \\(t=0\\).",
      "相对速度按矢量合成：\\(\\vec v_{A/C}=\\vec v_{A/B}+\\vec v_{B/C}\\)。船相对地面的速度等于船相对水的速度加水相对地面的速度；只有各速度共线时才能直接把大小相加或相减。 · Relative velocities compose as vectors: \\(\\vec v_{A/C}=\\vec v_{A/B}+\\vec v_{B/C}\\). A boat's velocity relative to the ground equals its velocity relative to the water plus the water's velocity relative to the ground; magnitudes may be added or subtracted directly only when the velocities are collinear.",
      "船头指向与实际航迹不同：船头正对岸时，水流使合速度偏向下游；若要相对地面垂直过河，船头必须偏向上游，使横向分量抵消水流。 · A boat's heading differs from its actual course: pointing the bow straight across lets the current carry the boat downstream; to cross perpendicular to the ground frame, the bow must angle upstream so that the cross-stream component cancels the current."
    ],
    "definition": "二维与三维运动学（kinematics in two or three dimensions）用矢量描述空间中的位置、速度和加速度。标量只有大小，矢量既有大小又有方向；矢量可以画成箭头，箭头长度按比例表示大小，箭头朝向表示方向。任一点的位置可写成 \\(\\vec r=x\\hat i+y\\hat j+z\\hat k\\)，其中 \\(\\hat i,\\hat j,\\hat k\\) 是沿坐标轴正方向的单位矢量，\\(x,y,z\\) 是带符号的分量。由分量可求大小 \\(A=\\sqrt{A_x^{2}+A_y^{2}+A_z^{2}}\\) 和方向；矢量相加时分量分别相加。对抛体运动，水平分量匀速、竖直分量以 \\(g\\) 加速，两个分量共用同一时间。一般情况下，三个方向的加速度可以不同，甚至可以随时间变化；此时对每个分量分别求导或积分，再用同一时间合成。观察者换到另一个以恒定速度 \\(\\vec u\\) 运动的惯性系时，位置和速度按 \\(\\vec r'=\\vec r-\\vec u t\\)、\\(\\vec v'=\\vec v-\\vec u\\) 变换，加速度不变；相对速度满足 \\(\\vec v_{A/C}=\\vec v_{A/B}+\\vec v_{B/C}\\)。 · Two- or three-dimensional kinematics describes position, velocity, and acceleration in space using vectors. A scalar has magnitude only, while a vector has both magnitude and direction; a vector can be drawn as an arrow whose length on a chosen scale gives the magnitude and whose orientation gives the direction. The position of a point is \\(\\vec r=x\\hat i+y\\hat j+z\\hat k\\), where \\(\\hat i,\\hat j,\\hat k\\) are unit vectors along the positive coordinate axes and \\(x,y,z\\) are signed components. The magnitude follows from \\(A=\\sqrt{A_x^{2}+A_y^{2}+A_z^{2}}\\), direction follows from the components, and vectors add component by component. For projectile motion the horizontal component is uniform while the vertical component accelerates at \\(g\\), and both share the same time. In general the acceleration components may differ and may themselves change with time; differentiate or integrate each component separately, then combine them with the common time. When an observer changes to another inertial frame moving at constant velocity \\(\\vec u\\), positions and velocities transform as \\(\\vec r'=\\vec r-\\vec u t\\) and \\(\\vec v'=\\vec v-\\vec u\\), while acceleration is unchanged; relative velocities satisfy \\(\\vec v_{A/C}=\\vec v_{A/B}+\\vec v_{B/C}\\).",
    "intuition": "把矢量想成一支“有方向的尺子”：长度是大小，指向是方向，换比例尺只改变画出的长度，不改变矢量本身。二维或三维问题最稳的解法是“先分解、再分别算、最后合成”：水平与竖直像两条互不干扰的一维运动，只用同一个时间相连。各方向的加速度可以不同，也可以随时间变化；此时分别对每个分量求导或积分，再在每一时刻合成。换参考系则像把整张坐标纸以恒定速度拖动：所有位置和速度都减去参考系的速度，但加速度不变。船在河中也是如此：船头给出船相对水的速度，水流给出水相对地面的速度，二者矢量相加才是船相对地面的航迹。 · Think of a vector as a ruler with an arrowhead: its length is the magnitude and its pointing is the direction; changing the drawing scale changes only the drawn length, not the vector. The safest way to solve a two- or three-dimensional problem is to resolve it, compute each component separately, then recombine: horizontal and vertical motions behave like two independent one-dimensional motions linked only by the same time. The acceleration components may differ and may change with time; in that case differentiate or integrate each component separately, then recombine them at each instant. Changing frames is like dragging the whole coordinate grid at constant velocity: every position and velocity is reduced by the frame velocity, but acceleration is unchanged. The same idea applies to a boat in a river: the heading gives the boat's velocity relative to the water, the current gives the water's velocity relative to the ground, and their vector sum is the boat's actual course over the ground.",
    "formulas": [
      {
        "latex": "\\vec A=A_x\\hat i+A_y\\hat j+A_z\\hat k",
        "note": "单位矢量记法；\\(\\hat i,\\hat j,\\hat k\\) 分别沿 \\(x,y,z\\) 轴正方向。 · Unit-vector notation; \\(\\hat i,\\hat j,\\hat k\\) point along the positive \\(x,y,z\\) axes."
      },
      {
        "latex": "A_x=A\\cos\\theta,\\quad A_y=A\\sin\\theta",
        "note": "二维分解，\\(\\theta\\) 从 \\(+x\\) 轴量起，分量符号由象限决定。 · Two-dimensional resolution with \\(\\theta\\) measured from the \\(+x\\) axis; the signs follow from the quadrant."
      },
      {
        "latex": "A=\\sqrt{A_x^{2}+A_y^{2}+A_z^{2}}",
        "note": "由分量求矢量大小；大小非负。 · Magnitude from components; it is never negative."
      },
      {
        "latex": "\\tan\\theta=\\dfrac{A_y}{A_x}",
        "note": "二维方向角；先用分量符号判断象限，再取反正切。 · Two-dimensional direction angle; use the component signs to choose the quadrant before taking the inverse tangent."
      },
      {
        "latex": "\\cos\\theta_x=\\dfrac{A_x}{A},\\quad \\cos\\theta_y=\\dfrac{A_y}{A},\\quad \\cos\\theta_z=\\dfrac{A_z}{A}",
        "note": "三维方向余弦，\\(\\theta_x,\\theta_y,\\theta_z\\) 是与各坐标轴的夹角。 · Three-dimensional direction cosines, where \\(\\theta_x,\\theta_y,\\theta_z\\) are the angles with the coordinate axes."
      },
      {
        "latex": "\\vec r=x\\hat i+y\\hat j+z\\hat k,\\quad \\vec v=\\dfrac{\\mathrm{d}\\vec r}{\\mathrm{d}t},\\quad \\vec a=\\dfrac{\\mathrm{d}\\vec v}{\\mathrm{d}t}",
        "note": "位置、速度与加速度的矢量定义。 · Vector definitions of position, velocity, and acceleration."
      },
      {
        "latex": "a_x=\\dfrac{\\mathrm{d}v_x}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}^{2}x}{\\mathrm{d}t^{2}},\\quad a_y=\\dfrac{\\mathrm{d}v_y}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}},\\quad a_z=\\dfrac{\\mathrm{d}v_z}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}^{2}z}{\\mathrm{d}t^{2}}",
        "note": "逐分量求导：每个方向的加速度只由该方向的速度变化决定。 · Componentwise differentiation: each acceleration component comes from the velocity change in that dimension."
      },
      {
        "latex": "\\vec r(t)=\\vec r_0+\\vec v_0t+\\dfrac{1}{2}\\vec a t^{2}",
        "note": "常矢量加速度的三维位置公式；使用时按分量展开。 · Three-dimensional position for constant vector acceleration; expand it component by component."
      },
      {
        "latex": "x=x_0+v_{0x}t+\\dfrac{1}{2}a_xt^{2},\\quad y=y_0+v_{0y}t+\\dfrac{1}{2}a_yt^{2},\\quad z=z_0+v_{0z}t+\\dfrac{1}{2}a_zt^{2}",
        "note": "三个分量各自的匀加速方程，共用同一时间；某分量加速度不恒定时不能套用。 · Constant-acceleration equation for each component, sharing the same time; do not use a component equation if that component's acceleration is not constant."
      },
      {
        "latex": "\\vec v(t)=\\vec v_0+\\int_{0}^{t}\\vec a(t')\\,\\mathrm{d}t',\\quad \\vec r(t)=\\vec r_0+\\int_{0}^{t}\\vec v(t')\\,\\mathrm{d}t'",
        "note": "一般（可非匀）矢量运动的积分还原；三个分量分别积分，各自用初始条件定常数。 · Integral recovery for general (possibly nonuniform) vector motion; integrate the three components separately and fix each constant with its initial condition."
      },
      {
        "latex": "x=x_0+v_{0x}t,\\quad y=y_0+v_{0y}t-\\dfrac{1}{2}gt^{2}",
        "note": "抛体运动的分量方程，取 \\(y\\) 轴向上。 · Projectile component equations with the \\(y\\) axis upward."
      },
      {
        "latex": "v_x=v_{0x},\\quad v_y=v_{0y}-gt",
        "note": "水平速度不变，竖直速度线性变化。 · Horizontal velocity is constant and vertical velocity changes linearly."
      },
      {
        "latex": "R=\\dfrac{v_0^{2}\\sin 2\\theta}{g}",
        "note": "平地、同高落点、无空气阻力时的射程；\\(45^\\circ\\) 最大。 · Range for level ground, equal launch and landing heights, and no air resistance; maximum at \\(45^\\circ\\)."
      },
      {
        "latex": "\\vec r'=\\vec r-\\vec u t",
        "note": "伽利略位置变换；新参考系相对旧参考系以恒定速度 \\(\\vec u\\) 运动，两原点在 \\(t=0\\) 重合。 · Galilean position transformation; the new frame moves at constant velocity \\(\\vec u\\) relative to the old frame, with coincident origins at \\(t=0\\)."
      },
      {
        "latex": "\\vec v'=\\vec v-\\vec u,\\quad \\vec a'=\\vec a",
        "note": "速度变换与加速度不变性；只适用于惯性系。 · Velocity transformation and acceleration invariance; valid only for inertial frames."
      },
      {
        "latex": "\\vec v_{A\\to C}=\\vec v_{A\\to B}+\\vec v_{B\\to C}",
        "note": "相对速度合成；A 相对 C 等于 A 相对 B 加 B 相对 C。 · Relative-velocity composition: A relative to C equals A relative to B plus B relative to C."
      },
      {
        "latex": "\\vec v_{BG}=\\vec v_{BW}+\\vec v_{WG}",
        "note": "船—水—地模型：船相对地面的速度等于船相对水加水流相对地面。 · Boat-water-ground model: the boat's velocity relative to the ground equals its velocity relative to the water plus the water's velocity relative to the ground."
      }
    ],
    "derivationNotes": [
      {
        "from": "箭头模型 · Arrow model",
        "to": "分量 · Components",
        "note": "把箭头投影到坐标轴上：\\(A_x=A\\cos\\theta\\)、\\(A_y=A\\sin\\theta\\)，其中 \\(\\theta\\) 从 \\(+x\\) 轴量起；投影到负半轴时分量为负。 · Project the arrow onto the axes: \\(A_x=A\\cos\\theta\\) and \\(A_y=A\\sin\\theta\\), with \\(\\theta\\) measured from the \\(+x\\) axis; projections onto a negative axis give negative components."
      },
      {
        "from": "分量 · Components",
        "to": "大小与方向 · Magnitude and direction",
        "note": "分量互相垂直，用勾股定理得 \\(A=\\sqrt{A_x^{2}+A_y^{2}+A_z^{2}}\\)；二维中 \\(\\tan\\theta=\\dfrac{A_y}{A_x}\\)，再根据 \\(A_x,A_y\\) 的符号把角放回正确象限。 · The components are perpendicular, so the Pythagorean theorem gives \\(A=\\sqrt{A_x^{2}+A_y^{2}+A_z^{2}}\\); in two dimensions \\(\\tan\\theta=\\dfrac{A_y}{A_x}\\), and the signs of \\(A_x,A_y\\) place the angle in the correct quadrant."
      },
      {
        "from": "矢量加法 · Vector addition",
        "to": "分量相加 · Adding components",
        "note": "首尾相接图中，合矢量在 \\(x\\) 方向的投影等于各矢量 \\(x\\) 投影之和，因此 \\((\\vec A+\\vec B)_x=A_x+B_x\\)；\\(y,z\\) 分量同理，所以作图法与分量法等价。 · In a tip-to-tail diagram, the projection of the resultant on \\(x\\) equals the sum of the individual \\(x\\) projections, so \\((\\vec A+\\vec B)_x=A_x+B_x\\); the same holds for \\(y\\) and \\(z\\), making the graphical and component methods equivalent."
      },
      {
        "from": "匀加速分量 · Constant acceleration components",
        "to": "抛体方程 · Projectile equations",
        "note": "取 \\(a_x=0\\)、\\(a_y=-g\\)，分别积分得 \\(v_x=v_{0x}\\)、\\(v_y=v_{0y}-gt\\)，再积分得 \\(x=x_0+v_{0x}t\\)、\\(y=y_0+v_{0y}t-\\dfrac{1}{2}gt^{2}\\)；两式共用同一 \\(t\\)。 · Set \\(a_x=0\\) and \\(a_y=-g\\), integrate to get \\(v_x=v_{0x}\\) and \\(v_y=v_{0y}-gt\\), then integrate again to get \\(x=x_0+v_{0x}t\\) and \\(y=y_0+v_{0y}t-\\dfrac{1}{2}gt^{2}\\); both equations share the same \\(t\\)."
      },
      {
        "from": "空间分量 · Spatial components",
        "to": "三维位置与速度 · 3D position and velocity",
        "note": "将 \\(\\vec r=x\\hat i+y\\hat j+z\\hat k\\) 对时间求导，单位矢量不变，得 \\(\\vec v=v_x\\hat i+v_y\\hat j+v_z\\hat k\\) 与 \\(\\vec a=a_x\\hat i+a_y\\hat j+a_z\\hat k\\)；三个分量各自满足一维关系。 · Differentiate \\(\\vec r=x\\hat i+y\\hat j+z\\hat k\\) with respect to time; the unit vectors are constant, giving \\(\\vec v=v_x\\hat i+v_y\\hat j+v_z\\hat k\\) and \\(\\vec a=a_x\\hat i+a_y\\hat j+a_z\\hat k\\), and each of the three components satisfies one-dimensional relations."
      },
      {
        "from": "独立分量 · Independent components",
        "to": "共同时间 · Common time",
        "note": "每个分量方程都含同一个 \\(t\\)，可用它把 \\(x,y,z\\) 联系起来；消去 \\(t\\) 可得轨迹的投影方程。分量独立不等于时间独立。 · Each component equation contains the same \\(t\\), which links \\(x,y,z\\); eliminating \\(t\\) gives the projected trajectory equations. Independent components do not mean independent times."
      },
      {
        "from": "非匀加速分量 · Nonuniform components",
        "to": "逐分量积分 · Componentwise integration",
        "note": "若 \\(a_x(t)\\)、\\(a_y(t)\\)、\\(a_z(t)\\) 不是常量，对每个分量分别积分：\\(v_x=v_{0x}+\\int a_x\\,\\mathrm{d}t\\)，\\(x=x_0+\\int v_x\\,\\mathrm{d}t\\)，其他分量同理；积分常数由各方向的初始条件确定。 · If \\(a_x(t)\\), \\(a_y(t)\\), and \\(a_z(t)\\) are not constant, integrate each component separately: \\(v_x=v_{0x}+\\int a_x\\,\\mathrm{d}t\\) and \\(x=x_0+\\int v_x\\,\\mathrm{d}t\\), with the same procedure for the other components; each dimension's initial conditions fix its constants."
      },
      {
        "from": "三维轨迹 · Three-dimensional trajectory",
        "to": "坐标平面投影 · Coordinate-plane projections",
        "note": "空间曲线在 \\(xy\\) 平面的投影由 \\((x(t),y(t))\\) 给出，其他平面同理；三个投影共用时间参数，任一投影都不足以单独确定三维路径。 · The projection of the space curve on the \\(xy\\) plane is given by \\((x(t),y(t))\\), and likewise for the other planes; the three projections share the time parameter, and no single projection determines the three-dimensional path."
      },
      {
        "from": "射程条件 · Range condition",
        "to": "射程公式 · Range formula",
        "note": "令 \\(y=y_0\\) 得飞行时间 \\(t=\\dfrac{2v_0\\sin\\theta}{g}\\)，代入水平方程得 \\(R=v_0\\cos\\theta\\,t=\\dfrac{v_0^{2}\\sin 2\\theta}{g}\\)；\\(\\sin 2\\theta\\) 在 \\(2\\theta=90^\\circ\\) 时最大。 · Setting \\(y=y_0\\) gives the flight time \\(t=\\dfrac{2v_0\\sin\\theta}{g}\\); substituting into the horizontal equation gives \\(R=v_0\\cos\\theta\\,t=\\dfrac{v_0^{2}\\sin 2\\theta}{g}\\), and \\(\\sin 2\\theta\\) is largest at \\(2\\theta=90^\\circ\\)."
      },
      {
        "from": "伽利略位置变换 · Galilean position transformation",
        "to": "速度与加速度 · Velocity and acceleration",
        "note": "对 \\(\\vec r'=\\vec r-\\vec u t\\) 求导得 \\(\\vec v'=\\vec v-\\vec u\\)；再求导，因 \\(\\vec u\\) 恒定，\\(\\vec a'=\\vec a\\)。两个惯性系共享同一时间 \\(t\\)。 · Differentiate \\(\\vec r'=\\vec r-\\vec u t\\) to get \\(\\vec v'=\\vec v-\\vec u\\); differentiating again with constant \\(\\vec u\\) gives \\(\\vec a'=\\vec a\\). Inertial frames share the same time \\(t\\)."
      },
      {
        "from": "相对速度定义 · Definition of relative velocity",
        "to": "矢量合成 · Vector composition",
        "note": "记 \\(\\vec v_{A/B}=\\vec v_A-\\vec v_B\\)，则 \\(\\vec v_{A/B}+\\vec v_{B/C}=(\\vec v_A-\\vec v_B)+(\\vec v_B-\\vec v_C)=\\vec v_A-\\vec v_C=\\vec v_{A/C}\\)；只有共线时才能把大小直接相加。 · With \\(\\vec v_{A/B}=\\vec v_A-\\vec v_B\\), \\(\\vec v_{A/B}+\\vec v_{B/C}=(\\vec v_A-\\vec v_B)+(\\vec v_B-\\vec v_C)=\\vec v_A-\\vec v_C=\\vec v_{A/C}\\); magnitudes add directly only when the vectors are collinear."
      }
    ],
    "conditions": [
      "箭头长度必须按统一比例尺绘制；方向角要注明从哪条轴量起，通常从 \\(+x\\) 轴逆时针量。 · Arrow lengths must use a consistent scale, and the reference axis for angles must be stated, usually measured counterclockwise from the \\(+x\\) axis.",
      "单位矢量 \\(\\hat i,\\hat j,\\hat k\\) 对应正交坐标轴；坐标轴一旦选定就保持固定，分量符号由投影方向决定。 · The unit vectors \\(\\hat i,\\hat j,\\hat k\\) correspond to orthogonal axes; once chosen, the axes stay fixed and component signs follow the projection directions.",
      "矢量的分量与所选坐标系有关，但矢量本身与坐标系无关；换坐标轴会改变分量，不改变大小和方向。 · A vector's components depend on the chosen coordinates, but the vector itself does not; changing axes changes components, not magnitude or direction.",
      "抛体运动只受重力、忽略空气阻力，地面近似水平且重力恒定；射程公式还要求落点与抛出点同高。 · Projectile motion assumes only gravity, negligible air resistance, a level ground, and constant \\(g\\); the range formula also requires the landing point to be at the launch height.",
      "分量分解只在加速度分量互不依赖时成立；若一个方向的加速度依赖于另一方向的坐标或速度，方程耦合，需要联立求解。 · Component separation holds only when the acceleration components are mutually independent; if one dimension's acceleration depends on another dimension's coordinate or velocity, the equations are coupled and must be solved together.",
      "每个分量能否使用匀加速方程要分别判断：某分量的加速度恒定，不代表其他分量也恒定。 · Decide separately whether each component has constant acceleration: one component being constant does not make the others constant.",
      "对非匀加速的分量运动，积分时必须为每个方向保留自己的初始条件；不同方向的积分常数一般不同。 · For nonuniform component motion, keep each dimension's own initial conditions when integrating; the constants of integration generally differ from one dimension to another.",
      "伽利略变换只适用于相对速度恒定的惯性系，且相对速率远小于光速；加速参考系需要惯性力，不能直接套用。 · The Galilean transformation applies only to inertial frames with constant relative velocity much less than the speed of light; accelerating frames require fictitious forces and cannot use it directly.",
      "相对速度必须按矢量相加，不能把大小直接相加；船头方向、实际航迹和水流方向要分别标清。 · Relative velocities must be added as vectors, not by adding magnitudes; the heading, actual course, and current direction must be distinguished."
    ],
    "keyPoints": [
      "标量只有大小，矢量有大小和方向；速率是标量，速度是矢量。 · Scalars have magnitude only, while vectors have magnitude and direction; speed is a scalar and velocity is a vector.",
      "箭头长度按比例表示大小，朝向表示方向；箭头不是矢量本身，而是矢量的可视化模型。 · Arrow length on a scale represents magnitude and orientation represents direction; the arrow is a visual model of the vector, not the vector itself.",
      "单位矢量记法把几何分解为带符号的分量；大小由勾股定理给出，方向由分量与象限共同确定。 · Unit-vector notation turns geometry into signed components; magnitude comes from the Pythagorean theorem and direction from the components and quadrant.",
      "矢量相加可以首尾相接或按分量相加，两种方法给出同一合矢量。 · Vectors add tip-to-tail or component by component, and both methods give the same resultant.",
      "速度变化矢量从初速度尖端指向末速度尖端，平均加速度与它同向。 · The velocity-change vector points from the tip of the initial velocity to the tip of the final velocity, and average acceleration points along it.",
      "二维运动可拆成独立分量，抛体运动水平匀速、竖直匀加速，共用同一时间。 · Two-dimensional motion separates into independent components; projectile motion is uniform horizontally and uniformly accelerated vertically, sharing one time.",
      "换惯性系只改变位置和速度，不改变加速度；伽利略变换是低速极限。 · Changing inertial frames changes positions and velocities but not acceleration; the Galilean transformation is the low-speed limit.",
      "船头指向与实际航迹不同；合速度是船相对水的速度与水流速度的矢量和。 · A boat's heading differs from its actual course; the resultant velocity is the vector sum of the boat-relative-to-water velocity and the current.",
      "二维与三维运动都可分解为独立的一维分量；每个分量有自己的初速度、加速度和方程，所有分量共用同一时间。 · Two- and three-dimensional motion separates into independent one-dimensional components; each component has its own initial velocity, acceleration, and equation, and all components share the same time.",
      "各方向的加速度可以不同，也可以随时间变化；某方向匀速不代表其他方向也匀速。 · The acceleration components may differ and may change with time; uniform motion in one dimension does not imply uniform motion in another.",
      "非匀加速分量要逐分量积分，积分常数由各方向的初始条件确定，最后再合成矢量。 · Nonuniform components must be integrated one by one, with constants fixed by each dimension's initial conditions, before the vectors are recombined.",
    ],
    "misconceptions": [
      "认为矢量就是“带正负号的数”：负号只给出一维方向，二维或三维方向必须用箭头、角度或单位矢量描述。 · Thinking a vector is just a number with a sign: a sign gives direction only in one dimension, while two- or three-dimensional direction needs an arrow, angle, or unit vectors.",
      "把矢量的分量当作大小：分量可以为负，而矢量大小 \\(A=\\sqrt{A_x^{2}+A_y^{2}+A_z^{2}}\\) 永远非负。 · Treating a component as a magnitude: components may be negative, while the magnitude \\(A=\\sqrt{A_x^{2}+A_y^{2}+A_z^{2}}\\) is never negative.",
      "认为箭头长度可以随意画：箭头必须按统一比例尺绘制，否则无法从图上比较大小。 · Drawing arrows with arbitrary lengths: arrows must use a consistent scale, or their lengths cannot represent magnitudes.",
      "只写 \\(\\theta=\\arctan\\left(\\dfrac{A_y}{A_x}\\right)\\) 而不判断象限：例如 \\(A_x=-3,A_y=4\\) 的方向在第二象限，不是第四象限。 · Writing only \\(\\theta=\\arctan\\left(\\dfrac{A_y}{A_x}\\right)\\) without checking the quadrant: for \\(A_x=-3,A_y=4\\) the direction is in the second quadrant, not the fourth.",
      "把速率当作速度、把路程当作位移：速率和路程是标量，不能带方向。 · Confusing speed with velocity or distance with displacement: speed and distance are scalars and carry no direction.",
      "在非共线情形直接把速度大小相加：相对速度必须按矢量合成，三角形或分量法才能给出正确方向和大小。 · Adding speed magnitudes directly when the velocities are not collinear: relative velocity must be composed as vectors, using a triangle or components.",
      "认为船头正对岸就会垂直过河：水流会给船一个横向速度，实际航迹偏向下游。 · Assuming a boat pointing straight across will cross straight across: the current adds a cross-stream velocity, so the actual course drifts downstream.",
      "认为换参考系会改变物理规律或加速度：惯性系之间 \\(a'=a\\)，改变的只是位置和速度的测量值。 · Thinking a change of frame changes the laws or acceleration: between inertial frames \\(a'=a\\), and only measured positions and velocities change.",
      "把平地射程公式用于落点高度不同的情形：此时飞行时间由竖直位移重新确定，不能直接用 \\(R=\\dfrac{v_0^{2}\\sin 2\\theta}{g}\\)。 · Using the level-ground range formula when the landing height differs: the flight time must be found again from the vertical displacement.",
      "认为三维运动需要全新的方程：分解后每个分量仍是一维运动学，方程形式不变。 · Thinking three-dimensional motion needs entirely new equations: once resolved, each component is still one-dimensional kinematics with the same equation forms.",
      "认为各方向的加速度必须相同或必须恒定：不同方向可以有不同的、甚至随时间变化的加速度。 · Thinking all dimensions must share the same acceleration or a constant one: different dimensions may have different accelerations, and those accelerations may change with time.",
      "认为两个方向的运动永远独立：若一个方向的加速度依赖另一方向的坐标或速度，方程会耦合，不能分别求解。 · Thinking the dimensions are always independent: if one dimension's acceleration depends on another dimension's coordinate or velocity, the equations are coupled and cannot be solved separately.",
      "把 \\(x\\) 方向匀速误认为 \\(y\\) 方向也匀速：每个分量必须单独判断加速度是否为零、是否恒定。 · Mistaking uniform motion in \\(x\\) for uniform motion in \\(y\\): each component must be checked separately for zero or constant acceleration.",
    ],
    "examples": [
      {
        "title": "例 1 · 标量、矢量与箭头模型 · Example 1: Scalars, vectors, and the arrow model",
        "prompt": "徒步者从营地出发，向东走 \\(4.0\\,\\mathrm{km}\\)，再向北走 \\(3.0\\,\\mathrm{km}\\)，共用 \\(2.0\\,\\mathrm{h}\\)。把路程、位移、平均速率、平均速度分类并计算；用 \\(1\\,\\mathrm{cm}\\) 代表 \\(1\\,\\mathrm{km}\\) 画出位移箭头，求位移的大小与方向。 · A hiker leaves camp, walks \\(4.0\\,\\mathrm{km}\\) east, then \\(3.0\\,\\mathrm{km}\\) north, taking \\(2.0\\,\\mathrm{h}\\). Classify and calculate distance, displacement, average speed, and average velocity; draw the displacement arrow with \\(1\\,\\mathrm{cm}\\) representing \\(1\\,\\mathrm{km}\\), and find its magnitude and direction.",
        "steps": [
          "路程 \\(s=4.0+3.0=7.0\\,\\mathrm{km}\\)，是标量；平均速率 \\(v_{\\mathrm{avg}}=\\dfrac{7.0}{2.0}=3.5\\,\\mathrm{km\\,h^{-1}}\\)。 · The distance is \\(s=4.0+3.0=7.0\\,\\mathrm{km}\\), a scalar, and the average speed is \\(v_{\\mathrm{avg}}=\\dfrac{7.0}{2.0}=3.5\\,\\mathrm{km\\,h^{-1}}\\).",
          "位移是从起点指向终点的矢量：分量 \\(\\Delta x=+4.0\\,\\mathrm{km}\\)、\\(\\Delta y=+3.0\\,\\mathrm{km}\\)。 · Displacement is the vector from start to finish with components \\(\\Delta x=+4.0\\,\\mathrm{km}\\) and \\(\\Delta y=+3.0\\,\\mathrm{km}\\).",
          "大小 \\(\\Delta r=\\sqrt{4.0^{2}+3.0^{2}}=5.0\\,\\mathrm{km}\\)；方向 \\(\\theta=\\arctan\\left(\\dfrac{3.0}{4.0}\\right)=36.9^\\circ\\) 东偏北。 · The magnitude is \\(\\Delta r=\\sqrt{4.0^{2}+3.0^{2}}=5.0\\,\\mathrm{km}\\), and the direction is \\(\\theta=\\arctan\\left(\\dfrac{3.0}{4.0}\\right)=36.9^\\circ\\) north of east.",
          "按 \\(1\\,\\mathrm{cm}:1\\,\\mathrm{km}\\) 的比例，位移箭头长 \\(5.0\\,\\mathrm{cm}\\)，从起点指向东北方，与东方向成 \\(36.9^\\circ\\)；平均速度 \\(=\\dfrac{5.0}{2.0}=2.5\\,\\mathrm{km\\,h^{-1}}\\)，方向与位移相同。 · At a scale of \\(1\\,\\mathrm{cm}:1\\,\\mathrm{km}\\), the displacement arrow is \\(5.0\\,\\mathrm{cm}\\) long, points northeast at \\(36.9^\\circ\\) from east, and the average velocity is \\(\\dfrac{5.0}{2.0}=2.5\\,\\mathrm{km\\,h^{-1}}\\) in the same direction."
        ],
        "solution": "路程 \\(7.0\\,\\mathrm{km}\\)（标量），位移 \\(5.0\\,\\mathrm{km}\\)、东偏北 \\(36.9^\\circ\\)（矢量）；平均速率 \\(3.5\\,\\mathrm{km\\,h^{-1}}\\)（标量），平均速度 \\(2.5\\,\\mathrm{km\\,h^{-1}}\\)、同位移方向（矢量）。位移箭头长 \\(5.0\\,\\mathrm{cm}\\)。 · Distance is \\(7.0\\,\\mathrm{km}\\) (scalar), displacement is \\(5.0\\,\\mathrm{km}\\) at \\(36.9^\\circ\\) north of east (vector); average speed is \\(3.5\\,\\mathrm{km\\,h^{-1}}\\) (scalar) and average velocity is \\(2.5\\,\\mathrm{km\\,h^{-1}}\\) along the displacement (vector). The displacement arrow is \\(5.0\\,\\mathrm{cm}\\) long.",
        "solutionLatex": "\\Delta r=\\sqrt{4.0^{2}+3.0^{2}}=5.0\\,\\mathrm{km},\\quad \\theta=36.9^\\circ\\ \\text{N of E},\\quad \\bar v=2.5\\,\\mathrm{km\\,h^{-1}}"
      },
      {
        "title": "例 2 · 三维单位矢量 · Example 2: Three-dimensional unit vectors",
        "prompt": "矢量 \\(\\vec A=2.0\\hat i-3.0\\hat j+6.0\\hat k\\)（SI 单位）。求它的大小、单位矢量，以及与 \\(x,y,z\\) 轴的夹角余弦。 · A vector is \\(\\vec A=2.0\\hat i-3.0\\hat j+6.0\\hat k\\) in SI units. Find its magnitude, its unit vector, and the cosines of its angles with the \\(x,y,z\\) axes.",
        "steps": [
          "大小：\\(A=\\sqrt{2.0^{2}+(-3.0)^{2}+6.0^{2}}=\\sqrt{49}=7.0\\)。 · Magnitude: \\(A=\\sqrt{2.0^{2}+(-3.0)^{2}+6.0^{2}}=\\sqrt{49}=7.0\\).",
          "单位矢量：\\(\\hat A=\\dfrac{\\vec A}{A}=\\dfrac{2.0}{7.0}\\hat i-\\dfrac{3.0}{7.0}\\hat j+\\dfrac{6.0}{7.0}\\hat k\\)。 · Unit vector: \\(\\hat A=\\dfrac{\\vec A}{A}=\\dfrac{2.0}{7.0}\\hat i-\\dfrac{3.0}{7.0}\\hat j+\\dfrac{6.0}{7.0}\\hat k\\).",
          "方向余弦：\\(\\cos\\theta_x=\\dfrac{2.0}{7.0}=0.286\\)、\\(\\cos\\theta_y=-\\dfrac{3.0}{7.0}=-0.429\\)、\\(\\cos\\theta_z=\\dfrac{6.0}{7.0}=0.857\\)。 · Direction cosines: \\(\\cos\\theta_x=\\dfrac{2.0}{7.0}=0.286\\), \\(\\cos\\theta_y=-\\dfrac{3.0}{7.0}=-0.429\\), and \\(\\cos\\theta_z=\\dfrac{6.0}{7.0}=0.857\\).",
          "负的 \\(y\\) 分量表示矢量指向 \\(-y\\) 方向，因此与 \\(+y\\) 轴的夹角大于 \\(90^\\circ\\)；单位矢量的三个分量平方和应为 \\(1\\)，可用于检查。 · The negative \\(y\\) component means the vector points toward \\(-y\\), so its angle with the \\(+y\\) axis exceeds \\(90^\\circ\\); the squares of the unit-vector components should sum to \\(1\\), which checks the result."
        ],
        "solution": "\\(A=7.0\\)；\\(\\hat A=\\dfrac{2}{7}\\hat i-\\dfrac{3}{7}\\hat j+\\dfrac{6}{7}\\hat k\\)；方向余弦为 \\(0.286,-0.429,0.857\\)。 · \\(A=7.0\\); \\(\\hat A=\\dfrac{2}{7}\\hat i-\\dfrac{3}{7}\\hat j+\\dfrac{6}{7}\\hat k\\); the direction cosines are \\(0.286,-0.429,0.857\\).",
        "solutionLatex": "A=7.0,\\quad \\hat A=\\dfrac{2}{7}\\hat i-\\dfrac{3}{7}\\hat j+\\dfrac{6}{7}\\hat k,\\quad (\\cos\\theta_x,\\cos\\theta_y,\\cos\\theta_z)=(0.286,-0.429,0.857)"
      },
      {
        "title": "例 3 · 两个惯性系中的测量 · Example 3: Measurements in two inertial frames",
        "prompt": "列车以 \\(20\\,\\mathrm{m\\,s^{-1}}\\) 向东行驶，乘客在车厢内以 \\(2.0\\,\\mathrm{m\\,s^{-1}}\\) 向北走。取地面为 \\(S\\) 系、车厢为 \\(S'\\) 系，\\(t=0\\) 时两原点重合。(a) 写出乘客在 \\(S'\\) 与 \\(S\\) 中的位置函数；(b) 求地面观察者测得的速度大小与方向；(c) 两观察者测得的加速度是否相同？ · A train moves east at \\(20\\,\\mathrm{m\\,s^{-1}}\\) and a passenger walks north at \\(2.0\\,\\mathrm{m\\,s^{-1}}\\) relative to the train. Let the ground be frame \\(S\\) and the train be \\(S'\\), with origins coincident at \\(t=0\\). (a) Write the passenger's position in \\(S'\\) and \\(S\\); (b) find the speed and direction measured by the ground observer; (c) is the acceleration the same in both frames?",
        "steps": [
          "车厢系 \\(S'\\)：乘客只向北走，\\(\\vec r'=(0,2.0t)\\) m；地面系 \\(S\\)：车厢整体向东运动，\\(\\vec r=(20t,2.0t)\\) m。 · In the train frame \\(S'\\), the passenger only walks north, so \\(\\vec r'=(0,2.0t)\\) m; in the ground frame \\(S\\), the train moves east, so \\(\\vec r=(20t,2.0t)\\) m.",
          "速度：\\(\\vec v'=(0,2.0)\\,\\mathrm{m\\,s^{-1}}\\)，\\(\\vec v=(20,2.0)\\,\\mathrm{m\\,s^{-1}}\\)；这与 \\(t=0\\) 时的伽利略变换 \\(\\vec v=\\vec v'+\\vec u\\) 一致，其中 \\(u=20\\,\\mathrm{m\\,s^{-1}}\\) 向东。 · Velocities: \\(\\vec v'=(0,2.0)\\,\\mathrm{m\\,s^{-1}}\\) and \\(\\vec v=(20,2.0)\\,\\mathrm{m\\,s^{-1}}\\), consistent with the Galilean relation \\(\\vec v=\\vec v'+\\vec u\\) with \\(u=20\\,\\mathrm{m\\,s^{-1}}\\) east at \\(t=0\\).",
          "地面观察者测得速率 \\(v=\\sqrt{20^{2}+2.0^{2}}=20.1\\,\\mathrm{m\\,s^{-1}}\\)，方向 \\(\\theta=\\arctan\\left(\\dfrac{2.0}{20}\\right)=5.7^\\circ\\) 东偏北。 · The ground observer measures speed \\(v=\\sqrt{20^{2}+2.0^{2}}=20.1\\,\\mathrm{m\\,s^{-1}}\\) at \\(\\theta=\\arctan\\left(\\dfrac{2.0}{20}\\right)=5.7^\\circ\\) north of east.",
          "乘客相对车厢和相对地面都做匀速运动，加速度均为零，所以 \\(a'=a=0\\)；若列车加速，车厢系不再是惯性系，\\(a'=a\\) 不再成立，必须引入惯性力。 · The passenger moves uniformly in both frames, so both accelerations are zero and \\(a'=a=0\\); if the train accelerated, the train frame would no longer be inertial, \\(a'=a\\) would fail, and fictitious forces would be required."
        ],
        "solution": "\\(\\vec r'=(0,2.0t)\\,\\mathrm{m}\\)，\\(\\vec r=(20t,2.0t)\\,\\mathrm{m}\\)；地面测得 \\(20.1\\,\\mathrm{m\\,s^{-1}}\\)、东偏北 \\(5.7^\\circ\\)；两系加速度相同（均为零）。 · \\(\\vec r'=(0,2.0t)\\,\\mathrm{m}\\) and \\(\\vec r=(20t,2.0t)\\,\\mathrm{m}\\); the ground measurement is \\(20.1\\,\\mathrm{m\\,s^{-1}}\\) at \\(5.7^\\circ\\) north of east; both frames give the same acceleration (zero).",
        "solutionLatex": "\\vec v=(20\\hat i+2.0\\hat j)\\,\\mathrm{m\\,s^{-1}},\\quad v=20.1\\,\\mathrm{m\\,s^{-1}},\\quad \\theta=5.7^\\circ\\ \\text{N of E}"
      },
      {
        "title": "例 4 · 船与河流 · Example 4: Boat and river",
        "prompt": "静水中船速为 \\(4.0\\,\\mathrm{m\\,s^{-1}}\\)，河水以 \\(3.0\\,\\mathrm{m\\,s^{-1}}\\) 向东流，河宽 \\(60\\,\\mathrm{m}\\)。(a) 船头正对北岸时，求船相对地面的速度、过河时间与下游漂移；(b) 若要使船相对地面正对北岸航行，船头应偏向上游多少度？过河时间是多少？ · A boat has speed \\(4.0\\,\\mathrm{m\\,s^{-1}}\\) in still water, a river flows east at \\(3.0\\,\\mathrm{m\\,s^{-1}}\\), and the river is \\(60\\,\\mathrm{m}\\) wide. (a) If the bow points straight north, find the boat's velocity relative to the ground, the crossing time, and the downstream drift. (b) To travel straight north relative to the ground, at what angle upstream must the bow point, and what is the crossing time?",
        "steps": [
          "船相对水的速度 \\(\\vec v_{BW}=4.0\\hat j\\)，水相对地面 \\(\\vec v_{WG}=3.0\\hat i\\)，所以 \\(\\vec v_{BG}=(3.0\\hat i+4.0\\hat j)\\,\\mathrm{m\\,s^{-1}}\\)。 · The boat-relative-to-water velocity is \\(\\vec v_{BW}=4.0\\hat j\\) and the water-relative-to-ground velocity is \\(\\vec v_{WG}=3.0\\hat i\\), so \\(\\vec v_{BG}=(3.0\\hat i+4.0\\hat j)\\,\\mathrm{m\\,s^{-1}}\\).",
          "大小 \\(v_{BG}=\\sqrt{3.0^{2}+4.0^{2}}=5.0\\,\\mathrm{m\\,s^{-1}}\\)，方向 \\(\\theta=\\arctan\\left(\\dfrac{3.0}{4.0}\\right)=36.9^\\circ\\) 北偏东（即东偏北 \\(53.1^\\circ\\)）。 · The magnitude is \\(v_{BG}=\\sqrt{3.0^{2}+4.0^{2}}=5.0\\,\\mathrm{m\\,s^{-1}}\\) at \\(\\theta=\\arctan\\left(\\dfrac{3.0}{4.0}\\right)=36.9^\\circ\\) east of north (or \\(53.1^\\circ\\) north of east).",
          "过河时间只由垂直河岸的分量决定：\\(t=\\dfrac{60}{4.0}=15\\,\\mathrm{s}\\)；下游漂移 \\(d=v_{WG}t=3.0(15)=45\\,\\mathrm{m}\\)。 · The crossing time depends only on the component perpendicular to the bank: \\(t=\\dfrac{60}{4.0}=15\\,\\mathrm{s}\\); the downstream drift is \\(d=v_{WG}t=3.0(15)=45\\,\\mathrm{m}\\).",
          "若要相对地面正对北岸，需 \\(v_{BG,x}=0\\)：\\(4.0\\sin\\theta=3.0\\)，得 \\(\\theta=48.6^\\circ\\) 偏向上游；此时 \\(v_{BG,y}=4.0\\cos\\theta=2.65\\,\\mathrm{m\\,s^{-1}}\\)，\\(t=\\dfrac{60}{2.65}=22.7\\,\\mathrm{s}\\)。 · To travel straight north relative to the ground, require \\(v_{BG,x}=0\\): \\(4.0\\sin\\theta=3.0\\), giving \\(\\theta=48.6^\\circ\\) upstream; then \\(v_{BG,y}=4.0\\cos\\theta=2.65\\,\\mathrm{m\\,s^{-1}}\\) and \\(t=\\dfrac{60}{2.65}=22.7\\,\\mathrm{s}\\)."
        ],
        "solution": "(a) 船相对地面 \\(5.0\\,\\mathrm{m\\,s^{-1}}\\)，航迹偏向下游 \\(36.9^\\circ\\)（北偏东），过河 \\(15\\,\\mathrm{s}\\)，漂移 \\(45\\,\\mathrm{m}\\)；(b) 船头偏向上游 \\(48.6^\\circ\\)，过河约 \\(23\\,\\mathrm{s}\\)。 · (a) Relative to the ground the boat moves at \\(5.0\\,\\mathrm{m\\,s^{-1}}\\) on a course \\(36.9^\\circ\\) east of north, crossing in \\(15\\,\\mathrm{s}\\) with a \\(45\\,\\mathrm{m}\\) downstream drift; (b) the bow must point \\(48.6^\\circ\\) upstream, giving a crossing time of about \\(23\\,\\mathrm{s}\\).",
        "solutionLatex": "v_{BG}=5.0\\,\\mathrm{m\\,s^{-1}},\\quad t=15\\,\\mathrm{s},\\quad d=45\\,\\mathrm{m},\\quad \\theta_{\\text{upstream}}=48.6^\\circ,\\quad t'=22.7\\,\\mathrm{s}"
      },
      {
        "title": "例 5 · 斜抛 · Example 5: Angled projectile",
        "prompt": "小球以 \\(20\\,\\mathrm{m\\,s^{-1}}\\)、与水平成 \\(30^\\circ\\) 抛出，落点与抛出点同高。求飞行时间、射程与最大高度（\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)）。 · A ball is launched at \\(20\\,\\mathrm{m\\,s^{-1}}\\) at \\(30^\\circ\\) above the horizontal and lands at the same height. Find the flight time, range, and maximum height (\\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)).",
        "steps": [
          "\\(v_{0x}=20\\cos30^\\circ=17.3\\,\\mathrm{m\\,s^{-1}}\\)，\\(v_{0y}=20\\sin30^\\circ=10\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v_{0x}=20\\cos30^\\circ=17.3\\,\\mathrm{m\\,s^{-1}}\\) and \\(v_{0y}=20\\sin30^\\circ=10\\,\\mathrm{m\\,s^{-1}}\\).",
          "\\(t=\\dfrac{2v_{0y}}{g}=\\dfrac{20}{9.8}=2.04\\,\\mathrm{s}\\)。 · \\(t=\\dfrac{2v_{0y}}{g}=\\dfrac{20}{9.8}=2.04\\,\\mathrm{s}\\).",
          "\\(R=v_{0x}t=17.3(2.04)=35.3\\,\\mathrm{m}\\)；\\(H=\\dfrac{v_{0y}^{2}}{2g}=\\dfrac{100}{19.6}=5.10\\,\\mathrm{m}\\)。 · \\(R=v_{0x}t=17.3(2.04)=35.3\\,\\mathrm{m}\\); \\(H=\\dfrac{v_{0y}^{2}}{2g}=\\dfrac{100}{19.6}=5.10\\,\\mathrm{m}\\)."
        ],
        "solution": "\\(t\\approx 2.0\\,\\mathrm{s}\\)，\\(R\\approx 35\\,\\mathrm{m}\\)，\\(H\\approx 5.1\\,\\mathrm{m}\\)。 · \\(t\\approx 2.0\\,\\mathrm{s}\\), \\(R\\approx 35\\,\\mathrm{m}\\), and \\(H\\approx 5.1\\,\\mathrm{m}\\).",
        "solutionLatex": "t\\approx 2.0\\,\\mathrm{s},\\quad R\\approx 35\\,\\mathrm{m},\\quad H\\approx 5.1\\,\\mathrm{m}"
      },
      {
        "title": "例 6 · 平抛 · Example 6: Horizontal projectile",
        "prompt": "从 \\(45\\,\\mathrm{m}\\) 高台以 \\(10\\,\\mathrm{m\\,s^{-1}}\\) 水平抛出小球。求落地时间、水平射程与落地速率。 · A ball is thrown horizontally at \\(10\\,\\mathrm{m\\,s^{-1}}\\) from a \\(45\\,\\mathrm{m}\\) high platform. Find the time to land, the horizontal range, and the landing speed.",
        "steps": [
          "竖直方向：\\(45=\\dfrac{1}{2}(9.8)t^{2}\\Rightarrow t=\\sqrt{\\dfrac{90}{9.8}}=3.03\\,\\mathrm{s}\\)。 · Vertically: \\(45=\\dfrac{1}{2}(9.8)t^{2}\\Rightarrow t=\\sqrt{\\dfrac{90}{9.8}}=3.03\\,\\mathrm{s}\\).",
          "水平射程 \\(x=10(3.03)=30.3\\,\\mathrm{m}\\)。 · The horizontal range is \\(x=10(3.03)=30.3\\,\\mathrm{m}\\).",
          "\\(v_y=gt=29.7\\,\\mathrm{m\\,s^{-1}}\\)，\\(v=\\sqrt{10^{2}+29.7^{2}}=31.3\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v_y=gt=29.7\\,\\mathrm{m\\,s^{-1}}\\), so \\(v=\\sqrt{10^{2}+29.7^{2}}=31.3\\,\\mathrm{m\\,s^{-1}}\\)."
        ],
        "solution": "\\(t\\approx 3.0\\,\\mathrm{s}\\)，\\(x\\approx 30\\,\\mathrm{m}\\)，\\(v\\approx 31\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(t\\approx 3.0\\,\\mathrm{s}\\), \\(x\\approx 30\\,\\mathrm{m}\\), and \\(v\\approx 31\\,\\mathrm{m\\,s^{-1}}\\).",
        "solutionLatex": "t\\approx 3.0\\,\\mathrm{s},\\quad x\\approx 30\\,\\mathrm{m},\\quad v\\approx 31\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 7 · 同时落地 · Example 7: Landing at the same time",
        "prompt": "同一高度，一个小球自由下落，另一个小球同时水平抛出。忽略空气阻力，哪个先落地？ · At the same height, one ball is dropped from rest while another is thrown horizontally at the same instant. Ignoring air resistance, which lands first?",
        "steps": [
          "竖直方向都只受重力，初速度的竖直分量都为零。 · Both balls feel only gravity vertically, and both have zero initial vertical velocity.",
          "两者下落高度相同，满足 \\(h=\\dfrac{1}{2}gt^{2}\\)，所以 \\(t\\) 相同。 · Both fall through the same height and satisfy \\(h=\\dfrac{1}{2}gt^{2}\\), so they take the same time."
        ],
        "solution": "同时落地；水平抛出只增加水平位移，不改变竖直下落时间。 · They land at the same time; the horizontal throw adds horizontal displacement but does not change the vertical fall time.",
        "solutionLatex": "h=\\dfrac{1}{2}gt^{2}\\Rightarrow t=\\sqrt{\\dfrac{2h}{g}}\\quad\\text{(same for both)}"
      },
      {
        "title": "例 8 · 三维分量运动 · Example 8: Motion in three dimensions",
        "prompt": "一架小型无人机从原点出发，初速度 \\(\\vec v_0=(1.0\\hat i+2.0\\hat j-1.0\\hat k)\\,\\mathrm{m\\,s^{-1}}\\)，在 \\(0\\) 到 \\(4.0\\,\\mathrm{s}\\) 内具有恒定加速度 \\(\\vec a=(0.50\\hat i-0.25\\hat j+0.75\\hat k)\\,\\mathrm{m\\,s^{-2}}\\)。求 \\(t=4.0\\,\\mathrm{s}\\) 的速度与位置，并求此时到原点的距离。 · A small drone starts at the origin with initial velocity \\(\\vec v_0=(1.0\\hat i+2.0\\hat j-1.0\\hat k)\\,\\mathrm{m\\,s^{-1}}\\) and has constant acceleration \\(\\vec a=(0.50\\hat i-0.25\\hat j+0.75\\hat k)\\,\\mathrm{m\\,s^{-2}}\\) from \\(0\\) to \\(4.0\\,\\mathrm{s}\\). Find its velocity and position at \\(t=4.0\\,\\mathrm{s}\\), and its distance from the origin then.",
        "steps": [
          "三个方向分别使用匀加速方程，时间同为 \\(t=4.0\\,\\mathrm{s}\\)；先把初速度与加速度写成单位矢量形式，避免漏掉分量。 · Use the constant-acceleration equations in each dimension with the same \\(t=4.0\\,\\mathrm{s}\\); write the initial velocity and acceleration in unit-vector form first so no component is lost.",
          "速度：\\(v_x=1.0+0.50(4.0)=3.0\\)、\\(v_y=2.0-0.25(4.0)=1.0\\)、\\(v_z=-1.0+0.75(4.0)=2.0\\)，均以 \\(\\mathrm{m\\,s^{-1}}\\) 计；\\(v=\\sqrt{3.0^{2}+1.0^{2}+2.0^{2}}=\\sqrt{14}=3.7\\,\\mathrm{m\\,s^{-1}}\\)。 · Velocity: \\(v_x=1.0+0.50(4.0)=3.0\\), \\(v_y=2.0-0.25(4.0)=1.0\\), and \\(v_z=-1.0+0.75(4.0)=2.0\\), all in \\(\\mathrm{m\\,s^{-1}}\\); \\(v=\\sqrt{3.0^{2}+1.0^{2}+2.0^{2}}=\\sqrt{14}=3.7\\,\\mathrm{m\\,s^{-1}}\\).",
          "位置：\\(x=0+1.0(4.0)+\\dfrac{1}{2}(0.50)(4.0)^{2}=8.0\\,\\mathrm{m}\\)，\\(y=0+2.0(4.0)+\\dfrac{1}{2}(-0.25)(4.0)^{2}=6.0\\,\\mathrm{m}\\)，\\(z=0-1.0(4.0)+\\dfrac{1}{2}(0.75)(4.0)^{2}=2.0\\,\\mathrm{m}\\)。 · Position: \\(x=0+1.0(4.0)+\\dfrac{1}{2}(0.50)(4.0)^{2}=8.0\\,\\mathrm{m}\\), \\(y=0+2.0(4.0)+\\dfrac{1}{2}(-0.25)(4.0)^{2}=6.0\\,\\mathrm{m}\\), and \\(z=0-1.0(4.0)+\\dfrac{1}{2}(0.75)(4.0)^{2}=2.0\\,\\mathrm{m}\\).",
          "到原点距离 \\(r=\\sqrt{8.0^{2}+6.0^{2}+2.0^{2}}=\\sqrt{104}=10.2\\,\\mathrm{m}\\)；三个分量中 \\(x\\) 加速、\\(y\\) 减速、\\(z\\) 先减速后反向，说明各方向运动互不相同。 · Distance from the origin: \\(r=\\sqrt{8.0^{2}+6.0^{2}+2.0^{2}}=\\sqrt{104}=10.2\\,\\mathrm{m}\\). Among the components, \\(x\\) speeds up, \\(y\\) slows down, and \\(z\\) first slows and then reverses, showing that the dimensions behave differently."
        ],
        "solution": "\\(\\vec v=(3.0\\hat i+1.0\\hat j+2.0\\hat k)\\,\\mathrm{m\\,s^{-1}}\\)，\\(\\vec r=(8.0\\hat i+6.0\\hat j+2.0\\hat k)\\,\\mathrm{m}\\)，到原点距离约 \\(10.2\\,\\mathrm{m}\\)。 · \\(\\vec v=(3.0\\hat i+1.0\\hat j+2.0\\hat k)\\,\\mathrm{m\\,s^{-1}}\\), \\(\\vec r=(8.0\\hat i+6.0\\hat j+2.0\\hat k)\\,\\mathrm{m}\\), and the distance from the origin is about \\(10.2\\,\\mathrm{m}\\).",
        "solutionLatex": "\\vec v=(3.0\\hat i+1.0\\hat j+2.0\\hat k)\\,\\mathrm{m\\,s^{-1}},\\quad \\vec r=(8.0\\hat i+6.0\\hat j+2.0\\hat k)\\,\\mathrm{m},\\quad r=10.2\\,\\mathrm{m}"
      },
      {
        "title": "例 9 · 各方向不同且非匀加速 · Example 9: Different, nonuniform acceleration components",
        "prompt": "粒子在 \\(xy\\) 平面运动，\\(a_x(t)=(2.0\\,\\mathrm{m\\,s^{-3}})t\\)，\\(a_y(t)=(-6.0\\,\\mathrm{m\\,s^{-3}})t\\)，初始位置为原点，初速度 \\(\\vec v_0=(0,9.0)\\,\\mathrm{m\\,s^{-1}}\\)。求 \\(v_x(t)\\)、\\(v_y(t)\\)、\\(x(t)\\)、\\(y(t)\\)，以及 \\(t=3.0\\,\\mathrm{s}\\) 的速度和位置。 · A particle moves in the \\(xy\\) plane with \\(a_x(t)=(2.0\\,\\mathrm{m\\,s^{-3}})t\\) and \\(a_y(t)=(-6.0\\,\\mathrm{m\\,s^{-3}})t\\), starting at the origin with initial velocity \\(\\vec v_0=(0,9.0)\\,\\mathrm{m\\,s^{-1}}\\). Find \\(v_x(t)\\), \\(v_y(t)\\), \\(x(t)\\), \\(y(t)\\), and the velocity and position at \\(t=3.0\\,\\mathrm{s}\\).",
        "steps": [
          "两个方向分别积分；\\(x\\) 方向初速度为零：\\(v_x(t)=0+\\int_{0}^{t}2.0t'\\,\\mathrm{d}t'=1.0t^{2}\\)，\\(v_y(t)=9.0+\\int_{0}^{t}(-6.0t')\\,\\mathrm{d}t'=9.0-3.0t^{2}\\)（均以 \\(\\mathrm{m\\,s^{-1}}\\) 计）。 · Integrate each dimension separately; with zero initial \\(x\\)-velocity, \\(v_x(t)=0+\\int_{0}^{t}2.0t'\\,\\mathrm{d}t'=1.0t^{2}\\) and \\(v_y(t)=9.0+\\int_{0}^{t}(-6.0t')\\,\\mathrm{d}t'=9.0-3.0t^{2}\\) (both in \\(\\mathrm{m\\,s^{-1}}\\)).",
          "再积分：\\(x(t)=0+\\int_{0}^{t}1.0t'^{2}\\,\\mathrm{d}t'=\\dfrac{1}{3}t^{3}\\)，\\(y(t)=0+\\int_{0}^{t}(9.0-3.0t'^{2})\\,\\mathrm{d}t'=9.0t-t^{3}\\)（均以 m 计）。 · Integrate again: \\(x(t)=0+\\int_{0}^{t}1.0t'^{2}\\,\\mathrm{d}t'=\\dfrac{1}{3}t^{3}\\) and \\(y(t)=0+\\int_{0}^{t}(9.0-3.0t'^{2})\\,\\mathrm{d}t'=9.0t-t^{3}\\) (both in m).",
          "在 \\(t=3.0\\,\\mathrm{s}\\)：\\(v_x=9.0\\,\\mathrm{m\\,s^{-1}}\\)、\\(v_y=9.0-27=-18.0\\,\\mathrm{m\\,s^{-1}}\\)，\\(v=\\sqrt{9.0^{2}+(-18.0)^{2}}=\\sqrt{405}=20.1\\,\\mathrm{m\\,s^{-1}}\\)，方向在第四象限，与 \\(+x\\) 轴成 \\(\\arctan\\dfrac{-18.0}{9.0}=-63.4^\\circ\\)。 · At \\(t=3.0\\,\\mathrm{s}\\), \\(v_x=9.0\\,\\mathrm{m\\,s^{-1}}\\) and \\(v_y=9.0-27=-18.0\\,\\mathrm{m\\,s^{-1}}\\), so \\(v=\\sqrt{9.0^{2}+(-18.0)^{2}}=\\sqrt{405}=20.1\\,\\mathrm{m\\,s^{-1}}\\), in the fourth quadrant at \\(\\arctan\\dfrac{-18.0}{9.0}=-63.4^\\circ\\) from the \\(+x\\) axis.",
          "位置：\\(x=\\dfrac{27}{3}=9.0\\,\\mathrm{m}\\)，\\(y=27-27=0\\,\\mathrm{m}\\)，所以粒子在 \\(t=3.0\\,\\mathrm{s}\\) 回到 \\(x\\) 轴。加速度 \\(a_x=6.0\\,\\mathrm{m\\,s^{-2}}\\)、\\(a_y=-18.0\\,\\mathrm{m\\,s^{-2}}\\)，两者不同且都随时间变化；\\(y\\) 方向速度在 \\(t=\\sqrt{3.0}=1.7\\,\\mathrm{s}\\) 时为零，之后反向。 · Position: \\(x=\\dfrac{27}{3}=9.0\\,\\mathrm{m}\\) and \\(y=27-27=0\\,\\mathrm{m}\\), so the particle returns to the \\(x\\)-axis at \\(t=3.0\\,\\mathrm{s}\\). The accelerations are \\(a_x=6.0\\,\\mathrm{m\\,s^{-2}}\\) and \\(a_y=-18.0\\,\\mathrm{m\\,s^{-2}}\\), different and both time-dependent; the \\(y\\)-velocity is zero at \\(t=\\sqrt{3.0}=1.7\\,\\mathrm{s}\\) and then reverses."
        ],
        "solution": "\\(v_x=1.0t^{2}\\)、\\(v_y=9.0-3.0t^{2}\\)（\\(\\mathrm{m\\,s^{-1}}\\)），\\(x=\\dfrac{1}{3}t^{3}\\)、\\(y=9.0t-t^{3}\\)（m）；\\(t=3.0\\,\\mathrm{s}\\) 时 \\(\\vec v=(9.0\\hat i-18.0\\hat j)\\,\\mathrm{m\\,s^{-1}}\\)，速率为 \\(20.1\\,\\mathrm{m\\,s^{-1}}\\)，位置为 \\((9.0,0)\\,\\mathrm{m}\\)。 · \\(v_x=1.0t^{2}\\) and \\(v_y=9.0-3.0t^{2}\\) (in \\(\\mathrm{m\\,s^{-1}}\\)), \\(x=\\dfrac{1}{3}t^{3}\\) and \\(y=9.0t-t^{3}\\) (in m); at \\(t=3.0\\,\\mathrm{s}\\), \\(\\vec v=(9.0\\hat i-18.0\\hat j)\\,\\mathrm{m\\,s^{-1}}\\), the speed is \\(20.1\\,\\mathrm{m\\,s^{-1}}\\), and the position is \\((9.0,0)\\,\\mathrm{m}\\).",
        "solutionLatex": "v_x=1.0t^{2},\\quad v_y=9.0-3.0t^{2},\\quad x=\\dfrac{1}{3}t^{3},\\quad y=9.0t-t^{3},\\quad \\vec v(3.0)=(9.0\\hat i-18.0\\hat j)\\,\\mathrm{m\\,s^{-1}},\\quad \\vec r(3.0)=(9.0\\hat i+0\\hat j)\\,\\mathrm{m}"
      }
    ],
    "examTips": [
      "先判断量是标量还是矢量；矢量必须同时给出大小和方向，不能只写一个数。 · Decide whether a quantity is scalar or vector; a vector needs both magnitude and direction, not just a number.",
      "画箭头时标注比例尺、参考轴和角度方向；箭头长度按比例表示大小。 · When drawing arrows, label the scale, reference axis, and angle direction; arrow length must be proportional to magnitude.",
      "分量法最稳：先写 \\(A_x,A_y,A_z\\)，再求大小与方向；不要忘记用象限修正反正切。 · The component method is safest: write \\(A_x,A_y,A_z\\), then find magnitude and direction; remember to correct the inverse tangent for the quadrant.",
      "二维运动先分解初速度，再分别写水平、竖直方程，两个方向共用同一时间。 · For two-dimensional motion, resolve the initial velocity first, then write horizontal and vertical equations that share the same time.",
      "换参考系先写 \\(\\vec r'=\\vec r-\\vec u t\\)、\\(\\vec v'=\\vec v-\\vec u\\)，明确 \\(\\vec u\\) 是哪个参考系相对哪个参考系的速度。 · When changing frames, write \\(\\vec r'=\\vec r-\\vec u t\\) and \\(\\vec v'=\\vec v-\\vec u\\), identifying which frame \\(\\vec u\\) is measured relative to.",
      "船与河流问题画速度三角形：船头方向、水流方向和实际航迹要分别标出，避免把船头方向当作实际运动方向。 · For boat-and-river problems, draw the velocity triangle with heading, current, and actual course labeled separately; do not confuse heading with actual motion.",
      "落点高度不同或存在空气阻力时，不要直接使用平地射程公式。 · Do not use the level-ground range formula when the landing height differs or air resistance matters.",
      "先问“各方向的加速度是否各自恒定、是否互不依赖”；再决定用分量匀加速方程还是逐分量积分。 · First ask whether each component's acceleration is constant and independent; then choose component constant-acceleration equations or componentwise integration.",
      "三维题先写 \\(\\vec r=x\\hat i+y\\hat j+z\\hat k\\)，再逐个分量列式；不要把三维当成一个复杂的一维问题。 · For three-dimensional problems, write \\(\\vec r=x\\hat i+y\\hat j+z\\hat k\\) first and set up each component separately; do not treat three dimensions as one complicated one-dimensional problem.",
      "某方向速度为零不代表加速度为零；某方向匀速也不代表其他方向匀速。 · Zero velocity in one dimension does not mean zero acceleration there, and uniform motion in one dimension does not imply uniform motion in another.",
      "AP Physics C: Mechanics 的定量题以二维为主；三维题通常只要求定性描述与分量分解，但分量法和积分法完全相同。 · Quantitative AP Physics C: Mechanics problems focus on two dimensions; three-dimensional problems usually ask for qualitative description and component separation, but the component and integration methods are the same."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u1",
        "code": "1.1",
        "title": "一维运动学 · Kinematics in One Dimension",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-prep-math",
        "code": "P3.1",
        "title": "矢量分解与点积 · Vector Components and Dot Product",
        "relation": "数学先修 · mathematics prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "应用 · application"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.4",
        "title": "圆周运动 · Circular Motion",
        "relation": "对比 · contrast"
      }
    ],
    "modules": [
      {
        "id": "projectile",
        "title": "抛体运动 · Projectile Motion"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u1",
    "connections": [
      "上游：1.1 的一维位置、速度和加速度是二维或三维矢量的分量，其导数与积分逐分量适用；先修数学的三角函数与勾股定理提供分解与合成工具。 · Upstream: the one-dimensional position, velocity, and acceleration of 1.1 are the components of two- or three-dimensional vectors, and their derivatives and integrals apply component by component; prerequisite trigonometry and the Pythagorean theorem provide the tools for resolution and composition.",
      "下游：牛顿定律用矢量形式 \\(\\sum\\vec F=m\\vec a\\) 处理二维动力学；圆周运动的速度与加速度方向不断改变，必须用矢量描述。 · Downstream: Newton's laws use the vector form \\(\\sum\\vec F=m\\vec a\\) for two-dimensional dynamics; in circular motion the directions of velocity and acceleration keep changing and vectors are essential.",
      "跨主题：相对速度与参考系变换用于动量守恒、碰撞和波的观察者问题；伽利略变换是低速相对论的极限。 · Cross-topic: relative velocity and frame transformations appear in momentum conservation, collisions, and observer problems in wave physics; the Galilean transformation is the low-speed limit of relativity.",
      "建模：单位矢量把几何方向转化为代数分量，是后续力、场、动量等一切矢量的通用语言。 · Modeling: unit vectors turn geometric directions into algebraic components and provide the common language for forces, fields, momentum, and all later vectors."
    ],
    "intuitionDetailed": "把二维运动想成两张透明纸叠在一起：一张只画水平方向的匀速运动，另一张只画竖直方向的匀加速运动，物体在任一时刻的位置由两张纸上的位置共同决定，而时间 \\(t\\) 是它们唯一的共同刻度。矢量箭头是这张图的“图例”：长度按比例表示大小，朝向表示方向；把箭头投影到坐标轴上就得到分量，分量可正可负，但大小永远非负。已知分量求方向时，先画出点 \\((A_x,A_y)\\) 所在象限，再用反正切求参考角，否则计算器可能把第二象限的矢量误报成第四象限。\n\n换参考系时，想象整张坐标纸以速度 \\(\\vec u\\) 平移：物体的位置减去 \\(\\vec u t\\)，速度减去 \\(\\vec u\\)。两位观察者测得的速度不同，但都把同一个 \\(\\Delta\\vec v\\) 除以同一个 \\(\\Delta t\\)，所以加速度相同。船在河中的问题就是这条规则的直接应用：船头给出船相对水的速度，水流给出水相对地面的速度，两者矢量相加得到船相对地面的航迹；船头正对岸时合速度偏向下游，要垂直过河就必须让船头偏向上游，用横向分量抵消水流。\\n\\n三维运动只是把两张透明纸换成三张：\\(x\\)、\\(y\\)、\\(z\\) 三个分量各自是一条一维运动，时间仍是唯一的共同刻度。三维轨迹是空间曲线，把它投影到三个坐标平面，就得到三条共用时间参数的二维轨迹；单独看一个投影可能无法判断空间路径。各方向的加速度可以完全不同，甚至随时间变化：例如 \\(x\\) 方向加速、\\(y\\) 方向减速、\\(z\\) 方向先减速后反向。只要加速度分量互不依赖，就可以分别积分；若一个方向的加速度依赖另一方向的坐标，方程就耦合，不能独立求解。 · Picture two-dimensional motion as two transparent sheets stacked together: one shows uniform horizontal motion, the other uniformly accelerated vertical motion, and the object's position at any instant is fixed by both sheets, with time \\(t\\) as their only shared scale. The vector arrow is the legend: length on a scale gives magnitude and orientation gives direction; projecting the arrow onto the axes gives components, which may be negative even though magnitude is never negative. When finding direction from components, first locate the quadrant of \\((A_x,A_y)\\), then use the inverse tangent for the reference angle; otherwise a calculator may report a second-quadrant vector as fourth-quadrant.\n\nChanging frames is like sliding the whole coordinate grid at velocity \\(\\vec u\\): subtract \\(\\vec u t\\) from positions and \\(\\vec u\\) from velocities. The two observers measure different velocities, but both divide the same \\(\\Delta\\vec v\\) by the same \\(\\Delta t\\), so acceleration is unchanged. The boat-in-a-river problem is a direct application: the heading gives the boat's velocity relative to the water, the current gives the water's velocity relative to the ground, and their vector sum gives the boat's course over the ground; pointing the bow straight across makes the resultant drift downstream, while crossing straight across requires angling the bow upstream so the cross-stream component cancels the current. Three-dimensional motion simply replaces the two transparent sheets with three: the \\(x\\), \\(y\\), and \\(z\\) components are each a one-dimensional motion, and time remains the single shared scale. A three-dimensional trajectory is a space curve; projecting it onto the three coordinate planes gives three two-dimensional trajectories that share the same time parameter, and a single projection may not determine the path in space. The acceleration components can be completely different and may change with time: for example, \\(x\\) may speed up, \\(y\\) may slow down, and \\(z\\) may first slow and then reverse. As long as the acceleration components do not depend on one another, each can be integrated separately; if one dimension's acceleration depends on another dimension's coordinate, the equations are coupled and cannot be solved independently.",
    "development": [
      "判断量与模型：先分清标量与矢量，确定用箭头、分量还是单位矢量表示。 · Classify quantities and choose a model: distinguish scalars from vectors and decide whether to use arrows, components, or unit vectors.",
      "建立坐标系：选定原点和正交坐标轴，标出 \\(+x,+y,+z\\) 方向与角度参考轴。 · Set up coordinates: choose an origin and orthogonal axes, and mark the \\(+x,+y,+z\\) directions and the angle reference axis.",
      "分解与表示：把每个矢量投影到坐标轴，写成 \\(A_x\\hat i+A_y\\hat j+A_z\\hat k\\)，并检查分量符号。 · Resolve and represent: project each vector onto the axes, write \\(A_x\\hat i+A_y\\hat j+A_z\\hat k\\), and check the signs of the components.",
      "合成与检验：按分量相加或首尾相接求合矢量，再由勾股定理与象限求大小和方向。 · Combine and check: add components or use tip-to-tail construction, then find magnitude with the Pythagorean theorem and direction with the quadrant.",
      "分析运动：把二维运动拆成独立分量，抛体运动用同一时间联系水平与竖直方程。 · Analyze motion: split two-dimensional motion into independent components, linking horizontal and vertical projectile equations through the same time.",
      "判断是否解耦：分别写出 \\(a_x(t)\\)、\\(a_y(t)\\)、\\(a_z(t)\\)，确认每个分量只依赖自己的位置、速度或时间；若一个方向依赖另一方向，则方程耦合，不能分别积分。 · Check for decoupling: write \\(a_x(t)\\), \\(a_y(t)\\), and \\(a_z(t)\\) and confirm that each component depends only on its own position, velocity, or time; if one dimension depends on another, the equations are coupled and cannot be integrated separately.",
      "逐分量求解：对每个方向选择匀加速方程或积分，最后在每一时刻合成 \\(\\vec r\\)、\\(\\vec v\\)、\\(\\vec a\\)；三维题还要写出轨迹的坐标平面投影。 · Solve component by component: choose constant-acceleration equations or integration for each dimension, then recombine \\(\\vec r\\), \\(\\vec v\\), and \\(\\vec a\\) at each instant; for three-dimensional problems, also write the coordinate-plane projections of the trajectory.",
      "转换参考系：写出 \\(\\vec r'=\\vec r-\\vec u t\\)、\\(\\vec v'=\\vec v-\\vec u\\)，检查 \\(a'=a\\)，并用速度三角形解决船与河流问题。 · Transform frames: write \\(\\vec r'=\\vec r-\\vec u t\\) and \\(\\vec v'=\\vec v-\\vec u\\), check \\(a'=a\\), and use a velocity triangle for boat-and-river problems."
    ],
    "checks": [
      "标量与矢量的本质区别是什么？为什么速率是标量而速度是矢量？ · What is the essential difference between a scalar and a vector, and why is speed a scalar while velocity is a vector?",
      "已知 \\(A_x=-3.0\\)、\\(A_y=4.0\\)，矢量的大小和方向角各是多少？为什么不能只写 \\(\\arctan\\left(\\dfrac{4.0}{-3.0}\\right)\\)？ · For \\(A_x=-3.0\\) and \\(A_y=4.0\\), what are the magnitude and direction angle, and why is \\(\\arctan\\left(\\dfrac{4.0}{-3.0}\\right)\\) alone not enough?",
      "两个矢量相加时，什么时候可以直接把大小相加？一般情况下应如何相加？ · When may the magnitudes of two vectors be added directly, and how should they be added in general?",
      "船头正对北岸时，为什么船的实际航迹偏向下游？若要垂直过河，船头应如何调整？ · Why does a boat pointing straight north drift downstream, and how must the bow be adjusted to cross straight across?",
      "换到另一个惯性参考系时，速度和加速度分别如何变化？为什么？ · How do velocity and acceleration change when switching to another inertial frame, and why?",
      "平地射程公式 \\(R=\\dfrac{v_0^{2}\\sin 2\\theta}{g}\\) 在什么条件下成立？落点高度不同时应如何求飞行时间？ · Under what conditions does the level-ground range formula \\(R=\\dfrac{v_0^{2}\\sin 2\\theta}{g}\\) hold, and how is flight time found when the landing height differs?",
      "三维运动为什么可以分解为三个一维运动？这种分解在什么条件下失效？ · Why can three-dimensional motion be separated into three one-dimensional motions, and when does this separation fail?",
      "两个方向的加速度不同且都随时间变化时，如何求速度和位置？为什么不能使用匀加速方程？ · When two dimensions have different, time-dependent accelerations, how do you find velocity and position, and why can't the constant-acceleration equations be used?",
      "抛体运动为什么只是二维运动的特例？它的两个分量分别属于哪类加速？ · Why is projectile motion only a special case of two-dimensional motion, and what kind of acceleration does each component have?"
    ],
    "vocabulary": [
      {
        "termZh": "标量",
        "termEn": "scalar",
        "defZh": "只有大小、没有方向的物理量，例如路程、速率、质量和时间。",
        "defEn": "A physical quantity with magnitude but no direction, such as distance, speed, mass, and time."
      },
      {
        "termZh": "矢量",
        "termEn": "vector",
        "defZh": "既有大小又有方向的物理量，例如位移、速度、加速度和力。",
        "defEn": "A physical quantity with both magnitude and direction, such as displacement, velocity, acceleration, and force."
      },
      {
        "termZh": "单位矢量",
        "termEn": "unit vector",
        "defZh": "大小为 1、用于指示坐标轴方向的矢量，记作 \\(\\hat i,\\hat j,\\hat k\\)。",
        "defEn": "A vector of magnitude 1 that indicates a coordinate-axis direction, written \\(\\hat i,\\hat j,\\hat k\\)."
      },
      {
        "termZh": "分量",
        "termEn": "component",
        "defZh": "矢量沿某一坐标轴的投影，是带正负号的标量。",
        "defEn": "The projection of a vector along a coordinate axis; a signed scalar."
      },
      {
        "termZh": "矢量合成",
        "termEn": "vector addition",
        "defZh": "按首尾相接或分量相加求合矢量的过程。",
        "defEn": "The process of finding a resultant vector by tip-to-tail construction or by adding components."
      },
      {
        "termZh": "抛体运动",
        "termEn": "projectile motion",
        "defZh": "只受重力时物体的二维运动，水平匀速、竖直匀加速。",
        "defEn": "Two-dimensional motion under gravity alone, uniform horizontally and uniformly accelerated vertically."
      },
      {
        "termZh": "惯性参考系",
        "termEn": "inertial reference frame",
        "defZh": "相对另一惯性系以恒定速度运动、牛顿定律在其中成立的参考系。",
        "defEn": "A frame that moves at constant velocity relative to another inertial frame and in which Newton's laws hold."
      },
      {
        "termZh": "相对速度",
        "termEn": "relative velocity",
        "defZh": "一个物体相对某参考系的速度，按 \\(\\vec v_{A/C}=\\vec v_{A/B}+\\vec v_{B/C}\\) 合成。",
        "defEn": "The velocity of an object relative to a frame, composed as \\(\\vec v_{A/C}=\\vec v_{A/B}+\\vec v_{B/C}\\)."
      }
    ]
  }
};
