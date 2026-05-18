export interface Metric {
  value: string
  label: string
}

export interface Campaign {
  slug: string
  client: string
  title: string
  shortTitle: string
  category: string
  image: string
  imagePosition: string
  result: string
  resultLabel: string
  year: string
  tags: string[]
  cardDesc: string
  brief: string
  challenge: string[]
  approach: string[]
  execution: string[]
  pullQuote: string
  pullQuoteAuthor: string
  metrics: Metric[]
}

export const campaigns: Campaign[] = [
  {
    slug: 'global-brand',
    client: 'Cathay Pacific',
    title: 'The Feeling of Flying — Global Brand Campaign',
    shortTitle: 'The Feeling of Flying',
    category: 'Brand Campaign',
    image: '/campaign-global.jpg',
    imagePosition: 'center center',
    result: '+34%',
    resultLabel: 'Brand Recall Lift',
    year: '2023',
    tags: ['Brand', 'OOH', 'Digital', 'CTV', 'Global'],
    cardDesc: 'End-to-end campaign spanning OOH, digital, and CTV across 14 markets.',
    brief: 'After three years of near-zero international travel, Cathay Pacific needed to remind the world why flying felt like something worth doing — and why Cathay, specifically, was the carrier worth doing it with.',
    challenge: [
      'The brief arrived with a deceptively simple phrase: "Make people want to fly again." But behind it lay a more nuanced problem. Post-pandemic, travellers had sorted themselves into three groups: those who flew the moment borders reopened, those still hesitant, and those who had quietly decided the stress wasn\'t worth it.',
      'Cathay had the routes, the lounges, the fleet upgrades. What it lacked was an emotional case — a reason to feel something about air travel beyond logistics. The airline had been running functional "where will you go" advertising for years. We needed to reset the emotional register entirely.',
    ],
    approach: [
      'We identified a universal truth that every frequent flyer knows but rarely articulates: the best part of a journey is rarely the destination. It\'s the altitude. The silence at 39,000 feet. The way the world contracts and the mind expands. We called it "The Feeling" — a campaign built around the interior experience of flying rather than the exterior promise of arrival.',
      'Rather than a single hero film, we produced a modular creative system: 14 market-specific hero pieces, each filmed in natural light with local collaborators, connected by a common visual language and score. The campaign ran across OOH, digital video, CTV, social, and in-flight — a closed loop that caught passengers before, during, and after every journey.',
    ],
    execution: [
      'Production spanned 14 cities over 8 weeks, with local cinematographers shooting to a shared reference frame rather than a single director\'s vision. The result was a campaign that felt genuinely local in each market while remaining unmistakably cohesive.',
      'Media planning prioritised high-dwell environments: airport premium OOH, business class lounge digital screens, podcast pre-rolls for frequent business travellers. CTV ran 60-second cuts during streaming primetime in Hong Kong, London, and Sydney.',
      'The campaign launched at the exact midpoint of the northern hemisphere summer — July 11th — timed to catch the second booking wave for August and September travel. Performance extensions on search and social closed the loop with booking-intent audiences identified from prior brand exposure.',
    ],
    pullQuote: 'Mirahha didn\'t give us a campaign. They gave us a language — one we\'ve been speaking ever since.',
    pullQuoteAuthor: 'Head of Brand, Cathay Pacific',
    metrics: [
      { value: '+34%', label: 'Brand Recall Lift' },
      { value: '14', label: 'Markets Activated' },
      { value: '2.8B', label: 'Total Impressions' },
      { value: '+19%', label: 'Unaided Awareness' },
    ],
  },
  {
    slug: 'every-journey',
    client: 'MTR Corporation',
    title: 'Every Journey Matters',
    shortTitle: 'Every Journey Matters',
    category: 'Integrated Campaign',
    image: '/campaign-journey.jpg',
    imagePosition: 'center 30%',
    result: '2.1B',
    resultLabel: 'Impressions Delivered',
    year: '2022',
    tags: ['Integrated', 'OOH', 'Digital', 'Community'],
    cardDesc: 'Integrated commuter experience campaign across all 93 stations.',
    brief: 'MTR needed to rebuild emotional trust with Hong Kong residents after a period of significant social disruption — reconnecting people with the network that moves the city, and with each other.',
    challenge: [
      'Ridership had fallen. Not just because of the pandemic, but because of a more complicated relationship between Hong Kong residents and the systems that structure daily life. The MTR isn\'t just a transit network — it\'s connective tissue. When trust erodes, the damage runs deep.',
      'The challenge wasn\'t to sell tickets. It was to remind 7.5 million people that every ordinary commute carries meaning — that the train at 7:43am isn\'t just getting you to work, it\'s part of the rhythm of a city that\'s still very much alive.',
    ],
    approach: [
      'We built the campaign from the inside out — literally. Rather than imposing a narrative from above, we commissioned 93 local photographers (one for each MTR station) to document the real journeys happening around their assigned station every day for one month.',
      'The resulting image library became the raw material for everything: station-level OOH printed on site, a digital gallery, social content, and a limited-edition photobook distributed through MTR service centres. Every piece of creative had a specific address — a specific station, a specific community.',
    ],
    execution: [
      'Each photographer was briefed with a single instruction: "Show us what a journey here looks like." No art direction. No styling. The diversity of interpretation was the point — Tuen Mun didn\'t look like Admiralty, and it wasn\'t supposed to.',
      'The 93-image outdoor installation ran simultaneously across the entire network on launch day, creating a moment where the whole system spoke with one voice in 93 distinct accents. Digital amplification drove earned media, with local press picking up the station-by-station photographic narrative as a story in itself.',
      'Paid social targeted by residential district, matching users with images shot nearest to where they lived and worked. Click-through rates ran 4.2× the MTR benchmark.',
    ],
    pullQuote: 'We asked them to help us feel human again. They found humanity in every single station.',
    pullQuoteAuthor: 'Director of Marketing, MTR Corporation',
    metrics: [
      { value: '2.1B', label: 'Total Impressions' },
      { value: '93', label: 'Station Installations' },
      { value: '4.2×', label: 'Above CTR Benchmark' },
      { value: '+23%', label: 'Sentiment Score Lift' },
    ],
  },
  {
    slug: 'lunar-new-year',
    client: 'Lane Crawford',
    title: 'Lunar New Year Luxe',
    shortTitle: 'Lunar New Year Luxe',
    category: 'Seasonal Campaign',
    image: '/campaign-lunar.jpg',
    imagePosition: 'center center',
    result: '6.2×',
    resultLabel: 'Return on Ad Spend',
    year: '2023',
    tags: ['Seasonal', 'Luxury', 'KOL', 'Commerce', 'In-store'],
    cardDesc: 'Seasonal campaign driving 40% of annual luxury retail revenue in 6 weeks.',
    brief: 'Six weeks. Forty percent of annual revenue target. A campaign that needed to feel festive without feeling cheap, and aspirational without feeling out of reach.',
    challenge: [
      'Lunar New Year is the single most competitive retail moment in Hong Kong. Every brand — luxury and mass market alike — floods the market with red and gold, "prosperity" messaging, and limited editions. The noise is extraordinary.',
      'Lane Crawford\'s challenge was differentiation within a category drowning in sameness. The brand\'s positioning — contemporary luxury, curatorial instinct, East-meets-West cultural fluency — needed to find expression in a format the market hadn\'t yet seen. The KPI was ROAS. But the brief beneath the brief was distinctiveness.',
    ],
    approach: [
      'We rejected the red-envelope visual language entirely. Instead, we built the campaign around the concept of "Heirloom" — the luxury objects that move between generations at New Year, carrying meaning beyond their price tags.',
      'This reframe unlocked a richer creative territory: less "buy this," more "what will you pass on?" It resonated with Lane Crawford\'s core customer — affluent, culturally confident, slightly weary of overt luxury signalling — and gave the brand permission to tell slower, more considered stories.',
    ],
    execution: [
      'The creative system had three layers. At the top, a hero film featuring five Lane Crawford customers — real ones, not models — discussing the objects they treasure and why. No products were named. No prices shown.',
      'The middle layer was KOL-led: 12 lifestyle and fashion creators each received a Lane Crawford archival piece as a "heirloom loan" for the campaign period, with creative freedom to integrate it into their own New Year content. Authenticity over reach was the brief.',
      'The performance layer — retargeting, search, shopping ads — ran against audiences built from KOL content engagement and hero film views, tightening spend against demonstrated purchase intent. The six-week ROAS of 6.2× was the highest the brand had recorded for any seasonal campaign.',
    ],
    pullQuote: 'They understood that luxury at New Year isn\'t about newness. It\'s about permanence. That insight changed everything.',
    pullQuoteAuthor: 'CMO, Lane Crawford',
    metrics: [
      { value: '6.2×', label: 'Return on Ad Spend' },
      { value: '12', label: 'KOL Partners' },
      { value: '+40%', label: 'Revenue vs Target' },
      { value: '8.4M', label: 'Hero Film Views' },
    ],
  },
  {
    slug: 'digital-banking',
    client: 'HSBC HK',
    title: 'Digital Banking Relaunch',
    shortTitle: 'Digital Banking Relaunch',
    category: 'Performance Campaign',
    image: '/campaign-banking.jpg',
    imagePosition: 'center top',
    result: '820K',
    resultLabel: 'New App Installs',
    year: '2023',
    tags: ['Performance', 'App', 'Digital', 'Gen Z', 'Social'],
    cardDesc: 'Performance push to drive app downloads across Gen Z and Millennial segments.',
    brief: 'HSBC Hong Kong had rebuilt its mobile banking app from the ground up. The new product was genuinely excellent. The problem was that nobody under 35 believed a 157-year-old bank could build something they\'d actually want to use.',
    challenge: [
      'Credibility gaps are among the hardest problems in marketing. HSBC had the product — a genuinely fast, feature-rich, well-designed banking app that benchmark-tested above competitors in every category. But in qualitative research, 18–34-year-olds consistently used the same words to describe HSBC: "old," "corporate," "for my parents."',
      'The conventional response would have been a brand campaign challenging those perceptions directly. We advised against it. Telling people you\'ve changed rarely changes what they think. Showing them — through the right channels, with the right voices — is harder but more durable.',
    ],
    approach: [
      'We built a strategy around earned credibility rather than purchased attention. The core insight: young Hong Kongers trust peer testimony over brand claims, and they form opinions about digital products through usage demonstration — specifically, watching someone else use the product in a way that feels natural and unforced.',
      'This led us to a creator-first approach: identify 40 micro-creators across finance, lifestyle, and tech verticals who already had banking pain points, give them early app access with no brief and no restrictions, and let their genuine reactions become the campaign.',
    ],
    execution: [
      'Forty creators received app access three weeks before launch. Their content — genuinely unscripted, ranging from impressed to cautiously optimistic — ran across TikTok, Instagram, and YouTube in the two weeks surrounding launch.',
      'The earned layer was amplified with precision targeting: TikTok and Meta campaigns targeting 18–34-year-olds based on competitor banking app usage signals, lookalike audiences built from the creator engagement pools, and retargeting against video viewers who had watched more than 50% of creator content.',
      'Search captured intent generated by the earned media spike. Apple App Store optimisation ran in parallel, improving organic discovery. The 820,000 installs over the campaign period represented a 340% uplift versus HSBC\'s historical monthly app acquisition average.',
    ],
    pullQuote: 'They told us to get out of the way and let real people talk. That was exactly the right call.',
    pullQuoteAuthor: 'Head of Digital, HSBC Hong Kong',
    metrics: [
      { value: '820K', label: 'New App Installs' },
      { value: '+340%', label: 'vs Avg Monthly Acquisition' },
      { value: '40', label: 'Creator Partners' },
      { value: '4.6★', label: 'App Store Rating' },
    ],
  },
  {
    slug: 'lifestyle-platform',
    client: 'Octopus Cards',
    title: 'Tap Into More — Lifestyle Platform',
    shortTitle: 'Tap Into More',
    category: 'Brand Repositioning',
    image: '/campaign-lifestyle.jpg',
    imagePosition: 'center 40%',
    result: '+58%',
    resultLabel: 'Merchant Partner Growth',
    year: '2022',
    tags: ['Brand', 'Repositioning', 'OOH', 'Partnership', 'Digital'],
    cardDesc: 'Repositioning campaign transitioning from transit card to lifestyle superapp.',
    brief: 'Octopus had 99% brand awareness in Hong Kong. Almost no one thought of it as anything other than the thing that gets you through the MTR turnstile. The ambition: reframe 30 million cards as the access point to everything the city has to offer.',
    challenge: [
      'The paradox of the Octopus brief was that the problem was created by success. The card worked so well as a transit product that it had become invisible — a reflex, not a choice. Nobody thinks about their Octopus card. They just tap.',
      '"Invisibility" is a devastating position for a financial product trying to expand into lifestyle, dining, retail, and entertainment. The product had already expanded — Octopus could be used at tens of thousands of merchant locations across the city. The gap was perception, not capability.',
    ],
    approach: [
      'We framed the creative platform around discovery rather than function: not "Octopus works everywhere" but "you haven\'t seen everything it opens." The hero metaphor was the city itself — Hong Kong as a place of perpetual discovery, and Octopus as the key.',
      'This gave us permission to run campaigns that were about specific Hong Kong experiences — a particular restaurant, a specific market stall, a type of moment — rather than generic "lifestyle" imagery. Hyper-local specificity, scaled.',
    ],
    execution: [
      'The campaign ran in three phases. Phase one was an OOH takeover across 40 locations in high-footfall Hong Kong neighbourhoods — Sham Shui Po, Sheung Wan, Wan Chai, Quarry Bay — each featuring a real merchant and a real reason to tap. No stock imagery. No models. Just the actual stalls, shop owners, and food.',
      'Phase two introduced a digital layer: a web experience mapping all Octopus-accepting merchants by neighbourhood, designed as a discovery tool rather than a directory. Paid social drove traffic to neighbourhood-specific landing pages.',
      'Phase three was partner co-marketing: 12 high-profile merchants ran Octopus-themed promotions co-funded through managed budget, driving both footfall and new merchant partner sign-ups — the latter growing 58% over the campaign period.',
    ],
    pullQuote: 'They made people feel like they\'d been given a new city. The card was the same. The feeling was completely different.',
    pullQuoteAuthor: 'VP Marketing, Octopus Cards Ltd',
    metrics: [
      { value: '+58%', label: 'Merchant Partner Growth' },
      { value: '40', label: 'Neighbourhood OOH Sites' },
      { value: '3.2M', label: 'Discovery Tool Visits' },
      { value: '+31%', label: 'Non-Transit Transactions' },
    ],
  },
  {
    slug: 'art-meets-commerce',
    client: 'K11 Musea',
    title: 'Art Meets Commerce',
    shortTitle: 'Art Meets Commerce',
    category: 'Influencer & Editorial',
    image: '/campaign-art.jpg',
    imagePosition: 'center center',
    result: '4.7M',
    resultLabel: 'Earned Social Reach',
    year: '2023',
    tags: ['Influencer', 'Editorial', 'Social', 'Culture', 'Earned'],
    cardDesc: 'Influencer and editorial campaign fusing cultural credibility with retail performance.',
    brief: 'K11 Musea needed to establish itself not just as a premium mall, but as a genuine cultural institution — a place where art and commerce don\'t coexist awkwardly, but actively make each other better.',
    challenge: [
      'The risk with "art and commerce" positioning is that it can feel like a contradiction, or worse, an attempt to launder consumption with cultural credentials. K11 Musea had invested genuinely in artist programming, commissions, and residencies. But scepticism is the default position of the cultural tastemakers whose endorsement the brand needed most.',
      'The campaign needed to earn credibility with Hong Kong\'s arts community and style-conscious consumers without feeling like it was trying to. The moment it felt like marketing to these audiences, it would fail.',
    ],
    approach: [
      'We built a strategy that inverted the normal influencer model: instead of briefing creators to talk about K11, we created conditions for genuine creative exchange between K11\'s resident artists and the creators we worked with.',
      'Eight artists from the K11 Artist Incubation Programme were each paired with a creator from an adjacent but non-art vertical — a chef, a musician, an architect, a furniture designer. The pairs were given a shared studio day inside K11 Musea and asked to make something together, with no commercial brief and no predetermined output.',
    ],
    execution: [
      'The eight collaborations produced eight genuinely unpredictable pieces of content: a choreographed dinner, a soundscape, a furniture alteration, an architectural drawing. K11 produced documentary-style films of each collaboration — four minutes each, with no brand messaging beyond a single end card.',
      'The films were seeded to editorial media first: Tatler Asia, Esquire HK, and Time Out Hong Kong ran features on three of the eight collaborations the week before the campaign launched on owned channels. This editorial layer gave the subsequent social amplification cultural legitimacy.',
      'Creator posts ran in the week following the editorial coverage. The sequencing — earned editorial first, creator content second — meant the social content landed into an audience already primed to see K11 as culturally credible rather than commercially motivated. Total earned social reach across the eight-week campaign: 4.7 million.',
    ],
    pullQuote: 'Other agencies want to tell our story. Mirahha built the conditions for a story to actually happen.',
    pullQuoteAuthor: 'Head of Brand Experience, K11 Musea',
    metrics: [
      { value: '4.7M', label: 'Earned Social Reach' },
      { value: '8', label: 'Artist–Creator Collabs' },
      { value: '3', label: 'Major Editorial Features' },
      { value: '+44%', label: 'Visitor Footfall Uplift' },
    ],
  },
]
