/** Practice bank for bio-u5 */
export const UNIT_REF = {
  "id": "bio-u5",
  "code": "5",
  "titleZh": "遗传 · heredity",
  "titleEn": "Heredity",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u5-1": {
    "title": "减数分裂 · 刺激材料 · Meiosis: stimulus",
    "text": "下列数据与图示与「减数分裂」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Meiosis”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "pedigree"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u5-2": {
    "title": "减数分裂与遗传多样性 · 刺激材料 · Meiosis and Genetic Diversity: stimulus",
    "text": "下列数据与图示与「减数分裂与遗传多样性」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Meiosis and Genetic Diversity”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "punnett"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u5-3": {
    "title": "孟德尔遗传 · 刺激材料 · Mendelian Genetics: stimulus",
    "text": "下列数据与图示与「孟德尔遗传」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Mendelian Genetics”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "pedigree"
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
    "id": "bio-u5-set1",
    "title": "题组 1 · 共享刺激 · Set 1, shared stimulus",
    "sharedStimulus": "stim-bio-u5-1",
    "stimulus": {
      "title": "减数分裂 · 刺激材料 · Meiosis: stimulus",
      "text": "下列数据与图示与「减数分裂」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Meiosis”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
        "id": "bio-u5-q001",
        "title": "减数分裂 (1) · Meiosis (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「减数分裂」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Meiosis”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u5/5.1",
            "label": "5.1 减数分裂 · 5.1 Meiosis",
            "topicId": "bio-u5:5.1"
          }
        ]
      },
      {
        "id": "bio-u5-q002",
        "title": "减数分裂与遗传多样性 (2) · Meiosis and Genetic Diversity (2)",
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
            "href": "#/t/bio/bio-u5/5.2",
            "label": "5.2 减数分裂与遗传多样性 · 5.2 Meiosis and Genetic Diversity",
            "topicId": "bio-u5:5.2"
          }
        ]
      },
      {
        "id": "bio-u5-q003",
        "title": "孟德尔遗传 (3) · Mendelian Genetics (3)",
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
            "href": "#/t/bio/bio-u5/5.3",
            "label": "5.3 孟德尔遗传 · 5.3 Mendelian Genetics",
            "topicId": "bio-u5:5.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u5-set2",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-bio-u5-2",
    "stimulus": {
      "title": "减数分裂与遗传多样性 · 刺激材料 · Meiosis and Genetic Diversity: stimulus",
      "text": "下列数据与图示与「减数分裂与遗传多样性」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Meiosis and Genetic Diversity”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "punnett"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-u5-q004",
        "title": "减数分裂 (1) · Meiosis (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「减数分裂」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Meiosis”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u5/5.4",
            "label": "5.4 非孟德尔遗传 · 5.4 Non-Mendelian Genetics",
            "topicId": "bio-u5:5.4"
          }
        ]
      },
      {
        "id": "bio-u5-q005",
        "title": "减数分裂与遗传多样性 (2) · Meiosis and Genetic Diversity (2)",
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
            "href": "#/t/bio/bio-u5/5.5",
            "label": "5.5 环境影响表型 · 5.5 Environmental Effects on Phenotype",
            "topicId": "bio-u5:5.5"
          }
        ]
      },
      {
        "id": "bio-u5-q006",
        "title": "孟德尔遗传 (3) · Mendelian Genetics (3)",
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
            "href": "#/t/bio/bio-u5/5.6",
            "label": "5.6 染色体遗传 · 5.6 Chromosomal Inheritance",
            "topicId": "bio-u5:5.6"
          }
        ]
      },
      {
        "id": "bio-u5-q007",
        "title": "非孟德尔遗传 (4) · Non-Mendelian Genetics (4)",
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
            "href": "#/t/bio/bio-u5/5.1",
            "label": "5.1 减数分裂 · 5.1 Meiosis",
            "topicId": "bio-u5:5.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u5-set3",
    "title": "题组 3 · 共享刺激 · Set 3, shared stimulus",
    "sharedStimulus": "stim-bio-u5-3",
    "stimulus": {
      "title": "孟德尔遗传 · 刺激材料 · Mendelian Genetics: stimulus",
      "text": "下列数据与图示与「孟德尔遗传」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Mendelian Genetics”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
        "id": "bio-u5-q008",
        "title": "减数分裂 (1) · Meiosis (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「减数分裂」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “Meiosis”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u5/5.2",
            "label": "5.2 减数分裂与遗传多样性 · 5.2 Meiosis and Genetic Diversity",
            "topicId": "bio-u5:5.2"
          }
        ]
      },
      {
        "id": "bio-u5-q009",
        "title": "减数分裂与遗传多样性 (2) · Meiosis and Genetic Diversity (2)",
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
            "href": "#/t/bio/bio-u5/5.3",
            "label": "5.3 孟德尔遗传 · 5.3 Mendelian Genetics",
            "topicId": "bio-u5:5.3"
          }
        ]
      },
      {
        "id": "bio-u5-q010",
        "title": "孟德尔遗传 (3) · Mendelian Genetics (3)",
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
            "href": "#/t/bio/bio-u5/5.4",
            "label": "5.4 非孟德尔遗传 · 5.4 Non-Mendelian Genetics",
            "topicId": "bio-u5:5.4"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u5-q011",
    "title": "5.1 数据刺激 · 5.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "减数分裂 实验数据 · Meiosis experimental data",
      "text": "研究小组记录与「减数分裂」相关的测量。 · A research group records measurements related to “Meiosis”.",
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
        "href": "#/t/bio/bio-u5/5.5",
        "label": "5.5 环境影响表型 · 5.5 Environmental Effects on Phenotype",
        "topicId": "bio-u5:5.5"
      }
    ]
  },
  {
    "id": "bio-u5-q012",
    "title": "5.2 图示 MCQ · 5.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「减数分裂与遗传多样性」最直接相关的正确陈述是？ · Which statement is most directly about “Meiosis and Genetic Diversity”?",
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
        "href": "#/t/bio/bio-u5/5.6",
        "label": "5.6 染色体遗传 · 5.6 Chromosomal Inheritance",
        "topicId": "bio-u5:5.6"
      }
    ]
  },
  {
    "id": "bio-u5-q013",
    "title": "5.3 论证 · 5.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.1",
        "label": "5.1 减数分裂 · 5.1 Meiosis",
        "topicId": "bio-u5:5.1"
      }
    ]
  },
  {
    "id": "bio-u5-q014",
    "title": "5.4 论证 · 5.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「非孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Non-Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.2",
        "label": "5.2 减数分裂与遗传多样性 · 5.2 Meiosis and Genetic Diversity",
        "topicId": "bio-u5:5.2"
      }
    ]
  },
  {
    "id": "bio-u5-q015",
    "title": "5.5 论证 · 5.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「环境影响表型」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Environmental Effects on Phenotype”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.3",
        "label": "5.3 孟德尔遗传 · 5.3 Mendelian Genetics",
        "topicId": "bio-u5:5.3"
      }
    ]
  },
  {
    "id": "bio-u5-q016",
    "title": "5.6 论证 · 5.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「染色体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chromosomal Inheritance”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.4",
        "label": "5.4 非孟德尔遗传 · 5.4 Non-Mendelian Genetics",
        "topicId": "bio-u5:5.4"
      }
    ]
  },
  {
    "id": "bio-u5-q017",
    "title": "5.1 数据刺激 · 5.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "减数分裂 实验数据 · Meiosis experimental data",
      "text": "研究小组记录与「减数分裂」相关的测量。 · A research group records measurements related to “Meiosis”.",
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
        "href": "#/t/bio/bio-u5/5.5",
        "label": "5.5 环境影响表型 · 5.5 Environmental Effects on Phenotype",
        "topicId": "bio-u5:5.5"
      }
    ]
  },
  {
    "id": "bio-u5-q018",
    "title": "5.2 图示 MCQ · 5.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「减数分裂与遗传多样性」最直接相关的正确陈述是？ · Which statement is most directly about “Meiosis and Genetic Diversity”?",
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
        "href": "#/t/bio/bio-u5/5.6",
        "label": "5.6 染色体遗传 · 5.6 Chromosomal Inheritance",
        "topicId": "bio-u5:5.6"
      }
    ]
  },
  {
    "id": "bio-u5-q019",
    "title": "5.3 论证 · 5.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.1",
        "label": "5.1 减数分裂 · 5.1 Meiosis",
        "topicId": "bio-u5:5.1"
      }
    ]
  },
  {
    "id": "bio-u5-q020",
    "title": "5.4 论证 · 5.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「非孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Non-Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.2",
        "label": "5.2 减数分裂与遗传多样性 · 5.2 Meiosis and Genetic Diversity",
        "topicId": "bio-u5:5.2"
      }
    ]
  },
  {
    "id": "bio-u5-q021",
    "title": "5.5 论证 · 5.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「环境影响表型」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Environmental Effects on Phenotype”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.3",
        "label": "5.3 孟德尔遗传 · 5.3 Mendelian Genetics",
        "topicId": "bio-u5:5.3"
      }
    ]
  },
  {
    "id": "bio-u5-q022",
    "title": "5.6 论证 · 5.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「染色体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chromosomal Inheritance”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.4",
        "label": "5.4 非孟德尔遗传 · 5.4 Non-Mendelian Genetics",
        "topicId": "bio-u5:5.4"
      }
    ]
  },
  {
    "id": "bio-u5-q023",
    "title": "5.1 数据刺激 · 5.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "减数分裂 实验数据 · Meiosis experimental data",
      "text": "研究小组记录与「减数分裂」相关的测量。 · A research group records measurements related to “Meiosis”.",
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
        "href": "#/t/bio/bio-u5/5.5",
        "label": "5.5 环境影响表型 · 5.5 Environmental Effects on Phenotype",
        "topicId": "bio-u5:5.5"
      }
    ]
  },
  {
    "id": "bio-u5-q024",
    "title": "5.2 图示 MCQ · 5.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「减数分裂与遗传多样性」最直接相关的正确陈述是？ · Which statement is most directly about “Meiosis and Genetic Diversity”?",
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
        "href": "#/t/bio/bio-u5/5.6",
        "label": "5.6 染色体遗传 · 5.6 Chromosomal Inheritance",
        "topicId": "bio-u5:5.6"
      }
    ]
  },
  {
    "id": "bio-u5-q025",
    "title": "5.3 论证 · 5.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.1",
        "label": "5.1 减数分裂 · 5.1 Meiosis",
        "topicId": "bio-u5:5.1"
      }
    ]
  },
  {
    "id": "bio-u5-q026",
    "title": "5.4 论证 · 5.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「非孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Non-Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.2",
        "label": "5.2 减数分裂与遗传多样性 · 5.2 Meiosis and Genetic Diversity",
        "topicId": "bio-u5:5.2"
      }
    ]
  },
  {
    "id": "bio-u5-q027",
    "title": "5.5 论证 · 5.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「环境影响表型」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Environmental Effects on Phenotype”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.3",
        "label": "5.3 孟德尔遗传 · 5.3 Mendelian Genetics",
        "topicId": "bio-u5:5.3"
      }
    ]
  },
  {
    "id": "bio-u5-q028",
    "title": "5.6 论证 · 5.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「染色体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chromosomal Inheritance”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.4",
        "label": "5.4 非孟德尔遗传 · 5.4 Non-Mendelian Genetics",
        "topicId": "bio-u5:5.4"
      }
    ]
  },
  {
    "id": "bio-u5-q029",
    "title": "5.1 数据刺激 · 5.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "减数分裂 实验数据 · Meiosis experimental data",
      "text": "研究小组记录与「减数分裂」相关的测量。 · A research group records measurements related to “Meiosis”.",
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
        "href": "#/t/bio/bio-u5/5.5",
        "label": "5.5 环境影响表型 · 5.5 Environmental Effects on Phenotype",
        "topicId": "bio-u5:5.5"
      }
    ]
  },
  {
    "id": "bio-u5-q030",
    "title": "5.2 图示 MCQ · 5.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「减数分裂与遗传多样性」最直接相关的正确陈述是？ · Which statement is most directly about “Meiosis and Genetic Diversity”?",
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
        "href": "#/t/bio/bio-u5/5.6",
        "label": "5.6 染色体遗传 · 5.6 Chromosomal Inheritance",
        "topicId": "bio-u5:5.6"
      }
    ]
  },
  {
    "id": "bio-u5-q031",
    "title": "5.3 论证 · 5.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.1",
        "label": "5.1 减数分裂 · 5.1 Meiosis",
        "topicId": "bio-u5:5.1"
      }
    ]
  },
  {
    "id": "bio-u5-q032",
    "title": "5.4 论证 · 5.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「非孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Non-Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.2",
        "label": "5.2 减数分裂与遗传多样性 · 5.2 Meiosis and Genetic Diversity",
        "topicId": "bio-u5:5.2"
      }
    ]
  },
  {
    "id": "bio-u5-q033",
    "title": "5.5 论证 · 5.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「环境影响表型」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Environmental Effects on Phenotype”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.3",
        "label": "5.3 孟德尔遗传 · 5.3 Mendelian Genetics",
        "topicId": "bio-u5:5.3"
      }
    ]
  },
  {
    "id": "bio-u5-q034",
    "title": "5.6 论证 · 5.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「染色体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chromosomal Inheritance”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.4",
        "label": "5.4 非孟德尔遗传 · 5.4 Non-Mendelian Genetics",
        "topicId": "bio-u5:5.4"
      }
    ]
  },
  {
    "id": "bio-u5-q035",
    "title": "5.1 数据刺激 · 5.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "减数分裂 实验数据 · Meiosis experimental data",
      "text": "研究小组记录与「减数分裂」相关的测量。 · A research group records measurements related to “Meiosis”.",
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
        "href": "#/t/bio/bio-u5/5.5",
        "label": "5.5 环境影响表型 · 5.5 Environmental Effects on Phenotype",
        "topicId": "bio-u5:5.5"
      }
    ]
  },
  {
    "id": "bio-u5-q036",
    "title": "5.2 图示 MCQ · 5.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「减数分裂与遗传多样性」最直接相关的正确陈述是？ · Which statement is most directly about “Meiosis and Genetic Diversity”?",
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
        "href": "#/t/bio/bio-u5/5.6",
        "label": "5.6 染色体遗传 · 5.6 Chromosomal Inheritance",
        "topicId": "bio-u5:5.6"
      }
    ]
  },
  {
    "id": "bio-u5-q037",
    "title": "5.3 论证 · 5.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.1",
        "label": "5.1 减数分裂 · 5.1 Meiosis",
        "topicId": "bio-u5:5.1"
      }
    ]
  },
  {
    "id": "bio-u5-q038",
    "title": "5.4 论证 · 5.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「非孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Non-Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.2",
        "label": "5.2 减数分裂与遗传多样性 · 5.2 Meiosis and Genetic Diversity",
        "topicId": "bio-u5:5.2"
      }
    ]
  },
  {
    "id": "bio-u5-q039",
    "title": "5.5 论证 · 5.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「环境影响表型」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Environmental Effects on Phenotype”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.3",
        "label": "5.3 孟德尔遗传 · 5.3 Mendelian Genetics",
        "topicId": "bio-u5:5.3"
      }
    ]
  },
  {
    "id": "bio-u5-q040",
    "title": "5.6 论证 · 5.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「染色体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chromosomal Inheritance”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.4",
        "label": "5.4 非孟德尔遗传 · 5.4 Non-Mendelian Genetics",
        "topicId": "bio-u5:5.4"
      }
    ]
  },
  {
    "id": "bio-u5-q041",
    "title": "5.1 数据刺激 · 5.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "减数分裂 实验数据 · Meiosis experimental data",
      "text": "研究小组记录与「减数分裂」相关的测量。 · A research group records measurements related to “Meiosis”.",
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
        "href": "#/t/bio/bio-u5/5.5",
        "label": "5.5 环境影响表型 · 5.5 Environmental Effects on Phenotype",
        "topicId": "bio-u5:5.5"
      }
    ]
  },
  {
    "id": "bio-u5-q042",
    "title": "5.2 图示 MCQ · 5.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「减数分裂与遗传多样性」最直接相关的正确陈述是？ · Which statement is most directly about “Meiosis and Genetic Diversity”?",
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
        "href": "#/t/bio/bio-u5/5.6",
        "label": "5.6 染色体遗传 · 5.6 Chromosomal Inheritance",
        "topicId": "bio-u5:5.6"
      }
    ]
  },
  {
    "id": "bio-u5-q043",
    "title": "5.3 论证 · 5.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.1",
        "label": "5.1 减数分裂 · 5.1 Meiosis",
        "topicId": "bio-u5:5.1"
      }
    ]
  },
  {
    "id": "bio-u5-q044",
    "title": "5.4 论证 · 5.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「非孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Non-Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.2",
        "label": "5.2 减数分裂与遗传多样性 · 5.2 Meiosis and Genetic Diversity",
        "topicId": "bio-u5:5.2"
      }
    ]
  },
  {
    "id": "bio-u5-q045",
    "title": "5.5 论证 · 5.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「环境影响表型」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Environmental Effects on Phenotype”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.3",
        "label": "5.3 孟德尔遗传 · 5.3 Mendelian Genetics",
        "topicId": "bio-u5:5.3"
      }
    ]
  },
  {
    "id": "bio-u5-q046",
    "title": "5.6 论证 · 5.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「染色体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chromosomal Inheritance”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.4",
        "label": "5.4 非孟德尔遗传 · 5.4 Non-Mendelian Genetics",
        "topicId": "bio-u5:5.4"
      }
    ]
  },
  {
    "id": "bio-u5-q047",
    "title": "5.1 数据刺激 · 5.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "减数分裂 实验数据 · Meiosis experimental data",
      "text": "研究小组记录与「减数分裂」相关的测量。 · A research group records measurements related to “Meiosis”.",
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
        "href": "#/t/bio/bio-u5/5.5",
        "label": "5.5 环境影响表型 · 5.5 Environmental Effects on Phenotype",
        "topicId": "bio-u5:5.5"
      }
    ]
  },
  {
    "id": "bio-u5-q048",
    "title": "5.2 图示 MCQ · 5.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「减数分裂与遗传多样性」最直接相关的正确陈述是？ · Which statement is most directly about “Meiosis and Genetic Diversity”?",
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
        "href": "#/t/bio/bio-u5/5.6",
        "label": "5.6 染色体遗传 · 5.6 Chromosomal Inheritance",
        "topicId": "bio-u5:5.6"
      }
    ]
  },
  {
    "id": "bio-u5-q049",
    "title": "5.3 论证 · 5.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.1",
        "label": "5.1 减数分裂 · 5.1 Meiosis",
        "topicId": "bio-u5:5.1"
      }
    ]
  },
  {
    "id": "bio-u5-q050",
    "title": "5.4 论证 · 5.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「非孟德尔遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Non-Mendelian Genetics”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.2",
        "label": "5.2 减数分裂与遗传多样性 · 5.2 Meiosis and Genetic Diversity",
        "topicId": "bio-u5:5.2"
      }
    ]
  },
  {
    "id": "bio-u5-q051",
    "title": "5.5 论证 · 5.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「环境影响表型」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Environmental Effects on Phenotype”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.3",
        "label": "5.3 孟德尔遗传 · 5.3 Mendelian Genetics",
        "topicId": "bio-u5:5.3"
      }
    ]
  },
  {
    "id": "bio-u5-q052",
    "title": "5.6 论证 · 5.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「染色体遗传」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Chromosomal Inheritance”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u5/5.4",
        "label": "5.4 非孟德尔遗传 · 5.4 Non-Mendelian Genetics",
        "topicId": "bio-u5:5.4"
      }
    ]
  }
];
