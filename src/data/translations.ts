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
} as const

export type TranslationKey = keyof typeof messages

export function translate(locale: AppLocale, key: TranslationKey) {
  return messages[key][locale]
}

export function localizeText(text: LocalizedText, locale: AppLocale) {
  return text[locale]
}
