import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './winter-skincare-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';
import SchemaOrg from '@/components/SchemaOrg';
import { productHref } from '@/data/products';

const PAGE_URL =
  'https://www.lucidllp.com/blog/winter-skincare-routine-india-dry-skin';
const PAGE_TITLE = 'Winter Skincare Routine for India: Fix Dry, Flaky Skin';
const PAGE_DESCRIPTION =
  'A simple winter skincare routine for Indian skin: why skin gets dry in winter, morning and night steps, oily skin in winter, sunscreen in winter, and mistakes to avoid.';

const LOTION_HREF = productHref('moist-sure-lotion');
const CREAM_HREF = productHref('moist-sure-cream');
const FRESHOLITE_HREF = productHref('fresholite-vitamin-c-face-wash');
const SUNSCREEN_HREF = productHref('freshotil-sunguard-50');

const LOTION_AMAZON = 'https://amzn.in/d/02RlwKAg';
const CREAM_AMAZON = 'https://amzn.in/d/0btC4bWY';
const SUNSCREEN_AMAZON = 'https://amzn.in/d/04MfDy1G';

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | Lucid Pharmatech LLP" template,
  // so the brand is not appended twice.
  title: { absolute: `${PAGE_TITLE} | Lucid Pharmatech` },
  description: PAGE_DESCRIPTION,
  keywords: [
    'winter skincare routine',
    'winter skin care tips India',
    'dry skin in winter',
    'how to take care of dry skin in winter',
    'best body lotion for winter',
    'winter skincare for oily skin',
    'sunscreen in winter',
    'itchy skin in winter',
    'winter face care routine',
    'moisturiser for winter India',
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
        alt: 'Moist Sure Lotion with aloe vera, glycerine, Vitamin E and jojoba oil for winter dry skin',
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
  headline: 'Winter Skincare Routine for India: Fix Dry, Flaky Skin',
  description: PAGE_DESCRIPTION,
  image: 'https://www.lucidllp.com/images/moist-sure-lotion.png',
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  datePublished: '2026-10-06',
  dateModified: '2026-10-06',
  author: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  publisher: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  about: [
    { '@type': 'Product', name: 'Moist Sure Lotion' },
    { '@type': 'Product', name: 'Moist Sure Cream' },
    { '@type': 'Product', name: 'Freshotil Sunguard-50 Lotion' },
  ],
};

const causes = [
  {
    emoji: '🌬️',
    title: 'Cold, dry air',
    body: 'Winter air holds less moisture, so water evaporates from your skin faster. This is the main reason skin feels tight and flaky from November to February.',
  },
  {
    emoji: '🔥',
    title: 'Room heaters and blowers',
    body: 'Heaters warm the air but dry it out further. Long hours next to a heater or blower can leave skin rough and itchy.',
  },
  {
    emoji: '🚿',
    title: 'Hot baths',
    body: 'A long, very hot bath feels good in winter, but hot water dissolves the natural oils that protect your skin barrier.',
  },
  {
    emoji: '🧼',
    title: 'Harsh soaps',
    body: 'High-foaming bathing bars and strong face washes strip skin that is already low on oil and moisture.',
  },
  {
    emoji: '🌫️',
    title: 'Pollution and smog',
    body: 'Many north Indian cities see heavy winter smog. Dust and pollutants settle on skin and add to dullness and irritation.',
  },
  {
    emoji: '💧',
    title: 'Drinking less water',
    body: 'People naturally feel less thirsty in cold weather. Staying hydrated supports overall health, though moisturiser does more for dry skin directly.',
  },
];

const routineSteps = [
  {
    name: 'Cleanse gently',
    body: 'Use a mild face wash with lukewarm water, not hot. In winter, many people do well washing the face with a cleanser once a day and splashing with plain water in the morning. Fresh O Lite is formulated to cleanse without over-drying, and suits oily and combination skin through the year.',
  },
  {
    name: 'Moisturise while skin is still damp',
    body: 'This is the single most useful winter habit. Pat skin dry, leaving it slightly damp, and apply moisturiser within two to three minutes so it can hold on to that water.',
  },
  {
    name: 'Use the right texture for each area',
    body: 'A spreadable lotion is easier for the arms, legs and back. A richer cream works better on the face and on dry patches like elbows, knees, heels and hands.',
  },
  {
    name: 'Finish mornings with sunscreen',
    body: 'Winter sun feels gentle, but UV rays are still there — UVA in particular is present year-round and passes through clouds and glass. Sunscreen remains the last step of every morning routine.',
  },
];

