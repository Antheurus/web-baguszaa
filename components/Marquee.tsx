const items = [
  { text: 'Cathay Pacific', highlight: true },
  { text: 'MTR Corporation', highlight: false },
  { text: 'HSBC Hong Kong', highlight: false },
  { text: 'Lane Crawford', highlight: true },
  { text: 'Octopus Cards', highlight: false },
  { text: 'K11 Musea', highlight: false },
  { text: 'BOC Hong Kong', highlight: true },
  { text: 'Swire Properties', highlight: false },
  { text: 'HK Tourism Board', highlight: false },
  { text: 'DFS Group', highlight: true },
  { text: 'AIA Hong Kong', highlight: false },
  { text: 'Mandarin Oriental', highlight: false },
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">
            <span className={item.highlight ? 'marquee-highlight' : ''}>
              {item.text}
            </span>
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}
