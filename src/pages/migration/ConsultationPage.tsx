import { useState } from 'react'
import { SectionCard } from '../../components/SectionCard.tsx'
import { localizeConsultationTopic } from '../../data/translations.ts'
import { useAuth } from '../../hooks/useAuth.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { pickUi } from '../../lib/pickUi.ts'

const consultationFlowLines: [string, string, string, string][] = [
  ['相談内容を送信', 'Submit request', '提交咨询内容', '상담 내용 제출'],
  ['担当者が確認', 'Advisor reviews it', '负责人确认', '담당자 확인'],
  ['日程確定', 'Schedule is confirmed', '确定日程', '일정 확정'],
  ['オンラインまたは現地で相談', 'Consult online or onsite', '在线或现场咨询', '온라인 또는 현지 상담'],
]

export function ConsultationPage() {
  const { currentUser } = useAuth()
  const { locale, t } = useLocale()
  const [topic, setTopic] = useState('area')
  const [preferredDate, setPreferredDate] = useState('2026-04-25T14:00')
  const [preferredArea, setPreferredArea] = useState('那覇市')
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)

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
            <span>
              {pickUi(locale, { ja: '相談テーマ', en: 'Topic', zh: '咨询主题', ko: '상담 주제' })}
            </span>
            <select value={topic} onChange={(event) => setTopic(event.target.value)}>
              <option value="area">{localizeConsultationTopic('area', locale)}</option>
              <option value="school">{localizeConsultationTopic('school', locale)}</option>
              <option value="housing">{localizeConsultationTopic('housing', locale)}</option>
              <option value="work">{localizeConsultationTopic('work', locale)}</option>
              <option value="procedures">{localizeConsultationTopic('procedures', locale)}</option>
            </select>
          </label>
          <label className="field">
            <span>
              {pickUi(locale, { ja: '希望日時', en: 'Preferred date', zh: '希望日期时间', ko: '희망 일시' })}
            </span>
            <input type="datetime-local" value={preferredDate} onChange={(event) => setPreferredDate(event.target.value)} />
          </label>
          <label className="field">
            <span>
              {pickUi(locale, { ja: '優先エリア', en: 'Preferred area', zh: '优先区域', ko: '우선 지역' })}
            </span>
            <input value={preferredArea} onChange={(event) => setPreferredArea(event.target.value)} />
          </label>
          <label className="field">
            <span>
              {pickUi(locale, { ja: '相談メモ', en: 'Note', zh: '备注', ko: '메모' })}
            </span>
            <textarea rows={4} value={note} onChange={(event) => setNote(event.target.value)} />
          </label>
          <button type="submit">{t('migrationConsultationSubmit')}</button>
          {submitted ? (
            <p className="inline-note">
              {currentUser?.name ??
                pickUi(locale, { ja: '利用者', en: 'User', zh: '用户', ko: '사용자' })}{' '}
              / {localizeConsultationTopic(topic as 'area' | 'school' | 'housing' | 'work' | 'procedures', locale)} / {preferredArea} /{' '}
              {preferredDate}
            </p>
          ) : null}
        </form>
      </SectionCard>

      <SectionCard
        title={pickUi(locale, { ja: '相談の流れ', en: 'Consultation flow', zh: '咨询流程', ko: '상담 흐름' })}
        description={pickUi(locale, {
          ja: '予約送信後の進行イメージです。',
          en: 'What happens after a request is submitted.',
          zh: '提交预约后的流程示意。',
          ko: '예약 제출 후 진행 이미지입니다.',
        })}
      >
        <div className="support-grid">
          {consultationFlowLines.map(([ja, en, zh, ko], index) => (
            <div key={ja} className="mini-card">
              <strong>
                {pickUi(locale, {
                  ja: `手順 ${index + 1}`,
                  en: `Step ${index + 1}`,
                  zh: `步骤 ${index + 1}`,
                  ko: `단계 ${index + 1}`,
                })}
              </strong>
              <p>{pickUi(locale, { ja, en, zh, ko })}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title={pickUi(locale, { ja: 'よくある相談テーマ', en: 'Recommended topics', zh: '常见咨询主题', ko: '자주 묻는 상담 주제' })}
        description={pickUi(locale, {
          ja: '移住検討者がよく選ぶ相談テーマです。',
          en: 'Typical consultation topics for migration-focused users.',
          zh: '移居意向者常选的咨询主题。',
          ko: '이주 검토자가 자주 고르는 상담 주제입니다.',
        })}
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>{pickUi(locale, { ja: 'エリア比較', en: 'Area fit', zh: '区域比较', ko: '지역 비교' })}</strong>
            <p>
              {pickUi(locale, {
                ja: '暮らし方や通勤動線をもとに那覇・北谷・沖縄市を比較します。',
                en: 'Compare Naha, Chatan, and Okinawa City based on lifestyle and commute.',
                zh: '结合生活方式与通勤动线比较那霸、北谷与冲绳市。',
                ko: '생활 방식과 통근 동선을 바탕으로 나하·채탄·오키나와시를 비교합니다.',
              })}
            </p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: '学校と子育て',
                en: 'School and family support',
                zh: '学校与育儿',
                ko: '학교와 육아',
              })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: '保育園、学校区、子育てしやすい住宅地を整理したいときに有効です。',
                en: 'Useful when exploring daycare, schools, and child-friendly neighborhoods.',
                zh: '需要整理托育、学区与育儿友好住区时很有用。',
                ko: '어린이집·학군·육아 친화 주거지를 정리할 때 유용합니다.',
              })}
            </p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: '住まいと手続き',
                en: 'Housing and procedures',
                zh: '住房与手续',
                ko: '주거와 절차',
              })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: '賃貸と購入の比較、住民登録、ライフライン準備の確認に向いています。',
                en: 'Good for understanding lease vs purchase, registration, and utilities.',
                zh: '适合比较租与买、居民登记及生活动线准备。',
                ko: '임대 vs 매입, 주민 등록, 생활 인프라 준비 확인에 적합합니다.',
              })}
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
