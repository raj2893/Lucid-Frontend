import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './calafine-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';
import SchemaOrg from '@/components/SchemaOrg';
import { productHref } from '@/data/products';

const PAGE_URL =
  'https://www.lucidllp.com/blog/calafine-lotion-sunburn-relief-acne-care-skin-nourishment';
const PAGE_TITLE = 'Calafine Lotion: Uses, Benefits & How to Use It';
const PAGE_DESCRIPTION =
  'Learn what Calafine Lotion is, its uses, key ingredients, benefits and how to use it. Explore Calafine calamine lotion from Lucid Pharmatech.';
const CALAFINE_PRODUCT_HREF = productHref('calafine-calamine-lotion');

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | Lucid Pharmatech LLP" template,
  // so the brand is not appended twice.
  title: { absolute: `${PAGE_TITLE} | Lucid Pharmatech` },
  description: PAGE_DESCRIPTION,
  keywords: [
    'Calafine lotion',
    'Calafine',
    'Calafine uses',
    'Calafine lotion uses',
    'Calafine calamine lotion',
    'calamine lotion with zinc oxide and aloe vera',
    'Lucid Pharmatech Calafine',
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
        url: '/images/calafine-lotion.png',
        width: 1200,
        height: 630,
        alt: 'Calafine calamine lotion, 100 ml bottles with carton',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/calafine-lotion.png'],
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0bBSOIFo';

// BlogPosting schema with confirmed fields only. datePublished comes from
// the blog index entry for this post. No ratings, reviews or credentials.
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Calafine Lotion: Uses, Benefits & How to Use',
  description: PAGE_DESCRIPTION,
  image: 'https://www.lucidllp.com/images/calafine-lotion.png',
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  datePublished: '2026-03-09',
  dateModified: '2026-09-18',
  author: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  publisher: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  about: { '@type': 'Product', name: 'Calafine Calamine Lotion' },
};

const uses = [
  {
    emoji: '🌅',
    title: 'Sun-exposed skin',
    body: 'Calamine lotions have long been used to soothe skin that feels hot, red or uncomfortable after time in the sun. Calafine is suited to sun-exposed skin on the face and body.',
  },
  {
    emoji: '🌿',
    title: 'Itchy or irritated skin',
    body: 'Calamine and zinc oxide are traditionally used to calm minor itching and irritation, such as prickly heat or insect bites. Apply Calafine to the affected areas as needed.',
  },
  {
    emoji: '😤',
    title: 'Oily or acne-prone areas',
    body: 'Calamine and zinc oxide have mild astringent properties, which is why calamine lotions are often used on oily or breakout-prone skin. Calafine is not an acne treatment.',
  },
  {
    emoji: '💧',
    title: 'A less drying calamine',
    body: 'Light liquid paraffin and aloe vera are added so Calafine soothes without the chalky dryness typical of older calamine formulations.',
  },
];

const ingredients = [
  {
    name: 'Calamine',
    body: 'The classic pink ingredient in calamine lotion, a mix of zinc oxide and a small amount of iron oxide. It is traditionally used for its cooling, soothing and mild anti-itch effect on the skin.',
  },
  {
    name: 'Zinc Oxide',
    body: 'A widely used skincare ingredient with mild astringent and skin-protectant properties. Together with calamine, it forms the soothing base of the lotion.',
  },
  {
    name: 'Aloe Vera',
    body: 'A familiar plant-derived skincare ingredient, commonly included for its soothing, comfortable feel on the skin.',
  },
  {
    name: 'Light Liquid Paraffin',
    body: 'An emollient that helps soften the skin. In Calafine it helps reduce the dry, chalky finish that traditional calamine lotion can leave behind.',
  },
];

const faqs = [
  {
    q: 'What is Calafine Lotion used for?',
    a: 'Calafine Lotion is a calamine lotion used to soothe sun-exposed, itchy or irritated skin on the face and body. It is suitable for all skin types.',
  },
  {
    q: 'Is Calafine a calamine lotion?',
    a: 'Yes. Calafine Calamine Lotion is calamine-based. It combines calamine and zinc oxide with aloe vera and light liquid paraffin.',
  },
  {
    q: 'How do you use Calafine Lotion?',
    a: 'Apply a thin, even layer to clean, dry skin, on the affected areas of the face or body, as needed. Always follow the directions on the pack.',
  },
  {
    q: 'What are the key ingredients in Calafine Lotion?',
    a: 'Calafine contains calamine, zinc oxide, aloe vera and light liquid paraffin.',
  },
  {
    q: 'Can Calafine Lotion be used on the face?',
    a: 'Yes. Calafine is made for both face and body. Avoid contact with the eyes.',
  },
  {
    q: 'Can I use Calafine on acne-prone skin?',
    a: 'Calafine is suitable for all skin types, and calamine lotions are often used on oily or breakout-prone skin for their mild astringent, soothing effect. It is not an acne treatment — for persistent or severe acne, consult a dermatologist.',
  },
];

