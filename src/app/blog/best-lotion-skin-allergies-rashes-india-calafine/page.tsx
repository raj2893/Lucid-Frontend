import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './calafine-allergy-rash-blog.module.css';
import RelatedProduct from '@/components/RelatedProduct';

export const metadata: Metadata = {
  title: 'Best Lotion for Skin Allergies and Rashes in India 2026 — Complete Guide',
  description:
    'Best lotion for skin allergies and rashes in India. Calamine-based relief for itching, redness & hives. Dermatologist-grade guide for all skin types. Shop now.',
  keywords: [
    'best lotion for skin allergies in India',
    'skin rash lotion India',
    'anti allergy lotion India',
    'calamine lotion for rashes',
    'itchy skin relief lotion India',
    'skin allergy cream India',
    'lotion for hives India',
    'best lotion for itching India',
    'rash relief lotion India',
    'contact dermatitis lotion India',
    'prickly heat lotion India',
    'heat rash lotion India',
    'eczema lotion India',
    'allergic reaction skin lotion',
    'lotion for redness and itching India',
    'best calamine lotion India 2026',
    'skin soothing lotion India',
    'lotion for sensitive skin India',
    'lotion for insect bite rash India',
    'anti itch lotion India',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/best-lotion-skin-allergies-rashes-india-calafine',
  },
  openGraph: {
    title: 'Best Lotion for Skin Allergies and Rashes in India 2026 — Complete Guide',
    description:
      'Calamine-powered relief for skin allergies, rashes, hives, and itching. The complete 2026 guide for Indian skin types and climate conditions.',
    images: [
      {
        url: '/images/calafine-lotion.png',
        width: 1200,
        height: 630,
        alt: 'CALAFINE Lotion — Best Lotion for Skin Allergies and Rashes in India',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0foGtulz';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Skin Allergies and Rashes Are So Common in India' },
  { id: 'science', label: 'The Science of Skin Allergies — What Is Actually Happening' },
  { id: 'types', label: 'Types of Rashes and Allergic Reactions Explained' },
  { id: 'problems-grid', label: 'Your Skin Problem — And the Specific Solution' },
  { id: 'skin-type-guide', label: 'Complete Skin Type Suitability Guide' },
  { id: 'product-deep-dive', label: 'CALAFINE Lotion — Full Feature Breakdown' },
  { id: 'how-to-use', label: 'Step-by-Step Application Guide' },
  { id: 'results-timeline', label: 'Realistic Results Timeline — What to Expect' },
  { id: 'buying-guide', label: 'Complete Buying Guide for India' },
  { id: 'who-needs', label: 'Who Needs This Lotion Most' },
  { id: 'related', label: 'Complete Your Skincare Routine' },
  { id: 'myths', label: 'Skin Allergy Myths vs. Truth' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🔴',
    problem: 'Persistent Itching and Hives',
    desc: 'Histamine released during an allergic response triggers nerve endings in the skin directly, producing the relentless itch-scratch-inflammation cycle that damages the skin barrier and worsens the reaction with every episode. In India\'s heat, sweat amplifies this cycle significantly.',
    solution: 'Calamine\'s zinc oxide component creates a cooling, astringent film over the affected area that physically intercepts the itch signal, reduces localised inflammation, and breaks the scratch cycle before it can escalate into secondary infection or permanent scarring.',
  },
  {
    icon: '🌡️',
    problem: 'Heat Rash and Prickly Heat',
    desc: 'India\'s tropical climate — particularly the pre-monsoon months in cities like Chennai, Mumbai, and Kolkata — creates ambient conditions where sweat glands become blocked by a combination of heat, humidity, and friction, producing the distinctive red papules and burning sensation of miliaria (prickly heat).',
    solution: 'CALAFINE Lotion\'s formulation works both to soothe the existing inflammation and to absorb surface moisture, reducing the wet, occluded environment that allows sweat gland blockage to persist and worsen. Application after bathing provides immediate cooling relief.',
  },
  {
    icon: '🌿',
    problem: 'Contact Dermatitis from Plants and Chemicals',
    desc: 'Direct contact with allergens — synthetic fabrics, nickel in jewellery, detergents, latex, certain plants, cosmetic preservatives — triggers a delayed hypersensitivity reaction in sensitised individuals. The resulting redness, blistering, and intense itch can persist for days without appropriate topical intervention.',
    solution: 'Applied immediately upon recognition of a contact reaction, CALAFINE Lotion forms a soothing barrier between the sensitised skin and the environment, delivers anti-inflammatory zinc to the reactive tissue, and provides meaningful itch relief within minutes of application.',
  },
  {
    icon: '🦟',
    problem: 'Insect Bite Reactions and Skin Inflammation',
    desc: 'Mosquito bites in India are not merely an annoyance — they introduce allergens directly into the dermal layer that produce intense localised inflammation in reactive individuals. Multiple bites compound the histamine load on the skin, producing widespread itching that disturbs sleep and daily function.',
    solution: 'The calamine base in CALAFINE Lotion has been used for insect bite relief for over a century — applied directly to bites, it reduces the wheal-and-flare response, soothes the inflamed tissue, and significantly reduces the duration of the itch cycle compared to untreated reactions.',
  },
];

const skinTypes = [
  {
    type: 'Oily Skin',
    icon: '💦',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'CALAFINE Lotion is lightweight and non-comedogenic. Its calamine base absorbs surface oil rather than adding to it, making it ideal for oily skin prone to blocked pores and comedone formation during rash episodes.',
  },
  {
    type: 'Dry Skin',
    icon: '🏜️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'The lotion\'s moisturising components maintain hydration while delivering active relief. Dry skin — which has a compromised barrier — benefits particularly from the protective film calamine forms over reactive tissue.',
  },
  {
    type: 'Combination Skin',
    icon: '⚖️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Works consistently across the varied zones of combination skin. Apply targeted amounts to affected areas regardless of whether they fall in the oily or dry zones — the formula adapts to both without disrupting skin balance.',
  },
  {
    type: 'Sensitive Skin',
    icon: '🌸',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Particularly well-suited for sensitive skin, which is disproportionately prone to allergic reactions. The gentle, non-irritating formula avoids common sensitisers like fragrance and alcohol that would worsen a reactive episode.',
  },
  {
    type: 'Acne-Prone Skin',
    icon: '⚡',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Calamine\'s astringent, anti-inflammatory properties are directly beneficial for acne-prone skin. Use with confidence on rashes; avoid applying heavily to active pustular acne without dermatologist guidance.',
  },
  {
    type: 'Mature Skin',
    icon: '🌿',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Mature skin\'s thinner, more reactive barrier responds well to calamine\'s protective qualities. The soothing action is valuable for age-related increases in skin sensitivity. Apply with a light hand to avoid unnecessary dryness.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Calamine — The Active Ingredient with Over a Century of Clinical Use',
    body1: `Calamine is a mixture of zinc oxide and a small proportion of ferric oxide — the latter responsible for the characteristic pink colour. Its use as a topical anti-itch and anti-inflammatory agent predates modern dermatology, appearing in clinical literature from the late 19th century. What has kept it in use for over 130 years, while dozens of newer compounds have come and gone, is a combination of remarkable efficacy, exceptional safety, and a mechanism of action that addresses the core drivers of skin allergy symptoms simultaneously.

Zinc oxide — the primary active component — is an astringent, antiseptic, and mild anti-inflammatory agent. When applied to inflamed skin, it creates a thin, protective occlusive layer that reduces transepidermal water loss, shields the sensitised tissue from further environmental irritants, and delivers zinc ions directly to the reactive area. Zinc has well-documented anti-inflammatory properties at the cellular level: it inhibits the production of certain pro-inflammatory cytokines and supports the skin barrier repair process at a biochemical level that no amount of topical steroid use can replicate sustainably.`,
    body2: `The ferric oxide component contributes mild drying and absorbent properties — particularly useful in India's humid climate where wet, macerated skin is a constant aggravating factor in rash persistence and spread. The combination produces a lotion that simultaneously soothes, dries, protects, and gently disinfects the reactive skin surface. CALAFINE Lotion harnesses this clinically established base and formulates it for the specific realities of Indian skin and climate — making a proven therapeutic compound meaningfully more effective through modern delivery and complementary ingredients.`,
  },
  {
    number: '02',
    heading: 'Immediate Itch Relief Through Cooling and Nerve Signal Interruption',
    body1: `The itch associated with allergic rashes is not a simple surface sensation — it is the result of specific nerve fibres (C fibres and Aδ fibres) in the dermis being activated by inflammatory mediators including histamine, substance P, and interleukins released during the immune response. This neural activation is what creates the compulsive urge to scratch that characterises allergic skin reactions. Scratching provides momentary relief by substituting a pain signal for the itch signal, but it simultaneously damages the skin barrier, introduces bacteria, and releases more inflammatory mediators — perpetuating and worsening the reaction.

CALAFINE Lotion interrupts this cycle through two simultaneous mechanisms. First, the evaporation of the lotion's aqueous components from the skin surface produces a pronounced cooling sensation that physically competes with and overrides the itch signal at the nerve level — a form of counterstimulation that provides genuine, measurable relief within minutes of application. Second, zinc oxide's anti-inflammatory action begins reducing the local concentration of histamine and other pruritogens (itch-causing compounds) in the tissue, addressing the neural activation at its source rather than merely masking the sensation.`,
    body2: `This dual mechanism — immediate surface cooling plus progressive anti-inflammatory action — is why calamine-based lotions have consistently outperformed single-mechanism alternatives in patient satisfaction for itch relief. The immediate effect is noticeable within two to five minutes of application; the progressive anti-inflammatory effect builds over hours of sustained contact. For acute allergic episodes — the kind triggered by sudden exposure to an allergen, an insect bite, or a heat rash flare — this combination is the most practical, safest, and most evidence-supported over-the-counter option available.`,
  },
  {
    number: '03',
    heading: 'Skin Barrier Protection and Repair During Reactive Episodes',
    body1: `One of the least-discussed aspects of allergic skin reactions is what they do to the skin barrier over time. The stratum corneum — the outermost layer of the skin — functions as a selective barrier that keeps moisture in and allergens, bacteria, and irritants out. During an allergic reaction, the inflammatory process directly degrades barrier integrity: ceramides (the lipids that fill the spaces between skin cells) are depleted, tight junctions between cells loosen, and transepidermal water loss increases dramatically. This barrier breakdown creates a vicious cycle: a more permeable barrier admits more allergens, which trigger stronger immune responses, which further degrade the barrier.

This is why untreated or inadequately treated skin allergies tend to worsen over time rather than self-resolve — and why individuals with a history of allergic skin conditions (atopic dermatitis, eczema, contact dermatitis) become progressively more reactive to a wider range of triggers. The treatment approach that addresses only symptoms — the itch, the redness — without also supporting barrier repair, is managing rather than healing. CALAFINE Lotion's zinc oxide base contributes directly to barrier repair by providing the zinc ions required for the enzymatic processes that rebuild the lipid matrix of the stratum corneum.`,
    body2: `The protective film formed on the skin surface during application also serves as a temporary physical barrier that reduces further allergen penetration during the acute reaction phase. This is particularly relevant for contact dermatitis — where continued exposure to trace amounts of the trigger allergen (on clothing, surfaces, or through the air) can prevent resolution even when the primary source has been removed. Regular application during a flare provides a meaningful degree of physical protection that supports the underlying healing process rather than simply masking its absence.`,
  },
  {
    number: '04',
    heading: 'Broad-Spectrum Suitability Without the Risks of Topical Steroids',
    body1: `The standard first-line treatment for allergic skin reactions in India — both in clinical practice and in over-the-counter use — is often a topical corticosteroid cream. These medications are effective at suppressing the immune response rapidly and reducing inflammation, but they carry a risk profile that is frequently underestimated and under-communicated, particularly in the Indian context where many prescription-strength formulations are available without prescription and are used without medical supervision for extended periods.

Topical corticosteroids — including commonly used formulations containing betamethasone, clobetasol, or fluticasone — cause significant problems with long-term or unsupervised use: skin thinning (atrophy), telangiectasia (visible broken capillaries), rebound flaring when the steroid is withdrawn, perioral dermatitis, and in cases of extended facial use, steroid-induced rosacea. These are not rare adverse effects — they are well-documented, common outcomes of the kind of long-term, unsupervised topical steroid use that is endemic in India. The clinical phenomenon of topical steroid withdrawal syndrome (TSWS), sometimes called "red skin syndrome," is a growing and serious public health concern, particularly in Indian dermatology.`,
    body2: `CALAFINE Lotion provides meaningful, clinically effective relief from allergic rashes and skin reactions without any of these risks. It can be used as frequently as needed, on any body area including the face, by any age group including infants and pregnant women (with appropriate professional guidance), for as long as symptoms persist — without concern for the cumulative adverse effects that make steroids unsuitable for regular, independent use. For the large proportion of Indian adults who are using over-the-counter steroid creams unsupervised for months or years, a calamine-based alternative that addresses symptoms effectively represents both a safer and a therapeutically sound choice.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Clean the Affected Area Gently',
    desc: 'Wash the affected skin with cool or lukewarm water and a mild, fragrance-free cleanser. Avoid hot water — it vasodilates the skin and worsens inflammatory redness. Pat dry with a soft cloth; do not rub. The skin should be clean but not stripped before application.',
  },
  {
    num: '02',
    title: 'Shake the Bottle Before Use',
    desc: 'CALAFINE Lotion — like all calamine-based formulations — separates on standing. Shake the bottle thoroughly for 10–15 seconds before each use to ensure the zinc oxide is uniformly dispersed throughout the liquid. A settled bottle delivers inconsistent active ingredient concentration.',
  },
  {
    num: '03',
    title: 'Apply a Thin, Even Layer to the Affected Area',
    desc: 'Using clean fingertips or a cotton pad, apply a thin, even layer of CALAFINE Lotion directly over the rash, hives, or irritated area. Extend slightly beyond the visible margin of the reaction — the border of a rash is often where active inflammation is most intense. Do not rub aggressively; gentle spreading is sufficient.',
  },
  {
    num: '04',
    title: 'Allow to Dry Completely — Do Not Rub In',
    desc: 'Unlike moisturisers, calamine lotion should be allowed to dry on the skin surface — not rubbed in. The drying process is part of the therapeutic mechanism: as the aqueous phase evaporates, it creates the cooling sensation that provides itch relief, and the zinc oxide deposits form the protective film on the skin surface. This takes two to four minutes.',
  },
  {
    num: '05',
    title: 'Repeat 3–4 Times Daily or as Needed',
    desc: 'For acute allergic reactions, apply three to four times daily or whenever itching intensifies. For ongoing rashes during an extended flare, a consistent morning and evening application maintains the anti-inflammatory and protective effect. Do not apply over broken or weeping skin without medical guidance.',
  },
  {
    num: '06',
    title: 'Discontinue When Symptoms Resolve; Seek Medical Help If They Do Not',
    desc: 'CALAFINE Lotion is for symptomatic relief of allergic skin reactions. If a rash does not improve within five to seven days of consistent application, spreads significantly, develops blisters or crusting, is accompanied by systemic symptoms (fever, swollen lymph nodes, difficulty breathing), or affects large body areas — consult a dermatologist. These signs indicate a reaction requiring systemic medical treatment.',
  },
];

const timeline = [
  {
    period: 'Within Minutes',
    title: 'Immediate Cooling and Itch Reduction',
    detail: 'The cooling effect of CALAFINE Lotion is perceptible within two to five minutes of application. The urge to scratch diminishes significantly in most users within this window — not because the underlying reaction has resolved, but because the nerve signal driving the itch is being directly counteracted by the cooling mechanism.',
  },
  {
    period: 'Hours 2–6',
    title: 'Redness and Inflammation Begin to Subside',
    detail: 'Zinc oxide\'s anti-inflammatory action takes effect progressively over the first few hours. Visible redness decreases, the raised wheal of hives begins to flatten, and the heat sensation in the affected area reduces. The skin surface may appear slightly pink-white from the calamine film — this is the protective layer working as intended.',
  },
  {
    period: 'Day 1–2',
    title: 'Significant Symptom Reduction in Acute Reactions',
    detail: 'For most acute allergic reactions — insect bites, mild contact dermatitis, heat rash — consistent application over the first 24 to 48 hours produces substantial improvement in both objective signs (redness, swelling) and subjective symptoms (itch, burning). Many reactions resolve completely within this window.',
  },
  {
    period: 'Day 3–7',
    title: 'Full Resolution or Significant Control',
    detail: 'Most mild to moderate allergic rashes and contact dermatitis reactions resolve fully with consistent calamine application over five to seven days. Chronic or recurring conditions like eczema and atopic dermatitis require ongoing management — CALAFINE Lotion provides reliable symptom control during flares while the underlying condition is managed medically.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧪',
    title: 'Active Ingredient Transparency',
    body: 'The label of any lotion marketed for skin allergies or rashes must clearly disclose its active ingredient and concentration. Zinc oxide — the primary active in calamine — should be listed clearly, not buried in a long ingredient deck or obscured by marketing terms. Formulations that list their actives prominently signal pharmaceutical-grade quality standards. Avoid products with vague "herbal complex" or "botanical extract" primary claims without specific active ingredient disclosure.',
  },
  {
    icon: '🚫',
    title: 'Fragrance-Free Formulation',
    body: 'This is the most important negative criterion. Fragrance is the number one cause of contact dermatitis and allergic skin reactions in cosmetics and skincare products — it is profoundly counter-productive to treat an allergic rash with a product that contains potential fragrance allergens. Any lotion intended for reactive, allergy-prone skin must be fragrance-free. If "parfum," "fragrance," or specific fragrance chemicals appear in the ingredient list, do not use it on reactive skin.',
  },
  {
    icon: '💧',
    title: 'Appropriate Texture for Indian Climate',
    body: 'Heavy creams and thick emollients are thermodynamically inappropriate for India\'s climate during most of the year. In ambient temperatures above 28°C — which describes most of urban India for eight to ten months annually — thick creams trap heat against already-inflamed skin, worsening discomfort and slowing the evaporative cooling that calamine provides. A lotion consistency (not cream, not gel) provides the right balance of active delivery, barrier protection, and climate-appropriate comfort.',
  },
  {
    icon: '✅',
    title: 'Broad Indication Suitability',
    body: 'The best allergy and rash lotion for Indian consumers is one that works across the range of rash types most commonly encountered here: heat rash, insect bite reactions, contact dermatitis from metals and fabric dyes, and mild eczema flares. A product requiring a different formulation for each of these conditions is impractical. CALAFINE Lotion\'s calamine base provides broad-spectrum relief across all these presentations, making it a genuinely versatile addition to any home medicine cabinet.',
  },
];

const whoNeeds = [
  { icon: '🌾', label: 'People With Seasonal Allergies', desc: 'Pollen, mold, and seasonal airborne allergens trigger skin reactions alongside respiratory symptoms in many individuals. CALAFINE Lotion manages the skin component effectively during peak allergy seasons.' },
  { icon: '👶', label: 'Parents of Young Children', desc: 'Children\'s skin is more reactive and more frequently affected by heat rash, insect bites, and contact reactions. Calamine\'s exceptional safety profile makes it the appropriate first-response choice for paediatric rashes.' },
  { icon: '🏙️', label: 'Urban Commuters in High-Pollution Cities', desc: 'Daily exposure to particulate pollution in cities like Delhi, Mumbai, and Bengaluru creates chronic low-grade skin inflammation that manifests as periodic rash flares and heightened reactivity — precisely what calamine addresses.' },
  { icon: '🌊', label: 'Residents of Humid Coastal Cities', desc: 'Chennai, Mumbai, Kochi, and Kolkata\'s persistent humidity creates ideal conditions for heat rash, fungal-adjacent skin reactions, and sweat-triggered allergic episodes. A lotion that absorbs moisture rather than adding to it is essential.' },
  { icon: '💍', label: 'Metal and Jewellery Allergy Sufferers', desc: 'Nickel allergy — the most common contact allergen in India, found in costume jewellery, belt buckles, and jean buttons — produces localised contact dermatitis that responds directly and consistently to calamine application.' },
  { icon: '🧴', label: 'Cosmetic Ingredient Reactors', desc: 'Individuals who regularly react to preservatives, fragrances, or dyes in cosmetics need a genuinely gentle therapeutic option for flares. CALAFINE Lotion\'s minimalist, fragrance-free formulation is safe for the most reactive skin.' },
  { icon: '🦟', label: 'Frequent Mosquito Bite Reactors', desc: 'Those who experience large local reactions to mosquito bites — significant swelling and prolonged itching beyond the normal minor response — benefit substantially from immediate calamine application at the bite site.' },
  { icon: '🏃', label: 'Athletes and Active Individuals', desc: 'Sweat-triggered rashes, friction intertrigo, and exercise-induced allergic reactions are common among Indian athletes, particularly during summer training. A cooling, moisture-absorbing lotion that provides immediate relief is invaluable.' },
];

const myths = [
  {
    myth: 'Skin rashes always indicate a serious allergy that needs antihistamines or steroids',
    truth: 'The majority of common skin rashes — heat rash, mild contact dermatitis, insect bite reactions, and minor hives — are self-limiting with appropriate topical treatment. Topical calamine lotion is clinically effective for most of these presentations. Systemic antihistamines and topical steroids are reserved for more severe, systemic, or persistent reactions that do not respond to first-line topical management.',
  },
  {
    myth: 'Calamine lotion is only for chickenpox — it\'s outdated for modern rashes',
    truth: 'Calamine lotion\'s association with chickenpox is a quirk of cultural memory, not a reflection of its actual therapeutic scope. Dermatologists recommend calamine for contact dermatitis, heat rash, insect bite reactions, mild eczema flares, hives, sunburn, and other inflammatory skin conditions. Its mechanism of action — zinc oxide\'s anti-inflammatory and astringent properties — is directly relevant to all of these conditions.',
  },
  {
    myth: 'The more lotion you apply, the faster the rash heals',
    truth: 'Application volume does not determine therapeutic outcome. A thin, even layer of calamine lotion applied to clean skin delivers the same active ingredient concentration as a thick layer — with the added disadvantage that thick application dries unevenly, creates a heavy, cracking film, and may block the evaporative cooling mechanism that provides immediate itch relief. Apply thinly and consistently rather than heavily and infrequently.',
  },
  {
    myth: 'You should apply lotion immediately after scratching to "lock in" relief',
    truth: 'Scratching breaks the skin surface, creating micro-abrasions that make subsequent product application both less effective and potentially irritating. The correct sequence is to resist scratching, wash the area gently with cool water to remove bacteria and surface allergens, dry thoroughly, and then apply lotion to intact or minimally damaged skin. CALAFINE Lotion is not indicated for open, broken, or weeping skin without medical guidance.',
  },
  {
    myth: 'Indian skin types do not react to common European allergens like nickel and fragrance',
    truth: 'Contact allergen sensitisation is universal — it is determined by exposure pattern and immune system genetics, not skin tone or ethnicity. Indian dermatological research consistently identifies nickel, fragrance compounds, and preservatives as major causes of allergic contact dermatitis in Indian patients. Skin colour and melanin content do not confer any protective effect against allergic sensitisation.',
  },
  {
    myth: 'If a rash goes away after a few days, no treatment was needed and none is required in future',
    truth: 'Self-resolution of a rash does not mean treatment was unnecessary — it means the immune response subsided on its own timeline. Without intervention, the itch-scratch cycle during those days causes unnecessary skin barrier damage and scarring risk. More importantly, self-resolution without identifying the trigger means the next exposure will produce the same or a more intense reaction. Treating symptoms promptly and identifying allergen triggers are both important parts of managing recurrent skin allergies.',
  },
];

const faqs = [
  {
    q: 'Can I use CALAFINE Lotion on my face for an allergic rash?',
    a: 'Yes, CALAFINE Lotion is safe for facial use on allergic rashes, contact dermatitis, and hives. Apply a thin layer to the affected area, avoiding the immediate eye area. The calamine base is gentle enough for facial skin. However, if the rash is on the eyelids or immediate periocular area, consult a dermatologist before applying any topical product to that zone.',
  },
  {
    q: 'How quickly does calamine lotion relieve itching?',
    a: 'The cooling, itch-relieving effect of CALAFINE Lotion is typically noticeable within two to five minutes of application, as the aqueous phase of the lotion evaporates from the skin surface. This initial cooling directly counteracts the itch sensation. The underlying anti-inflammatory action of zinc oxide takes longer — beginning to reduce histamine-driven inflammation over the first one to two hours of contact.',
  },
  {
    q: 'Is CALAFINE Lotion safe to use during pregnancy?',
    a: 'Topical calamine lotion — applied to the skin surface in standard therapeutic amounts — is generally considered safe during pregnancy. Systemic absorption from topical calamine application is minimal. However, as with any new product used during pregnancy, it is best practice to consult your obstetrician or dermatologist before beginning use, particularly if you are in the first trimester or have a history of skin sensitivity.',
  },
  {
    q: 'Can I use this lotion for my child\'s heat rash or insect bites?',
    a: 'Calamine lotion has an exceptional paediatric safety record and has been used on children — including infants — for over a century. CALAFINE Lotion is appropriate for children\'s heat rash, insect bite reactions, and mild allergic rashes. Apply a thin layer to the affected area, ensure the child does not ingest the lotion, and avoid application near the mouth or eyes. For children under two, consult a paediatrician before use.',
  },
  {
    q: 'How often should I apply CALAFINE Lotion for a skin rash?',
    a: 'For acute allergic rashes and hives, apply three to four times daily — typically morning, afternoon, evening, and before bed. For insect bite relief, apply as needed whenever itching intensifies. There is no strict maximum frequency for external use, but allowing each application to dry fully before reapplying is important for consistent therapeutic contact. If symptoms have not improved after five to seven days of consistent application, seek medical advice.',
  },
  {
    q: 'Can I use CALAFINE Lotion with antihistamine tablets?',
    a: 'Yes, topical CALAFINE Lotion and oral antihistamines work through different mechanisms and are fully compatible. Oral antihistamines reduce the systemic histamine load driving the allergic response; topical calamine addresses the local skin-level symptoms. Using both simultaneously provides more complete relief for moderate allergic reactions than either approach alone. Consult a pharmacist or doctor if you are taking other medications.',
  },
  {
    q: 'Will calamine lotion stain my clothes?',
    a: 'Calamine lotion can leave a pink-white residue on fabrics, particularly darker clothing, if fabric contact occurs before the lotion has fully dried on the skin. Allow the lotion to dry completely — which takes two to four minutes — before dressing. If residue does transfer to clothing, it typically washes out with standard laundering. Wearing light-coloured, loose cotton clothing during application is recommended, particularly for torso or limb rashes in India\'s heat.',
  },
  {
    q: 'Is CALAFINE Lotion different from regular calamine lotion?',
    a: 'CALAFINE Lotion uses the clinically proven calamine base while being formulated specifically for Indian skin conditions — the climate, skin types, and rash presentations most common in the Indian population. The result is a product that delivers the established therapeutic benefits of calamine in a texture and formulation appropriate for India\'s heat and humidity, without unnecessary additives that could themselves trigger reactions in sensitive skin.',
  },
  {
    q: 'Can I use CALAFINE Lotion for eczema flares?',
    a: 'CALAFINE Lotion provides effective symptom relief — particularly itch control and anti-inflammatory action — during mild to moderate eczema flares. It is not a cure for eczema, which is a chronic condition requiring ongoing dermatological management. During an acute flare, calamine application can significantly reduce the itch-scratch cycle that worsens eczema patches and delays healing. Use it as part of a broader eczema management plan developed with your dermatologist.',
  },
  {
    q: 'What should I do if my rash does not respond to calamine lotion after a week?',
    a: 'A rash that does not improve within five to seven days of consistent calamine application, or that worsens, spreads significantly, develops blisters, crusting, or oozing, or is accompanied by fever, swollen glands, or any systemic symptoms, requires medical evaluation. These signs indicate a reaction potentially beyond the scope of over-the-counter topical management — including possible secondary bacterial infection, a more severe allergic response, or a skin condition requiring prescription treatment.',
  },
];

export default function CalafinAllergyRashBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Skin Care · Allergy Relief · Rash Lotion · India Guide 2026</span>
            <h1 className={styles.heroTitle}>
              Best Lotion for
              <br />
              <em>Skin Allergies &amp; Rashes</em>
              <br />
              <span className={styles.heroTitleSub}>The Complete 2026 India Guide</span>
            </h1>
            <p className={styles.heroSub}>
              Skin allergies, hives, contact dermatitis, and heat rash affect hundreds of millions
              of Indians every year — made worse by tropical heat, pollution, hard water, and
              synthetic fabrics. This guide explains exactly what your skin is doing during an
              allergic reaction, why most people treat it incorrectly, and what actually works.
            </p>
            <div className={styles.heroMeta}>
              <span>⏱ 20 min read</span>
              <span>📅 April 2026</span>
              <span>📝 6,000+ words</span>
            </div>
            <div className={styles.heroActions}>
              
              <a  href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy CALAFINE Lotion on Amazon →
              </a>
              <span className={styles.heroSubNote}>Calamine-Based · Fragrance-Free · All Skin Types</span>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/calafine-lotion.png"
                alt="CALAFINE Lotion — Best Lotion for Skin Allergies and Rashes in India"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 420px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🌿 Calamine Active</span>
              <span>❄️ Instant Cooling</span>
              <span>🚫 Fragrance-Free</span>
              <span>✅ All Skin Types</span>
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
          <h2 className={styles.sectionTitle}>Why Skin Allergies and Rashes Are an Epidemic in India — and Getting Worse</h2>
          <p>
            You wake up with an angry red patch on your forearm. Or your neck breaks out in hives
            after wearing a new synthetic kurta in the afternoon heat. Or your child comes home
            from school with a cluster of itchy welts from mosquito bites that have swollen to the
            size of five-rupee coins. Or the underside of your watch strap produces a neat rectangle
            of weeping, intensely itchy skin every summer. These are not rare experiences. They are,
            in various forms, the daily reality of skin allergy and rash management for hundreds of
            millions of Indian adults and children.
          </p>
          <p>
            The scale of the problem is genuinely significant. Dermatological surveys across Indian
            cities consistently identify allergic skin conditions — including allergic contact
            dermatitis, atopic eczema, urticaria (hives), and heat-related skin disorders — among
            the top five reasons for outpatient dermatology visits. Prickly heat alone, which is
            classified as a disorder of sweat gland function triggered by heat and humidity, affects
            an estimated 30–40% of the Indian population at some point during the hot months. These
            are not conditions that resolve gracefully without intervention — the itch-scratch
            cycle that characterises most of them, if unmanaged, leads to secondary bacterial
            infection, post-inflammatory hyperpigmentation, and progressive barrier damage that
            makes future reactions more severe.
          </p>
          <p>
            India&apos;s environment creates a uniquely aggressive context for skin reactivity. The
            combination of tropical heat and humidity — sustained for months in coastal cities like
            Chennai, Mumbai, and Kochi — creates the conditions for perpetual sweat gland stress,
            friction-related skin breakdown, and the proliferation of skin microorganisms that
            trigger inflammatory reactions. The severe air pollution in North Indian cities like
            Delhi and Lucknow adds a layer of particulate and chemical allergens that settle on
            skin daily, sensitising even previously non-reactive individuals over years of exposure.
            The quality of urban water supplies — predominantly hard, high in chlorine, and
            variable in pH — disrupts the skin&apos;s acid mantle with every wash, gradually
            compromising the barrier that is the first line of defence against allergens.
          </p>
          <p>
            Synthetic fabrics — which dominate fast fashion across all price points in India —
            contribute significantly to the contact dermatitis burden. The dyes used in bright,
            saturated synthetic textiles (particularly disperse dyes in polyester) are among the
            most common contact allergens in Indian dermatology practice. Wearing a brightly
            coloured synthetic garment in the heat, where sweat facilitates dye release and skin
            contact, is a recipe for contact dermatitis in sensitised individuals. The nickel
            content of costume jewellery — earrings, necklaces, nose rings, bangles — produces
            some of the most predictable and consistent contact allergic reactions seen in Indian
            clinics, affecting women across all age groups and social demographics.
          </p>
          <p>
            The management of skin allergies in India is frequently suboptimal. The most common
            response — both self-medicated and clinically prescribed — is a topical corticosteroid
            cream, which provides rapid relief but carries significant risks with the kind of
            long-term, unsupervised use it receives in the Indian population. Home remedies
            (coconut oil, turmeric paste, neem paste) are widely used and variably effective, with
            some providing mild relief and others — particularly when applied to broken or highly
            reactive skin — worsening the reaction. The category of evidence-based, safe,
            clinically effective over-the-counter options is smaller than it should be — and
            calamine-based formulations represent its best-established member.
          </p>
          <p>
            This guide is a complete resource for understanding and managing skin allergies and
            rashes in the Indian context. It covers the immunological basis of allergic skin
            reactions, the specific rash types most common in Indian conditions, a complete
            assessment of which skin types and presentations benefit most from calamine-based
            treatment, a detailed breakdown of what makes a lotion genuinely effective versus
            cosmetically marketed, and a step-by-step application protocol that maximises
            therapeutic outcome. If you have been reaching for the wrong product, using it
            incorrectly, or simply frustrated by reactions that keep recurring — this guide
            will change how you approach your skin&apos;s response to the world around it.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ─────────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of Skin Allergies — What Is Actually Happening in Your Skin</h2>

          <h3 className={styles.subHeading}>The Immune Mechanism Behind Allergic Skin Reactions</h3>
          <p>
            An allergic skin reaction is not, despite how it might feel, your skin misbehaving —
            it is your immune system performing exactly the function it evolved to perform, but in
            response to a substance that poses no actual biological threat. The mechanism begins
            with <strong>sensitisation</strong>: on a first exposure to a particular allergen
            (a metal ion, a chemical compound, a plant protein), specialised immune cells called
            Langerhans cells in the skin&apos;s epidermis capture the allergen, process it, and
            present it to T-lymphocytes. The T-lymphocytes become sensitised — they &quot;learn&quot;
            to recognise this specific allergen as a threat.
          </p>
          <p>
            On all subsequent exposures to the same allergen, the sensitised T-lymphocytes mount
            an immediate immune response: releasing cytokines that trigger local inflammation,
            activating mast cells that release histamine, and recruiting other immune cells to
            the area. It is histamine — the central mediator of most allergic responses — that
            produces the classic triad of allergic skin symptoms: vasodilation (redness), increased
            vascular permeability (swelling), and direct stimulation of cutaneous nerve endings
            (itch). This mechanism is identical whether the allergen is nickel, a fragrance
            compound, pollen, an insect venom component, or a synthetic fabric dye.
          </p>

          <h3 className={styles.subHeading}>Why Indian Skin Is Particularly Vulnerable to Sensitisation</h3>
          <p>
            The skin barrier — the stratum corneum — is the primary defence against allergen
            penetration and sensitisation. A healthy, intact barrier prevents most contact
            allergens from reaching the Langerhans cells in sufficient concentration to trigger
            sensitisation. Barrier compromise — from any cause — dramatically increases the risk
            of sensitisation on allergen exposure. Indian skin faces several barrier-compromising
            factors at higher frequency and intensity than populations in more temperate climates.
          </p>
          <p>
            Chronic sun exposure degrades the lipid matrix of the stratum corneum over years,
            progressively increasing its permeability. Hard water washing — which deposits
            calcium and magnesium salts on the skin surface — disrupts the acid mantle and
            physically damages the barrier with every cleansing episode. Sweat-driven skin
            maceration (prolonged dampness) in humid conditions softens the stratum corneum,
            making it significantly more permeable to allergens than dry skin. Each of these
            factors is endemic in large portions of the Indian population, explaining the
            high prevalence of contact sensitisation observed in Indian dermatological surveys.
          </p>

          <h3 className={styles.subHeading}>The Itch-Scratch Cycle and Why Breaking It Matters</h3>
          <p>
            The single most damaging behavioural consequence of an allergic rash is scratching.
            Scratching provides momentary relief by substituting a mild pain signal for the itch
            signal at the nerve level — but it simultaneously damages the stratum corneum,
            creates micro-abrasions that admit bacteria, releases more inflammatory mediators
            from damaged cells, and triggers <strong>neuroimmune amplification</strong>: the
            physical trauma of scratching causes nerve endings in the area to release neuropeptides
            like substance P that directly activate mast cells, causing additional histamine
            release and intensifying the very itch it was meant to relieve.
          </p>
          <p>
            This is why the itch from an allergic rash tends to worsen over the first hours after
            onset rather than settling — and why breaking the itch-scratch cycle with a topical
            anti-itch agent is not merely a comfort measure but a genuine therapeutic intervention.
            Every episode of scratching extends the duration of the reaction, increases the risk
            of secondary bacterial infection (which requires antibiotic treatment), and adds to
            the post-inflammatory hyperpigmentation that is particularly problematic in darker
            Indian skin tones, where PIH is both more pronounced and more persistent than in
            lighter skin types.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> Post-inflammatory hyperpigmentation (PIH) — the dark
              marks left after an allergic rash or scratch episode heals — is significantly more
              pronounced and persistent in Indian skin types (Fitzpatrick Types IV–VI) than in
              lighter skin. Every episode of scratching that breaks the skin barrier increases
              the PIH risk. Effective, early topical management of allergic rashes is therefore
              not just about relieving discomfort — it is directly relevant to preventing the
              long-term pigmentation consequences that can persist for months after the rash itself
              has resolved. To understand how moisturisation supports skin barrier repair between
              allergy episodes, read our{' '}
              <Link
                href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
                className={styles.internalLink}
              >
                guide to the best moisturiser for combination skin
              </Link>
              {' '}which covers barrier repair in depth.
            </div>
          </div>
        </section>

        {/* ─── TYPES ───────────────────────────────────────────────────────────── */}
        <section id="types" className={styles.section}>
          <h2 className={styles.sectionTitle}>Types of Rashes and Allergic Reactions Most Common in India</h2>

          <h3 className={styles.subHeading}>Contact Dermatitis — Allergic and Irritant</h3>
          <p>
            Contact dermatitis is the most common form of allergic rash seen in Indian dermatology
            practice, and it comes in two mechanistically distinct forms. <strong>Allergic contact
            dermatitis</strong> (ACD) is a true immune-mediated reaction — it requires prior
            sensitisation and produces a delayed reaction (typically 24–72 hours after allergen
            contact) characterised by intense itch, redness, blistering, and oozing at the
            contact site. Common Indian triggers include nickel (jewellery), rubber (elastic
            waistbands, sandal straps, latex gloves), paraphenylenediamine (PPD) in hair dyes,
            and certain preservatives in cosmetics and skincare products.
          </p>
          <p>
            <strong>Irritant contact dermatitis</strong> (ICD) is a non-immune reaction to direct
            chemical damage — it does not require sensitisation and can occur on first exposure
            in sufficient concentration. Common Indian triggers include detergent residue on
            clothes (particularly from high-concentration enzyme detergents), harsh cleaning
            chemicals, and prolonged contact with wet cement or construction materials (particularly
            relevant to India&apos;s large construction workforce, where cement dermatitis is an
            occupational health concern). While the mechanism differs from true allergy, the
            appearance and symptom profile of ICD overlap significantly with ACD, and both respond
            well to calamine-based topical treatment for symptomatic relief.
          </p>

          <h3 className={styles.subHeading}>Urticaria (Hives) — Acute and Chronic</h3>
          <p>
            Urticaria — characterised by raised, intensely itchy wheals (hives) that appear
            suddenly and may move from area to area — is among the most distressing allergic skin
            presentations. Acute urticaria (lasting less than six weeks) is most commonly triggered
            by food allergens (shellfish, nuts, eggs), medications, infections, or physical triggers
            (pressure, cold, exercise). Chronic urticaria (lasting more than six weeks) has an
            identifiable trigger in only a minority of cases; most chronic urticaria is classified
            as idiopathic — meaning the immune mechanism driving it is active without an
            identifiable external allergen.
          </p>
          <p>
            In Indian populations, food-triggered acute urticaria is common, with shellfish reactions
            particularly prevalent in coastal communities. Medication-triggered urticaria — from
            antibiotics, NSAIDs, and certain Ayurvedic formulations containing heavy metal
            compounds — is a growing concern. Calamine lotion addresses the cutaneous symptoms
            of urticaria effectively; systemic antihistamines are additionally required for
            moderate to severe episodes and for addressing any systemic components of the reaction.
          </p>

          <h3 className={styles.subHeading}>Miliaria — Prickly Heat and Heat Rash</h3>
          <p>
            Miliaria — commonly known as prickly heat or ghamori in Hindi — is caused by the
            obstruction of eccrine sweat glands, leading to sweat retention in the skin layers.
            It presents as small, red papules or vesicles accompanied by a burning, prickling
            sensation that is characteristic and distinctive. Miliaria rubra (the most common
            form in adults) involves sweat retention at the level of the epidermis and produces
            the visible red papules. Miliaria profunda (deeper retention) produces a more extensive,
            flesh-coloured rash without the surface redness.
          </p>
          <p>
            Prickly heat affects virtually every demographic during India&apos;s pre-monsoon months
            — it is not limited to infants or to those with particularly sensitive skin. The
            combination of high ambient temperature, intense physical activity (or simply the
            unavoidable physical activity of commuting and daily life in tropical Indian cities),
            and occlusive clothing creates the sweat retention conditions necessary for miliaria
            regardless of an individual&apos;s baseline skin sensitivity. Calamine lotion is
            the treatment of choice for prickly heat: its moisture-absorbing properties address
            the wet skin environment that maintains sweat gland occlusion, while its anti-inflammatory
            and cooling action provides immediate symptom relief.
          </p>

          <h3 className={styles.subHeading}>Atopic Dermatitis (Eczema) Flares</h3>
          <p>
            Atopic dermatitis — a chronic, relapsing-remitting inflammatory skin condition
            characterised by intense itch, dry skin, and periodic flares — affects approximately
            2–5% of Indian adults and a higher proportion of Indian children. It is fundamentally
            a disorder of skin barrier function (driven by mutations in genes like filaggrin that
            maintain barrier integrity) that allows allergen penetration and triggers dysregulated
            immune responses. Eczema is not curable with topical treatment alone, but flare
            management is essential to prevent the skin damage and PIH that accumulate over years
            of inadequately controlled disease.
          </p>
          <p>
            During flares — particularly mild to moderate ones — calamine lotion provides
            effective itch control and anti-inflammatory support that reduces the need for topical
            corticosteroids, which carry the skin-thinning risks described elsewhere in this guide.
            Used consistently during a flare, it can meaningfully reduce the severity and duration
            of the episode without adding corticosteroid load to skin that is already damaged by
            the underlying condition.
          </p>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Skin Problem — And the Specific Solution</h2>
          <p className={styles.sectionIntro}>
            The four most common rash and allergy presentations among Indian adults and children —
            each with a direct mechanism of action for why calamine-based treatment addresses it.
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
            CALAFINE Lotion is designed for broad skin type compatibility. Here is a precise
            assessment of how it interacts with each major skin type for maximum effectiveness.
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
          <h2 className={styles.sectionTitle}>CALAFINE Lotion — Complete Feature Breakdown</h2>

          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              Calamine-Based. Fragrance-Free. Clinically Established. India-Ready.
            </p>
            <p className={styles.midCtaSub}>
              Immediate itch relief and anti-inflammatory action for every allergic rash and skin reaction.
            </p>
            
            <a  href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get CALAFINE Lotion on Amazon — Fast Delivery →
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
              between a <em>soothing lotion</em> and a <em>therapeutic anti-allergy lotion</em>.
              A soothing lotion — typically a moisturiser with aloe vera or chamomile — provides
              surface-level comfort without addressing the underlying inflammatory mechanism.
              CALAFINE Lotion, with its zinc oxide active base, is a therapeutic lotion: it acts
              on the immune-mediated inflammatory process driving the rash, not merely on the
              surface sensation. The distinction matters when choosing a product for genuine
              allergic reactions rather than simple skin dryness or minor irritation.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Application Guide</h2>
          <p className={styles.sectionIntro}>
            Technique determines outcome with calamine lotion as much as with any other
            dermatological product. Follow this protocol precisely for maximum relief.
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
            💡 <strong>Pro Tip:</strong> For heat rash on the torso or back — common in India&apos;s
            hot months — apply CALAFINE Lotion after a cool shower, while the skin is still
            slightly cool, and stand in front of a fan while the lotion dries. The combination
            of evaporative cooling from the fan and the lotion&apos;s own cooling mechanism produces
            dramatically faster itch relief than application in a closed, warm room. Wear loose,
            breathable cotton immediately after — synthetic fabrics against freshly applied lotion
            both impede drying and risk further allergic reaction. For guidance on maintaining
            healthy facial skin between allergy episodes, our{' '}
            <Link
              href="/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026"
              className={styles.internalLink}
            >
              complete guide to calamine lotion uses and benefits
            </Link>
            {' '}covers the full therapeutic scope of this ingredient.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>Realistic Results Timeline — What to Expect and When</h2>
          <p className={styles.sectionIntro}>
            Allergic reactions follow biological timelines. This is an honest account of what
            consistent CALAFINE Lotion application delivers at each stage of an allergic episode.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — What to Look for in an Allergy and Rash Lotion in India</h2>
          <p className={styles.sectionIntro}>
            The Indian market is saturated with products claiming to treat skin allergies. Here
            is the evidence-based framework for identifying a product that actually delivers —
            and why each criterion matters for Indian skin and conditions.
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

          <h3 className={styles.subHeading}>Common Mistakes People Make When Buying Rash Lotions in India</h3>
          <p>
            The most consequential buying mistake is reaching for a steroid cream as a first
            response to any skin rash. In India, the easy availability of prescription-strength
            topical corticosteroids (including potent molecules like clobetasol and betamethasone)
            without prescription creates a pattern of routine, unsupervised use that produces
            serious dermatological consequences. The skin thinning, vascular damage, and rebound
            flaring associated with prolonged topical steroid use — consequences that take months
            to develop and years to reverse — are entirely avoidable for the class of rashes
            (mild to moderate allergic reactions, heat rash, contact dermatitis) that respond
            adequately to calamine-based treatment. Reserving steroids for situations where they
            are genuinely necessary is both safer and produces better long-term skin outcomes.
          </p>
          <p>
            The second mistake is selecting a product based on marketing claims that use
            therapeutic language without therapeutic actives. Products marketed as &quot;soothing,&quot;
            &quot;anti-itch,&quot; or &quot;allergy-relief&quot; that contain only moisturising ingredients —
            glycerin, aloe vera, shea butter — without a clinically recognised anti-inflammatory
            active are providing symptomatic comfort, not therapeutic treatment. They are not wrong
            products, but they are wrong-category purchases when the problem requires a therapeutic
            response. Reading ingredient lists and identifying the active before purchasing is
            a non-negotiable step.
          </p>
          <p>
            The third mistake is discontinuing treatment too early. Many patients stop applying a
            rash lotion as soon as the visible redness and the worst of the itch has subsided —
            typically after two to three days. The skin barrier has not repaired itself in this
            time; the inflammatory process has reduced but not resolved. Continuing application
            for the full recommended course (until the skin is visually normal and symptom-free
            for 24 hours) prevents the relapse that inconsistent treatment almost always produces.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              Evidence-based. Safe. Built for India&apos;s skin realities.
            </p>
            <p className={styles.midCtaSub}>
              CALAFINE Lotion — the right active, the right formulation, the right choice for
              Indian skin allergies and rashes.
            </p>
            
            <a  href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop CALAFINE Lotion on Amazon →
            </a>
          </div>
        </section>

        {/* ─── WHO NEEDS THIS ──────────────────────────────────────────────────── */}
        <section id="who-needs" className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Needs CALAFINE Lotion Most</h2>
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
            Allergy and rash management is one part of a complete skin health strategy.
            Build a routine that protects, nourishes, and repairs — year round.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🌿</span>
              <div>
                <p className={styles.relatedCardTitle}>Calamine Lotion Uses &amp; Benefits — 2026 Complete Guide</p>
                <p className={styles.relatedCardSub}>Everything calamine does — and why CALAFINE is the modern upgrade</p>
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
                <p className={styles.relatedCardSub}>Repair your skin barrier between allergy episodes with the right moisturiser</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link
              href="/blog/best-sunscreen-oily-skin-india-spf-guide"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>☀️</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Sunscreen for Oily Skin India 2026</p>
                <p className={styles.relatedCardSub}>Protect reactive skin from UV damage that worsens allergic sensitivity</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Skin Allergy Myths vs. Truth — What Indian Consumers Get Wrong</h2>
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

        <RelatedProduct slug="calafine-calamine-lotion" />

        {/* ─── FAQ ─────────────────────────────────────────────────────────────── */}
        <section id="faq" className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions About Skin Allergy and Rash Lotion</h2>
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
          <h2 className={styles.bottomCtaTitle}>Your Skin Deserves Proper Relief — Not a Temporary Mask</h2>
          <p>
            Skin allergies and rashes in India are not going away — the environmental, climatic,
            and dietary conditions that drive them are structural features of Indian life. What
            changes is how effectively you manage them. CALAFINE Lotion brings over a century of
            clinical evidence behind calamine into a formulation built for the realities of Indian
            skin: the heat, the humidity, the reactivity, and the need for a product that is
            genuinely safe to use as often as symptoms demand, without the risks that come with
            steroid dependency.
          </p>
          
          <a  href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy CALAFINE Lotion on Amazon →
          </a>
          <p className={styles.bottomNote}>
            All Skin Types · Fragrance-Free · Calamine Active · Fast Delivery Available Across India
          </p>
        </section>

      </div>
    </article>
  );
}