import type { PlanOption, RecommendationQuestion, StayPlan } from '../types/domain.ts'

export const mockPlans: StayPlan[] = [
  {
    id: 'plan-short',
    name: { ja: 'ショート', en: 'Short', zh: '短期', ko: '숏' },
    stayRange: { ja: '1〜2週間', en: '1-2 weeks', zh: '1〜2 周', ko: '1~2주' },
    durationCategory: 'short',
    monthlyPrice: 89000,
    recommendedFor: ['nomad', 'international'],
    highlights: [
      { ja: '短期体験向け', en: 'Good for trial stays', zh: '适合短期体验', ko: '단기 체험에 적합' },
      { ja: '即入居しやすい', en: 'Easy to start quickly', zh: '可快速入住', ko: '빠르게 입주 가능' },
      { ja: '初回費用を抑えやすい', en: 'Lower upfront cost', zh: '初期费用较低', ko: '초기 비용 절감' },
    ],
    compatibleLocales: ['ja', 'en', 'zh', 'ko'],
    propertyFeatureAffinity: ['高速Wi-Fi', '英語対応可', '空港アクセス良好'],
    defaultOptionIds: ['option-wifi'],
  },
  {
    id: 'plan-standard',
    name: { ja: 'スタンダード', en: 'Standard', zh: '标准', ko: '스탠다드' },
    stayRange: { ja: '1か月', en: '1 month', zh: '1 个月', ko: '1개월' },
    durationCategory: 'standard',
    monthlyPrice: 118000,
    recommendedFor: ['nomad', 'migrant'],
    highlights: [
      { ja: '一番人気', en: 'Most popular', zh: '最受欢迎', ko: '가장 인기' },
      { ja: '仕事と生活の両立', en: 'Balanced work and life', zh: '兼顾工作与生活', ko: '일과 생활의 균형' },
      { ja: '延長しやすい', en: 'Easy to extend', zh: '便于延长', ko: '연장 용이' },
    ],
    compatibleLocales: ['ja', 'en', 'zh', 'ko'],
    propertyFeatureAffinity: ['コワーキング近接', '広めのデスク', 'コミュニティイベント'],
    defaultOptionIds: ['option-wifi', 'option-community'],
  },
  {
    id: 'plan-long',
    name: { ja: 'ロング', en: 'Long', zh: '长期', ko: '롱' },
    stayRange: { ja: '2〜3か月', en: '2-3 months', zh: '2〜3 个月', ko: '2~3개월' },
    durationCategory: 'long',
    monthlyPrice: 156000,
    recommendedFor: ['migrant', 'international'],
    highlights: [
      { ja: '移住検討に最適', en: 'Best for relocation planning', zh: '最适合移居规划', ko: '이주 검토에 최적' },
      { ja: '生活導線を確かめやすい', en: 'Good for testing daily life', zh: '便于验证生活动线', ko: '생활 동선 확인 용이' },
      { ja: 'サポートを厚く付けやすい', en: 'More room for support options', zh: '可搭配更多支持服务', ko: '지원 서비스 추가 여지 많음' },
    ],
    compatibleLocales: ['ja', 'en', 'zh', 'ko'],
    propertyFeatureAffinity: ['長期滞在向け', '収納充実', '静音環境'],
    defaultOptionIds: ['option-migration', 'option-community'],
  },
]

export const mockOptions: PlanOption[] = [
  {
    id: 'option-wifi',
    name: { ja: 'Wi-Fi強化', en: 'Enhanced Wi-Fi', zh: 'Wi-Fi 增强', ko: 'Wi-Fi 강화' },
    monthlyPrice: 6000,
    description: {
      ja: '高負荷なオンライン会議やアップロード向け回線オプション',
      en: 'Higher-capacity connection for calls and uploads',
      zh: '面向高负载在线会议与上传的加强线路选项',
      ko: '고부하 온라인 회의·업로드용 회선 옵션',
    },
  },
  {
    id: 'option-english',
    name: { ja: '英語サポート', en: 'English support', zh: '英语支持', ko: '영어 지원' },
    monthlyPrice: 12000,
    description: {
      ja: 'チェックインと生活案内を英語でサポート',
      en: 'English support for check-in and day-to-day guidance',
      zh: '以英语提供入住和日常生活指引',
      ko: '체크인과 생활 안내를 영어로 지원',
    },
  },
  {
    id: 'option-migration',
    name: { ja: '移住相談', en: 'Relocation consult', zh: '移居咨询', ko: '이주 상담' },
    monthlyPrice: 10000,
    description: {
      ja: '行政手続きやエリア選びを相談できるサポート',
      en: 'Consulting support for area selection and local procedures',
      zh: '提供行政手续与区域选择等方面的咨询支持',
      ko: '행정 절차와 지역 선택을 상담할 수 있는 지원',
    },
  },
  {
    id: 'option-community',
    name: { ja: 'コミュニティ参加', en: 'Community access', zh: '社区参与', ko: '커뮤니티 참여' },
    monthlyPrice: 3000,
    description: {
      ja: '滞在者交流イベントと地域案内へ参加可能',
      en: 'Access to resident meetups and local introductions',
      zh: '可参加住户交流活动与本地介绍',
      ko: '입주자 교류 이벤트와 지역 안내에 참여 가능',
    },
  },
]

