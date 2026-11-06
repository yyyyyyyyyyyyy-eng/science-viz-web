/** Practice bank for bio-u8 */
export const UNIT_REF = {
  "id": "bio-u8",
  "code": "8",
  "titleZh": "生态学",
  "titleEn": "Ecology",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u8-1": {
    "title": "环境响应 · 刺激材料",
    "text": "下列数据与图示与「环境响应」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
    "title": "能量流 · 刺激材料",
    "text": "下列数据与图示与「能量流」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
    "title": "种群生态 · 刺激材料",
    "text": "下列数据与图示与「种群生态」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-bio-u8-1",
    "stimulus": {
      "title": "环境响应 · 刺激材料",
      "text": "下列数据与图示与「环境响应」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "title": "环境响应 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「环境响应」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u8/8.1",
            "label": "8.1 环境响应",
            "topicId": "bio-u8:8.1"
          }
        ]
      },
      {
        "id": "bio-u8-q002",
        "title": "能量流 (2)",
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
            "href": "#/t/bio/bio-u8/8.2",
            "label": "8.2 能量流",
            "topicId": "bio-u8:8.2"
          }
        ]
      },
      {
        "id": "bio-u8-q003",
        "title": "种群生态 (3)",
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
            "href": "#/t/bio/bio-u8/8.3",
            "label": "8.3 种群生态",
            "topicId": "bio-u8:8.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u8-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-bio-u8-2",
    "stimulus": {
      "title": "能量流 · 刺激材料",
      "text": "下列数据与图示与「能量流」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "title": "环境响应 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「环境响应」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u8/8.4",
            "label": "8.4 密度效应",
            "topicId": "bio-u8:8.4"
          }
        ]
      },
      {
        "id": "bio-u8-q005",
        "title": "能量流 (2)",
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
            "href": "#/t/bio/bio-u8/8.5",
            "label": "8.5 群落生态",
            "topicId": "bio-u8:8.5"
          }
        ]
      },
      {
        "id": "bio-u8-q006",
        "title": "种群生态 (3)",
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
            "href": "#/t/bio/bio-u8/8.6",
            "label": "8.6 生物多样性",
            "topicId": "bio-u8:8.6"
          }
        ]
      },
      {
        "id": "bio-u8-q007",
        "title": "密度效应 (4)",
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
            "href": "#/t/bio/bio-u8/8.7",
            "label": "8.7 生态系统扰动",
            "topicId": "bio-u8:8.7"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u8-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-bio-u8-3",
    "stimulus": {
      "title": "种群生态 · 刺激材料",
      "text": "下列数据与图示与「种群生态」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "title": "环境响应 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「环境响应」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u8/8.1",
            "label": "8.1 环境响应",
            "topicId": "bio-u8:8.1"
          }
        ]
      },
      {
        "id": "bio-u8-q009",
        "title": "能量流 (2)",
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
            "href": "#/t/bio/bio-u8/8.2",
            "label": "8.2 能量流",
            "topicId": "bio-u8:8.2"
          }
        ]
      },
      {
        "id": "bio-u8-q010",
        "title": "种群生态 (3)",
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
            "href": "#/t/bio/bio-u8/8.3",
            "label": "8.3 种群生态",
            "topicId": "bio-u8:8.3"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u8-q011",
    "title": "8.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "环境响应 实验数据",
      "text": "研究小组记录与「环境响应」相关的测量。",
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
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q012",
    "title": "8.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「能量流」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q013",
    "title": "8.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q014",
    "title": "8.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q015",
    "title": "8.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「群落生态」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q016",
    "title": "8.6 论证",
    "type": "frq",
    "difficulty": "难",
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
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q017",
    "title": "8.7 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "生态系统扰动 实验数据",
      "text": "研究小组记录与「生态系统扰动」相关的测量。",
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
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q018",
    "title": "8.1 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「环境响应」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q019",
    "title": "8.2 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「能量流」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q020",
    "title": "8.3 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q021",
    "title": "8.4 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q022",
    "title": "8.5 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「群落生态」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q023",
    "title": "8.6 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "生物多样性 实验数据",
      "text": "研究小组记录与「生物多样性」相关的测量。",
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
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q024",
    "title": "8.7 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「生态系统扰动」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q025",
    "title": "8.1 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「环境响应」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q026",
    "title": "8.2 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「能量流」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q027",
    "title": "8.3 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q028",
    "title": "8.4 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q029",
    "title": "8.5 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "群落生态 实验数据",
      "text": "研究小组记录与「群落生态」相关的测量。",
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
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q030",
    "title": "8.6 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "foodWeb"
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
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q031",
    "title": "8.7 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生态系统扰动」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q032",
    "title": "8.1 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「环境响应」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q033",
    "title": "8.2 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「能量流」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q034",
    "title": "8.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q035",
    "title": "8.4 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "密度效应 实验数据",
      "text": "研究小组记录与「密度效应」相关的测量。",
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
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q036",
    "title": "8.5 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。"
    },
    "stem": "与「群落生态」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q037",
    "title": "8.6 论证",
    "type": "frq",
    "difficulty": "难",
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
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q038",
    "title": "8.7 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「生态系统扰动」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q039",
    "title": "8.1 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「环境响应」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q040",
    "title": "8.2 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「能量流」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q041",
    "title": "8.3 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "种群生态 实验数据",
      "text": "研究小组记录与「种群生态」相关的测量。",
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
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q042",
    "title": "8.4 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「密度效应」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q043",
    "title": "8.5 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「群落生态」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q044",
    "title": "8.6 论证",
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
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q045",
    "title": "8.7 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「生态系统扰动」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q046",
    "title": "8.1 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「环境响应」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q047",
    "title": "8.2 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "能量流 实验数据",
      "text": "研究小组记录与「能量流」相关的测量。",
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
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q048",
    "title": "8.3 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「种群生态」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q049",
    "title": "8.4 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动",
        "topicId": "bio-u8:8.7"
      }
    ]
  },
  {
    "id": "bio-u8-q050",
    "title": "8.5 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「群落生态」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.1",
        "label": "8.1 环境响应",
        "topicId": "bio-u8:8.1"
      }
    ]
  },
  {
    "id": "bio-u8-q051",
    "title": "8.6 论证",
    "type": "frq",
    "difficulty": "中",
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
        "href": "#/t/bio/bio-u8/8.2",
        "label": "8.2 能量流",
        "topicId": "bio-u8:8.2"
      }
    ]
  },
  {
    "id": "bio-u8-q052",
    "title": "8.7 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生态系统扰动」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.3",
        "label": "8.3 种群生态",
        "topicId": "bio-u8:8.3"
      }
    ]
  },
  {
    "id": "bio-u8-q053",
    "title": "8.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "环境响应 实验数据",
      "text": "研究小组记录与「环境响应」相关的测量。",
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
        "href": "#/t/bio/bio-u8/8.4",
        "label": "8.4 密度效应",
        "topicId": "bio-u8:8.4"
      }
    ]
  },
  {
    "id": "bio-u8-q054",
    "title": "8.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「能量流」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u8/8.5",
        "label": "8.5 群落生态",
        "topicId": "bio-u8:8.5"
      }
    ]
  },
  {
    "id": "bio-u8-q055",
    "title": "8.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「种群生态」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.6",
        "label": "8.6 生物多样性",
        "topicId": "bio-u8:8.6"
      }
    ]
  },
  {
    "id": "bio-u8-q056",
    "title": "8.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「密度效应」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u8/8.7",
        "label": "8.7 生态系统扰动",
        "topicId": "bio-u8:8.7"
      }
    ]
  }
];
