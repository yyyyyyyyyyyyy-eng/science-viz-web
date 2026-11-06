/** Practice bank for bio-u1 */
export const UNIT_REF = {
  "id": "bio-u1",
  "code": "1",
  "titleZh": "生命化学",
  "titleEn": "Chemistry of Life",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u1-1": {
    "title": "水与生命 · 刺激材料",
    "text": "下列数据与图示与「水与生命」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
  "stim-bio-u1-2": {
    "title": "元素与大分子 · 刺激材料",
    "text": "下列数据与图示与「元素与大分子」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "pathway"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u1-3": {
    "title": "生物大分子导论 · 刺激材料",
    "text": "下列数据与图示与「生物大分子导论」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
    "id": "bio-u1-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-bio-u1-1",
    "stimulus": {
      "title": "水与生命 · 刺激材料",
      "text": "下列数据与图示与「水与生命」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "id": "bio-u1-q001",
        "title": "水与生命 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「水与生命」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u1/1.1",
            "label": "1.1 水与生命",
            "topicId": "bio-u1:1.1"
          }
        ]
      },
      {
        "id": "bio-u1-q002",
        "title": "元素与大分子 (2)",
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
            "href": "#/t/bio/bio-u1/1.2",
            "label": "1.2 元素与大分子",
            "topicId": "bio-u1:1.2"
          }
        ]
      },
      {
        "id": "bio-u1-q003",
        "title": "生物大分子导论 (3)",
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
            "href": "#/t/bio/bio-u1/1.3",
            "label": "1.3 生物大分子导论",
            "topicId": "bio-u1:1.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u1-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-bio-u1-2",
    "stimulus": {
      "title": "元素与大分子 · 刺激材料",
      "text": "下列数据与图示与「元素与大分子」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "id": "bio-u1-q004",
        "title": "水与生命 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「水与生命」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u1/1.4",
            "label": "1.4 蛋白质性质",
            "topicId": "bio-u1:1.4"
          }
        ]
      },
      {
        "id": "bio-u1-q005",
        "title": "元素与大分子 (2)",
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
            "href": "#/t/bio/bio-u1/1.5",
            "label": "1.5 核酸",
            "topicId": "bio-u1:1.5"
          }
        ]
      },
      {
        "id": "bio-u1-q006",
        "title": "生物大分子导论 (3)",
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
            "href": "#/t/bio/bio-u1/1.6",
            "label": "1.6 酶结构与功能",
            "topicId": "bio-u1:1.6"
          }
        ]
      },
      {
        "id": "bio-u1-q007",
        "title": "蛋白质性质 (4)",
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
            "href": "#/t/bio/bio-u1/1.1",
            "label": "1.1 水与生命",
            "topicId": "bio-u1:1.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u1-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-bio-u1-3",
    "stimulus": {
      "title": "生物大分子导论 · 刺激材料",
      "text": "下列数据与图示与「生物大分子导论」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "id": "bio-u1-q008",
        "title": "水与生命 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「水与生命」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u1/1.2",
            "label": "1.2 元素与大分子",
            "topicId": "bio-u1:1.2"
          }
        ]
      },
      {
        "id": "bio-u1-q009",
        "title": "元素与大分子 (2)",
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
            "href": "#/t/bio/bio-u1/1.3",
            "label": "1.3 生物大分子导论",
            "topicId": "bio-u1:1.3"
          }
        ]
      },
      {
        "id": "bio-u1-q010",
        "title": "生物大分子导论 (3)",
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
            "href": "#/t/bio/bio-u1/1.4",
            "label": "1.4 蛋白质性质",
            "topicId": "bio-u1:1.4"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u1-q011",
    "title": "1.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水与生命 实验数据",
      "text": "研究小组记录与「水与生命」相关的测量。",
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
        "href": "#/t/bio/bio-u1/1.5",
        "label": "1.5 核酸",
        "topicId": "bio-u1:1.5"
      }
    ]
  },
  {
    "id": "bio-u1-q012",
    "title": "1.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「元素与大分子」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u1/1.6",
        "label": "1.6 酶结构与功能",
        "topicId": "bio-u1:1.6"
      }
    ]
  },
  {
    "id": "bio-u1-q013",
    "title": "1.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生物大分子导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.1",
        "label": "1.1 水与生命",
        "topicId": "bio-u1:1.1"
      }
    ]
  },
  {
    "id": "bio-u1-q014",
    "title": "1.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「蛋白质性质」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.2",
        "label": "1.2 元素与大分子",
        "topicId": "bio-u1:1.2"
      }
    ]
  },
  {
    "id": "bio-u1-q015",
    "title": "1.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「核酸」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.3",
        "label": "1.3 生物大分子导论",
        "topicId": "bio-u1:1.3"
      }
    ]
  },
  {
    "id": "bio-u1-q016",
    "title": "1.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「酶结构与功能」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.4",
        "label": "1.4 蛋白质性质",
        "topicId": "bio-u1:1.4"
      }
    ]
  },
  {
    "id": "bio-u1-q017",
    "title": "1.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水与生命 实验数据",
      "text": "研究小组记录与「水与生命」相关的测量。",
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
        "href": "#/t/bio/bio-u1/1.5",
        "label": "1.5 核酸",
        "topicId": "bio-u1:1.5"
      }
    ]
  },
  {
    "id": "bio-u1-q018",
    "title": "1.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「元素与大分子」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u1/1.6",
        "label": "1.6 酶结构与功能",
        "topicId": "bio-u1:1.6"
      }
    ]
  },
  {
    "id": "bio-u1-q019",
    "title": "1.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生物大分子导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.1",
        "label": "1.1 水与生命",
        "topicId": "bio-u1:1.1"
      }
    ]
  },
  {
    "id": "bio-u1-q020",
    "title": "1.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「蛋白质性质」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.2",
        "label": "1.2 元素与大分子",
        "topicId": "bio-u1:1.2"
      }
    ]
  },
  {
    "id": "bio-u1-q021",
    "title": "1.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「核酸」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.3",
        "label": "1.3 生物大分子导论",
        "topicId": "bio-u1:1.3"
      }
    ]
  },
  {
    "id": "bio-u1-q022",
    "title": "1.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「酶结构与功能」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.4",
        "label": "1.4 蛋白质性质",
        "topicId": "bio-u1:1.4"
      }
    ]
  },
  {
    "id": "bio-u1-q023",
    "title": "1.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水与生命 实验数据",
      "text": "研究小组记录与「水与生命」相关的测量。",
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
        "href": "#/t/bio/bio-u1/1.5",
        "label": "1.5 核酸",
        "topicId": "bio-u1:1.5"
      }
    ]
  },
  {
    "id": "bio-u1-q024",
    "title": "1.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「元素与大分子」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u1/1.6",
        "label": "1.6 酶结构与功能",
        "topicId": "bio-u1:1.6"
      }
    ]
  },
  {
    "id": "bio-u1-q025",
    "title": "1.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生物大分子导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.1",
        "label": "1.1 水与生命",
        "topicId": "bio-u1:1.1"
      }
    ]
  },
  {
    "id": "bio-u1-q026",
    "title": "1.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「蛋白质性质」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.2",
        "label": "1.2 元素与大分子",
        "topicId": "bio-u1:1.2"
      }
    ]
  },
  {
    "id": "bio-u1-q027",
    "title": "1.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「核酸」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.3",
        "label": "1.3 生物大分子导论",
        "topicId": "bio-u1:1.3"
      }
    ]
  },
  {
    "id": "bio-u1-q028",
    "title": "1.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「酶结构与功能」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.4",
        "label": "1.4 蛋白质性质",
        "topicId": "bio-u1:1.4"
      }
    ]
  },
  {
    "id": "bio-u1-q029",
    "title": "1.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水与生命 实验数据",
      "text": "研究小组记录与「水与生命」相关的测量。",
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
        "href": "#/t/bio/bio-u1/1.5",
        "label": "1.5 核酸",
        "topicId": "bio-u1:1.5"
      }
    ]
  },
  {
    "id": "bio-u1-q030",
    "title": "1.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。"
    },
    "stem": "与「元素与大分子」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u1/1.6",
        "label": "1.6 酶结构与功能",
        "topicId": "bio-u1:1.6"
      }
    ]
  },
  {
    "id": "bio-u1-q031",
    "title": "1.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生物大分子导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.1",
        "label": "1.1 水与生命",
        "topicId": "bio-u1:1.1"
      }
    ]
  },
  {
    "id": "bio-u1-q032",
    "title": "1.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「蛋白质性质」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.2",
        "label": "1.2 元素与大分子",
        "topicId": "bio-u1:1.2"
      }
    ]
  },
  {
    "id": "bio-u1-q033",
    "title": "1.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「核酸」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.3",
        "label": "1.3 生物大分子导论",
        "topicId": "bio-u1:1.3"
      }
    ]
  },
  {
    "id": "bio-u1-q034",
    "title": "1.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「酶结构与功能」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.4",
        "label": "1.4 蛋白质性质",
        "topicId": "bio-u1:1.4"
      }
    ]
  },
  {
    "id": "bio-u1-q035",
    "title": "1.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水与生命 实验数据",
      "text": "研究小组记录与「水与生命」相关的测量。",
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
        "href": "#/t/bio/bio-u1/1.5",
        "label": "1.5 核酸",
        "topicId": "bio-u1:1.5"
      }
    ]
  },
  {
    "id": "bio-u1-q036",
    "title": "1.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。"
    },
    "stem": "与「元素与大分子」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u1/1.6",
        "label": "1.6 酶结构与功能",
        "topicId": "bio-u1:1.6"
      }
    ]
  },
  {
    "id": "bio-u1-q037",
    "title": "1.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生物大分子导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.1",
        "label": "1.1 水与生命",
        "topicId": "bio-u1:1.1"
      }
    ]
  },
  {
    "id": "bio-u1-q038",
    "title": "1.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「蛋白质性质」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.2",
        "label": "1.2 元素与大分子",
        "topicId": "bio-u1:1.2"
      }
    ]
  },
  {
    "id": "bio-u1-q039",
    "title": "1.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「核酸」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.3",
        "label": "1.3 生物大分子导论",
        "topicId": "bio-u1:1.3"
      }
    ]
  },
  {
    "id": "bio-u1-q040",
    "title": "1.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「酶结构与功能」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.4",
        "label": "1.4 蛋白质性质",
        "topicId": "bio-u1:1.4"
      }
    ]
  },
  {
    "id": "bio-u1-q041",
    "title": "1.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水与生命 实验数据",
      "text": "研究小组记录与「水与生命」相关的测量。",
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
        "href": "#/t/bio/bio-u1/1.5",
        "label": "1.5 核酸",
        "topicId": "bio-u1:1.5"
      }
    ]
  },
  {
    "id": "bio-u1-q042",
    "title": "1.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「元素与大分子」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u1/1.6",
        "label": "1.6 酶结构与功能",
        "topicId": "bio-u1:1.6"
      }
    ]
  },
  {
    "id": "bio-u1-q043",
    "title": "1.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生物大分子导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.1",
        "label": "1.1 水与生命",
        "topicId": "bio-u1:1.1"
      }
    ]
  },
  {
    "id": "bio-u1-q044",
    "title": "1.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「蛋白质性质」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.2",
        "label": "1.2 元素与大分子",
        "topicId": "bio-u1:1.2"
      }
    ]
  },
  {
    "id": "bio-u1-q045",
    "title": "1.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「核酸」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.3",
        "label": "1.3 生物大分子导论",
        "topicId": "bio-u1:1.3"
      }
    ]
  },
  {
    "id": "bio-u1-q046",
    "title": "1.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「酶结构与功能」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.4",
        "label": "1.4 蛋白质性质",
        "topicId": "bio-u1:1.4"
      }
    ]
  },
  {
    "id": "bio-u1-q047",
    "title": "1.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水与生命 实验数据",
      "text": "研究小组记录与「水与生命」相关的测量。",
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
        "href": "#/t/bio/bio-u1/1.5",
        "label": "1.5 核酸",
        "topicId": "bio-u1:1.5"
      }
    ]
  },
  {
    "id": "bio-u1-q048",
    "title": "1.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「元素与大分子」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u1/1.6",
        "label": "1.6 酶结构与功能",
        "topicId": "bio-u1:1.6"
      }
    ]
  },
  {
    "id": "bio-u1-q049",
    "title": "1.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生物大分子导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.1",
        "label": "1.1 水与生命",
        "topicId": "bio-u1:1.1"
      }
    ]
  },
  {
    "id": "bio-u1-q050",
    "title": "1.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「蛋白质性质」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.2",
        "label": "1.2 元素与大分子",
        "topicId": "bio-u1:1.2"
      }
    ]
  },
  {
    "id": "bio-u1-q051",
    "title": "1.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「核酸」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.3",
        "label": "1.3 生物大分子导论",
        "topicId": "bio-u1:1.3"
      }
    ]
  },
  {
    "id": "bio-u1-q052",
    "title": "1.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「酶结构与功能」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u1/1.4",
        "label": "1.4 蛋白质性质",
        "topicId": "bio-u1:1.4"
      }
    ]
  }
];
