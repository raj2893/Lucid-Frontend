import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './moist-sure-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';
import SchemaOrg from '@/components/SchemaOrg';
import { productHref } from '@/data/products';

const PAGE_URL =
  'https://www.lucidllp.com/blog/moist-sure-lotion-cream-uses-benefits-how-to-use';
const PAGE_TITLE = 'Moist Sure Lotion & Cream: Uses, Benefits & How to Use';
const PAGE_DESCRIPTION =
  'Moist Sure Lotion and Cream uses, benefits and how to apply them. Aloe vera, Vitamin E and jojoba oil for dry skin in winter, AC rooms and hard water.';

const LOTION_PRODUCT_HREF = productHref('moist-sure-lotion');
const CREAM_PRODUCT_HREF = productHref('moist-sure-cream');

const LOTION_AMAZON_LINK = 'https://amzn.in/d/02RlwKAg';
const CREAM_AMAZON_LINK = 'https://amzn.in/d/0btC4bWY';

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | Lucid Pharmatech LLP" template,
  // so the brand is not appended twice.
  title: { absolute: `${PAGE_TITLE} | Lucid Pharmatech` },
  description: PAGE_DESCRIPTION,
  keywords: [
    'Moist Sure cream',
    'Moist Sure lotion',
    'Moist Sure lotion uses',
    'Moist Sure cream uses',
    'Moist Sure cream benefits',
    'Moist Sure lotion benefits',
    'moisturiser for dry skin India',
    'body lotion for dry skin in winter',
    'aloe vera vitamin E jojoba oil moisturiser',
    'non-greasy moisturiser India',
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
        url: '/images/moist-sure-lotion.png',
        width: 1200,
        height: 630,
        alt: 'Moist Sure Lotion with aloe vera, glycerine, Vitamin E and jojoba oil, 100 mL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/moist-sure-lotion.png'],
  },
};

// BlogPosting schema with confirmed fields only. No ratings, reviews or credentials.
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Moist Sure Lotion & Cream: Uses, Benefits & How to Use',
  description: PAGE_DESCRIPTION,
  image: 'https://www.lucidllp.com/images/moist-sure-lotion.png',
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  author: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  publisher: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  about: [
    { '@type': 'Product', name: 'Moist Sure Lotion' },
    { '@type': 'Product', name: 'Moist Sure Cream' },
  ],
};

const formats = [
  { label: 'Format', lotion: 'Bottle, 100 mL (pack of 2)', cream: 'Jar, 60 g' },
  { label: 'Texture', lotion: 'Lighter, spreads easily', cream: 'Richer, more cushioning' },
  {
    label: 'Key ingredients',
    lotion: 'Aloe vera, glycerine, Vitamin E, jojoba oil',
    cream: 'Aloe vera, Vitamin E, jojoba oil',
  },
  {
    label: 'Best for',
    lotion: 'Full-body moisturising, everyday use',
    cream: 'Face, combination skin, dry patches',
  },
  { label: 'Finish', lotion: 'Light, absorbs quickly', cream: 'Non-greasy' },
];

const ingredients = [
  {
    name: 'Aloe Vera — soothing hydration',
    body: 'Aloe vera is one of the most familiar plant-based skincare ingredients in India. It gives a cool, comfortable feel on dry or tight skin and supports hydration, which is why it is so often used after sun exposure or on skin that feels irritated from dryness.',
  },
  {
    name: 'Glycerine (in the Lotion) — pulls moisture in',
    body: 'Glycerine is a humectant, an ingredient that attracts water and holds it in the upper layers of the skin. It is one of the most widely used moisturising ingredients in the world, and a big reason a body lotion feels hydrating rather than just slippery.',
  },
  {
    name: 'Vitamin E — nourishment and protection',
    body: 'Vitamin E is an antioxidant commonly used in moisturisers to help protect the skin against dryness and everyday environmental stress such as pollution and sun exposure. It also helps give the skin a softer, more supple feel.',
  },
  {
    name: 'Jojoba Oil — locks moisture in',
    body: 'Jojoba oil is a lightweight plant emollient whose composition is similar to the skin\u2019s own natural oils. That is why it softens the skin without feeling heavy, and helps seal in moisture so skin stays comfortable for longer.',
  },
];

