const items = [
  { src: '/logo-cathay80-en.originalimage.svg', alt: 'Cathay Pacific' },
  { src: '/logo-mtr-corp.svg', alt: 'MTR Corporation' },
  { src: '/HSBC-logo.svg', alt: 'HSBC Hong Kong' },
  { src: '/LC-Home_logo.png', alt: 'Lane Crawford' },
  { src: '/octopus-logo.png', alt: 'Octopus Cards' },
  { src: '/k11-musea-logo.svg', alt: 'K11 Musea' },
  { src: '/logo-2388.HK_BOC.svg', alt: 'BOC Hong Kong' },
  { src: '/swire-properties-logo.png', alt: 'Swire Properties' },
  { src: '/logo-hongkong-tourism-board-en1.webp', alt: 'HK Tourism Board' },
  { src: '/DFS_Group_logo.png', alt: 'DFS Group' },
  { src: '/logo-aia-hongkong.png', alt: 'AIA Hong Kong' },
  { src: '/mandarin-oriental-logo.png', alt: 'Mandarin Oriental' },
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.alt} className="marquee-logo" height="32" width="120" />
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}
