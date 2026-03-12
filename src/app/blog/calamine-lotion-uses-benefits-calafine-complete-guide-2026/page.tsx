import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './calafine-complete-guide.module.css';

export const metadata: Metadata = {
  title: 'Calamine Lotion Uses, Benefits & Why CALAFINE Is the Smarter Upgrade (2026 Complete Guide)',
  description:
    'Everything you need to know about calamine lotion — uses, benefits, side effects, and why CALAFINE Lotion is the modern upgrade for sunburn, acne, rashes, and dry skin in India. 2026 complete guide.',
  keywords: [
    'calamine lotion uses',
    'calamine lotion benefits',
    'calamine lotion for acne',
    'calamine lotion for skin rashes',
    'calamine lotion for sunburn',
    'best lotion for skin rash India',
    'lotion for itchy skin India',
    'best lotion for acne and pimples',
    'lotion for dry skin India',
    'calamine lotion side effects',
    'calamine lotion vs moisturizer',
    'best soothing lotion India 2026',
    'lotion for redness and irritation',
    'lotion for heat rash',
    'lotion for prickly heat',
    'best lotion for sensitive skin India',
    'lotion for skin inflammation',
    'CALAFINE lotion review',
    'lotion for suntan and sunburn India',
    'multi purpose skin lotion India',
    'lotion for all skin types',
    'best body lotion India 2026',
    'lotion for blemishes and dark spots',
    'skin care lotion India',
  ],
  alternates: {
    canonical:
      'https://www.lucidpharmatech.com/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026',
  },
  openGraph: {
    title: 'Calamine Lotion Uses, Benefits & The Modern Upgrade — CALAFINE Complete Guide 2026',
    description:
      'Sunburn, acne, rashes, itching, dryness — this guide covers everything about calamine lotion, what it does, its limits, and why CALAFINE Lotion solves what calamine can\'t.',
    images: [
      {
        url: '/images/calafine-lotion.jpg',
        width: 1200,
        height: 630,
        alt: 'CALAFINE Lotion — Complete Skincare Guide 2026',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0bBSOIFo';

const tableOfContents = [
  { id: 'what-is-calamine', label: 'What is calamine lotion and how does it work?' },
  { id: 'calamine-uses', label: 'Complete list of calamine lotion uses' },
  { id: 'calamine-skin-types', label: 'Is calamine lotion right for your skin type?' },
  { id: 'calamine-limits', label: 'The real limitations of traditional calamine lotion' },
  { id: 'calafine-intro', label: 'Introducing CALAFINE: the modern skincare upgrade' },
  { id: 'calafine-benefits', label: 'CALAFINE Lotion — full benefits breakdown' },
  { id: 'sunburn-guide', label: 'The complete guide to sunburn treatment in India' },
  { id: 'acne-guide', label: 'How to treat acne with the right lotion' },
  { id: 'dry-skin-guide', label: 'Dry skin solutions that actually work long-term' },
  { id: 'routine', label: 'Building a full skincare routine around CALAFINE' },
  { id: 'who-needs-it', label: 'Who needs CALAFINE most?' },
  { id: 'myths', label: 'Skincare myths debunked' },
  { id: 'faq', label: 'Frequently asked questions' },
];

const calaFineUses = [
  { icon: '🌅', title: 'Sunburn & Sun Damage', body: 'Calamine has long been used to relieve the burning, redness, and inflammation caused by UV overexposure. It creates a cooling, protective layer on damaged skin and reduces the stinging sensation characteristic of sunburn. This has made it a household first-aid staple for decades.' },
  { icon: '🔴', title: 'Skin Rashes & Irritation', body: 'Whether caused by heat, allergic reactions, contact with irritants, or insect bites, calamine soothes inflamed skin and reduces itching. Its mild antipruritic (anti-itch) properties make it a go-to for conditions like contact dermatitis, heat rash, and prickly heat — extremely common in India\'s humid climate.' },
  { icon: '🌡️', title: 'Prickly Heat (Ghamori)', body: 'Prickly heat — or \'ghamori\' as it is commonly known in India — affects millions every summer. The condition is caused by blocked sweat glands that trap perspiration beneath the skin. Calamine relieves the associated burning, stinging, and itching. This is arguably its single most common use in Indian households.' },
  { icon: '😤', title: 'Acne & Pimples', body: 'Calamine has mild astringent properties — it helps dry out active pimples and reduce the oiliness around breakouts. It also calms the redness and inflammation around acne lesions. While not a dedicated acne treatment, it has long been used as a supportive skincare option for oily and acne-prone skin.' },
  { icon: '🐝', title: 'Insect Bites & Stings', body: 'Applied to insect bites, calamine reduces the itching, swelling, and local inflammation caused by mosquito bites, bee stings, and other minor insect-related skin reactions. It\'s a classic summer and monsoon season staple for families across India.' },
  { icon: '💧', title: 'Chickenpox & Minor Infections', body: 'Calamine has historically been used during chickenpox to relieve the intense itching associated with the rash. While it doesn\'t treat the infection itself, it significantly improves comfort during the healing phase and reduces the urge to scratch — which is critical for preventing scarring.' },
  { icon: '🌿', title: 'Eczema & Dermatitis', body: 'In mild cases of eczema or contact dermatitis, calamine provides temporary relief from itching and skin irritation. Medical professionals have recommended it as a supportive topical option alongside prescribed treatments for managing flare-ups.' },
  { icon: '☀️', title: 'Post-Waxing & Post-Shaving Irritation', body: 'Calamine is widely used after hair removal procedures — waxing, threading, shaving — to reduce the redness, irritation, and minor inflammation that commonly follows. It calms sensitised skin and reduces the risk of post-procedure breakouts.' },
];

const calaFineAdvantages = [
  {
    num: '01',
    title: 'Instant Sunburn Relief',
    body: [
      'When UV radiation hits unprotected skin, it triggers an inflammatory cascade — blood vessels dilate, nerve endings become hypersensitive, and the skin\'s surface temperature rises. This is what creates the characteristic burn, redness, and tenderness of sunburn. Left untreated, the inflammation continues to progress for hours after you\'ve left the sun.',
      'CALAFINE Lotion\'s formula is specifically designed to interrupt this process on contact. Its soothing actives work rapidly to reduce local inflammation, cool the skin surface, and calm the nerve sensitivity that makes sunburn so painful and uncomfortable.',
      'Unlike simply applying cold water or basic moisturiser — which address only the surface temperature — CALAFINE delivers targeted relief that lasts for hours after application. This makes it genuinely useful, not just momentarily comfortable.',
      'For Indians living in cities like Chennai, Mumbai, Delhi, or Hyderabad — where summers regularly see temperatures exceeding 40°C with harsh UV index levels — having a reliable sunburn lotion is not a luxury. It\'s a practical necessity for anyone who spends time outdoors for work or daily life.',
    ],
  },
  {
    num: '02',
    title: 'Deep Skin Nourishment — Not Just Surface Moisture',
    body: [
      'There is an important distinction between surface hydration and deep nourishment — and most people\'s skincare routines only address the former. When a lotion "moisturises" by sitting on top of the skin and creating a film, it temporarily prevents water loss but doesn\'t replenish the moisture deficit within the skin\'s deeper layers.',
      'True nourishment happens when active ingredients penetrate through the epidermis and into the dermis — where collagen lives, where skin cells regenerate, and where long-term skin health is determined. Formulas built for deep nourishment target this layer directly, delivering ingredients that the skin can actually use to rebuild and rejuvenate.',
      'CALAFINE\'s nourishing formula is built around this principle of deep penetration. Rather than just sealing the surface, it actively hydrates the deeper layers — which is why skin doesn\'t just feel soft immediately after application, but remains soft, supple, and comfortable throughout the day.',
      'This distinction matters enormously for people who live and work in air-conditioned environments, which are particularly dehydrating for the skin. Air conditioning dramatically reduces ambient humidity — stripping moisture from exposed skin continuously throughout the day. A surface-only moisturiser applied in the morning offers minimal protection by mid-afternoon. A deep-nourishing formula like CALAFINE holds its effect significantly longer.',
      'It also matters for people with naturally dry skin, for those who wash their skin frequently (which strips natural oils), and for anyone entering their 30s and 40s when the skin\'s natural moisture-retention capacity begins to decline with age.',
    ],
  },
  {
    num: '03',
    title: 'Effective, Non-Comedogenic Acne Control',
    body: [
      'Acne is India\'s most common dermatological complaint — affecting an estimated 85% of people at some point in their lives, with active acne present in a significant percentage of the adult population at any given time. And yet, the skincare market\'s response to acne has been inconsistent at best. Harsh cleansers that over-dry the skin trigger rebound oil production. Heavy moisturisers clog pores and worsen breakouts. Dedicated acne treatments are often too aggressive for daily use and cause peeling, redness, and sensitivity.',
      'The fundamental challenge with acne is that it requires managing two apparently contradictory needs simultaneously: controlling excess oil and bacteria that cause breakouts, while maintaining adequate hydration to prevent the skin from overcompensating with more oil production.',
      'CALAFINE\'s approach to acne addresses both sides of this equation. Its formula actively helps control acne — reducing the bacteria and excess sebum that trigger breakouts — without the drying, stripping effect that causes skin to rebel. It also reduces the appearance of existing blemishes and the post-inflammatory hyperpigmentation (dark spots) that acne leaves behind.',
      'Critically, CALAFINE is non-comedogenic — it does not block pores. This is the single most important quality in any skincare product used on acne-prone skin, and it\'s why CALAFINE works where other multi-purpose lotions fail on oily and breakout-prone complexions.',
      'For people managing chronic acne, CALAFINE fills an important gap: it is the lotion you can use every day without worrying that it\'s making your skin worse. It\'s part of the solution, not part of the problem.',
    ],
  },
];

const skinTypeGuide = [
  { type: 'Oily Skin', icon: '💦', verdict: 'Excellent', color: '#dcfce7', textColor: '#15803d', desc: 'CALAFINE\'s non-comedogenic formula controls excess sebum while providing balanced hydration — without making oily skin worse. Ideal as a daily lotion for oily skin types.' },
  { type: 'Dry Skin', icon: '🌵', verdict: 'Excellent', color: '#dcfce7', textColor: '#15803d', desc: 'The deep-nourishing formula is particularly effective for dry skin — penetrating beyond the surface to address the moisture deficit at its source, not just mask it.' },
  { type: 'Combination Skin', icon: '⚖️', verdict: 'Very Good', color: '#dbeafe', textColor: '#1d4ed8', desc: 'Works well on combination skin by providing hydration where needed without overwhelming oily zones. Use a slightly lighter application on the T-zone.' },
  { type: 'Sensitive Skin', icon: '🌸', verdict: 'Very Good', color: '#dbeafe', textColor: '#1d4ed8', desc: 'The gentle formulation is designed to be well-tolerated by sensitive skin. Its soothing properties are actually particularly beneficial for reactive skin types.' },
  { type: 'Acne-Prone Skin', icon: '😤', verdict: 'Excellent', color: '#dcfce7', textColor: '#15803d', desc: 'Non-comedogenic and actively anti-acne — this is one of CALAFINE\'s strongest use cases. Safe for daily use without triggering new breakouts.' },
  { type: 'Mature / Ageing Skin', icon: '⏳', verdict: 'Good', color: '#fef9c3', textColor: '#854d0e', desc: 'Deep nourishment supports skin elasticity and helps combat the dryness that accelerates visible ageing. Daily use improves skin texture and softness over time.' },
];

const sunburnStages = [
  { stage: 'Stage 1 — Immediate (0–2 hrs)', title: 'Cool, don\'t heat', desc: 'Get out of the sun immediately. Cool the affected skin with cold water — not ice, which can cause further damage. Begin applying a soothing, anti-inflammatory lotion like CALAFINE to start interrupting the inflammatory response.' },
  { stage: 'Stage 2 — First 24 hours', title: 'Consistent application', desc: 'Apply CALAFINE generously every 3–4 hours. Keep the skin hydrated — both by drinking plenty of water and by reapplying your soothing lotion frequently. Avoid soap on the affected areas as it strips the skin\'s natural protective layer.' },
  { stage: 'Stage 3 — Days 2–4 (Peeling phase)', title: 'Let skin heal naturally', desc: 'Resist the urge to peel flaking skin — it removes the protective layer and exposes raw, sensitive skin underneath. Continue applying CALAFINE generously to keep peeling skin soft and support the natural shedding process.' },
  { stage: 'Stage 4 — Days 5–7 (Recovery)', title: 'Restore and protect', desc: 'As skin recovers, continue daily CALAFINE application to nourish the newly regenerated skin. New skin is particularly sensitive and vulnerable — consistent moisturisation is critical during this phase.' },
];

const acneTypes = [
  { type: 'Whiteheads & Blackheads', cause: 'Clogged pores filled with oil and dead skin cells', calaFineRole: 'Non-comedogenic formula prevents new blockages while soothing existing congestion around pores.' },
  { type: 'Papules & Pustules', cause: 'Bacterial infection in blocked pores causing inflammation', calaFineRole: 'Calming actives reduce redness and inflammation around active breakouts without harsh drying.' },
  { type: 'Post-Acne Dark Spots', cause: 'Hyperpigmentation left after acne heals (very common in Indian skin)', calaFineRole: 'Regular use helps fade dark spots and even out skin tone over weeks of consistent application.' },
  { type: 'Heat-Induced Breakouts', cause: 'Excess sweat and sebum production in hot weather triggering breakouts', calaFineRole: 'Calms the skin while controlling the excess sebum that triggers summer breakouts in India\'s climate.' },
];

const myths = [
  { myth: 'You only need lotion when your skin feels dry', truth: 'Waiting until your skin feels dry means the moisture deficit has already progressed significantly. Daily application prevents dryness from developing — it\'s maintenance, not repair.' },
  { myth: 'Oily skin doesn\'t need moisturiser', truth: 'Oily skin and dehydrated skin are different conditions that frequently coexist. Skipping moisturiser on oily skin often causes it to produce even more oil as compensation. The right non-comedogenic lotion actually helps regulate oil production.' },
  { myth: 'More expensive means more effective', truth: 'A lotion\'s efficacy is determined entirely by its formulation and active ingredients — not its price tag. Many affordable formulas like CALAFINE are built around the same active principles as much more expensive products.' },
  { myth: 'Sunscreen means you don\'t need a soothing lotion', truth: 'Sunscreen prevents UV damage; it doesn\'t repair existing damage or soothe already-irritated skin. Both serve different purposes and should be part of any complete skincare routine.' },
  { myth: 'Acne means you shouldn\'t use lotion', truth: 'The opposite is often true. Skipping moisturiser on acne-prone skin triggers more oil production, which worsens acne. A non-comedogenic lotion like CALAFINE actively supports acne management, not hinders it.' },
  { myth: 'Lotion is only for women', truth: 'Skin is skin. Men\'s skin faces the same sun exposure, pollution, dehydration, and acne — often more so, due to outdoor work, shaving, and historically neglecting skincare. CALAFINE is designed for all genders.' },
];

const faqs = [
  { q: 'What is CALAFINE Lotion used for?', a: 'CALAFINE Lotion is a multi-purpose skincare lotion designed for three primary uses: sunburn relief, deep skin nourishment, and acne control. It is suitable for all skin types and can be used on both the face and body.' },
  { q: 'Is CALAFINE similar to calamine lotion?', a: 'CALAFINE is inspired by the soothing, skin-calming tradition of calamine lotion but is a modern skincare formulation. Where traditional calamine is primarily a drying, antipruritic agent, CALAFINE combines soothing properties with deep nourishment and acne care — making it a more complete, daily-use skincare solution.' },
  { q: 'Can I use CALAFINE on my face every day?', a: 'Yes. CALAFINE is formulated for daily use on both face and body. It is gentle enough for everyday application and delivers the best long-term results with consistent daily use.' },
  { q: 'How soon does CALAFINE work on sunburn?', a: 'Most users experience relief within minutes of application. The soothing effect is designed to work on contact with irritated skin, reducing burning sensation and redness quickly.' },
  { q: 'Does CALAFINE Lotion clog pores?', a: 'No. CALAFINE is non-comedogenic, meaning it does not block pores. This makes it safe for use on acne-prone and oily skin without the risk of triggering new breakouts.' },
  { q: 'Can CALAFINE be used for prickly heat?', a: 'Yes. CALAFINE\'s soothing and skin-calming properties make it effective for prickly heat (ghamori) — one of the most common summer skin complaints in India. It soothes the burning and itching associated with heat rash.' },
  { q: 'Is CALAFINE safe for sensitive skin?', a: 'Yes. The formula is gentle and designed to be well-tolerated by all skin types, including sensitive skin. Its anti-inflammatory and calming properties are actually particularly beneficial for reactive skin.' },
  { q: 'Can men use CALAFINE Lotion?', a: 'Absolutely. CALAFINE is designed for all genders. Men dealing with sun exposure, post-shave irritation, acne, or general skin dryness will find it equally effective.' },
  { q: 'Can I use CALAFINE after shaving or waxing?', a: 'Yes. CALAFINE is excellent for post-hair-removal skin care. It soothes the redness and irritation caused by shaving or waxing and helps calm sensitised skin after hair removal procedures.' },
  { q: 'Where can I buy CALAFINE Lotion?', a: 'CALAFINE Lotion (pack of 2) is available on Amazon India. It can be ordered for home delivery across India.' },
  { q: 'Does CALAFINE help with dark spots from acne?', a: 'Yes. Regular use of CALAFINE helps reduce the appearance of post-acne hyperpigmentation — the dark spots left behind after pimples heal, which are particularly common and persistent in Indian skin tones.' },
  { q: 'What skin types is CALAFINE suitable for?', a: 'CALAFINE is suitable for all skin types — oily, dry, combination, sensitive, and acne-prone. Its versatile, balanced formula adapts to the needs of different skin types without causing adverse reactions.' },
];

export default function CalaFineCompleteGuidePage() {
  return (
    <article className={styles.blog}>

      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Skincare · Calamine · Sunburn · Acne · Complete Guide 2026</span>
            <h1 className={styles.heroTitle}>
              Calamine Lotion Uses,
              <br />
              Benefits &amp;
              <br />
              <em>The Smarter Upgrade</em>
            </h1>
            <p className={styles.heroSub}>
              Everything you need to know about calamine lotion — what it treats, how it
              works, where it falls short — and why CALAFINE Lotion is the modern,
              multi-purpose upgrade your skin routine actually needs in 2026.
            </p>
            <div className={styles.heroMeta}>
              <span>📖 20 min read</span>
              <span className={styles.metaDot}>·</span>
              <span>2026 Complete Guide</span>
              <span className={styles.metaDot}>·</span>
              <span>5,000+ words</span>
            </div>
            <div className={styles.heroActions}>
              <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
                Buy CALAFINE on Amazon →
              </a>
              <span className={styles.heroNote}>Pack of 2 · All Skin Types · Face &amp; Body</span>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <div className={styles.imagePulse} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/calafine-lotion.png"
                alt="CALAFINE Lotion – Sunburn Relief, Deep Nourishment, Acne Care – Complete Guide 2026"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imageBadges}>
              <span>☀️ Sunburn</span>
              <span>💧 Nourishment</span>
              <span>😤 Acne</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── TABLE OF CONTENTS ── */}
      <div className={styles.tocWrap}>
        <div className={styles.tocInner}>
          <p className={styles.tocTitle}>📋 In This Guide</p>
          <ol className={styles.tocList}>
            {tableOfContents.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.tocLink}>
                  <span className={styles.tocNum}>{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className={styles.container}>

        {/* ── SECTION 1: WHAT IS CALAMINE ── */}
        <section id="what-is-calamine" className={styles.section}>
          <h2 className={styles.sectionTitle}>What Is Calamine Lotion and How Does It Work?</h2>
          <p>
            Calamine lotion is one of the oldest and most widely recognised topical
            skincare preparations in the world. It has been in continuous use for over a
            century and remains a staple in Indian households, pharmacies, and first-aid
            kits to this day. But despite its ubiquity, surprisingly few people
            understand exactly what it is, how it works, and — crucially — what it
            cannot do.
          </p>
          <p>
            Traditional calamine lotion consists primarily of zinc oxide and ferric oxide
            (which gives it its characteristic pink colour) suspended in a calamine base.
            Zinc oxide is a mild astringent and antiseptic that dries out the skin
            surface, reduces oil, and provides a thin protective coating. Ferric oxide
            contributes mild anti-inflammatory properties. Together, they create a lotion
            that is cooling, drying, and soothing — properties that make it effective for
            a specific set of skin conditions.
          </p>
          <p>
            The mechanism is relatively straightforward. When applied to the skin,
            calamine creates an evaporative cooling effect as its liquid base evaporates
            — this is what gives the immediate sensation of relief on irritated or burnt
            skin. The zinc oxide residue left behind acts as a mild barrier, providing
            a degree of protection from further irritation while the skin heals
            underneath.
          </p>
          <p>
            The result is a product that is genuinely effective for its core purpose:
            providing temporary relief from itching, burning, and surface irritation.
            It is not a cure for any condition. It does not treat infection. It does not
            nourish or deeply moisturise the skin. And in the hands of modern formulation
            science, it can be significantly improved upon — which is exactly what
            CALAFINE Lotion represents.
          </p>
          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <p>
              <strong>Key insight:</strong> Calamine lotion provides <em>temporary symptomatic relief</em>.
              CALAFINE Lotion combines this soothing tradition with deep nourishment and
              active acne care — making it a complete skincare solution, not just a
              first-aid application.
            </p>
          </div>
        </section>

        {/* ── SECTION 2: CALAMINE USES ── */}
        <section id="calamine-uses" className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete List of Calamine Lotion Uses</h2>
          <p>
            Before understanding CALAFINE, it helps to understand the full range of skin
            conditions that calamine-type lotions have traditionally been used for —
            because CALAFINE is designed to address all of these, and more. Here is the
            complete picture of what calamine-style lotions are used for in India and
            globally.
          </p>
          <div className={styles.usesGrid}>
            {calaFineUses.map((use) => (
              <div key={use.title} className={styles.useCard}>
                <span className={styles.useIcon}>{use.icon}</span>
                <h3 className={styles.useTitle}>{use.title}</h3>
                <p className={styles.useBody}>{use.body}</p>
              </div>
            ))}
          </div>
          <p>
            Looking at this list, a pattern becomes clear: the unifying thread across
            all of these conditions is inflammation, irritation, and compromised skin
            barrier function. Whether the trigger is sun exposure, heat, insects, or
            acne bacteria — the skin\'s response is broadly similar, and what it needs
            in each case is largely the same: soothing, barrier repair, and targeted
            anti-inflammatory action.
          </p>
          <p>
            This is the foundation upon which CALAFINE is built — not as a replacement
            for medical treatment of serious conditions, but as a daily skincare lotion
            that addresses the inflammatory skin challenges most Indians face on a
            routine basis.
          </p>
        </section>

        {/* ── SECTION 3: SKIN TYPES ── */}
        <section id="calamine-skin-types" className={styles.section}>
          <h2 className={styles.sectionTitle}>Is Calamine Lotion Right for Your Skin Type?</h2>
          <p>
            One of the most frequently asked questions about calamine lotion is whether
            it is appropriate for different skin types. The short answer is that
            traditional calamine is best suited for oily and combination skin — its
            drying properties are beneficial when excess sebum is the problem, but can
            be counterproductive for dry or sensitive skin. This is one of the key
            limitations that modern formulations like CALAFINE overcome.
          </p>
          <p>
            Here is a complete guide to CALAFINE Lotion\'s suitability across all
            major skin types:
          </p>
          <div className={styles.skinTypeGrid}>
            {skinTypeGuide.map((s) => (
              <div key={s.type} className={styles.skinCard}>
                <div className={styles.skinCardTop}>
                  <span className={styles.skinIcon}>{s.icon}</span>
                  <div>
                    <p className={styles.skinType}>{s.type}</p>
                    <span
                      className={styles.skinVerdict}
                      style={{ background: s.color, color: s.textColor }}
                    >
                      {s.verdict}
                    </span>
                  </div>
                </div>
                <p className={styles.skinDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p>
            The key advantage of CALAFINE over traditional calamine is its suitability
            across all skin types. Where traditional calamine\'s drying action makes it
            unsuitable for regular use on dry or sensitive skin, CALAFINE\'s balanced
            formulation — combining soothing actives with deep nourishment — adapts to
            the needs of each skin type without the drawbacks.
          </p>
        </section>

        {/* ── SECTION 4: CALAMINE LIMITS ── */}
        <section id="calamine-limits" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Real Limitations of Traditional Calamine Lotion</h2>
          <p>
            Calamine lotion is a product from a different era of skincare — effective
            in its specific lane, but fundamentally limited in ways that become obvious
            when you examine what modern skin needs daily. Understanding these
            limitations is important not just as context for CALAFINE, but as general
            skincare literacy.
          </p>

          <h3 className={styles.subHeading}>It dries, it doesn't nourish</h3>
          <p>
            Calamine\'s primary mechanism is evaporative and astringent — it dries out
            the skin surface. For controlling oiliness or weeping rashes, this is
            useful. But in daily use on normal or dry skin, this drying action actively
            depletes the skin\'s moisture reserves. Used regularly without a supplementary
            moisturiser, calamine can leave skin dull, flaky, and increasingly dehydrated
            over time.
          </p>
          <p>
            This is why calamine is a first-aid product, not a skincare routine product.
            It treats acute symptoms; it does not build long-term skin health.
          </p>

          <h3 className={styles.subHeading}>It provides no antioxidant protection</h3>
          <p>
            Traditional calamine contains no antioxidant actives. For Indians living in
            cities — exposed daily to high UV levels, vehicular pollution, industrial
            emissions, and particulate matter — this is a significant gap. Free radical
            damage from these environmental stressors is cumulative and relentless.
            Without antioxidant protection in your skincare routine, this damage
            accelerates ageing, triggers hyperpigmentation, and degrades skin texture
            over months and years.
          </p>

          <h3 className={styles.subHeading}>It doesn't address the root cause of acne</h3>
          <p>
            While calamine can help manage surface oil and temporarily reduce acne
            redness, it does not actively treat acne at its source. It is a symptomatic
            measure, not a solution. This is why people who rely solely on calamine for
            acne management find it helpful in the short term but insufficient for
            preventing recurring breakouts.
          </p>

          <h3 className={styles.subHeading}>The formula hasn't evolved</h3>
          <p>
            The basic calamine formula has remained largely unchanged for decades. While
            its core properties remain useful, skincare science has advanced enormously.
            We now understand far more about the skin\'s barrier function, the role of
            deep hydration, and the importance of targeted actives for specific skin
            concerns. CALAFINE represents the application of this modern understanding
            to the traditional calamine use case — producing a lotion that does
            everything calamine does, and significantly more.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>⚠️</span>
            <p>
              <strong>The bottom line:</strong> Traditional calamine is a first-aid
              tool — excellent at what it was designed for, but not a daily skincare
              solution. CALAFINE is designed for both: acute skin relief <em>and</em>{' '}
              daily skin health maintenance.
            </p>
          </div>
        </section>

        {/* ── MID CTA 1 ── */}
        <div className={styles.midCta}>
          <div className={styles.midCtaGlow} aria-hidden="true" />
          <p className={styles.midCtaHead}>Ready to upgrade from basic calamine to a complete skincare solution?</p>
          <p className={styles.midCtaSub}>
            CALAFINE Lotion delivers everything traditional calamine does — plus deep nourishment,
            acne control, and long-term skin health. Pack of 2. Available now on Amazon.
          </p>
          <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            Shop CALAFINE Lotion on Amazon →
          </a>
        </div>

        {/* ── SECTION 5: CALAFINE INTRO ── */}
        <section id="calafine-intro" className={styles.section}>
          <h2 className={styles.sectionTitle}>Introducing CALAFINE: The Modern Skincare Upgrade</h2>
          <p>
            CALAFINE Lotion was developed with a singular goal: to take the best of the
            calamine tradition — the soothing, the cooling, the anti-inflammatory — and
            combine it with a modern, multi-purpose skincare formula that addresses the
            real, daily skin challenges faced by people in India today.
          </p>
          <p>
            The result is a lotion that handles three of the most common — and most
            frequently neglected — skincare needs simultaneously: sunburn and sun
            damage relief, deep and lasting skin nourishment, and active acne management.
            All in one formula, designed for daily use, suitable for every skin type,
            and gentle enough for both the face and body.
          </p>
          <p>
            The name CALAFINE itself reflects this heritage — combining the familiar
            calamine lineage with a refined, modern formulation philosophy. It is a
            product that speaks to Indians who grew up reaching for the pink bottle —
            but now want something that does the same job and much, much more.
          </p>
          <p>
            Available in a pack of 2, CALAFINE is designed to be used as a daily
            lotion — not just an occasional first-aid product. This shift in positioning
            is intentional. The skin challenges CALAFINE addresses — sun damage, dryness,
            acne — are not occasional events. They are daily realities for most Indians.
            The solution should match the frequency of the problem.
          </p>
        </section>

        {/* ── SECTION 6: CALAFINE BENEFITS ── */}
        <section id="calafine-benefits" className={styles.section}>
          <h2 className={styles.sectionTitle}>CALAFINE Lotion — Full Benefits Breakdown</h2>
          {calaFineAdvantages.map((adv) => (
            <div key={adv.num} className={styles.benefitBlock}>
              <div className={styles.benefitNum}>{adv.num}</div>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>{adv.title}</h3>
                {adv.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── SECTION 7: SUNBURN GUIDE ── */}
        <section id="sunburn-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Complete Guide to Sunburn Treatment in India</h2>
          <p>
            India\'s geographic position means that UV exposure levels are among the
            highest in the world for significant portions of the year. In coastal cities
            like Mumbai, Chennai, and Kochi, the UV index regularly reaches 10–11
            (classified as extreme) during summer months — even on overcast days, which
            filter visible light but not UV radiation. In northern cities like Delhi and
            Jaipur, UV exposure is severe from March through September.
          </p>
          <p>
            The consequences are predictable: sunburn is among the most common skin
            complaints in India, affecting people across all age groups and income
            levels. Outdoor workers, students, daily commuters, and weekend travellers
            are all at risk. And yet most people\'s response to sunburn remains
            inadequate — either waiting for it to heal on its own, applying home
            remedies of variable effectiveness, or reaching for basic products that
            address only the surface problem.
          </p>
          <p>
            Here is a medically rational, step-by-step approach to treating sunburn —
            with CALAFINE as the central skincare component at each stage:
          </p>
          <div className={styles.stagesStack}>
            {sunburnStages.map((s) => (
              <div key={s.stage} className={styles.stageCard}>
                <div className={styles.stageHeader}>
                  <span className={styles.stageLabel}>{s.stage}</span>
                  <h3 className={styles.stageTitle}>{s.title}</h3>
                </div>
                <p className={styles.stageDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <h3 className={styles.subHeading}>Long-term sun damage: the case for daily soothing lotion</h3>
          <p>
            Acute sunburn is the visible, painful manifestation of UV damage — but the
            more significant long-term threat is chronic, cumulative UV exposure. Every
            day spent outdoors in India involves UV exposure that degrades collagen,
            causes DNA damage in skin cells, drives hyperpigmentation, and accelerates
            the visible signs of ageing. Most of this happens without obvious burning —
            it\'s the slow, invisible accumulation that causes the most damage over
            years and decades.
          </p>
          <p>
            Daily application of CALAFINE helps address this cumulative damage. Its
            soothing and nourishing actives help the skin recover from the daily low-
            level UV stress it endures — maintaining skin health, supporting barrier
            function, and providing the hydration the skin needs to regenerate
            effectively overnight.
          </p>
          <p>
            For comprehensive sun protection, CALAFINE should be used alongside a
            broad-spectrum sunscreen during the day. Think of it this way: sunscreen
            prevents the damage; CALAFINE repairs and soothes the damage that inevitably
            gets through.
          </p>
        </section>

        {/* ── SECTION 8: ACNE GUIDE ── */}
        <section id="acne-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Treat Acne With the Right Lotion</h2>
          <p>
            Acne management is one of the most overcomplicated areas of skincare —
            flooded with aggressive treatments, misleading marketing, and contradictory
            advice. The fundamental reality is simpler than the industry makes it appear:
            acne has specific triggers, and the right skincare approach addresses those
            triggers without making the skin more vulnerable in the process.
          </p>
          <p>
            Understanding which type of acne you\'re dealing with helps determine the
            appropriate role for a lotion like CALAFINE in your routine:
          </p>
          <div className={styles.acneTable}>
            <div className={styles.acneTableHeader}>
              <span>Acne Type</span>
              <span>Primary Cause</span>
              <span>CALAFINE\'s Role</span>
            </div>
            {acneTypes.map((a) => (
              <div key={a.type} className={styles.acneTableRow}>
                <span className={styles.acneType}>{a.type}</span>
                <span className={styles.acneCause}>{a.cause}</span>
                <span className={styles.acneRole}>{a.calaFineRole}</span>
              </div>
            ))}
          </div>
          <h3 className={styles.subHeading}>The moisture-acne paradox — and how to resolve it</h3>
          <p>
            Many people with acne avoid moisturiser entirely, reasoning that more
            moisture means more oil means more breakouts. This is one of the most common
            and damaging skincare misconceptions in circulation. The reality is the
            opposite: when the skin is deprived of adequate hydration, its sebaceous
            glands compensate by producing more sebum — which clogs pores and
            creates exactly the conditions that trigger acne.
          </p>
          <p>
            The correct approach is not to avoid moisturiser, but to use the right
            moisturiser — one that is non-comedogenic (does not block pores), provides
            adequate hydration without heaviness, and ideally has some anti-inflammatory
            properties to calm the skin environment in which acne develops.
          </p>
          <p>
            This is precisely the profile that CALAFINE meets. Non-comedogenic formula.
            Deep nourishment without pore-blocking heaviness. Soothing, anti-inflammatory
            action that reduces the redness and irritation that characterise active
            acne. For acne-prone skin specifically, CALAFINE fills the moisturiser gap
            that most people either leave empty or fill with the wrong product.
          </p>
          <p>
            If you are also looking to cleanse your skin effectively before applying
            CALAFINE, our review of the{' '}
            <Link href="/blog/best-face-wash-oily-skin-india-2026" className={styles.internalLink}>
              best face wash for oily skin in India (2026)
            </Link>{' '}
            covers the ideal pre-moisturiser cleansing step for acne-prone skin.
          </p>
        </section>

        {/* ── MID CTA 2 ── */}
        <div className={styles.midCta}>
          <div className={styles.midCtaGlow} aria-hidden="true" />
          <p className={styles.midCtaHead}>The lotion that handles sunburn, dryness, and acne. All three. Every day.</p>
          <p className={styles.midCtaSub}>
            CALAFINE Lotion — pack of 2, all skin types, face and body. Available on Amazon India.
          </p>
          <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            Get CALAFINE Lotion on Amazon →
          </a>
        </div>

        {/* ── SECTION 9: DRY SKIN GUIDE ── */}
        <section id="dry-skin-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>Dry Skin Solutions That Actually Work Long-Term</h2>
          <p>
            Dry skin is a condition that affects an enormous proportion of the Indian
            population — and yet it is also one of the most poorly treated skin
            conditions. The typical response to dry skin is to apply more moisturiser.
            This helps briefly. The skin feels soft. Then it dries out again. More
            moisturiser. Repeat forever — with no improvement in the underlying condition.
          </p>
          <p>
            Why does this happen? Because most moisturisers address only the symptom —
            dryness — without addressing the cause — a compromised skin moisture barrier.
            The skin\'s moisture barrier is a complex structure composed of lipids, dead
            skin cells, and natural moisturising factors that retains water within the
            skin and keeps irritants out. When this barrier is damaged or depleted —
            by harsh cleansers, environmental stress, dehydration, or age — the skin
            loses water rapidly and becomes chronically dry.
          </p>
          <p>
            Repairing the moisture barrier requires more than surface application — it
            requires ingredients that penetrate and replenish the skin\'s structural
            lipids and water content at depth. This is exactly what CALAFINE\'s
            deep-nourishing formulation is designed to do.
          </p>
          <h3 className={styles.subHeading}>The role of climate in Indian dry skin</h3>
          <p>
            India\'s climate presents unique challenges for skin moisture management.
            In winter, cold, dry air in northern states strips moisture from exposed
            skin. In summer, the combination of heat, sweat, and intense sun damages
            the barrier. In coastal regions, high salt and humidity create a different
            set of challenges — surface oiliness masking underlying dehydration.
          </p>
          <p>
            Perhaps most significantly, the near-universal adoption of air conditioning
            in Indian urban environments creates a year-round drying environment for
            skin. Modern air conditioning systems can reduce indoor humidity to levels
            that cause continuous, low-grade skin dehydration — even in people who
            drink adequate water. This is a distinctly modern skin challenge that
            makes daily use of a deeply nourishing lotion more important than ever.
          </p>
          <h3 className={styles.subHeading}>Dry skin on the body — the forgotten problem</h3>
          <p>
            Most skincare attention focuses on the face. But the body — particularly
            areas like the elbows, knees, shins, and heels — is often left to cope
            with chronic dryness without any targeted care. These areas have fewer
            sebaceous glands than the face and are more frequently exposed to friction,
            sun, and environmental stress. Rough elbows, cracked heels, and flaky
            shins are not cosmetic inconveniences — they are signs of skin barrier
            breakdown.
          </p>
          <p>
            CALAFINE\'s formula is designed for both face and body, making it practical
            as a complete daily moisturiser for the whole body. A single product — used
            consistently morning and evening — addresses both the facial and body
            moisture needs that most people\'s routines leave unaddressed.
          </p>
          <p>
            For comparison, our guide on{' '}
            <Link href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba" className={styles.internalLink}>
              the best moisturiser for combination skin
            </Link>{' '}
            explores a cream-based option for targeted nourishment, particularly
            suited for combination and dry skin that prefers a richer cream texture
            over a lotion. Both products serve complementary roles in a complete
            skincare routine.
          </p>
        </section>

        {/* ── SECTION 10: ROUTINE ── */}
        <section id="routine" className={styles.section}>
          <h2 className={styles.sectionTitle}>Building a Full Skincare Routine Around CALAFINE</h2>
          <p>
            CALAFINE is designed to be the moisturising and soothing step in a complete
            skincare routine — not a standalone product. Here is how to build a
            practical, effective daily routine around it:
          </p>
          <div className={styles.routineGrid}>
            {[
              {
                time: '🌅 Morning Routine',
                steps: [
                  { step: '1. Cleanse', detail: 'Use a gentle, non-stripping face wash. For oily or acne-prone skin, a Vitamin C face wash like FreshOLite is ideal for morning cleansing.' },
                  { step: '2. Apply CALAFINE', detail: 'Apply to damp face and neck while the skin still has some moisture on it — this improves absorption and effectiveness.' },
                  { step: '3. Sunscreen (if going outdoors)', detail: 'Apply SPF 30+ broad-spectrum sunscreen over your lotion as the final step before heading out.' },
                ],
              },
              {
                time: '🌙 Evening Routine',
                steps: [
                  { step: '1. Double cleanse', detail: 'Remove sunscreen and pollution with an oil cleanser or micellar water, then follow with your face wash to fully cleanse the skin.' },
                  { step: '2. Apply CALAFINE', detail: 'Evening application is often more important than morning — the skin does most of its repair and regeneration overnight. CALAFINE\'s deep nourishment supports this natural process.' },
                  { step: '3. Body application', detail: 'Apply CALAFINE to any dry body areas — elbows, knees, heels — as part of your evening routine.' },
                ],
              },
            ].map((r) => (
              <div key={r.time} className={styles.routineCard}>
                <h3 className={styles.routineTime}>{r.time}</h3>
                {r.steps.map((s) => (
                  <div key={s.step} className={styles.routineStep}>
                    <p className={styles.routineStepName}>{s.step}</p>
                    <p className={styles.routineStepDetail}>{s.detail}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p style={{ marginTop: '28px' }}>
            For best results, consistency matters far more than the specific products
            used. A simple routine executed daily produces better outcomes than an
            elaborate routine followed sporadically. CALAFINE\'s pack-of-2 format
            is designed with this in mind — giving you enough product to sustain daily
            use without running out before you see meaningful results.
          </p>
        </section>

        {/* ── SECTION 11: WHO NEEDS IT ── */}
        <section id="who-needs-it" className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Needs CALAFINE Most?</h2>
          <div className={styles.whoGrid}>
            {[
              { icon: '🌞', label: 'Outdoor workers & commuters', desc: 'Daily sun exposure causes cumulative skin damage that compounds over years. CALAFINE addresses both the acute irritation and the long-term nourishment deficit created by daily outdoor exposure.' },
              { icon: '🏙️', label: 'Urban residents in polluted cities', desc: 'Pollution depletes the skin\'s antioxidant reserves and degrades the moisture barrier daily. CALAFINE\'s soothing and nourishing formula helps counteract this persistent environmental stress.' },
              { icon: '😤', label: 'Acne-prone individuals', desc: 'CALAFINE fills the critical gap in acne-prone skincare routines — a non-comedogenic moisturiser that nourishes without triggering breakouts and actively helps manage existing acne.' },
              { icon: '🌵', label: 'People with chronically dry skin', desc: 'Deep-nourishing formula that addresses the moisture deficit at its source rather than simply masking surface dryness — ideal for persistent, long-term dry skin management.' },
              { icon: '☀️', label: 'Post-sunburn recovery', desc: 'Whether from a day at the beach, outdoor work, or simply not applying sunscreen on a harsh day — CALAFINE is the first-response lotion for sunburn relief and skin recovery.' },
              { icon: '🧔', label: 'Men new to skincare', desc: 'A simple, multi-purpose lotion that handles multiple skin needs in one product is the ideal entry point for men starting a skincare routine. No complicated steps. One product, real results.' },
              { icon: '🪒', label: 'Regular shaving & waxing', desc: 'Post-hair-removal skin is sensitised and prone to ingrown hairs and irritation. CALAFINE\'s soothing action calms this post-procedure irritation and reduces associated redness.' },
              { icon: '✈️', label: 'Frequent travellers', desc: 'Travel — particularly air travel — is deeply dehydrating for the skin. CALAFINE\'s portable format and multi-purpose formula makes it the ideal travel skincare companion.' },
            ].map((w) => (
              <div key={w.label} className={styles.whoCard}>
                <span className={styles.whoIcon}>{w.icon}</span>
                <p className={styles.whoLabel}>{w.label}</p>
                <p className={styles.whoDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED BLOGS ── */}
        <div className={styles.relatedBand}>
          <p className={styles.relatedLabel}>Complete Your Skincare Routine</p>
          <p className={styles.relatedDesc}>
            CALAFINE is your soothing and nourishing lotion. Pair it with the right
            cleanser and moisturiser for a complete routine that covers every skin need.
          </p>
          <div className={styles.relatedGrid}>
            <Link href="/blog/best-face-wash-oily-skin-india-2026" className={styles.relatedCard}>
              <span className={styles.relatedIcon}>🍊</span>
              <div>
                <p className={styles.relatedTitle}>Best Face Wash for Oily Skin (2026)</p>
                <p className={styles.relatedSub}>FreshOLite Vitamin C Face Wash — the ideal cleansing step</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba" className={styles.relatedCard}>
              <span className={styles.relatedIcon}>🌿</span>
              <div>
                <p className={styles.relatedTitle}>Best Moisturiser for Combination Skin</p>
                <p className={styles.relatedSub}>Moist Sure Cream — Aloe Vera, Vitamin-E & Jojoba Oil</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ── SECTION 12: MYTHS ── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Skincare Myths Debunked</h2>
          <p>
            The skincare industry — and the internet — is full of misleading information
            that causes people to make counterproductive decisions about their skin.
            Here are six of the most common and damaging skincare myths, debunked with
            the science behind them.
          </p>
          <div className={styles.mythsList}>
            {myths.map((m, i) => (
              <div key={i} className={styles.mythCard}>
                <div className={styles.mythTop}>
                  <span className={styles.mythIcon}>❌</span>
                  <p className={styles.mythMythText}><strong>Myth:</strong> {m.myth}</p>
                </div>
                <div className={styles.mythBottom}>
                  <span className={styles.truthIcon}>✓</span>
                  <p className={styles.mythTruthText}><strong>Truth:</strong> {m.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 13: FAQ ── */}
        <section id="faq" className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{f.q}</summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className={styles.bottomCta}>
          <div className={styles.bottomCtaGlow} aria-hidden="true" />
          <h2>Your Skin Deserves More Than a Basic Lotion</h2>
          <p>
            You\'ve read the complete guide. You know what calamine does, what it can\'t
            do, and how CALAFINE closes that gap. Sunburn relief that works on contact.
            Deep nourishment that holds through the day. Acne control that doesn\'t
            sacrifice moisture. All in one formula. Available in a pack of 2 on Amazon.
          </p>
          <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            Shop CALAFINE Lotion on Amazon →
          </a>
          <p className={styles.bottomNote}>
            Pack of 2 · All Skin Types · Face &amp; Body · Free delivery available
          </p>
        </section>

      </div>
    </article>
  );
}