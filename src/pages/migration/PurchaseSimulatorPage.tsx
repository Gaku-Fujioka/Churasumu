import { useState } from 'react'
import { SectionCard } from '../../components/SectionCard.tsx'
import { mockProperties } from '../../data/mockProperties.ts'
import { defaultPurchaseSimulationInput } from '../../data/mockPurchasePresets.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { usePurchaseSimulation } from '../../hooks/usePurchaseSimulation.ts'

export function PurchaseSimulatorPage() {
  const { locale, t } = useLocale()
  const [input, setInput] = useState(defaultPurchaseSimulationInput)
  const result = usePurchaseSimulation(input)
  const matchingProperty = mockProperties.find((property) => property.purchasePrice === input.propertyPrice)
  const totalInterest = Math.max(result.totalPayment - input.propertyPrice, 0)
  const affordabilityLabel =
    result.monthlyPayment <= 80000 ? 'Good' : result.monthlyPayment <= 110000 ? 'Balanced' : 'Stretch'

  return (
    <div className="page-grid">
      <SectionCard title={t('migrationSimulator')} description={t('migrationSimulatorDescription')}>
        <div className="support-grid">
          <label className="field">
            <span>{locale === 'ja' ? '物件価格' : 'Property price'}</span>
            <input
              type="number"
              value={input.propertyPrice}
              onChange={(event) => setInput((current) => ({ ...current, propertyPrice: Number(event.target.value) }))}
            />
          </label>
          <label className="field">
            <span>{locale === 'ja' ? '頭金' : 'Down payment'}</span>
            <input
              type="number"
              value={input.downPayment}
              onChange={(event) => setInput((current) => ({ ...current, downPayment: Number(event.target.value) }))}
            />
          </label>
          <label className="field">
            <span>{locale === 'ja' ? '金利 (%)' : 'Interest rate (%)'}</span>
            <input
              type="number"
              step="0.1"
              value={input.interestRate}
              onChange={(event) => setInput((current) => ({ ...current, interestRate: Number(event.target.value) }))}
            />
          </label>
          <label className="field">
            <span>{locale === 'ja' ? '返済年数' : 'Loan years'}</span>
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
            <strong>{locale === 'ja' ? '借入額' : 'Loan amount'}</strong>
            <p className="metric">¥{result.loanAmount.toLocaleString()}</p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '総利息目安' : 'Total interest'}</strong>
            <p className="metric">¥{totalInterest.toLocaleString()}</p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '負担感' : 'Affordability'}</strong>
            <p className="metric">
              {locale === 'ja'
                ? affordabilityLabel === 'Good'
                  ? '余裕あり'
                  : affordabilityLabel === 'Balanced'
                    ? 'バランス型'
                    : '負担大'
                : affordabilityLabel}
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title={locale === 'ja' ? 'シナリオ補足' : 'Scenario context'}
        description={
          locale === 'ja'
            ? '試算結果を物件候補や家計感覚とあわせて確認します。'
            : 'Use the estimate together with a target property and a simple affordability reading.'
        }
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>{locale === 'ja' ? '現在の設定' : 'Selected scenario'}</strong>
            <p>{locale === 'ja' ? `物件価格: ¥${input.propertyPrice.toLocaleString()}` : `Property price: ¥${input.propertyPrice.toLocaleString()}`}</p>
            <p>{locale === 'ja' ? `返済年数: ${input.loanYears}年` : `Loan period: ${input.loanYears} years`}</p>
            <p>{locale === 'ja' ? `金利: ${input.interestRate}%` : `Interest: ${input.interestRate}%`}</p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '頭金の見方' : 'Down payment strategy'}</strong>
            <p>{t('migrationDownPaymentRatio')}: {result.downPaymentRatio}%</p>
            <p>{locale === 'ja' ? `自己資金: ¥${input.downPayment.toLocaleString()}` : `Cash contribution: ¥${input.downPayment.toLocaleString()}`}</p>
            <p>{locale === 'ja' ? `借入元本: ¥${result.loanAmount.toLocaleString()}` : `Loan principal: ¥${result.loanAmount.toLocaleString()}`}</p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '読み解きの目安' : 'Suggested reading'}</strong>
            <p>
              {locale === 'ja'
                ? affordabilityLabel === 'Good'
                  ? '生活費にも比較的余裕を持ちやすい水準です。'
                  : affordabilityLabel === 'Balanced'
                    ? '返済と生活費のバランスを追加確認したい水準です。'
                    : '返済負担が高めなので、家賃案や貯蓄計画との比較が必要です。'
                : affordabilityLabel === 'Good'
                  ? 'The current setup leaves relatively more room for living costs.'
                  : affordabilityLabel === 'Balanced'
                    ? 'The payment looks balanced, but daily costs should still be checked.'
                    : 'Monthly payment is on the high side, so compare with rent and savings plans.'}
            </p>
          </div>
        </div>
      </SectionCard>

      {matchingProperty ? (
        <SectionCard
          title={locale === 'ja' ? '関連物件' : 'Related property'}
          description={locale === 'ja' ? 'この試算に近い想定物件です。' : 'A mock property near this purchase scenario.'}
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
