import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './vitamin-c-facewash-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';
import SchemaOrg from '@/components/SchemaOrg';
import { productHref } from '@/data/products';

const PAGE_URL =
  'https://www.lucidllp.com/blog/vitamin-c-face-wash-benefits-uses-how-to-use';
const PAGE_TITLE = 'Vitamin C Face Wash Benefits, Uses & How to Use It';
const PAGE_DESCRIPTION =
  'What a Vitamin C face wash can and cannot do, who it suits, how to use it morning and night, and whether you still need a serum. An honest guide for Indian skin.';

const FRESHOLITE_HREF = productHref('fresholite-vitamin-c-face-wash');
const SUNSCREEN_HREF = productHref('freshotil-sunguard-50');

const FRESHOLITE_AMAZON = 'https://amzn.in/d/05QOka5b';
const SUNSCREEN_AMAZON = 'https://amzn.in/d/04MfDy1G';

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | Lucid Pharmatech LLP" template,
  // so the brand is not appended twice.
  title: { absolute: `${PAGE_TITLE} | Lucid Pharmatech` },
  description: PAGE_DESCRIPTION,
  keywords: [
    'vitamin c face wash benefits',
    'vitamin c face wash uses',
    'vitamin c face wash for oily skin',
    'is vitamin c face wash good for daily use',
    'vitamin c face wash for glowing skin',
    'vitamin c face wash vs serum',
    'how to use vitamin c face wash',
    'vitamin c face wash side effects',
    'orange face wash benefits',
    'Fresh O Lite face wash uses',
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
        url: '/images/fresholite-vitamin-c-face-wash.png',
        width: 1200,
        height: 630,
        alt: 'Fresh O Lite Vitamin C Face Wash with orange extracts, 100 ml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/fresholite-vitamin-c-face-wash.png'],
  },
};

// BlogPosting schema with confirmed fields only. No ratings, reviews or credentials.
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Vitamin C Face Wash Benefits, Uses & How to Use It',
  description: PAGE_DESCRIPTION,
  image: 'https://www.lucidllp.com/images/fresholite-vitamin-c-face-wash.png',
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  datePublished: '2026-10-05',
  dateModified: '2026-10-05',
  author: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  publisher: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  about: [{ '@type': 'Product', name: 'Fresh O Lite Vitamin C Face Wash' }],
};

const benefits = [
  {
    name: 'Clean, fresh-feeling skin without the tight feel',
    body: 'The first job of any face wash is to remove oil, sweat, sunscreen and pollution from the day. A good Vitamin C cleanser does this without leaving skin feeling stripped, which matters if you wash twice a day in Indian heat.',
  },
  {
    name: 'Fresher, less dull-looking skin',
    body: 'Dullness often comes from a layer of oil, grime and dead skin on the surface. Regular cleansing clears that layer, so skin looks brighter and more even. This is the most realistic "glow" a face wash can give.',
  },
  {
    name: 'A light antioxidant boost',
    body: 'Vitamin C is a well-studied antioxidant that helps skin deal with everyday stress from sun and pollution. In a face wash, contact time is short, so think of it as a supporting step — a leave-on product gives Vitamin C more time to work.',
  },
  {
    name: 'A pleasant daily routine you will actually keep',
    body: 'Orange extracts give a fresh, citrus-feel cleanse that many people enjoy using. A cleanser you like using morning and night is a cleanser you use consistently — and consistency is what keeps oily skin in check.',
  },
];

const canCannot = [
  { claim: 'Cleanses oil, sweat and grime', verdict: 'Yes — its main job' },
  { claim: 'Makes skin look fresher and less dull', verdict: 'Yes, with regular use' },
  { claim: 'Adds antioxidant support', verdict: 'Some — contact time is short' },
  { claim: 'Fades old dark spots on its own', verdict: 'Unlikely — needs a leave-on treatment and sunscreen' },
  { claim: 'Replaces sunscreen', verdict: 'No — never' },
  { claim: 'Changes your natural skin colour', verdict: 'No — and it should not' },
];

const whoFor = [
  {
    emoji: '💧',
    title: 'Oily skin',
    body: 'Removes excess oil through the day without the harsh, squeaky-clean feel that can make skin feel tight.',
  },
  {
    emoji: '🌗',
    title: 'Combination skin',
    body: 'Cleans the oily T-zone without over-drying the cheeks. Follow with a light moisturiser where you feel dry.',
  },
  {
    emoji: '🌫️',
    title: 'Dull, tired-looking skin',
    body: 'A fresh daily cleanse clears the surface build-up that makes skin look flat and uneven.',
  },
  {
    emoji: '🏙️',
    title: 'City commuters',
    body: 'Useful in the evening to wash away sweat, pollution and sunscreen after a day outdoors.',
  },
];

