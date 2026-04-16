import type { PlanOption, RecommendationQuestion, StayPlan } from '../types/domain.ts'

export const mockPlans: StayPlan[] = [
  {
    id: 'plan-short',
    name: { ja: 'ショート', en: 'Short' },
    stayRange: { ja: '1〜2週間', en: '1-2 weeks' },
    durationCategory: 'short',
    monthlyPrice: 89000,
    recommendedFor: ['nomad', 'international'],
    highlights: [
      { ja: '短期体験向け', en: 'Good for trial stays' },
      { ja: '即入居しやすい', en: 'Easy to start quickly' },
      { ja: '初回費用を抑えやすい', en: 'Lower upfront cost' },
    ],
    compatibleLocales: ['ja', 'en'],
    propertyFeatureAffinity: ['高速Wi-Fi', '英語対応可', '空港アクセス良好'],
    defaultOptionIds: ['option-wifi'],
  },
  {
    id: 'plan-standard',
    name: { ja: 'スタンダード', en: 'Standard' },
    stayRange: { ja: '1か月', en: '1 month' },
    durationCategory: 'standard',
    monthlyPrice: 118000,
    recommendedFor: ['nomad', 'migrant'],
    highlights: [
      { ja: '一番人気', en: 'Most popular' },
      { ja: '仕事と生活の両立', en: 'Balanced work and life' },
      { ja: '延長しやすい', en: 'Easy to extend' },
    ],
    compatibleLocales: ['ja', 'en'],
    propertyFeatureAffinity: ['コワーキング近接', '広めのデスク', 'コミュニティイベント'],
    defaultOptionIds: ['option-wifi', 'option-community'],
  },
  {
    id: 'plan-long',
    name: { ja: 'ロング', en: 'Long' },
    stayRange: { ja: '2〜3か月', en: '2-3 months' },
    durationCategory: 'long',
    monthlyPrice: 156000,
    recommendedFor: ['migrant', 'international'],
    highlights: [
      { ja: '移住検討に最適', en: 'Best for relocation planning' },
      { ja: '生活導線を確かめやすい', en: 'Good for testing daily life' },
      { ja: 'サポートを厚く付けやすい', en: 'More room for support options' },
    ],
    compatibleLocales: ['ja', 'en'],
    propertyFeatureAffinity: ['長期滞在向け', '収納充実', '静音環境'],
    defaultOptionIds: ['option-migration', 'option-community'],
  },
]

export const mockOptions: PlanOption[] = [
  {
    id: 'option-wifi',
    name: { ja: 'Wi-Fi強化', en: 'Enhanced Wi-Fi' },
    monthlyPrice: 6000,
    description: {
      ja: '高負荷なオンライン会議やアップロード向け回線オプション',
      en: 'Higher-capacity connection for calls and uploads',
    },
  },
  {
    id: 'option-english',
    name: { ja: '英語サポート', en: 'English support' },
    monthlyPrice: 12000,
    description: {
      ja: 'チェックインと生活案内を英語でサポート',
      en: 'English support for check-in and day-to-day guidance',
    },
  },
  {
    id: 'option-migration',
    name: { ja: '移住相談', en: 'Relocation consult' },
    monthlyPrice: 10000,
    description: {
      ja: '行政手続きやエリア選びを相談できるサポート',
      en: 'Consulting support for area selection and local procedures',
    },
  },
  {
    id: 'option-community',
    name: { ja: 'コミュニティ参加', en: 'Community access' },
    monthlyPrice: 3000,
    description: {
      ja: '滞在者交流イベントと地域案内へ参加可能',
      en: 'Access to resident meetups and local introductions',
    },
  },
]

export const recommendationQuestions: RecommendationQuestion[] = [
  {
    id: 'purpose',
    prompt: {
      ja: '今回の滞在目的に一番近いものは？',
      en: 'What best matches the purpose of this stay?',
    },
    choices: [
      {
        id: 'purpose-migration',
        label: {
          ja: '移住前に暮らしを試したい',
          en: 'I want to test daily life before relocating',
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
    prompt: { ja: '希望する滞在期間は？', en: 'How long would you like to stay?' },
    choices: [
      {
        id: 'duration-short',
        label: { ja: 'まずは1〜2週間', en: 'Start with 1-2 weeks' },
        planAffinity: ['short'],
        explanationTags: ['短期滞在'],
      },
      {
        id: 'duration-month',
        label: { ja: '1か月くらい', en: 'Around 1 month' },
        planAffinity: ['standard'],
        explanationTags: ['標準滞在'],
      },
      {
        id: 'duration-long',
        label: { ja: '2〜3か月じっくり', en: 'Take 2-3 months' },
        planAffinity: ['long'],
        explanationTags: ['長期滞在'],
      },
    ],
  },
  {
    id: 'support',
    prompt: {
      ja: '滞在中に特に重視したいことは？',
      en: 'What matters most during your stay?',
    },
    choices: [
      {
        id: 'support-connectivity',
        label: { ja: '通信品質', en: 'Connectivity' },
        planAffinity: ['short', 'standard'],
        optionAffinity: ['option-wifi'],
        propertyFeatureAffinity: ['高速Wi-Fi', '広めのデスク'],
        explanationTags: ['通信環境'],
      },
      {
        id: 'support-local',
        label: { ja: '地域とのつながり', en: 'Connection with the local area' },
        planAffinity: ['standard', 'long'],
        optionAffinity: ['option-community', 'option-migration'],
        propertyFeatureAffinity: ['コミュニティイベント', 'ビーチ徒歩圏内'],
        explanationTags: ['地域交流'],
      },
      {
        id: 'support-language',
        label: { ja: '言語サポート', en: 'Language support' },
        planAffinity: ['short', 'long'],
        optionAffinity: ['option-english'],
        propertyFeatureAffinity: ['英語対応可', '外国人サポート'],
        explanationTags: ['英語対応'],
      },
    ],
  },
]
