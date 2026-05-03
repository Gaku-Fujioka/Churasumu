import type { AppLocale, LocalizedText } from '../types/domain.ts'
import { messageTranslationsKo, messageTranslationsZh } from './messageLocaleZhKo.ts'

export const messages = {
  appTagline: {
    ja: '沖縄特化の中期滞在プラットフォーム',
    en: 'Mid-stay platform focused on Okinawa',
  },
  navOnboarding: { ja: 'プラン選択', en: 'Plans' },
  navStay: { ja: '滞在管理', en: 'Stay' },
  navChat: { ja: 'AIチャット', en: 'AI Chat' },
  navCommunity: { ja: 'コミュニティ', en: 'Community' },
  navMigration: { ja: '移住導線', en: 'Migration' },
  navAdmin: { ja: '管理画面', en: 'Admin' },
  logout: { ja: 'ログアウト', en: 'Log out' },
  loggedOut: { ja: '未ログイン', en: 'Logged out' },
  loginTitle: { ja: 'モックログイン', en: 'Mock login' },
  loginDescription: {
    ja: '想定ユーザー（滞在者3名＋管理者1名）から選び、一般画面または管理画面の導線を確認できます。',
    en: 'Pick a mock profile (three residents plus one admin) to preview resident or admin flows.',
  },
  dataLoading: { ja: '読み込み中…', en: 'Loading…' },
  loginPersonaLabel: { ja: '利用タイプ', en: 'Persona' },
  onboardingTitle: { ja: 'レコメンド型プラン選択', en: 'Recommended plan selection' },
  onboardingDescription: {
    ja: '3つの質問に答えると、滞在スタイルに合うプランを提案します。',
    en: 'Answer three questions to get stay plans that fit your style.',
  },
  onboardingResultTitle: { ja: 'プラン診断結果', en: 'Recommendation results' },
  onboardingResultDescription: {
    ja: '回答後はプランを選び、物件候補・オプション・料金を確認してから契約書類の確認とモック決済へ進んでください。',
    en: 'After answering, pick a plan, review property matches, options, and pricing, then confirm documents and mock checkout.',
  },
  onboardingPlanPickTitle: { ja: '加入プランを選択', en: 'Choose your plan' },
  onboardingPlanPickDescription: {
    ja: '次の3種類から選ぶと、プランに合わせて物件候補の並びが変わります。',
    en: 'Pick one of three plans; suggested properties reorder to match that plan.',
  },
  onboardingQuizTopMatch: { ja: '診断の第1候補', en: 'Top match from quiz' },
  onboardingTopPlans: { ja: 'おすすめ候補', en: 'Top recommendations' },
  onboardingSuggestedProperties: { ja: '物件候補', en: 'Suggested properties' },
  onboardingSuggestedOptions: { ja: 'おすすめオプション', en: 'Suggested options' },
  onboardingMonthlyTotal: { ja: '月額合計', en: 'Monthly total' },
  onboardingSelectedOptions: { ja: '選択オプション数', en: 'Selected options' },
  onboardingContract: { ja: '契約書類を確認', en: 'Review contract documents' },
  onboardingCheckout: { ja: 'モック決済へ進む', en: 'Proceed to mock checkout' },
  onboardingWaiting: {
    ja: '3問すべてに回答すると、ここにおすすめプランが表示されます。',
    en: 'Recommended plans will appear here after all three questions are answered.',
  },
  onboardingContractDone: {
    ja: '契約書類確認済み: 利用規約、キャンセルポリシー、チェックインガイドを確認した想定です。',
    en: 'Contract reviewed: terms, cancellation policy, and check-in guide are assumed confirmed.',
  },
  onboardingCheckoutDone: {
    ja: 'モック決済完了: 申込内容を保存し、滞在管理ページで入居準備を進められます。',
    en: 'Mock checkout completed: your application is saved and you can continue in Stay Management.',
  },
  stayEnrolledPlanTitle: { ja: 'ご契約プラン', en: 'Your enrolled plan' },
  stayEnrolledPlanDescription: {
    ja: '契約書類の確認とモック決済が完了した申込内容です（この端末に保存）。',
    en: 'Saved on this device after contract review and mock checkout.',
  },
  stayEnrolledPropertyLabel: { ja: '割当物件', en: 'Assigned property' },
  stayPlanPropertiesTitle: { ja: 'プラン対象の家', en: 'Homes available on your plan' },
  stayPlanPropertiesDescription: {
    ja: '加入プラン対象の物件から、空きの家を1件選んで入居します。退去すると再び空きになります。',
    en: 'Pick one available home from your plan to move in. Leaving a home returns it to available.',
  },
  stayPickProperty: { ja: 'この家に入居する', en: 'Move into this home' },
  stayLeaveProperty: { ja: '退去する', en: 'Leave this home' },
  stayLeaveConfirm: {
    ja: 'この家から退去しますか？ 退去後は別の空きの家を選び直せます。',
    en: 'Leave this home? After leaving you can pick a different available home.',
  },
  stayStatusStaying: { ja: '滞在中', en: 'Staying' },
  stayStatusAvailable: { ja: '空き', en: 'Available' },
  stayStatusOtherUser: { ja: '他ユーザー滞在中', en: 'Occupied by another user' },
  stayPickPrompt: {
    ja: 'まだ家を選んでいません。下の「プラン対象の家」から空きの家を1件選んで入居してください。',
    en: 'No home selected yet. Pick an available home below to move in.',
  },
  stayHeroNoPropertyTitle: {
    ja: '入居する家を選んでください',
    en: 'Choose a home to move into',
  },
  stayHeroNoPropertySubtitle: {
    ja: 'プラン対象の家の一覧は下にあります。空きの家を選ぶと、ここに反映されます。',
    en: 'Available homes for your plan are listed below. Your choice will appear here.',
  },
  stayStatusNoProperty: { ja: '家未決定', en: 'No home yet' },
  stayCancelPlan: { ja: '解約する', en: 'Cancel contract' },
  stayCancelConfirm: {
    ja: '解約すると契約情報がリセットされ、プラン選択からやり直しになります。よろしいですか？',
    en: 'Cancelling will reset your contract and you will need to go through plan selection again. Are you sure?',
  },
  staySummaryTitle: { ja: '滞在サマリー', en: 'Stay summary' },
  staySummaryDescription: {
    ja: '入居中の物件情報、ロック状態、延長申請を1画面で確認できます。',
    en: 'Check property info, lock status, and extension request in one place.',
  },
  troubleReportTitle: { ja: 'トラブル報告', en: 'Trouble report' },
  troubleReportDescription: {
    ja: '写真アップロードはファイル名のみ保持するモックです。',
    en: 'Photo upload is mocked and only stores the selected file name.',
  },
  supportTitle: { ja: '生活サポート', en: 'Living support' },
  supportDescription: {
    ja: '清掃依頼、設備情報、緊急連絡の簡易導線です。',
    en: 'Simple actions for cleaning requests, facility info, and emergencies.',
  },
  chatbotTitle: { ja: 'AIチャットボット', en: 'AI chatbot' },
  chatbotDescription: {
    ja: '固定FAQをもとに、キーワード一致で自動回答する簡易チャットです。',
    en: 'A simple chatbot that answers by matching keywords against fixed FAQs.',
  },
  chatbotPlaceholder: { ja: '例: Wi-Fi パスワードを知りたい', en: 'Example: I need the Wi-Fi password' },
  chatbotSend: { ja: '送信', en: 'Send' },
  chatbotFallback: {
    ja: '該当するFAQが見つかりませんでした。Wi-Fi、ゴミ出し、ロック、緊急連絡などで質問すると回答しやすいです。',
    en: 'No FAQ matched. Try asking about Wi-Fi, trash rules, the smart lock, or emergency contact.',
  },
  chatbotGreeting: {
    ja: 'こんにちは。滞在中のよくある質問にモック回答します。',
    en: 'Hello. I provide mock answers to common questions during your stay.',
  },
  adminTitle: { ja: '売上サマリー', en: 'Sales summary' },
  adminDescription: { ja: '管理者向けの固定データダッシュボードです。', en: 'Mock dashboard data for administrators.' },
  communityHubTitle: { ja: 'コミュニティハブ', en: 'Community hub' },
  communityHubDescription: {
    ja: '滞在者、Q&A、地域情報、クーポン、レビュー、作業スポットをまとめて確認できます。',
    en: 'Browse residents, Q&A, local feed, coupons, reviews, and work spots in one place.',
  },
  communityResidents: { ja: '滞在者一覧', en: 'Residents' },
  communityQuestions: { ja: '移住者Q&A', en: 'Migration Q&A' },
  communityFeed: { ja: '地域情報フィード', en: 'Local feed' },
  communityCoupons: { ja: 'クーポン', en: 'Coupons' },
  communityReviews: { ja: 'レビュー', en: 'Reviews' },
  communityWorkSpots: { ja: '作業スポット', en: 'Work spots' },
  viewDetails: { ja: '詳細を見る', en: 'View details' },
  save: { ja: '保存', en: 'Save' },
  saved: { ja: '保存済み', en: 'Saved' },
  postQuestion: { ja: '質問を投稿', en: 'Post question' },
  postReview: { ja: 'レビューを投稿', en: 'Post review' },
  languageJa: { ja: '日本語', en: 'Japanese' },
  languageEn: { ja: '英語', en: 'English' },
  migrationHubTitle: { ja: '移住ハブ', en: 'Migration hub' },
  migrationHubDescription: {
    ja: '相談予約、購入シミュレーター、お気に入り物件、長期賃貸切替、生活サポート情報をまとめて確認できます。',
    en: 'Access consultations, purchase simulation, favorite properties, rental switch, and support resources in one place.',
  },
  migrationConsultation: { ja: '移住相談予約', en: 'Consultation booking' },
  migrationSimulator: { ja: '物件購入シミュレーター', en: 'Purchase simulator' },
  migrationFavorites: { ja: 'お気に入り物件', en: 'Favorite properties' },
  migrationRentalSwitch: { ja: '長期賃貸切替申請', en: 'Rental switch request' },
  migrationSupport: { ja: '移住後サポート情報', en: 'Support information' },
  migrationGo: { ja: '移住導線へ進む', en: 'Go to migration flow' },
  migrationPropertyPurchasePrice: { ja: '参考購入価格', en: 'Reference purchase price' },
  migrationMonthlyMortgage: { ja: '想定月額返済', en: 'Estimated monthly mortgage' },
  migrationDownPaymentRatio: { ja: '頭金比率', en: 'Down payment ratio' },
  migrationConsultationSubmit: { ja: '相談予約を送信', en: 'Submit consultation request' },
  migrationRentalSwitchSubmit: { ja: '切替申請を送信', en: 'Submit rental switch request' },
  migrationFavoriteEmpty: { ja: '保存済みの物件はまだありません。', en: 'No saved properties yet.' },
  migrationAdminSection: { ja: '移住リード管理', en: 'Migration leads' },
  communityQuestionStatusOpen: { ja: '受付中', en: 'Open' },
  communityQuestionStatusSolved: { ja: '解決済み', en: 'Solved' },
  communityQuestionDetail: { ja: '詳細', en: 'Detail' },
  communitySuggestedMatch: { ja: 'おすすめマッチ', en: 'Suggested match' },
  communityResidentDescription: {
    ja: '興味関心や滞在スタイルから近い滞在者を探せます。',
    en: 'Find residents with similar interests and stay styles.',
  },
  communityQuestionsDescription: {
    ja: '質問を投稿し、滞在者からの回答を確認できます。',
    en: 'Post questions and review replies from current residents.',
  },
  communityFeedDescription: {
    ja: 'カテゴリで地域情報を絞り込めます。',
    en: 'Filter local updates by category.',
  },
  migrationConsultationDescription: {
    ja: '相談テーマや希望エリアを指定して、移住相談を予約できます。',
    en: 'Book a relocation consultation with your topic and preferred area.',
  },
  migrationSimulatorDescription: {
    ja: '簡単な入力から月額返済や総支払額を試算します。',
    en: 'Estimate monthly mortgage and total payment from simple inputs.',
  },
  migrationFavoritesDescription: {
    ja: 'あとで見返したい物件を保存・解除できます。',
    en: 'Save or remove properties you want to revisit later.',
  },
  migrationRentalSwitchDescription: {
    ja: '中期滞在から長期賃貸へ切り替えるための申請です。',
    en: 'Submit a request to move from medium-stay into long-term rental.',
  },
  migrationSupportDescription: {
    ja: '沖縄移住後に役立つ行政・学校・医療・交通情報を確認できます。',
    en: 'Browse key administration, school, medical, and transport information after moving.',
  },
  stayHomeQuickNavAria: { ja: '主要メニュー', en: 'Main shortcuts' },
  stayHomeQuickStay: { ja: '滞在', en: 'Stay' },
  stayHomeQuickCommunity: { ja: 'コミュニティ', en: 'Community' },
  stayHomeQuickMigration: { ja: '移住', en: 'Move' },
  stayHomeQuickChat: { ja: 'AI チャット', en: 'AI chat' },
  stayHomeQuickCoupons: { ja: 'クーポン', en: 'Coupons' },
  stayHomeStripConsult: { ja: '相談', en: 'Consult' },
  stayHomeStripFavorites: { ja: 'お気に入り', en: 'Saved' },
  stayHomeStripFeed: { ja: '地域情報', en: 'Local' },
  stayHomeStripReviews: { ja: '口コミ', en: 'Reviews' },
  stayHomeStripWorkSpots: { ja: '作業スポット', en: 'Work' },
  stayHomeStripSupport: { ja: '生活支援', en: 'Support' },
} as const

