import { useState } from 'react'
import { SectionCard } from '../../components/SectionCard.tsx'
import { useAuth } from '../../hooks/useAuth.ts'
import { useLocale } from '../../hooks/useLocale.ts'

export function RentalSwitchPage() {
  const { currentUser } = useAuth()
  const { locale, t } = useLocale()
  const [desiredStart, setDesiredStart] = useState('2026-06-01')
  const [preferredArea, setPreferredArea] = useState('那覇市')
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const requestChecklist = [
    '希望開始時期を入力',
    '優先エリアと暮らし方を共有',
    '管理側が候補物件を整理',
    '内見または条件確認へ進む',
  ]

  return (
    <div className="page-grid">
      <SectionCard title={t('migrationRentalSwitch')} description={t('migrationRentalSwitchDescription')}>
        <form
          className="stack"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
        >
          <label className="field">
            <span>{locale === 'ja' ? '希望開始時期' : 'Desired start'}</span>
            <input type="date" value={desiredStart} onChange={(event) => setDesiredStart(event.target.value)} />
          </label>
          <label className="field">
            <span>{locale === 'ja' ? '希望エリア' : 'Preferred area'}</span>
            <input value={preferredArea} onChange={(event) => setPreferredArea(event.target.value)} />
          </label>
          <label className="field">
            <span>{locale === 'ja' ? '補足要望' : 'Note'}</span>
            <textarea rows={4} value={note} onChange={(event) => setNote(event.target.value)} />
          </label>
          <button type="submit">{t('migrationRentalSwitchSubmit')}</button>
          {submitted ? (
            <p className="inline-note">
              {currentUser?.name ?? 'User'} / {desiredStart} / {preferredArea}
            </p>
          ) : null}
        </form>
      </SectionCard>

      <SectionCard
        title={locale === 'ja' ? '申請の流れ' : 'Request guide'}
        description={
          locale === 'ja'
            ? '中期滞在から長期住まいへ移るときの流れです。'
            : 'A simple checklist for moving from medium-stay into long-term housing.'
        }
      >
        <div className="support-grid">
          {requestChecklist.map((item, index) => (
            <div key={item} className="mini-card">
              <strong>{locale === 'ja' ? `手順 ${index + 1}` : `Step ${index + 1}`}</strong>
              <p>
                {locale === 'ja'
                  ? ['希望開始時期を入力', '優先エリアと暮らし方を共有', '管理側が候補物件を整理', '内見または条件確認へ進む'][index]
                  : ['Enter desired start date', 'Share preferred area and lifestyle', 'Team prepares candidate homes', 'Move to viewing or condition review'][index]}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title={locale === 'ja' ? 'この申請が向いているケース' : 'When this is useful'}
        description={
          locale === 'ja'
            ? '購入より先に長期賃貸を選ぶとよい代表例です。'
            : 'Typical cases where rental switch works better than purchase.'
        }
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>{locale === 'ja' ? 'もう少し現地経験が必要' : 'Need more local experience'}</strong>
            <p>
              {locale === 'ja'
                ? '学校、通勤、生活圏をもう少し比較したいときに向いています。'
                : 'Good when you want to keep exploring schools, commuting, or neighborhoods.'}
            </p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '予算の比較中' : 'Budget still flexible'}</strong>
            <p>
              {locale === 'ja'
                ? '購入計画と長期賃貸のバランスを見ながら判断したい場合に便利です。'
                : 'Useful if you are comparing long-term rent against future purchase plans.'}
            </p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '早めに入居したい' : 'Faster move-in'}</strong>
            <p>
              {locale === 'ja'
                ? '希望エリアが決まっていて、スピード重視で住まいを探したいときに有効です。'
                : 'Works well when you already know the preferred area and want a shorter path.'}
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
