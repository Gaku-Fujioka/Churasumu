import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { SectionCard } from '../../components/SectionCard.tsx'
import { StatusBadge } from '../../components/StatusBadge.tsx'
import { initialTroubleReports, leads, mockBookings, salesSummary } from '../../data/mockAdmin.ts'
import { useAuth } from '../../hooks/useAuth.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { mockProperties } from '../../data/mockProperties.ts'
import type { TroubleReport } from '../../types/domain.ts'

export function AdminDashboardPage() {
  const { currentUser } = useAuth()
  const { t } = useLocale()
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
                  label={report.status}
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
                >
                  <option value="new">new</option>
                  <option value="in_progress">in_progress</option>
                  <option value="resolved">resolved</option>
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
    </div>
  )
}
