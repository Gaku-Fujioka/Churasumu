import type { FaqEntry } from '../types/domain.ts'

export const mockFaq: FaqEntry[] = [
  {
    id: 'faq-wifi',
    question: {
      ja: 'Wi-Fi パスワードを知りたい',
      en: 'I need the Wi-Fi password',
    },
    keywords: ['wifi', 'wi-fi', 'パスワード', 'internet'],
    answer: {
      ja: 'Wi-Fi パスワードはチェックイン案内書の2ページ目に記載されています。見つからない場合はサポートへ再発行依頼を送れます。',
      en: 'The Wi-Fi password is listed on page 2 of the check-in guide. If you cannot find it, support can reissue the details.',
    },
  },
  {
    id: 'faq-garbage',
    question: {
      ja: 'ゴミ出しルールを知りたい',
      en: 'I want to know the trash rules',
    },
    keywords: ['ごみ', 'ゴミ', 'trash', 'garbage'],
    answer: {
      ja: '燃えるゴミは火曜と金曜、資源ゴミは木曜です。分別表は滞在管理ページの設備情報カードから確認できます。',
      en: 'Burnable trash is collected on Tuesday and Friday, and recyclables on Thursday. See the facility info card for details.',
    },
  },
  {
    id: 'faq-lock',
    question: {
      ja: 'スマートロックの使い方',
      en: 'How does the smart lock work?',
    },
    keywords: ['ロック', 'lock', '解錠', '施錠'],
    answer: {
      ja: '滞在管理ページのスマートロックカードから解錠・施錠ができます。現地端末と同期する想定のモック画面です。',
      en: 'Use the smart lock card on the stay page to lock or unlock. This is a mock screen that simulates syncing with the real device.',
    },
  },
  {
    id: 'faq-emergency',
    question: {
      ja: '緊急連絡先は？',
      en: 'What is the emergency contact?',
    },
    keywords: ['緊急', 'emergency', '連絡'],
    answer: {
      ja: '緊急時は 098-000-1190 に連絡してください。画面内の緊急連絡ボタンからも案内を確認できます。',
      en: 'For emergencies, call 098-000-1190. You can also view this guidance from the emergency button in the app.',
    },
  },
]
