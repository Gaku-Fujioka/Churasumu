import { useState } from 'react'
import { SectionCard } from '../../components/SectionCard.tsx'
import { localizeConsultationTopic } from '../../data/translations.ts'
import { useAuth } from '../../hooks/useAuth.ts'
import { useLocale } from '../../hooks/useLocale.ts'

export function ConsultationPage() {
  const { currentUser } = useAuth()
  const { locale, t } = useLocale()
  const [topic, setTopic] = useState('area')
  const [preferredDate, setPreferredDate] = useState('2026-04-25T14:00')
  const [preferredArea, setPreferredArea] = useState('那覇市')
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const consultationSteps = [
    '相談内容を送信',
    '担当者が確認',
    '日程確定',
    'オンラインまたは現地で相談',
  ]

  return (
    <div className="page-grid">
      <SectionCard title={t('migrationConsultation')} description={t('migrationConsultationDescription')}>
        <form
          className="stack"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
        >
          <label className="field">
            <span>{locale === 'ja' ? '相談テーマ' : 'Topic'}</span>
            <select value={topic} onChange={(event) => setTopic(event.target.value)}>
              <option value="area">{localizeConsultationTopic('area', locale)}</option>
              <option value="school">{localizeConsultationTopic('school', locale)}</option>
              <option value="housing">{localizeConsultationTopic('housing', locale)}</option>
              <option value="work">{localizeConsultationTopic('work', locale)}</option>
              <option value="procedures">{localizeConsultationTopic('procedures', locale)}</option>
            </select>
          </label>
          <label className="field">
            <span>{locale === 'ja' ? '希望日時' : 'Preferred date'}</span>
            <input type="datetime-local" value={preferredDate} onChange={(event) => setPreferredDate(event.target.value)} />
          </label>
          <label className="field">
            <span>{locale === 'ja' ? '優先エリア' : 'Preferred area'}</span>
            <input value={preferredArea} onChange={(event) => setPreferredArea(event.target.value)} />
          </label>
          <label className="field">
            <span>{locale === 'ja' ? '相談メモ' : 'Note'}</span>
            <textarea rows={4} value={note} onChange={(event) => setNote(event.target.value)} />
          </label>
          <button type="submit">{t('migrationConsultationSubmit')}</button>
          {submitted ? (
            <p className="inline-note">
              {currentUser?.name ?? (locale === 'ja' ? '利用者' : 'User')} / {localizeConsultationTopic(topic as 'area' | 'school' | 'housing' | 'work' | 'procedures', locale)} / {preferredArea} / {preferredDate}
            </p>
          ) : null}
        </form>
      </SectionCard>

      <SectionCard
        title={locale === 'ja' ? '相談の流れ' : 'Consultation flow'}
        description={locale === 'ja' ? '予約送信後の進行イメージです。' : 'What happens after a request is submitted.'}
      >
        <div className="support-grid">
          {consultationSteps.map((step, index) => (
            <div key={step} className="mini-card">
              <strong>{locale === 'ja' ? `手順 ${index + 1}` : `Step ${index + 1}`}</strong>
              <p>
                {locale === 'ja'
                  ? ['相談内容を送信', '担当者が確認', '日程確定', 'オンラインまたは現地で相談'][index]
                  : ['Submit request', 'Advisor reviews it', 'Schedule is confirmed', 'Consult online or onsite'][index]}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title={locale === 'ja' ? 'よくある相談テーマ' : 'Recommended topics'}
        description={
          locale === 'ja'
            ? '移住検討者がよく選ぶ相談テーマです。'
            : 'Typical consultation topics for migration-focused users.'
        }
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>{locale === 'ja' ? 'エリア比較' : 'Area fit'}</strong>
            <p>
              {locale === 'ja'
                ? '暮らし方や通勤動線をもとに那覇・北谷・沖縄市を比較します。'
                : 'Compare Naha, Chatan, and Okinawa City based on lifestyle and commute.'}
            </p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '学校と子育て' : 'School and family support'}</strong>
            <p>
              {locale === 'ja'
                ? '保育園、学校区、子育てしやすい住宅地を整理したいときに有効です。'
                : 'Useful when exploring daycare, schools, and child-friendly neighborhoods.'}
            </p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '住まいと手続き' : 'Housing and procedures'}</strong>
            <p>
              {locale === 'ja'
                ? '賃貸と購入の比較、住民登録、ライフライン準備の確認に向いています。'
                : 'Good for understanding lease vs purchase, registration, and utilities.'}
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
