import { useState } from 'react'
import { SectionCard } from '../../components/SectionCard.tsx'
import { mockProperties } from '../../data/mockProperties.ts'
import { defaultPurchaseSimulationInput } from '../../data/mockPurchasePresets.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { usePurchaseSimulation } from '../../hooks/usePurchaseSimulation.ts'
import { pickUi } from '../../lib/pickUi.ts'

type AffordabilityTier = 'Good' | 'Balanced' | 'Stretch'

function affordabilityShort(locale: import('../../types/domain.ts').AppLocale, tier: AffordabilityTier) {
  if (tier === 'Good') {
    return pickUi(locale, { ja: '余裕あり', en: 'Good', zh: '较轻松', ko: '여유' })
  }
  if (tier === 'Balanced') {
    return pickUi(locale, { ja: 'バランス型', en: 'Balanced', zh: '均衡', ko: '균형' })
  }
  return pickUi(locale, { ja: '負担大', en: 'Stretch', zh: '压力较大', ko: '부담 큼' })
}

function affordabilityDetail(locale: import('../../types/domain.ts').AppLocale, tier: AffordabilityTier) {
  if (tier === 'Good') {
    return pickUi(locale, {
      ja: '生活費にも比較的余裕を持ちやすい水準です。',
      en: 'The current setup leaves relatively more room for living costs.',
      zh: '当前设定对生活费用相对更有余裕。',
      ko: '현재 설정은 생활비 여유가 비교적 큽니다.',
    })
  }
  if (tier === 'Balanced') {
    return pickUi(locale, {
      ja: '返済と生活費のバランスを追加確認したい水準です。',
      en: 'The payment looks balanced, but daily costs should still be checked.',
      zh: '还款与生活费平衡尚可，但仍建议核对日常开支。',
      ko: '상환과 생활비 균형은 무난하지만 일상 비용을 추가 확인하세요.',
    })
  }
  return pickUi(locale, {
    ja: '返済負担が高めなので、家賃案や貯蓄計画との比較が必要です。',
    en: 'Monthly payment is on the high side, so compare with rent and savings plans.',
    zh: '月供偏高，建议与租金方案及储蓄计划比较。',
    ko: '월 상환이 높은 편이라 임대안·저축 계획과 비교가 필요합니다.',
  })
}

