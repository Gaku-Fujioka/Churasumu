import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { SectionCard } from '../../components/SectionCard.tsx'
import { StatusBadge } from '../../components/StatusBadge.tsx'
import { initialTroubleReports, leads, mockBookings, salesSummary } from '../../data/mockAdmin.ts'
import { mockMigrationConsultations } from '../../data/mockMigrationConsultations.ts'
import {
  localizeConsultationTopic,
  localizeRequestStatus,
  localizeTroubleReportStatus,
} from '../../data/translations.ts'
import { useAuth } from '../../hooks/useAuth.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { mockProperties } from '../../data/mockProperties.ts'
import { mockRentalSwitchRequests } from '../../data/mockRentalSwitchRequests.ts'
import type { TroubleReport } from '../../types/domain.ts'

export function AdminDashboardPage() {
  const { currentUser } = useAuth()
  const { locale, t } = useLocale()
  const [reports, setReports] = useState<TroubleReport[]>(initialTroubleReports)

  if (currentUser?.role !== 'admin') {
    return <Navigate to="/onboarding" replace />
  }

  return (
    <div className="page-grid">
      <SectionCard title={t('adminTitle')} description={t('adminDescription')}>
        <div className="support-grid">
          {salesSummary.map((item) => (
            <div key={item.label} className="mini-card">
              <strong>{item.label}</strong>
              <p className="metric">{item.value}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t('languageJa') === '日本語' ? '物件一覧・稼働率' : 'Properties and occupancy'} description={t('languageJa') === '日本語' ? 'タマキホーム向けの主要物件状況です。' : 'Main property status for Tamaki Home.'}>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{t('languageJa') === '日本語' ? '物件' : 'Property'}</th>
                <th>{t('languageJa') === '日本語' ? 'エリア' : 'Area'}</th>
                <th>{t('languageJa') === '日本語' ? '月額' : 'Monthly fee'}</th>
                <th>{t('languageJa') === '日本語' ? '稼働率' : 'Occupancy'}</th>
              </tr>
            </thead>
            <tbody>
              {mockProperties.map((property) => (
                <tr key={property.id}>
                  <td>{property.name}</td>
                  <td>{property.area}</td>
                  <td>¥{property.monthlyRent.toLocaleString()}</td>
                  <td>{property.occupancyRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title={t('languageJa') === '日本語' ? '予約・契約一覧' : 'Reservations and contracts'} description={t('languageJa') === '日本語' ? 'モック契約状況の一覧です。' : 'List of mock reservation and contract statuses.'}>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{t('languageJa') === '日本語' ? '居住者' : 'Resident'}</th>
                <th>{t('languageJa') === '日本語' ? '物件' : 'Property'}</th>
                <th>{t('languageJa') === '日本語' ? 'プラン' : 'Plan'}</th>
                <th>{t('languageJa') === '日本語' ? '契約状態' : 'Contract status'}</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.residentName}</td>
                  <td>{booking.propertyName}</td>
                  <td>{booking.planName}</td>
                  <td>{booking.contractStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title={t('languageJa') === '日本語' ? 'トラブル報告一覧' : 'Trouble reports'} description={t('languageJa') === '日本語' ? '対応状況のみモック state で更新できます。' : 'Only the response status can be updated in local state.'}>
        <div className="stack">
          {reports.map((report) => (
            <div key={report.id} className="mini-card mini-card--row">
              <div>
                <strong>{report.title}</strong>
                <p>
                  {report.residentName} / {report.propertyName} / {report.createdAt}
                </p>
              </div>
              <div className="action-row">
                <StatusBadge
                  label={localizeTroubleReportStatus(report.status, locale)}
                  tone={report.status === 'resolved' ? 'success' : report.status === 'in_progress' ? 'warning' : 'neutral'}
                />
                <select
                  value={report.status}
                  onChange={(event) =>
                    setReports((current) =>
                      current.map((item) =>
                        item.id === report.id
                          ? { ...item, status: event.target.value as TroubleReport['status'] }
                          : item,
                      ),
                    )
                  }
                  aria-label={locale === 'ja' ? '対応ステータス' : 'Response status'}
                >
                  <option value="new">{localizeTroubleReportStatus('new', locale)}</option>
                  <option value="in_progress">{localizeTroubleReportStatus('in_progress', locale)}</option>
                  <option value="resolved">{localizeTroubleReportStatus('resolved', locale)}</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t('languageJa') === '日本語' ? '見込み客リスト' : 'Lead list'} description={t('languageJa') === '日本語' ? '移住相談予約者や関心度の高いユーザー一覧です。' : 'Users with high interest such as consultation bookings and bookmarks.'}>
        <div className="stack">
          {leads.map((lead) => (
            <div key={lead.id} className="mini-card">
              <strong>{lead.name}</strong>
              <p>
                {lead.source} / {lead.interest}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title={t('migrationAdminSection')}
        description={
          locale === 'ja'
            ? '移住導線から発生した相談予約と切替申請を確認します。'
            : 'Review consultation bookings and rental switch requests generated from the migration journey.'
        }
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>{locale === 'ja' ? '相談予約件数' : 'Consultation requests'}</strong>
            <p className="metric">{mockMigrationConsultations.length}</p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '切替申請件数' : 'Rental switch requests'}</strong>
            <p className="metric">{mockRentalSwitchRequests.length}</p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '移住由来リード' : 'Migration-source leads'}</strong>
            <p className="metric">{leads.filter((lead) => lead.source.includes('移住') || lead.source.includes('物件')).length}</p>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{locale === 'ja' ? '種別' : 'Type'}</th>
                <th>{locale === 'ja' ? '名前' : 'Name'}</th>
                <th>{locale === 'ja' ? 'エリア / テーマ' : 'Area / Topic'}</th>
                <th>{locale === 'ja' ? '状態' : 'Status'}</th>
                <th>{locale === 'ja' ? '次アクション' : 'Next step'}</th>
              </tr>
            </thead>
            <tbody>
              {mockMigrationConsultations.map((consultation) => (
                <tr key={consultation.id}>
                  <td>{t('migrationConsultation')}</td>
                  <td>{consultation.userName}</td>
                  <td>
                    {consultation.preferredArea} / {localizeConsultationTopic(consultation.topic, locale)}
                  </td>
                  <td>{localizeRequestStatus(consultation.status, locale)}</td>
                  <td>{consultation.status === 'requested' ? (locale === 'ja' ? '担当者を割当' : 'Assign advisor') : locale === 'ja' ? '相談メモを準備' : 'Prepare session notes'}</td>
                </tr>
              ))}
              {mockRentalSwitchRequests.map((request) => (
                <tr key={request.id}>
                  <td>{t('migrationRentalSwitch')}</td>
                  <td>{request.userName}</td>
                  <td>
                    {request.preferredArea} / {request.desiredStart}
                  </td>
                  <td>{localizeRequestStatus(request.status, locale)}</td>
                  <td>{request.status === 'submitted' ? (locale === 'ja' ? '候補物件を提案' : 'Suggest properties') : locale === 'ja' ? '申請内容を確認' : 'Review request'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="support-grid">
          <div className="mini-card">
            <strong>{locale === 'ja' ? 'リードの見方' : 'Lead interpretation'}</strong>
            <p>
              {locale === 'ja'
                ? '相談テーマごとに、エリア・学校・住宅の優先度で追客を分けられます。'
                : 'Use consultation topics to segment area-fit, school-fit, and housing-fit follow-ups.'}
            </p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '推奨アクション' : 'Recommended action'}</strong>
            <p>
              {locale === 'ja'
                ? 'お気に入り物件と切替関心が重なるユーザーは、高意欲な移住検討者として扱えます。'
                : 'Saved properties plus rental-switch interest usually indicate a high-intent migration user.'}
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