const lotionUses = [
  {
    emoji: '🛁',
    title: 'Daily body moisturising',
    body: 'After your bath, on the arms, legs, back and stomach. The lighter texture covers large areas quickly.',
  },
  {
    emoji: '🍂',
    title: 'Dry, flaky or rough skin',
    body: 'Especially on the shins and forearms, which have fewer oil glands and dry out first.',
  },
  {
    emoji: '❄️',
    title: 'Winter dryness',
    body: 'Cold, dry air from October to February pulls moisture out of the skin. Daily lotion helps keep it comfortable.',
  },
  {
    emoji: '🏢',
    title: 'Skin dried out by AC',
    body: 'Long hours in air-conditioned offices, cars and bedrooms lower the humidity around your skin all year round.',
  },
  {
    emoji: '🚿',
    title: 'Dryness from hard water',
    body: 'Many Indian cities have hard water, which can leave skin feeling tight and itchy after a bath.',
  },
  {
    emoji: '✨',
    title: 'Dull, ashy-looking skin',
    body: 'Well-moisturised skin reflects light more evenly and looks healthier and less dull.',
  },
];

const creamUses = [
  'Face moisturiser — the non-greasy finish makes it workable as a day or night face cream',
  'Combination skin — hydrates dry cheeks without making the T-zone feel heavy',
  'Dry patches on elbows, knees, heels, knuckles and the backs of the hands',
  'Hands after frequent washing or sanitiser use',
  'A slightly richer night-time layer, when skin loses water overnight',
  'Sensitive skin — suited to it, but always patch test first',
];

const chooser = [
  { situation: 'You want one moisturiser for your whole body', pick: 'Lotion' },
  { situation: 'Your face is combination or normal to dry', pick: 'Cream' },
  { situation: 'Your skin is only mildly dry', pick: 'Lotion' },
  { situation: 'You have rough patches on elbows, knees or heels', pick: 'Cream' },
  {
    situation: 'You live in a humid city and dislike sticky products',
    pick: 'Lotion for body, a small amount of Cream for face',
  },
  { situation: 'Harsh winter, very dry skin', pick: 'Lotion for body + Cream on the driest areas' },
];

const drynessCauses = [
  'North Indian winters — cold, dry air and room heaters pull moisture from the skin.',
  'Hot baths — very hot water dissolves the skin\u2019s protective oils.',
  'Hard water — minerals can leave a film that makes skin feel tight and itchy.',
  'Air conditioning — long hours in AC lower the humidity around your skin all year.',
  'Harsh soaps — high-foaming bathing bars can strip the skin barrier.',
  'Pollution and sun — daily environmental stress leaves skin looking dull and feeling rough.',
];

const faqs = [
  {
    q: 'What is Moist Sure Lotion used for?',
    a: 'Moist Sure Lotion is a body moisturiser used to hydrate and soften dry skin and to help prevent everyday dryness. It contains aloe vera, glycerine, Vitamin E and jojoba oil, and its lighter texture spreads easily across larger areas of the body.',
  },
  {
    q: 'What is Moist Sure Cream used for?',
    a: 'Moist Sure Cream is a 60 g moisturising cream with aloe vera, Vitamin E and jojoba oil. It is used on the face and body, particularly for combination skin, dry skin and dry patches like elbows, knees and hands.',
  },
  {
    q: 'What is the difference between Moist Sure Lotion and Moist Sure Cream?',
    a: 'The lotion is lighter and contains glycerine, which makes it ideal for full-body use. The cream is richer and comes in a jar, which makes it better for the face and very dry spots. Both share aloe vera, Vitamin E and jojoba oil.',
  },
  {
    q: 'Can I use Moist Sure Cream on my face?',
    a: 'Yes. Moist Sure Cream is made for the face and body and has a non-greasy finish. Use a pea-sized amount and avoid the eye area.',
  },
  {
    q: 'Is Moist Sure good for oily skin?',
    a: 'If your skin is oily all over, use only a small amount, or use the lighter lotion. For combination skin — oily T-zone, dry cheeks — the cream works well because it hydrates without a heavy finish. Oily skin still needs moisture; skipping it can leave skin feeling tight and uncomfortable.',
  },
  {
    q: 'Can I use Moist Sure every day?',
    a: 'Yes. Moist Sure Lotion is made for daily use, or as often as your skin needs it. Moisturising every day is one of the simplest habits for preventing dry skin.',
  },
  {
    q: 'Can I use Moist Sure in summer?',
    a: 'Yes. In humid weather, use a lighter layer of the lotion. Air conditioning and hard water dry out skin even in summer.',
  },
  {
    q: 'Does Moist Sure lighten or whiten skin?',
    a: 'No. Moist Sure is a moisturiser, not a skin-lightening product. Well-hydrated skin can look brighter and less dull, but it does not change your natural skin tone.',
  },
  {
    q: 'Where can I buy Moist Sure?',
    a: 'Both Moist Sure Lotion and Moist Sure Cream are available on Amazon India. Use the buttons on this page to go straight to the product listings.',
  },
];

