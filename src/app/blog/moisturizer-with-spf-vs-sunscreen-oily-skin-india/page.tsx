import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './spf-moisturizer-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';
import SchemaOrg from '@/components/SchemaOrg';
import { productHref } from '@/data/products';

const PAGE_URL =
  'https://www.lucidllp.com/blog/moisturizer-with-spf-vs-sunscreen-oily-skin-india';
const PAGE_TITLE = 'Moisturiser With SPF vs Sunscreen for Oily Skin in India';
const PAGE_DESCRIPTION =
  'Is an SPF moisturiser enough for oily skin? Why you may need both, the right order, how much to apply, and a non-greasy morning routine for Indian weather.';

const SUNSCREEN_HREF = productHref('freshotil-sunguard-50');
const CREAM_HREF = productHref('moist-sure-cream');

const SUNSCREEN_AMAZON = 'https://amzn.in/d/04MfDy1G';
const CREAM_AMAZON = 'https://amzn.in/d/0btC4bWY';

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | Lucid Pharmatech LLP" template,
  // so the brand is not appended twice.
  title: { absolute: `${PAGE_TITLE} | Lucid Pharmatech` },
  description: PAGE_DESCRIPTION,
  keywords: [
    'moisturizer with spf for oily skin in india',
    'spf moisturizer for oily skin',
    'sunscreen moisturizer for oily skin',
    'moisturiser or sunscreen first',
    'do I need moisturiser and sunscreen',
    'is spf moisturiser enough',
    'daily sunscreen for oily skin',
    'sunscreen for dull skin',
    'non-greasy sunscreen for oily skin',
    'how much sunscreen to apply on face',
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
        alt: 'Freshotil Sunguard-50 SPF 50 sunscreen lotion, 100 mL tube',
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
  headline: 'Moisturiser With SPF vs Sunscreen for Oily Skin in India',
  description: PAGE_DESCRIPTION,
  image: 'https://www.lucidllp.com/images/freshotil-sunguard.png',
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  author: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  publisher: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  about: [
    { '@type': 'Product', name: 'Freshotil Sunguard-50 Lotion' },
    { '@type': 'Product', name: 'Moist Sure Cream' },
  ],
};

const compare = [
  {
    label: 'Main job',
    spfMoist: 'Hydration first, some sun protection',
    sunscreen: 'Sun protection first',
    moist: 'Hydration only',
  },
  {
    label: 'Typical amount used',
    spfMoist: 'Thin layer, like any moisturiser',
    sunscreen: 'Generous — about two finger-lengths for face and neck',
    moist: 'Pea-sized for the face',
  },
  {
    label: 'Protection in real use',
    spfMoist: 'Often lower than the label, because it is applied thinly',
    sunscreen: 'Closer to the label when applied generously',
    moist: 'None',
  },
  {
    label: 'Good for a full day outdoors',
    spfMoist: 'Not on its own',
    sunscreen: 'Yes, with reapplication',
    moist: 'No',
  },
  {
    label: 'Good for oily skin',
    spfMoist: 'Depends on texture; can feel heavy',
    sunscreen: 'Choose a lightweight, non-greasy lotion or gel',
    moist: 'Choose a light, non-greasy texture',
  },
];

const whoNeedsWhat = [
  {
    emoji: '🌞',
    title: 'Very oily skin, humid summer',
    body: 'A lightweight sunscreen alone may feel like enough moisture. If your skin does not feel tight after it settles, you can often skip a separate moisturiser in the morning.',
  },
  {
    emoji: '🌗',
    title: 'Combination skin',
    body: 'A small amount of non-greasy moisturiser on the dry cheeks, then sunscreen all over. Keep the moisturiser light on the T-zone.',
  },
  {
    emoji: '❄️',
    title: 'Oily skin in winter or AC',
    body: 'Oily skin can still feel dehydrated in dry air. A light moisturiser first, then sunscreen, usually feels more comfortable.',
  },
  {
    emoji: '🧴',
    title: 'Using acne or brightening actives',
    body: 'Acids and other actives can dry the skin and make it more sun-sensitive. Use both a moisturiser and a proper sunscreen every morning.',
  },
];

