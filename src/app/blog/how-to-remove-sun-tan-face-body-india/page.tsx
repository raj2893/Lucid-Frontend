import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './sun-tan-removal-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';
import SchemaOrg from '@/components/SchemaOrg';
import { productHref } from '@/data/products';

const PAGE_URL =
  'https://www.lucidllp.com/blog/how-to-remove-sun-tan-face-body-india';
const PAGE_TITLE = 'How to Remove Sun Tan From Face, Hands & Body: A Real Guide';
const PAGE_DESCRIPTION =
  'How long sun tan takes to fade, what actually helps remove tan from the face, hands and feet, which home remedies to skip, and how to stop tan coming back.';

const GEL_HREF = productHref('kojicid-gel');
const FACEWASH_HREF = productHref('kojicid-facewash');
const SUNSCREEN_HREF = productHref('freshotil-sunguard-50');

const GEL_AMAZON = 'https://amzn.in/d/0gFB5XaA';
const FACEWASH_AMAZON = 'https://amzn.in/d/0bmAFPGc';
const SUNSCREEN_AMAZON = 'https://amzn.in/d/04MfDy1G';

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | Lucid Pharmatech LLP" template,
  // so the brand is not appended twice.
  title: { absolute: `${PAGE_TITLE} | Lucid Pharmatech` },
  description: PAGE_DESCRIPTION,
  keywords: [
    'how to remove sun tan',
    'how to remove tan from face',
    'tan removal',
    'how to remove tan from hands',
    'how to remove tan from feet',
    'how long does tan take to fade',
    'sun tan removal cream',
    'de tan face wash',
    'how to prevent tanning',
    'tan removal home remedies',
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
        url: '/images/freshotil-sunguard.png',
        width: 1200,
        height: 630,
        alt: 'Freshotil Sunguard-50 SPF 50 sunscreen lotion to help prevent sun tan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/freshotil-sunguard.png'],
  },
};

// BlogPosting schema with confirmed fields only. No ratings, reviews or credentials.
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Remove Sun Tan From Face, Hands & Body: A Real Guide',
  description: PAGE_DESCRIPTION,
  image: 'https://www.lucidllp.com/images/freshotil-sunguard.png',
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  datePublished: '2026-10-06',
  dateModified: '2026-10-06',
  author: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  publisher: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  about: [
    { '@type': 'Product', name: 'Freshotil Sunguard-50 Lotion' },
    { '@type': 'Product', name: 'Kojicid Gel' },
    { '@type': 'Product', name: 'Kojicid Brightening Facewash' },
  ],
};

const steps = [
  {
    name: 'Stop the tan from getting deeper',
    body: 'Nothing else works while you keep tanning. Broad-spectrum sunscreen every morning, reapplied outdoors, plus shade, a cap or a dupatta and full sleeves when you are out in strong sun.',
  },
  {
    name: 'Cleanse and gently exfoliate',
    body: 'Tanned skin is pigment sitting in the upper layers of your skin. Gentle, regular exfoliation — for example with a glycolic acid cleanser — helps those surface cells shed more evenly. Gentle is the key word: scrubbing hard irritates skin, and irritation can make darkening worse.',
  },
  {
    name: 'Use a leave-on ingredient that targets pigment',
    body: 'Ingredients such as kojic acid, arbutin and niacinamide are widely used to help reduce the appearance of tan and uneven tone. A leave-on gel gives them hours on the skin, rather than the minute a face wash gets.',
  },
  {
    name: 'Be patient and consistent',
    body: 'Skin renews its surface roughly every four to six weeks. Tan fades with that renewal, so expect gradual change over weeks, not days.',
  },
];

const timeline = [
  {
    when: 'Light tan (a few days of sun)',
    what: 'Often fades noticeably within a few weeks as skin renews, especially with daily sunscreen.',
  },
  {
    when: 'Moderate tan (a holiday or a summer outdoors)',
    what: 'Usually takes several weeks to a couple of months to fade with sunscreen and a consistent routine.',
  },
  {
    when: 'Deep, long-standing tan (daily sun over years)',
    what: 'Fades slowly and may not fully go if sun exposure continues. Hands, feet and the back of the neck often take longest.',
  },
];

