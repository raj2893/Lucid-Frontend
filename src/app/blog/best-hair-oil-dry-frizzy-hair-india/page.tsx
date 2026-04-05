import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './hairoshine-dry-frizzy-hair-oil-blog.module.css';

export const metadata: Metadata = {
  title: 'Best Hair Oil for Dry and Frizzy Hair in India 2026 — Complete Guide',
  description:
    'Discover the best hair oil for dry and frizzy hair in India. Deep moisture, frizz control & silk-smooth results for Indian hair. Expert guide + buy now.',
  keywords: [
    'best hair oil for dry and frizzy hair in India',
    'hair oil for frizzy hair India',
    'dry hair oil India',
    'frizz control hair oil India',
    'best hair oil for dry hair 2026',
    'hair oil for rough hair India',
    'smooth hair oil India',
    'anti frizz hair oil India',
    'hair oil for dry scalp India',
    'moisture hair oil India',
    'best hair oil for damaged hair India',
    'hair oil for split ends India',
    'hair oil for coarse hair India',
    'hair oil for humidity India',
    'hair oil for Indian hair',
    'hair oil for frizzy hair women India',
    'hair oil for frizzy hair men India',
    'deep conditioning hair oil India',
    'hair nourishment oil India',
    'best hair oil for silky smooth hair India',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/best-hair-oil-dry-frizzy-hair-india',
  },
  openGraph: {
    title: 'Best Hair Oil for Dry and Frizzy Hair in India 2026 — Complete Guide',
    description:
      'End dry, frizzy, unmanageable hair with the right oil for Indian climate and hair types. The complete 2026 expert guide to smooth, nourished hair.',
    images: [
      {
        url: '/images/hairoshine-dry-frizzy-hair-oil.jpg',
        width: 1200,
        height: 630,
        alt: 'HairOShine Hair Oil for Dry and Frizzy Hair India',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/08jCSko2';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Dry and Frizzy Hair Is So Common in India' },
  { id: 'science', label: 'The Science of Frizz — What Is Actually Happening' },
  { id: 'ingredients', label: 'Ingredients That Genuinely Tame Frizz and Dryness' },
  { id: 'problems-grid', label: 'Your Hair Problem — And the Specific Fix' },
  { id: 'hair-type-guide', label: 'Complete Hair Type Suitability Guide' },
  { id: 'product-deep-dive', label: 'HairOShine Hair Oil — Full Feature Breakdown' },
  { id: 'how-to-use', label: 'Step-by-Step Application Protocol' },
  { id: 'results-timeline', label: 'Realistic Results Timeline' },
  { id: 'buying-guide', label: 'Complete Buying Guide for India' },
  { id: 'who-needs', label: 'Who Needs This Oil Most' },
  { id: 'related', label: 'Complete Your Hair Care Routine' },
  { id: 'myths', label: 'Dry Hair and Frizz Myths vs. Truth' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🌵',
    problem: 'Chronically Dry, Parched Hair Shaft',
    desc: 'Dry hair is not a surface problem — it is a structural one. The hair cortex, depleted of its natural lipid content through hard water mineral buildup, aggressive shampooing, and UV oxidation, loses its ability to retain moisture between washes. The result is hair that feels rough, looks dull, and becomes brittle enough to snap under minimal mechanical stress.',
    solution: 'A nourishing oil penetrates the hair cortex and replenishes the lipid layer that seals in moisture. Applied pre-wash, it creates a protective coating that limits hygral fatigue — the swelling and contracting of the hair shaft during wetting and drying that is a primary cause of cuticle damage and chronic dryness in Indian hair.',
  },
  {
    icon: '☁️',
    problem: 'Frizz and Flyaways in Humid Conditions',
    desc: 'Frizz is a moisture equilibrium problem. When the hair shaft is dehydrated, it aggressively absorbs atmospheric moisture from the humid Indian climate — swelling unevenly, lifting the cuticle, and producing the characteristic halo of flyaway strands that no amount of brushing resolves. Mumbai, Kolkata, and Chennai are humidity hotspots where this cycle is relentless.',
    solution: 'Oiling the hair shaft before exposure to humidity creates a partial occlusive barrier that slows the rate of atmospheric moisture absorption. This does not eliminate frizz entirely — only proper hydration of the cortex does that — but it significantly reduces the severity of the frizz response by preventing the sudden, uneven moisture uptake that causes cuticle lifting.',
  },
  {
    icon: '✂️',
    problem: 'Split Ends and Breakage Along the Shaft',
    desc: 'Split ends are the terminal result of a cortex that has been stripped of its protective lipid sheath. Once the cuticle at the tip of a strand has been worn away by friction, heat styling, chemical treatments, or UV damage, the cortex underneath splits longitudinally. Breakage along the shaft — not just at the tip — indicates that the structural integrity of the entire strand is compromised.',
    solution: 'Regular oiling prior to heat styling or vigorous brushing dramatically reduces the friction coefficient on the hair shaft — the mechanical force required to pull a comb through dry hair is significantly higher than through oiled hair, and it is this repeated friction that causes mid-shaft breakage. Consistent pre-styling oil application protects existing length while the cortex rebuilds its lipid reservoir.',
  },
  {
    icon: '🌀',
    problem: 'Unmanageable, Coarse Texture After Washing',
    desc: 'Hard water — prevalent in Delhi, Bengaluru, Chennai, and most Indian urban water supplies — deposits calcium and magnesium ions onto the hair shaft with every wash. These mineral deposits roughen the cuticle surface, making hair feel coarse and tangled. They also interfere with conditioner efficacy, creating a cycle where hair feels temporarily softened post-wash but returns to a rough, difficult texture within hours.',
    solution: 'Pre-wash oil treatment creates a protective barrier on the hair shaft before mineral-laden water contacts it, reducing the amount of calcium and magnesium that binds to the cuticle during washing. Post-wash oiling seals the cuticle shut, maintaining the smooth surface that makes hair feel soft, manageable, and tangle-free between wash sessions.',
  },
];

const hairTypes = [
  {
    type: 'Dry and Coarse',
    icon: '🏜️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'The primary target user. Apply generously as a pre-wash treatment and in small amounts as a post-wash leave-in. Consistent use progressively restores the cortex lipid content that makes hair feel permanently softer and more manageable.',
  },
  {
    type: 'Frizzy in Humidity',
    icon: '🌧️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'A few drops worked through mid-lengths and ends before stepping out creates an occlusive barrier against atmospheric moisture absorption. Particularly effective as a pre-commute application in cities like Mumbai, Kochi, and Kolkata.',
  },
  {
    type: 'Normal to Slightly Dry',
    icon: '✅',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Use as a weekly pre-wash scalp and hair treatment for maintenance and shine. Small amounts applied to dried hair post-styling control volume and add definition without weighing hair down.',
  },
  {
    type: 'Oily Scalp, Dry Ends',
    icon: '⚖️',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Apply only from mid-length to ends, avoiding the scalp. This "sandwich" approach treats the parts that need moisture most without amplifying scalp oiliness. A targeted nozzle or careful finger application is recommended.',
  },
  {
    type: 'Chemically Treated',
    icon: '🧪',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Chemical processes — bleaching, colouring, perming, rebonding — strip the cortex lipid layer completely. Regular oiling is the most critical repair step for chemically treated hair, replenishing what the treatment has removed.',
  },
  {
    type: 'Fine and Prone to Limpness',
    icon: '🌾',
    verdict: 'With Caution',
    verdictClass: 'caution',
    explanation: 'Fine hair can appear weighed down and limp with too much oil. Use very sparingly — a single small drop warmed between the palms and smoothed over the ends only. Avoid scalp application entirely on fine hair.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Deep Cortex Moisture Restoration',
    body1: `The hair shaft is not a solid cylinder — it is a complex layered structure consisting of the medulla (innermost core), the cortex (the thick, fibrous middle layer that determines strength, elasticity, and colour), and the cuticle (the outermost overlapping scale-like layer that determines shine and smoothness). The cortex is composed of tightly packed keratin protein bundles held together by an intercellular cement layer that is predominantly lipid in composition. It is this lipid cement — the fatty acids and ceramides that fill the spaces between cortical cells — that gives healthy hair its moisture retention capacity, flexibility, and resistance to breakage.

When this lipid layer is depleted — through repeated exposure to hard water, alkaline shampoos, heat styling above 150°C, UV radiation, and the mechanical stress of brushing dry hair — the cortex becomes porous. Porous hair absorbs water rapidly when wet (swelling excessively and causing hygral fatigue) and loses it rapidly when dry, perpetuating a cycle of wetting and drying damage that progressively worsens the hair's moisture retention capacity with each wash cycle. This is the biochemical explanation for hair that seems to get drier, more brittle, and more frizzy over time despite regular washing and conditioning.`,
    body2: `A well-formulated hair oil works at this structural level by replenishing the intercellular lipid layer within the cortex. Certain oils — particularly those with smaller molecular weights and the appropriate fatty acid profile — can penetrate the cuticle layer and be incorporated into the cortex, physically filling the gaps left by lipid depletion and restoring the moisture barrier from within. This is a measurably different effect from a surface conditioner, which coats the outside of the cuticle temporarily. Cortex penetration creates lasting structural improvement — hair that retains moisture more effectively, resists swelling in humidity, and produces the sustained softness and elasticity that surface treatments alone cannot deliver. For Indian hair subjected to hard water, humidity, and UV stress daily, this deep structural nourishment is the most important thing a hair oil can provide.`,
  },
  {
    number: '02',
    heading: 'Cuticle Sealing and Frizz Control',
    body1: `The cuticle is the hair shaft's primary interface with its environment — the overlapping, scale-like cells that, when lying flat and smooth, produce the glass-like light reflectance that we perceive as hair shine, and the smooth surface that makes hair feel silky and tangle-resistant. When cuticle cells are raised or chipped — through alkaline shampooing, mechanical abrasion, heat damage, or hygral swelling — the surface becomes rough and irregular, scattering light rather than reflecting it (producing the dull, matte appearance of dry hair), and creating the interlocking friction between neighbouring strands that causes tangling, matting, and frizz.

Atmospheric humidity is the primary trigger of acute cuticle lifting in Indian conditions. The dehydrated hair shaft acts as a hygroscopic sponge — absorbing moisture from the air faster than the cuticle can accommodate the resulting shaft swelling, causing cuticle cells to lift and separate. The characteristic frizz of Indian monsoon season and year-round coastal humidity is this phenomenon playing out across every strand simultaneously. It is not a styling failure — it is a structural response to moisture imbalance that can only be addressed by pre-emptively hydrating the cortex and sealing the cuticle before environmental exposure.`,
    body2: `Applied to the hair shaft before exposure to humidity — whether before stepping out in Mumbai's monsoon air or before a workout that will produce sweat and vapour around the hair — a lightweight oil creates a partial occlusive barrier that moderates the rate of moisture exchange between the shaft and the environment. This smooths the acute cuticle-lifting response by slowing the uptake of atmospheric moisture to a rate the shaft can accommodate without swelling unevenly. The result, visible within a single application, is significantly reduced frizz and flyaway formation — hair that holds its style through humidity exposure rather than expanding into an unmanageable cloud by midday. Over consistent weeks of use, as the cortex lipid layer is progressively replenished, this frizz resistance becomes intrinsic rather than dependent on daily oil application.`,
  },
  {
    number: '03',
    heading: 'Protection Against Heat and Mechanical Damage',
    body1: `Heat styling is a non-negotiable part of many Indian hair routines — straighteners, blow dryers, curling irons, and the dry heat of summer months create a sustained thermal load on hair that accelerates the degradation of both the cuticle and the cortex. Above 150°C, keratin proteins in the cortex begin to denature — their molecular structure shifts permanently, reducing the hair shaft's strength and elasticity. Above 180°C, this denaturation is severe and accompanied by direct structural damage to the cuticle surface. Most professional straighteners operate in the 180–230°C range; even consumer-grade blow dryers on high settings can produce localised surface temperatures well above 150°C at the point of contact.

The heat protection mechanism of hair oil operates through two pathways. First, the oil coating on the hair shaft has a significantly higher specific heat capacity than air — it requires more energy to heat up than the air surrounding the strand, providing a thermal buffer that slows the rate of temperature increase at the cuticle surface during styling. This is a physical protection, not a chemical one, and it is meaningful even at oils that are not specifically marketed as heat protectants. Second, the lipid layer within the cortex reduces the porosity of the shaft, which limits the rate of moisture loss during heat application — steam formation inside a porous cortex is one of the primary mechanisms of heat damage in dry hair, as expanding steam physically disrupts the cortical cell structure.`,
    body2: `Mechanical damage — the breakage caused by combing and brushing dry, tangled hair — is equally important to address in the context of Indian hair care, where the cultural practice of vigorous daily brushing is widespread. Dry hair with a rough, lifted cuticle has a high friction coefficient: the interlocking of irregular cuticle scales between neighbouring strands creates resistance that requires significant force to overcome. This force, applied repeatedly through brushing, causes the strand to stretch beyond its elastic limit and snap — the mid-shaft breakage that produces the short, broken hairs visible as frizz and reduces length retention. Oiling the hair before detangling — even a very small amount applied to dry hair before brushing — reduces this friction coefficient dramatically, allowing the comb to glide through tangles rather than tear through them, and reducing the mechanical force applied to each strand to a level well within the hair's elastic tolerance.`,
  },
  {
    number: '04',
    heading: 'Scalp Nourishment and Healthy Growth Foundation',
    body1: `Dry hair almost always begins with a dry scalp. The sebaceous glands adjacent to each follicle produce sebum — the scalp's natural conditioning oil — which travels down the hair shaft via the hair's surface, providing lubrication and moisture retention from root to tip. In individuals with naturally low sebum production (common in drier climates, in older adults, and in anyone who over-washes with alkaline shampoos), this natural distribution is insufficient, and the hair shaft receives inadequate lubrication beyond the first few centimetres near the root. The lengths and ends — furthest from the sebaceous source — are always the driest parts of the hair, and they become progressively drier as hair grows longer, explaining why long hair in India is disproportionately prone to dryness and split ends regardless of how frequently it is conditioned post-wash.

Targeted scalp oiling with a nourishing formula addresses this deficiency directly. Application of oil to the scalp provides supplemental lubrication that the sebaceous glands are not producing in sufficient quantity, and scalp massage during application stimulates blood circulation to the follicle — improving the delivery of nutrients and oxygen to the hair matrix cells that produce each strand. A well-nourished follicle in a well-hydrated scalp environment produces hair with a stronger lipid cortex from the very first cell division — meaning that new growth from a regularly oiled scalp is structurally healthier than the existing dry, damaged lengths that are already grown out.`,
    body2: `This is the long game of hair oil treatment: not just managing the appearance of existing dry, frizzy hair, but progressively replacing it with healthier growth from a nourished follicular environment. Users who begin a consistent scalp oiling routine — combined with appropriate hydrating cleansing and conditioning — typically notice around the two to three month mark that new growth near the roots is noticeably softer, shinier, and more manageable than the older hair at the mid-lengths and ends. This root-to-tip quality gradient eventually shifts the character of the entire hair length as old growth is gradually replaced by the healthier new growth, producing a measurable, lasting improvement in texture and manageability that reflects a genuinely improved biological foundation rather than a temporary surface treatment.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Warm the Oil Slightly Before Application',
    desc: 'Hold the bottle between your palms and roll it back and forth for 60 seconds, or stand it in a cup of warm (not hot) water for two minutes. Warm oil has lower viscosity and spreads more evenly, penetrates the cuticle more effectively than cold oil, and the warmth itself increases scalp blood circulation on contact — amplifying the follicle stimulation benefit of scalp massage.',
  },
  {
    num: '02',
    title: 'Section Hair and Apply to Scalp First',
    desc: 'Divide hair into sections using a tail comb and apply oil directly to the scalp in small amounts along each parting. Use the pad of your fingertips — not nails — to work it into the skin. For dry and frizzy hair, the scalp application is the long-term investment; the lengths application is the immediate cosmetic result. Do not neglect either.',
  },
  {
    num: '03',
    title: 'Massage the Scalp for a Minimum of 5 Minutes',
    desc: 'Use circular motions across the entire scalp, applying gentle pressure. This is not optional — scalp massage is the mechanism by which the oil reaches the follicle and by which blood circulation is stimulated. Users who apply oil to the scalp without massaging it in are delivering significantly less of the product\'s benefit to the follicle and should not be surprised by slower results.',
  },
  {
    num: '04',
    title: 'Work Through Mid-Lengths and Ends',
    desc: 'After the scalp application, take any remaining oil on your hands and work it through the mid-lengths and ends of the hair. These are the driest parts of the shaft — furthest from the sebaceous source — and they benefit most from direct oil application. For very dry or frizzy hair, apply an additional small amount focused entirely on the ends, which is where split end formation occurs.',
  },
  {
    num: '05',
    title: 'Leave On for Minimum 1 Hour — Overnight for Maximum Effect',
    desc: 'For dry and frizzy hair specifically, overnight oiling is the most effective treatment schedule. Wrap the hair loosely in a soft cotton t-shirt or satin scarf (not a terry cloth towel, which absorbs the oil and adds friction) and wash in the morning. The extended contact time allows the oil to penetrate fully into the cortex rather than simply coating the cuticle surface.',
  },
  {
    num: '06',
    title: 'Wash Out with a Sulphate-Free or Mild Shampoo',
    desc: 'Use a gentle, sulphate-free shampoo — you may need two rounds to fully remove the oil if you have applied generously. Do not use hot water, which strips the protective lipid layer the oil has replenished. Lukewarm is the correct temperature. Follow with a moisturising conditioner focused on the mid-lengths and ends.',
  },
];

const timeline = [
  {
    period: 'First Application',
    title: 'Immediate Smoothing and Frizz Reduction',
    detail: 'Even after the first use, hair feels noticeably softer and more manageable. The cuticle-sealing effect is immediate — frizz and flyaways are visibly reduced within the first wash. Hair dries more smoothly and requires less effort to style.',
  },
  {
    period: 'Week 1–2',
    title: 'Sustained Softness and Shine',
    detail: 'With 2–3 applications per week, hair maintains softness between washes rather than returning to a rough, dry texture. Shine is noticeably improved — the light-reflective cuticle surface that was previously dull and irregular begins to smooth and even out. Tangling decreases significantly, reducing breakage during brushing.',
  },
  {
    period: 'Week 3–4',
    title: 'Frizz Resistance Builds',
    detail: 'As the cortex lipid layer is progressively replenished, frizz resistance becomes more intrinsic — the hair needs less oil applied daily to maintain its frizz-controlled state. Split ends stop multiplying as rapidly. Hair holds styles for longer. In humid climates, the improvement in frizz management through this period is particularly dramatic.',
  },
  {
    period: 'Week 6–8+',
    title: 'Structural Transformation at the Root',
    detail: 'New growth emerging from the root is visibly healthier, smoother, and shinier than the older, previously damaged lengths. The overall texture of the hair has shifted — not just better managed but genuinely better in structure. This is when most users feel confident describing a transformation rather than simply improvement.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧬',
    title: 'Penetrating vs. Coating Oils — Know the Difference',
    body: 'Not all oils interact with the hair shaft the same way. Some oils — coconut oil being the most studied — have a molecular structure small enough to penetrate the cuticle and be incorporated into the cortex, providing genuine structural benefit. Others — mineral oil, silicone-heavy formulas — coat only the surface and produce temporary smoothness without structural improvement. For chronically dry and frizzy hair, penetrating oils deliver lasting results; coating-only formulas require daily reapplication to maintain results and do not improve the underlying condition over time. Choose formulas that combine penetrating base oils with lightweight carrier ingredients rather than primarily silicone or paraffin bases.',
  },
  {
    icon: '⚗️',
    title: 'Lightweight vs. Heavy Formula for Indian Climate',
    body: 'Pure oils like undiluted castor oil or raw mustard oil are too viscous for India\'s humid climate — they do not absorb readily into the scalp, create excessive greasiness that attracts pollution and dust, and are incompatible with modern hair washing frequencies. An effective hair oil for dry and frizzy Indian hair needs to be lightweight enough to absorb within minutes of application while still delivering meaningful nourishing compounds to the cortex. The formula weight is not an indicator of effectiveness — a well-formulated lightweight oil will outperform a thick, heavy one in both penetration and day-to-day usability.',
  },
  {
    icon: '🌿',
    title: 'Active Nourishing Compounds vs. Fragrance-Heavy Formulas',
    body: 'A significant portion of the Indian hair oil market is dominated by fragrance — products that smell intensely of jasmine, rose, or herbal extracts but have a formulation that is primarily mineral oil or light paraffin with fragrance compounds. Fragrance compounds are among the most common causes of scalp contact dermatitis and do not contribute to hair nourishment. When evaluating an oil, check whether the active nourishing ingredients — plant oils, vitamin complexes, botanical extracts — are among the first listed ingredients. If fragrance appears in the first five ingredients, the product is fragrance-first, not nourishment-first.',
  },
  {
    icon: '📦',
    title: 'Application Design and Daily Usability',
    body: 'Dry and frizzy hair requires consistent, frequent oil treatment — 2 to 3 times per week at minimum for the first two months. A product that is inconvenient to apply will not be used consistently, and inconsistent use is the primary reason users do not see the results that are genuinely achievable with a good formula. A precision applicator tip, an appropriate bottle size for the treatment schedule, and a formula that does not leave unacceptable visible residue during work hours all determine whether the product becomes a sustainable part of the routine or an occasional treatment used once and forgotten.',
  },
];

const whoNeeds = [
  { icon: '🌊', label: 'Residents of Coastal and High-Humidity Cities', desc: 'Persistent atmospheric humidity in Mumbai, Chennai, Kochi, and Kolkata creates a relentless frizz cycle that only proper cortex hydration and cuticle sealing can manage sustainably.' },
  { icon: '☀️', label: 'High UV Exposure — Outdoor Workers and Commuters', desc: 'Daily UV exposure bleaches keratin proteins and oxidises the cortex lipid layer. Regular oiling provides antioxidant protection and replenishes the lipid content that UV radiation degrades.' },
  { icon: '💇', label: 'Chemically Treated Hair Users', desc: 'Bleaching, colouring, and rebonding strip the cortex\'s lipid layer completely. Hair oil is the most critical repair step — replacing what chemical treatment removes at the structural level.' },
  { icon: '🌡️', label: 'Hard Water Sufferers in Delhi and Bengaluru', desc: 'Mineral deposits from hard water roughen the cuticle with every wash, compounding existing dryness. Pre-wash oiling creates a protective barrier against mineral accumulation on the shaft.' },
  { icon: '🔥', label: 'Regular Heat Stylers', desc: 'Straighteners and blow dryers operate above the temperature at which keratin begins to denature. Pre-styling oiling provides a physical heat buffer and reduces the porosity that makes porous hair particularly vulnerable to heat damage.' },
  { icon: '🧖', label: 'Those Transitioning Off Silicone Shampoos and Conditioners', desc: 'Hair that has relied on silicone-based products often appears dramatically worse when silicones are removed, as the underlying dryness is revealed. Consistent oil treatment addresses the structural deficiency that silicones were masking.' },
  { icon: '✂️', label: 'Long Hair with Persistent Split Ends', desc: 'The further a hair strand grows from the scalp, the less sebum it receives naturally. Long hair in India is almost universally under-lubricated at the ends — regular oiling compensates for this distance-from-source deficit.' },
  { icon: '🔄', label: 'Anyone Stuck in the Dry-Wash-Dry Cycle', desc: 'If your hair feels briefly better after washing and conditioning but returns to rough and frizzy within hours, the issue is insufficient cortex lipid content that conditioner alone cannot replenish. Oil treatment is the structural intervention that breaks this cycle.' },
];

const myths = [
  {
    myth: 'Oiling makes hair greasier and attracts more dirt',
    truth: 'A properly applied, correctly formulated lightweight oil does not make hair unacceptably greasy. The key is application amount — a few drops on dry hair or a targeted scalp application before washing. Greasiness from hair oil is almost always the result of using too much product, using a formula that is too heavy for the hair type, or applying oil to hair that is already saturated with product buildup. A lightweight formula, applied in the correct amount, absorbs into the shaft and scalp without leaving a greasy film.',
  },
  {
    myth: 'Frizzy hair just needs more conditioning — oil isn\'t necessary',
    truth: 'Conditioner and oil address different structural problems. Conditioner temporarily coats the cuticle surface with positively charged molecules that flatten the scale-like cells and reduce static — this effect lasts for hours before it washes off. Oil penetrates the cortex and replenishes the lipid layer that determines the shaft\'s intrinsic moisture retention and frizz resistance. Both are valuable, but oil performs the structural repair that conditioning alone cannot achieve. Frizz driven by an internally dry, porous cortex will recur regardless of how good the conditioner is.',
  },
  {
    myth: 'Coconut oil is the best oil for all hair types',
    truth: 'Coconut oil is highly effective for dry and coarse hair due to its small molecular weight and high lauric acid content, which allows it to penetrate the cortex. However, it is not universally suitable — for fine hair, it can weigh strands down and reduce volume; for low-porosity hair (hair whose cuticle is tightly closed), it can struggle to penetrate and simply coat the surface. The best oil depends on your hair\'s specific porosity, texture, and dryness profile. A well-formulated blend that combines multiple oils optimised for different aspects of dry hair treatment will typically outperform any single-ingredient oil.',
  },
  {
    myth: 'You should apply hair oil every day for best results',
    truth: 'Daily oil application — particularly to the scalp — leads to product buildup, can attract environmental pollutants, and in some individuals triggers scalp congestion that impairs follicle function. Two to three applications per week is the clinical sweet spot for most hair types. This frequency delivers sufficient nourishment for progressive cortex restoration without the buildup problems of daily use. Consistency over weeks and months matters far more than daily application frequency.',
  },
  {
    myth: 'Hot oil treatment is always better than room temperature oil',
    truth: 'Mildly warmed oil — heated to body temperature, approximately 37°C — is indeed more effective than cold oil because it has lower viscosity and penetrates the cuticle more easily. However, heating oil above 70°C damages its beneficial fatty acids and antioxidant compounds — the very components responsible for its nourishing effects. Oil heated in a microwave or directly on the stove is almost certainly over-heated. Warming it between the palms or in a warm water bath is the correct technique.',
  },
  {
    myth: 'If your hair is oily at the roots, you should not use hair oil at all',
    truth: 'Oily roots and dry, frizzy lengths are not contradictory — they are the most common presentation of combination scalp-hair type in India. The solution is targeted application: avoid the scalp and apply oil exclusively from the mid-lengths to the ends. This addresses the structural dryness of the shaft where it is most severe without amplifying scalp oiliness. An all-or-nothing approach to hair oil based on root oiliness is the reason many people with dry, frizzy ends never achieve lasting results.',
  },
];

const faqs = [
  {
    q: 'How often should I oil my hair if it is dry and frizzy?',
    a: 'Two to three times per week is the recommended frequency for dry and frizzy hair. This provides enough consistent nourishment for progressive cortex lipid restoration without causing scalp buildup or making hair unmanageably oily between washes. In the first two to four weeks of treatment, three times per week is preferable to accelerate the initial restoration phase. After the first month, two times per week is sufficient for maintenance.',
  },
  {
    q: 'How long should I leave oil in my hair for dry and frizzy results?',
    a: 'A minimum of one hour before washing, but overnight treatment delivers significantly better results for dry and frizzy hair specifically. The difference is penetration depth — in one hour, the oil primarily conditions the cuticle surface; in six to eight hours overnight, it has sufficient time to penetrate into the cortex and begin replenishing the lipid layer responsible for intrinsic moisture retention and frizz resistance. For the first month, prioritise overnight treatments as often as possible.',
  },
  {
    q: 'Can I use hair oil on my hair every day without washing it out?',
    a: 'A very small amount — one to two drops — can be used as a daily leave-in finishing oil on dry hair to manage frizz and add shine without building up to a greasy level. This is different from the pre-wash treatment application, which should be used two to three times per week and washed out. Daily leave-in use requires much smaller amounts and should focus on the mid-lengths and ends only, avoiding the scalp, which would accumulate buildup rapidly from daily application.',
  },
  {
    q: 'Will hair oil make my hair look greasy at work?',
    a: 'Only if used in excess. A lightweight, non-greasy formula applied in small amounts to dry hair — one to three drops for medium-length hair, warmed between the palms and smoothed over the surface — does not produce a greasy appearance. The heavy, oily look associated with hair oil is a function of product amount and formula weight, not an inevitable outcome. Start with less than you think you need and build up based on how the hair responds.',
  },
  {
    q: 'Is hair oil suitable for frizzy hair in the monsoon season specifically?',
    a: 'Yes — and this is actually when it is most valuable. The monsoon season\'s extreme humidity is the peak frizz trigger for Indian hair, precisely because atmospheric moisture absorption is highest. A pre-commute application of a small amount of oil to dry hair before exposure to monsoon air dramatically reduces frizz formation by moderating the rate of moisture uptake by the shaft. Combined with a consistent oiling routine that progressively reduces the hair\'s porosity over weeks, hair becomes demonstrably more manageable through monsoon season with each successive year of consistent treatment.',
  },
  {
    q: 'Can men use this hair oil for dry and frizzy hair?',
    a: 'Absolutely. Dry, frizzy, and coarse hair is as common in men as in women, and the structural mechanisms are identical regardless of gender. Male hair tends to be shorter, which means it generally requires less product per application — a few drops for short to medium length hair is sufficient. Men with beards also benefit from applying a small amount to beard hair, which undergoes the same dryness and coarseness issues as scalp hair and responds to the same nourishing treatment.',
  },
  {
    q: 'Should I use hair oil before or after washing?',
    a: 'Both, for different purposes. Pre-wash oil treatment — applied to the scalp and hair before shampooing — is the primary treatment for dry and frizzy hair. It penetrates the cortex during the treatment period and protects the shaft from hygral fatigue and mineral deposition during the wash itself. Post-wash application of a very small amount on damp or dry hair — a true leave-in finishing treatment — seals the cuticle after washing and controls frizz through the day. The pre-wash application is more therapeutically significant; the post-wash application is more immediately cosmetically impactful.',
  },
  {
    q: 'What shampoo should I use after oiling for dry hair?',
    a: 'Use a sulphate-free or mild, low-sulphate shampoo. Shampoos containing high concentrations of sodium lauryl sulphate (SLS) as a primary ingredient are too aggressive for hair already compromised by dryness — they strip the cortex lipid layer that the oil has just replenished, negating a significant portion of the treatment benefit. A gentle, moisturising shampoo that cleanses the scalp effectively without over-stripping is the ideal pairing. You may need two rounds of shampooing to remove oil completely, which is normal and expected after an overnight treatment.',
  },
  {
    q: 'Is hair oil safe for colour-treated or bleached hair?',
    a: 'Yes — and it is particularly important for colour-treated and bleached hair. Chemical colouring and bleaching physically damage the cortex lipid layer, leaving the hair in a state of extreme porosity and structural weakness that manifests as frizz, dryness, and accelerated breakage. Regular oil treatment is the most direct intervention for rebuilding this lipid layer and improving the strength and manageability of chemically treated hair. Apply from the mid-lengths to ends — areas that have been most affected by the chemical process — and work up to scalp application once you have confirmed no contact sensitivity.',
  },
  {
    q: 'How do I know if my hair oil is actually working?',
    a: 'The clearest indicators of genuine oil efficacy: hair feels softer and detangles more easily within the first two weeks; frizz is noticeably less severe in humid conditions by week three to four; new growth near the root begins to look visibly shinier and smoother than the older lengths by week six to eight; and the hair maintains its improved texture between washes rather than reverting to rough and dry within hours of washing. If none of these changes are perceptible after four to six weeks of consistent use, the oil\'s formula may not be penetrating the cortex effectively — reconsider the product choice and application technique.',
  },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────────

export default function DryFrizzyHairOilBlogPage() {
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
            <span className={styles.tag}>Frizz Control · Deep Moisture · Dry Hair · India Guide 2026</span>
            <h1 className={styles.heroTitle}>
              Best Hair Oil for
              <br />
              <em>Dry and Frizzy Hair in India</em>
              <br />
              <span className={styles.heroTitleSub}>The Complete 2026 Moisture &amp; Frizz Control Guide</span>
            </h1>
            <p className={styles.heroSub}>
              Dry, frizzy, unmanageable hair is not a styling problem — it is a structural one.
              India&apos;s humidity, hard water, UV exposure, and chemical treatments compound to
              deplete the very lipid layer that makes hair retain moisture and resist frizz.
              This guide explains exactly what your hair shaft needs, and how the right oil
              rebuilds it from the inside out.
            </p>
            <div className={styles.heroMeta}>
              <span>⏱ 19 min read</span>
              <span>📅 April 2026</span>
              <span>📝 5,600+ words</span>
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
              <span className={styles.heroSubNote}>Deep Nourishment · Frizz Control · For Dry Hair · Pack of 2</span>
            </div>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageAura} aria-hidden="true" />
            <div className={styles.imageAura2} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/hairoshine-biotin-oil.png"
                alt="HairOShine Hair Oil for Dry and Frizzy Hair — Deep Moisture and Frizz Control India"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 420px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>💧 Deep Moisture</span>
              <span>🌿 Frizz Control</span>
              <span>✨ Cuticle Sealing</span>
              <span>💪 Breakage Defense</span>
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
          <h2 className={styles.sectionTitle}>Why Dry and Frizzy Hair Is So Persistent in India — and Why Most Oils Fail to Fix It</h2>
          <p>
            Run your fingers through your hair at midday in any Indian city, in any season, and you
            already know the feeling this guide is about. The rough, cotton-like texture. The halo
            of flyaways that doubles in the monsoon and refuses to lie flat regardless of what you
            apply. The hair that felt briefly smooth after washing and was frizzy again before you
            finished your morning commute. The split ends that keep multiplying no matter how regularly
            you trim. The length that will not grow — not because the hair is not growing, but because
            it is breaking off at the same rate it grows, perpetually failing to reach its potential.
          </p>
          <p>
            These are not the symptoms of bad genetics. They are the predictable results of a specific
            set of environmental and lifestyle conditions that characterise modern Indian life — and
            that most generic hair oil formulations are not designed to address in any meaningful way.
          </p>
          <p>
            India&apos;s hard water problem is foundational and underappreciated. The majority of
            India&apos;s urban water supply — the water that contacts your hair with every single wash —
            has high mineral hardness, containing elevated concentrations of calcium, magnesium, iron,
            and chlorine. When this water contacts the hair shaft during washing, these minerals bind
            to the negatively charged keratin proteins on the cuticle surface. Over months of daily
            washing, this mineral deposition creates a progressive buildup layer that roughens the
            cuticle, prevents conditioner from penetrating effectively, and strips the cortex&apos;s
            natural lipid layer with each wash cycle. The result is hair that becomes progressively
            drier, coarser, and more difficult to manage — not through any fault of the individual&apos;s
            hair care routine, but through the simple chemistry of water quality.
          </p>
          <p>
            India&apos;s UV radiation levels intensify the damage. The subcontropical sun — powerful
            enough year-round in cities from Delhi to Chennai to Pune — oxidises the melanin pigments
            in the hair cortex (contributing to colour fading in darker Indian hair tones), degrades
            the disulphide bonds that hold keratin proteins together, and photooxidises the lipid
            compounds in the cortex and cuticle that maintain the hair&apos;s moisture retention capacity.
            UV-damaged hair is structurally weaker, more porous, and less capable of retaining the
            moisture it does receive — creating the paradox of hair that absorbs water readily when wet
            but loses it rapidly when dry, never maintaining the equilibrium of moisture that
            characterises genuinely healthy hair.
          </p>
          <p>
            The humidity cycle creates the third dimension of the problem. For coastal India — and for
            the entire country during monsoon season — atmospheric humidity levels create an environment
            where dehydrated, porous hair acts as a hygroscopic sponge, absorbing environmental moisture
            faster than the cuticle can accommodate. The resulting uneven swelling of the cortex lifts
            the cuticle scales, producing the characteristic frizz that makes Indian hair notoriously
            difficult to manage during monsoon months. The cruel irony is that high-humidity conditions
            are simultaneously the cause of frizz (through uncontrolled moisture absorption by porous
            hair) and the environment in which frizz is most socially and professionally inconvenient.
          </p>
          <p>
            Chemical treatments add a fourth layer. India is one of the world&apos;s largest markets
            for hair straightening treatments — from keratin smoothing to Brazilian blowouts to Japanese
            straightening — and these treatments, while producing temporarily smooth results, work by
            chemically breaking and reforming the disulphide bonds that give hair its structural integrity.
            The collateral damage to the cortex lipid layer is severe and requires sustained nourishment
            to repair. The market for smoothing treatments is growing; the knowledge of how to properly
            recover hair health after these treatments is not keeping pace.
          </p>
          <p>
            This guide provides a complete, scientifically grounded answer to dry and frizzy hair in
            the Indian context: the structural mechanisms behind frizz formation and moisture loss, the
            specific ingredients that address these mechanisms at the cortex level (not just at the
            surface), a complete assessment of different hair and scalp types, a step-by-step application
            protocol that maximises results, a realistic timeline of what to expect, and a buying guide
            that separates genuinely nourishing formulas from the large majority of Indian hair oil
            products that deliver fragrance and temporary coating rather than structural repair.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ─────────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of Frizz — What Is Actually Happening Inside Your Hair Shaft</h2>

          <h3 className={styles.subHeading}>Hair Porosity: The Master Variable in Frizz</h3>
          <p>
            <strong>Hair porosity</strong> — the degree to which the cuticle allows substances to pass
            in and out of the cortex — is the single most important variable determining how frizzy
            your hair is, how dry it becomes, and how effectively it responds to treatment. High-porosity
            hair has a cuticle that is raised, chipped, or damaged — it absorbs moisture rapidly (and
            loses it rapidly), swells unevenly in humidity, and is highly frizz-prone. Low-porosity hair
            has a tightly closed cuticle that resists both moisture absorption and product penetration.
            Normal porosity is the ideal — sufficient cuticle openness to absorb moisture and beneficial
            compounds, but with intact cuticle scales that retain that moisture and lie flat.
          </p>
          <p>
            Most dry and frizzy Indian hair has elevated porosity — created by the cumulative damage of
            hard water, UV, heat styling, and chemical treatments described above. Understanding this
            means understanding the correct treatment approach: high-porosity hair needs products that
            penetrate the cortex (compatible with the open cuticle) and then seal it — precisely what
            a penetrating oil followed by a sealing application accomplishes. Surface conditioners that
            only coat the outside of the cuticle produce temporary results because they do not address
            the structural openness of the cuticle itself.
          </p>

          <h3 className={styles.subHeading}>The Role of the Intercellular Cement Layer</h3>
          <p>
            Between the tightly packed cells of the hair cortex lies a lipid-rich intercellular cement
            layer — composed of fatty acids, ceramides, cholesterol, and associated lipids — that serves
            three critical functions: it binds cortical cells together (providing structural cohesion and
            tensile strength), it regulates moisture movement in and out of the cortex (preventing both
            excessive drying and excessive swelling), and it lubricates the cortex, giving healthy hair
            its characteristic flexibility and resistance to breakage under mechanical stress.
          </p>
          <p>
            When this lipid cement is depleted — through any combination of the damage mechanisms
            described above — the cortex loses all three of these functions simultaneously. Structural
            cohesion fails (hair splits and breaks), moisture regulation fails (hair swells in humidity
            and dries rapidly between washes), and mechanical flexibility fails (hair snaps under the
            stress of brushing rather than bending). The progressive depletion of this lipid layer is
            the underlying cause of essentially every symptom of dry and frizzy hair, and replenishing
            it through oil treatment is the most direct and evidence-supported intervention available
            without professional clinical treatment.
          </p>

          <h3 className={styles.subHeading}>Hygral Fatigue — The Hidden Cause of Breakage</h3>
          <p>
            <strong>Hygral fatigue</strong> is a phenomenon poorly understood by most consumers but
            responsible for a significant proportion of the breakage seen in Indian hair. Each time a
            high-porosity hair strand is wetted, the cortex swells — each cortical cell absorbs water
            and expands. Each time the strand dries, it contracts again. This repeated cycle of swelling
            and contraction — potentially occurring every time hair is washed, in the rain, or in
            high-humidity environments — creates microscopic structural stress throughout the cortex.
            Over time, these stress accumulations produce the mid-shaft breaks, split ends, and
            progressive weakening of the strand that high-porosity hair characteristically displays.
          </p>
          <p>
            Pre-wash oiling is the most direct countermeasure to hygral fatigue. By coating the hair
            shaft with oil before it contacts water, the rate of water absorption into the cortex is
            significantly slowed — the cortex still absorbs water, but more gradually and evenly, with
            less dramatic swelling per unit time. This reduction in swelling velocity reduces the
            mechanical stress generated by the swelling cycle and correspondingly reduces the structural
            damage that accumulates over repeated wash sessions.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> The frizz you see in Indian humidity is not caused by
              having &quot;frizzy hair&quot; as a permanent characteristic — it is caused by a porous
              cortex absorbing atmospheric moisture faster than the cuticle can accommodate. This
              is a structural condition that changes with treatment. Hair that has been consistently
              oiled for eight to twelve weeks has measurably lower porosity and responds significantly
              less dramatically to humidity than the same hair before treatment began.
            </div>
          </div>
        </section>

        {/* ─── INGREDIENTS ────────────────────────────────────────────────────── */}
        <section id="ingredients" className={styles.section}>
          <h2 className={styles.sectionTitle}>Ingredients That Genuinely Tame Frizz and Restore Dry Hair</h2>

          <h3 className={styles.subHeading}>Penetrating Oils: The Core Therapeutic Agents</h3>
          <p>
            The evidence for penetrating oils — oils with a molecular structure small enough to pass
            through the cuticle and enter the cortex — is robust. Coconut oil&apos;s effectiveness for
            hair has been demonstrated in multiple peer-reviewed studies using scanning electron
            microscopy and protein loss measurements, showing significantly reduced protein loss in hair
            treated with coconut oil pre- and post-wash compared to mineral oil and sunflower oil.
            The mechanism is its high lauric acid content — a medium-chain saturated fatty acid with
            a linear molecular structure that allows it to penetrate the cuticle and have affinity
            for hair proteins, filling the gaps in the cortex&apos;s intercellular cement layer.
          </p>
          <p>
            Other penetrating oils that benefit dry and frizzy hair include argan oil (rich in
            oleic acid and tocopherols, with documented cuticle-smoothing and antioxidant effects),
            sweet almond oil (high in linoleic acid, with emollient properties that improve hair
            elasticity), and amla oil (Indian gooseberry, rich in vitamin C and tannins, with
            documented hair strengthening properties in Ayurvedic and modern dermatological research).
            A formula that combines multiple penetrating oils with complementary fatty acid profiles
            delivers a more comprehensive cortex restoration than any single-ingredient oil.
          </p>

          <h3 className={styles.subHeading}>Biotin: The Growth and Structural Reinforcement Compound</h3>
          <p>
            Biotin&apos;s role as a cofactor in keratin synthesis is directly relevant to dry and frizzy
            hair — not only as a growth promoter but as a structural reinforcement agent. Hair that
            is being produced by follicles with adequate biotin has a denser, more complete keratin
            protein arrangement in the cortex, meaning each new strand begins life with a stronger
            lipid cement layer and a more intact cuticle. This structural advantage at the point
            of production reduces the hair&apos;s susceptibility to the environmental damage that creates
            dryness and frizz over the lifespan of the strand.
          </p>
          <p>
            For individuals whose dietary biotin intake is insufficient — a common situation in India
            given the bioavailability challenges of plant-based diets and heat-affected B vitamins —
            topical application delivers biotin directly to the follicle, bypassing the dietary
            variability that makes oral supplementation inconsistent as a delivery mechanism. The
            combined effect of structural oil penetration and biotin-supported keratin synthesis is
            a dual-front approach to dry and frizzy hair that addresses both the existing damaged
            lengths and the quality of new growth replacing them.
          </p>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Hair Problem — And the Specific Fix</h2>
          <p className={styles.sectionIntro}>
            Dry and frizzy hair presents differently across individuals — different root causes,
            different severity, different triggers. Here is how targeted oil treatment addresses
            each primary complaint.
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
            Hair oil for dry and frizzy hair is not one-size-fits-all. Here is an honest,
            type-by-type assessment of how nourishing hair oil performs across different
            Indian hair and scalp profiles.
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
          <h2 className={styles.sectionTitle}>HairOShine Hair Oil — Feature-by-Feature Breakdown</h2>

          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              Deep Cortex Moisture. Cuticle Sealing. Frizz Control. Pack of 2.
            </p>
            <p className={styles.midCtaSub}>
              The hair oil engineered for India&apos;s humidity, hard water, UV stress, and modern hair care routines.
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
              <strong>Important Distinction:</strong> There is a meaningful clinical difference
              between a hair oil that <em>coats</em> the hair and one that <em>penetrates</em> it.
              Coating oils — including most silicone serums and mineral oil-based formulas — produce
              immediate, visible smoothness and shine by physically flattening the cuticle surface
              and filling in surface roughness. This effect is real, useful, and immediate — but it
              washes off with the next shampoo, and the underlying structural dryness and porosity
              are unchanged. Penetrating oils deliver their primary benefit to the interior of the
              cortex — where the lipid cement layer resides — producing improvements that build
              progressively over weeks of use and persist between wash sessions because they reflect
              genuine structural change. Evaluate an oil on its six-week result, not its first-day
              result.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Application Protocol for Dry and Frizzy Hair</h2>
          <p className={styles.sectionIntro}>
            For dry and frizzy hair specifically, technique determines results as much as formula
            quality does. Follow this protocol precisely for maximum cortex penetration and
            frizz control.
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
            💡 <strong>Pro Tip:</strong> For an intensive moisture reset — particularly after
            chemical treatment, a period of heat styling damage, or at the onset of monsoon season
            when frizz is at its worst — do a full overnight oil treatment three times in the
            first week before dropping to your normal twice-weekly schedule. This accelerated
            initial phase floods the cortex with lipid content and dramatically reduces the time
            to visible results. Complement this with a proper scalp cleansing practice — our{' '}
            <Link
              href="/blog/best-hair-oil-hair-growth-india-biotin"
              className={styles.internalLink}
            >
              complete guide to biotin hair oil for hair growth
            </Link>{' '}
            covers how to build a full scalp health routine that supports both growth and moisture retention.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>Realistic Results Timeline — What to Expect and When</h2>
          <p className={styles.sectionIntro}>
            Unlike some hair treatments, oil nourishment for dry and frizzy hair delivers
            visible results from the very first use — with improvements that compound and
            deepen over weeks of consistent treatment.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — What to Look for in a Hair Oil for Dry and Frizzy Indian Hair</h2>
          <p className={styles.sectionIntro}>
            The Indian hair oil market is large and dominated by products that deliver fragrance
            and temporary cosmetic results rather than genuine structural nourishment. Here is
            exactly what separates a worthwhile investment from a well-marketed disappointment.
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

          <h3 className={styles.subHeading}>The Most Common Buying Mistakes for Dry and Frizzy Hair in India</h3>
          <p>
            The most damaging purchasing mistake is selecting an oil based on how it performs
            on the day of application rather than how the hair feels four weeks later. Oils that
            contain high concentrations of silicones or mineral oil produce a spectacular immediate
            result — hair that is suddenly smooth, shiny, and frizz-free within minutes of application.
            This is not structural improvement; it is surface coating. The same frizz returns the
            moment the coating wears off or is washed away. The Indian consumer who repurchases the
            same silicone-heavy oil for months or years, impressed by its immediate effect but puzzled
            that their hair never seems to genuinely improve, is in this category. The test is not how
            good the hair looks on the day you apply — it is how the hair behaves two weeks after
            an oiling session, without any additional product. Genuine penetrating oils produce lasting
            cortex improvement that persists; coating products do not.
          </p>
          <p>
            The second most damaging mistake is using an oil that is too heavy for the Indian climate.
            Pure castor oil, raw mustard oil, and undiluted coconut oil — all widely recommended in
            traditional Indian hair care — are too viscous for twice-weekly use in a humid climate with
            modern washing frequencies. They do not absorb quickly, attract dust and pollution while
            on the scalp, and require multiple shampoo rounds to remove — which itself strips the hair.
            A well-formulated lightweight oil blend delivers all the nourishing fatty acids of these
            heavier oils in a vehicle that is compatible with modern urban routines and India&apos;s
            climatic conditions.
          </p>
          <p>
            The third mistake is expecting immediate structural transformation from a single application.
            Cortex lipid restoration is a progressive process — the lipid cement layer was depleted over
            months of environmental damage, and it rebuilds over weeks of consistent treatment. Users who
            apply an oil once, notice that their hair still frizzes the next morning, and conclude that
            the product does not work are evaluating a structural treatment on cosmetic timescales.
            Commit to four to six weeks of consistent twice-weekly application before assessing whether
            the oil is delivering genuine cortex improvement.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>The penetrating formula your cortex has been waiting for.</p>
            <p className={styles.midCtaSub}>
              HairOShine Advance Biotin Hair Oil — pack of 2, so your treatment is never interrupted.
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
          <h2 className={styles.sectionTitle}>Who Needs This Hair Oil Most</h2>
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
          <p className={styles.relatedBandTitle}>Complete Your Hair Care Routine</p>
          <p className={styles.relatedBandSub}>
            Dry and frizzy hair responds best to a complete system — the right oil, the right
            cleanser, and the right complementary treatments.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/best-hair-oil-hair-growth-india-biotin"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🧬</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Hair Oil for Hair Growth in India 2026</p>
                <p className={styles.relatedCardSub}>HairOShine Biotin Oil — the complete guide to scalp nourishment and growth</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🧴</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Moisturiser for Combination Skin</p>
                <p className={styles.relatedCardSub}>Moist Sure Cream — complete skin nourishment to pair with your hair routine</p>
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
                <p className={styles.relatedCardSub}>Soothe scalp irritation and skin sensitivity alongside your hair treatment</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Dry Hair and Frizz Myths vs. Truth — What Gets Indian Consumers Wrong</h2>
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
          <h2 className={styles.sectionTitle}>Frequently Asked Questions About Hair Oil for Dry and Frizzy Hair</h2>
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
          <h2 className={styles.bottomCtaTitle}>Your Hair Deserves More Than Temporary Smoothness</h2>
          <p>
            Dry and frizzy hair is not a permanent condition — it is a structural one, and
            structures can be rebuilt. Consistent oil treatment that penetrates the cortex,
            replenishes the lipid cement layer, seals the cuticle, and protects against the
            environmental damage that India&apos;s climate delivers every single day produces
            genuinely transformed hair over eight to twelve weeks. Not just hair that looks better
            for a few hours after application — but hair that is structurally better, responds
            less to humidity, breaks less, and grows longer because it retains the length it
            produces. This is the result consistent, correct oiling delivers. Begin it tonight.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy HairOShine Biotin Oil on Amazon →
          </a>
          <p className={styles.bottomNote}>Pack of 2 · All Hair Types · Dry &amp; Frizzy Hair Specialist · Free Delivery Available</p>
        </section>

      </div>
    </article>
  );
}