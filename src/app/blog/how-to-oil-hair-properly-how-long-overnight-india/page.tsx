import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './hair-oiling-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';
import SchemaOrg from '@/components/SchemaOrg';
import { productHref } from '@/data/products';

const PAGE_URL =
  'https://www.lucidllp.com/blog/how-to-oil-hair-properly-how-long-overnight-india';
const PAGE_TITLE = 'How to Oil Hair Properly: How Long, How Often & Overnight?';
const PAGE_DESCRIPTION =
  'How long to keep oil in your hair, whether overnight oiling is good, how often to oil, and how to wash it out. A step-by-step hair oiling guide for Indian hair.';

const HAIROSHINE_HREF = productHref('hairoshine-advance-hair-oil');
const HAIROSHINE_AMAZON = 'https://amzn.in/d/04hhFpUS';

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | Lucid Pharmatech LLP" template,
  // so the brand is not appended twice.
  title: { absolute: `${PAGE_TITLE} | Lucid Pharmatech` },
  description: PAGE_DESCRIPTION,
  keywords: [
    'how to oil hair properly',
    'how long to keep oil in hair',
    'is it good to oil hair overnight',
    'how often should I oil my hair',
    'oiling hair before or after wash',
    'can I oil my hair daily',
    'hair oiling mistakes',
    'how to wash oil out of hair',
    'scalp massage with oil',
    'hair oiling benefits',
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
        url: '/images/hairoshine-biotin-oil.png',
        width: 1200,
        height: 630,
        alt: 'HairOShine Advance Hair Oil with biotin, 100 ml bottle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/hairoshine-biotin-oil.png'],
  },
};

// BlogPosting schema with confirmed fields only. No ratings, reviews or credentials.
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Oil Hair Properly: How Long, How Often & Overnight?',
  description: PAGE_DESCRIPTION,
  image: 'https://www.lucidllp.com/images/hairoshine-biotin-oil.png',
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  datePublished: '2026-10-05',
  dateModified: '2026-10-05',
  author: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  publisher: { '@type': 'Organization', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidllp.com' },
  about: [{ '@type': 'Product', name: 'HairOShine Advance Hair Oil' }],
};

const benefits = [
  {
    name: 'Protection before washing',
    body: 'Research, mostly on coconut oil, suggests that oiling hair before shampooing can reduce the protein loss and swelling that happen when hair gets wet and is washed. That is one reason pre-wash oiling is such a long-standing Indian habit.',
  },
  {
    name: 'Softer, smoother, less frizzy lengths',
    body: 'Oil coats the hair surface, which helps hair feel softer and look smoother, and makes dry or frizzy lengths easier to manage.',
  },
  {
    name: 'Less friction and tangling',
    body: 'Lubricated strands slide past each other more easily, so there is less pulling when you detangle — and less breakage from combing.',
  },
  {
    name: 'A relaxing scalp massage',
    body: 'A gentle massage is a pleasant routine in itself. It also helps you spread the oil evenly and notice the condition of your scalp.',
  },
];

const howLong = [
  {
    situation: 'Oily scalp or dandruff-prone',
    time: '30 minutes to 1 hour, then wash',
    note: 'Avoid overnight oiling on the scalp',
  },
  {
    situation: 'Normal scalp, normal hair',
    time: '1–2 hours, or a few hours before washing',
    note: 'Overnight is fine if your scalp tolerates it',
  },
  {
    situation: 'Dry scalp, dry or frizzy hair',
    time: 'A few hours to overnight',
    note: 'Focus extra oil on the lengths and ends',
  },
  {
    situation: 'Fine, thin hair',
    time: '30 minutes to 1 hour',
    note: 'Use only a little oil so hair does not go flat',
  },
];

