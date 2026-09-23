import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './whiteheads-blackheads-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';
import SchemaOrg from '@/components/SchemaOrg';
import { productHref } from '@/data/products';

const PAGE_URL =
  'https://www.lucidllp.com/blog/best-face-wash-whiteheads-blackheads-india';
const PAGE_TITLE = 'Best Face Wash for Whiteheads & Blackheads in India';
const PAGE_DESCRIPTION =
  'Whiteheads and blackheads are clogged pores, not dirt. Which face wash ingredients help clear them, how to use salicylic and glycolic acid, and what to avoid.';

const KOJICID_FACEWASH_HREF = productHref('kojicid-facewash');
const FRESHOLITE_HREF = productHref('fresholite-vitamin-c-face-wash');

const KOJICID_FACEWASH_AMAZON = 'https://amzn.in/d/0bmAFPGc';
const FRESHOLITE_AMAZON = 'https://amzn.in/d/05QOka5b';

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | Lucid Pharmatech LLP" template,
  // so the brand is not appended twice.
  title: { absolute: `${PAGE_TITLE} | Lucid Pharmatech` },
  description: PAGE_DESCRIPTION,
  keywords: [
    'best face wash for whiteheads',
    'face wash for whiteheads',
    'face wash for blackheads',
    'best face wash for blackheads in India',
    'salicylic acid face wash for blackheads',
    'how to remove whiteheads',
    'how to remove blackheads from nose',
    'whiteheads vs blackheads',
    'face wash for clogged pores',
    'best product for teenage blackheads',
    'face wash for breakouts',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    siteName: 'Lucid Pharmatech LLP',
    locale: 'en_IN',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: '/images/kojicid-brightening-facewash.png',
        width: 1200,
        height: 630,
        alt: 'Kojicid Brightening Facewash with salicylic acid and glycolic acid, 70 ml tube',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/kojicid-brightening-facewash.png'],
  },
};

// BlogPosting schema with confirmed fields only. No ratings, reviews or credentials.
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Face Wash for Whiteheads & Blackheads in India',
  description: PAGE_DESCRIPTION,
  image: 'https://www.lucidllp.com/images/kojicid-brightening-facewash.png',
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  author: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  publisher: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  about: [
    { '@type': 'Product', name: 'Kojicid Brightening Facewash' },
    { '@type': 'Product', name: 'Fresh O Lite Vitamin C Face Wash' },
  ],
};

const comedoneTypes = [
  {
    type: 'Whitehead (closed comedone)',
    look: 'Small, skin-coloured or white bump; the pore opening is closed',
    why: 'Oil and dead skin trapped under a thin layer of skin',
  },
  {
    type: 'Blackhead (open comedone)',
    look: 'Dark dot in an open pore, often on the nose and chin',
    why: 'The plug is open to air; its surface darkens as it is exposed',
  },
  {
    type: 'Sebaceous filament',
    look: 'Grey or light-brown dots evenly spread across the nose',
    why: 'Normal oil channels in the pore — not a blackhead, and they refill',
  },
  {
    type: 'Milia',
    look: 'Tiny, hard, pearly-white bumps, often around the eyes',
    why: 'Trapped keratin under the skin — face washes do not remove them',
  },
];

const causes = [
  {
    emoji: '💧',
    title: 'Excess oil',
    body: 'Oily skin produces more sebum, which mixes with dead cells and plugs the pore. Heat and humidity make this worse.',
  },
  {
    emoji: '🧱',
    title: 'Dead skin build-up',
    body: 'When dead cells do not shed evenly, they stick together inside the pore opening and form a plug.',
  },
  {
    emoji: '🧬',
    title: 'Hormones',
    body: 'Hormonal changes during the teenage years, around periods and with some conditions increase oil production.',
  },
  {
    emoji: '🧴',
    title: 'Heavy products',
    body: 'Thick creams, oily hair products that reach the forehead, and makeup that is not removed properly can add to clogging.',
  },
  {
    emoji: '🫧',
    title: 'Harsh over-washing',
    body: 'Stripping the skin with strong soaps can leave it irritated and uneven, which does not help pores stay clear.',
  },
  {
    emoji: '✋',
    title: 'Squeezing and picking',
    body: 'Pressing on comedones can push debris deeper, cause inflammation, and leave dark marks behind.',
  },
];