export default function CalafineBlogPage() {
  return (
    <article className={styles.blog}>
      <SchemaOrg schema={articleSchema} />

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Skincare · Calamine Lotion</span>
            <h1 className={styles.heroTitle}>
              Calafine Lotion:{' '}<br />
              <em>Uses, Benefits &amp; How to Use</em>
            </h1>
            <p className={styles.heroSub}>
              Calafine is a calamine lotion from Lucid Pharmatech, made with calamine,
              zinc oxide, aloe vera and light liquid paraffin. Here is what it is, what
              it is used for, and how to apply it on the face and body.
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
                alt="Calafine calamine lotion, 100 ml bottles with carton"
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

        {/* ───── WHAT IS CALAFINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Is Calafine Lotion?</h2>
          <p>
            <Link href={CALAFINE_PRODUCT_HREF} className={styles.inlineLink}>
              Calafine Lotion by Lucid Pharmatech
            </Link>
            , sold as Calafine Calamine Lotion, is a calamine-based skin lotion. It
            pairs classic calamine and zinc oxide with aloe vera and light liquid
            paraffin, so it soothes without the chalky dryness typical of older
            calamine formulations.
          </p>
          <p>
            It is made for use on both the <strong>face and body</strong>, suits{' '}
            <strong>all skin types</strong>, and comes in 100 ml bottles, sold as a pack
            of 2.
          </p>
          <p>
            If you want the broader background on calamine itself — what it is and how
            it has traditionally been used — our{' '}
            <Link
              href="/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026"
              className={styles.inlineLink}
            >
              complete guide to calamine lotion uses and benefits
            </Link>{' '}
            covers it in detail. This page focuses on Calafine specifically.
          </p>
        </section>

        {/* ───── USES ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Calafine Lotion Uses</h2>
          <div className={styles.painGrid}>
            {uses.map((u) => (
              <div key={u.title} className={styles.painCard}>
                <span className={styles.painEmoji} aria-hidden="true">{u.emoji}</span>
                <h3 className={styles.painProblem}>{u.title}</h3>
                <p className={styles.painSolution}>{u.body}</p>
              </div>
            ))}
          </div>
          <p className={styles.usesNote}>
            For step-by-step help with specific situations, see{' '}
            <Link
              href="/blog/calamine-lotion-sunburn-relief-guide-india"
              className={styles.inlineLink}
            >
              how to use calamine lotion for sunburn relief
            </Link>{' '}
            and our guide to{' '}
            <Link
              href="/blog/best-lotion-skin-allergies-rashes-india-calafine"
              className={styles.inlineLink}
            >
              choosing a lotion for skin allergies and rashes
            </Link>
            .
          </p>
          <p>
            Calafine is meant for everyday skin comfort, not as a treatment for skin
            conditions. For severe or blistering sunburn, spreading rashes, signs of
            infection, or persistent acne, consult a doctor or dermatologist.
          </p>
        </section>

        {/* ───── KEY INGREDIENTS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Ingredients in Calafine Lotion</h2>
          {ingredients.map((ing, i) => (
            <div key={ing.name} className={styles.benefitBlock}>
              <div className={styles.benefitNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{ing.name}</h3>
                <p>{ing.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ───── BENEFITS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Benefits of Calafine Lotion</h2>
          <ul className={styles.audienceList}>
            <li>A classic calamine and zinc oxide base for soothing sun-exposed, itchy or irritated skin</li>
            <li>Aloe vera and light liquid paraffin to reduce the chalky dryness of traditional calamine</li>
            <li>One lotion for both face and body</li>
            <li>Suitable for all skin types</li>
          </ul>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            Calafine Lotion — 100 ml, pack of 2, for face and body.
          </p>
          
          <a  href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Get CALAFINE Lotion on Amazon — Pack of 2 →
          </a>
        </div>

        {/* ───── HOW TO USE ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>How to Use Calafine Lotion</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>1</span>
              <p><strong>Start with clean, dry skin</strong> before applying.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>2</span>
              <p><strong>Apply a thin, even layer</strong> to the affected areas of the face or body.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>3</span>
              <p><strong>Reapply as needed</strong> when the skin feels uncomfortable again.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>4</span>
              <p><strong>Follow the pack directions</strong>, avoid the eyes, and stop use if irritation worsens.</p>
            </div>
          </div>
        </section>

        {/* ───── WHO CAN USE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Can Use Calafine Lotion?</h2>
          <ul className={styles.audienceList}>
            <li>People whose skin feels hot or uncomfortable after sun exposure</li>
            <li>Anyone dealing with minor itching or irritation on the face or body</li>
            <li>People who find traditional calamine lotion too drying or chalky</li>
            <li>Men and women with any skin type</li>
          </ul>
          <p>
            Calafine is made for <strong>all skin types</strong> and for use on both the
            face and body. For children, during pregnancy, or on broken or badly damaged
            skin, check the pack directions and ask a doctor or pharmacist first.
          </p>
        </section>

        {/* ───── VS MOISTURISER ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Calafine Lotion vs. a Regular Moisturiser</h2>
          <p>
            A regular moisturiser is built for everyday hydration. A calamine lotion is
            traditionally used to soothe skin that is sun-exposed, itchy or irritated.
            Calafine sits on the calamine side, with aloe vera and light liquid paraffin
            added so it feels less drying than traditional calamine.
          </p>
          <p>
            The two do different jobs, so one is not a direct substitute for the other.
            Our guide to{' '}
            <Link
              href="/blog/calamine-lotion-vs-moisturizer-difference-india-guide"
              className={styles.inlineLink}
            >
              calamine lotion vs moisturiser
            </Link>{' '}
            explains when to reach for each.
          </p>
        </section>

        <RelatedProduct slug="calafine-calamine-lotion" />

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
          <h2>Where to Buy Calafine Lotion</h2>
          <p>
            Calafine Calamine Lotion comes in 100 ml bottles, sold as a pack of 2 on
            Amazon India. You can also{' '}
            <Link href={CALAFINE_PRODUCT_HREF} className={styles.inlineLink}>
              explore Calafine Lotion
            </Link>{' '}
            on our product page for its full composition and directions.
          </p>
          
          <a  href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Shop CALAFINE Lotion on Amazon →
          </a>
          <p className={styles.bottomNote}>100 ml · Pack of 2 · Sold on Amazon India</p>
        </section>

      </div>
    </article>
  );
}