export type TranslationKey = keyof typeof messages

export function translate(locale: AppLocale, key: TranslationKey) {
  const row = messages[key] as { ja: string; en: string }
  if (locale === 'ja') {
    return row.ja
  }
  if (locale === 'en') {
    return row.en
  }
  if (locale === 'zh') {
    return messageTranslationsZh[key] ?? row.en
  }
  if (locale === 'ko') {
    return messageTranslationsKo[key] ?? row.en
  }
  return row.en
}

export function localizeText(text: LocalizedText, locale: AppLocale) {
  switch (locale) {
    case 'ja':
      return text.ja
    case 'en':
      return text.en
    case 'zh':
      return text.zh ?? text.en
    case 'ko':
      return text.ko ?? text.en
    default:
      return text.en
  }
}

const enumTranslations = {
  features: {
    '家具家電付き': { ja: '家具家電付き', en: 'Furnished', zh: '含家具家电', ko: '가구·가전 포함' },
    '空港アクセス良好': { ja: '空港アクセス良好', en: 'Good airport access', zh: '机场交通便利', ko: '공항 접근성 좋음' },
    '高速Wi-Fi': { ja: '高速Wi-Fi', en: 'High-speed Wi-Fi', zh: '高速 Wi‑Fi', ko: '고속 Wi‑Fi' },
    '静かな住環境': { ja: '静かな住環境', en: 'Quiet neighborhood', zh: '安静居住环境', ko: '조용한 주거 환경' },
    'ファミリー向け': { ja: 'ファミリー向け', en: 'Family friendly', zh: '适合家庭', ko: '가족 친화' },
    '駐車場あり': { ja: '駐車場あり', en: 'Parking available', zh: '有停车位', ko: '주차 가능' },
    'コワーキング近接': { ja: 'コワーキング近接', en: 'Near coworking spaces', zh: '靠近联合办公', ko: '코워킹 근접' },
    'コミュニティイベント': { ja: 'コミュニティイベント', en: 'Community events', zh: '社区活动', ko: '커뮤니티 이벤트' },
    '広めのデスク': { ja: '広めのデスク', en: 'Large desk', zh: '宽大书桌', ko: '넓은 책상' },
    'ビーチ徒歩圏内': { ja: 'ビーチ徒歩圏内', en: 'Walkable to the beach', zh: '步行可达海滩', ko: '해변 도보권' },
    '外国人サポート': { ja: '外国人サポート', en: 'International support', zh: '外籍人士支持', ko: '외국인 지원' },
    '英語対応可': { ja: '英語対応可', en: 'English support available', zh: '可提供英语服务', ko: '영어 대응 가능' },
    '長期滞在向け': { ja: '長期滞在向け', en: 'Great for long stays', zh: '适合长期停留', ko: '장기 체류에 적합' },
    '収納充実': { ja: '収納充実', en: 'Plenty of storage', zh: '收纳充足', ko: '수납 충분' },
    '静音環境': { ja: '静音環境', en: 'Quiet interior', zh: '静音环境', ko: '저소음 실내' },
  },
  feedTypes: {
    event: { ja: 'イベント', en: 'Event', zh: '活动', ko: '이벤트' },
    food: { ja: '飲食', en: 'Food', zh: '餐饮', ko: '음식' },
    coworking: { ja: 'コワーキング', en: 'Coworking', zh: '联合办公', ko: '코워킹' },
    news: { ja: 'ニュース', en: 'News', zh: '资讯', ko: '뉴스' },
  },
  workStyles: {
    remote: { ja: 'リモート', en: 'Remote', zh: '远程', ko: '원격' },
    hybrid: { ja: 'ハイブリッド', en: 'Hybrid', zh: '混合', ko: '하이브리드' },
    explorer: { ja: '探索型', en: 'Explorer', zh: '探索型', ko: '탐험형' },
  },
  consultationTopics: {
    area: { ja: 'エリア相談', en: 'Area fit', zh: '区域咨询', ko: '지역 상담' },
    school: { ja: '学校相談', en: 'Schooling', zh: '学校咨询', ko: '학교 상담' },
    housing: { ja: '住まい相談', en: 'Housing', zh: '住房咨询', ko: '주거 상담' },
    work: { ja: '仕事相談', en: 'Work', zh: '工作咨询', ko: '일 상담' },
    procedures: { ja: '手続き相談', en: 'Procedures', zh: '手续咨询', ko: '절차 상담' },
  },
  yesNo: {
    yes: { ja: 'あり', en: 'Yes', zh: '有', ko: '있음' },
    no: { ja: 'なし', en: 'No', zh: '无', ko: '없음' },
  },
} as const