const howOften = [
  {
    emoji: '💧',
    title: 'Oily scalp',
    body: 'Once a week, focused on the lengths more than the scalp.',
  },
  {
    emoji: '⚖️',
    title: 'Normal hair',
    body: 'One to two times a week, before your hair wash day.',
  },
  {
    emoji: '🍂',
    title: 'Dry or frizzy hair',
    body: 'Two to three times a week, with a few drops on the ends in between if needed.',
  },
  {
    emoji: '❄️',
    title: 'Winter',
    body: 'Cold, dry air and hot showers dry out hair, so you may want to oil a little more often.',
  },
];

const mistakes = [
  'Using far too much oil — then needing two or three harsh shampoos to remove it',
  'Rubbing the scalp hard with fingernails instead of gentle fingertip massage',
  'Tying oiled hair into a very tight braid or bun overnight, which pulls on the roots',
  'Heating oil until it is hot — warm is enough; test it on your wrist first',
  'Oiling an itchy, flaky scalp every day, which can make dandruff worse for some people',
  'Leaving oil in for days without washing, which attracts dust and builds up',
  'Expecting oil to cure hair fall caused by hormones, illness or nutritional deficiency',
];

const faqs = [
  {
    q: 'How long should I keep oil in my hair?',
    a: 'For most people, 30 minutes to a few hours before washing is enough. Dry, frizzy hair can benefit from longer, including overnight. If your scalp is oily or prone to dandruff, keep it shorter and wash the same day.',
  },
  {
    q: 'Is it good to oil hair overnight?',
    a: 'It can be, if your scalp tolerates it — many people with dry hair like overnight oiling. It is not necessary for everyone, and it is not a good idea if you have an oily or flaky scalp. Use an old pillowcase or a towel to protect your bedding.',
  },
  {
    q: 'How often should I oil my hair?',
    a: 'Once or twice a week suits most people, before a hair wash. Very dry hair can be oiled two to three times a week; oily scalps do better with once a week.',
  },
  {
    q: 'Should I oil my hair before or after washing?',
    a: 'Traditional oiling is done before washing, as a pre-wash treatment. A few drops on the ends of clean, towel-dried hair can also help control frizz.',
  },
  {
    q: 'Can I oil my hair every day?',
    a: 'Daily oiling of the scalp is usually unnecessary and can lead to build-up, especially on oily or dandruff-prone scalps. A small amount on dry ends daily is fine.',
  },
  {
    q: 'Does oiling stop hair fall?',
    a: 'Oiling helps reduce breakage from dryness, tangling and rough handling, which can mean fewer broken hairs on your comb. It does not treat hair loss caused by genetics, hormones, thyroid problems, iron deficiency or illness. For sudden or patchy hair loss, see a doctor or dermatologist.',
  },
  {
    q: 'Is oiling good if I have dandruff?',
    a: 'Be careful. Oil on the scalp can make dandruff worse for some people. If you have dandruff, use an anti-dandruff shampoo as advised, and oil mainly the lengths of your hair rather than the scalp.',
  },
  {
    q: 'How do I wash oil out of my hair properly?',
    a: 'Apply shampoo to the oiled scalp before adding much water, work it in, then rinse. A second, lighter shampoo usually removes the rest. Using a modest amount of oil to begin with makes washing much easier.',
  },
  {
    q: 'How do I use HairOShine Advance Hair Oil?',
    a: 'Apply it in small drops directly onto the scalp and massage gently to distribute it. Its non-greasy base makes it suitable for regular use on fine or thick hair. Always follow the directions on the pack.',
  },
];

