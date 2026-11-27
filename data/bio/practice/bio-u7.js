/** Practice bank for bio-u7 */
export const UNIT_REF = {
  "id": "bio-u7",
  "code": "7",
  "titleZh": "自然选择 · natural selection",
  "titleEn": "Natural Selection",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u7-1": {
    "title": "自然选择导论 · 刺激材料 · Introduction to Natural Selection: stimulus",
    "text": "下列数据与图示与「自然选择导论」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Introduction to Natural Selection”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "phylo"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u7-2": {
    "title": "自然选择 · 刺激材料 · Natural Selection: stimulus",
    "text": "下列数据与图示与「自然选择」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Natural Selection”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "pedigree"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u7-3": {
    "title": "人工选择 · 刺激材料 · Artificial Selection: stimulus",
    "text": "下列数据与图示与「人工选择」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Artificial Selection”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "foodWeb"
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
    "id": "bio-u7-set1",
    "title": "题组 1 · 共享刺激 · Set 1, shared stimulus",
    "sharedStimulus": "stim-bio-u7-1",
    "stimulus": {
      "title": "自然选择导论 · 刺激材料 · Introduction to Natural Selection: stimulus",
      "text": "下列数据与图示与「自然选择导论」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Introduction to Natural Selection”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
        "id": "bio-u7-q001",
        "title": "自然选择导论 (1) · Introduction to Natural Selection (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「自然选择导论」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Introduction to Natural Selection”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u7/7.1",
            "label": "7.1 自然选择导论 · 7.1 Introduction to Natural Selection",
            "topicId": "bio-u7:7.1"
          }
        ]
      },
      {
        "id": "bio-u7-q002",
        "title": "自然选择 (2) · Natural Selection (2)",
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
            "href": "#/t/bio/bio-u7/7.2",
            "label": "7.2 自然选择 · 7.2 Natural Selection",
            "topicId": "bio-u7:7.2"
          }
        ]
      },
      {
        "id": "bio-u7-q003",
        "title": "人工选择 (3) · Artificial Selection (3)",
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
            "href": "#/t/bio/bio-u7/7.3",
            "label": "7.3 人工选择 · 7.3 Artificial Selection",
            "topicId": "bio-u7:7.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u7-set2",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-bio-u7-2",
    "stimulus": {
      "title": "自然选择 · 刺激材料 · Natural Selection: stimulus",
      "text": "下列数据与图示与「自然选择」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Natural Selection”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "pedigree"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-u7-q004",
        "title": "自然选择导论 (1) · Introduction to Natural Selection (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「自然选择导论」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Introduction to Natural Selection”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u7/7.4",
            "label": "7.4 群体遗传 · 7.4 Population Genetics",
            "topicId": "bio-u7:7.4"
          }
        ]
      },
      {
        "id": "bio-u7-q005",
        "title": "自然选择 (2) · Natural Selection (2)",
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
            "href": "#/t/bio/bio-u7/7.5",
            "label": "7.5 哈代–温伯格 · 7.5 Hardy-Weinberg Equilibrium",
            "topicId": "bio-u7:7.5"
          }
        ]
      },
      {
        "id": "bio-u7-q006",
        "title": "人工选择 (3) · Artificial Selection (3)",
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
            "href": "#/t/bio/bio-u7/7.6",
            "label": "7.6 进化证据 · 7.6 Evidence of Evolution",
            "topicId": "bio-u7:7.6"
          }
        ]
      },
      {
        "id": "bio-u7-q007",
        "title": "群体遗传 (4) · Population Genetics (4)",
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
            "href": "#/t/bio/bio-u7/7.7",
            "label": "7.7 共同祖先 · 7.7 Common Ancestry",
            "topicId": "bio-u7:7.7"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u7-set3",
    "title": "题组 3 · 共享刺激 · Set 3, shared stimulus",
    "sharedStimulus": "stim-bio-u7-3",
    "stimulus": {
      "title": "人工选择 · 刺激材料 · Artificial Selection: stimulus",
      "text": "下列数据与图示与「人工选择」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Artificial Selection”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
        "id": "bio-u7-q008",
        "title": "自然选择导论 (1) · Introduction to Natural Selection (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「自然选择导论」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Introduction to Natural Selection”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u7/7.8",
            "label": "7.8 延续与变化 · 7.8 Continuing Evolution",
            "topicId": "bio-u7:7.8"
          }
        ]
      },
      {
        "id": "bio-u7-q009",
        "title": "自然选择 (2) · Natural Selection (2)",
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
            "href": "#/t/bio/bio-u7/7.9",
            "label": "7.9 系统发生 · 7.9 Phylogeny",
            "topicId": "bio-u7:7.9"
          }
        ]
      },
      {
        "id": "bio-u7-q010",
        "title": "人工选择 (3) · Artificial Selection (3)",
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
            "href": "#/t/bio/bio-u7/7.10",
            "label": "7.10 物种形成 · 7.10 Speciation",
            "topicId": "bio-u7:7.10"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u7-q011",
    "title": "7.1 数据刺激 · 7.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "自然选择导论 实验数据 · Introduction to Natural Selection experimental data",
      "text": "研究小组记录与「自然选择导论」相关的测量。 · A research group records measurements related to “Introduction to Natural Selection”.",
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
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝 · 7.11 Extinction",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q012",
    "title": "7.2 图示 MCQ · 7.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「自然选择」最直接相关的正确陈述是？ · Which statement is most directly about “Natural Selection”?",
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
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 种群变异 · 7.12 Variations in Populations",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q013",
    "title": "7.3 论证 · 7.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「人工选择」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Artificial Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源 · 7.13 Origins of Life on Earth",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q014",
    "title": "7.4 论证 · 7.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「群体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Population Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论 · 7.1 Introduction to Natural Selection",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q015",
    "title": "7.5 论证 · 7.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「哈代–温伯格」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Hardy-Weinberg Equilibrium”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择 · 7.2 Natural Selection",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q016",
    "title": "7.6 论证 · 7.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「进化证据」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Evidence of Evolution”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择 · 7.3 Artificial Selection",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q017",
    "title": "7.7 数据刺激 · 7.7 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "共同祖先 实验数据 · Common Ancestry experimental data",
      "text": "研究小组记录与「共同祖先」相关的测量。 · A research group records measurements related to “Common Ancestry”.",
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
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传 · 7.4 Population Genetics",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q018",
    "title": "7.8 图示 MCQ · 7.8 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「延续与变化」最直接相关的正确陈述是？ · Which statement is most directly about “Continuing Evolution”?",
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
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格 · 7.5 Hardy-Weinberg Equilibrium",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q019",
    "title": "7.9 论证 · 7.9 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「系统发生」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Phylogeny”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据 · 7.6 Evidence of Evolution",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q020",
    "title": "7.10 论证 · 7.10 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「物种形成」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Speciation”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先 · 7.7 Common Ancestry",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q021",
    "title": "7.11 论证 · 7.11 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「灭绝」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Extinction”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化 · 7.8 Continuing Evolution",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q022",
    "title": "7.12 论证 · 7.12 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「种群变异」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Variations in Populations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生 · 7.9 Phylogeny",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q023",
    "title": "7.13 数据刺激 · 7.13 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "生命起源 实验数据 · Origins of Life on Earth experimental data",
      "text": "研究小组记录与「生命起源」相关的测量。 · A research group records measurements related to “Origins of Life on Earth”.",
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
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成 · 7.10 Speciation",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q024",
    "title": "7.1 图示 MCQ · 7.1 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「自然选择导论」最直接相关的正确陈述是？ · Which statement is most directly about “Introduction to Natural Selection”?",
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
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝 · 7.11 Extinction",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q025",
    "title": "7.2 论证 · 7.2 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「自然选择」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Natural Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 种群变异 · 7.12 Variations in Populations",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q026",
    "title": "7.3 论证 · 7.3 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「人工选择」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Artificial Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源 · 7.13 Origins of Life on Earth",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q027",
    "title": "7.4 论证 · 7.4 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「群体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Population Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论 · 7.1 Introduction to Natural Selection",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q028",
    "title": "7.5 论证 · 7.5 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「哈代–温伯格」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Hardy-Weinberg Equilibrium”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择 · 7.2 Natural Selection",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q029",
    "title": "7.6 数据刺激 · 7.6 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "进化证据 实验数据 · Evidence of Evolution experimental data",
      "text": "研究小组记录与「进化证据」相关的测量。 · A research group records measurements related to “Evidence of Evolution”.",
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
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择 · 7.3 Artificial Selection",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q030",
    "title": "7.7 图示 MCQ · 7.7 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「共同祖先」最直接相关的正确陈述是？ · Which statement is most directly about “Common Ancestry”?",
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
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传 · 7.4 Population Genetics",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q031",
    "title": "7.8 论证 · 7.8 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「延续与变化」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Continuing Evolution”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格 · 7.5 Hardy-Weinberg Equilibrium",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q032",
    "title": "7.9 论证 · 7.9 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「系统发生」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Phylogeny”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据 · 7.6 Evidence of Evolution",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q033",
    "title": "7.10 论证 · 7.10 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「物种形成」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Speciation”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先 · 7.7 Common Ancestry",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q034",
    "title": "7.11 论证 · 7.11 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「灭绝」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Extinction”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化 · 7.8 Continuing Evolution",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q035",
    "title": "7.12 数据刺激 · 7.12 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "种群变异 实验数据 · Variations in Populations experimental data",
      "text": "研究小组记录与「种群变异」相关的测量。 · A research group records measurements related to “Variations in Populations”.",
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
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生 · 7.9 Phylogeny",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q036",
    "title": "7.13 图示 MCQ · 7.13 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「生命起源」最直接相关的正确陈述是？ · Which statement is most directly about “Origins of Life on Earth”?",
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
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成 · 7.10 Speciation",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q037",
    "title": "7.1 论证 · 7.1 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「自然选择导论」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Introduction to Natural Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝 · 7.11 Extinction",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q038",
    "title": "7.2 论证 · 7.2 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「自然选择」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Natural Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 种群变异 · 7.12 Variations in Populations",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q039",
    "title": "7.3 论证 · 7.3 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「人工选择」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Artificial Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源 · 7.13 Origins of Life on Earth",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q040",
    "title": "7.4 论证 · 7.4 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「群体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Population Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论 · 7.1 Introduction to Natural Selection",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q041",
    "title": "7.5 数据刺激 · 7.5 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "哈代–温伯格 实验数据 · Hardy-Weinberg Equilibrium experimental data",
      "text": "研究小组记录与「哈代–温伯格」相关的测量。 · A research group records measurements related to “Hardy-Weinberg Equilibrium”.",
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
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择 · 7.2 Natural Selection",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q042",
    "title": "7.6 图示 MCQ · 7.6 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「进化证据」最直接相关的正确陈述是？ · Which statement is most directly about “Evidence of Evolution”?",
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
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择 · 7.3 Artificial Selection",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q043",
    "title": "7.7 论证 · 7.7 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「共同祖先」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Common Ancestry”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传 · 7.4 Population Genetics",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q044",
    "title": "7.8 论证 · 7.8 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「延续与变化」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Continuing Evolution”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格 · 7.5 Hardy-Weinberg Equilibrium",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q045",
    "title": "7.9 论证 · 7.9 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「系统发生」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Phylogeny”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据 · 7.6 Evidence of Evolution",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q046",
    "title": "7.10 论证 · 7.10 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「物种形成」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Speciation”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先 · 7.7 Common Ancestry",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q047",
    "title": "7.11 数据刺激 · 7.11 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "灭绝 实验数据 · Extinction experimental data",
      "text": "研究小组记录与「灭绝」相关的测量。 · A research group records measurements related to “Extinction”.",
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
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化 · 7.8 Continuing Evolution",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q048",
    "title": "7.12 图示 MCQ · 7.12 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「种群变异」最直接相关的正确陈述是？ · Which statement is most directly about “Variations in Populations”?",
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
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生 · 7.9 Phylogeny",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q049",
    "title": "7.13 论证 · 7.13 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「生命起源」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Origins of Life on Earth”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成 · 7.10 Speciation",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q050",
    "title": "7.1 论证 · 7.1 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「自然选择导论」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Introduction to Natural Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝 · 7.11 Extinction",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q051",
    "title": "7.2 论证 · 7.2 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「自然选择」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Natural Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 种群变异 · 7.12 Variations in Populations",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q052",
    "title": "7.3 论证 · 7.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「人工选择」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Artificial Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源 · 7.13 Origins of Life on Earth",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q053",
    "title": "7.4 数据刺激 · 7.4 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "群体遗传 实验数据 · Population Genetics experimental data",
      "text": "研究小组记录与「群体遗传」相关的测量。 · A research group records measurements related to “Population Genetics”.",
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
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论 · 7.1 Introduction to Natural Selection",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q054",
    "title": "7.5 图示 MCQ · 7.5 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「哈代–温伯格」最直接相关的正确陈述是？ · Which statement is most directly about “Hardy-Weinberg Equilibrium”?",
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
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择 · 7.2 Natural Selection",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q055",
    "title": "7.6 论证 · 7.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「进化证据」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Evidence of Evolution”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择 · 7.3 Artificial Selection",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q056",
    "title": "7.7 论证 · 7.7 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「共同祖先」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Common Ancestry”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传 · 7.4 Population Genetics",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q057",
    "title": "7.8 论证 · 7.8 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「延续与变化」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Continuing Evolution”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格 · 7.5 Hardy-Weinberg Equilibrium",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q058",
    "title": "7.9 论证 · 7.9 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「系统发生」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Phylogeny”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据 · 7.6 Evidence of Evolution",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q059",
    "title": "7.10 数据刺激 · 7.10 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "物种形成 实验数据 · Speciation experimental data",
      "text": "研究小组记录与「物种形成」相关的测量。 · A research group records measurements related to “Speciation”.",
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
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先 · 7.7 Common Ancestry",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q060",
    "title": "7.11 图示 MCQ · 7.11 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「灭绝」最直接相关的正确陈述是？ · Which statement is most directly about “Extinction”?",
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
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化 · 7.8 Continuing Evolution",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q061",
    "title": "7.12 论证 · 7.12 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「种群变异」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Variations in Populations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生 · 7.9 Phylogeny",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q062",
    "title": "7.13 论证 · 7.13 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「生命起源」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Origins of Life on Earth”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成 · 7.10 Speciation",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q063",
    "title": "7.1 论证 · 7.1 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「自然选择导论」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Introduction to Natural Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝 · 7.11 Extinction",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q064",
    "title": "7.2 论证 · 7.2 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「自然选择」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Natural Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 种群变异 · 7.12 Variations in Populations",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q065",
    "title": "7.3 数据刺激 · 7.3 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "人工选择 实验数据 · Artificial Selection experimental data",
      "text": "研究小组记录与「人工选择」相关的测量。 · A research group records measurements related to “Artificial Selection”.",
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
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源 · 7.13 Origins of Life on Earth",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q066",
    "title": "7.4 图示 MCQ · 7.4 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「群体遗传」最直接相关的正确陈述是？ · Which statement is most directly about “Population Genetics”?",
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
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论 · 7.1 Introduction to Natural Selection",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q067",
    "title": "7.5 论证 · 7.5 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「哈代–温伯格」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Hardy-Weinberg Equilibrium”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择 · 7.2 Natural Selection",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q068",
    "title": "7.6 论证 · 7.6 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「进化证据」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Evidence of Evolution”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择 · 7.3 Artificial Selection",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q069",
    "title": "7.7 论证 · 7.7 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「共同祖先」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Common Ancestry”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传 · 7.4 Population Genetics",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q070",
    "title": "7.8 论证 · 7.8 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「延续与变化」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Continuing Evolution”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格 · 7.5 Hardy-Weinberg Equilibrium",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q071",
    "title": "7.9 数据刺激 · 7.9 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "系统发生 实验数据 · Phylogeny experimental data",
      "text": "研究小组记录与「系统发生」相关的测量。 · A research group records measurements related to “Phylogeny”.",
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
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据 · 7.6 Evidence of Evolution",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q072",
    "title": "7.10 图示 MCQ · 7.10 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「物种形成」最直接相关的正确陈述是？ · Which statement is most directly about “Speciation”?",
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
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先 · 7.7 Common Ancestry",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q073",
    "title": "7.11 论证 · 7.11 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「灭绝」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Extinction”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化 · 7.8 Continuing Evolution",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q074",
    "title": "7.12 论证 · 7.12 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「种群变异」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Variations in Populations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生 · 7.9 Phylogeny",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q075",
    "title": "7.13 论证 · 7.13 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「生命起源」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Origins of Life on Earth”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成 · 7.10 Speciation",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q076",
    "title": "7.1 论证 · 7.1 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「自然选择导论」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Introduction to Natural Selection”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝 · 7.11 Extinction",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q077",
    "title": "7.2 数据刺激 · 7.2 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "自然选择 实验数据 · Natural Selection experimental data",
      "text": "研究小组记录与「自然选择」相关的测量。 · A research group records measurements related to “Natural Selection”.",
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
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 种群变异 · 7.12 Variations in Populations",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q078",
    "title": "7.3 图示 MCQ · 7.3 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「人工选择」最直接相关的正确陈述是？ · Which statement is most directly about “Artificial Selection”?",
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
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源 · 7.13 Origins of Life on Earth",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q079",
    "title": "7.4 论证 · 7.4 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「群体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Population Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论 · 7.1 Introduction to Natural Selection",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q080",
    "title": "7.5 论证 · 7.5 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「哈代–温伯格」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Hardy-Weinberg Equilibrium”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择 · 7.2 Natural Selection",
        "topicId": "bio-u7:7.2"
      }
    ]
  }
];