const faqs = [
  {
    q: 'What are the benefits of a Vitamin C face wash?',
    a: 'A Vitamin C face wash cleanses oil, sweat and grime, helps skin look fresher and less dull with regular use, and adds some antioxidant support. Because a face wash is rinsed off within a minute, it works best as part of a routine with a moisturiser and sunscreen.',
  },
  {
    q: 'Can I use a Vitamin C face wash every day?',
    a: 'Yes. Fresh O Lite is formulated for daily use, morning and night. If your skin ever feels tight or irritated, cut back to once a day and use a moisturiser.',
  },
  {
    q: 'Is Vitamin C face wash good for oily skin?',
    a: 'Yes. Fresh O Lite is made for oily and combination skin and cleanses without over-drying. Over-stripping oily skin can leave it feeling tight and uncomfortable, so a balanced daily cleanser is a better choice than a harsh one.',
  },
  {
    q: 'Does Vitamin C face wash remove dark spots?',
    a: 'Not on its own. A face wash stays on skin too briefly to fade established spots. It can help skin look fresher and more even overall. For dark spots and acne marks, use a leave-on treatment and daily sunscreen.',
  },
  {
    q: 'Do I still need a Vitamin C serum if I use a Vitamin C face wash?',
    a: 'They do different jobs. A face wash cleans; a serum stays on the skin. If you want the antioxidant benefits of Vitamin C in a stronger way, a leave-on product is the more effective format. Many people use both.',
  },
  {
    q: 'Can I use a Vitamin C face wash at night?',
    a: 'Yes. Night-time is when cleansing matters most, because you are washing off a full day of sunscreen, oil and pollution.',
  },
  {
    q: 'Does a Vitamin C face wash make skin fair?',
    a: 'No. It helps skin look cleaner and fresher. It does not change your natural skin colour.',
  },
  {
    q: 'Can I use Vitamin C face wash with other products?',
    a: 'Yes. After washing, you can use your usual moisturiser, treatment gel and sunscreen. Introduce any new product one at a time so you know how your skin reacts.',
  },
];

