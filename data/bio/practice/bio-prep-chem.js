/** Practice bank for bio-prep-chem */
export const UNIT_REF = {
  "id": "bio-prep-chem",
  "code": "P1",
  "titleZh": "高中化学基础 · high-school chemistry foundations",
  "titleEn": "High School Chemistry Foundations",
  "layer": "prep",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-prep-chem-1": {
    "title": "科学测量与有效数字 · 刺激材料 · Measurement and Significant Figures: stimulus",
    "text": "下列数据与图示与「科学测量与有效数字」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Measurement and Significant Figures”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "enzyme"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original.",
    "table": {
      "headers": [
        "[S] / mM",
        "v / μM·s⁻¹"
      ],
      "rows": [
        [
          "0.5",
          "12"
        ],
        [
          "1.0",
          "20"
        ],
        [
          "2.0",
          "30"
        ],
        [
          "4.0",
          "36"
        ],
        [
          "8.0",
          "39"
        ]
      ]
    },
    "graph": {
      "points": [
        [
          0.5,
          12
        ],
        [
          1,
          20
        ],
        [
          2,
          30
        ],
        [
          4,
          36
        ],
        [
          8,
          39
        ]
      ],
      "xLabel": "[S]",
      "yLabel": "v"
    }
  },
  "stim-bio-prep-chem-2": {
    "title": "原子结构与同位素 · 刺激材料 · Atomic Structure and Isotopes: stimulus",
    "text": "下列数据与图示与「原子结构与同位素」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Atomic Structure and Isotopes”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "pathway"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-prep-chem-3": {
    "title": "元素周期表 · 刺激材料 · Periodic Table: stimulus",
    "text": "下列数据与图示与「元素周期表」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Periodic Table”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "gel"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  }
};
export const problems = [
  {
    "kind": "set",
    "id": "bio-prep-chem-set1",
    "title": "题组 1 · 共享刺激 · Set 1, shared stimulus",
    "sharedStimulus": "stim-bio-prep-chem-1",
    "stimulus": {
      "title": "科学测量与有效数字 · 刺激材料 · Measurement and Significant Figures: stimulus",
      "text": "下列数据与图示与「科学测量与有效数字」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Measurement and Significant Figures”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "enzyme"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original.",
      "table": {
        "headers": [
          "[S] / mM",
          "v / μM·s⁻¹"
        ],
        "rows": [
          [
            "0.5",
            "12"
          ],
          [
            "1.0",
            "20"
          ],
          [
            "2.0",
            "30"
          ],
          [
            "4.0",
            "36"
          ],
          [
            "8.0",
            "39"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0.5,
            12
          ],
          [
            1,
            20
          ],
          [
            2,
            30
          ],
          [
            4,
            36
          ],
          [
            8,
            39
          ]
        ],
        "xLabel": "[S]",
        "yLabel": "v"
      }
    },
    "questions": [
      {
        "id": "bio-prep-chem-q001",
        "title": "科学测量与有效数字 (1) · Measurement and Significant Figures (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「科学测量与有效数字」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Measurement and Significant Figures”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.1",
            "label": "P1.1 科学测量与有效数字 · P1.1 Measurement and Significant Figures",
            "topicId": "bio-prep-chem:P1.1"
          }
        ]
      },
      {
        "id": "bio-prep-chem-q002",
        "title": "原子结构与同位素 (2) · Atomic Structure and Isotopes (2)",
        "difficulty": "中 · Medium",
        "type": "mcq",
        "stem": "若增加一个合理对照，最应控制的变量是？ · If you add a reasonable control, which variable should be held fixed?",
        "choices": [
          {
            "text": "仅改变自变量，其余条件恒定 · Change only the independent variable and keep every other condition fixed",
            "correct": true
          },
          {
            "text": "同时改变多个条件以加快实验 · Change several conditions at once to finish the experiment faster",
            "correct": false
          },
          {
            "text": "去掉所有重复试验 · Drop every replicate",
            "correct": false
          },
          {
            "text": "只记录定性描述 · Record only a qualitative description",
            "correct": false
          }
        ],
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.2",
            "label": "P1.2 原子结构与同位素 · P1.2 Atomic Structure and Isotopes",
            "topicId": "bio-prep-chem:P1.2"
          }
        ]
      },
      {
        "id": "bio-prep-chem-q003",
        "title": "元素周期表 (3) · Periodic Table (3)",
        "difficulty": "难 · Hard",
        "type": "frq",
        "stem": "设计一步可检验的后续实验（自变量、因变量、对照）。 · Design one testable follow-up experiment (independent variable, dependent variable, and control).",
        "answer": "明确单一自变量；设阴性/阳性对照；重复。 · Name a single independent variable, include negative and positive controls, and replicate.",
        "solution": "实验设计题评分点：变量、对照、可重复。 · Scoring points for an experimental-design item: variables, controls, and replication.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.3",
            "label": "P1.3 元素周期表 · P1.3 Periodic Table",
            "topicId": "bio-prep-chem:P1.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-prep-chem-set2",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-bio-prep-chem-2",
    "stimulus": {
      "title": "原子结构与同位素 · 刺激材料 · Atomic Structure and Isotopes: stimulus",
      "text": "下列数据与图示与「原子结构与同位素」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Atomic Structure and Isotopes”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "pathway"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-prep-chem-q004",
        "title": "科学测量与有效数字 (1) · Measurement and Significant Figures (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「科学测量与有效数字」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Measurement and Significant Figures”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.4",
            "label": "P1.4 离子键与共价键 · P1.4 Ionic and Covalent Bonding",
            "topicId": "bio-prep-chem:P1.4"
          }
        ]
      },
      {
        "id": "bio-prep-chem-q005",
        "title": "原子结构与同位素 (2) · Atomic Structure and Isotopes (2)",
        "difficulty": "中 · Medium",
        "type": "mcq",
        "stem": "若增加一个合理对照，最应控制的变量是？ · If you add a reasonable control, which variable should be held fixed?",
        "choices": [
          {
            "text": "仅改变自变量，其余条件恒定 · Change only the independent variable and keep every other condition fixed",
            "correct": true
          },
          {
            "text": "同时改变多个条件以加快实验 · Change several conditions at once to finish the experiment faster",
            "correct": false
          },
          {
            "text": "去掉所有重复试验 · Drop every replicate",
            "correct": false
          },
          {
            "text": "只记录定性描述 · Record only a qualitative description",
            "correct": false
          }
        ],
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.5",
            "label": "P1.5 分子几何与极性 · P1.5 Molecular Geometry and Polarity",
            "topicId": "bio-prep-chem:P1.5"
          }
        ]
      },
      {
        "id": "bio-prep-chem-q006",
        "title": "元素周期表 (3) · Periodic Table (3)",
        "difficulty": "难 · Hard",
        "type": "frq",
        "stem": "设计一步可检验的后续实验（自变量、因变量、对照）。 · Design one testable follow-up experiment (independent variable, dependent variable, and control).",
        "answer": "明确单一自变量；设阴性/阳性对照；重复。 · Name a single independent variable, include negative and positive controls, and replicate.",
        "solution": "实验设计题评分点：变量、对照、可重复。 · Scoring points for an experimental-design item: variables, controls, and replication.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.6",
            "label": "P1.6 化学反应与计量 · P1.6 Chemical Reactions and Stoichiometry",
            "topicId": "bio-prep-chem:P1.6"
          }
        ]
      },
      {
        "id": "bio-prep-chem-q007",
        "title": "离子键与共价键 (4) · Ionic and Covalent Bonding (4)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "若结果与预期不符，提出一种混淆因素并说明如何排除。 · If the result disagrees with the prediction, name one confound and explain how to rule it out.",
        "answer": "例如温度波动、样品降解等；用缓冲/恒温/重复排除。 · For example temperature drift or sample degradation; rule them out with a buffer, a constant temperature, or replication.",
        "solution": "科学实践：识别局限。 · Science practice: identify a limitation.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.7",
            "label": "P1.7 溶液与浓度 · P1.7 Solutions and Concentration",
            "topicId": "bio-prep-chem:P1.7"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-prep-chem-set3",
    "title": "题组 3 · 共享刺激 · Set 3, shared stimulus",
    "sharedStimulus": "stim-bio-prep-chem-3",
    "stimulus": {
      "title": "元素周期表 · 刺激材料 · Periodic Table: stimulus",
      "text": "下列数据与图示与「元素周期表」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Periodic Table”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "gel"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-prep-chem-q008",
        "title": "科学测量与有效数字 (1) · Measurement and Significant Figures (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「科学测量与有效数字」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Measurement and Significant Figures”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.8",
            "label": "P1.8 酸碱与 pH · P1.8 Acids, Bases, and pH",
            "topicId": "bio-prep-chem:P1.8"
          }
        ]
      },
      {
        "id": "bio-prep-chem-q009",
        "title": "原子结构与同位素 (2) · Atomic Structure and Isotopes (2)",
        "difficulty": "中 · Medium",
        "type": "mcq",
        "stem": "若增加一个合理对照，最应控制的变量是？ · If you add a reasonable control, which variable should be held fixed?",
        "choices": [
          {
            "text": "仅改变自变量，其余条件恒定 · Change only the independent variable and keep every other condition fixed",
            "correct": true
          },
          {
            "text": "同时改变多个条件以加快实验 · Change several conditions at once to finish the experiment faster",
            "correct": false
          },
          {
            "text": "去掉所有重复试验 · Drop every replicate",
            "correct": false
          },
          {
            "text": "只记录定性描述 · Record only a qualitative description",
            "correct": false
          }
        ],
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.9",
            "label": "P1.9 水与氢键 · P1.9 Water and Hydrogen Bonding",
            "topicId": "bio-prep-chem:P1.9"
          }
        ]
      },
      {
        "id": "bio-prep-chem-q010",
        "title": "元素周期表 (3) · Periodic Table (3)",
        "difficulty": "难 · Hard",
        "type": "frq",
        "stem": "设计一步可检验的后续实验（自变量、因变量、对照）。 · Design one testable follow-up experiment (independent variable, dependent variable, and control).",
        "answer": "明确单一自变量；设阴性/阳性对照；重复。 · Name a single independent variable, include negative and positive controls, and replicate.",
        "solution": "实验设计题评分点：变量、对照、可重复。 · Scoring points for an experimental-design item: variables, controls, and replication.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-chem/P1.10",
            "label": "P1.10 有机官能团入门 · P1.10 Intro Organic Functional Groups",
            "topicId": "bio-prep-chem:P1.10"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-prep-chem-q011",
    "title": "P1.1 数据刺激 · P1.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "科学测量与有效数字 实验数据 · Measurement and Significant Figures experimental data",
      "text": "研究小组记录与「科学测量与有效数字」相关的测量。 · A research group records measurements related to “Measurement and Significant Figures”.",
      "table": {
        "headers": [
          "条件 · condition",
          "相对响应 · relative response"
        ],
        "rows": [
          [
            "对照 · control",
            "1.0"
          ],
          [
            "处理 A · Treatment A",
            "1.6"
          ],
          [
            "处理 B · Treatment B",
            "0.7"
          ],
          [
            "处理 A+B · Treatments A and B",
            "1.1"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            1
          ],
          [
            1,
            1.6
          ],
          [
            2,
            0.7
          ],
          [
            3,
            1.1
          ]
        ]
      },
      "diagram": {
        "kind": "enzyme"
      }
    },
    "parts": [
      {
        "stem": "描述模式并给出机制假说。 · Describe the pattern and give a mechanistic hypothesis.",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。 · Compare the relative responses and connect them to a molecular or cellular mechanism.",
        "solution": "主张—证据—推理。 · Claim, evidence, reasoning."
      },
      {
        "stem": "提出可区分假说的额外测量。 · Propose an extra measurement that can distinguish the hypotheses.",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。 · For example, an intermediate concentration, an inhibitor, or a knockout control.",
        "solution": "实验设计。 · Experimental design."
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.11",
        "label": "P1.11 热力学与反应热入门 · P1.11 Intro Thermochemistry",
        "topicId": "bio-prep-chem:P1.11"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q012",
    "title": "P1.2 图示 MCQ · P1.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「原子结构与同位素」最直接相关的正确陈述是？ · Which statement is most directly about “Atomic Structure and Isotopes”?",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制 · The structure or relationship in the figure supports the core mechanism of this topic",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息 · The figure is unrelated to gene expression and gives no information",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率 · Natural selection never changes allele frequencies",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定 · Every trait is completely determined by a single gene",
        "correct": false
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.12",
        "label": "P1.12 反应速率与平衡入门 · P1.12 Intro Kinetics and Equilibrium",
        "topicId": "bio-prep-chem:P1.12"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q013",
    "title": "P1.3 论证 · P1.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「元素周期表」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Periodic Table”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.1",
        "label": "P1.1 科学测量与有效数字 · P1.1 Measurement and Significant Figures",
        "topicId": "bio-prep-chem:P1.1"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q014",
    "title": "P1.4 论证 · P1.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「离子键与共价键」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Ionic and Covalent Bonding”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.2",
        "label": "P1.2 原子结构与同位素 · P1.2 Atomic Structure and Isotopes",
        "topicId": "bio-prep-chem:P1.2"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q015",
    "title": "P1.5 论证 · P1.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「分子几何与极性」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Molecular Geometry and Polarity”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.3",
        "label": "P1.3 元素周期表 · P1.3 Periodic Table",
        "topicId": "bio-prep-chem:P1.3"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q016",
    "title": "P1.6 论证 · P1.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「化学反应与计量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chemical Reactions and Stoichiometry”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.4",
        "label": "P1.4 离子键与共价键 · P1.4 Ionic and Covalent Bonding",
        "topicId": "bio-prep-chem:P1.4"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q017",
    "title": "P1.7 数据刺激 · P1.7 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "溶液与浓度 实验数据 · Solutions and Concentration experimental data",
      "text": "研究小组记录与「溶液与浓度」相关的测量。 · A research group records measurements related to “Solutions and Concentration”.",
      "table": {
        "headers": [
          "条件 · condition",
          "相对响应 · relative response"
        ],
        "rows": [
          [
            "对照 · control",
            "1.0"
          ],
          [
            "处理 A · Treatment A",
            "1.6"
          ],
          [
            "处理 B · Treatment B",
            "0.7"
          ],
          [
            "处理 A+B · Treatments A and B",
            "1.1"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            1
          ],
          [
            1,
            1.6
          ],
          [
            2,
            0.7
          ],
          [
            3,
            1.1
          ]
        ]
      },
      "diagram": {
        "kind": "cell"
      }
    },
    "parts": [
      {
        "stem": "描述模式并给出机制假说。 · Describe the pattern and give a mechanistic hypothesis.",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。 · Compare the relative responses and connect them to a molecular or cellular mechanism.",
        "solution": "主张—证据—推理。 · Claim, evidence, reasoning."
      },
      {
        "stem": "提出可区分假说的额外测量。 · Propose an extra measurement that can distinguish the hypotheses.",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。 · For example, an intermediate concentration, an inhibitor, or a knockout control.",
        "solution": "实验设计。 · Experimental design."
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.5",
        "label": "P1.5 分子几何与极性 · P1.5 Molecular Geometry and Polarity",
        "topicId": "bio-prep-chem:P1.5"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q018",
    "title": "P1.8 图示 MCQ · P1.8 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「酸碱与 pH」最直接相关的正确陈述是？ · Which statement is most directly about “Acids, Bases, and pH”?",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制 · The structure or relationship in the figure supports the core mechanism of this topic",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息 · The figure is unrelated to gene expression and gives no information",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率 · Natural selection never changes allele frequencies",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定 · Every trait is completely determined by a single gene",
        "correct": false
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.6",
        "label": "P1.6 化学反应与计量 · P1.6 Chemical Reactions and Stoichiometry",
        "topicId": "bio-prep-chem:P1.6"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q019",
    "title": "P1.9 论证 · P1.9 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「水与氢键」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Water and Hydrogen Bonding”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.7",
        "label": "P1.7 溶液与浓度 · P1.7 Solutions and Concentration",
        "topicId": "bio-prep-chem:P1.7"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q020",
    "title": "P1.10 论证 · P1.10 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「有机官能团入门」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Intro Organic Functional Groups”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.8",
        "label": "P1.8 酸碱与 pH · P1.8 Acids, Bases, and pH",
        "topicId": "bio-prep-chem:P1.8"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q021",
    "title": "P1.11 论证 · P1.11 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「热力学与反应热入门」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Intro Thermochemistry”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.9",
        "label": "P1.9 水与氢键 · P1.9 Water and Hydrogen Bonding",
        "topicId": "bio-prep-chem:P1.9"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q022",
    "title": "P1.12 论证 · P1.12 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「反应速率与平衡入门」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Intro Kinetics and Equilibrium”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.10",
        "label": "P1.10 有机官能团入门 · P1.10 Intro Organic Functional Groups",
        "topicId": "bio-prep-chem:P1.10"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q023",
    "title": "P1.1 数据刺激 · P1.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "科学测量与有效数字 实验数据 · Measurement and Significant Figures experimental data",
      "text": "研究小组记录与「科学测量与有效数字」相关的测量。 · A research group records measurements related to “Measurement and Significant Figures”.",
      "table": {
        "headers": [
          "条件 · condition",
          "相对响应 · relative response"
        ],
        "rows": [
          [
            "对照 · control",
            "1.0"
          ],
          [
            "处理 A · Treatment A",
            "1.6"
          ],
          [
            "处理 B · Treatment B",
            "0.7"
          ],
          [
            "处理 A+B · Treatments A and B",
            "1.1"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            1
          ],
          [
            1,
            1.6
          ],
          [
            2,
            0.7
          ],
          [
            3,
            1.1
          ]
        ]
      },
      "diagram": {
        "kind": "enzyme"
      }
    },
    "parts": [
      {
        "stem": "描述模式并给出机制假说。 · Describe the pattern and give a mechanistic hypothesis.",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。 · Compare the relative responses and connect them to a molecular or cellular mechanism.",
        "solution": "主张—证据—推理。 · Claim, evidence, reasoning."
      },
      {
        "stem": "提出可区分假说的额外测量。 · Propose an extra measurement that can distinguish the hypotheses.",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。 · For example, an intermediate concentration, an inhibitor, or a knockout control.",
        "solution": "实验设计。 · Experimental design."
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.11",
        "label": "P1.11 热力学与反应热入门 · P1.11 Intro Thermochemistry",
        "topicId": "bio-prep-chem:P1.11"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q024",
    "title": "P1.2 图示 MCQ · P1.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「原子结构与同位素」最直接相关的正确陈述是？ · Which statement is most directly about “Atomic Structure and Isotopes”?",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制 · The structure or relationship in the figure supports the core mechanism of this topic",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息 · The figure is unrelated to gene expression and gives no information",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率 · Natural selection never changes allele frequencies",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定 · Every trait is completely determined by a single gene",
        "correct": false
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.12",
        "label": "P1.12 反应速率与平衡入门 · P1.12 Intro Kinetics and Equilibrium",
        "topicId": "bio-prep-chem:P1.12"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q025",
    "title": "P1.3 论证 · P1.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「元素周期表」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Periodic Table”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.1",
        "label": "P1.1 科学测量与有效数字 · P1.1 Measurement and Significant Figures",
        "topicId": "bio-prep-chem:P1.1"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q026",
    "title": "P1.4 论证 · P1.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「离子键与共价键」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Ionic and Covalent Bonding”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.2",
        "label": "P1.2 原子结构与同位素 · P1.2 Atomic Structure and Isotopes",
        "topicId": "bio-prep-chem:P1.2"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q027",
    "title": "P1.5 论证 · P1.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「分子几何与极性」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Molecular Geometry and Polarity”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.3",
        "label": "P1.3 元素周期表 · P1.3 Periodic Table",
        "topicId": "bio-prep-chem:P1.3"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q028",
    "title": "P1.6 论证 · P1.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「化学反应与计量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chemical Reactions and Stoichiometry”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.4",
        "label": "P1.4 离子键与共价键 · P1.4 Ionic and Covalent Bonding",
        "topicId": "bio-prep-chem:P1.4"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q029",
    "title": "P1.7 数据刺激 · P1.7 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "溶液与浓度 实验数据 · Solutions and Concentration experimental data",
      "text": "研究小组记录与「溶液与浓度」相关的测量。 · A research group records measurements related to “Solutions and Concentration”.",
      "table": {
        "headers": [
          "条件 · condition",
          "相对响应 · relative response"
        ],
        "rows": [
          [
            "对照 · control",
            "1.0"
          ],
          [
            "处理 A · Treatment A",
            "1.6"
          ],
          [
            "处理 B · Treatment B",
            "0.7"
          ],
          [
            "处理 A+B · Treatments A and B",
            "1.1"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            1
          ],
          [
            1,
            1.6
          ],
          [
            2,
            0.7
          ],
          [
            3,
            1.1
          ]
        ]
      },
      "diagram": {
        "kind": "cell"
      }
    },
    "parts": [
      {
        "stem": "描述模式并给出机制假说。 · Describe the pattern and give a mechanistic hypothesis.",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。 · Compare the relative responses and connect them to a molecular or cellular mechanism.",
        "solution": "主张—证据—推理。 · Claim, evidence, reasoning."
      },
      {
        "stem": "提出可区分假说的额外测量。 · Propose an extra measurement that can distinguish the hypotheses.",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。 · For example, an intermediate concentration, an inhibitor, or a knockout control.",
        "solution": "实验设计。 · Experimental design."
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.5",
        "label": "P1.5 分子几何与极性 · P1.5 Molecular Geometry and Polarity",
        "topicId": "bio-prep-chem:P1.5"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q030",
    "title": "P1.8 图示 MCQ · P1.8 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「酸碱与 pH」最直接相关的正确陈述是？ · Which statement is most directly about “Acids, Bases, and pH”?",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制 · The structure or relationship in the figure supports the core mechanism of this topic",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息 · The figure is unrelated to gene expression and gives no information",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率 · Natural selection never changes allele frequencies",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定 · Every trait is completely determined by a single gene",
        "correct": false
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.6",
        "label": "P1.6 化学反应与计量 · P1.6 Chemical Reactions and Stoichiometry",
        "topicId": "bio-prep-chem:P1.6"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q031",
    "title": "P1.9 论证 · P1.9 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「水与氢键」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Water and Hydrogen Bonding”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.7",
        "label": "P1.7 溶液与浓度 · P1.7 Solutions and Concentration",
        "topicId": "bio-prep-chem:P1.7"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q032",
    "title": "P1.10 论证 · P1.10 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「有机官能团入门」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Intro Organic Functional Groups”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.8",
        "label": "P1.8 酸碱与 pH · P1.8 Acids, Bases, and pH",
        "topicId": "bio-prep-chem:P1.8"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q033",
    "title": "P1.11 论证 · P1.11 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「热力学与反应热入门」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Intro Thermochemistry”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.9",
        "label": "P1.9 水与氢键 · P1.9 Water and Hydrogen Bonding",
        "topicId": "bio-prep-chem:P1.9"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q034",
    "title": "P1.12 论证 · P1.12 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「反应速率与平衡入门」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Intro Kinetics and Equilibrium”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.10",
        "label": "P1.10 有机官能团入门 · P1.10 Intro Organic Functional Groups",
        "topicId": "bio-prep-chem:P1.10"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q035",
    "title": "P1.1 数据刺激 · P1.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "科学测量与有效数字 实验数据 · Measurement and Significant Figures experimental data",
      "text": "研究小组记录与「科学测量与有效数字」相关的测量。 · A research group records measurements related to “Measurement and Significant Figures”.",
      "table": {
        "headers": [
          "条件 · condition",
          "相对响应 · relative response"
        ],
        "rows": [
          [
            "对照 · control",
            "1.0"
          ],
          [
            "处理 A · Treatment A",
            "1.6"
          ],
          [
            "处理 B · Treatment B",
            "0.7"
          ],
          [
            "处理 A+B · Treatments A and B",
            "1.1"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            1
          ],
          [
            1,
            1.6
          ],
          [
            2,
            0.7
          ],
          [
            3,
            1.1
          ]
        ]
      },
      "diagram": {
        "kind": "enzyme"
      }
    },
    "parts": [
      {
        "stem": "描述模式并给出机制假说。 · Describe the pattern and give a mechanistic hypothesis.",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。 · Compare the relative responses and connect them to a molecular or cellular mechanism.",
        "solution": "主张—证据—推理。 · Claim, evidence, reasoning."
      },
      {
        "stem": "提出可区分假说的额外测量。 · Propose an extra measurement that can distinguish the hypotheses.",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。 · For example, an intermediate concentration, an inhibitor, or a knockout control.",
        "solution": "实验设计。 · Experimental design."
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.11",
        "label": "P1.11 热力学与反应热入门 · P1.11 Intro Thermochemistry",
        "topicId": "bio-prep-chem:P1.11"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q036",
    "title": "P1.2 图示 MCQ · P1.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「原子结构与同位素」最直接相关的正确陈述是？ · Which statement is most directly about “Atomic Structure and Isotopes”?",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制 · The structure or relationship in the figure supports the core mechanism of this topic",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息 · The figure is unrelated to gene expression and gives no information",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率 · Natural selection never changes allele frequencies",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定 · Every trait is completely determined by a single gene",
        "correct": false
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.12",
        "label": "P1.12 反应速率与平衡入门 · P1.12 Intro Kinetics and Equilibrium",
        "topicId": "bio-prep-chem:P1.12"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q037",
    "title": "P1.3 论证 · P1.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「元素周期表」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Periodic Table”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.1",
        "label": "P1.1 科学测量与有效数字 · P1.1 Measurement and Significant Figures",
        "topicId": "bio-prep-chem:P1.1"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q038",
    "title": "P1.4 论证 · P1.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「离子键与共价键」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Ionic and Covalent Bonding”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.2",
        "label": "P1.2 原子结构与同位素 · P1.2 Atomic Structure and Isotopes",
        "topicId": "bio-prep-chem:P1.2"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q039",
    "title": "P1.5 论证 · P1.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「分子几何与极性」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Molecular Geometry and Polarity”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.3",
        "label": "P1.3 元素周期表 · P1.3 Periodic Table",
        "topicId": "bio-prep-chem:P1.3"
      }
    ]
  },
  {
    "id": "bio-prep-chem-q040",
    "title": "P1.6 论证 · P1.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「化学反应与计量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chemical Reactions and Stoichiometry”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-chem/P1.4",
        "label": "P1.4 离子键与共价键 · P1.4 Ionic and Covalent Bonding",
        "topicId": "bio-prep-chem:P1.4"
      }
    ]
  }
];
