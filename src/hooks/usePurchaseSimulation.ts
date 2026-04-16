import { useMemo } from 'react'
import type { PurchaseSimulationInput, PurchaseSimulationResult } from '../types/domain.ts'

export function usePurchaseSimulation(input: PurchaseSimulationInput): PurchaseSimulationResult {
  return useMemo(() => {
    const loanAmount = Math.max(input.propertyPrice - input.downPayment, 0)
    const monthlyRate = input.interestRate / 100 / 12
    const months = input.loanYears * 12

    const monthlyPayment =
      monthlyRate === 0
        ? loanAmount / months
        : (loanAmount * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1)

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(monthlyPayment * months + input.downPayment),
      loanAmount,
      downPaymentRatio: Math.round((input.downPayment / input.propertyPrice) * 100),
    }
  }, [input])
}
