import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './calamine-vs-moisturizer-blog.module.css';

export const metadata: Metadata = {
  title: 'Calamine Lotion vs Moisturizer: What\'s the Difference? India Skincare Guide 2026',
  description:
    'Calamine lotion vs moisturizer — learn the real difference, when to use each, and how to combine them for Indian skin. Expert guide for all skin types.',
  keywords: [
    'calamine lotion vs moisturizer',
    'calamine lotion difference',
    'when to use calamine lotion',
    'calamine lotion benefits India',
    'best moisturizer India 2026',
    'calamine for oily skin',
    'calamine lotion for acne',
    'moisturizer vs calamine for dry skin',
    'can you use calamine as moisturizer',
    'calamine lotion uses India',
    'calamine lotion for sunburn',
    'skin barrier repair India',
    'calamine for sensitive skin India',
    'lightweight moisturizer India',
    'calamine lotion skin type guide',
    'skincare routine India 2026',
    'oily skin moisturizer India',
    'calamine lotion ingredients',
    'how to moisturize skin India',
    'best skincare routine combination skin',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/calamine-lotion-vs-moisturizer-difference-india-guide',
  },
  openGraph: {
    title: 'Calamine Lotion vs Moisturizer: What\'s the Difference? India Skincare Guide 2026',
    description:
      'Stop using calamine and moisturizer interchangeably. This expert guide explains the real difference, how each works on Indian skin, and when to use both.',
    images: [
      {
        url: '/images/calafine-lotion.png',
        width: 1200,
        height: 630,
        alt: 'Calamine Lotion vs Moisturizer — Complete India Skincare Guide 2026',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0foGtulz';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Indians Confuse These Two Products' },
  { id: 'science-calamine', label: 'What Calamine Lotion Actually Is — The Science' },
  { id: 'science-moisturizer', label: 'What a Moisturizer Actually Does to Your Skin' },
  { id: 'key-differences', label: 'The 7 Core Differences: Calamine vs Moisturizer' },
  { id: 'problems-grid', label: 'Your Skin Problem — Which Product Solves It' },
  { id: 'skin-type-guide', label: 'Complete Skin Type Suitability Guide' },
  { id: 'product-deep-dive', label: 'CALAFINE Lotion — Full Feature Breakdown' },
  { id: 'how-to-use', label: 'How to Use Both in the Same Skincare Routine' },
  { id: 'results-timeline', label: 'Results Timeline — What to Expect and When' },
  { id: 'buying-guide', label: 'Complete Buying Guide for India' },
  { id: 'who-needs', label: 'Who Needs Calamine Lotion Most' },
  { id: 'myths', label: 'Myths vs. Truth: What Indians Get Wrong' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🔥',
    problem: 'Sunburn & UV-Induced Redness',
    desc: 'Indian summers — particularly in cities like Delhi, Jaipur, and Chennai — subject skin to intense UV radiation that causes surface inflammation, redness, and a burning sensation that standard moisturizers cannot cool. Most hydrating creams trap heat rather than releasing it.',
    solution: 'Calamine lotion provides immediate cooling via evaporative action and reduces the inflammatory response through its zinc oxide content. It is the correct first-response product for sunburned skin — moisturizer comes later, in the recovery phase.',
    product: 'Calamine Lotion',
  },
  {
    icon: '🌵',
    problem: 'Chronic Skin Dehydration',
    desc: 'Year-round air conditioning, hard water in cities like Bengaluru and Pune, and low-humidity winter air in northern India strip the skin\'s natural moisture-retaining lipids over time, leading to persistent tightness, flaking, and compromised barrier function.',
    solution: 'A well-formulated moisturizer replenishes humectants, restores occlusives, and rebuilds the lipid barrier. Calamine alone cannot address this — it is not designed to moisturise. For dehydration, a moisturizer with hyaluronic acid, ceramides, or glycerin is the correct tool.',
    product: 'Moisturizer',
  },
  {
    icon: '🧫',
    problem: 'Active Acne Breakouts with Inflammation',
    desc: 'Acne in India is complicated by high humidity, pollution particles landing on open pores, and the comedogenic effect of heavy moisturizers often recommended for post-acne dryness. Applying a thick moisturizer to actively inflamed acne worsens both the inflammation and the congestion.',
    solution: 'Calamine lotion\'s zinc oxide reduces the sebum overproduction that fuels acne while its astringent action minimises pore appearance. For acne-prone skin, calamine before a lightweight, non-comedogenic moisturizer is the correct layering sequence.',
    product: 'Calamine First',
  },
  {
    icon: '🌿',
    problem: 'Rashes, Hives & Contact Dermatitis',
    desc: 'India\'s diverse plant life, widespread use of synthetic fragrances in local products, and heat-triggered allergic reactions make contact dermatitis and prickly heat rashes extremely common — especially in coastal and high-humidity regions during summer.',
    solution: 'Calamine\'s antipruritic and anti-inflammatory properties address the immediate symptoms: itching, swelling, and surface irritation. A moisturizer applied over an active rash provides zero antipruritic benefit and may aggravate the irritation. Calamine is the clinically appropriate response.',
    product: 'Calamine Lotion',
  },
];

const skinTypes = [
  {
    type: 'Oily Skin',
    icon: '💧',
    calaVerdict: 'Excellent',
    calaClass: 'excellent',
    moistVerdict: 'With Caution',
    moistClass: 'caution',
    calaExp: 'Calamine\'s oil-absorbing zinc content controls shine and reduces sebum without stripping. Ideal as a daytime treatment.',
    moistExp: 'Heavy creams clog pores on oily skin. Only use a lightweight, water-based, non-comedogenic gel moisturizer.',
  },
  {
    type: 'Dry Skin',
    icon: '🏜️',
    calaVerdict: 'With Caution',
    calaClass: 'caution',
    moistVerdict: 'Excellent',
    moistClass: 'excellent',
    calaExp: 'Calamine\'s drying action is counterproductive for chronically dry skin. Use only for acute flare-ups, not daily.',
    moistExp: 'Rich moisturizers with ceramides and shea butter are essential daily for dry skin — morning and night.',
  },
  {
    type: 'Combination Skin',
    icon: '⚖️',
    calaVerdict: 'Good',
    calaClass: 'good',
    moistVerdict: 'Good',
    moistClass: 'good',
    calaExp: 'Apply calamine to the oily T-zone as a spot treatment or light layer. Avoid the dry zones around cheeks and jawline.',
    moistExp: 'Use a lightweight moisturizer across the whole face, with a richer formulation only on the dry cheek areas.',
  },
  {
    type: 'Sensitive Skin',
    icon: '🌸',
    calaVerdict: 'Excellent',
    calaClass: 'excellent',
    moistVerdict: 'Good',
    moistClass: 'good',
    calaExp: 'Calamine\'s gentle, fragrance-free formulation is one of the most tolerated topical treatments for reactive, sensitive skin.',
    moistExp: 'Fragrance-free, hypoallergenic moisturizers are appropriate. Avoid anything with essential oils or strong actives.',
  },
  {
    type: 'Acne-Prone Skin',
    icon: '🧫',
    calaVerdict: 'Excellent',
    calaClass: 'excellent',
    moistVerdict: 'With Caution',
    moistClass: 'caution',
    calaExp: 'Zinc oxide in calamine is anti-inflammatory and sebostatic — reducing the oil that feeds acne without over-drying.',
    moistExp: 'Moisturizer is still necessary, but only oil-free, non-comedogenic formulas. Skipping it entirely worsens oiliness.',
  },
  {
    type: 'Mature / Ageing Skin',
    icon: '🍃',
    calaVerdict: 'With Caution',
    calaClass: 'caution',
    moistVerdict: 'Excellent',
    moistClass: 'excellent',
    calaExp: 'Mature skin needs lipid replenishment, not drying. Calamine is appropriate only for acute symptoms like rashes.',
    moistExp: 'Rich, barrier-repairing moisturizers with peptides, ceramides, and hyaluronic acid are essential for mature skin.',
  },
];

const differences = [
  {
    number: '01',
    aspect: 'Primary Function',
    calamine: 'Anti-inflammatory, antipruritic (anti-itch), astringent, and cooling. It treats a condition — itching, redness, sunburn, rashes.',
    moisturizer: 'Hydration delivery, moisture retention, and skin barrier reinforcement. It maintains a baseline — preventing transepidermal water loss.',
    verdict: 'Different jobs entirely. One treats; one maintains.',
  },
  {
    number: '02',
    aspect: 'Active Ingredients',
    calamine: 'Zinc oxide (primary active) and ferric oxide — both inorganic mineral compounds with documented anti-inflammatory and antiseptic properties.',
    moisturizer: 'Combination of humectants (glycerin, hyaluronic acid), emollients (fatty acids, oils), and occlusives (shea butter, petrolatum) — each targeting a different aspect of moisture.',
    verdict: 'Completely different chemistry for completely different outcomes.',
  },
  {
    number: '03',
    aspect: 'Effect on the Skin Barrier',
    calamine: 'Does not rebuild the lipid barrier. Provides surface protection and cooling but does not replenish ceramides, fatty acids, or the natural moisturising factor (NMF).',
    moisturizer: 'Directly addresses barrier dysfunction — the right moisturizer replenishes all three components of the skin\'s moisture barrier: the NMF, the lipid bilayer, and the cornified envelope.',
    verdict: 'For barrier repair, only a moisturizer works.',
  },
  {
    number: '04',
    aspect: 'Texture and Skin Feel',
    calamine: 'Thin, milky liquid that dries to a matte, slightly powdery finish. Leaves no occlusive film on the skin. Often visibly whitish on darker Indian skin tones if applied too thickly.',
    moisturizer: 'Ranges from lightweight gels to rich creams. Leaves a hydrated, sometimes slightly glossy or dewy finish depending on the formula. Always leaves a film of some kind — that is its mechanism.',
    verdict: 'Calamine dries down; moisturizer stays on.',
  },
  {
    number: '05',
    aspect: 'Appropriate Use Timing',
    calamine: 'An acute-response product. Used when something is happening to the skin: a sunburn just occurred, a rash appeared, itching started. It addresses symptoms in real time.',
    moisturizer: 'A daily-maintenance product. Used morning and evening as part of a routine regardless of whether the skin is currently reacting to anything.',
    verdict: 'Calamine is reactive; moisturizer is preventive.',
  },
  {
    number: '06',
    aspect: 'Long-Term Daily Use',
    calamine: 'Not recommended as a standalone daily product for most skin types. Its astringent and drying properties, used daily without complementary hydration, can over-strip the skin over weeks.',
    moisturizer: 'Designed for daily use. Long-term consistent moisturization is one of the most evidence-backed interventions for slowing visible skin ageing and maintaining barrier integrity.',
    verdict: 'Moisturizer is for every day; calamine is for when your skin needs help.',
  },
  {
    number: '07',
    aspect: 'Layering Order',
    calamine: 'Applied first in a routine — after cleansing and toner, before moisturizer. Its thin, watery consistency and treatment function mean it needs direct skin contact.',
    moisturizer: 'Applied last (or second-to-last before SPF) to seal in all the layers applied beneath it. It is the final step before your skin meets the outside world.',
    verdict: 'Calamine goes on first; moisturizer seals everything in.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Triple-Action Zinc Oxide Formula',
    body1: `CALAFINE Lotion is built around zinc oxide — one of the most clinically validated topical ingredients in dermatology, yet still widely underutilised in the Indian skincare market where chemical actives dominate. Zinc oxide performs three distinct functions simultaneously: it acts as a physical anti-inflammatory agent by suppressing the cytokine cascade that causes redness and swelling; it functions as a mild astringent by contracting pores and reducing the sebum flow that feeds acne and surface oiliness; and it provides physical UV protection by scattering and absorbing both UVA and UVB radiation at the skin's surface.

This triple action makes CALAFINE uniquely suited to the Indian skin environment, where inflammation, excess sebum, and UV exposure often occur simultaneously — not as separate problems requiring separate products. The typical Indian summer day in a city like Mumbai or Chennai involves all three stressors at once: heat-induced redness, humidity-driven oiliness, and intense direct sunlight. A product that addresses all three without requiring multiple applications is a meaningful practical advantage.`,
    body2: `The zinc oxide in CALAFINE is formulated to distribute evenly across the skin surface rather than settling in visible clumps — a common complaint with older-generation calamine formulations that left a chalky white cast, particularly on the deeper Indian skin tones that make up the majority of the population. The even distribution also means consistent coverage across the skin's surface, ensuring that the anti-inflammatory and sun-protective benefits are uniform rather than patchy.`,
  },
  {
    number: '02',
    heading: 'Immediate Cooling and Anti-Itch Relief',
    body1: `One of the most consistently reported benefits of well-formulated calamine lotion — and one that no standard moisturizer can replicate — is the immediate sensation of cooling upon application. This is not merely a sensory effect. The cooling mechanism is rooted in the lotion's evaporative action: as the water-based carrier of the lotion evaporates from the skin's surface, it draws heat away from the inflamed tissue beneath. This is the same principle that makes sweat effective at cooling the body — evaporation is thermodynamically cooling at the tissue level, not just at the sensation level.

For sunburned skin specifically — a condition extremely common among Indians who spend time outdoors between 11am and 3pm during peak summer months — this evaporative cooling provides immediate relief at the moment when the skin is hot, inflamed, and hypersensitive to touch. Applying a heavy cream to sunburned skin, by contrast, occludes the surface and traps the heat that the inflamed tissue is desperately trying to release. This is why experienced dermatologists recommend calamine-based products rather than rich moisturizers as the first response to fresh sunburn.`,
    body2: `The antipruritic — anti-itch — mechanism of CALAFINE's zinc oxide works through a different pathway: zinc ions have a demonstrated ability to modulate the nerve endings that transmit itch signals (C-fibres) at the skin's surface. By reducing the sensitivity of these fibres, zinc oxide diminishes the perceived intensity of itching without the systemic side effects of oral antihistamines. This makes CALAFINE appropriate for prolonged, repeated use on itchy conditions like heat rash, insect bites, and mild contact dermatitis — situations where you need itch relief throughout the day without medicating your entire system.`,
  },
  {
    number: '03',
    heading: 'Oil Control and Acne Support Without Over-Drying',
    body1: `The relationship between calamine and acne is more nuanced than most Indian skincare content suggests. Calamine does not treat acne in the way that salicylic acid or benzoyl peroxide do — it does not chemically exfoliate the pore, kill P. acnes bacteria directly, or regulate sebum gland activity at the hormonal level. What it does is manage the surface environment in which acne forms. By absorbing excess sebum, reducing pore size temporarily through astringent action, and lowering the inflammatory response that makes acne painful and red, calamine creates a less hospitable surface for the comedone-to-inflammatory-lesion progression.

This surface-level management is particularly valuable for Indian skin in humid conditions — the hot, humid months of June through September in coastal cities like Kochi, Mumbai, and Chennai create conditions where sebum production is accelerated and existing acne lesions are more prone to bacterial spread. A product that controls the surface oil film daily reduces the rate at which comedones progress to inflammatory lesions, even if it does not address the hormonal or bacterial root causes.`,
    body2: `CALAFINE is specifically formulated to provide this oil control without the aggressive drying that characterises many acne-focused products containing high-percentage salicylic acid or alcohol. Over-drying acne-prone skin — a very common outcome of harsh acne treatments in the Indian market — triggers a rebound sebum surge as the sebaceous glands compensate for the stripped surface. This rebound worsens acne in the medium term even as it briefly improves it in the short term. CALAFINE's gentler action avoids this cycle, making it appropriate for everyday use alongside a proper moisturizer and targeted acne treatment.`,
  },
  {
    number: '04',
    heading: 'Suitable for All Indian Skin Tones Without Discolouration Risk',
    body1: `One concern that Indian consumers legitimately raise about calamine products is the white cast — the chalky, visibly white residue that older or poorly formulated calamine lotions leave on deeper skin tones. On the Fitzpatrick IV–VI skin tones that are prevalent across India, a white cast is not merely cosmetically unpleasant; it can also be used as a reason to avoid an otherwise beneficial product entirely, leading people to go without effective anti-inflammatory coverage when they need it most.

CALAFINE's formulation addresses this directly. The zinc oxide particle size and suspension method are optimised for even spreading and minimal visible residue — meaning the product can be applied at a therapeutic level without the ghostly white cast of traditional calamine. This matters significantly in the Indian context because many of the moments when calamine is most needed — sun exposure, outdoor activities, post-beach or post-sport recovery — are also moments when appearing presentable matters.`,
    body2: `Additionally, CALAFINE does not contain artificial dyes or fragrances that can cause post-inflammatory hyperpigmentation (PIH) — a condition that affects Indian skin disproportionately due to the higher melanin density that makes it more reactive to inflammatory triggers. PIH is one of the most common and persistent concerns in Indian dermatology, and choosing skincare products that do not trigger it is essential for anyone prone to dark spots. CALAFINE's clean, minimal formulation means it reduces inflammation without creating the conditions for the PIH that often follows.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Cleanse Thoroughly First',
    desc: 'Begin with a gentle, pH-balanced cleanser to remove SPF, pollutants, and excess sebum. Both calamine and moisturizer work best on clean skin — residual sunscreen or pollution particles reduce the contact between the active ingredient and the skin surface, diminishing effectiveness.',
  },
  {
    num: '02',
    title: 'Apply Toner or Essence (Optional)',
    desc: 'If you use a hydrating toner or essence, apply it now. This step adds an initial layer of water-based hydration that prepares the skin to receive the subsequent layers. Pat gently — do not rub — to avoid irritating any inflamed areas before calamine application.',
  },
  {
    num: '03',
    title: 'Apply CALAFINE Lotion to Target Areas',
    desc: 'Shake the bottle gently before use — zinc oxide settles at the bottom and must be evenly redistributed. Apply a thin, even layer to areas of concern: sunburned skin, active acne, itchy patches, or the oily T-zone. Allow it to dry completely — approximately 60 to 90 seconds — before proceeding. Do not rub in; pat gently or let it air-dry to a matte finish.',
  },
  {
    num: '04',
    title: 'Layer Your Moisturizer Over the Calamine',
    desc: 'Once calamine has dried completely, apply your moisturizer over the top. The calamine\'s treatment layer remains active beneath; the moisturizer seals in hydration and prevents the calamine\'s astringent action from over-drying the skin. For oily skin: use a lightweight gel. For dry or combination skin: use a moderate cream formulation.',
  },
  {
    num: '05',
    title: 'Finish with SPF in the Morning',
    desc: 'Always finish a morning routine with a broad-spectrum SPF 30 or higher sunscreen applied over your moisturizer. This is non-negotiable for Indian skin exposed to the subcontropical UV index year-round. If you have applied calamine for sun protection reasons, be aware that calamine alone does not provide sufficient SPF for daily protection — it reduces UV damage but does not replace a dedicated sunscreen.',
  },
  {
    num: '06',
    title: 'Repeat Based on Need, Not Habit Alone',
    desc: 'Moisturizer: apply morning and evening, every day, regardless of skin condition. Calamine: apply when your skin is presenting symptoms — redness, itch, sunburn, oiliness, active breakouts. On days when your skin is calm and balanced, you may not need calamine at all. Allow your skin\'s signals to guide the use of the treatment product; maintain the moisturizer as a non-negotiable constant.',
  },
];

const timeline = [
  {
    period: 'Day 1–3',
    title: 'Immediate Symptom Response',
    detail: 'Calamine provides cooling and itch relief within minutes of application. Redness visibly reduces after the first one to two applications. If treating sunburn, the burning sensation decreases significantly within hours. Moisturizer begins restoring surface hydration from the first use — skin feels less tight after 24 hours.',
  },
  {
    period: 'Week 1',
    title: 'Surface Inflammation Subsides',
    detail: 'Consistent calamine use on affected areas brings active inflammation under control. Acne lesions reduce in redness and size. Sunburned skin begins peeling — do not pick — as the damaged outer layer sheds. Moisturizer use prevents the excessive dryness that accompanies this shedding phase.',
  },
  {
    period: 'Week 2',
    title: 'Oil Balance Improves',
    detail: 'With regular calamine use on oily areas and consistent lightweight moisturizer on the rest of the face, sebum production begins to regulate. The paradoxical oiliness caused by dehydration — the skin producing excess oil to compensate for moisture loss — starts to correct as the skin receives adequate hydration from the moisturizer.',
  },
  {
    period: 'Week 4+',
    title: 'Visible Skin Health Improvement',
    detail: 'Post-inflammatory hyperpigmentation from treated acne lesions begins to fade. Skin texture is noticeably smoother and more even. The combined routine — calamine for acute treatment plus moisturizer for daily maintenance — has re-established the skin barrier, and the skin responds to environmental stressors with significantly less reactivity than before.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧪',
    title: 'Zinc Oxide Concentration and Suspension Quality',
    body: 'The therapeutic benefit of calamine lotion comes almost entirely from its zinc oxide content. A product that lists zinc oxide early in the ingredient list (indicating a higher concentration) will outperform one where zinc is a trace additive included for labelling purposes. Additionally, the suspension quality matters — zinc oxide is a physical particle that settles; a well-formulated calamine will redistribute evenly when shaken. If the product separates permanently or leaves a thick white residue, the suspension is poorly engineered.',
  },
  {
    icon: '🚫',
    title: 'Absence of Irritating Additives',
    body: 'Many Indian-market calamine products add fragrances, artificial colours, parabens, or alcohol to their formulations — ingredients that partially undermine calamine\'s anti-inflammatory benefit by introducing new irritants. For the product to work as a skin-calming treatment, the formula should be as clean as possible. Look for fragrance-free, alcohol-free, dye-free formulations — particularly if you have sensitive or reactive skin. The addition of these ingredients signals a product formulated for aesthetic marketing rather than clinical effectiveness.',
  },
  {
    icon: '💧',
    title: 'Texture Compatibility With Your Skin Type',
    body: 'The right calamine texture depends on how and where you plan to use it. A thinner, more watery formulation spreads more easily and is more appropriate for use over large areas (sunburned backs, widespread rashes). A slightly thicker suspension may be more practical as a spot treatment for acne. Evaluate whether the product\'s texture matches your intended application before purchasing — most products are tested online without this consideration, leading to mismatched use.',
  },
  {
    icon: '📦',
    title: 'Packaging That Preserves the Formula',
    body: 'Zinc oxide degrades with prolonged light and air exposure. Calamine products packaged in opaque, airtight bottles retain their potency significantly longer than those in clear glass bottles with wide-open caps. This is a practical consideration for Indian households where products may sit in bathrooms with varying levels of light and humidity. Flip-top or pump-dispensing bottles also reduce the contamination risk compared to wide-mouth jars that require finger-dipping.',
  },
];

const whoNeeds = [
  { icon: '☀️', label: 'Frequent Sun Exposure (Outdoor Workers & Commuters)', desc: 'Construction workers, delivery professionals, and anyone who commutes by bike or auto in Indian cities absorb intense UV daily. Calamine post-sun is an essential recovery step.' },
  { icon: '🧫', label: 'Acne-Prone Adults Under 35', desc: 'The leading demographic for acne in India — stress, humidity, and diet-driven breakouts respond well to calamine\'s oil control and anti-inflammatory zinc action.' },
  { icon: '🌡️', label: 'Prickly Heat and Heat Rash Sufferers', desc: 'India\'s humid summers, particularly in Kerala, West Bengal, and Odisha, make miliaria (heat rash) extremely common. Calamine is the first-line topical recommendation for prickly heat relief.' },
  { icon: '🌿', label: 'Contact Dermatitis and Allergy-Prone Individuals', desc: 'Reactions to metals in jewellery, synthetic fabrics, household chemicals, and plants are common across Indian lifestyles. Calamine provides targeted relief without systemic medication.' },
  { icon: '👶', label: 'Parents Managing Children\'s Skin Conditions', desc: 'Calamine\'s gentle, zinc-based formula is appropriate for children\'s skin rashes, insect bites, and prickly heat — common paediatric dermatology referrals in India\'s summer months.' },
  { icon: '🏋️', label: 'Active Individuals and Athletes', desc: 'Sweat-triggered breakouts, chafing rashes, and post-workout inflammation respond to calamine\'s absorbing and anti-inflammatory properties. Apply to affected areas post-activity.' },
  { icon: '💆', label: 'Those With Oily, Combination T-Zone Skin', desc: 'The oily T-zone affecting a significant majority of Indian adults benefits from calamine\'s sebum-absorbing zinc. Applied to the T-zone before moisturizer, it controls shine throughout the day.' },
  { icon: '🔬', label: 'Anyone Transitioning Off Heavy Steroid Creams', desc: 'Dermatologists often recommend calamine as a bridge product when tapering off topical corticosteroids — providing anti-inflammatory support without the rebound risk of steroid withdrawal.' },
];

const myths = [
  {
    myth: 'Calamine lotion can replace your daily moisturizer',
    truth: 'This is the most dangerous misconception this guide addresses. Calamine lotion provides no meaningful moisturization — it does not contain humectants, emollients, or occlusives in any significant quantity. Using calamine alone as a daily skin treatment will progressively dehydrate the skin over weeks, compromising the barrier and ultimately worsening oiliness and reactivity through the dehydration-rebound mechanism.',
  },
  {
    myth: 'Moisturizer can reduce sunburn redness just like calamine does',
    truth: 'Standard moisturizers are not anti-inflammatory. They may soothe the tight, dry feeling of sunburned skin in the recovery phase, but they do not reduce the vascular dilation (redness) or inflammatory cascade of fresh sunburn. Zinc oxide in calamine is the active agent that directly modulates the inflammatory response — no amount of glycerin or shea butter achieves this outcome.',
  },
  {
    myth: 'You cannot use calamine and moisturizer in the same routine',
    truth: 'Not only can you use both — for many Indian skin types and conditions, using both in the correct layering order is the most effective approach. Calamine (applied first, allowed to dry) treats the acute condition at the skin surface. Moisturizer (applied second) seals in hydration and prevents calamine\'s mild drying action from over-stripping the skin. The two products are complementary, not competing.',
  },
  {
    myth: 'Calamine lotion is only for children or for very serious rashes',
    truth: 'Calamine lotion is appropriate for all ages and for conditions that range from mild to moderate. Its use as a daily oil-control product for oily skin, as a post-sun soothing product for anyone with UV exposure, and as an anti-itch product for mild irritation makes it a versatile, adult skincare tool — not merely a paediatric rash remedy from the medicine cabinet.',
  },
  {
    myth: 'More expensive moisturizers are always better than calamine for skin health',
    truth: 'Price has no correlation with skin health outcomes. Calamine lotion — one of the most affordable skincare products available in India — outperforms expensive botanical serums and premium creams in every scenario where its specific mechanism of action is needed: inflammation, itch, sunburn, and oil control. The correct product for the condition is always more effective than an expensive product used for the wrong purpose.',
  },
  {
    myth: 'Calamine lotion causes skin to become dependent and more sensitive',
    truth: 'Calamine contains no ingredients known to cause skin sensitisation, dependency, or barrier disruption with normal use. Unlike topical steroids, which do create tachyphylaxis (reduced response over time) and barrier thinning, zinc oxide-based calamine has no such pharmacological dependency mechanism. Stopping calamine use does not result in rebound inflammation beyond what the underlying condition would have produced independently.',
  },
];

const faqs = [
  {
    q: 'Can I use calamine lotion as a moisturizer every day?',
    a: 'No — and this distinction is critical. Calamine lotion is not a moisturizer and does not function as one. It contains no significant humectants, emollients, or occlusive agents. Used daily without a separate moisturizer, calamine will progressively dry the skin and compromise the barrier. Use calamine for its therapeutic functions (redness, itch, oil control) and apply a dedicated moisturizer separately for daily hydration.',
  },
  {
    q: 'Which goes on first — calamine lotion or moisturizer?',
    a: 'Calamine goes on first, always. Its thin, watery consistency and treatment function require direct contact with the skin surface. Apply calamine to clean skin, allow it to dry completely (60–90 seconds), then apply moisturizer over the top to seal in hydration and prevent the calamine\'s mild astringent action from over-drying the skin. Applying moisturizer first creates a film that blocks calamine\'s contact with the skin and reduces its effectiveness.',
  },
  {
    q: 'Is calamine lotion good for oily skin instead of moisturizer?',
    a: 'Calamine is an excellent complementary product for oily skin but should not replace moisturizer. Its zinc oxide absorbs excess sebum and controls shine effectively — making it ideal for the T-zone. However, oily skin also needs hydration; skipping moisturizer entirely causes the skin to produce more oil to compensate for the dehydration. Use calamine on oily areas first, then layer a lightweight, non-comedogenic, water-based moisturizer over the whole face.',
  },
  {
    q: 'Can I use calamine lotion for sunburn relief in India\'s climate?',
    a: 'Yes — calamine lotion is one of the most appropriate topical responses to fresh sunburn. Its cooling evaporative action draws heat away from inflamed skin, while zinc oxide reduces the inflammatory response. Apply a thin layer to affected areas as soon as possible after sun exposure. Avoid applying heavy, occlusive moisturizers to fresh sunburn — they trap heat. Switch to a repairing, ceramide-based moisturizer in the days following, once the acute phase has passed.',
  },
  {
    q: 'Does calamine lotion help with acne, or do I need a different product?',
    a: 'Calamine provides meaningful support for acne management without being a standalone acne treatment. It does not chemically exfoliate blocked pores (salicylic acid does this), nor does it kill acne bacteria directly (benzoyl peroxide does this). What calamine does is reduce surface sebum, minimise the inflammation that makes acne red and painful, and create a less hospitable environment for acne progression. Use it alongside — not instead of — targeted acne actives for best results.',
  },
  {
    q: 'Can calamine lotion cause skin dryness if used long-term?',
    a: 'Yes — calamine\'s astringent and oil-absorbing properties can progressively dry the skin if used daily over weeks without a complementary moisturizer. This is particularly relevant for people with combination or dry skin who might apply calamine to the whole face. The solution is simple: always layer a moisturizer over calamine, and on days when the skin is calm and not presenting symptoms, consider skipping calamine entirely and using only moisturizer.',
  },
  {
    q: 'Is calamine lotion safe to use on the face daily?',
    a: 'Calamine is generally safe for facial use, but daily full-face application is not universally recommended for all skin types. For oily or acne-prone skin, daily spot application on the T-zone or active breakouts is appropriate. For dry or sensitive skin, limit calamine to days when a specific symptom (redness, itch, sunburn) warrants it. The face\'s skin is thinner and more reactive than body skin, so the balance between calamine\'s treatment benefits and its drying potential matters more in this location.',
  },
  {
    q: 'Can I use calamine lotion and moisturizer together on sensitive skin?',
    a: 'Yes — in fact, the combination is particularly valuable for sensitive skin. Calamine provides gentle, fragrance-free anti-inflammatory coverage (zinc oxide is one of the best-tolerated topical ingredients for sensitive skin), while a fragrance-free, hypoallergenic moisturizer maintains the barrier that sensitive skin struggles to keep intact. The key for sensitive skin is ensuring both products are free of fragrances, essential oils, and alcohol.',
  },
  {
    q: 'How long does it take for calamine lotion to work on a rash or sunburn?',
    a: 'The cooling sensation and initial itch relief from calamine begin within minutes of application. Visible reduction in redness typically occurs within two to six hours of the first application on fresh sunburn or an acute rash. For chronic or recurring conditions like heat rash or mild contact dermatitis, consistent twice-daily application produces visible improvement over two to four days. Calamine does not produce instantaneous total resolution — it reduces and manages symptoms while the underlying condition resolves.',
  },
  {
    q: 'What is the difference between CALAFINE Lotion and a regular calamine product?',
    a: 'Standard calamine products use a basic zinc oxide and ferric oxide suspension that can leave a chalky white cast — particularly visible on the deeper Indian skin tones that are most prevalent across India. CALAFINE is formulated with optimised zinc oxide particle size and suspension for minimal visible residue, making it practical for daytime use on Indian skin. The formulation is also free of fragrances and aggressive preservatives that can partially undermine calamine\'s anti-inflammatory function.',
  },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────────

export default function CalamineVsMoisturizerBlogPage() {
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
            <span className={styles.tag}>Skincare Science · India Guide 2026 · Expert Analysis</span>
            <h1 className={styles.heroTitle}>
              Calamine Lotion
              <br />
              <em>vs Moisturizer</em>
              <br />
              <span className={styles.heroTitleSub}>What&apos;s the Real Difference?</span>
            </h1>
            <p className={styles.heroSub}>
              Most Indians use these products interchangeably — or skip one entirely.
              Both decisions compromise your skin. This guide explains exactly what
              each product does, why they cannot replace each other, and how to use
              both for skin that actually heals.
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
                Shop CALAFINE Lotion on Amazon →
              </a>
              <span className={styles.heroSubNote}>Calamine-Based · All Skin Types · India-Formulated</span>
            </div>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageRing} aria-hidden="true" />
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/calafine-lotion.png"
                alt="CALAFINE Calamine Lotion — India Skincare Guide 2026"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 400px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🧪 Zinc Oxide Active</span>
              <span>❄️ Cooling Relief</span>
              <span>🌿 Anti-Inflammatory</span>
              <span>🇮🇳 India-Formulated</span>
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
          <h2 className={styles.sectionTitle}>Why Indians Confuse These Two Products — And Why It Matters</h2>
          <p>
            Walk into any Indian pharmacy and you will find calamine lotion and moisturizers sitting on
            adjacent shelves, often with similar packaging, similar price points, and — critically —
            no clear guidance on what problem each product actually solves. Ask the pharmacist, and you
            are likely to receive a vague recommendation that implies the two are broadly interchangeable:
            both for skin, both for daily use, both fine. This advice, well-intentioned as it is, has
            led to an extraordinarily widespread pattern of skin mismanagement across Indian households.
          </p>
          <p>
            People with sunburned, inflamed skin reach for moisturizers that trap heat and worsen redness.
            People with oily, acne-prone skin use calamine as their sole skin product, progressively
            dehydrating their barrier until the skin compensates by producing even more oil than before.
            People with combination skin avoid both because they cannot reconcile the conflicting advice
            they have received. And people who need both — the majority of Indian adults with active skin
            concerns and underlying hydration needs — use one and skip the other, wondering why their skin
            never fully stabilises.
          </p>
          <p>
            The confusion is understandable. Both products come in similar bottles. Both are applied
            topically to skin. Both are marketed with vague terms like &quot;soothing&quot; and
            &quot;nourishing&quot; that suggest comparable functions. But underneath this surface
            similarity, calamine lotion and moisturizer are fundamentally different tools designed to do
            fundamentally different things. Using one when you need the other is not a minor
            inconvenience — it is the difference between a skin condition resolving and worsening.
          </p>
          <p>
            The Indian skin context makes this distinction particularly important. India&apos;s climate
            diversity — from the dry heat of Rajasthan to the humid coast of Kerala, from Delhi&apos;s
            pollution to Chennai&apos;s UV intensity — creates a range of skin challenges that require
            precise product selection. Indian skin tones, which predominantly range from Fitzpatrick
            III through VI, are more prone to post-inflammatory hyperpigmentation than lighter tones
            — meaning any skin inflammation that is not appropriately treated leaves visible dark marks
            that can persist for months. Getting the right product on inflamed skin quickly is not merely
            an aesthetic concern; it directly affects how visible and lasting the aftermath of that
            inflammation will be.
          </p>
          <p>
            This guide explains the exact science of what calamine lotion does, what a moisturizer does,
            the seven core differences between them, when each should be used, how they can be combined
            in an effective routine, and what to look for when purchasing each in India. By the end,
            you will have a clear, evidence-based understanding of which product to reach for — and why
            — every time your skin presents a problem. This is not general skincare advice. It is a
            precise, applicable framework for Indian skin conditions and the Indian climate.
          </p>
        </section>

        {/* ─── SCIENCE: CALAMINE ──────────────────────────────────────────────── */}
        <section id="science-calamine" className={styles.section}>
          <h2 className={styles.sectionTitle}>What Calamine Lotion Actually Is — The Dermatological Science</h2>

          <h3 className={styles.subHeading}>The Active Ingredients and Their Mechanisms</h3>
          <p>
            Calamine lotion is a pharmaceutical-grade topical preparation whose active ingredients are
            <strong> zinc oxide</strong> and <strong>ferric oxide</strong> — both inorganic mineral
            compounds with well-documented dermatological actions. Zinc oxide is the primary active
            agent. It is classified as a physical astringent, a mild antiseptic, a skin protectant, and
            a physical UV filter — four distinct functions from a single mineral compound. Ferric oxide
            contributes to the product&apos;s characteristic pink colour (the rust-coloured pigment that
            has made calamine visually recognisable for over a century) and provides supplementary
            astringent and protective action.
          </p>
          <p>
            The anti-inflammatory mechanism of zinc oxide operates through multiple pathways. It inhibits
            the activation of mast cells — immune cells in the skin that release histamine, the primary
            mediator of itching and swelling. It suppresses the production of pro-inflammatory cytokines
            (particularly IL-1β and TNF-α) that sustain the inflammatory response in conditions like
            sunburn, contact dermatitis, and acne. And it directly modulates the nerve endings that
            transmit itch and pain signals, reducing the perceived intensity of these sensations without
            systemic antihistamine effects.
          </p>

          <h3 className={styles.subHeading}>What Calamine Does to the Skin Surface</h3>
          <p>
            When applied to the skin, calamine lotion creates a thin, evaporative film. As the water
            phase of the lotion evaporates — which happens within 60 to 90 seconds at Indian ambient
            temperatures — it draws heat from the skin surface through the thermodynamic process of
            evaporative cooling. This is not a subjective sensation; it is a measurable reduction in
            skin surface temperature that directly reduces the sensation of burning and discomfort in
            inflamed tissue.
          </p>
          <p>
            The mineral particles in calamine — zinc oxide and ferric oxide — remain on the skin surface
            after the water phase evaporates, forming a thin, powder-like protective layer. This layer
            has three effects: it physically separates the skin from environmental irritants (dust,
            sweat, fabric friction), it continues to provide astringent action that reduces pore size
            and sebum flow, and it provides a degree of physical UV scattering that reduces further
            UV damage while the product is on the skin.
          </p>

          <h3 className={styles.subHeading}>What Calamine Cannot Do</h3>
          <p>
            Calamine lotion has a precise scope of function, and understanding its limitations is as
            important as understanding its capabilities. It does not hydrate the skin in any
            meaningful sense — it contains no humectants (water-attracting molecules) or occlusive
            agents (barrier-sealing molecules). It does not rebuild the lipid barrier that chronic
            dehydration, harsh cleansers, and UV damage erode over time. It does not replace the
            ceramides, fatty acids, or natural moisturising factors that a functional skin barrier
            requires. And it does not provide the sustained, film-forming moisture retention that
            prevents transepidermal water loss throughout the day.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> Calamine lotion is a treatment product — it treats
              conditions that are currently happening to the skin. It is not a maintenance product.
              Think of it the way you think of an antiseptic cream: you do not apply antiseptic to
              unbroken skin every morning as a preventive measure. You apply it when there is something
              to treat. Calamine follows the same logic — it belongs in your routine when your skin is
              presenting symptoms, not as a permanent daily substitute for hydration.
            </div>
          </div>
        </section>

        {/* ─── SCIENCE: MOISTURIZER ───────────────────────────────────────────── */}
        <section id="science-moisturizer" className={styles.section}>
          <h2 className={styles.sectionTitle}>What a Moisturizer Actually Does — The Barrier Science</h2>

          <h3 className={styles.subHeading}>The Three Components of Skin Moisture</h3>
          <p>
            Understanding what a moisturizer does requires first understanding that skin moisture is
            not a single thing — it is a system with three distinct components, each requiring a
            different type of ingredient to support it. The <strong>natural moisturising factor</strong>
            (NMF) is a collection of hygroscopic molecules — amino acids, lactic acid, urea — that sit
            in the outermost skin cells and draw water from the surrounding atmosphere into the
            stratum corneum. The <strong>lipid bilayer</strong> — composed of ceramides, cholesterol,
            and free fatty acids — forms the structural mortar between skin cells, sealing in the water
            the NMF has drawn in. And the <strong>skin&apos;s own sebum</strong> provides a surface-level
            occlusive film that slows evaporation.
          </p>
          <p>
            A well-formulated moisturizer addresses all three components: <strong>humectants</strong>
            (glycerin, hyaluronic acid, sodium PCA) support the NMF function by attracting water into
            the skin from the environment and from deeper tissue layers. <strong>Emollients</strong>
            (fatty acids, plant oils, squalane) supplement the lipid bilayer, filling the gaps between
            skin cells and improving the barrier&apos;s structural integrity.
            <strong> Occlusives</strong> (petrolatum, shea butter, dimethicone) sit on the skin
            surface and slow the rate of transepidermal water loss — the constant, invisible evaporation
            of water through the skin surface that accelerates in dry or air-conditioned environments.
          </p>

          <h3 className={styles.subHeading}>Why the Skin Barrier Matters for Indian Skin</h3>
          <p>
            The skin barrier — the outermost layer of the epidermis — is the structure that keeps
            moisture in and environmental aggressors out. When it is intact, skin stays hydrated,
            is less reactive to irritants, and heals from minor damage quickly. When it is compromised
            — through UV exposure, harsh products, pollution, hard water, or nutritional gaps — the
            opposite occurs. Moisture escapes freely (transepidermal water loss increases), irritants
            penetrate more easily (inflammation rises), and the skin becomes trapped in a cycle of
            reactivity that worsens with each round of exposure and damage.
          </p>
          <p>
            Indian skin faces specific barrier challenges that make consistent moisturization
            particularly important. Hard water — prevalent across Delhi, Bengaluru, Chennai, and Pune —
            contains calcium and magnesium ions that disrupt the lipid bilayer, progressively weakening
            the barrier with each wash. The Indian sun&apos;s UV index, which reaches extreme levels
            (11+) in summer months across most of the subcontinent, oxidises and degrades the lipid
            components of the barrier faster than they can be replenished through natural sebum
            production. And the widespread use of soap-bar cleansers with high pH (9–10) in Indian
            bathrooms — compared to the skin&apos;s natural 4.5–5.5 pH — disrupts barrier function
            every morning before the day has even begun.
          </p>

          <h3 className={styles.subHeading}>What Moisturizer Cannot Do</h3>
          <p>
            A moisturizer, regardless of how sophisticated its formulation, does not possess
            anti-inflammatory properties. It does not reduce redness, suppress itching, cool inflamed
            tissue, or inhibit the inflammatory cytokine cascade. It does not absorb excess sebum or
            reduce pore size. It does not provide meaningful UV protection in the way that SPF-rated
            sunscreens do. And it does not treat the acute symptom of a condition that is actively
            inflaming the skin — it maintains and repairs; it does not intervene acutely. For that,
            you need calamine or another treatment-class product.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> Oily skin does not mean well-moisturised skin.
              Sebum and hydration are different. Sebum is produced by sebaceous glands and consists
              primarily of lipids — it contributes to the occlusive layer but does not attract water
              or rebuild the lipid bilayer the way ceramide-containing moisturizers do. An oily skin
              that skips moisturizer because it &quot;already looks shiny&quot; is often severely dehydrated
              beneath the surface — and that dehydration is what drives the sebaceous glands to
              overproduce oil in the first place.
            </div>
          </div>
        </section>

        {/* ─── KEY DIFFERENCES ────────────────────────────────────────────────── */}
        <section id="key-differences" className={styles.section}>
          <h2 className={styles.sectionTitle}>The 7 Core Differences: Calamine vs Moisturizer</h2>
          <p className={styles.sectionIntro}>
            These are not subtle distinctions. Each of these seven differences represents a
            fundamentally different mechanism of action — confirming that calamine and moisturizer
            cannot substitute for each other in any clinical or practical sense.
          </p>
          <div className={styles.diffsGrid}>
            {differences.map((d) => (
              <div key={d.number} className={styles.diffCard}>
                <div className={styles.diffHeader}>
                  <span className={styles.diffNumber}>{d.number}</span>
                  <span className={styles.diffAspect}>{d.aspect}</span>
                </div>
                <div className={styles.diffRow}>
                  <div className={styles.diffCol}>
                    <span className={styles.diffLabel} data-side="calamine">Calamine Lotion</span>
                    <p>{d.calamine}</p>
                  </div>
                  <div className={styles.diffCol}>
                    <span className={styles.diffLabel} data-side="moisturizer">Moisturizer</span>
                    <p>{d.moisturizer}</p>
                  </div>
                </div>
                <div className={styles.diffVerdict}>
                  <span>⚖️</span> {d.verdict}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Skin Problem — Which Product Actually Solves It</h2>
          <p className={styles.sectionIntro}>
            The question is not &quot;calamine or moisturizer?&quot; The question is &quot;what is my skin
            doing right now?&quot; Here is the answer for the four most common skin complaints in India.
          </p>
          <div className={styles.problemsGrid}>
            {problemCards.map((card) => (
              <div key={card.problem} className={styles.problemCard}>
                <span className={styles.problemIcon}>{card.icon}</span>
                <h3 className={styles.problemTitle}>{card.problem}</h3>
                <p className={styles.problemDesc}>{card.desc}</p>
                <div className={styles.problemFix}>
                  <span className={styles.fixLabel}>✓ Use: {card.product}</span>
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
            Every skin type has a different relationship with calamine and moisturizer.
            Here is the precise guidance for each — including suitability verdicts for both products
            side by side.
          </p>
          <div className={styles.skinTypeGrid}>
            {skinTypes.map((st) => (
              <div key={st.type} className={styles.skinCard}>
                <div className={styles.skinCardTop}>
                  <span className={styles.skinIcon}>{st.icon}</span>
                  <span className={styles.skinType}>{st.type}</span>
                </div>
                <div className={styles.skinVerdicts}>
                  <div className={styles.skinVerdictRow}>
                    <span className={styles.skinProductLabel}>Calamine:</span>
                    <span className={`${styles.verdict} ${styles[st.calaClass]}`}>{st.calaVerdict}</span>
                  </div>
                  <div className={styles.skinVerdictRow}>
                    <span className={styles.skinProductLabel}>Moisturizer:</span>
                    <span className={`${styles.verdict} ${styles[st.moistClass]}`}>{st.moistVerdict}</span>
                  </div>
                </div>
                <p className={styles.skinExp}><strong>Calamine:</strong> {st.calaExp}</p>
                <p className={styles.skinExp}><strong>Moisturizer:</strong> {st.moistExp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PRODUCT DEEP DIVE ──────────────────────────────────────────────── */}
        <section id="product-deep-dive" className={styles.section}>
          <h2 className={styles.sectionTitle}>CALAFINE Lotion — Complete Feature Breakdown</h2>

          {/* Mid CTA 1 */}
          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              Zinc Oxide. Instant Cooling. Formulated for Indian Skin.
            </p>
            <p className={styles.midCtaSub}>
              CALAFINE Lotion — the calamine upgrade designed for India&apos;s climate, skin tones, and daily skin challenges.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Buy CALAFINE Lotion on Amazon →
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
              <strong>Important Distinction:</strong> CALAFINE Lotion is a <em>treatment-class skincare
              product</em> — not a cosmetic moisturizer. Its zinc oxide active ingredient has documented
              anti-inflammatory, antipruritic, astringent, and UV-protective mechanisms. This means
              it is appropriate for conditions that present symptoms: sunburn, rashes, active acne,
              heat-triggered redness. It is not a replacement for the daily moisturizer your skin
              needs for barrier maintenance and hydration. Use CALAFINE to treat; use a moisturizer
              to maintain. For a complete look at all the clinical applications of calamine — including
              how it works on acne, eczema, and post-sun care — read our{' '}
              <Link
                href="/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026"
                className={styles.internalLink}
              >
                complete guide to calamine lotion uses and benefits
              </Link>.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Use Calamine and Moisturizer in the Same Routine</h2>
          <p className={styles.sectionIntro}>
            The most effective approach for most Indian skin types — particularly oily, combination,
            and acne-prone — is not to choose between calamine and moisturizer, but to use both
            correctly in a defined sequence. Here is the exact protocol.
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
            💡 <strong>Pro Tip:</strong> The order of your skincare products is not arbitrary — it
            follows the principle of thinnest to thickest, and treatment before maintenance.
            Calamine&apos;s watery consistency and treatment function place it firmly before
            moisturizer in the sequence. If you are also using a Vitamin C serum, niacinamide, or
            retinol, apply those after calamine and before moisturizer. For a complete deep dive into
            how to build an effective face wash routine before applying these treatments, see our{' '}
            <Link
              href="/blog/best-face-wash-oily-skin-india-2026"
              className={styles.internalLink}
            >
              guide to the best face wash for oily skin in India
            </Link>
            {' '}— clean skin is the foundation everything else builds on.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>Results Timeline — What to Expect and When</h2>
          <p className={styles.sectionIntro}>
            When you begin using calamine and moisturizer correctly in the same routine, here is the
            realistic, condition-by-condition progression of what improves and when.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — What to Look for in a Calamine Product in India</h2>
          <p className={styles.sectionIntro}>
            India&apos;s pharmacy shelves carry dozens of calamine products ranging from two-decade-old
            formulations in outdated packaging to newer, more sophisticatedly engineered options.
            Here is exactly what separates a product worth buying from one that merely carries the
            calamine name.
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

          <h3 className={styles.subHeading}>Common Mistakes Indians Make When Buying Calamine</h3>
          <p>
            The most widespread buying error in the Indian market is purchasing calamine based on
            price alone — specifically, choosing the cheapest option because &quot;calamine is just
            calamine.&quot; This assumption is incorrect. Formulation quality — the particle size of
            zinc oxide, the suspension stability, the quality of the carrier base — varies enormously
            between price points and between manufacturers. A poorly suspended zinc oxide settles
            into an unusable paste at the bottom of the bottle and does not redistribute evenly
            even when shaken. A zinc oxide with oversized particles leaves a visible white cast on
            Indian skin tones and does not penetrate the surface layer effectively.
          </p>
          <p>
            The second common mistake is purchasing a product labelled as &quot;calamine lotion&quot;
            that has been reformulated into a cream or gel base — changing the product&apos;s drying
            time, texture, and surface behaviour in ways that undermine the original mechanism.
            The classic calamine lotion is a liquid suspension — not a cream, not a gel. If the
            product you are considering does not require shaking before use and does not have the
            characteristic thin, milky consistency, it has been significantly reformulated and may
            not provide the same evaporative cooling or astringent action as the original formula.
          </p>
          <p>
            Finally, many Indian consumers purchase calamine and moisturizer as alternatives —
            believing they need one or the other. The correct frame is that they are complementary
            products serving different functions. Budgeting for both and using each for its intended
            purpose produces better outcomes than budgeting for one and trying to make it do the
            other&apos;s job.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              The right calamine for Indian skin. Zero white cast.
            </p>
            <p className={styles.midCtaSub}>
              CALAFINE Lotion — engineered for even distribution on Indian skin tones.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get CALAFINE Lotion on Amazon →
            </a>
          </div>
        </section>

        {/* ─── WHO NEEDS THIS ──────────────────────────────────────────────────── */}
        <section id="who-needs" className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Needs Calamine Lotion Most</h2>
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
            Understanding the difference between calamine and moisturizer is step one.
            Build your complete routine with these expert guides.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🧪</span>
              <div>
                <p className={styles.relatedCardTitle}>Calamine Lotion Uses &amp; Benefits — 2026 Complete Guide</p>
                <p className={styles.relatedCardSub}>Every clinical application of calamine, from sunburn to eczema</p>
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
              href="/blog/calafine-lotion-sunburn-relief-acne-care-skin-nourishment"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>☀️</span>
              <div>
                <p className={styles.relatedCardTitle}>CALAFINE for Sunburn, Acne &amp; Skin Nourishment</p>
                <p className={styles.relatedCardSub}>One lotion, three major skin problems — complete review</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Calamine vs Moisturizer — Myths vs. Truth</h2>
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
          <h2 className={styles.bottomCtaTitle}>Stop Guessing. Start Treating.</h2>
          <p>
            The difference between calamine and moisturizer is not a matter of preference —
            it is a matter of mechanism. Your sunburned, inflamed, or itchy skin needs the
            zinc oxide cooling and anti-inflammatory action that only calamine provides.
            Your chronically dehydrated skin barrier needs the humectants and occlusives that
            only a moisturizer delivers. CALAFINE Lotion gives you the treatment half of this
            equation — formulated without white cast, without harsh additives, and with the
            zinc oxide concentration that Indian skin conditions require.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy CALAFINE Lotion on Amazon — Treat Your Skin Right →
          </a>
          <p className={styles.bottomNote}>Calamine-Based · All Skin Types · Fragrance-Free Formula · Free Delivery Available</p>
        </section>

      </div>
    </article>
  );
}