export default function VitaminCFaceWashBlogPage() {
  return (
    <article className={styles.blog}>
      <SchemaOrg schema={articleSchema} />

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Face Wash · Vitamin C</span>
            <h1 className={styles.heroTitle}>
              Vitamin C Face Wash:{' '}<br />
              <em>Benefits, Uses &amp; How to Use</em>
            </h1>
            <p className={styles.heroSub}>
              Vitamin C face washes promise glow, brightness and clear skin. Here is what one
              can genuinely do in the minute it spends on your face, who it suits, how to use
              it morning and night, and where a serum or sunscreen has to take over.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href={FRESHOLITE_AMAZON}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy Fresh O Lite on Amazon →
              </a>
            </div>
          </div>

          {/* ── PRODUCT IMAGE CONTAINER ── */}
          <div className={styles.heroImageWrap}>
            <div className={styles.imageCard}>
              <Image
                src="/images/fresholite-vitamin-c-face-wash.png"
                alt="Fresh O Lite Vitamin C Face Wash with natural orange extracts, 100 ml tube"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className={styles.imageBadge}>Vitamin C · Orange Extracts</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ───── QUICK ANSWER ───── */}
        <div className={styles.quickAnswer}>
          <span className={styles.quickAnswerLabel}>Quick answer</span>
          <p>
            A Vitamin C face wash cleanses oil, sweat and grime, helps skin look fresher and
            less dull with regular use, and adds some antioxidant support. It is a good daily
            cleanser for <strong>oily and combination skin</strong>. Because it is rinsed off
            within a minute, it will not fade old dark spots on its own and it never replaces{' '}
            <strong>sunscreen</strong>. Use it morning and night, then moisturise, and finish
            your morning routine with SPF.
          </p>
        </div>

        {/* ───── WHAT IS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Is a Vitamin C Face Wash?</h2>
          <p>
            Vitamin C (ascorbic acid and its related forms) is one of the most popular
            ingredients in skincare. It is an antioxidant, which means it helps skin cope with
            everyday stress from sunlight and pollution, and it is widely used in products
            aimed at dullness and uneven-looking skin.
          </p>
          <p>
            A Vitamin C face wash puts this ingredient into a daily cleanser. The honest point
            most brands skip: a face wash spends around 30–60 seconds on your skin before it is
            rinsed away. So its main value is as a <strong>good, pleasant daily cleanser</strong>,
            with Vitamin C as a supporting extra — not as a concentrated treatment.
          </p>
        </section>

        {/* ───── BENEFITS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vitamin C Face Wash Benefits</h2>
          {benefits.map((b, i) => (
            <div key={b.name} className={styles.benefitBlock}>
              <div className={styles.benefitNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{b.name}</h3>
                <p>{b.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ───── CAN / CANNOT ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What It Can and Cannot Do</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Claim</th>
                  <th scope="col">Realistic answer</th>
                </tr>
              </thead>
              <tbody>
                {canCannot.map((row) => (
                  <tr key={row.claim}>
                    <td>{row.claim}</td>
                    <td>{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            If you are dealing with acne marks or tan, a face wash is the first step, not the
            whole answer. Our{' '}
            <Link
              href="/blog/kojic-acid-dark-spots-acne-marks-india-guide"
              className={styles.inlineLink}
            >
              guide to kojic acid for dark spots and acne marks
            </Link>{' '}
            covers the leave-on side of that routine.
          </p>
        </section>

        {/* ───── FRESH O LITE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fresh O Lite Vitamin C Face Wash</h2>
          <p>
            <Link href={FRESHOLITE_HREF} className={styles.inlineLink}>
              Fresh O Lite
            </Link>{' '}
            combines Vitamin C with natural orange extracts to cleanse thoroughly without
            over-stripping the skin. It is formulated for daily use, morning and night, and
            suits oily and combination skin through Indian heat and humidity.
          </p>
          <ul className={styles.audienceList}>
            <li>Vitamin C with natural orange extracts</li>
            <li>Cleanses without over-drying</li>
            <li>Suitable for daily use, morning and night</li>
            <li>For oily, combination and dull, uneven-looking skin</li>
            <li>100 ml tubes, sold as a pack of 2</li>
          </ul>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            Fresh O Lite Vitamin C Face Wash — 100 ml, pack of 2.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={FRESHOLITE_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get Fresh O Lite on Amazon →
            </a>
          </div>
        </div>

        {/* ───── WHO FOR ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Should Use a Vitamin C Face Wash?</h2>
          <div className={styles.painGrid}>
            {whoFor.map((w) => (
              <div key={w.title} className={styles.painCard}>
                <span className={styles.painEmoji} aria-hidden="true">{w.emoji}</span>
                <h3 className={styles.painProblem}>{w.title}</h3>
                <p className={styles.painSolution}>{w.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            If your skin is <strong>very sensitive</strong>, reactive or easily red, a plain,
            fragrance-light cleanser may suit you better. See our{' '}
            <Link href="/blog/best-face-wash-sensitive-skin-india" className={styles.inlineLink}>
              guide to face wash for sensitive skin
            </Link>
            . If you have <strong>whiteheads and blackheads</strong>, a salicylic acid cleanser
            is the better tool — see our{' '}
            <Link
              href="/blog/best-face-wash-whiteheads-blackheads-india"
              className={styles.inlineLink}
            >
              face wash guide for whiteheads and blackheads
            </Link>
            .
          </p>
        </section>

        {/* ───── HOW TO USE ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>How to Use a Vitamin C Face Wash</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>1</span>
              <p><strong>Wet your face</strong> with lukewarm water — not hot, which dries the skin.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>2</span>
              <p><strong>Use a coin-sized amount</strong> on damp skin. More product does not clean better.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>3</span>
              <p><strong>Massage gently for 30–60 seconds</strong>, covering the forehead, nose, chin and jawline.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>4</span>
              <p><strong>Rinse thoroughly and pat dry</strong> with a clean towel. Do not rub.</p>
            </div>
          </div>
          <p className={styles.introText} style={{ marginTop: 20 }}>
            Use twice daily, morning and night. Always follow the directions on the pack.
          </p>
        </section>

        {/* ───── ROUTINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>A Simple Routine Built Around It</h2>
          <div className={styles.routineGrid}>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Morning</span>
              <ol>
                <li>Fresh O Lite Vitamin C Face Wash</li>
                <li>Light moisturiser if your skin feels dry</li>
                <li><strong>Broad-spectrum sunscreen, every day</strong></li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Night</span>
              <ol>
                <li>Remove sunscreen and makeup</li>
                <li>Fresh O Lite Vitamin C Face Wash</li>
                <li>Any treatment product, then moisturiser</li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Habits</span>
              <ol>
                <li>Do not wash more than twice a day</li>
                <li>Use a clean towel</li>
                <li>Give any new routine 4–6 weeks</li>
              </ol>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            Sunscreen does more for a bright, even look than any cleanser, because sun
            exposure is a leading cause of tan and dullness. A lightweight option is{' '}
            <Link href={SUNSCREEN_HREF} className={styles.inlineLink}>
              Freshotil Sunguard-50
            </Link>
            . For the right layering order, read{' '}
            <Link
              href="/blog/moisturizer-with-spf-vs-sunscreen-oily-skin-india"
              className={styles.inlineLink}
            >
              moisturiser with SPF vs sunscreen for oily skin
            </Link>
            .
          </p>
        </section>

        {/* ───── VS SERUM ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vitamin C Face Wash vs Vitamin C Serum</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">Face wash</th>
                  <th scope="col">Serum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time on skin</td>
                  <td>About a minute, then rinsed off</td>
                  <td>Hours — it stays on</td>
                </tr>
                <tr>
                  <td>Main job</td>
                  <td>Cleansing</td>
                  <td>Treatment</td>
                </tr>
                <tr>
                  <td>Best for</td>
                  <td>A fresh daily cleanse, oily skin</td>
                  <td>Targeted antioxidant care</td>
                </tr>
                <tr>
                  <td>Can be used together?</td>
                  <td colSpan={2}>Yes — cleanse first, then apply the serum</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            You do not need a serum to benefit from a good daily cleanser. But if Vitamin C as
            a treatment is your goal, a leave-on format is the more effective choice.
          </p>
        </section>

        {/* ───── MYTHS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Myth vs Fact</h2>
          <div className={styles.mythGrid}>
            <div className={styles.mythCard}>
              <p className={`${styles.mythRow} ${styles.myth}`}>
                <strong>Myth:</strong> A Vitamin C face wash will make my skin fair.
              </p>
              <p className={`${styles.mythRow} ${styles.fact}`}>
                <strong>Fact:</strong> It helps skin look cleaner and fresher. It does not
                change your natural skin colour.
              </p>
            </div>
            <div className={styles.mythCard}>
              <p className={`${styles.mythRow} ${styles.myth}`}>
                <strong>Myth:</strong> Washing more often gives more glow.
              </p>
              <p className={`${styles.mythRow} ${styles.fact}`}>
                <strong>Fact:</strong> Washing more than twice a day can leave skin tight and
                irritated. Twice is enough for most people.
              </p>
            </div>
            <div className={styles.mythCard}>
              <p className={`${styles.mythRow} ${styles.myth}`}>
                <strong>Myth:</strong> Rubbing lemon or orange juice on the face does the same
                job for free.
              </p>
              <p className={`${styles.mythRow} ${styles.fact}`}>
                <strong>Fact:</strong> Raw citrus juice is acidic and can irritate skin and
                make it more prone to darkening in the sun. Formulated products are made to be
                used on skin; kitchen juice is not.
              </p>
            </div>
          </div>
        </section>

        {/* ───── SAFETY ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Safety Notes</h2>
          <div className={styles.cautionBox}>
            <h3>Before and during use</h3>
            <ul>
              <li>Patch test first on the inner forearm or behind the ear.</li>
              <li>Avoid the eyes; rinse with water if it gets into them.</li>
              <li>Do not use on broken, sunburnt or freshly waxed skin.</li>
              <li>Stop use if you notice burning, redness or a rash, and consult a doctor if it does not settle.</li>
              <li>For persistent acne, sudden breakouts or skin conditions, see a dermatologist.</li>
            </ul>
          </div>
        </section>

        <RelatedProduct slug="fresholite-vitamin-c-face-wash" />

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
          <h2>A Fresh Daily Cleanse, Done Right</h2>
          <p>
            Wash twice a day, moisturise if you need to, and never skip sunscreen. Explore{' '}
            <Link href={FRESHOLITE_HREF} className={styles.inlineLink}>
              Fresh O Lite Vitamin C Face Wash
            </Link>{' '}
            on our product page for full details.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={FRESHOLITE_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop Fresh O Lite →
            </a>
            <a
              href={SUNSCREEN_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Shop Freshotil Sunguard-50 →
            </a>
          </div>
          <p className={styles.bottomNote}>Fresh O Lite 100 ml · Pack of 2 · Sold on Amazon India</p>
        </section>

        <p className={styles.disclaimer}>
          This article is for general information and is not medical advice. For persistent
          skin problems, consult a dermatologist. Always patch test new products and follow
          the directions on the pack.
        </p>

      </div>
    </article>
  );
}