export const recommendationQuestions: RecommendationQuestion[] = [
  {
    id: 'purpose',
    prompt: {
      ja: '今回の滞在目的に一番近いものは?',
      en: 'What best matches the purpose of this stay?',
      zh: '本次停留的目的最接近哪一项?',
      ko: '이번 체류의 목적에 가장 가까운 것은?',
    },
    choices: [
      {
        id: 'purpose-migration',
        label: {
          ja: '移住前に暮らしを試したい',
          en: 'I want to test daily life before relocating',
          zh: '想在移居前试住体验',
          ko: '이주 전에 현지 생활을 체험해 보고 싶다',
        },
        planAffinity: ['long', 'standard'],
        optionAffinity: ['option-migration'],
        propertyFeatureAffinity: ['長期滞在向け', '収納充実'],
        explanationTags: ['移住準備', '生活検証'],
      },
      {
        id: 'purpose-workation',
        label: {
          ja: '仕事をしながら沖縄滞在したい',
          en: 'I want to work remotely from Okinawa',
          zh: '希望一边工作一边在冲绳停留',
          ko: '일을 하면서 오키나와에 체류하고 싶다',
        },
        planAffinity: ['standard', 'short'],
        optionAffinity: ['option-wifi', 'option-community'],
        propertyFeatureAffinity: ['高速Wi-Fi', 'コワーキング近接', '広めのデスク'],
        explanationTags: ['ワーケーション', '働きやすさ'],
      },
      {
        id: 'purpose-support',
        label: {
          ja: '生活サポートを重視したい',
          en: 'I need stronger living support',
          zh: '更看重生活支持',
          ko: '생활 지원을 중시하고 싶다',
        },
        planAffinity: ['long', 'short'],
        optionAffinity: ['option-english'],
        propertyFeatureAffinity: ['英語対応可', '外国人サポート'],
        explanationTags: ['サポート重視'],
      },
    ],
  },
  {
    id: 'duration',
    prompt: {
      ja: '希望する滞在期間は?',
      en: 'How long would you like to stay?',
      zh: '希望停留多长时间?',
      ko: '희망하는 체류 기간은?',
    },
    choices: [
      {
        id: 'duration-short',
        label: {
          ja: 'まずは1〜2週間',
          en: 'Start with 1-2 weeks',
          zh: '先试 1〜2 周',
          ko: '우선 1~2주 정도',
        },
        planAffinity: ['short'],
        explanationTags: ['短期滞在'],
      },
      {
        id: 'duration-month',
        label: {
          ja: '1か月くらい',
          en: 'Around 1 month',
          zh: '1 个月左右',
          ko: '1개월 정도',
        },
        planAffinity: ['standard'],
        explanationTags: ['標準滞在'],
      },
      {
        id: 'duration-long',
        label: {
          ja: '2〜3か月じっくり',
          en: 'Take 2-3 months',
          zh: '认真停留 2〜3 个月',
          ko: '2~3개월 충분히',
        },
        planAffinity: ['long'],
        explanationTags: ['長期滞在'],
      },
    ],
  },
  {
    id: 'support',
    prompt: {
      ja: '滞在中に特に重視したいことは?',
      en: 'What matters most during your stay?',
      zh: '停留期间最想重视的是?',
      ko: '체류 중에 특히 중시하고 싶은 것은?',
    },
    choices: [
      {
        id: 'support-connectivity',
        label: {
          ja: '通信品質',
          en: 'Connectivity',
          zh: '网络质量',
          ko: '통신 품질',
        },
        planAffinity: ['short', 'standard'],
        optionAffinity: ['option-wifi'],
        propertyFeatureAffinity: ['高速Wi-Fi', '広めのデスク'],
        explanationTags: ['通信環境'],
      },
      {
        id: 'support-local',
        label: {
          ja: '地域とのつながり',
          en: 'Connection with the local area',
          zh: '与本地的连接',
          ko: '지역과의 연결',
        },
        planAffinity: ['standard', 'long'],
        optionAffinity: ['option-community', 'option-migration'],
        propertyFeatureAffinity: ['コミュニティイベント', 'ビーチ徒歩圏内'],
        explanationTags: ['地域交流'],
      },
      {
        id: 'support-language',
        label: {
          ja: '言語サポート',
          en: 'Language support',
          zh: '语言支持',
          ko: '언어 지원',
        },
        planAffinity: ['short', 'long'],
        optionAffinity: ['option-english'],
        propertyFeatureAffinity: ['英語対応可', '外国人サポート'],
        explanationTags: ['英語対応'],
      },
    ],
  },
]