export function localizeFeature(feature: string, locale: AppLocale) {
  const row = enumTranslations.features[feature as keyof typeof enumTranslations.features]
  if (!row) {
    return feature
  }
  return (row as Record<AppLocale, string | undefined>)[locale] ?? row.en ?? feature
}

export function localizeFeedType(type: keyof typeof enumTranslations.feedTypes, locale: AppLocale) {
  const row = enumTranslations.feedTypes[type]
  return (row as Record<AppLocale, string | undefined>)[locale] ?? row.en
}

export function localizeWorkStyle(style: keyof typeof enumTranslations.workStyles, locale: AppLocale) {
  const row = enumTranslations.workStyles[style]
  return (row as Record<AppLocale, string | undefined>)[locale] ?? row.en
}

export function localizeConsultationTopic(
  topic: keyof typeof enumTranslations.consultationTopics,
  locale: AppLocale,
) {
  const row = enumTranslations.consultationTopics[topic]
  return (row as Record<AppLocale, string | undefined>)[locale] ?? row.en
}

export function localizeYesNo(value: boolean, locale: AppLocale) {
  const row = value ? enumTranslations.yesNo.yes : enumTranslations.yesNo.no
  return (row as Record<AppLocale, string | undefined>)[locale] ?? row.en
}

export function localizeRequestStatus(status: string, locale: AppLocale) {
  const labels: Record<string, Record<AppLocale, string>> = {
    requested: { ja: '受付済み', en: 'Requested', zh: '已受理', ko: '접수됨' },
    confirmed: { ja: '確定', en: 'Confirmed', zh: '已确定', ko: '확정' },
    completed: { ja: '完了', en: 'Completed', zh: '已完成', ko: '완료' },
    draft: { ja: '下書き', en: 'Draft', zh: '草稿', ko: '초안' },
    submitted: { ja: '送信済み', en: 'Submitted', zh: '已提交', ko: '제출됨' },
    reviewing: { ja: '確認中', en: 'Reviewing', zh: '审核中', ko: '검토 중' },
    approved: { ja: '承認済み', en: 'Approved', zh: '已批准', ko: '승인됨' },
  }

  const row = labels[status]
  return row ? (row[locale] ?? row.en) : status
}

