import { useState } from 'react'
import { SectionCard } from '../../components/SectionCard.tsx'
import { useAuth } from '../../hooks/useAuth.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { pickUi } from '../../lib/pickUi.ts'

const requestFlowLines: [string, string, string, string][] = [
  ['希望開始時期を入力', 'Enter desired start date', '输入希望开始日期', '희망 시작일 입력'],
  ['優先エリアと暮らし方を共有', 'Share preferred area and lifestyle', '分享优先区域与生活方式', '우선 지역·생활 방식 공유'],
  ['管理側が候補物件を整理', 'Team prepares candidate homes', '管理方整理候选房源', '관리측이 후보 매물 정리'],
  ['内見または条件確認へ進む', 'Move to viewing or condition review', '进入看房或条件确认', '내부 보기 또는 조건 확인으로'],
]

export function RentalSwitchPage() {
  const { currentUser } = useAuth()
  const { locale, t } = useLocale()
  const [desiredStart, setDesiredStart] = useState('2026-06-01')
  const [preferredArea, setPreferredArea] = useState('那覇市')
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)

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
            <span>
              {pickUi(locale, { ja: '希望開始時期', en: 'Desired start', zh: '希望开始时间', ko: '희망 시작 시기' })}
            </span>
            <input type="date" value={desiredStart} onChange={(event) => setDesiredStart(event.target.value)} />
          </label>
          <label className="field">
            <span>
              {pickUi(locale, { ja: '希望エリア', en: 'Preferred area', zh: '希望区域', ko: '희망 지역' })}
            </span>
            <input value={preferredArea} onChange={(event) => setPreferredArea(event.target.value)} />
          </label>
          <label className="field">
            <span>
              {pickUi(locale, { ja: '補足要望', en: 'Note', zh: '补充需求', ko: '추가 요청' })}
            </span>
            <textarea rows={4} value={note} onChange={(event) => setNote(event.target.value)} />
          </label>
          <button type="submit">{t('migrationRentalSwitchSubmit')}</button>
          {submitted ? (
            <p className="inline-note">
              {currentUser?.name ?? pickUi(locale, { ja: '利用者', en: 'User', zh: '用户', ko: '사용자' })} / {desiredStart} /{' '}
              {preferredArea}
            </p>
          ) : null}
        </form>
      </SectionCard>

      <SectionCard
        title={pickUi(locale, { ja: '申請の流れ', en: 'Request guide', zh: '申请流程', ko: '신청 안내' })}
        description={pickUi(locale, {
          ja: '中期滞在から長期住まいへ移るときの流れです。',
          en: 'A simple checklist for moving from medium-stay into long-term housing.',
          zh: '从中期停留过渡到长期住房的步骤。',
          ko: '중기 체류에서 장기 주거로 넘어갈 때의 흐름입니다.',
        })}
      >
        <div className="support-grid">
          {requestFlowLines.map(([ja, en, zh, ko], index) => (
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
        title={pickUi(locale, { ja: 'この申請が向いているケース', en: 'When this is useful', zh: '适合本申请的情况', ko: '이 신청이 적합한 경우' })}
        description={pickUi(locale, {
          ja: '購入より先に長期賃貸を選ぶとよい代表例です。',
          en: 'Typical cases where rental switch works better than purchase.',
          zh: '相比购房更适合先选长租的典型情形。',
          ko: '구매보다 장기 임대를 먼저 고르기 좋은 대표 사례입니다.',
        })}
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: 'もう少し現地経験が必要',
                en: 'Need more local experience',
                zh: '需要更多本地体验',
                ko: '현지 경험이 더 필요',
              })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: '学校、通勤、生活圏をもう少し比較したいときに向いています。',
                en: 'Good when you want to keep exploring schools, commuting, or neighborhoods.',
                zh: '想继续比较学校、通勤与生活圈时更合适。',
                ko: '학교·통근·생활권을 더 비교하고 싶을 때 적합합니다.',
              })}
            </p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, { ja: '予算の比較中', en: 'Budget still flexible', zh: '预算仍在比较', ko: '예산 비교 중' })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: '購入計画と長期賃貸のバランスを見ながら判断したい場合に便利です。',
                en: 'Useful if you are comparing long-term rent against future purchase plans.',
                zh: '在购房计划与长租之间权衡时很有用。',
                ko: '구매 계획과 장기 임대의 균형을 보며 판단할 때 유용합니다.',
              })}
            </p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, { ja: '早めに入居したい', en: 'Faster move-in', zh: '希望尽快入住', ko: '빠른 입주' })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: '希望エリアが決まっていて、スピード重視で住まいを探したいときに有効です。',
                en: 'Works well when you already know the preferred area and want a shorter path.',
                zh: '已确定意向区域并希望更快找到住处时更有效。',
                ko: '희망 지역이 정해져 있고 속도를 중시해 집을 찾을 때 효과적입니다.',
              })}
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
