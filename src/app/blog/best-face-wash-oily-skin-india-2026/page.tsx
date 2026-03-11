import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './fresholite-blog.module.css';

export const metadata: Metadata = {
  title: 'Best Face Wash for Oily Skin in India (2026 Guide) — FreshOLite Vitamin C Face Wash',
  description:
    'Oily skin, clogged pores, and dull complexion? FreshOLite Vitamin C Face Wash with Orange Extracts deeply cleanses, brightens, and controls oil — without over-drying. Best face wash for oily skin in India 2026.',
  keywords: [
    'best face wash for oily skin India',
    'best face wash for oily skin 2026',
    'vitamin c face wash',
    'face wash for oily skin',
    'brightening face wash India',
    'face wash for dark spots',
    'orange extract face wash',
    'face wash for dull skin',
    'best face wash for acne oily skin',
    'face wash for glowing skin',
    'face wash for all skin types India',
    'deep cleansing face wash',
    'face wash for uneven skin tone',
    'vitamin c facewash India',
    'best facewash for men and women India',
    'anti aging face wash India',
  ],
  alternates: {
    canonical: 'https://www.lucidpharmatech.com/blog/best-face-wash-oily-skin-india-2026',
  },
  openGraph: {
    title: 'Best Face Wash for Oily Skin in India (2026) — FreshOLite Vitamin C Face Wash',
    description:
      'Stop fighting oily, dull skin with the wrong cleanser. FreshOLite combines Vitamin C and Orange Extracts to deeply cleanse, brighten, and balance — gently, every day.',
    images: [
      {
        url: '/images/fresholite-facewash.png',
        width: 1200,
        height: 630,
        alt: 'FreshOLite Vitamin C Face Wash with Orange Extracts',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0ddPXlB0';

const oilyProblems = [
  {
    icon: '🫧',
    title: 'Clogged Pores & Blackheads',
    desc: 'Excess sebum mixes with dead skin cells and blocks pores. Most cleansers clear the surface but leave impurities deep inside — causing persistent blackheads and bumps.',
    fix: 'FreshOLite\'s deep-cleansing formula reaches inside pores to remove trapped oil and dirt without harsh stripping.',
  },
  {
    icon: '😞',
    title: 'Dull, Flat-Looking Skin',
    desc: 'Oily skin doesn\'t automatically mean glowing skin. A buildup of excess oil, pollution, and dead cells actually creates a dull, grey-ish complexion over time.',
    fix: 'Vitamin C and Orange Extracts work as natural brighteners — lifting dullness and restoring your skin\'s natural radiance with every wash.',
  },
  {
    icon: '🌫️',
    title: 'Greasy T-Zone by Mid-Morning',
    desc: 'You wash your face and look fresh. By 10 AM, your nose and forehead are shining again. It\'s a cycle that most face washes fail to break.',
    fix: 'The balanced formula cleanses thoroughly to remove oil build-up at the source — reducing how quickly your skin overproduces sebum through the day.',
  },
  {
    icon: '🔴',
    title: 'Acne, Breakouts & Uneven Texture',
    desc: 'Oily skin and acne almost always go together. Blocked pores, bacteria, and inflammation create recurring breakouts and rough, uneven skin texture.',
    fix: 'Antioxidants in FreshOLite fight the environmental triggers of acne while cleansing removes the impurities that cause breakouts in the first place.',
  },
];

const ingredients = [
  {
    icon: '🍊',
    name: 'Vitamin C',
    subtitle: 'The Gold Standard of Skin Brightening',
    body: 'Vitamin C is one of the most extensively studied skincare actives in the world. As a potent antioxidant, it neutralises free radical damage caused by UV exposure and pollution — the two biggest drivers of premature ageing, dark spots, and uneven skin tone. Applied daily via a face wash, it steadily brightens complexion, fades hyperpigmentation, and stimulates collagen production for firmer-looking skin.',
    color: '#fff7ed',
    border: '#fed7aa',
    text: '#9a3412',
  },
  {
    icon: '🌿',
    name: 'Natural Orange Extracts',
    subtitle: 'Nature\'s Own Brightening Agent',
    body: 'Orange extracts are rich in natural Vitamin C, citric acid, and flavonoids that work synergistically to exfoliate dead skin cells, tighten pores, and restore skin\'s natural luminosity. The mild natural acids gently resurface skin texture over time — making this an effective face wash not just for cleansing, but for long-term skin improvement.',
    color: '#fff3e0',
    border: '#ffcc80',
    text: '#bf360c',
  },
  {
    icon: '🛡️',
    name: 'Antioxidant Complex',
    subtitle: 'Daily Defence Against Dull Skin',
    body: 'Pollution, UV rays, and environmental stressors break down skin cells daily — and most Indians living in urban areas are exposed to high levels of both. FreshOLite\'s antioxidant profile directly combats this oxidative damage, helping maintain healthier, clearer skin even in high-pollution environments.',
    color: '#fef9c3',
    border: '#fde68a',
    text: '#854d0e',
  },
];

const results = [
  { week: 'Week 1', result: 'Skin feels cleaner, less congested after each wash. Pores appear visibly less clogged.' },
  { week: 'Week 2', result: 'T-zone oil control improves. Skin stays fresher longer through the day.' },
  { week: 'Week 4', result: 'Skin tone begins to even out. Dullness reduces. Complexion looks noticeably brighter.' },
  { week: 'Week 6+', result: 'Dark spots fade. Skin texture is visibly smoother. Natural glow is more consistent.' },
];

const faqs = [
  {
    q: 'Is FreshOLite face wash suitable for oily skin specifically?',
    a: 'Yes — FreshOLite is designed to deeply cleanse excess oil and impurities without over-stripping, making it particularly effective for oily and combination skin types.',
  },
  {
    q: 'Can I use this face wash every day?',
    a: 'Absolutely. FreshOLite is formulated for daily use — morning and night. The gentle formula ensures it can be used twice daily without causing dryness or irritation.',
  },
  {
    q: 'Will it dry out my skin if I use it regularly?',
    a: 'No. Unlike harsh foaming cleansers that strip the skin\'s moisture barrier, FreshOLite removes impurities while maintaining the skin\'s natural hydration — leaving it soft, not tight.',
  },
  {
    q: 'Does it help with dark spots and hyperpigmentation?',
    a: 'Yes. Consistent use of Vitamin C and Orange Extracts has a cumulative brightening effect — visibly fading dark spots, post-acne marks, and uneven pigmentation over time.',
  },
  {
    q: 'Is it safe for sensitive skin?',
    a: 'FreshOLite is formulated to be gentle on all skin types, including sensitive skin. However, if you have very reactive skin, patch-test on the inner wrist before using on your face.',
  },
  {
    q: 'Can men use this face wash?',
    a: 'Yes. FreshOLite works effectively for all genders. It\'s a practical daily cleanser for men dealing with oily skin, post-shave dullness, or pollution-related skin congestion.',
  },
];

export default function FreshOLiteBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Face Wash · Oily Skin · Vitamin C · 2026 Guide</span>
            <h1 className={styles.heroTitle}>
              Best Face Wash for
              <br />
              <em>Oily Skin in India — 2026</em>
            </h1>
            <p className={styles.heroSub}>
              Oily skin, blocked pores, and a dull complexion are not a life sentence.
              The right face wash — with the right active ingredients — changes everything.
              Here's why FreshOLite Vitamin C Face Wash leads the pack in 2026.
            </p>
            <div className={styles.heroActions}>
              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy FreshOLite on Amazon →
              </a>
              <span className={styles.heroSubNote}>Pack of 2 × 100ml · All skin types</span>
            </div>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageRing} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/fresholite-facewash.png"
                alt="FreshOLite Vitamin C Face Wash with Orange Extracts — Pack of 2"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🍊 Vitamin C</span>
              <span>🌿 Orange Extracts</span>
              <span>✨ Brightening</span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ── INTRO ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Finding the Right Face Wash for Oily Skin Is So Hard</h2>
          <p>
            Walk into any chemist or scroll through any e-commerce platform and you'll
            find hundreds of face washes claiming to be perfect for oily skin. Most of
            them fall into one of two failure modes: they either strip your skin so
            aggressively that it overcompensates by producing <em>more</em> oil — or they
            don't cleanse deeply enough to make any real difference.
          </p>
          <p>
            The Indian climate makes this even harder. High humidity, heat, pollution,
            and dust accelerate sebum production and clog pores faster than anywhere
            else. Your face wash needs to work harder here than it would in a cooler,
            cleaner environment.
          </p>
          <p>
            What you need is a cleanser built around <strong>active brightening ingredients</strong> —
            not just soap — that cleans thoroughly, protects against environmental damage,
            and doesn't destroy your moisture barrier in the process. That's the formula
            FreshOLite was built around.
          </p>
        </section>

        {/* ── PROBLEMS GRID ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Oily Skin Problems FreshOLite Actually Solves</h2>
          <div className={styles.problemsGrid}>
            {oilyProblems.map((p) => (
              <div key={p.title} className={styles.problemCard}>
                <span className={styles.problemIcon}>{p.icon}</span>
                <h3 className={styles.problemTitle}>{p.title}</h3>
                <p className={styles.problemDesc}>{p.desc}</p>
                <div className={styles.problemFix}>
                  <span className={styles.fixLabel}>✓ How FreshOLite helps</span>
                  <p>{p.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID CTA 1 ── */}
        <div className={styles.midCta}>
          <div className={styles.midCtaOrb} aria-hidden="true" />
          <p className={styles.midCtaHead}>
            Stop washing your face with something that isn't working.
          </p>
          <p className={styles.midCtaSub}>
            FreshOLite Vitamin C Face Wash — deep cleansing, oil control, and skin brightening in one daily step.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Get FreshOLite on Amazon — Pack of 2 →
          </a>
        </div>

        {/* ── INGREDIENT DEEP DIVE ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Makes FreshOLite Different: The Active Ingredients</h2>
          <p style={{ color: '#4a3728', lineHeight: '1.8', marginBottom: '32px' }}>
            Most face washes are just surfactants with fragrance. FreshOLite is built
            around ingredients with a proven track record in dermatology — each one
            doing a specific job for your skin.
          </p>
          <div className={styles.ingredientStack}>
            {ingredients.map((ing) => (
              <div
                key={ing.name}
                className={styles.ingredientCard}
                style={{ background: ing.color, borderColor: ing.border }}
              >
                <div className={styles.ingHeader}>
                  <span className={styles.ingIcon}>{ing.icon}</span>
                  <div>
                    <p className={styles.ingLabel} style={{ color: ing.text }}>{ing.name}</p>
                    <p className={styles.ingSubtitle}>{ing.subtitle}</p>
                  </div>
                </div>
                <p className={styles.ingBody}>{ing.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RESULTS TIMELINE ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What to Expect: A Realistic Results Timeline</h2>
          <p style={{ color: '#4a3728', lineHeight: '1.8', marginBottom: '28px' }}>
            Skincare takes consistency. Here's what regular daily use of FreshOLite
            typically delivers — based on how Vitamin C and Orange Extracts work on
            the skin over time.
          </p>
          <div className={styles.timeline}>
            {results.map((r, i) => (
              <div key={r.week} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                {i < results.length - 1 && <div className={styles.timelineLine} />}
                <div className={styles.timelineContent}>
                  <span className={styles.timelineWeek}>{r.week}</span>
                  <p className={styles.timelineResult}>{r.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW TO USE ── */}
        <section className={styles.howTo}>
          <h2 className={styles.sectionTitle}>How to Use FreshOLite for Maximum Results</h2>
          <div className={styles.stepsRow}>
            {[
              { n: '1', title: 'Wet your face', desc: 'Splash lukewarm water on your face — not hot, which strips natural oils.' },
              { n: '2', title: 'Apply a coin-sized amount', desc: 'Squeeze a small amount onto your fingertips and work into a lather.' },
              { n: '3', title: 'Massage for 30–60 seconds', desc: 'Use gentle circular motions across your entire face, focusing on the T-zone.' },
              { n: '4', title: 'Rinse and pat dry', desc: 'Rinse with cool water to help close pores. Pat — don\'t rub — your face dry.' },
            ].map((s) => (
              <div key={s.n} className={styles.stepBox}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className={styles.howToTip}>
            💡 <strong>Pro tip:</strong> Use FreshOLite twice daily — morning and evening.
            Follow with a moisturiser after each wash to lock in hydration. If you have
            combination skin and are looking for a pairing moisturiser, our{' '}
            <Link href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba" className={styles.internalLink}>
              Moist Sure Cream guide
            </Link>{' '}
            covers the best option for post-cleanse nourishment.
          </p>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Should Use FreshOLite Vitamin C Face Wash?</h2>
          <div className={styles.forGrid}>
            {[
              { icon: '💦', label: 'Oily skin types', desc: 'Deep cleanses excess sebum without triggering more oil production.' },
              { icon: '🌀', label: 'Combination skin', desc: 'Balances the T-zone while being gentle on drier areas.' },
              { icon: '🌑', label: 'Dark spots & pigmentation', desc: 'Vitamin C fades marks, spots, and uneven tone with daily use.' },
              { icon: '🌆', label: 'Urban & pollution-exposed skin', desc: 'Antioxidants actively fight the damage caused by daily pollution exposure.' },
              { icon: '⏳', label: 'Anti-ageing care', desc: 'Vitamin C supports collagen production — slowing visible signs of ageing.' },
              { icon: '👨‍👩‍👧', label: 'All genders, all ages', desc: 'Formulated for all skin types and suitable for men and women alike.' },
            ].map((f) => (
              <div key={f.label} className={styles.forCard}>
                <span className={styles.forIcon}>{f.icon}</span>
                <p className={styles.forLabel}>{f.label}</p>
                <p className={styles.forDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERNAL LINKING BAND ── */}
        <div className={styles.relatedBand}>
          <p className={styles.relatedLabel}>Complete Your Skincare Routine</p>
          <p className={styles.relatedDesc}>
            A great face wash is step one. Pair FreshOLite with the right skincare
            products for a full routine that covers cleansing, moisturising, sun care,
            and blemish control.
          </p>
          <div className={styles.relatedLinks}>
            <Link href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba" className={styles.relatedCard}>
              <span>🧴</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Moisturizer for Combination Skin</p>
                <p className={styles.relatedCardSub}>Moist Sure Cream — Aloe Vera, Vitamin-E & Jojoba Oil</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link href="/blog/calafine-lotion-sunburn-relief-acne-care-skin-nourishment" className={styles.relatedCard}>
              <span>☀️</span>
              <div>
                <p className={styles.relatedCardTitle}>Sunburn Relief, Acne & Nourishment</p>
                <p className={styles.relatedCardSub}>CALAFINE Lotion — 3 skin problems, one solution</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ── FAQ ── */}
        <section className={styles.section}>
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
          <div className={styles.bottomCtaOrb} aria-hidden="true" />
          <h2>Your Skin Deserves a Smarter Cleanser</h2>
          <p>
            Oily skin, dullness, dark spots, and clogged pores are not permanent
            problems — they're the result of using the wrong products. FreshOLite
            Vitamin C Face Wash gives your skin the active ingredients it needs to
            genuinely improve. Available on Amazon in a pack of 2 × 100ml.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Shop FreshOLite on Amazon →
          </a>
          <p className={styles.bottomNote}>Pack of 2 × 100ml · Gentle on all skin types · Free delivery available</p>
        </section>

      </div>
    </article>
  );
}