const recommendationTagTranslations: Record<string, Record<AppLocale, string>> = {
  移住準備: { ja: '移住準備', en: 'Relocation prep', zh: '移居准备', ko: '이주 준비' },
  生活検証: { ja: '生活検証', en: 'Life validation', zh: '生活验证', ko: '생활 검증' },
  ワーケーション: { ja: 'ワーケーション', en: 'Workation', zh: '工作度假', ko: '워케이션' },
  働きやすさ: { ja: '働きやすさ', en: 'Work-friendly', zh: '易于工作', ko: '일하기 좋음' },
  サポート重視: { ja: 'サポート重視', en: 'Support-focused', zh: '重视支持', ko: '지원 중시' },
  短期滞在: { ja: '短期滞在', en: 'Short stay', zh: '短期停留', ko: '단기 체류' },
  標準滞在: { ja: '標準滞在', en: 'Standard stay', zh: '标准停留', ko: '표준 체류' },
  長期滞在: { ja: '長期滞在', en: 'Long stay', zh: '长期停留', ko: '장기 체류' },
  通信環境: { ja: '通信環境', en: 'Connectivity', zh: '网络环境', ko: '통신 환경' },
  地域交流: { ja: '地域交流', en: 'Local exchange', zh: '社区交流', ko: '지역 교류' },
  英語対応: { ja: '英語対応', en: 'English-ready', zh: '支持英语', ko: '영어 대응' },
}