export function PurchaseSimulatorPage() {
  const { locale, t } = useLocale()
  const [input, setInput] = useState(defaultPurchaseSimulationInput)
  const result = usePurchaseSimulation(input)
  const matchingProperty = mockProperties.find((property) => property.purchasePrice === input.propertyPrice)
  const totalInterest = Math.max(result.totalPayment - input.propertyPrice, 0)
  const affordabilityTier: AffordabilityTier =
    result.monthlyPayment <= 80000 ? 'Good' : result.monthlyPayment <= 110000 ? 'Balanced' : 'Stretch'

  return (
    <div className="page-grid">
      <SectionCard title={t('migrationSimulator')} description={t('migrationSimulatorDescription')}>
        <div className="support-grid">
          <label className="field">
            <span>
              {pickUi(locale, { ja: '物件価格', en: 'Property price', zh: '房价', ko: '매물 가격' })}
            </span>
            <input
              type="number"
              value={input.propertyPrice}
              onChange={(event) => setInput((current) => ({ ...current, propertyPrice: Number(event.target.value) }))}
            />
          </label>
          <label className="field">
            <span>
              {pickUi(locale, { ja: '頭金', en: 'Down payment', zh: '首付', ko: '계약금' })}
            </span>
            <input
              type="number"
              value={input.downPayment}
              onChange={(event) => setInput((current) => ({ ...current, downPayment: Number(event.target.value) }))}
            />
          </label>
          <label className="field">
            <span>
              {pickUi(locale, { ja: '金利 (%)', en: 'Interest rate (%)', zh: '利率 (%)', ko: '금리 (%)' })}
            </span>
            <input
              type="number"
              step="0.1"
              value={input.interestRate}
              onChange={(event) => setInput((current) => ({ ...current, interestRate: Number(event.target.value) }))}
            />
          </label>
          <label className="field">
            <span>
              {pickUi(locale, { ja: '返済年数', en: 'Loan years', zh: '还款年数', ko: '상환 연수' })}
            </span>
            <input
              type="number"
              value={input.loanYears}
              onChange={(event) => setInput((current) => ({ ...current, loanYears: Number(event.target.value) }))}
            />
          </label>
        </div>
      </SectionCard>

      <SectionCard title={t('migrationSimulator')}>
        <div className="support-grid">
          <div className="mini-card">
            <strong>{t('migrationMonthlyMortgage')}</strong>
            <p className="metric">¥{result.monthlyPayment.toLocaleString()}</p>
          </div>
          <div className="mini-card">
            <strong>{t('onboardingMonthlyTotal')}</strong>
            <p className="metric">¥{result.totalPayment.toLocaleString()}</p>
          </div>
          <div className="mini-card">
            <strong>{t('migrationDownPaymentRatio')}</strong>
            <p className="metric">{result.downPaymentRatio}%</p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, { ja: '借入額', en: 'Loan amount', zh: '贷款本金', ko: '대출 원금' })}
            </strong>
            <p className="metric">¥{result.loanAmount.toLocaleString()}</p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, { ja: '総利息目安', en: 'Total interest', zh: '利息估算', ko: '총 이자 추정' })}
            </strong>
            <p className="metric">¥{totalInterest.toLocaleString()}</p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, { ja: '負担感', en: 'Affordability', zh: '负担感', ko: '부담감' })}
            </strong>
            <p className="metric">{affordabilityShort(locale, affordabilityTier)}</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title={pickUi(locale, { ja: 'シナリオ補足', en: 'Scenario context', zh: '情景说明', ko: '시나리오 보충' })}
        description={pickUi(locale, {
          ja: '試算結果を物件候補や家計感覚とあわせて確認します。',
          en: 'Use the estimate together with a target property and a simple affordability reading.',
          zh: '将试算结果与目标房源及家庭负担感一并查看。',
          ko: '시산 결과를 후보 매물·가계 감각과 함께 확인합니다.',
        })}
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>
              {pickUi(locale, { ja: '現在の設定', en: 'Selected scenario', zh: '当前设定', ko: '현재 설정' })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: `物件価格: ¥${input.propertyPrice.toLocaleString()}`,
                en: `Property price: ¥${input.propertyPrice.toLocaleString()}`,
                zh: `房价：¥${input.propertyPrice.toLocaleString()}`,
                ko: `매물 가격: ¥${input.propertyPrice.toLocaleString()}`,
              })}
            </p>
            <p>
              {pickUi(locale, {
                ja: `返済年数: ${input.loanYears}年`,
                en: `Loan period: ${input.loanYears} years`,
                zh: `还款年限：${input.loanYears} 年`,
                ko: `상환 연수: ${input.loanYears}년`,
              })}
            </p>
            <p>
              {pickUi(locale, {
                ja: `金利: ${input.interestRate}%`,
                en: `Interest: ${input.interestRate}%`,
                zh: `利率：${input.interestRate}%`,
                ko: `금리: ${input.interestRate}%`,
              })}
            </p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: '頭金の見方',
                en: 'Down payment strategy',
                zh: '首付策略',
                ko: '계약금 전략',
              })}
            </strong>
            <p>
              {t('migrationDownPaymentRatio')}: {result.downPaymentRatio}%
            </p>
            <p>
              {pickUi(locale, {
                ja: `自己資金: ¥${input.downPayment.toLocaleString()}`,
                en: `Cash contribution: ¥${input.downPayment.toLocaleString()}`,
                zh: `自有资金：¥${input.downPayment.toLocaleString()}`,
                ko: `자기자금: ¥${input.downPayment.toLocaleString()}`,
              })}
            </p>
            <p>
              {pickUi(locale, {
                ja: `借入元本: ¥${result.loanAmount.toLocaleString()}`,
                en: `Loan principal: ¥${result.loanAmount.toLocaleString()}`,
                zh: `贷款本金：¥${result.loanAmount.toLocaleString()}`,
                ko: `대출 원금: ¥${result.loanAmount.toLocaleString()}`,
              })}
            </p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, { ja: '読み解きの目安', en: 'Suggested reading', zh: '解读参考', ko: '해석 가이드' })}
            </strong>
            <p>{affordabilityDetail(locale, affordabilityTier)}</p>
          </div>
        </div>
      </SectionCard>

      {matchingProperty ? (
        <SectionCard
          title={pickUi(locale, { ja: '関連物件', en: 'Related property', zh: '相关房源', ko: '관련 매물' })}
          description={pickUi(locale, {
            ja: 'この試算に近い想定物件です。',
            en: 'A mock property near this purchase scenario.',
            zh: '与本试算相近的示例房源。',
            ko: '이 시산에 가까운 예시 매물입니다.',
          })}
        >
          <div className="mini-card">
            <strong>{matchingProperty.name}</strong>
            <p>
              {matchingProperty.city} / ¥{matchingProperty.purchasePrice?.toLocaleString()}
            </p>
            <div className="tag-row">
              {(matchingProperty.supportHighlights ?? []).map((item) => (
                <span key={item} className="info-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </SectionCard>
      ) : null}
    </div>
  )
}
