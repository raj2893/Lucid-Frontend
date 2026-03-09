import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './calafine-blog.module.css';

export const metadata: Metadata = {
  title: 'Best Lotion for Sunburn Relief, Acne & Dry Skin — CALAFINE Lotion Review',
  description:
    'Struggling with sunburn, acne, or dry skin? CALAFINE Lotion gives instant relief, deep nourishment, and clears breakouts. Suitable for all skin types. Shop now on Amazon.',
  keywords: [
    'sunburn relief lotion',
    'best lotion for sunburn',
    'acne care lotion India',
    'deep moisturizing lotion',
    'lotion for dry skin',
    'calamine lotion alternative',
    'lotion for skin redness',
    'best skin lotion for men and women',
    'lotion for acne and dark spots',
    'sunburn treatment at home',
    'CALAFINE lotion',
    'skin nourishment lotion',
  ],
  alternates: {
    canonical:
      'https://www.lucidpharmatech.com/blog/calafine-lotion-sunburn-relief-acne-care-skin-nourishment',
  },
  openGraph: {
    title: 'Best Lotion for Sunburn, Acne & Dry Skin — CALAFINE Lotion',
    description:
      'One lotion. Three solutions. Sunburn relief, acne control, and deep skin nourishment — all in one gentle formula for all skin types.',
    images: [{ url: '/images/calafine-lotion.jpg', width: 1200, height: 630, alt: 'CALAFINE Lotion' }],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0bBSOIFo';

const painPoints = [
  {
    emoji: '🌅',
    problem: 'Red, stinging skin after a day in the sun?',
    solution: 'CALAFINE cools and soothes sunburn on contact, reducing redness fast.',
  },
  {
    emoji: '💧',
    problem: 'Skin feeling tight, flaky, or parched?',
    solution: 'Its deep-penetrating formula restores moisture from within, not just on the surface.',
  },
  {
    emoji: '😤',
    problem: 'Breakouts that just won\'t quit?',
    solution: 'CALAFINE actively controls acne and fades blemishes for visibly clearer skin.',
  },
  {
    emoji: '🙋',
    problem: 'Confused about what\'s right for your skin type?',
    solution: 'Gentle enough for all skin types — men and women alike.',
  },
];

const faqs = [
  {
    q: 'Can I use CALAFINE Lotion every day?',
    a: 'Yes. CALAFINE is formulated for daily use and is gentle enough for regular application on face and body.',
  },
  {
    q: 'How quickly does it work on sunburn?',
    a: 'Most users feel relief within minutes of application. The soothing action is designed to work on contact.',
  },
  {
    q: 'Is CALAFINE suitable for oily or acne-prone skin?',
    a: 'Absolutely. CALAFINE helps regulate and control acne while keeping skin balanced — it doesn\'t clog pores.',
  },
  {
    q: 'Can it be used on the face and body?',
    a: 'Yes. It is versatile enough for both facial skincare and full-body moisturizing use.',
  },
  {
    q: 'Is it safe for men to use?',
    a: 'CALAFINE is specifically designed for both men and women. It suits all genders and all skin types.',
  },
];

export default function CalafineBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Skincare · Sun Care · Acne</span>
            <h1 className={styles.heroTitle}>
              One Lotion.<br />
              <em>Three Skin Problems Solved.</em>
            </h1>
            <p className={styles.heroSub}>
              Sunburn, dryness, and acne are three of the most common — and most
              frustrating — skin struggles. CALAFINE Lotion is built to tackle all
              three, in one bottle, for every skin type.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Buy CALAFINE on Amazon →
            </a>
          </div>

          {/* ── PRODUCT IMAGE CONTAINER ── */}
          <div className={styles.heroImageWrap}>
            <div className={styles.imageCard}>
              <Image
                src="/images/calafine-lotion.png"
                alt="CALAFINE Lotion – Sunburn Relief, Deep Nourishment, Acne Care"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className={styles.imageBadge}>Pack of 2 · All Skin Types</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ───── INTRO ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Your Skin Needs More Than a Basic Moisturiser</h2>
          <p>
            Most lotions promise a lot and deliver very little. They sit on the skin's
            surface, mask dryness for a few hours, and do nothing about the real
            problems — sunburn inflammation, chronic dehydration, or persistent acne.
          </p>
          <p>
            CALAFINE Lotion was developed differently. Instead of a single-purpose
            formula, it combines <strong>three targeted skincare actions</strong> into
            one gentle, all-skin-type lotion. Whether you've spent too long under the
            Indian sun, battling monthly breakouts, or just want skin that genuinely
            feels healthy — this is the lotion your shelf has been missing.
          </p>
        </section>

        {/* ───── PAIN POINTS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sound Familiar? CALAFINE Has You Covered.</h2>
          <div className={styles.painGrid}>
            {painPoints.map((p) => (
              <div key={p.problem} className={styles.painCard}>
                <span className={styles.painEmoji}>{p.emoji}</span>
                <p className={styles.painProblem}>{p.problem}</p>
                <p className={styles.painSolution}>{p.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── 3 BENEFITS DEEP DIVE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What CALAFINE Actually Does</h2>

          <div className={styles.benefitBlock}>
            <div className={styles.benefitNumber}>01</div>
            <div>
              <h3>Instant Sunburn Relief</h3>
              <p>
                Indian summers are brutal. Whether it's commuting, outdoor work, or a
                weekend at the beach — UV exposure causes inflammation that regular
                moisturisers can't address. CALAFINE's formula is specifically designed
                to calm irritated, sun-damaged skin quickly — reducing the burning
                sensation, the redness, and the peeling that comes after sun overexposure.
              </p>
              <p>
                This makes it one of the most practical <strong>sunburn relief lotions</strong> you
                can keep at home or in your bag. No need for complicated routines — apply
                it, and feel the difference.
              </p>
            </div>
          </div>

          <div className={styles.benefitBlock}>
            <div className={styles.benefitNumber}>02</div>
            <div>
              <h3>Deep Skin Nourishment (Not Just Surface Hydration)</h3>
              <p>
                Most lotions hydrate the top layer of skin and nothing more. CALAFINE's
                nourishing ingredients are formulated to penetrate deeper, reaching the
                layers where long-term dryness originates. The result? Skin that doesn't
                just feel soft after application, but stays soft and supple throughout
                the day — even in dry, air-conditioned environments.
              </p>
              <p>
                If you've been cycling through lotions and never finding one that truly
                fixes dryness, CALAFINE's <strong>deep moisturising action</strong> is what
                you've been looking for.
              </p>
            </div>
          </div>

          <div className={styles.benefitBlock}>
            <div className={styles.benefitNumber}>03</div>
            <div>
              <h3>Effective Acne Control</h3>
              <p>
                Acne and skincare products don't usually mix well — most lotions are too
                heavy or comedogenic for acne-prone skin. CALAFINE is the exception.
                Its gentle formula actively helps control breakouts and reduce the
                appearance of blemishes and dark spots, without clogging pores or causing
                new ones.
              </p>
              <p>
                This makes it an ideal daily use option for anyone managing
                <strong> acne-prone skin</strong> who still wants proper hydration without
                triggering more breakouts.
              </p>
            </div>
          </div>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            Ready to give your skin what it actually needs?
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Get CALAFINE Lotion on Amazon — Pack of 2 →
          </a>
        </div>

        {/* ───── WHO IT'S FOR ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Should Use CALAFINE Lotion?</h2>
          <ul className={styles.audienceList}>
            <li>Anyone who spends time outdoors and deals with sun-damaged or reddened skin</li>
            <li>People with chronically dry or dehydrated skin who need lasting moisture</li>
            <li>Men and women dealing with regular acne or post-acne blemishes</li>
            <li>Those with sensitive skin looking for a gentle, all-purpose lotion</li>
            <li>Anyone who wants to simplify their skincare routine without sacrificing results</li>
          </ul>
          <p>
            Because CALAFINE is designed for <strong>all skin types</strong> — oily, dry,
            combination, sensitive — there's no guesswork involved. It's a practical,
            multi-purpose lotion that earns its place in any skincare routine.
          </p>
        </section>

        {/* ───── TIPS ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>How to Get the Best Results from CALAFINE</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>1</span>
              <p><strong>Apply on damp skin</strong> after a shower to lock in moisture more effectively.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>2</span>
              <p><strong>For sunburn</strong>, apply generously to affected areas and reapply as needed throughout the day.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>3</span>
              <p><strong>For acne-prone skin</strong>, use a light layer and allow it to absorb fully before applying anything else.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>4</span>
              <p><strong>Consistency is key</strong> — daily use delivers the best long-term nourishment and clearer skin results.</p>
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
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

        {/* ───── BOTTOM CTA ───── */}
        <section className={styles.bottomCta}>
          <h2>Stop Settling for Lotions That Don't Actually Work</h2>
          <p>
            Your skin deals with the sun, pollution, stress, and sweat every single day.
            It deserves a lotion that takes all of that seriously. CALAFINE Lotion — pack
            of 2, gentle formula, suitable for all skin types — is available right now on Amazon.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Shop CALAFINE Lotion on Amazon →
          </a>
          <p className={styles.bottomNote}>Pack of 2 · Free delivery available · Easy returns</p>
        </section>

      </div>
    </article>
  );
}