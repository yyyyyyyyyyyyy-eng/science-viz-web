/** Practice bank for bio-u2 */
export const UNIT_REF = {
  "id": "bio-u2",
  "code": "2",
  "titleZh": "细胞结构与功能",
  "titleEn": "Cell Structure and Function",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u2-1": {
    "title": "细胞器与区隔化 · 刺激材料",
    "text": "下列数据与图示与「细胞器与区隔化」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "enzyme",
      "vmax": 42,
      "km": 1.2
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
  "stim-bio-u2-2": {
    "title": "细胞大小 · 刺激材料",
    "text": "下列数据与图示与「细胞大小」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "pedigree",
      "generations": [
        [
          {
            "id": "I-1",
            "sex": "m",
            "aff": false
          },
          {
            "id": "I-2",
            "sex": "f",
            "aff": true
          }
        ],
        [
          {
            "id": "II-1",
            "sex": "m",
            "aff": false
          },
          {
            "id": "II-2",
            "sex": "f",
            "aff": true
          },
          {
            "id": "II-3",
            "sex": "m",
            "aff": false
          }
        ]
      ]
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u2-3": {
    "title": "质膜 · 刺激材料",
    "text": "下列数据与图示与「质膜」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
    "diagram": {
      "kind": "punnett",
      "top": [
        "B",
        "b"
      ],
      "side": [
        "B",
        "b"
      ],
      "cells": [
        [
          "BB",
          "Bb"
        ],
        [
          "Bb",
          "bb"
        ]
      ]
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
    "id": "bio-u2-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-bio-u2-1",
    "stimulus": {
      "title": "细胞器与区隔化 · 刺激材料",
      "text": "下列数据与图示与「细胞器与区隔化」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
      "diagram": {
        "kind": "enzyme",
        "vmax": 42,
        "km": 1.2
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
        "id": "bio-u2-q001",
        "title": "细胞器与区隔化 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「细胞器与区隔化」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u2/2.1",
            "label": "2.1 细胞器与区隔化",
            "topicId": "bio-u2:2.1"
          }
        ]
      },
      {
        "id": "bio-u2-q002",
        "title": "细胞大小 (2)",
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
            "href": "#/t/bio/bio-u2/2.2",
            "label": "2.2 细胞大小",
            "topicId": "bio-u2:2.2"
          }
        ]
      },
      {
        "id": "bio-u2-q003",
        "title": "质膜 (3)",
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
            "href": "#/t/bio/bio-u2/2.3",
            "label": "2.3 质膜",
            "topicId": "bio-u2:2.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u2-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-bio-u2-2",
    "stimulus": {
      "title": "细胞大小 · 刺激材料",
      "text": "下列数据与图示与「细胞大小」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
      "diagram": {
        "kind": "pedigree",
        "generations": [
          [
            {
              "id": "I-1",
              "sex": "m",
              "aff": false
            },
            {
              "id": "I-2",
              "sex": "f",
              "aff": true
            }
          ],
          [
            {
              "id": "II-1",
              "sex": "m",
              "aff": false
            },
            {
              "id": "II-2",
              "sex": "f",
              "aff": true
            },
            {
              "id": "II-3",
              "sex": "m",
              "aff": false
            }
          ]
        ]
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-u2-q004",
        "title": "细胞器与区隔化 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「细胞器与区隔化」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u2/2.4",
            "label": "2.4 膜通透性",
            "topicId": "bio-u2:2.4"
          }
        ]
      },
      {
        "id": "bio-u2-q005",
        "title": "细胞大小 (2)",
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
            "href": "#/t/bio/bio-u2/2.5",
            "label": "2.5 膜运输",
            "topicId": "bio-u2:2.5"
          }
        ]
      },
      {
        "id": "bio-u2-q006",
        "title": "质膜 (3)",
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
            "href": "#/t/bio/bio-u2/2.6",
            "label": "2.6 促进扩散",
            "topicId": "bio-u2:2.6"
          }
        ]
      },
      {
        "id": "bio-u2-q007",
        "title": "膜通透性 (4)",
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
            "href": "#/t/bio/bio-u2/2.7",
            "label": "2.7 渗透与水势",
            "topicId": "bio-u2:2.7"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u2-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-bio-u2-3",
    "stimulus": {
      "title": "质膜 · 刺激材料",
      "text": "下列数据与图示与「质膜」相关。回答共享刺激下的各小题（原创改编，AP 风格）。",
      "diagram": {
        "kind": "punnett",
        "top": [
          "B",
          "b"
        ],
        "side": [
          "B",
          "b"
        ],
        "cells": [
          [
            "BB",
            "Bb"
          ],
          [
            "Bb",
            "bb"
          ]
        ]
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-u2-q008",
        "title": "细胞器与区隔化 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "指出刺激中与「细胞器与区隔化」最直接相关的趋势，并给出机制解释。",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u2/2.8",
            "label": "2.8 主动运输",
            "topicId": "bio-u2:2.8"
          }
        ]
      },
      {
        "id": "bio-u2-q009",
        "title": "细胞大小 (2)",
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
            "href": "#/t/bio/bio-u2/2.9",
            "label": "2.9 区隔化",
            "topicId": "bio-u2:2.9"
          }
        ]
      },
      {
        "id": "bio-u2-q010",
        "title": "质膜 (3)",
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
            "href": "#/t/bio/bio-u2/2.10",
            "label": "2.10 细胞区隔起源",
            "topicId": "bio-u2:2.10"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u2-q011",
    "title": "2.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "细胞器与区隔化 实验数据",
      "text": "研究小组记录与「细胞器与区隔化」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.1",
        "label": "2.1 细胞器与区隔化",
        "topicId": "bio-u2:2.1"
      }
    ]
  },
  {
    "id": "bio-u2-q012",
    "title": "2.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「细胞大小」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.2",
        "label": "2.2 细胞大小",
        "topicId": "bio-u2:2.2"
      }
    ]
  },
  {
    "id": "bio-u2-q013",
    "title": "2.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「质膜」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.3",
        "label": "2.3 质膜",
        "topicId": "bio-u2:2.3"
      }
    ]
  },
  {
    "id": "bio-u2-q014",
    "title": "2.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「膜通透性」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.4",
        "label": "2.4 膜通透性",
        "topicId": "bio-u2:2.4"
      }
    ]
  },
  {
    "id": "bio-u2-q015",
    "title": "2.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「膜运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.5",
        "label": "2.5 膜运输",
        "topicId": "bio-u2:2.5"
      }
    ]
  },
  {
    "id": "bio-u2-q016",
    "title": "2.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「促进扩散」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.6",
        "label": "2.6 促进扩散",
        "topicId": "bio-u2:2.6"
      }
    ]
  },
  {
    "id": "bio-u2-q017",
    "title": "2.7 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "渗透与水势 实验数据",
      "text": "研究小组记录与「渗透与水势」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.7",
        "label": "2.7 渗透与水势",
        "topicId": "bio-u2:2.7"
      }
    ]
  },
  {
    "id": "bio-u2-q018",
    "title": "2.8 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「主动运输」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.8",
        "label": "2.8 主动运输",
        "topicId": "bio-u2:2.8"
      }
    ]
  },
  {
    "id": "bio-u2-q019",
    "title": "2.9 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「区隔化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.9",
        "label": "2.9 区隔化",
        "topicId": "bio-u2:2.9"
      }
    ]
  },
  {
    "id": "bio-u2-q020",
    "title": "2.10 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「细胞区隔起源」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.10",
        "label": "2.10 细胞区隔起源",
        "topicId": "bio-u2:2.10"
      }
    ]
  },
  {
    "id": "bio-u2-q021",
    "title": "2.1 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「细胞器与区隔化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.1",
        "label": "2.1 细胞器与区隔化",
        "topicId": "bio-u2:2.1"
      }
    ]
  },
  {
    "id": "bio-u2-q022",
    "title": "2.2 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞大小」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.2",
        "label": "2.2 细胞大小",
        "topicId": "bio-u2:2.2"
      }
    ]
  },
  {
    "id": "bio-u2-q023",
    "title": "2.3 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "质膜 实验数据",
      "text": "研究小组记录与「质膜」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.3",
        "label": "2.3 质膜",
        "topicId": "bio-u2:2.3"
      }
    ]
  },
  {
    "id": "bio-u2-q024",
    "title": "2.4 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「膜通透性」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.4",
        "label": "2.4 膜通透性",
        "topicId": "bio-u2:2.4"
      }
    ]
  },
  {
    "id": "bio-u2-q025",
    "title": "2.5 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「膜运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.5",
        "label": "2.5 膜运输",
        "topicId": "bio-u2:2.5"
      }
    ]
  },
  {
    "id": "bio-u2-q026",
    "title": "2.6 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「促进扩散」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.6",
        "label": "2.6 促进扩散",
        "topicId": "bio-u2:2.6"
      }
    ]
  },
  {
    "id": "bio-u2-q027",
    "title": "2.7 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「渗透与水势」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.7",
        "label": "2.7 渗透与水势",
        "topicId": "bio-u2:2.7"
      }
    ]
  },
  {
    "id": "bio-u2-q028",
    "title": "2.8 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「主动运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.8",
        "label": "2.8 主动运输",
        "topicId": "bio-u2:2.8"
      }
    ]
  },
  {
    "id": "bio-u2-q029",
    "title": "2.9 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "区隔化 实验数据",
      "text": "研究小组记录与「区隔化」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.9",
        "label": "2.9 区隔化",
        "topicId": "bio-u2:2.9"
      }
    ]
  },
  {
    "id": "bio-u2-q030",
    "title": "2.10 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。"
    },
    "stem": "与「细胞区隔起源」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.10",
        "label": "2.10 细胞区隔起源",
        "topicId": "bio-u2:2.10"
      }
    ]
  },
  {
    "id": "bio-u2-q031",
    "title": "2.1 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞器与区隔化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.1",
        "label": "2.1 细胞器与区隔化",
        "topicId": "bio-u2:2.1"
      }
    ]
  },
  {
    "id": "bio-u2-q032",
    "title": "2.2 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「细胞大小」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.2",
        "label": "2.2 细胞大小",
        "topicId": "bio-u2:2.2"
      }
    ]
  },
  {
    "id": "bio-u2-q033",
    "title": "2.3 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「质膜」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.3",
        "label": "2.3 质膜",
        "topicId": "bio-u2:2.3"
      }
    ]
  },
  {
    "id": "bio-u2-q034",
    "title": "2.4 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「膜通透性」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.4",
        "label": "2.4 膜通透性",
        "topicId": "bio-u2:2.4"
      }
    ]
  },
  {
    "id": "bio-u2-q035",
    "title": "2.5 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "膜运输 实验数据",
      "text": "研究小组记录与「膜运输」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.5",
        "label": "2.5 膜运输",
        "topicId": "bio-u2:2.5"
      }
    ]
  },
  {
    "id": "bio-u2-q036",
    "title": "2.6 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。"
    },
    "stem": "与「促进扩散」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.6",
        "label": "2.6 促进扩散",
        "topicId": "bio-u2:2.6"
      }
    ]
  },
  {
    "id": "bio-u2-q037",
    "title": "2.7 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「渗透与水势」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.7",
        "label": "2.7 渗透与水势",
        "topicId": "bio-u2:2.7"
      }
    ]
  },
  {
    "id": "bio-u2-q038",
    "title": "2.8 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「主动运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.8",
        "label": "2.8 主动运输",
        "topicId": "bio-u2:2.8"
      }
    ]
  },
  {
    "id": "bio-u2-q039",
    "title": "2.9 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「区隔化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.9",
        "label": "2.9 区隔化",
        "topicId": "bio-u2:2.9"
      }
    ]
  },
  {
    "id": "bio-u2-q040",
    "title": "2.10 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞区隔起源」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.10",
        "label": "2.10 细胞区隔起源",
        "topicId": "bio-u2:2.10"
      }
    ]
  },
  {
    "id": "bio-u2-q041",
    "title": "2.1 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "细胞器与区隔化 实验数据",
      "text": "研究小组记录与「细胞器与区隔化」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.1",
        "label": "2.1 细胞器与区隔化",
        "topicId": "bio-u2:2.1"
      }
    ]
  },
  {
    "id": "bio-u2-q042",
    "title": "2.2 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。"
    },
    "stem": "与「细胞大小」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.2",
        "label": "2.2 细胞大小",
        "topicId": "bio-u2:2.2"
      }
    ]
  },
  {
    "id": "bio-u2-q043",
    "title": "2.3 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「质膜」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.3",
        "label": "2.3 质膜",
        "topicId": "bio-u2:2.3"
      }
    ]
  },
  {
    "id": "bio-u2-q044",
    "title": "2.4 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「膜通透性」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.4",
        "label": "2.4 膜通透性",
        "topicId": "bio-u2:2.4"
      }
    ]
  },
  {
    "id": "bio-u2-q045",
    "title": "2.5 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「膜运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.5",
        "label": "2.5 膜运输",
        "topicId": "bio-u2:2.5"
      }
    ]
  },
  {
    "id": "bio-u2-q046",
    "title": "2.6 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「促进扩散」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.6",
        "label": "2.6 促进扩散",
        "topicId": "bio-u2:2.6"
      }
    ]
  },
  {
    "id": "bio-u2-q047",
    "title": "2.7 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "渗透与水势 实验数据",
      "text": "研究小组记录与「渗透与水势」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.7",
        "label": "2.7 渗透与水势",
        "topicId": "bio-u2:2.7"
      }
    ]
  },
  {
    "id": "bio-u2-q048",
    "title": "2.8 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。"
    },
    "stem": "与「主动运输」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.8",
        "label": "2.8 主动运输",
        "topicId": "bio-u2:2.8"
      }
    ]
  },
  {
    "id": "bio-u2-q049",
    "title": "2.9 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「区隔化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.9",
        "label": "2.9 区隔化",
        "topicId": "bio-u2:2.9"
      }
    ]
  },
  {
    "id": "bio-u2-q050",
    "title": "2.10 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「细胞区隔起源」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.10",
        "label": "2.10 细胞区隔起源",
        "topicId": "bio-u2:2.10"
      }
    ]
  },
  {
    "id": "bio-u2-q051",
    "title": "2.1 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「细胞器与区隔化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.1",
        "label": "2.1 细胞器与区隔化",
        "topicId": "bio-u2:2.1"
      }
    ]
  },
  {
    "id": "bio-u2-q052",
    "title": "2.2 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞大小」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.2",
        "label": "2.2 细胞大小",
        "topicId": "bio-u2:2.2"
      }
    ]
  },
  {
    "id": "bio-u2-q053",
    "title": "2.3 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "质膜 实验数据",
      "text": "研究小组记录与「质膜」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.3",
        "label": "2.3 质膜",
        "topicId": "bio-u2:2.3"
      }
    ]
  },
  {
    "id": "bio-u2-q054",
    "title": "2.4 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。"
    },
    "stem": "与「膜通透性」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.4",
        "label": "2.4 膜通透性",
        "topicId": "bio-u2:2.4"
      }
    ]
  },
  {
    "id": "bio-u2-q055",
    "title": "2.5 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「膜运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.5",
        "label": "2.5 膜运输",
        "topicId": "bio-u2:2.5"
      }
    ]
  },
  {
    "id": "bio-u2-q056",
    "title": "2.6 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「促进扩散」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.6",
        "label": "2.6 促进扩散",
        "topicId": "bio-u2:2.6"
      }
    ]
  },
  {
    "id": "bio-u2-q057",
    "title": "2.7 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「渗透与水势」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.7",
        "label": "2.7 渗透与水势",
        "topicId": "bio-u2:2.7"
      }
    ]
  },
  {
    "id": "bio-u2-q058",
    "title": "2.8 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「主动运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.8",
        "label": "2.8 主动运输",
        "topicId": "bio-u2:2.8"
      }
    ]
  },
  {
    "id": "bio-u2-q059",
    "title": "2.9 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "区隔化 实验数据",
      "text": "研究小组记录与「区隔化」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.9",
        "label": "2.9 区隔化",
        "topicId": "bio-u2:2.9"
      }
    ]
  },
  {
    "id": "bio-u2-q060",
    "title": "2.10 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。"
    },
    "stem": "与「细胞区隔起源」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.10",
        "label": "2.10 细胞区隔起源",
        "topicId": "bio-u2:2.10"
      }
    ]
  },
  {
    "id": "bio-u2-q061",
    "title": "2.1 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「细胞器与区隔化」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.1",
        "label": "2.1 细胞器与区隔化",
        "topicId": "bio-u2:2.1"
      }
    ]
  },
  {
    "id": "bio-u2-q062",
    "title": "2.2 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「细胞大小」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.2",
        "label": "2.2 细胞大小",
        "topicId": "bio-u2:2.2"
      }
    ]
  },
  {
    "id": "bio-u2-q063",
    "title": "2.3 论证",
    "type": "frq",
    "difficulty": "中",
    "stem": "用 CED 语言解释「质膜」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.3",
        "label": "2.3 质膜",
        "topicId": "bio-u2:2.3"
      }
    ]
  },
  {
    "id": "bio-u2-q064",
    "title": "2.4 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「膜通透性」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.4",
        "label": "2.4 膜通透性",
        "topicId": "bio-u2:2.4"
      }
    ]
  },
  {
    "id": "bio-u2-q065",
    "title": "2.5 数据刺激",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "膜运输 实验数据",
      "text": "研究小组记录与「膜运输」相关的测量。",
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
        "href": "#/t/bio/bio-u2/2.5",
        "label": "2.5 膜运输",
        "topicId": "bio-u2:2.5"
      }
    ]
  },
  {
    "id": "bio-u2-q066",
    "title": "2.6 图示 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stimulus": {
      "title": "图示",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。"
    },
    "stem": "与「促进扩散」最直接相关的正确陈述是？",
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
        "href": "#/t/bio/bio-u2/2.6",
        "label": "2.6 促进扩散",
        "topicId": "bio-u2:2.6"
      }
    ]
  },
  {
    "id": "bio-u2-q067",
    "title": "2.7 论证",
    "type": "frq",
    "difficulty": "难",
    "stem": "用 CED 语言解释「渗透与水势」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.7",
        "label": "2.7 渗透与水势",
        "topicId": "bio-u2:2.7"
      }
    ]
  },
  {
    "id": "bio-u2-q068",
    "title": "2.8 论证",
    "type": "frq",
    "difficulty": "易",
    "stem": "用 CED 语言解释「主动运输」中一个因果关系，并给出一个可观测预测。",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。",
    "solution": "避免循环论证；预测需可证伪。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u2/2.8",
        "label": "2.8 主动运输",
        "topicId": "bio-u2:2.8"
      }
    ]
  }
];
