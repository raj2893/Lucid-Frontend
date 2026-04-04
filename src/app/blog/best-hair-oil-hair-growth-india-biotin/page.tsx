import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './hairoshine-biotin-oil-blog.module.css';

export const metadata: Metadata = {
  title: 'Best Hair Oil for Hair Growth in India 2026 — Biotin Oil Complete Guide',
  description:
    'Discover the best hair oil for hair growth in India. Biotin-infused formula stops hair fall, nourishes scalp & roots, and promotes thicker, stronger hair. Shop now.',
  keywords: [
    'best hair oil for hair growth in India',
    'biotin hair oil India',
    'hair fall control oil',
    'hair growth oil India',
    'best hair oil India 2026',
    'scalp nourishment oil',
    'hair roots strengthening oil',
    'thicker hair oil India',
    'anti hair fall oil',
    'hair loss treatment India',
    'biotin for hair growth',
    'hair oil for men India',
    'hair oil for women India',
    'best hair oil for hair fall',
    'non greasy hair oil India',
    'hair growth oil for Indian scalp',
    'hair oil for dry scalp India',
    'best oil for hair regrowth',
    'hair breakage prevention oil',
    'natural hair oil India',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/best-hair-oil-hair-growth-india-biotin',
  },
  openGraph: {
    title: 'Best Hair Oil for Hair Growth in India 2026 — Biotin Oil Complete Guide',
    description:
      'Stop hair fall and promote thicker growth with Biotin-enriched hair oil. The complete 2026 guide for Indian hair types, scalp conditions, and proven results.',
    images: [
      {
        url: '/images/hairoshine-biotin-oil.jpg',
        width: 1200,
        height: 630,
        alt: 'HairOShine Advance Biotin Hair Oil for Hair Growth India',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/04hhFpUS';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Hair Fall Is an Epidemic in India' },
  { id: 'science', label: 'The Science of Hair Growth — How It Actually Works' },
  { id: 'biotin-deep-dive', label: 'What Biotin Does to Your Hair Follicles' },
  { id: 'problems-grid', label: 'Your Hair Problem — And How to Fix It' },
  { id: 'hair-type-guide', label: 'Complete Hair Type Suitability Guide' },
  { id: 'product-deep-dive', label: 'HairOShine Biotin Oil — Full Feature Breakdown' },
  { id: 'how-to-use', label: 'Step-by-Step Application Guide' },
  { id: 'results-timeline', label: 'Realistic Results Timeline — What to Expect' },
  { id: 'buying-guide', label: 'Complete Buying Guide for India' },
  { id: 'who-needs', label: 'Who Needs This Oil Most' },
  { id: 'myths', label: 'Hair Oil Myths vs. Truth' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '💧',
    problem: 'Dry, Itchy, Flaky Scalp',
    desc: 'Hard water, pollution, harsh shampoos, and India\'s seasonal heat strip the scalp of its natural moisture barrier. The result is chronic dryness, dandruff, and an itchy scalp that disrupts healthy hair growth.',
    solution: 'Biotin oil penetrates the scalp\'s dermal layer, restoring lipid content and moisture balance. Regular application rebuilds the scalp environment that healthy follicles need to thrive.',
  },
  {
    icon: '🍂',
    problem: 'Excessive Hair Fall Daily',
    desc: 'Losing more than 100 strands per day is a red flag. Nutritional deficiencies, stress hormones like cortisol, and weakened hair shafts cause breakage at the root — not just shedding at the ends.',
    solution: 'Biotin directly feeds the keratin infrastructure of each strand, strengthening the hair shaft from root to tip and dramatically reducing the breakage cycle within weeks of consistent use.',
  },
  {
    icon: '📏',
    problem: 'Hair That Refuses to Grow',
    desc: 'When hair stagnates at the same length despite growth, the culprit is usually a compromised growth phase (anagen). Weak follicles prematurely enter the resting phase, producing finer and shorter strands each cycle.',
    solution: 'Scalp nourishment via biotin-enriched oil extends the anagen phase, giving each follicle the vitamins and stimulation needed to complete a full growth cycle and produce longer, thicker strands.',
  },
  {
    icon: '🪨',
    problem: 'Thin, Brittle, Breakage-Prone Hair',
    desc: 'Thin hair is often a keratin deficiency problem. Keratin — the protein that forms the hair\'s cortex — depletes through heat styling, chemical treatments, and inadequate nutrition, leaving strands fragile and prone to snapping.',
    solution: 'Biotin is a cofactor in the production of keratin. Topical application delivers this nutrient directly to the follicle, rebuilding the structural protein that gives hair its strength, elasticity, and resistance to breakage.',
  },
];

const hairTypes = [
  {
    type: 'Oily Scalp',
    icon: '💦',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'The lightweight, non-greasy formula absorbs quickly without adding excess oil. Apply only to the scalp, not mid-shaft, for optimal balance.',
  },
  {
    type: 'Dry Scalp',
    icon: '🏜️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Biotin oil is most impactful for dry scalps — it restores the moisture barrier and delivers deep nourishment to starved follicles. Use generously 2–3 times per week.',
  },
  {
    type: 'Normal Scalp',
    icon: '✅',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Ideal for maintenance. Regular application sustains hair health, prevents future thinning, and extends the growth phase proactively.',
  },
  {
    type: 'Sensitive Scalp',
    icon: '🌸',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'The gentle, non-irritating formula is suitable for sensitive scalps. Perform a patch test on the inner elbow before first full application.',
  },
  {
    type: 'Dandruff-Prone',
    icon: '❄️',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Scalp nourishment and improved hydration reduce the conditions that cause dandruff. Pair with an anti-dandruff shampoo for best results.',
  },
  {
    type: 'Chemically Treated Hair',
    icon: '🧪',
    verdict: 'With Caution',
    verdictClass: 'caution',
    explanation: 'Biotin oil aids repair of chemically treated hair. Apply focusing on the scalp; avoid contact with freshly coloured strands in the first 72 hours post-treatment.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Biotin Deep-Root Nourishment',
    body1: `Biotin — also known as Vitamin B7 — is one of the most clinically studied micronutrients for hair health. It serves as a critical cofactor in the enzyme processes that synthesise keratin, the fibrous structural protein that makes up over 95% of each hair strand. Without adequate biotin reaching the follicle, keratin production falls short, and the resulting hair is thin, fragile, and prone to snapping long before it can reach any significant length.

What makes topical biotin application particularly effective is the directness of delivery. When biotin is applied as an oil to the scalp, it bypasses the digestive process and reaches the follicle in concentrated form — working where it is needed most, at the root level. This is especially relevant for Indian populations whose diets — even when nutritionally diverse — may not provide consistent biotin levels due to cooking methods that degrade B vitamins.`,
    body2: `The scalp absorption mechanism means that even a small, consistent amount of topically applied biotin can meaningfully improve the hair growth environment. Over weeks of regular use, follicles receive the sustained nutritional input required to complete longer, stronger growth cycles. The result is not a sudden transformation — but a gradual, measurable improvement in strand thickness, density, and resistance to breakage that becomes clearly visible after four to six weeks of consistent application.`,
  },
  {
    number: '02',
    heading: 'Hair Fall Reduction Through Shaft Strengthening',
    body1: `Hair fall in India is rarely caused by a single factor. The combination of hard water (high in calcium and magnesium that roughens the cuticle), year-round UV exposure, seasonal changes that trigger telogen effluvium, dietary gaps from irregular meals, and the mechanical stress of tight hairstyles creates a perfect storm of weakened strands. Each factor compounds the others, accelerating the transition from the growth phase into the resting and shedding phases.

HairOShine Biotin Oil addresses this at the structural level. Biotin's role in keratin synthesis means that each strand produced during regular use has a fundamentally stronger internal architecture. The hair cortex — the middle layer that determines strength and elasticity — is more densely packed with healthy keratin proteins, making strands more resistant to the everyday stresses of washing, combing, and exposure to heat and humidity.`,
    body2: `The visible result is a reduction in the amount of hair found on pillows, in shower drains, and on combs. This doesn't happen overnight — the hair growth cycle operates on timescales of weeks — but users consistently report meaningful reductions in visible shedding between the four and eight week mark. More importantly, the hair that does grow back during this period is visibly thicker and more resilient, breaking the cycle of progressive thinning that afflicts so many Indian adults in their twenties and thirties.`,
  },
  {
    number: '03',
    heading: 'Scalp Revitalisation and Root Protection',
    body1: `The scalp is often treated as an afterthought in hair care — most products focus on the shaft, from mid-length to tip, while the scalp receives little targeted attention. This is backwards. The follicle, which produces every strand you grow, is entirely located within the scalp. Its health, blood circulation, sebum balance, and microbial environment determine the quality and quantity of every strand you will ever grow.

HairOShine Biotin Oil is formulated to work from the scalp outward. Its molecular composition allows it to penetrate the upper dermal layers where follicles are housed, delivering biotin, moisture, and nourishing compounds to the precise location where hair production occurs. This revitalises dormant or weakened follicles — follicles that may have been producing increasingly finer, shorter hairs due to gradual nutritional deprivation — and restores the conditions for healthy, full-cycle growth.`,
    body2: `This root-first approach is what distinguishes an effective growth oil from a simple conditioning treatment. Conditioning oils improve the appearance of existing hair; growth oils improve the environment in which new hair is produced. Scalp revitalisation is the longer game — and the more impactful one. Users who commit to regular scalp application — using fingertip massage to work the oil into the skin rather than simply spreading it over hair strands — see noticeably faster results because the oil reaches its target more effectively.`,
  },
  {
    number: '04',
    heading: 'Non-Greasy, Manageable Formula for Daily Indian Life',
    body1: `The most effective hair oil is the one you actually use consistently. This is where most growth oils fail the Indian consumer — particularly in urban settings. Heavy, viscous oils that require overnight application, leave visible residue throughout the day, make straight hair look lank and limp, or are incompatible with humid climates simply do not get used with the consistency required for visible results. The formula needs to work with modern hair care habits, not against them.

HairOShine Biotin Oil was developed with this reality in mind. Its base is lightweight enough to absorb into the scalp within minutes of application, without leaving the heavy film that traditional oils like pure coconut or castor require. This means it can be used as part of a morning routine without affecting how your hair looks or feels throughout the day — a critical factor for working professionals in cities like Bengaluru, Mumbai, or Delhi who cannot carry the visible evidence of an oil treatment into office environments.`,
    body2: `The manageability benefit extends to how the hair behaves after washing. Users consistently report that hair washed after biotin oil application feels softer, detangles more easily, and has noticeably more shine without the heaviness associated with oil treatment residue. This improved manageability reduces the mechanical damage caused by aggressive brushing and combing through dry, tangled hair — another source of breakage that compounds over months into significant thinning.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Section the Hair and Expose the Scalp',
    desc: 'Part your hair into sections using a tail comb to expose the scalp clearly. This is essential — most people apply oil to the hair strands, not the scalp, which significantly reduces effectiveness. Target the skin, not the shaft.',
  },
  {
    num: '02',
    title: 'Apply Oil Directly to the Scalp',
    desc: 'Use the applicator tip or your fingertips to apply HairOShine Biotin Oil directly onto the scalp in small drops along each parting. A little goes further than you think — two to three drops per section is sufficient. Avoid saturating the lengths with oil, which can weigh hair down without meaningful benefit.',
  },
  {
    num: '03',
    title: 'Massage for 5–10 Minutes',
    desc: 'This is the most important step most people skip. Use your fingertips (not nails) to massage the oil into the scalp using circular motions. Massage increases blood circulation to the follicles, warming the oil for deeper penetration and stimulating the follicle itself. Five to ten minutes of consistent scalp massage amplifies the oil\'s effectiveness significantly.',
  },
  {
    num: '04',
    title: 'Leave On for Minimum 1 Hour (Overnight for Maximum Benefit)',
    desc: 'Allow the oil to work for at least one hour before washing. For best results — particularly during the first four weeks of use — apply the night before and wash in the morning. Overnight application allows the biotin and nourishing compounds the maximum time to penetrate the scalp barrier and reach the follicle.',
  },
  {
    num: '05',
    title: 'Wash Out Thoroughly with Mild Shampoo',
    desc: 'Use a sulphate-free or low-sulphate shampoo to wash the oil out. Avoid shampoos with harsh detergents (SLS or SLES in the first two ingredients) as these strip the scalp of the residual biotin that continues working post-wash. You may need two rounds of shampoo if you\'ve applied generously — that is fine and expected.',
  },
  {
    num: '06',
    title: 'Repeat 2–3 Times Per Week for Best Results',
    desc: 'Consistency is the single most important factor in seeing results. A single application does not visibly change your hair. A two-to-three times per week habit, sustained over six to twelve weeks, creates measurable, lasting improvements in hair density, thickness, and growth rate.',
  },
];

const timeline = [
  {
    period: 'Week 1',
    title: 'Scalp Responds to Nourishment',
    detail: 'The scalp feels less dry and itchy. Tightness decreases. You may notice less flakiness after washing. Hair feels slightly softer and more manageable after the first two or three applications.',
  },
  {
    period: 'Week 2',
    title: 'Hair Fall Begins to Reduce',
    detail: 'The amount of hair shed during washing and combing noticeably decreases. This is biotin strengthening the hair shaft and reducing breakage — not new growth yet, but protection of existing strands.',
  },
  {
    period: 'Week 4',
    title: 'Visible Shine and Texture Improvement',
    detail: 'Hair looks noticeably shinier, more uniform in texture, and feels stronger between your fingers. Flyaways and frizz reduce. Fine baby hairs along the hairline may become visible — early signs of new growth beginning.',
  },
  {
    period: 'Week 6+',
    title: 'Measurable Growth and Density',
    detail: 'New hair growth becomes clearly visible, particularly at the hairline and in areas previously thinning. Hair density is perceptibly higher. Strands feel thicker and more resilient. This is when most users see the results that prompted them to start.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧬',
    title: 'Biotin Concentration and Delivery',
    body: 'Not all biotin oils are equal in terms of how effectively the biotin reaches the follicle. Look for formulas where biotin is a primary active ingredient — listed early in the ingredient deck — not a trace addition used for marketing purposes. The molecular size of the biotin compounds and the carrier oil base determine how deeply the nutrient penetrates the scalp. Lightweight, easily-absorbed carrier bases are significantly more effective than heavy oils for biotin delivery.',
  },
  {
    icon: '🌿',
    title: 'Non-Comedogenic Formula',
    body: 'A growth oil that clogs scalp pores is counterproductive. Pore blockage prevents the sebum drainage necessary for healthy follicle function and can cause scalp acne — a condition that directly damages follicles over time. Verify that the formula is explicitly non-comedogenic or designed for scalp use rather than a generic body oil. Oils like mineral oil or petrolatum, while moisturising for skin, are too occlusive for scalp use.',
  },
  {
    icon: '🏺',
    title: 'Applicator Design and Usability',
    body: 'In India\'s fast-paced daily life, a product\'s usability directly affects how consistently it gets used. A precision applicator tip that allows targeted scalp application — without saturating the hair lengths — is the difference between a growth oil that integrates into your routine and one that feels like a chore. Mess-free application matters for adoption, and adoption is everything for results.',
  },
  {
    icon: '📦',
    title: 'Pack Size and Value',
    body: 'Hair oil results require a minimum of six to twelve weeks of consistent use. A product in a single small bottle may run out before the visible results phase. Packs of two — like HairOShine\'s standard offering — ensure you have sufficient product for the full treatment period without the interruption of reordering mid-routine. Uninterrupted consistency produces measurably better outcomes than the same total applications spread across gaps.',
  },
];

const whoNeeds = [
  { icon: '👩', label: 'Women With Postpartum Hair Loss', desc: 'Hormonal shifts after pregnancy trigger significant telogen effluvium. Biotin oil provides targeted scalp nourishment during the critical regrowth phase.' },
  { icon: '👨', label: 'Men With Early Thinning', desc: 'DHT-related thinning at the temples and crown responds well to consistent scalp stimulation and follicle nourishment — begin as early as possible for best results.' },
  { icon: '🏙️', label: 'Urban Professionals Under Stress', desc: 'Chronic work stress elevates cortisol, which directly shortens the hair growth cycle. Regular oil application plus scalp massage actively counteracts this cortisol effect.' },
  { icon: '🌊', label: 'Hard Water Sufferers', desc: 'Cities like Chennai, Delhi, and Bengaluru have notoriously hard water that causes mineral buildup on the scalp, clogging follicles. Biotin oil nourishes beneath this barrier layer.' },
  { icon: '🎨', label: 'Colour and Chemical Treatment Users', desc: 'Chemical processes strip keratin from the hair shaft. Biotin oil replenishes this loss at the root level, protecting new growth from the damage pattern of treated hair.' },
  { icon: '🍽️', label: 'Those With Nutritional Deficiencies', desc: 'Irregular meals, vegetarian or restrictive diets, and B-vitamin deficiencies — common across India — deprive follicles of essential nutrients. Topical biotin compensates directly.' },
  { icon: '☀️', label: 'High UV and Outdoor Exposure', desc: 'Year-round sun exposure in Indian cities breaks down the hair\'s protein structure. Biotin oil rebuilds this at the root, protecting new growth from UV-induced thinning.' },
  { icon: '🔄', label: 'Anyone Who Has Tried Multiple Products Without Results', desc: 'If oils and serums haven\'t worked before, the issue is likely scalp delivery. Biotin oil applied directly to the scalp — not the hair — changes the result entirely.' },
];

const myths = [
  {
    myth: 'Oiling your hair every day is the best way to grow it faster',
    truth: 'Daily oiling actually clogs pores and creates product buildup that suffocates follicles. Two to three applications per week, with adequate scalp massage, is optimal. Over-oiling is one of the most common reasons people see poor results from growth oils.',
  },
  {
    myth: 'If you apply more oil, you get faster results',
    truth: 'The scalp can only absorb a finite amount of oil. Excess oil sits on the surface, weighs the hair down, and attracts dirt and pollution. A targeted, moderate application that gets massaged into the scalp delivers more biotin to follicles than a heavy dousing that mostly stays on the hair shaft.',
  },
  {
    myth: 'Hair oils work from the outside of the strand inward',
    truth: 'The effective action of growth oils happens at the scalp, not the strand. Hair strands are dead structures — they cannot absorb nutrients through the cuticle in meaningful quantities. The entire benefit of a growth oil comes from scalp absorption and follicle nourishment. Apply to the scalp, not the lengths.',
  },
  {
    myth: 'You must leave oil on for at least 24 hours to see results',
    truth: 'Scalp absorption occurs primarily within the first 30 to 60 minutes after application. Leaving oil on for extended periods beyond that does not increase absorption — it primarily increases the risk of scalp buildup, sweat trapping, and pore congestion. Overnight application is beneficial; multi-day application is not.',
  },
  {
    myth: 'Biotin supplements are more effective than topical biotin oil',
    truth: 'Oral biotin supplements must pass through the digestive system, liver, and bloodstream before reaching the scalp — with significant dilution at every stage. Topical biotin oil delivers the nutrient directly to the follicle site at concentrated levels that are difficult to achieve through supplementation alone. Both can be beneficial; topical delivery is faster and more targeted.',
  },
  {
    myth: 'Hair oil causes hair to become dependent — your hair gets worse if you stop',
    truth: 'Hair oil does not create chemical dependency. What appears as "dependency" is simply the reversal of benefits when nourishment is withdrawn — the same as stopping any nutritional input. Hair health improves during use because the scalp environment improves. It does not regress below its pre-treatment baseline when use stops.',
  },
];

const faqs = [
  {
    q: 'Can I use HairOShine Biotin Oil every day?',
    a: 'Daily use is not recommended. Two to three applications per week delivers better results than daily application because it allows the scalp to process the nourishment fully between sessions without risk of buildup or pore congestion. Daily application does not increase effectiveness and can lead to excess oil accumulation that is counterproductive.',
  },
  {
    q: 'How long does it take to see results from biotin hair oil?',
    a: 'Initial changes — reduced hair fall and improved scalp condition — typically become noticeable within two to three weeks of consistent use. Visible growth and density improvements are most clearly seen at the four to six week mark. The hair growth cycle operates on biological timescales, so patience and consistency are essential. Maximum results are seen between three and four months of regular use.',
  },
  {
    q: 'Is biotin hair oil suitable for men?',
    a: 'Yes, absolutely. HairOShine Biotin Oil is designed for both men and women. Male pattern hair loss involves both follicle miniaturisation (addressed by nourishment and scalp stimulation) and DHT effects. While biotin oil does not block DHT, it maximises the health and productivity of follicles not yet significantly affected by DHT, and nourishes those in early stages of miniaturisation.',
  },
  {
    q: 'Can I use this oil if I have dandruff?',
    a: 'Yes, with a consideration. Biotin oil improves scalp hydration and reduces the dry conditions that contribute to dandruff. However, if your dandruff is fungal in origin (seborrhoeic dermatitis), you should also use an anti-fungal shampoo, as biotin oil alone will not address the underlying fungal component. Combine with appropriate cleansing for best results.',
  },
  {
    q: 'Will it make my hair greasy all day?',
    a: 'HairOShine\'s formula is specifically designed to be non-greasy and fast-absorbing. Applied to the scalp in appropriate amounts and massaged in thoroughly, it does not leave visible greasy residue on the hair throughout the day. The lightweight base is the key difference from heavier traditional oils that do leave this residue.',
  },
  {
    q: 'Can women with chemically coloured or treated hair use this?',
    a: 'Yes — with a simple precaution. Avoid applying directly to freshly coloured hair strands in the first 72 hours after a colour treatment, as any oil can slightly affect colour vibrancy in this window. Scalp application is fine throughout. After 72 hours, normal full application is safe and beneficial for rebuilding the keratin structure that chemical treatments damage.',
  },
  {
    q: 'How much oil should I use per application?',
    a: 'Less than you think. Focus on scalp coverage rather than volume. For a normal length head of hair, approximately one teaspoon of oil applied directly to the scalp in sections is sufficient. Excess oil beyond what the scalp can absorb simply sits on the surface and adds no benefit. The quality of the massage matters more than the quantity of oil.',
  },
  {
    q: 'Can I use biotin hair oil with other hair products?',
    a: 'Yes. Biotin oil is compatible with most hair care routines. Apply it before shampooing as a pre-wash treatment. Do not mix it directly with other leave-in products. If you use a hair serum or leave-in conditioner, apply those after washing out the oil — not in the same application.',
  },
  {
    q: 'Is it safe for pregnant or breastfeeding women?',
    a: 'Topical biotin is generally considered safe during pregnancy and breastfeeding, as systemic absorption from scalp application is minimal. However, as with any new product during pregnancy, it is best practice to consult your gynaecologist or dermatologist before beginning use.',
  },
  {
    q: 'What is the correct shampoo to use after oiling?',
    a: 'Use a sulphate-free or mild, low-sulphate shampoo to wash out biotin oil. Shampoos with high concentrations of SLS (sodium lauryl sulphate) as a primary ingredient strip the scalp too aggressively, removing the residual biotin that continues to work post-wash. A gentle cleansing shampoo that removes oil effectively without aggressively stripping the scalp barrier is ideal.',
  },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────────

export default function HairOShineBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Hair Care · Biotin · Growth Oil · India Guide 2026</span>
            <h1 className={styles.heroTitle}>
              Best Hair Oil for
              <br />
              <em>Hair Growth in India</em>
              <br />
              <span className={styles.heroTitleSub}>The Complete 2026 Biotin Guide</span>
            </h1>
            <p className={styles.heroSub}>
              Hair fall affects over 60% of Indian adults under 35. Pollution, hard water,
              stress, and nutritional gaps combine into a relentless assault on your follicles.
              This guide explains exactly what your scalp needs — and why Biotin-enriched
              oil is the most evidence-backed answer available today.
            </p>
            <div className={styles.heroMeta}>
              <span>⏱ 18 min read</span>
              <span>📅 March 2026</span>
              <span>📝 5,500+ words</span>
            </div>
            <div className={styles.heroActions}>
              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy HairOShine Biotin Oil on Amazon →
              </a>
              <span className={styles.heroSubNote}>Pack of 2 · Scalp Nourishment · Biotin-Enriched</span>
            </div>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/hairoshine-biotin-oil.png"
                alt="HairOShine Advance Biotin Hair Oil — Pack of 2 for Hair Growth India"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 420px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🧬 Biotin Enriched</span>
              <span>🌿 Scalp Nourishing</span>
              <span>💪 Anti-Hair Fall</span>
              <span>✨ Non-Greasy</span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ─── TABLE OF CONTENTS ─────────────────────────────────────────────── */}
        <nav className={styles.tocWrap} aria-label="Table of Contents">
          <p className={styles.tocTitle}>📋 What You&apos;ll Learn in This Guide</p>
          <ol className={styles.tocList}>
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.tocLink}>
                  <span className={styles.tocNum}>{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ─── INTRODUCTION ───────────────────────────────────────────────────── */}
        <section id="intro" className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Hair Fall Is an Epidemic in India — and Why It&apos;s Getting Worse</h2>
          <p>
            Open your bathroom drain after a shower. If what you see makes your stomach drop, you
            are not alone. Hair fall — the kind that goes well beyond normal daily shedding — has
            become one of the most common health complaints among Indian adults under 40, affecting
            men and women in roughly equal measure and beginning noticeably earlier each decade.
          </p>
          <p>
            The causes are not mysterious. They are structural features of modern Indian life,
            stacking on top of each other in an almost perfectly designed system for follicle
            destruction. India&apos;s urban water supply is predominantly hard — high in calcium,
            magnesium, and chlorine that build up on the scalp over months of daily washing,
            gradually blocking follicles and stripping the scalp&apos;s natural acid mantle. Add to
            this the particulate pollution levels of cities like Delhi, Mumbai, and Hyderabad —
            among the highest in the world — where airborne toxins land on the scalp daily,
            oxidising the hair&apos;s protein structure and triggering inflammatory responses that
            shorten the growth cycle.
          </p>
          <p>
            India&apos;s climate adds another dimension. The intense UV radiation of the subcontropical
            sun degrades keratin proteins in the hair shaft over time, while the extreme humidity
            cycles between monsoon and dry seasons cause the hair cortex to repeatedly swell and
            contract — creating microscopic fractures that weaken the strand structurally. In coastal
            cities like Chennai and Mumbai, this humidity-dryness cycle is relentless. In dry northern
            cities like Delhi and Jaipur, the scorching summers and cold winters alternate in ways
            that chronically dehydrate the scalp.
          </p>
          <p>
            Stress — the cortisol-producing, sleep-disrupting, telogen-effluvium-triggering kind — is
            epidemic in Indian professional life. Cortisol directly interferes with the hair growth
            cycle at the hormonal level, pushing follicles prematurely into the resting phase and
            causing waves of shedding that can remove up to 30% of an individual&apos;s hair density
            within a few months of a significant stress event. This pattern is widely recognised
            clinically but often dismissed as temporary — when in fact, without targeted nutritional
            and topical intervention, the hair does not always return to its previous density on its own.
          </p>
          <p>
            Nutritional deficiency compounds everything. India&apos;s predominantly vegetarian dietary
            patterns, while rich in certain nutrients, create systematic deficiencies in others
            that are critical for hair health — particularly Biotin (Vitamin B7), iron, zinc, and
            complete proteins. B7 is found most abundantly in eggs, liver, and certain nuts — foods
            that are absent from a significant proportion of Indian diets. Without adequate biotin,
            the keratin synthesis process that builds each hair strand is compromised at a
            fundamental biochemical level.
          </p>
          <p>
            This guide covers everything you need to know about choosing and using the right hair oil
            for hair growth in the Indian context: the science of the hair growth cycle, what biotin
            actually does at the follicle level, a complete assessment of different hair and scalp
            types, a detailed breakdown of what to look for when buying a growth oil in India, and
            a step-by-step application protocol that maximises results. If you have been losing hair,
            frustrated by products that promised growth and delivered disappointment, or simply want
            to understand what is happening to your hair and how to address it scientifically —
            read this in full.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ─────────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of Hair Growth — What Your Scalp Is Actually Doing</h2>

          <h3 className={styles.subHeading}>The Hair Growth Cycle: A Three-Phase System</h3>
          <p>
            Every hair follicle on your scalp operates independently through a cyclical process
            divided into three distinct phases: <strong>anagen</strong> (active growth),
            <strong> catagen</strong> (transition), and <strong>telogen</strong> (resting and shedding).
            The anagen phase — during which the hair root is actively dividing and pushing the strand
            outward — lasts between two and six years in healthy follicles. This is the phase that
            determines how long your hair can grow. The longer and more robust the anagen phase,
            the longer and thicker each strand will become before the follicle enters its rest cycle.
          </p>
          <p>
            The catagen phase is brief — lasting only two to three weeks — during which growth stops
            and the follicle begins its transition toward rest. The telogen phase lasts approximately
            three months, after which the hair is shed and a new anagen phase begins. In a healthy
            scalp, approximately 85–90% of follicles are in the anagen phase at any given time —
            which is why losing 50–100 hairs daily is considered normal and does not visibly affect
            density. Problems arise when this ratio shifts — when stress, nutrition deficiency, or
            hormonal disruption pushes a disproportionate number of follicles into telogen simultaneously.
          </p>

          <h3 className={styles.subHeading}>What Happens When the Cycle Is Disrupted</h3>
          <p>
            Telogen effluvium — the medical term for stress-induced mass shedding — occurs when a
            significant event triggers a batch of follicles to simultaneously enter the resting phase.
            The shedding happens approximately three months after the triggering event, which is why
            hair loss following illness, childbirth, or a period of intense stress often appears
            &quot;delayed&quot; and confusing. By the time the shedding is visible, the cause has often
            been forgotten or dismissed as unrelated.
          </p>
          <p>
            Androgenetic alopecia — the pattern thinning that affects both men and women — operates
            differently: the follicle itself miniaturises progressively under the influence of
            dihydrotestosterone (DHT), producing finer, shorter hairs each cycle until the follicle
            is no longer productive. While topical biotin oil does not block DHT, it maximises the
            functionality of follicles not yet significantly miniaturised and supports the health
            and longevity of those in early stages of the process.
          </p>

          <h3 className={styles.subHeading}>Why Scalp Health Is the Foundation of Everything</h3>
          <p>
            The follicle is a living structure embedded in the scalp&apos;s dermis layer, requiring a
            specific environment to function optimally. Blood circulation to the scalp delivers
            oxygen and nutrients to the follicle matrix cells that produce each hair strand. Sebum
            production by the sebaceous glands adjacent to each follicle provides the natural
            moisturising and antimicrobial protection the scalp needs. The scalp&apos;s pH balance
            determines the microbial community that lives on its surface — maintaining the healthy
            bacteria while suppressing the overgrowth of fungal species that cause dandruff and
            folliculitis.
          </p>
          <p>
            When any of these factors is compromised — through dehydration, nutritional deficiency,
            excess product buildup, pollution, or hormonal shifts — the follicle produces hair of
            lower quality for shorter growth phases. This degradation is gradual and often invisible
            until a significant amount of density has been lost. The goal of targeted scalp nutrition
            — delivered through a well-formulated growth oil — is to restore and maintain the optimal
            environment before that loss becomes irreversible.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> The average Indian adult loses between 15–25% of their
              hair density before they notice it visually. This is because hair density must drop
              below a critical threshold before the scalp becomes visible through the hair. Starting
              a targeted growth routine before loss is visually obvious — or at its earliest visible
              stage — produces dramatically better outcomes than waiting until thinning is advanced.
            </div>
          </div>
        </section>

        {/* ─── BIOTIN DEEP DIVE ─────────────────────────────────────────────────── */}
        <section id="biotin-deep-dive" className={styles.section}>
          <h2 className={styles.sectionTitle}>What Biotin Actually Does to Your Hair Follicles</h2>

          <h3 className={styles.subHeading}>Biotin&apos;s Role in Keratin Synthesis</h3>
          <p>
            Biotin — Vitamin B7 — is a water-soluble B-complex vitamin that functions as a coenzyme
            in five carboxylase enzymes responsible for critical metabolic processes, including the
            synthesis of fatty acids and amino acids. In the context of hair health, its most
            significant function is as a cofactor in the enzymatic reactions that produce
            <strong> keratin</strong> — the fibrous structural protein that constitutes the
            overwhelming majority of each hair strand&apos;s composition.
          </p>
          <p>
            The keratin that makes up human hair is arranged in a specific alpha-helical protein
            structure that gives it extraordinary tensile strength and flexibility when intact. Biotin
            deficiency disrupts the production of the amino acid building blocks — particularly
            cysteine — that form the disulphide bonds holding this helical structure together. The
            result is hair that is structurally weaker at the molecular level, prone to fracturing
            along the shaft, and progressively thinner each growth cycle as the follicle produces
            lower-quality keratin strands.
          </p>

          <h3 className={styles.subHeading}>Why Topical Application Works</h3>
          <p>
            The scalp&apos;s outermost layer — the stratum corneum — acts as a selective barrier, but
            it is permeable to lipophilic (fat-soluble) compounds and small molecular weight
            molecules. Biotin, formulated in an appropriate oil base with the right molecular
            carriers, can penetrate this barrier and reach the upper dermis where hair follicles
            are located. This is fundamentally different from biotin sitting on the hair shaft,
            which produces no meaningful growth benefit — the shaft is a dead structure incapable
            of metabolic activity.
          </p>
          <p>
            The advantage of topical biotin over oral supplementation is directness. Oral biotin
            enters the bloodstream through the gut and is distributed systemically, with the scalp
            receiving only a fraction of the total absorbed dose. Topical application concentrates
            the biotin precisely where it is needed — at the follicle — at levels that dietary or
            supplemental intake cannot reliably achieve at that specific location.
          </p>

          <h3 className={styles.subHeading}>The Indian Dietary Context</h3>
          <p>
            India&apos;s predominantly vegetarian food culture creates a specific nutritional profile
            that makes topical biotin supplementation particularly relevant. The richest dietary
            sources of biotin are egg yolks, organ meats (particularly liver), and certain nuts —
            foods that are either avoided on religious grounds or not regularly consumed across
            large portions of the Indian population. While biotin is present in legumes, seeds,
            and vegetables, the bioavailability from plant sources is significantly lower than
            from animal sources.
          </p>
          <p>
            Furthermore, Indian cooking methods — which often involve prolonged high-heat cooking
            — degrade B vitamins substantially compared to raw or briefly cooked preparations.
            This means that even a vegetarian diet theoretically rich in biotin may deliver
            significantly less bioavailable B7 than its raw ingredient content suggests. Topical
            application bypasses this dietary variability entirely, delivering biotin directly
            to the follicle regardless of what is or is not being eaten.
          </p>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Hair Problem — And the Specific Solution</h2>
          <p className={styles.sectionIntro}>
            Most hair problems have a root cause that a well-formulated biotin oil directly addresses.
            Here is the problem-to-solution breakdown for the four most common hair concerns among
            Indian adults.
          </p>
          <div className={styles.problemsGrid}>
            {problemCards.map((card) => (
              <div key={card.problem} className={styles.problemCard}>
                <span className={styles.problemIcon}>{card.icon}</span>
                <h3 className={styles.problemTitle}>{card.problem}</h3>
                <p className={styles.problemDesc}>{card.desc}</p>
                <div className={styles.problemFix}>
                  <span className={styles.fixLabel}>✓ Solution</span>
                  <p>{card.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── HAIR TYPE GUIDE ────────────────────────────────────────────────── */}
        <section id="hair-type-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete Hair Type Suitability Guide</h2>
          <p className={styles.sectionIntro}>
            HairOShine Biotin Oil is formulated for broad compatibility, but understanding how it
            interacts with different scalp and hair types ensures you use it most effectively.
          </p>
          <div className={styles.skinTypeGrid}>
            {hairTypes.map((ht) => (
              <div key={ht.type} className={styles.skinCard}>
                <div className={styles.skinCardTop}>
                  <span className={styles.skinIcon}>{ht.icon}</span>
                  <span className={styles.skinType}>{ht.type}</span>
                  <span className={`${styles.verdict} ${styles[ht.verdictClass]}`}>
                    {ht.verdict}
                  </span>
                </div>
                <p className={styles.skinExplanation}>{ht.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PRODUCT DEEP DIVE ──────────────────────────────────────────────── */}
        <section id="product-deep-dive" className={styles.section}>
          <h2 className={styles.sectionTitle}>HairOShine Biotin Oil — Feature-by-Feature Breakdown</h2>

          {/* Mid CTA 1 */}
          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              Biotin-Enriched. Scalp-First. Non-Greasy. Pack of 2.
            </p>
            <p className={styles.midCtaSub}>
              The complete hair growth oil built for Indian scalp conditions and modern routines.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get Advanced Biotin Oil on Amazon — Pack of 2 →
            </a>
          </div>

          {benefits.map((b) => (
            <div key={b.number} className={styles.benefitBlock}>
              <div className={styles.benefitNumber}>{b.number}</div>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitHeading}>{b.heading}</h3>
                <p>{b.body1}</p>
                <p>{b.body2}</p>
              </div>
            </div>
          ))}

          <div className={styles.callout} style={{ marginTop: '40px' }}>
            <span className={styles.calloutIcon}>⚠️</span>
            <div>
              <strong>Important Distinction:</strong> There is a fundamental difference between
              a <em>conditioning oil</em> and a <em>growth oil</em>. Conditioning oils (coconut,
              argan, marula) improve the appearance and manageability of existing hair by coating
              the cuticle. Growth oils work at the scalp level to improve the environment in which
              new hair is produced. HairOShine Biotin Oil is a growth-first formula — it is designed
              to change what your follicles produce, not just how your current hair looks. The
              visible effects of a conditioning oil are immediate; the visible effects of a growth
              oil build over six to twelve weeks. Do not judge a growth oil on a two-week trial.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Application Guide</h2>
          <p className={styles.sectionIntro}>
            Technique matters as much as product quality. Most people apply hair oil incorrectly —
            focusing on the hair rather than the scalp. Follow this protocol precisely.
          </p>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.num} className={styles.stepBox}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.proTip}>
            💡 <strong>Pro Tip:</strong> Warm the oil slightly before application by holding the
            bottle between your palms for 60 seconds or standing it in warm water for a few minutes.
            Warm oil penetrates the scalp barrier more effectively than room-temperature oil, and
            the warmth itself improves blood circulation to the follicle on application. Pair your
            oil routine with a consistent face and scalp cleansing practice — our{' '}
            <Link
              href="/blog/best-face-wash-oily-skin-india-2026"
              className={styles.internalLink}
            >
              guide to the best face wash for oily skin in India
            </Link>{' '}
            covers exactly how to prep your skin and scalp before applying active treatments.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>Realistic Results Timeline — What to Expect and When</h2>
          <p className={styles.sectionIntro}>
            The hair growth cycle operates on biological timescales. Here is an honest, week-by-week
            account of what consistent use of HairOShine Biotin Oil delivers.
          </p>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div key={item.period} className={styles.timelineItem}>
                <div className={styles.timelineDotWrap}>
                  <div className={styles.timelineDot} />
                  {i < timeline.length - 1 && <div className={styles.timelineLine} />}
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelinePeriod}>{item.period}</span>
                  <strong className={styles.timelineTitle}>{item.title}</strong>
                  <p className={styles.timelineDetail}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── BUYING GUIDE ────────────────────────────────────────────────────── */}
        <section id="buying-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete Buying Guide — What to Look for in a Hair Growth Oil in India</h2>
          <p className={styles.sectionIntro}>
            The Indian hair oil market is saturated with products making growth claims that their
            formulas do not support. Here is precisely what separates a product worth buying from
            one to avoid — and why each criterion matters.
          </p>

          <div className={styles.buyingGrid}>
            {buyingGuidePoints.map((pt) => (
              <div key={pt.title} className={styles.buyingCard}>
                <span className={styles.buyingIcon}>{pt.icon}</span>
                <h3 className={styles.buyingTitle}>{pt.title}</h3>
                <p className={styles.buyingBody}>{pt.body}</p>
              </div>
            ))}
          </div>

          <h3 className={styles.subHeading}>Common Mistakes People Make When Buying Hair Oil in India</h3>
          <p>
            The most pervasive buying mistake is selecting a hair oil based on brand recognition or
            price rather than formula. Many widely advertised hair oils in India — including several
            market-leading brands — are based on mineral oil or light paraffin, which coat the hair
            shaft to create a temporary shine effect without delivering any meaningful scalp or follicle
            nourishment. The appearance of healthy hair is not the same as the reality of a healthy
            scalp. Read the ingredient list. If the first listed ingredient is mineral oil, paraffin,
            or a chemical emollient rather than a bioactive oil or vitamin, the product is primarily
            cosmetic rather than therapeutic.
          </p>
          <p>
            The second most common mistake is inconsistency. Indian consumers frequently purchase
            a single bottle of growth oil, use it for two to three weeks without visible transformation,
            and conclude it does not work — abandoning it before the biological timeline for visible
            results has even begun. Hair growth operates on cycles of weeks to months. A product that
            meaningfully improves scalp health and follicle function requires six to twelve weeks of
            consistent use before its results are visible. Buying a pack of two — ensuring uninterrupted
            supply — is the single most practical step toward actually completing the treatment period
            that produces results.
          </p>
          <p>
            The third mistake is applying oil to the hair lengths rather than the scalp. This is
            perhaps the most impactful error because it means the biotin never reaches the follicle.
            It conditions the visible hair (which is dead tissue) while the living follicle below
            receives nothing. Scalp-first application changes outcomes completely.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              The right formula. The right application. The right results.
            </p>
            <p className={styles.midCtaSub}>
              HairOShine Advance Biotin Hair Oil — pack of 2, so you never interrupt your routine.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop HairOShine Advanced Oil on Amazon →
            </a>
          </div>
        </section>

        {/* ─── WHO NEEDS THIS ──────────────────────────────────────────────────── */}
        <section id="who-needs" className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Needs HairOShine Biotin Oil Most</h2>
          <div className={styles.whoGrid}>
            {whoNeeds.map((w) => (
              <div key={w.label} className={styles.whoCard}>
                <span className={styles.whoIcon}>{w.icon}</span>
                <p className={styles.whoLabel}>{w.label}</p>
                <p className={styles.whoDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── INTERNAL LINKS BAND ─────────────────────────────────────────────── */}
        <div className={styles.relatedBand}>
          <p className={styles.relatedBandTitle}>Complete Your Skincare Routine</p>
          <p className={styles.relatedBandSub}>
            Hair health and skin health are deeply connected. Build a complete routine with
            the right products for your scalp, face, and body.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/best-face-wash-oily-skin-india-2026"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🍊</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Face Wash for Oily Skin India 2026</p>
                <p className={styles.relatedCardSub}>FreshOLite Vitamin C Face Wash — cleanse and brighten daily</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🧴</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Moisturizer for Combination Skin</p>
                <p className={styles.relatedCardSub}>Moist Sure Cream with Aloe Vera, Vitamin-E &amp; Jojoba Oil</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link
              href="/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🌿</span>
              <div>
                <p className={styles.relatedCardTitle}>Calamine Lotion Uses &amp; Benefits — 2026 Guide</p>
                <p className={styles.relatedCardSub}>Everything you need to know about calamine and skin care</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Hair Oil Myths vs. Truth — What Indian Consumers Get Wrong</h2>
          <div className={styles.mythsList}>
            {myths.map((m) => (
              <div key={m.myth} className={styles.mythCard}>
                <div className={styles.mythTop}>
                  <span className={styles.mythLabel}>Myth</span>
                  <p>{m.myth}</p>
                </div>
                <div className={styles.mythBottom}>
                  <span className={styles.truthLabel}>Truth</span>
                  <p>{m.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────────────────────────────── */}
        <section id="faq" className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions About Biotin Hair Oil</h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{f.q}</summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ─── BOTTOM CTA ──────────────────────────────────────────────────────── */}
        <section className={styles.bottomCta}>
          <div className={styles.bottomCtaOrb} aria-hidden="true" />
          <h2 className={styles.bottomCtaTitle}>Your Scalp Has Been Waiting for This</h2>
          <p>
            Hair fall, thinning, and slow growth are not inevitable. They are the predictable
            result of follicles deprived of the nourishment they need — and they respond
            meaningfully to consistent, targeted biotin nutrition delivered directly to the scalp.
            HairOShine Advance Biotin Hair Oil is the formula built for India&apos;s specific hair
            challenges: hard water, UV stress, nutritional gaps, and fast-paced routines that
            need products that work without complexity.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy HairOShine Biotin Oil on Amazon →
          </a>
          <p className={styles.bottomNote}>Pack of 2 · All Hair Types · Non-Greasy Formula · Free Delivery Available</p>
        </section>

      </div>
    </article>
  );
}