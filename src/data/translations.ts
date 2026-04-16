import type { AppLocale, LocalizedText } from '../types/domain.ts'

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
    ja: '3種類の想定ユーザーから選んで、一般画面または管理画面の導線を確認できます。',
    en: 'Choose one of three mock users to preview resident and admin flows.',
  },
  loginPersonaLabel: { ja: '利用タイプ', en: 'Persona' },
  onboardingTitle: { ja: 'レコメンド型プラン選択', en: 'Recommended plan selection' },
  onboardingDescription: {
    ja: '3つの質問に答えると、滞在スタイルに合うプランを提案します。',
    en: 'Answer three questions to get stay plans that fit your style.',
  },
  onboardingResultTitle: { ja: 'プラン診断結果', en: 'Recommendation results' },
  onboardingResultDescription: {
    ja: '回答後は、提案プランをベースにオプションや合計金額を調整できます。',
    en: 'After answering, adjust options and pricing based on the suggested plan.',
  },
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
} as const

export type TranslationKey = keyof typeof messages

export function translate(locale: AppLocale, key: TranslationKey) {
  return messages[key][locale]
}

export function localizeText(text: LocalizedText, locale: AppLocale) {
  return text[locale]
}

const enumTranslations = {
  features: {
    '家具家電付き': { ja: '家具家電付き', en: 'Furnished' },
    '空港アクセス良好': { ja: '空港アクセス良好', en: 'Good airport access' },
    '高速Wi-Fi': { ja: '高速Wi-Fi', en: 'High-speed Wi-Fi' },
    '静かな住環境': { ja: '静かな住環境', en: 'Quiet neighborhood' },
    'ファミリー向け': { ja: 'ファミリー向け', en: 'Family friendly' },
    '駐車場あり': { ja: '駐車場あり', en: 'Parking available' },
    'コワーキング近接': { ja: 'コワーキング近接', en: 'Near coworking spaces' },
    'コミュニティイベント': { ja: 'コミュニティイベント', en: 'Community events' },
    '広めのデスク': { ja: '広めのデスク', en: 'Large desk' },
    'ビーチ徒歩圏内': { ja: 'ビーチ徒歩圏内', en: 'Walkable to the beach' },
    '外国人サポート': { ja: '外国人サポート', en: 'International support' },
    '英語対応可': { ja: '英語対応可', en: 'English support available' },
    '長期滞在向け': { ja: '長期滞在向け', en: 'Great for long stays' },
    '収納充実': { ja: '収納充実', en: 'Plenty of storage' },
    '静音環境': { ja: '静音環境', en: 'Quiet interior' },
  },
  feedTypes: {
    event: { ja: 'イベント', en: 'Event' },
    food: { ja: '飲食', en: 'Food' },
    coworking: { ja: 'コワーキング', en: 'Coworking' },
    news: { ja: 'ニュース', en: 'News' },
  },
  workStyles: {
    remote: { ja: 'リモート', en: 'Remote' },
    hybrid: { ja: 'ハイブリッド', en: 'Hybrid' },
    explorer: { ja: '探索型', en: 'Explorer' },
  },
  consultationTopics: {
    area: { ja: 'エリア相談', en: 'Area fit' },
    school: { ja: '学校相談', en: 'Schooling' },
    housing: { ja: '住まい相談', en: 'Housing' },
    work: { ja: '仕事相談', en: 'Work' },
    procedures: { ja: '手続き相談', en: 'Procedures' },
  },
  yesNo: {
    yes: { ja: 'あり', en: 'Yes' },
    no: { ja: 'なし', en: 'No' },
  },
} as const

export function localizeFeature(feature: string, locale: AppLocale) {
  return enumTranslations.features[feature as keyof typeof enumTranslations.features]?.[locale] ?? feature
}

export function localizeFeedType(type: keyof typeof enumTranslations.feedTypes, locale: AppLocale) {
  return enumTranslations.feedTypes[type][locale]
}

export function localizeWorkStyle(style: keyof typeof enumTranslations.workStyles, locale: AppLocale) {
  return enumTranslations.workStyles[style][locale]
}

export function localizeConsultationTopic(
  topic: keyof typeof enumTranslations.consultationTopics,
  locale: AppLocale,
) {
  return enumTranslations.consultationTopics[topic][locale]
}

export function localizeYesNo(value: boolean, locale: AppLocale) {
  return value ? enumTranslations.yesNo.yes[locale] : enumTranslations.yesNo.no[locale]
}

export function localizeRequestStatus(status: string, locale: AppLocale) {
  const labels: Record<string, { ja: string; en: string }> = {
    requested: { ja: '受付済み', en: 'Requested' },
    confirmed: { ja: '確定', en: 'Confirmed' },
    completed: { ja: '完了', en: 'Completed' },
    draft: { ja: '下書き', en: 'Draft' },
    submitted: { ja: '送信済み', en: 'Submitted' },
    reviewing: { ja: '確認中', en: 'Reviewing' },
    approved: { ja: '承認済み', en: 'Approved' },
  }

  return labels[status]?.[locale] ?? status
}
