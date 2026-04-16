import type { PurchaseSimulationInput } from '../types/domain.ts'

export const defaultPurchaseSimulationInput: PurchaseSimulationInput = {
  propertyPrice: 29800000,
  downPayment: 3000000,
  interestRate: 1.2,
  loanYears: 35,
}
