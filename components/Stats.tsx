'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  target: number
  prefix?: string
  suffix?: string
  decimals?: number
}

function Counter({ target, prefix = '', suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const duration = 1800
        const steps = 72
        const interval = duration / steps
        let step = 0

        const timer = setInterval(() => {
          step++
          const progress = step / steps
          const eased = 1 - Math.pow(1 - progress, 3)
          const value = eased * target

          setCount(parseFloat(value.toFixed(decimals)))

          if (step >= steps) {
            setCount(target)
            clearInterval(timer)
          }
        }, interval)
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals])

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString()

  return <span ref={spanRef}>{prefix}{display}{suffix}</span>
}

const stats = [
  { value: 2.4,  prefix: 'HK$', suffix: 'B+', decimals: 1, label: 'Ad Spend Managed' },
  { value: 340,  prefix: '',    suffix: '+',  decimals: 0, label: 'Brands Launched' },
  { value: 18,   prefix: '',    suffix: '',   decimals: 0, label: 'Industry Awards' },
  { value: 12,   prefix: '',    suffix: ' Yrs', decimals: 0, label: 'In the HK Market' },
]

export default function Stats() {
  return (
    <div className="stats-wrapper">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-value">
              <Counter
                target={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals}
              />
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
