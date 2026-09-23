import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './kojic-acid-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';
import SchemaOrg from '@/components/SchemaOrg';
import { productHref } from '@/data/products';

const PAGE_URL =
  'https://www.lucidllp.com/blog/kojic-acid-dark-spots-acne-marks-india-guide';
const PAGE_TITLE = 'Kojic Acid for Dark Spots & Acne Marks: Indian Skin Guide';
const PAGE_DESCRIPTION =
  'How kojic acid fades dark spots, acne marks and sun tan, how to use kojic acid gel and face wash safely, results timeline and side effects for Indian skin.';

const GEL_PRODUCT_HREF = productHref('kojicid-gel');
const FACEWASH_PRODUCT_HREF = productHref('kojicid-facewash');
const SUNSCREEN_PRODUCT_HREF = productHref('freshotil-sunguard-50');

const GEL_AMAZON_LINK = 'https://amzn.in/d/0gFB5XaA';
const FACEWASH_AMAZON_LINK = 'https://amzn.in/d/0bmAFPGc';
const SUNSCREEN_AMAZON_LINK = 'https://amzn.in/d/04MfDy1G';

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | Lucid Pharmatech LLP" template,
  // so the brand is not appended twice.
  title: { absolute: `${PAGE_TITLE} | Lucid Pharmatech` },
  description: PAGE_DESCRIPTION,
  keywords: [
    'kojic acid for dark spots',
    'kojic acid gel',
    'kojic acid cream',
    'kojic acid face wash',
    'how to remove dark spots on face',
    'acne marks removal',
    'pigmentation cream India',
    'best cream for dark spots in India',
    'sun tan removal',
    'kojic acid side effects',
    'kojic acid vs niacinamide',
    'Kojicid gel uses',
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
        url: '/images/kojicid-gel.png',
        width: 1200,
        height: 630,
        alt: 'Kojicid Gel brightening gel with kojic acid, 15 g tube, pack of 2',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/kojicid-gel.png'],
  },
};

// BlogPosting schema with confirmed fields only. No ratings, reviews or credentials.
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Kojic Acid for Dark Spots & Acne Marks: Indian Skin Guide',
  description: PAGE_DESCRIPTION,
  image: 'https://www.lucidllp.com/images/kojicid-gel.png',
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  author: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  publisher: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  about: [
    { '@type': 'Product', name: 'Kojicid Gel' },
    { '@type': 'Product', name: 'Kojicid Brightening Facewash' },
  ],
};

const darkeningTypes = [
  {
    type: 'Acne marks (PIH)',
    look: 'Flat brown or dark marks where pimples used to be',
    cause: 'Inflammation from acne triggers extra melanin',
  },
  {
    type: 'Sun tan',
    look: 'Darker exposed areas — face, neck, arms, hands',
    cause: 'UV exposure',
  },
  {
    type: 'Sun spots',
    look: 'Small, well-defined brown spots on cheeks and forehead',
    cause: 'Years of cumulative sun exposure',
  },
  {
    type: 'Uneven tone / dullness',
    look: 'Patchy, tired-looking skin',
    cause: 'Sun, pollution, dead skin build-up',
  },
  {
    type: 'Melasma',
    look: 'Symmetrical brown patches on cheeks, forehead, upper lip',
    cause: 'Hormones plus sun and heat — needs a dermatologist',
  },
];

const comparison = [
  {
    name: 'Kojic acid',
    how: 'Slows melanin production (tyrosinase)',
    note: 'Widely used for tan, acne marks and uneven tone',
  },
  {
    name: 'Niacinamide (Vitamin B3)',
    how: 'Reduces transfer of pigment to skin cells',
    note: 'Gentle; also helps with oil and redness',
  },
  {
    name: 'Arbutin',
    how: 'Slows melanin production, similar pathway to kojic acid',
    note: 'Often paired with kojic acid',
  },
  {
    name: 'Vitamin C',
    how: 'Antioxidant; also slows melanin',
    note: 'Also helps against pollution and UV stress',
  },
  {
    name: 'Glycolic acid (AHA)',
    how: 'Exfoliates dull, pigmented surface cells',
    note: 'Makes skin more sun-sensitive — sunscreen is a must',
  },
  {
    name: 'Salicylic acid (BHA)',
    how: 'Clears pores, helps prevent new acne, so fewer new marks',
    note: 'Good for oily, acne-prone skin',
  },
  {
    name: 'Glutathione',
    how: 'Antioxidant associated with brighter-looking skin',
    note: 'Used topically in cleansers and creams',
  },
  {
    name: 'Hydroquinone',
    how: 'Strong pigment reducer',
    note: 'A medicine; use only under medical supervision',
  },
];