const ingredients = [
  {
    name: 'Salicylic Acid (BHA)',
    body: 'The most important ingredient for whiteheads and blackheads. Salicylic acid is oil-soluble, so it can work inside the oily lining of the pore and help loosen the plug of oil and dead cells. It is the reason BHA cleansers are the usual first step for comedones.',
  },
  {
    name: 'Glycolic Acid (AHA)',
    body: 'Glycolic acid works on the surface, loosening the bonds between dead skin cells so they shed more evenly. Fewer dead cells on the surface means fewer available to block pore openings. It also makes skin more sun-sensitive, so daily sunscreen matters.',
  },
  {
    name: 'Gentle, non-stripping cleansing base',
    body: 'Clearing pores is not about scrubbing harder. A cleanser that removes oil without leaving skin tight helps you keep using it every day, which is what actually matters for comedones.',
  },
  {
    name: 'What does not help much',
    body: 'Scrubs with rough particles, very hot water and repeated washing through the day. These can irritate skin without reaching inside the pore.',
  },
];

const mistakes = [
  'Squeezing whiteheads or blackheads with fingers or nails',
  'Scrubbing hard with gritty scrubs several times a week',
  'Washing the face four or five times a day',
  'Skipping moisturiser because the skin is oily',
  'Switching products every week before any can work',
  'Relying only on pore strips — they remove the top of the plug, which comes back',
  'Sleeping without removing makeup or sunscreen',
];

const faqs = [
  {
    q: 'Which face wash is best for whiteheads?',
    a: 'Look for a face wash with salicylic acid (BHA), because it is oil-soluble and can work inside the pore. A cleanser that also contains glycolic acid (AHA) helps loosen dead skin on the surface. Kojicid Brightening Facewash contains both.',
  },
  {
    q: 'What is the difference between whiteheads and blackheads?',
    a: 'Both are clogged pores. A whitehead is a closed comedone, where the plug sits under a thin layer of skin. A blackhead is an open comedone, where the plug is exposed to air and its surface darkens. Blackheads are not caused by dirt.',
  },
  {
    q: 'Can a face wash remove blackheads completely?',
    a: 'A salicylic acid face wash can help loosen and reduce blackheads over several weeks of regular use, but it will not remove them overnight. Ongoing use helps prevent new ones from forming. Stubborn cases may need a dermatologist.',
  },
  {
    q: 'How long does it take to clear whiteheads?',
    a: 'Comedones form slowly and clear slowly. With consistent daily use of a suitable cleanser, many people see improvement over several weeks, commonly six to eight weeks or more.',
  },
  {
    q: 'Why do the dots on my nose come back after a pore strip?',
    a: 'Many of the grey dots on the nose are sebaceous filaments — normal oil channels in the pore that refill within days. They can be made less visible with regular BHA cleansing, but they are a normal part of skin.',
  },
  {
    q: 'Is salicylic acid face wash safe for daily use?',
    a: 'Salicylic acid cleansers are commonly used daily. If your skin is sensitive or dry, start once a day and add a moisturiser. Stop use and consult a doctor if you get burning, peeling or a rash.',
  },
  {
    q: 'What is the best face wash for teenage blackheads?',
    a: 'Teenagers with oily skin and blackheads usually do well with a salicylic acid cleanser used once or twice a day, a light moisturiser and sunscreen. For teenage acne more broadly, see our guide to face wash for teenagers.',
  },
  {
    q: 'Should I squeeze whiteheads?',
    a: 'No. Squeezing can push debris deeper, cause inflammation and leave dark marks. If a comedone needs removal, a dermatologist can do it safely.',
  },
  {
    q: 'I have tiny hard white bumps around my eyes. Are those whiteheads?',
    a: 'They may be milia, which are small cysts of trapped keratin, not clogged pores. Face washes do not remove milia. A dermatologist can confirm and treat them if needed.',
  },
];

