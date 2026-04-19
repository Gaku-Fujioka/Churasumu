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
import { pickUi } from '../../lib/pickUi.ts'
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

      <SectionCard
        title={pickUi(locale, {
          ja: '物件一覧・稼働率',
          en: 'Properties and occupancy',
          zh: '房源列表与入住率',
          ko: '매물 목록·가동률',
        })}
        description={pickUi(locale, {
          ja: 'タマキホーム向けの主要物件状況です。',
          en: 'Main property status for Tamaki Home.',
          zh: '玉城住宅主要房源状况（模拟）。',
          ko: '다마키 홈용 주요 매물 현황입니다.',
        })}
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{pickUi(locale, { ja: '物件', en: 'Property', zh: '房源', ko: '매물' })}</th>
                <th>{pickUi(locale, { ja: 'エリア', en: 'Area', zh: '区域', ko: '지역' })}</th>
                <th>{pickUi(locale, { ja: '月額', en: 'Monthly fee', zh: '月额', ko: '월액' })}</th>
                <th>{pickUi(locale, { ja: '稼働率', en: 'Occupancy', zh: '入住率', ko: '가동률' })}</th>
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

      <SectionCard
        title={pickUi(locale, {
          ja: '予約・契約一覧',
          en: 'Reservations and contracts',
          zh: '预约与合同列表',
          ko: '예약·계약 목록',
        })}
        description={pickUi(locale, {
          ja: 'モック契約状況の一覧です。',
          en: 'List of mock reservation and contract statuses.',
          zh: '模拟合同状态列表。',
          ko: '모의 계약 상태 목록입니다.',
        })}
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{pickUi(locale, { ja: '居住者', en: 'Resident', zh: '住客', ko: '거주자' })}</th>
                <th>{pickUi(locale, { ja: '物件', en: 'Property', zh: '房源', ko: '매물' })}</th>
                <th>{pickUi(locale, { ja: 'プラン', en: 'Plan', zh: '方案', ko: '플랜' })}</th>
                <th>{pickUi(locale, { ja: '契約状態', en: 'Contract status', zh: '合同状态', ko: '계약 상태' })}</th>
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

      <SectionCard
        title={pickUi(locale, {
          ja: 'トラブル報告一覧',
          en: 'Trouble reports',
          zh: '故障报修列表',
          ko: '트러블 신고 목록',
        })}
        description={pickUi(locale, {
          ja: '対応状況のみモック state で更新できます。',
          en: 'Only the response status can be updated in local state.',
          zh: '仅可在本地状态中更新处理进度（模拟）。',
          ko: '처리 상태만 로컬 상태에서 업데이트할 수 있습니다(모의).',
        })}
      >
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
                  aria-label={pickUi(locale, {
                    ja: '対応ステータス',
                    en: 'Response status',
                    zh: '处理状态',
                    ko: '처리 상태',
                  })}
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

      <SectionCard
        title={pickUi(locale, {
          ja: '見込み客リスト',
          en: 'Lead list',
          zh: '潜在客户列表',
          ko: '잠재 고객 목록',
        })}
        description={pickUi(locale, {
          ja: '移住相談予約者や関心度の高いユーザー一覧です。',
          en: 'Users with high interest such as consultation bookings and bookmarks.',
          zh: '移居咨询预约者及高意向用户列表。',
          ko: '이주 상담 예약자 등 관심도가 높은 사용자 목록입니다.',
        })}
      >
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
        description={pickUi(locale, {
          ja: '移住導線から発生した相談予約と切替申請を確認します。',
          en: 'Review consultation bookings and rental switch requests generated from the migration journey.',
          zh: '查看移居引导产生的咨询预约与切换申请。',
          ko: '이주 연계에서 발생한 상담 예약과 전환 신청을 확인합니다.',
        })}
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: '相談予約件数',
                en: 'Consultation requests',
                zh: '咨询预约件数',
                ko: '상담 예약 건수',
              })}
            </strong>
            <p className="metric">{mockMigrationConsultations.length}</p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: '切替申請件数',
                en: 'Rental switch requests',
                zh: '切换申请件数',
                ko: '전환 신청 건수',
              })}
            </strong>
            <p className="metric">{mockRentalSwitchRequests.length}</p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: '移住由来リード',
                en: 'Migration-source leads',
                zh: '移居来源线索',
                ko: '이주 유입 리드',
              })}
            </strong>
            <p className="metric">{leads.filter((lead) => lead.source.includes('移住') || lead.source.includes('物件')).length}</p>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{pickUi(locale, { ja: '種別', en: 'Type', zh: '类型', ko: '유형' })}</th>
                <th>{pickUi(locale, { ja: '名前', en: 'Name', zh: '姓名', ko: '이름' })}</th>
                <th>{pickUi(locale, { ja: 'エリア / テーマ', en: 'Area / Topic', zh: '区域 / 主题', ko: '지역 / 주제' })}</th>
                <th>{pickUi(locale, { ja: '状態', en: 'Status', zh: '状态', ko: '상태' })}</th>
                <th>{pickUi(locale, { ja: '次アクション', en: 'Next step', zh: '下一步', ko: '다음 조치' })}</th>
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
                  <td>
                    {consultation.status === 'requested'
                      ? pickUi(locale, {
                          ja: '担当者を割当',
                          en: 'Assign advisor',
                          zh: '分配负责人',
                          ko: '담당 배정',
                        })
                      : pickUi(locale, {
                          ja: '相談メモを準備',
                          en: 'Prepare session notes',
                          zh: '准备咨询记录',
                          ko: '상담 메모 준비',
                        })}
                  </td>
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
                  <td>
                    {request.status === 'submitted'
                      ? pickUi(locale, {
                          ja: '候補物件を提案',
                          en: 'Suggest properties',
                          zh: '推荐候选房源',
                          ko: '후보 매물 제안',
                        })
                      : pickUi(locale, {
                          ja: '申請内容を確認',
                          en: 'Review request',
                          zh: '审核申请内容',
                          ko: '신청 내용 확인',
                        })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="support-grid">
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: 'リードの見方',
                en: 'Lead interpretation',
                zh: '线索解读',
                ko: '리드 해석',
              })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: '相談テーマごとに、エリア・学校・住宅の優先度で追客を分けられます。',
                en: 'Use consultation topics to segment area-fit, school-fit, and housing-fit follow-ups.',
                zh: '可按咨询主题，按区域、学校、住房的优先级细分跟进。',
                ko: '상담 주제별로 지역·학교·주거 우선순위로 후속 조치를 나눌 수 있습니다.',
              })}
            </p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: '推奨アクション',
                en: 'Recommended action',
                zh: '建议动作',
                ko: '권장 액션',
              })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: 'お気に入り物件と切替関心が重なるユーザーは、高意欲な移住検討者として扱えます。',
                en: 'Saved properties plus rental-switch interest usually indicate a high-intent migration user.',
                zh: '同时关注收藏房源与切换长租的用户，可视为高意向移居者。',
                ko: '찜한 매물과 전환 관심이 겹치는 사용자는 이주 의지가 높은 후보로 볼 수 있습니다.',
              })}
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
