export type UserRole = 'guest' | 'resident' | 'admin'
export type AppLocale = 'ja' | 'en' | 'zh' | 'ko'

export type UserPersona = 'migrant' | 'nomad' | 'international'
export type WorkStyle = 'remote' | 'hybrid' | 'explorer'
export type CommunityCategory = 'residents' | 'questions' | 'feed' | 'coupons' | 'reviews' | 'work-spots'
export type FeedType = 'event' | 'food' | 'coworking' | 'news'
export type CouponCategory = 'food' | 'activity' | 'coworking' | 'living'
export type ReviewTargetType = 'property' | 'shop' | 'workSpot'
export type ConsultationTopic = 'area' | 'school' | 'housing' | 'work' | 'procedures'
export type RentalSwitchStatus = 'draft' | 'submitted' | 'reviewing' | 'approved'
export type SupportCategory = 'administration' | 'school' | 'hospital' | 'transport'

export interface LocalizedText {
  ja: string
  en: string
  zh?: string
  ko?: string
}

export interface MockUser {
  id: string
  name: string
  role: UserRole
  persona: UserPersona
  nationality: string
  language: AppLocale
  stayPurpose: string
}

export interface Property {
  id: string
  name: string
  area: string
  city: string
  monthlyRent: number
  occupancyRate: number
  features: string[]
  idealFor?: UserPersona[]
  languageSupport?: AppLocale[]
  communityScore?: number
  purchasePrice?: number
  expectedMonthlyMortgage?: number
  supportHighlights?: string[]
  planEligibility?: string[]
}

export interface PlanOption {
  id: string
  name: LocalizedText
  monthlyPrice: number
  description: LocalizedText
}

export interface StayPlan {
  id: string
  name: LocalizedText
  stayRange: LocalizedText
  durationCategory: 'short' | 'standard' | 'long'
  monthlyPrice: number
  recommendedFor: UserPersona[]
  highlights: LocalizedText[]
  compatibleLocales?: AppLocale[]
  propertyFeatureAffinity?: string[]
  defaultOptionIds?: string[]
}

export interface RecommendationQuestion {
  id: string
  prompt: LocalizedText
  choices: Array<{
    id: string
    label: LocalizedText
    planAffinity: StayPlan['durationCategory'][]
    optionAffinity?: string[]
    propertyFeatureAffinity?: string[]
    explanationTags?: string[]
  }>
}

export interface RecommendationResultItem {
  plan: StayPlan
  score: number
  reasons: string[]
}

export interface TroubleReport {
  id: string
  title: string
  category: 'wifi' | 'facility' | 'cleaning' | 'other'
  status: 'new' | 'in_progress' | 'resolved'
  residentName: string
  propertyName: string
  createdAt: string
}

export interface FaqEntry {
  id: string
  question: LocalizedText
  keywords: string[]
  answer: LocalizedText
}

export interface BookingSummary {
  id: string
  residentName: string
  propertyName: string
  planName: string
  contractStatus: 'draft' | 'active' | 'completed'
}

export interface SalesSummary {
  label: string
  value: string
}

export interface Lead {
  id: string
  name: string
  source: string
  interest: string
}

export interface ResidentProfile {
  id: string
  userId: string
  displayName: string
  persona: UserPersona
  nationality: string
  language: AppLocale
  stayWindow: string
  workStyle: WorkStyle
  bio: LocalizedText
  interests: string[]
  matchTags: string[]
}

export interface QuestionReply {
  id: string
  authorId: string
  authorName: string
  body: LocalizedText
  createdAt: string
}

export interface QuestionPost {
  id: string
  authorId: string
  authorName: string
  title: LocalizedText
  body: LocalizedText
  tags: string[]
  createdAt: string
  solved: boolean
  replies: QuestionReply[]
}

export interface FeedPost {
  id: string
  type: FeedType
  title: LocalizedText
  description: LocalizedText
  area: string
  createdAt: string
  likedByCurrentUser: boolean
}

export interface Coupon {
  id: string
  shopName: string
  category: CouponCategory
  area: string
  discountLabel: LocalizedText
  description: LocalizedText
  expiresAt: string
  eligibility: LocalizedText
  saved: boolean
}

export interface Review {
  id: string
  authorName: string
  targetType: ReviewTargetType
  targetId: string
  targetName: string
  rating: number
  comment: LocalizedText
  createdAt: string
}

export interface WorkSpot {
  id: string
  name: string
  area: string
  wifi: 'fast' | 'stable' | 'basic'
  power: boolean
  quietness: 'high' | 'medium' | 'low'
  hours: string
  tags: string[]
  note: LocalizedText
}

export interface MigrationConsultationRequest {
  id: string
  userName: string
  topic: ConsultationTopic
  preferredDate: string
  preferredArea: string
  note: string
  status: 'requested' | 'confirmed' | 'completed'
}

export interface PurchaseSimulationInput {
  propertyPrice: number
  downPayment: number
  interestRate: number
  loanYears: number
}

export interface PurchaseSimulationResult {
  monthlyPayment: number
  totalPayment: number
  loanAmount: number
  downPaymentRatio: number
}

export interface FavoriteProperty {
  propertyId: string
  savedAt: string
}

export interface RentalSwitchRequest {
  id: string
  userName: string
  desiredStart: string
  preferredArea: string
  note: string
  status: RentalSwitchStatus
}

export interface SupportArticle {
  id: string
  category: SupportCategory
  title: LocalizedText
  summary: LocalizedText
  contact: string
}
