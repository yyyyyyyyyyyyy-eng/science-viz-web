/** Practice bank for bio-prep-hs */
export const UNIT_REF = {
  "id": "bio-prep-hs",
  "code": "P2",
  "titleZh": "高中生物",
  "titleEn": "High School Biology",
  "layer": "prep",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-prep-hs-1": {
    "title": "科学方法与实验设计 · 刺激材料",
    "text": "下列数据与图示与「科学方法与实验设计」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "cell"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-prep-hs-2": {
    "title": "生物大分子 · 刺激材料",
    "text": "下列数据与图示与「生物大分子」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "pedigree"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-prep-hs-3": {
    "title": "细胞结构 · 刺激材料",
    "text": "下列数据与图示与「细胞结构」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "punnett"
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
    "id": "bio-prep-hs-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-bio-prep-hs-1",
    "stimulus": {
      "title": "科学方法与实验设计 · 刺激材料",
      "text": "下列数据与图示与「科学方法与实验设计」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "id": "bio-prep-hs-q001",
        "title": "科学方法与实验设计 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「科学方法与实验设计」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-hs/P2.1",
            "label": "P2.1 科学方法与实验设计",
            "topicId": "bio-prep-hs:P2.1"
          }
        ]
      },
      {
        "id": "bio-prep-hs-q002",
        "title": "生物大分子 (2)",
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
            "href": "#/t/bio/bio-prep-hs/P2.2",
            "label": "P2.2 生物大分子",
            "topicId": "bio-prep-hs:P2.2"
          }
        ]
      },
      {
        "id": "bio-prep-hs-q003",
        "title": "细胞结构 (3)",
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
            "href": "#/t/bio/bio-prep-hs/P2.3",
            "label": "P2.3 细胞结构",
            "topicId": "bio-prep-hs:P2.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-prep-hs-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-bio-prep-hs-2",
    "stimulus": {
      "title": "生物大分子 · 刺激材料",
      "text": "下列数据与图示与「生物大分子」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "id": "bio-prep-hs-q004",
        "title": "科学方法与实验设计 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「科学方法与实验设计」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-hs/P2.4",
            "label": "P2.4 细胞膜与运输",
            "topicId": "bio-prep-hs:P2.4"
          }
        ]
      },
      {
        "id": "bio-prep-hs-q005",
        "title": "生物大分子 (2)",
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
            "href": "#/t/bio/bio-prep-hs/P2.5",
            "label": "P2.5 酶",
            "topicId": "bio-prep-hs:P2.5"
          }
        ]
      },
      {
        "id": "bio-prep-hs-q006",
        "title": "细胞结构 (3)",
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
            "href": "#/t/bio/bio-prep-hs/P2.6",
            "label": "P2.6 光合作用概览",
            "topicId": "bio-prep-hs:P2.6"
          }
        ]
      },
      {
        "id": "bio-prep-hs-q007",
        "title": "细胞膜与运输 (4)",
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
            "href": "#/t/bio/bio-prep-hs/P2.7",
            "label": "P2.7 细胞呼吸概览",
            "topicId": "bio-prep-hs:P2.7"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-prep-hs-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-bio-prep-hs-3",
    "stimulus": {
      "title": "细胞结构 · 刺激材料",
      "text": "下列数据与图示与「细胞结构」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "id": "bio-prep-hs-q008",
        "title": "科学方法与实验设计 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「科学方法与实验设计」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-prep-hs/P2.8",
            "label": "P2.8 有丝分裂与减数分裂",
            "topicId": "bio-prep-hs:P2.8"
          }
        ]
      },
      {
        "id": "bio-prep-hs-q009",
        "title": "生物大分子 (2)",
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
            "href": "#/t/bio/bio-prep-hs/P2.9",
            "label": "P2.9 孟德尔遗传",
            "topicId": "bio-prep-hs:P2.9"
          }
        ]
      },
      {
        "id": "bio-prep-hs-q010",
        "title": "细胞结构 (3)",
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
            "href": "#/t/bio/bio-prep-hs/P2.10",
            "label": "P2.10 DNA 与蛋白质合成入门",
            "topicId": "bio-prep-hs:P2.10"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-prep-hs-q011",
    "title": "P2.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "科学方法与实验设计 实验数据",
      "text": "研究小组记录与「科学方法与实验设计」相关的测量。",
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
        "href": "#/t/bio/bio-prep-hs/P2.11",
        "label": "P2.11 自然选择入门",
        "topicId": "bio-prep-hs:P2.11"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q012",
    "title": "P2.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「生物大分子」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-prep-hs/P2.12",
        "label": "P2.12 生态层级与能量流",
        "topicId": "bio-prep-hs:P2.12"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q013",
    "title": "P2.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞结构」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.13",
        "label": "P2.13 人体系统概览",
        "topicId": "bio-prep-hs:P2.13"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q014",
    "title": "P2.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「细胞膜与运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.14",
        "label": "P2.14 生物多样性",
        "topicId": "bio-prep-hs:P2.14"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q015",
    "title": "P2.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「酶」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.1",
        "label": "P2.1 科学方法与实验设计",
        "topicId": "bio-prep-hs:P2.1"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q016",
    "title": "P2.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「光合作用概览」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.2",
        "label": "P2.2 生物大分子",
        "topicId": "bio-prep-hs:P2.2"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q017",
    "title": "P2.7 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "细胞呼吸概览 实验数据",
      "text": "研究小组记录与「细胞呼吸概览」相关的测量。",
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
        "href": "#/t/bio/bio-prep-hs/P2.3",
        "label": "P2.3 细胞结构",
        "topicId": "bio-prep-hs:P2.3"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q018",
    "title": "P2.8 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「有丝分裂与减数分裂」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-prep-hs/P2.4",
        "label": "P2.4 细胞膜与运输",
        "topicId": "bio-prep-hs:P2.4"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q019",
    "title": "P2.9 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「孟德尔遗传」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.5",
        "label": "P2.5 酶",
        "topicId": "bio-prep-hs:P2.5"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q020",
    "title": "P2.10 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「DNA 与蛋白质合成入门」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.6",
        "label": "P2.6 光合作用概览",
        "topicId": "bio-prep-hs:P2.6"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q021",
    "title": "P2.11 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「自然选择入门」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.7",
        "label": "P2.7 细胞呼吸概览",
        "topicId": "bio-prep-hs:P2.7"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q022",
    "title": "P2.12 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生态层级与能量流」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.8",
        "label": "P2.8 有丝分裂与减数分裂",
        "topicId": "bio-prep-hs:P2.8"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q023",
    "title": "P2.13 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "人体系统概览 实验数据",
      "text": "研究小组记录与「人体系统概览」相关的测量。",
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
        "href": "#/t/bio/bio-prep-hs/P2.9",
        "label": "P2.9 孟德尔遗传",
        "topicId": "bio-prep-hs:P2.9"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q024",
    "title": "P2.14 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「生物多样性」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-prep-hs/P2.10",
        "label": "P2.10 DNA 与蛋白质合成入门",
        "topicId": "bio-prep-hs:P2.10"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q025",
    "title": "P2.1 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「科学方法与实验设计」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.11",
        "label": "P2.11 自然选择入门",
        "topicId": "bio-prep-hs:P2.11"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q026",
    "title": "P2.2 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「生物大分子」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.12",
        "label": "P2.12 生态层级与能量流",
        "topicId": "bio-prep-hs:P2.12"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q027",
    "title": "P2.3 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「细胞结构」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.13",
        "label": "P2.13 人体系统概览",
        "topicId": "bio-prep-hs:P2.13"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q028",
    "title": "P2.4 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞膜与运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.14",
        "label": "P2.14 生物多样性",
        "topicId": "bio-prep-hs:P2.14"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q029",
    "title": "P2.5 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "酶 实验数据",
      "text": "研究小组记录与「酶」相关的测量。",
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
        "href": "#/t/bio/bio-prep-hs/P2.1",
        "label": "P2.1 科学方法与实验设计",
        "topicId": "bio-prep-hs:P2.1"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q030",
    "title": "P2.6 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。"
    },
    "stem": "与「光合作用概览」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-prep-hs/P2.2",
        "label": "P2.2 生物大分子",
        "topicId": "bio-prep-hs:P2.2"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q031",
    "title": "P2.7 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞呼吸概览」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.3",
        "label": "P2.3 细胞结构",
        "topicId": "bio-prep-hs:P2.3"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q032",
    "title": "P2.8 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「有丝分裂与减数分裂」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.4",
        "label": "P2.4 细胞膜与运输",
        "topicId": "bio-prep-hs:P2.4"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q033",
    "title": "P2.9 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「孟德尔遗传」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.5",
        "label": "P2.5 酶",
        "topicId": "bio-prep-hs:P2.5"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q034",
    "title": "P2.10 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「DNA 与蛋白质合成入门」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.6",
        "label": "P2.6 光合作用概览",
        "topicId": "bio-prep-hs:P2.6"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q035",
    "title": "P2.11 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "自然选择入门 实验数据",
      "text": "研究小组记录与「自然选择入门」相关的测量。",
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
        "href": "#/t/bio/bio-prep-hs/P2.7",
        "label": "P2.7 细胞呼吸概览",
        "topicId": "bio-prep-hs:P2.7"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q036",
    "title": "P2.12 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。"
    },
    "stem": "与「生态层级与能量流」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-prep-hs/P2.8",
        "label": "P2.8 有丝分裂与减数分裂",
        "topicId": "bio-prep-hs:P2.8"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q037",
    "title": "P2.13 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「人体系统概览」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.9",
        "label": "P2.9 孟德尔遗传",
        "topicId": "bio-prep-hs:P2.9"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q038",
    "title": "P2.14 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「生物多样性」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.10",
        "label": "P2.10 DNA 与蛋白质合成入门",
        "topicId": "bio-prep-hs:P2.10"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q039",
    "title": "P2.1 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「科学方法与实验设计」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.11",
        "label": "P2.11 自然选择入门",
        "topicId": "bio-prep-hs:P2.11"
      }
    ]
  },
  {
    "id": "bio-prep-hs-q040",
    "title": "P2.2 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生物大分子」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-prep-hs/P2.12",
        "label": "P2.12 生态层级与能量流",
        "topicId": "bio-prep-hs:P2.12"
      }
    ]
  }
];
