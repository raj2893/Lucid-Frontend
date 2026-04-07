import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './acne-vs-oily-skin-face-wash-blog.module.css';

export const metadata: Metadata = {
  title: 'Face Wash for Acne vs Oily Skin India: What\'s Actually Better? (2026 Guide)',
  description:
    'Acne face wash vs oily skin face wash — which is right for you? Expert India guide covers ingredients, skin types, common mistakes & best picks. Read now.',
  keywords: [
    'face wash for acne vs oily skin India',
    'best face wash for acne India',
    'best face wash for oily skin India',
    'acne face wash India 2026',
    'oily skin face wash India',
    'face wash for acne-prone skin',
    'salicylic acid face wash India',
    'niacinamide face wash India',
    'face wash for combination skin India',
    'best face wash for pimples India',
    'face wash for oily and acne skin',
    'anti acne face wash India',
    'face wash for sebum control India',
    'best cleanser for acne India',
    'pore cleansing face wash India',
    'face wash for blackheads India',
    'face wash for breakouts India',
    'face wash for men acne India',
    'face wash for women acne India',
    'face wash oily skin 2026',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/face-wash-acne-vs-oily-skin-india',
  },
  openGraph: {
    title: 'Face Wash for Acne vs Oily Skin India: What\'s Actually Better? (2026 Guide)',
    description:
      'The definitive India guide to choosing between acne face wash and oily skin face wash — ingredients decoded, skin types mapped, and the right call made.',
    images: [
      {
        url: '/images/fresho-sensitive-face-wash.png',
        width: 1200,
        height: 630,
        alt: 'FreshOLite Face Wash for Acne and Oily Skin India',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0bmAFPGc';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'The Acne vs Oily Skin Confusion Explained' },
  { id: 'science-oily', label: 'The Science of Oily Skin — Why Your Sebum Overproduces' },
  { id: 'science-acne', label: 'How Acne Actually Forms — The Real Mechanism' },
  { id: 'key-differences', label: 'Core Differences: Acne vs Oily Skin Formulas' },
  { id: 'ingredients', label: 'Ingredient Decoder — What to Look For and Avoid' },
  { id: 'skin-type-guide', label: 'Complete Skin Type Suitability Guide' },
  { id: 'problems-grid', label: 'Your Skin Problem — The Right Solution' },
  { id: 'product-deep-dive', label: 'FreshOLite Face Wash — Full Breakdown' },
  { id: 'how-to-use', label: 'Step-by-Step Cleansing Protocol' },
  { id: 'results-timeline', label: 'Results Timeline — What to Expect Week by Week' },
  { id: 'buying-guide', label: 'Complete Buying Guide for India' },
  { id: 'who-needs', label: 'Who Needs This Face Wash Most' },
  { id: 'myths', label: 'Face Wash Myths vs. Scientific Truth' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🛢️',
    problem: 'Chronic Shine and Excess Sebum',
    desc: 'By midday your T-zone is visibly oily regardless of how thoroughly you washed in the morning. Makeup slides off, pores look enlarged, and your skin feels perpetually greasy — particularly in humid Indian weather between March and October.',
    solution: 'A sebum-regulating face wash with niacinamide and gentle surfactants removes excess surface oil without triggering the rebound overproduction that harsh cleansers cause. The skin learns to produce less oil when it stops being chronically stripped.',
  },
  {
    icon: '🔴',
    problem: 'Persistent Breakouts and Pimples',
    desc: 'Whiteheads, blackheads, and inflamed papules cluster around the forehead, chin, and nose. They clear temporarily but cycle back within days. This pattern indicates a combination of clogged follicles, bacterial activity, and inflammation — not just oil.',
    solution: 'An acne-targeting formula addresses all three root causes: keratolytic acids (salicylic acid) exfoliate inside the follicle, antibacterial agents reduce P. acnes activity, and anti-inflammatory botanicals calm redness and swelling at the lesion site.',
  },
  {
    icon: '🕳️',
    problem: 'Visibly Enlarged, Clogged Pores',
    desc: 'Pores on the nose, cheeks, and chin appear stretched and filled with oxidised sebum (blackheads) or white keratin plugs (whiteheads). In India\'s pollution-heavy urban environments, these blocked pores accumulate particulate matter that accelerates oxidation and comedone formation.',
    solution: 'Regular use of a BHA-containing face wash dissolves the sebum and dead cell mixture inside each pore from the inside out — the only mechanism that actually reduces pore congestion rather than temporarily masking it.',
  },
  {
    icon: '🌡️',
    problem: 'Oily and Acne-Prone Simultaneously',
    desc: 'This is the most common and most frustrating pattern: high sebum production that consistently leads to breakouts, meaning both problems are present and each makes the other worse. Over-stripping to control oil creates microtears that harbour bacteria; excess oil creates the anaerobic environment P. acnes thrives in.',
    solution: 'A dual-action formula that controls sebum and treats active acne simultaneously is the only intelligent approach for this presentation. Products addressing only one of these factors leave the other unmanaged — ensuring the cycle continues indefinitely.',
  },
];

const skinTypes = [
  {
    type: 'Oily Skin (No Acne)',
    icon: '💦',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'A sebum-control face wash is precisely calibrated for this presentation. Focus on niacinamide and mild surfactants that regulate oil without causing dryness or triggering compensatory overproduction.',
  },
  {
    type: 'Acne-Prone (Any Skin Type)',
    icon: '🔴',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'An acne-targeted formula is the correct primary cleanser. Consistency matters more than intensity — twice-daily use of a BHA-containing wash outperforms weekly harsh treatments by maintaining a clear follicular environment continuously.',
  },
  {
    type: 'Combination Skin',
    icon: '☯️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Dual-action formulas work best for combination skin — addressing the oily T-zone while not over-drying the drier cheek zones. A balanced pH and moderate surfactant concentration is essential for this skin type.',
  },
  {
    type: 'Dry Skin with Occasional Breakouts',
    icon: '🏜️',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Use an acne face wash only on breakout-prone zones (spot application or targeted rinse) and avoid over-cleansing. Over-washing dry acne-prone skin worsens barrier function, which can paradoxically worsen acne.',
  },
  {
    type: 'Sensitive Skin',
    icon: '🌸',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Look for formulas with lower concentrations of active acids and fragrance-free profiles. Avoid foaming agents like SLS. Niacinamide is particularly suited for sensitive skin as it addresses oiliness without irritation.',
  },
  {
    type: 'Mature Skin with Oily Patches',
    icon: '🕰️',
    verdict: 'With Caution',
    verdictClass: 'caution',
    explanation: 'Aging skin loses elasticity and barrier function. Harsh acne formulas accelerate this. Choose formulas with low acid concentrations and supplementary hydrating ingredients to preserve skin integrity while addressing breakouts.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Salicylic Acid — The Only Ingredient That Clears Inside the Pore',
    body1: `Salicylic acid is a beta-hydroxy acid (BHA) — and the single most important distinction between an acne face wash and a generic oily skin face wash is whether it contains this ingredient in a meaningful concentration. Unlike alpha-hydroxy acids (AHAs such as glycolic or lactic acid), salicylic acid is oil-soluble. This chemical property is the entire basis of its effectiveness: because it dissolves in oil rather than water, it can penetrate into the sebum-filled interior of a hair follicle — the precise location where acne begins — rather than acting only on the skin's surface.

Once inside the follicle, salicylic acid performs two simultaneous functions. First, it dissolves the plug of hardened sebum and dead skin cells that is blocking the follicle opening — the formation that becomes a blackhead when oxidised by air exposure, or a whitehead when sealed beneath the skin's surface. Second, it exfoliates the follicle wall itself, reducing the rate at which dead skin cells accumulate inside the pore and re-form the blockage after treatment. This dual mechanism is what makes BHA the gold standard active in acne cleansers — not just unclogging existing pores, but slowing the rate at which they re-clog.`,
    body2: `For Indian skin in particular, salicylic acid's compatibility with the skin's natural oil chemistry makes it especially effective. India's climate produces a skin environment where sebum production is chronically elevated — tropical heat increases sebaceous gland activity, and urban pollution accelerates the oxidation of sebum into the sticky, pore-blocking substance that feeds comedone formation. A salicylic acid face wash used consistently twice daily creates a continuously maintained, clear follicular environment that prevents the accumulation cycle from completing. The visible result — fewer blackheads, fewer whiteheads, smoother pore texture — is the direct product of this sustained inside-the-pore cleansing action that no other topical ingredient replicates.`,
  },
  {
    number: '02',
    heading: 'Niacinamide — Sebum Regulation Without Stripping',
    body1: `Niacinamide — Vitamin B3 — is the most versatile and universally compatible active ingredient in modern skincare formulation. Its relevance to the acne-versus-oily-skin face wash debate is profound because it addresses the mechanism that connects both conditions: excess sebum production. Niacinamide reduces sebum output by inhibiting the transfer of melanosomes from melanocytes (relevant for hyperpigmentation) but, more importantly for our purposes, by regulating the activity of sebaceous glands through the normalisation of lipid production pathways in the skin's epidermis.

What makes niacinamide uniquely valuable is its multi-functionality within a single molecule. In the context of face wash formulation, it simultaneously reduces oil production, strengthens the skin's moisture barrier (preventing transepidermal water loss that triggers compensatory oil production), reduces the appearance of enlarged pores by improving the surrounding skin's elasticity, and delivers meaningful anti-inflammatory action that calms the redness and swelling of active acne lesions. This is not a list of theoretical benefits from in-vitro research — niacinamide's efficacy in all of these categories is supported by extensive clinical trial data.`,
    body2: `The barrier-strengthening function of niacinamide is particularly important in the Indian context. Many consumers in India over-cleanse — using harsh, high-foaming surfactants multiple times daily in response to the sweating and oiliness caused by heat and humidity. This over-cleansing strips the skin's acid mantle and disrupts its moisture barrier, creating a paradox: the skin produces even more oil in response to being repeatedly stripped. Niacinamide, when present in a well-formulated face wash, counteracts this cycle. It reduces oil production at the sebaceous gland level while simultaneously rebuilding the barrier that signals to the skin that it no longer needs to compensate with excess sebum. The result is a gradual normalisation of the skin's oil production over weeks of consistent use — not just temporary surface dryness that reverses within hours.`,
  },
  {
    number: '03',
    heading: 'Vitamin C — Brightening, Antioxidant Protection, and Acne Scar Fading',
    body1: `Vitamin C — ascorbic acid and its derivatives — occupies a specific but crucial role in a face wash designed for oily and acne-prone skin in India. Its inclusion addresses a problem that is frequently overlooked in the oily-skin conversation: post-inflammatory hyperpigmentation (PIH). This is the dark mark left behind after an acne lesion heals — the flat, discoloured patch that can persist for months or years after the active breakout has resolved. PIH is significantly more pronounced in Indian skin tones due to higher baseline melanin levels, meaning that the skin's response to inflammation consistently produces more visible darkening than in lighter skin types.

Vitamin C inhibits the enzyme tyrosinase — which catalyses the final step in melanin production — at the site of post-inflammatory response. Applied consistently in a face wash formulation, it reduces the intensity and duration of the hyperpigmentation that follows each breakout, gradually evening skin tone while active treatment ingredients work on preventing new lesions. This combination approach — treating both the active acne and its aftermath simultaneously — is far more effective than addressing only one dimension.`,
    body2: `The antioxidant function of Vitamin C adds another layer of relevance for Indian urban skin. Free radical damage from UV radiation and pollution is among the primary accelerants of sebum oxidation — the process that turns liquid sebum inside follicles into the sticky, hardened plug that forms blackheads. Vitamin C's antioxidant activity partially neutralises this oxidation process at the skin surface, reducing the rate of comedone formation in addition to its brightening effects. In cities with high PM2.5 pollution levels — including Delhi, Bengaluru, and Mumbai — this antioxidant protection is not a cosmetic luxury but a functionally important barrier against the skin damage that urban air quality consistently causes.`,
  },
  {
    number: '04',
    heading: 'pH-Balanced, Non-Stripping Formulation — Why the Base Matters as Much as the Actives',
    body1: `The active ingredients in any face wash are only as effective as the formulation that delivers them — and the single most important formulation parameter for both oily and acne-prone skin is pH. The skin's natural surface pH is mildly acidic, sitting between 4.5 and 5.5 on the pH scale. This acid mantle serves as the skin's first line of defence: it supports the healthy bacterial communities that prevent pathogen overgrowth, maintains the tight junctions between skin cells that constitute the moisture barrier, and creates the chemical environment in which key enzymes responsible for natural exfoliation and repair function optimally.

Many face washes — including several widely sold brands in India — are formulated at a significantly higher (more alkaline) pH, often between 7 and 9. This is partly a legacy of soap-based formulations and partly a manufacturing convenience. The consequence is significant: an alkaline cleanser disrupts the acid mantle on every wash, temporarily raising the skin's surface pH. In this alkaline window, the protective bacterial communities are suppressed, barrier function is compromised, and the skin's natural repair mechanisms are impaired. For acne-prone skin, this disruption is directly counterproductive — it creates the vulnerable, permeable skin environment that P. acnes bacteria exploit.`,
    body2: `A properly pH-balanced face wash — formulated between 4.5 and 5.5 to match the skin's natural range — cleans the skin without disrupting this protective environment. The active ingredients (salicylic acid, niacinamide, Vitamin C) work most effectively within this pH range anyway, since their chemical activity is pH-dependent. This means a correctly pH-balanced formula delivers both better cleansing outcomes and more effective active ingredient performance than an alkaline alternative, even when the ingredient lists look superficially similar. This is the detail that separates a well-engineered face wash from a marketing-led product that lists impressive actives but underdelivers due to a fundamentally flawed base formulation.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Wet Your Face with Lukewarm Water',
    desc: 'Temperature matters. Hot water strips the skin\'s natural oils aggressively, triggering compensatory sebum overproduction. Cold water does not open the pore sufficiently for effective cleanser penetration. Lukewarm water — warm enough to be comfortable, not hot — is the optimal temperature for face washing. It softens the sebum inside pores without damaging the barrier.',
  },
  {
    num: '02',
    title: 'Apply a Coin-Sized Amount to Your Fingertips',
    desc: 'Dispensing more product does not improve cleansing — it wastes formulation and leaves residue. A 20-paise coin-sized amount is sufficient for the entire face. Apply to fingertips, not directly to the face, to control distribution. More product creates more lather, which feels effective but isn\'t — the cleansing happens through the surfactant chemistry, not through physical foam volume.',
  },
  {
    num: '03',
    title: 'Massage in Circular Motions for 60 Full Seconds',
    desc: 'Most people wash their face for 8–15 seconds. This is insufficient for active ingredients like salicylic acid to perform their function. A minimum of 60 seconds of gentle circular massage — using fingertips, not nails or a harsh cloth — allows the BHA time to begin dissolving follicular buildup. Focus on the T-zone, around the nose, and forehead where congestion is heaviest.',
  },
  {
    num: '04',
    title: 'Pay Special Attention to the Jawline and Hairline',
    desc: 'These are the most commonly missed zones in face washing — and also among the most acne-prone in Indian adults, particularly those experiencing hormonal breakouts. The jawline is where androgen-influenced acne most frequently presents. The hairline accumulates hair product residue, sweat, and sebum that directly contribute to forehead breakouts.',
  },
  {
    num: '05',
    title: 'Rinse Thoroughly with Cool Water',
    desc: 'Cool water on rinsing — after the lukewarm wash — helps to close the follicle opening after cleansing, temporarily reducing the rate of new debris entry. Rinse until there is absolutely no slippery residue remaining. Incompletely rinsed cleanser is alkaline, barrier-disrupting, and one of the most overlooked causes of persistent irritation and purging in face wash users.',
  },
  {
    num: '06',
    title: 'Pat Dry Gently and Apply Moisturiser Within 60 Seconds',
    desc: 'Pat — never rub — with a clean towel. Friction from rubbing breaks down the newly cleaned follicle opening and can transfer bacteria from the towel surface. Apply a non-comedogenic moisturiser within 60 seconds of drying: this is the window during which the skin is most receptive to hydration. Skipping moisturiser after face wash is a critical error that contributes to the dehydration-to-oiliness cycle.',
  },
];

const timeline = [
  {
    period: 'Days 1–3',
    title: 'Skin Adjusts — Possible Initial Purging',
    detail: 'Active ingredients like salicylic acid may accelerate the surfacing of pre-existing congestion. This is purging — existing blocked pores clearing faster than they would naturally. It is not a negative reaction. Skin may feel slightly drier or more sensitive than usual as it adapts to the new cleansing pH and active ingredients.',
  },
  {
    period: 'Week 1',
    title: 'Surface Oil Reduction Begins',
    detail: 'Midday shine reduces noticeably. The skin\'s surface feels cleaner for longer after washing. Active comedones may still be present, but new formation rate begins to decrease. Pores on the nose and forehead may look temporarily more visible as the salicylic acid begins dissolving the plugs — this is the clearing process beginning.',
  },
  {
    period: 'Week 2',
    title: 'Active Breakouts Begin to Reduce',
    detail: 'New pimples appear less frequently. Existing lesions begin healing faster with a more consistent cleansing environment. Redness around active spots visibly reduces. The skin\'s texture begins to feel smoother, particularly in the T-zone. This is the point where most people who quit early abandon a product that was actually beginning to work.',
  },
  {
    period: 'Week 4',
    title: 'Visible Skin Clarity and Pore Refinement',
    detail: 'Blackheads noticeably reduce on the nose and chin. Skin tone begins to even as Vitamin C addresses post-inflammatory marks. Pores appear smaller as the surrounding skin tightens with reduced congestion. Oiliness is visibly controlled throughout the day without the skin feeling tight or dry — the balanced formulation becomes apparent.',
  },
  {
    period: 'Week 6+',
    title: 'Consistently Clear, Controlled, Balanced Skin',
    detail: 'The skin reaches its new baseline: fewer breakouts, regulated oil, visibly refined pores, and a more even complexion. This is not a temporary improvement — it reflects a genuinely improved follicular environment maintained by consistent cleansing. Users who reach this milestone and continue see cumulative improvements in skin texture and tone.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧪',
    title: 'Active Ingredient Concentration and Listing Position',
    body: 'Ingredient lists are written in descending order of concentration. An acne face wash that lists salicylic acid in the bottom third of its ingredient deck contains too little to be therapeutically active. Look for products where salicylic acid appears in the top half of the ingredient list — this indicates a working concentration rather than a trace addition for label marketing purposes. The same applies to niacinamide and Vitamin C: they must be present at meaningful levels to deliver visible results.',
  },
  {
    icon: '⚗️',
    title: 'Surfactant Quality — The Overlooked Foundation',
    body: 'The surfactants in a face wash determine whether it cleans without damaging your skin barrier. Sodium lauryl sulphate (SLS) and ammonium lauryl sulphate are aggressive surfactants that produce abundant lather but strip the acid mantle and disrupt barrier function — directly counterproductive for acne-prone skin. Better alternatives include sodium lauryl glucose carboxylate, coco-glucoside, or decyl glucoside. These clean effectively at the correct pH range without the barrier damage that makes oily and acne-prone skin worse over time.',
  },
  {
    icon: '🌡️',
    title: 'Formulation pH — The Critical Detail Nobody Checks',
    body: 'The most important specification on a face wash has nothing to do with its ingredient list — it is the pH of the final formulation. Salicylic acid is only therapeutically active below pH 4.5. Niacinamide causes flushing and irritation in formulas above pH 7. The skin\'s acid mantle is disrupted by anything above pH 6. A well-formulated face wash for oily or acne-prone skin should sit between pH 4.5 and 5.5. If a brand does not disclose pH, it is a signal of either poor formulation awareness or a pH that would not be a selling point.',
  },
  {
    icon: '🌿',
    title: 'Fragrance and Sensitising Additives',
    body: 'Fragrance — listed as "parfum" or "fragrance" on ingredient lists — is the single most common cause of contact dermatitis and skin sensitisation in face wash products. For acne-prone and oily skin, which is typically more reactive and often already inflamed, fragrance adds unnecessary irritation risk with zero functional benefit to skin health. Similarly, alcohol (ethanol) listed as a primary ingredient aggressively dehydrates the skin surface, triggering the compensatory oil production that makes oily skin worse. Both should be avoided or present only as trace carrier ingredients, not primary components.',
  },
];

const whoNeeds = [
  { icon: '🏙️', label: 'Urban Professionals in High-Pollution Cities', desc: 'Delhi, Mumbai, and Bengaluru residents face PM2.5 particulates that oxidise sebum and clog pores daily. A face wash with antioxidant Vitamin C and BHA is essential for pollution-exposed skin.' },
  { icon: '🔥', label: 'Those With Chronic T-Zone Oiliness', desc: 'If your forehead, nose, and chin are visibly shiny by midday regardless of what you use, you need sebum-regulation — not just cleansing. Niacinamide-containing formulas address this at the glandular level.' },
  { icon: '😤', label: 'Adult Acne Sufferers (25–40 Age Group)', desc: 'Adult hormonal acne — increasingly common in India due to stress, irregular sleep, and processed food consumption — responds best to consistent BHA treatment combined with a skin-barrier-respecting cleanser base.' },
  { icon: '👩‍💼', label: 'Women With Hormonal Breakouts', desc: 'Cyclical jawline and chin breakouts linked to the menstrual cycle require a consistent twice-daily acne cleanser that maintains a clear follicular environment through hormonal fluctuation periods.' },
  { icon: '👨', label: 'Men With Post-Shave Acne', desc: 'Shaving creates micro-abrasions that allow bacteria to enter the skin. A BHA face wash used after shaving reduces infection of these entry points — the primary cause of post-shave pimples on the neck and chin.' },
  { icon: '🎓', label: 'Students and Young Adults (16–24)', desc: 'This age group experiences peak sebum production and acne prevalence. Establishing a consistent face wash routine in this window prevents the progressive scarring and pigmentation that accumulates from untreated breakouts.' },
  { icon: '☀️', label: 'Those in Hot, Humid Indian Climates', desc: 'Year-round heat in cities like Chennai, Hyderabad, and Kochi creates continuous sweat-sebum mixing on the skin surface that accelerates both oiliness and acne. Twice-daily cleansing is the baseline requirement, not the intensive option.' },
  { icon: '🧴', label: 'People Who Have Tried Multiple Products Without Results', desc: 'If face washes haven\'t worked, the likely reason is pH incompatibility, insufficient active concentration, or barrier damage from over-stripping. A properly formulated pH-balanced BHA wash typically produces results where others have failed.' },
];

const myths = [
  {
    myth: 'The more a face wash foams, the better it cleans',
    truth: 'Foam quantity is entirely determined by the concentration of foaming surfactants — chemicals that are unrelated to cleansing efficacy. The most effective face washes for oily and acne-prone skin produce moderate lather from gentler surfactants. Excessive foaming typically signals high concentrations of SLS or ALS — both of which strip the acid mantle and worsen oiliness over time through rebound sebum production. Foam is a tactile sensation, not a cleaning mechanism.',
  },
  {
    myth: 'Washing your face more often reduces acne and oiliness',
    truth: 'Washing more than twice daily is one of the most common and most counterproductive habits among oily-skinned Indians. Each additional wash strips the acid mantle, disrupts barrier function, and signals the sebaceous glands to produce more oil in compensation. This creates the cycle of washing to control oil, oil rebounding worse, washing again. Twice daily — morning and evening — is the scientifically established optimal frequency for acne-prone and oily skin.',
  },
  {
    myth: 'Acne is caused by dirty skin — more aggressive cleansing solves it',
    truth: 'Acne is a medical condition involving follicular hyperkeratinisation, excess sebum, P. acnes bacterial activity, and inflammatory response. None of these factors is addressed by physical scrubbing or harsh detergent cleansers — and aggressive cleansing actively damages the skin barrier, creating the vulnerable environment that worsens bacterial penetration and inflammatory response. Gentle, consistent cleansing with the right active ingredients addresses the actual mechanism; physical force does not.',
  },
  {
    myth: 'Oily skin doesn\'t need moisturiser after washing',
    truth: 'This is one of the most widespread and most damaging skincare misconceptions in India. Skipping moisturiser after face washing leaves the skin dehydrated — not oil-free. The skin responds to dehydration by producing more sebum to compensate for the missing moisture, creating the paradox of skin that is simultaneously dehydrated and oily. A non-comedogenic, lightweight moisturiser after every face wash is not optional for oily skin — it is how you break the dehydration-overproduction cycle.',
  },
  {
    myth: 'Natural and herbal face washes are safer and better for acne',
    truth: 'Plant-derived does not mean non-irritating. Many of the most common skincare allergens and irritants — including essential oils of lavender, tea tree, citrus, and peppermint — are natural and frequently appear in "herbal" acne products. The clinical evidence for herbal actives in acne treatment is significantly weaker than for synthetic actives like salicylic acid and niacinamide. "Natural" is a marketing category, not a safety or efficacy category. Evaluate face washes by their ingredient list and formulation quality, not their marketing positioning.',
  },
  {
    myth: 'You need separate face washes for morning and evening',
    truth: 'Using the same well-formulated face wash twice daily is sufficient for most oily and acne-prone skin types. The concept of a "different morning and evening cleanser" is primarily a marketing construct. If your evening cleanser effectively removes sunscreen, makeup, excess oil, and the day\'s pollution accumulation, the same formula used in the morning (to remove overnight sebum and any residual product) provides consistent active ingredient delivery without unnecessary complexity or cost.',
  },
];

const faqs = [
  {
    q: 'What is the actual difference between a face wash for acne and a face wash for oily skin?',
    a: 'An oily skin face wash primarily focuses on sebum removal and oil control — typically using mild surfactants, sebum-regulating ingredients like niacinamide, and a balanced pH. An acne face wash adds a therapeutic dimension: it contains actives that address the specific mechanisms of acne formation — usually salicylic acid (BHA) to clear inside follicles, plus antibacterial and anti-inflammatory components. In practice, many people with oily skin also have acne-prone skin, so a face wash that addresses both (dual-action formula) is often the most practical choice.',
  },
  {
    q: 'Can I use an acne face wash if I have oily skin but no active breakouts?',
    a: 'Yes — and it is often the smarter preventive approach. Salicylic acid continuously clears the follicular environment that leads to comedone formation, meaning that using an acne face wash proactively prevents the buildup that would eventually become breakouts. People with oily skin who wait until they have active acne before using a BHA cleanser are consistently managing a problem that could have been prevented. The caveat: if you have genuinely non-acne-prone oily skin, a pure sebum-control formula without BHA may be sufficient and slightly gentler.',
  },
  {
    q: 'How many times a day should I wash my face if I have oily or acne-prone skin?',
    a: 'Twice daily — once in the morning and once in the evening — is the clinically established optimal frequency. Morning washing removes overnight sebum accumulation and any residual products. Evening washing removes sunscreen, pollution, sweat, makeup, and the day\'s sebum buildup — which is the more important of the two washes for acne prevention. Washing a third time (at midday, for example) provides minimal additional benefit and risks disrupting the acid mantle and triggering compensatory sebum production.',
  },
  {
    q: 'Will a face wash with salicylic acid dry out my skin?',
    a: 'A well-formulated salicylic acid face wash at the correct pH and concentration should not cause significant dryness for most skin types. The dryness associated with BHA is typically the product of either too-high a concentration, a formulation pH that is too low (making the acid too aggressive), a surfactant base that strips the barrier, or over-washing. If you experience dryness, reduce washing frequency to once daily temporarily, ensure you are applying a non-comedogenic moisturiser immediately after washing, and check whether your face wash contains harsh foaming surfactants in its first few ingredients.',
  },
  {
    q: 'Is this face wash suitable for men with acne?',
    a: 'Absolutely. Men have higher sebum production than women due to androgen levels, making them categorically more prone to oily skin and acne. The formula works identically regardless of gender. Men should pay particular attention to post-shave application — using the face wash after shaving (not before) reduces bacterial infection of the micro-abrasions that razors create. The BHA penetrates into these tiny wounds and reduces the P. acnes colonisation that causes post-shave pimples on the neck and jawline.',
  },
  {
    q: 'Can I use this face wash with other acne treatments like retinol or benzoyl peroxide?',
    a: 'Yes, with some protocol management. Salicylic acid and retinol are compatible when used in separate steps — typically, face wash first, retinol as the last step in an evening routine. Benzoyl peroxide and salicylic acid in a face wash is also compatible when used in sequence (not simultaneously on the skin). The potential issue is cumulative irritation: if you are using multiple actives, introduce them gradually rather than all at once, and ensure adequate moisturisation to maintain barrier function throughout.',
  },
  {
    q: 'How long does it take for a face wash to clear acne?',
    a: 'Real, visible improvement in active acne typically becomes apparent between two and four weeks of twice-daily use. The first week often involves a purging phase as existing congestion clears. Significant pore refinement and breakout reduction becomes clearly visible by week four. Maximum results — consistent clarity, reduced post-inflammatory marks, and regulated oil production — are reached between six and twelve weeks of uninterrupted twice-daily use. If you stop at two weeks because you are not yet fully clear, you abandon the protocol exactly when it is beginning to work.',
  },
  {
    q: 'What should I apply after washing my face if I have oily or acne-prone skin?',
    a: 'After washing, apply a lightweight, non-comedogenic moisturiser within 60 seconds while the skin is still slightly damp. This is non-negotiable even for oily skin — see the myth section above for why. In the morning, follow moisturiser with a broad-spectrum SPF 30 or higher sunscreen (non-comedogenic, fluid or gel texture for oily skin). In the evening, if you use any additional actives (niacinamide serum, retinol), apply these after the moisturiser. Sunscreen daily is especially important if you are using a Vitamin C or salicylic acid face wash, as both increase photosensitivity.',
  },
  {
    q: 'Is this suitable for teenagers with acne?',
    a: 'Yes. Teenage acne — driven by the surge in androgen production that begins at puberty — responds well to consistent BHA cleansing. For teenagers, establishing a twice-daily cleansing habit with a salicylic acid face wash is the single most impactful skincare intervention available without a prescription. The key instruction for younger users: do not over-wash or use physical scrubs in combination — these worsen teenage acne significantly by damaging an already compromised barrier.',
  },
  {
    q: 'Will an acne face wash remove my SPF and makeup effectively?',
    a: 'A face wash with adequate surfactant concentration will remove lightweight SPF and non-waterproof makeup effectively. For heavy coverage foundation, waterproof SPF, or oil-based sunscreens — which are common in India given the high UV requirements — a double cleanse is recommended: first pass with a cleansing oil or micellar water to dissolve the sunscreen and makeup, then second pass with your acne face wash to clean the skin surface and deliver the active ingredients. Double cleansing ensures your BHA actually reaches the skin rather than working against a layer of sunscreen.',
  },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────────

export default function AcneVsOilySkinFaceWashBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Skincare Science · Acne · Oily Skin · India 2026</span>
            <h1 className={styles.heroTitle}>
              Face Wash for Acne
              <br />
              <em>vs Oily Skin —</em>
              <br />
              <span className={styles.heroTitleSub}>What&apos;s Actually Better for You?</span>
            </h1>
            <p className={styles.heroSub}>
              Most Indians are using the wrong face wash — not because the product is bad,
              but because acne and oily skin are different conditions requiring different
              active ingredients. This guide draws the line clearly so you stop guessing.
            </p>
            <div className={styles.heroMeta}>
              <span>⏱ 20 min read</span>
              <span>📅 April 2026</span>
              <span>📝 6,000+ words</span>
            </div>
            <div className={styles.heroActions}>
              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy FreshOLite Face Wash on Amazon →
              </a>
              <span className={styles.heroSubNote}>Salicylic Acid · Niacinamide · Vitamin C · pH Balanced</span>
            </div>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageRing} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/fresho-sensitive-face-wash.png"
                alt="FreshOLite Vitamin C Face Wash for Acne and Oily Skin India"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 400px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🧴 Salicylic Acid</span>
              <span>✨ Vitamin C</span>
              <span>💧 Niacinamide</span>
              <span>⚗️ pH Balanced</span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ─── TABLE OF CONTENTS ─────────────────────────────────────────────── */}
        <nav className={styles.tocWrap} aria-label="Table of Contents">
          <p className={styles.tocTitle}>📋 What This Guide Covers</p>
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
          <h2 className={styles.sectionTitle}>The Acne vs Oily Skin Confusion — Why Most People Get This Wrong</h2>
          <p>
            Walk down the face wash aisle at any chemist in India and you will find two adjacent
            categories of product: face washes labelled for acne, and face washes labelled for oily
            skin. They often look similar. They frequently share some of the same ingredients. And
            for most Indian consumers standing in that aisle, the question of which one to buy is
            either answered by brand loyalty, price, or a packaging claim that sounds vaguely relevant
            to their skin problem. This is precisely why most people are using the wrong face wash —
            and why so many people cycle through product after product without seeing meaningful results.
          </p>
          <p>
            The confusion is understandable. Acne and oily skin are deeply connected — excess sebum
            production is a primary driver of acne formation — but they are not the same condition.
            You can have severely oily skin without ever developing acne. You can have acne on dry
            or normal skin. And the most common presentation — oily skin that is also chronically
            acne-prone — requires a face wash that addresses both conditions with different active
            ingredient mechanisms. Using an oily-skin face wash when your primary complaint is acne
            is like taking a fever reducer for an infection: it addresses a symptom while the
            underlying problem continues unabated.
          </p>
          <p>
            The Indian context makes this distinction even more consequential. India&apos;s climate — high
            ambient temperatures across most of the country for most of the year, extreme humidity in
            coastal cities, intense UV radiation at all latitudes — creates conditions that amplify
            both oiliness and acne. Sebaceous glands produce more oil in heat. Sweat mixed with sebum
            creates an ideal medium for P. acnes bacterial proliferation. UV radiation accelerates
            the oxidation of follicular sebum into comedones. Hard water deposits minerals on the
            scalp and face that disrupt the skin&apos;s acid mantle. Pollution from Indian cities — among
            the worst in the world for PM2.5 particulates — lands on the face daily and oxidises into
            pore-clogging compounds. If your face wash is not specifically equipped to address these
            environmental realities, you are fighting these factors with inadequate tools.
          </p>
          <p>
            Indian skin types add another dimension. The prevalence of darker Fitzpatrick skin tones
            across the subcontinent means that post-inflammatory hyperpigmentation — the dark marks
            left by acne lesions — is dramatically more visible and persistent than in lighter skin
            types. A face wash designed for Indian acne-prone skin should therefore address not just
            active breakouts but also the prevention of the hyperpigmentation that follows them.
            This is where Vitamin C becomes a relevant active in face wash formulation — and where
            the simple oily-vs-acne binary proves insufficient as a framework.
          </p>
          <p>
            This guide cuts through the confusion with precision. You will understand the science of
            how oily skin and acne are separately generated by your skin&apos;s biology, how the active
            ingredients in face washes address these mechanisms differently, how to read an ingredient
            list to determine whether a product will actually work, and which type of face wash —
            or which combination of actives — is correct for your specific skin presentation. If you
            have combination skin, if you live in a humid coastal city, if you are dealing with
            hormonal adult acne, or if you have simply been frustrated by face washes that promised
            results and underdelivered — this guide is the resource you need to make an informed,
            science-backed decision.
          </p>
          <p>
            We will also examine FreshOLite Face Wash — a formula designed specifically for Indian
            oily and acne-prone skin that combines salicylic acid, niacinamide, and Vitamin C in a
            pH-balanced, non-stripping base — to illustrate concretely what a well-formulated dual-action
            product looks like and how it performs against the benchmarks established in this guide.
          </p>
        </section>

        {/* ─── SCIENCE: OILY SKIN ─────────────────────────────────────────────── */}
        <section id="science-oily" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of Oily Skin — Why Your Sebaceous Glands Overproduce</h2>

          <h3 className={styles.subHeading}>What Sebum Actually Is and Why Your Skin Makes It</h3>
          <p>
            Sebum is not simply &quot;oil&quot; in the colloquial sense. It is a complex lipid mixture secreted
            by sebaceous glands — small structures attached to hair follicles throughout the face,
            scalp, chest, and back. Its composition includes triglycerides, wax esters, squalene,
            free fatty acids, and cholesterol in specific ratios that vary between individuals and
            skin types. In its correct quantity and composition, sebum is biologically essential:
            it lubricates the skin surface, prevents transepidermal water loss, contributes to the
            acid mantle that protects against pathogens, and delivers fat-soluble antioxidants to the
            skin&apos;s surface.
          </p>
          <p>
            Oily skin — clinically termed &quot;seborrhoea&quot; — occurs when sebaceous glands produce sebum
            at a rate that exceeds what the skin surface can effectively utilise or shed. The excess
            accumulates on the skin&apos;s surface, creating the visible sheen and tactile greasiness
            that defines oily skin. The sebaceous glands are regulated by androgens — testosterone
            and its more potent derivative, dihydrotestosterone (DHT) — which stimulate gland activity
            and sebum production. This is why sebum production peaks during puberty when androgen
            levels surge, why men (with higher testosterone) consistently have oilier skin than women,
            and why hormonal events (menstrual cycles, polycystic ovarian syndrome, stress-induced
            cortisol elevation that stimulates adrenal androgen production) affect oiliness in women.
          </p>

          <h3 className={styles.subHeading}>Environmental Amplifiers in the Indian Context</h3>
          <p>
            Genetic predisposition to high sebum production is amplified significantly by environmental
            factors specific to the Indian climate. Ambient temperature is the most direct: sebaceous
            gland secretion rate increases proportionally with skin surface temperature. A person with
            moderate sebum production in a temperate 22°C climate may have severely oily skin in
            Chennai&apos;s 38°C summer heat. The body&apos;s thermoregulation mechanism also increases sweat
            production in heat — and sweat mixed with sebum on the skin surface creates an emulsified
            layer that feels even more uncomfortable and oily than either component alone.
          </p>
          <p>
            Humidity compounds the issue by slowing the evaporation of this sweat-sebum mixture from
            the skin surface. In coastal cities like Mumbai, Kochi, and Chennai, where humidity
            consistently exceeds 80%, sebum lingers on the skin rather than being naturally dispersed
            — creating a persistent film that attracts pollution particulates and accelerates the
            oxidation of sebum components into the altered, comedogenic forms that block follicles.
          </p>

          <h3 className={styles.subHeading}>The Rebound Oiliness Trap</h3>
          <p>
            The most common mistake made by oily-skinned individuals in India is aggressive
            over-cleansing: using high-foaming, harsh surfactant face washes two, three, or even
            four times daily in an attempt to remove visible oil. This creates a physiological trap.
            The harsh cleansers strip the skin&apos;s acid mantle and remove not just excess sebum but
            the baseline sebum level necessary for normal skin function. The sebaceous glands,
            detecting this deficit, increase their secretion rate to compensate — producing the same
            or greater amount of sebum than before, but on a disrupted, irritated skin surface that
            is now also dehydrated. The result is skin that is simultaneously oily and dry — a
            presentation dermatologists call &quot;combination skin&quot; but which is often simply
            over-stripped oily skin in disguise. Breaking this cycle requires using a
            gentler, pH-correct face wash at the appropriate frequency and always following with a
            non-comedogenic moisturiser.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> Oily skin and dehydrated skin are not opposites —
              they frequently coexist. Skin dehydrated by over-cleansing or harsh products responds
              by overproducing sebum. If your skin feels tight and oily simultaneously, you are likely
              experiencing this pattern. The solution is a gentler face wash, not a harsher one.
            </div>
          </div>
        </section>

        {/* ─── SCIENCE: ACNE ──────────────────────────────────────────────────── */}
        <section id="science-acne" className={styles.section}>
          <h2 className={styles.sectionTitle}>How Acne Actually Forms — The Four-Step Mechanism</h2>

          <h3 className={styles.subHeading}>Step 1: Follicular Hyperkeratinisation</h3>
          <p>
            Acne begins not with bacteria — as commonly assumed — but with a change in the behaviour
            of skin cells lining the follicle wall. In acne-prone skin, the skin cells inside the
            follicle (keratinocytes) shed abnormally: instead of loosening and being carried out of
            the follicle by sebum flow, they clump together and adhere to the follicle wall. This
            clumping — called follicular hyperkeratinisation — is the initial event that creates the
            microcomedo: a microscopic plug of compacted dead skin cells and sebum at the follicle&apos;s
            narrowest point, invisible to the naked eye but already blocking normal sebum drainage.
          </p>

          <h3 className={styles.subHeading}>Step 2: Comedone Formation</h3>
          <p>
            As the microcomedo grows — fed by continuing sebum production that cannot drain past the
            initial plug — it becomes a macrocomedo: the visible blackhead or whitehead. A blackhead
            (open comedone) forms when the follicle opening remains open: the sebum-dead cell mixture
            is exposed to air, and the unsaturated fatty acids and melanin in the mixture oxidise,
            turning the characteristic dark colour. Contrary to popular belief, this dark colour is
            not dirt — it is chemically altered sebum. A whitehead (closed comedone) forms when the
            follicle opening is entirely sealed by the plug, keeping the contents white and
            unaerated beneath the skin surface.
          </p>

          <h3 className={styles.subHeading}>Step 3: Bacterial Proliferation</h3>
          <p>
            <strong>Cutibacterium acnes</strong> (formerly Propionibacterium acnes) — the bacterium
            primarily associated with acne — is a normal resident of healthy skin, present in everyone.
            It becomes pathogenic only under specific conditions: the anaerobic, sebum-rich environment
            inside a blocked follicle. C. acnes metabolises sebum fatty acids as its food source,
            proliferating rapidly inside the sealed follicle. As a byproduct of this metabolism,
            it produces inflammatory substances including free fatty acids, proteases, and
            lipopolysaccharides that begin to damage the follicle wall and trigger the immune response.
          </p>

          <h3 className={styles.subHeading}>Step 4: Inflammation and Lesion Formation</h3>
          <p>
            The immune system detects the bacterial metabolic byproducts and mounts an inflammatory
            response — directing immune cells (neutrophils) to the follicle site. This inflammatory
            cascade is what causes the redness, swelling, heat, and pain of an active pimple. If the
            follicle wall ruptures under the pressure of this inflammation, the contents — dead cells,
            sebum, bacteria, and immune cells — spill into the surrounding dermis, causing the deeper,
            more painful nodules and cysts of severe acne. Post-inflammatory hyperpigmentation
            (the dark mark left after healing) occurs as the melanocytes adjacent to the lesion site
            overproduce melanin in response to the inflammation signal.
          </p>
          <p>
            This four-step mechanism — follicular plugging, comedone formation, bacterial growth,
            inflammation — explains precisely why salicylic acid (which addresses steps 1 and 2 by
            dissolving the plug) is the most important active in an acne face wash. It targets the
            initiating event, preventing the cascade from progressing to the inflammatory stages that
            cause pain, scarring, and hyperpigmentation. By understanding these steps, you understand
            why an oily-skin face wash without BHA — which removes surface oil but does not enter
            the follicle — addresses only the environmental conditions of acne without interrupting
            its formation mechanism.
          </p>
        </section>

        {/* ─── KEY DIFFERENCES ────────────────────────────────────────────────── */}
        <section id="key-differences" className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Differences: Acne vs Oily Skin Face Wash Formulas</h2>

          <h3 className={styles.subHeading}>The Fundamental Distinction</h3>
          <p>
            An oily skin face wash is a surface cleanser with sebum-regulating additives. Its primary
            function is to remove excess oil from the skin&apos;s surface and, with appropriate active
            ingredients like niacinamide, gradually reduce the sebaceous gland&apos;s output rate over
            time. It operates at the skin&apos;s surface — the stratum corneum — and does not penetrate
            meaningfully into the follicle where comedone formation begins.
          </p>
          <p>
            An acne face wash is a surface cleanser with follicular therapeutics. In addition to
            surface cleansing, it contains oil-soluble active ingredients — principally salicylic acid
            (BHA) — capable of penetrating the sebum inside the follicle and acting within the
            follicular canal itself. This is not a marginal difference. It is the difference between
            cleaning the outside of a blocked pipe and dissolving the blockage from inside.
          </p>
          <p>
            The most effective product for someone with both oily skin and acne is a formula that
            performs both functions: surface oil control (niacinamide, gentle surfactants) and
            follicular clearing (salicylic acid). This dual-action approach is what FreshOLite Face
            Wash is formulated to deliver — and it is the category that most Indian oily-and-acne-prone
            skin genuinely needs rather than choosing one function at the expense of the other.
          </p>

          <h3 className={styles.subHeading}>What Happens When You Use the Wrong One</h3>
          <p>
            Using an oily skin face wash when you have active acne produces partial results: surface
            oil is controlled, skin feels temporarily cleaner and less greasy, but the follicular
            plugs that generate comedones remain intact and continue developing. You manage the
            environment that worsens acne without addressing the formation mechanism — a maintenance
            approach rather than a treatment.
          </p>
          <p>
            Using an acne face wash when you have purely oily skin (no active acne) is generally
            harmless and often beneficial — the BHA performs preventive follicular maintenance that
            reduces the probability of comedone formation even if breakouts are not currently present.
            The mild exfoliating effect also improves skin texture and pore appearance. The only
            consideration is ensuring the acne formula is not overly drying for your oil level —
            a well-formulated one should not be.
          </p>
          <p>
            Using either without following it with a non-comedogenic moisturiser — the single most
            common omission in Indian skincare routines — guarantees suboptimal results from either
            formula. The moisturiser is not optional.
          </p>

          <div className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <span>Feature</span>
              <span>Oily Skin Face Wash</span>
              <span>Acne Face Wash</span>
            </div>
            {[
              ['Primary Target', 'Surface sebum', 'Follicular plugs'],
              ['Key Active', 'Niacinamide, mild surfactants', 'Salicylic acid (BHA)'],
              ['Penetration Depth', 'Stratum corneum (surface)', 'Follicular canal'],
              ['Addresses Blackheads', 'Partially (surface only)', 'Yes (dissolves from inside)'],
              ['Addresses Inflammation', 'No', 'Yes (anti-inflammatory BHA)'],
              ['Addresses PIH', 'No (unless Vit C added)', 'Partially'],
              ['Preventive Value', 'Oil control only', 'Prevents comedone formation'],
              ['Best For', 'Oily but clear skin', 'Active or acne-prone skin'],
            ].map(([feature, oily, acne]) => (
              <div key={feature} className={styles.comparisonRow}>
                <span>{feature}</span>
                <span>{oily}</span>
                <span>{acne}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── INGREDIENTS ────────────────────────────────────────────────────── */}
        <section id="ingredients" className={styles.section}>
          <h2 className={styles.sectionTitle}>Ingredient Decoder — What to Look For and What to Avoid</h2>

          <h3 className={styles.subHeading}>Ingredients That Actually Work</h3>
          <p>
            <strong>Salicylic Acid (BHA, 0.5–2%):</strong> The gold standard acne active. Oil-soluble,
            penetrates follicles, dissolves comedone plugs, exfoliates the follicle wall, and delivers
            mild anti-inflammatory activity. Effective only when present at a meaningful concentration
            — 0.5% minimum for preventive action, 1–2% for active acne treatment — and in a formulation
            pH below 4.5 where its keratolytic activity is maintained.
          </p>
          <p>
            <strong>Niacinamide (2–5%):</strong> Multifunctional vitamin B3 derivative. Reduces sebum
            production at the glandular level, strengthens the moisture barrier, reduces pore appearance,
            delivers anti-inflammatory action, and inhibits melanin transfer for hyperpigmentation reduction.
            Compatible with nearly all other actives and suitable for all skin types including sensitive.
          </p>
          <p>
            <strong>Vitamin C (Ascorbic Acid or Stabilised Derivatives, 5–15%):</strong> Antioxidant
            that neutralises free radical damage from UV and pollution, inhibits melanin production to
            fade post-inflammatory hyperpigmentation, and stimulates collagen synthesis that supports
            skin repair after acne lesions heal. Particularly valuable for Indian skin tones where
            PIH is significantly more pronounced and persistent.
          </p>
          <p>
            <strong>Zinc PCA:</strong> Zinc ion compound that reduces sebum production through inhibition
            of 5-alpha-reductase (the enzyme that converts testosterone to the more potent DHT that
            drives sebaceous gland activity). Synergistic with niacinamide for sebum regulation and
            adds mild antibacterial properties relevant to acne management.
          </p>

          <h3 className={styles.subHeading}>Ingredients to Avoid in Oily/Acne Formulas</h3>
          <p>
            <strong>Sodium Lauryl Sulphate (SLS) as Primary Surfactant:</strong> Highly irritating
            surfactant that disrupts the acid mantle and moisture barrier. Creates abundant lather
            but strips the skin too aggressively for oily or acne-prone skin — triggering the
            rebound oil production cycle.
          </p>
          <p>
            <strong>Fragrance (listed as &quot;parfum&quot; or &quot;fragrance&quot;):</strong> Common sensitiser and allergen.
            Adds zero skin benefit and significant irritation risk for already-compromised acne-prone skin.
          </p>
          <p>
            <strong>Comedogenic Oils (Coconut, Cocoa Butter, Wheat Germ):</strong> Some face washes
            include these as conditioning agents. On acne-prone skin, they contribute to follicular
            occlusion — directly counterproductive to the cleanser&apos;s function.
          </p>
          <p>
            <strong>High-Concentration Ethanol/Alcohol:</strong> When listed in the top half of an
            ingredient deck, ethanol is a primary drying agent. It creates the illusion of oil control
            through dehydration but triggers compensatory sebum overproduction and disrupts barrier function.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>⚗️</span>
            <div>
              <strong>Formulation Reality:</strong> Two face washes can list identical active ingredients
              and produce completely different results based on their pH, surfactant selection, and
              ingredient interactions. A salicylic acid face wash at pH 6.5 delivers essentially no
              BHA activity — the acid is inactive above pH 4.5. Always evaluate the formulation
              quality as a system, not just the ingredient list as a checklist.
            </div>
          </div>
        </section>

        {/* ─── SKIN TYPE GUIDE ────────────────────────────────────────────────── */}
        <section id="skin-type-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete Skin Type Suitability Guide</h2>
          <p className={styles.sectionIntro}>
            Your skin type determines which formula emphasis you need — and how you should
            use it. Here is the complete suitability breakdown for each major skin presentation.
          </p>
          <div className={styles.skinTypeGrid}>
            {skinTypes.map((st) => (
              <div key={st.type} className={styles.skinCard}>
                <div className={styles.skinCardTop}>
                  <span className={styles.skinIcon}>{st.icon}</span>
                  <span className={styles.skinType}>{st.type}</span>
                  <span className={`${styles.verdict} ${styles[st.verdictClass]}`}>
                    {st.verdict}
                  </span>
                </div>
                <p className={styles.skinExplanation}>{st.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Skin Problem — The Specific Solution</h2>
          <p className={styles.sectionIntro}>
            Match your primary complaint to the solution mechanism — and understand why the right
            active ingredient matters for your specific presentation.
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

        {/* ─── PRODUCT DEEP DIVE ──────────────────────────────────────────────── */}
        <section id="product-deep-dive" className={styles.section}>
          <h2 className={styles.sectionTitle}>FreshOLite Face Wash — Complete Feature Breakdown</h2>

          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              Salicylic Acid · Niacinamide · Vitamin C · pH Balanced for Indian Skin
            </p>
            <p className={styles.midCtaSub}>
              A dual-action formula that controls oiliness and treats acne simultaneously — built for India&apos;s climate and skin types.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get FreshOLite Face Wash on Amazon — Shop Now →
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
              <strong>Important Distinction:</strong> FreshOLite is not a medicated prescription
              treatment — it is a correctly formulated daily cleanser. The distinction matters for
              expectations: it will not clear severe cystic acne or nodular acne that requires
              dermatologist-prescribed treatments (isotretinoin, topical retinoids, antibiotics).
              What it will do — consistently and measurably — is maintain the clean follicular
              environment that prevents mild-to-moderate acne from forming, controls chronic oiliness
              throughout the day, and gradually fades the post-inflammatory hyperpigmentation that
              previous breakouts have left behind. It is the correct daily baseline — not a substitute
              for clinical treatment when clinical treatment is needed.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Cleansing Protocol for Oily and Acne-Prone Skin</h2>
          <p className={styles.sectionIntro}>
            How you wash your face determines whether your face wash delivers its active ingredients
            effectively — or simply rinses away before they can work. Follow this protocol precisely.
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
            💡 <strong>Pro Tip:</strong> If you wear sunscreen daily — which you absolutely should
            in India, given the UV intensity — consider double cleansing in the evening. Start with
            a micellar water or cleansing oil to dissolve your sunscreen and any makeup, then follow
            with FreshOLite for its BHA and niacinamide benefits. Salicylic acid cannot effectively
            penetrate to the follicle when a layer of sunscreen sits between the cleanser and the
            skin. For a complete daily skin routine that works synergistically with your face wash,
            our{' '}
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.internalLink}
            >
              guide to the best moisturiser for combination skin
            </Link>{' '}
            covers exactly how to layer your products for maximum results.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>Results Timeline — What to Expect Week by Week</h2>
          <p className={styles.sectionIntro}>
            Managing expectations accurately is as important as choosing the right product. Here is
            an honest, biologically grounded timeline for what consistent twice-daily use delivers.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — How to Choose the Right Face Wash in India</h2>
          <p className={styles.sectionIntro}>
            The face wash category in India is saturated with products whose claims far outpace their
            formulation quality. Here is the objective framework for separating products that work
            from products that are marketed well.
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

          <h3 className={styles.subHeading}>The Most Common Buying Mistakes in India</h3>
          <p>
            The most pervasive buying error among Indian consumers purchasing face wash for oily or
            acne-prone skin is selecting products based on the intensity of the cleansing sensation
            rather than the intelligence of the formula. Products that cause a strong tightening
            sensation post-wash — a feeling often interpreted as &quot;very clean&quot; — are typically causing
            significant barrier disruption. This sensation is your skin&apos;s acid mantle reporting damage,
            not your pores reporting satisfaction. A correctly formulated face wash for oily skin
            should leave the skin feeling clean and comfortable, not tight or squeaky.
          </p>
          <p>
            The second common mistake is purchasing based on brand familiarity without reading the
            ingredient list. Several of India&apos;s most widely recognised and advertised face wash brands
            are formulated with primary surfactants that are inappropriate for daily use on acne-prone
            skin, and list their &quot;active&quot; ingredients at concentrations too low to be therapeutically
            meaningful. The advertising budget of a product and its ingredient quality are entirely
            unrelated. Read the label. If niacinamide or salicylic acid appears in the bottom third
            of a 20-ingredient list, it is present as a marketing ingredient rather than an active
            therapeutic ingredient.
          </p>
          <p>
            The third mistake is abandoning a correctly chosen face wash too early. The timeline
            section above establishes that meaningful visible results from a BHA face wash are
            typically not visible until week two at the earliest, and full results require six to
            twelve weeks of consistent use. Most consumers abandon products between the second and
            third week — often precisely when the purging phase is completing and the clearing phase
            is beginning. Patience, in this case, is a clinical instruction, not just advice.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              The right formula for Indian oily and acne-prone skin.
            </p>
            <p className={styles.midCtaSub}>
              FreshOLite Face Wash — salicylic acid, niacinamide, and Vitamin C in a pH-balanced base built for daily use.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop FreshOLite Face Wash on Amazon →
            </a>
          </div>
        </section>

        {/* ─── WHO NEEDS THIS ──────────────────────────────────────────────────── */}
        <section id="who-needs" className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Needs This Face Wash Most</h2>
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
            A face wash is the foundation — but an effective routine needs the right supporting products.
            Explore these guides to build a complete, synergistic regimen.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🧴</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Moisturiser for Combination Skin</p>
                <p className={styles.relatedCardSub}>Aloe Vera, Vitamin-E &amp; Jojoba — the perfect post-cleanse hydration</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link
              href="/blog/best-sunscreen-oily-skin-india-spf-guide"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>☀️</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Sunscreen for Oily Skin India — SPF Guide</p>
                <p className={styles.relatedCardSub}>Non-comedogenic SPF that won&apos;t undo your cleansing routine</p>
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
                <p className={styles.relatedCardSub}>Calm active breakouts between washes with targeted calamine care</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Face Wash Myths vs Scientific Truth</h2>
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

        {/* ─── BOTTOM CTA ──────────────────────────────────────────────────────── */}
        <section className={styles.bottomCta}>
          <div className={styles.bottomCtaOrb} aria-hidden="true" />
          <h2 className={styles.bottomCtaTitle}>Stop Guessing. Start Using the Right Formula.</h2>
          <p>
            Oily skin and acne-prone skin are not the same condition — and treating them as if they
            are is why so many face washes disappoint. The correct daily face wash addresses both
            the sebum overproduction that characterises oily skin and the follicular plugging that
            initiates acne — simultaneously, with the right actives at the right pH, without stripping
            your skin&apos;s barrier in the process. FreshOLite is that formula: salicylic acid, niacinamide,
            and Vitamin C in a gentle, pH-balanced base built for India&apos;s skin and climate.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy FreshOLite Face Wash on Amazon →
          </a>
          <p className={styles.bottomNote}>All Skin Types · Salicylic Acid + Niacinamide + Vitamin C · Free Delivery Available</p>
        </section>

      </div>
    </article>
  );
}