const gelIngredients = [
  { name: 'Kojic acid dipalmitate', body: 'The stable form of kojic acid, to support skin clarity.' },
  { name: 'Arbutin', body: 'Works alongside kojic acid on pigment.' },
  { name: 'Niacinamide', body: 'Helps even tone and supports the skin barrier.' },
  { name: 'Vitamin E acetate', body: 'Nourishes and supports the skin barrier.' },
  { name: 'Pine bark extract', body: 'Supports skin texture.' },
  { name: 'Allantoin', body: 'A soothing, skin-conditioning ingredient.' },
  { name: 'Octinoxate', body: 'A UV filter. It does not replace a proper sunscreen.' },
];

const facewashIngredients = [
  {
    name: 'Kojic acid dipalmitate + L-glutathione',
    body: 'Work on the look of dark spots and uneven tone.',
  },
  {
    name: 'Glycolic acid',
    body: 'Gently lifts dead surface cells that make skin look dull.',
  },
  {
    name: 'Salicylic acid (BHA)',
    body: 'Helps clear pores and manage oil. Fewer new pimples means fewer new marks.',
  },
];

const timeline = [
  {
    when: 'Weeks 1–2',
    what: 'Skin may look fresher and less dull, mostly from cleansing and exfoliation. Spots themselves look the same.',
  },
  {
    when: 'Weeks 4–6',
    what: 'Newer, lighter acne marks and recent tan may start to look softer.',
  },
  {
    when: 'Weeks 8–12',
    what: 'More visible evening of tone for many people. Older and deeper spots take longer.',
  },
  {
    when: 'Beyond 12 weeks',
    what: 'Continued gradual improvement, as long as sun protection is consistent.',
  },
];

const tips = [
  {
    title: 'Stop picking pimples.',
    body: 'Squeezing increases inflammation, and more inflammation means darker, longer-lasting marks.',
  },
  {
    title: 'Treat active acne.',
    body: 'Fewer new pimples means fewer new marks.',
  },
  {
    title: 'Never skip sunscreen.',
    body: 'It is the difference between marks fading and marks staying.',
  },
  {
    title: 'Be consistent.',
    body: 'Daily use for 8–12 weeks beats aggressive use for 2 weeks.',
  },
  {
    title: 'Do not stack too many actives.',
    body: 'Kojic acid, strong retinoids, acid peels and scrubs all at once irritate skin, and irritation can cause more pigmentation.',
  },
  {
    title: 'Avoid lemon juice and harsh scrubs.',
    body: 'DIY remedies like lemon can irritate skin and even darken it in the sun.',
  },
];

const myths = [
  {
    myth: 'Kojic acid is a skin-whitening product that makes you fair.',
    fact: 'Kojic acid helps reduce excess pigment — spots, marks and tan — so tone looks more even. It does not change your natural skin colour, and it should not. The goal is healthy, even-toned skin.',
  },
  {
    myth: 'If a little works, more works faster.',
    fact: 'Overusing actives causes irritation, and irritation can trigger more pigmentation.',
  },
  {
    myth: 'You only need sunscreen when you go out in the sun.',
    fact: 'UVA passes through clouds and windows. Daily sunscreen is essential while treating dark spots.',
  },
  {
    myth: 'Acne marks are permanent.',
    fact: 'Flat brown acne marks usually fade with time, sun protection and the right ingredients. Pitted scars are different and need professional treatment.',
  },
];