export default function MoistSureBlogPage() {
  return (
    <article className={styles.blog}>
      <SchemaOrg schema={articleSchema} />

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Skincare · Moisturisers</span>
            <h1 className={styles.heroTitle}>
              Moist Sure Lotion &amp; Cream:{' '}<br />
              <em>Uses, Benefits &amp; How to Use</em>
            </h1>
            <p className={styles.heroSub}>
              Tight skin after a bath, flaky shins by evening, dull and ashy arms in
              winter? Here is what Moist Sure Lotion and Moist Sure Cream are used for,
              what aloe vera, Vitamin E and jojoba oil actually do, which format suits you,
              and how to apply it so the moisture lasts.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href={LOTION_AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy Moist Sure Lotion →
              </a>
              <a
                href={CREAM_AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCtaGhost}
              >
                Buy Moist Sure Cream →
              </a>
            </div>
          </div>

          {/* ── PRODUCT IMAGE CONTAINER ── */}
          <div className={styles.heroImageWrap}>
            <div className={styles.imageCard}>
              <Image
                src="/images/moist-sure-lotion.png"
                alt="Moist Sure Lotion bottle, moisturiser with aloe vera, glycerine, Vitamin E and jojoba oil, 100 mL"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className={styles.imageBadge}>Face &amp; Body · Non-Greasy</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ───── QUICK ANSWER ───── */}
        <div className={styles.quickAnswer}>
          <span className={styles.quickAnswerLabel}>Quick answer</span>
          <p>
            Moist Sure is a moisturiser used to hydrate and soften dry skin and to help
            prevent everyday dryness. <strong>Moist Sure Lotion</strong> is a lighter body
            lotion with aloe vera, glycerine, Vitamin E and jojoba oil, suited to large
            areas like the arms, legs and back. <strong>Moist Sure Cream</strong> is a
            richer 60 g cream with aloe vera, Vitamin E and jojoba oil, suited to the face
            and to dry patches on elbows, knees and hands. Both absorb without a heavy,
            greasy finish.
          </p>
        </div>

        {/* ───── WHAT IS MOIST SURE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Is Moist Sure?</h2>
          <p>
            Moist Sure is a moisturiser range marketed by Tablets (India) Limited and
            featured by Lucid Pharmatech. It comes in two textures:{' '}
            <Link href={LOTION_PRODUCT_HREF} className={styles.inlineLink}>
              Moist Sure Lotion
            </Link>{' '}
            and{' '}
            <Link href={CREAM_PRODUCT_HREF} className={styles.inlineLink}>
              Moist Sure Cream
            </Link>
            .
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">Moist Sure Lotion</th>
                  <th scope="col">Moist Sure Cream</th>
                </tr>
              </thead>
              <tbody>
                {formats.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.lotion}</td>
                    <td>{row.cream}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The two are not stronger and weaker versions of each other. They do the same
            job in different textures — pick the one that matches the area of skin you are
            treating and how dry it is.
          </p>
        </section>

        {/* ───── INGREDIENTS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Ingredients, Explained Simply</h2>
          <p>
            A good moisturiser does three things: it <strong>draws water into the skin</strong>,
            it <strong>softens and smooths</strong> the surface, and it{' '}
            <strong>slows down water loss</strong>. Here is how each Moist Sure ingredient
            fits into that.
          </p>
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
            <strong>Put together:</strong> glycerine and aloe vera bring water in, jojoba
            oil and Vitamin E help keep it there. That combination is what makes a
            moisturiser feel good for hours rather than minutes.
          </p>
        </section>

        {/* ───── LOTION USES ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Moist Sure Lotion Uses</h2>
          <p>Moist Sure Lotion is the everyday, full-body option. Its most common uses:</p>
          <div className={styles.painGrid}>
            {lotionUses.map((u) => (
              <div key={u.title} className={styles.painCard}>
                <span className={styles.painEmoji} aria-hidden="true">{u.emoji}</span>
                <h3 className={styles.painProblem}>{u.title}</h3>
                <p className={styles.painSolution}>{u.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── CREAM USES ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Moist Sure Cream Uses</h2>
          <p>Moist Sure Cream is the richer option. Its most common uses:</p>
          <ul className={styles.audienceList}>
            {creamUses.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
          <p>
            If your T-zone is oily but your cheeks are dry, our guide to the{' '}
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.inlineLink}
            >
              best moisturiser for combination skin
            </Link>{' '}
            covers that situation in detail.
          </p>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            Moist Sure Lotion — 100 mL, pack of 2 · Moist Sure Cream — 60 g jar
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={LOTION_AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get Moist Sure Lotion on Amazon →
            </a>
            <a
              href={CREAM_AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Get Moist Sure Cream on Amazon →
            </a>
          </div>
        </div>

        {/* ───── LOTION OR CREAM ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Lotion or Cream — Which One Should You Choose?</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Your situation</th>
                  <th scope="col">Choose</th>
                </tr>
              </thead>
              <tbody>
                {chooser.map((row) => (
                  <tr key={row.situation}>
                    <td>{row.situation}</td>
                    <td>{row.pick}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Many people use both: the lotion on the body after bathing, and the cream on
            the face and rough patches.
          </p>
        </section>

        {/* ───── HOW TO USE ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>How to Use Moist Sure (the Right Way)</h2>
          <p className={styles.introText}>
            The biggest moisturising mistake is not the product — it is the timing.
            Moisturiser works best when it can hold on to water already on the skin.
          </p>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>1</span>
              <p>
                <strong>Cleanse gently</strong> with a mild face wash and lukewarm, not hot,
                water. If your cleanser leaves you tight, read our guide to a{' '}
                <Link
                  href="/blog/best-face-wash-daily-use-without-drying-skin-india"
                  className={styles.inlineLink}
                >
                  daily face wash that does not dry your skin
                </Link>
                .
              </p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>2</span>
              <p><strong>Pat, do not rub.</strong> Towel off so your skin is still slightly damp.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>3</span>
              <p><strong>Apply within 2–3 minutes</strong> of bathing, to help trap that water in.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>4</span>
              <p>
                <strong>Use the right amount:</strong> a pea-sized amount of cream for the
                face, about a coin-sized amount of lotion per arm or leg.
              </p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>5</span>
              <p><strong>Massage gently until absorbed</strong> — upward strokes on the face, long strokes on the limbs.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>6</span>
              <p>
                <strong>Morning? Finish with sunscreen.</strong> Moisturiser first, SPF last.
                Our{' '}
                <Link
                  href="/blog/best-sunscreen-oily-skin-india-spf-guide"
                  className={styles.inlineLink}
                >
                  SPF guide for Indian skin
                </Link>{' '}
                explains how much to use.
              </p>
            </div>
          </div>
          <p className={styles.disclaimer} style={{ marginTop: 20 }}>
            Use daily, or as often as needed. Always follow the directions on the pack.
          </p>
        </section>

        {/* ───── WHY INDIAN SKIN GETS DRY ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why Indian Skin Gets So Dry (Even in a Humid Country)
          </h2>
          <p>
            India has humid coastal summers, but dry skin is still one of the most common
            skin complaints here. The usual causes:
          </p>
          <ul className={styles.bulletList}>
            {drynessCauses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p>
            A moisturiser is the simplest daily fix for all of these, which is why
            dermatologists usually recommend moisturising at least once a day, every day —
            not only when skin already feels dry.
          </p>
        </section>

        {/* ───── VS CALAMINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Moist Sure vs Calamine Lotion — Can You Use Both?</h2>
          <p>
            Yes, but they do different jobs. A calamine lotion such as{' '}
            <Link href={productHref('calafine-calamine-lotion')} className={styles.inlineLink}>
              Calafine
            </Link>{' '}
            is used to soothe itchy, irritated or sun-exposed skin. A moisturiser like Moist
            Sure is used to hydrate and prevent dryness. If you use both, let the calamine
            lotion dry fully first, then moisturise the surrounding skin.
          </p>
          <p>
            We explain the difference in detail in{' '}
            <Link
              href="/blog/calamine-lotion-vs-moisturizer-difference-india-guide"
              className={styles.inlineLink}
            >
              calamine lotion vs moisturiser
            </Link>
            .
          </p>
        </section>

        {/* ───── WINTER ROUTINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>A Simple Winter Routine With Moist Sure</h2>
          <div className={styles.routineGrid}>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Morning</span>
              <ol>
                <li>Gentle face wash, lukewarm water</li>
                <li>Moist Sure Cream on the face</li>
                <li>Sunscreen on the face and exposed skin</li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>After bath</span>
              <ol>
                <li>Pat dry, leaving skin slightly damp</li>
                <li>Moist Sure Lotion all over the body</li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Night</span>
              <ol>
                <li>Cleanse the face</li>
                <li>Moist Sure Cream on the face</li>
                <li>A little extra on elbows, knees, heels and hands</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ───── SAFETY ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Safety and Who Should Be Careful</h2>
          <p>
            Moist Sure is a cosmetic moisturiser, and most people use moisturisers like
            this without problems. Still, a few sensible precautions:
          </p>
          <div className={styles.cautionBox}>
            <h3>Before and during use</h3>
            <ul>
              <li>
                <strong>Patch test first</strong> on the inner forearm and wait 24 hours,
                especially if you have sensitive skin or known allergies.
              </li>
              <li>Avoid the eyes. If it gets into the eyes, rinse with water.</li>
              <li>Do not apply on open wounds, burns or infected skin.</li>
              <li>
                Stop using it if you notice redness, burning, itching or a rash, and consult a
                doctor if it does not settle.
              </li>
              <li>
                See a dermatologist if dryness is severe, cracked or bleeding, or comes with
                persistent itching or thick scaly patches — conditions like eczema or
                psoriasis need proper diagnosis.
              </li>
              <li>For babies and young children, check with a paediatrician first.</li>
            </ul>
          </div>
        </section>

        <RelatedProduct slug="moist-sure-lotion" />

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
          <h2>Where to Buy Moist Sure</h2>
          <p>
            Choose the <strong>lotion</strong> for easy all-over body moisturising and the{' '}
            <strong>cream</strong> for your face, combination skin and rough patches. Both
            are sold on Amazon India. You can also explore{' '}
            <Link href={LOTION_PRODUCT_HREF} className={styles.inlineLink}>
              Moist Sure Lotion
            </Link>{' '}
            and{' '}
            <Link href={CREAM_PRODUCT_HREF} className={styles.inlineLink}>
              Moist Sure Cream
            </Link>{' '}
            on our product pages.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={LOTION_AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop Moist Sure Lotion →
            </a>
            <a
              href={CREAM_AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Shop Moist Sure Cream →
            </a>
          </div>
          <p className={styles.bottomNote}>Lotion 100 mL · Pack of 2 · Cream 60 g · Sold on Amazon India</p>
        </section>

        <p className={styles.disclaimer}>
          This article is for general information and is not medical advice. For persistent
          skin problems, consult a dermatologist. Always read the label and follow the
          directions on the pack.
        </p>

      </div>
    </article>
  );
}