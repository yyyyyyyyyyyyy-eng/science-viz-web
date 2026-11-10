/** Practice bank for bio-u4 */
export const UNIT_REF = {
  "id": "bio-u4",
  "code": "4",
  "titleZh": "细胞通讯与细胞周期",
  "titleEn": "Cell Communication and Cell Cycle",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u4-1": {
    "title": "细胞通讯 · 刺激材料",
    "text": "下列数据与图示与「细胞通讯」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "pathway"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u4-2": {
    "title": "信号转导导论 · 刺激材料",
    "text": "下列数据与图示与「信号转导导论」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "cell"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u4-3": {
    "title": "信号转导 · 刺激材料",
    "text": "下列数据与图示与「信号转导」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "pathway"
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
    "id": "bio-u4-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-bio-u4-1",
    "stimulus": {
      "title": "细胞通讯 · 刺激材料",
      "text": "下列数据与图示与「细胞通讯」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "id": "bio-u4-q001",
        "title": "细胞通讯 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「细胞通讯」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u4/4.1",
            "label": "4.1 细胞通讯",
            "topicId": "bio-u4:4.1"
          }
        ]
      },
      {
        "id": "bio-u4-q002",
        "title": "信号转导导论 (2)",
        "difficulty": "中",
        "type": "mcq",
        "stem": "若增加一个合理对照，最应控制的变量是？",
        "choices": [
          {
            "text": "仅改变自变量，其余条件恒定",
            "correct": true
          },
          {
            "text": "同时改变多个条件以加快实验",
            "correct": false
          },
          {
            "text": "去掉所有重复试验",
            "correct": false
          },
          {
            "text": "只记录定性描述",
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
            "href": "#/t/bio/bio-u4/4.2",
            "label": "4.2 信号转导导论",
            "topicId": "bio-u4:4.2"
          }
        ]
      },
      {
        "id": "bio-u4-q003",
        "title": "信号转导 (3)",
        "difficulty": "难",
        "type": "frq",
        "stem": "设计一步可检验的后续实验（自变量、因变量、对照）。",
        "answer": "明确单一自变量；设阴性/阳性对照；重复。",
        "solution": "实验设计题评分点：变量、对照、可重复。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u4/4.3",
            "label": "4.3 信号转导",
            "topicId": "bio-u4:4.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u4-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-bio-u4-2",
    "stimulus": {
      "title": "信号转导导论 · 刺激材料",
      "text": "下列数据与图示与「信号转导导论」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "id": "bio-u4-q004",
        "title": "细胞通讯 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「细胞通讯」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u4/4.4",
            "label": "4.4 反馈",
            "topicId": "bio-u4:4.4"
          }
        ]
      },
      {
        "id": "bio-u4-q005",
        "title": "信号转导导论 (2)",
        "difficulty": "中",
        "type": "mcq",
        "stem": "若增加一个合理对照，最应控制的变量是？",
        "choices": [
          {
            "text": "仅改变自变量，其余条件恒定",
            "correct": true
          },
          {
            "text": "同时改变多个条件以加快实验",
            "correct": false
          },
          {
            "text": "去掉所有重复试验",
            "correct": false
          },
          {
            "text": "只记录定性描述",
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
            "href": "#/t/bio/bio-u4/4.5",
            "label": "4.5 细胞周期",
            "topicId": "bio-u4:4.5"
          }
        ]
      },
      {
        "id": "bio-u4-q006",
        "title": "信号转导 (3)",
        "difficulty": "难",
        "type": "frq",
        "stem": "设计一步可检验的后续实验（自变量、因变量、对照）。",
        "answer": "明确单一自变量；设阴性/阳性对照；重复。",
        "solution": "实验设计题评分点：变量、对照、可重复。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u4/4.6",
            "label": "4.6 细胞周期调控",
            "topicId": "bio-u4:4.6"
          }
        ]
      },
      {
        "id": "bio-u4-q007",
        "title": "反馈 (4)",
        "difficulty": "易",
        "type": "frq",
        "stem": "若结果与预期不符，提出一种混淆因素并说明如何排除。",
        "answer": "例如温度波动、样品降解等；用缓冲/恒温/重复排除。",
        "solution": "科学实践：识别局限。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u4/4.7",
            "label": "4.7 有丝分裂",
            "topicId": "bio-u4:4.7"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u4-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-bio-u4-3",
    "stimulus": {
      "title": "信号转导 · 刺激材料",
      "text": "下列数据与图示与「信号转导」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "id": "bio-u4-q008",
        "title": "细胞通讯 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「细胞通讯」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u4/4.1",
            "label": "4.1 细胞通讯",
            "topicId": "bio-u4:4.1"
          }
        ]
      },
      {
        "id": "bio-u4-q009",
        "title": "信号转导导论 (2)",
        "difficulty": "中",
        "type": "mcq",
        "stem": "若增加一个合理对照，最应控制的变量是？",
        "choices": [
          {
            "text": "仅改变自变量，其余条件恒定",
            "correct": true
          },
          {
            "text": "同时改变多个条件以加快实验",
            "correct": false
          },
          {
            "text": "去掉所有重复试验",
            "correct": false
          },
          {
            "text": "只记录定性描述",
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
            "href": "#/t/bio/bio-u4/4.2",
            "label": "4.2 信号转导导论",
            "topicId": "bio-u4:4.2"
          }
        ]
      },
      {
        "id": "bio-u4-q010",
        "title": "信号转导 (3)",
        "difficulty": "难",
        "type": "frq",
        "stem": "设计一步可检验的后续实验（自变量、因变量、对照）。",
        "answer": "明确单一自变量；设阴性/阳性对照；重复。",
        "solution": "实验设计题评分点：变量、对照、可重复。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u4/4.3",
            "label": "4.3 信号转导",
            "topicId": "bio-u4:4.3"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u4-q011",
    "title": "4.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "细胞通讯 实验数据",
      "text": "研究小组记录与「细胞通讯」相关的测量。",
      "table": {
        "headers": [
          "条件",
          "相对响应"
        ],
        "rows": [
          [
            "对照",
            "1.0"
          ],
          [
            "处理 A",
            "1.6"
          ],
          [
            "处理 B",
            "0.7"
          ],
          [
            "处理 A+B",
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
        "stem": "描述模式并给出机制假说。",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。",
        "solution": "主张—证据—推理。"
      },
      {
        "stem": "提出可区分假说的额外测量。",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。",
        "solution": "实验设计。"
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.4",
        "label": "4.4 反馈",
        "topicId": "bio-u4:4.4"
      }
    ]
  },
  {
    "id": "bio-u4-q012",
    "title": "4.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「信号转导导论」最直接相关的正确陈述是？",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定",
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
        "href": "#/t/bio/bio-u4/4.5",
        "label": "4.5 细胞周期",
        "topicId": "bio-u4:4.5"
      }
    ]
  },
  {
    "id": "bio-u4-q013",
    "title": "4.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「信号转导」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.6",
        "label": "4.6 细胞周期调控",
        "topicId": "bio-u4:4.6"
      }
    ]
  },
  {
    "id": "bio-u4-q014",
    "title": "4.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「反馈」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.7",
        "label": "4.7 有丝分裂",
        "topicId": "bio-u4:4.7"
      }
    ]
  },
  {
    "id": "bio-u4-q015",
    "title": "4.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「细胞周期」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.1",
        "label": "4.1 细胞通讯",
        "topicId": "bio-u4:4.1"
      }
    ]
  },
  {
    "id": "bio-u4-q016",
    "title": "4.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞周期调控」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.2",
        "label": "4.2 信号转导导论",
        "topicId": "bio-u4:4.2"
      }
    ]
  },
  {
    "id": "bio-u4-q017",
    "title": "4.7 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "有丝分裂 实验数据",
      "text": "研究小组记录与「有丝分裂」相关的测量。",
      "table": {
        "headers": [
          "条件",
          "相对响应"
        ],
        "rows": [
          [
            "对照",
            "1.0"
          ],
          [
            "处理 A",
            "1.6"
          ],
          [
            "处理 B",
            "0.7"
          ],
          [
            "处理 A+B",
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
        "stem": "描述模式并给出机制假说。",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。",
        "solution": "主张—证据—推理。"
      },
      {
        "stem": "提出可区分假说的额外测量。",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。",
        "solution": "实验设计。"
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.3",
        "label": "4.3 信号转导",
        "topicId": "bio-u4:4.3"
      }
    ]
  },
  {
    "id": "bio-u4-q018",
    "title": "4.1 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「细胞通讯」最直接相关的正确陈述是？",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定",
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
        "href": "#/t/bio/bio-u4/4.4",
        "label": "4.4 反馈",
        "topicId": "bio-u4:4.4"
      }
    ]
  },
  {
    "id": "bio-u4-q019",
    "title": "4.2 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「信号转导导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.5",
        "label": "4.5 细胞周期",
        "topicId": "bio-u4:4.5"
      }
    ]
  },
  {
    "id": "bio-u4-q020",
    "title": "4.3 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「信号转导」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.6",
        "label": "4.6 细胞周期调控",
        "topicId": "bio-u4:4.6"
      }
    ]
  },
  {
    "id": "bio-u4-q021",
    "title": "4.4 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「反馈」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.7",
        "label": "4.7 有丝分裂",
        "topicId": "bio-u4:4.7"
      }
    ]
  },
  {
    "id": "bio-u4-q022",
    "title": "4.5 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞周期」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.1",
        "label": "4.1 细胞通讯",
        "topicId": "bio-u4:4.1"
      }
    ]
  },
  {
    "id": "bio-u4-q023",
    "title": "4.6 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "细胞周期调控 实验数据",
      "text": "研究小组记录与「细胞周期调控」相关的测量。",
      "table": {
        "headers": [
          "条件",
          "相对响应"
        ],
        "rows": [
          [
            "对照",
            "1.0"
          ],
          [
            "处理 A",
            "1.6"
          ],
          [
            "处理 B",
            "0.7"
          ],
          [
            "处理 A+B",
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
        "stem": "描述模式并给出机制假说。",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。",
        "solution": "主张—证据—推理。"
      },
      {
        "stem": "提出可区分假说的额外测量。",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。",
        "solution": "实验设计。"
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.2",
        "label": "4.2 信号转导导论",
        "topicId": "bio-u4:4.2"
      }
    ]
  },
  {
    "id": "bio-u4-q024",
    "title": "4.7 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「有丝分裂」最直接相关的正确陈述是？",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定",
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
        "href": "#/t/bio/bio-u4/4.3",
        "label": "4.3 信号转导",
        "topicId": "bio-u4:4.3"
      }
    ]
  },
  {
    "id": "bio-u4-q025",
    "title": "4.1 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞通讯」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.4",
        "label": "4.4 反馈",
        "topicId": "bio-u4:4.4"
      }
    ]
  },
  {
    "id": "bio-u4-q026",
    "title": "4.2 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「信号转导导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.5",
        "label": "4.5 细胞周期",
        "topicId": "bio-u4:4.5"
      }
    ]
  },
  {
    "id": "bio-u4-q027",
    "title": "4.3 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「信号转导」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.6",
        "label": "4.6 细胞周期调控",
        "topicId": "bio-u4:4.6"
      }
    ]
  },
  {
    "id": "bio-u4-q028",
    "title": "4.4 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「反馈」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.7",
        "label": "4.7 有丝分裂",
        "topicId": "bio-u4:4.7"
      }
    ]
  },
  {
    "id": "bio-u4-q029",
    "title": "4.5 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "细胞周期 实验数据",
      "text": "研究小组记录与「细胞周期」相关的测量。",
      "table": {
        "headers": [
          "条件",
          "相对响应"
        ],
        "rows": [
          [
            "对照",
            "1.0"
          ],
          [
            "处理 A",
            "1.6"
          ],
          [
            "处理 B",
            "0.7"
          ],
          [
            "处理 A+B",
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
        "stem": "描述模式并给出机制假说。",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。",
        "solution": "主张—证据—推理。"
      },
      {
        "stem": "提出可区分假说的额外测量。",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。",
        "solution": "实验设计。"
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.1",
        "label": "4.1 细胞通讯",
        "topicId": "bio-u4:4.1"
      }
    ]
  },
  {
    "id": "bio-u4-q030",
    "title": "4.6 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。"
    },
    "stem": "与「细胞周期调控」最直接相关的正确陈述是？",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定",
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
        "href": "#/t/bio/bio-u4/4.2",
        "label": "4.2 信号转导导论",
        "topicId": "bio-u4:4.2"
      }
    ]
  },
  {
    "id": "bio-u4-q031",
    "title": "4.7 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「有丝分裂」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.3",
        "label": "4.3 信号转导",
        "topicId": "bio-u4:4.3"
      }
    ]
  },
  {
    "id": "bio-u4-q032",
    "title": "4.1 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「细胞通讯」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.4",
        "label": "4.4 反馈",
        "topicId": "bio-u4:4.4"
      }
    ]
  },
  {
    "id": "bio-u4-q033",
    "title": "4.2 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「信号转导导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.5",
        "label": "4.5 细胞周期",
        "topicId": "bio-u4:4.5"
      }
    ]
  },
  {
    "id": "bio-u4-q034",
    "title": "4.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「信号转导」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.6",
        "label": "4.6 细胞周期调控",
        "topicId": "bio-u4:4.6"
      }
    ]
  },
  {
    "id": "bio-u4-q035",
    "title": "4.4 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "反馈 实验数据",
      "text": "研究小组记录与「反馈」相关的测量。",
      "table": {
        "headers": [
          "条件",
          "相对响应"
        ],
        "rows": [
          [
            "对照",
            "1.0"
          ],
          [
            "处理 A",
            "1.6"
          ],
          [
            "处理 B",
            "0.7"
          ],
          [
            "处理 A+B",
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
        "stem": "描述模式并给出机制假说。",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。",
        "solution": "主张—证据—推理。"
      },
      {
        "stem": "提出可区分假说的额外测量。",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。",
        "solution": "实验设计。"
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.7",
        "label": "4.7 有丝分裂",
        "topicId": "bio-u4:4.7"
      }
    ]
  },
  {
    "id": "bio-u4-q036",
    "title": "4.5 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。"
    },
    "stem": "与「细胞周期」最直接相关的正确陈述是？",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定",
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
        "href": "#/t/bio/bio-u4/4.1",
        "label": "4.1 细胞通讯",
        "topicId": "bio-u4:4.1"
      }
    ]
  },
  {
    "id": "bio-u4-q037",
    "title": "4.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞周期调控」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.2",
        "label": "4.2 信号转导导论",
        "topicId": "bio-u4:4.2"
      }
    ]
  },
  {
    "id": "bio-u4-q038",
    "title": "4.7 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「有丝分裂」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.3",
        "label": "4.3 信号转导",
        "topicId": "bio-u4:4.3"
      }
    ]
  },
  {
    "id": "bio-u4-q039",
    "title": "4.1 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「细胞通讯」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.4",
        "label": "4.4 反馈",
        "topicId": "bio-u4:4.4"
      }
    ]
  },
  {
    "id": "bio-u4-q040",
    "title": "4.2 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「信号转导导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.5",
        "label": "4.5 细胞周期",
        "topicId": "bio-u4:4.5"
      }
    ]
  },
  {
    "id": "bio-u4-q041",
    "title": "4.3 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "信号转导 实验数据",
      "text": "研究小组记录与「信号转导」相关的测量。",
      "table": {
        "headers": [
          "条件",
          "相对响应"
        ],
        "rows": [
          [
            "对照",
            "1.0"
          ],
          [
            "处理 A",
            "1.6"
          ],
          [
            "处理 B",
            "0.7"
          ],
          [
            "处理 A+B",
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
        "stem": "描述模式并给出机制假说。",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。",
        "solution": "主张—证据—推理。"
      },
      {
        "stem": "提出可区分假说的额外测量。",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。",
        "solution": "实验设计。"
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.6",
        "label": "4.6 细胞周期调控",
        "topicId": "bio-u4:4.6"
      }
    ]
  },
  {
    "id": "bio-u4-q042",
    "title": "4.4 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「反馈」最直接相关的正确陈述是？",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定",
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
        "href": "#/t/bio/bio-u4/4.7",
        "label": "4.7 有丝分裂",
        "topicId": "bio-u4:4.7"
      }
    ]
  },
  {
    "id": "bio-u4-q043",
    "title": "4.5 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞周期」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.1",
        "label": "4.1 细胞通讯",
        "topicId": "bio-u4:4.1"
      }
    ]
  },
  {
    "id": "bio-u4-q044",
    "title": "4.6 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「细胞周期调控」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.2",
        "label": "4.2 信号转导导论",
        "topicId": "bio-u4:4.2"
      }
    ]
  },
  {
    "id": "bio-u4-q045",
    "title": "4.7 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「有丝分裂」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.3",
        "label": "4.3 信号转导",
        "topicId": "bio-u4:4.3"
      }
    ]
  },
  {
    "id": "bio-u4-q046",
    "title": "4.1 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞通讯」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.4",
        "label": "4.4 反馈",
        "topicId": "bio-u4:4.4"
      }
    ]
  },
  {
    "id": "bio-u4-q047",
    "title": "4.2 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "信号转导导论 实验数据",
      "text": "研究小组记录与「信号转导导论」相关的测量。",
      "table": {
        "headers": [
          "条件",
          "相对响应"
        ],
        "rows": [
          [
            "对照",
            "1.0"
          ],
          [
            "处理 A",
            "1.6"
          ],
          [
            "处理 B",
            "0.7"
          ],
          [
            "处理 A+B",
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
        "stem": "描述模式并给出机制假说。",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。",
        "solution": "主张—证据—推理。"
      },
      {
        "stem": "提出可区分假说的额外测量。",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。",
        "solution": "实验设计。"
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.5",
        "label": "4.5 细胞周期",
        "topicId": "bio-u4:4.5"
      }
    ]
  },
  {
    "id": "bio-u4-q048",
    "title": "4.3 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「信号转导」最直接相关的正确陈述是？",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定",
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
        "href": "#/t/bio/bio-u4/4.6",
        "label": "4.6 细胞周期调控",
        "topicId": "bio-u4:4.6"
      }
    ]
  },
  {
    "id": "bio-u4-q049",
    "title": "4.4 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「反馈」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.7",
        "label": "4.7 有丝分裂",
        "topicId": "bio-u4:4.7"
      }
    ]
  },
  {
    "id": "bio-u4-q050",
    "title": "4.5 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「细胞周期」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.1",
        "label": "4.1 细胞通讯",
        "topicId": "bio-u4:4.1"
      }
    ]
  },
  {
    "id": "bio-u4-q051",
    "title": "4.6 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「细胞周期调控」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.2",
        "label": "4.2 信号转导导论",
        "topicId": "bio-u4:4.2"
      }
    ]
  },
  {
    "id": "bio-u4-q052",
    "title": "4.7 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「有丝分裂」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.3",
        "label": "4.3 信号转导",
        "topicId": "bio-u4:4.3"
      }
    ]
  },
  {
    "id": "bio-u4-q053",
    "title": "4.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "细胞通讯 实验数据",
      "text": "研究小组记录与「细胞通讯」相关的测量。",
      "table": {
        "headers": [
          "条件",
          "相对响应"
        ],
        "rows": [
          [
            "对照",
            "1.0"
          ],
          [
            "处理 A",
            "1.6"
          ],
          [
            "处理 B",
            "0.7"
          ],
          [
            "处理 A+B",
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
        "stem": "描述模式并给出机制假说。",
        "type": "frq",
        "answer": "比较相对响应；联系分子/细胞机制。",
        "solution": "主张—证据—推理。"
      },
      {
        "stem": "提出可区分假说的额外测量。",
        "type": "frq",
        "answer": "例如中间产物浓度、抑制剂、敲除对照。",
        "solution": "实验设计。"
      }
    ],
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.4",
        "label": "4.4 反馈",
        "topicId": "bio-u4:4.4"
      }
    ]
  },
  {
    "id": "bio-u4-q054",
    "title": "4.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「信号转导导论」最直接相关的正确陈述是？",
    "choices": [
      {
        "text": "图示结构/关系支持该知识点的核心机制",
        "correct": true
      },
      {
        "text": "图示与基因表达无关且无信息",
        "correct": false
      },
      {
        "text": "自然选择从不改变等位基因频率",
        "correct": false
      },
      {
        "text": "所有性状均由单基因完全决定",
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
        "href": "#/t/bio/bio-u4/4.5",
        "label": "4.5 细胞周期",
        "topicId": "bio-u4:4.5"
      }
    ]
  },
  {
    "id": "bio-u4-q055",
    "title": "4.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「信号转导」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.6",
        "label": "4.6 细胞周期调控",
        "topicId": "bio-u4:4.6"
      }
    ]
  },
  {
    "id": "bio-u4-q056",
    "title": "4.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「反馈」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u4/4.7",
        "label": "4.7 有丝分裂",
        "topicId": "bio-u4:4.7"
      }
    ]
  }
];