const oilyWinter = [
  'Do not switch to a harsh, stripping face wash — tight, dry skin can still look shiny',
  'Use a light, non-greasy moisturiser in a small amount, focused where you feel dry',
  'Keep your sunscreen lightweight so the routine does not feel heavy',
  'If you use acne or brightening actives, moisturise more — winter makes them feel stronger',
];

const mistakes = [
  'Very hot, long baths — keep water lukewarm and baths short',
  'Skipping moisturiser on oily skin because "it is already oily"',
  'Applying moisturiser only when skin already feels dry',
  'Stopping sunscreen in winter because the sun feels weak',
  'Scrubbing dry, flaky skin hard — it irritates more than it helps',
  'Sitting very close to a heater for hours',
  'Licking dry lips — saliva evaporates and leaves them drier',
];

const faqs = [
  {
    q: 'What is the best skincare routine for winter in India?',
    a: 'Keep it simple: a gentle cleanser with lukewarm water, a moisturiser applied on slightly damp skin, and sunscreen every morning. At night, cleanse and moisturise again, with a richer cream on dry patches. For the body, apply lotion right after your bath.',
  },
  {
    q: 'Why does my skin get so dry in winter?',
    a: 'Cold air holds less moisture, heaters dry the air further, and hot baths and harsh soaps strip the skin’s natural oils. Together, these weaken the skin barrier so water escapes faster, leaving skin tight, flaky and sometimes itchy.',
  },
  {
    q: 'Do I need sunscreen in winter?',
    a: 'Yes. UV rays are present all year, and UVA passes through clouds and window glass. Winter sun can still cause tan and long-term skin damage, so sunscreen stays part of your morning routine.',
  },
  {
    q: 'Should I use a lotion or a cream in winter?',
    a: 'Many people use both. A lotion spreads easily over large areas like arms and legs. A cream is richer and better for the face and very dry patches such as elbows, knees and heels.',
  },
  {
    q: 'How do I take care of oily skin in winter?',
    a: 'Do not over-wash or use harsh cleansers. Use a light, non-greasy moisturiser in a small amount and a lightweight sunscreen. Oily skin can still be dehydrated in winter, especially if you use acne actives.',
  },
  {
    q: 'How often should I moisturise in winter?',
    a: 'At least twice a day for most people — after your morning bath or face wash and again at night. Reapply on hands after washing them, and on any patches that feel tight during the day.',
  },
  {
    q: 'Why does my skin itch more in winter?',
    a: 'Dry skin is one of the most common causes of winter itching. Regular moisturising and shorter, lukewarm baths usually help. If itching is severe, keeps you awake, or comes with a rash or thick scaly patches, see a doctor — it may be eczema or another condition that needs treatment.',
  },
  {
    q: 'Can I use body lotion on my face in winter?',
    a: 'It depends on the product. Some body lotions are fine on the face, but a product made for face and body, like Moist Sure Cream, is the safer choice. Always avoid the eye area.',
  },
];

