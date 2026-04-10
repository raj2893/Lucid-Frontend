import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './fresholite-daily-facewash-blog.module.css';

export const metadata: Metadata = {
  title: 'Best Face Wash for Daily Use Without Drying Skin India 2026 — Complete Guide',
  description:
    'Find the best face wash for daily use that won\'t dry your skin. Gentle, hydrating cleanser for all skin types. Expert India 2026 guide. Shop now.',
  keywords: [
    'best face wash for daily use without drying skin',
    'gentle face wash India',
    'face wash for dry skin India',
    'hydrating face wash India 2026',
    'best face wash India 2026',
    'non drying face wash India',
    'face wash for sensitive skin daily use',
    'face wash for all skin types India',
    'sulfate free face wash India',
    'best gentle cleanser India',
    'daily cleanser India',
    'face wash for normal skin India',
    'face wash without stripping moisture',
    'best face wash for combination skin India',
    'face wash for dry sensitive skin',
    'mild face wash India',
    'pH balanced face wash India',
    'best face wash men women India',
    'face wash for hydrated skin India',
    'morning face wash India',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/best-face-wash-daily-use-without-drying-skin-india',
  },
  openGraph: {
    title: 'Best Face Wash for Daily Use Without Drying Skin India 2026 — Complete Guide',
    description:
      'The complete 2026 India guide to choosing a daily face wash that cleanses deeply without stripping your skin barrier. Science, skin types, and expert protocol.',
    images: [
      {
        url: '/images/fresholite-facewash.png',
        width: 1200,
        height: 630,
        alt: 'FreshOLite Vitamin C Face Wash — Best Daily Face Wash Without Drying Skin India',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/05QOka5b';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Most Face Washes Dry Your Skin — and Why It Matters' },
  { id: 'science', label: 'The Science of Skin Barrier and Daily Cleansing' },
  { id: 'ingredients', label: 'Ingredients That Cleanse Without Stripping' },
  { id: 'problems-grid', label: 'Your Skin Problem — and the Daily Cleansing Solution' },
  { id: 'skin-type-guide', label: 'Complete Skin Type Suitability Guide' },
  { id: 'product-deep-dive', label: 'FreshOLite Vitamin C Face Wash — Full Feature Breakdown' },
  { id: 'how-to-use', label: 'Step-by-Step Daily Cleansing Protocol' },
  { id: 'results-timeline', label: 'What to Expect — Realistic Results Timeline' },
  { id: 'buying-guide', label: 'Complete Buying Guide for India 2026' },
  { id: 'who-needs', label: 'Who Needs a Non-Drying Daily Face Wash Most' },
  { id: 'related', label: 'Complete Your Skincare Routine' },
  { id: 'myths', label: 'Face Wash Myths vs. Truth' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🏜️',
    problem: 'Tight, Parched Skin After Washing',
    desc: 'That uncomfortable tight feeling immediately after washing is not a sign of cleanliness — it is a sign of barrier disruption. Surfactants in harsh cleansers strip not just dirt, but the ceramides and fatty acids that hold your skin cells together and retain moisture.',
    solution: 'A pH-balanced, sulphate-free cleanser removes impurities without dissolving the lipid layer. Your skin feels clean but never taut — because the moisture barrier is intact after every wash.',
  },
  {
    icon: '🌊',
    problem: 'Overproduction of Oil After Cleansing',
    desc: 'Paradoxically, harsh face washes cause more oiliness, not less. When the skin barrier is stripped, sebaceous glands receive a distress signal and compensate by producing excess sebum — creating the greasy midday shine that so many Indian city-dwellers experience.',
    solution: 'Gentle daily cleansing that respects the sebum balance gradually reduces compensatory oil production. After four to six weeks, skin normalises — producing the right amount of sebum rather than the reactive excess triggered by harsh cleansing.',
  },
  {
    icon: '🔴',
    problem: 'Redness, Irritation, and Reactive Skin',
    desc: 'Inflammatory responses after washing — redness, stinging, sensitivity to products applied afterwards — indicate that the skin\'s acid mantle has been disrupted. The acid mantle (pH 4.5–5.5) is the skin\'s primary microbial defence. Alkaline cleansers destroy it with every wash.',
    solution: 'A pH-matched cleanser maintains the acid mantle\'s integrity, keeping the skin\'s microbiome balanced and the inflammatory response calm. Reactive skin typically settles significantly within two to three weeks of switching to a pH-appropriate cleanser.',
  },
  {
    icon: '🌫️',
    problem: 'Dull, Uneven Skin Tone and Texture',
    desc: 'Daily environmental exposure in Indian cities — pollution particulates, UV radiation, hard water minerals — creates an oxidative load on the skin that manifests as dullness, uneven tone, and rough texture. These effects compound over time without targeted antioxidant intervention.',
    solution: 'Vitamin C integrated into the daily cleansing step neutralises free radicals at the point of first contact, brightening the complexion progressively with every wash. Orange extract adds a natural source of ascorbic acid that works synergistically with the cleansing action.',
  },
];

const skinTypes = [
  {
    type: 'Oily Skin',
    icon: '💦',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'The gentle formula removes excess sebum without triggering the rebound oil production that harsh cleansers cause. Oily skin benefits most from consistent pH-balanced cleansing that normalises sebum over time.',
  },
  {
    type: 'Dry Skin',
    icon: '🏜️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Sulphate-free cleansing is non-negotiable for dry skin. This formula removes surface impurities while preserving every lipid molecule the dry skin barrier can hold. Follow immediately with a moisturiser for best results.',
  },
  {
    type: 'Combination Skin',
    icon: '☯️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'The balanced formula addresses both zones simultaneously — cleansing the oily T-zone effectively without stripping the drier cheeks and jawline. Combination skin responds particularly well to pH-balanced cleansers.',
  },
  {
    type: 'Sensitive Skin',
    icon: '🌸',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'The absence of aggressive sulphates and artificial fragrances makes this suitable for sensitive skin. Perform a patch test on the inner wrist for 24 hours before incorporating into your daily routine.',
  },
  {
    type: 'Acne-Prone Skin',
    icon: '🔬',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Gentle daily cleansing prevents the pore-clogging buildup that triggers breakouts without the over-drying that worsens post-acne inflammation. Vitamin C also helps fade post-acne hyperpigmentation over time.',
  },
  {
    type: 'Mature / Ageing Skin',
    icon: '🍃',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Mature skin loses lipids progressively and cannot tolerate barrier disruption. A non-stripping formula with antioxidant Vitamin C is ideal — cleansing without accelerating the moisture loss that ages skin fastest.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Vitamin C and Orange Extract — Antioxidant Defence Built Into Your Cleanser',
    body1: `Vitamin C — ascorbic acid — is one of the most extensively studied antioxidants in dermatological science. Its role in skin health spans multiple mechanisms: it is a potent free radical scavenger that neutralises the reactive oxygen species generated by UV exposure and pollution; it is an essential cofactor in collagen synthesis, stimulating the fibroblast activity that maintains skin firmness and elasticity; and it is a melanogenesis inhibitor, interfering with the enzyme tyrosinase to reduce the overproduction of melanin that causes hyperpigmentation, dark spots, and post-inflammatory marks.

In the Indian context, Vitamin C in a daily cleanser is particularly meaningful. India's urban population faces a dual oxidative assault: intense year-round UV radiation, particularly in cities like Chennai, Ahmedabad, and Hyderabad where UV index routinely reaches extreme levels, combined with some of the world's highest concentrations of particulate air pollution in metropolitan areas like Delhi, Mumbai, and Pune. Each day of unprotected exposure generates an oxidative load that, without antioxidant intervention, progressively degrades collagen, darkens skin tone, and accelerates visible ageing.`,
    body2: `Orange extract compounds this benefit with a natural source of ascorbic acid alongside flavonoids and limonene that have their own anti-inflammatory and skin-brightening properties. The synergy between synthesised Vitamin C and natural orange-derived antioxidants creates a broader spectrum of free radical protection than either provides alone. Users consistently report that after four to eight weeks of daily use, their complexion appears more luminous, dark spots begin to fade, and the overall tone becomes more even — not because the cleanser is whitening the skin, but because it is preventing the daily accumulation of oxidative damage that causes dullness and uneven pigmentation in the first place.`,
  },
  {
    number: '02',
    heading: 'Sulphate-Free Gentle Cleansing — The Non-Negotiable for Daily Use',
    body1: `The difference between a face wash you can use twice daily without consequence and one that gradually destroys your skin barrier comes down, in large part, to surfactant choice. Conventional face washes — including many of India's most widely sold and aggressively marketed options — use sodium lauryl sulphate (SLS) or sodium laureth sulphate (SLES) as primary cleansing agents. These are inexpensive, produce dramatic foam, and feel subjectively "powerful" — but their mechanism of action is fundamentally damaging for daily use.

SLS and SLES are ionic surfactants that work by their affinity for both oil and water molecules, surrounding lipid-based impurities and allowing them to be rinsed away. The problem is that they are indiscriminate — they bind to and remove the ceramides, cholesterol, and fatty acids that form the skin's protective lipid barrier with the same efficiency that they remove pollution and excess sebum. Every wash with an SLS-based cleanser is a measurable disruption to the stratum corneum's structural integrity.`,
    body2: `A sulphate-free formulation uses milder, skin-compatible surfactant systems — typically amino acid-based or glucoside surfactants — that can distinguish functionally between "impurity lipids" and "structural lipids," removing the former while leaving the latter largely intact. The result is skin that is genuinely clean — free of the day's pollution, sebum excess, and product residue — but whose moisture barrier remains functional, whose pH remains in the healthy 4.5 to 5.5 acid mantle range, and whose ceramide content is not progressively depleted. This is the fundamental requirement for a face wash suitable for twice-daily use over months and years without cumulative skin damage.`,
  },
  {
    number: '03',
    heading: 'Deep Pore Cleansing Without Barrier Compromise',
    body1: `One of the persistent myths about gentle face washes is that they cannot deeply cleanse. The assumption — perpetuated by decades of marketing that equated aggressive squeaky-clean feeling with actual cleanliness — is that effective cleansing requires the stripping sensation. This is demonstrably false, and understanding why is important for making informed product decisions.

Effective pore cleansing depends on two factors: the surfactant system's ability to emulsify and lift sebum and debris from the follicle lining, and the physical action of massaging the cleanser into the skin to dislodge trapped particulates. Neither of these mechanisms requires harsh surfactants. Mild surfactant systems, combined with adequate massage time and appropriate water temperature, clean pores as effectively as aggressive SLS formulations. The difference is that mild surfactants stop at the impurity layer rather than continuing to strip the structural components beneath it.`,
    body2: `For Indian urban skin — which carries a daily burden of PM2.5 fine particulates, heavy metal deposits from traffic pollution, and the residue of SPF and skincare products — this deep but gentle cleansing action is essential. The surfactant system in FreshOLite Vitamin C Face Wash is designed to penetrate the follicle opening and lift this accumulated debris without creating the micro-inflammation that aggressive cleansers trigger. The result is visibly cleaner pores without the post-wash redness and sensitivity that signal barrier disruption. Over weeks of consistent use, pore appearance improves as the follicles maintain a cleaner state without the cycle of over-stripping and reactive sebum overproduction.`,
  },
  {
    number: '04',
    heading: 'Brightening Action That Compounds Over Time',
    body1: `The brightening effect of a Vitamin C face wash is distinct from instant cosmetic whitening — it is cumulative, biochemical, and durable. Each wash delivers a dose of antioxidant activity to the skin surface that neutralises the oxidative species generated by that day's UV and pollution exposure. On any single day, this effect is minor and imperceptible. Over weeks and months of daily use, the cumulative effect on skin tone, evenness, and luminosity is significant and visible.

The mechanism is multifactorial. Vitamin C's inhibition of tyrosinase activity reduces the daily triggering of melanogenesis by UV radiation — meaning that the skin produces less reactive melanin in response to everyday sun exposure. This is not bleaching; it is the prevention of new pigmentation formation. Simultaneously, the anti-inflammatory activity of Vitamin C reduces the post-inflammatory hyperpigmentation (PIH) response — the darkening of skin after acne, minor injuries, or irritation that is particularly pronounced in darker Indian skin tones (Fitzpatrick types IV–VI).`,
    body2: `Orange extract adds its own brightening mechanism through the natural vitamin C content and the alpha-hydroxy acid precursors present in citrus. These compounds gently accelerate the skin's natural cell turnover at the surface level, helping to shed the darker, oxidation-damaged surface cells and reveal the fresher, more uniformly pigmented cells beneath. This is a slow process — weeks rather than days — but it is self-reinforcing. As the cycle of daily oxidative damage is reduced by antioxidant cleansing, and cell turnover is gently supported, the complexion progressively becomes more even, more luminous, and more resistant to the dullness that accumulates in most Indian adults through their twenties and thirties without targeted antioxidant care.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Wet Your Face With Lukewarm Water',
    desc: 'Water temperature matters more than most people realise. Hot water is a significant cause of post-wash dryness — it dissolves the sebum layer that protects the skin during cleansing and causes the pores to dilate beyond what is necessary, increasing irritant penetration. Cold water does not adequately emulsify the surfactants. Lukewarm — comfortably warm, not steaming — is the optimal temperature for effective, non-damaging cleansing.',
  },
  {
    num: '02',
    title: 'Dispense and Lather Between Your Palms First',
    desc: 'Applying cleanser directly to dry or semi-wet skin concentrates surfactants and Vitamin C in localised spots before distribution, creating uneven application. Instead, dispense a coin-sized amount (approximately 1.5 ml) onto your palm, add a few drops of water, and create a light lather between your palms before applying to the face. This ensures even distribution and gentle initial surfactant dilution.',
  },
  {
    num: '03',
    title: 'Massage in Upward Circular Motions for 60 Seconds',
    desc: 'The 60-second rule is the most consistently skipped step in cleansing — and the most impactful. Surfactants require contact time with the skin\'s surface lipids to emulsify debris effectively. Less than 30 seconds of contact does not allow the cleanser to penetrate pore openings and lift their contents. Use the pads of your fingers (not nails) and work from the jaw upward, paying particular attention to the T-zone, the sides of the nose, and the hairline, where pollution and sebum accumulate most heavily.',
  },
  {
    num: '04',
    title: 'Rinse Thoroughly With Lukewarm Water',
    desc: 'Incomplete rinsing is the second most common cleansing error. Surfactant residue left on the skin after rinsing continues to disrupt the barrier and contributes to the dryness and tightness attributed to the cleanser itself. Rinse for a full 20–30 seconds, working systematically across all areas of the face — under the jaw, the sides of the nose, the hairline, and the neck if cleanser has migrated there.',
  },
  {
    num: '05',
    title: 'Pat (Do Not Rub) Dry With a Clean Towel',
    desc: 'Rubbing with a towel creates mechanical friction on skin that is temporarily softened by water exposure. This disrupts the freshly cleansed barrier and causes micro-abrasion that contributes to sensitivity over time. Pat gently with a clean, soft towel — ideally a dedicated face towel washed frequently. Leaving skin slightly damp before applying moisturiser is optimal; the residual moisture aids product absorption.',
  },
  {
    num: '06',
    title: 'Follow Immediately With Moisturiser',
    desc: 'Even the most gentle, non-stripping cleanser creates a brief window of enhanced transepidermal water loss as the skin barrier reassembles post-wash. Applying moisturiser within 60 seconds of towel-drying — while the skin is still slightly damp — significantly improves moisturiser absorption and locks in hydration before this TEWL window closes. This step is not optional for dry or combination skin types; it is the completion of the cleansing protocol.',
  },
];

const timeline = [
  {
    period: 'Days 1–3',
    title: 'Skin Adjusts — Possible Initial Transition',
    detail: 'If switching from a harsh SLS cleanser, skin may initially feel "less clean" — this is the absence of the over-stripped sensation your skin had normalised. Some people experience a brief increase in oiliness as the sebaceous glands continue their compensatory production before receiving the signal that stripping has stopped. This passes within five to seven days.',
  },
  {
    period: 'Week 1–2',
    title: 'Tightness and Dryness Resolve',
    detail: 'The characteristic post-wash tightness disappears. Skin feels clean but comfortable — a sensation unfamiliar if you\'ve been using stripping cleansers for years. The acid mantle begins to stabilise at its proper pH, reducing redness and reactive sensitivity. Moisturisers start absorbing more effectively because the barrier is less compromised.',
  },
  {
    period: 'Week 3–4',
    title: 'Sebum Normalisation and First Brightness',
    detail: 'Compensatory sebum production reduces noticeably. Oily skin types report significantly less midday shine. A subtle improvement in skin luminosity becomes visible as the cumulative Vitamin C antioxidant activity begins to show. Skin texture feels more even and refined. Dark spots may begin very early fading.',
  },
  {
    period: 'Week 6–8',
    title: 'Visible Brightening and Complexion Evenness',
    detail: 'The cumulative effect of consistent Vitamin C antioxidant delivery becomes clearly visible. Skin tone is noticeably more even. Post-inflammatory hyperpigmentation marks from previous acne or irritation show visible fading. The complexion has a natural luminosity that reflects consistent barrier health and reduced oxidative damage accumulation.',
  },
];

const buyingGuidePoints = [
  {
    icon: '⚗️',
    title: 'Surfactant System: The Most Important Factor',
    body: 'The single most important specification to verify before buying any daily face wash is the surfactant system. If sodium lauryl sulphate (SLS) or sodium laureth sulphate (SLES) appears in the first three ingredients, the product is not suitable for twice-daily use without barrier damage over time. Look for amino acid-derived surfactants, cocoyl glutamate, decyl glucoside, or similar mild surfactants as primary cleansing agents. This is non-negotiable for daily use.',
  },
  {
    icon: '🧪',
    title: 'pH Compatibility with Skin',
    body: 'The skin\'s acid mantle operates at pH 4.5 to 5.5. Most traditional soaps and many Indian-market face washes are formulated at pH 7 to 9 — alkaline ranges that destroy the acid mantle with every wash. The consequences accumulate over months: disrupted microbiome, increased susceptibility to acne-causing bacteria, impaired barrier function, and chronic sensitivity. A face wash for daily use must be formulated at skin-compatible pH. Most products do not publish their pH — look for brands that specifically state this in their product communications.',
  },
  {
    icon: '🌿',
    title: 'Active Ingredients That Add Value',
    body: 'Daily use is an opportunity to deliver beneficial actives to the skin at every cleansing step. Vitamin C is the highest-value active for an Indian daily cleanser — its antioxidant, brightening, and collagen-supportive properties address the three most significant skin concerns for Indian adults in urban environments (pollution damage, hyperpigmentation, and premature ageing). Natural botanical extracts that add antioxidant and soothing activity without risk of sensitisation are a meaningful secondary bonus.',
  },
  {
    icon: '🚫',
    title: 'What to Avoid — The Disqualifying Ingredients',
    body: 'Beyond sulphates, several ingredient categories should disqualify a daily face wash: artificial fragrances (one of the leading causes of contact dermatitis and sensitisation), alcohol listed high in the formula (denat. alcohol or SD alcohol cause significant drying), physical exfoliants like walnut shell powder (cause micro-tears in the skin barrier), and preservatives like MIT (methylisothiazolinone) which are known sensitisers. A daily cleanser should contain none of these.',
  },
];

const whoNeeds = [
  { icon: '🏙️', label: 'Urban Professionals in Polluted Cities', desc: 'Delhi, Mumbai, Bengaluru, Chennai — daily pollution deposits PM2.5, heavy metals, and ozone byproducts on skin. Antioxidant cleansing at the removal step prevents oxidative damage accumulation.' },
  { icon: '☀️', label: 'High-SPF Daily Sunscreen Users', desc: 'SPF users need an effective cleanser to fully remove UV filters at day\'s end. A gentle but thorough cleanser dissolves sunscreen completely without requiring harsh scrubbing that damages skin.' },
  { icon: '🎨', label: 'Regular Makeup Wearers', desc: 'Foundation, concealer, and primer must be fully removed daily to prevent clogged pores. A gentle cleanser used as a second-cleanse step after micellar water or cleansing balm removes every trace.' },
  { icon: '💆', label: 'Sensitive or Reactive Skin Types', desc: 'Those who have experienced burning, redness, or peeling from previous face washes. The non-irritating, barrier-respecting formula offers effective cleansing without the inflammatory response.' },
  { icon: '🌑', label: 'Those With Hyperpigmentation Concerns', desc: 'Dark spots, uneven tone, post-acne marks — the single most prevalent cosmetic concern among Indian adults. Daily Vitamin C in the cleansing step progressively addresses this without additional products.' },
  { icon: '👔', label: 'Men With Daily Shaving Routines', desc: 'Shaving creates microabrasions across the lower face that make barrier integrity critical. A gentle, non-stripping cleanser used pre- and post-shave prevents the irritation and ingrown hairs caused by harsh cleansers.' },
  { icon: '🏃', label: 'Active Individuals Who Wash Multiple Times Daily', desc: 'Athletes, gym-goers, and outdoor workers who wash their face two to three times daily need a formula that can sustain this frequency without cumulative barrier damage.' },
  { icon: '🧓', label: 'Mature Skin From 35+', desc: 'Sebum production naturally decreases with age, making barrier-stripping cleansers increasingly damaging. A non-drying Vitamin C cleanser supports ageing skin by cleansing gently while delivering antioxidants that counteract daily UV damage.' },
];

const myths = [
  {
    myth: 'If your face doesn\'t feel squeaky-clean after washing, the cleanser isn\'t working',
    truth: 'The squeaky-clean sensation is the feeling of your skin barrier being stripped of its natural oils. It is not a sign of effective cleansing — it is a sign of over-cleansing. Clean skin that has been properly washed with a pH-balanced cleanser feels smooth and comfortable, not tight and dry.',
  },
  {
    myth: 'More foam equals better cleaning',
    truth: 'Foam is produced by sulphate surfactants and has no correlation with cleansing efficacy. Many of the most effective cleansers — including amino acid-based formulas — produce modest lather. Consumers have been conditioned to associate foam with cleanliness by marketing, not by science. Low-foam or foam-free cleansers can be equally or more effective while being significantly gentler.',
  },
  {
    myth: 'Oily skin needs a strong, drying cleanser to control oil',
    truth: 'This is one of the most damaging myths in skincare. Harsh, drying cleansers trigger compensatory sebum overproduction — the skin senses the stripping and responds by producing more oil. Gentle, pH-balanced cleansers that remove excess sebum without stripping the barrier actually produce less oil over time as the sebaceous glands normalise without the constant over-stripping signal.',
  },
  {
    myth: 'You only need to wash your face once a day',
    truth: 'Twice-daily cleansing — morning and evening — is appropriate for most skin types. Morning cleansing removes the sweat, sebum, and overnight product residue that accumulates during sleep. Evening cleansing removes the day\'s pollution, UV filters, and makeup. The caveat is that both washes must use a gentle, barrier-respecting formula. Once-daily washing is only appropriate if your morning cleanser is particularly harsh — the solution being to switch to a gentler cleanser rather than to skip morning cleansing.',
  },
  {
    myth: 'Natural or herbal face washes are always gentler',
    truth: 'Natural origin does not equal skin-compatible. Many natural ingredients — walnut shell powder, lemon juice, baking soda, essential oils — are highly irritating or damaging to the skin barrier. Efficacy and gentleness are determined by the formula and pH, not by whether ingredients are natural or synthetic. A well-formulated synthetic cleanser is far safer for daily use than a poorly formulated natural one.',
  },
  {
    myth: 'Vitamin C in a cleanser gets washed off before it can do anything',
    truth: 'Even brief contact with Vitamin C during the cleansing process delivers measurable antioxidant activity to the skin surface. The 60 seconds of massage contact time allows ascorbic acid to neutralise surface free radicals, and a small residual amount remains after rinsing to continue acting. Cumulative daily exposure creates compounding brightening and protection benefits visible over four to eight weeks — even from a wash-off product.',
  },
];

const faqs = [
  {
    q: 'Can I use this face wash twice a day — morning and night?',
    a: 'Yes, and twice-daily use is the recommended protocol for maximum benefit. The sulphate-free, pH-balanced formula is specifically designed to sustain twice-daily use without cumulative barrier disruption. Morning use removes overnight sebum and product residue; evening use removes the day\'s pollution, UV filters, and makeup. Both washes contribute to the progressive Vitamin C brightening effect that compounds with consistent use.',
  },
  {
    q: 'Is this face wash suitable for dry skin types?',
    a: 'Dry skin types benefit most from sulphate-free cleansers, and this formula is well-suited for daily dry skin use. The absence of SLS and SLES means the limited natural oils that dry skin produces are not stripped away at each wash. For dry skin, follow each cleanse immediately — within 60 seconds — with a nourishing moisturiser to capture the slight residual dampness and prevent transepidermal water loss. The combination of a non-stripping cleanser and prompt moisturisation is the foundation of dry skin care.',
  },
  {
    q: 'How long before I see brightening results from the Vitamin C?',
    a: 'Initial subtle improvements in luminosity typically become noticeable around three to four weeks of consistent twice-daily use. More significant changes in skin tone evenness and hyperpigmentation reduction are visible at the six to eight week mark. The mechanism is cumulative — each wash prevents a small amount of daily oxidative damage that would otherwise accumulate into dullness and uneven pigmentation over time. Results accelerate when the face wash is paired with a Vitamin C serum and daily SPF 50 sunscreen.',
  },
  {
    q: 'Can men use this face wash as part of a shaving routine?',
    a: 'Yes — this face wash is appropriate for both men and women and works well in a shaving routine. For pre-shave use, the gentle cleansing softens the skin and removes the surface sebum and debris that can obstruct razor blades. For post-shave use, the non-irritating, barrier-respecting formula soothes the micro-abrasions created by shaving without the sting or dryness that alcohol-based or sulphate-heavy washes cause. Apply with light pressure, avoiding the freshly shaved areas initially.',
  },
  {
    q: 'Will this face wash remove sunscreen and makeup completely?',
    a: 'For light to medium makeup and mineral or chemical SPF formulas, a thorough 60-second massage with this cleanser will remove them fully. For heavy or waterproof makeup, full-coverage foundation, or very high-SPF water-resistant sunscreens, a double-cleanse approach is recommended — first remove with a micellar water or cleansing balm, then follow with FreshOLite Vitamin C Face Wash as the second step. This ensures complete removal without requiring aggressive mechanical scrubbing.',
  },
  {
    q: 'Is it safe for people with acne-prone skin?',
    a: 'Yes, with an important distinction: this is a cleansing product, not an acne treatment. It will not actively treat existing acne lesions in the way salicylic acid or benzoyl peroxide formulations do. However, it is non-comedogenic and non-irritating, making it an excellent daily cleanser for acne-prone skin — effective at removing the excess sebum and debris that contribute to breakouts without the inflammatory barrier disruption that harsh cleansers cause, which worsens acne over time. The Vitamin C also helps fade post-acne hyperpigmentation marks.',
  },
  {
    q: 'Can I use this during pregnancy?',
    a: 'Topical Vitamin C in a wash-off cleanser format is generally considered safe during pregnancy, as systemic absorption from brief topical contact is negligible. However, the standard precaution applies — consult your gynaecologist or dermatologist before introducing any new skincare product during pregnancy or breastfeeding. The sulphate-free, fragrance-conscious formula minimises the categories of ingredients of concern.',
  },
  {
    q: 'How much product should I use per wash?',
    a: 'A coin-sized amount — approximately 1.5 ml — is sufficient for a full face cleanse when lathered appropriately. Using more does not improve cleansing and depletes the product unnecessarily. The key variable is not the amount of product but the contact time and massage technique — 60 seconds of thorough massaging with an appropriate amount delivers significantly better results than a larger amount applied briefly.',
  },
  {
    q: 'What water should I use — tap or filtered?',
    a: 'This is a practical concern across much of urban India, where tap water is hard — high in calcium, magnesium, and chloride. Hard water creates mineral deposits on the skin after rinsing that disrupt the acid mantle and contribute to dryness and dullness. If you are in a hard water area (most cities including Delhi, Bengaluru, and Chennai), filtered or boiled-and-cooled water for the final rinse makes a meaningful difference to skin texture and the cleanser\'s residual effectiveness. Using the cleanser with a gentle water softener attachment is also a practical long-term solution.',
  },
  {
    q: 'Should I use a toner after this face wash?',
    a: 'If you use a toner, apply it after cleansing and before moisturiser. Choose a hydrating, pH-balancing toner (no alcohol, no witch hazel) rather than an astringent one — the goal of a non-drying skincare routine is to maintain moisture at every step, not remove it. A hydrating toner with ingredients like hyaluronic acid, niacinamide, or rose water adds moisture and helps subsequent product absorption. Astringent toners undo much of the barrier protection that a gentle cleanser provides.',
  },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────────

export default function FreshOLiteDailyFaceWashBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />
        <div className={styles.heroOrb3} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Face Wash · Vitamin C · Daily Cleansing · India Guide 2026</span>
            <h1 className={styles.heroTitle}>
              Best Face Wash for
              <br />
              <em>Daily Use Without Drying Skin</em>
              <br />
              <span className={styles.heroTitleSub}>The Complete 2026 India Guide</span>
            </h1>
            <p className={styles.heroSub}>
              Most face washes strip your skin barrier twice a day, triggering oil overproduction,
              sensitivity, and premature ageing. This guide explains the science of daily cleansing —
              and why a Vitamin C, sulphate-free formula is the only rational choice for Indian skin.
            </p>
            <div className={styles.heroMeta}>
              <span>⏱ 20 min read</span>
              <span>📅 April 2026</span>
              <span>📝 5,500+ words</span>
            </div>
            <div className={styles.heroActions}>
              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy FreshOLite Vitamin C Face Wash on Amazon →
              </a>
              <span className={styles.heroSubNote}>Vitamin C · Orange Extract · Sulphate-Free · All Skin Types</span>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageRing} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/fresholite-facewash.png"
                alt="FreshOLite Vitamin C Face Wash with Orange Extracts — Best Daily Face Wash India"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 400px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🍊 Vitamin C</span>
              <span>💧 Non-Drying</span>
              <span>✨ Brightening</span>
              <span>🌿 Sulphate-Free</span>
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
          <h2 className={styles.sectionTitle}>Why Most Face Washes Dry Your Skin — and Why It Is Slowly Damaging It</h2>
          <p>
            You wash your face. Your skin feels tight. By mid-morning, it is oily again. You wash
            again. Tight again. More oil. The cycle repeats every day, and somewhere in the back of
            your mind you have accepted this as normal — as just what skin does.
          </p>
          <p>
            It is not normal. It is a predictable, mechanistically explicable consequence of using
            the wrong cleanser. And it is one of the most common sources of skin damage in India,
            operating quietly and cumulatively across millions of daily routines.
          </p>
          <p>
            India&apos;s face wash market is dominated by products built around sodium lauryl sulphate
            (SLS) — a surfactant so effective at removing oil that it is also used in engine degreasers
            and industrial cleaning agents. In appropriate concentrations and contexts, SLS is not
            dangerous. In a product applied to the face twice daily and in contact with the skin&apos;s
            delicate barrier every single day of adult life, it is a slow-motion disaster for skin
            health. Every wash strips away not just the day&apos;s pollution and sebum, but the ceramides,
            fatty acids, and natural moisturising factors that form the structural foundation of a
            healthy skin barrier.
          </p>
          <p>
            India&apos;s climate compounds this damage. In cities like Mumbai and Chennai, high humidity
            alternates with air-conditioned indoor environments — the repeated humidity cycling causes
            dramatic shifts in the skin barrier&apos;s water content that leave it chronically compromised.
            In Delhi and Lucknow, the combination of extreme summer heat and bone-dry winter air creates
            a year-round challenge for barrier maintenance. In Bengaluru and Hyderabad, hard water loaded
            with calcium and magnesium deposits on the skin after every rinse, disrupting the acid
            mantle and contributing to the dullness and uneven texture that is endemic in urban Indian
            skin.
          </p>
          <p>
            Into this context, most face washes sold in India deliver exactly the wrong formulation for
            daily use. They are alkaline — formulated at pH 7 to 9, far above the skin&apos;s natural acid
            mantle of 4.5 to 5.5. They contain SLS or SLES as primary surfactants. They include
            artificial fragrances that are leading causes of contact sensitisation. And they contain no
            beneficial active ingredients that might offset the damage they do in the act of cleansing.
          </p>
          <p>
            The result, for millions of Indian adults, is a daily routine that progressively weakens
            the skin barrier, triggers chronic low-grade inflammation, causes compensatory sebum
            overproduction, and accelerates the visible ageing and hyperpigmentation that are already
            amplified by India&apos;s intense UV exposure and pollution load. The face wash is supposed to be
            the foundational cleansing step that sets up the rest of your routine for success. When it
            damages the very surface it is meant to clean, every subsequent skincare product works
            against a compromised substrate.
          </p>
          <p>
            This guide covers everything you need to make a genuinely informed choice about your daily
            face wash: the science of the skin barrier and what damages it, the chemistry of different
            surfactant systems and why they differ so profoundly in their effects, the specific
            ingredients that transform a cleanser from a damaging commodity product into an active
            skincare step, the complete protocol for using a daily cleanser correctly, and a thorough
            analysis of what to look for — and avoid — when buying in India&apos;s crowded market. Read
            it fully. The face wash choice is made twice a day, every day. It deserves proper research.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ─────────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of Your Skin Barrier — What Daily Cleansing Is Actually Doing</h2>

          <h3 className={styles.subHeading}>The Stratum Corneum: Your Skin&apos;s Most Important Structure</h3>
          <p>
            The stratum corneum — the outermost layer of the epidermis — is approximately 10 to 20
            micrometres thick, composed of 15 to 20 layers of dead keratinocytes (corneocytes) embedded
            in a lipid matrix of ceramides, cholesterol, and fatty acids. This structure is often described
            as a &quot;brick and mortar&quot; arrangement: the corneocytes are the bricks, and the lipid matrix
            is the mortar that holds them together, prevents water loss, and blocks external irritants,
            allergens, and pathogens from penetrating to the living tissue below.
          </p>
          <p>
            The lipid matrix is the component that daily cleansing most directly affects. Ceramides —
            which constitute approximately 50% of the stratum corneum&apos;s lipid content — are the primary
            waterproofing molecules. They create a physical seal between corneocytes that dramatically
            reduces transepidermal water loss (TEWL). Cholesterol provides structural integrity and
            fluidity. Fatty acids maintain the acid pH of the barrier surface that constitutes the acid
            mantle. These three lipid families must be present in the right proportions for the barrier
            to function properly.
          </p>

          <h3 className={styles.subHeading}>What SLS Does to Your Barrier in Real Time</h3>
          <p>
            When a sodium lauryl sulphate-based cleanser contacts the skin surface, the SLS molecules
            — anionic surfactants — insert themselves into the lipid bilayers of the stratum corneum,
            disrupting the ordered arrangement of ceramide molecules and increasing membrane
            permeability. This is what creates cleansing efficacy: the disruption allows the surfactant
            to emulsify sebum and debris. The problem is that the same disruption removes structural
            ceramides, reduces fatty acid content, and temporarily raises the skin&apos;s pH above its
            healthy acid mantle range.
          </p>
          <p>
            In a healthy adult with robust barrier function, the stratum corneum recovers from a single
            SLS wash within approximately 24 hours. The barrier lipids are resynthesised, the pH
            normalises, and function is restored before the next wash. But twice-daily SLS exposure
            — which is the reality for most adults who wash morning and evening — exceeds the barrier&apos;s
            recovery rate. Each wash causes disruption before the previous disruption has fully healed.
            The cumulative effect, measured over months and years, is progressive barrier dysfunction:
            increasing TEWL, decreasing ceramide density, chronic subclinical inflammation, and the
            heightened reactivity that manifests as sensitive, dry, and reactive skin.
          </p>

          <h3 className={styles.subHeading}>The Acid Mantle: Why pH Matters More Than You Think</h3>
          <p>
            The skin&apos;s surface maintains a pH of approximately 4.5 to 5.5 — mildly acidic. This
            acidity, known as the acid mantle, serves two critical functions: it is the optimal
            environment for the skin&apos;s natural ceramide-synthesising enzymes (serine proteases and
            transglutaminase), and it creates an inhospitable environment for pathogens including
            <em> Staphylococcus aureus</em> (a primary trigger of acne and eczema flares) and
            <em> Malassezia</em> (the fungal species behind dandruff and seborrhoeic dermatitis).
          </p>
          <p>
            Most soap bars are formulated at pH 9 to 10. Many Indian-market face washes range from
            pH 6.5 to 8. Even a temporary elevation to pH 7 disrupts the acid mantle&apos;s antimicrobial
            properties and impairs the enzymatic processes that repair the barrier lipid layer. Recovery
            to normal pH takes between 30 minutes and several hours after washing — a window during
            which the skin is more vulnerable to bacterial colonisation and irritant penetration.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> The most common skincare complaint among Indian adults —
              combination skin that is oily in the T-zone but dry and sensitive on the cheeks — is
              not a skin type. It is a cleanser damage pattern. The T-zone&apos;s more active sebaceous
              glands recover faster from stripping; the cheeks, with fewer glands, are left chronically
              dry. Switching to a pH-balanced, sulphate-free cleanser resolves this &quot;combination&quot;
              pattern in most cases within four to six weeks.
            </div>
          </div>
        </section>

        {/* ─── INGREDIENTS SECTION ─────────────────────────────────────────────── */}
        <section id="ingredients" className={styles.section}>
          <h2 className={styles.sectionTitle}>Ingredients That Cleanse Without Stripping — What to Look For</h2>

          <h3 className={styles.subHeading}>Mild Surfactant Systems: The Foundation</h3>
          <p>
            The primary surfactant in a daily face wash determines more about its impact on skin health
            than any other single formulation choice. Amino acid-derived surfactants — sodium cocoyl
            glutamate, sodium lauroyl glutamate, sodium cocoyl glycinate — are derived from amino acids
            (typically glutamic acid or glycine) and coconut oil. They are anionic surfactants like SLS
            but with a fundamentally different molecular structure that makes them significantly milder:
            their critical micelle concentration is lower, meaning they achieve effective cleansing at
            concentrations where they cause minimal barrier disruption, and their hydration profiles in
            dermatological testing consistently show less TEWL increase than SLS formulations.
          </p>
          <p>
            Glucoside surfactants — decyl glucoside, lauryl glucoside, coco glucoside — are derived from
            glucose and coconut oil. They are non-ionic surfactants with excellent skin compatibility and
            very low irritation potential. They produce less foam than SLS (which is cosmetically
            unfamiliar to consumers conditioned to heavy lather) but are highly effective cleansers. They
            are particularly well-suited to sensitive and dry skin types where amino acid surfactants may
            still produce slightly more stimulation than tolerated.
          </p>

          <h3 className={styles.subHeading}>Vitamin C: The Ideal Daily Cleanser Active</h3>
          <p>
            Incorporating Vitamin C into a daily cleanser is a scientifically rational formulation choice.
            The argument that Vitamin C &quot;washes off before it can work&quot; misunderstands both the kinetics
            of topical antioxidant activity and the cumulative benefit model. Ascorbic acid begins
            interacting with reactive oxygen species on the skin surface immediately upon contact —
            within the 60 seconds of massage application, meaningful free radical neutralisation occurs
            at the skin surface before any rinsing takes place. A small fraction of Vitamin C also
            penetrates the stratum corneum before rinsing, where it continues to provide antioxidant
            activity post-wash. And the cumulative prevention of daily oxidative damage — preventing the
            formation of melanin-stimulating reactive oxygen species each morning and evening — adds up
            over weeks into a meaningful, visible brightening effect.
          </p>
          <p>
            For Indian skin specifically, where UV index is extreme and pollution load is high, this
            daily antioxidant delivery at the cleansing step represents an accessible and low-effort
            way to address the oxidative component of hyperpigmentation, dullness, and premature ageing
            without requiring additional dedicated Vitamin C serum steps.
          </p>

          <h3 className={styles.subHeading}>Orange Extract: Natural Synergy</h3>
          <p>
            Citrus sinensis (sweet orange) extract provides several skin-beneficial components: natural
            ascorbic acid that compounds the synthetic Vitamin C activity, hesperidin and other flavonoids
            with antioxidant and anti-inflammatory properties, and d-limonene which has been shown to
            have mild brightening and sebum-regulating effects in topical application. The anti-inflammatory
            activity of orange bioflavonoids is particularly relevant for Indian skin types where chronic
            low-grade inflammation — from pollution exposure, UV radiation, and harsh cleanser use — is
            common and contributes to both premature ageing and hyperpigmentation.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>⚠️</span>
            <div>
              <strong>Important:</strong> Orange extract is distinct from lemon juice or undiluted citrus
              acids applied directly to skin — these are too acidic for topical use and cause chemical
              burns. Properly formulated orange extract is standardised to a safe concentration and pH
              that delivers the beneficial bioactive compounds without the irritant effects of raw
              citrus acids. Never apply undiluted lemon juice to your face as a DIY brightening treatment.
            </div>
          </div>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Skin Problem — And What Daily Cleansing Is Doing to Cause It</h2>
          <p className={styles.sectionIntro}>
            The four most common skin complaints among Indian adults — dryness, oiliness, irritation,
            and dullness — have a single common contributor: an incompatible daily cleanser.
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

        {/* ─── SKIN TYPE GUIDE ────────────────────────────────────────────────── */}
        <section id="skin-type-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete Skin Type Suitability Guide</h2>
          <p className={styles.sectionIntro}>
            A genuinely daily-use face wash must work for all skin types without adjustment. Here is
            how FreshOLite Vitamin C Face Wash performs across every major Indian skin type.
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

        {/* ─── PRODUCT DEEP DIVE ──────────────────────────────────────────────── */}
        <section id="product-deep-dive" className={styles.section}>
          <h2 className={styles.sectionTitle}>FreshOLite Vitamin C Face Wash — Complete Feature Breakdown</h2>

          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              Vitamin C. Orange Extract. Sulphate-Free. Built for Indian Skin.
            </p>
            <p className={styles.midCtaSub}>
              Deep cleansing that respects your barrier — and brightens your complexion every single day.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get FreshOLite Vitamin C Face Wash on Amazon →
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
            <span className={styles.calloutIcon}>🔬</span>
            <div>
              <strong>Important Distinction:</strong> A Vitamin C face wash and a Vitamin C serum
              serve fundamentally different functions. The face wash delivers daily antioxidant
              cleansing and progressive brightening through cumulative use — it is a
              <em> preventive</em> and <em>maintenance</em> step. A dedicated Vitamin C serum,
              left on the skin at a higher concentration for extended contact time, provides a
              higher-intensity <em>treatment</em> effect. Both have a place in a complete routine.
              The face wash is not a serum substitute, but it meaningfully raises the baseline
              antioxidant defence of the skin every single day without additional steps — which is
              its unique value.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Daily Cleansing Protocol</h2>
          <p className={styles.sectionIntro}>
            Most skin concerns attributed to face washes are actually caused by incorrect application
            technique — wrong water temperature, insufficient contact time, or inadequate rinsing.
            Follow this protocol exactly.
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
            💡 <strong>Pro Tip:</strong> If you live in a hard water city — Delhi, Bengaluru,
            Chennai, Ahmedabad — the calcium and magnesium in tap water react with surfactants to
            form insoluble soap scum that deposits on the skin, contributing to dullness and barrier
            disruption. Use filtered or slightly acidified water (a few drops of apple cider vinegar
            in the rinse water, pH approximately 4–5) for the final face rinse. The improvement in
            skin clarity and reduced tightness is immediate and significant. Pair your cleansing
            routine with proper daily SPF protection — our{' '}
            <Link
              href="/blog/best-sunscreen-oily-skin-india-spf-guide"
              className={styles.internalLink}
            >
              complete guide to the best sunscreen for oily skin in India
            </Link>{' '}
            covers exactly which SPF formulas layer well after a Vitamin C face wash.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>What to Expect — Realistic Results Timeline for Daily Use</h2>
          <p className={styles.sectionIntro}>
            Switching to a barrier-respecting cleanser produces changes on a predictable timeline.
            Here is an honest week-by-week account of what consistent use delivers.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — Choosing a Daily Face Wash in India 2026</h2>
          <p className={styles.sectionIntro}>
            India&apos;s face wash market has hundreds of options at every price point. These are the
            four criteria that actually determine whether a face wash is suitable for daily use —
            and the reasons most products fail at least one of them.
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
            The most pervasive buying error in the Indian face wash market is selecting based on foam
            production. Years of advertising have created a cultural association between heavy lather
            and effective cleansing that is scientifically baseless but commercially deeply entrenched.
            Products formulated for maximum foam are, almost without exception, high in SLS — which
            is the compound responsible for the foam but also for the barrier disruption. When
            evaluating a new face wash, suppress the instinct to assess foam volume. Assess how your
            skin feels 30 minutes after washing: comfortable and balanced is the correct outcome;
            tight, dry, or burning is barrier damage.
          </p>
          <p>
            The second most common mistake is confusing &quot;herbal&quot; or &quot;natural&quot; marketing with
            gentle formulation. A significant proportion of Indian-market face washes marketed as
            natural or Ayurvedic-inspired still use SLS or SLES as their primary surfactant alongside
            botanical extracts. The botanical extracts do not counteract the SLS damage — they provide
            cosmetic appeal while the underlying formula continues to strip the barrier. Read the
            ingredient list, not the front-of-pack claims. If SLS or SLES appears in the first five
            ingredients of an &quot;herbal&quot; cleanser, it is not formulated for daily gentle use regardless
            of how it is marketed.
          </p>
          <p>
            The third mistake is purchasing a single bottle and discontinuing after two weeks without
            visible transformation. Skin barrier repair and Vitamin C brightening both operate on
            biological timescales of weeks to months. Two weeks is enough to eliminate dryness and
            tightness — but not enough to see brightening or texture improvement. Plan for a minimum
            eight-week trial with consistent twice-daily use before evaluating the full range of
            benefits. Skincare results require sustained commitment that most product marketing
            underrepresents.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              The cleanser your skin deserves. Every morning. Every evening.
            </p>
            <p className={styles.midCtaSub}>
              FreshOLite Vitamin C Face Wash — sulphate-free, pH-balanced, Vitamin C brightening.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop FreshOLite Vitamin C Face Wash on Amazon →
            </a>
          </div>
        </section>

        {/* ─── WHO NEEDS THIS ──────────────────────────────────────────────────── */}
        <section id="who-needs" className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Needs a Non-Drying Daily Face Wash Most</h2>
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
        <div id="related" className={styles.relatedBand}>
          <p className={styles.relatedBandTitle}>Complete Your Skincare Routine</p>
          <p className={styles.relatedBandSub}>
            A great face wash is the foundation — but a complete routine protects, nourishes,
            and repairs your skin at every step.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/best-sunscreen-oily-skin-india-spf-guide"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>☀️</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Sunscreen for Oily Skin India 2026</p>
                <p className={styles.relatedCardSub}>Freshotil Sunguard 50 — broad-spectrum SPF without the grease</p>
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
                <p className={styles.relatedCardTitle}>Calamine Lotion Complete Guide 2026</p>
                <p className={styles.relatedCardSub}>Uses, benefits, and when calamine is the right choice for your skin</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Face Wash Myths vs. Truth — What Indian Consumers Get Wrong</h2>
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
          <h2 className={styles.sectionTitle}>Frequently Asked Questions About Daily Face Wash</h2>
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
          <h2 className={styles.bottomCtaTitle}>Your Skin Deserves a Better Daily Cleanser</h2>
          <p>
            The twice-daily face wash is the single most repeated skincare action of your adult life.
            Doing it with a formula that respects your barrier, delivers Vitamin C antioxidant
            protection, and cleanses without stripping is not a luxury — it is the rational baseline.
            FreshOLite Vitamin C Face Wash is built for India&apos;s specific skin challenges: pollution
            load, UV intensity, hard water, and the dual demands of deep cleansing and barrier
            protection in a single step.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy FreshOLite Vitamin C Face Wash on Amazon →
          </a>
          <p className={styles.bottomNote}>
            All Skin Types · Sulphate-Free · Vitamin C + Orange Extract · Free Delivery Available
          </p>
        </section>

      </div>
    </article>
  );
}