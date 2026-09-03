import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './calamine-lotion-uses-blog.module.css';

export const metadata: Metadata = {
  title: 'Calamine Lotion Uses for Skin in India — Complete 2026 Guide | CALAFINE',
  description:
    'Complete guide to calamine lotion uses for skin in India. Treats itching, rashes, acne, sunburn & more. Discover how CALAFINE Lotion upgrades classic calamine.',
  keywords: [
    'calamine lotion uses for skin',
    'calamine lotion uses',
    'calamine lotion India',
    'calamine lotion for acne',
    'calamine lotion for itching',
    'calamine lotion for rashes',
    'calamine lotion for sunburn',
    'calamine lotion for pimples',
    'calamine lotion benefits',
    'calamine lotion how to use',
    'zinc oxide lotion India',
    'calamine lotion for oily skin',
    'calamine lotion for dry skin',
    'calamine lotion side effects',
    'best calamine lotion India 2026',
    'calamine lotion for sensitive skin',
    'calamine lotion for eczema',
    'calamine lotion for insect bites',
    'calamine lotion for chickenpox',
    'calamine lotion for heat rash',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/calamine-lotion-uses-skin-complete-guide',
  },
  openGraph: {
    title: 'Calamine Lotion Uses for Skin in India — Complete 2026 Guide',
    description:
      'Everything you need to know about calamine lotion — all its uses, science, skin type guidance, and how CALAFINE upgrades the classic formula for modern Indian skin.',
    images: [
      {
        url: '/images/calafine-lotion.png',
        width: 1200,
        height: 630,
        alt: 'CALAFINE Lotion — Complete Calamine Skin Guide 2026',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0foGtulz';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Calamine Lotion Remains Relevant in 2026' },
  { id: 'science', label: 'The Science Behind Calamine — What It Actually Does' },
  { id: 'zinc-deep-dive', label: 'Zinc Oxide and Ferric Oxide: The Active Ingredients Explained' },
  { id: 'problems-grid', label: 'Skin Problems Calamine Solves — And How' },
  { id: 'skin-type-guide', label: 'Complete Skin Type Suitability Guide' },
  { id: 'product-deep-dive', label: 'CALAFINE Lotion — Full Feature Breakdown' },
  { id: 'how-to-use', label: 'Step-by-Step Application Guide' },
  { id: 'results-timeline', label: 'Results Timeline — What to Expect and When' },
  { id: 'buying-guide', label: 'Complete Buying Guide for Calamine Lotion in India' },
  { id: 'who-needs', label: 'Who Needs Calamine Lotion Most' },
  { id: 'myths', label: 'Calamine Myths vs. Truth' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🌡️',
    problem: 'Heat Rash and Prickly Heat',
    desc: 'India\'s brutal summers — particularly in cities like Delhi, Nagpur, and Kolkata — cause sweat ducts to become blocked, producing the intensely itchy, red papules of miliaria (prickly heat). The burning sensation worsens with moisture and friction, creating a miserable feedback loop that interrupts sleep and daily function.',
    solution: 'Calamine\'s zinc oxide base acts as a drying agent that absorbs excess surface moisture while simultaneously cooling the inflamed skin. The lotion\'s evaporative action creates a physical cooling sensation on application, while the astringent properties tighten the skin surface and reduce the weeping and oozing that prolongs prickly heat outbreaks.',
  },
  {
    icon: '🦟',
    problem: 'Insect Bites and Allergic Itch',
    desc: 'Mosquitoes, bed bugs, ants, and other insects inject proteins and histamine-triggering compounds into the skin during bites. The resulting localised inflammation, swelling, and intense itch is mediated by histamine — and the urge to scratch creates secondary infections that compound the original wound significantly.',
    solution: 'Calamine lotion acts as a topical anti-pruritic — it counteracts the itch sensation directly at the skin surface by creating a protective, soothing film over the bite. The zinc oxide component has mild antiseptic properties that reduce the risk of secondary bacterial infection when scratching has already broken the skin barrier.',
  },
  {
    icon: '☀️',
    problem: 'Sunburn and UV-Induced Inflammation',
    desc: 'Sunburn is not merely a surface problem. UV radiation causes DNA damage in skin cells, triggering an inflammatory cascade that produces the redness, heat, swelling, and pain of a burn. In India, where UV indices regularly exceed 11 (extreme) for much of the year, sunburn occurs even on cloudy days and through light clothing.',
    solution: 'Applied to sunburned skin, calamine lotion provides immediate cooling relief through evaporative action, while zinc oxide reduces inflammation at the cellular level. The lotion creates a breathable physical barrier that protects the compromised skin surface from further UV exposure and environmental irritants while healing progresses.',
  },
  {
    icon: '⚡',
    problem: 'Contact Dermatitis and Skin Rashes',
    desc: 'Contact dermatitis — the red, itchy, sometimes blistering reaction triggered by exposure to allergens or irritants — affects a significant proportion of the Indian population. Triggers include nickel in jewellery (extremely common in India), certain fabric dyes, latex, cosmetic ingredients, and plant compounds like those in mango sap.',
    solution: 'Calamine lotion reduces the histamine-mediated itch and inflammation of contact dermatitis without interfering with the skin\'s own healing process. Its neutral pH and simple formulation make it one of the safest topical treatments for active dermatitis flares, providing relief while the triggering exposure is eliminated.',
  },
];

const skinTypes = [
  {
    type: 'Oily Skin',
    icon: '💧',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Calamine\'s mattifying and oil-absorbing properties make it ideal for oily skin. It reduces surface shine, minimises the appearance of pores, and creates a dry, comfortable finish without occluding the skin.',
  },
  {
    type: 'Dry Skin',
    icon: '🏜️',
    verdict: 'With Caution',
    verdictClass: 'caution',
    explanation: 'The drying action of calamine can exacerbate tightness and flakiness on very dry skin. Use sparingly on dry patches only, always follow with a moisturiser, and avoid full-face application if your skin is significantly dehydrated.',
  },
  {
    type: 'Combination Skin',
    icon: '⚖️',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Apply calamine lotion only to the oily zones — typically the T-zone — and avoid the dry cheek and jaw areas. This targeted approach delivers the oil-control benefit without over-drying areas that are already balanced.',
  },
  {
    type: 'Sensitive Skin',
    icon: '🌸',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Calamine\'s simple formulation — free from fragrances and complex actives — is among the most tolerated treatments for sensitive, reactive skin. Perform a patch test on the inner arm before full application. CALAFINE\'s gentle formula is specifically appropriate here.',
  },
  {
    type: 'Acne-Prone Skin',
    icon: '🔴',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Zinc oxide\'s mild antiseptic and anti-inflammatory properties, combined with oil absorption, make calamine one of the oldest and most reliable acne-supportive treatments. It reduces redness and sebum without the irritation of stronger actives like benzoyl peroxide.',
  },
  {
    type: 'Mature Skin',
    icon: '✨',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Mature skin benefits from calamine\'s anti-inflammatory and protective properties, particularly for managing age-related sensitivity and rosacea-like redness. Avoid use on very dry or eczema-prone mature skin without a concurrent moisturiser.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Multi-Action Itch Relief Without Systemic Side Effects',
    body1: `The most immediate and universally recognised use of calamine lotion is the relief of itching — pruritus in clinical terminology — across a wide range of causes. Itching is one of the most disruptive dermatological symptoms a person can experience. Unlike pain, which typically has a clear source and a predictable resolution, itch is often diffuse, relentless, and worsened by the very scratching it compels. The damage caused by chronic scratching — excoriation, secondary infection, post-inflammatory hyperpigmentation — often outlasts the original cause by weeks or months.

CALAFINE Lotion addresses itch through a dual mechanism. The zinc oxide component works as a mild astringent, tightening the superficial skin layers and reducing the sensitivity of local nerve endings that transmit itch signals. The iron oxide (which gives calamine its characteristic pink colour) contributes protective and mild astringent properties. Together, these create a surface environment that is less hospitable to the itch-scratch cycle, interrupting it at the skin level rather than systemically.`,
    body2: `What distinguishes topical calamine relief from oral antihistamines — the other common itch treatment — is the absence of systemic effects. Oral antihistamines cause drowsiness, dry mouth, and cognitive blunting in many users, and are inappropriate for extended or frequent use in adults who need to remain alert. Calamine lotion provides localised relief with virtually no systemic absorption, making it safe for repeated application throughout the day — including in children and during pregnancy — without the side effect profile of pharmacological alternatives. CALAFINE Lotion preserves this foundational safety while adding formulation improvements that extend comfort beyond basic itch suppression.`,
  },
  {
    number: '02',
    heading: 'Sebum Control, Pore Minimisation, and Acne Support',
    body1: `Acne in India is complicated by climate. The combination of high ambient temperatures, intense humidity during monsoon season, and the SPF-heavy, occlusive sunscreens many people use to manage UV exposure creates conditions of relentless sebum overproduction. Blocked follicles — follicles choked with a mixture of excess sebum, dead skin cells, and environmental particulates — are the primary physical cause of both comedonal (blackhead and whitehead) acne and inflammatory acne lesions.

Calamine lotion functions as a safe, non-irritating sebum management tool. Its zinc oxide base has a demonstrated ability to absorb surface oils, reduce the appearance of enlarged pores, and create a matte, non-greasy finish on the skin without the barrier disruption caused by harsh actives. Applied as a targeted spot treatment on active pimples or as a thin layer across the T-zone, it reduces the sebum-rich environment that acne-causing bacteria — particularly Cutibacterium acnes — require to proliferate. The mild antiseptic properties of zinc oxide add a secondary layer of protection against bacterial colonisation of already-compromised follicles.`,
    body2: `The advantage of calamine for acne-prone skin over stronger alternatives like benzoyl peroxide (BP) or high-concentration salicylic acid is the tolerance profile. BP causes significant dryness, peeling, and photosensitivity in many users — side effects that often lead to discontinuation and rebound oil production. Salicylic acid at therapeutic concentrations can similarly disrupt the barrier on sensitive or combination skin. Calamine, by contrast, reduces acne-related symptoms — oil, inflammation, surface bacteria — without the aggressive keratolytic action that damages the barrier. For mild-to-moderate acne, or as a complementary treatment alongside prescription actives, CALAFINE Lotion offers a reliable daily option that the skin builds tolerance to without difficulty.`,
  },
  {
    number: '03',
    heading: 'Sunburn Relief and Post-UV Skin Recovery',
    body1: `Sunburn management is one of the most clinically supported uses of calamine lotion, and one of the most practically relevant in the Indian context. India receives some of the highest UV radiation levels globally — UV indices of 10 to 12 (very high to extreme) are the norm across most of the country from March through September, and remain elevated year-round in southern states and coastal cities. Sunburn occurs not just during obvious outdoor exposure but during routine daily activity: commuting, walking between buildings, outdoor markets, and sports.

When sunburn occurs, the skin requires a treatment that simultaneously cools the inflamed surface, reduces ongoing inflammation, and protects the compromised barrier from further insult. CALAFINE Lotion addresses all three simultaneously. The lotion's evaporative action — the sensation of cooling as it dries on the skin surface — provides immediate physical relief from the heat and burning sensation of sunburn. The zinc oxide component's anti-inflammatory properties work at the cellular level, reducing prostaglandin-mediated inflammation in the uppermost dermal layers that cause the characteristic redness, swelling, and pain of UV injury.`,
    body2: `The barrier protection function is equally important. Sunburned skin has a compromised stratum corneum — the outermost protective layer — making it temporarily more permeable to both irritants and pathogens. Calamine lotion, once applied and dried, forms a thin protective film over this vulnerable surface. This film reduces transepidermal water loss (TEWL) from the damaged barrier, supports the skin's own rehydration process, and physically shields the inflamed surface from dust, pollution, and other environmental aggressors that would otherwise prolong the inflammatory response. Sunburned Indian skin — which is prone to post-inflammatory hyperpigmentation even from mild UV injury, particularly in medium-to-deep skin tones — benefits from this rapid inflammation control because hyperpigmentation intensity directly correlates with inflammation duration and severity.`,
  },
  {
    number: '04',
    heading: 'Chickenpox, Eczema, and Inflammatory Skin Condition Relief',
    body1: `Calamine lotion has been used in the management of chickenpox for generations — it is, in fact, one of the primary reasons most Indians recognise the distinctive pink lotion. In chickenpox, the varicella-zoster virus creates an intensely itchy, fluid-filled rash across the body that, when scratched, breaks open, spreads the virus, and leaves permanent scars through secondary bacterial infection and excoriation. Calamine lotion's role is specifically to manage the itch without occlusion or irritation — keeping the blisters intact, reducing the urge to scratch, and allowing the immune system to manage the viral infection without the compounding damage of mechanical injury.

The same principle applies to eczema (atopic dermatitis) flares. Eczema-affected skin is characterised by a compromised skin barrier, chronic inflammation, and intense episodic itch that is disproportionate to visible symptoms — particularly at night, when scratching causes significant damage while the person is too asleep to control it. Calamine lotion applied during flares provides a degree of symptomatic relief that reduces the scratching intensity, protecting the barrier from the excoriation damage that perpetuates the inflammatory cycle. It does not treat the underlying immunological cause of eczema, but its symptomatic relief is genuine and its safety profile makes it compatible with longer-term, repeated use alongside prescribed treatments.`,
    body2: `CALAFINE Lotion's formulation is particularly suited to these inflammatory conditions because it maintains the essential simplicity of calamine — avoiding the fragrance, preservative, and emollient ingredients that frequently trigger flares in eczema-prone and sensitive skin — while enhancing the base formula with skin-compatible additions that improve spreadability and contact time on irritated skin. For parents managing chickenpox in children, or adults navigating eczema flares in India's extreme seasonal conditions, CALAFINE provides a trusted, gentle tool with a safety record that spans generations of clinical use.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Cleanse the Affected Area Gently',
    desc: 'Wash the skin with a mild, pH-balanced cleanser and lukewarm water — never hot, which worsens inflammation. Pat dry with a clean, soft cloth. Do not rub. The skin should be clean and completely dry before application, as applying lotion over damp skin dilutes the formula and reduces its effectiveness.',
  },
  {
    num: '02',
    title: 'Shake the Bottle Thoroughly',
    desc: 'Calamine lotion is a suspension — the active zinc and iron oxides settle at the bottom of the bottle between uses. Shake vigorously for 10 to 15 seconds before every application to ensure the formula is uniformly mixed. An unshaken bottle delivers an ineffective, diluted application with the active ingredients remaining at the bottom.',
  },
  {
    num: '03',
    title: 'Apply with a Clean Cotton Ball or Fingertip',
    desc: 'Pour a small amount onto a clean cotton ball or use clean fingertips to apply directly to the affected area. Use gentle, dabbing motions rather than rubbing — particularly important on broken, sunburned, or rash-affected skin where friction causes pain and additional damage. Apply a thin, even layer across the entire affected area.',
  },
  {
    num: '04',
    title: 'Allow to Dry Completely — Do Not Rub In',
    desc: 'Unlike a moisturiser, calamine lotion is not meant to be rubbed in until invisible. Allow it to dry naturally on the skin surface — this takes approximately 2 to 3 minutes. The dried lotion film on the skin surface is where the active ingredient contact and protective barrier function occur. Rubbing it in defeats its purpose.',
  },
  {
    num: '05',
    title: 'Reapply Up to 3–4 Times Daily as Needed',
    desc: 'For acute conditions like insect bites, heat rash, or sunburn, reapply every 4 to 6 hours or as the soothing effect diminishes. For acne spot treatment, apply once at night and allow it to work overnight. For eczema or rash management, apply after each cleanse — typically morning and night during flares.',
  },
  {
    num: '06',
    title: 'Follow With Moisturiser on Dry or Sensitive Skin',
    desc: 'If your skin is dry or you are using calamine on a large area, apply a fragrance-free, non-comedogenic moisturiser 10 minutes after the calamine has fully dried. This prevents the drying action of the zinc oxide from compromising the skin barrier — particularly important for dry skin types or during winter use in northern India.',
  },
];

const timeline = [
  {
    period: 'Within Minutes',
    title: 'Immediate Cooling and Itch Relief',
    detail: 'The evaporative cooling sensation begins within seconds of application. Itch intensity reduces noticeably within 5 to 10 minutes for most users. Sunburn heat and discomfort diminish meaningfully after the first application.',
  },
  {
    period: 'Day 1–2',
    title: 'Redness and Inflammation Begin to Reduce',
    detail: 'Visible redness from sunburn, rashes, or insect bites begins to decrease with consistent application every 4 to 6 hours. The skin surface feels more comfortable, and the urge to scratch diminishes substantially.',
  },
  {
    period: 'Day 3–5',
    title: 'Active Lesions Dry Out and Begin Healing',
    detail: 'Pimples, bites, and rash lesions begin to flatten and dry. The protective film action has prevented secondary infection and scratching damage. Post-inflammatory redness is significantly reduced compared to untreated skin.',
  },
  {
    period: 'Week 1–2',
    title: 'Skin Returns to Baseline — Maintained Improvement',
    detail: 'For acute conditions (sunburn, bites, prickly heat), the skin should be fully resolved or near-resolved within one to two weeks of consistent use. Acne-prone skin maintained on calamine spot treatment shows sustained reduction in active lesions and surface oiliness.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧪',
    title: 'Active Ingredient Concentration',
    body: 'The therapeutic effect of calamine lotion depends entirely on its zinc oxide and ferric oxide content. The standard pharmaceutical formulation contains approximately 15% calamine (which includes ferric oxide) and 5% zinc oxide — concentrations that have been validated over decades of clinical use. Products that significantly dilute these actives to improve cosmetic elegance (thinner texture, less residue) at the expense of therapeutic concentration are delivering a weaker clinical effect. Always verify that the product states pharmaceutical-grade calamine and zinc oxide in its formulation.',
  },
  {
    icon: '🌿',
    title: 'Formulation Simplicity and Ingredient Safety',
    body: 'The skin conditions that calamine lotion is typically used for — itching, rashes, sunburn, eczema — frequently involve a compromised or sensitive skin barrier. Applying a product with a long list of fragrance compounds, complex preservatives, or unnecessary additives to already-inflamed or sensitised skin risks triggering additional reactions. The best calamine formulations are those that do their job with minimal additional ingredients — the simpler the formula, the lower the sensitisation risk on reactive skin.',
  },
  {
    icon: '💊',
    title: 'Pharmaceutical-Grade vs Cosmetic-Grade Classification',
    body: 'In India, calamine lotion is regulated by the Drugs and Cosmetics Act — products classified as pharmaceutical formulations are held to stricter manufacturing, sterility, and concentration standards than cosmetic-grade alternatives. Buying a pharmacy-grade calamine product ensures the active ingredients meet the therapeutic thresholds established by the Indian Pharmacopoeia. CALAFINE Lotion is a pharma-formulated product manufactured to these standards — a meaningful distinction when using the product for genuine medical indications like chickenpox, eczema, or acute dermatitis.',
  },
  {
    icon: '📦',
    title: 'Packaging and Shelf Stability',
    body: 'Calamine lotion is a suspension that separates on standing — the heavier zinc and iron oxide particles settle over time. Packaging that protects the product from light (UV degrades zinc oxide over time), maintains a secure seal, and allows adequate shaking before use is important for consistent efficacy. Additionally, check the manufacturing date — older stock that has been sitting in warehouses may have compromised stability even within its stated expiry date, particularly in India\'s warm, humid storage conditions.',
  },
];

const whoNeeds = [
  { icon: '☀️', label: 'Outdoor Workers and Commuters', desc: 'Daily sun exposure during long commutes in Indian cities creates cumulative UV damage, sunburn, and heat rash that calamine addresses directly and safely.' },
  { icon: '🦟', label: 'Mosquito-Prone Households', desc: 'In tropical Indian cities where mosquitoes are a year-round reality, calamine lotion is an essential household tool for managing bite-related itch and preventing secondary infection from scratching.' },
  { icon: '🧒', label: 'Parents of Young Children', desc: 'Children\'s skin is more reactive, more prone to heat rash and chickenpox, and requires the gentlest possible treatments. Calamine\'s established paediatric safety record makes it the first-choice topical for children\'s skin irritations.' },
  { icon: '🌡️', label: 'Prickly Heat and Sweat Rash Sufferers', desc: 'Anyone living through Indian summers in non-air-conditioned environments — which is the majority of the population — deals with miliaria regularly. Calamine is the most effective, accessible treatment available.' },
  { icon: '💆', label: 'Eczema and Sensitive Skin Patients', desc: 'The simplicity and gentleness of calamine makes it one of the few topical treatments that eczema patients can use during flares without risking additional sensitisation or barrier disruption.' },
  { icon: '🏃', label: 'Athletes and Active Individuals', desc: 'Sweat-induced chafing, fungal rash in skin folds, and heat-related skin irritation from exercise are all conditions calamine addresses — making it useful for anyone with an active lifestyle in India\'s climate.' },
  { icon: '✈️', label: 'Travellers Across India\'s Climate Zones', desc: 'Moving between India\'s diverse climate zones — humid coastal areas, dry deserts, cold mountains — creates skin stress and reactivity. Calamine\'s versatility across conditions makes it a practical travel essential.' },
  { icon: '👩‍⚕️', label: 'Post-Procedure Skin Recovery', desc: 'After minor cosmetic procedures, waxing, threading, or facial treatments, calamine provides gentle, non-interfering soothing for the resulting temporary redness and sensitivity.' },
];

const myths = [
  {
    myth: 'Calamine lotion is only for chickenpox — it has no other uses',
    truth: 'Chickenpox is the most culturally prominent use of calamine in India, but it represents only a fraction of the conditions calamine effectively treats. It is equally appropriate — and clinically supported — for heat rash, insect bites, sunburn, contact dermatitis, eczema flares, acne, and general skin irritation. The chickenpox association is cultural, not clinical.',
  },
  {
    myth: 'You should rub calamine lotion into the skin until it disappears',
    truth: 'Calamine lotion works by forming a film on the skin surface, not by being absorbed. Rubbing it in until it becomes invisible removes it from the surface where it provides its anti-itch, protective, and soothing functions. Apply in thin layers and allow to air dry — the visible pink residue on the skin indicates active ingredient contact.',
  },
  {
    myth: 'Calamine lotion is only for children — adults do not need it',
    truth: 'Calamine lotion is effective across all age groups, from infants to elderly adults. Adults dealing with occupational skin exposures, allergic reactions, eczema, acne, sunburn, and insect bites benefit from calamine just as significantly as children do. Its safety profile — minimal systemic absorption, no drug interactions, suitable during pregnancy — makes it arguably more useful for adults who may have contraindications to systemic treatments.',
  },
  {
    myth: 'More calamine lotion applied means faster or better results',
    truth: 'Calamine works through surface contact, not concentration above the minimum effective dose. Applying thick layers does not amplify the therapeutic effect — it simply creates a heavier residue, potentially blocks air circulation to the skin, and wastes product. A thin, even application that fully covers the affected area is clinically equivalent to a thick one in terms of active ingredient delivery.',
  },
  {
    myth: 'Calamine lotion treats the infection in chickenpox or bites',
    truth: 'Calamine does not have antiviral or significant antibacterial activity at the concentrations used in lotion form. Its role in chickenpox and infected bites is symptomatic — it reduces the itch that leads to scratching, which is the mechanism by which infection spreads and scarring occurs. The viral infection itself is managed by the immune system. Calamine\'s value is in protecting the skin from the damage that itch-driven scratching causes, not in eliminating the pathogen.',
  },
  {
    myth: 'Calamine lotion dries out the skin permanently',
    truth: 'The drying action of calamine is immediate, surface-level, and temporary. It does not alter the skin\'s sebaceous gland function or permanently reduce hydration capacity. After washing off calamine residue, the skin returns to its baseline hydration level. For dry skin types, the temporary drying effect is manageable with a follow-up moisturiser — it is not a reason to avoid calamine when it is genuinely needed for a skin condition.',
  },
];

const faqs = [
  {
    q: 'Can I use calamine lotion on my face every day?',
    a: 'Daily use on the full face is appropriate for oily and acne-prone skin types, where calamine\'s oil-absorbing and mild antiseptic properties are consistently beneficial. For dry or combination skin, daily full-face application is not recommended — instead, target only the oily or affected zones. Sensitive skin can use calamine daily during flares, but should switch to alternate-day use once the acute condition resolves, following with a gentle moisturiser to maintain barrier integrity.',
  },
  {
    q: 'Is calamine lotion safe during pregnancy?',
    a: 'Calamine lotion is generally considered safe for use during pregnancy. Its active ingredients — zinc oxide and ferric oxide — have minimal systemic absorption when applied topically, and there is no established evidence of foetal harm from topical calamine use. It is widely recommended by obstetricians for pregnancy-related itching, including pruritic urticarial papules and plaques of pregnancy (PUPPP). As with any product used during pregnancy, consult your gynaecologist before beginning use, particularly for large-area or long-term application.',
  },
  {
    q: 'How long does calamine lotion take to work on pimples?',
    a: 'As an overnight spot treatment on active pimples, calamine typically reduces redness and swelling noticeably within 8 to 12 hours — visible improvement is often apparent the following morning. For sustained acne management, consistent nightly application over two to three weeks produces meaningful reductions in breakout frequency and sebum levels. Calamine does not work as rapidly as benzoyl peroxide on individual pimples, but it produces comparable results with significantly less irritation.',
  },
  {
    q: 'Can calamine lotion be used on open wounds or broken skin?',
    a: 'Calamine lotion is safe to apply on skin where minor scratching or excoriation has broken the surface — such as scratched insect bites or mild chickenpox blisters that have opened. However, it should not be applied to deep wounds, surgical incisions, or significantly broken skin covering large areas. For these more serious skin breaks, wound-appropriate treatments and medical attention are more appropriate. The mild antiseptic properties of zinc oxide provide some protection against secondary infection on superficially broken skin.',
  },
  {
    q: 'Does calamine lotion expire and is it still effective past the date?',
    a: 'Yes, calamine lotion has an expiry date — typically two to three years from the manufacturing date. Past this date, the suspension stability, preservative efficacy, and active ingredient concentration can no longer be guaranteed by the manufacturer. Using expired calamine on healthy skin for minor issues is unlikely to cause harm, but it may be less effective. For use on compromised or sensitised skin — eczema, rashes, chickenpox — always use within the stated shelf life.',
  },
  {
    q: 'Can calamine lotion be used for fungal rashes or ringworm?',
    a: 'Calamine lotion has no antifungal activity and will not treat a fungal infection like tinea (ringworm) or tinea versicolor. It can, however, soothe the itch and surface irritation associated with a fungal rash while a proper antifungal treatment (clotrimazole, terbinafine, or prescription medication) addresses the underlying infection. Using calamine alone on a fungal rash without antifungal treatment will not resolve the infection and may mask diagnostic symptoms, potentially delaying appropriate treatment.',
  },
  {
    q: 'Is calamine lotion safe for babies and newborns?',
    a: 'Calamine lotion is commonly used for infants and young children for conditions including chickenpox, nappy rash, insect bites, and heat rash. However, for newborns (under four weeks of age), any topical product should be used only under paediatric guidance, as newborn skin has a significantly more permeable barrier and different absorption characteristics than older infant or adult skin. For older infants and children, calamine is among the safest topical treatments available and is routinely recommended by paediatricians in India.',
  },
  {
    q: 'Why does calamine lotion feel cool when applied?',
    a: 'The cooling sensation of calamine lotion comes from evaporative cooling — the same principle as sweat cooling the body. The water-based lotion evaporates from the skin surface, drawing heat energy away from the skin in the process. This is a physical cooling effect, not a pharmacological one. The sensation is most pronounced immediately after application and reduces as the lotion dries. This evaporative cooling is a significant part of why calamine is effective for sunburn and heat rash relief.',
  },
  {
    q: 'Can I mix calamine lotion with my moisturiser or other skincare?',
    a: 'Mixing calamine lotion directly with other products is not recommended. The suspension formulation of calamine is carefully balanced — mixing it with a moisturiser, serum, or other product changes the particle suspension, potentially reducing efficacy and altering the skin contact of the active ingredients. Instead, apply calamine to clean skin first, allow it to dry completely, and then layer other products on top if needed. This maintains the integrity of both formulations.',
  },
  {
    q: 'Does calamine lotion leave a white or pink residue?',
    a: 'Yes — calamine\'s characteristic pink colour comes from ferric oxide, and the dried lotion does leave a visible tinted residue on the skin. On light skin tones this appears as a pale pink cast; on deeper Indian skin tones it is often less visible. This residue is the active ingredient in contact with the skin surface and should not be rubbed off prematurely. For overnight use, the residue is washed off in the morning. For daytime use on visible areas, CALAFINE\'s formulation minimises but does not eliminate this natural characteristic of calamine.',
  },
];

export default function CalamineBlogPage() {
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
            <span className={styles.tag}>Skincare · Calamine · Dermatology · India Guide 2026</span>
            <h1 className={styles.heroTitle}>
              Calamine Lotion Uses
              <br />
              <em>for Skin in India</em>
              <br />
              <span className={styles.heroTitleSub}>The Complete 2026 Dermatology Guide</span>
            </h1>
            <p className={styles.heroSub}>
              Itching, rashes, sunburn, acne, prickly heat — calamine lotion has treated
              them all for over a century. This definitive guide explains the science,
              the uses, the skin types it suits, and why the right formula matters
              more than most people realise.
            </p>
            <div className={styles.heroMeta}>
              <span>⏱ 20 min read</span>
              <span>📅 April 2026</span>
              <span>📝 5,500+ words</span>
            </div>
            <div className={styles.heroActions}>
              
               <a href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy CALAFINE Lotion on Amazon →
              </a>
              <span className={styles.heroSubNote}>Pharma-Grade · All Skin Types · Gentle Formula</span>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <div className={styles.imageRing} aria-hidden="true" />
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/calafine-lotion.png"
                alt="CALAFINE Lotion — Calamine Lotion for Skin India"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 420px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🧪 Zinc Oxide</span>
              <span>❄️ Cooling Relief</span>
              <span>🌸 Gentle Formula</span>
              <span>✅ Pharma-Grade</span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>

        {/* ─── TABLE OF CONTENTS ──────────────────────────────────────────────── */}
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
          <h2 className={styles.sectionTitle}>Why Calamine Lotion Is Still the Most Relevant Skin Treatment in India in 2026</h2>
          <p>
            There is something almost counterintuitive about recommending a medicine that has been
            in continuous use for over a century in an era of cutting-edge dermatology, precision
            actives, and sophisticated cosmeceuticals. Every year, new serums promise cellular
            regeneration. New acids claim to resurface the skin in days. Peptide complexes are
            marketed as the future of anti-ageing. And yet, when the temperature in Delhi crosses
            44°C and your chest is covered in a burning, prickling rash — when a mosquito bite
            on your ankle has swollen and the itch is making concentration impossible — when your
            child wakes at 2am covered in chickenpox lesions — the product most households reach
            for is still the same pale pink lotion in a familiar bottle that their parents and
            grandparents used.
          </p>
          <p>
            Calamine lotion has survived the complete transformation of the pharmaceutical and
            cosmetic industries not through marketing or nostalgia, but through genuine, repeatedly
            demonstrated clinical utility. It works. It works consistently, across demographics,
            across skin tones, across age groups, and across the enormously varied skin conditions
            that India's climate, geography, and population diversity create. In a country where
            skin conditions related to heat, humidity, UV radiation, insect exposure, and hard water
            are endemic features of daily life for hundreds of millions of people — not exceptional
            events but regular occurrences — calamine's broad spectrum of application makes it
            irreplaceable in a way that highly targeted modern treatments simply cannot replicate.
          </p>
          <p>
            Consider the skin challenges that a working adult in Chennai faces in a single week.
            Prolonged commuting in peak UV hours creates cumulative sun exposure that most SPF
            application cannot fully prevent — sunburn on the forearms and neck is a consistent
            reality. The humidity and heat of coastal Tamil Nadu produce sweat rash in skin folds
            and on the back after anything more demanding than sitting still. Mosquitoes are a
            nightly presence; the resulting bites itch for days and, when scratched, frequently
            become infected and leave dark hyperpigmented marks that last for months. The office
            air conditioning creates a dry environment that makes oily-skinned individuals
            experience paradoxical sebum overproduction and clogged pores. A face wash with
            a slightly wrong pH, or a new fragrance in a deodorant, can trigger a contact
            dermatitis flare that sends the T-zone into angry, red inflammation.
          </p>
          <p>
            Calamine lotion is relevant to every single one of these scenarios. Not as a cure —
            it does not address the cause of any of these conditions. But as a safe, immediately
            effective, and repeatedly applicable symptomatic treatment that makes the lived
            experience of these conditions significantly more bearable while the body heals itself,
            calamine has no equivalent at its price point and accessibility level.
          </p>
          <p>
            The Indian pharmaceutical market offers dozens of calamine lotion formulations,
            ranging from the most basic zinc oxide suspension to more sophisticated preparations
            that add skin-compatible actives to enhance the base formula's efficacy. Understanding
            what makes a calamine formulation effective — the science behind its mechanism of
            action, the skin types it best suits, the correct application technique that maximises
            its benefit, and the specific conditions where it delivers the most value — is what
            separates someone who uses calamine well from someone who applies it incorrectly and
            concludes it does not work.
          </p>
          <p>
            This guide covers all of that in full. It begins with the biochemistry of calamine's
            active ingredients, moves through each major clinical indication in the Indian context,
            provides a complete skin type suitability assessment, offers a step-by-step application
            protocol, and addresses the most persistent myths and misconceptions that prevent
            people from using this treatment to its full potential. Whether you are new to calamine
            or have used it for years without understanding precisely why it works — read this guide
            in full. The depth of utility this product offers is almost certainly greater than
            you currently know.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ────────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science Behind Calamine Lotion — What It Actually Does to Your Skin</h2>

          <h3 className={styles.subHeading}>What Calamine Actually Is</h3>
          <p>
            Calamine is not a single chemical compound — it is a pharmaceutical preparation.
            The <strong>Indian Pharmacopoeia</strong> defines calamine as a mixture of zinc oxide
            with a small proportion of ferric oxide (iron oxide), which gives the preparation its
            characteristic pink colour. The standard calamine lotion formulation is an aqueous
            suspension — active mineral ingredients suspended in a water-based vehicle — that dries
            to leave those mineral particles in contact with the skin surface. This is not a lotion
            in the cosmetic sense of a moisturising, absorbing emulsion. It is a therapeutic
            suspension that functions through surface contact rather than dermal absorption.
          </p>
          <p>
            The water vehicle serves a dual purpose: it acts as the medium for even application
            of the mineral actives, and it contributes directly to the evaporative cooling effect
            that is one of calamine's most immediate therapeutic benefits. As the water phase
            evaporates from the skin, it takes heat energy with it — producing the distinctive
            cooling sensation that makes calamine so immediately satisfying on inflamed or sunburned
            skin. This is physics, not pharmacology, and it begins working within seconds of
            application.
          </p>

          <h3 className={styles.subHeading}>The Mechanism of Itch Relief</h3>
          <p>
            Pruritus — itch — is mediated by a complex network of peripheral nerve fibres
            (specifically C-fibres and Aδ-fibres) that respond to both chemical mediators
            (histamine, substance P, prostaglandins) and physical stimuli at the skin surface.
            The mechanism by which calamine reduces itch is multifactorial. Zinc oxide acts as
            a <strong>mild astringent</strong> — it has a mild protein-coagulating effect on the
            superficial layers of the epidermis that reduces the sensitivity of the nerve endings
            transmitting itch signals. This is a local effect, not a systemic antihistamine
            action, which explains why calamine's anti-itch benefit is specific to the treated
            area rather than general.
          </p>
          <p>
            Additionally, the dried mineral film on the skin surface creates a physical barrier
            that reduces the contact of environmental stimuli — heat, air movement, clothing
            friction — with the sensitised skin beneath. Many itch triggers are physical rather
            than chemical, and simply reducing the skin's exposure to these tactile stimuli
            while it heals meaningfully reduces itch intensity. The combination of mild
            neurological desensitisation at the surface and physical stimulus reduction makes
            calamine's anti-itch effect reliable across mechanistically different causes of itch —
            which is why it works for mosquito bites, chickenpox, eczema, and sunburn alike,
            despite these conditions having different underlying pathologies.
          </p>

          <h3 className={styles.subHeading}>The Anti-Inflammatory and Protective Actions</h3>
          <p>
            Zinc oxide has well-documented mild anti-inflammatory properties. At the concentrations
            used in calamine lotion (typically around 5%), it suppresses the synthesis of
            prostaglandins — local inflammatory mediators produced in damaged skin tissue —
            through inhibition of cyclooxygenase enzymes at the skin surface. This anti-inflammatory
            action is modest compared to topical corticosteroids but is clinically meaningful for
            mild-to-moderate inflammatory conditions, and crucially, carries none of the risks of
            steroid use (skin thinning, adrenal suppression, rebound inflammation) that make
            corticosteroids inappropriate for long-term or large-area use.
          </p>
          <p>
            Zinc oxide is also a mild antimicrobial agent. It has bacteriostatic activity against
            a range of skin-relevant pathogens, including <em>Staphylococcus aureus</em> — the
            bacterium responsible for the secondary infections that frequently complicate
            scratched insect bites, chickenpox lesions, and eczema flares. This is not a
            replacement for antibiotic treatment when genuine bacterial infection has established
            itself, but as a preventive measure on compromised skin, it provides a meaningful
            layer of protection.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> Zinc oxide is simultaneously an astringent, a mild
              anti-inflammatory, a mild antimicrobial, and a physical UV filter. This multi-modal
              activity is why calamine lotion is effective across such a wide range of skin
              conditions — no single mechanism explains all its uses. It is one of the most
              clinically versatile topical agents available at any price point.
            </div>
          </div>
        </section>

        {/* ─── ZINC OXIDE DEEP DIVE ───────────────────────────────────────────── */}
        <section id="zinc-deep-dive" className={styles.section}>
          <h2 className={styles.sectionTitle}>Zinc Oxide and Ferric Oxide: The Active Ingredients Explained</h2>

          <h3 className={styles.subHeading}>Zinc Oxide — The Primary Active</h3>
          <p>
            Zinc oxide (ZnO) is one of the most extensively studied topical agents in
            pharmaceutical dermatology. Its safety record spans not just decades but centuries
            of use across cultures — zinc compounds were used in wound healing preparations in
            ancient Indian Ayurvedic medicine, in Greek medicine, and in mediaeval European
            pharmacy long before any understanding of its mechanism. This historical depth of use
            corresponds with modern pharmacological data: zinc oxide at therapeutic concentrations
            is non-sensitising, non-irritating, non-comedogenic, safe across all age groups
            including neonates, and compatible with virtually every co-medication and skin condition.
          </p>
          <p>
            Topically, zinc oxide is classified as a <strong>skin protectant</strong> by regulatory
            bodies globally. It forms a physical barrier on the skin surface that reduces moisture
            loss, protects against mechanical irritation, and blocks a portion of UV radiation —
            zinc oxide is the same active used in mineral sunscreens, where it functions as a
            broad-spectrum UVA/UVB filter. In the context of calamine lotion, this UV-filtering
            property is particularly useful for sunburned skin, where reducing ongoing UV exposure
            of the already-damaged barrier accelerates recovery. The astringent action results from
            zinc ions forming complexes with skin surface proteins, creating mild superficial
            protein precipitation that tightens the skin, reduces oozing from weeping rashes,
            and desensitises local nerve endings.
          </p>

          <h3 className={styles.subHeading}>Ferric Oxide — The Pink Pigment with a Purpose</h3>
          <p>
            The pink colour of calamine lotion is not purely cosmetic — ferric oxide (iron oxide,
            Fe₂O₃) is a genuine component of the therapeutic formulation and has its own
            contribution to the preparation's activity. Ferric oxide has mild astringent
            properties that complement zinc oxide's action, and the combination of the two
            mineral oxides creates a more complete surface effect than zinc oxide alone would
            produce. Iron oxide pigments also have a UV-absorbing function, contributing to the
            physical sun protection that the dried lotion film provides.
          </p>
          <p>
            There is also a practical, clinical reason to value the pink colouration: it makes
            application and coverage visible. When treating a child's chickenpox rash, or applying
            calamine to an irregularly shaped insect bite or rash area, the visible pink colour
            allows precise application and clear identification of treated versus untreated skin —
            preventing gaps in coverage and ensuring consistent active ingredient contact across
            the entire affected area. This seemingly trivial feature is, in practice, one of the
            reasons calamine is so consistently used correctly even without extensive instruction.
          </p>

          <h3 className={styles.subHeading}>The Role of the Vehicle and Suspension Base</h3>
          <p>
            The active ingredients in calamine lotion work at the skin surface — they are not
            absorbed into the dermis in therapeutically significant quantities. This means the
            vehicle in which they are suspended determines how evenly they coat the skin, how
            long they remain in contact before being disturbed, and how comfortable the
            application experience is for the user. A well-formulated calamine suspension allows
            even distribution of the mineral particles with appropriate shaking, spreads smoothly
            without dragging on irritated skin, dries at an appropriate rate to provide the
            evaporative cooling benefit without drying too rapidly to spread effectively, and
            leaves a film that is neither too thick (which would trap heat and sweat) nor too
            thin (which would reduce active ingredient contact).
          </p>
          <p>
            CALAFINE Lotion's pharmaceutical formulation has been developed to optimise these
            vehicle characteristics — producing a suspension that maintains appropriate particle
            distribution, applies comfortably on irritated skin, and creates the therapeutic
            surface film that delivers zinc oxide and ferric oxide's combined benefits effectively
            across the wide range of conditions for which calamine is indicated.
          </p>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Skin Problems Calamine Lotion Solves — And Exactly How</h2>
          <p className={styles.sectionIntro}>
            Each of these conditions is a daily reality for significant numbers of people across
            India. Here is the specific mechanism by which calamine addresses each one.
          </p>
          <div className={styles.problemsGrid}>
            {problemCards.map((card) => (
              <div key={card.problem} className={styles.problemCard}>
                <span className={styles.problemIcon}>{card.icon}</span>
                <h3 className={styles.problemTitle}>{card.problem}</h3>
                <p className={styles.problemDesc}>{card.desc}</p>
                <div className={styles.problemFix}>
                  <span className={styles.fixLabel}>✓ How Calamine Helps</span>
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
            Calamine lotion is not universally ideal for every skin type in every situation.
            Understanding how it interacts with your specific skin type allows you to use it
            effectively and avoid the limited situations where it is less appropriate.
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
              Pharma-Grade Calamine. Multi-Condition Relief. Gentle for All Ages.
            </p>
            <p className={styles.midCtaSub}>
              CALAFINE Lotion — the modern, pharmaceutical-grade calamine formulation built for
              India's skin conditions, climate, and daily reality.
            </p>
            
            <a  href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get CALAFINE Lotion on Amazon — Check Price &amp; Availability →
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
              <strong>Important Distinction:</strong> There is a meaningful difference between
              a <em>pharmaceutical-grade calamine formulation</em> and a
              <em> cosmetic calamine-themed product</em>. Pharmaceutical calamine lotion is
              formulated to Indian Pharmacopoeia standards with defined active ingredient
              concentrations and manufacturing controls. Cosmetic products that contain calamine
              as one ingredient among many are primarily designed for cosmetic appeal — they may
              contain fragrance, complex emollients, and other additives that reduce their
              suitability for use on sensitised, inflamed, or barrier-compromised skin.
              CALAFINE Lotion is a pharmaceutical preparation — it is the calamine product
              your dermatologist means when they recommend calamine, not a cosmetically
              enhanced imitation.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Application Guide — Using Calamine Lotion Correctly</h2>
          <p className={styles.sectionIntro}>
            The most common reason calamine lotion underperforms is incorrect application.
            Treating it like a moisturiser — rubbing it in until invisible — removes it from
            the surface where it works. Follow this protocol precisely.
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
            💡 <strong>Pro Tip:</strong> Store your calamine lotion in the refrigerator during
            India's summer months. Cold calamine applied to sunburned or heat-rashed skin
            provides significantly amplified cooling relief — the combination of cold temperature
            and evaporative cooling creates an immediate, intense soothing effect that
            room-temperature application cannot replicate. This simple step dramatically
            improves the application experience for the conditions where you most need relief.
            For comprehensive skin barrier care alongside calamine use, our{' '}
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.internalLink}
            >
              guide to the best moisturiser for combination skin
            </Link>{' '}
            explains exactly how to layer hydrating products safely over treated skin.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>Results Timeline — What Calamine Lotion Delivers and When</h2>
          <p className={styles.sectionIntro}>
            Calamine works on different timescales for different conditions. Here is an honest,
            condition-appropriate account of when to expect each type of improvement.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — Choosing the Right Calamine Lotion in India</h2>
          <p className={styles.sectionIntro}>
            Not all calamine lotions on the Indian market deliver equivalent therapeutic value.
            Here is exactly what to evaluate before you buy.
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

          <h3 className={styles.subHeading}>Common Mistakes People Make When Using Calamine Lotion in India</h3>
          <p>
            The most prevalent mistake is applying calamine lotion and then immediately rubbing it
            in with fingers or a cloth until the pink colour has disappeared. This approach
            physically removes the active ingredient from the skin surface — the mineral
            particles are wiped away — and leaves behind primarily the water vehicle, which
            evaporates and leaves almost nothing therapeutic in contact with the skin. The correct
            technique is a gentle dabbing application followed by air drying. The visible pink film
            on the skin is the treatment. Its persistence on the skin surface is the measure of
            active ingredient contact time.
          </p>
          <p>
            The second common error is applying calamine without shaking the bottle. Because
            calamine is a suspension rather than a solution, the zinc oxide and ferric oxide
            particles settle gravitationally when the bottle is at rest. An unshaken bottle pours
            a clear-to-pale liquid that is primarily water and glycerin — the active minerals remain
            at the bottom. The first several applications from an unshaken bottle may be near-ineffective.
            Every application requires vigorous shaking for 10 to 15 seconds to restore appropriate
            particle distribution.
          </p>
          <p>
            The third mistake — particularly common in the treatment of chickenpox — is applying
            calamine lotion over skin that has not been gently cleansed. Applying over dirt,
            sweat, or existing product residue reduces direct skin contact of the active ingredients
            and creates an unsanitary layer that can contribute to the secondary bacterial infections
            that calamine is partly being used to prevent. Always apply to clean, dry skin.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              Pharmaceutical-grade calamine. Made for India's skin and climate.
            </p>
            <p className={styles.midCtaSub}>
              CALAFINE Lotion — trusted formulation, appropriate concentration, correct vehicle.
              Available on Amazon with fast delivery across India.
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
            Calamine manages skin irritation and inflammation. Pair it with the right
            cleanser, moisturiser, and sun protection for a complete skin health routine.
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
                <p className={styles.relatedCardSub}>Moist Sure Cream — Aloe Vera, Vitamin-E &amp; Jojoba Oil</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link
              href="/blog/best-sunscreen-oily-skin-india-spf-guide"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🛡️</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Sunscreen for Oily Skin India 2026</p>
                <p className={styles.relatedCardSub}>Freshotil Sunguard 50 — broad-spectrum SPF without the grease</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Calamine Lotion Myths vs. Truth — What Indian Consumers Get Wrong</h2>
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
          <h2 className={styles.sectionTitle}>Frequently Asked Questions About Calamine Lotion</h2>
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
          <h2 className={styles.bottomCtaTitle}>The Skin Treatment India Has Trusted for Generations — Now Better</h2>
          <p>
            Calamine lotion's century-long track record is not an accident. It addresses the
            most common, most persistent skin conditions in the Indian context — heat rash,
            insect bites, sunburn, contact dermatitis, acne, eczema — safely, effectively,
            and across every age group. CALAFINE Lotion is the pharmaceutical-grade
            formulation that preserves this trusted core while meeting modern standards of
            manufacturing quality and formulation precision. Keep it in your medicine cabinet,
            your travel kit, and — especially — your refrigerator during India's summers.
          </p>
          
          <a  href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy CALAFINE Lotion on Amazon →
          </a>
          <p className={styles.bottomNote}>
            All Skin Types · Safe for Children · Pharma-Grade Formula · Free Delivery Available
          </p>
        </section>

      </div>
    </article>
  );
}