const faqs = [
  {
    q: 'Is kojic acid good for dark spots?',
    a: 'Yes. Kojic acid is widely used to help reduce the appearance of dark spots, acne marks, sun tan and uneven tone. It works by slowing the production of melanin. Results are gradual and depend on daily sunscreen use.',
  },
  {
    q: 'How do I use Kojicid Gel?',
    a: 'Apply a small amount to clean, dry skin and spread it evenly over the affected area until absorbed. Use twice daily, morning and night, as directed on the pack. Always follow with sunscreen in the morning.',
  },
  {
    q: 'Can I use kojic acid every day?',
    a: 'Yes, kojic acid products like Kojicid Gel are designed for daily use. If your skin is sensitive, start once a day for the first one to two weeks, then increase as tolerated.',
  },
  {
    q: 'Can I use kojic acid face wash daily?',
    a: 'The Kojicid Brightening Facewash pack directs daily use. Because it also contains glycolic and salicylic acid, people with sensitive or dry skin may prefer to start once a day and moisturise afterwards.',
  },
  {
    q: 'Is kojic acid good for acne marks?',
    a: 'Yes. Flat brown or dark marks left after pimples are one of the most common reasons people use kojic acid. The salicylic acid in Kojicid Facewash also helps keep pores clear, which means fewer new breakouts and fewer new marks.',
  },
  {
    q: 'Can I use kojic acid with niacinamide or vitamin C?',
    a: 'Yes, these are commonly combined because they work in different ways. Kojicid Gel already contains niacinamide alongside kojic acid and arbutin. Introduce any new product one at a time.',
  },
  {
    q: 'Does kojic acid remove sun tan?',
    a: 'Kojic acid helps fade the look of sun tan over time by reducing new pigment production. Daily sunscreen is essential; without it, tan keeps coming back.',
  },
  {
    q: 'Is kojic acid safe for oily and acne-prone skin?',
    a: 'In general, yes. Kojicid Gel has a non-greasy, fast-absorbing texture designed not to clog pores. Patch test first and avoid applying on broken or inflamed skin.',
  },
  {
    q: 'Does kojic acid make skin fair permanently?',
    a: 'No. Kojic acid evens out tone by reducing excess pigment; it does not permanently change your natural skin colour. Without sun protection, tan and spots can return.',
  },
  {
    q: 'How long does kojic acid take to show results?',
    a: 'Many people notice softer marks after about 4 to 6 weeks, with more visible evening of tone at 8 to 12 weeks of consistent daily use with sunscreen. Older, deeper spots take longer.',
  },
];