const bodyAreas = [
  {
    emoji: '🙂',
    title: 'Face',
    body: 'Cleanse with a gentle exfoliating face wash, apply a leave-on treatment to the tanned areas, and use sunscreen every morning — including the ears and hairline.',
  },
  {
    emoji: '🤚',
    title: 'Hands and arms',
    body: 'The backs of the hands get sun every time you drive, ride or commute. Apply sunscreen to them every morning and reapply after washing your hands. Moisturise at night.',
  },
  {
    emoji: '🦶',
    title: 'Feet (sandal tan)',
    body: 'Sandal lines are common in India. Apply sunscreen to the tops of your feet when wearing open footwear, and moisturise at night. Feet usually fade slowest.',
  },
  {
    emoji: '🧣',
    title: 'Neck',
    body: 'Often forgotten. Extend face sunscreen down to the neck and the back of the neck, especially if you wear your hair up.',
  },
];

const remedies = [
  {
    remedy: 'Lemon juice',
    verdict: 'Skip it',
    why: 'Acidic and can irritate skin. Citrus on skin followed by sun can cause a reaction that leaves dark patches.',
  },
  {
    remedy: 'Baking soda or toothpaste',
    verdict: 'Skip it',
    why: 'Too harsh for the skin barrier; causes irritation and dryness.',
  },
  {
    remedy: 'Rough sugar or salt scrubs on the face',
    verdict: 'Skip it',
    why: 'Can cause tiny tears and irritation, which can lead to more darkening.',
  },
  {
    remedy: 'Besan and curd pack',
    verdict: 'Mild, okay occasionally',
    why: 'A gentle cleansing and softening pack. It may make skin look fresher but does not target pigment strongly. Patch test first.',
  },
  {
    remedy: 'Aloe vera',
    verdict: 'Soothing, okay',
    why: 'Comforting on sun-exposed skin. Good for soothing; not a tan remover on its own.',
  },
];

const faqs = [
  {
    q: 'How can I remove sun tan from my face quickly?',
    a: 'There is no safe overnight fix. The fastest realistic approach is daily sunscreen to stop further tanning, a gentle exfoliating face wash, and a leave-on treatment with ingredients like kojic acid, used consistently for several weeks. Harsh scrubs and lemon juice can irritate skin and make darkening worse.',
  },
  {
    q: 'Does sun tan go away on its own?',
    a: 'Yes, tan usually fades on its own as your skin renews itself, provided you stop getting more sun exposure. A light tan may fade in a few weeks; a deep tan can take months.',
  },
  {
    q: 'How long does it take for tan to fade?',
    a: 'It depends on how deep the tan is. Light tan often fades within a few weeks; moderate tan takes several weeks to a couple of months; long-standing tan on hands and feet can take longer. Daily sunscreen is essential throughout.',
  },
  {
    q: 'Which face wash is good for tan removal?',
    a: 'A face wash with gentle exfoliating acids can help surface cells shed more evenly. Kojicid Brightening Facewash contains glycolic acid and salicylic acid, along with kojic acid dipalmitate and L-glutathione. Because a face wash is rinsed off quickly, pair it with a leave-on product and sunscreen.',
  },
  {
    q: 'How do I remove tan from my hands and feet?',
    a: 'Apply sunscreen to the backs of your hands and tops of your feet every day, reapply after washing, and moisturise at night. Hands and feet usually take longer to fade than the face because they get sun almost every day.',
  },
  {
    q: 'Can sunscreen remove tan?',
    a: 'Sunscreen does not remove existing tan, but it prevents new tan. That allows your existing tan to fade as skin renews. Without sunscreen, other treatments struggle to keep up.',
  },
  {
    q: 'Is tan removal the same as skin whitening?',
    a: 'No. Removing tan means helping skin return to its own natural shade by reducing excess pigment from sun exposure. It does not make you lighter than your natural skin colour, and no safe product should claim to.',
  },
  {
    q: 'Do I need sunscreen on cloudy days to prevent tan?',
    a: 'Yes. A large share of UV passes through clouds, and UVA — which contributes to tanning — is present all year and also passes through window glass.',
  },
];

