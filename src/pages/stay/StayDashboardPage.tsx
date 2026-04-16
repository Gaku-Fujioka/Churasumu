import { useMemo, useState } from 'react'
import { SectionCard } from '../../components/SectionCard.tsx'
import { StatusBadge } from '../../components/StatusBadge.tsx'
import { mockProperties } from '../../data/mockProperties.ts'
import { useLocale } from '../../hooks/useLocale.ts'

export function StayDashboardPage() {
  const { t } = useLocale()
  const [isLocked, setIsLocked] = useState(true)
  const [extensionDays, setExtensionDays] = useState(7)
  const [cleaningRequested, setCleaningRequested] = useState(false)
  const [emergencyClicked, setEmergencyClicked] = useState(false)
  const [reportTitle, setReportTitle] = useState('')
  const [reportCategory, setReportCategory] = useState('wifi')
  const [reportDetail, setReportDetail] = useState('')
  const [uploadedFileName, setUploadedFileName] = useState('')
  const [reportSubmitted, setReportSubmitted] = useState(false)

  const currentProperty = mockProperties[2]
  const stayPeriod = '2026/04/16 - 2026/05/16'

  const extensionLabel = useMemo(
    () =>
      t('languageJa') === '日本語'
        ? `延長後の想定退去日: 2026/05/${16 + extensionDays}`
        : `Estimated move-out after extension: 2026/05/${16 + extensionDays}`,
    [extensionDays, t],
  )

  return (
    <div className="page-grid">
      <SectionCard title={t('staySummaryTitle')} description={t('staySummaryDescription')}>
        <div className="stack">
          <div className="summary-box">
            <p>{t('languageJa') === '日本語' ? `物件名: ${currentProperty.name}` : `Property: ${currentProperty.name}`}</p>
            <p>{t('languageJa') === '日本語' ? `滞在期間: ${stayPeriod}` : `Stay period: ${stayPeriod}`}</p>
            <p>{t('languageJa') === '日本語' ? `エリア: ${currentProperty.city}` : `Area: ${currentProperty.city}`}</p>
          </div>

          <div className="action-row">
            <button type="button" onClick={() => setIsLocked((current) => !current)}>
              {t('languageJa') === '日本語'
                ? isLocked
                  ? 'スマートロックを解錠'
                  : 'スマートロックを施錠'
                : isLocked
                  ? 'Unlock smart lock'
                  : 'Lock smart lock'}
            </button>
            <StatusBadge
              label={
                t('languageJa') === '日本語'
                  ? isLocked
                    ? '現在は施錠中'
                    : '現在は解錠中'
                  : isLocked
                    ? 'Locked now'
                    : 'Unlocked now'
              }
              tone={isLocked ? 'neutral' : 'success'}
            />
          </div>

          <label className="field">
            <span>{t('languageJa') === '日本語' ? '延長希望日数' : 'Extension days'}</span>
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

      <SectionCard
        title={t('troubleReportTitle')}
        description={t('troubleReportDescription')}
      >
        <form
          className="stack"
          onSubmit={(event) => {
            event.preventDefault()
            setReportSubmitted(true)
          }}
        >
          <label className="field">
            <span>{t('languageJa') === '日本語' ? 'タイトル' : 'Title'}</span>
            <input value={reportTitle} onChange={(event) => setReportTitle(event.target.value)} />
          </label>

          <label className="field">
            <span>{t('languageJa') === '日本語' ? 'カテゴリ' : 'Category'}</span>
            <select value={reportCategory} onChange={(event) => setReportCategory(event.target.value)}>
              <option value="wifi">Wi-Fi</option>
              <option value="facility">{t('languageJa') === '日本語' ? '設備' : 'Facility'}</option>
              <option value="cleaning">{t('languageJa') === '日本語' ? '清掃' : 'Cleaning'}</option>
              <option value="other">{t('languageJa') === '日本語' ? 'その他' : 'Other'}</option>
            </select>
          </label>

          <label className="field">
            <span>{t('languageJa') === '日本語' ? '内容' : 'Details'}</span>
            <textarea value={reportDetail} onChange={(event) => setReportDetail(event.target.value)} rows={4} />
          </label>

          <label className="field">
            <span>{t('languageJa') === '日本語' ? '写真アップロード' : 'Photo upload'}</span>
            <input
              type="file"
              onChange={(event) => setUploadedFileName(event.target.files?.[0]?.name ?? '')}
            />
          </label>

          {uploadedFileName ? (
            <p className="inline-note">
              {t('languageJa') === '日本語' ? `選択中のファイル: ${uploadedFileName}` : `Selected file: ${uploadedFileName}`}
            </p>
          ) : null}

          <button type="submit">{t('languageJa') === '日本語' ? '報告を送信' : 'Submit report'}</button>

          {reportSubmitted ? (
            <p className="inline-note">
              {t('languageJa') === '日本語'
                ? `送信済み: ${reportTitle || '未入力タイトル'} / ${reportCategory} / ${reportDetail || '詳細未入力'}`
                : `Submitted: ${reportTitle || 'Untitled'} / ${reportCategory} / ${reportDetail || 'No details'}`}
            </p>
          ) : null}
        </form>
      </SectionCard>

      <SectionCard title={t('supportTitle')} description={t('supportDescription')}>
        <div className="stack">
          <div className="support-grid">
            <div className="mini-card">
              <strong>{t('languageJa') === '日本語' ? '清掃リクエスト' : 'Cleaning request'}</strong>
              <p>{t('languageJa') === '日本語' ? '週次清掃や追加清掃を依頼できます。' : 'Request routine or extra cleaning.'}</p>
              <button type="button" onClick={() => setCleaningRequested(true)}>
                {t('languageJa') === '日本語' ? '清掃を依頼' : 'Request cleaning'}
              </button>
            </div>
            <div className="mini-card">
              <strong>{t('languageJa') === '日本語' ? '設備情報' : 'Facility info'}</strong>
              <p>{t('languageJa') === '日本語' ? 'Wi-Fi、ゴミ出し、エアコン操作方法を確認できます。' : 'Check Wi-Fi, trash rules, and AC guidance.'}</p>
              <ul className="plain-list">
                <li>Wi-Fi: Churasumu-Guest</li>
                <li>{t('languageJa') === '日本語' ? 'ゴミ出し: 火曜・金曜' : 'Trash: Tue / Fri'}</li>
                <li>{t('languageJa') === '日本語' ? '駐車場: 1台まで利用可' : 'Parking: 1 car available'}</li>
              </ul>
            </div>
            <div className="mini-card">
              <strong>{t('languageJa') === '日本語' ? '緊急連絡' : 'Emergency contact'}</strong>
              <p>{t('languageJa') === '日本語' ? '24時間サポート窓口への案内です。' : '24/7 support hotline guidance.'}</p>
              <button type="button" className="danger-button" onClick={() => setEmergencyClicked(true)}>
                {t('languageJa') === '日本語' ? '緊急連絡を見る' : 'View emergency contact'}
              </button>
            </div>
          </div>

          {cleaningRequested ? (
            <p className="inline-note">
              {t('languageJa') === '日本語'
                ? '清掃依頼を受け付けました。翌営業日に調整連絡します。'
                : 'Cleaning request received. We will coordinate on the next business day.'}
            </p>
          ) : null}
          {emergencyClicked ? (
            <p className="inline-note">
              {t('languageJa') === '日本語'
                ? '緊急時連絡先: 098-000-1190 / 夜間は管理会社へ転送されます。'
                : 'Emergency contact: 098-000-1190 / night calls forward to property management.'}
            </p>
          ) : null}
        </div>
      </SectionCard>
    </div>
  )
}
