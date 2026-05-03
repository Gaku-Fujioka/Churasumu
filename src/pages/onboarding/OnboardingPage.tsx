import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PropertyCard } from '../../components/PropertyCard.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { StatusBadge } from '../../components/StatusBadge.tsx'
import { mockFavoriteProperties } from '../../data/mockFavoriteProperties.ts'
import { localizeRecommendationReason, localizeText } from '../../data/translations.ts'
import { mockOptions, mockPlans, recommendationQuestions } from '../../data/mockPlans.ts'
import { useAuth } from '../../hooks/useAuth.ts'
import { useEnrollment } from '../../hooks/useEnrollment.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { usePageTransition } from '../../hooks/usePageTransition.ts'
import { usePlanRecommendation } from '../../hooks/usePlanRecommendation.ts'
import { pickUi } from '../../lib/pickUi.ts'
import type { EnrollmentSnapshot } from '../../types/enrollment.ts'

type AnswerMap = Record<string, string>

export function OnboardingPage() {
  const { currentUser } = useAuth()
  const { snapshot, patchSnapshot } = useEnrollment()
  const { locale, t } = useLocale()
  const navigate = useNavigate()
  const { runPageTransition } = usePageTransition()
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [favoritePropertyIds, setFavoritePropertyIds] = useState<string[]>(
    mockFavoriteProperties.map((item) => item.propertyId),
  )

  const selectedPlanIdForHook = snapshot?.selectedPlanId ? snapshot.selectedPlanId : null
  const { recommendedPlan, activePlan, rankedPlans, suggestedOptions, recommendedProperties, explanations } =
    usePlanRecommendation(answers, currentUser, selectedPlanIdForHook)

  const allQuestionsAnswered = recommendationQuestions.every((question) => answers[question.id])

  const suggestedOptionsKey = useMemo(() => suggestedOptions.map((option) => option.id).join(','), [suggestedOptions])

  useEffect(() => {
    if (!allQuestionsAnswered || !snapshot) {
      return
    }
    const updates: Partial<EnrollmentSnapshot> = {}
    if (!snapshot.selectedPlanId) {
      updates.selectedPlanId = recommendedPlan.id
    }
    if (snapshot.selectedOptionIds.length === 0) {
      updates.selectedOptionIds = suggestedOptions.map((option) => option.id)
    }
    if (Object.keys(updates).length === 0) {
      return
    }
    patchSnapshot(updates)
  }, [allQuestionsAnswered, patchSnapshot, recommendedPlan.id, snapshot, suggestedOptionsKey])

  useEffect(() => {
    if (!snapshot?.isCheckoutComplete) {
      return
    }
    navigate('/stay', { replace: true })
  }, [navigate, snapshot?.isCheckoutComplete])

  const activeOptionIds = useMemo(() => {
    if (!allQuestionsAnswered || !snapshot) {
      return []
    }
    return snapshot.selectedOptionIds
  }, [allQuestionsAnswered, snapshot])

  const totalPrice = useMemo(() => {
    const optionsTotal = mockOptions
      .filter((option) => activeOptionIds.includes(option.id))
      .reduce((sum, option) => sum + option.monthlyPrice, 0)

    return activePlan.monthlyPrice + optionsTotal
  }, [activeOptionIds, activePlan.monthlyPrice])

  const flowLocked = Boolean(snapshot?.isCheckoutComplete && snapshot?.hasViewedContract)

  if (!currentUser || !snapshot) {
    return (
      <div className="page-grid">
        <SectionCard title={t('onboardingTitle')} description={t('onboardingDescription')}>
          <p className="inline-note">{t('dataLoading')}</p>
        </SectionCard>
      </div>
    )
  }

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
                {activePlan.id !== recommendedPlan.id ? (
                  <p className="inline-note" style={{ margin: '0 0 8px' }}>
                    {t('onboardingQuizTopMatch')}: {localizeText(recommendedPlan.name, locale)} /{' '}
                    {localizeText(recommendedPlan.stayRange, locale)}
                  </p>
                ) : null}
                <h3>
                  {localizeText(activePlan.name, locale)} / {localizeText(activePlan.stayRange, locale)}
                </h3>
              </div>
              <StatusBadge label={`月額 ¥${activePlan.monthlyPrice.toLocaleString()}`} tone="success" />
            </div>

            <div className="tag-row">
              {activePlan.highlights.map((highlight) => (
                <span key={highlight.ja} className="info-tag">
                  {localizeText(highlight, locale)}
                </span>
              ))}
            </div>

            <div className="stack">
              <p className="question-title">{t('onboardingPlanPickTitle')}</p>
              <p className="inline-note">{t('onboardingPlanPickDescription')}</p>
              <div className="choice-grid">
                {mockPlans.map((plan) => {
                  const score = rankedPlans.find((item) => item.plan.id === plan.id)?.score ?? 0
                  const isActive = activePlan.id === plan.id

                  return (
                    <button
                      key={plan.id}
                      type="button"
                      disabled={flowLocked}
                      className={isActive ? 'choice-pill choice-pill--active' : 'choice-pill'}
                      onClick={() => patchSnapshot({ selectedPlanId: plan.id })}
                    >
                      <span className="plan-pick-label">
                        {localizeText(plan.name, locale)} / {localizeText(plan.stayRange, locale)}
                      </span>
                      <span className="plan-pick-meta">
                        ¥{plan.monthlyPrice.toLocaleString()} / {pickUi(locale, {
                          ja: '診断スコア',
                          en: 'Quiz score',
                          zh: '问卷得分',
                          ko: '설문 점수',
                        })}{' '}
                        {score}
                      </span>
                    </button>
                  )
                })}
              </div>
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
                      disabled={flowLocked}
                      checked={checked}
                      onChange={() => {
                        const next = checked
                          ? activeOptionIds.filter((id) => id !== option.id)
                          : [...activeOptionIds, option.id]
                        patchSnapshot({ selectedOptionIds: next })
                      }}
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
                  {localizeRecommendationReason(reason, locale)}
                </span>
              ))}
            </div>

            <div className="action-row">
              <Link className="nav-link" to="/migration">
                {t('migrationGo')}
              </Link>
              <button
                type="button"
                disabled={flowLocked || snapshot.hasViewedContract}
                onClick={() => patchSnapshot({ hasViewedContract: true })}
              >
                {t('onboardingContract')}
              </button>
              <button
                type="button"
                disabled={flowLocked || !snapshot.hasViewedContract || snapshot.isCheckoutComplete}
                onClick={() =>
                  void runPageTransition({
                    onCovered: () => {
                      patchSnapshot({
                        isCheckoutComplete: true,
                        contractedPropertyId: null,
                      })
                      navigate('/stay', { replace: true })
                    },
                  })
                }
              >
                {t('onboardingCheckout')}
              </button>
            </div>

            {snapshot.hasViewedContract ? <p className="inline-note">{t('onboardingContractDone')}</p> : null}
            {snapshot.isCheckoutComplete ? <p className="inline-note">{t('onboardingCheckoutDone')}</p> : null}
          </div>
        ) : (
          <p>{t('onboardingWaiting')}</p>
        )}
      </SectionCard>
    </div>
  )
}