const faqs = [
  {
    q: 'Is a moisturiser with SPF enough for oily skin?',
    a: 'For a few minutes of sun, it is better than nothing. For regular daily protection or time outdoors, it is usually not enough on its own, because most people apply moisturiser in a thin layer — far less than the amount used to test the SPF on the label. A separate sunscreen, applied generously, is more reliable.',
  },
  {
    q: 'Should I apply moisturiser or sunscreen first?',
    a: 'Moisturiser first, sunscreen last. Let the moisturiser settle for a minute or two, then apply sunscreen as the final step of your skincare routine, before any makeup.',
  },
  {
    q: 'Do oily skin types need moisturiser?',
    a: 'Usually yes. Oil and water are different things — oily skin can still be dehydrated, especially in AC, winter or when using acne actives. A light, non-greasy moisturiser helps. In very humid weather, some people with very oily skin find sunscreen alone is enough in the morning.',
  },
  {
    q: 'Can I use sunscreen instead of moisturiser?',
    a: 'Some people with oily skin can, if their sunscreen feels hydrating enough and their skin is not tight afterwards. You still need a moisturiser at night, when you are not wearing sunscreen, if your skin feels dry.',
  },
  {
    q: 'How much sunscreen should I use on my face?',
    a: 'A common guide is about two finger-lengths of sunscreen for the face and neck. Most people use much less than this, which lowers the protection they actually get.',
  },
  {
    q: 'Is SPF 50 better than SPF 30 for oily skin?',
    a: 'SPF 50 filters slightly more UVB than SPF 30, which can help given how often people under-apply sunscreen. Skin type does not change the SPF you need — what matters for oily skin is choosing a texture you will actually wear every day.',
  },
  {
    q: 'Can sunscreen help with dull skin?',
    a: 'Sun exposure is a major cause of tan and uneven tone, which make skin look dull. Daily sunscreen helps prevent that from building up. It is protection, not an instant brightening treatment.',
  },
  {
    q: 'Do I need sunscreen indoors?',
    a: 'If you sit near windows or spend time in bright daylight indoors, yes. UVA can pass through window glass. Our guide to why sunscreen matters indoors explains more.',
  },
];

