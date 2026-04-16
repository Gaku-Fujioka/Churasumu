import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PropertyCard } from '../../components/PropertyCard.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { StatusBadge } from '../../components/StatusBadge.tsx'
import { mockFavoriteProperties } from '../../data/mockFavoriteProperties.ts'
import { localizeText } from '../../data/translations.ts'
import { mockOptions, recommendationQuestions } from '../../data/mockPlans.ts'
import { useAuth } from '../../hooks/useAuth.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { usePlanRecommendation } from '../../hooks/usePlanRecommendation.ts'

type AnswerMap = Record<string, string>

export function OnboardingPage() {
  const { currentUser } = useAuth()
  const { locale, t } = useLocale()
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([])
  const [favoritePropertyIds, setFavoritePropertyIds] = useState<string[]>(
    mockFavoriteProperties.map((item) => item.propertyId),
  )
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false)
  const [hasViewedContract, setHasViewedContract] = useState(false)
  const { recommendedPlan, rankedPlans, suggestedOptions, recommendedProperties, explanations } =
    usePlanRecommendation(answers, currentUser)

  const allQuestionsAnswered = recommendationQuestions.every((question) => answers[question.id])

  const activeOptionIds = useMemo(() => {
    if (!allQuestionsAnswered) {
      return []
    }

    if (selectedOptionIds.length > 0) {
      return selectedOptionIds
    }

    return suggestedOptions.map((option) => option.id)
  }, [allQuestionsAnswered, selectedOptionIds, suggestedOptions])

  const totalPrice = useMemo(() => {
    const optionsTotal = mockOptions
      .filter((option) => activeOptionIds.includes(option.id))
      .reduce((sum, option) => sum + option.monthlyPrice, 0)

    return recommendedPlan.monthlyPrice + optionsTotal
  }, [activeOptionIds, recommendedPlan.monthlyPrice])

  return (
    <div className="page-grid">
      <SectionCard title={t('onboardingTitle')} description={t('onboardingDescription')}>
        <div className="stack">
          {recommendationQuestions.map((question) => (
            <div key={question.id} className="question-block">
              <p className="question-title">{localizeText(question.prompt, locale)}</p>
              <div className="choice-grid">
                {question.choices.map((choice) => (
                  <button
                    key={choice.id}
                    type="button"
                    className={
                      answers[question.id] === choice.id ? 'choice-pill choice-pill--active' : 'choice-pill'
                    }
                    onClick={() =>
                      setAnswers((current) => ({
                        ...current,
                        [question.id]: choice.id,
                      }))
                    }
                  >
                    {localizeText(choice.label, locale)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t('onboardingResultTitle')} description={t('onboardingResultDescription')}>
        {allQuestionsAnswered ? (
          <div className="stack">
            <div className="result-banner">
              <div>
                <p className="eyebrow">{t('onboardingTopPlans')}</p>
                <h3>
                  {localizeText(recommendedPlan.name, locale)} / {localizeText(recommendedPlan.stayRange, locale)}
                </h3>
              </div>
              <StatusBadge label={`月額 ¥${recommendedPlan.monthlyPrice.toLocaleString()}`} tone="success" />
            </div>

            <div className="tag-row">
              {recommendedPlan.highlights.map((highlight) => (
                <span key={highlight.ja} className="info-tag">
                  {localizeText(highlight, locale)}
                </span>
              ))}
            </div>

            <div className="stack">
              {rankedPlans.map((item) => (
                <div key={item.plan.id} className="mini-card mini-card--row">
                  <div>
                    <strong>
                      {localizeText(item.plan.name, locale)} / {localizeText(item.plan.stayRange, locale)}
                    </strong>
                    <p>score: {item.score}</p>
                  </div>
                  <div className="tag-row">
                    {item.reasons.slice(0, 3).map((reason) => (
                      <span key={reason} className="info-tag">
                        {reason}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="stack">
              <strong>{t('onboardingSuggestedProperties')}</strong>
              <div className="support-grid">
                {recommendedProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    saved={favoritePropertyIds.includes(property.id)}
                    onToggleSave={(propertyId) =>
                      setFavoritePropertyIds((current) =>
                        current.includes(propertyId)
                          ? current.filter((id) => id !== propertyId)
                          : [...current, propertyId],
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <div className="option-list">
              {mockOptions.map((option) => {
                const checked = activeOptionIds.includes(option.id)

                return (
                  <label key={option.id} className="checkbox-card">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() =>
                        setSelectedOptionIds((current) =>
                          current.includes(option.id)
                            ? current.filter((id) => id !== option.id)
                            : [...current, option.id],
                        )
                      }
                    />
                    <span>
                      <strong>{localizeText(option.name, locale)}</strong>
                      <small>
                        +¥{option.monthlyPrice.toLocaleString()} / {localizeText(option.description, locale)}
                      </small>
                    </span>
                  </label>
                )
              })}
            </div>

            <div className="summary-box">
              <p>
                {t('onboardingSuggestedProperties')}: {recommendedProperties[0]?.name ?? '-'}
              </p>
              <p>
                {t('onboardingMonthlyTotal')}: ¥{totalPrice.toLocaleString()}
              </p>
              <p>
                {t('onboardingSelectedOptions')}: {activeOptionIds.length}
              </p>
            </div>

            <div className="tag-row">
              {explanations.map((reason) => (
                <span key={reason} className="info-tag">
                  {reason}
                </span>
              ))}
            </div>

            <div className="action-row">
              <Link className="nav-link" to="/migration">
                {t('migrationGo')}
              </Link>
              <button type="button" onClick={() => setHasViewedContract(true)}>
                {t('onboardingContract')}
              </button>
              <button type="button" onClick={() => setIsCheckoutComplete(true)}>
                {t('onboardingCheckout')}
              </button>
            </div>

            {hasViewedContract ? <p className="inline-note">{t('onboardingContractDone')}</p> : null}
            {isCheckoutComplete ? <p className="inline-note">{t('onboardingCheckoutDone')}</p> : null}
          </div>
        ) : (
          <p>{t('onboardingWaiting')}</p>
        )}
      </SectionCard>
    </div>
  )
}
