import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './fresholite-acne-face-wash-blog.module.css';

export const metadata: Metadata = {
  title: 'Best Face Wash for Acne-Prone Skin in India 2026 — Complete Guide',
  description:
    'Find the best face wash for acne-prone skin in India. Salicylic acid, neem & vitamin C formula clears breakouts, controls oil & prevents pimples. Shop now.',
  keywords: [
    'best face wash for acne prone skin in India',
    'acne face wash India',
    'face wash for pimples India',
    'salicylic acid face wash India',
    'neem face wash for acne',
    'best face wash for oily acne skin',
    'pimple clearing face wash India',
    'face wash for acne scars India',
    'anti acne face wash India 2026',
    'face wash for acne and oily skin',
    'best cleanser for acne India',
    'face wash for teenage acne India',
    'acne control face wash India',
    'face wash for whiteheads blackheads India',
    'vitamin C face wash acne India',
    'face wash for cystic acne India',
    'gentle face wash for acne prone skin',
    'face wash for acne for men India',
    'face wash for acne for women India',
    'best face wash for breakouts India',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/best-face-wash-acne-prone-skin-india',
  },
  openGraph: {
    title: 'Best Face Wash for Acne-Prone Skin in India 2026 — Complete Guide',
    description:
      'Clear breakouts with India\'s most effective acne face wash. Salicylic acid + neem + vitamin C — the complete 2026 guide for every acne type and skin tone.',
    images: [
      {
        url: '/images/fresholite-acne-face-wash.jpg',
        width: 1200,
        height: 630,
        alt: 'FreshOLite Acne Face Wash for Acne-Prone Skin India',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/05MDM9cZ';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Acne Is So Persistent in India' },
  { id: 'science', label: 'The Science of Acne — How It Actually Forms' },
  { id: 'ingredients', label: 'Key Ingredients That Clear Acne' },
  { id: 'problems-grid', label: 'Your Acne Problem — And the Specific Fix' },
  { id: 'skin-type-guide', label: 'Complete Skin Type Suitability Guide' },
  { id: 'product-deep-dive', label: 'FreshOLite Acne Face Wash — Full Breakdown' },
  { id: 'how-to-use', label: 'Step-by-Step Cleansing Protocol' },
  { id: 'results-timeline', label: 'Realistic Results Timeline' },
  { id: 'buying-guide', label: 'Complete Buying Guide for India' },
  { id: 'who-needs', label: 'Who Needs This Face Wash Most' },
  { id: 'related', label: 'Complete Your Skincare Routine' },
  { id: 'myths', label: 'Acne Face Wash Myths vs. Truth' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🫧',
    problem: 'Excess Sebum and Clogged Pores',
    desc: 'India\'s humidity — especially in cities like Mumbai, Chennai, and Kolkata — sends sebaceous glands into overdrive. Excess oil mixes with dead skin cells and environmental pollutants, forming a thick plug in the follicle that creates the perfect anaerobic environment for acne bacteria to thrive.',
    solution: 'Salicylic acid is oil-soluble and uniquely capable of penetrating inside the follicle to dissolve the lipid-based sebum plug. It exfoliates the pore lining from within, breaking the cycle of blockage that generates both whiteheads and blackheads.',
  },
  {
    icon: '🔴',
    problem: 'Inflammatory Papules and Pustules',
    desc: 'When Cutibacterium acnes bacteria colonise a clogged follicle, the immune system mounts an inflammatory response — producing the red, painful, pus-filled lesions that most people recognise as acne. This inflammatory phase is what causes post-acne marks and scarring if improperly managed.',
    solution: 'Neem extract contains nimbidin and gedunin — compounds with documented antibacterial and anti-inflammatory properties that reduce the bacterial load in the follicle and calm the surrounding tissue inflammation, accelerating resolution without aggressive chemical irritation.',
  },
  {
    icon: '🌑',
    problem: 'Post-Acne Dark Spots and Hyperpigmentation',
    desc: 'Indian and South Asian skin tones are particularly prone to post-inflammatory hyperpigmentation (PIH) — the dark marks left after an acne lesion resolves. This is a direct consequence of melanocyte overstimulation during the inflammatory phase, and it often persists for months after the active breakout has cleared.',
    solution: 'Vitamin C inhibits tyrosinase — the enzyme responsible for melanin synthesis — and provides antioxidant protection against UV-induced darkening of post-acne marks. Daily use gradually fades existing PIH and prevents new marks from deepening.',
  },
  {
    icon: '💧',
    problem: 'Dehydration and Barrier Damage from Harsh Cleansers',
    desc: 'A pervasive mistake in Indian acne skincare is using aggressive, high-sulphate cleansers or soap bars that strip the skin completely of its natural oils. This destroys the acid mantle, triggers reactive sebum overproduction — paradoxically worsening oiliness and acne — and leaves skin tight, sensitised, and inflamed.',
    solution: 'A properly formulated acne cleanser removes excess sebum, pollutants, and makeup without disrupting the skin\'s moisture barrier. The cleansing base must be mild enough to preserve the acid mantle while the actives do their targeted work on the follicle level.',
  },
];

const skinTypes = [
  {
    type: 'Oily Acne-Prone',
    icon: '💦',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'The primary target user. Salicylic acid controls sebum production and clears pores while the formula deep-cleanses without over-stripping. Use morning and evening for best results.',
  },
  {
    type: 'Combination Acne-Prone',
    icon: '⚖️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Addresses the T-zone breakout pattern characteristic of combination skin without drying out the cheek and jaw areas. Ideal twice-daily use with a light moisturiser following.',
  },
  {
    type: 'Dry Acne-Prone',
    icon: '🏜️',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'The gentle base makes this suitable for dry skin that also experiences breakouts — a combination more common than many people realise. Use once daily, in the evening only, and always follow with a non-comedogenic moisturiser.',
  },
  {
    type: 'Sensitive Acne-Prone',
    icon: '🌸',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'The neem and aloe components provide soothing counterbalance to the actives. Start with every other day use and work up to daily. Avoid using with other active-ingredient products simultaneously.',
  },
  {
    type: 'Normal with Breakouts',
    icon: '✅',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Effective for managing periodic hormonal breakouts without disturbing a generally balanced skin barrier. Use daily as a preventive measure during breakout-prone periods.',
  },
  {
    type: 'Mature Acne-Prone',
    icon: '🕐',
    verdict: 'With Caution',
    verdictClass: 'caution',
    explanation: 'Adult acne is common in Indian women over 30. This formula is effective but should be used once daily, with a focus on moisturisation post-cleanse to address the concurrent concern of skin thinning and dryness that accompanies mature acne.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Salicylic Acid: The Pore-Penetrating Active',
    body1: `Salicylic acid — a beta-hydroxy acid (BHA) derived originally from willow bark — is the gold standard ingredient in acne cleansing, and its biochemical profile explains precisely why. Unlike alpha-hydroxy acids (AHAs), which are water-soluble and work on the surface of the skin, salicylic acid is lipophilic: it dissolves in oil. This single chemical property is what makes it uniquely effective for acne treatment, because it allows the molecule to penetrate directly into the oil-filled follicle and work from the inside out.

Once inside the pore, salicylic acid performs two critical functions simultaneously. First, it acts as a keratolytic — breaking down the corneocyte bonds that hold dead skin cells together and cause them to clump with sebum into the follicular plugs that become comedones. Second, it has direct anti-inflammatory properties, suppressing the prostaglandin synthesis that amplifies the redness and swelling around active breakouts. This dual action — clearing existing blockages while calming active inflammation — is what no surface-level cleanser can replicate, regardless of how aggressively it foams or how strongly it smells of menthol.`,
    body2: `In the Indian context, salicylic acid's effectiveness is further amplified by the specific acne pattern that Indian skin predominantly displays. The combination of high ambient humidity, elevated sebum production rates, and heavy pollution exposure creates a pore-clogging environment that is particularly well-matched to salicylic acid's mechanism of dissolving lipid-based blockages. Regular use establishes a prophylactic barrier against the most common trigger of Indian urban acne — the accumulation of pollution particulates and excess sebum in follicles that are already primed by humidity to remain enlarged and accessible.`,
  },
  {
    number: '02',
    heading: 'Neem Extract: Ancient Antibacterial, Modern Science',
    body1: `Neem — Azadirachta indica — has been used in Indian dermatological tradition for centuries, but the modern scientific validation of its mechanisms is relatively recent and substantive. Neem leaf and bark extract contains over 40 documented bioactive compounds, the most relevant for acne being nimbidin, nimbin, nimbidol, gedunin, and quercetin. Multiple peer-reviewed studies have demonstrated that these compounds exhibit significant antibacterial activity against Cutibacterium acnes (formerly Propionibacterium acnes) — the primary bacterial pathogen responsible for inflammatory acne lesions.

The mechanism of neem's antibacterial action is membrane disruption: the terpenoid compounds in neem extract destabilise the bacterial cell membrane, reducing the organism's ability to replicate and colonise the follicular environment. This is fundamentally different from antibiotic-based acne treatments, which target specific bacterial metabolic pathways and against which resistance can develop. Neem's multi-compound mechanism of action makes bacterial resistance significantly less likely, which is clinically relevant in the context of India's already high levels of antibiotic resistance in dermatological bacteria.`,
    body2: `Beyond antibacterial action, neem's anti-inflammatory compounds — particularly quercetin and nimbidin — inhibit multiple inflammatory mediators including NF-κB and COX-2, reducing the immune response that converts a clogged pore into a painful, inflamed papule. This means neem extract is working at both the cause and consequence of the inflammatory acne cascade: reducing the bacterial population that triggers inflammation while simultaneously modulating the immune response that would otherwise amplify it. For Indian skin tones, where post-inflammatory hyperpigmentation is a serious secondary concern to active acne, this anti-inflammatory action is doubly important — the less intense and prolonged the inflammation, the less severe the PIH that follows.`,
  },
  {
    number: '03',
    heading: 'Vitamin C: Brightening, Antioxidant, and Anti-PIH',
    body1: `Vitamin C — L-ascorbic acid in its most bioavailable form — brings a dimension to this formulation that most acne-specific cleansers omit entirely: the treatment of the aftermath of acne, not just the acne itself. For Indian and South Asian skin tones, post-inflammatory hyperpigmentation is often described by dermatologists as "worse than the acne" — the dark marks that remain after a breakout resolves can persist for six months to a year without targeted intervention, and each subsequent breakout adds new marks before previous ones have faded.

Vitamin C addresses PIH through tyrosinase inhibition — blocking the enzyme that converts the amino acid tyrosine into melanin, the pigment responsible for the dark colour of post-acne marks. Consistent topical application of vitamin C has been shown in multiple clinical studies to gradually fade existing hyperpigmentation while preventing new melanin formation in areas where inflammation is active. For the majority of Indian acne sufferers — who are simultaneously managing active breakouts, healing lesions, and existing dark marks — a cleanser that delivers vitamin C with every wash creates a compounding brightening effect that a dedicated serum applied once daily cannot match in terms of frequency.`,
    body2: `The antioxidant function of vitamin C is equally important in the Indian urban context. Reactive oxygen species (ROS) — generated by UV radiation, pollution, and the inflammatory process of acne itself — accelerate skin ageing, worsen PIH, and compromise the skin barrier in ways that make acne harder to treat. Vitamin C neutralises these free radicals at the point of contact, providing a layer of environmental protection that is particularly valuable for working professionals in cities like Delhi, Mumbai, and Bengaluru who cannot avoid high pollution exposure during their daily commutes. This antioxidant shield, delivered twice daily through the cleansing step, creates cumulative protection that is difficult to replicate through less frequent application of other vitamin C products.`,
  },
  {
    number: '04',
    heading: 'Gentle Sulphate-Reduced Base: The Barrier-Preserving Foundation',
    body1: `The formulation framework that carries these actives to the skin is not a passive vehicle — it is itself a functional component of the product's effectiveness. The most common formulation error in acne cleansers is using a high-concentration sulphate surfactant base — typically sodium lauryl sulphate (SLS) — to achieve the dramatic foaming action that many consumers associate with deep cleansing. SLS is an aggressive anionic surfactant that disrupts the skin's lipid bilayer, removes not only excess sebum but also the ceramides and natural moisturising factors (NMF) that maintain the acid mantle, and leaves the stratum corneum temporarily permeable and vulnerable.

This disruption has a direct consequence for acne: a compromised acid mantle creates an environment where the skin's natural antimicrobial defence is reduced, where transepidermal water loss (TEWL) increases, and where the reactive sebum overproduction triggered by surface stripping paradoxically generates more acne-causing oil within hours of cleansing. The result is the well-documented phenomenon of skin that feels "squeaky clean" immediately after washing but returns to a shiny, oily state faster than ever — because the skin's homeostatic response is compensating aggressively for the perceived moisture deficit.`,
    body2: `A sulphate-reduced or mild-surfactant base — using gentler anionic or amphoteric surfactants — achieves effective cleansing of pollutants, excess sebum, and makeup residue without this barrier disruption. The skin returns to its natural moisture balance within minutes of rinsing rather than entering a stress-induced overproduction cycle. For Indian consumers using this cleanser twice daily in a humid climate, the preservation of the acid mantle between washes is what allows the salicylic acid, neem, and vitamin C actives to work in an optimally calibrated skin environment rather than a compromised, irritated one. Effective acne treatment is inseparable from effective barrier maintenance — and this formula prioritises both simultaneously.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Wet Face with Lukewarm Water',
    desc: 'Temperature matters. Hot water dilates capillaries and strips protective oils; cold water does not effectively open the follicle for cleansing. Lukewarm water is the correct temperature — it softens the sebum within the pore to make it extractable without stimulating reactive oil production or inflammatory flushing. Wet your entire face thoroughly before applying the cleanser.',
  },
  {
    num: '02',
    title: 'Dispense the Correct Amount',
    desc: 'A coin-sized amount — approximately 1–1.5 ml — is sufficient for a full face cleanse. More product does not mean more cleansing; it means more rinsing difficulty and a greater risk of leaving surfactant residue on the skin, which itself irritates. Dispense into the palm of one hand.',
  },
  {
    num: '03',
    title: 'Work Into a Lather on Your Palms First',
    desc: 'Before applying to your face, work the cleanser between your palms for 10–15 seconds to activate the formula and create an even lather. This distributes the active ingredients uniformly and prevents concentrated application of undiluted formula directly onto sensitive or active breakout areas.',
  },
  {
    num: '04',
    title: 'Apply with Circular Upward Motions — 60 Seconds Minimum',
    desc: 'Apply the lather to your face using gentle circular motions with your fingertips — not a cloth, brush, or sponge, which introduces bacteria and mechanical abrasion. Focus extra time on the T-zone (forehead, nose, chin) where sebum production is highest. The 60-second minimum contact time is not arbitrary — salicylic acid requires adequate dwell time on the skin to penetrate the follicle. Do not rush this step.',
  },
  {
    num: '05',
    title: 'Rinse Thoroughly with Lukewarm Water',
    desc: 'Rinse until no slipperiness remains on the skin surface — typically 20–30 seconds of active rinsing. Residual surfactant on the skin after washing is a significant irritant and one of the most common causes of the chronic redness that acne-prone skin users incorrectly attribute to their cleanser\'s active ingredients rather than to incomplete rinsing.',
  },
  {
    num: '06',
    title: 'Pat — Do Not Rub — Dry with a Clean Towel',
    desc: 'Gently pat the face dry with a clean, dedicated face towel. Rubbing the skin while it is wet causes mechanical micro-trauma, spreads bacteria from the towel across the face, and disrupts the freshly cleansed skin barrier. Use a clean section of towel each time, and wash your face towels frequently — they are a surprisingly significant source of acne-causing bacterial contamination.',
  },
];

const timeline = [
  {
    period: 'Days 1–3',
    title: 'Initial Purge and Adjustment',
    detail: 'Some users experience a mild purge in the first few days — minor increases in surface breakouts as salicylic acid accelerates the shedding of microcomedones that were forming beneath the surface. This is normal and resolves quickly. Skin may feel slightly tight if transitioning from a very rich cleanser; follow with a light non-comedogenic moisturiser.',
  },
  {
    period: 'Week 1–2',
    title: 'Pore Clarity and Oil Control',
    detail: 'Visible improvement in pore appearance and sebum control. The T-zone feels less oily throughout the day. Active whiteheads and blackheads begin to resolve. Skin looks cleaner and more uniform in texture. The tight, squeaky feeling of harsh cleansers is absent.',
  },
  {
    period: 'Week 3–4',
    title: 'Active Breakout Reduction',
    detail: 'Significant reduction in new papule and pustule formation. Existing active lesions heal faster with less post-inflammatory redness. Skin tone appears more even as vitamin C begins to address the shallowest post-acne marks. Pores appear visibly smaller due to reduced sebum congestion.',
  },
  {
    period: 'Week 6–8+',
    title: 'Clear Skin and PIH Fading',
    detail: 'Breakout frequency at its lowest since starting use. Post-inflammatory hyperpigmentation is measurably lighter — existing marks have faded significantly and new breakouts, when they occur, resolve without leaving the same depth of discolouration. Skin texture is smoother and more uniform. This is the phase where users most clearly see why daily-use actives outperform periodic treatments.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧪',
    title: 'Active Ingredient Transparency',
    body: 'Many Indian acne cleansers market themselves aggressively with "anti-acne" claims while listing their actives vaguely or burying them in a long ingredient list. The presence and concentration of salicylic acid should be clearly stated on the packaging — effective acne cleansers use salicylic acid in the 0.5% to 2% range. Products that list only vague "natural extracts" without specifying actives and concentrations are cosmetic products that cannot make meaningful claims about clearing acne. Read the ingredient list first, always.',
  },
  {
    icon: '🚫',
    title: 'Sulphate Content and Base Quality',
    body: 'Check whether sodium lauryl sulphate (SLS) is among the first three ingredients. If it is, the product\'s cleansing base is more aggressive than is appropriate for acne-prone skin that needs to preserve its barrier. A gentler surfactant base — using sodium laureth sulphate (SLES) at lower concentrations, cocamidopropyl betaine, or glucoside surfactants — delivers effective cleansing without the barrier disruption that makes reactive oiliness and chronic sensitivity worse over time.',
  },
  {
    icon: '🌿',
    title: 'Complementary Soothing Ingredients',
    body: 'An effective acne cleanser does not rely on actives alone. The presence of soothing and barrier-supporting ingredients — aloe vera extract, allantoin, panthenol (vitamin B5), or niacinamide — indicates a formulation that is designed to treat acne without creating the secondary problem of a compromised, inflamed skin barrier. In India\'s climate, where the skin is under constant environmental stress, a cleanser that simultaneously treats acne and supports the barrier is significantly more effective over time than one that only addresses the active breakout.',
  },
  {
    icon: '📋',
    title: 'Non-Comedogenic and Dermatologist-Tested Certification',
    body: 'For acne-prone skin specifically, non-comedogenic certification on a cleanser is a baseline requirement — not an added premium. Any ingredient in a cleanser that blocks pores is counterproductive for the precise skin type the product is targeting. Dermatologist-tested certification indicates that the formula has been assessed for appropriate tolerability across a range of skin types, including sensitive and reactive acne-prone skin, reducing the risk of adverse reactions that can worsen the acne cycle.',
  },
];

const whoNeeds = [
  { icon: '🧑', label: 'Teenagers with Hormonal Acne', desc: 'The surge in androgens during puberty drives sebaceous gland hyperactivity. A salicylic acid cleanser used twice daily forms the most critical first line of adolescent acne management.' },
  { icon: '👩', label: 'Women with Adult Hormonal Breakouts', desc: 'Jawline and chin breakouts driven by monthly hormonal fluctuations respond particularly well to consistent use of a BHA cleanser as a preventive daily routine.' },
  { icon: '👨', label: 'Men with Shaving-Related Acne', desc: 'Razor friction, ingrown hairs, and post-shave folliculitis create an acne-like breakout pattern that responds to the antibacterial and anti-inflammatory properties of neem and salicylic acid.' },
  { icon: '🏙️', label: 'Urban Commuters in High-Pollution Cities', desc: 'PM2.5 particles in Delhi, Mumbai, and Bengaluru penetrate follicles and oxidise sebum, directly triggering breakouts. A thorough cleanse with actives every evening is the essential first step in urban skincare.' },
  { icon: '🎓', label: 'Students Under Academic Stress', desc: 'Cortisol elevation from exam stress directly stimulates sebaceous glands. Students experiencing stress-related breakout flares benefit significantly from a consistent cleansing protocol with salicylic acid.' },
  { icon: '🌡️', label: 'Residents of High-Humidity Coastal Cities', desc: 'Ambient humidity in cities like Chennai, Mumbai, and Kochi keeps pores open and accelerates sebum flow, creating ideal conditions for comedone formation. Twice-daily BHA cleansing is particularly important in these climates.' },
  { icon: '💊', label: 'Post-Antibiotic Acne Sufferers', desc: 'Those who have cycled through oral antibiotics and experienced antibiotic-resistant acne recurrence benefit from neem\'s multi-mechanism antibacterial approach, which is not subject to the same resistance pathways.' },
  { icon: '✨', label: 'Anyone Managing PIH Alongside Active Acne', desc: 'The vitamin C component makes this cleanser particularly valuable for anyone whose primary concern is not just clearing current breakouts but preventing and fading the dark marks they leave on Indian skin tones.' },
];

const myths = [
  {
    myth: 'The more a face wash foams, the deeper it cleans',
    truth: 'Foam volume is determined by the concentration of sulphate surfactants — specifically SLS, which is a foaming agent, not a cleaning agent. Cleansing efficacy is a function of surfactant type and contact time, not foam quantity. High-foam cleansers tend to be more aggressive and barrier-disrupting than low-foam or gel formulas, making them counterproductive for acne-prone skin. A cleanser that foams modestly but contains the right actives will outperform a high-foam formula with no active ingredients.',
  },
  {
    myth: 'Washing your face more often will clear acne faster',
    truth: 'Twice daily — morning and evening — is the clinical recommendation for acne-prone skin cleansing. Washing more frequently than this strips the skin\'s natural moisture barrier, triggering reactive sebum overproduction that generates more acne within hours. If your skin feels clean and non-greasy after two washes daily, washing a third or fourth time will not improve your acne — it will worsen your skin\'s barrier integrity and oil balance.',
  },
  {
    myth: 'Natural and ayurvedic face washes are always better for acne',
    truth: 'Formulation matters more than whether ingredients are natural or synthetic. Many natural ingredients — coconut oil, certain plant butters, and even some essential oils — are highly comedogenic and actively worsen acne. Neem is effective and natural, but it works because of specific documented bioactive compounds, not simply because it is plant-derived. Effective acne treatment requires specific ingredients at effective concentrations, regardless of whether they originate from natural or synthetic sources.',
  },
  {
    myth: 'Acne face wash will dry out and age your skin',
    truth: 'This concern is valid only for formulations with an aggressive sulphate base and no soothing or barrier-protective co-ingredients. A well-formulated acne cleanser that uses gentle surfactants alongside actives like salicylic acid and vitamin C will not cause chronic dryness when used correctly — especially when followed by an appropriate non-comedogenic moisturiser. The skin feeling tight immediately after washing is a sign of a formulation problem, not an inevitable consequence of acne treatment.',
  },
  {
    myth: 'You should stop using acne face wash once breakouts clear',
    truth: 'Acne is a chronic condition in most affected individuals, meaning the underlying tendency toward excess sebum production and follicular hyperkeratinisation does not resolve simply because active lesions have cleared. Discontinuing acne-active cleansing when the skin appears clear typically results in a return of breakouts within weeks as the prophylactic effect is lost. Consistent daily use is the maintenance strategy — not an occasional treatment to be used only during flares.',
  },
  {
    myth: 'Scrubbing harder during cleansing removes more impurities from pores',
    truth: 'Physical scrubbing does not reach inside the follicle. Pores are not cleaned by external mechanical pressure — they are cleaned by chemical exfoliants like salicylic acid that dissolve the blockage from within. Aggressive scrubbing during cleansing causes surface micro-trauma, spreads bacterial contamination across the face, and breaks open pustules — seeding surrounding follicles with acne bacteria and dramatically worsening the breakout. Gentle circular pressure for the required contact time is the correct technique.',
  },
];

const faqs = [
  {
    q: 'Can I use this acne face wash twice a day?',
    a: 'Yes — twice daily (morning and evening) is the recommended frequency for acne-prone skin. Morning cleansing removes overnight sebum accumulation and prepares the skin for daytime sun protection. Evening cleansing removes the day\'s pollution, SPF residue, and sebum that has accumulated during the day. This is the most important wash. If your skin feels over-stripped with twice-daily use in the first week, begin with once daily (evening) and increase to twice daily after one week as your skin adjusts.',
  },
  {
    q: 'How long does it take for an acne face wash to work?',
    a: 'Expect meaningful improvement within two to four weeks of consistent use. The first week may include a mild purge — minor increases in surface breakouts as salicylic acid accelerates the clearance of microcomedones forming beneath the surface. This resolves quickly. Significant reductions in new breakout formation and post-acne marks fading become visible between weeks three and eight. The full effect of vitamin C on hyperpigmentation takes six to eight weeks to assess accurately. Do not judge the product on a less-than-four-week trial.',
  },
  {
    q: 'Is salicylic acid face wash safe for daily use?',
    a: 'At the concentrations used in over-the-counter face washes — typically 0.5% to 2% — salicylic acid is safe for daily use on most skin types. The most common side effect of daily use is mild dryness in the first few weeks, which resolves as the skin adjusts and is managed effectively by following with a non-comedogenic moisturiser. People with sensitive skin should begin with once-daily use and build up. Those who are pregnant should consult a dermatologist before beginning any salicylic acid use, as high systemic doses are contraindicated during pregnancy.',
  },
  {
    q: 'Can men use this acne face wash?',
    a: 'Absolutely. Acne in men is driven by the same mechanisms as in women — excess sebum, follicular hyperkeratinisation, and bacterial colonisation — and responds to the same active ingredients. Men typically have thicker skin, larger pores, and higher sebum production than women due to higher androgen levels, which makes salicylic acid particularly effective for the male acne profile. The formula is designed for use by both men and women without modification to the routine.',
  },
  {
    q: 'Can I use this with a moisturiser after?',
    a: 'Yes — and you should. For acne-prone skin, following cleansing with a light, non-comedogenic moisturiser is essential, not optional. Skipping moisturiser after cleansing triggers reactive sebum overproduction that can worsen acne. Look for moisturisers labelled non-comedogenic, oil-free, or specifically formulated for acne-prone skin. Gel-cream textures and moisturisers containing niacinamide, hyaluronic acid, or ceramides are ideal companion products for an acne cleanser routine.',
  },
  {
    q: 'Will it help with blackheads and whiteheads specifically?',
    a: 'Yes — salicylic acid\'s lipophilic nature means it is specifically effective against comedones (blackheads and whiteheads), which are fundamentally oil-based follicular plugs. Consistent daily use dissolves the sebum-dead skin cell blockage that forms comedones and prevents new ones from forming. Improvement in blackhead visibility — particularly on the nose, chin, and forehead — is typically one of the earliest visible effects, often noticeable within two weeks of consistent use.',
  },
  {
    q: 'Can I use this face wash if I also use a retinol or vitamin C serum?',
    a: 'Yes, with intelligent layering. Cleansing is the first step and does not create the same interaction risks as layering multiple leave-on actives. However, if you are using a high-concentration retinol or a separate vitamin C serum, you should monitor your skin for signs of over-exfoliation — increased sensitivity, persistent redness, or flaking beyond the initial adjustment period. If these appear, reduce the retinol to alternate nights only. The vitamin C in this cleanser and a separate vitamin C serum can be used together without issue.',
  },
  {
    q: 'Is it safe for teenage acne?',
    a: 'Yes. This formula is appropriate for teenage acne, which represents the most common presentation — androgen-driven sebaceous hyperactivity affecting the face, chest, and back. The gentle base makes it less irritating than many pharmacy-grade acne washes, which is important for teenage skin that is already under hormonal stress. For teenagers under 12, consult a dermatologist before beginning any active-ingredient skincare routine.',
  },
  {
    q: 'Can I use this face wash during pregnancy?',
    a: 'The safety of salicylic acid during pregnancy is a nuanced clinical question. Topical salicylic acid at low concentrations — such as those used in face washes where contact time is brief before rinsing — is generally considered low-risk. However, as a precautionary measure, the widely accepted recommendation is to consult your gynaecologist or dermatologist before using any salicylic acid product during pregnancy or breastfeeding. Safer alternatives for gestational acne exist if clinical guidance suggests avoidance.',
  },
  {
    q: 'Does it work on back and chest acne as well?',
    a: 'Yes. The formula works on any skin area affected by acne — face, back, chest, and shoulders — as the active ingredient mechanisms are the same regardless of body location. For back and chest use, apply during showering using the same technique as for the face: adequate lather, 60-second contact time, thorough rinsing. Body acne in India — exacerbated by sweating, fabric friction, and humidity — responds well to consistent daily BHA cleansing of affected areas.',
  },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────────

export default function AcneFaceWashBlogPage() {
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
            <span className={styles.tag}>Acne Care · Salicylic Acid · Neem · India Guide 2026</span>
            <h1 className={styles.heroTitle}>
              Best Face Wash for
              <br />
              <em>Acne-Prone Skin in India</em>
              <br />
              <span className={styles.heroTitleSub}>The Complete 2026 Breakout-Clearing Guide</span>
            </h1>
            <p className={styles.heroSub}>
              Breakouts, blackheads, post-acne marks — the Indian skin environment amplifies
              every factor that drives acne. This guide explains the science behind what actually
              works, and why the right cleanser with the right actives is the foundation every
              acne-prone routine needs.
            </p>
            <div className={styles.heroMeta}>
              <span>⏱ 20 min read</span>
              <span>📅 April 2026</span>
              <span>📝 5,800+ words</span>
            </div>
            <div className={styles.heroActions}>
              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy FreshOLite Acne Face Wash on Amazon →
              </a>
              <span className={styles.heroSubNote}>Salicylic Acid · Neem · Vitamin C · For Acne-Prone Skin</span>
            </div>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageRing} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/fresholite-facewash.png"
                alt="FreshOLite Acne Face Wash with Salicylic Acid Neem and Vitamin C for Acne-Prone Skin India"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 420px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🧪 Salicylic Acid</span>
              <span>🌿 Neem Extract</span>
              <span>✨ Vitamin C</span>
              <span>💧 Gentle Base</span>
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
          <h2 className={styles.sectionTitle}>Why Acne Is So Persistent in India — and Why Generic Cleansers Fail</h2>
          <p>
            Stand in any pharmacy in India — from a modern urban chain in Connaught Place to a
            neighbourhood medical shop in Coimbatore — and you will find an entire wall dedicated
            to acne-targeted skincare. Face washes, creams, gels, spot treatments, toners. The
            sheer volume of products marketed for breakout-prone skin reflects how prevalent the
            condition is. And yet, if these products were working, the Indian dermatology market
            would not be one of the fastest-growing in Asia.
          </p>
          <p>
            The persistent failure of most acne products in the Indian context is not a mystery.
            It is the result of a straightforward mismatch between generic formulations designed
            for temperate climates with moderate humidity and pollution, and the specific,
            compounding skin stressors that characterise life in India. Understanding this
            mismatch is the first step toward choosing a cleanser that actually works.
          </p>
          <p>
            India&apos;s climate creates a uniquely hostile environment for acne-prone skin. The
            tropical humidity across most of the country — sustained at 70–90% for months at a
            time in coastal cities like Chennai, Mumbai, and Kochi — maintains sebaceous glands
            in a state of near-constant elevated activity. Sebum, the skin&apos;s natural oil, is
            produced at higher rates in humid conditions as part of the skin&apos;s thermoregulatory
            response. In individuals already predisposed to excess sebum production — the defining
            physiological characteristic of acne-prone skin — this humidity-driven amplification
            means pores are chronically congested with oil, and the lipid-rich environment inside
            follicles is continuously available for colonisation by <em>Cutibacterium acnes</em>.
          </p>
          <p>
            Urban air quality adds a second layer of challenge that few skincare formulations are
            specifically designed to address. India&apos;s major cities rank among the most
            polluted in the world by PM2.5 concentration — the fine particulate matter that is
            small enough to penetrate the follicle and deposit directly inside the pore. These
            particles carry oxidised hydrocarbons, heavy metals, and polycyclic aromatic
            hydrocarbons that both trigger and amplify inflammation in the follicular wall.
            Research published in dermatological literature has directly linked urban pollution
            exposure to increased rates of acne, seborrhoea, and post-inflammatory hyperpigmentation
            across Indian and East Asian populations.
          </p>
          <p>
            Diet and gut health — both deeply influential in hormonal acne — present a specific
            Indian context as well. High-glycaemic dietary patterns, heavily spiced foods, and
            the prevalence of dairy consumption in North Indian diets are all documented acne
            triggers through their effects on insulin-like growth factor 1 (IGF-1) and androgen
            signalling. These dietary patterns are cultural and not easily changed — which means
            the topical skincare routine carries a proportionally greater burden in managing
            breakouts than it might for individuals with lower dietary acne triggers.
          </p>
          <p>
            And then there is the issue that dermatologists across India consistently identify as
            the most damaging: skin type mismatch in product selection. Indian skin tones — ranging
            from Fitzpatrick Types III through VI — are disproportionately prone to
            post-inflammatory hyperpigmentation (PIH). Every acne lesion that inflames significantly
            or is physically disrupted by touching and picking leaves a dark mark that can persist
            for six months to a year on deeper skin tones. Most acne cleansers do nothing to address
            this secondary consequence, treating the active breakout while leaving users to deal
            with an accumulated landscape of dark marks that is, in many cases, more distressing
            than the active acne itself.
          </p>
          <p>
            This guide addresses the complete picture: the science of acne formation, the specific
            ingredient mechanisms that clear it effectively in the Indian context, a thorough
            assessment of which skin and acne types different formulations suit, a step-by-step
            application protocol, a realistic timeline of results, and a comprehensive buying guide
            that cuts through the crowded Indian market to identify what actually separates an
            effective acne cleanser from one that simply occupies shelf space. Read this once,
            understand what your skin needs, and stop repeating the same expensive cycle of
            product disappointment.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ─────────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of Acne — How a Pimple Actually Forms</h2>

          <h3 className={styles.subHeading}>The Four-Stage Acne Cascade</h3>
          <p>
            Acne is not a surface problem — it is a follicular problem. Every acne lesion begins
            inside the pilosebaceous unit: the structure consisting of a hair follicle, the sebaceous
            gland attached to it, and the fine vellus hair running through it. Understanding the
            four stages of acne formation explains why cleansing with the right actives — rather
            than simply scrubbing the surface — is the appropriate first-line intervention.
          </p>
          <p>
            <strong>Stage 1 — Follicular hyperkeratinisation:</strong> The process begins when
            keratinocytes — the cells lining the follicle wall — produce and retain excess keratin
            proteins, causing the follicle lining to thicken. Dead skin cells that would normally
            shed through the follicle opening and be washed away instead accumulate within the
            canal. This stage is driven primarily by androgens — the hormonal reason pubescent
            teenagers, women in the days before menstruation, and anyone experiencing elevated
            testosterone levels experience characteristic breakout surges.
          </p>
          <p>
            <strong>Stage 2 — Sebum accumulation and microcomedone formation:</strong> The
            thickened follicle lining traps the sebum produced by the attached sebaceous gland,
            which continues to secrete oil regardless of the blockage. The mixture of dead
            corneocytes and sebum forms a microcomedone — the invisible precursor lesion that
            exists beneath the skin surface for days to weeks before becoming a visible
            whitehead or blackhead. A blackhead (open comedone) forms when the follicle is
            partially blocked and the trapped sebum oxidises on exposure to air, turning dark.
            A whitehead (closed comedone) forms when the follicle is fully sealed.
          </p>
          <p>
            <strong>Stage 3 — Bacterial colonisation:</strong> The anaerobic, lipid-rich
            environment of the congested follicle is the ideal growth medium for <em>Cutibacterium
            acnes</em> — a gram-positive anaerobic bacterium that normally resides on the skin
            surface without causing harm. Once it proliferates inside the occluded follicle,
            it metabolises sebum into free fatty acids that irritate the follicle wall, producing
            the chemical signals that trigger the immune response.
          </p>
          <p>
            <strong>Stage 4 — Inflammatory response and lesion formation:</strong> The immune
            system responds to <em>C. acnes</em> proliferation and the free fatty acid irritants
            by mounting an inflammatory cascade. Neutrophils infiltrate the follicle,
            pro-inflammatory cytokines including IL-1α and IL-8 are released, and the follicle
            wall begins to break down under the combined pressure of the expanding contents
            and the immune response. The result is the full spectrum of inflammatory acne lesions:
            papules (raised, red, solid), pustules (pus-filled), nodules (deep, painful, solid),
            and in the most severe cases, cysts.
          </p>

          <h3 className={styles.subHeading}>Why Cleansing is the Critical First Intervention</h3>
          <p>
            Given this cascade, the most effective point of intervention is at stages 1 and 2:
            preventing the initial follicular blockage that sets everything else in motion. This
            is what targeted daily cleansing accomplishes. By using a cleanser that combines a
            chemical exfoliant capable of dissolving the follicular plug (salicylic acid) with
            agents that reduce the bacterial load on the skin surface (neem) and provide
            antioxidant protection against the environmental triggers that compound the process
            (vitamin C), twice-daily cleansing interrupts the acne cascade before it progresses
            to the inflammatory stage that causes lasting skin damage.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> Post-inflammatory hyperpigmentation — the dark marks
              that remain after acne resolves — is directly proportional to the severity and
              duration of the inflammatory phase. Every measure that reduces inflammation
              (effective antibacterial action, barrier preservation, antioxidant protection)
              also reduces the depth and persistence of post-acne marks. For Indian skin tones,
              PIH prevention is not a cosmetic concern — it is a clinical one.
            </div>
          </div>
        </section>

        {/* ─── INGREDIENTS ────────────────────────────────────────────────────── */}
        <section id="ingredients" className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Ingredients That Actually Clear Acne</h2>

          <h3 className={styles.subHeading}>Beta-Hydroxy Acids vs. Alpha-Hydroxy Acids for Acne</h3>
          <p>
            The exfoliant category for acne treatment is not monolithic. Alpha-hydroxy acids —
            glycolic acid, lactic acid, mandelic acid — are water-soluble and work on the skin
            surface, dissolving the bonds between dead surface cells and improving overall skin
            texture and tone. They are valuable in skincare but cannot penetrate the oil-filled
            follicle because they are water-soluble and oil repels water.
          </p>
          <p>
            Beta-hydroxy acids — of which salicylic acid is the primary example — are
            lipid-soluble. This single chemical difference is what makes BHAs the specifically
            correct exfoliant for acne-prone skin. The ability to dissolve in oil means salicylic
            acid can travel through the sebum inside the follicle, reach the blockage directly,
            and exfoliate the pore lining from within. No AHA can do this. For non-acne skin
            concerns — sun damage, uneven texture, general brightening — AHAs are excellent.
            For acne specifically, BHA is the mechanistically correct choice.
          </p>

          <h3 className={styles.subHeading}>The Role of Antioxidants in Acne Treatment</h3>
          <p>
            The role of oxidative stress in acne is underappreciated in consumer skincare
            communication. Reactive oxygen species generated by UV radiation, pollution, and
            the inflammatory activity of <em>C. acnes</em> itself directly damage follicle wall
            cells, amplify the inflammatory signal, and stimulate melanocyte activity that
            produces post-acne dark marks. Vitamin C, as a potent electron donor, neutralises
            these reactive species at the point of contact — providing an antioxidant shield
            that both limits the severity of active inflammation and reduces the oxidative
            contribution to PIH formation.
          </p>
          <p>
            In a cleanser that is applied and rinsed off, the amount of vitamin C that remains
            on the skin after washing is limited. The clinical value of vitamin C in a cleanser
            context comes from its twice-daily consistent delivery, from its immediate antioxidant
            action during the cleansing process when oxidised pollution residue is being removed,
            and from the cumulative brightening effect on post-acne marks that builds over weeks
            of daily use. It should not be evaluated against a leave-on vitamin C serum — it is
            a complementary delivery method that addresses different aspects of the same concern.
          </p>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Acne Problem — And the Specific Fix</h2>
          <p className={styles.sectionIntro}>
            Acne presents differently across individuals — different lesion types, different
            triggers, different secondary concerns. Here is how the specific ingredient profile
            of an effective acne face wash addresses each primary concern.
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
            Not all acne-prone skin is the same. Here is an honest assessment of how a
            salicylic acid plus neem plus vitamin C formula performs across different
            skin and acne profiles.
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
          <h2 className={styles.sectionTitle}>FreshOLite Acne Face Wash — Feature-by-Feature Breakdown</h2>

          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              Salicylic Acid + Neem + Vitamin C. Every wash. Twice daily.
            </p>
            <p className={styles.midCtaSub}>
              The acne-clearing formula built for Indian skin, Indian climate, and Indian acne patterns.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get FreshOLite Acne Face Wash on Amazon →
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
              between a <em>cosmetic</em> acne face wash and a <em>therapeutic</em> acne cleanser.
              A cosmetic cleanser removes surface oil and may leave skin feeling clean and refreshed —
              but contains no actives capable of working inside the follicle. A therapeutic cleanser
              contains ingredients that directly address the mechanisms of acne formation: BHA
              exfoliation of the follicle lining, antibacterial reduction of <em>C. acnes</em>
              colonisation, and antioxidant protection against inflammatory amplifiers.
              FreshOLite Acne Face Wash is formulated in the therapeutic category. The cleansing
              result is visible — but the active work happening inside the follicle with every wash
              is what determines long-term results.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Cleansing Protocol for Acne-Prone Skin</h2>
          <p className={styles.sectionIntro}>
            Technique is a significant variable in acne cleanser effectiveness. Most people
            apply, rinse immediately, and move on — drastically reducing the active ingredients&apos;
            contact time with the skin. Follow this protocol for maximum results.
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
            💡 <strong>Pro Tip:</strong> Your evening cleanse is more important than your morning
            one. The pollution, sebum, and SPF residue accumulated during the day represent the
            most significant acne-triggering load on your skin in any 24-hour period — and it
            needs to be thoroughly removed before sleep. Invest the full 60-second contact time
            in your evening cleanse, and pair it with an appropriate moisturiser. If you also
            experience body acne, our{' '}
            <Link
              href="/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026"
              className={styles.internalLink}
            >
              complete guide to calamine lotion uses and benefits
            </Link>{' '}
            covers how calamine&apos;s soothing and absorptive properties complement an acne routine
            for back and chest breakout management.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>Realistic Results Timeline — What to Expect and When</h2>
          <p className={styles.sectionIntro}>
            Acne treatment requires patience aligned with biological reality. Here is an honest,
            week-by-week account of what consistent use of a salicylic acid–neem–vitamin C
            cleanser delivers.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — What to Look for in an Acne Face Wash in India</h2>
          <p className={styles.sectionIntro}>
            The Indian acne cleanser market is crowded with products making claims their
            formulations cannot support. This is exactly what to evaluate before purchasing.
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

          <h3 className={styles.subHeading}>The Most Damaging Buying Mistakes Indian Consumers Make</h3>
          <p>
            The most prevalent buying mistake in Indian acne skincare is selecting a product
            based on claims made on the front of the packaging rather than the ingredient list
            on the back. Phrases like &quot;deep pore cleansing,&quot; &quot;oil control,&quot;
            and &quot;anti-acne formula&quot; are cosmetic marketing claims that are not
            regulated for clinical accuracy. A product can legally make these claims while
            containing no active ingredient capable of penetrating the follicle or affecting
            bacterial colonisation. The only way to assess whether a cleanser is genuinely
            therapeutic for acne is to read the ingredient list and identify the actives, their
            position in the list (indicating concentration), and the base formulation quality.
          </p>
          <p>
            The second major mistake is choosing the harshest-feeling cleanser available on
            the assumption that stronger cleaning equals better acne treatment. This is
            categorically incorrect. The feeling of extreme tightness and dryness after
            washing is not a sign of effective acne treatment — it is a sign of barrier
            disruption. A skin barrier that has been stripped by an aggressive sulphate
            surfactant responds within hours with compensatory sebum overproduction, creating
            a cycle where oiliness returns faster and more intensely than before cleansing.
            Dermatologists routinely see acne patients who have made their condition significantly
            worse over months of using harsh cleansers under the misguided belief that if their
            skin was not stinging and tight after washing, it was not clean enough.
          </p>
          <p>
            A third significant error is abandoning a product within two weeks of first use.
            The salicylic acid purge — a phenomenon where existing microcomedones are
            accelerated to the surface — is commonly interpreted as an allergic reaction or
            product failure. It is neither. It is the expected early-stage effect of a BHA
            working correctly. If the skin does not show clear improvement by four to six weeks,
            the product may genuinely not be effective. But two-week assessments are premature
            and lead to the expensive churn through multiple products without allowing any single
            product the time to demonstrate its real effect.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>The actives you need. The base your barrier deserves.</p>
            <p className={styles.midCtaSub}>
              FreshOLite Acne Face Wash — salicylic acid, neem, and vitamin C in a gentle,
              non-drying formula designed for twice-daily Indian-climate use.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop FreshOLite Acne Face Wash on Amazon →
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
        <div id="related" className={styles.relatedBand}>
          <p className={styles.relatedBandTitle}>Complete Your Skincare Routine</p>
          <p className={styles.relatedBandSub}>
            Acne management is most effective as a system. Pair your cleanser with the
            right moisturiser, sun protection, and targeted treatments.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🧴</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Moisturiser for Combination Skin</p>
                <p className={styles.relatedCardSub}>Moist Sure Cream with Aloe Vera, Vitamin-E &amp; Jojoba Oil — non-comedogenic hydration</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link
              href="/blog/best-sunscreen-oily-skin-india-spf-guide"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>☀️</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Sunscreen for Oily Acne-Prone Skin India</p>
                <p className={styles.relatedCardSub}>SPF protection that doesn&apos;t clog pores or cause breakouts</p>
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
                <p className={styles.relatedCardSub}>How calamine soothes acne redness, oil, and irritation</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Acne Face Wash Myths vs. Truth — What Gets People Wrong</h2>
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
          <h2 className={styles.sectionTitle}>Frequently Asked Questions About Acne Face Wash</h2>
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
          <h2 className={styles.bottomCtaTitle}>Your Skin Is Ready to Clear</h2>
          <p>
            Acne is not a skin type — it is a condition with specific, addressable causes. The
            right cleanser, used correctly and consistently, interrupts the follicular blockage
            cascade before it becomes inflammation, prevents the bacterial colonisation that
            turns a clogged pore into a painful lesion, and addresses the post-inflammatory
            hyperpigmentation that makes Indian acne so visually persistent. FreshOLite Acne
            Face Wash delivers salicylic acid, neem extract, and vitamin C in a gentle base
            designed for twice-daily Indian-climate use. This is how you stop the cycle.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy FreshOLite Acne Face Wash on Amazon →
          </a>
          <p className={styles.bottomNote}>Salicylic Acid · Neem · Vitamin C · All Acne-Prone Skin Types · Free Delivery Available</p>
        </section>

      </div>
    </article>
  );
}