export default function HairOilingBlogPage() {
  return (
    <article className={styles.blog}>
      <SchemaOrg schema={articleSchema} />

      {/* ───── HERO ───── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Hair Care · How-To</span>
            <h1 className={styles.heroTitle}>
              How to Oil Your Hair Properly:{' '}<br />
              <em>How Long, How Often &amp; Overnight?</em>
            </h1>
            <p className={styles.heroSub}>
              Hair oiling is one of the oldest Indian hair rituals — and one of the most
              misunderstood. Here is how much oil to use, how long to leave it in, whether
              overnight oiling helps or hurts, how often to oil for your hair type, and how to
              wash it out without stripping your hair.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href={HAIROSHINE_AMAZON}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy HairOShine on Amazon →
              </a>
            </div>
          </div>

          {/* ── PRODUCT IMAGE CONTAINER ── */}
          <div className={styles.heroImageWrap}>
            <div className={styles.imageCard}>
              <Image
                src="/images/hairoshine-biotin-oil.png"
                alt="HairOShine Advance Hair Oil with biotin, basil, brahmi, bhringraj and hibiscus, 100 ml bottle"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className={styles.imageBadge}>Biotin · Non-Greasy Base</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ───── QUICK ANSWER ───── */}
        <div className={styles.quickAnswer}>
          <span className={styles.quickAnswerLabel}>Quick answer</span>
          <p>
            Apply a small amount of oil to the scalp and lengths, massage gently with your
            fingertips, and leave it in for <strong>30 minutes to a few hours</strong> before
            washing. <strong>Overnight</strong> oiling is fine for dry hair if your scalp
            tolerates it, but skip it if your scalp is oily or flaky. Most people do well
            oiling <strong>once or twice a week</strong>. Wash it out by applying shampoo to
            the oiled hair before adding much water, then rinse and repeat lightly if needed.
          </p>
        </div>

        {/* ───── BENEFITS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Hair Oiling Actually Does</h2>
          <p>
            Hair oiling is not magic, but it is genuinely useful when done well. These are
            the realistic benefits:
          </p>
          {benefits.map((b, i) => (
            <div key={b.name} className={styles.benefitBlock}>
              <div className={styles.benefitNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{b.name}</h3>
                <p>{b.body}</p>
              </div>
            </div>
          ))}
          <p>
            What oiling does <strong>not</strong> do: it does not cure hair loss caused by
            genetics, hormones, thyroid problems, iron deficiency or illness. For those, a
            doctor or dermatologist is the right first step.
          </p>
        </section>

        {/* ───── STEP BY STEP ───── */}
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>How to Oil Your Hair: Step by Step</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>1</span>
              <p><strong>Start with dry, detangled hair.</strong> Comb gently first so you do not pull knots later.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>2</span>
              <p><strong>Warm the oil slightly (optional).</strong> Only lukewarm — always test on your wrist first.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>3</span>
              <p><strong>Part your hair into sections</strong> and apply small drops of oil directly along each parting on the scalp.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>4</span>
              <p><strong>Massage with fingertips, not nails,</strong> in small circles for 3–5 minutes. Gentle pressure is enough.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>5</span>
              <p><strong>Run what is left on your palms through the lengths</strong>, focusing on dry ends.</p>
            </div>
            <div className={styles.tipCard}>
              <span className={styles.tipNum}>6</span>
              <p><strong>Tie hair loosely</strong> — a loose braid or bun, never tight — and leave it for the time that suits your hair type.</p>
            </div>
          </div>
          <p className={styles.introText} style={{ marginTop: 20 }}>
            <strong>How much oil?</strong> For shoulder-length hair, about one to two
            teaspoons is usually plenty. Long or very thick hair may need a little more. If
            you need two or three shampoos to remove it, you used too much.
          </p>
        </section>

        {/* ───── HOW LONG ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How Long Should You Keep Oil in Your Hair?</h2>
          <p>
            There is no single right number, and leaving oil in longer does not mean
            proportionally better results. Use your scalp type as the guide:
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Your scalp / hair</th>
                  <th scope="col">How long</th>
                  <th scope="col">Note</th>
                </tr>
              </thead>
              <tbody>
                {howLong.map((row) => (
                  <tr key={row.situation}>
                    <td>{row.situation}</td>
                    <td>{row.time}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ───── OVERNIGHT ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Is Oiling Hair Overnight Good or Bad?</h2>
          <p>
            Overnight oiling is a family tradition in many Indian homes, and for{' '}
            <strong>dry, frizzy or coarse hair</strong> it can be a comfortable, convenient
            habit. But it is not automatically better than a few hours, and it does not suit
            everyone.
          </p>
          <h3 className={styles.subTitle}>Overnight works well if</h3>
          <ul className={styles.audienceList}>
            <li>Your hair is dry, coarse or frizzy</li>
            <li>Your scalp is not oily and does not flake or itch</li>
            <li>You use a modest amount and wash it out the next morning</li>
          </ul>
          <h3 className={styles.subTitle}>Skip overnight oiling if</h3>
          <ul className={styles.bulletList}>
            <li>Your scalp is oily, or you get dandruff, itching or scalp pimples</li>
            <li>Your hair is very fine and goes flat easily</li>
            <li>You tend to tie your hair tightly at night</li>
            <li>You cannot wash it out the next day</li>
          </ul>
          <p>
            If you do oil overnight, use an old pillowcase or wrap a soft cotton towel around
            your hair to protect your bedding.
          </p>
        </section>

        {/* ───── MID CTA ───── */}
        <div className={styles.midCta}>
          <p className={styles.midCtaText}>
            HairOShine Advance Hair Oil — 100 ml, pack of 2, non-greasy base.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={HAIROSHINE_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get HairOShine on Amazon →
            </a>
          </div>
        </div>

        {/* ───── HOW OFTEN ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How Often Should You Oil Your Hair?</h2>
          <div className={styles.painGrid}>
            {howOften.map((h) => (
              <div key={h.title} className={styles.painCard}>
                <span className={styles.painEmoji} aria-hidden="true">{h.emoji}</span>
                <h3 className={styles.painProblem}>{h.title}</h3>
                <p className={styles.painSolution}>{h.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── WASHING OUT ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Wash Oil Out of Your Hair</h2>
          <p>
            Most people struggle with this step because they add water first. Oil and water do
            not mix, so wet, oily hair just pushes shampoo around. Try this instead:
          </p>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.timelineWhen}>Shampoo first, water second</span>
              <p>Apply shampoo directly onto the oiled scalp and work it in before adding much water.</p>
            </li>
            <li>
              <span className={styles.timelineWhen}>Add a little water and lather</span>
              <p>Massage gently with fingertips, then rinse well with lukewarm water.</p>
            </li>
            <li>
              <span className={styles.timelineWhen}>Second, lighter wash if needed</span>
              <p>A small amount of shampoo usually removes the rest. Avoid very hot water.</p>
            </li>
            <li>
              <span className={styles.timelineWhen}>Conditioner on the lengths</span>
              <p>Use conditioner on the mid-lengths and ends, not the scalp.</p>
            </li>
          </ul>
        </section>

        {/* ───── HAIROSHINE ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Choosing an Oil for Regular Use</h2>
          <p>
            A heavy, sticky oil is hard to wash out and easy to overuse. For a weekly routine,
            a lighter, scalp-friendly oil is easier to live with.{' '}
            <Link href={HAIROSHINE_HREF} className={styles.inlineLink}>
              HairOShine Advance Hair Oil
            </Link>{' '}
            is a scalp-first oil that combines biotin and D-panthenol with traditional
            botanicals in a non-greasy base, light enough for everyday use on fine or thick
            hair.
          </p>
          <ul className={styles.audienceList}>
            <li><strong>Biotin with D-panthenol</strong></li>
            <li><strong>Basil, brahmi, bhringraj and hibiscus</strong> — familiar botanicals in Indian hair care</li>
            <li><strong>Non-greasy base</strong> — easier to wash out</li>
            <li><strong>For all hair types</strong>, including dry and frizzy hair</li>
          </ul>
          <p>
            Its directions match the method above: apply small drops directly onto the scalp
            and massage gently to distribute. Still deciding which oil suits you? Read our
            guide on{' '}
            <Link
              href="/blog/how-to-choose-hair-oil-for-your-hair-type-india"
              className={styles.inlineLink}
            >
              how to choose a hair oil for your hair type
            </Link>
            , or our guide to the{' '}
            <Link href="/blog/best-hair-oil-dry-frizzy-hair-india" className={styles.inlineLink}>
              best hair oil for dry and frizzy hair
            </Link>
            .
          </p>
        </section>

        {/* ───── MISTAKES ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hair Oiling Mistakes to Avoid</h2>
          <ul className={styles.bulletList}>
            {mistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        {/* ───── MYTHS ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Myth vs Fact</h2>
          <div className={styles.mythGrid}>
            <div className={styles.mythCard}>
              <p className={`${styles.mythRow} ${styles.myth}`}>
                <strong>Myth:</strong> The longer the oil stays in, the better it works.
              </p>
              <p className={`${styles.mythRow} ${styles.fact}`}>
                <strong>Fact:</strong> A few hours is enough for most hair. Leaving oil in for
                days mainly attracts dust and builds up on the scalp.
              </p>
            </div>
            <div className={styles.mythCard}>
              <p className={`${styles.mythRow} ${styles.myth}`}>
                <strong>Myth:</strong> More oil means more nourishment.
              </p>
              <p className={`${styles.mythRow} ${styles.fact}`}>
                <strong>Fact:</strong> Excess oil just needs extra shampooing to remove, which
                can dry your hair out again.
              </p>
            </div>
            <div className={styles.mythCard}>
              <p className={`${styles.mythRow} ${styles.myth}`}>
                <strong>Myth:</strong> Oiling cures every kind of hair fall.
              </p>
              <p className={`${styles.mythRow} ${styles.fact}`}>
                <strong>Fact:</strong> Oiling helps with dryness and breakage. Hair loss from
                genetics, hormones, thyroid issues or deficiencies needs medical advice.
              </p>
            </div>
          </div>
        </section>

        {/* ───── SAFETY ───── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Safety and When to See a Doctor</h2>
          <div className={styles.cautionBox}>
            <h3>Use oil safely</h3>
            <ul>
              <li>Patch test a new oil behind the ear or on the inner forearm for 24 hours.</li>
              <li>Never apply hot oil — lukewarm at most.</li>
              <li>Do not apply on broken skin, cuts or an infected scalp.</li>
              <li>Keep oil away from the eyes.</li>
              <li>Stop use if you notice itching, redness, a rash or scalp pimples.</li>
            </ul>
          </div>
          <div className={styles.cautionBox}>
            <h3>See a doctor or dermatologist if</h3>
            <ul>
              <li>You notice sudden heavy shedding, or round bald patches</li>
              <li>Your hair is thinning steadily over months</li>
              <li>Your scalp is red, painful, scaly or has persistent dandruff</li>
              <li>Hair loss comes with tiredness, weight change or irregular periods</li>
            </ul>
          </div>
        </section>

        <RelatedProduct slug="hairoshine-advance-hair-oil" />

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
          <h2>Oil Less, Massage Gently, Wash Well</h2>
          <p>
            A small amount of oil, a gentle fingertip massage, the right time for your scalp,
            and a proper wash — that is good hair oiling. Explore{' '}
            <Link href={HAIROSHINE_HREF} className={styles.inlineLink}>
              HairOShine Advance Hair Oil
            </Link>{' '}
            on our product page for full details.
          </p>
          <div className={styles.ctaGroup}>
            <a
              href={HAIROSHINE_AMAZON}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop HairOShine →
            </a>
          </div>
          <p className={styles.bottomNote}>100 ml · Pack of 2 · Sold on Amazon India</p>
        </section>

        <p className={styles.disclaimer}>
          This article is for general information and is not medical advice. For hair loss,
          scalp conditions or persistent dandruff, consult a doctor or dermatologist. Always
          follow the directions on the pack.
        </p>

      </div>
    </article>
  );
}