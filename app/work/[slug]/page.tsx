import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { campaigns } from '@/lib/campaigns'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const c = campaigns.find((x) => x.slug === slug)
  if (!c) return {}
  return {
    title: `${c.shortTitle} — ${c.client} | Miranha`,
    description: c.brief,
  }
}

export default async function CampaignPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const campaign = campaigns.find((c) => c.slug === slug)
  if (!campaign) notFound()

  const currentIdx = campaigns.findIndex((c) => c.slug === slug)
  const next = campaigns[(currentIdx + 1) % campaigns.length]

  return (
    <>
      <Navbar />
      <article>
        {/* ── Hero ────────────────────────────────────────────── */}
        <div className="camp-hero">
          <Image
            src={campaign.image}
            alt={campaign.title}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: campaign.imagePosition }}
            sizes="100vw"
          />
          <div className="camp-hero-overlay" />

          <div className="camp-hero-inner">
            <Link href="/#work" className="camp-back">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15 8H1M7 2L1 8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Work
            </Link>

            <div className="camp-hero-text">
              <span className="camp-cat">{campaign.category}</span>
              <h1 className="camp-headline">{campaign.title}</h1>
              <div className="camp-hero-meta">
                <span>{campaign.client}</span>
                <span className="camp-meta-dot" />
                <span>{campaign.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Brief ───────────────────────────────────────────── */}
        <div className="camp-body">
          <p className="camp-brief">{campaign.brief}</p>

          {/* ── The Challenge ───────────────────────────────────── */}
          <div className="camp-section">
            <div className="camp-section-label">The Challenge</div>
            {campaign.challenge.map((p, i) => (
              <p key={i} className="camp-p">{p}</p>
            ))}
          </div>

          {/* ── Our Approach ────────────────────────────────────── */}
          <div className="camp-section">
            <div className="camp-section-label">Our Approach</div>
            {campaign.approach.map((p, i) => (
              <p key={i} className="camp-p">{p}</p>
            ))}
          </div>

          {/* ── Execution ───────────────────────────────────────── */}
          <div className="camp-section">
            <div className="camp-section-label">Execution</div>
            {campaign.execution.map((p, i) => (
              <p key={i} className="camp-p">{p}</p>
            ))}
          </div>
        </div>

        {/* ── Pull quote ──────────────────────────────────────── */}
        <blockquote className="camp-quote">
          <div className="camp-quote-inner">
            <div className="camp-quote-mark">&ldquo;</div>
            <p className="camp-quote-text">{campaign.pullQuote}</p>
            <cite className="camp-quote-cite">{campaign.pullQuoteAuthor}</cite>
          </div>
        </blockquote>

        {/* ── Results ─────────────────────────────────────────── */}
        <div className="camp-results">
          <div className="camp-results-inner">
            <div className="camp-section-label" style={{ marginBottom: '2.5rem' }}>Results</div>
            <div className="camp-metrics">
              {campaign.metrics.map((m) => (
                <div key={m.label} className="camp-metric">
                  <div className="camp-metric-val">{m.value}</div>
                  <div className="camp-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tags ────────────────────────────────────────────── */}
        <div className="camp-body camp-tags-row">
          {campaign.tags.map((t) => (
            <span key={t} className="service-tag">{t}</span>
          ))}
        </div>

        {/* ── Next campaign ───────────────────────────────────── */}
        <Link href={`/work/${next.slug}`} className="camp-next">
          <div className="camp-next-inner">
            <div className="camp-next-image">
              <Image
                src={next.image}
                alt={next.shortTitle}
                fill
                style={{ objectFit: 'cover', objectPosition: next.imagePosition }}
                sizes="100vw"
              />
              <div className="camp-next-overlay" />
            </div>
            <div className="camp-next-text">
              <span className="camp-next-eyebrow">Next Campaign</span>
              <span className="camp-next-client">{next.client}</span>
              <span className="camp-next-title">{next.shortTitle}</span>
              <span className="camp-next-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M1 10h18M11 2l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </article>

      <Footer />
    </>
  )
}
