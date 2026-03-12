import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './sunguard-blog.module.css';

export const metadata: Metadata = {
  title: 'Best Sunscreen for Oily Skin in India 2026 — SPF 50 Guide | Freshotil Sunguard',
  description:
    'Looking for the best sunscreen for oily skin in India? Our 2026 SPF guide covers everything — UVA/UVB protection, non-greasy formulas, water resistance, and why SPF 50 is the new daily essential. Freshotil Sunguard 50 reviewed.',
  keywords: [
    'best sunscreen for oily skin India',
    'best sunscreen for oily skin 2026',
    'SPF 50 sunscreen India',
    'non greasy sunscreen for oily skin',
    'sunscreen for oily skin India',
    'best sunscreen India 2026',
    'water resistant sunscreen India',
    'UVA UVB sunscreen India',
    'sunscreen for daily use India',
    'sunscreen for men oily skin India',
    'lightweight sunscreen oily skin',
    'best SPF for oily skin India',
    'sunscreen lotion India',
    'best sunscreen for face oily skin',
    'sunscreen for acne prone oily skin',
    'daily sunscreen India',
    'sunscreen under makeup oily skin',
    'best broad spectrum sunscreen India',
    'sunscreen for outdoor activities India',
    'SPF guide India 2026',
  ],
  alternates: {
    canonical: 'https://www.lucidpharmatech.com/blog/best-sunscreen-oily-skin-india-spf-guide',
  },
  openGraph: {
    title: 'Best Sunscreen for Oily Skin in India (2026 SPF Guide) — Freshotil Sunguard 50',
    description:
      'Oily skin and sunscreen — finally a match. The complete SPF guide for Indians with oily skin: what to look for, what to avoid, and which sunscreen actually works.',
    images: [
      {
        url: '/images/freshotil-sunguard.png',
        width: 1200,
        height: 630,
        alt: 'Freshotil Sunguard 50 SPF Sunscreen Lotion for Oily Skin',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/04MfDy1G';

const oilyProblems = [
  {
    icon: '☀️',
    title: 'Every Sunscreen Makes Your Face Greasy',
    desc: 'Most sunscreens are formulated with heavy oils and emollients that work beautifully on dry skin — but turn oily skin into a shine disaster within the hour. By mid-morning, your face looks like it\'s been deep-fried.',
    fix: 'Freshotil Sunguard 50 uses a lightweight, fast-absorbing base that leaves zero greasy residue — just clean, protected skin that breathes.',
  },
  {
    icon: '🔴',
    title: 'Sunscreen Clogs Pores and Causes Breakouts',
    desc: 'Comedogenic sunscreen ingredients trap sebum under the skin, creating the perfect breeding ground for acne bacteria. If your skin breaks out every time you use sunscreen, you\'re using the wrong formula.',
    fix: 'The non-comedogenic formulation of Sunguard 50 sits on top of the skin without blocking pores — protecting without provoking breakouts.',
  },
  {
    icon: '💦',
    title: 'It Washes Off the Moment You Sweat',
    desc: 'India\'s heat and humidity means you start sweating the moment you step outside. Non-water-resistant sunscreens lose their protection within 20–30 minutes outdoors — leaving you exposed without knowing it.',
    fix: 'Sunguard 50 is water-resistant — maintaining its SPF 50 protection even through sweating, swimming, and outdoor activity.',
  },
  {
    icon: '🌫️',
    title: 'You Stop Applying Because It Feels Awful',
    desc: 'The biggest sunscreen problem in India is inconsistency. People know they should wear it — but thick, sticky formulas are so unpleasant that most people simply stop. No sunscreen is worse than imperfect sunscreen.',
    fix: 'A formula that feels light and comfortable enough to use every single day, morning after morning, without dreading the application.',
  },
];

const spfSciencePoints = [
  {
    q: 'What Does SPF Actually Mean?',
    a: 'SPF stands for Sun Protection Factor. SPF 50 means the product filters approximately 98% of UVB rays when applied correctly. SPF 30 filters around 97%. The difference seems small — but in India\'s UV Index, that extra 1% of UVB blocked matters significantly over cumulative daily exposure. SPF 50 is the current dermatological gold standard for daily use in tropical climates.',
  },
  {
    q: 'UVA vs UVB — What\'s the Difference?',
    a: 'UVB rays cause immediate sunburn and are the primary cause of skin cancer. UVA rays penetrate deeper into the skin — they don\'t burn but they do age. UVA is responsible for dark spots, fine lines, loss of collagen, and the leathery texture of sun-damaged skin. In India, both are present at high intensity year-round. You need broad-spectrum protection against both — which is exactly what Sunguard 50 provides.',
  },
  {
    q: 'Why Water Resistance Matters in Indian Weather',
    a: 'Most Indians are outdoors in temperatures that cause sweating within minutes. Sweat dilutes and breaks down most sunscreen formulas rapidly. A water-resistant sunscreen maintains its protective layer under sweat and humidity — which means you\'re actually getting the SPF stated on the label, not a degraded version of it.',
  },
  {
    q: 'How Much Sunscreen Should You Actually Apply?',
    a: 'The standard recommendation is 2 mg per cm² of skin — which translates to roughly ¼ teaspoon (1.25ml) for the face alone, and about 35ml (more than 6 teaspoons) for the full body. Most people apply less than half the required amount, which dramatically reduces the effective SPF. Under-application is the most common sunscreen mistake.',
  },
  {
    q: 'Does SPF in Moisturiser or Foundation Count?',
    a: 'SPF in makeup and moisturiser is not a substitute for dedicated sunscreen. These products are applied too thinly to deliver meaningful protection — the SPF advertised is based on a much thicker application than you\'d use for a foundation or BB cream. Always apply a dedicated sunscreen underneath makeup.',
  },
];

const ingredients = [
  {
    icon: '🛡️',
    name: 'Broad-Spectrum UVA/UVB Filters',
    subtitle: 'Comprehensive Solar Protection',
    body: 'Broad-spectrum UV filters are the functional core of any effective sunscreen. They work by absorbing or reflecting UV radiation before it can penetrate and damage skin cells. SPF 50 broad-spectrum coverage blocks approximately 98% of UVB rays and provides substantial UVA protection — the two wavelengths responsible for sunburn, premature ageing, hyperpigmentation, and skin cancer. Without broad-spectrum coverage, you\'re only solving half the sun damage problem.',
    color: '#fff7ed',
    border: '#fed7aa',
    text: '#c2410c',
  },
  {
    icon: '💧',
    name: 'Water-Resistant Formula Base',
    subtitle: 'Protection That Lasts Through Sweat and Activity',
    body: 'The water-resistant base in Sunguard 50 ensures that the UV filters remain bonded to the skin\'s surface even under sweating, humidity, and water exposure. Standard sunscreens break down and wash off quickly in India\'s climate. A water-resistant formula maintains integrity for significantly longer — reducing the frequency of reapplication needed and ensuring the stated SPF is actually being delivered to your skin throughout the day.',
    color: '#fefce8',
    border: '#fde68a',
    text: '#a16207',
  },
  {
    icon: '🍃',
    name: 'Lightweight Non-Comedogenic Base',
    subtitle: 'No Grease. No Breakouts. No Compromise.',
    body: 'The challenge of formulating for oily skin is creating a sunscreen that provides genuine protection without the heavy, pore-clogging emollients that most SPF formulas rely on. Sunguard 50\'s lightweight base is non-comedogenic — meaning it is specifically formulated to avoid blocking pores. This makes it safe for daily use even on acne-prone and combination skin types, without the breakout risk associated with many traditional sunscreen formulations.',
    color: '#f0fdf4',
    border: '#86efac',
    text: '#166534',
  },
];

const timeline = [
  { label: 'Day 1', detail: 'Skin feels protected but light — no stickiness or shine amplification. Comfortable all day.' },
  { label: 'Week 1', detail: 'T-zone oil production does not worsen. Skin stays fresher longer through the day.' },
  { label: 'Week 2–4', detail: 'No new sunburn-related dark spots forming. Existing hyperpigmentation stops worsening.' },
  { label: 'Month 2+', detail: 'Cumulative UV damage prevention becomes visible — tone is more even, fewer new spots appearing.' },
  { label: '6 Months+', detail: 'Consistent SPF use is one of the most evidence-backed anti-ageing interventions available. Long-term users show significantly less photoageing than non-users.' },
];

const mistakes = [
  {
    n: '01',
    title: 'Applying Too Little',
    desc: 'The SPF number on the bottle is tested at 2mg/cm². Most people apply a thin layer — which can deliver as little as SPF 10–15, regardless of what the label says. Use a full, generous amount.',
  },
  {
    n: '02',
    title: 'Not Reapplying',
    desc: 'Sunscreen degrades under UV exposure and washes off with sweat. Reapply every 2 hours outdoors, or after heavy sweating or swimming. Even water-resistant formulas need reapplication after extended activity.',
  },
  {
    n: '03',
    title: 'Skipping on Cloudy Days',
    desc: 'Up to 80% of UV rays penetrate cloud cover. India\'s UV Index remains dangerous on overcast days — particularly in summer. Daily application regardless of visible sunshine is the correct habit.',
  },
  {
    n: '04',
    title: 'Only Applying to the Face',
    desc: 'The neck, ears, back of hands, and forearms are among the most sun-exposed body parts — and among the first to show signs of photoageing. Apply to all exposed skin, not just the face.',
  },
  {
    n: '05',
    title: 'Using SPF in Foundation as Your Only Sunscreen',
    desc: 'Foundation and tinted moisturisers with SPF are applied far too thinly to deliver meaningful protection. They are a supplement, not a substitute for a dedicated sunscreen application.',
  },
  {
    n: '06',
    title: 'Waiting Until Summer',
    desc: 'UVA rays — which cause ageing and hyperpigmentation — are present at consistent intensity year-round, not just in summer. Daily sunscreen in January protects your skin as much as daily sunscreen in May.',
  },
];

const faqs = [
  {
    q: 'Is Freshotil Sunguard 50 suitable for oily skin?',
    a: 'Yes — it is specifically formulated to be non-greasy and lightweight, making it suitable for oily and combination skin types. It absorbs quickly without leaving a sticky or heavy residue.',
  },
  {
    q: 'Can I use this sunscreen every day?',
    a: 'Absolutely. Sunguard 50 is designed for daily use. Apply every morning as the last step of your skincare routine, before makeup if applicable. This daily habit is one of the highest-impact skin health decisions you can make.',
  },
  {
    q: 'How water-resistant is it?',
    a: 'Sunguard 50 is water-resistant, making it suitable for outdoor activities, sports, sweating, and water exposure. It maintains its protective properties significantly longer than non-water-resistant alternatives under Indian weather conditions.',
  },
  {
    q: 'Does SPF 50 protect against both UVA and UVB rays?',
    a: 'Yes. Sunguard 50 is a broad-spectrum formula providing protection against both UVA (ageing/pigmentation rays) and UVB (burning/cancer rays). This comprehensive coverage is what makes it effective for skin health, not just sunburn prevention.',
  },
  {
    q: 'Will it cause breakouts on acne-prone skin?',
    a: 'The formula is non-comedogenic — designed to not block pores. It is suitable for acne-prone skin types. That said, if you are experiencing active, severe acne, consult a dermatologist before introducing new products into your routine.',
  },
  {
    q: 'Can men use this sunscreen?',
    a: 'Yes. The lightweight, non-greasy formula is particularly practical for men who want sun protection without the feel of wearing heavy skincare. It absorbs quickly and leaves no visible residue.',
  },
  {
    q: 'How often should I reapply Sunguard 50?',
    a: 'For continuous outdoor exposure, reapply every 2 hours. If you are primarily indoors with limited sun exposure, morning application is sufficient for most days. After swimming or intense sweating, reapply regardless of timing.',
  },
  {
    q: 'Can I use this under makeup?',
    a: 'Yes. The lightweight, fast-absorbing formula makes it an excellent base under makeup. Apply sunscreen first, allow it to absorb for 1–2 minutes, then apply primer or foundation on top.',
  },
  {
    q: 'What is India\'s UV Index and why does it matter?',
    a: 'India\'s UV Index regularly reaches 8–11+ in most regions, particularly from March to September. Dermatologists classify UV Index 8 as "Very High" and anything above 11 as "Extreme." At these levels, unprotected skin can begin to burn in under 15 minutes. SPF 50 significantly extends that safe exposure window.',
  },
  {
    q: 'Is sunscreen just for summer?',
    a: 'No — this is one of the most common and damaging sunscreen myths in India. UVA rays maintain consistent intensity year-round and penetrate windows and cloud cover. The skin-ageing and pigmentation damage from UVA accumulates every day, regardless of season. Year-round daily application is the correct approach.',
  },
];

const comparisons = [
  { factor: 'SPF Level', sg: 'SPF 50', typical: 'SPF 15–30' },
  { factor: 'Spectrum', sg: 'Broad Spectrum (UVA + UVB)', typical: 'Often UVB only' },
  { factor: 'Texture', sg: 'Non-greasy, lightweight', typical: 'Heavy, oily residue' },
  { factor: 'Water Resistance', sg: '✓ Yes', typical: '✗ Often not water-resistant' },
  { factor: 'Daily Wear Comfort', sg: 'Breathable, all-day fresh feel', typical: 'Uncomfortable after 2–3 hours' },
  { factor: 'Suitable for Oily Skin', sg: '✓ Non-comedogenic', typical: 'Frequently clogs pores' },
];

export default function SunguardBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroSunRay} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Sunscreen · SPF 50 · Oily Skin · India Guide 2026</span>
            <h1 className={styles.heroTitle}>
              Best Sunscreen for
              <br />
              <em>Oily Skin in India</em>
              <br />
              <span className={styles.heroTitleSub}>The Complete SPF 50 Guide (2026)</span>
            </h1>
            <p className={styles.heroSub}>
              Most sunscreens ruin oily skin. They pile on the grease, block your pores,
              and melt off the second you step outside. This guide cuts through everything
              — so you finally know what to look for, what to avoid, and which SPF 50
              sunscreen actually works for Indian skin in Indian weather.
            </p>
            <div className={styles.heroActions}>
              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy Freshotil Sunguard 50 on Amazon →
              </a>
              <span className={styles.heroSubNote}>SPF 50 · UVA/UVB · Water Resistant · Non-Greasy</span>
            </div>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageOrb} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/freshotil-sunguard.png"
                alt="Freshotil Sunguard 50 SPF Sunscreen Lotion — Broad Spectrum UVA UVB Protection"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>☀️ SPF 50</span>
              <span>🛡️ UVA/UVB</span>
              <span>💧 Water Resistant</span>
              <span>✨ Non-Greasy</span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ── INTRO ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Sunscreen Is the Most Skipped — and Most Important — Skincare Step in India</h2>
          <p>
            Ask a dermatologist what the single most impactful thing an Indian person
            can do for their skin, and the answer is almost universally the same:
            <strong> wear sunscreen every day</strong>. Not a vitamin C serum. Not an
            expensive night cream. Sunscreen — applied correctly, every morning, without
            exception.
          </p>
          <p>
            And yet sunscreen remains the most skipped step in most Indian skincare
            routines. The reasons are understandable: most formulas feel awful on oily
            skin, they break out acne-prone faces, they slide off in the humidity, and
            the options available until recently were either too light to be effective
            or too heavy to be wearable.
          </p>
          <p>
            India's UV Index is among the highest in the world. Most cities in central
            and southern India see UV Index readings of 8–11 from February through
            October — levels classified as "Very High" to "Extreme" by the WHO. At UV
            Index 10, unprotected fair skin can begin to sustain damage in under
            10 minutes. And unlike sunburn, the majority of this UV damage — the kind
            that causes dark spots, hyperpigmentation, premature wrinkles, and long-term
            skin cancer risk — is invisible in the moment. It accumulates silently, day
            after day, until suddenly your skin looks significantly older than it should,
            your pigmentation is uneven, and reversing the damage requires expensive
            treatments that could have been avoided entirely.
          </p>
          <p>
            The good news: the solution is simple and inexpensive. A good SPF 50
            broad-spectrum sunscreen, applied every morning, prevents the vast majority
            of this damage before it can begin. This guide tells you everything you
            need to know to do that correctly — and introduces the formula we recommend
            for oily skin specifically.
          </p>
        </section>

        {/* ── PROBLEMS GRID ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The 4 Reasons Oily Skin and Sunscreen Don't Get Along — and How to Fix It</h2>
          <p style={{ marginBottom: '32px', color: '#4a3728', lineHeight: '1.8' }}>
            If you have oily skin and you've given up on daily sunscreen because it
            always makes things worse — here's exactly what's going wrong, and why the
            right formula changes everything.
          </p>
          <div className={styles.problemsGrid}>
            {oilyProblems.map((p) => (
              <div key={p.title} className={styles.problemCard}>
                <span className={styles.problemIcon}>{p.icon}</span>
                <h3 className={styles.problemTitle}>{p.title}</h3>
                <p className={styles.problemDesc}>{p.desc}</p>
                <div className={styles.problemFix}>
                  <span className={styles.fixLabel}>✓ How Sunguard 50 solves it</span>
                  <p>{p.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SPF SCIENCE DEEP DIVE ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The SPF Science: What You Actually Need to Know</h2>
          <p style={{ marginBottom: '32px', color: '#4a3728', lineHeight: '1.8' }}>
            SPF labelling is one of the most misunderstood rating systems in skincare.
            Here is what the numbers actually mean — and why they matter specifically for
            people with oily skin in India.
          </p>
          <div className={styles.scienceAccordion}>
            {spfSciencePoints.map((pt, i) => (
              <div key={i} className={styles.scienceItem}>
                <h3 className={styles.scienceQ}>{pt.q}</h3>
                <p className={styles.scienceA}>{pt.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID CTA 1 ── */}
        <div className={styles.midCta}>
          <div className={styles.midCtaSun} aria-hidden="true" />
          <p className={styles.midCtaHead}>
            SPF 50. Broad Spectrum. Non-Greasy. Water Resistant.
          </p>
          <p className={styles.midCtaSub}>
            Freshotil Sunguard 50 — the daily sunscreen built for oily skin and India's intense UV conditions.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Get Freshotil Sunguard 50 on Amazon →
          </a>
        </div>

        {/* ── INDIA UV CONTEXT ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why India's Sun Is More Dangerous Than You Think</h2>
          <p>
            Most Indians are significantly underestimating their UV exposure. The common
            assumption is that sun damage is primarily a beach holiday problem — something
            to worry about on vacation, not on a regular Tuesday commute. This
            misunderstanding is responsible for a significant amount of preventable skin
            damage.
          </p>
          <p>
            India sits predominantly between 8°N and 37°N latitude — well within the
            tropical and subtropical bands where UV radiation is most intense. The
            combination of proximity to the equator, high altitudes in many regions,
            and low cloud cover for much of the year means India receives some of the
            highest UV doses of any inhabited region on earth.
          </p>
          <p>
            Cities like Mumbai, Chennai, Hyderabad, and Bangalore regularly record UV
            Index values above 10 for five to seven months of the year. Even Delhi,
            Pune, and Kolkata — further north or with more cloud cover — see UV Index
            readings of 8+ for most of the year. The World Health Organization
            classifies UV Index 8 as "Very High" — a level at which unprotected skin
            exposure should be minimised and protective measures taken.
          </p>
          <p>
            The insidious part is that most UV damage is invisible when it happens.
            UVA rays — which cause the majority of ageing, hyperpigmentation, and
            cumulative DNA damage — don't cause sunburn. You don't feel them working.
            They penetrate through windows, through cloud cover, and through every
            unprotected moment outdoors. The damage is only visible months or years
            later — as uneven skin tone, dark patches, fine lines, loss of elasticity,
            or in more serious cases, as skin pathology requiring medical attention.
          </p>
          <p>
            The corrective treatments for UV-induced skin damage — laser therapy, chemical
            peels, prescription brightening treatments — cost significantly more than
            daily sunscreen application. Prevention is not just more effective; it is
            dramatically more economical than treatment.
          </p>
        </section>

        {/* ── INGREDIENT DEEP DIVE ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Makes Sunguard 50 Work: The Formula Behind the Protection</h2>
          <p style={{ color: '#4a3728', lineHeight: '1.8', marginBottom: '32px' }}>
            Not all sunscreens are equal — and the gap is widest when it comes to oily
            skin formulations. Here's what makes Freshotil Sunguard 50's formula
            genuinely effective for daily use in India.
          </p>
          <div className={styles.ingredientStack}>
            {ingredients.map((ing) => (
              <div
                key={ing.name}
                className={styles.ingredientCard}
                style={{ background: ing.color, borderColor: ing.border }}
              >
                <div className={styles.ingHeader}>
                  <span className={styles.ingIcon}>{ing.icon}</span>
                  <div>
                    <p className={styles.ingLabel} style={{ color: ing.text }}>{ing.name}</p>
                    <p className={styles.ingSubtitle}>{ing.subtitle}</p>
                  </div>
                </div>
                <p className={styles.ingBody}>{ing.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sunguard 50 vs. Typical Indian Sunscreens: A Side-by-Side</h2>
          <p style={{ marginBottom: '28px', color: '#4a3728', lineHeight: '1.8' }}>
            Most affordable sunscreens in India make compromises that specifically hurt
            oily skin users. Here's a direct comparison:
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Factor</th>
                  <th className={styles.thHighlight}>Freshotil Sunguard 50</th>
                  <th>Typical Sunscreen</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.factor}>
                    <td className={styles.tdFactor}>{row.factor}</td>
                    <td className={styles.tdHighlight}>{row.sg}</td>
                    <td>{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── HOW TO USE ── */}
        <section className={styles.howTo}>
          <h2 className={styles.sectionTitle}>How to Apply Sunscreen Correctly (Most People Are Doing This Wrong)</h2>
          <p style={{ marginBottom: '32px', color: '#4a3728', lineHeight: '1.8' }}>
            The most common sunscreen mistake is not application frequency — it's
            application amount and order. Follow this protocol for maximum effectiveness.
          </p>
          <div className={styles.stepsRow}>
            {[
              {
                n: '1',
                title: 'Cleanse your face first',
                desc: 'Apply sunscreen to clean skin — not over layers of products. Excess oil or residue from overnight cream can prevent even adhesion.',
              },
              {
                n: '2',
                title: 'Serums and moisturiser first',
                desc: 'If you use a vitamin C serum or lightweight moisturiser, apply those before sunscreen. Allow them to absorb for 30–60 seconds.',
              },
              {
                n: '3',
                title: 'Apply generously — a full ¼ teaspoon for the face',
                desc: 'Most people under-apply by 50–75%. The SPF 50 rating assumes full coverage. Thin application delivers dramatically lower effective protection.',
              },
              {
                n: '4',
                title: 'Cover all exposed areas',
                desc: 'Don\'t neglect the neck, ears, and back of hands — areas frequently missed and among the first to show sun ageing.',
              },
              {
                n: '5',
                title: 'Apply 15–20 minutes before sun exposure',
                desc: 'Chemical sunscreen filters need time to bind to the skin. Apply before you leave the house, not as you step outside.',
              },
              {
                n: '6',
                title: 'Reapply every 2 hours outdoors',
                desc: 'UV exposure degrades sunscreen filters. Reapplication every 2 hours maintains effective protection for sustained outdoor time.',
              },
            ].map((s) => (
              <div key={s.n} className={styles.stepBox}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className={styles.howToTip}>
            💡 <strong>Pro tip for oily skin:</strong> Use a blotting paper or mattifying
            powder before reapplying sunscreen midday — this removes excess oil without
            disturbing the base layer of protection, and the fresh sunscreen application
            goes on more evenly. Pair your daily sunscreen routine with a good cleanser —
            our{' '}
            <Link href="/blog/best-face-wash-oily-skin-india-2026" className={styles.internalLink}>
              FreshOLite Vitamin C Face Wash guide
            </Link>{' '}
            covers the best morning cleanse before sunscreen application.
          </p>
        </section>

        {/* ── MISTAKES SECTION ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6 Sunscreen Mistakes Indians Make (And How to Fix Them)</h2>
          <p style={{ marginBottom: '32px', color: '#4a3728', lineHeight: '1.8' }}>
            Even people who do wear sunscreen regularly are often making errors that
            significantly reduce their protection. These are the most common — and most
            impactful — mistakes.
          </p>
          <div className={styles.mistakesGrid}>
            {mistakes.map((m) => (
              <div key={m.n} className={styles.mistakeCard}>
                <span className={styles.mistakeNum}>{m.n}</span>
                <h3 className={styles.mistakeTitle}>{m.title}</h3>
                <p className={styles.mistakeDesc}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Daily SPF 50 Actually Does to Your Skin — Over Time</h2>
          <p style={{ color: '#4a3728', lineHeight: '1.8', marginBottom: '28px' }}>
            Sunscreen benefits are cumulative. Here's the realistic timeline of what
            consistent daily use of Sunguard 50 achieves for your skin:
          </p>
          <div className={styles.timeline}>
            {timeline.map((r, i) => (
              <div key={r.label} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                {i < timeline.length - 1 && <div className={styles.timelineLine} />}
                <div className={styles.timelineContent}>
                  <span className={styles.timelineLabel}>{r.label}</span>
                  <p className={styles.timelineDetail}>{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Should Use Freshotil Sunguard 50?</h2>
          <div className={styles.forGrid}>
            {[
              { icon: '💦', label: 'Oily & Combination Skin', desc: 'Non-greasy formula that protects without amplifying shine or blocking pores.' },
              { icon: '🏃', label: 'Active & Outdoor Lifestyles', desc: 'Water-resistant protection built for sport, commuting, and outdoor work in Indian heat.' },
              { icon: '🌆', label: 'Urban Commuters', desc: 'Daily broad-spectrum protection against the UV + pollution combination in Indian cities.' },
              { icon: '🌑', label: 'Hyperpigmentation & Dark Spots', desc: 'SPF 50 stops UV from worsening existing pigmentation — a critical step in any brightening routine.' },
              { icon: '👨', label: 'Men\'s Daily Skincare', desc: 'Fast-absorbing, residue-free formula practical for men who want protection without heavy skincare.' },
              { icon: '⏳', label: 'Anti-Ageing Prevention', desc: 'The most evidence-backed anti-ageing intervention available — protecting collagen from daily UV degradation.' },
            ].map((f) => (
              <div key={f.label} className={styles.forCard}>
                <span className={styles.forIcon}>{f.icon}</span>
                <p className={styles.forLabel}>{f.label}</p>
                <p className={styles.forDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID CTA 2 ── */}
        <div className={styles.midCta}>
          <div className={styles.midCtaSun} aria-hidden="true" />
          <p className={styles.midCtaHead}>
            Daily SPF is not optional in India. The only question is which one.
          </p>
          <p className={styles.midCtaSub}>
            Freshotil Sunguard 50 — SPF 50 broad-spectrum, water-resistant, and actually wearable for oily skin.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Order Freshotil Sunguard 50 on Amazon →
          </a>
        </div>

        {/* ── COMPLETE ROUTINE SECTION ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Building a Complete Daily Routine Around Your Sunscreen</h2>
          <p>
            Sunscreen is most effective when it is part of a consistent skincare
            routine rather than a standalone step. The products you use before
            sunscreen affect how well it adheres; the products you use to cleanse in
            the evening affect how your skin is prepared for the next morning's
            application. Here's how to build a routine that maximises everything:
          </p>
          <h3 className={styles.subHeading}>Morning Routine (The Protective Stack)</h3>
          <p>
            Begin with a thorough cleanse to remove nighttime product residue and
            morning oil buildup. For oily skin, this means using an active cleanser —
            ideally one with brightening properties like Vitamin C — rather than a
            plain foaming wash. This removes the surface oil that would otherwise
            compromise sunscreen adhesion.
          </p>
          <p>
            After cleansing, apply any vitamin C serum or treatment products while the
            skin is still slightly damp — this is when active ingredient absorption is
            highest. Allow serums to absorb for 60–90 seconds, then layer your
            moisturiser if your skin needs it. For oily skin, a very lightweight gel
            moisturiser or skipping moisturiser entirely and relying on the sunscreen
            base for hydration is often the better choice.
          </p>
          <p>
            The final step before leaving the house is sunscreen. Apply generously —
            remembering that under-application is the single most common reason
            sunscreen fails to deliver its stated protection. Allow Sunguard 50 to
            absorb for 1–2 minutes before applying makeup if needed.
          </p>
          <h3 className={styles.subHeading}>Evening Routine (The Repair Stack)</h3>
          <p>
            In the evening, the priority shifts from protection to repair. Begin with a
            double cleanse if you've worn sunscreen and makeup — an oil-based or
            micellar cleanser first to break down the sunscreen film, followed by a
            water-based active cleanser. This is important: sunscreen that is not fully
            removed before sleeping can accumulate in pores overnight and contribute
            to congestion.
          </p>
          <p>
            After cleansing, apply your most active treatment products — retinoids,
            niacinamide, brightening serums — while the skin barrier is most receptive.
            Follow with a richer moisturiser than your daytime product if dryness is
            a concern. The skin repairs and regenerates most actively during sleep,
            so the evening routine is when nourishing ingredients deliver their highest
            return on investment.
          </p>
          <p>
            Pair your sunscreen routine with the right supporting products for
            complete coverage. Our guides on the{' '}
            <Link href="/blog/best-face-wash-oily-skin-india-2026" className={styles.internalLink}>
              best face wash for oily skin in India
            </Link>{' '}
            and the{' '}
            <Link href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba" className={styles.internalLink}>
              best moisturizer for combination skin
            </Link>{' '}
            cover the cleanser and moisturiser steps in detail.
          </p>
        </section>

        {/* ── INTERNAL LINKING BAND ── */}
        <div className={styles.relatedBand}>
          <p className={styles.relatedLabel}>Build Your Complete Skincare Routine</p>
          <p className={styles.relatedDesc}>
            Sunscreen is the final step. Pair it with the right cleanser and moisturiser
            for a routine that protects, balances, and nourishes — every single day.
          </p>
          <div className={styles.relatedLinks}>
            <Link href="/blog/best-face-wash-oily-skin-india-2026" className={styles.relatedCard}>
              <span>🍊</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Face Wash for Oily Skin India 2026</p>
                <p className={styles.relatedCardSub}>FreshOLite Vitamin C Face Wash — the pre-sunscreen cleanse</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba" className={styles.relatedCard}>
              <span>🧴</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Moisturizer for Combination Skin</p>
                <p className={styles.relatedCardSub}>Moist Sure Cream — the layer before your SPF</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link href="/blog/calafine-lotion-sunburn-relief-acne-care-skin-nourishment" className={styles.relatedCard}>
              <span>☀️</span>
              <div>
                <p className={styles.relatedCardTitle}>Sunburn Relief & Skin Repair</p>
                <p className={styles.relatedCardSub}>CALAFINE Lotion — when sunburn has already happened</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ── FAQ ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sunscreen for Oily Skin — Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{f.q}</summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CLOSING EDITORIAL ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Bottom Line: Sunscreen Is Not Optional in India</h2>
          <p>
            Dermatologists are consistent on this point: sunscreen is not a cosmetic
            luxury. In India's UV environment, it is a daily health essential — as
            fundamental to skin wellbeing as diet or hydration. The visible effects of
            skipping it accumulate invisibly for years before they become undeniable.
            By then, reversing the damage is far harder than the habit that would have
            prevented it.
          </p>
          <p>
            The barrier to building a daily sunscreen habit has historically been
            product quality — heavy, greasy formulas that make oily skin worse,
            formulas that break out acne-prone skin, formulas that slide off in the
            heat before they have a chance to work. These problems are real, and they've
            caused millions of Indians to give up on SPF entirely.
          </p>
          <p>
            The solution is not to give up on sunscreen. The solution is to find a
            formula engineered for the actual conditions of Indian skin and Indian
            weather. SPF 50 broad-spectrum protection, a genuinely lightweight
            non-greasy base, and water resistance for the sweat and humidity that
            comes with daily life outdoors. That's the checklist — and that's the
            formula Freshotil Sunguard 50 was built around.
          </p>
          <p>
            One bottle. Every morning. Lasting, invisible protection against the
            damage that accumulates from every unprotected day outside. It is,
            without question, the highest-return skincare investment you can make.
          </p>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className={styles.bottomCta}>
          <div className={styles.bottomCtaSun} aria-hidden="true" />
          <h2>Protect Your Skin. Every Single Day.</h2>
          <p>
            SPF 50 broad-spectrum protection, non-greasy formula, and water
            resistance designed for India's heat and humidity. Freshotil Sunguard 50
            — the daily sunscreen that oily skin can actually wear.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Shop Freshotil Sunguard 50 on Amazon →
          </a>
          <p className={styles.bottomNote}>SPF 50 · Broad Spectrum UVA/UVB · Water Resistant · Non-Greasy</p>
        </section>

      </div>
    </article>
  );
}