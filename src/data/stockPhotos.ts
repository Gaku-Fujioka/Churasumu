/**
 * デモ用のストック写真（Unsplash）。本番では自前CDNや物件実写真に差し替え。
 * fit=crop で縦横比と解像度を揃え、レイアウトシフトを抑える。
 */
export const STOCK_PHOTOS = {
  /** 入居物件未選択時のヒーロー（沖縄・浅い海） */
  stayNoPropertyHero:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80',
  /** コミュニティハブ上部（海岸・集落のイメージ） */
  communityHubHero:
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80',
  /** 物件ごとのカバー（モックではエリアの雰囲気を変える） */
  propertyNahaBay:
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80',
  propertyNahaGarden:
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
  propertyKoza:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  propertyChatanSea:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  propertyChatanHills:
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  feedFood:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  feedEvent:
    'https://images.unsplash.com/photo-1540575467063-027a4d7f891a?auto=format&fit=crop&w=900&q=80',
  feedCoworking:
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  couponCoffee:
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
  couponBike:
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
  workKoza:
    'https://images.unsplash.com/photo-1445116588158-dd327276f9cb?auto=format&fit=crop&w=900&q=80',
  workHarbor:
    'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=80',
} as const