const personaTagTranslations: Record<string, Record<AppLocale, string>> = {
  nomad: { ja: 'ノマド向け', en: 'Suits digital nomads', zh: '适合数字游民', ko: '디지털 노마드에 적합' },
  migrant: { ja: '移住検討向け', en: 'For future migrants', zh: '适合移居考虑者', ko: '이주 검토자에 적합' },
  international: { ja: '外国人滞在向け', en: 'For international stays', zh: '适合外籍人士', ko: '외국인 체류자에 적합' },
  resident: { ja: '現地住民向け', en: 'For local residents', zh: '适合本地住户', ko: '현지 주민에 적합' },
}

const localeTagTranslations: Record<AppLocale, Record<AppLocale, string>> = {
  ja: { ja: '日本語対応', en: 'Japanese support', zh: '支持日语', ko: '일본어 대응' },
  en: { ja: '英語対応', en: 'English support', zh: '支持英语', ko: '영어 대응' },
  zh: { ja: '中国語対応', en: 'Chinese support', zh: '支持中文', ko: '중국어 대응' },
  ko: { ja: '韓国語対応', en: 'Korean support', zh: '支持韩语', ko: '한국어 대응' },
}

export function localizeRecommendationReason(reason: string, locale: AppLocale) {
  if (reason.startsWith('persona:')) {
    const key = reason.slice('persona:'.length)
    const row = personaTagTranslations[key]
    return row ? (row[locale] ?? row.en) : reason
  }
  if (reason.startsWith('locale:')) {
    const key = reason.slice('locale:'.length) as AppLocale
    const row = localeTagTranslations[key]
    return row ? (row[locale] ?? row.en) : reason
  }
  const row = recommendationTagTranslations[reason]
  return row ? (row[locale] ?? row.en) : reason
}

/** 管理画面トラブル報告の対応ステータス（内部値は new / in_progress / resolved のまま） */
export function localizeTroubleReportStatus(status: string, locale: AppLocale) {
  const labels: Record<string, Record<AppLocale, string>> = {
    new: { ja: '新規', en: 'New', zh: '新建', ko: '신규' },
    in_progress: { ja: '対応中', en: 'In progress', zh: '处理中', ko: '처리 중' },
    resolved: { ja: '完了', en: 'Resolved', zh: '已完成', ko: '완료' },
  }

  const row = labels[status]
  return row ? (row[locale] ?? row.en) : status
}
