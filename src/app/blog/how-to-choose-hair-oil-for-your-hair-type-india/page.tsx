import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './hair-oil-hair-type-guide-blog.module.css';

export const metadata: Metadata = {
  title: 'How to Choose the Right Hair Oil for Your Hair Type in India 2026 — Complete Guide',
  description:
    'Learn how to choose the right hair oil for your hair type in India. Expert guide covering oily, dry, curly & damaged hair. Find your perfect match now.',
  keywords: [
    'how to choose hair oil for hair type India',
    'best hair oil for hair type',
    'hair oil for oily scalp India',
    'hair oil for dry hair India',
    'hair oil for curly hair India',
    'hair oil for damaged hair',
    'hair oil selection guide India',
    'right hair oil India 2026',
    'hair oil for hair growth India',
    'hair oil for thin hair India',
    'hair oil for thick hair India',
    'hair oil for frizzy hair India',
    'hair oil guide Indian hair types',
    'scalp oil India',
    'lightweight hair oil India',
    'heavy hair oil India',
    'hair oil for dandruff India',
    'best hair oil Indian climate',
    'hair oil for men India',
    'hair oil for women India',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/how-to-choose-hair-oil-for-your-hair-type-india',
  },
  openGraph: {
    title: 'How to Choose the Right Hair Oil for Your Hair Type in India 2026',
    description:
      'The definitive guide to matching the right hair oil to your scalp, strand type, and climate. Expert advice for Indian hair in 2026.',
    images: [
      {
        url: '/images/hair-oil-type-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Choose the Right Hair Oil for Your Hair Type India Guide',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/01iReZFQ';

// ─── DATA ARRAYS ─────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Choosing the Wrong Hair Oil Makes Things Worse' },
  { id: 'science', label: 'The Science of Hair and Scalp — What You Need to Know' },
  { id: 'oil-types', label: 'Types of Hair Oils and What They Actually Do' },
  { id: 'problems-grid', label: 'Your Hair Problem and the Oil That Fixes It' },
  { id: 'hair-type-guide', label: 'Complete Hair Type Matching Guide' },
  { id: 'product-deep-dive', label: 'HairOShine Biotin Oil — Why It Works Across Types' },
  { id: 'how-to-use', label: 'How to Apply Hair Oil the Right Way' },
  { id: 'results-timeline', label: 'Realistic Results Timeline' },
  { id: 'buying-guide', label: 'Complete Buying Guide for Indian Consumers' },
  { id: 'who-needs', label: 'Who Benefits Most' },
  { id: 'myths', label: 'Hair Oil Myths vs. Scientific Truth' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🌧️',
    problem: 'Excess Scalp Oil and Lank Roots',
    desc: 'Oily scalps produce surplus sebum — often triggered by hard water, over-washing, or hormonal fluctuation. Applying a heavy oil like castor or coconut compounds the problem, suffocating follicles and accelerating the greasy cycle.',
    solution: 'Lightweight, fast-absorbing formulas with biotin and jojoba-type bases regulate rather than add to sebum. Applied directly to the scalp in small quantities twice weekly — not daily — they calm overactive sebaceous glands without clogging pores.',
  },
  {
    icon: '🏜️',
    problem: 'Parched, Brittle Strands That Break',
    desc: 'Dry hair is a structural problem, not just a surface one. The hair cortex loses moisture through repeated shampooing with harsh detergents, heat styling, and sun exposure — leading to a rough, lifted cuticle that allows further moisture loss in a vicious cycle.',
    solution: 'Penetrating oils — those with small enough molecular structures to enter the hair shaft — restore internal moisture. Combined with scalp nourishment, they rebuild the lipid layer around each strand, sealing in hydration and dramatically reducing daily breakage.',
  },
  {
    icon: '🌀',
    problem: 'Frizz, Curl Disruption, and Flyaways',
    desc: 'Curly and wavy hair types in India\'s humid climate absorb atmospheric moisture unevenly, causing the cuticle to swell in unpredictable patterns — the cause of frizz. The hair\'s natural curl pattern also makes it difficult for sebum to travel down the strand from root to tip.',
    solution: 'Biotin oil applied to the scalp supports the health of the follicle that determines curl pattern — while light surface application along the strand seals the cuticle, blocking the humidity-driven swelling that causes frizz without weighing curls flat.',
  },
  {
    icon: '⚗️',
    problem: 'Chemical and Heat Damage',
    desc: 'Colour treatments, straightening, and perming break the disulphide bonds within the hair\'s keratin structure — the same bonds that give hair its strength and elasticity. Heat styling above 180°C denatures the proteins within the cortex, creating weak points that lead to eventual snapping.',
    solution: 'Biotin is a cofactor in keratin synthesis — the process that rebuilds exactly the protein structure that chemical and heat processes destroy. Consistent scalp application during and after a treatment regimen supplies the raw materials for follicles to produce stronger, better-structured new growth.',
  },
];

const hairTypeMatching = [
  {
    type: 'Fine, Thin Hair',
    icon: '🪶',
    verdict: 'Lightweight Only',
    verdictClass: 'caution',
    oils: 'Biotin-enriched lightweight bases, jojoba',
    avoid: 'Castor, coconut (pure), olive oil',
    explanation: 'Fine hair has a smaller diameter and fewer cuticle layers, making it extremely susceptible to being weighed down. A heavy oil turns fine hair limp and flat within hours. Opt for lightweight biotin formulas that absorb into the scalp without sitting on the strand. Apply only to the scalp — never to lengths.',
  },
  {
    type: 'Thick, Coarse Hair',
    icon: '💪',
    verdict: 'Excellent Range',
    verdictClass: 'excellent',
    oils: 'Biotin oil, castor, argan, heavier bases',
    avoid: 'Ultra-light serums alone (insufficient penetration)',
    explanation: 'Thick hair has a larger cortex and more cuticle layers that can accommodate richer oils without losing volume or manageability. The challenge is ensuring oils penetrate rather than just coat. Biotin oil used at the scalp combined with light mid-length application gives thick hair strength and lustre simultaneously.',
  },
  {
    type: 'Curly or Wavy Hair',
    icon: '🌀',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    oils: 'Biotin oil, argan, light penetrating bases',
    avoid: 'Heavy mineral oil, petroleum-based products',
    explanation: 'Curly hair is naturally drier than straight hair because sebum struggles to travel the spiral length of a curl from root to tip. Biotin oil addresses this at the scalp level — nourishing the follicle that determines curl health — while a light application along the mid-shaft seals the cuticle and defines curl pattern.',
  },
  {
    type: 'Straight, Oily Scalp',
    icon: '📏',
    verdict: 'With Precision',
    verdictClass: 'caution',
    oils: 'Lightweight biotin, non-comedogenic bases only',
    avoid: 'Coconut oil (large molecules, pore-blocking), mineral oil',
    explanation: 'Straight hair with an oily scalp is the most challenging type for oil application because the oil\'s travel path from root to tip is direct and rapid. Use biotin oil sparingly at the scalp only, focusing on the massage technique rather than volume. The goal is follicle nourishment — not additional surface lubrication.',
  },
  {
    type: 'Dry Scalp, Any Texture',
    icon: '💧',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    oils: 'Biotin oil, nourishing penetrating bases',
    avoid: 'Alcohol-based products, astringent scalp tonics',
    explanation: 'A dry, flaky scalp is most directly addressed by a nourishing oil applied with consistent scalp massage. The oil\'s hydrating compounds restore the moisture barrier of the scalp\'s stratum corneum while biotin nourishes the follicle beneath. Two to three applications weekly typically resolves chronic dryness within three to four weeks.',
  },
  {
    type: 'Colour-Treated or Chemically Processed',
    icon: '🎨',
    verdict: 'Good',
    verdictClass: 'good',
    oils: 'Lightweight biotin, colour-safe non-stripping bases',
    avoid: 'Heavy oils in the first 72 hours post-treatment',
    explanation: 'Chemically treated hair is structurally compromised at the cortex level. Biotin oil\'s primary benefit here is at the scalp — improving the quality of new growth that emerges post-treatment. Mid-shaft application can help temporarily seal a roughened cuticle, but the root-level work of rebuilding follicle health is what produces lasting improvement.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Universal Scalp Nourishment Regardless of Hair Type',
    body1: `The most consequential insight in modern trichology — the science of hair and scalp — is that hair type determines application method, but scalp health is the universal foundation. Regardless of whether your hair is fine or thick, straight or curly, oily or dry, the follicle beneath the scalp produces every strand you grow under the same biochemical requirements. It needs biotin for keratin synthesis, adequate blood circulation to deliver nutrients, a balanced pH environment, and freedom from clogged pores or inflammatory responses. These requirements do not change based on your hair type.

HairOShine Biotin Oil is formulated around this scalp-first principle. Its biotin delivery system is designed to penetrate the scalp's dermal layer — where follicles live — rather than simply coating the existing hair shaft. This makes it relevant and effective for every hair type because it addresses the common root-level mechanism, while the formula's lightweight base ensures it does not impose the texture or weight problems that heavier oils create for fine or oily hair types.`,
    body2: `This universal applicability is genuinely rare in the hair oil category. Most growth oils are implicitly designed for one or two hair types — heavy castor-based formulas benefit thick, dry hair but devastate fine or oily types; ultra-light serums address fine hair's weight concerns but don't deliver sufficient nourishment to thick, coarse strands. A biotin-enriched formula with a carefully calibrated weight finds the middle path: effective for every hair type when applied correctly to the scalp, and adaptable in quantity for different hair and scalp conditions.`,
  },
  {
    number: '02',
    heading: 'Biotin as the Cross-Hair-Type Growth Accelerator',
    body1: `Biotin — Vitamin B7 — functions as a coenzyme in the metabolic pathways that produce keratin, the fibrous structural protein that constitutes the cortex of every hair strand, regardless of type, texture, or curl pattern. Keratin deficiency manifests differently across hair types — as brittleness in fine hair, roughness in coarse hair, curl disruption in wavy or curly hair, and accelerated breakage in chemically treated hair — but the underlying biochemical deficit is identical across all of them.

This is the scientific basis for biotin's universal effectiveness as a hair growth and strengthening intervention. When HairOShine Biotin Oil delivers concentrated biotin directly to the scalp through topical application, every follicle type — producing every hair texture — receives the same fundamental benefit: more biotin available as a cofactor in keratin synthesis. The quality of keratin produced by each follicle improves. The structural integrity of each new strand is higher. The hair that grows out is stronger, thicker at the cortex level, and more resistant to the specific stresses each hair type faces.`,
    body2: `For fine hair, this means strands that are individually stronger without the texture change that thicker hair experiences — the improvement is in resilience, not weight. For coarse, thick hair, it means a more uniform keratin structure that reduces the roughness and frizz-prone cuticle surface characteristic of very thick strands. For curly hair, it means follicles that produce more consistently structured keratin per growth cycle, supporting the natural curl pattern rather than disrupting it through inconsistent protein output. Biotin works at the building-block level of what hair is made of — and that is why it works across all the types it can be made of.`,
  },
  {
    number: '03',
    heading: 'The Non-Greasy Formula Built for Indian Urban Conditions',
    body1: `The single biggest barrier to consistent hair oil use in India — particularly among working professionals in cities like Bengaluru, Chennai, Mumbai, Pune, and Delhi — is the visible residue problem. Traditional Indian hair oiling culture was built around weekend routines: oil applied heavily on a Saturday morning, left for several hours, washed out before the week begins. This protocol is excellent for results but completely incompatible with the daily reality of commuting, air-conditioned offices, professional dress codes, and the social environments of modern Indian urban life.

HairOShine Biotin Oil's lightweight formula solves this integration problem. Its molecular weight and base composition allow it to absorb into the scalp within five to ten minutes of application when massaged in properly — without leaving the visible film, the lanky appearance, or the heavy feeling that castor oil, pure coconut oil, or mineral oil-based products leave regardless of application quantity. This isn't a cosmetic distinction — it is the difference between a product that gets used consistently and one that gets used three times before being abandoned.`,
    body2: `The Indian climate introduces additional complexity that a non-greasy formula navigates more effectively than heavy oils. In high-humidity conditions — Mumbai's monsoon, Chennai's coastal humidity, Kolkata's year-round moisture — heavy oils trap sweat against the scalp, creating the warm, damp conditions that accelerate scalp fungal growth and dandruff. A lightweight, fast-absorbing formula provides nourishment without the occlusive surface layer that causes this problem. In dry, low-humidity environments — Delhi's winters, Rajasthan's year-round aridity — the same formula delivers moisture without the greasy buildup that accumulates with heavy oils in dry air and becomes difficult to wash out without aggressive shampooing.`,
  },
  {
    number: '04',
    heading: 'Hair Fall Reduction — The Measurable Outcome That Matters Most',
    body1: `Every hair type in India is subject to the same threats that drive hair fall: hard water mineral deposits that gradually clog follicle openings; particulate air pollution in cities that oxidises the scalp's lipid barrier; cortisol from chronic work and lifestyle stress that shortens the active growth phase; nutritional gaps — particularly in B vitamins, iron, and protein — that reduce the quality of hair produced each cycle; and the mechanical stress of tight hairstyles, aggressive brushing, and daily heat styling. The cumulative effect of these factors across months and years produces the visible thinning that brings most people to seek a solution.

Biotin oil's mechanism of action addresses this fall directly. By strengthening the keratin structure of each new strand, it makes existing hair more resistant to the mechanical and environmental stresses that cause breakage before natural shedding. By nourishing the scalp barrier, it reduces the inflammatory responses and oxidative stress that push follicles prematurely into the resting phase. By delivering the specific B vitamin most critical to hair protein production, it ensures that the hair produced during each cycle is as strong and complete as the follicle is capable of producing — rather than the structurally compromised hair that a nutrient-deprived follicle outputs.`,
    body2: `The reduction in hair fall becomes visible at different timescales depending on hair type and the severity of the underlying cause. Fine hair, where each strand lost is more visually impactful, often shows perceptible improvement within two to three weeks as breakage reduces. Thick hair shows improvement through a reduction in the volume of shed hair — which, given each strand's greater diameter, produces a dramatic reduction in drain and brush accumulation. Curly and wavy hair types typically see the greatest improvement in curl definition and reduced breakage along the curl arc, which is the most mechanically stressed part of each strand during daily handling. Across all types, the consistent user report is the same: fewer strands lost, and those that remain are demonstrably stronger.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Identify Your Hair Type Before You Apply Anything',
    desc: 'Wash your hair with a mild shampoo and leave it unstyled for four hours. Observe: Is the scalp oily or dry? Is the hair fine or thick between your fingers? Does it curl, wave, or remain straight? The answer determines your application quantity and technique — not just which oil to choose.',
  },
  {
    num: '02',
    title: 'Section the Hair and Target the Scalp Specifically',
    desc: 'Use a tail comb to create clear partings that expose the scalp. Apply HairOShine Biotin Oil in small drops directly onto the scalp skin along each parting. For fine or oily hair types: two drops per section is sufficient. For thick, dry, or curly hair: three to four drops per section. The scalp is the target — not the hair shaft.',
  },
  {
    num: '03',
    title: 'Massage Using Proper Fingertip Technique',
    desc: 'Use the flat pads of your fingertips — not nails — in slow, firm circular motions covering the entire scalp over five to ten minutes. This massage step is not optional. It drives the oil beneath the scalp\'s surface layer where follicles are located, stimulates blood circulation to follicle cells, and activates the sebaceous glands. The massage amplifies the oil\'s effectiveness by a measurable factor.',
  },
  {
    num: '04',
    title: 'Adjust Leave-On Time by Hair Type',
    desc: 'Fine or oily scalp: leave on for 30–60 minutes only, then wash thoroughly. Longer periods increase risk of pore congestion. Dry or thick hair: leave on for a minimum of two hours; overnight application produces significantly better results. Curly or damaged hair: overnight application is strongly recommended, as the extended exposure time allows deeper cortex penetration along the spiral length of the strand.',
  },
  {
    num: '05',
    title: 'Wash Out with the Correct Shampoo',
    desc: 'Use a sulphate-free or low-sulphate shampoo. Harsh detergents — those with SLS or SLES as primary ingredients — strip not only the oil but also the residual biotin that continues working post-wash. For curly hair types, a co-wash (conditioner-only wash) followed by one light shampoo application preserves curl pattern while removing oil adequately.',
  },
  {
    num: '06',
    title: 'Establish the Right Frequency for Your Type',
    desc: 'Oily scalp: two applications per week maximum. Normal scalp: two to three times weekly. Dry scalp or damaged hair: three times weekly or every other day for the first four weeks, tapering to two to three times as scalp condition improves. Consistency over eight to twelve weeks — not daily intensity — is the variable that produces visible results.',
  },
];

const timeline = [
  {
    period: 'Week 1–2',
    title: 'Scalp Environment Begins to Rebalance',
    detail: 'Dryness and tightness reduce. Flakiness decreases noticeably after two to three washes with the oil in your routine. Fine hair types begin to feel slightly less fragile between fingers. Oily scalp types report the scalp feels cleaner longer between washes — the paradox of scalp oil regulation through nourishment.',
  },
  {
    period: 'Week 3–4',
    title: 'Hair Fall Visibly Decreases',
    detail: 'The daily strand count in the shower drain and on the brush decreases measurably. This is biotin strengthening the keratin structure of existing strands — reducing breakage significantly before new growth becomes visible. Curly hair types notice improved definition and reduced frizz at this stage.',
  },
  {
    period: 'Week 5–6',
    title: 'New Growth and Texture Improvement',
    detail: 'New hairs become visible along the hairline and in areas of previous thinning. Existing hair is visibly shinier, more uniform in texture, and easier to manage. Fine hair types report increased body without added weight. Thick hair types notice reduced coarseness and improved manageability.',
  },
  {
    period: 'Week 8–12',
    title: 'Measurable Density and Strength Gains',
    detail: 'Hair density is perceptibly higher across all types. Strands are stronger and more resistant to everyday breakage. The improvements are cumulative — each week of consistent use builds on the last. This is the phase most users report the results that made the investment worthwhile.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧬',
    title: 'Active Biotin vs. Decorative Label Biotin',
    body: 'Many hair oils list biotin in their ingredient deck purely as a marketing decision — at concentrations so low and in molecular forms so poorly absorbed by the scalp that the clinical benefit is essentially nil. A meaningful biotin concentration must appear within the first five to seven ingredients on the label, in a delivery base that facilitates scalp absorption rather than simply coating the hair shaft. Read the ingredients list before the claims on the front of the bottle.',
  },
  {
    icon: '⚖️',
    title: 'Molecular Weight and Hair Type Compatibility',
    body: 'Different oil bases have different molecular weights that determine their compatibility with different hair types. Oils with smaller molecules — jojoba-type, biotin-enriched lightweight bases — penetrate both scalp and hair shaft without leaving surface residue, making them compatible with fine, oily, and straight hair types. Larger-molecule oils like castor and pure coconut provide surface coating benefits for thick hair but are genuinely unsuitable for fine, oily, or scalp-congested types. A single-formula oil cannot serve all hair types unless its molecular profile sits in the lightweight-to-medium range.',
  },
  {
    icon: '🏺',
    title: 'Non-Comedogenic Rating',
    body: 'Comedogenicity — the tendency of an oil to clog pores — is critically important for scalp products in ways that body moisturisers escape, because scalp pore blockage directly damages follicle function. Coconut oil, while beneficial in other contexts, has a moderately high comedogenic rating that makes it problematic for regular scalp use in large quantities. Verify that any growth oil you purchase is explicitly formulated as non-comedogenic or designed specifically for scalp application — not repurposed from a general body or face oil.',
  },
  {
    icon: '📦',
    title: 'Pack Size Relative to Treatment Duration',
    body: 'Hair growth requires a minimum of eight to twelve weeks of consistent use before the results phase. A single small bottle purchased at the cheapest available price will run out before that window closes. The interruption in routine that forces a gap — even one to two weeks — disrupts the cumulative scalp conditioning that produces results. Purchasing a pack of two at the outset is a practical investment in outcome continuity, not a luxury.',
  },
];

const whoNeeds = [
  { icon: '🧑‍💼', label: 'Urban Professionals With Stress-Related Shedding', desc: 'Cortisol from work stress shortens the hair growth cycle systemically. Scalp-applied biotin oil with regular massage directly counteracts this effect at the follicle level.' },
  { icon: '🌊', label: 'Hard Water Sufferers in Delhi, Chennai, Bengaluru', desc: 'Mineral deposits from hard water gradually clog follicle openings over months. Biotin oil nourishes beneath this barrier layer, keeping follicles productive despite surface conditions.' },
  { icon: '🌀', label: 'Curly and Wavy Hair Types in Humid Climates', desc: 'Curly hair is inherently drier than straight hair — sebum cannot travel the curl from scalp to tip. Targeted biotin oil application fills this natural distribution gap.' },
  { icon: '🪶', label: 'Fine Hair Types Experiencing Progressive Thinning', desc: 'Fine hair is most visually impacted by even modest thinning. Biotin oil strengthens each strand individually without adding weight, preserving the body that fine hair depends on.' },
  { icon: '🎨', label: 'Frequent Colour and Chemical Treatment Users', desc: 'Chemical processes deplete keratin from the hair shaft. Biotin oil rebuilds this at the follicle level, ensuring new growth is structurally stronger than the damaged hair it replaces.' },
  { icon: '☀️', label: 'High UV Exposure — South India, Coastal Cities', desc: 'Year-round UV in Chennai, Kochi, and Visakhapatnam degrades the protein structure of hair. Biotin oil rebuilds keratin at the root, protecting new growth from the same UV thinning cycle.' },
  { icon: '🍽️', label: 'Vegetarian and Restrictive Diets', desc: 'Biotin is most abundant in egg yolks and organ meats — foods excluded from many Indian diets. Topical application delivers what dietary sources cannot, directly to the follicle.' },
  { icon: '👩‍🍼', label: 'Postpartum Hair Loss', desc: 'Hormonal shifts after delivery trigger significant telogen effluvium across all hair types. Biotin oil provides the targeted follicle nourishment needed during this critical regrowth period.' },
];

const myths = [
  {
    myth: 'The same hair oil works for everyone regardless of hair type',
    truth: 'Hair type determines how an oil interacts with both the scalp and the strand. A heavy oil appropriate for thick, coarse hair will flatten fine hair and clog pores on an oily scalp. The formula\'s molecular weight, base composition, and bioactive content must be matched to the hair type for effective results. Universal claims require universal formulas — which exist only in the lightweight, biotin-enriched category.',
  },
  {
    myth: 'More oil means more nourishment and faster results',
    truth: 'The scalp has a finite absorption capacity. Excess oil applied beyond what the scalp can take up in one session sits on the surface, weighs down the hair, attracts pollution particles, and increases the risk of pore congestion. Two to four drops per scalp section, massaged in properly, delivers more biotin to follicles than a heavy application that mostly sits on hair lengths. Precision of application produces better outcomes than quantity.',
  },
  {
    myth: 'Hair oil works by nourishing the hair strands themselves',
    truth: 'The hair shaft is dead tissue. It cannot absorb nutrients in any metabolically meaningful sense — it can be coated, temporarily softened, or have its cuticle temporarily sealed, but these are cosmetic effects. All genuine growth, strengthening, and long-term improvement happens at the scalp level, where the living follicle produces each new strand. This is why scalp-first application is not a preference — it is the only application method that produces real results.',
  },
  {
    myth: 'Oily scalp types should never use hair oil',
    truth: 'The counterintuitive reality is that oily scalps often over-produce sebum as a compensatory response to dehydration and barrier damage — triggered by frequent washing with harsh shampoos. A non-comedogenic, lightweight biotin oil applied sparingly to the scalp twice weekly can actually regulate sebum production over time, reducing oiliness rather than compounding it. The key is formula weight and application technique, not avoidance.',
  },
  {
    myth: 'Coconut oil is the best hair oil for all Indians',
    truth: 'Coconut oil is a large-molecule, moderately comedogenic oil with excellent conditioning properties for thick, dry hair types. For fine hair, it flattens and adds unwanted weight. For oily scalp types, its pore-blocking tendency accelerates the sebum congestion cycle. For straight hair in high-humidity climates, it creates a surface residue that traps heat and moisture against the scalp. It is excellent for specific types and conditions — not universally applicable despite its cultural prevalence.',
  },
  {
    myth: 'Applying oil overnight will damage your hair through breakage while you sleep',
    truth: 'Overnight oil application is one of the most effective hair care practices available — but technique matters. Using a loose braid or satin bonnet while sleeping with oil eliminates friction against cotton pillowcases. The extended contact time during overnight application allows significantly deeper scalp penetration and more thorough shaft conditioning than any short-duration application can achieve. The practice does not cause damage when done with basic protective preparation.',
  },
];

const faqs = [
  {
    q: 'How do I know which hair oil is right for my specific hair type?',
    a: 'The primary factors are scalp oil production, hair strand thickness, and curl pattern. If your scalp becomes visibly oily within 24 hours of washing, you need a lightweight, non-comedogenic formula — nothing based on pure coconut or castor oil. If your hair is fine between your fingers, weight matters enormously — any heavy oil will flatten it. If your hair is curly or wavy, you need an oil that absorbs rather than coats, so the curl retains its shape. HairOShine Biotin Oil works across most types because of its lightweight base — but technique differs significantly by type, as outlined in the application guide above.',
  },
  {
    q: 'Can I use hair oil if I have an oily scalp?',
    a: 'Yes — but with important differences in approach. Use a lightweight, non-comedogenic formula specifically. Apply only to the scalp, not the lengths or ends. Use a maximum of two drops per section rather than liberal application. Apply twice weekly rather than three times. The goal is not to add oil to an already-oily scalp — it is to deliver biotin to follicles and regulate sebum overproduction through the paradoxical mechanism of scalp nourishment. Many oily scalp users report decreased scalp oiliness after six to eight weeks of consistent lightweight oil use.',
  },
  {
    q: 'How often should I oil my hair if I have fine, thin hair?',
    a: 'Fine hair requires a more disciplined application frequency than thick hair. Two applications per week is optimal — this delivers sufficient biotin and nourishment for meaningful follicle improvement without the cumulative weight and residue buildup that flattens fine hair\'s natural volume. Apply to the scalp only, in small quantities, and wash out after 30–60 minutes rather than leaving overnight. The massage technique becomes particularly important for fine hair — it drives the oil to the follicle without requiring excess quantity.',
  },
  {
    q: 'Is hair oil suitable for curly hair types?',
    a: 'Curly hair benefits considerably from targeted hair oil use because its natural structure — the spiral curl pattern — prevents sebum from travelling effectively from the scalp to the mid-shaft and ends. This makes curly hair inherently drier than straight hair, even when the scalp itself is producing adequate sebum. Biotin oil applied to the scalp addresses follicle health and new growth quality. A small amount of the same oil applied to the mid-shaft and ends after washing seals the cuticle and defines the curl pattern without the heavy cast that styling gels can create.',
  },
  {
    q: 'How long does it take to see results from hair oil if I have thick, coarse hair?',
    a: 'Thick, coarse hair has more mass per strand and more cuticle layers, which means both improved strength and improved shine take slightly longer to become visually obvious than in fine hair. Expect to see meaningful improvement in hair texture and a reduction in frizz by weeks four to six. Visible density improvement and stronger new growth at the roots typically becomes apparent between weeks six and ten. The timeline is biological — follicle improvement requires the hair growth cycle to complete at least one round of improved keratin production, which takes time regardless of hair type.',
  },
  {
    q: 'Can men use the same hair oil as women for hair growth?',
    a: 'Yes, entirely. Follicle biology is identical in men and women at the biochemical level. Biotin requirements, keratin synthesis mechanisms, scalp nourishment needs, and application technique are the same regardless of gender. The primary difference in male hair fall patterns — the temple and crown thinning associated with DHT sensitivity — is hormonal, and while biotin oil does not block DHT, it maximises the productivity of follicles not yet severely miniaturised by it. Early consistent use produces meaningfully better outcomes for men than beginning late.',
  },
  {
    q: 'Should I apply hair oil to wet or dry hair?',
    a: 'Dry hair and a dry scalp is the correct state for growth oil application. Wet hair has an already-swollen cuticle and carries water between the cuticle layers, which physically blocks oil penetration. Applying oil to wet hair primarily results in surface coating rather than absorption. Apply to completely dry hair — ideally the day before your planned wash — for maximum scalp penetration. The exception is very dry or damaged hair types, where a small amount of oil on damp mid-lengths after washing can provide protective cuticle sealing as the hair dries.',
  },
  {
    q: 'Can I mix multiple hair oils together for better results?',
    a: 'Mixing oils is generally safe but rarely produces additive benefits in the way the practice is marketed. The more important variable is the biotin concentration and delivery base of your primary oil — adding a second oil to a well-formulated biotin oil simply dilutes the biotin concentration without meaningfully increasing other benefits. If you wish to add argan oil to your routine for additional shine or moisture, do so as a separate post-wash finishing step rather than mixing into your scalp treatment oil.',
  },
  {
    q: 'What happens if I use hair oil too frequently?',
    a: 'Over-oiling — more than three applications per week for most hair types — produces diminishing returns and active negative effects. Excess oil that cannot be absorbed sits on the scalp surface, creating a warm, occluded environment that encourages fungal overgrowth (a cause of dandruff), attracts pollution particles, and gradually blocks follicle openings. For fine and oily hair types, over-oiling also progressively flattens hair and creates buildup that requires increasingly aggressive shampooing to remove — further stressing the hair shaft.',
  },
  {
    q: 'Is it safe to use hair oil every day for faster results?',
    a: 'Daily application does not accelerate results and typically produces worse outcomes than a two-to-three times weekly schedule. The follicle requires intervals between applications to process the delivered nutrients, and the scalp needs periods of normal sebum regulation between oil treatments. Daily oiling also significantly increases the risk of pore congestion across all hair types. The biological mechanisms that produce hair growth operate on weekly timescales — matching your application frequency to this cycle is more effective than attempting to override it with daily intensity.',
  },
];

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

export default function HairOilTypeGuidePage() {
  return (
    <article className={styles.blog}>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />
        <div className={styles.heroOrb3} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Hair Care · India Guide · 2026 · All Hair Types</span>
            <h1 className={styles.heroTitle}>
              How to Choose the
              <br />
              <em>Right Hair Oil</em>
              <br />
              <span className={styles.heroTitleSub}>for Your Hair Type — India 2026</span>
            </h1>
            <p className={styles.heroSub}>
              The wrong hair oil does not just fail to help — it actively makes your hair worse.
              This guide maps every major Indian hair type to the precise oil profile, application
              technique, and frequency that delivers real results.
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
                Buy HairOShine Biotin Oil on Amazon →
              </a>
              <span className={styles.heroSubNote}>Works Across All Hair Types · Biotin-Enriched · Non-Greasy</span>
            </div>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageRing} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/hair-oil-type-guide.png"
                alt="HairOShine Biotin Hair Oil — Right Oil for Every Hair Type India"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 420px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🪶 Fine Hair Safe</span>
              <span>💪 Thick Hair Ready</span>
              <span>🌀 Curl Friendly</span>
              <span>🧬 Biotin Enriched</span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ─── TABLE OF CONTENTS ──────────────────────────────────────────── */}
        <nav className={styles.tocWrap} aria-label="Table of Contents">
          <p className={styles.tocTitle}>📋 Complete Guide Contents</p>
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

        {/* ─── INTRODUCTION ───────────────────────────────────────────────── */}
        <section id="intro" className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Choosing the Wrong Hair Oil Is Actively Making Your Hair Worse</h2>
          <p>
            Walk into any pharmacy, supermarket, or beauty store in India and you will find an entire
            aisle of hair oils — each promising growth, thickness, shine, and fall control. The
            marketing is confident. The packaging is aspirational. And a significant proportion of
            the people who buy these products will see their hair conditions worsen, not improve,
            within weeks of starting use. This is not because hair oils do not work. It is because
            the wrong hair oil for a given hair type is not neutral — it is actively harmful.
          </p>
          <p>
            A person with fine, low-density hair applying a thick castor oil treatment will find
            their hair flattened, lank, and greasier-looking within two applications. A person with
            an already-oily scalp using a coconut oil-based growth treatment will accelerate the
            cycle of pore congestion that compounds their hair fall rather than addressing it. A
            person with dry, curly hair using an ultra-lightweight serum designed for straight,
            fine hair will receive surface coating with no meaningful scalp nourishment. These are
            not edge cases. They are the majority of outcomes when hair oil selection is driven by
            brand name, price, or generic marketing rather than a genuine understanding of hair
            type compatibility.
          </p>
          <p>
            India's diversity of hair types makes this problem particularly acute. The country's
            population spans an extraordinary range of hair textures, scalp characteristics, and
            environmental conditions — from the thick, coarse hair common across South India to
            the finer, straighter hair types prevalent in the Northeast; from the dry-scalp
            challenges of Delhi's winters to the humidity-driven frizz of Mumbai's monsoons; from
            the hard water of Bengaluru's tech corridors to the salt-laden coastal air of Chennai.
            No single, universal hair oil approach applies across this diversity — and treating it
            as if it does is the most expensive and time-consuming mistake Indian hair care
            consumers make.
          </p>
          <p>
            The good news is that the science of matching oil to hair type is well established and
            accessible. It comes down to four primary variables: the molecular weight of the oil
            base (which determines whether it coats the hair surface or penetrates it), the
            comedogenic rating of the formula (which determines whether it nourishes or clogs
            scalp follicles), the bioactive content (what the oil actually delivers to the follicle
            beyond moisture and shine), and the application method specific to your hair type.
            Get these four variables right, and the same formula can produce excellent results
            across a wide range of hair types. Get them wrong — even with a high-quality product —
            and the outcome ranges from useless to damaging.
          </p>
          <p>
            This guide exists to eliminate that mismatch. It covers the science of how different
            hair types interact with different oil profiles; a comprehensive matching guide that maps
            every major Indian hair type — fine, thick, curly, straight, oily-scalp, dry-scalp,
            colour-treated, and chemically damaged — to the oil formulation and application method
            that works; a science-backed deep dive into why biotin-enriched, lightweight formulas
            represent the most versatile cross-type solution currently available in the Indian
            market; a myth-clearing section that addresses the most damaging misconceptions
            embedded in Indian hair care culture; and a complete FAQ based on the exact questions
            Indian consumers search for most frequently. By the end, you will know precisely what
            your hair type needs, why it needs it, and how to use it correctly for results that are
            not just visible but measurable.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of Hair and Scalp — What You Need to Understand Before Choosing Any Oil</h2>

          <h3 className={styles.subHeading}>Hair Strand Architecture: Why Type Determines Everything</h3>
          <p>
            Every hair strand is composed of three concentric layers. The innermost layer — the
            <strong> medulla</strong> — is a loose, spongy core present only in thick hair and
            absent in fine strands. The middle layer — the <strong>cortex</strong> — is the
            structural heart of the strand, a tightly packed matrix of keratin proteins arranged
            in helical coils that determines both the hair's strength and its natural curl pattern.
            The outermost layer — the <strong>cuticle</strong> — is a series of overlapping,
            scale-like cells that protect the cortex from environmental damage when lying flat, and
            allow moisture loss and damage when lifted or disrupted.
          </p>
          <p>
            Hair type is determined primarily at the follicle level, not the strand level. A round
            follicle produces straight hair; an oval follicle produces wavy hair; a highly elliptical
            follicle produces tightly curled hair. The diameter of the follicle determines strand
            thickness — fine hair emerges from narrower follicles, thick hair from wider ones. This
            architectural reality is crucial for oil selection: the molecular size of an oil
            determines whether it can penetrate the cortex and deliver nutrients internally, or
            whether it simply coats the cuticle surface. Straight, fine hair with a smooth cuticle
            allows surface oils to travel easily from scalp to tip — accelerating greasiness. Curly
            hair with a naturally rougher cuticle surface holds oils differently, and the curl
            pattern itself prevents sebum from travelling the shaft naturally.
          </p>

          <h3 className={styles.subHeading}>The Scalp as an Ecosystem — Why One-Size-Fits-All Fails</h3>
          <p>
            The scalp is not simply the surface from which hair emerges. It is a complex biological
            ecosystem with approximately 100,000 follicles, each associated with a sebaceous gland
            that produces sebum — the natural oil that moisturises and protects both the scalp and
            the hair shaft. The rate of sebum production varies considerably between individuals
            and scalp types, influenced by genetics, hormones, diet, climate, and the products
            applied. An oily scalp produces more sebum than the scalp and hair can accommodate
            comfortably; a dry scalp produces insufficient sebum to adequately protect the hair
            shaft or maintain the scalp's acid mantle.
          </p>
          <p>
            Applying a heavy, large-molecule oil to an oily scalp — even a chemically benign one —
            compounds the excess by adding to the surface oil load, increasing the likelihood of
            follicle congestion and the inflammatory folliculitis that damages hair growth over
            time. Applying a lightweight oil to a dry scalp may be insufficient to address the
            moisture deficit in the deeper dermal layers where follicles are housed. This is why
            scalp type — not just hair type — must be one of the primary selection variables.
          </p>

          <h3 className={styles.subHeading}>What Biotin Does at the Follicle Level — Across All Hair Types</h3>
          <p>
            Biotin — Vitamin B7 — functions as an enzymatic cofactor in the metabolic pathway
            that synthesises keratin. This function is not hair-type-specific: every follicle,
            regardless of the texture, thickness, or curl pattern of the hair it produces, requires
            biotin to complete the keratin synthesis reaction that builds each strand. The structural
            protein composition of keratin is identical across all hair types — straight, curly,
            fine, and coarse hair all contain the same alpha-helical keratin chains. Biotin
            deficiency manifests differently across types — as brittleness in fine hair, as
            coarseness in thick hair, as curl disruption in curly hair — but the underlying
            biochemical deficit is the same.
          </p>
          <p>
            Topical delivery of biotin to the scalp — via a well-formulated oil with an appropriate
            carrier base — places the nutrient precisely at the follicle site where keratin
            synthesis occurs. This directness of delivery is the primary advantage of topical
            biotin oil over oral supplementation for hair purposes: the scalp receives a concentrated
            local dose rather than a systemically diluted fraction of a supplement's total biotin.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>🔬</span>
            <div>
              <strong>Key Scientific Insight:</strong> The molecular weight of the oil base is as
              important as its bioactive content. Oils with a molecular weight below approximately
              500 Daltons can penetrate the hair shaft's cuticle layer and reach the cortex — these
              are the truly penetrating oils. Oils with higher molecular weights sit on the cuticle
              surface, providing coating benefits but not internal nourishment. A lightweight,
              well-formulated biotin oil in the penetrating weight range delivers both scalp follicle
              nourishment and cortex-level hydration — making it genuinely more versatile than either
              a heavy conditioning oil or an ultra-light surface serum.
            </div>
          </div>
        </section>

        {/* ─── OIL TYPES ──────────────────────────────────────────────────── */}
        <section id="oil-types" className={styles.section}>
          <h2 className={styles.sectionTitle}>Types of Hair Oils and What They Actually Do</h2>

          <h3 className={styles.subHeading}>Penetrating Oils — The Growth and Strength Category</h3>
          <p>
            Penetrating oils are defined by their molecular weight — small enough to pass through
            the cuticle cell layers and reach the cortex. Within the cortex, they can reduce
            protein loss during washing, restore internal hydration, and — when formulated with
            bioactive compounds like biotin — deliver nutrients to the follicle matrix cells that
            produce each strand. This category is the most relevant for genuine hair growth and
            strengthening outcomes. Lightweight biotin-enriched formulas, certain fractionated oils,
            and specifically processed natural oils fall into this category.
          </p>
          <p>
            The advantage of penetrating oils for scalp use is twofold: they reach the follicle
            in the dermis where growth occurs, and they do not leave the surface residue that
            suffocates follicles and creates the greasy appearance that makes oiling impractical
            for daily life. For Indian urban consumers who need hair care that integrates with
            professional routines, penetrating formulas represent the practical and effective choice.
          </p>

          <h3 className={styles.subHeading}>Coating Oils — The Conditioning and Shine Category</h3>
          <p>
            Coating oils — including pure coconut oil at room temperature, argan oil, and
            marula oil — have molecular weights that prevent significant cuticle penetration.
            They work by forming a smooth, light-reflecting film over the cuticle surface,
            which reduces friction between strands, temporarily improves shine and manageability,
            and provides some protection against environmental damage. These effects are real and
            beneficial for many hair types — particularly thick, coarse, or chemically damaged
            hair that has a roughened cuticle surface.
          </p>
          <p>
            The limitation of coating oils is that their benefits are surface-level and temporary.
            They improve the appearance of existing hair without improving the health of the follicle
            producing new hair. For an oily scalp, they compound sebum accumulation. For fine hair,
            they add unwanted surface weight. For conditions requiring follicle-level intervention
            — hair fall, thinning, slow growth — they address symptoms on the wrong layer of the
            hair structure.
          </p>

          <h3 className={styles.subHeading}>Heavy Growth Oils — The High-Risk, High-Reward Category</h3>
          <p>
            Castor oil, black seed oil, and similar high-viscosity oils have gained substantial
            cultural traction in India as growth oils. Castor oil's ricinoleic acid content does
            have genuine anti-inflammatory and antifungal properties relevant to scalp health, and
            its high viscosity may contribute to follicle stimulation through the massage resistance
            it provides. However, its high comedogenic rating makes it a genuine risk for oily
            scalp types and fine hair types that are prone to follicle congestion.
          </p>
          <p>
            For thick, dry hair types with a healthy scalp — particularly those in low-humidity
            environments — heavy growth oils can be effective when used correctly. The critical
            error is applying them undiluted in large quantities to all hair types without
            consideration of comedogenic risk or hair weight tolerance. For most Indian consumers
            with urban lifestyles, the practical limitations of these oils — residue, heaviness,
            the need for multiple shampoo washes to remove — reduce consistency of use below the
            threshold required for visible results.
          </p>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Hair Problem — and the Oil That Addresses It</h2>
          <p className={styles.sectionIntro}>
            Most hair problems have a specific root cause that maps to a specific oil profile and
            application approach. Here are the four most common concerns among Indian adults —
            and how biotin oil addresses each.
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

        {/* ─── HAIR TYPE GUIDE ────────────────────────────────────────────── */}
        <section id="hair-type-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete Hair Type Oil Matching Guide</h2>
          <p className={styles.sectionIntro}>
            This is the definitive reference for matching HairOShine Biotin Oil to your specific
            hair type — including what to use, what to avoid, and precisely how to apply it for
            your type.
          </p>
          <div className={styles.skinTypeGrid}>
            {hairTypeMatching.map((ht) => (
              <div key={ht.type} className={styles.skinCard}>
                <div className={styles.skinCardTop}>
                  <span className={styles.skinIcon}>{ht.icon}</span>
                  <span className={styles.skinType}>{ht.type}</span>
                  <span className={`${styles.verdict} ${styles[ht.verdictClass]}`}>
                    {ht.verdict}
                  </span>
                </div>
                <div className={styles.skinCardMeta}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>✓ Use</span>
                    <span className={styles.metaValue}>{ht.oils}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabelRed}>✗ Avoid</span>
                    <span className={styles.metaValue}>{ht.avoid}</span>
                  </div>
                </div>
                <p className={styles.skinExplanation}>{ht.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PRODUCT DEEP DIVE ──────────────────────────────────────────── */}
        <section id="product-deep-dive" className={styles.section}>
          <h2 className={styles.sectionTitle}>HairOShine Biotin Oil — Why It Works Across Hair Types</h2>

          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              One Formula. Every Hair Type. Built for India.
            </p>
            <p className={styles.midCtaSub}>
              Lightweight enough for fine and oily types. Nourishing enough for thick and dry.
              Biotin-enriched for universal follicle benefit.
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
              <strong>Important Distinction:</strong> There is a critical difference between an oil
              that <em>improves hair appearance</em> and one that <em>improves hair growth</em>.
              Argan, marula, and similar coating oils are appearance oils — they make existing
              hair look better by smoothing the cuticle surface. They do not meaningfully improve
              what the follicle produces next. HairOShine Biotin Oil is a <em>growth-first</em>{' '}
              formula designed to change what your follicle produces, not just how your current
              hair looks. This distinction determines which product you should use — and what
              results you should expect from each.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Apply Hair Oil the Right Way — By Hair Type</h2>
          <p className={styles.sectionIntro}>
            Application technique varies significantly by hair type. The steps below apply to
            all types; the specific adjustments for each type are embedded within each step.
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
            💡 <strong>Pro Tip:</strong> The scalp massage is the highest-leverage step in this
            entire routine. Research consistently shows that scalp massage alone — without any oil —
            produces measurable improvements in hair thickness over 24 weeks through mechanical
            follicle stimulation. Adding a biotin-enriched oil to a proper massage routine
            compounds both the mechanical and nutritional benefits simultaneously. If your
            application window is short, prioritise the quality of the five-minute massage over
            the quantity of oil applied. For a complete understanding of how scalp health connects
            to full-body skin health, read our{' '}
            <Link
              href="/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026"
              className={styles.internalLink}
            >
              complete guide to calamine lotion uses and skin care in India
            </Link>{' '}
            — scalp and skin health share more biochemical overlap than most consumers realise.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>Realistic Results Timeline — What to Expect and When</h2>
          <p className={styles.sectionIntro}>
            The hair growth cycle operates on biological timescales. Below is an honest account
            of what consistent application delivers — mapped to weeks, not days.
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

        {/* ─── BUYING GUIDE ───────────────────────────────────────────────── */}
        <section id="buying-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete Buying Guide — Choosing a Hair Oil in India</h2>
          <p className={styles.sectionIntro}>
            India's hair oil market is one of the largest and most saturated in the world.
            Here is precisely what separates effective formulas from cosmetic ones — and what
            to look for on the label before purchasing.
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

          <h3 className={styles.subHeading}>The Three Most Common Buying Mistakes Indian Consumers Make</h3>
          <p>
            The first and most widespread mistake is selecting a hair oil based on a brand that
            dominates television advertising rather than ingredient transparency. Many market-leading
            hair oils in India spend the majority of their margin on distribution and advertising
            rather than formula quality. A product with a famous Bollywood endorser is not
            automatically a product with meaningful biotin concentration or a non-comedogenic base.
            The ingredient list is the only reliable signal — and it requires ten seconds to read.
          </p>
          <p>
            The second mistake is abandoning a quality product before the biological timeline for
            results has elapsed. The hair growth cycle operates on weeks and months, not days.
            A consumer who purchases a biotin oil, uses it for two weeks, sees no dramatic
            transformation, and concludes that the product does not work has simply quit before
            the process began. The follicle improvement phase — weeks two through six — is the
            period during which the scalp environment is being rebuilt. The visible results phase
            does not begin until week four to six at the earliest. Understanding this timeline
            before purchasing is the difference between completing an effective course of treatment
            and accumulating a bathroom shelf of abandoned half-bottles.
          </p>
          <p>
            The third mistake — and the one most specific to Indian hair care culture — is applying
            the same oil and technique used by a family member or friend without considering their
            hair type differs from yours. Generational knowledge about specific oils is valuable,
            but it was developed within a context where hair type diversity within a family unit
            was rarely considered. Your grandmother's technique with thick coconut oil may have
            been perfect for her thick, coarse, low-oiling-frequency hair type and completely
            wrong for your fine, oily hair that needs a lightweight biotin formula and a different
            application frequency entirely.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              The formula that crosses hair type boundaries — without the trade-offs.
            </p>
            <p className={styles.midCtaSub}>
              HairOShine Biotin Oil — lightweight enough for fine hair, nourishing enough for thick. Pack of 2.
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

        {/* ─── WHO NEEDS THIS ─────────────────────────────────────────────── */}
        <section id="who-needs" className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Benefits Most From a Biotin Hair Oil</h2>
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

        {/* ─── INTERNAL LINKS BAND ────────────────────────────────────────── */}
        <div className={styles.relatedBand}>
          <p className={styles.relatedBandTitle}>Complete Your Skincare Routine</p>
          <p className={styles.relatedBandSub}>
            Hair and skin health are deeply interconnected. A complete routine addresses
            both — with products matched to your specific type and climate.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/best-face-wash-oily-skin-india-2026"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🍊</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Face Wash for Oily Skin India 2026</p>
                <p className={styles.relatedCardSub}>FreshOLite Vitamin C — cleanse and brighten without stripping</p>
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
              href="/blog/best-hair-oil-hair-growth-india-biotin"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🧬</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Hair Oil for Hair Growth India 2026</p>
                <p className={styles.relatedCardSub}>HairOShine Biotin Oil — the complete growth guide</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ──────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Hair Oil Myths vs. Scientific Truth</h2>
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

        {/* ─── FAQ ────────────────────────────────────────────────────────── */}
        <section id="faq" className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions About Choosing Hair Oil</h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{f.q}</summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ─── BOTTOM CTA ─────────────────────────────────────────────────── */}
        <section className={styles.bottomCta}>
          <div className={styles.bottomCtaOrb} aria-hidden="true" />
          <h2 className={styles.bottomCtaTitle}>Your Hair Type Has a Specific Answer. This Is It.</h2>
          <p>
            Choosing the right hair oil is not complicated once you understand three things: your
            scalp type, your strand thickness, and your curl pattern. For the vast majority of
            Indian hair types — including oily scalp, fine hair, curly hair, and chemically treated
            hair — a lightweight, biotin-enriched formula applied correctly to the scalp is the
            most versatile and effective choice available. It nourishes where nourishment is needed,
            without the weight, congestion, or residue that heavy oils impose on incompatible types.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy HairOShine Biotin Oil on Amazon →
          </a>
          <p className={styles.bottomNote}>Pack of 2 · All Hair Types · Non-Greasy · Biotin-Enriched · Free Delivery Available</p>
        </section>

      </div>
    </article>
  );
}