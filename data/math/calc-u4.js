export const UNIT = {
  "id": "calc-u4",
  "code": "4",
  "titleZh": "导数的情境应用",
  "titleEn": "Contextual Applications of Differentiation",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "4.1": {
    "id": "math/calc-u4/4.1",
    "subject": "math",
    "chapterId": "calc-u4",
    "unitCode": "4",
    "unitTitleZh": "导数的情境应用",
    "unitTitleEn": "Contextual Applications of Differentiation",
    "code": "4.1",
    "titleZh": "变化率情境",
    "titleEn": "Interpreting the Meaning of the Derivative in Context",
    "layer": "ap",
    "summary": "导数 \\(f'(a)\\) 是 \\(f\\) 关于 \\(x\\) 在 \\(x=a\\) 处的瞬时变化率：在该瞬间，输入每增加一个单位，输出大约改变 \\(f'(a)\\) 个输出单位，所以单位是“输出单位每输入单位”；符号说明输出随输入增大而增大还是减小，大小说明变化的快慢。 · The derivative \\(f'(a)\\) is the instantaneous rate of change of \\(f\\) with respect to \\(x\\) at \\(x=a\\): at that instant, each additional input unit changes the output by about \\(f'(a)\\) output units, so the units are output units per input unit; the sign tells whether the output increases or decreases as the input increases, and the magnitude tells how fast the change is.",
    "learningObjectives": [
      "能说明导数 \\(f'(a)\\) 是 \\(f\\) 关于 \\(x\\) 在 \\(x=a\\) 处的瞬时变化率，并用情境语言解释其符号、大小与单位。 · Explain that the derivative \\(f'(a)\\) is the instantaneous rate of change of \\(f\\) with respect to \\(x\\) at \\(x=a\\), and interpret its sign, magnitude, and units in context.",
      "能计算并比较区间上的平均变化率与一点处的瞬时变化率，说明差商取极限的过程。 · Compute and compare an average rate of change on an interval with an instantaneous rate at a point, and explain the limit of the difference quotient.",
      "能用“导数的单位等于输出的单位除以输入的单位”完成单位分析与换算。 · Use “the unit of the derivative is the unit of the output divided by the unit of the input” to carry out dimensional analysis and unit conversion.",
      "能从图像、表格或公式中提取信息，写出包含数值、单位、增减趋势的 AP 情境解释句。 · Extract information from a graph, table, or formula and write an AP-style contextual interpretation that includes the value, units, and increasing or decreasing trend."
    ],
    "essentialKnowledge": [
      "导数是瞬时变化率：\\(f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\)，它描述 \\(f\\) 在 \\(a\\) 处随 \\(x\\) 变化的瞬时快慢。 · The derivative is an instantaneous rate of change: \\(f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\), describing how fast \\(f\\) changes with respect to \\(x\\) at \\(a\\).",
      "平均变化率 \\(\\dfrac{f(b)-f(a)}{b-a}\\) 是割线斜率，必须 \\(b\\ne a\\)；瞬时变化率是 \\(h\\to0\\) 时差商的极限，是切线斜率。 · The average rate of change \\(\\dfrac{f(b)-f(a)}{b-a}\\) is a secant slope and requires \\(b\\ne a\\); the instantaneous rate is the limit of the difference quotient as \\(h\\to0\\), the tangent slope.",
      "导数可用于表达应用情境中的变化率信息：在输入为 \\(a\\) 时，输入每增加一个单位，输出大约改变 \\(f'(a)\\) 个输出单位。 · The derivative can be used to express information about rates of change in applied contexts: when the input is \\(a\\), each additional input unit changes the output by about \\(f'(a)\\) output units.",
      "\\(f'(x)\\) 的单位是 \\(f\\) 的单位除以 \\(x\\) 的单位；例如成本（美元）对产量（件）的导数是美元每件。 · The unit of \\(f'(x)\\) is the unit of \\(f\\) divided by the unit of \\(x\\); for example, the derivative of cost in dollars with respect to production in items is dollars per item.",
      "导数的符号说明输出随输入增大而增大（正）还是减小（负）；导数的大小说明变化的快慢，绝对值越大变化越快。 · The sign of the derivative tells whether the output increases (positive) or decreases (negative) as the input increases; the magnitude tells how fast the change is, with a larger absolute value meaning a faster change.",
      "表格或图像只能给出导数的估计值：用邻近点的差商近似，并注明“approximately”。 · A table or graph gives only an estimate of the derivative: use a difference quotient from nearby points and state “approximately.”",
      "必须区分函数值 \\(f(a)\\) 与导数值 \\(f'(a)\\)：前者是“现在有多少”，后者是“现在变化多快”。 · Distinguish the function value \\(f(a)\\) from the derivative value \\(f'(a)\\): the former is “how much there is now,” while the latter is “how fast it is changing now.”",
      "同一变化率换输入单位时要按比例换算；例如把“每小时”换成“每分钟”要除以 60。 · When the input unit changes, convert the rate proportionally; for example, changing “per hour” to “per minute” requires dividing by 60."
    ],
    "definition": "设函数 \\(f\\) 在 \\(x=a\\) 处可导。\\(f\\) 在 \\(a\\) 处的导数定义为差商的极限 \\(f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\)，它给出 \\(f\\) 关于 \\(x\\) 在 \\(x=a\\) 处的瞬时变化率。当 \\(x\\) 在 \\(a\\) 附近改变 \\(\\Delta x\\) 时，\\(f\\) 的改变量约为 \\(f'(a)\\Delta x\\)。因此 \\(f'(a)\\) 的单位是 \\(f\\) 的单位除以 \\(x\\) 的单位；符号说明 \\(f\\) 在 \\(a\\) 处随 \\(x\\) 增大而增大还是减小，大小说明变化的快慢。 · Let \\(f\\) be differentiable at \\(x=a\\). The derivative of \\(f\\) at \\(a\\) is defined as the limit of the difference quotient \\(f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\), which gives the instantaneous rate of change of \\(f\\) with respect to \\(x\\) at \\(x=a\\). When \\(x\\) changes by \\(\\Delta x\\) near \\(a\\), the change in \\(f\\) is approximately \\(f'(a)\\Delta x\\). Hence the unit of \\(f'(a)\\) is the unit of \\(f\\) divided by the unit of \\(x\\); the sign tells whether \\(f\\) increases or decreases as \\(x\\) increases at \\(a\\), and the magnitude tells how fast the change is.",
    "intuition": "把导数想成“把镜头拉近到一点后看到的斜率”：割线斜率在区间上给出平均变化率；让第二个点不断靠近 \\(a\\)，割线就趋于切线，平均变化率就趋于瞬时变化率。情境中先问“谁随谁变”，再写单位，最后用一句完整的话说明符号与大小。 · Think of the derivative as the slope seen after zooming in to a single point: a secant slope gives an average rate on an interval; as the second point approaches \\(a\\), the secant approaches the tangent and the average rate approaches the instantaneous rate. In context, first ask “what changes with respect to what,” then write the units, and finally state the sign and magnitude in one complete sentence.",
    "formulas": [
      {
        "latex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
        "note": "瞬时变化率的定义：差商的极限，也是切线斜率。 · Definition of the instantaneous rate of change as the limit of a difference quotient, equal to the tangent slope."
      },
      {
        "latex": "\\text{平均变化率}=\\dfrac{f(b)-f(a)}{b-a}",
        "note": "区间 \\([a,b]\\) 上的平均变化率，即割线斜率；要求 \\(b\\ne a\\)。 · Average rate of change on \\([a,b]\\), the secant slope; requires \\(b\\ne a\\)."
      },
      {
        "latex": "f'(a)\\approx\\dfrac{f(a+h)-f(a)}{h}",
        "note": "\\(h\\) 很小时，用差商估计瞬时变化率。 · For small \\(h\\), estimate the instantaneous rate with a difference quotient."
      },
      {
        "latex": "\\text{单位}(f'(x))=\\dfrac{\\text{单位}(f)}{\\text{单位}(x)}",
        "note": "导数的单位是输出单位每输入单位。 · The derivative's units are output units per input unit."
      }
    ],
    "derivationNotes": [
      {
        "from": "平均变化率 · average rate of change",
        "to": "瞬时变化率 · instantaneous rate of change",
        "note": "先取 \\([a,a+h]\\) 上的差商 \\(\\dfrac{f(a+h)-f(a)}{h}\\)，再令 \\(h\\to0\\)：割线趋于切线，平均变化率趋于瞬时变化率。 · Start with the difference quotient \\(\\dfrac{f(a+h)-f(a)}{h}\\) on \\([a,a+h]\\), then let \\(h\\to0\\): the secant approaches the tangent and the average rate approaches the instantaneous rate."
      },
      {
        "from": "差商 · difference quotient",
        "to": "导数的单位 · units of the derivative",
        "note": "差商的分子与分母分别带输出、输入单位；取极限不改变单位，所以 \\(f'(a)\\) 的单位是输出单位每输入单位。 · The numerator and denominator of the difference quotient carry the output and input units; the limit does not change the units, so \\(f'(a)\\) has output units per input unit."
      },
      {
        "from": "导数 · derivative",
        "to": "情境解释 · contextual interpretation",
        "note": "在 \\(x=a\\) 处读出 \\(f'(a)\\) 的符号、大小和单位，再写成“输出量在 \\(a\\) 处正以 … 的速率增加/减少”。 · Read the sign, magnitude, and units of \\(f'(a)\\) at \\(x=a\\), then write “the output is increasing/decreasing at a rate of … at \\(a\\).”"
      },
      {
        "from": "表格/图像 · table or graph",
        "to": "估计值 · estimate",
        "note": "用邻近点的差商估计导数；步长越小通常越准，但表格数据仍只给出近似值。 · Estimate the derivative with a difference quotient from nearby points; a smaller step is usually better, but table data still give only an approximation."
      }
    ],
    "conditions": [
      "\\(f\\) 在 \\(x=a\\) 处可导（左右导数存在且相等），且 \\(a\\) 在定义域内。 · \\(f\\) is differentiable at \\(x=a\\) (the left and right derivatives exist and agree), and \\(a\\) is in the domain.",
      "平均变化率要求区间端点不同，即 \\(b\\ne a\\)；在 \\(b=a\\) 处分母为零，平均变化率无定义。 · An average rate requires distinct endpoints, \\(b\\ne a\\); at \\(b=a\\) the denominator is zero and the average rate is undefined.",
      "输入量与输出量的单位必须明确且一致；不同单位不能直接相减或相除。 · The units of input and output must be explicit and consistent; quantities with different units cannot be subtracted or divided directly.",
      "导数描述局部行为：\\(f'(a)\\) 不能代表整个区间上的平均变化，也不能随意外推到远离 \\(a\\) 的地方。 · A derivative describes local behavior: \\(f'(a)\\) does not represent an average over a whole interval and should not be extrapolated far from \\(a\\).",
      "用差商估计时，步长 \\(h\\) 要足够小，且函数在附近足够光滑；估计值应写成“约等于”。 · When estimating with a difference quotient, the step \\(h\\) must be small enough and the function sufficiently smooth nearby; report the result as “approximately.”",
      "情境解释必须说明“相对于哪个变量变化”；不要把输出值 \\(f(a)\\) 当作变化率。 · A contextual interpretation must state “with respect to which variable”; do not treat the output value \\(f(a)\\) as a rate."
    ],
    "keyPoints": [
      "瞬时变化率是切线斜率，平均变化率是割线斜率。 · An instantaneous rate is a tangent slope; an average rate is a secant slope.",
      "\\(f'(a)\\) 回答“在 \\(a\\) 处变化多快”，\\(f(a)\\) 回答“在 \\(a\\) 处有多少”。 · \\(f'(a)\\) answers “how fast is it changing at \\(a\\),” while \\(f(a)\\) answers “how much is there at \\(a\\).”",
      "解释三件套：数值、单位、增减方向。 · An interpretation needs three parts: value, units, and increasing or decreasing direction.",
      "单位 = 输出单位每输入单位。 · Units = output units per input unit.",
      "负导数表示输出随输入增大而减小；绝对值越大变化越快。 · A negative derivative means the output decreases as the input increases; a larger absolute value means a faster change.",
      "表格估计用邻近点差商，并注明近似。 · Estimate from a table with a difference quotient from nearby points, and state that it is approximate.",
      "单位换算按比例：每小时变每分钟除以 60。 · Convert units proportionally: per hour to per minute requires dividing by 60.",
      "AP 解释句模板：At \\(x=a\\), the output is increasing/decreasing at a rate of … . · AP interpretation template: At \\(x=a\\), the output is increasing/decreasing at a rate of … ."
    ],
    "misconceptions": [
      "把 \\(f'(a)\\) 当成 \\(f(a)\\) 的值。 · Treating \\(f'(a)\\) as the value \\(f(a)\\).",
      "写“导数是 3”却不给单位。 · Writing “the derivative is 3” without units.",
      "把导数的单位写成输出单位，漏掉“每输入单位”。 · Writing the derivative's unit as the output unit and omitting “per input unit.”",
      "把负导数理解为函数值为负，而不是函数值随输入增大而减小。 · Interpreting a negative derivative as a negative function value rather than a decreasing function value.",
      "把区间上的平均变化率当作某一点的瞬时变化率。 · Treating an average rate on an interval as an instantaneous rate at a point.",
      "在表格中直接取 \\(f(a)\\) 当作 \\(f'(a)\\)。 · Taking \\(f(a)\\) from a table as if it were \\(f'(a)\\).",
      "单位换算时把“每输入单位”的乘除方向弄反。 · Reversing the multiplication or division when converting “per input unit.”",
      "认为导数在不可导点也存在。 · Assuming a derivative exists at a point where the function is not differentiable."
    ],
    "examples": [
      {
        "title": "例 1 · 咖啡冷却 · Coffee Cooling",
        "prompt": "一杯咖啡的温度为 \\(T(t)=20+60e^{-0.1t}\\) °C，其中 \\(t\\) 以分钟计。求 \\(T'(t)\\) 与 \\(T'(5)\\)，并解释其含义。 · The temperature of a cup of coffee is \\(T(t)=20+60e^{-0.1t}\\) °C, where \\(t\\) is in minutes. Find \\(T'(t)\\) and \\(T'(5)\\), and interpret the result.",
        "steps": [
          "求导：\\(T'(t)=60(-0.1)e^{-0.1t}=-6e^{-0.1t}\\)。 · Differentiate: \\(T'(t)=60(-0.1)e^{-0.1t}=-6e^{-0.1t}\\).",
          "代入：\\(T'(5)=-6e^{-0.5}\\approx-3.64\\)。 · Substitute: \\(T'(5)=-6e^{-0.5}\\approx-3.64\\).",
          "单位是 °C/min；负号表示温度在下降。 · The unit is °C/min; the negative sign means the temperature is decreasing."
        ],
        "solution": "在 \\(t=5\\) min 时，咖啡温度约为 \\(20+60e^{-0.5}\\approx56.4\\) °C，并正以约 \\(3.64\\) °C/min 的速率下降。 · At \\(t=5\\) min the coffee is about \\(20+60e^{-0.5}\\approx56.4\\) °C and is cooling at about \\(3.64\\) °C/min.",
        "solutionLatex": "T'(5)=-6e^{-0.5}\\approx-3.64\\ \\mathrm{°C/min}"
      },
      {
        "title": "例 2 · 种群增长 · Population Growth",
        "prompt": "某小镇人口为 \\(P(t)=12+1.8t+0.05t^{2}\\) 千人，\\(t\\) 为年数。求 \\(P(3)\\) 与 \\(P'(3)\\)，解释两者区别，并估计 \\(P(3.2)\\)。 · A town's population is \\(P(t)=12+1.8t+0.05t^{2}\\) thousand people, where \\(t\\) is years. Find \\(P(3)\\) and \\(P'(3)\\), explain the difference, and estimate \\(P(3.2)\\).",
        "steps": [
          "函数值：\\(P(3)=12+5.4+0.45=17.85\\) 千人。 · Function value: \\(P(3)=12+5.4+0.45=17.85\\) thousand people.",
          "变化率：\\(P'(t)=1.8+0.1t\\)，所以 \\(P'(3)=2.1\\) 千人/年。 · Rate: \\(P'(t)=1.8+0.1t\\), so \\(P'(3)=2.1\\) thousand people per year.",
          "局部线性估计：\\(P(3.2)\\approx P(3)+P'(3)(0.2)=17.85+0.42=18.27\\) 千人。 · Local linear estimate: \\(P(3.2)\\approx P(3)+P'(3)(0.2)=17.85+0.42=18.27\\) thousand people."
        ],
        "solution": "在 \\(t=3\\) 年时约有 17.85 千人；人口正以约 2.1 千人/年的速率增长；\\(P(3.2)\\) 约为 18.27 千人。 · At \\(t=3\\) years there are about 17.85 thousand people; the population is growing at about 2.1 thousand people per year; \\(P(3.2)\\) is about 18.27 thousand people.",
        "solutionLatex": "P'(3)=2.1\\ \\text{千人/年}"
      },
      {
        "title": "例 3 · 表格估计 · Estimating from a Table",
        "prompt": "下表给出水箱水量 \\(V(t)\\)（升）随时间 \\(t\\)（小时）的变化：\\(t=4,5,6\\) 时 \\(V=22,20,18.4\\)。用中心差商估计 \\(V'(5)\\)，并解释其含义。 · The table gives the volume \\(V(t)\\) in liters at time \\(t\\) in hours: at \\(t=4,5,6\\), \\(V=22,20,18.4\\). Use a central difference to estimate \\(V'(5)\\) and interpret it.",
        "steps": [
          "中心差商：\\(\\dfrac{V(6)-V(4)}{6-4}=\\dfrac{18.4-22}{2}=-1.8\\)。 · Central difference: \\(\\dfrac{V(6)-V(4)}{6-4}=\\dfrac{18.4-22}{2}=-1.8\\).",
          "单位是 L/h；负号表示水量在减少。 · The unit is L/h; the negative sign means the volume is decreasing.",
          "前向差商 \\(\\dfrac{V(6)-V(5)}{1}=-1.6\\) 也可用，但中心差商利用了两侧信息，通常更稳。 · The forward difference \\(\\dfrac{V(6)-V(5)}{1}=-1.6\\) is also usable, but the central difference uses both sides and is usually more stable."
        ],
        "solution": "\\(V'(5)\\approx-1.8\\) L/h；在 \\(t=5\\) h 时，水量约以 \\(1.8\\) L/h 的速率减少。 · \\(V'(5)\\approx-1.8\\) L/h; at \\(t=5\\) h the volume is decreasing at about \\(1.8\\) L/h.",
        "solutionLatex": "V'(5)\\approx\\dfrac{18.4-22}{6-4}=-1.8\\ \\mathrm{L/h}"
      },
      {
        "title": "例 4 · 单位换算 · Unit Conversion",
        "prompt": "某产品成本 \\(C(x)\\) 以美元计，\\(x\\) 以百件计，且 \\(C'(2)=150\\)。把 \\(C'(2)\\) 换算成“美元每件”，并解释。 · A product's cost \\(C(x)\\) is in dollars and \\(x\\) is in hundreds of items, with \\(C'(2)=150\\). Convert \\(C'(2)\\) to dollars per item and interpret it.",
        "steps": [
          "原单位：\\(C'(2)=150\\) 美元每百件。 · Original units: \\(C'(2)=150\\) dollars per hundred items.",
          "一百件等于 100 件，所以 \\(150\\div100=1.5\\) 美元每件。 · One hundred items equals 100 items, so \\(150\\div100=1.5\\) dollars per item.",
          "含义：在产量为 200 件时，每多生产一件，成本约增加 1.50 美元。 · Meaning: at a production level of 200 items, each additional item raises cost by about \\$1.50."
        ],
        "solution": "\\(C'(2)=150\\) 美元每百件 \\(=1.5\\) 美元每件；在 \\(x=2\\)（即 200 件）处，成本约以每件 1.50 美元的速率增加。 · \\(C'(2)=150\\) dollars per hundred items \\(=1.5\\) dollars per item; at \\(x=2\\) (200 items), cost is increasing at about \\$1.50 per item.",
        "solutionLatex": "C'(2)=150\\ \\text{美元每百件}=1.5\\ \\text{美元每件}"
      },
      {
        "title": "例 5 · 估计与解释 · Estimate and Interpret",
        "prompt": "某容器中水量为 \\(W(t)\\) 加仑，\\(t\\) 为分钟；已知 \\(W(10)=40\\)、\\(W'(10)=-3.2\\)。解释 \\(W'(10)\\)，估计 \\(W(12)\\)，并讨论这个估计是否可能明显偏离实际值。 · A tank holds \\(W(t)\\) gallons at \\(t\\) minutes; \\(W(10)=40\\) and \\(W'(10)=-3.2\\). Interpret \\(W'(10)\\), estimate \\(W(12)\\), and discuss whether the estimate could differ noticeably from the actual value.",
        "steps": [
          "\\(W'(10)=-3.2\\) 表示在 \\(t=10\\) min 时水量正以 3.2 gal/min 的速率减少。 · \\(W'(10)=-3.2\\) means that at \\(t=10\\) min the volume is decreasing at \\(3.2\\) gal/min.",
          "线性估计：\\(W(12)\\approx W(10)+W'(10)(2)=40-6.4=33.6\\) gal。 · Linear estimate: \\(W(12)\\approx W(10)+W'(10)(2)=40-6.4=33.6\\) gal.",
          "这只是在 \\(t=10\\) 附近的局部线性估计；若排水速率随后改变，实际值会偏离 33.6 gal。 · This is only a local linear estimate near \\(t=10\\); if the drainage rate changes afterward, the actual value will differ from 33.6 gal."
        ],
        "solution": "在 \\(t=10\\) min 时水量约为 40 gal，且正以 3.2 gal/min 的速率减少；若速率近似不变，\\(t=12\\) min 时约为 33.6 gal，但该估计只在短时间内可靠。 · At \\(t=10\\) min the tank holds about 40 gal and is draining at about \\(3.2\\) gal/min; if the rate stays nearly constant, the volume at \\(t=12\\) min is about 33.6 gal, but this estimate is reliable only over a short time.",
        "solutionLatex": "W(12)\\approx40+(-3.2)(2)=33.6\\ \\mathrm{gal}"
      },
      {
        "title": "例 6 · 解释句与合理性 · Interpretation and Reasonableness",
        "prompt": "某药物浓度 \\(C(t)\\) 为 mg/L，\\(t\\) 为小时；已知 \\(C(2)=8\\)、\\(C'(2)=-0.8\\)。写出完整解释句，并判断“在 \\(t=3\\) h 时浓度约为 7.2 mg/L”是否合理。 · A drug concentration \\(C(t)\\) is in mg/L at \\(t\\) hours; \\(C(2)=8\\) and \\(C'(2)=-0.8\\). Write a complete interpretation and decide whether “the concentration is about 7.2 mg/L at \\(t=3\\) h” is reasonable.",
        "steps": [
          "在 \\(t=2\\) h 时浓度为 8 mg/L。 · At \\(t=2\\) h the concentration is 8 mg/L.",
          "\\(C'(2)=-0.8\\) mg/L per hour 表示浓度正以 0.8 mg/L per hour 的速率下降。 · \\(C'(2)=-0.8\\) mg/L per hour means the concentration is decreasing at \\(0.8\\) mg/L per hour.",
          "若变化率近似保持，则 \\(C(3)\\approx C(2)+C'(2)(1)=7.2\\) mg/L；但真实衰减通常不是线性的，所以 7.2 只是近似值。 · If the rate stays nearly constant, \\(C(3)\\approx C(2)+C'(2)(1)=7.2\\) mg/L; however, real decay is usually not linear, so 7.2 is only an approximation."
        ],
        "solution": "在 \\(t=2\\) h 时浓度为 8 mg/L，并正以约 0.8 mg/L per hour 的速率下降；线性估计给出 \\(t=3\\) h 时约 7.2 mg/L，这个说法作为近似合理，但不能当作精确值。 · At \\(t=2\\) h the concentration is 8 mg/L and is decreasing at about \\(0.8\\) mg/L per hour; the linear estimate gives about 7.2 mg/L at \\(t=3\\) h, which is reasonable as an approximation but not an exact value.",
        "solutionLatex": "C(3)\\approx8+(-0.8)(1)=7.2\\ \\mathrm{mg/L}"
      }
    ],
    "examTips": [
      "AP 解释句要同时给出数值、单位、增减方向，以及“在哪个输入值处”。 · An AP interpretation must include the value, units, increasing or decreasing direction, and the input value at which it applies.",
      "看到“rate”先问单位；单位不对通常意味着读错了量。 · When you see “rate,” ask for the units first; wrong units usually mean the wrong quantity was read.",
      "区分 \\(f(a)\\) 与 \\(f'(a)\\)：题目问“value”还是“rate”。 · Distinguish \\(f(a)\\) from \\(f'(a)\\): does the question ask for a value or a rate?",
      "表格估计要写“approximately”，并用邻近点。 · For table estimates, write “approximately” and use nearby points.",
      "单位换算先写“1 个新单位 = … 个旧单位”，再按比例调整。 · For unit conversion, first write “1 new unit = … old units,” then adjust proportionally.",
      "图像题：切线斜率是瞬时变化率，割线斜率是平均变化率；不要把函数值当斜率。 · On a graph, a tangent slope is an instantaneous rate and a secant slope is an average rate; do not read a function value as a slope.",
      "负号解释为“减少/下降”，不是“负值”。 · Interpret a negative sign as “decreasing/falling,” not as “negative value.”"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.1",
        "title": "瞬时变化率 · Defining Average and Instantaneous Rates of Change",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.2",
        "title": "直线运动 · Straight-Line Motion: Connecting Position, Velocity, and Acceleration",
        "relation": "应用 · Application"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.3",
        "title": "变化率与单位 · Rates of Change in Applied Contexts Other Than Motion",
        "relation": "相关 · Related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.6",
        "title": "局部线性近似 · Approximating Values of a Function Using Local Linearity and Linearization",
        "relation": "相关 · Related"
      }
    ],
    "modules": [
      {
        "id": "motion-sva",
        "title": "位置·速度·加速度"
      }
    ],
    "practiceHref": "#/math/practice/calc-u4",
    "connections": [
      "先修：2.1 平均与瞬时变化率、2.2 导数定义提供差商与极限工具。 · Prerequisite: 2.1 average and instantaneous rates and 2.2 the definition of the derivative provide the difference-quotient and limit tools.",
      "后续：4.2 直线运动与 4.3 变化率把同一解释框架用于位置、速度、成本、人口等情境。 · Follow-up: 4.2 straight-line motion and 4.3 rates in applied contexts apply the same interpretation framework to position, velocity, cost, and population.",
      "跨学科：物理中的速度与加速度、生物中的种群增长率、经济中的边际成本都使用“输出单位每输入单位”。 · Cross-disciplinary: velocity and acceleration in physics, population growth rates in biology, and marginal cost in economics all use “output units per input unit.”"
    ],
    "intuitionDetailed": "导数的情境解释可以拆成三步：第一步写清“谁随谁变”，例如 \\(C\\) 随 \\(x\\) 变、\\(P\\) 随 \\(t\\) 变；第二步算或估计 \\(f'(a)\\)，并把单位写成输出单位每输入单位；第三步用一句完整的话说出“在 \\(a\\) 处，输出正以 … 的速率增加/减少”。平均变化率是区间上的整体快慢，瞬时变化率是一点处的快慢；表格与图像给出的是估计值，必须注明近似。 · A contextual interpretation of the derivative has three steps: first state “what changes with respect to what,” for example \\(C\\) with respect to \\(x\\) or \\(P\\) with respect to \\(t\\); second compute or estimate \\(f'(a)\\) and write the units as output units per input unit; third state in one complete sentence “at \\(a\\), the output is increasing/decreasing at a rate of ….”An average rate is the overall speed on an interval, while an instantaneous rate is the speed at a point; tables and graphs give estimates, so state that they are approximate.",
    "development": [
      "先问“谁随谁变”，写清输入、输出及其单位。 · First ask “what changes with respect to what,” and write the input, output, and their units.",
      "用两点差商算平均变化率，并在图上画割线。 · Compute an average rate with a two-point difference quotient and draw the secant on the graph.",
      "让第二点趋近，取极限得到瞬时变化率与切线。 · Let the second point approach, take the limit, and obtain the instantaneous rate and tangent line.",
      "用符号、大小、单位写出情境解释句。 · Write a contextual interpretation using the sign, magnitude, and units.",
      "从表格或图像估计导数，并注明近似。 · Estimate a derivative from a table or graph and state that it is approximate.",
      "做单位换算与合理性检查，确认答案没有被外推得太远。 · Convert units and check reasonableness, making sure the answer is not extrapolated too far."
    ],
    "checks": [
      "\\(f'(3)=5\\) 与 \\(f(3)=5\\) 的区别是什么？ · What is the difference between \\(f'(3)=5\\) and \\(f(3)=5\\)?",
      "若 \\(C(x)\\) 的单位是美元、\\(x\\) 的单位是件，那么 \\(C'(x)\\) 的单位是什么？ · If \\(C(x)\\) is in dollars and \\(x\\) is in items, what is the unit of \\(C'(x)\\)?",
      "负导数说明函数值怎样变化？ · What does a negative derivative say about how the function value changes?",
      "表格估计的导数与真实瞬时值为什么可能不同？ · Why can a derivative estimated from a table differ from the true instantaneous value?",
      "输入单位从“小时”改成“分钟”时，导数的数值如何变化？ · How does the numerical value of the derivative change when the input unit changes from hours to minutes?"
    ],
    "vocabulary": [
      {
        "termZh": "瞬时变化率",
        "termEn": "instantaneous rate of change",
        "defZh": "函数在某一点处的变化率，由导数 \\(f'(a)\\) 给出，等于该点切线的斜率。",
        "defEn": "The rate at which a function changes at a single point, given by the derivative \\(f'(a)\\) and equal to the tangent slope there."
      },
      {
        "termZh": "平均变化率",
        "termEn": "average rate of change",
        "defZh": "在区间 \\([a,b]\\) 上的变化率，等于 \\(\\dfrac{f(b)-f(a)}{b-a}\\)，即割线斜率。",
        "defEn": "The rate of change over an interval \\([a,b]\\), equal to \\(\\dfrac{f(b)-f(a)}{b-a}\\), the secant slope."
      },
      {
        "termZh": "导数的情境意义",
        "termEn": "derivative in context",
        "defZh": "用实际单位说明导数在该问题中表示“输出随输入变化的瞬时快慢”。",
        "defEn": "An interpretation of a derivative in a problem using real units to say how fast the output changes with respect to the input."
      },
      {
        "termZh": "导数的单位",
        "termEn": "units of the derivative",
        "defZh": "\\(f'(x)\\) 的单位是 \\(f\\) 的单位除以 \\(x\\) 的单位，即输出单位每输入单位。",
        "defEn": "The unit of \\(f'(x)\\) is the unit of \\(f\\) divided by the unit of \\(x\\), namely output units per input unit."
      },
      {
        "termZh": "割线",
        "termEn": "secant line",
        "defZh": "通过曲线上两点的直线，其斜率为区间上的平均变化率。",
        "defEn": "A line through two points on a curve, whose slope is the average rate of change on the interval."
      },
      {
        "termZh": "切线",
        "termEn": "tangent line",
        "defZh": "在一点处与曲线局部相切、斜率等于该点导数的直线。",
        "defEn": "A line touching a curve locally at a point, with slope equal to the derivative there."
      },
      {
        "termZh": "差商",
        "termEn": "difference quotient",
        "defZh": "\\(\\dfrac{f(a+h)-f(a)}{h}\\)，用于计算或估计瞬时变化率。",
        "defEn": "The quotient \\(\\dfrac{f(a+h)-f(a)}{h}\\), used to compute or estimate an instantaneous rate of change."
      },
      {
        "termZh": "边际变化",
        "termEn": "marginal change",
        "defZh": "输入增加一个单位时输出的近似改变量，常用导数估计。",
        "defEn": "The approximate change in output when the input increases by one unit, often estimated by a derivative."
      }
    ]
  },
  "4.2": {
    "id": "math/calc-u4/4.2",
    "subject": "math",
    "chapterId": "calc-u4",
    "unitCode": "4",
    "unitTitleZh": "导数的情境应用",
    "unitTitleEn": "Contextual Applications of Differentiation",
    "code": "4.2",
    "titleZh": "直线运动",
    "titleEn": "Straight-Line Motion: Connecting Position, Velocity, and Acceleration",
    "layer": "ap",
    "summary": "直线运动中位置 \\(s(t)\\)、速度 \\(v(t)=s'(t)\\)、加速度 \\(a(t)=v'(t)=s''(t)\\) 相互联系：速度的符号给出运动方向，速度的大小 \\(|v(t)|\\) 是速率；加速度与速度同号时加速，异号时减速。位移是位置的变化量，总路程要按转向点分段累加。 · In straight-line motion, position \\(s(t)\\), velocity \\(v(t)=s'(t)\\), and acceleration \\(a(t)=v'(t)=s''(t)\\) are linked: the sign of velocity gives the direction of motion, its magnitude \\(|v(t)|\\) is speed, and the object speeds up when velocity and acceleration have the same sign and slows down when they have opposite signs. Displacement is the change in position, while total distance must be accumulated in pieces between turnarounds.",
    "learningObjectives": [
      "能由 \\(s(t)\\) 求 \\(v(t)\\)、\\(a(t)\\)，并解释每个量的物理意义与单位。 · Obtain \\(v(t)\\) and \\(a(t)\\) from \\(s(t)\\), and explain the physical meaning and units of each quantity.",
      "能判断物体何时静止、向哪个方向运动、何时加速或减速。 · Determine when an object is at rest, which way it moves, and when it speeds up or slows down.",
      "能区分位移与总路程，并用 \\(v\\) 的定积分或图像面积计算。 · Distinguish displacement from total distance and compute them with definite integrals or areas under the velocity graph.",
      "能由 \\(v(t)\\) 或 \\(a(t)\\) 的图像、表格反推运动信息，并用符号表验证结论。 · Infer motion information from graphs or tables of \\(v(t)\\) or \\(a(t)\\), and verify conclusions with a sign chart."
    ],
    "essentialKnowledge": [
      "导数可用于解决涉及位置、速度、速率和加速度的直线运动问题；位置、速度、加速度构成导数链：\\(v(t)=s'(t)\\)，\\(a(t)=v'(t)=s''(t)\\)。 · The derivative can be used to solve rectilinear motion problems involving position, speed, velocity, and acceleration; position, velocity, and acceleration form the derivative chain \\(v(t)=s'(t)\\), \\(a(t)=v'(t)=s''(t)\\).",
      "速度是带符号的量（在一维中用正负表示方向）；速率是速度的大小 \\(|v(t)|\\)，不带方向。 · Velocity is a signed quantity (in one dimension its sign gives direction); speed is the magnitude \\(|v(t)|\\), with no direction.",
      "物体瞬时静止当且仅当 \\(v(t)=0\\)；若 \\(v\\) 在该点变号，则运动方向改变，该点是转向点。 · An object is instantaneously at rest exactly when \\(v(t)=0\\); if \\(v\\) changes sign there, the direction of motion changes and the point is a turnaround.",
      "当 \\(v\\) 与 \\(a\\) 同号时加速，异号时减速；不能只看 \\(a\\) 的符号。 · The object speeds up when \\(v\\) and \\(a\\) share a sign and slows down when they have opposite signs; do not look only at the sign of \\(a\\).",
      "位移是位置的变化量 \\(s(b)-s(a)\\)，也等于 \\(\\int_a^b v(t)\\,\\mathrm{d}t\\)；总路程是 \\(\\int_a^b |v(t)|\\,\\mathrm{d}t\\)。 · Displacement is the change in position \\(s(b)-s(a)\\), equal to \\(\\int_a^b v(t)\\,\\mathrm{d}t\\); total distance is \\(\\int_a^b |v(t)|\\,\\mathrm{d}t\\).",
      "平均速度是位移除以时间，平均速率是总路程除以时间；两者一般不同。 · Average velocity is displacement divided by time, while average speed is total distance divided by time; they are usually different.",
      "图像读法：\\(s\\) 图像的切线斜率是 \\(v\\)；\\(v\\) 图像的切线斜率是 \\(a\\)；\\(v\\) 图像与 \\(t\\) 轴的有向面积是位移。 · Reading graphs: the tangent slope of \\(s\\) is \\(v\\); the tangent slope of \\(v\\) is \\(a\\); the signed area between \\(v\\) and the \\(t\\)-axis is displacement.",
      "直线运动题要先选原点与正方向，并在整个解答中保持一致；单位要跟随 \\(s,v,a\\)。 · In a rectilinear-motion problem, choose an origin and positive direction first and keep them consistent; units must follow \\(s\\), \\(v\\), and \\(a\\)."
    ],
    "definition": "直线运动用一个位置函数 \\(s(t)\\) 描述物体在一条直线上的位置（相对选定原点和正方向）。速度 \\(v(t)=s'(t)\\) 是位置对时间的瞬时变化率，单位是长度单位每时间单位；加速度 \\(a(t)=v'(t)=s''(t)\\) 是速度对时间的瞬时变化率，单位是长度单位每时间单位的平方。速率是 \\(|v(t)|\\)。速度的符号表示运动方向，加速度的符号表示速度变化的方向。 · Rectilinear motion is described by a position function \\(s(t)\\) along a line relative to a chosen origin and positive direction. Velocity \\(v(t)=s'(t)\\) is the instantaneous rate of change of position with respect to time, with units of length per time; acceleration \\(a(t)=v'(t)=s''(t)\\) is the instantaneous rate of change of velocity, with units of length per time squared. Speed is \\(|v(t)|\\). The sign of velocity gives the direction of motion, while the sign of acceleration gives the direction in which velocity is changing.",
    "intuition": "把 \\(s(t)\\) 的图像想成轨迹的“高度”：切线斜率就是速度；\\(v(t)\\) 图像的切线斜率就是加速度；\\(v(t)\\) 图像与 \\(t\\) 轴之间的有向面积是位移，取绝对值后的面积是总路程。符号表是判断方向、加速与减速的最快工具。 · View the graph of \\(s(t)\\) as the height of the trajectory: its tangent slope is velocity; the tangent slope of the \\(v(t)\\) graph is acceleration; the signed area between \\(v(t)\\) and the \\(t\\)-axis is displacement, while the area after taking absolute values is total distance. A sign chart is the fastest tool for direction, speeding up, and slowing down.",
    "formulas": [
      {
        "latex": "v(t)=s'(t),\\quad a(t)=v'(t)=s''(t)",
        "note": "直线运动的导数链：速度是位置的导数，加速度是速度的导数。 · The rectilinear-motion derivative chain: velocity is the derivative of position, and acceleration is the derivative of velocity."
      },
      {
        "latex": "\\text{速率}=|v(t)|",
        "note": "速率是速度的大小，不带方向。 · Speed is the magnitude of velocity, without direction."
      },
      {
        "latex": "\\text{位移}=s(b)-s(a)=\\int_a^b v(t)\\,\\mathrm{d}t",
        "note": "位移是速度的有向积分，只关心起点与终点。 · Displacement is the signed integral of velocity and depends only on the endpoints."
      },
      {
        "latex": "\\text{总路程}=\\int_a^b |v(t)|\\,\\mathrm{d}t",
        "note": "总路程要按转向点分段，并对每一段取绝对值。 · Total distance splits at turnarounds and takes absolute values on each piece."
      },
      {
        "latex": "\\text{平均速度}=\\dfrac{s(b)-s(a)}{b-a},\\quad \\text{平均速率}=\\dfrac{\\int_a^b |v(t)|\\,\\mathrm{d}t}{b-a}",
        "note": "平均速度用位移，平均速率用总路程。 · Average velocity uses displacement; average speed uses total distance."
      }
    ],
    "derivationNotes": [
      {
        "from": "位置 · position",
        "to": "速度 · velocity",
        "note": "位置差商 \\(\\dfrac{s(t+h)-s(t)}{h}\\) 的极限是 \\(v(t)=s'(t)\\)。 · The limit of the position difference quotient \\(\\dfrac{s(t+h)-s(t)}{h}\\) is \\(v(t)=s'(t)\\)."
      },
      {
        "from": "速度 · velocity",
        "to": "加速度 · acceleration",
        "note": "对速度再求一次导数得到 \\(a(t)=v'(t)=s''(t)\\)。 · Differentiate velocity once more to obtain \\(a(t)=v'(t)=s''(t)\\)."
      },
      {
        "from": "速度与加速度的符号 · signs of velocity and acceleration",
        "to": "加速/减速 · speeding up or slowing down",
        "note": "比较 \\(v\\) 与 \\(a\\) 的符号：同号时速度绝对值增大（加速），异号时减小（减速）。 · Compare the signs of \\(v\\) and \\(a\\): when they agree, the magnitude of velocity increases (speeding up); when they differ, it decreases (slowing down)."
      },
      {
        "from": "速度图像 · velocity graph",
        "to": "位移与路程 · displacement and distance",
        "note": "把 \\(v\\) 图像按 \\(t\\) 轴上下分块：带符号面积相加得位移，绝对面积相加得总路程。 · Split the \\(v\\) graph into pieces above and below the \\(t\\)-axis: adding signed areas gives displacement, while adding absolute areas gives total distance."
      }
    ],
    "conditions": [
      "\\(s(t)\\) 在讨论区间上二阶可导，且时间单位一致。 · \\(s(t)\\) is twice differentiable on the interval under discussion, and the time unit is consistent.",
      "原点与正方向选定后必须保持一致；否则速度与位移的符号会互相矛盾。 · Once the origin and positive direction are chosen, they must stay consistent; otherwise the signs of velocity and displacement will conflict.",
      "静止需要 \\(v(t)=0\\)；转向还需要 \\(v\\) 在该点两侧变号。 · Rest requires \\(v(t)=0\\); a turnaround additionally requires \\(v\\) to change sign across that point.",
      "加速或减速要看 \\(v\\) 与 \\(a\\) 是否同号，不能只看 \\(a\\) 的正负。 · Speeding up or slowing down depends on whether \\(v\\) and \\(a\\) share a sign, not on the sign of \\(a\\) alone.",
      "位移与总路程不同；总路程必须在 \\(v=0\\) 处按区间分段。 · Displacement and total distance are different; total distance must be split into intervals at the zeros of \\(v\\).",
      "平均速度与平均速率不同；图像面积要带符号，路程面积不带符号。 · Average velocity and average speed differ; graph areas are signed for displacement but unsigned for distance."
    ],
    "keyPoints": [
      "\\(v=s'\\)，\\(a=v'=s''\\)；先写导数链再代时间。 · \\(v=s'\\) and \\(a=v'=s''\\); write the derivative chain before substituting a time.",
      "速度的符号给方向，速度的大小给速率。 · The sign of velocity gives direction; its magnitude gives speed.",
      "\\(v=0\\) 是静止；\\(v\\) 变号才是转向。 · \\(v=0\\) means rest; a turnaround requires \\(v\\) to change sign.",
      "\\(v\\) 与 \\(a\\) 同号加速，异号减速。 · \\(v\\) and \\(a\\) sharing a sign means speeding up; opposite signs mean slowing down.",
      "位移 \\(=s(b)-s(a)\\)；总路程按转向点分段累加绝对值。 · Displacement \\(=s(b)-s(a)\\); total distance adds absolute values in pieces between turnarounds.",
      "图像：\\(s\\) 的斜率是 \\(v\\)，\\(v\\) 的斜率是 \\(a\\)，\\(v\\) 的面积是位移。 · Graphs: the slope of \\(s\\) is \\(v\\), the slope of \\(v\\) is \\(a\\), and the area under \\(v\\) is displacement.",
      "平均速度用位移，平均速率用总路程。 · Average velocity uses displacement; average speed uses total distance.",
      "AP 题常给 \\(v\\) 的图像或表格，问方向、静止、位移、路程与加速/减速。 · AP problems often give a graph or table of \\(v\\) and ask about direction, rest, displacement, distance, and speeding up or slowing down."
    ],
    "misconceptions": [
      "把速度与速率混为一谈。 · Confusing velocity with speed.",
      "认为负速度就是减速；负速度只表示向负方向运动。 · Thinking a negative velocity means slowing down; a negative velocity only means motion in the negative direction.",
      "把加速度为负当作减速；减速要看 \\(v\\) 与 \\(a\\) 是否异号。 · Treating negative acceleration as slowing down; slowing down depends on whether \\(v\\) and \\(a\\) have opposite signs.",
      "把位移与总路程混为一谈。 · Confusing displacement with total distance.",
      "认为 \\(v=0\\) 时物体一定停留；这只是瞬时静止，之后可能反向运动。 · Assuming the object stays at rest whenever \\(v=0\\); this is only instantaneous rest, and it may reverse afterward.",
      "用 \\(s(t)\\) 的符号判断运动方向；方向应由 \\(v(t)\\) 的符号决定。 · Using the sign of \\(s(t)\\) to determine direction; direction is determined by the sign of \\(v(t)\\).",
      "计算总路程时不分段、不加绝对值。 · Computing total distance without splitting at turnarounds or taking absolute values.",
      "把平均速度与平均速率混用。 · Using average velocity and average speed interchangeably."
    ],
    "examples": [
      {
        "title": "例 1 · 符号表与转向 · Sign Chart and Turnarounds",
        "prompt": "质点位置为 \\(s(t)=t^{3}-6t^{2}+9t\\)（米，秒，\\(t\\ge0\\)）。求 \\(v(t)\\)、\\(a(t)\\)，并判断何时静止、向哪个方向运动、何时加速或减速。 · A particle has position \\(s(t)=t^{3}-6t^{2}+9t\\) (meters, seconds, \\(t\\ge0\\)). Find \\(v(t)\\) and \\(a(t)\\), and determine when it is at rest, which way it moves, and when it speeds up or slows down.",
        "steps": [
          "求导：\\(v(t)=3t^{2}-12t+9=3(t-1)(t-3)\\)。 · Differentiate: \\(v(t)=3t^{2}-12t+9=3(t-1)(t-3)\\).",
          "再求导：\\(a(t)=6t-12=6(t-2)\\)。 · Differentiate again: \\(a(t)=6t-12=6(t-2)\\).",
          "\\(v=0\\) 时 \\(t=1,3\\)；方向表：\\(v>0\\) 于 \\([0,1)\\cup(3,\\infty)\\)，\\(v<0\\) 于 \\((1,3)\\)。 · \\(v=0\\) at \\(t=1,3\\); sign chart: \\(v>0\\) on \\([0,1)\\cup(3,\\infty)\\) and \\(v<0\\) on \\((1,3)\\).",
          "\\(a<0\\) 于 \\([0,2)\\)，\\(a>0\\) 于 \\((2,\\infty)\\)。 · \\(a<0\\) on \\([0,2)\\) and \\(a>0\\) on \\((2,\\infty)\\).",
          "\\(v\\) 与 \\(a\\) 同号：\\((1,2)\\) 与 \\((3,\\infty)\\) 加速；异号：\\((0,1)\\) 与 \\((2,3)\\) 减速。 · \\(v\\) and \\(a\\) share a sign on \\((1,2)\\) and \\((3,\\infty)\\), so the particle speeds up there; they have opposite signs on \\((0,1)\\) and \\((2,3)\\), so it slows down there."
        ],
        "solution": "质点在 \\(t=1,3\\) 瞬时静止；在 \\([0,1)\\) 与 \\((3,\\infty)\\) 向正方向运动，在 \\((1,3)\\) 向负方向运动；在 \\((1,2)\\) 与 \\((3,\\infty)\\) 加速，在 \\((0,1)\\) 与 \\((2,3)\\) 减速。 · The particle is instantaneously at rest at \\(t=1,3\\); it moves in the positive direction on \\([0,1)\\) and \\((3,\\infty)\\), and in the negative direction on \\((1,3)\\); it speeds up on \\((1,2)\\) and \\((3,\\infty)\\), and slows down on \\((0,1)\\) and \\((2,3)\\).",
        "solutionLatex": "v(t)=3(t-1)(t-3),\\quad a(t)=6(t-2)"
      },
      {
        "title": "例 2 · 位移与总路程 · Displacement and Total Distance",
        "prompt": "某质点的速度为 \\(v(t)=t^{2}-4t+3\\)（米/秒），\\(0\\le t\\le4\\)。求位移、总路程、平均速度与平均速率。 · A particle has velocity \\(v(t)=t^{2}-4t+3\\) (meters per second) for \\(0\\le t\\le4\\). Find the displacement, total distance, average velocity, and average speed.",
        "steps": [
          "\\(v(t)=(t-1)(t-3)\\)，在 \\(t=1,3\\) 处为零。 · \\(v(t)=(t-1)(t-3)\\), with zeros at \\(t=1,3\\).",
          "位移：\\(\\int_0^4 v\\,\\mathrm{d}t=\\left[\\dfrac{t^{3}}{3}-2t^{2}+3t\\right]_0^4=\\dfrac{4}{3}\\) m。 · Displacement: \\(\\int_0^4 v\\,\\mathrm{d}t=\\left[\\dfrac{t^{3}}{3}-2t^{2}+3t\\right]_0^4=\\dfrac{4}{3}\\) m.",
          "总路程：三段的绝对面积之和 \\(\\dfrac{4}{3}+\\dfrac{4}{3}+\\dfrac{4}{3}=4\\) m。 · Total distance: the sum of the three absolute areas, \\(\\dfrac{4}{3}+\\dfrac{4}{3}+\\dfrac{4}{3}=4\\) m.",
          "平均速度 \\(=\\dfrac{4}{3}\\div4=\\dfrac{1}{3}\\) m/s；平均速率 \\(=\\dfrac{4}{4}=1\\) m/s。 · Average velocity \\(=\\dfrac{4}{3}\\div4=\\dfrac{1}{3}\\) m/s; average speed \\(=\\dfrac{4}{4}=1\\) m/s."
        ],
        "solution": "位移为 \\(\\dfrac{4}{3}\\) m，总路程为 4 m；平均速度为 \\(\\dfrac{1}{3}\\) m/s，平均速率为 1 m/s。 · The displacement is \\(\\dfrac{4}{3}\\) m and the total distance is 4 m; the average velocity is \\(\\dfrac{1}{3}\\) m/s and the average speed is 1 m/s.",
        "solutionLatex": "\\text{位移}=\\dfrac{4}{3}\\ \\mathrm{m},\\quad \\text{总路程}=4\\ \\mathrm{m}"
      },
      {
        "title": "例 3 · 三次位置函数 · Cubic Position Function",
        "prompt": "质点位置为 \\(s(t)=2t^{3}-9t^{2}+12t\\)（米，秒）。求加速与减速的时间区间，并求 \\(0\\le t\\le3\\) 上的位移与总路程。 · A particle has position \\(s(t)=2t^{3}-9t^{2}+12t\\) (meters, seconds). Find the time intervals of speeding up and slowing down, and find the displacement and total distance on \\(0\\le t\\le3\\).",
        "steps": [
          "\\(v(t)=6t^{2}-18t+12=6(t-1)(t-2)\\)，\\(a(t)=12t-18=6(2t-3)\\)。 · \\(v(t)=6t^{2}-18t+12=6(t-1)(t-2)\\), and \\(a(t)=12t-18=6(2t-3)\\).",
          "\\(v>0\\) 于 \\([0,1)\\cup(2,\\infty)\\)，\\(v<0\\) 于 \\((1,2)\\)；\\(a<0\\) 于 \\([0,1.5)\\)，\\(a>0\\) 于 \\((1.5,\\infty)\\)。 · \\(v>0\\) on \\([0,1)\\cup(2,\\infty)\\) and \\(v<0\\) on \\((1,2)\\); \\(a<0\\) on \\([0,1.5)\\) and \\(a>0\\) on \\((1.5,\\infty)\\).",
          "加速：\\((1,1.5)\\) 与 \\((2,\\infty)\\)；减速：\\((0,1)\\) 与 \\((1.5,2)\\)。 · Speeding up: \\((1,1.5)\\) and \\((2,\\infty)\\); slowing down: \\((0,1)\\) and \\((1.5,2)\\).",
          "关键位置：\\(s(0)=0\\)，\\(s(1)=5\\)，\\(s(2)=4\\)，\\(s(3)=9\\)。 · Key positions: \\(s(0)=0\\), \\(s(1)=5\\), \\(s(2)=4\\), \\(s(3)=9\\).",
          "位移 \\(=9-0=9\\) m；总路程 \\(=|5-0|+|4-5|+|9-4|=11\\) m。 · Displacement \\(=9-0=9\\) m; total distance \\(=|5-0|+|4-5|+|9-4|=11\\) m."
        ],
        "solution": "在 \\((1,1.5)\\) 与 \\((2,\\infty)\\) 加速，在 \\((0,1)\\) 与 \\((1.5,2)\\) 减速；位移为 9 m，总路程为 11 m。 · The particle speeds up on \\((1,1.5)\\) and \\((2,\\infty)\\), and slows down on \\((0,1)\\) and \\((1.5,2)\\); the displacement is 9 m and the total distance is 11 m.",
        "solutionLatex": "v(t)=6(t-1)(t-2),\\quad a(t)=6(2t-3)"
      },
      {
        "title": "例 4 · 自由落体 · Free Fall",
        "prompt": "从 100 m 高处自由落体，取向上为正，位置为 \\(s(t)=100-4.9t^{2}\\)（米，秒）。求 \\(v(t)\\)、\\(a(t)\\)，解释符号，并求落地时间与落地速率。 · An object falls freely from 100 m, with upward positive, so \\(s(t)=100-4.9t^{2}\\) (meters, seconds). Find \\(v(t)\\) and \\(a(t)\\), interpret the signs, and find the time and speed at impact.",
        "steps": [
          "\\(v(t)=-9.8t\\)，\\(a(t)=-9.8\\)。 · \\(v(t)=-9.8t\\) and \\(a(t)=-9.8\\).",
          "负速度表示向下运动；负加速度表示速度每秒向下增加 \\(9.8\\) m/s。 · Negative velocity means downward motion; negative acceleration means velocity becomes more downward by \\(9.8\\) m/s each second.",
          "落地：\\(100-4.9t^{2}=0\\Rightarrow t=\\sqrt{\\dfrac{100}{4.9}}\\approx4.52\\) s。 · Impact: \\(100-4.9t^{2}=0\\), so \\(t=\\sqrt{\\dfrac{100}{4.9}}\\approx4.52\\) s.",
          "落地速率：\\(|v(4.52)|=9.8(4.52)\\approx44.3\\) m/s。 · Impact speed: \\(|v(4.52)|=9.8(4.52)\\approx44.3\\) m/s."
        ],
        "solution": "\\(v(t)=-9.8t\\)，\\(a(t)=-9.8\\) m/s²；约在 \\(t=4.52\\) s 落地，落地速率约为 44.3 m/s（方向向下）。 · \\(v(t)=-9.8t\\) and \\(a(t)=-9.8\\) m/s²; the object lands at about \\(t=4.52\\) s with speed about 44.3 m/s (directed downward).",
        "solutionLatex": "t=\\sqrt{\\dfrac{100}{4.9}}\\approx4.52\\ \\mathrm{s},\\quad |v|\\approx44.3\\ \\mathrm{m/s}"
      },
      {
        "title": "例 5 · 速度图像 · Velocity Graph",
        "prompt": "某质点的速度图像在 \\(0<t<2\\) 时位于 \\(t\\) 轴上方，面积为 6 m；在 \\(2<t<5\\) 时位于下方，面积为 4 m。求位移、总路程、转向时刻、平均速度与平均速率。 · A particle's velocity graph is above the \\(t\\)-axis on \\(0<t<2\\) with area 6 m, and below the axis on \\(2<t<5\\) with area 4 m. Find the displacement, total distance, turnaround time, average velocity, and average speed.",
        "steps": [
          "位移：带符号面积 \\(6-4=2\\) m。 · Displacement: signed area \\(6-4=2\\) m.",
          "总路程：绝对面积 \\(6+4=10\\) m。 · Total distance: absolute areas \\(6+4=10\\) m.",
          "\\(v\\) 在 \\(t=2\\) 变号，所以 \\(t=2\\) 是转向时刻，且 \\(v(2)=0\\)。 · \\(v\\) changes sign at \\(t=2\\), so \\(t=2\\) is the turnaround time and \\(v(2)=0\\).",
          "平均速度 \\(=\\dfrac{2}{5}=0.4\\) m/s；平均速率 \\(=\\dfrac{10}{5}=2\\) m/s。 · Average velocity \\(=\\dfrac{2}{5}=0.4\\) m/s; average speed \\(=\\dfrac{10}{5}=2\\) m/s."
        ],
        "solution": "位移为 2 m，总路程为 10 m，\\(t=2\\) 时转向；平均速度为 0.4 m/s，平均速率为 2 m/s。 · The displacement is 2 m, the total distance is 10 m, and the particle turns around at \\(t=2\\); the average velocity is \\(0.4\\) m/s and the average speed is \\(2\\) m/s.",
        "solutionLatex": "\\text{位移}=2\\ \\mathrm{m},\\quad \\text{总路程}=10\\ \\mathrm{m}"
      }
    ],
    "examTips": [
      "先写 \\(s,v,a\\) 的导数链，并标出长度与时间单位。 · Write the derivative chain for \\(s\\), \\(v\\), and \\(a\\), and label the length and time units.",
      "问“at rest”解 \\(v=0\\)；问“direction”看 \\(v\\) 的符号；问“speeding up”比较 \\(v\\) 与 \\(a\\) 的符号。 · “At rest” means solve \\(v=0\\); “direction” means read the sign of \\(v\\); “speeding up” means compare the signs of \\(v\\) and \\(a\\).",
      "位移与总路程要分清；总路程按 \\(v=0\\) 分段。 · Keep displacement and total distance distinct; split total distance at the zeros of \\(v\\).",
      "图像题：\\(s\\) 的斜率是 \\(v\\)，\\(v\\) 的斜率是 \\(a\\)，\\(v\\) 的面积是位移。 · Graph problems: the slope of \\(s\\) is \\(v\\), the slope of \\(v\\) is \\(a\\), and the area under \\(v\\) is displacement.",
      "平均速度等于位移除以时间；平均速率等于总路程除以时间。 · Average velocity is displacement divided by time; average speed is total distance divided by time.",
      "负号要结合坐标轴解释，不要直接说“减速”。 · Interpret a negative sign with the coordinate axis in mind; do not automatically call it “slowing down.”"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.1",
        "title": "变化率情境 · Interpreting the Meaning of the Derivative in Context",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.3",
        "title": "变化率与单位 · Rates of Change in Applied Contexts Other Than Motion",
        "relation": "相关 · Related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.2",
        "title": "位置速度加速度 · Connecting Position, Velocity, and Acceleration Using Integrals",
        "relation": "后续 · Follow-up"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.6",
        "title": "高阶导数 · Calculating Higher-Order Derivatives",
        "relation": "先修 · Prerequisite"
      }
    ],
    "modules": [
      {
        "id": "motion-sva",
        "title": "位置·速度·加速度"
      }
    ],
    "practiceHref": "#/math/practice/calc-u4",
    "connections": [
      "先修：4.1 的导数情境解释与 3.6 的高阶导数提供语言和工具。 · Prerequisite: the contextual interpretation in 4.1 and higher-order derivatives in 3.6 provide the language and tools.",
      "后续：4.3 把变化率推广到非运动情境；8.2 用积分处理位移与总路程。 · Follow-up: 4.3 extends rates to non-motion contexts, and 8.2 treats displacement and total distance with integrals.",
      "跨学科：物理运动学中的位置、速度、加速度，自由落体中的 \\(a=-g\\)，以及图像与实验数据的关系。 · Cross-disciplinary: position, velocity, and acceleration in physics kinematics, \\(a=-g\\) in free fall, and the connection between graphs and experimental data."
    ],
    "intuitionDetailed": "符号表是核心工具：先解 \\(v=0\\) 找转向时刻，再把时间轴分段，标出 \\(v\\) 与 \\(a\\) 的符号。\\(v\\) 与 \\(a\\) 同号时，速度的绝对值增大（加速）；异号时减小（减速）。位移只关心起点与终点，总路程关心实际走过的距离，因此要按转向点分段累加绝对值。 · A sign chart is the key tool: solve \\(v=0\\) for turnaround times, partition the time axis, and mark the signs of \\(v\\) and \\(a\\). When \\(v\\) and \\(a\\) share a sign, the magnitude of velocity increases (speeding up); when they have opposite signs, it decreases (slowing down). Displacement cares only about the endpoints, while total distance cares about the actual path, so split at turnarounds and add absolute values.",
    "development": [
      "明确坐标轴、原点、正方向与单位。 · Specify the coordinate axis, origin, positive direction, and units.",
      "由 \\(s\\) 求 \\(v\\)、\\(a\\)，或由图像读斜率。 · Obtain \\(v\\) and \\(a\\) from \\(s\\), or read slopes from a graph.",
      "解 \\(v=0\\)，画 \\(v\\)、\\(a\\) 的符号表。 · Solve \\(v=0\\) and draw sign charts for \\(v\\) and \\(a\\).",
      "判断方向、静止、加速与减速。 · Determine direction, rest, speeding up, and slowing down.",
      "用面积或积分算位移，按零点分段算总路程。 · Compute displacement with areas or integrals, and total distance in pieces split at zeros.",
      "用平均速度与平均速率做一致性检查。 · Check consistency with average velocity and average speed."
    ],
    "checks": [
      "\\(v(t)=-3\\) m/s 表示什么？速率是多少？ · What does \\(v(t)=-3\\) m/s mean, and what is the speed?",
      "\\(a(t)>0\\) 一定意味着加速吗？举例说明。 · Does \\(a(t)>0\\) always mean speeding up? Give an example.",
      "\\(v(2)=0\\) 是否意味着物体在 \\(t=2\\) 停下后不再运动？ · Does \\(v(2)=0\\) mean the object stops and stays at rest after \\(t=2\\)?",
      "位移为零时，总路程一定为零吗？ · If the displacement is zero, must the total distance also be zero?",
      "如何从 \\(v\\) 的图像判断转向点？ · How can a turnaround be identified from a velocity graph?"
    ],
    "vocabulary": [
      {
        "termZh": "位置",
        "termEn": "position",
        "defZh": "物体相对参考点的坐标 \\(s(t)\\)。",
        "defEn": "The coordinate \\(s(t)\\) of an object relative to a reference point."
      },
      {
        "termZh": "位移",
        "termEn": "displacement",
        "defZh": "位置的变化量 \\(s(b)-s(a)\\)，带正负号。",
        "defEn": "The change in position \\(s(b)-s(a)\\), with sign."
      },
      {
        "termZh": "速度",
        "termEn": "velocity",
        "defZh": "位置对时间的导数 \\(v(t)=s'(t)\\)，带方向。",
        "defEn": "The derivative of position, \\(v(t)=s'(t)\\), including direction."
      },
      {
        "termZh": "速率",
        "termEn": "speed",
        "defZh": "速度的大小 \\(|v(t)|\\)，不带方向。",
        "defEn": "The magnitude of velocity, \\(|v(t)|\\), without direction."
      },
      {
        "termZh": "加速度",
        "termEn": "acceleration",
        "defZh": "速度对时间的导数 \\(a(t)=v'(t)=s''(t)\\)。",
        "defEn": "The derivative of velocity, \\(a(t)=v'(t)=s''(t)\\)."
      },
      {
        "termZh": "瞬时静止",
        "termEn": "at rest",
        "defZh": "\\(v(t)=0\\) 的时刻；物体瞬时静止，不一定会停留。",
        "defEn": "A time when \\(v(t)=0\\); the object is instantaneously at rest and need not stay there."
      },
      {
        "termZh": "运动方向",
        "termEn": "direction of motion",
        "defZh": "由速度的符号决定；正表示向正方向运动。",
        "defEn": "Determined by the sign of velocity; positive means motion in the positive direction."
      },
      {
        "termZh": "加速与减速",
        "termEn": "speeding up and slowing down",
        "defZh": "\\(v\\) 与 \\(a\\) 同号时加速，异号时减速。",
        "defEn": "The object speeds up when \\(v\\) and \\(a\\) share a sign and slows down when they have opposite signs."
      }
    ]
  },
  "4.3": {
    "id": "math/calc-u4/4.3",
    "subject": "math",
    "chapterId": "calc-u4",
    "unitCode": "4",
    "unitTitleZh": "导数的情境应用",
    "unitTitleEn": "Contextual Applications of Differentiation",
    "code": "4.3",
    "titleZh": "变化率与单位",
    "titleEn": "Rates of Change in Applied Contexts Other Than Motion",
    "layer": "ap",
    "summary": "在非运动的实际情境中，导数给出一个量相对于另一个量的瞬时变化率：成本、收入、人口、温度、浓度、体积等。先写清输入与输出单位，再把 \\(f'(a)\\) 解释为“在 \\(a\\) 处，输入每增加一个单位，输出大约改变 \\(f'(a)\\) 个输出单位”；边际量、增长率与相对变化率都是这一思想的应用。 · In applied contexts other than motion, the derivative gives the instantaneous rate of one quantity with respect to another: cost, revenue, population, temperature, concentration, volume, and more. Identify the input and output units first, then interpret \\(f'(a)\\) as “at \\(a\\), each additional input unit changes the output by about \\(f'(a)\\) output units”; marginal quantities, growth rates, and relative rates are applications of this idea.",
    "learningObjectives": [
      "能在成本、收入、人口、温度、浓度等情境中建立并解释导数。 · Set up and interpret derivatives in cost, revenue, population, temperature, concentration, and similar contexts.",
      "能正确写出并使用“输出单位每输入单位”，并完成单位换算。 · Write and use “output units per input unit” correctly, and carry out unit conversions.",
      "能区分平均变化率、瞬时变化率与相对变化率，并解释符号与大小。 · Distinguish average rates, instantaneous rates, and relative rates, and interpret their signs and magnitudes.",
      "能用表格或图像估计变化率，写出 AP 风格的完整解释并检查合理性。 · Estimate rates from tables or graphs, write complete AP-style interpretations, and check reasonableness."
    ],
    "essentialKnowledge": [
      "导数可用于解决涉及应用情境变化率的问题：求成本、收入、人口、温度、浓度和体积等量的瞬时变化率。 · The derivative can be used to solve problems involving rates of change in applied contexts: find instantaneous rates for cost, revenue, population, temperature, concentration, volume, and similar quantities.",
      "边际成本 \\(C'(x)\\)、边际收入 \\(R'(x)\\)、边际利润 \\(P'(x)\\) 分别是相应总量函数的导数。 · Marginal cost \\(C'(x)\\), marginal revenue \\(R'(x)\\), and marginal profit \\(P'(x)\\) are the derivatives of the corresponding total functions.",
      "当产量增加一个单位时，\\(C(x+1)-C(x)\\approx C'(x)\\)：总成本的增加量约等于边际成本。 · When production increases by one unit, \\(C(x+1)-C(x)\\approx C'(x)\\): the increase in total cost is approximately the marginal cost.",
      "相对变化率 \\(\\dfrac{f'(a)}{f(a)}\\) 把绝对变化率与当前量比较，常写成百分比。 · The relative rate \\(\\dfrac{f'(a)}{f(a)}\\) compares the absolute rate with the current quantity and is often written as a percentage.",
      "平均变化率描述区间，瞬时变化率描述一点；应用题通常要求后者。 · An average rate describes an interval, while an instantaneous rate describes a point; applied problems usually ask for the latter.",
      "单位是输出单位每输入单位；单位换算按比例，例如每小时变每分钟要除以 60。 · Units are output units per input unit; convert proportionally, for example dividing by 60 to change per hour to per minute.",
      "负导数表示输出随输入增大而减小；解释时要说明“减少/下降”，而不是“负值”。 · A negative derivative means the output decreases as the input increases; interpret it as “decreasing/falling,” not as a “negative value.”",
      "模型只在合理范围内有效；外推到远离数据的地方需要额外假设。 · A model is valid only within a reasonable range; extrapolating far beyond the data requires extra assumptions."
    ],
    "definition": "设 \\(y=f(x)\\) 是两个实际量之间的关系，\\(f\\) 在 \\(x=a\\) 处可导。导数 \\(f'(a)\\) 是 \\(y\\) 关于 \\(x\\) 在 \\(a\\) 处的瞬时变化率，表示当 \\(x\\) 在 \\(a\\) 附近增加一个很小的量时，\\(y\\) 的改变量与 \\(x\\) 的改变量之比的极限。其单位是 \\(y\\) 的单位除以 \\(x\\) 的单位。应用情境中，\\(f'(a)\\) 常被称为边际量（如边际成本、边际收入）或瞬时增长率；相对变化率是 \\(f'(a)\\) 除以 \\(f(a)\\)，常写成百分比。 · Let \\(y=f(x)\\) relate two real quantities and suppose \\(f\\) is differentiable at \\(x=a\\). The derivative \\(f'(a)\\) is the instantaneous rate of change of \\(y\\) with respect to \\(x\\) at \\(a\\): the limit of the ratio of the change in \\(y\\) to the change in \\(x\\) as the latter becomes small. Its unit is the unit of \\(y\\) divided by the unit of \\(x\\). In applications, \\(f'(a)\\) is often called a marginal quantity (such as marginal cost or marginal revenue) or an instantaneous growth rate; the relative rate is \\(f'(a)\\) divided by \\(f(a)\\), often written as a percentage.",
    "intuition": "把 \\(x\\) 想成“投入”，\\(y\\) 想成“产出”：\\(f'(a)\\) 是投入再多一点点时，产出增加的瞬时速度。边际成本回答“多生产一件大约多花多少钱”，边际收入回答“多卖一件大约多赚多少钱”，人口增长率回答“每年大约多多少人”。 · Think of \\(x\\) as the input and \\(y\\) as the output: \\(f'(a)\\) is the instantaneous speed at which output increases when input increases a little. Marginal cost answers “about how much more does one more item cost,” marginal revenue answers “about how much more does one more sale bring in,” and a population growth rate answers “about how many more individuals per year.”",
    "formulas": [
      {
        "latex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
        "note": "瞬时变化率的一般定义。 · General definition of the instantaneous rate of change."
      },
      {
        "latex": "\\text{单位}(f'(a))=\\dfrac{\\text{单位}(f)}{\\text{单位}(a)}",
        "note": "导数的单位是输出单位每输入单位。 · The derivative's units are output units per input unit."
      },
      {
        "latex": "\\text{相对变化率}=\\dfrac{f'(a)}{f(a)}",
        "note": "常写成百分比；要求 \\(f(a)\\ne0\\)。 · Often written as a percentage; requires \\(f(a)\\ne0\\)."
      },
      {
        "latex": "\\text{边际成本}=C'(x),\\quad \\text{边际收入}=R'(x),\\quad \\text{边际利润}=P'(x)",
        "note": "边际量是对应总量函数的导数；利润 \\(P(x)=R(x)-C(x)\\)，所以 \\(P'(x)=R'(x)-C'(x)\\)。 · Marginal quantities are derivatives of the corresponding total functions; profit \\(P(x)=R(x)-C(x)\\), so \\(P'(x)=R'(x)-C'(x)\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "总量函数 · total function",
        "to": "边际量 · marginal quantity",
        "note": "总成本、总收入、总利润的导数分别是边际成本、边际收入、边际利润；它们描述“再多一个单位”的瞬时增加量。 · The derivatives of total cost, total revenue, and total profit are marginal cost, marginal revenue, and marginal profit; they describe the instantaneous increase from “one more unit.”"
      },
      {
        "from": "差商 · difference quotient",
        "to": "导数的单位 · units of the derivative",
        "note": "差商的分子和分母分别带输出、输入单位，取极限后单位不变，所以 \\(f'(a)\\) 的单位是输出单位每输入单位。 · The numerator and denominator of the difference quotient carry output and input units; the limit preserves them, so \\(f'(a)\\) has output units per input unit."
      },
      {
        "from": "绝对变化率 · absolute rate",
        "to": "相对变化率 · relative rate",
        "note": "先算 \\(f'(a)\\)，再除以当前量 \\(f(a)\\)，得到“每单位当前量”的变化比例，常化成百分比。 · Compute \\(f'(a)\\) first, then divide by the current quantity \\(f(a)\\) to get the change per unit of the current quantity, often converted to a percentage."
      },
      {
        "from": "表格 · table",
        "to": "估计变化率 · estimated rate",
        "note": "用邻近点的差商估计 \\(f'(a)\\)；中心差商通常比单侧差商更稳，但仍应注明近似。 · Estimate \\(f'(a)\\) with a difference quotient from nearby points; a central difference is usually more stable than a one-sided one, but still state that it is approximate."
      }
    ],
    "conditions": [
      "\\(f\\) 在 \\(a\\) 处可导，\\(a\\) 在定义域内；输入与输出单位明确且一致。 · \\(f\\) is differentiable at \\(a\\), \\(a\\) is in the domain, and the input and output units are explicit and consistent.",
      "平均变化率要求区间端点不同；瞬时变化率要求差商的极限存在。 · An average rate requires distinct endpoints; an instantaneous rate requires the limit of the difference quotient to exist.",
      "用导数近似“多一个单位”时，要求单位足够小或函数在局部近似线性。 · Using a derivative to approximate “one more unit” requires the unit to be small or the function to be locally nearly linear.",
      "相对变化率要求 \\(f(a)\\ne0\\)，且它是比例而不是绝对量。 · A relative rate requires \\(f(a)\\ne0\\), and it is a proportion rather than an absolute quantity.",
      "模型只在合理范围内有效；外推到远离数据的地方需要额外假设。 · A model is valid only within a reasonable range; extrapolating far beyond the data requires extra assumptions.",
      "符号与单位要一起解释；不要把输出值 \\(f(a)\\) 当成变化率。 · Interpret the sign together with the units; do not treat the output value \\(f(a)\\) as a rate."
    ],
    "keyPoints": [
      "先写清 \\(x\\)、\\(y\\) 与单位，再求导。 · Identify \\(x\\), \\(y\\), and their units before differentiating.",
      "\\(f'(a)\\) 是瞬时变化率，也是经济情境中的边际量。 · \\(f'(a)\\) is an instantaneous rate and, in economics, a marginal quantity.",
      "单位 = 输出单位每输入单位；换算按比例。 · Units = output units per input unit; convert proportionally.",
      "平均变化率描述区间，瞬时变化率描述一点。 · An average rate describes an interval; an instantaneous rate describes a point.",
      "相对变化率 \\(=\\dfrac{f'(a)}{f(a)}\\)，常写成百分比。 · Relative rate \\(=\\dfrac{f'(a)}{f(a)}\\), often written as a percentage.",
      "边际成本、边际收入、边际利润分别解释“多一个单位”的成本、收入、利润变化。 · Marginal cost, revenue, and profit interpret the cost, revenue, and profit changes from “one more unit.”",
      "符号表示增减，大小表示快慢。 · The sign indicates increase or decrease; the magnitude indicates how fast.",
      "表格估计用差商，并注明近似。 · Estimate from tables with difference quotients and state that the result is approximate."
    ],
    "misconceptions": [
      "把边际成本当成总成本或平均成本。 · Confusing marginal cost with total cost or average cost.",
      "把 \\(f'(a)\\) 的单位写成输出单位，漏掉“每输入单位”。 · Writing the unit of \\(f'(a)\\) as the output unit and omitting “per input unit.”",
      "忽略“每输入单位”的方向，把“美元每件”写成“件每美元”。 · Reversing the direction and writing “items per dollar” instead of “dollars per item.”",
      "把相对变化率与绝对变化率混为一谈。 · Confusing relative and absolute rates.",
      "认为边际收入一定为正。 · Assuming marginal revenue is always positive.",
      "用 \\(f(a)\\) 解释“在 \\(a\\) 处的变化率”。 · Using \\(f(a)\\) to explain “the rate at \\(a\\).”",
      "单位换算时乘除方向搞反。 · Reversing multiplication and division in unit conversion.",
      "把模型外推到远离数据范围的地方。 · Extrapolating a model far beyond its data range."
    ],
    "examples": [
      {
        "title": "例 1 · 边际成本 · Marginal Cost",
        "prompt": "总成本为 \\(C(x)=0.01x^{3}-0.6x^{2}+13x\\) 美元，\\(x\\) 为产量（件）。求 \\(C'(x)\\)、\\(C'(20)\\)，解释其含义，并求边际成本最小时的产量。 · Total cost is \\(C(x)=0.01x^{3}-0.6x^{2}+13x\\) dollars for \\(x\\) items. Find \\(C'(x)\\) and \\(C'(20)\\), interpret the result, and find the production level that minimizes marginal cost.",
        "steps": [
          "求导：\\(C'(x)=0.03x^{2}-1.2x+13\\)。 · Differentiate: \\(C'(x)=0.03x^{2}-1.2x+13\\).",
          "\\(C'(20)=0.03(400)-24+13=1\\) 美元每件。 · \\(C'(20)=0.03(400)-24+13=1\\) dollar per item.",
          "在 \\(x=20\\) 时，每多生产一件，总成本约增加 1 美元。 · At \\(x=20\\), each additional item raises total cost by about \\$1.",
          "\\(C''(x)=0.06x-1.2\\)，在 \\(x=20\\) 处为零且由负变正，所以边际成本在 \\(x=20\\) 处最小。 · \\(C''(x)=0.06x-1.2\\), which is zero at \\(x=20\\) and changes from negative to positive, so marginal cost is minimized at \\(x=20\\)."
        ],
        "solution": "\\(C'(20)=1\\) 美元每件；在产量 20 件时，成本约以每件 1 美元的速率增加，且边际成本在此处最小。 · \\(C'(20)=1\\) dollar per item; at a production level of 20 items, cost is increasing at about \\$1 per item, and marginal cost is minimized there.",
        "solutionLatex": "C'(x)=0.03x^{2}-1.2x+13,\\quad C'(20)=1"
      },
      {
        "title": "例 2 · 人口增长与相对增长率 · Population Growth and Relative Rate",
        "prompt": "某地人口为 \\(P(t)=1200(1.03)^{t}\\) 人，\\(t\\) 为年数。求 \\(P'(10)\\) 与相对增长率 \\(\\dfrac{P'(t)}{P(t)}\\)，并解释。 · A population is \\(P(t)=1200(1.03)^{t}\\) people at \\(t\\) years. Find \\(P'(10)\\) and the relative growth rate \\(\\dfrac{P'(t)}{P(t)}\\), and interpret them.",
        "steps": [
          "求导：\\(P'(t)=1200(1.03)^{t}\\ln(1.03)\\)。 · Differentiate: \\(P'(t)=1200(1.03)^{t}\\ln(1.03)\\).",
          "\\(P(10)=1200(1.03)^{10}\\approx1612.7\\) 人。 · \\(P(10)=1200(1.03)^{10}\\approx1612.7\\) people.",
          "\\(P'(10)\\approx1612.7\\ln(1.03)\\approx47.7\\) 人/年。 · \\(P'(10)\\approx1612.7\\ln(1.03)\\approx47.7\\) people per year.",
          "相对增长率 \\(\\dfrac{P'(t)}{P(t)}=\\ln(1.03)\\approx0.0296\\)，即每年约 2.96%。 · The relative growth rate is \\(\\dfrac{P'(t)}{P(t)}=\\ln(1.03)\\approx0.0296\\), or about 2.96% per year."
        ],
        "solution": "在 \\(t=10\\) 年时人口约 1613 人，正以约 47.7 人/年的速率增长；相对增长率为每年约 2.96%。 · At \\(t=10\\) years the population is about 1613 people and is growing at about \\(47.7\\) people per year; the relative growth rate is about 2.96% per year.",
        "solutionLatex": "P'(10)\\approx47.7\\ \\text{人/年},\\quad \\dfrac{P'}{P}=\\ln(1.03)\\approx0.0296"
      },
      {
        "title": "例 3 · 表格估计边际成本 · Estimating Marginal Cost from a Table",
        "prompt": "下表给出总成本 \\(C(x)\\)（美元）：\\(x=100,200,300\\) 时 \\(C=5000,6800,8400\\)。用中心差商估计 \\(C'(200)\\)，并解释。 · The table gives total cost \\(C(x)\\) in dollars: at \\(x=100,200,300\\), \\(C=5000,6800,8400\\). Use a central difference to estimate \\(C'(200)\\) and interpret it.",
        "steps": [
          "中心差商：\\(\\dfrac{C(300)-C(100)}{300-100}=\\dfrac{8400-5000}{200}=17\\)。 · Central difference: \\(\\dfrac{C(300)-C(100)}{300-100}=\\dfrac{8400-5000}{200}=17\\).",
          "单侧差商分别为 16 与 18，中心差商 17 是它们的平均。 · The one-sided differences are 16 and 18, and the central difference 17 is their average.",
          "在 \\(x=200\\) 时，每多生产一件，成本约增加 17 美元。 · At \\(x=200\\), each additional item raises cost by about \\$17."
        ],
        "solution": "\\(C'(200)\\approx17\\) 美元每件；在产量 200 件时，成本约以每件 17 美元的速率增加。 · \\(C'(200)\\approx17\\) dollars per item; at a production level of 200 items, cost is increasing at about \\$17 per item.",
        "solutionLatex": "C'(200)\\approx\\dfrac{8400-5000}{200}=17"
      },
      {
        "title": "例 4 · 时间单位换算 · Converting Time Units",
        "prompt": "某药物浓度为 \\(C(t)\\) mg/L，\\(t\\) 为小时；已知 \\(C'(2)=-0.8\\) mg/L per hour。把变化率换算成 mg/L per minute，并解释。 · A drug concentration is \\(C(t)\\) mg/L at \\(t\\) hours, with \\(C'(2)=-0.8\\) mg/L per hour. Convert the rate to mg/L per minute and interpret it.",
        "steps": [
          "1 小时 \\(=60\\) 分钟，所以每分钟的变化量是每小时变化量的 \\(\\dfrac{1}{60}\\)。 · Since 1 hour \\(=60\\) minutes, the change per minute is \\(\\dfrac{1}{60}\\) of the change per hour.",
          "\\(-0.8\\div60\\approx-0.0133\\) mg/L per minute。 · \\(-0.8\\div60\\approx-0.0133\\) mg/L per minute.",
          "负号表示浓度在下降；单位换小后数值也按比例变小。 · The negative sign means the concentration is decreasing; when the time unit becomes smaller, the numerical rate becomes proportionally smaller."
        ],
        "solution": "\\(C'(2)\\approx-0.0133\\) mg/L per minute；在 \\(t=2\\) h 时浓度约以每分钟 0.0133 mg/L 的速率下降。 · \\(C'(2)\\approx-0.0133\\) mg/L per minute; at \\(t=2\\) h the concentration is decreasing at about \\(0.0133\\) mg/L per minute.",
        "solutionLatex": "C'(2)=-0.8\\ \\mathrm{mg/L\\ per\\ hour}\\approx-0.0133\\ \\mathrm{mg/L\\ per\\ minute}"
      },
      {
        "title": "例 5 · 边际收入 · Marginal Revenue",
        "prompt": "某产品收入为 \\(R(x)=50x-0.02x^{2}\\) 美元，\\(x\\) 为销量。求 \\(R'(x)\\)、\\(R'(1000)\\)，解释其含义，并求收入停止增加时的销量。 · Revenue is \\(R(x)=50x-0.02x^{2}\\) dollars for \\(x\\) units sold. Find \\(R'(x)\\) and \\(R'(1000)\\), interpret the result, and find the sales level at which revenue stops increasing.",
        "steps": [
          "求导：\\(R'(x)=50-0.04x\\)。 · Differentiate: \\(R'(x)=50-0.04x\\).",
          "\\(R'(1000)=50-40=10\\) 美元每件。 · \\(R'(1000)=50-40=10\\) dollars per unit.",
          "在销量 1000 件时，每多卖一件，收入约增加 10 美元。 · At 1000 units sold, each additional sale raises revenue by about \\$10.",
          "\\(R'(x)=0\\Rightarrow x=1250\\)；此时收入停止增加并达到最大。 · \\(R'(x)=0\\) gives \\(x=1250\\); revenue stops increasing there and reaches its maximum."
        ],
        "solution": "\\(R'(1000)=10\\) 美元每件；在销量 1000 件时收入约以每件 10 美元的速率增加；销量 1250 件时边际收入为零，收入达到最大。 · \\(R'(1000)=10\\) dollars per unit; at 1000 units revenue is increasing at about \\$10 per unit; at 1250 units marginal revenue is zero and revenue is maximized.",
        "solutionLatex": "R'(x)=50-0.04x,\\quad R'(1000)=10,\\quad R'(1250)=0"
      },
      {
        "title": "例 6 · 指数衰减与相对变化率 · Exponential Decay and Relative Rate",
        "prompt": "某药物浓度为 \\(C(t)=80e^{-0.2t}\\) mg/L，\\(t\\) 为小时。求 \\(C'(3)\\) 与相对变化率 \\(\\dfrac{C'(t)}{C(t)}\\)，并解释。 · A drug concentration is \\(C(t)=80e^{-0.2t}\\) mg/L at \\(t\\) hours. Find \\(C'(3)\\) and the relative rate \\(\\dfrac{C'(t)}{C(t)}\\), and interpret them.",
        "steps": [
          "求导：\\(C'(t)=-16e^{-0.2t}\\)。 · Differentiate: \\(C'(t)=-16e^{-0.2t}\\).",
          "\\(C'(3)=-16e^{-0.6}\\approx-8.78\\) mg/L per hour。 · \\(C'(3)=-16e^{-0.6}\\approx-8.78\\) mg/L per hour.",
          "相对变化率 \\(\\dfrac{C'(t)}{C(t)}=-0.2\\)，即每小时约下降 20%。 · The relative rate is \\(\\dfrac{C'(t)}{C(t)}=-0.2\\), a decrease of about 20% per hour."
        ],
        "solution": "在 \\(t=3\\) h 时浓度约以 8.78 mg/L per hour 的速率下降；相对变化率为每小时约 \\(-20\\%\\)。 · At \\(t=3\\) h the concentration is decreasing at about \\(8.78\\) mg/L per hour; the relative rate is about \\(-20\\%\\) per hour.",
        "solutionLatex": "C'(3)=-16e^{-0.6}\\approx-8.78\\ \\mathrm{mg/L\\ per\\ hour},\\quad \\dfrac{C'}{C}=-0.2"
      }
    ],
    "examTips": [
      "先写“\\(y\\) 的单位每 \\(x\\) 的单位”，再代数值。 · Write “units of \\(y\\) per unit of \\(x\\)” before substituting numbers.",
      "边际成本、边际收入用 \\(C'(x)\\)、\\(R'(x)\\)，不要用平均成本 \\(\\dfrac{C(x)}{x}\\)。 · Use \\(C'(x)\\) and \\(R'(x)\\) for marginal cost and revenue, not the average cost \\(\\dfrac{C(x)}{x}\\).",
      "问“about how much more for one more unit”时，用导数近似。 · When asked “about how much more for one more unit,” use the derivative as an approximation.",
      "相对变化率先算 \\(\\dfrac{f'(a)}{f(a)}\\)，再化成百分比。 · For a relative rate, compute \\(\\dfrac{f'(a)}{f(a)}\\) first, then convert to a percentage.",
      "表格估计要写 “approximately”，并用邻近点。 · For table estimates, write “approximately” and use nearby points.",
      "单位换算先写“1 小时 = 60 分钟”，再按比例；不要乘除颠倒。 · For unit conversion, first write “1 hour = 60 minutes,” then adjust proportionally; do not reverse multiplication and division.",
      "解释负号：表示减少或下降，不是“负值”。 · Interpret a negative sign as a decrease or decline, not as a “negative value.”"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.1",
        "title": "变化率情境 · Interpreting the Meaning of the Derivative in Context",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.2",
        "title": "直线运动 · Straight-Line Motion: Connecting Position, Velocity, and Acceleration",
        "relation": "相关 · Related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.4",
        "title": "相关变化率 · Introduction to Related Rates",
        "relation": "后续 · Follow-up"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.11",
        "title": "优化求解 · Solving Optimization Problems",
        "relation": "应用 · Application"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u4",
    "connections": [
      "先修：4.1 的导数情境解释与 2.1 的平均/瞬时变化率。 · Prerequisite: the contextual interpretation in 4.1 and average and instantaneous rates in 2.1.",
      "后续：4.4 与 4.5 的相关变化率、5.11 的优化问题都会用到“变化率 + 单位”的语言。 · Follow-up: related rates in 4.4 and 4.5 and optimization in 5.11 all use the language of rates and units.",
      "跨学科：经济学的边际分析、生物学的种群增长、物理与化学中的温度、浓度、体积变化率。 · Cross-disciplinary: marginal analysis in economics, population growth in biology, and rates of temperature, concentration, and volume change in physics and chemistry."
    ],
    "intuitionDetailed": "应用题的难点通常不是求导，而是“谁对谁求导”。先写一句“\\(y\\) 随 \\(x\\) 变化”，再写单位。经济题中边际量是导数，不是平均值；生物题中相对增长率是 \\(\\dfrac{P'(t)}{P(t)}\\)；物理或化学题中负号表示减少。最后用“如果输入增加一个单位，输出大约改变多少”复述答案。 · The hard part of an applied problem is usually not differentiating but deciding “which quantity changes with respect to which.” Write “\\(y\\) changes with respect to \\(x\\),” then write the units. In economics, a marginal quantity is a derivative, not an average; in biology, the relative growth rate is \\(\\dfrac{P'(t)}{P(t)}\\); in physics or chemistry, a negative sign means decrease. Finish by restating the answer as “if the input increases by one unit, the output changes by about ….”",
    "development": [
      "识别输入、输出与单位。 · Identify the input, output, and units.",
      "建立函数关系，或读取表格与图像。 · Build a function relationship, or read a table or graph.",
      "求导，或用差商估计瞬时变化率。 · Differentiate, or estimate the instantaneous rate with a difference quotient.",
      "写出单位并解释符号与大小。 · Write the units and interpret the sign and magnitude.",
      "计算边际量或相对变化率，并完成单位换算。 · Compute marginal quantities or relative rates and convert units.",
      "检查模型范围与答案合理性。 · Check the model's range and the reasonableness of the answer."
    ],
    "checks": [
      "\\(C'(500)=12\\) 美元每件的含义是什么？ · What does \\(C'(500)=12\\) dollars per item mean?",
      "边际成本与平均成本有什么区别？ · What is the difference between marginal cost and average cost?",
      "相对增长率每年 3% 与绝对增长率每年 50 人有什么区别？ · What is the difference between a 3% relative growth rate per year and an absolute growth rate of 50 people per year?",
      "若 \\(t\\) 的单位从年改成月，\\(P'(t)\\) 的数值如何变化？ · How does the numerical value of \\(P'(t)\\) change when \\(t\\) is measured in months instead of years?",
      "为什么 \\(f'(a)\\) 不能解释为“\\(f\\) 在 \\(a\\) 处的值”？ · Why can \\(f'(a)\\) not be interpreted as “the value of \\(f\\) at \\(a\\)”?"
    ],
    "vocabulary": [
      {
        "termZh": "单位变化率",
        "termEn": "unit rate",
        "defZh": "每增加一个输入单位所引起的输出变化。",
        "defEn": "The output change per one additional unit of input."
      },
      {
        "termZh": "边际成本",
        "termEn": "marginal cost",
        "defZh": "多生产一单位产品所增加的成本，由 \\(C'(x)\\) 估计。",
        "defEn": "The added cost of producing one more unit, estimated by \\(C'(x)\\)."
      },
      {
        "termZh": "边际收入",
        "termEn": "marginal revenue",
        "defZh": "多卖一单位产品所增加的收入，由 \\(R'(x)\\) 估计。",
        "defEn": "The added revenue from selling one more unit, estimated by \\(R'(x)\\)."
      },
      {
        "termZh": "平均成本",
        "termEn": "average cost",
        "defZh": "总成本除以产量 \\(\\dfrac{C(x)}{x}\\)，不是边际成本。",
        "defEn": "Total cost divided by output, \\(\\dfrac{C(x)}{x}\\), not the marginal cost."
      },
      {
        "termZh": "增长率",
        "termEn": "growth rate",
        "defZh": "数量随时间或其他变量增加的速率。",
        "defEn": "The rate at which a quantity increases with time or another variable."
      },
      {
        "termZh": "相对变化率",
        "termEn": "relative rate",
        "defZh": "\\(\\dfrac{f'(a)}{f(a)}\\)，把变化率与当前量比较，常写成百分比。",
        "defEn": "The rate \\(\\dfrac{f'(a)}{f(a)}\\), comparing the rate with the current quantity and often written as a percentage."
      },
      {
        "termZh": "量纲分析",
        "termEn": "dimensional analysis",
        "defZh": "检查分子与分母单位是否与所求变化率一致。",
        "defEn": "Checking that the units of the numerator and denominator match the desired rate."
      },
      {
        "termZh": "模型适用范围",
        "termEn": "domain of a model",
        "defZh": "模型或数据可靠的输入范围；超出后需要额外假设。",
        "defEn": "The input range in which a model or data set is reliable; beyond it, extra assumptions are needed."
      }
    ]
  },
  "4.4": {
    "id": "math/calc-u4/4.4",
    "subject": "math",
    "chapterId": "calc-u4",
    "unitCode": "4",
    "unitTitleZh": "导数的情境应用",
    "unitTitleEn": "Contextual Applications of Differentiation",
    "code": "4.4",
    "titleZh": "相关变化率",
    "titleEn": "Introduction to Related Rates",
    "layer": "ap",
    "summary": "相关变化率 · Introduction to Related Rates",
    "learningObjectives": [
      "能陈述「相关变化率」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Introduction to Related Rates：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「相关变化率」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "相关变化率（Introduction to Related Rates）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「相关变化率」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}",
        "note": "导数定义使用叠式分式。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「相关变化率」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.4「相关变化率」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「相关变化率」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「相关变化率」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「相关变化率」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「相关变化率」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「相关变化率」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.3",
        "title": "变化率与单位",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.5",
        "title": "相关变化率求解",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「相关变化率」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「相关变化率」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「相关变化率」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "相关变化率",
        "termEn": "related rates",
        "defZh": "两个或多个随时间变化的量，其变化率通过一个方程相联系。",
        "defEn": "Two or more quantities changing with time whose rates are linked by an equation."
      },
      {
        "termZh": "对时间求导",
        "termEn": "differentiating with respect to time",
        "defZh": "方程两边对 \\(t\\) 求导，产生 \\(\\dfrac{d}{dt}\\) 项。",
        "defEn": "Differentiating both sides with respect to \\(t\\), producing \\(\\dfrac{d}{dt}\\) terms."
      },
      {
        "termZh": "变化率",
        "termEn": "rate of change",
        "defZh": "某量随时间的变化速度，如 \\(\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\)。",
        "defEn": "The speed at which a quantity changes with time, such as \\(\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\)."
      },
      {
        "termZh": "链式法则",
        "termEn": "chain rule",
        "defZh": "把 \\(\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\) 与 \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}\\) 联系起来的工具。",
        "defEn": "The tool that links \\(\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\) to \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}\\)."
      },
      {
        "termZh": "几何约束",
        "termEn": "geometric constraint",
        "defZh": "体积、面积或距离公式给出的变量关系。",
        "defEn": "A relationship among variables supplied by a volume, area, or distance formula."
      },
      {
        "termZh": "瞬时值",
        "termEn": "instantaneous value",
        "defZh": "求导后代入某一时刻的已知量。",
        "defEn": "A known quantity substituted at a particular instant after differentiating."
      }
    ]
  },
  "4.5": {
    "id": "math/calc-u4/4.5",
    "subject": "math",
    "chapterId": "calc-u4",
    "unitCode": "4",
    "unitTitleZh": "导数的情境应用",
    "unitTitleEn": "Contextual Applications of Differentiation",
    "code": "4.5",
    "titleZh": "相关变化率求解",
    "titleEn": "Solving Related Rates Problems",
    "layer": "ap",
    "summary": "相关变化率求解 · Solving Related Rates Problems",
    "learningObjectives": [
      "能陈述「相关变化率求解」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Solving Related Rates Problems：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「相关变化率求解」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "相关变化率求解（Solving Related Rates Problems）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「相关变化率求解」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\cdot\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}",
        "note": "相关变化率：用链式法则联系各变化率。 · Related rates: connect the rates with the chain rule."
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「相关变化率求解」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.5「相关变化率求解」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「相关变化率求解」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「相关变化率求解」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「相关变化率求解」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「相关变化率求解」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「相关变化率求解」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.4",
        "title": "相关变化率",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.6",
        "title": "局部线性近似",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「相关变化率求解」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「相关变化率求解」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「相关变化率求解」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "相关变化率",
        "termEn": "related rates",
        "defZh": "两个或多个随时间变化的量之间的变化率关系。",
        "defEn": "Relationships among the rates of change of two or more quantities over time."
      },
      {
        "termZh": "链式法则",
        "termEn": "chain rule",
        "defZh": "把各变量对时间的导数联系起来。",
        "defEn": "Connects the time derivatives of the related variables."
      },
      {
        "termZh": "几何约束",
        "termEn": "geometric constraint",
        "defZh": "如面积、体积或相似三角形给出的变量关系。",
        "defEn": "A relation among variables given by area, volume, or similar triangles."
      },
      {
        "termZh": "已知变化率",
        "termEn": "known rate",
        "defZh": "题目给出的某一变量对时间的变化率。",
        "defEn": "A time derivative supplied in the problem."
      },
      {
        "termZh": "未知变化率",
        "termEn": "unknown rate",
        "defZh": "题目要求求解的某一变量对时间的变化率。",
        "defEn": "The time derivative the problem asks for."
      },
      {
        "termZh": "隐函数求导",
        "termEn": "implicit differentiation",
        "defZh": "对约束方程两边关于时间 \\(t\\) 求导。",
        "defEn": "Differentiating both sides of a constraint equation with respect to time \\(t\\)."
      }
    ]
  },
  "4.6": {
    "id": "math/calc-u4/4.6",
    "subject": "math",
    "chapterId": "calc-u4",
    "unitCode": "4",
    "unitTitleZh": "导数的情境应用",
    "unitTitleEn": "Contextual Applications of Differentiation",
    "code": "4.6",
    "titleZh": "局部线性近似",
    "titleEn": "Approximating Values of a Function Using Local Linearity and Linearization",
    "layer": "ap",
    "summary": "在 \\(x=a\\) 附近，可微函数 \\(f\\) 的切线 \\(L(x)=f(a)+f'(a)(x-a)\\) 是 \\(f\\) 的局部线性近似：当 \\(x\\) 接近 \\(a\\) 时，\\(f(x)\\approx L(x)\\)。切线就是局部线性近似的图像；近似误差随 \\(|x-a|\\) 增大而增大，并可由凹凸性判断是高估还是低估。切点附近的函数行为决定高估或低估：若 \\(f''>0\\)（或 \\(f'\\) 递增），切线在曲线下方，线性化低估；若 \\(f''<0\\)（或 \\(f'\\) 递减），切线在曲线上方，线性化高估；若凹凸性在切点两侧改变，则同一切线在一侧高估、另一侧低估。 · Near \\(x=a\\), the tangent line \\(L(x)=f(a)+f'(a)(x-a)\\) is the local linear approximation of a differentiable function \\(f\\): for \\(x\\) close to \\(a\\), \\(f(x)\\approx L(x)\\). The tangent line is the graph of this locally linear approximation; the error grows with \\(|x-a|\\), and concavity tells whether the approximation is an overestimate or an underestimate. The function's behavior near the point of tangency decides the direction: if \\(f''>0\\) (or \\(f'\\) is increasing) near \\(a\\), the tangent lies below the curve and the linearization underestimates; if \\(f''<0\\) (or \\(f'\\) is decreasing), the tangent lies above and it overestimates. When concavity changes across the point of tangency, the same tangent overestimates on one side and underestimates on the other.",
    "learningObjectives": [
      "能写出 \\(f\\) 在 \\(a\\) 处的切线或线性化 \\(L(x)\\)，并说明它就是局部线性近似的图像。 · Write the tangent line or linearization \\(L(x)\\) of \\(f\\) at \\(a\\), and explain that it is the graph of the local linear approximation.",
      "能用 \\(L(x)\\) 估计 \\(f(a+\\Delta x)\\)，并计算或比较近似误差。 · Use \\(L(x)\\) to estimate \\(f(a+\\Delta x)\\), and compute or compare the approximation error.",
      "能根据凹凸性判断切线近似是高估还是低估。 · Use concavity to decide whether a tangent-line approximation is an overestimate or an underestimate.",
      "能依据切点附近 \\(f''\\) 的符号或 \\(f'\\) 的增减判断高估/低估，并处理凹凸性在切点两侧改变的情形。 · Use the sign of \\(f''\\) or the monotonicity of \\(f'\\) near the point of tangency to decide overestimate versus underestimate, including cases where concavity changes across the point of tangency.",
      "能解释“局部”的含义：只在 \\(a\\) 附近有效，离得越远误差通常越大。 · Explain the meaning of “local”: the approximation is valid only near \\(a\\), and the error usually grows farther away."
    ],
    "essentialKnowledge": [
      "切线方程与线性化：\\(L(x)=f(a)+f'(a)(x-a)\\)；其图像是曲线在 \\((a,f(a))\\) 处的切线。 · Tangent-line equation and linearization: \\(L(x)=f(a)+f'(a)(x-a)\\); its graph is the tangent line to the curve at \\((a,f(a))\\).",
      "切线就是局部线性近似的图像（CHA-3. F.1）：在切点附近，曲线与切线几乎重合。 · The tangent line is the graph of the local linear approximation (CHA-3. F.1): near the point of tangency, the curve and the tangent line nearly coincide.",
      "估计式：\\(f(a+\\Delta x)\\approx f(a)+f'(a)\\Delta x\\)，即用切线的改变量代替函数的改变量。 · Estimation formula: \\(f(a+\\Delta x)\\approx f(a)+f'(a)\\Delta x\\), replacing the change in the function with the change along the tangent line.",
      "微分：\\(\\mathrm{d}y=f'(a)\\,\\mathrm{d}x\\) 是线性化预测的改变量。 · Differential: \\(\\mathrm{d}y=f'(a)\\,\\mathrm{d}x\\) is the change predicted by linearization.",
      "局部线性：把曲线不断放大，在切点附近它看起来像一条直线。 · Local linearity: zooming in on the curve near the point of tangency makes it look like a straight line.",
      "误差随 \\(|x-a|\\) 增大而增大；离切点越远，线性化通常越不可靠。 · The error grows with \\(|x-a|\\); the farther from the point of tangency, the less reliable the linearization usually is.",
      "凹凸性决定误差符号：凹向上时切线在曲线下方，线性化低估；凹向下时切线在曲线上方，线性化高估。 · Concavity determines the sign of the error: when concave up the tangent lies below the curve and the linearization underestimates; when concave down the tangent lies above and it overestimates.",
      "切点附近的函数行为决定高估或低估（CHA-3.F.2）：若在 \\(a\\) 的某邻域内 \\(f''>0\\)（\\(f'\\) 递增、曲线凹向上），则切线位于曲线下方，\\(L(x)\\le f(x)\\)，线性化为低估；若 \\(f''<0\\)（\\(f'\\) 递减、曲线凹向下），则切线位于曲线上方，\\(L(x)\\ge f(x)\\)，线性化为高估。 · Behavior near the point of tangency determines overestimate versus underestimate (CHA-3.F.2): if \\(f''>0\\) on a neighborhood of \\(a\\) (\\(f'\\) increasing, concave up), the tangent lies below the curve, so \\(L(x)\\le f(x)\\) and the linearization underestimates; if \\(f''<0\\) (\\(f'\\) decreasing, concave down), the tangent lies above, so \\(L(x)\\ge f(x)\\) and it overestimates.",
      "三条等价判据必须一致：切点附近 \\(f''\\) 的符号、\\(f'\\) 的单调性（递增/递减）、曲线在切线的上方还是下方；AP 答题时选最方便的一条并说明理由。 · Three equivalent tests must agree: the sign of \\(f''\\) near the point of tangency, the monotonicity of \\(f'\\) (increasing/decreasing), and whether the curve lies above or below the tangent; in an AP response, use the most convenient test and justify it.",
      "若凹凸性在切点处改变（例如 \\(f(x)=x^{3}\\) 在 \\(a=0\\)），切线会穿过曲线：同一线性化在 \\(a\\) 的一侧高估、另一侧低估，必须分别讨论 \\(x<a\\) 与 \\(x>a\\)。 · If concavity changes at the point of tangency (for example, \\(f(x)=x^{3}\\) at \\(a=0\\)), the tangent crosses the curve: the same linearization overestimates on one side of \\(a\\) and underestimates on the other, so discuss \\(x<a\\) and \\(x>a\\) separately.",
      "线性化可用于估计根号、幂、三角函数与对数等函数值，但要选好 \\(a\\) 并检查合理性。 · Linearization can estimate square roots, powers, trigonometric functions, and logarithms, but choose \\(a\\) carefully and check reasonableness."
    ],
    "definition": "设 \\(f\\) 在 \\(x=a\\) 处可导。\\(f\\) 在 \\(a\\) 处的线性化是 \\(L(x)=f(a)+f'(a)(x-a)\\)，其图像就是曲线 \\(y=f(x)\\) 在点 \\((a,f(a))\\) 处的切线。由于切线在切点附近与曲线非常接近，当 \\(x\\) 接近 \\(a\\) 时可用 \\(L(x)\\) 近似 \\(f(x)\\)：\\(f(a+\\Delta x)\\approx f(a)+f'(a)\\Delta x\\)。这里的“局部”强调近似只在 \\(a\\) 的邻域内可靠；\\(|x-a|\\) 越大，误差通常越大。切点附近的凹凸性决定近似的方向：\\(f''>0\\) 时切线在曲线下方，\\(L(x)\\le f(x)\\)，为低估；\\(f''<0\\) 时切线在曲线上方，\\(L(x)\\ge f(x)\\)，为高估。若 \\(f''\\) 在 \\(a\\) 两侧变号，切线穿过曲线，高估/低估的结论要按 \\(x\\) 位于 \\(a\\) 的哪一侧分别给出。 · Let \\(f\\) be differentiable at \\(x=a\\). The linearization of \\(f\\) at \\(a\\) is \\(L(x)=f(a)+f'(a)(x-a)\\), whose graph is the tangent line to \\(y=f(x)\\) at \\((a,f(a))\\). Because the tangent line stays close to the curve near the point of tangency, for \\(x\\) near \\(a\\) we may approximate \\(f(x)\\) by \\(L(x)\\): \\(f(a+\\Delta x)\\approx f(a)+f'(a)\\Delta x\\). The word “local” emphasizes that the approximation is reliable only in a neighborhood of \\(a\\); the error typically grows with \\(|x-a|\\). Concavity near the point of tangency determines the direction of the approximation: when \\(f''>0\\) the tangent lies below the curve, \\(L(x)\\le f(x)\\), an underestimate; when \\(f''<0\\) the tangent lies above, \\(L(x)\\ge f(x)\\), an overestimate. If \\(f''\\) changes sign across \\(a\\), the tangent crosses the curve, and the overestimate/underestimate conclusion must be given separately for each side of \\(a\\).",
    "intuition": "把曲线不断放大：在切点附近，曲线看起来几乎就是一条直线，这条直线就是切线。线性化就是用这条“放大后看到的直线”代替曲线。凹凸性告诉你直线在曲线的哪一侧：凹向上时切线在下方，所以近似值偏小；凹向下时切线在上方，所以近似值偏大。判断方向时不要只看 \\(f(a)\\) 或 \\(f'(a)\\)，而要看曲线在切点附近向哪边弯：向上弯则切线托在下方（低估），向下弯则切线盖在上方（高估）；若弯曲方向在切点两侧不同，切线会穿过曲线，必须分侧讨论。 · Zoom in on the curve: near the point of tangency it looks almost like a straight line, and that line is the tangent. Linearization replaces the curve by this “line seen after zooming in.”Concavity tells which side the line lies on: when the curve is concave up the tangent lies below, so the approximation is too small; when it is concave down the tangent lies above, so the approximation is too large. To determine the direction, do not look only at \\(f(a)\\) or \\(f'(a)\\); look at which way the curve bends near the point of tangency: bending upward puts the tangent below (underestimate), bending downward puts it above (overestimate); if the bending direction differs on the two sides, the tangent crosses the curve and the sides must be discussed separately.",
    "formulas": [
      {
        "latex": "L(x)=f(a)+f'(a)(x-a)",
        "note": "局部线性近似：用切线在 \\(a\\) 附近近似 \\(f\\)。 · Local linear approximation: use the tangent line near \\(a\\) to approximate \\(f\\)."
      },
      {
        "latex": "f(a+\\Delta x)\\approx f(a)+f'(a)\\,\\Delta x",
        "note": "用线性化估计函数值或函数改变量。 · Use the linearization to estimate a function value or a change in the function."
      },
      {
        "latex": "\\mathrm{d}y=f'(a)\\,\\mathrm{d}x",
        "note": "微分：线性化预测的改变量。 · Differential: the change predicted by linearization."
      },
      {
        "latex": "\\text{误差}=f(x)-L(x)",
        "note": "近似误差；在切点附近，凹向上时为正，凹向下时为负。 · Approximation error; near the point of tangency it is positive when concave up and negative when concave down."
      },
      {
        "latex": "f''>0\\ \\text{near }a\\ \\Rightarrow\\ L(x)\\le f(x);\\quad f''<0\\ \\text{near }a\\ \\Rightarrow\\ L(x)\\ge f(x)",
        "note": "切点附近的凹凸性决定切线在高估还是低估：凹向上时切线在下方（低估），凹向下时切线在上方（高估）。 · Concavity near the point of tangency decides overestimate versus underestimate: concave up puts the tangent below (underestimate), concave down puts it above (overestimate)."
      }
    ],
    "derivationNotes": [
      {
        "from": "切点与斜率 · point and slope",
        "to": "切线方程 · tangent-line equation",
        "note": "切线经过 \\((a,f(a))\\)，斜率为 \\(f'(a)\\)，由点斜式得 \\(L(x)=f(a)+f'(a)(x-a)\\)。 · The tangent passes through \\((a,f(a))\\) with slope \\(f'(a)\\), so point-slope form gives \\(L(x)=f(a)+f'(a)(x-a)\\)."
      },
      {
        "from": "导数定义 · definition of the derivative",
        "to": "局部线性 · local linearity",
        "note": "导数定义说明 \\(f(a+h)\\approx f(a)+f'(a)h\\)，当 \\(h\\) 很小时误差比 \\(h\\) 更高阶。 · The definition of the derivative implies \\(f(a+h)\\approx f(a)+f'(a)h\\), with an error of higher order than \\(h\\) when \\(h\\) is small."
      },
      {
        "from": "线性化 · linearization",
        "to": "微分 · differential",
        "note": "把 \\(\\Delta x\\) 记作 \\(\\mathrm{d}x\\)，则线性化预测的改变量为 \\(\\mathrm{d}y=f'(a)\\,\\mathrm{d}x\\)。 · Writing \\(\\Delta x\\) as \\(\\mathrm{d}x\\), the change predicted by linearization is \\(\\mathrm{d}y=f'(a)\\,\\mathrm{d}x\\)."
      },
      {
        "from": "二阶导数 · second derivative",
        "to": "误差符号 · sign of the error",
        "note": "凹向上（\\(f''>0\\)）时切线在曲线下方，\\(f(x)-L(x)\\ge0\\)；凹向下（\\(f''<0\\)）时切线在曲线上方，\\(f(x)-L(x)\\le0\\)。 · When concave up (\\(f''>0\\)) the tangent lies below the curve and \\(f(x)-L(x)\\ge0\\); when concave down (\\(f''<0\\)) the tangent lies above and \\(f(x)-L(x)\\le0\\)."
      },
      {
        "from": "切点附近的行为 · behavior near \\(a\\)",
        "to": "高估/低估 · overestimate or underestimate",
        "note": "在 \\(a\\) 的邻域内比较切线与曲线：若曲线在切线上方（\\(f>L\\)），切线的值偏小，是低估；若曲线在切线下方（\\(f<L\\)），切线的值偏大，是高估。 · Compare the curve and the tangent on a neighborhood of \\(a\\): if the curve lies above the tangent (\\(f>L\\)), the tangent value is too small (underestimate); if the curve lies below the tangent (\\(f<L\\)), the tangent value is too large (overestimate)."
      },
      {
        "from": "\\(f'\\) 的增减 · monotonicity of \\(f'\\)",
        "to": "凹向上/凹向下 · concave up/down",
        "note": "\\(f'\\) 在 \\(a\\) 附近递增说明斜率越来越大，曲线凹向上，切线在下方，所以线性化低估；\\(f'\\) 递减说明曲线凹向下，切线在上方，所以线性化高估。 · If \\(f'\\) is increasing near \\(a\\), slopes are getting larger, the curve is concave up, the tangent lies below, and the linearization underestimates; if \\(f'\\) is decreasing, the curve is concave down, the tangent lies above, and the linearization overestimates."
      },
      {
        "from": "凹凸性改变 · concavity change",
        "to": "切线穿过曲线 · tangent crosses the curve",
        "note": "若 \\(f''\\) 在 \\(a\\) 两侧异号，切线在 \\(a\\) 处穿过曲线；例如 \\(f(x)=x^{3}\\) 在 \\(a=0\\) 的切线为 \\(y=0\\)，在 \\(x>0\\) 时 \\(f>L\\)（低估），在 \\(x<0\\) 时 \\(f<L\\)（高估）。 · If \\(f''\\) has opposite signs on the two sides of \\(a\\), the tangent crosses the curve at \\(a\\); for example, the tangent to \\(f(x)=x^{3}\\) at \\(a=0\\) is \\(y=0\\), and for \\(x>0\\), \\(f>L\\) (underestimate), while for \\(x<0\\), \\(f<L\\) (overestimate)."
      }
    ],
    "conditions": [
      "\\(f\\) 在 \\(a\\) 处可导，且 \\(a\\) 在定义域内；切线斜率 \\(f'(a)\\) 有限。 · \\(f\\) is differentiable at \\(a\\), \\(a\\) is in the domain, and the tangent slope \\(f'(a)\\) is finite.",
      "\\(x\\) 要接近 \\(a\\)；“局部”近似不能外推到很远的地方。 · \\(x\\) must be close to \\(a\\); a “local” approximation cannot be extrapolated far away.",
      "用凹凸性判断高估或低估时，需要 \\(f''\\) 在区间上的符号或图像信息。 · Deciding overestimate versus underestimate from concavity requires the sign of \\(f''\\) on the interval or graphical information.",
      "判断高估/低估要看 \\(f''\\) 在切点的一个邻域内的符号；只知道 \\(f''(a)\\) 一个值不够，因为凹凸性可能在 \\(a\\) 处改变。 · To decide overestimate versus underestimate, examine the sign of \\(f''\\) on a neighborhood of the point of tangency; knowing only \\(f''(a)\\) is not enough, because concavity may change at \\(a\\).",
      "若 \\(f''\\) 在 \\(a\\) 两侧异号，必须把 \\(x<a\\) 与 \\(x>a\\) 分开讨论，不能写一个统一结论。 · If \\(f''\\) has opposite signs on the two sides of \\(a\\), discuss \\(x<a\\) and \\(x>a\\) separately; do not give one unified conclusion.",
      "估计值要与真实值或计算器值比较，并注明“approximately”。 · Compare the estimate with the true or calculator value, and state “approximately.”",
      "线性化保持 \\(f\\) 的单位；改变量 \\(f'(a)\\Delta x\\) 的单位与 \\(f\\) 相同。 · Linearization preserves the units of \\(f\\); the change \\(f'(a)\\Delta x\\) has the same units as \\(f\\).",
      "在不可导点或竖直切线处不能使用线性化。 · Linearization cannot be used at a point where the function is not differentiable or where the tangent is vertical."
    ],
    "keyPoints": [
      "切线方程就是线性化 \\(L(x)=f(a)+f'(a)(x-a)\\)。 · The tangent-line equation is the linearization \\(L(x)=f(a)+f'(a)(x-a)\\).",
      "切线是局部线性近似的图像。 · The tangent line is the graph of the local linear approximation.",
      "估计式：\\(f(a+\\Delta x)\\approx f(a)+f'(a)\\Delta x\\)。 · Estimation formula: \\(f(a+\\Delta x)\\approx f(a)+f'(a)\\Delta x\\).",
      "“局部”意味着离 \\(a\\) 越近越好。 · “Local” means the approximation is best close to \\(a\\).",
      "凹向上时切线在下方，线性化低估。 · When concave up, the tangent lies below and the linearization underestimates.",
      "凹向下时切线在上方，线性化高估。 · When concave down, the tangent lies above and the linearization overestimates.",
      "等价判据：切点附近 \\(f''>0\\)、\\(f'\\) 递增、曲线在切线上方，三者都推出低估；反过来都推出高估。 · Equivalent tests: near the point of tangency, \\(f''>0\\), \\(f'\\) increasing, and the curve above the tangent all imply an underestimate; the reverse implications give an overestimate.",
      "凹凸性改变时，同一切线在一侧高估、另一侧低估。 · When concavity changes, the same tangent overestimates on one side and underestimates on the other.",
      "高估/低估是切点附近的局部性质，不是整条曲线的全局性质。 · Overestimate/underestimate is a local property near the point of tangency, not a global property of the whole curve.",
      "误差通常随 \\(|x-a|\\) 增大而增大。 · The error usually grows with \\(|x-a|\\).",
      "选择 \\(a\\) 时，要让 \\(f(a)\\) 与 \\(f'(a)\\) 都容易计算。 · Choose \\(a\\) so that both \\(f(a)\\) and \\(f'(a)\\) are easy to compute."
    ],
    "misconceptions": [
      "把线性化当成全局近似，离 \\(a\\) 很远也直接使用。 · Treating the linearization as a global approximation and using it far from \\(a\\).",
      "把 \\(L(x)\\) 与 \\(f(x)\\) 混为一谈；忘记 \\(L(a)=f(a)\\)。 · Confusing \\(L(x)\\) with \\(f(x)\\); forgetting that \\(L(a)=f(a)\\).",
      "认为切线近似总是高估或总是低估；应由凹凸性判断。 · Assuming a tangent-line approximation always overestimates or always underestimates; concavity decides.",
      "把凹凸性与高估/低估的对应关系记反。 · Reversing the correspondence between concavity and overestimate or underestimate.",
      "只根据 \\(f'(a)\\) 的符号判断高估/低估；\\(f'\\) 的符号说明增减，凹凸性才决定切线在曲线的哪一侧。 · Deciding overestimate versus underestimate from the sign of \\(f'(a)\\); the sign of \\(f'\\) tells increasing or decreasing, while concavity decides which side of the curve the tangent lies on.",
      "只看 \\(f''(a)\\) 一个点就断言整个邻域都同向；若凹凸性在 \\(a\\) 两侧改变，切线会穿过曲线。 · Using only \\(f''(a)\\) to claim the same direction on the whole neighborhood; if concavity changes across \\(a\\), the tangent crosses the curve.",
      "把“高估”理解为误差 \\(f(x)-L(x)>0\\)；实际上 \\(L(x)>f(x)\\) 才是高估。 · Misreading “overestimate” as \\(f(x)-L(x)>0\\); in fact \\(L(x)>f(x)\\) is the overestimate.",
      "用错切点 \\(a\\)，或把 \\(L(x)\\) 写成 \\(f(a)+f'(a)x\\)，忘记减去 \\(a\\)。 · Using the wrong \\(a\\), or writing \\(L(x)=f(a)+f'(a)x\\) and forgetting to subtract \\(a\\).",
      "把 \\(\\mathrm{d}x\\) 与 \\(\\Delta x\\) 完全等同；它们在线性化中可互换作近似，但概念不同。 · Treating \\(\\mathrm{d}x\\) and \\(\\Delta x\\) as identical; they may be interchanged in linearization as an approximation, but they are conceptually different.",
      "认为误差为零，或认为误差与 \\(|x-a|\\) 无关。 · Assuming the error is zero or independent of \\(|x-a|\\).",
      "在不可导点使用线性化。 · Using linearization at a point where the function is not differentiable."
    ],
    "examples": [
      {
        "title": "例 1 · 平方根估计 · Square-Root Estimate",
        "prompt": "用 \\(f(x)=\\sqrt{x}\\) 在 \\(a=4\\) 处的线性化估计 \\(\\sqrt{4.41}\\)，并与真实值比较，判断是高估还是低估。 · Use the linearization of \\(f(x)=\\sqrt{x}\\) at \\(a=4\\) to estimate \\(\\sqrt{4.41}\\), compare with the true value, and decide whether it is an overestimate or an underestimate.",
        "steps": [
          "\\(f(4)=2\\)，\\(f'(x)=\\dfrac{1}{2\\sqrt{x}}\\)，所以 \\(f'(4)=\\dfrac{1}{4}=0.25\\)。 · \\(f(4)=2\\) and \\(f'(x)=\\dfrac{1}{2\\sqrt{x}}\\), so \\(f'(4)=\\dfrac{1}{4}=0.25\\).",
          "线性化：\\(L(x)=2+0.25(x-4)\\)。 · Linearization: \\(L(x)=2+0.25(x-4)\\).",
          "代入：\\(L(4.41)=2+0.25(0.41)=2.1025\\)。 · Substitute: \\(L(4.41)=2+0.25(0.41)=2.1025\\).",
          "真实值 \\(\\sqrt{4.41}=2.1\\)，误差为 \\(2.1-2.1025=-0.0025\\)。 · The true value is \\(\\sqrt{4.41}=2.1\\), and the error is \\(2.1-2.1025=-0.0025\\).",
          "\\(f''(x)=-\\dfrac{1}{4x\\sqrt{x}}<0\\)，曲线凹向下，切线在曲线上方，所以是高估。 · \\(f''(x)=-\\dfrac{1}{4x\\sqrt{x}}<0\\), so the curve is concave down and the tangent lies above the curve; this is an overestimate."
        ],
        "solution": "\\(L(4.41)=2.1025\\)，真实值 \\(\\sqrt{4.41}=2.1\\)；因为 \\(\\sqrt{x}\\) 在 \\(x=4\\) 附近凹向下，切线在曲线上方，所以线性化高估了真实值。 · \\(L(4.41)=2.1025\\), while the true value is \\(\\sqrt{4.41}=2.1\\); because \\(\\sqrt{x}\\) is concave down near \\(x=4\\), the tangent lies above the curve, so the linearization overestimates the true value.",
        "solutionLatex": "L(4.41)=2.1025,\\quad \\sqrt{4.41}=2.1"
      },
      {
        "title": "例 2 · 三次幂估计 · Cube Estimate",
        "prompt": "用 \\(f(x)=x^{3}\\) 在 \\(a=2\\) 处的线性化估计 \\(2.01^{3}\\)，与真实值比较，并判断高估或低估。 · Use the linearization of \\(f(x)=x^{3}\\) at \\(a=2\\) to estimate \\(2.01^{3}\\), compare with the true value, and decide whether it is an overestimate or an underestimate.",
        "steps": [
          "\\(f(2)=8\\)，\\(f'(x)=3x^{2}\\)，所以 \\(f'(2)=12\\)。 · \\(f(2)=8\\) and \\(f'(x)=3x^{2}\\), so \\(f'(2)=12\\).",
          "线性化：\\(L(x)=8+12(x-2)\\)。 · Linearization: \\(L(x)=8+12(x-2)\\).",
          "代入：\\(L(2.01)=8+12(0.01)=8.12\\)。 · Substitute: \\(L(2.01)=8+12(0.01)=8.12\\).",
          "真实值 \\(2.01^{3}=8.120601\\)，误差为 \\(8.120601-8.12=0.000601\\)。 · The true value is \\(2.01^{3}=8.120601\\), and the error is \\(8.120601-8.12=0.000601\\).",
          "\\(f''(x)=6x>0\\)（在 \\(x=2\\) 附近），曲线凹向上，切线在曲线下方，所以是低估。 · \\(f''(x)=6x>0\\) near \\(x=2\\), so the curve is concave up and the tangent lies below it; this is an underestimate."
        ],
        "solution": "\\(2.01^{3}\\approx8.12\\)，真实值为 8.120601；因为 \\(x^{3}\\) 在 \\(x=2\\) 附近凹向上，切线在曲线下方，所以线性化低估了真实值。 · \\(2.01^{3}\\approx8.12\\), while the true value is 8.120601; because \\(x^{3}\\) is concave up near \\(x=2\\), the tangent lies below the curve, so the linearization underestimates the true value.",
        "solutionLatex": "L(2.01)=8.12,\\quad 2.01^{3}=8.120601"
      },
      {
        "title": "例 3 · 小角近似 · Small-Angle Estimate",
        "prompt": "用 \\(f(x)=\\sin x\\) 在 \\(a=0\\) 处的线性化估计 \\(\\sin(0.1)\\)，与真实值比较，并判断高估或低估。 · Use the linearization of \\(f(x)=\\sin x\\) at \\(a=0\\) to estimate \\(\\sin(0.1)\\), compare with the true value, and decide whether it is an overestimate or an underestimate.",
        "steps": [
          "\\(f(0)=0\\)，\\(f'(x)=\\cos x\\)，所以 \\(f'(0)=1\\)。 · \\(f(0)=0\\) and \\(f'(x)=\\cos x\\), so \\(f'(0)=1\\).",
          "线性化：\\(L(x)=0+1(x-0)=x\\)。 · Linearization: \\(L(x)=0+1(x-0)=x\\).",
          "代入：\\(L(0.1)=0.1\\)。 · Substitute: \\(L(0.1)=0.1\\).",
          "真实值 \\(\\sin(0.1)\\approx0.099833\\)，误差为 \\(0.099833-0.1=-0.000167\\)。 · The true value is \\(\\sin(0.1)\\approx0.099833\\), and the error is \\(0.099833-0.1=-0.000167\\).",
          "在 \\(0\\) 附近 \\(\\sin x\\) 凹向下，切线在曲线上方，所以是高估。 · Near \\(0\\), \\(\\sin x\\) is concave down and the tangent lies above the curve, so this is an overestimate."
        ],
        "solution": "\\(\\sin(0.1)\\approx0.1\\)，真实值约为 0.099833；因为 \\(\\sin x\\) 在 \\(0\\) 附近凹向下，切线在曲线上方，所以线性化高估了真实值。 · \\(\\sin(0.1)\\approx0.1\\), while the true value is about 0.099833; because \\(\\sin x\\) is concave down near \\(0\\), the tangent lies above the curve, so the linearization overestimates the true value.",
        "solutionLatex": "L(0.1)=0.1,\\quad \\sin(0.1)\\approx0.099833"
      },
      {
        "title": "例 4 · 对数估计 · Logarithm Estimate",
        "prompt": "用 \\(f(x)=\\ln x\\) 在 \\(a=1\\) 处的线性化估计 \\(\\ln(1.05)\\)，与真实值比较，并判断高估或低估。 · Use the linearization of \\(f(x)=\\ln x\\) at \\(a=1\\) to estimate \\(\\ln(1.05)\\), compare with the true value, and decide whether it is an overestimate or an underestimate.",
        "steps": [
          "\\(f(1)=0\\)，\\(f'(x)=\\dfrac{1}{x}\\)，所以 \\(f'(1)=1\\)。 · \\(f(1)=0\\) and \\(f'(x)=\\dfrac{1}{x}\\), so \\(f'(1)=1\\).",
          "线性化：\\(L(x)=0+1(x-1)=x-1\\)。 · Linearization: \\(L(x)=0+1(x-1)=x-1\\).",
          "代入：\\(L(1.05)=0.05\\)。 · Substitute: \\(L(1.05)=0.05\\).",
          "真实值 \\(\\ln(1.05)\\approx0.048790\\)，误差约为 \\(-0.00121\\)。 · The true value is \\(\\ln(1.05)\\approx0.048790\\), and the error is about \\(-0.00121\\).",
          "\\(\\ln x\\) 凹向下（\\(f''(x)=-\\dfrac{1}{x^{2}}<0\\)），切线在曲线上方，所以是高估。 · \\(\\ln x\\) is concave down (\\(f''(x)=-\\dfrac{1}{x^{2}}<0\\)), so the tangent lies above the curve; this is an overestimate."
        ],
        "solution": "\\(\\ln(1.05)\\approx0.05\\)，真实值约为 0.048790；因为 \\(\\ln x\\) 在 \\(x=1\\) 附近凹向下，切线在曲线上方，所以线性化高估了真实值。 · \\(\\ln(1.05)\\approx0.05\\), while the true value is about 0.048790; because \\(\\ln x\\) is concave down near \\(x=1\\), the tangent lies above the curve, so the linearization overestimates the true value.",
        "solutionLatex": "L(1.05)=0.05,\\quad \\ln(1.05)\\approx0.048790"
      },
      {
        "title": "例 5 · 只给函数值与导数 · Given Only a Value and a Derivative",
        "prompt": "已知 \\(f(2)=5\\)、\\(f'(2)=-3\\)，估计 \\(f(2.1)\\) 与 \\(f(1.9)\\)。若 \\(f\\) 在 \\(x=2\\) 附近凹向上，这两个估计是高估还是低估？ · Given \\(f(2)=5\\) and \\(f'(2)=-3\\), estimate \\(f(2.1)\\) and \\(f(1.9)\\). If \\(f\\) is concave up near \\(x=2\\), are these estimates overestimates or underestimates?",
        "steps": [
          "线性化：\\(L(x)=5-3(x-2)\\)。 · Linearization: \\(L(x)=5-3(x-2)\\).",
          "代入：\\(L(2.1)=5-3(0.1)=4.7\\)。 · Substitute: \\(L(2.1)=5-3(0.1)=4.7\\).",
          "代入：\\(L(1.9)=5-3(-0.1)=5.3\\)。 · Substitute: \\(L(1.9)=5-3(-0.1)=5.3\\).",
          "凹向上时切线在曲线下方，所以两个线性化估计都偏低（低估）。 · When concave up, the tangent lies below the curve, so both linearization estimates are too low (underestimates)."
        ],
        "solution": "\\(f(2.1)\\approx4.7\\)，\\(f(1.9)\\approx5.3\\)；若 \\(f\\) 凹向上，切线在曲线下方，这两个都是低估。 · \\(f(2.1)\\approx4.7\\) and \\(f(1.9)\\approx5.3\\); if \\(f\\) is concave up, the tangent lies below the curve, so both are underestimates.",
        "solutionLatex": "L(2.1)=4.7,\\quad L(1.9)=5.3"
      },
      {
        "title": "例 6 · 幂函数估计 · Power Estimate",
        "prompt": "用 \\(f(x)=x^{10}\\) 在 \\(a=1\\) 处的线性化估计 \\((1.02)^{10}\\)，与真实值比较，并判断高估或低估。 · Use the linearization of \\(f(x)=x^{10}\\) at \\(a=1\\) to estimate \\((1.02)^{10}\\), compare with the true value, and decide whether it is an overestimate or an underestimate.",
        "steps": [
          "\\(f(1)=1\\)，\\(f'(x)=10x^{9}\\)，所以 \\(f'(1)=10\\)。 · \\(f(1)=1\\) and \\(f'(x)=10x^{9}\\), so \\(f'(1)=10\\).",
          "线性化：\\(L(x)=1+10(x-1)\\)。 · Linearization: \\(L(x)=1+10(x-1)\\).",
          "代入：\\(L(1.02)=1+10(0.02)=1.2\\)。 · Substitute: \\(L(1.02)=1+10(0.02)=1.2\\).",
          "真实值 \\((1.02)^{10}\\approx1.2190\\)，误差约为 \\(0.0190\\)。 · The true value is \\((1.02)^{10}\\approx1.2190\\), and the error is about \\(0.0190\\).",
          "\\(f''(x)=90x^{8}>0\\)，曲线凹向上，切线在曲线下方，所以是低估。 · \\(f''(x)=90x^{8}>0\\), so the curve is concave up, the tangent lies below it, and this is an underestimate."
        ],
        "solution": "\\((1.02)^{10}\\approx1.2\\)，真实值约为 1.2190；因为 \\(x^{10}\\) 在 \\(x=1\\) 附近凹向上，线性化低估了真实值约 0.019。 · \\((1.02)^{10}\\approx1.2\\), while the true value is about 1.2190; because \\(x^{10}\\) is concave up near \\(x=1\\), the linearization underestimates the true value by about 0.019.",
        "solutionLatex": "L(1.02)=1.2,\\quad (1.02)^{10}\\approx1.2190"
      },
      {
        "title": "例 7 · 凹凸性在切点改变 · Concavity Changes at the Point of Tangency",
        "prompt": "设 \\(f(x)=x^{3}\\)。求 \\(a=0\\) 处的线性化 \\(L(x)\\)，分别估计 \\(f(0.1)\\) 与 \\(f(-0.1)\\)，并判断这两个线性化值是高估还是低估。 · Let \\(f(x)=x^{3}\\). Find the linearization \\(L(x)\\) at \\(a=0\\), estimate \\(f(0.1)\\) and \\(f(-0.1)\\), and decide whether each linearization value is an overestimate or an underestimate.",
        "steps": [
          "\\(f(0)=0\\)，\\(f'(x)=3x^{2}\\)，所以 \\(f'(0)=0\\)，\\(L(x)=0\\)。 · \\(f(0)=0\\) and \\(f'(x)=3x^{2}\\), so \\(f'(0)=0\\) and \\(L(x)=0\\).",
          "\\(f(0.1)=0.001>L(0.1)=0\\)，所以 \\(L(0.1)\\) 是低估。 · \\(f(0.1)=0.001>L(0.1)=0\\), so \\(L(0.1)\\) is an underestimate.",
          "\\(f(-0.1)=-0.001<L(-0.1)=0\\)，所以 \\(L(-0.1)\\) 是高估。 · \\(f(-0.1)=-0.001<L(-0.1)=0\\), so \\(L(-0.1)\\) is an overestimate.",
          "\\(f''(x)=6x\\) 在 \\(x=0\\) 两侧变号：\\(x>0\\) 时凹向上，\\(x<0\\) 时凹向下，因此切线 \\(y=0\\) 在切点处穿过曲线。 · \\(f''(x)=6x\\) changes sign across \\(x=0\\): concave up for \\(x>0\\) and concave down for \\(x<0\\), so the tangent \\(y=0\\) crosses the curve at the point of tangency."
        ],
        "solution": "\\(L(x)=0\\)；在 \\(x=0.1\\) 处 \\(f(0.1)=0.001>L(0.1)\\)，是低估；在 \\(x=-0.1\\) 处 \\(f(-0.1)=-0.001<L(-0.1)\\)，是高估。同一个线性化在切点两侧方向不同，原因是 \\(f''\\) 在 \\(0\\) 两侧变号。 · \\(L(x)=0\\); at \\(x=0.1\\), \\(f(0.1)=0.001>L(0.1)\\), an underestimate; at \\(x=-0.1\\), \\(f(-0.1)=-0.001<L(-0.1)\\), an overestimate. The same linearization has opposite directions on the two sides because \\(f''\\) changes sign at \\(0\\).",
        "solutionLatex": "L(0.1)=0<0.001=f(0.1),\\quad L(-0.1)=0>-0.001=f(-0.1)"
      },
      {
        "title": "例 8 · 由 f′ 判断方向 · Using the Graph of f′",
        "prompt": "已知 \\(f\\) 在 \\(x=2\\) 附近可导，且 \\(f'(x)\\) 在 \\(x=2\\) 附近递增。若用 \\(f\\) 在 \\(a=2\\) 处的切线估计 \\(f(2.1)\\)，这个估计是高估还是低估？再用 \\(f(x)=e^{x}\\) 在 \\(a=0\\) 附近做数值验证。 · Suppose \\(f\\) is differentiable near \\(x=2\\) and \\(f'(x)\\) is increasing near \\(x=2\\). If the tangent line at \\(a=2\\) is used to estimate \\(f(2.1)\\), is the estimate an overestimate or an underestimate? Then verify numerically with \\(f(x)=e^{x}\\) near \\(a=0\\).",
        "steps": [
          "\\(f'\\) 递增意味着 \\(f''>0\\)，曲线在 \\(a=2\\) 附近凹向上。 · \\(f'\\) increasing means \\(f''>0\\), so the curve is concave up near \\(a=2\\).",
          "凹向上时切线在曲线下方，所以 \\(L(2.1)<f(2.1)\\)，是低估。 · When concave up, the tangent lies below the curve, so \\(L(2.1)<f(2.1)\\), an underestimate.",
          "数值验证：\\(f(x)=e^{x}\\) 在 \\(a=0\\) 处 \\(L(x)=1+x\\)，\\(L(0.1)=1.1\\)，而 \\(e^{0.1}\\approx1.10517\\)，所以 \\(L(0.1)\\) 确实是低估。 · Numerical check: for \\(f(x)=e^{x}\\) at \\(a=0\\), \\(L(x)=1+x\\) and \\(L(0.1)=1.1\\), while \\(e^{0.1}\\approx1.10517\\), so \\(L(0.1)\\) is indeed an underestimate."
        ],
        "solution": "\\(f'\\) 在 \\(a\\) 附近递增 \\(\\Rightarrow f''>0\\Rightarrow\\) 曲线凹向上 \\(\\Rightarrow\\) 切线在曲线下方 \\(\\Rightarrow\\) 线性化低估。\\(e^{0.1}\\) 的例子验证了这一点：\\(L(0.1)=1.1<1.10517\\approx e^{0.1}\\)。 · \\(f'\\) increasing near \\(a\\) \\(\\Rightarrow f''>0\\Rightarrow\\) concave up \\(\\Rightarrow\\) tangent below the curve \\(\\Rightarrow\\) the linearization underestimates. The example \\(e^{0.1}\\) confirms it: \\(L(0.1)=1.1<1.10517\\approx e^{0.1}\\).",
        "solutionLatex": "L(0.1)=1.1<1.10517\\approx e^{0.1}"
      }
    ],
    "examTips": [
      "先写 \\(L(x)=f(a)+f'(a)(x-a)\\)，再代入目标 \\(x\\)。 · Write \\(L(x)=f(a)+f'(a)(x-a)\\) first, then substitute the target \\(x\\).",
      "选择 \\(a\\) 使 \\(f(a)\\) 与 \\(f'(a)\\) 都容易算，如 \\(4\\)、\\(1\\)、\\(0\\)、\\(\\dfrac{\\pi}{6}\\)。 · Choose \\(a\\) so that both \\(f(a)\\) and \\(f'(a)\\) are easy to compute, such as \\(4\\), \\(1\\), \\(0\\), or \\(\\dfrac{\\pi}{6}\\).",
      "估计题要写 “approximately”，并与计算器值比较。 · Write “approximately” in estimation problems and compare with the calculator value.",
      "判断高估或低估：看 \\(f''\\) 或图像凹凸性；凹向上低估，凹向下高估。 · Decide overestimate versus underestimate from \\(f''\\) or the graph's concavity: concave up means underestimate, concave down means overestimate.",
      "若题目给出 \\(f'\\) 的图像，先看 \\(f'\\) 在切点附近递增还是递减：递增等价于 \\(f''>0\\)，对应低估；递减对应高估。 · If the problem gives the graph of \\(f'\\), first check whether \\(f'\\) is increasing or decreasing near the point of tangency: increasing is equivalent to \\(f''>0\\) and gives an underestimate, while decreasing gives an overestimate.",
      "若凹凸性在切点两侧改变，分别写 \\(x<a\\) 与 \\(x>a\\) 的结论，并明确“在哪一侧”高估或低估。 · If concavity changes across the point of tangency, state the conclusions for \\(x<a\\) and \\(x>a\\) separately and specify “on which side” the estimate overestimates or underestimates.",
      "误差随 \\(|x-a|\\) 增大；不要外推太远。 · The error grows with \\(|x-a|\\); do not extrapolate too far.",
      "线性化保持 \\(f\\) 的单位；改变量 \\(f'(a)\\Delta x\\) 与 \\(f\\) 同单位。 · Linearization preserves the units of \\(f\\); the change \\(f'(a)\\Delta x\\) has the same units as \\(f\\)."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.1",
        "title": "变化率情境 · Interpreting the Meaning of the Derivative in Context",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.5",
        "title": "相关变化率求解 · Solving Related Rates Problems",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.7",
        "title": "洛必达法则 · L'Hospital's Rule for Determining Limits of Indeterminate Forms",
        "relation": "相关 · Related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.6",
        "title": "凹性与拐点 · Determining Concavity of Functions over Their Domains",
        "relation": "相关 · Related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u4",
    "connections": [
      "先修：4.1 的导数情境解释与 4.5 的相关变化率。 · Prerequisite: the contextual interpretation in 4.1 and related rates in 4.5.",
      "后续：4.7 洛必达法则、5.6 凹凸性与 10.11 泰勒多项式都把线性化推广到更高阶近似。 · Follow-up: 4.7 L'Hospital's rule, 5.6 concavity, and 10.11 Taylor polynomials extend linearization to higher-order approximations.",
      "跨学科：物理中的小角近似 \\(\\sin\\theta\\approx\\theta\\)、工程中的局部线性化与误差分析。 · Cross-disciplinary: the small-angle approximation \\(\\sin\\theta\\approx\\theta\\) in physics and local linearization and error analysis in engineering."
    ],
    "intuitionDetailed": "线性化的核心是“以直代曲”。在切点处，函数值与导数值都匹配，所以直线与曲线相切；离开切点后，二阶导数控制弯曲方向，从而控制误差符号。实际估计时，先把 \\(x\\) 写成 \\(a+\\Delta x\\)，再用 \\(f(a)+f'(a)\\Delta x\\)；\\(\\Delta x\\) 越小，近似越好。更细一层：决定高估/低估的是切点附近的弯曲方向，而不是切点处的函数值或斜率大小。\\(f''>0\\)（\\(f'\\) 递增）时曲线向上弯，切线在下方，线性化偏小；\\(f''<0\\)（\\(f'\\) 递减）时曲线向下弯，切线在上方，线性化偏大。若凹凸性在切点两侧改变，切线会穿过曲线，必须分侧讨论。 · The core idea of linearization is “replace the curve by a line.” At the point of tangency the line matches both the function value and the derivative, so it is tangent to the curve; away from that point, the second derivative controls the bending and therefore the sign of the error. To estimate, write \\(x=a+\\Delta x\\) and use \\(f(a)+f'(a)\\Delta x\\); the smaller \\(\\Delta x\\) is, the better the approximation. A finer point: what decides overestimate versus underestimate is the bending direction near the point of tangency, not the function value or the size of the slope at the point. When \\(f''>0\\) (\\(f'\\) increasing), the curve bends upward, the tangent lies below, and the linearization is too small; when \\(f''<0\\) (\\(f'\\) decreasing), the curve bends downward, the tangent lies above, and the linearization is too large. If concavity changes on the two sides of the point of tangency, the tangent crosses the curve, so discuss the sides separately.",
    "development": [
      "选切点 \\(a\\)，算 \\(f(a)\\) 与 \\(f'(a)\\)。 · Choose the point of tangency \\(a\\) and compute \\(f(a)\\) and \\(f'(a)\\).",
      "写出切线或线性化 \\(L(x)\\)。 · Write the tangent line or linearization \\(L(x)\\).",
      "把目标值写成 \\(a+\\Delta x\\)，代入 \\(L\\)。 · Write the target value as \\(a+\\Delta x\\) and substitute into \\(L\\).",
      "与真实值比较，计算误差。 · Compare with the true value and compute the error.",
      "用 \\(f''\\) 或图像判断高估或低估。 · Use \\(f''\\) or the graph to decide overestimate or underestimate.",
      "在切点两侧各取一个测试点，比较 \\(L(x)\\) 与 \\(f(x)\\) 的大小，确认高估/低估。 · Pick a test point on each side of the point of tangency and compare \\(L(x)\\) with \\(f(x)\\) to confirm overestimate or underestimate.",
      "把 \\(f''\\) 的符号、\\(f'\\) 的增减、切线与曲线的上下位置对应起来，形成判断链。 · Connect the sign of \\(f''\\), the increase or decrease of \\(f'\\), and the tangent's position relative to the curve into a reasoning chain.",
      "若凹凸性在切点改变，分别写出两侧结论，避免用一个结论概括整个邻域。 · If concavity changes at the point of tangency, write separate conclusions for the two sides instead of one conclusion for the whole neighborhood.",
      "检查“局部”范围与单位，避免外推太远。 · Check the “local” range and units, and avoid extrapolating too far."
    ],
    "checks": [
      "\\(L(x)\\) 与 \\(f(x)\\) 在 \\(x=a\\) 处有什么关系？ · How are \\(L(x)\\) and \\(f(x)\\) related at \\(x=a\\)?",
      "为什么线性化只在 \\(a\\) 附近可靠？ · Why is a linearization reliable only near \\(a\\)?",
      "凹向上时切线近似是高估还是低估？ · When concave up, is a tangent-line approximation an overestimate or an underestimate?",
      "若 \\(f'\\) 在 \\(a\\) 附近递增，切线近似在 \\(a\\) 附近是高估还是低估？为什么？ · If \\(f'\\) is increasing near \\(a\\), is the tangent-line approximation near \\(a\\) an overestimate or an underestimate? Why?",
      "\\(f''(a)=0\\) 但 \\(f''\\) 在 \\(a\\) 两侧异号时，能否用一个结论概括整个邻域？ · If \\(f''(a)=0\\) but \\(f''\\) changes sign across \\(a\\), can one conclusion describe the whole neighborhood?",
      "对 \\(f(x)=x^{3}\\) 在 \\(a=0\\) 的切线，\\(L(0.1)\\) 与 \\(L(-0.1)\\) 分别是高估还是低估？ · For the tangent to \\(f(x)=x^{3}\\) at \\(a=0\\), are \\(L(0.1)\\) and \\(L(-0.1)\\) overestimates or underestimates?",
      "估计 \\(\\sqrt{4.41}\\) 时为什么选 \\(a=4\\)？ · Why choose \\(a=4\\) when estimating \\(\\sqrt{4.41}\\)?",
      "如果 \\(|x-a|\\) 变大，误差通常怎样变化？ · What usually happens to the error as \\(|x-a|\\) increases?"
    ],
    "vocabulary": [
      {
        "termZh": "局部线性",
        "termEn": "local linearity",
        "defZh": "可微函数在足够小的邻域内近似为直线。",
        "defEn": "The property that a differentiable function looks linear on a sufficiently small neighborhood."
      },
      {
        "termZh": "线性化",
        "termEn": "linearization",
        "defZh": "用切线 \\(L(x)=f(a)+f'(a)(x-a)\\) 近似函数。",
        "defEn": "Approximating a function with its tangent line \\(L(x)=f(a)+f'(a)(x-a)\\)."
      },
      {
        "termZh": "切线近似",
        "termEn": "tangent-line approximation",
        "defZh": "以切线上点的值作为函数值的近似。",
        "defEn": "Using a value on the tangent line as an approximation to the function value."
      },
      {
        "termZh": "切点",
        "termEn": "point of tangency",
        "defZh": "切线与曲线相切的点 \\((a,f(a))\\)。",
        "defEn": "The point \\((a,f(a))\\) where the tangent line touches the curve."
      },
      {
        "termZh": "微分",
        "termEn": "differential",
        "defZh": "\\(\\mathrm{d}y=f'(a)\\,\\mathrm{d}x\\)，表示线性化预测的改变量。",
        "defEn": "\\(\\mathrm{d}y=f'(a)\\,\\mathrm{d}x\\), the change predicted by linearization."
      },
      {
        "termZh": "近似误差",
        "termEn": "approximation error",
        "defZh": "近似值与真实值之差 \\(f(x)-L(x)\\)，通常随 \\(|x-a|\\) 增大而增大。",
        "defEn": "The difference \\(f(x)-L(x)\\) between the true and approximate values, usually growing with \\(|x-a|\\)."
      },
      {
        "termZh": "高估与低估",
        "termEn": "overestimate and underestimate",
        "defZh": "线性化值 \\(L(x)\\) 大于真实值 \\(f(x)\\) 为高估，小于为低估；切点附近凹向下时高估、凹向上时低估，凹凸性改变时按 \\(x\\) 所在的一侧分别判断。",
        "defEn": "The linearization overestimates when \\(L(x)>f(x)\\) and underestimates when \\(L(x)<f(x)\\); near the point of tangency, concave down gives an overestimate and concave up gives an underestimate, and a concavity change requires a side-by-side conclusion."
      },
      {
        "termZh": "凹凸性",
        "termEn": "concavity",
        "defZh": "由 \\(f''\\) 的符号决定曲线弯曲方向；切点附近凹向上时切线在下方（低估），凹向下时切线在上方（高估）。",
        "defEn": "The bending direction of the curve determined by the sign of \\(f''\\); near the point of tangency, concave up puts the tangent below (underestimate) and concave down puts it above (overestimate)."
      }
    ]
  },
  "4.7": {
    "id": "math/calc-u4/4.7",
    "subject": "math",
    "chapterId": "calc-u4",
    "unitCode": "4",
    "unitTitleZh": "导数的情境应用",
    "unitTitleEn": "Contextual Applications of Differentiation",
    "code": "4.7",
    "titleZh": "洛必达法则",
    "titleEn": "L'Hospital's Rule for Determining Limits of Indeterminate Forms",
    "layer": "ap",
    "summary": "洛必达法则 · L'Hospital's Rule for Determining Limits of Indeterminate Forms",
    "learningObjectives": [
      "能陈述「洛必达法则」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "L'Hospital's Rule for Determining Limits of Indeterminate Forms：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「洛必达法则」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "洛必达法则（L'Hospital's Rule for Determining Limits of Indeterminate Forms）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「洛必达法则」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「洛必达法则」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.7「洛必达法则」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「洛必达法则」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「洛必达法则」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「洛必达法则」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「洛必达法则」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「洛必达法则」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.6",
        "title": "局部线性近似",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「洛必达法则」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「洛必达法则」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「洛必达法则」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "洛必达法则",
        "termEn": "L'Hospital's rule",
        "defZh": "对 \\(\\dfrac{0}{0}\\) 或 \\(\\dfrac{\\infty}{\\infty}\\) 型极限，用导数之比代替函数之比。",
        "defEn": "For limits of the form \\(\\dfrac{0}{0}\\) or \\(\\dfrac{\\infty}{\\infty}\\), replace the ratio of functions by the ratio of derivatives."
      },
      {
        "termZh": "不定式",
        "termEn": "indeterminate form",
        "defZh": "\\(\\dfrac{0}{0}\\)、\\(\\dfrac{\\infty}{\\infty}\\) 等不能直接代入的极限形式。",
        "defEn": "A limit form such as \\(\\dfrac{0}{0}\\) or \\(\\dfrac{\\infty}{\\infty}\\) that cannot be evaluated by direct substitution."
      },
      {
        "termZh": "导数之比",
        "termEn": "ratio of derivatives",
        "defZh": "\\(\\lim\\dfrac{f'(x)}{g'(x)}\\)，是洛必达法则的核心。",
        "defEn": "The limit \\(\\lim\\dfrac{f'(x)}{g'(x)}\\), the core of L'Hospital's rule."
      },
      {
        "termZh": "适用条件",
        "termEn": "hypotheses",
        "defZh": "分子分母在去心邻域可导，且 \\(g'(x)\\ne 0\\)。",
        "defEn": "Both functions are differentiable near the point and \\(g'(x)\\ne 0\\)."
      },
      {
        "termZh": "转化",
        "termEn": "rewriting",
        "defZh": "把 \\(0\\cdot\\infty\\) 或 \\(\\infty-\\infty\\) 型改写成商式后再用洛必达。",
        "defEn": "Rewriting \\(0\\cdot\\infty\\) or \\(\\infty-\\infty\\) forms as quotients before applying the rule."
      },
      {
        "termZh": "指数型不定式",
        "termEn": "exponential indeterminate form",
        "defZh": "\\(1^{\\infty}\\)、\\(0^{0}\\)、\\(\\infty^{0}\\) 型，先取对数再求极限。",
        "defEn": "Forms such as \\(1^{\\infty}\\), \\(0^{0}\\), and \\(\\infty^{0}\\); take a logarithm before evaluating the limit."
      }
    ]
  }
};
