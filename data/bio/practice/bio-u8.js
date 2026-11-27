/** Practice bank for bio-u8 */
export const UNIT_REF = {
  "id": "bio-u8",
  "code": "8",
  "titleZh": "生态学 · ecology",
  "titleEn": "Ecology",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u8-1": {
    "title": "环境响应 · 刺激材料 · Responses to the Environment: stimulus",
    "text": "下列数据与图示与「环境响应」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Responses to the Environment”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "foodWeb"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u8-2": {
    "title": "能量流 · 刺激材料 · Energy Flow Through Ecosystems: stimulus",
    "text": "下列数据与图示与「能量流」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Energy Flow Through Ecosystems”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "foodWeb"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u8-3": {
    "title": "种群生态 · 刺激材料 · Population Ecology: stimulus",
    "text": "下列数据与图示与「种群生态」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Population Ecology”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "phylo"
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
    "id": "bio-u8-set1",
    "title": "题组 1 · 共享刺激 · Set 1, shared stimulus",
    "sharedStimulus": "stim-bio-u8-1",
    "stimulus": {
      "title": "环境响应 · 刺激材料 · Responses to the Environment: stimulus",
      "text": "下列数据与图示与「环境响应」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Responses to the Environment”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "foodWeb"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-u8-q001",
        "title": "环境响应 (1) · Responses to the Environment (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「环境响应」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Responses to the Environment”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u8/8.1",
            "label": "8.1 环境响应 · 8.1 Responses to the Environment",
            "topicId": "bio-u8:8.1"
          }
        ]
      },
      {
        "id": "bio-u8-q002",
        "title": "能量流 (2) · Energy Flow Through Ecosystems (2)",
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
            "href": "#/t/bio/bio-u8/8.2",
            "label": "8.2 能量流 · 8.2 Energy Flow Through Ecosystems",
            "topicId": "bio-u8:8.2"
          }
        ]
      },
      {
        "id": "bio-u8-q003",
        "title": "种群生态 (3) · Population Ecology (3)",
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
            "href": "#/t/bio/bio-u8/8.3",
            "label": "8.3 种群生态 · 8.3 Population Ecology",
            "topicId": "bio-u8:8.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u8-set2",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-bio-u8-2",
    "stimulus": {
      "title": "能量流 · 刺激材料 · Energy Flow Through Ecosystems: stimulus",
      "text": "下列数据与图示与「能量流」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Energy Flow Through Ecosystems”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "foodWeb"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-u8-q004",
        "title": "环境响应 (1) · Responses to the Environment (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「环境响应」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Responses to the Environment”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u8/8.4",
            "label": "8.4 密度效应 · 8.4 Effect of Density on Populations",
            "topicId": "bio-u8:8.4"
          }
        ]
      },
      {
        "id": "bio-u8-q005",
        "title": "能量流 (2) · Energy Flow Through Ecosystems (2)",
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
            "href": "#/t/bio/bio-u8/8.5",
            "label": "8.5 群落生态 · 8.5 Community Ecology",
            "topicId": "bio-u8:8.5"
          }
        ]
      },
      {
        "id": "bio-u8-q006",
        "title": "种群生态 (3) · Population Ecology (3)",
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
            "href": "#/t/bio/bio-u8/8.6",
            "label": "8.6 生物多样性 · 8.6 Biodiversity",
            "topicId": "bio-u8:8.6"
          }
        ]
      },
      {
        "id": "bio-u8-q007",
        "title": "密度效应 (4) · Effect of Density on Populations (4)",
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
            "href": "#/t/bio/bio-u8/8.7",
            "label": "8.7 生态系统扰动 · 8.7 Disruptions to Ecosystems",
            "topicId": "bio-u8:8.7"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u8-set3",
    "title": "题组 3 · 共享刺激 · Set 3, shared stimulus",
    "sharedStimulus": "stim-bio-u8-3",
    "stimulus": {
      "title": "种群生态 · 刺激材料 · Population Ecology: stimulus",
      "text": "下列数据与图示与「种群生态」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Population Ecology”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "phylo"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-u8-q008",
        "title": "环境响应 (1) · Responses to the Environment (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「环境响应」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Responses to the Environment”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u8/8.1",
            "label": "8.1 环境响应 · 8.1 Responses to the Environment",
            "topicId": "bio-u8:8.1"
          }
        ]
      },
      {
        "id": "bio-u8-q009",
        "title": "能量流 (2) · Energy Flow Through Ecosystems (2)",
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
            "href": "#/t/bio/bio-u8/8.2",
            "label": "8.2 能量流 · 8.2 Energy Flow Through Ecosystems",
            "topicId": "bio-u8:8.2"
          }
        ]
      },
      {
        "id": "bio-u8-q010",
        "title": "种群生态 (3) · Population Ecology (3)",
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
            "href": "#/t/bio/bio-u8/8.3",
            "label": "8.3 种群生态 · 8.3 Population Ecology",
            "topicId": "bio-u8:8.3"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u8-q011",
    "title": "8.1 数据刺激 · 8.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "环境响应 实验数据 · Responses to the Environment experimental data",
      "text": "研究小组记录与「环境响应」相关的测量。 · A research group records measurements related to “Responses to the Environment”.",
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
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应 · 8.4 Effect of Density on Populations",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q012",
    "title": "8.2 图示 MCQ · 8.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「能量流」最直接相关的正确陈述是？ · Which statement is most directly about “Energy Flow Through Ecosystems”?",
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
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态 · 8.5 Community Ecology",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q013",
    "title": "8.3 论证 · 8.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Population Ecology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性 · 8.6 Biodiversity",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q014",
    "title": "8.4 论证 · 8.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Effect of Density on Populations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动 · 8.7 Disruptions to Ecosystems",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q015",
    "title": "8.5 论证 · 8.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「群落生态」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Community Ecology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应 · 8.1 Responses to the Environment",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q016",
    "title": "8.6 论证 · 8.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「生物多样性」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Biodiversity”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流 · 8.2 Energy Flow Through Ecosystems",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q017",
    "title": "8.7 数据刺激 · 8.7 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "生态系统扰动 实验数据 · Disruptions to Ecosystems experimental data",
      "text": "研究小组记录与「生态系统扰动」相关的测量。 · A research group records measurements related to “Disruptions to Ecosystems”.",
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
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态 · 8.3 Population Ecology",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q018",
    "title": "8.1 图示 MCQ · 8.1 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「环境响应」最直接相关的正确陈述是？ · Which statement is most directly about “Responses to the Environment”?",
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
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应 · 8.4 Effect of Density on Populations",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q019",
    "title": "8.2 论证 · 8.2 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「能量流」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Energy Flow Through Ecosystems”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态 · 8.5 Community Ecology",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q020",
    "title": "8.3 论证 · 8.3 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Population Ecology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性 · 8.6 Biodiversity",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q021",
    "title": "8.4 论证 · 8.4 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Effect of Density on Populations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动 · 8.7 Disruptions to Ecosystems",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q022",
    "title": "8.5 论证 · 8.5 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「群落生态」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Community Ecology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应 · 8.1 Responses to the Environment",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q023",
    "title": "8.6 数据刺激 · 8.6 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "生物多样性 实验数据 · Biodiversity experimental data",
      "text": "研究小组记录与「生物多样性」相关的测量。 · A research group records measurements related to “Biodiversity”.",
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
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流 · 8.2 Energy Flow Through Ecosystems",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q024",
    "title": "8.7 图示 MCQ · 8.7 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「生态系统扰动」最直接相关的正确陈述是？ · Which statement is most directly about “Disruptions to Ecosystems”?",
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
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态 · 8.3 Population Ecology",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q025",
    "title": "8.1 论证 · 8.1 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「环境响应」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Responses to the Environment”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应 · 8.4 Effect of Density on Populations",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q026",
    "title": "8.2 论证 · 8.2 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「能量流」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Energy Flow Through Ecosystems”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态 · 8.5 Community Ecology",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q027",
    "title": "8.3 论证 · 8.3 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Population Ecology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性 · 8.6 Biodiversity",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q028",
    "title": "8.4 论证 · 8.4 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Effect of Density on Populations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动 · 8.7 Disruptions to Ecosystems",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q029",
    "title": "8.5 数据刺激 · 8.5 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "群落生态 实验数据 · Community Ecology experimental data",
      "text": "研究小组记录与「群落生态」相关的测量。 · A research group records measurements related to “Community Ecology”.",
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
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应 · 8.1 Responses to the Environment",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q030",
    "title": "8.6 图示 MCQ · 8.6 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「生物多样性」最直接相关的正确陈述是？ · Which statement is most directly about “Biodiversity”?",
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
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流 · 8.2 Energy Flow Through Ecosystems",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q031",
    "title": "8.7 论证 · 8.7 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「生态系统扰动」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Disruptions to Ecosystems”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态 · 8.3 Population Ecology",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q032",
    "title": "8.1 论证 · 8.1 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「环境响应」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Responses to the Environment”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应 · 8.4 Effect of Density on Populations",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q033",
    "title": "8.2 论证 · 8.2 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「能量流」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Energy Flow Through Ecosystems”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态 · 8.5 Community Ecology",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q034",
    "title": "8.3 论证 · 8.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Population Ecology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性 · 8.6 Biodiversity",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q035",
    "title": "8.4 数据刺激 · 8.4 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "密度效应 实验数据 · Effect of Density on Populations experimental data",
      "text": "研究小组记录与「密度效应」相关的测量。 · A research group records measurements related to “Effect of Density on Populations”.",
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
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动 · 8.7 Disruptions to Ecosystems",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q036",
    "title": "8.5 图示 MCQ · 8.5 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「群落生态」最直接相关的正确陈述是？ · Which statement is most directly about “Community Ecology”?",
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
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应 · 8.1 Responses to the Environment",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q037",
    "title": "8.6 论证 · 8.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「生物多样性」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Biodiversity”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流 · 8.2 Energy Flow Through Ecosystems",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q038",
    "title": "8.7 论证 · 8.7 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「生态系统扰动」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Disruptions to Ecosystems”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态 · 8.3 Population Ecology",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q039",
    "title": "8.1 论证 · 8.1 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「环境响应」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Responses to the Environment”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应 · 8.4 Effect of Density on Populations",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q040",
    "title": "8.2 论证 · 8.2 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「能量流」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Energy Flow Through Ecosystems”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态 · 8.5 Community Ecology",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q041",
    "title": "8.3 数据刺激 · 8.3 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "种群生态 实验数据 · Population Ecology experimental data",
      "text": "研究小组记录与「种群生态」相关的测量。 · A research group records measurements related to “Population Ecology”.",
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
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性 · 8.6 Biodiversity",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q042",
    "title": "8.4 图示 MCQ · 8.4 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「密度效应」最直接相关的正确陈述是？ · Which statement is most directly about “Effect of Density on Populations”?",
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
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动 · 8.7 Disruptions to Ecosystems",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q043",
    "title": "8.5 论证 · 8.5 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「群落生态」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Community Ecology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应 · 8.1 Responses to the Environment",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q044",
    "title": "8.6 论证 · 8.6 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「生物多样性」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Biodiversity”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流 · 8.2 Energy Flow Through Ecosystems",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q045",
    "title": "8.7 论证 · 8.7 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「生态系统扰动」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Disruptions to Ecosystems”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态 · 8.3 Population Ecology",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q046",
    "title": "8.1 论证 · 8.1 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「环境响应」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Responses to the Environment”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应 · 8.4 Effect of Density on Populations",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q047",
    "title": "8.2 数据刺激 · 8.2 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "能量流 实验数据 · Energy Flow Through Ecosystems experimental data",
      "text": "研究小组记录与「能量流」相关的测量。 · A research group records measurements related to “Energy Flow Through Ecosystems”.",
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
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态 · 8.5 Community Ecology",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q048",
    "title": "8.3 图示 MCQ · 8.3 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「种群生态」最直接相关的正确陈述是？ · Which statement is most directly about “Population Ecology”?",
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
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性 · 8.6 Biodiversity",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q049",
    "title": "8.4 论证 · 8.4 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Effect of Density on Populations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动 · 8.7 Disruptions to Ecosystems",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q050",
    "title": "8.5 论证 · 8.5 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「群落生态」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Community Ecology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应 · 8.1 Responses to the Environment",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q051",
    "title": "8.6 论证 · 8.6 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「生物多样性」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Biodiversity”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流 · 8.2 Energy Flow Through Ecosystems",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q052",
    "title": "8.7 论证 · 8.7 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「生态系统扰动」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Disruptions to Ecosystems”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态 · 8.3 Population Ecology",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q053",
    "title": "8.1 数据刺激 · 8.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "环境响应 实验数据 · Responses to the Environment experimental data",
      "text": "研究小组记录与「环境响应」相关的测量。 · A research group records measurements related to “Responses to the Environment”.",
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
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应 · 8.4 Effect of Density on Populations",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q054",
    "title": "8.2 图示 MCQ · 8.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「能量流」最直接相关的正确陈述是？ · Which statement is most directly about “Energy Flow Through Ecosystems”?",
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
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态 · 8.5 Community Ecology",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q055",
    "title": "8.3 论证 · 8.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Population Ecology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性 · 8.6 Biodiversity",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q056",
    "title": "8.4 论证 · 8.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Effect of Density on Populations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动 · 8.7 Disruptions to Ecosystems",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
{
  "id": "bio-u8-q057",
  "title": "8.10 磷循环的储库特征 · 8.10 reservoir features of the phosphorus cycle",
  "type": "mcq",
  "difficulty": "易 · Easy",
  "calculator": false,
  "stem": "磷循环与其他主要生物地球化学循环的关键区别是什么？ · What is the key difference between the phosphorus cycle and the other major biogeochemical cycles?",
  "choices": [
    {
      "text": "磷没有显著的气态储库，主要依赖岩石风化与沉积 · Phosphorus has no significant gaseous reservoir and depends mainly on rock weathering and sedimentation.",
      "correct": true
    },
    {
      "text": "磷主要通过大气 N₂ 固定进入生物圈 · Phosphorus enters the biosphere mainly by fixation of atmospheric N₂.",
      "correct": false
    },
    {
      "text": "磷循环完全不需要分解者 · The phosphorus cycle needs no decomposers at all",
      "correct": false
    },
    {
      "text": "磷只能以气态形式被生产者吸收 · Producers can absorb phosphorus only in gaseous form.",
      "correct": false
    }
  ],
  "solution": "磷以磷酸盐形式存在于岩石、土壤和水体，没有显著气态储库。 · Phosphorus occurs as phosphate in rock, soil, and water, and it has no significant gaseous reservoir.",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。 · Original AP-style item, not an official item; used for CED coverage in this round.",
  "topicLinks": [
    {
      "href": "#/t/bio/bio-u8/8.10",
      "label": "8.10 生态层级与物质循环 · 8.10 Ecological Organization and Biogeochemical Cycles",
      "topicId": "bio-u8:8.10"
    }
  ]
},
{
  "id": "bio-u8-q058",
  "title": "8.10 大气水的停留时间 · 8.10 residence time of atmospheric water",
  "type": "frq",
  "difficulty": "中 · Medium",
  "calculator": false,
  "check": "numeric",
  "stem": "大气水储库约 1.4×10⁴ km³，全球降水通量约 5.0×10⁵ km³/yr。估算大气水的平均停留时间（天，按 1 yr=365 天）。 · The atmospheric water reservoir is about 1.4×10⁴ km³, and global precipitation flux is about 5.0×10⁵ km³/yr. Estimate the mean residence time of atmospheric water in days, using 1 yr = 365 days.",
  "expected": 10,
  "tol": 0.05,
  "answerLatex": "10\\ \\mathrm{days}",
  "solution": "τ=储库/通量=1.4×10⁴/5.0×10⁵=0.028 yr≈10 天。 · τ = reservoir/flux = 1.4×10⁴/5.0×10⁵ = 0.028 yr ≈ 10 days.",
  "solutionLatex": "\\tau=\\dfrac{1.4\\times10^{4}}{5.0\\times10^{5}}\\ \\mathrm{yr}\\approx0.028\\ \\mathrm{yr}\\approx10\\ \\mathrm{days}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。 · Original AP-style item, not an official item; used for CED coverage in this round.",
  "topicLinks": [
    {
      "href": "#/t/bio/bio-u8/8.10",
      "label": "8.10 生态层级与物质循环 · 8.10 Ecological Organization and Biogeochemical Cycles",
      "topicId": "bio-u8:8.10"
    }
  ]
}
];
