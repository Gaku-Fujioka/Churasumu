import { useMemo, useState } from 'react'
import { SectionCard } from '../../components/SectionCard.tsx'
import { StatusBadge } from '../../components/StatusBadge.tsx'
import { mockOptions, mockPlans, otherUserOccupiedByPlan } from '../../data/mockPlans.ts'
import { mockProperties } from '../../data/mockProperties.ts'
import { localizeFeature, localizeText } from '../../data/translations.ts'
import { useAuth } from '../../hooks/useAuth.ts'
import { useEnrollment } from '../../hooks/useEnrollment.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { pickUi } from '../../lib/pickUi.ts'

type PropertyStatus = 'staying' | 'available' | 'other'

export function StayDashboardPage() {
  const { locale, t } = useLocale()
  const { currentUser } = useAuth()
  const { snapshot, patchSnapshot, cancelEnrollment } = useEnrollment()
  const [isLocked, setIsLocked] = useState(true)
  const [extensionDays, setExtensionDays] = useState(7)
  const [cleaningRequested, setCleaningRequested] = useState(false)
  const [emergencyClicked, setEmergencyClicked] = useState(false)
  const [reportTitle, setReportTitle] = useState('')
  const [reportCategory, setReportCategory] = useState('wifi')
  const [reportDetail, setReportDetail] = useState('')
  const [uploadedFileName, setUploadedFileName] = useState('')
  const [reportSubmitted, setReportSubmitted] = useState(false)

  const enrolledPlan = useMemo(() => {
    if (!snapshot || !currentUser || snapshot.userId !== currentUser.id) {
      return undefined
    }
    if (!snapshot.isCheckoutComplete || !snapshot.hasViewedContract || !snapshot.selectedPlanId) {
      return undefined
    }
    return mockPlans.find((plan) => plan.id === snapshot.selectedPlanId)
  }, [currentUser, snapshot])

  const optionsMonthlyTotal = useMemo(() => {
    if (!snapshot?.selectedOptionIds.length) {
      return 0
    }
    return mockOptions
      .filter((option) => snapshot.selectedOptionIds.includes(option.id))
      .reduce((sum, option) => sum + option.monthlyPrice, 0)
  }, [snapshot])

  const currentProperty = useMemo(() => {
    if (!snapshot?.contractedPropertyId) {
      return undefined
    }
    return mockProperties.find((property) => property.id === snapshot.contractedPropertyId)
  }, [snapshot])

  const displayedProperty = currentProperty ?? mockProperties[2]

  const eligibleProperties = useMemo(() => {
    if (!enrolledPlan) {
      return []
    }
    return mockProperties.filter((property) => property.planEligibility?.includes(enrolledPlan.id))
  }, [enrolledPlan])

  const otherUserPropertyId = enrolledPlan ? otherUserOccupiedByPlan[enrolledPlan.id] ?? null : null
  const selectedPropertyId = snapshot?.contractedPropertyId ?? null

  const propertyStatus = (propertyId: string): PropertyStatus => {
    if (selectedPropertyId === propertyId) {
      return 'staying'
    }
    if (otherUserPropertyId === propertyId) {
      return 'other'
    }
    return 'available'
  }

  const handlePickProperty = (propertyId: string) => {
    if (propertyStatus(propertyId) !== 'available') {
      return
    }
    patchSnapshot({ contractedPropertyId: propertyId })
  }

  const handleLeaveProperty = () => {
    if (!selectedPropertyId) {
      return
    }
    if (window.confirm(t('stayLeaveConfirm'))) {
      patchSnapshot({ contractedPropertyId: null })
    }
  }

  const hasSelectedProperty = Boolean(enrolledPlan && currentProperty)
  const showDetailSections = !enrolledPlan || hasSelectedProperty

  const stayPeriod = '2026/04/16 - 2026/05/16'

  const extensionLabel = useMemo(
    () =>
      pickUi(locale, {
        ja: `延長後の想定退去日: 2026/05/${16 + extensionDays}`,
        en: `Estimated move-out after extension: 2026/05/${16 + extensionDays}`,
        zh: `延长后的预计退租日：2026/05/${16 + extensionDays}`,
        ko: `연장 후 예상 퇴거일: 2026/05/${16 + extensionDays}`,
      }),
    [extensionDays, locale],
  )

  return (
    <div className="page-grid">
      {enrolledPlan ? (
        <SectionCard title={t('stayEnrolledPlanTitle')} description={t('stayEnrolledPlanDescription')}>
          <div className="stack">
            <div className="result-banner stay-enrolled-banner">
              <div>
                <h3 style={{ margin: '0 0 8px' }}>
                  {localizeText(enrolledPlan.name, locale)} / {localizeText(enrolledPlan.stayRange, locale)}
                </h3>
                <p style={{ margin: 0 }}>
                  {t('onboardingMonthlyTotal')}: ¥
                  {(enrolledPlan.monthlyPrice + optionsMonthlyTotal).toLocaleString()}
                </p>
                <p style={{ margin: '8px 0 0' }}>
                  {t('stayEnrolledPropertyLabel')}:{' '}
                  {currentProperty ? currentProperty.name : '—'}
                </p>
              </div>
              <StatusBadge label={`${t('onboardingSelectedOptions')}: ${snapshot?.selectedOptionIds.length ?? 0}`} tone="success" />
            </div>
            <div>
              <button
                type="button"
                className="danger-button"
                onClick={() => {
                  if (window.confirm(t('stayCancelConfirm'))) {
                    cancelEnrollment()
                  }
                }}
              >
                {t('stayCancelPlan')}
              </button>
            </div>
          </div>
        </SectionCard>
      ) : null}

      {enrolledPlan ? (
        <SectionCard
          title={t('stayPlanPropertiesTitle')}
          description={t('stayPlanPropertiesDescription')}
        >
          {!currentProperty ? <p className="inline-note">{t('stayPickPrompt')}</p> : null}
          <div className="support-grid">
            {eligibleProperties.map((property) => {
              const status = propertyStatus(property.id)
              const badgeTone =
                status === 'staying' ? 'success' : status === 'other' ? 'warning' : 'neutral'
              const statusLabel =
                status === 'staying'
                  ? t('stayStatusStaying')
                  : status === 'other'
                    ? t('stayStatusOtherUser')
                    : t('stayStatusAvailable')
              const canPick = status === 'available' && !currentProperty

              return (
                <article key={property.id} className="mini-card stay-plan-card">
                  <span className={`stay-plan-card__status badge badge--${badgeTone}`}>
                    {statusLabel}
                  </span>
                  <div>
                    <strong>{property.name}</strong>
                    <p style={{ margin: '4px 0 0' }}>
                      {property.city} / ¥{property.monthlyRent.toLocaleString()}
                    </p>
                  </div>
                  <div className="tag-row">
                    {property.features.map((feature) => (
                      <span key={feature} className="info-tag">
                        {localizeFeature(feature, locale)}
                      </span>
                    ))}
                  </div>
                  {status === 'staying' ? (
                    <button type="button" className="danger-button" onClick={handleLeaveProperty}>
                      {t('stayLeaveProperty')}
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={!canPick}
                      onClick={() => handlePickProperty(property.id)}
                    >
                      {t('stayPickProperty')}
                    </button>
                  )}
                </article>
              )
            })}
          </div>
        </SectionCard>
      ) : null}

      {showDetailSections ? (
      <SectionCard title={t('staySummaryTitle')} description={t('staySummaryDescription')}>
        <div className="stack">
          <div className="summary-box">
            <p>
              {pickUi(locale, {
                ja: `物件名: ${displayedProperty.name}`,
                en: `Property: ${displayedProperty.name}`,
                zh: `房源名称：${displayedProperty.name}`,
                ko: `매물명: ${displayedProperty.name}`,
              })}
            </p>
            <p>
              {pickUi(locale, {
                ja: `滞在期間: ${stayPeriod}`,
                en: `Stay period: ${stayPeriod}`,
                zh: `停留期间：${stayPeriod}`,
                ko: `체류 기간: ${stayPeriod}`,
              })}
            </p>
            <p>
              {pickUi(locale, {
                ja: `エリア: ${displayedProperty.city}`,
                en: `Area: ${displayedProperty.city}`,
                zh: `区域：${displayedProperty.city}`,
                ko: `지역: ${displayedProperty.city}`,
              })}
            </p>
          </div>

          <div className="action-row">
            <button type="button" onClick={() => setIsLocked((current) => !current)}>
              {pickUi(locale, {
                ja: isLocked ? 'スマートロックを解錠' : 'スマートロックを施錠',
                en: isLocked ? 'Unlock smart lock' : 'Lock smart lock',
                zh: isLocked ? '智能门锁解锁' : '智能门锁上锁',
                ko: isLocked ? '스마트락 잠금 해제' : '스마트락 잠금',
              })}
            </button>
            <StatusBadge
              label={pickUi(locale, {
                ja: isLocked ? '現在は施錠中' : '現在は解錠中',
                en: isLocked ? 'Locked now' : 'Unlocked now',
                zh: isLocked ? '当前已上锁' : '当前已解锁',
                ko: isLocked ? '현재 잠김' : '현재 열림',
              })}
              tone={isLocked ? 'neutral' : 'success'}
            />
          </div>

          <label className="field">
            <span>
              {pickUi(locale, {
                ja: '延長希望日数',
                en: 'Extension days',
                zh: '希望延长天数',
                ko: '연장 희망 일수',
              })}
            </span>
            <input
              type="number"
              min={1}
              max={30}
              value={extensionDays}
              onChange={(event) => setExtensionDays(Number(event.target.value))}
            />
          </label>
          <p className="inline-note">{extensionLabel}</p>
        </div>
      </SectionCard>
      ) : null}

      {showDetailSections ? (
      <SectionCard title={t('troubleReportTitle')} description={t('troubleReportDescription')}>
        <form
          className="stack"
          onSubmit={(event) => {
            event.preventDefault()
            setReportSubmitted(true)
          }}
        >
          <label className="field">
            <span>
              {pickUi(locale, { ja: 'タイトル', en: 'Title', zh: '标题', ko: '제목' })}
            </span>
            <input value={reportTitle} onChange={(event) => setReportTitle(event.target.value)} />
          </label>

          <label className="field">
            <span>
              {pickUi(locale, { ja: 'カテゴリ', en: 'Category', zh: '类别', ko: '분류' })}
            </span>
            <select value={reportCategory} onChange={(event) => setReportCategory(event.target.value)}>
              <option value="wifi">Wi-Fi</option>
              <option value="facility">
                {pickUi(locale, { ja: '設備', en: 'Facility', zh: '设备', ko: '시설' })}
              </option>
              <option value="cleaning">
                {pickUi(locale, { ja: '清掃', en: 'Cleaning', zh: '清洁', ko: '청소' })}
              </option>
              <option value="other">
                {pickUi(locale, { ja: 'その他', en: 'Other', zh: '其他', ko: '기타' })}
              </option>
            </select>
          </label>

          <label className="field">
            <span>
              {pickUi(locale, { ja: '内容', en: 'Details', zh: '内容', ko: '내용' })}
            </span>
            <textarea value={reportDetail} onChange={(event) => setReportDetail(event.target.value)} rows={4} />
          </label>

          <label className="field">
            <span>
              {pickUi(locale, { ja: '写真アップロード', en: 'Photo upload', zh: '上传照片', ko: '사진 업로드' })}
            </span>
            <input
              type="file"
              onChange={(event) => setUploadedFileName(event.target.files?.[0]?.name ?? '')}
            />
          </label>

          {uploadedFileName ? (
            <p className="inline-note">
              {pickUi(locale, {
                ja: `選択中のファイル: ${uploadedFileName}`,
                en: `Selected file: ${uploadedFileName}`,
                zh: `已选文件：${uploadedFileName}`,
                ko: `선택한 파일: ${uploadedFileName}`,
              })}
            </p>
          ) : null}

          <button type="submit">
            {pickUi(locale, { ja: '報告を送信', en: 'Submit report', zh: '提交报告', ko: '보고 보내기' })}
          </button>

          {reportSubmitted ? (
            <p className="inline-note">
              {pickUi(locale, {
                ja: `送信済み: ${reportTitle || '未入力タイトル'} / ${reportCategory} / ${reportDetail || '詳細未入力'}`,
                en: `Submitted: ${reportTitle || 'Untitled'} / ${reportCategory} / ${reportDetail || 'No details'}`,
                zh: `已提交：${reportTitle || '无标题'} / ${reportCategory} / ${reportDetail || '无详情'}`,
                ko: `제출됨: ${reportTitle || '제목 없음'} / ${reportCategory} / ${reportDetail || '내용 없음'}`,
              })}
            </p>
          ) : null}
        </form>
      </SectionCard>
      ) : null}

      {showDetailSections ? (
      <SectionCard title={t('supportTitle')} description={t('supportDescription')}>
        <div className="stack">
          <div className="support-grid">
            <div className="mini-card">
              <strong>
                {pickUi(locale, { ja: '清掃リクエスト', en: 'Cleaning request', zh: '清扫请求', ko: '청소 요청' })}
              </strong>
              <p>
                {pickUi(locale, {
                  ja: '週次清掃や追加清掃を依頼できます。',
                  en: 'Request routine or extra cleaning.',
                  zh: '可委托定期或额外清扫。',
                  ko: '정기 또는 추가 청소를 요청할 수 있습니다.',
                })}
              </p>
              <button type="button" onClick={() => setCleaningRequested(true)}>
                {pickUi(locale, { ja: '清掃を依頼', en: 'Request cleaning', zh: '申请清扫', ko: '청소 요청' })}
              </button>
            </div>
            <div className="mini-card">
              <strong>
                {pickUi(locale, { ja: '設備情報', en: 'Facility info', zh: '设备信息', ko: '시설 정보' })}
              </strong>
              <p>
                {pickUi(locale, {
                  ja: 'Wi-Fi、ゴミ出し、エアコン操作方法を確認できます。',
                  en: 'Check Wi-Fi, trash rules, and AC guidance.',
                  zh: '可查看 Wi‑Fi、垃圾投放与空调使用说明。',
                  ko: 'Wi‑Fi, 쓰레기, 에어컨 사용 안내를 확인할 수 있습니다.',
                })}
              </p>
              <ul className="plain-list">
                <li>Wi-Fi: Churasumu-Guest</li>
                <li>
                  {pickUi(locale, {
                    ja: 'ゴミ出し: 火曜・金曜',
                    en: 'Trash: Tue / Fri',
                    zh: '垃圾投放：周二、周五',
                    ko: '쓰레기: 화·금',
                  })}
                </li>
                <li>
                  {pickUi(locale, {
                    ja: '駐車場: 1台まで利用可',
                    en: 'Parking: 1 car available',
                    zh: '停车位：最多 1 辆',
                    ko: '주차: 1대까지',
                  })}
                </li>
              </ul>
            </div>
            <div className="mini-card">
              <strong>
                {pickUi(locale, { ja: '緊急連絡', en: 'Emergency contact', zh: '紧急联系', ko: '긴급 연락' })}
              </strong>
              <p>
                {pickUi(locale, {
                  ja: '24時間サポート窓口への案内です。',
                  en: '24/7 support hotline guidance.',
                  zh: '24 小时支持热线指引。',
                  ko: '24시간 지원 안내입니다.',
                })}
              </p>
              <button type="button" className="danger-button" onClick={() => setEmergencyClicked(true)}>
                {pickUi(locale, {
                  ja: '緊急連絡を見る',
                  en: 'View emergency contact',
                  zh: '查看紧急联系方式',
                  ko: '긴급 연락처 보기',
                })}
              </button>
            </div>
          </div>

          {cleaningRequested ? (
            <p className="inline-note">
              {pickUi(locale, {
                ja: '清掃依頼を受け付けました。翌営業日に調整連絡します。',
                en: 'Cleaning request received. We will coordinate on the next business day.',
                zh: '已受理清扫请求。将于下一工作日联系协调。',
                ko: '청소 요청을 접수했습니다. 다음 영업일에 조율 연락을 드립니다.',
              })}
            </p>
          ) : null}
          {emergencyClicked ? (
            <p className="inline-note">
              {pickUi(locale, {
                ja: '緊急時連絡先: 098-000-1190 / 夜間は管理会社へ転送されます。',
                en: 'Emergency contact: 098-000-1190 / night calls forward to property management.',
                zh: '紧急联系电话：098-000-1190 / 夜间将转接至管理公司。',
                ko: '긴급 연락처: 098-000-1190 / 야간에는 관리사로 연결됩니다.',
              })}
            </p>
          ) : null}
        </div>
      </SectionCard>
      ) : null}
    </div>
  )
}
