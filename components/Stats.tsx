// components/Stats.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

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

const statValues = [
  { value: 2.4,  prefix: 'HK$', suffix: 'B+', decimals: 1 },
  { value: 340,  prefix: '',    suffix: '+',  decimals: 0 },
  { value: 18,   prefix: '',    suffix: '',   decimals: 0 },
  { value: 12,   prefix: '',    suffix: '',   decimals: 0 },
]

export default function Stats() {
  const { t } = useLanguage()

  return (
    <div className="stats-wrapper">
      <div className="stats-grid">
        {statValues.map((s, i) => (
          <div key={t.stats.labels[i]} className="stat-item">
            <div className="stat-value">
              <Counter
                target={s.value}
                prefix={s.prefix}
                suffix={i === 3 ? t.stats.yearsSuffix : s.suffix}
                decimals={s.decimals}
              />
            </div>
            <div className="stat-label">{t.stats.labels[i]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
