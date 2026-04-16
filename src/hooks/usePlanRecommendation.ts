import { useMemo } from 'react'
import { mockProperties } from '../data/mockProperties.ts'
import { mockOptions, mockPlans, recommendationQuestions } from '../data/mockPlans.ts'
import type { MockUser, Property, RecommendationResultItem } from '../types/domain.ts'

export type AnswerMap = Record<string, string>

export function usePlanRecommendation(answers: AnswerMap, currentUser: MockUser | null) {
  return useMemo(() => {
    const scoreMap = new Map(mockPlans.map((plan) => [plan.id, 0]))
    const suggestedOptionIds = new Set<string>()
    const reasonMap = new Map<string, string[]>()
    const propertyFeatureAffinity = new Set<string>()

    const pushReason = (planId: string, reason: string) => {
      reasonMap.set(planId, [...(reasonMap.get(planId) ?? []), reason])
    }

    recommendationQuestions.forEach((question) => {
      const answerId = answers[question.id]
      const selectedChoice = question.choices.find((choice) => choice.id === answerId)

      if (!selectedChoice) {
        return
      }

      mockPlans.forEach((plan) => {
        if (selectedChoice.planAffinity.includes(plan.durationCategory)) {
          scoreMap.set(plan.id, (scoreMap.get(plan.id) ?? 0) + 1)
          selectedChoice.explanationTags?.forEach((tag) => pushReason(plan.id, tag))
        }
      })

      selectedChoice.optionAffinity?.forEach((optionId) => {
        suggestedOptionIds.add(optionId)
      })

      selectedChoice.propertyFeatureAffinity?.forEach((feature) => {
        propertyFeatureAffinity.add(feature)
      })
    })

    mockPlans.forEach((plan) => {
      if (currentUser && plan.recommendedFor.includes(currentUser.persona)) {
        scoreMap.set(plan.id, (scoreMap.get(plan.id) ?? 0) + 2)
        pushReason(plan.id, `persona:${currentUser.persona}`)
      }

      if (currentUser && plan.compatibleLocales?.includes(currentUser.language)) {
        scoreMap.set(plan.id, (scoreMap.get(plan.id) ?? 0) + 1)
        pushReason(plan.id, `locale:${currentUser.language}`)
      }

      plan.defaultOptionIds?.forEach((optionId) => suggestedOptionIds.add(optionId))
    })

    const sortedPlans = [...mockPlans].sort((left, right) => {
      const scoreDiff = (scoreMap.get(right.id) ?? 0) - (scoreMap.get(left.id) ?? 0)
      if (scoreDiff !== 0) {
        return scoreDiff
      }

      return left.monthlyPrice - right.monthlyPrice
    })

    const resultItems: RecommendationResultItem[] = sortedPlans.map((plan) => ({
      plan,
      score: scoreMap.get(plan.id) ?? 0,
      reasons: [...new Set(reasonMap.get(plan.id) ?? [])],
    }))

    const recommendedPlan = resultItems[0]?.plan ?? mockPlans[0]

    const suggestedOptions = mockOptions.filter((option) => suggestedOptionIds.has(option.id))
    const recommendedProperties: Property[] = [...mockProperties]
      .map((property) => {
        let score = 0

        if (currentUser && property.idealFor?.includes(currentUser.persona)) {
          score += 2
        }

        if (currentUser && property.languageSupport?.includes(currentUser.language)) {
          score += 1
        }

        property.features.forEach((feature) => {
          if (propertyFeatureAffinity.has(feature)) {
            score += 1
          }
        })

        score += Math.round((property.communityScore ?? 0) / 50)

        return { property, score }
      })
      .sort((left, right) => right.score - left.score || left.property.monthlyRent - right.property.monthlyRent)
      .slice(0, 3)
      .map((item) => item.property)

    const explanations = resultItems[0]?.reasons ?? []

    return {
      rankedPlans: resultItems.slice(0, 3),
      recommendedPlan,
      suggestedOptions,
      recommendedProperties,
      explanations,
    }
  }, [answers, currentUser])
}