export default function WinterSkincareBlogPage() {
  return (
    <article className={styles.blog}>
      <SchemaOrg schema={articleSchema} />

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Skincare · Winter Care</span>
            <h1 className={styles.heroTitle}>
              Winter Skincare Routine{' '}<br />
              <em>for Indian Skin</em>
            </h1>
            <p className={styles.heroSub}>
              Tight face after every wash, flaky shins, rough hands and itchy legs by
              December? Here is why winter dries out your skin, a simple morning and night
              routine that fixes it, how to handle oily skin in winter, and the habits that
              quietly make dryness worse.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href={LOTION_AMAZON}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy Moist Sure Lotion →
              </a>
              <a
                href={CREAM_AMAZON}
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
                alt="Moist Sure Lotion bottle with aloe vera, glycerine, Vitamin E and jojoba oil, 100 mL"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className={styles.imageBadge}>Face &amp; Body · Winter Care</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ───── QUICK ANSWER ───── */}
        <div className={styles.quickAnswer}>
          <span className={styles.quickAnswerLabel}>Quick answer</span>
          <p>
            A good winter skincare routine for India has four steps:{' '}
            <strong>cleanse gently</strong> with lukewarm water,{' '}
            <strong>moisturise on slightly damp skin</strong> within two to three minutes,
            use a <strong>richer cream on dry patches</strong> at night, and{' '}
            <strong>wear sunscreen every morning</strong> — UV rays do not go away in winter.
            Keep baths short and lukewarm, avoid harsh soaps, and moisturise at least twice a
            day.
          </p>
        </div>

        {/* ───── WHY ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Does Skin Get So Dry in Winter?</h2>
          <p>
            Your skin has a protective outer layer — the skin barrier — made of cells held
            together by natural oils. It keeps water in and irritants out. Winter attacks
            that barrier from several directions at once:
          </p>
          <div className={styles.painGrid}>
            {causes.map((c) => (
              <div key={c.title} className={styles.painCard}>
                <span className={styles.painEmoji} aria-hidden="true">{c.emoji}</span>
                <h3 className={styles.painProblem}>{c.title}</h3>
                <p className={styles.painSolution}>{c.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            When the barrier weakens, water escapes faster than your skin can replace it. The
            result is the familiar winter trio: tightness, flaking and itching.
          </p>
        </section>

        {/* ───── 4 RULES ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Four Rules of Winter Skincare</h2>
          {routineSteps.map((s, i) => (
            <div key={s.name} className={styles.benefitBlock}>
              <div className={styles.benefitNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{s.name}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ───── ROUTINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Winter Routine: Morning, Bath and Night</h2>
          <div className={styles.routineGrid}>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Morning</span>
              <ol>
                <li>Gentle face wash or a plain-water rinse, lukewarm</li>
                <li>Moist Sure Cream on the face, pea-sized amount</li>
                <li>Sunscreen on the face, neck and exposed skin</li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>After bath</span>
              <ol>
                <li>Short, lukewarm bath with a mild soap</li>
                <li>Pat dry, leaving skin slightly damp</li>
                <li>Moist Sure Lotion all over the body within 2–3 minutes</li>
              </ol>
            </div>
            <div className={styles.routineCard}>
              <span className={styles.routineTime}>Night</span>
              <ol>
                <li>Cleanse the face to remove sunscreen and pollution</li>
                <li>Moist Sure Cream on the face</li>
                <li>Extra cream on elbows, knees, heels and hands</li>
              </ol>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            Not sure which Moist Sure format suits which job? Our guide to{' '}
            <Link
              href="/blog/moist-sure-lotion-cream-uses-benefits-how-to-use"
              className={styles.inlineLink}
            >
              Moist Sure Lotion and Cream uses
            </Link>{' '}
            compares them side by side.
          </p>
        </section>

        {/* ───── PRODUCTS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What to Use: A Simple Winter Kit</h2>

          <h3 className={styles.subTitle}>For the body: Moist Sure Lotion</h3>
          <p>
            <Link href={LOTION_HREF} className={styles.inlineLink}>
              Moist Sure Lotion
            </Link>{' '}
            combines aloe vera for soothing hydration with glycerine and Vitamin E to help
            protect against dryness, and jojoba oil to help lock in moisture. Its lighter
            texture spreads easily over large areas — useful when you are moisturising your
            whole body every day. 100 mL, pack of 2.
          </p>

          <h3 className={styles.subTitle}>For the face and dry patches: Moist Sure Cream</h3>
          <p>
            <Link href={CREAM_HREF} className={styles.inlineLink}>
              Moist Sure Cream
            </Link>{' '}
            is a 60 g jar-format moisturiser with aloe vera, Vitamin E and jojoba oil. It
            absorbs without a greasy finish, which makes it workable on the face and on
            combination skin, as well as on rough elbows, knees and hands.
          </p>

          <h3 className={styles.subTitle}>For mornings: Freshotil Sunguard-50</h3>
          <p>
            <Link href={SUNSCREEN_HREF} className={styles.inlineLink}>
              Freshotil Sunguard-50
            </Link>{' '}
            is an SPF 50 lotion with UVA and UVB protection, in a lightweight, non-greasy
            texture that sits comfortably over moisturiser. 100 mL.
          </p>

          <h3 className={styles.subTitle}>For cleansing: Fresh O Lite</h3>
          <p>
            If your skin is oily or combination,{' '}
            <Link href={FRESHOLITE_HREF} className={styles.inlineLink}>
              Fresh O Lite Vitamin C Face Wash
            </Link>{' '}
            cleanses without over-drying. In winter, follow it with moisturiser every time.
          </p>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            Body lotion, face cream and daily SPF — the three essentials for winter.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={LOTION_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get Moist Sure Lotion →
            </a>
            <a
              href={CREAM_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Get Moist Sure Cream →
            </a>
            <a
              href={SUNSCREEN_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaGhost}
            >
              Get Freshotil Sunguard-50 →
            </a>
          </div>
        </div>

        {/* ───── SUNSCREEN ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Do You Need Sunscreen in Winter?</h2>
          <p>
            Yes. Winter sunlight feels mild because it is cooler, but heat and UV are not
            the same thing. UV rays are present all year, and UVA — the type most linked to
            tanning and long-term skin ageing — passes through clouds and window glass.
          </p>
          <ul className={styles.audienceList}>
            <li>Apply sunscreen as the last step of your morning routine, after moisturiser</li>
            <li>Use about two finger-lengths for the face and neck</li>
            <li>Reapply if you spend long periods outdoors, such as at a winter wedding or sports day</li>
            <li>
              Sit near a sunny window at work? See{' '}
              <Link href="/blog/why-sunscreen-important-indoors-india" className={styles.inlineLink}>
                why sunscreen matters even indoors
              </Link>
            </li>
          </ul>
          <p>
            For the correct layering order, read our guide to{' '}
            <Link
              href="/blog/moisturizer-with-spf-vs-sunscreen-oily-skin-india"
              className={styles.inlineLink}
            >
              moisturiser with SPF vs sunscreen
            </Link>
            .
          </p>
        </section>

        {/* ───── OILY WINTER ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Winter Skincare for Oily Skin</h2>
          <p>
            Oily skin can still be dehydrated in winter — shiny on the surface but tight
            underneath. Over-washing to remove the shine only makes this worse.
          </p>
          <ul className={styles.bulletList}>
            {oilyWinter.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p>
            Our guide to the{' '}
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.inlineLink}
            >
              best moisturiser for combination skin
            </Link>{' '}
            covers the oily T-zone, dry cheeks problem in more detail.
          </p>
        </section>

        {/* ───── HANDS LIPS FEET ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>Hands, Lips, Feet and Hair in Winter</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>1</span>
              <p><strong>Hands:</strong> reapply cream after every hand wash. Frequent washing and sanitiser dry hands fastest.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>2</span>
              <p><strong>Lips:</strong> use a simple lip balm and avoid licking your lips, which leaves them drier.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>3</span>
              <p><strong>Feet and heels:</strong> moisturise at night and wear cotton socks to keep the moisture in.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>4</span>
              <p>
                <strong>Hair and scalp:</strong> avoid very hot water on the hair. See our{' '}
                <Link
                  href="/blog/how-to-oil-hair-properly-how-long-overnight-india"
                  className={styles.inlineLink}
                >
                  guide to oiling hair properly
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ───── MISTAKES ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Winter Skincare Mistakes to Avoid</h2>
          <ul className={styles.bulletList}>
            {mistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        {/* ───── SAFETY ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>When Dry Skin Needs a Doctor</h2>
          <div className={styles.cautionBox}>
            <h3>See a doctor or dermatologist if</h3>
            <ul>
              <li>Skin is cracked, bleeding or painful</li>
              <li>Itching is severe or keeps you awake at night</li>
              <li>You have red, thick, scaly or weeping patches — possibly eczema or psoriasis</li>
              <li>Dryness does not improve after two weeks of regular moisturising</li>
              <li>A baby or young child has very dry, itchy skin</li>
            </ul>
          </div>
          <p>
            Patch test any new product on the inner forearm first, and stop use if you notice
            redness, burning or a rash.
          </p>
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
          <h2>Get Your Skin Ready for Winter</h2>
          <p>
            Lukewarm water, moisturiser on damp skin, a richer cream at night and sunscreen
            every morning — that is the whole routine. Explore{' '}
            <Link href={LOTION_HREF} className={styles.inlineLink}>
              Moist Sure Lotion
            </Link>
            ,{' '}
            <Link href={CREAM_HREF} className={styles.inlineLink}>
              Moist Sure Cream
            </Link>{' '}
            and{' '}
            <Link href={SUNSCREEN_HREF} className={styles.inlineLink}>
              Freshotil Sunguard-50
            </Link>{' '}
            on our product pages.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={LOTION_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop Moist Sure Lotion →
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
          <p className={styles.bottomNote}>Lotion 100 mL · Pack of 2 · Cream 60 g · Sold on Amazon India</p>
        </section>

        <p className={styles.disclaimer}>
          This article is for general information and is not medical advice. For severe,
          cracked or persistently itchy skin, consult a dermatologist. Always read the label
          and follow the directions on the pack.
        </p>

      </div>
    </article>
  );
}