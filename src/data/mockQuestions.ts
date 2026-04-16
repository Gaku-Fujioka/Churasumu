import type { QuestionPost } from '../types/domain.ts'

export const mockQuestions: QuestionPost[] = [
  {
    id: 'question-1',
    authorId: 'resident-1',
    authorName: '佐藤 美咲',
    title: {
      ja: '那覇で子育てしやすいエリアはどこですか？',
      en: 'Which area in Naha is best for raising a family?',
    },
    body: {
      ja: '保育園やスーパーにアクセスしやすいエリアを探しています。',
      en: 'I am looking for an area with easy access to daycare and supermarkets.',
    },
    tags: ['移住', '那覇', '子育て'],
    createdAt: '2026-04-15 08:40',
    solved: true,
    replies: [
      {
        id: 'reply-1',
        authorId: 'resident-2',
        authorName: '山城 健太',
        body: {
          ja: '首里周辺は静かで生活導線が作りやすい印象です。',
          en: 'The Shuri area feels calm and practical for everyday life.',
        },
        createdAt: '2026-04-15 09:10',
      },
    ],
  },
  {
    id: 'question-2',
    authorId: 'resident-3',
    authorName: 'Emma Lee',
    title: {
      ja: '英語で参加しやすい地域イベントはありますか？',
      en: 'Are there local events that are easy to join in English?',
    },
    body: {
      ja: '交流イベントや週末のコミュニティ活動を探しています。',
      en: 'I am looking for meetups or weekend community activities.',
    },
    tags: ['英語', 'イベント'],
    createdAt: '2026-04-15 13:20',
    solved: false,
    replies: [
      {
        id: 'reply-2',
        authorId: 'resident-2',
        authorName: '山城 健太',
        body: {
          ja: '北谷のコワーキングで毎週ミートアップがあります。',
          en: 'There is a weekly meetup at a coworking space in Chatan.',
        },
        createdAt: '2026-04-15 15:00',
      },
    ],
  },
]
