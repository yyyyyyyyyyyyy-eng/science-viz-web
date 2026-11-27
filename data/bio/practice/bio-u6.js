/** Practice bank for bio-u6 */
export const UNIT_REF = {
  "id": "bio-u6",
  "code": "6",
  "titleZh": "基因表达与调控 · gene expression and regulation",
  "titleEn": "Gene Expression and Regulation",
  "layer": "ap",
  "subject": "bio"
};
export const stimuli = {
  "stim-bio-u6-1": {
    "title": "DNA 与 RNA 结构 · 刺激材料 · DNA and RNA Structure: stimulus",
    "text": "下列数据与图示与「DNA 与 RNA 结构」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “DNA and RNA Structure”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "gel"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u6-2": {
    "title": "复制 · 刺激材料 · Replication: stimulus",
    "text": "下列数据与图示与「复制」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Replication”. Answer each part under this shared stimulus (original AP-style adaptation).",
    "diagram": {
      "kind": "pathway"
    },
    "sourceId": "openstax-biology-2e",
    "source": "OpenStax Biology 2e",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
  },
  "stim-bio-u6-3": {
    "title": "转录与 RNA 加工 · 刺激材料 · Transcription and RNA Processing: stimulus",
    "text": "下列数据与图示与「转录与 RNA 加工」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Transcription and RNA Processing”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
    "id": "bio-u6-set1",
    "title": "题组 1 · 共享刺激 · Set 1, shared stimulus",
    "sharedStimulus": "stim-bio-u6-1",
    "stimulus": {
      "title": "DNA 与 RNA 结构 · 刺激材料 · DNA and RNA Structure: stimulus",
      "text": "下列数据与图示与「DNA 与 RNA 结构」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “DNA and RNA Structure”. Answer each part under this shared stimulus (original AP-style adaptation).",
      "diagram": {
        "kind": "gel"
      },
      "sourceId": "openstax-biology-2e",
      "source": "OpenStax Biology 2e",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
      "sourceNote": "Themes aligned with OpenStax Biology 2e; figures/data original."
    },
    "questions": [
      {
        "id": "bio-u6-q001",
        "title": "DNA 与 RNA 结构 (1) · DNA and RNA Structure (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「DNA 与 RNA 结构」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “DNA and RNA Structure”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u6/6.1",
            "label": "6.1 DNA 与 RNA 结构 · 6.1 DNA and RNA Structure",
            "topicId": "bio-u6:6.1"
          }
        ]
      },
      {
        "id": "bio-u6-q002",
        "title": "复制 (2) · Replication (2)",
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
            "href": "#/t/bio/bio-u6/6.2",
            "label": "6.2 复制 · 6.2 Replication",
            "topicId": "bio-u6:6.2"
          }
        ]
      },
      {
        "id": "bio-u6-q003",
        "title": "转录与 RNA 加工 (3) · Transcription and RNA Processing (3)",
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
            "href": "#/t/bio/bio-u6/6.3",
            "label": "6.3 转录与 RNA 加工 · 6.3 Transcription and RNA Processing",
            "topicId": "bio-u6:6.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u6-set2",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-bio-u6-2",
    "stimulus": {
      "title": "复制 · 刺激材料 · Replication: stimulus",
      "text": "下列数据与图示与「复制」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Replication”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
        "id": "bio-u6-q004",
        "title": "DNA 与 RNA 结构 (1) · DNA and RNA Structure (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「DNA 与 RNA 结构」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “DNA and RNA Structure”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u6/6.4",
            "label": "6.4 翻译 · 6.4 Translation",
            "topicId": "bio-u6:6.4"
          }
        ]
      },
      {
        "id": "bio-u6-q005",
        "title": "复制 (2) · Replication (2)",
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
            "href": "#/t/bio/bio-u6/6.5",
            "label": "6.5 基因表达调控 · 6.5 Regulation of Gene Expression",
            "topicId": "bio-u6:6.5"
          }
        ]
      },
      {
        "id": "bio-u6-q006",
        "title": "转录与 RNA 加工 (3) · Transcription and RNA Processing (3)",
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
            "href": "#/t/bio/bio-u6/6.6",
            "label": "6.6 基因表达与细胞特化 · 6.6 Gene Expression and Cell Specialization",
            "topicId": "bio-u6:6.6"
          }
        ]
      },
      {
        "id": "bio-u6-q007",
        "title": "翻译 (4) · Translation (4)",
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
            "href": "#/t/bio/bio-u6/6.7",
            "label": "6.7 突变 · 6.7 Mutations",
            "topicId": "bio-u6:6.7"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "bio-u6-set3",
    "title": "题组 3 · 共享刺激 · Set 3, shared stimulus",
    "sharedStimulus": "stim-bio-u6-3",
    "stimulus": {
      "title": "转录与 RNA 加工 · 刺激材料 · Transcription and RNA Processing: stimulus",
      "text": "下列数据与图示与「转录与 RNA 加工」相关。回答共享刺激下的各小题（原创改编，AP 风格）。 · The data and figure below relate to “Transcription and RNA Processing”. Answer each part under this shared stimulus (original AP-style adaptation).",
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
        "id": "bio-u6-q008",
        "title": "DNA 与 RNA 结构 (1) · DNA and RNA Structure (1)",
        "difficulty": "易 · Easy",
        "type": "frq",
        "stem": "指出刺激中与「DNA 与 RNA 结构」最直接相关的趋势，并给出机制解释。 · Point out the trend in the stimulus most directly related to “DNA and RNA Structure”, and give a mechanistic explanation.",
        "answer": "需联系结构—功能或选择压力；见刺激图/表。 · Connect structure to function or to selection pressure; see the stimulus figure or table.",
        "solution": "AP Bio FRQ：主张 + 证据 + 推理。 · AP Biology free response: claim, evidence, and reasoning.",
        "sourceId": "openstax-biology-2e",
        "source": "OpenStax Biology 2e",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/books/biology-2e/pages/1-introduction",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/bio/bio-u6/6.8",
            "label": "6.8 生物技术 · 6.8 Biotechnology",
            "topicId": "bio-u6:6.8"
          }
        ]
      },
      {
        "id": "bio-u6-q009",
        "title": "复制 (2) · Replication (2)",
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
            "href": "#/t/bio/bio-u6/6.1",
            "label": "6.1 DNA 与 RNA 结构 · 6.1 DNA and RNA Structure",
            "topicId": "bio-u6:6.1"
          }
        ]
      },
      {
        "id": "bio-u6-q010",
        "title": "转录与 RNA 加工 (3) · Transcription and RNA Processing (3)",
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
            "href": "#/t/bio/bio-u6/6.2",
            "label": "6.2 复制 · 6.2 Replication",
            "topicId": "bio-u6:6.2"
          }
        ]
      }
    ]
  },
  {
    "id": "bio-u6-q011",
    "title": "6.1 数据刺激 · 6.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "DNA 与 RNA 结构 实验数据 · DNA and RNA Structure experimental data",
      "text": "研究小组记录与「DNA 与 RNA 结构」相关的测量。 · A research group records measurements related to “DNA and RNA Structure”.",
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
        "href": "#/t/bio/bio-u6/6.3",
        "label": "6.3 转录与 RNA 加工 · 6.3 Transcription and RNA Processing",
        "topicId": "bio-u6:6.3"
      }
    ]
  },
  {
    "id": "bio-u6-q012",
    "title": "6.2 图示 MCQ · 6.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「复制」最直接相关的正确陈述是？ · Which statement is most directly about “Replication”?",
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
        "href": "#/t/bio/bio-u6/6.4",
        "label": "6.4 翻译 · 6.4 Translation",
        "topicId": "bio-u6:6.4"
      }
    ]
  },
  {
    "id": "bio-u6-q013",
    "title": "6.3 论证 · 6.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「转录与 RNA 加工」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Transcription and RNA Processing”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.5",
        "label": "6.5 基因表达调控 · 6.5 Regulation of Gene Expression",
        "topicId": "bio-u6:6.5"
      }
    ]
  },
  {
    "id": "bio-u6-q014",
    "title": "6.4 论证 · 6.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「翻译」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Translation”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.6",
        "label": "6.6 基因表达与细胞特化 · 6.6 Gene Expression and Cell Specialization",
        "topicId": "bio-u6:6.6"
      }
    ]
  },
  {
    "id": "bio-u6-q015",
    "title": "6.5 论证 · 6.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「基因表达调控」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Regulation of Gene Expression”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.7",
        "label": "6.7 突变 · 6.7 Mutations",
        "topicId": "bio-u6:6.7"
      }
    ]
  },
  {
    "id": "bio-u6-q016",
    "title": "6.6 论证 · 6.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「基因表达与细胞特化」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Gene Expression and Cell Specialization”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.8",
        "label": "6.8 生物技术 · 6.8 Biotechnology",
        "topicId": "bio-u6:6.8"
      }
    ]
  },
  {
    "id": "bio-u6-q017",
    "title": "6.7 数据刺激 · 6.7 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "突变 实验数据 · Mutations experimental data",
      "text": "研究小组记录与「突变」相关的测量。 · A research group records measurements related to “Mutations”.",
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
        "href": "#/t/bio/bio-u6/6.1",
        "label": "6.1 DNA 与 RNA 结构 · 6.1 DNA and RNA Structure",
        "topicId": "bio-u6:6.1"
      }
    ]
  },
  {
    "id": "bio-u6-q018",
    "title": "6.8 图示 MCQ · 6.8 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「生物技术」最直接相关的正确陈述是？ · Which statement is most directly about “Biotechnology”?",
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
        "href": "#/t/bio/bio-u6/6.2",
        "label": "6.2 复制 · 6.2 Replication",
        "topicId": "bio-u6:6.2"
      }
    ]
  },
  {
    "id": "bio-u6-q019",
    "title": "6.1 论证 · 6.1 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「DNA 与 RNA 结构」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “DNA and RNA Structure”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.3",
        "label": "6.3 转录与 RNA 加工 · 6.3 Transcription and RNA Processing",
        "topicId": "bio-u6:6.3"
      }
    ]
  },
  {
    "id": "bio-u6-q020",
    "title": "6.2 论证 · 6.2 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「复制」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Replication”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.4",
        "label": "6.4 翻译 · 6.4 Translation",
        "topicId": "bio-u6:6.4"
      }
    ]
  },
  {
    "id": "bio-u6-q021",
    "title": "6.3 论证 · 6.3 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「转录与 RNA 加工」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Transcription and RNA Processing”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.5",
        "label": "6.5 基因表达调控 · 6.5 Regulation of Gene Expression",
        "topicId": "bio-u6:6.5"
      }
    ]
  },
  {
    "id": "bio-u6-q022",
    "title": "6.4 论证 · 6.4 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「翻译」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Translation”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.6",
        "label": "6.6 基因表达与细胞特化 · 6.6 Gene Expression and Cell Specialization",
        "topicId": "bio-u6:6.6"
      }
    ]
  },
  {
    "id": "bio-u6-q023",
    "title": "6.5 数据刺激 · 6.5 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "基因表达调控 实验数据 · Regulation of Gene Expression experimental data",
      "text": "研究小组记录与「基因表达调控」相关的测量。 · A research group records measurements related to “Regulation of Gene Expression”.",
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
        "href": "#/t/bio/bio-u6/6.7",
        "label": "6.7 突变 · 6.7 Mutations",
        "topicId": "bio-u6:6.7"
      }
    ]
  },
  {
    "id": "bio-u6-q024",
    "title": "6.6 图示 MCQ · 6.6 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「基因表达与细胞特化」最直接相关的正确陈述是？ · Which statement is most directly about “Gene Expression and Cell Specialization”?",
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
        "href": "#/t/bio/bio-u6/6.8",
        "label": "6.8 生物技术 · 6.8 Biotechnology",
        "topicId": "bio-u6:6.8"
      }
    ]
  },
  {
    "id": "bio-u6-q025",
    "title": "6.7 论证 · 6.7 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「突变」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mutations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.1",
        "label": "6.1 DNA 与 RNA 结构 · 6.1 DNA and RNA Structure",
        "topicId": "bio-u6:6.1"
      }
    ]
  },
  {
    "id": "bio-u6-q026",
    "title": "6.8 论证 · 6.8 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「生物技术」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Biotechnology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.2",
        "label": "6.2 复制 · 6.2 Replication",
        "topicId": "bio-u6:6.2"
      }
    ]
  },
  {
    "id": "bio-u6-q027",
    "title": "6.1 论证 · 6.1 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「DNA 与 RNA 结构」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “DNA and RNA Structure”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.3",
        "label": "6.3 转录与 RNA 加工 · 6.3 Transcription and RNA Processing",
        "topicId": "bio-u6:6.3"
      }
    ]
  },
  {
    "id": "bio-u6-q028",
    "title": "6.2 论证 · 6.2 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「复制」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Replication”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.4",
        "label": "6.4 翻译 · 6.4 Translation",
        "topicId": "bio-u6:6.4"
      }
    ]
  },
  {
    "id": "bio-u6-q029",
    "title": "6.3 数据刺激 · 6.3 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "转录与 RNA 加工 实验数据 · Transcription and RNA Processing experimental data",
      "text": "研究小组记录与「转录与 RNA 加工」相关的测量。 · A research group records measurements related to “Transcription and RNA Processing”.",
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
        "href": "#/t/bio/bio-u6/6.5",
        "label": "6.5 基因表达调控 · 6.5 Regulation of Gene Expression",
        "topicId": "bio-u6:6.5"
      }
    ]
  },
  {
    "id": "bio-u6-q030",
    "title": "6.4 图示 MCQ · 6.4 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「翻译」最直接相关的正确陈述是？ · Which statement is most directly about “Translation”?",
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
        "href": "#/t/bio/bio-u6/6.6",
        "label": "6.6 基因表达与细胞特化 · 6.6 Gene Expression and Cell Specialization",
        "topicId": "bio-u6:6.6"
      }
    ]
  },
  {
    "id": "bio-u6-q031",
    "title": "6.5 论证 · 6.5 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「基因表达调控」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Regulation of Gene Expression”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.7",
        "label": "6.7 突变 · 6.7 Mutations",
        "topicId": "bio-u6:6.7"
      }
    ]
  },
  {
    "id": "bio-u6-q032",
    "title": "6.6 论证 · 6.6 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「基因表达与细胞特化」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Gene Expression and Cell Specialization”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.8",
        "label": "6.8 生物技术 · 6.8 Biotechnology",
        "topicId": "bio-u6:6.8"
      }
    ]
  },
  {
    "id": "bio-u6-q033",
    "title": "6.7 论证 · 6.7 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「突变」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mutations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.1",
        "label": "6.1 DNA 与 RNA 结构 · 6.1 DNA and RNA Structure",
        "topicId": "bio-u6:6.1"
      }
    ]
  },
  {
    "id": "bio-u6-q034",
    "title": "6.8 论证 · 6.8 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「生物技术」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Biotechnology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.2",
        "label": "6.2 复制 · 6.2 Replication",
        "topicId": "bio-u6:6.2"
      }
    ]
  },
  {
    "id": "bio-u6-q035",
    "title": "6.1 数据刺激 · 6.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "DNA 与 RNA 结构 实验数据 · DNA and RNA Structure experimental data",
      "text": "研究小组记录与「DNA 与 RNA 结构」相关的测量。 · A research group records measurements related to “DNA and RNA Structure”.",
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
        "href": "#/t/bio/bio-u6/6.3",
        "label": "6.3 转录与 RNA 加工 · 6.3 Transcription and RNA Processing",
        "topicId": "bio-u6:6.3"
      }
    ]
  },
  {
    "id": "bio-u6-q036",
    "title": "6.2 图示 MCQ · 6.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "pedigree"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「复制」最直接相关的正确陈述是？ · Which statement is most directly about “Replication”?",
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
        "href": "#/t/bio/bio-u6/6.4",
        "label": "6.4 翻译 · 6.4 Translation",
        "topicId": "bio-u6:6.4"
      }
    ]
  },
  {
    "id": "bio-u6-q037",
    "title": "6.3 论证 · 6.3 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「转录与 RNA 加工」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Transcription and RNA Processing”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.5",
        "label": "6.5 基因表达调控 · 6.5 Regulation of Gene Expression",
        "topicId": "bio-u6:6.5"
      }
    ]
  },
  {
    "id": "bio-u6-q038",
    "title": "6.4 论证 · 6.4 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「翻译」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Translation”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.6",
        "label": "6.6 基因表达与细胞特化 · 6.6 Gene Expression and Cell Specialization",
        "topicId": "bio-u6:6.6"
      }
    ]
  },
  {
    "id": "bio-u6-q039",
    "title": "6.5 论证 · 6.5 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「基因表达调控」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Regulation of Gene Expression”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.7",
        "label": "6.7 突变 · 6.7 Mutations",
        "topicId": "bio-u6:6.7"
      }
    ]
  },
  {
    "id": "bio-u6-q040",
    "title": "6.6 论证 · 6.6 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「基因表达与细胞特化」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Gene Expression and Cell Specialization”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.8",
        "label": "6.8 生物技术 · 6.8 Biotechnology",
        "topicId": "bio-u6:6.8"
      }
    ]
  },
  {
    "id": "bio-u6-q041",
    "title": "6.7 数据刺激 · 6.7 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "突变 实验数据 · Mutations experimental data",
      "text": "研究小组记录与「突变」相关的测量。 · A research group records measurements related to “Mutations”.",
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
        "href": "#/t/bio/bio-u6/6.1",
        "label": "6.1 DNA 与 RNA 结构 · 6.1 DNA and RNA Structure",
        "topicId": "bio-u6:6.1"
      }
    ]
  },
  {
    "id": "bio-u6-q042",
    "title": "6.8 图示 MCQ · 6.8 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "punnett"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「生物技术」最直接相关的正确陈述是？ · Which statement is most directly about “Biotechnology”?",
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
        "href": "#/t/bio/bio-u6/6.2",
        "label": "6.2 复制 · 6.2 Replication",
        "topicId": "bio-u6:6.2"
      }
    ]
  },
  {
    "id": "bio-u6-q043",
    "title": "6.1 论证 · 6.1 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「DNA 与 RNA 结构」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “DNA and RNA Structure”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.3",
        "label": "6.3 转录与 RNA 加工 · 6.3 Transcription and RNA Processing",
        "topicId": "bio-u6:6.3"
      }
    ]
  },
  {
    "id": "bio-u6-q044",
    "title": "6.2 论证 · 6.2 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「复制」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Replication”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.4",
        "label": "6.4 翻译 · 6.4 Translation",
        "topicId": "bio-u6:6.4"
      }
    ]
  },
  {
    "id": "bio-u6-q045",
    "title": "6.3 论证 · 6.3 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「转录与 RNA 加工」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Transcription and RNA Processing”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.5",
        "label": "6.5 基因表达调控 · 6.5 Regulation of Gene Expression",
        "topicId": "bio-u6:6.5"
      }
    ]
  },
  {
    "id": "bio-u6-q046",
    "title": "6.4 论证 · 6.4 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「翻译」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Translation”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.6",
        "label": "6.6 基因表达与细胞特化 · 6.6 Gene Expression and Cell Specialization",
        "topicId": "bio-u6:6.6"
      }
    ]
  },
  {
    "id": "bio-u6-q047",
    "title": "6.5 数据刺激 · 6.5 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "基因表达调控 实验数据 · Regulation of Gene Expression experimental data",
      "text": "研究小组记录与「基因表达调控」相关的测量。 · A research group records measurements related to “Regulation of Gene Expression”.",
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
        "href": "#/t/bio/bio-u6/6.7",
        "label": "6.7 突变 · 6.7 Mutations",
        "topicId": "bio-u6:6.7"
      }
    ]
  },
  {
    "id": "bio-u6-q048",
    "title": "6.6 图示 MCQ · 6.6 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "phylo"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「基因表达与细胞特化」最直接相关的正确陈述是？ · Which statement is most directly about “Gene Expression and Cell Specialization”?",
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
        "href": "#/t/bio/bio-u6/6.8",
        "label": "6.8 生物技术 · 6.8 Biotechnology",
        "topicId": "bio-u6:6.8"
      }
    ]
  },
  {
    "id": "bio-u6-q049",
    "title": "6.7 论证 · 6.7 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「突变」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mutations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.1",
        "label": "6.1 DNA 与 RNA 结构 · 6.1 DNA and RNA Structure",
        "topicId": "bio-u6:6.1"
      }
    ]
  },
  {
    "id": "bio-u6-q050",
    "title": "6.8 论证 · 6.8 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「生物技术」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Biotechnology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.2",
        "label": "6.2 复制 · 6.2 Replication",
        "topicId": "bio-u6:6.2"
      }
    ]
  },
  {
    "id": "bio-u6-q051",
    "title": "6.1 论证 · 6.1 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「DNA 与 RNA 结构」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “DNA and RNA Structure”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.3",
        "label": "6.3 转录与 RNA 加工 · 6.3 Transcription and RNA Processing",
        "topicId": "bio-u6:6.3"
      }
    ]
  },
  {
    "id": "bio-u6-q052",
    "title": "6.2 论证 · 6.2 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「复制」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Replication”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.4",
        "label": "6.4 翻译 · 6.4 Translation",
        "topicId": "bio-u6:6.4"
      }
    ]
  },
  {
    "id": "bio-u6-q053",
    "title": "6.3 数据刺激 · 6.3 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "转录与 RNA 加工 实验数据 · Transcription and RNA Processing experimental data",
      "text": "研究小组记录与「转录与 RNA 加工」相关的测量。 · A research group records measurements related to “Transcription and RNA Processing”.",
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
        "href": "#/t/bio/bio-u6/6.5",
        "label": "6.5 基因表达调控 · 6.5 Regulation of Gene Expression",
        "topicId": "bio-u6:6.5"
      }
    ]
  },
  {
    "id": "bio-u6-q054",
    "title": "6.4 图示 MCQ · 6.4 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "cell"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「翻译」最直接相关的正确陈述是？ · Which statement is most directly about “Translation”?",
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
        "href": "#/t/bio/bio-u6/6.6",
        "label": "6.6 基因表达与细胞特化 · 6.6 Gene Expression and Cell Specialization",
        "topicId": "bio-u6:6.6"
      }
    ]
  },
  {
    "id": "bio-u6-q055",
    "title": "6.5 论证 · 6.5 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「基因表达调控」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Regulation of Gene Expression”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.7",
        "label": "6.7 突变 · 6.7 Mutations",
        "topicId": "bio-u6:6.7"
      }
    ]
  },
  {
    "id": "bio-u6-q056",
    "title": "6.6 论证 · 6.6 Argument",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stem": "用 CED 语言解释「基因表达与细胞特化」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Gene Expression and Cell Specialization”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.8",
        "label": "6.8 生物技术 · 6.8 Biotechnology",
        "topicId": "bio-u6:6.8"
      }
    ]
  },
  {
    "id": "bio-u6-q057",
    "title": "6.7 论证 · 6.7 Argument",
    "type": "frq",
    "difficulty": "中 · Medium",
    "stem": "用 CED 语言解释「突变」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Mutations”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.1",
        "label": "6.1 DNA 与 RNA 结构 · 6.1 DNA and RNA Structure",
        "topicId": "bio-u6:6.1"
      }
    ]
  },
  {
    "id": "bio-u6-q058",
    "title": "6.8 论证 · 6.8 Argument",
    "type": "frq",
    "difficulty": "难 · Hard",
    "stem": "用 CED 语言解释「生物技术」中一个因果关系，并给出一个可观测预测。 · Use CED language to explain one cause-and-effect relationship in “Biotechnology”, and state one observable prediction.",
    "answer": "先定义关键实体与过程，再写因果链，最后给可测预测。 · Define the key objects and processes, write the causal chain, then give a measurable prediction.",
    "solution": "避免循环论证；预测需可证伪。 · Avoid circular reasoning; a prediction must be falsifiable.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/bio/bio-u6/6.2",
        "label": "6.2 复制 · 6.2 Replication",
        "topicId": "bio-u6:6.2"
      }
    ]
  },
  {
    "id": "bio-u6-q059",
    "title": "6.1 数据刺激 · 6.1 Data stimulus",
    "type": "frq",
    "difficulty": "易 · Easy",
    "stimulus": {
      "title": "DNA 与 RNA 结构 实验数据 · DNA and RNA Structure experimental data",
      "text": "研究小组记录与「DNA 与 RNA 结构」相关的测量。 · A research group records measurements related to “DNA and RNA Structure”.",
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
        "href": "#/t/bio/bio-u6/6.3",
        "label": "6.3 转录与 RNA 加工 · 6.3 Transcription and RNA Processing",
        "topicId": "bio-u6:6.3"
      }
    ]
  },
  {
    "id": "bio-u6-q060",
    "title": "6.2 图示 MCQ · 6.2 Diagram multiple choice",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stimulus": {
      "title": "图示 · diagram",
      "diagram": {
        "kind": "foodWeb"
      },
      "text": "据图作答。 · Answer from the figure."
    },
    "stem": "与「复制」最直接相关的正确陈述是？ · Which statement is most directly about “Replication”?",
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
        "href": "#/t/bio/bio-u6/6.4",
        "label": "6.4 翻译 · 6.4 Translation",
        "topicId": "bio-u6:6.4"
      }
    ]
  }
];
