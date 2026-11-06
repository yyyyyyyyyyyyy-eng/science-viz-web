/** Practice bank for bio-u7 */
export const UNIT_REF = {
  "id": "bio-u7",
  "code": "7",
  "titleZh": "自然选择",
  "titleEn": "Natural Selection",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u7-1": {
    "title": "自然选择导论 · 刺激材料",
    "text": "下列数据与图示与「自然选择导论」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
    "title": "自然选择 · 刺激材料",
    "text": "下列数据与图示与「自然选择」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
    "title": "人工选择 · 刺激材料",
    "text": "下列数据与图示与「人工选择」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-bio-u7-1",
    "stimulus": {
      "title": "自然选择导论 · 刺激材料",
      "text": "下列数据与图示与「自然选择导论」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "title": "自然选择导论 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「自然选择导论」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u7/7.1",
            "label": "7.1 自然选择导论",
            "topicId": "bio-u7:7.1"
          }
        ]
      },
      {
        "id": "bio-u7-q002",
        "title": "自然选择 (2)",
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
            "href": "#/t/bio/bio-u7/7.2",
            "label": "7.2 自然选择",
            "topicId": "bio-u7:7.2"
          }
        ]
      },
      {
        "id": "bio-u7-q003",
        "title": "人工选择 (3)",
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
            "href": "#/t/bio/bio-u7/7.3",
            "label": "7.3 人工选择",
            "topicId": "bio-u7:7.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u7-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-bio-u7-2",
    "stimulus": {
      "title": "自然选择 · 刺激材料",
      "text": "下列数据与图示与「自然选择」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "title": "自然选择导论 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「自然选择导论」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u7/7.4",
            "label": "7.4 群体遗传",
            "topicId": "bio-u7:7.4"
          }
        ]
      },
      {
        "id": "bio-u7-q005",
        "title": "自然选择 (2)",
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
            "href": "#/t/bio/bio-u7/7.5",
            "label": "7.5 哈代–温伯格",
            "topicId": "bio-u7:7.5"
          }
        ]
      },
      {
        "id": "bio-u7-q006",
        "title": "人工选择 (3)",
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
            "href": "#/t/bio/bio-u7/7.6",
            "label": "7.6 进化证据",
            "topicId": "bio-u7:7.6"
          }
        ]
      },
      {
        "id": "bio-u7-q007",
        "title": "群体遗传 (4)",
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
            "href": "#/t/bio/bio-u7/7.7",
            "label": "7.7 共同祖先",
            "topicId": "bio-u7:7.7"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u7-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-bio-u7-3",
    "stimulus": {
      "title": "人工选择 · 刺激材料",
      "text": "下列数据与图示与「人工选择」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
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
        "title": "自然选择导论 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「自然选择导论」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u7/7.8",
            "label": "7.8 延续与变化",
            "topicId": "bio-u7:7.8"
          }
        ]
      },
      {
        "id": "bio-u7-q009",
        "title": "自然选择 (2)",
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
            "href": "#/t/bio/bio-u7/7.9",
            "label": "7.9 系统发生",
            "topicId": "bio-u7:7.9"
          }
        ]
      },
      {
        "id": "bio-u7-q010",
        "title": "人工选择 (3)",
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
            "href": "#/t/bio/bio-u7/7.10",
            "label": "7.10 物种形成",
            "topicId": "bio-u7:7.10"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u7-q011",
    "title": "7.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "自然选择导论 实验数据",
      "text": "研究小组记录与「自然选择导论」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q012",
    "title": "7.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「自然选择」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 生命起源多样性",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q013",
    "title": "7.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「人工选择」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q014",
    "title": "7.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「群体遗传」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q015",
    "title": "7.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「哈代–温伯格」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q016",
    "title": "7.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「进化证据」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q017",
    "title": "7.7 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "共同祖先 实验数据",
      "text": "研究小组记录与「共同祖先」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q018",
    "title": "7.8 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「延续与变化」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q019",
    "title": "7.9 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「系统发生」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q020",
    "title": "7.10 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「物种形成」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q021",
    "title": "7.11 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「灭绝」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q022",
    "title": "7.12 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生命起源多样性」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q023",
    "title": "7.13 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "生命起源 实验数据",
      "text": "研究小组记录与「生命起源」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q024",
    "title": "7.1 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「自然选择导论」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q025",
    "title": "7.2 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「自然选择」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 生命起源多样性",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q026",
    "title": "7.3 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「人工选择」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q027",
    "title": "7.4 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「群体遗传」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q028",
    "title": "7.5 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「哈代–温伯格」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q029",
    "title": "7.6 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "进化证据 实验数据",
      "text": "研究小组记录与「进化证据」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q030",
    "title": "7.7 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。"
    },
    "stem": "与「共同祖先」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q031",
    "title": "7.8 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「延续与变化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q032",
    "title": "7.9 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「系统发生」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q033",
    "title": "7.10 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「物种形成」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q034",
    "title": "7.11 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「灭绝」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q035",
    "title": "7.12 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "生命起源多样性 实验数据",
      "text": "研究小组记录与「生命起源多样性」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q036",
    "title": "7.13 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。"
    },
    "stem": "与「生命起源」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q037",
    "title": "7.1 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「自然选择导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q038",
    "title": "7.2 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「自然选择」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 生命起源多样性",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q039",
    "title": "7.3 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「人工选择」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q040",
    "title": "7.4 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「群体遗传」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q041",
    "title": "7.5 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "哈代–温伯格 实验数据",
      "text": "研究小组记录与「哈代–温伯格」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q042",
    "title": "7.6 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「进化证据」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q043",
    "title": "7.7 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「共同祖先」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q044",
    "title": "7.8 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「延续与变化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q045",
    "title": "7.9 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「系统发生」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q046",
    "title": "7.10 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「物种形成」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q047",
    "title": "7.11 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "灭绝 实验数据",
      "text": "研究小组记录与「灭绝」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q048",
    "title": "7.12 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「生命起源多样性」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q049",
    "title": "7.13 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生命起源」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q050",
    "title": "7.1 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「自然选择导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q051",
    "title": "7.2 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「自然选择」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 生命起源多样性",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q052",
    "title": "7.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「人工选择」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q053",
    "title": "7.4 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "群体遗传 实验数据",
      "text": "研究小组记录与「群体遗传」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q054",
    "title": "7.5 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「哈代–温伯格」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q055",
    "title": "7.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「进化证据」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q056",
    "title": "7.7 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「共同祖先」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q057",
    "title": "7.8 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「延续与变化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q058",
    "title": "7.9 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「系统发生」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q059",
    "title": "7.10 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "物种形成 实验数据",
      "text": "研究小组记录与「物种形成」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q060",
    "title": "7.11 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。"
    },
    "stem": "与「灭绝」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q061",
    "title": "7.12 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「生命起源多样性」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q062",
    "title": "7.13 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「生命起源」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q063",
    "title": "7.1 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「自然选择导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q064",
    "title": "7.2 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「自然选择」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 生命起源多样性",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q065",
    "title": "7.3 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "人工选择 实验数据",
      "text": "研究小组记录与「人工选择」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q066",
    "title": "7.4 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。"
    },
    "stem": "与「群体遗传」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q067",
    "title": "7.5 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「哈代–温伯格」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择",
        "topicId": "bio-u7:7.2"
      }
    ]
  },
  {
    "id": "bio-u7-q068",
    "title": "7.6 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「进化证据」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.3",
        "label": "7.3 人工选择",
        "topicId": "bio-u7:7.3"
      }
    ]
  },
  {
    "id": "bio-u7-q069",
    "title": "7.7 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「共同祖先」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.4",
        "label": "7.4 群体遗传",
        "topicId": "bio-u7:7.4"
      }
    ]
  },
  {
    "id": "bio-u7-q070",
    "title": "7.8 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「延续与变化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.5",
        "label": "7.5 哈代–温伯格",
        "topicId": "bio-u7:7.5"
      }
    ]
  },
  {
    "id": "bio-u7-q071",
    "title": "7.9 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "系统发生 实验数据",
      "text": "研究小组记录与「系统发生」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.6",
        "label": "7.6 进化证据",
        "topicId": "bio-u7:7.6"
      }
    ]
  },
  {
    "id": "bio-u7-q072",
    "title": "7.10 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「物种形成」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.7",
        "label": "7.7 共同祖先",
        "topicId": "bio-u7:7.7"
      }
    ]
  },
  {
    "id": "bio-u7-q073",
    "title": "7.11 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「灭绝」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.8",
        "label": "7.8 延续与变化",
        "topicId": "bio-u7:7.8"
      }
    ]
  },
  {
    "id": "bio-u7-q074",
    "title": "7.12 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「生命起源多样性」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.9",
        "label": "7.9 系统发生",
        "topicId": "bio-u7:7.9"
      }
    ]
  },
  {
    "id": "bio-u7-q075",
    "title": "7.13 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「生命起源」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.10",
        "label": "7.10 物种形成",
        "topicId": "bio-u7:7.10"
      }
    ]
  },
  {
    "id": "bio-u7-q076",
    "title": "7.1 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「自然选择导论」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.11",
        "label": "7.11 灭绝",
        "topicId": "bio-u7:7.11"
      }
    ]
  },
  {
    "id": "bio-u7-q077",
    "title": "7.2 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "自然选择 实验数据",
      "text": "研究小组记录与「自然选择」相关的测量。",
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
        "href": "#/t/bio/bio-u7/7.12",
        "label": "7.12 生命起源多样性",
        "topicId": "bio-u7:7.12"
      }
    ]
  },
  {
    "id": "bio-u7-q078",
    "title": "7.3 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「人工选择」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u7/7.13",
        "label": "7.13 生命起源",
        "topicId": "bio-u7:7.13"
      }
    ]
  },
  {
    "id": "bio-u7-q079",
    "title": "7.4 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「群体遗传」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.1",
        "label": "7.1 自然选择导论",
        "topicId": "bio-u7:7.1"
      }
    ]
  },
  {
    "id": "bio-u7-q080",
    "title": "7.5 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「哈代–温伯格」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u7/7.2",
        "label": "7.2 自然选择",
        "topicId": "bio-u7:7.2"
      }
    ]
  }
];