export default function SpfMoisturizerBlogPage() {
  return (
    <article className={styles.blog}>
      <SchemaOrg schema={articleSchema} />

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Sun Care · Oily Skin</span>
            <h1 className={styles.heroTitle}>
              Moisturiser With SPF{' '}<br />
              <em>vs Sunscreen for Oily Skin</em>
            </h1>
            <p className={styles.heroSub}>
              Oily skin makes people want fewer layers — so is one SPF moisturiser enough?
              Here is the honest answer, why the amount you apply matters more than the
              number on the label, the right order, and a non-greasy morning routine for
              Indian heat and humidity.
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
            </div>
          </div>

          {/* ── PRODUCT IMAGE CONTAINER ── */}
          <div className={styles.heroImageWrap}>
            <div className={styles.imageCard}>
              <Image
                src="/images/freshotil-sunguard.png"
                alt="Freshotil Sunguard-50 SPF 50 sun screen lotion, 100 mL tube"
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
            A moisturiser with SPF is better than no sun protection, but for most people it
            is not enough on its own. The SPF on a label is tested using a generous amount of
            product, and moisturiser is usually applied in a thin layer, so real protection
            ends up lower. For oily skin, the most reliable routine is a{' '}
            <strong>light, non-greasy moisturiser</strong> (or none, if your skin does not
            need it) followed by a <strong>separate broad-spectrum sunscreen</strong>, applied
            generously and reapplied when you are outdoors.
          </p>
        </div>

        {/* ───── WHY AMOUNT MATTERS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why the Amount You Apply Matters More Than the Label
          </h2>
          <p>
            The SPF number on any product is measured in a lab using a set, fairly thick
            amount of product on the skin — 2 milligrams per square centimetre. In daily
            life, studies have repeatedly found that people apply far less than this, often
            around a quarter to half of the tested amount. Less product means less protection
            than the label suggests.
          </p>
          <p>
            This is the core problem with relying on a moisturiser with SPF. Nobody applies
            moisturiser in a thick layer, and people with oily skin tend to use even less of
            it to avoid a greasy feel. A dedicated sunscreen is designed to be applied
            generously, which is why dermatologists usually suggest it as the main source of
            sun protection.
          </p>
          <div className={styles.benefitBlock}>
            <div className={styles.benefitNumber}>2</div>
            <div>
              <h3>The two-finger rule</h3>
              <p>
                A simple guide: squeeze sunscreen along the length of your index and middle
                fingers. That is roughly the amount needed for the face and neck. If that
                feels like a lot, it is a sign you have been under-applying.
              </p>
            </div>
          </div>
        </section>

        {/* ───── COMPARISON TABLE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>SPF Moisturiser vs Sunscreen vs Moisturiser</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">Moisturiser with SPF</th>
                  <th scope="col">Sunscreen</th>
                  <th scope="col">Moisturiser</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.spfMoist}</td>
                    <td>{row.sunscreen}</td>
                    <td>{row.moist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            An SPF moisturiser can work as a backup on days you are mostly indoors and away
            from windows. For commuting, outdoor work, travel or any real time in the sun, use
            a separate sunscreen.
          </p>
        </section>

        {/* ───── DOES OILY SKIN NEED MOISTURISER ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Does Oily Skin Even Need a Moisturiser?</h2>
          <p>
            Oil and water are not the same thing. Oily skin produces more sebum, but it can
            still lack water — especially in air-conditioned rooms, in winter, or when you use
            acne or brightening actives that dry the skin. Skipping moisturiser can leave skin
            feeling tight and uncomfortable.
          </p>
          <p>That said, the answer depends on your skin and the season:</p>
          <div className={styles.painGrid}>
            {whoNeedsWhat.map((w) => (
              <div key={w.title} className={styles.painCard}>
                <span className={styles.painEmoji} aria-hidden="true">{w.emoji}</span>
                <h3 className={styles.painProblem}>{w.title}</h3>
                <p className={styles.painSolution}>{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── ORDER ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>
            Moisturiser or Sunscreen First? The Right Morning Order
          </h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>1</span>
              <p>
                <strong>Cleanse</strong> with a gentle face wash for oily skin. See our guide
                to the{' '}
                <Link href="/blog/best-face-wash-oily-skin-india-2026" className={styles.inlineLink}>
                  best face wash for oily skin
                </Link>
                .
              </p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>2</span>
              <p><strong>Treatment</strong> (optional) — any serum or gel, such as a dark-spot treatment.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>3</span>
              <p><strong>Moisturiser</strong> — a pea-sized amount of a light, non-greasy cream. Wait a minute or two.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>4</span>
              <p><strong>Sunscreen last</strong> — about two finger-lengths for face and neck, then makeup if you wear it.</p>
            </div>
          </div>
          <p className={styles.introText} style={{ marginTop: 20 }}>
            Reapply sunscreen about every two hours when outdoors, and after sweating,
            swimming or towelling your face.
          </p>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            A two-step, non-greasy morning: Moist Sure Cream, then Freshotil Sunguard-50.
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
              href={CREAM_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Get Moist Sure Cream →
            </a>
          </div>
        </div>

        {/* ───── PRODUCTS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>A Non-Greasy Two-Step From the Lucid Range</h2>

          <h3 className={styles.subTitle}>Step 1: Moist Sure Cream</h3>
          <p>
            <Link href={CREAM_HREF} className={styles.inlineLink}>
              Moist Sure Cream
            </Link>{' '}
            is a 60 g moisturiser with aloe vera, Vitamin E and jojoba oil. It absorbs without
            a greasy finish, which makes it workable on combination skin. On oily skin, use a
            small amount, focused where skin feels dry. For more on this, see our guide to
            the{' '}
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.inlineLink}
            >
              best moisturiser for combination skin
            </Link>
            .
          </p>

          <h3 className={styles.subTitle}>Step 2: Freshotil Sunguard-50</h3>
          <p>
            <Link href={SUNSCREEN_HREF} className={styles.inlineLink}>
              Freshotil Sunguard-50
            </Link>{' '}
            is an SPF 50 sunscreen lotion with UVA and UVB protection. The lightweight lotion
            spreads comfortably without a heavy or sticky feel, which makes it practical for
            commuting, travelling, outdoor exercise or a full day outside. It comes in a 100
            mL tube.
          </p>
          <p>
            For a deeper look at SPF, broad-spectrum protection and water resistance in
            Indian conditions, read our{' '}
            <Link href="/blog/best-sunscreen-oily-skin-india-spf-guide" className={styles.inlineLink}>
              complete guide to the best sunscreen for oily skin in India
            </Link>
            .
          </p>
        </section>

        {/* ───── SPF BASICS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What to Look for in a Sunscreen for Oily Skin</h2>
          <ul className={styles.audienceList}>
            <li><strong>Broad spectrum</strong> — protection against both UVA and UVB</li>
            <li>
              <strong>SPF 30 or higher</strong> — SPF 50 filters slightly more UVB and gives a
              little more margin when you under-apply
            </li>
            <li><strong>Lightweight, non-greasy texture</strong> — a lotion or gel you will actually wear every day</li>
            <li><strong>Comfortable in heat</strong> — does not feel heavy or sticky in humidity</li>
            <li>
              <strong>Acne-prone?</strong> Prefer products labelled non-comedogenic, and see our{' '}
              <Link href="/blog/best-sunscreen-acne-prone-skin-india" className={styles.inlineLink}>
                sunscreen guide for acne-prone skin
              </Link>
            </li>
          </ul>
        </section>

        {/* ───── DULL SKIN ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Oily, Dull Skin? Sunscreen Is Part of the Fix</h2>
          <p>
            Many people with oily skin describe it as dull — shiny, but not bright. Two things
            often sit behind this: a build-up of dead skin and oil, and tan and uneven tone
            from daily sun exposure. Cleansing helps with the first. Daily sunscreen helps
            with the second, by preventing tan from building up over time.
          </p>
          <p>
            Sunscreen is protection, not an instant glow. If you are already working on
            uneven tone or marks, see our{' '}
            <Link
              href="/blog/kojic-acid-dark-spots-acne-marks-india-guide"
              className={styles.inlineLink}
            >
              guide to kojic acid for dark spots
            </Link>{' '}
            — and remember that no brightening product works without daily sunscreen. UVA
            also passes through window glass, which is why{' '}
            <Link href="/blog/why-sunscreen-important-indoors-india" className={styles.inlineLink}>
              sunscreen matters even indoors
            </Link>
            .
          </p>
        </section>

        {/* ───── SAFETY ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>A Few Safety Notes</h2>
          <div className={styles.cautionBox}>
            <h3>Before and during use</h3>
            <ul>
              <li>Patch test any new sunscreen or moisturiser on the inner forearm first.</li>
              <li>Avoid the eyes; rinse with water if product gets into them.</li>
              <li>Do not apply on broken or badly sunburnt skin.</li>
              <li>Stop use if you get redness, burning or a rash, and consult a doctor if it does not settle.</li>
              <li>For babies and young children, ask a paediatrician before using sunscreen.</li>
              <li>Sunscreen is one part of sun protection — shade, hats and avoiding peak midday sun help too.</li>
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
          <h2>Two Light Layers, Every Morning</h2>
          <p>
            A small amount of non-greasy moisturiser if your skin needs it, then a generous
            layer of broad-spectrum sunscreen as the last step. Explore{' '}
            <Link href={SUNSCREEN_HREF} className={styles.inlineLink}>
              Freshotil Sunguard-50
            </Link>{' '}
            and{' '}
            <Link href={CREAM_HREF} className={styles.inlineLink}>
              Moist Sure Cream
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
              href={CREAM_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Shop Moist Sure Cream →
            </a>
          </div>
          <p className={styles.bottomNote}>Sunguard-50 100 mL · Moist Sure Cream 60 g · Sold on Amazon India</p>
        </section>

        <p className={styles.disclaimer}>
          This article is for general information and is not medical advice. For sun allergy,
          severe sunburn or persistent skin problems, consult a dermatologist. Always read the
          label and follow the directions on the pack.
        </p>

      </div>
    </article>
  );
}