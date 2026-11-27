/** Practice bank for bio-u3 */
export const UNIT_REF = {
  "id": "bio-u3",
  "code": "3",
  "titleZh": "细胞能量学 · cellular energetics",
  "titleEn": "Cellular Energetics",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u3-1": {
    "title": "酶催化 · 刺激材料 · Enzyme Catalysis: stimulus",
    "text": "下列数据与图示与「酶催化」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Enzyme Catalysis”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
  "stim-bio-u3-2": {
    "title": "环境影响酶 · 刺激材料 · Environmental Impacts on Enzyme Function: stimulus",
    "text": "下列数据与图示与「环境影响酶」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Environmental Impacts on Enzyme Function”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "pathway"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u3-3": {
    "title": "细胞能量 · 刺激材料 · Cellular Energy: stimulus",
    "text": "下列数据与图示与「细胞能量」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Cellular Energy”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "cell"
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
    "id": "bio-u3-set1",
    "title": "题组 1 · 共享刺激 · Set 1, shared stimulus",
    "sharedStimulus": "stim-bio-u3-1",
    "stimulus": {
      "title": "酶催化 · 刺激材料 · Enzyme Catalysis: stimulus",
      "text": "下列数据与图示与「酶催化」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Enzyme Catalysis”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
        "id": "bio-u3-q001",
        "title": "酶催化 (1) · Enzyme Catalysis (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「酶催化」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Enzyme Catalysis”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u3/3.1",
            "label": "3.1 酶催化 · 3.1 Enzyme Catalysis",
            "topicId": "bio-u3:3.1"
          }
        ]
      },
      {
        "id": "bio-u3-q002",
        "title": "环境影响酶 (2) · Environmental Impacts on Enzyme Function (2)",
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
            "href": "#/t/bio/bio-u3/3.2",
            "label": "3.2 环境影响酶 · 3.2 Environmental Impacts on Enzyme Function",
            "topicId": "bio-u3:3.2"
          }
        ]
      },
      {
        "id": "bio-u3-q003",
        "title": "细胞能量 (3) · Cellular Energy (3)",
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
            "href": "#/t/bio/bio-u3/3.3",
            "label": "3.3 细胞能量 · 3.3 Cellular Energy",
            "topicId": "bio-u3:3.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u3-set2",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-bio-u3-2",
    "stimulus": {
      "title": "环境影响酶 · 刺激材料 · Environmental Impacts on Enzyme Function: stimulus",
      "text": "下列数据与图示与「环境影响酶」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Environmental Impacts on Enzyme Function”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
        "id": "bio-u3-q004",
        "title": "酶催化 (1) · Enzyme Catalysis (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「酶催化」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Enzyme Catalysis”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u3/3.4",
            "label": "3.4 光合作用 · 3.4 Photosynthesis",
            "topicId": "bio-u3:3.4"
          }
        ]
      },
      {
        "id": "bio-u3-q005",
        "title": "环境影响酶 (2) · Environmental Impacts on Enzyme Function (2)",
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
            "href": "#/t/bio/bio-u3/3.5",
            "label": "3.5 细胞呼吸 · 3.5 Cellular Respiration",
            "topicId": "bio-u3:3.5"
          }
        ]
      },
      {
        "id": "bio-u3-q006",
        "title": "细胞能量 (3) · Cellular Energy (3)",
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
            "href": "#/t/bio/bio-u3/3.6",
            "label": "3.6 适应与能量 · 3.6 Fitness",
            "topicId": "bio-u3:3.6"
          }
        ]
      },
      {
        "id": "bio-u3-q007",
        "title": "光合作用 (4) · Photosynthesis (4)",
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
            "href": "#/t/bio/bio-u3/3.1",
            "label": "3.1 酶催化 · 3.1 Enzyme Catalysis",
            "topicId": "bio-u3:3.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u3-set3",
    "title": "题组 3 · 共享刺激 · Set 3, shared stimulus",
    "sharedStimulus": "stim-bio-u3-3",
    "stimulus": {
      "title": "细胞能量 · 刺激材料 · Cellular Energy: stimulus",
      "text": "下列数据与图示与「细胞能量」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Cellular Energy”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "cell"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-u3-q008",
        "title": "酶催化 (1) · Enzyme Catalysis (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「酶催化」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Enzyme Catalysis”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u3/3.2",
            "label": "3.2 环境影响酶 · 3.2 Environmental Impacts on Enzyme Function",
            "topicId": "bio-u3:3.2"
          }
        ]
      },
      {
        "id": "bio-u3-q009",
        "title": "环境影响酶 (2) · Environmental Impacts on Enzyme Function (2)",
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
            "href": "#/t/bio/bio-u3/3.3",
            "label": "3.3 细胞能量 · 3.3 Cellular Energy",
            "topicId": "bio-u3:3.3"
          }
        ]
      },
      {
        "id": "bio-u3-q010",
        "title": "细胞能量 (3) · Cellular Energy (3)",
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
            "href": "#/t/bio/bio-u3/3.4",
            "label": "3.4 光合作用 · 3.4 Photosynthesis",
            "topicId": "bio-u3:3.4"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u3-q011",
    "title": "3.1 数据刺激 · 3.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "酶催化 实验数据 · Enzyme Catalysis experimental data",
      "text": "研究小组记录与「酶催化」相关的测量。 · A research group records measurements related to “Enzyme Catalysis”.",
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
        "href": "#/t/bio/bio-u3/3.5",
        "label": "3.5 细胞呼吸 · 3.5 Cellular Respiration",
        "topicId": "bio-u3:3.5"
      }
    ]
  },
  {
    "id": "bio-u3-q012",
    "title": "3.2 图示 MCQ · 3.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「环境影响酶」最直接相关的正确陈述是？ · Which statement is most directly about “Environmental Impacts on Enzyme Function”?",
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
        "href": "#/t/bio/bio-u3/3.6",
        "label": "3.6 适应与能量 · 3.6 Fitness",
        "topicId": "bio-u3:3.6"
      }
    ]
  },
  {
    "id": "bio-u3-q013",
    "title": "3.3 论证 · 3.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「细胞能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Energy”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.1",
        "label": "3.1 酶催化 · 3.1 Enzyme Catalysis",
        "topicId": "bio-u3:3.1"
      }
    ]
  },
  {
    "id": "bio-u3-q014",
    "title": "3.4 论证 · 3.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「光合作用」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Photosynthesis”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.2",
        "label": "3.2 环境影响酶 · 3.2 Environmental Impacts on Enzyme Function",
        "topicId": "bio-u3:3.2"
      }
    ]
  },
  {
    "id": "bio-u3-q015",
    "title": "3.5 论证 · 3.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「细胞呼吸」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Respiration”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.3",
        "label": "3.3 细胞能量 · 3.3 Cellular Energy",
        "topicId": "bio-u3:3.3"
      }
    ]
  },
  {
    "id": "bio-u3-q016",
    "title": "3.6 论证 · 3.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「适应与能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Fitness”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.4",
        "label": "3.4 光合作用 · 3.4 Photosynthesis",
        "topicId": "bio-u3:3.4"
      }
    ]
  },
  {
    "id": "bio-u3-q017",
    "title": "3.1 数据刺激 · 3.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "酶催化 实验数据 · Enzyme Catalysis experimental data",
      "text": "研究小组记录与「酶催化」相关的测量。 · A research group records measurements related to “Enzyme Catalysis”.",
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
        "href": "#/t/bio/bio-u3/3.5",
        "label": "3.5 细胞呼吸 · 3.5 Cellular Respiration",
        "topicId": "bio-u3:3.5"
      }
    ]
  },
  {
    "id": "bio-u3-q018",
    "title": "3.2 图示 MCQ · 3.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「环境影响酶」最直接相关的正确陈述是？ · Which statement is most directly about “Environmental Impacts on Enzyme Function”?",
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
        "href": "#/t/bio/bio-u3/3.6",
        "label": "3.6 适应与能量 · 3.6 Fitness",
        "topicId": "bio-u3:3.6"
      }
    ]
  },
  {
    "id": "bio-u3-q019",
    "title": "3.3 论证 · 3.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「细胞能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Energy”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.1",
        "label": "3.1 酶催化 · 3.1 Enzyme Catalysis",
        "topicId": "bio-u3:3.1"
      }
    ]
  },
  {
    "id": "bio-u3-q020",
    "title": "3.4 论证 · 3.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「光合作用」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Photosynthesis”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.2",
        "label": "3.2 环境影响酶 · 3.2 Environmental Impacts on Enzyme Function",
        "topicId": "bio-u3:3.2"
      }
    ]
  },
  {
    "id": "bio-u3-q021",
    "title": "3.5 论证 · 3.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「细胞呼吸」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Respiration”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.3",
        "label": "3.3 细胞能量 · 3.3 Cellular Energy",
        "topicId": "bio-u3:3.3"
      }
    ]
  },
  {
    "id": "bio-u3-q022",
    "title": "3.6 论证 · 3.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「适应与能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Fitness”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.4",
        "label": "3.4 光合作用 · 3.4 Photosynthesis",
        "topicId": "bio-u3:3.4"
      }
    ]
  },
  {
    "id": "bio-u3-q023",
    "title": "3.1 数据刺激 · 3.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "酶催化 实验数据 · Enzyme Catalysis experimental data",
      "text": "研究小组记录与「酶催化」相关的测量。 · A research group records measurements related to “Enzyme Catalysis”.",
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
        "href": "#/t/bio/bio-u3/3.5",
        "label": "3.5 细胞呼吸 · 3.5 Cellular Respiration",
        "topicId": "bio-u3:3.5"
      }
    ]
  },
  {
    "id": "bio-u3-q024",
    "title": "3.2 图示 MCQ · 3.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「环境影响酶」最直接相关的正确陈述是？ · Which statement is most directly about “Environmental Impacts on Enzyme Function”?",
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
        "href": "#/t/bio/bio-u3/3.6",
        "label": "3.6 适应与能量 · 3.6 Fitness",
        "topicId": "bio-u3:3.6"
      }
    ]
  },
  {
    "id": "bio-u3-q025",
    "title": "3.3 论证 · 3.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「细胞能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Energy”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.1",
        "label": "3.1 酶催化 · 3.1 Enzyme Catalysis",
        "topicId": "bio-u3:3.1"
      }
    ]
  },
  {
    "id": "bio-u3-q026",
    "title": "3.4 论证 · 3.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「光合作用」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Photosynthesis”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.2",
        "label": "3.2 环境影响酶 · 3.2 Environmental Impacts on Enzyme Function",
        "topicId": "bio-u3:3.2"
      }
    ]
  },
  {
    "id": "bio-u3-q027",
    "title": "3.5 论证 · 3.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「细胞呼吸」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Respiration”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.3",
        "label": "3.3 细胞能量 · 3.3 Cellular Energy",
        "topicId": "bio-u3:3.3"
      }
    ]
  },
  {
    "id": "bio-u3-q028",
    "title": "3.6 论证 · 3.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「适应与能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Fitness”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.4",
        "label": "3.4 光合作用 · 3.4 Photosynthesis",
        "topicId": "bio-u3:3.4"
      }
    ]
  },
  {
    "id": "bio-u3-q029",
    "title": "3.1 数据刺激 · 3.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "酶催化 实验数据 · Enzyme Catalysis experimental data",
      "text": "研究小组记录与「酶催化」相关的测量。 · A research group records measurements related to “Enzyme Catalysis”.",
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
        "href": "#/t/bio/bio-u3/3.5",
        "label": "3.5 细胞呼吸 · 3.5 Cellular Respiration",
        "topicId": "bio-u3:3.5"
      }
    ]
  },
  {
    "id": "bio-u3-q030",
    "title": "3.2 图示 MCQ · 3.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「环境影响酶」最直接相关的正确陈述是？ · Which statement is most directly about “Environmental Impacts on Enzyme Function”?",
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
        "href": "#/t/bio/bio-u3/3.6",
        "label": "3.6 适应与能量 · 3.6 Fitness",
        "topicId": "bio-u3:3.6"
      }
    ]
  },
  {
    "id": "bio-u3-q031",
    "title": "3.3 论证 · 3.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「细胞能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Energy”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.1",
        "label": "3.1 酶催化 · 3.1 Enzyme Catalysis",
        "topicId": "bio-u3:3.1"
      }
    ]
  },
  {
    "id": "bio-u3-q032",
    "title": "3.4 论证 · 3.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「光合作用」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Photosynthesis”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.2",
        "label": "3.2 环境影响酶 · 3.2 Environmental Impacts on Enzyme Function",
        "topicId": "bio-u3:3.2"
      }
    ]
  },
  {
    "id": "bio-u3-q033",
    "title": "3.5 论证 · 3.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「细胞呼吸」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Respiration”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.3",
        "label": "3.3 细胞能量 · 3.3 Cellular Energy",
        "topicId": "bio-u3:3.3"
      }
    ]
  },
  {
    "id": "bio-u3-q034",
    "title": "3.6 论证 · 3.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「适应与能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Fitness”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.4",
        "label": "3.4 光合作用 · 3.4 Photosynthesis",
        "topicId": "bio-u3:3.4"
      }
    ]
  },
  {
    "id": "bio-u3-q035",
    "title": "3.1 数据刺激 · 3.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "酶催化 实验数据 · Enzyme Catalysis experimental data",
      "text": "研究小组记录与「酶催化」相关的测量。 · A research group records measurements related to “Enzyme Catalysis”.",
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
        "href": "#/t/bio/bio-u3/3.5",
        "label": "3.5 细胞呼吸 · 3.5 Cellular Respiration",
        "topicId": "bio-u3:3.5"
      }
    ]
  },
  {
    "id": "bio-u3-q036",
    "title": "3.2 图示 MCQ · 3.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「环境影响酶」最直接相关的正确陈述是？ · Which statement is most directly about “Environmental Impacts on Enzyme Function”?",
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
        "href": "#/t/bio/bio-u3/3.6",
        "label": "3.6 适应与能量 · 3.6 Fitness",
        "topicId": "bio-u3:3.6"
      }
    ]
  },
  {
    "id": "bio-u3-q037",
    "title": "3.3 论证 · 3.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「细胞能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Energy”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.1",
        "label": "3.1 酶催化 · 3.1 Enzyme Catalysis",
        "topicId": "bio-u3:3.1"
      }
    ]
  },
  {
    "id": "bio-u3-q038",
    "title": "3.4 论证 · 3.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「光合作用」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Photosynthesis”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.2",
        "label": "3.2 环境影响酶 · 3.2 Environmental Impacts on Enzyme Function",
        "topicId": "bio-u3:3.2"
      }
    ]
  },
  {
    "id": "bio-u3-q039",
    "title": "3.5 论证 · 3.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「细胞呼吸」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Respiration”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.3",
        "label": "3.3 细胞能量 · 3.3 Cellular Energy",
        "topicId": "bio-u3:3.3"
      }
    ]
  },
  {
    "id": "bio-u3-q040",
    "title": "3.6 论证 · 3.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「适应与能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Fitness”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.4",
        "label": "3.4 光合作用 · 3.4 Photosynthesis",
        "topicId": "bio-u3:3.4"
      }
    ]
  },
  {
    "id": "bio-u3-q041",
    "title": "3.1 数据刺激 · 3.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "酶催化 实验数据 · Enzyme Catalysis experimental data",
      "text": "研究小组记录与「酶催化」相关的测量。 · A research group records measurements related to “Enzyme Catalysis”.",
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
        "href": "#/t/bio/bio-u3/3.5",
        "label": "3.5 细胞呼吸 · 3.5 Cellular Respiration",
        "topicId": "bio-u3:3.5"
      }
    ]
  },
  {
    "id": "bio-u3-q042",
    "title": "3.2 图示 MCQ · 3.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「环境影响酶」最直接相关的正确陈述是？ · Which statement is most directly about “Environmental Impacts on Enzyme Function”?",
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
        "href": "#/t/bio/bio-u3/3.6",
        "label": "3.6 适应与能量 · 3.6 Fitness",
        "topicId": "bio-u3:3.6"
      }
    ]
  },
  {
    "id": "bio-u3-q043",
    "title": "3.3 论证 · 3.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「细胞能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Energy”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.1",
        "label": "3.1 酶催化 · 3.1 Enzyme Catalysis",
        "topicId": "bio-u3:3.1"
      }
    ]
  },
  {
    "id": "bio-u3-q044",
    "title": "3.4 论证 · 3.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「光合作用」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Photosynthesis”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.2",
        "label": "3.2 环境影响酶 · 3.2 Environmental Impacts on Enzyme Function",
        "topicId": "bio-u3:3.2"
      }
    ]
  },
  {
    "id": "bio-u3-q045",
    "title": "3.5 论证 · 3.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「细胞呼吸」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Respiration”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.3",
        "label": "3.3 细胞能量 · 3.3 Cellular Energy",
        "topicId": "bio-u3:3.3"
      }
    ]
  },
  {
    "id": "bio-u3-q046",
    "title": "3.6 论证 · 3.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「适应与能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Fitness”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.4",
        "label": "3.4 光合作用 · 3.4 Photosynthesis",
        "topicId": "bio-u3:3.4"
      }
    ]
  },
  {
    "id": "bio-u3-q047",
    "title": "3.1 数据刺激 · 3.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "酶催化 实验数据 · Enzyme Catalysis experimental data",
      "text": "研究小组记录与「酶催化」相关的测量。 · A research group records measurements related to “Enzyme Catalysis”.",
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
        "href": "#/t/bio/bio-u3/3.5",
        "label": "3.5 细胞呼吸 · 3.5 Cellular Respiration",
        "topicId": "bio-u3:3.5"
      }
    ]
  },
  {
    "id": "bio-u3-q048",
    "title": "3.2 图示 MCQ · 3.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「环境影响酶」最直接相关的正确陈述是？ · Which statement is most directly about “Environmental Impacts on Enzyme Function”?",
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
        "href": "#/t/bio/bio-u3/3.6",
        "label": "3.6 适应与能量 · 3.6 Fitness",
        "topicId": "bio-u3:3.6"
      }
    ]
  },
  {
    "id": "bio-u3-q049",
    "title": "3.3 论证 · 3.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「细胞能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Energy”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.1",
        "label": "3.1 酶催化 · 3.1 Enzyme Catalysis",
        "topicId": "bio-u3:3.1"
      }
    ]
  },
  {
    "id": "bio-u3-q050",
    "title": "3.4 论证 · 3.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「光合作用」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Photosynthesis”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.2",
        "label": "3.2 环境影响酶 · 3.2 Environmental Impacts on Enzyme Function",
        "topicId": "bio-u3:3.2"
      }
    ]
  },
  {
    "id": "bio-u3-q051",
    "title": "3.5 论证 · 3.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「细胞呼吸」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Cellular Respiration”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.3",
        "label": "3.3 细胞能量 · 3.3 Cellular Energy",
        "topicId": "bio-u3:3.3"
      }
    ]
  },
  {
    "id": "bio-u3-q052",
    "title": "3.6 论证 · 3.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「适应与能量」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Fitness”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u3/3.4",
        "label": "3.4 光合作用 · 3.4 Photosynthesis",
        "topicId": "bio-u3:3.4"
      }
    ]
  },
{
  "id": "bio-u3-q053",
  "title": "3.7 可逆变性的证据 · 3.7 evidence that denaturation can reverse",
  "type": "mcq",
  "difficulty": "易 · Easy",
  "calculator": false,
  "stem": "下列哪项观察最能支持“某酶的变性是可逆的”？ · Which observation best supports the claim that denaturation of an enzyme can be reversed?",
  "choices": [
    {
      "text": "纯化酶在尿素中失活，透析去除尿素后活性恢复，且没有新蛋白质合成 · A purified enzyme is inactivated in urea; after dialysis removes the urea, activity returns, and no new protein is synthesized.",
      "correct": true
    },
    {
      "text": "酶活性随温度升高而升高 · Enzyme activity rises as the temperature rises",
      "correct": false
    },
    {
      "text": "竞争性抑制剂使表观 Km 增大 · A competitive inhibitor increases the apparent Km.",
      "correct": false
    },
    {
      "text": "增加酶浓度使反应速率增大 · Raising the enzyme concentration increases the reaction rate",
      "correct": false
    }
  ],
  "solution": "去除变性剂后活性恢复且无新合成，说明肽链重新折叠复性。 · Activity returns after the denaturant is removed and no new protein is made, so the chain refolds.",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。 · Original AP-style item, not an official item; used for CED coverage in this round.",
  "topicLinks": [
    {
      "href": "#/t/bio/bio-u3/3.7",
      "label": "3.7 酶变性与复性 · 3.7 Enzyme Denaturation and Renaturation",
      "topicId": "bio-u3:3.7"
    }
  ]
},
{
  "id": "bio-u3-q054",
  "title": "3.7 复性后的活性回收率 · 3.7 recovery of activity after renaturation",
  "type": "frq",
  "difficulty": "中 · Medium",
  "calculator": false,
  "check": "numeric",
  "stem": "某酶初始活性 80 U/mL，60 °C 处理后降至 8 U/mL，缓慢冷却并透析后恢复到 60 U/mL。求相对于初始活性的回收率（%）。 · An enzyme starts at 80 U/mL, falls to 8 U/mL after treatment at 60 °C, and returns to 60 U/mL after slow cooling and dialysis. Find the percent recovery relative to the initial activity.",
  "expected": 75,
  "tol": 0.01,
  "answerLatex": "75\\%",
  "solution": "回收率=60/80=0.75=75%；未完全恢复可能与部分聚集或共价损伤有关。 · Recovery = 60/80 = 0.75 = 75%. Incomplete recovery may reflect partial aggregation or covalent damage.",
  "solutionLatex": "\\text{回收率 · recovery}=\\dfrac{60}{80}\\times100\\%=75\\%",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。 · Original AP-style item, not an official item; used for CED coverage in this round.",
  "topicLinks": [
    {
      "href": "#/t/bio/bio-u3/3.7",
      "label": "3.7 酶变性与复性 · 3.7 Enzyme Denaturation and Renaturation",
      "topicId": "bio-u3:3.7"
    }
  ]
}
];
