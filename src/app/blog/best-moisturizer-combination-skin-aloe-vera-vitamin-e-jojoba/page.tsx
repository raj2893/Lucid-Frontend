import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './moistsure-blog.module.css';

export const metadata: Metadata = {
  title: 'Best Moisturizer for Combination Skin in India 2025 — Moist Sure Cream',
  description:
    'Tired of greasy creams or tight dry patches? Moist Sure Cream with Aloe Vera, Vitamin-E & Jojoba Oil is the best moisturizer for combination skin — balances, hydrates, and nourishes without clogging pores.',
  keywords: [
    'best moisturizer for combination skin',
    'moisturizer for dry and oily skin',
    'aloe vera cream for face',
    'vitamin e cream for skin',
    'jojoba oil moisturizer',
    'best face cream for combination skin India',
    'daily moisturizer for all skin types',
    'moisturizer for dry patches',
    'non greasy moisturizer India',
    'best cream for dry sensitive skin',
    'deep nourishment cream',
    'moisturizer for face and body',
    'aloe vera vitamin e jojoba cream',
    'best moisturizer India 2025',
  ],
  alternates: {
    canonical:
      'https://www.lucidllp.com/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba',
  },
  openGraph: {
    title: 'Best Moisturizer for Combination Skin — Moist Sure Cream with Aloe Vera, Vitamin-E & Jojoba Oil',
    description:
      'The one cream that balances oily zones, heals dry patches, and deeply nourishes — without feeling heavy or greasy.',
    images: [
      {
        url: '/images/moistsure-cream.jpg',
        width: 1200,
        height: 630,
        alt: 'Moist Sure Cream with Aloe Vera Vitamin-E and Jojoba Oil',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0btC4bWY';

const skinStruggles = [
  {
    zone: 'T-Zone',
    icon: '😓',
    problem: 'Shiny forehead, oily nose & chin by noon',
    fix: 'Jojoba Oil mimics skin\'s natural sebum — it signals your skin to stop overproducing oil.',
  },
  {
    zone: 'Cheeks',
    icon: '😣',
    problem: 'Tight, flaky, or irritated dry patches',
    fix: 'Aloe Vera soothes and Vitamin-E deeply repairs the moisture barrier in dry zones.',
  },
  {
    zone: 'Body',
    icon: '🦶',
    problem: 'Rough elbows, knees, cracked heels',
    fix: 'The cream\'s thick nourishing base penetrates tough skin areas and locks moisture in.',
  },
  {
    zone: 'All Over',
    icon: '✨',
    problem: 'Dull, tired-looking skin lacking radiance',
    fix: 'Vitamin-E antioxidants fight free radicals and restore that healthy, youthful glow.',
  },
];

const ingredients = [
  {
    name: 'Aloe Vera',
    icon: '🌿',
    color: '#e8f5e9',
    border: '#a5d6a7',
    title: 'Nature\'s Skin Healer',
    desc: 'Aloe Vera is a clinically recognised humectant — it draws moisture into the skin and holds it there. It also calms redness, reduces irritation, and is light enough to work on oily zones without causing breakouts. This is the ingredient that makes Moist Sure suitable for combination skin specifically.',
  },
  {
    name: 'Vitamin-E',
    icon: '🛡️',
    color: '#fff8e1',
    border: '#ffe082',
    title: 'Your Skin\'s Daily Shield',
    desc: 'Vitamin-E is one of the most researched antioxidants in skincare. It neutralises free radical damage from UV exposure, pollution, and stress — the primary causes of premature ageing, dark spots, and uneven skin tone. Daily application visibly improves skin elasticity and texture over time.',
  },
  {
    name: 'Jojoba Oil',
    icon: '💧',
    color: '#e3f2fd',
    border: '#90caf9',
    title: 'Deep Moisture, Zero Grease',
    desc: 'Jojoba Oil is technically a wax ester — structurally almost identical to human skin\'s sebum. This makes it uniquely effective: it penetrates deeply to nourish without sitting on top of the skin. The result is long-lasting softness with no greasy residue — ideal for combination skin types.',
  },
];

const faqs = [
  {
    q: 'Is Moist Sure Cream suitable for combination skin?',
    a: 'Yes — it is specifically well-suited for combination skin. Jojoba Oil balances sebum in oily areas while Aloe Vera and Vitamin-E repair and hydrate dry patches, making it effective across both skin types simultaneously.',
  },
  {
    q: 'Can I use it on my face every day?',
    a: 'Absolutely. Moist Sure is designed for daily use on both face and body. Apply in the morning and evening after cleansing for best results.',
  },
  {
    q: 'Will it make my T-zone more oily?',
    a: 'No. Jojoba Oil is a non-comedogenic emollient that actually helps regulate oil production rather than add to it. It is safe for oily and acne-prone zones.',
  },
  {
    q: 'Can I use it on my body, not just face?',
    a: 'Yes — it is a versatile face and body cream. It works especially well on rough areas like elbows, knees, and heels where dryness is more severe.',
  },
  {
    q: 'Is it suitable for sensitive skin?',
    a: 'Yes. All three key ingredients — Aloe Vera, Vitamin-E, and Jojoba Oil — are well-known for being gentle and soothing on sensitive or reactive skin types.',
  },
  {
    q: 'How long before I see results?',
    a: 'Many users notice softer, more hydrated skin after the first application. Consistent daily use over 2–4 weeks yields the most visible improvements in skin tone, elasticity, and radiance.',
  },
];

export default function MoistSureBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>

          <div className={styles.heroText}>
            <span className={styles.tag}>Skincare · Moisturizers · Combination Skin</span>
            <h1 className={styles.heroTitle}>
              Finally — A Moisturizer That
              <br />
              <em>Gets Combination Skin Right.</em>
            </h1>
            <p className={styles.heroSub}>
              Oily in some places. Dry in others. Most creams fix one and make the other
              worse. Moist Sure Cream — with Aloe Vera, Vitamin-E &amp; Jojoba Oil — is
              built to balance both, every single day.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop Moist Sure Cream on Amazon →
            </a>
            <p className={styles.heroNote}>Pack of 2 · Suitable for face &amp; body</p>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/moistsure-cream.png"
                alt="Moist Sure Cream with Aloe Vera, Vitamin-E and Jojoba Oil – Pack of 2"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🌿 Aloe Vera</span>
              <span>🛡️ Vitamin-E</span>
              <span>💧 Jojoba Oil</span>
            </div>
          </div>

        </div>
      </header>

      <div className={styles.container}>

        {/* ── INTRO ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Combination Skin Is the Hardest to Moisturise</h2>
          <p>
            Combination skin is the most common skin type — and the most misunderstood.
            Your T-zone (forehead, nose, chin) produces excess oil while your cheeks,
            around the eyes, and sometimes the neck feel persistently dry or tight. It's
            two skin problems living in the same face.
          </p>
          <p>
            Heavy creams fix the dry patches but turn your T-zone into an oil slick by
            midday. Lightweight gels hydrate the surface but don't penetrate enough to
            repair deep dryness. Finding the right balance has always meant compromise —
            until formulas like Moist Sure started getting the ingredient mix right.
          </p>
          <p>
            The secret is in choosing ingredients that are <strong>sebum-smart</strong> — oils and
            actives that nourish where the skin needs it, regulate where it doesn't, and
            never leave a greasy film behind. That's exactly what Aloe Vera, Vitamin-E,
            and Jojoba Oil together achieve.
          </p>
        </section>

        {/* ── SKIN ZONE GRID ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Skin's Problem Zones — And What Fixes Each One</h2>
          <div className={styles.zoneGrid}>
            {skinStruggles.map((s) => (
              <div key={s.zone} className={styles.zoneCard}>
                <div className={styles.zoneTop}>
                  <span className={styles.zoneIcon}>{s.icon}</span>
                  <span className={styles.zoneLabel}>{s.zone}</span>
                </div>
                <p className={styles.zoneProblem}>{s.problem}</p>
                <p className={styles.zoneFix}>{s.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INGREDIENT DEEP DIVE ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why These 3 Ingredients Make All the Difference</h2>
          <p style={{ marginBottom: '32px', color: '#4a5568', lineHeight: '1.8' }}>
            Not all moisturisers are equal — the ingredients list is what separates a
            cream that works from one that just smells nice. Here's exactly why Moist
            Sure's three core ingredients are the right choice for combination and dry skin.
          </p>
          <div className={styles.ingredientList}>
            {ingredients.map((ing) => (
              <div
                key={ing.name}
                className={styles.ingredientCard}
                style={{
                  background: ing.color,
                  borderColor: ing.border,
                }}
              >
                <div className={styles.ingredientHeader}>
                  <span className={styles.ingredientIcon}>{ing.icon}</span>
                  <div>
                    <p className={styles.ingredientName}>{ing.name}</p>
                    <p className={styles.ingredientTitle}>{ing.title}</p>
                  </div>
                </div>
                <p className={styles.ingredientDesc}>{ing.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID CTA ── */}
        <div className={styles.midCta}>
          <div className={styles.midCtaLeaf} aria-hidden="true">🌿</div>
          <p className={styles.midCtaHead}>Give your skin the balance it's been asking for.</p>
          <p className={styles.midCtaSub}>
            Moist Sure Cream — deep nourishment without the grease. Available in a pack of 2 on Amazon.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy Moist Sure Cream on Amazon →
          </a>
        </div>

        {/* ── HOW TO USE ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Use It for Best Results</h2>
          <div className={styles.stepsGrid}>
            {[
              { step: '01', title: 'Cleanse first', desc: 'Apply on clean, slightly damp skin right after washing your face or showering — damp skin absorbs moisture far more effectively.' },
              { step: '02', title: 'Use a pea-sized amount for face', desc: 'A little goes a long way. Warm it between your fingertips and press gently into the skin rather than rubbing.' },
              { step: '03', title: 'Layer lighter products first', desc: 'If you use serums or toners, apply those before the cream. Moist Sure seals in everything underneath it.' },
              { step: '04', title: 'Don\'t forget problem areas', desc: 'Apply a slightly thicker layer to elbows, knees, and heels. These areas benefit from the Jojoba Oil\'s deep penetration.' },
            ].map((s) => (
              <div key={s.step} className={styles.stepCard}>
                <span className={styles.stepNum}>{s.step}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Should Use Moist Sure Cream?</h2>
          <div className={styles.forGrid}>
            {[
              { icon: '🧴', label: 'Combination skin', desc: 'Oily T-zone with dry cheeks — the exact skin type this formula is built for.' },
              { icon: '🌵', label: 'Dry & sensitive skin', desc: 'Aloe Vera and Jojoba Oil deliver lasting hydration without causing irritation.' },
              { icon: '👨', label: 'Men\'s skincare', desc: 'Non-greasy, fast-absorbing formula that works as a practical everyday moisturiser for men.' },
              { icon: '☀️', label: 'Sun-exposed skin', desc: 'Vitamin-E antioxidant action helps repair daily UV and pollution-related skin damage.' },
              { icon: '🦵', label: 'Body care', desc: 'Versatile enough for rough body areas — elbows, knees, heels, and dry legs.' },
              { icon: '🔄', label: 'Simplified routines', desc: 'One cream for face and body — no need for separate products for every area.' },
            ].map((f) => (
              <div key={f.label} className={styles.forCard}>
                <span className={styles.forIcon}>{f.icon}</span>
                <p className={styles.forLabel}>{f.label}</p>
                <p className={styles.forDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

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
          <div className={styles.bottomCtaDecor} aria-hidden="true" />
          <h2>Your Skin Deserves Ingredients That Actually Work</h2>
          <p>
            Moist Sure Cream brings together three of the most trusted ingredients in
            skincare — Aloe Vera, Vitamin-E, and Jojoba Oil — in one balanced formula
            that works for combination, dry, and sensitive skin alike. Pack of 2, so
            you'll never run out.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Get Moist Sure Cream on Amazon →
          </a>
          <p className={styles.bottomNote}>Pack of 2 · Face &amp; Body · All Skin Types</p>
        </section>

      </div>
    </article>
  );
}