export default function WhiteheadsBlackheadsBlogPage() {
  return (
    <article className={styles.blog}>
      <SchemaOrg schema={articleSchema} />

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Face Wash · Clogged Pores</span>
            <h1 className={styles.heroTitle}>
              Best Face Wash for{' '}<br />
              <em>Whiteheads &amp; Blackheads</em>
            </h1>
            <p className={styles.heroSub}>
              Whiteheads and blackheads are not dirt, and scrubbing harder will not fix
              them. Here is what they actually are, which face wash ingredients help clear
              them, a simple routine that works in Indian heat and humidity, and the
              mistakes that keep them coming back.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href={KOJICID_FACEWASH_AMAZON}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy Kojicid Facewash →
              </a>
            </div>
          </div>

          {/* ── PRODUCT IMAGE CONTAINER ── */}
          <div className={styles.heroImageWrap}>
            <div className={styles.imageCard}>
              <Image
                src="/images/kojicid-brightening-facewash.png"
                alt="Kojicid Brightening Facewash with salicylic acid, glycolic acid, kojic acid and L-glutathione, 70 ml tube"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className={styles.imageBadge}>Salicylic + Glycolic Acid</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ───── QUICK ANSWER ───── */}
        <div className={styles.quickAnswer}>
          <span className={styles.quickAnswerLabel}>Quick answer</span>
          <p>
            The best face wash for whiteheads and blackheads contains{' '}
            <strong>salicylic acid (BHA)</strong>, which is oil-soluble and works inside the
            pore to loosen the plug of oil and dead skin. A cleanser that also contains{' '}
            <strong>glycolic acid (AHA)</strong> helps dead skin shed evenly from the surface.
            Use it once or twice a day, follow with a light moisturiser and daily sunscreen,
            do not squeeze, and give it several weeks — comedones clear slowly.
          </p>
        </div>

        {/* ───── WHAT THEY ARE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Are Whiteheads and Blackheads?</h2>
          <p>
            Both are <strong>comedones</strong> — pores blocked by a plug of oil (sebum) and
            dead skin cells. The only difference is whether the top of the pore is closed or
            open.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">What you see</th>
                  <th scope="col">What it looks like</th>
                  <th scope="col">What is going on</th>
                </tr>
              </thead>
              <tbody>
                {comedoneTypes.map((row) => (
                  <tr key={row.type}>
                    <td>{row.type}</td>
                    <td>{row.look}</td>
                    <td>{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <strong>Blackheads are not dirt.</strong> The dark colour comes from the surface of
            the plug being exposed to air — which is why washing more often does not make
            them go away.
          </p>
          <p>
            It also helps to know what is <em>not</em> a comedone. The even grey dots across
            many noses are usually <strong>sebaceous filaments</strong>, a normal part of the
            pore that refills within days. Tiny hard white bumps around the eyes are often{' '}
            <strong>milia</strong>, which a face wash cannot remove.
          </p>
        </section>

        {/* ───── CAUSES ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Causes Whiteheads and Blackheads?</h2>
          <div className={styles.painGrid}>
            {causes.map((c) => (
              <div key={c.title} className={styles.painCard}>
                <span className={styles.painEmoji} aria-hidden="true">{c.emoji}</span>
                <h3 className={styles.painProblem}>{c.title}</h3>
                <p className={styles.painSolution}>{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── INGREDIENTS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What to Look for in a Face Wash for Whiteheads and Blackheads
          </h2>
          {ingredients.map((ing, i) => (
            <div key={ing.name} className={styles.benefitBlock}>
              <div className={styles.benefitNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{ing.name}</h3>
                <p>{ing.body}</p>
              </div>
            </div>
          ))}
          <p>
            Many readers ask whether the percentage of salicylic acid on the label matters.
            Strength does affect how active a product is, but a cleanser is rinsed off within
            a minute, so the everyday habit of using it consistently matters as much as the
            number. If your skin is sensitive, a gentler product used daily will do more good
            than a strong one you have to stop using.
          </p>
        </section>

        {/* ───── PRODUCTS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Picks From the Lucid Range</h2>

          <h3 className={styles.subTitle}>
            Kojicid Brightening Facewash — for whiteheads, blackheads and marks
          </h3>
          <p>
            <Link href={KOJICID_FACEWASH_HREF} className={styles.inlineLink}>
              Kojicid Brightening Facewash
            </Link>{' '}
            is an actives-led cleanser that combines the two ingredients most useful for
            comedones with two for tone:
          </p>
          <ul className={styles.audienceList}>
            <li><strong>Salicylic acid (BHA)</strong> — helps clear pores and manage oil</li>
            <li><strong>Glycolic acid</strong> — gently lifts dead surface cells</li>
            <li>
              <strong>Kojic acid dipalmitate and L-glutathione</strong> — for the look of dark
              spots and uneven tone, useful if old breakouts have left marks
            </li>
          </ul>
          <p>
            It comes as 70 ml tubes, pack of 2, and is suitable for all skin types. Because it
            contains two acids, start once a day if your skin is sensitive.
          </p>

          <h3 className={styles.subTitle}>
            Fresh O Lite Vitamin C Face Wash — a daily cleanser for oily skin
          </h3>
          <p>
            <Link href={FRESHOLITE_HREF} className={styles.inlineLink}>
              Fresh O Lite Vitamin C Face Wash
            </Link>{' '}
            is a daily cleanser with Vitamin C and natural orange extracts for oily and
            combination skin. It cleanses without over-drying, which makes it a practical
            second cleanser: some people use Kojicid at night and Fresh O Lite in the morning,
            so they get an acid cleanse once a day without overdoing it.
          </p>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            Kojicid Facewash — 70 ml, pack of 2 · Fresh O Lite — 100 ml, pack of 2
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={KOJICID_FACEWASH_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get Kojicid Facewash on Amazon →
            </a>
            <a
              href={FRESHOLITE_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Get Fresh O Lite on Amazon →
            </a>
          </div>
        </div>

        {/* ───── ROUTINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>A Simple Routine for Whiteheads and Blackheads</h2>
          <div className={styles.routineGrid}>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Morning</span>
              <ol>
                <li>Cleanse with Fresh O Lite, or Kojicid if your skin tolerates twice-daily acids</li>
                <li>Light, non-greasy moisturiser</li>
                <li>Broad-spectrum sunscreen</li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Night</span>
              <ol>
                <li>Remove sunscreen or makeup properly</li>
                <li>Cleanse with Kojicid Facewash — massage 30–60 seconds, focusing on nose and chin</li>
                <li>Rinse with lukewarm water, pat dry, moisturise</li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Weekly</span>
              <ol>
                <li>Change pillowcases often</li>
                <li>Keep hair oil off the forehead and hairline</li>
                <li>No gritty scrubs — the acids already exfoliate</li>
              </ol>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            Oily skin still needs moisture — skipping it can leave skin feeling tight and
            irritated. For a light option, see our guide to the{' '}
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.inlineLink}
            >
              best moisturiser for combination skin
            </Link>
            , and our{' '}
            <Link
              href="/blog/best-sunscreen-acne-prone-skin-india"
              className={styles.inlineLink}
            >
              guide to sunscreen for acne-prone skin
            </Link>
            .
          </p>
        </section>

        {/* ───── HOW TO WASH ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>How to Wash Your Face the Right Way</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>1</span>
              <p><strong>Wet your face with lukewarm water</strong> — not hot, which strips oil and irritates.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>2</span>
              <p><strong>Use a small amount</strong> — about a coin-sized amount is enough for the face.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>3</span>
              <p><strong>Massage gently for 30–60 seconds</strong> so the actives have time on the skin, especially on the nose, chin and forehead.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>4</span>
              <p><strong>Rinse well and pat dry</strong> with a clean towel. Do not rub.</p>
            </div>
          </div>
          <p className={styles.introText} style={{ marginTop: 20 }}>
            Always follow the directions on the pack.
          </p>
        </section>

        {/* ───── TIMELINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How Long Before You See Results?</h2>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.timelineWhen}>Weeks 1–2</span>
              <p>Skin may feel less oily and look smoother. Some people notice a few comedones surfacing as pores clear — this usually settles.</p>
            </li>
            <li>
              <span className={styles.timelineWhen}>Weeks 3–6</span>
              <p>Fewer new whiteheads forming; blackheads start to look less prominent.</p>
            </li>
            <li>
              <span className={styles.timelineWhen}>Weeks 6–8 and beyond</span>
              <p>Clearer-looking pores for many people with consistent use. Keep going — stopping lets pores clog again.</p>
            </li>
          </ul>
        </section>

        {/* ───── MISTAKES ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mistakes That Keep Whiteheads Coming Back</h2>
          <ul className={styles.bulletList}>
            {mistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <p>
            Picking also raises the chance of dark marks. If you already have marks left by
            old breakouts, our{' '}
            <Link
              href="/blog/kojic-acid-dark-spots-acne-marks-india-guide"
              className={styles.inlineLink}
            >
              guide to kojic acid for dark spots and acne marks
            </Link>{' '}
            covers how to fade them.
          </p>
        </section>

        {/* ───── WHEN TO SEE DOCTOR ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Safety and When to See a Dermatologist</h2>
          <div className={styles.cautionBox}>
            <h3>Use acid cleansers safely</h3>
            <ul>
              <li>Patch test before first use, especially if your skin is sensitive.</li>
              <li>Avoid the eye area; rinse with water if it gets into the eyes.</li>
              <li>Do not use on broken, sunburnt or freshly waxed skin.</li>
              <li>Mild tingling can be normal; stop if you get burning, peeling or a rash.</li>
              <li>Pregnant or breastfeeding? Ask your doctor before starting new acid products.</li>
            </ul>
          </div>
          <div className={styles.cautionBox}>
            <h3>See a dermatologist if</h3>
            <ul>
              <li>Comedones do not improve after 8–12 weeks of consistent care</li>
              <li>You have painful, deep or inflamed pimples, or acne that is leaving scars</li>
              <li>Breakouts appear suddenly in adulthood or with irregular periods or hair changes</li>
              <li>You want prescription options, such as topical retinoids, or professional extraction</li>
            </ul>
          </div>
          <p>
            For teenagers, our{' '}
            <Link
              href="/blog/best-face-wash-teenagers-acne-india"
              className={styles.inlineLink}
            >
              guide to face wash for teenagers with acne
            </Link>{' '}
            covers hormonal breakouts in more detail, and our{' '}
            <Link
              href="/blog/face-wash-acne-vs-oily-skin-india"
              className={styles.inlineLink}
            >
              acne vs oily skin face wash guide
            </Link>{' '}
            explains why the two need different cleansers.
          </p>
        </section>

        <RelatedProduct slug="kojicid-facewash" />

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
          <h2>Clear Pores, Consistently</h2>
          <p>
            A salicylic acid cleanser, a light moisturiser, daily sunscreen and hands off —
            that is the routine. Explore{' '}
            <Link href={KOJICID_FACEWASH_HREF} className={styles.inlineLink}>
              Kojicid Brightening Facewash
            </Link>{' '}
            and{' '}
            <Link href={FRESHOLITE_HREF} className={styles.inlineLink}>
              Fresh O Lite Vitamin C Face Wash
            </Link>{' '}
            on our product pages.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={KOJICID_FACEWASH_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop Kojicid Facewash →
            </a>
            <a
              href={FRESHOLITE_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Shop Fresh O Lite →
            </a>
          </div>
          <p className={styles.bottomNote}>Kojicid 70 ml · Fresh O Lite 100 ml · Both pack of 2 · Sold on Amazon India</p>
        </section>

        <p className={styles.disclaimer}>
          This article is for general information and is not medical advice. For persistent,
          painful or scarring acne, consult a dermatologist. Always patch test new products
          and follow the directions on the pack.
        </p>

      </div>
    </article>
  );
}