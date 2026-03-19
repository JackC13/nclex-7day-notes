const DATA = {
  overview: [
    { pill: 'Intro',  topic: '系列總介紹（預告片）',                          duration: '0:30',     url: 'https://www.youtube.com/watch?v=PU1SjIpnBzw' },
    { pill: 'Day 1',  topic: '如何準備 NCLEX —\u00a0建立正確觀念',            duration: '1:33:17',  url: 'https://www.youtube.com/watch?v=ljKgQaBW0io' },
    { pill: 'Day 2',  topic: 'NCLEX 類別 Part I — 生理與藥理',                duration: '1:19:21',  url: 'https://www.youtube.com/watch?v=BGe7O80hQaM' },
    { pill: 'Day 3',  topic: 'NCLEX 類別 Part II — 安全與感染控制',           duration: '~1:04:00', url: 'https://www.youtube.com/watch?v=iJgpKjJBdq8' },
    { pill: 'Day 4',  topic: 'NCLEX 類別 Part III — 心理社會與健康促進',      duration: '1:31:19',  url: 'https://www.youtube.com/watch?v=mVogiizpHfA' },
    { pill: 'Day 5',  topic: '優先順序策略 Part I',                            duration: '1:41:19',  url: 'https://www.youtube.com/watch?v=MSy1OfpA_1E' },
    { pill: 'Day 6',  topic: '優先順序策略 Part II + SATA 題型攻略',           duration: '1:07:01',  url: 'https://www.youtube.com/watch?v=ufbetZDo-gI' },
    { pill: 'Day 7',  topic: 'Q&amp;A 問答總複習',                             duration: '1:31:07',  url: 'https://www.youtube.com/watch?v=uMfjJYe-5y0' },
  ],

  days: [
    {
      id: 'day1', cls: 'd1', icon: 'D1',
      title: '如何準備 NCLEX — 建立正確觀念',
      duration: '1 hr 33 min', date: '2022.03.08',
      url: 'https://www.youtube.com/watch?v=ljKgQaBW0io',
      cards: [
        {
          title: '🎯 核心觀念',
          items: [
            'NCLEX 不是記憶考試，而是<strong>臨床判斷</strong>考試',
            '三大成功支柱（Three Pillars of Success）',
            '通過 NCLEX 的關鍵：用護士方式思考',
          ],
        },
        {
          title: '📝 題型分類',
          items: [
            '<strong>Recall &amp; Recognition 型</strong>：記憶識別，較少',
            '<strong>批判性思維型</strong>：需分析情境，佔大多數',
            '如何正確回答 NCLEX 題目的邏輯框架',
          ],
        },
        {
          title: '🔑 NCLEX 題目 5 大關鍵因素',
          items: [
            '患者症狀：主觀（Subjective）還是客觀（Objective）？',
            '症狀的嚴重性與急迫性',
            '是否涉及生理威脅？',
            '護士「現在」能做什麼？',
            '何者最優先？',
          ],
        },
        {
          title: '⚡ 優先順序策略初探',
          items: [
            '何時「評估（Assess）」vs. 何時「行動（Implement）」',
            '發展批判性思維的方法',
            '7 天訓練的目標與框架說明',
          ],
        },
      ],
    },

    {
      id: 'day2', cls: 'd2', icon: 'D2',
      title: 'NCLEX 類別 Part I — 生理與藥理',
      duration: '1 hr 19 min', date: '2022.03.09',
      url: 'https://www.youtube.com/watch?v=BGe7O80hQaM',
      cards: [
        {
          title: '🫁 生理類別',
          items: [
            '<strong>生理適應（Physiological Adaptation）</strong>：身體對疾病的反應',
            '<strong>基礎照護與舒適（Basic Care &amp; Comfort）</strong>：日常護理技能',
            '如何分析 NCLEX 題目的思維框架',
          ],
        },
        {
          title: '💊 藥理重點',
          items: [
            '考的不是藥名，而是<strong>管理藥物效果的護理原則</strong>',
            '急救用藥（Emergency Drugs）的判斷',
            '實驗室檢查值（Lab Results）評估',
            '護士能否無醫囑給 IV 點滴？→ 法規判斷練習',
          ],
        },
        {
          title: '⚠️ 超重要考點',
          items: [
            '<span class="tag green">正確</span> <strong>副作用（Side Effect）</strong>：預期中的非治療反應',
            '<span class="tag red">注意</span> <strong>不良反應（Adverse Effect）</strong>：非預期、需護理介入',
            '兩者的區別直接影響答題方向',
          ],
        },
        {
          title: '🛡️ 風險降低',
          items: [
            '<strong>Reduction of Risk Potential</strong>：預防併發症的護理措施',
            '評估（Assessment）的時機判斷',
            'Assessment of Laboratory Results',
          ],
        },
      ],
    },

    {
      id: 'day3', cls: 'd3', icon: 'D3',
      title: 'NCLEX 類別 Part II — 安全與感染控制',
      duration: '~1 hr 4 min', date: '2022.03.10',
      url: 'https://www.youtube.com/watch?v=iJgpKjJBdq8',
      cards: [
        {
          title: '🏥 護理照護管理',
          items: [
            'SBAR 情況說明框架',
            '授權（Delegation）原則',
            '法律責任與病人倡導',
            '何時向醫師提出 Recommendation',
            '醫師有時忘記病人需求 → 護士的倡導角色',
          ],
        },
        {
          title: '🦠 安全與感染控制',
          items: [
            '各種隔離措施的適用情境',
            '<span class="tag yellow">飛沫 Droplet</span> <span class="tag green">接觸 Contact</span> <span class="tag blue">空氣 Airborne</span>',
            '哪種疾病用哪種防護 → 高頻考點',
            'Safety and Infection Control 完整範疇',
          ],
        },
        {
          title: '🔍 題目進階解析',
          items: [
            'NCLEX 題目的 5 大關鍵因素深化複習',
            '臨床案例：間隔室症候群（Compartment Syndrome）',
            'Assessment 的時機 vs. 直接介入的判斷',
            '「Sometimes doctors forget about the patients」→ 護士責任',
          ],
        },
      ],
    },

    {
      id: 'day4', cls: 'd4', icon: 'D4',
      title: 'NCLEX 類別 Part III — 心理社會與健康促進',
      duration: '1 hr 31 min', date: '2022.03.11',
      url: 'https://www.youtube.com/watch?v=mVogiizpHfA',
      cards: [
        {
          title: '💚 健康促進與維護',
          items: [
            '預防保健、篩檢、衛教的考題邏輯',
            '設定學習優先順序',
            'Foreign Body Aspiration（異物吸入）案例',
          ],
        },
        {
          title: '🧠 心理社會完整性（Psychosocial Integrity）',
          items: [
            '治療性溝通 <span class="tag green">✅ Therapeutic Restating</span>',
            '<span class="tag green">✅ Open-Ended Questions</span>',
            '<span class="tag red">❌ Authoritarian Answers</span>（權威式回應）',
            '<span class="tag red">❌ Non-Therapeutic Responses</span>',
            '憂鬱症（Depression）護理介入原則',
          ],
        },
        {
          title: '📌 選題指南',
          items: [
            'Factors &amp; Guidelines to Select an NCLEX Question',
            '護士如何正確「限制」患者行為 vs. 威脅患者',
            'Management of Care 優先順序再複習',
            'Prioritization 深化訓練',
          ],
        },
      ],
    },

    {
      id: 'day5', cls: 'd5', icon: 'D5',
      title: '優先順序策略 Part I',
      duration: '1 hr 41 min', date: '2022.03.12',
      url: 'https://www.youtube.com/watch?v=MSy1OfpA_1E',
      cards: [
        {
          title: '🔑 識別 5 大關鍵因素（核心工具）',
          wide: true,
          items: [
            '<strong>Factor 1</strong>：患者症狀是主觀還是客觀？',
            '<strong>Factor 2</strong>：症狀的嚴重性／急迫性',
            '<strong>Factor 3</strong>：是否涉及生理威脅（Physiological Threat）？',
            '<strong>Factor 4</strong>：護士現在能做什麼？',
            '<strong>Factor 5</strong>：什麼是「最優先」的護理行動？',
          ],
        },
        {
          title: '⚡ 最愛策略',
          items: [
            '生理反應（Physiological Response）優先於心理',
            '急性威脅 &gt; 慢性問題',
            '老師分享最實用的答題心法',
            '「Does it make sense?」→ 常識驗證法',
          ],
        },
        {
          title: '🤔 為什麼選項間有差異',
          items: [
            '訓練「都對但哪個最對」的思維',
            'Why the difference — 深度解析',
            '大量練習題即時演練優先順序',
          ],
        },
      ],
    },

    {
      id: 'day6', cls: 'd6', icon: 'D6',
      title: '優先順序策略 Part II + SATA 題型攻略',
      duration: '1 hr 7 min', date: '2022.03.13',
      url: 'https://www.youtube.com/watch?v=ufbetZDo-gI',
      cards: [
        {
          title: '☑️ SATA 多選題 3 步驟攻略',
          items: [
            '<strong>Step 1</strong>：把每個選項當 True/False 獨立判斷',
            '<strong>Step 2</strong>：問「這在臨床上正確嗎？」',
            '<strong>Step 3</strong>：不因選太多或太少而動搖',
          ],
        },
        {
          title: '🏥 臨床練習題',
          items: [
            '皮膚彈性評估（Skin Turgor）',
            '飛沫防護（Droplet Precaution）',
            '止痛藥（Analgesics）的給予判斷',
            '取得知情同意（Informed Consent）的護士責任',
            'Nursing Interventions 選擇邏輯',
          ],
        },
        {
          title: '🎤 Open Session Q&amp;A',
          items: [
            '解答學員即時疑問',
            'Ensure Informed Consent Is Obtained',
            '護理介入的選擇邏輯總複習',
          ],
        },
      ],
    },

    {
      id: 'day7', cls: 'd7', icon: 'D7',
      title: 'Q&amp;A 問答總複習',
      duration: '1 hr 31 min', date: '2022.03.14',
      url: 'https://www.youtube.com/watch?v=uMfjJYe-5y0',
      cards: [
        {
          title: '❓ 常見問答',
          items: [
            '<strong>9:58</strong> — 為什麼只聚焦批判性思維和優先順序？',
            '<strong>18:10</strong> — 藥理怎麼準備？',
            '<strong>21:27</strong> — 如何選練習題班？',
            '<strong>44:23</strong> — 每天要做幾題練習題？',
            '<strong>1:01:05</strong> — 記不住 Lab Values 怎麼辦？',
          ],
        },
        {
          title: '🏥 臨床考點 Q&amp;A',
          items: [
            '<strong>1:14:14</strong> — 哪些病人需靠近護理站？',
            '<strong>1:18:06</strong> — NCLEX 通過標準各州不同嗎？（CAT 系統）',
            '<strong>1:18:32</strong> — A 型肝炎傳播途徑與隔離',
            '<strong>1:19:30</strong> — 兒科有哪些重點要讀？',
            '<strong>1:25:31</strong> — NCLEX 的通過分數是多少？',
          ],
        },
        {
          title: '💡 藥理備考建議',
          items: [
            '不用背每種藥名',
            '理解藥物<strong>類別（Drug Class）</strong>的作用機轉',
            '重點：護理評估原則是什麼？',
            '做完每題要理解「為什麼對、為什麼錯」',
            '質比量重要',
          ],
        },
      ],
      quote: {
        text: '你們這 7 天學到的不是醫學知識，而是如何用護士的方式思考。',
        cite: '— NCLEX Crusade International',
      },
    },
  ],

  core: {
    principles: [
      { label: '答題心態',           content: '不是考「知道什麼」，而是考「你怎麼當護士思考」。NCLEX 是思維考試，不是記憶考試。' },
      { label: '優先順序黃金法則',   content: '生理 &gt; 心理　／　急性 &gt; 慢性　／　實際威脅 &gt; 潛在威脅' },
      { label: '5 大因素',           content: '症狀性質？嚴重度？有無生理威脅？護士能做什麼？最優先是什麼？' },
      { label: 'NCLEX 類別',         content: '生理適應、藥理、基礎照護、風險降低、安全環境、護理管理、感染控制、健康促進、心理社會' },
      { label: '溝通題',             content: '<span class="tag green">✅ 治療性溝通</span> <span class="tag green">✅ 開放式問題</span>　<span class="tag red">❌ 權威式回應</span> <span class="tag red">❌ 給建議</span> <span class="tag red">❌ 轉移話題</span>' },
      { label: 'SATA 題',            content: '每個選項獨立判斷 True/False，不要被「要選幾個」影響判斷' },
      { label: '藥理',               content: '背藥物類別 + 護理評估原則，而非個別藥名' },
      { label: 'Does it make sense?', content: '最終驗證法：這個護理行動對這個病情合理嗎？' },
    ],
    highlight: '準備 NCLEX 時要問的不是「這我背過嗎？」，而是「<strong>如果我是這個護士，現在最應該做什麼？</strong>」——每一道題目都是一個臨床情境，用護士的眼睛看，答案自然浮現。',
  },
};