export default function SunTanRemovalBlogPage() {
  return (
    <article className={styles.blog}>
      <SchemaOrg schema={articleSchema} />

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Sun Care · Tan Removal</span>
            <h1 className={styles.heroTitle}>
              How to Remove Sun Tan{' '}<br />
              <em>From Face, Hands &amp; Body</em>
            </h1>
            <p className={styles.heroSub}>
              Two-tone hands from the scooter, sandal lines on your feet, a face that is a
              shade darker than your neck? Here is what sun tan really is, how long it takes
              to fade, what actually helps, which popular home remedies to skip, and how to
              stop it coming back.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href={SUNSCREEN_AMAZON}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy Freshotil Sunguard-50 →
              </a>
              <a
                href={GEL_AMAZON}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCtaGhost}
              >
                Buy Kojicid Gel →
              </a>
            </div>
          </div>

          {/* ── PRODUCT IMAGE CONTAINER ── */}
          <div className={styles.heroImageWrap}>
            <div className={styles.imageCard}>
              <Image
                src="/images/freshotil-sunguard.png"
                alt="Freshotil Sunguard-50 SPF 50 sun screen lotion with UVA and UVB protection, 100 mL"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className={styles.imageBadge}>SPF 50 · UVA &amp; UVB</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ───── QUICK ANSWER ───── */}
        <div className={styles.quickAnswer}>
          <span className={styles.quickAnswerLabel}>Quick answer</span>
          <p>
            Sun tan fades on its own as your skin renews, but only if you{' '}
            <strong>stop new tanning with daily broad-spectrum sunscreen</strong>. To help it
            fade faster, use a <strong>gently exfoliating cleanser</strong> and a{' '}
            <strong>leave-on treatment</strong> with ingredients such as kojic acid, arbutin
            or niacinamide. Expect gradual results over several weeks. Avoid lemon juice,
            baking soda and harsh scrubs — irritation can make darkening worse.
          </p>
        </div>

        {/* ───── WHAT IS TAN ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Is Sun Tan, Really?</h2>
          <p>
            A tan is your skin&rsquo;s defence response to ultraviolet (UV) light. When UV
            hits your skin, pigment cells called melanocytes produce more melanin and pass
            it to surrounding skin cells, which darkens the skin and gives it some extra
            protection.
          </p>
          <p>
            Both types of UV contribute. <strong>UVB</strong> causes sunburn and delayed
            tanning; <strong>UVA</strong> causes quicker darkening and long-term ageing, is
            present all year, and passes through clouds and window glass. That is why a
            sunscreen labelled <strong>broad spectrum (UVA + UVB)</strong> matters — SPF alone
            describes UVB protection.
          </p>
          <p>
            Indian skin tans readily because its melanocytes respond strongly to UV. That is
            natural and protective — but it also means tan builds quickly with daily commutes,
            two-wheeler rides and outdoor work.
          </p>
        </section>

        {/* ───── HOW TO REMOVE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Remove Sun Tan: 4 Steps That Work</h2>
          {steps.map((s, i) => (
            <div key={s.name} className={styles.benefitBlock}>
              <div className={styles.benefitNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{s.name}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ───── TIMELINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How Long Does Tan Take to Fade?</h2>
          <ul className={styles.timeline}>
            {timeline.map((t) => (
              <li key={t.when}>
                <span className={styles.timelineWhen}>{t.when}</span>
                <p>{t.what}</p>
              </li>
            ))}
          </ul>
          <p>
            These are general ranges; everyone&rsquo;s skin is different. The one constant:
            tan fades much more slowly if you keep getting new sun exposure.
          </p>
        </section>

        {/* ───── ROUTINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>A Simple Tan Removal Routine</h2>
          <div className={styles.routineGrid}>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Morning</span>
              <ol>
                <li>Kojicid Brightening Facewash</li>
                <li>A small amount of Kojicid Gel on tanned areas</li>
                <li>Moisturiser if skin feels dry</li>
                <li><strong>Freshotil Sunguard-50 on face, neck, hands and feet</strong></li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Outdoors</span>
              <ol>
                <li>Reapply sunscreen every 2–3 hours</li>
                <li>Reapply after sweating or washing</li>
                <li>Cap, sunglasses, full sleeves, dupatta or gloves on a two-wheeler</li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Night</span>
              <ol>
                <li>Cleanse to remove sunscreen and sweat</li>
                <li>Kojicid Gel on tanned areas of the face</li>
                <li>Moisturiser on face, hands and feet</li>
              </ol>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            <strong>Sensitive skin?</strong> Start the facewash and gel once a day for the
            first one to two weeks, then increase as your skin tolerates it. Always follow the
            directions on the pack.
          </p>
        </section>

        {/* ───── PRODUCTS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What to Use From the Lucid Range</h2>

          <h3 className={styles.subTitle}>To prevent new tan: Freshotil Sunguard-50</h3>
          <p>
            <Link href={SUNSCREEN_HREF} className={styles.inlineLink}>
              Freshotil Sunguard-50
            </Link>{' '}
            is an SPF 50 sunscreen lotion with UVA and UVB protection. Its lightweight,
            non-greasy lotion spreads comfortably over exposed skin, which makes it practical
            for the face, neck, hands and feet on a daily commute. 100 mL.
          </p>

          <h3 className={styles.subTitle}>To help fade existing tan: Kojicid Gel</h3>
          <p>
            <Link href={GEL_HREF} className={styles.inlineLink}>
              Kojicid Gel
            </Link>{' '}
            is a lightweight gel formulated to help reduce the appearance of sun tan, dark
            spots, acne marks and uneven tone. It contains kojic acid dipalmitate, arbutin,
            niacinamide, Vitamin E acetate, pine bark extract and allantoin, in a non-greasy,
            fast-absorbing texture for day and night use. 15 g, pack of 2.
          </p>

          <h3 className={styles.subTitle}>To cleanse and exfoliate: Kojicid Brightening Facewash</h3>
          <p>
            <Link href={FACEWASH_HREF} className={styles.inlineLink}>
              Kojicid Brightening Facewash
            </Link>{' '}
            combines glycolic acid to gently lift dead surface cells and salicylic acid to
            help clear pores, with kojic acid dipalmitate and L-glutathione. 70 ml, pack of 2.
            Glycolic acid makes skin more sun-sensitive, so sunscreen is not optional while
            you use it.
          </p>
          <p>
            Want the science behind kojic acid in more depth? Read our{' '}
            <Link
              href="/blog/kojic-acid-dark-spots-acne-marks-india-guide"
              className={styles.inlineLink}
            >
              complete guide to kojic acid for dark spots and acne marks
            </Link>
            .
          </p>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            Prevent with SPF 50. Fade with Kojicid. Cleanse with Kojicid Facewash.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={SUNSCREEN_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get Freshotil Sunguard-50 →
            </a>
            <a
              href={GEL_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Get Kojicid Gel →
            </a>
            <a
              href={FACEWASH_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Get Kojicid Facewash →
            </a>
          </div>
        </div>

        {/* ───── BODY AREAS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Removing Tan From Face, Hands, Feet and Neck</h2>
          <div className={styles.painGrid}>
            {bodyAreas.map((a) => (
              <div key={a.title} className={styles.painCard}>
                <span className={styles.painEmoji} aria-hidden="true">{a.emoji}</span>
                <h3 className={styles.painProblem}>{a.title}</h3>
                <p className={styles.painSolution}>{a.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            Kojicid Gel comes in 15 g tubes and is best kept for the face. For larger areas
            such as arms and feet, consistent sunscreen and moisturising do most of the work.
          </p>
        </section>

        {/* ───── HOME REMEDIES ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tan Removal Home Remedies: What to Skip</h2>
          <p>
            Kitchen remedies are popular, but some can do more harm than good. Here is an
            honest look:
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Remedy</th>
                  <th scope="col">Verdict</th>
                  <th scope="col">Why</th>
                </tr>
              </thead>
              <tbody>
                {remedies.map((r) => (
                  <tr key={r.remedy}>
                    <td>{r.remedy}</td>
                    <td>{r.verdict}</td>
                    <td>{r.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Whatever you try, patch test first and stop if your skin stings, reddens or
            itches. Irritated skin tends to darken, not lighten.
          </p>
        </section>

        {/* ───── PREVENTION ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>How to Prevent Tanning in the First Place</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>1</span>
              <p><strong>Use enough sunscreen</strong> — about two finger-lengths for the face and neck.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>2</span>
              <p><strong>Apply 15–20 minutes before going out</strong> and reapply every 2–3 hours outdoors.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>3</span>
              <p><strong>Cover up on two-wheelers</strong> — gloves, full sleeves and a scarf protect hands and arms.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>4</span>
              <p><strong>Avoid peak sun</strong> roughly between late morning and mid-afternoon when you can.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>5</span>
              <p><strong>Do not skip cloudy and winter days</strong> — UVA is present all year.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>6</span>
              <p>
                <strong>Protect indoors near windows</strong> — see{' '}
                <Link href="/blog/why-sunscreen-important-indoors-india" className={styles.inlineLink}>
                  why sunscreen matters indoors
                </Link>
                .
              </p>
            </div>
          </div>
          <p className={styles.introText} style={{ marginTop: 20 }}>
            Oily skin and hate sticky sunscreen? Our{' '}
            <Link href="/blog/best-sunscreen-oily-skin-india-spf-guide" className={styles.inlineLink}>
              SPF guide for oily skin
            </Link>{' '}
            covers textures that are easier to wear daily.
          </p>
        </section>

        {/* ───── MYTHS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Myth vs Fact</h2>
          <div className={styles.mythGrid}>
            <div className={styles.mythCard}>
              <p className={`${styles.mythRow} ${styles.myth}`}>
                <strong>Myth:</strong> Dark skin does not need sunscreen.
              </p>
              <p className={`${styles.mythRow} ${styles.fact}`}>
                <strong>Fact:</strong> Darker skin has more natural protection against
                sunburn, but it still tans, develops uneven tone and suffers long-term sun
                damage.
              </p>
            </div>
            <div className={styles.mythCard}>
              <p className={`${styles.mythRow} ${styles.myth}`}>
                <strong>Myth:</strong> Tan removal means becoming fairer.
              </p>
              <p className={`${styles.mythRow} ${styles.fact}`}>
                <strong>Fact:</strong> It means returning to your own natural shade. Nothing
                safe makes you lighter than that, and that is not the goal.
              </p>
            </div>
            <div className={styles.mythCard}>
              <p className={`${styles.mythRow} ${styles.myth}`}>
                <strong>Myth:</strong> Scrubbing harder removes tan faster.
              </p>
              <p className={`${styles.mythRow} ${styles.fact}`}>
                <strong>Fact:</strong> Harsh scrubbing irritates skin, and irritation can
                trigger more pigment. Gentle and consistent works better.
              </p>
            </div>
          </div>
        </section>

        {/* ───── SAFETY ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Safety and When to See a Dermatologist</h2>
          <div className={styles.cautionBox}>
            <h3>Use products safely</h3>
            <ul>
              <li>Patch test new products on the inner forearm for 24–48 hours.</li>
              <li>Do not apply actives on sunburnt, broken or freshly waxed skin.</li>
              <li>Avoid the eyes and lips.</li>
              <li>Stop use if you get burning, swelling, a rash or persistent redness.</li>
              <li>Pregnant or breastfeeding? Check with your doctor before using new actives.</li>
            </ul>
          </div>
          <div className={styles.cautionBox}>
            <h3>See a dermatologist if</h3>
            <ul>
              <li>You have symmetrical brown patches on the cheeks, forehead or upper lip — this may be melasma, not tan</li>
              <li>Darkening does not improve after three months of sun protection</li>
              <li>A spot or mole changes in size, shape or colour, bleeds or itches</li>
              <li>You get blistering sunburn, or a rash after sun exposure</li>
            </ul>
          </div>
        </section>

        <RelatedProduct slug="freshotil-sunguard-50" />

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
          <h2>Stop the Tan, Then Let It Fade</h2>
          <p>
            Daily sunscreen, a gentle exfoliating cleanser, a leave-on treatment and a few
            weeks of patience. Explore{' '}
            <Link href={SUNSCREEN_HREF} className={styles.inlineLink}>
              Freshotil Sunguard-50
            </Link>
            ,{' '}
            <Link href={GEL_HREF} className={styles.inlineLink}>
              Kojicid Gel
            </Link>{' '}
            and{' '}
            <Link href={FACEWASH_HREF} className={styles.inlineLink}>
              Kojicid Brightening Facewash
            </Link>{' '}
            on our product pages.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={SUNSCREEN_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop Freshotil Sunguard-50 →
            </a>
            <a
              href={GEL_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Shop Kojicid Gel →
            </a>
          </div>
          <p className={styles.bottomNote}>Sunguard-50 100 mL · Kojicid Gel 15 g · Facewash 70 ml · Sold on Amazon India</p>
        </section>

        <p className={styles.disclaimer}>
          This article is for general information and is not medical advice. For melasma,
          persistent pigmentation, or any spot that changes in size, shape or colour, consult
          a dermatologist. Always patch test new products and follow the directions on the
          pack.
        </p>

      </div>
    </article>
  );
}