export default function KojicAcidBlogPage() {
  return (
    <article className={styles.blog}>
      <SchemaOrg schema={articleSchema} />

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Skincare · Dark Spots &amp; Uneven Tone</span>
            <h1 className={styles.heroTitle}>
              Kojic Acid for Dark Spots,{' '}<br />
              <em>Acne Marks &amp; Tan</em>
            </h1>
            <p className={styles.heroSub}>
              The pimple healed weeks ago, but the mark is still there. Here is how kojic
              acid works, how it compares with niacinamide and vitamin C, a safe routine with
              Kojicid Gel and Kojicid Facewash, and an honest timeline for results on Indian
              skin.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href={GEL_AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy Kojicid Gel →
              </a>
              <a
                href={FACEWASH_AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCtaGhost}
              >
                Buy Kojicid Facewash →
              </a>
            </div>
          </div>

          {/* ── PRODUCT IMAGE CONTAINER ── */}
          <div className={styles.heroImageWrap}>
            <div className={styles.imageCard}>
              <Image
                src="/images/kojicid-gel.png"
                alt="Kojicid Gel brightening gel with kojic acid, Vitamin E and pine bark extract, 15 g tube, pack of 2"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className={styles.imageBadge}>Non-Greasy · Day &amp; Night</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ───── QUICK ANSWER ───── */}
        <div className={styles.quickAnswer}>
          <span className={styles.quickAnswerLabel}>Quick answer</span>
          <p>
            Kojic acid helps reduce the appearance of dark spots, acne marks, sun tan and
            uneven skin tone by slowing down the production of melanin, the pigment that
            causes darkening. It works gradually — visible improvement usually takes several
            weeks of consistent daily use — and it only works if you also wear sunscreen
            every day, because sun exposure keeps creating new pigment. Kojic acid evens out
            tone; it does not change your natural skin colour.
          </p>
        </div>

        {/* ───── WHY DARK SPOTS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Dark Spots Are So Common on Indian Skin</h2>
          <p>
            Indian skin types have active melanocytes — the cells that make melanin. That is
            a real advantage, because melanin gives natural protection against the sun. The
            downside is that these cells react strongly to any trigger by producing{' '}
            <em>extra</em> pigment, and that extra pigment shows up as dark patches.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Type of darkening</th>
                  <th scope="col">What it looks like</th>
                  <th scope="col">Main cause</th>
                </tr>
              </thead>
              <tbody>
                {darkeningTypes.map((row) => (
                  <tr key={row.type}>
                    <td>{row.type}</td>
                    <td>{row.look}</td>
                    <td>{row.cause}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The important part: <strong>acne marks are not scars.</strong> A scar changes
            the texture of your skin — a pit or a bump. A mark is only colour, and colour can
            fade. That is exactly what ingredients like kojic acid are for.
          </p>
        </section>

        {/* ───── WHAT IS KOJIC ACID ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Is Kojic Acid?</h2>
          <p>
            Kojic acid is a natural compound first obtained from fungi used in fermenting
            foods such as rice for sake and soy sauce in Japan. It has been used in skincare
            for decades to help brighten skin and even out tone.
          </p>
          <div className={styles.benefitBlock}>
            <div className={styles.benefitNumber}>01</div>
            <div>
              <h3>How it works</h3>
              <p>
                To make melanin, your skin needs an enzyme called <strong>tyrosinase</strong>.
                Kojic acid interferes with tyrosinase, so less new pigment is produced. As
                your skin naturally renews itself and pigmented cells move up and shed, spots
                look lighter because less new pigment is replacing them.
              </p>
            </div>
          </div>
          <div className={styles.benefitBlock}>
            <div className={styles.benefitNumber}>02</div>
            <div>
              <h3>Kojic acid vs kojic acid dipalmitate</h3>
              <p>
                Pure kojic acid is unstable — it can break down and turn brown when exposed
                to light and air. <strong>Kojic acid dipalmitate</strong> is a more stable
                form, which is why it is widely used in modern formulas. Both Kojicid Gel and
                Kojicid Facewash use kojic acid dipalmitate.
              </p>
            </div>
          </div>
        </section>

        {/* ───── COMPARISON ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kojic Acid vs Other Brightening Ingredients</h2>
          <p>
            You will see many dark-spot ingredients on Indian shelves. Here is how they
            compare, in plain language:
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Ingredient</th>
                  <th scope="col">How it helps dark spots</th>
                  <th scope="col">Good to know</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.how}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <strong>The takeaway:</strong> no single ingredient does everything. Formulas
            that combine ingredients working on different steps — slowing pigment,
            exfoliating, preventing new acne — make more sense than a single active.
          </p>
        </section>

        {/* ───── KOJICID RANGE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Kojicid Range: What Is Inside</h2>

          <h3 className={styles.subTitle}>Kojicid Gel — the leave-on treatment</h3>
          <p>
            <Link href={GEL_PRODUCT_HREF} className={styles.inlineLink}>
              Kojicid Gel
            </Link>{' '}
            is a lightweight brightening gel made to help reduce the appearance of dark
            spots, acne marks, sun tan and uneven skin tone. It has a{' '}
            <strong>non-greasy, fast-absorbing</strong> texture, suits day and night use, and
            is designed not to clog pores or leave residue — useful for oily and acne-prone
            skin in humid weather. It comes as 15 g tubes, pack of 2.
          </p>
          <div className={styles.painGrid}>
            {gelIngredients.map((ing) => (
              <div key={ing.name} className={styles.painCard}>
                <h4 className={styles.painProblem}>{ing.name}</h4>
                <p className={styles.painSolution}>{ing.body}</p>
              </div>
            ))}
          </div>

          <h3 className={styles.subTitle}>Kojicid Brightening Facewash — the cleanser</h3>
          <p>
            <Link href={FACEWASH_PRODUCT_HREF} className={styles.inlineLink}>
              Kojicid Brightening Facewash
            </Link>{' '}
            is an actives-led cleanser, not a plain everyday face wash. It comes as 70 ml
            tubes, pack of 2, and is suitable for all skin types.
          </p>
          <ul className={styles.audienceList}>
            {facewashIngredients.map((ing) => (
              <li key={ing.name}>
                <strong>{ing.name}</strong> — {ing.body}
              </li>
            ))}
          </ul>

          <h3 className={styles.subTitle}>Why use both?</h3>
          <p>
            A face wash stays on your skin for under a minute, so its job is to prepare the
            skin — clearing oil, lifting dead cells and keeping pores clear. The gel stays on
            your skin for hours, which gives the kojic acid time to work. Cleanser plus
            leave-on treatment is a more complete routine than either one alone.
          </p>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            Kojicid Gel — 15 g, pack of 2 · Kojicid Facewash — 70 ml, pack of 2
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={GEL_AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get Kojicid Gel on Amazon →
            </a>
            <a
              href={FACEWASH_AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Get Kojicid Facewash on Amazon →
            </a>
          </div>
        </div>

        {/* ───── ROUTINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Routine: How to Use Kojic Acid for Dark Spots</h2>
          <div className={styles.routineGrid}>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Morning</span>
              <ol>
                <li>Wash with Kojicid Facewash — small amount, damp skin, 20–30 seconds, rinse well</li>
                <li>Apply a small amount of Kojicid Gel to clean, dry skin</li>
                <li>Moisturise if skin feels dry</li>
                <li><strong>Broad-spectrum SPF 50 — every day</strong></li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Night</span>
              <ol>
                <li>Wash with Kojicid Facewash, or a gentle cleanser if skin feels sensitive</li>
                <li>Apply Kojicid Gel to clean, dry skin</li>
                <li>Moisturise if needed</li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Sensitive skin</span>
              <ol>
                <li>Weeks 1–2: gel once a day at night, facewash once a day</li>
                <li>Week 3 onwards: move to twice daily, as directed on the pack, if skin is comfortable</li>
              </ol>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            <strong>How much gel?</strong> Roughly a pea-sized amount for the whole face, or a
            thin layer on specific spots. Using more does not make it work faster; it only
            raises the chance of irritation. Always follow the directions on the pack.
          </p>
        </section>

        {/* ───── SUNSCREEN ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sunscreen Decides Whether Any of This Works</h2>
          <p>
            Every time UV light hits your skin, it signals your melanocytes to make more
            pigment. Use kojic acid at night but step out without sunscreen the next day, and
            you are slowing pigment down with one hand and switching it back on with the
            other. Glycolic acid also makes skin more sensitive to the sun.
          </p>
          <ul className={styles.audienceList}>
            <li>Use a broad-spectrum (UVA + UVB) SPF 50 every morning — even on cloudy days</li>
            <li>Use enough — around two finger-lengths for the face and neck</li>
            <li>Reapply every 2–3 hours outdoors, and after sweating or towelling</li>
            <li>
              Wear it indoors too if you sit near windows — see{' '}
              <Link href="/blog/why-sunscreen-important-indoors-india" className={styles.inlineLink}>
                why sunscreen matters even indoors
              </Link>
            </li>
          </ul>
          <p>
            A lightweight option is{' '}
            <Link href={SUNSCREEN_PRODUCT_HREF} className={styles.inlineLink}>
              Freshotil Sunguard-50
            </Link>
            . If your skin is oily or acne-prone and you dislike sticky sunscreen, see our{' '}
            <Link href="/blog/best-sunscreen-oily-skin-india-spf-guide" className={styles.inlineLink}>
              SPF guide for oily skin
            </Link>{' '}
            and our guide to{' '}
            <Link href="/blog/best-sunscreen-acne-prone-skin-india" className={styles.inlineLink}>
              sunscreen for acne-prone skin
            </Link>
            .
          </p>
        </section>

        {/* ───── TIMELINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How Long Does Kojic Acid Take to Work?</h2>
          <p>
            Skin renews its surface roughly every four to six weeks, and pigment fades as
            that renewal happens, so dark-spot treatments are slow by nature. A realistic
            picture for consistent daily use with sunscreen:
          </p>
          <ul className={styles.timeline}>
            {timeline.map((t) => (
              <li key={t.when}>
                <span className={styles.timelineWhen}>{t.when}</span>
                <p>{t.what}</p>
              </li>
            ))}
          </ul>
          <p>
            Results vary from person to person. Deep, long-standing pigmentation and melasma
            respond more slowly and often need a dermatologist&rsquo;s treatment plan.
          </p>
        </section>

        {/* ───── TIPS ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>Tips That Help Dark Spots Fade Faster</h2>
          <div className={styles.tipsGrid}>
            {tips.map((t, i) => (
              <div key={t.title} className={styles.tipCard}>
                <span className={styles.tipNum}>{i + 1}</span>
                <p><strong>{t.title}</strong> {t.body}</p>
              </div>
            ))}
          </div>
          <p className={styles.introText} style={{ marginTop: 20 }}>
            Still getting new breakouts? Our{' '}
            <Link href="/blog/best-face-wash-acne-prone-skin-india" className={styles.inlineLink}>
              guide to face wash for acne-prone skin
            </Link>{' '}
            covers how to reduce them — and fewer pimples means fewer new marks.
          </p>
        </section>

        {/* ───── SAFETY ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kojic Acid Side Effects and Safety</h2>
          <p>
            Kojic acid is widely used in cosmetic products, but like any active ingredient it
            can irritate some people — typically mild tingling, redness or dryness in the
            first few weeks, and in some sensitive people, an allergic reaction.
          </p>
          <div className={styles.cautionBox}>
            <h3>Stay safe</h3>
            <ul>
              <li><strong>Patch test first</strong> on the inner forearm or behind the ear for 24–48 hours.</li>
              <li>Avoid the eyes, lips and inside of the nose.</li>
              <li>Do not apply on broken, cut, burnt or sunburnt skin.</li>
              <li>Stop use if you get burning, swelling, a rash or persistent redness, and consult a doctor.</li>
              <li>Pregnant or breastfeeding? Check with your doctor before starting any new active skincare.</li>
              <li>Using prescription creams (retinoids, hydroquinone, steroids)? Ask your dermatologist first.</li>
            </ul>
          </div>
          <div className={styles.cautionBox}>
            <h3>See a dermatologist if</h3>
            <ul>
              <li>You have symmetrical patches on the cheeks, forehead or upper lip (possible melasma)</li>
              <li>A spot is changing in size, shape or colour, bleeding or itching</li>
              <li>Pigmentation is not improving after 3 months of consistent care</li>
            </ul>
          </div>
        </section>

        {/* ───── MYTHS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Myth vs Fact</h2>
          <div className={styles.mythGrid}>
            {myths.map((m) => (
              <div key={m.myth} className={styles.mythCard}>
                <p className={`${styles.mythRow} ${styles.myth}`}>
                  <strong>Myth:</strong> {m.myth}
                </p>
                <p className={`${styles.mythRow} ${styles.fact}`}>
                  <strong>Fact:</strong> {m.fact}
                </p>
              </div>
            ))}
          </div>
        </section>

        <RelatedProduct slug="kojicid-gel" />

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
          <h2>Build Your Dark Spot Routine</h2>
          <p>
            A cleanser that keeps pores clear and lifts dull cells, a leave-on treatment that
            gives kojic acid time to work, and a broad-spectrum SPF 50 every morning. Be
            gentle, be consistent, and give it 8–12 weeks.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={GEL_AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop Kojicid Gel →
            </a>
            <a
              href={FACEWASH_AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Shop Kojicid Facewash →
            </a>
            <a
              href={SUNSCREEN_AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Shop Freshotil Sunguard-50 →
            </a>
          </div>
          <p className={styles.bottomNote}>Gel 15 g · Facewash 70 ml · Sunguard 100 mL · Sold on Amazon India</p>
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