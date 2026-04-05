import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './best-sunscreen-acne-prone-skin-india-blog.module.css';

export const metadata: Metadata = {
  title: 'Best Sunscreen for Acne-Prone Skin in India 2026 — Complete SPF Guide',
  description:
    'Find the best sunscreen for acne-prone skin in India. Non-comedogenic, lightweight SPF that protects without clogging pores or causing breakouts. Expert guide.',
  keywords: [
    'best sunscreen for acne-prone skin India',
    'non-comedogenic sunscreen India',
    'sunscreen for oily acne skin India',
    'SPF for acne-prone skin India 2026',
    'sunscreen without breakouts India',
    'lightweight sunscreen India',
    'sunscreen for pimple-prone skin',
    'best SPF for oily skin India',
    'gel sunscreen India acne',
    'sunscreen for sensitive acne skin',
    'acne-safe sunscreen India',
    'no white cast sunscreen India',
    'sunscreen for Indian skin tone',
    'daily sunscreen acne skin India',
    'zinc oxide sunscreen India acne',
    'matte sunscreen India oily skin',
    'sunscreen for combination skin India',
    'best face sunscreen India 2026',
    'sunscreen for dark spots acne India',
    'SPF 50 sunscreen India acne',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/best-sunscreen-acne-prone-skin-india',
  },
  openGraph: {
    title: 'Best Sunscreen for Acne-Prone Skin in India 2026 — Complete SPF Guide',
    description:
      'Non-comedogenic, lightweight sunscreen that protects acne-prone Indian skin without clogging pores. The definitive 2026 SPF guide for Indian skin types.',
    images: [
      {
        url: '/images/sunscreen-acne-prone-skin-india.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Sunscreen for Acne-Prone Skin India 2026',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0gZcVcH2';

// ─── DATA ARRAYS ─────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Sunscreen Is Non-Negotiable for Acne-Prone Skin' },
  { id: 'science', label: 'The Science of UV, Acne, and Post-Inflammatory Hyperpigmentation' },
  { id: 'ingredients', label: 'Sunscreen Ingredients — What Acne Skin Needs vs. What to Avoid' },
  { id: 'problems-grid', label: 'Your Acne-Sunscreen Problem — and the Solution' },
  { id: 'skin-type-guide', label: 'Skin Type Suitability Guide' },
  { id: 'product-deep-dive', label: 'Product Deep Dive — Feature-by-Feature Breakdown' },
  { id: 'how-to-use', label: 'How to Apply Sunscreen Over an Acne Routine' },
  { id: 'results-timeline', label: 'What to Expect — Skin Improvement Timeline' },
  { id: 'buying-guide', label: 'Complete Buying Guide for Acne-Prone Indian Skin' },
  { id: 'who-needs', label: 'Who Needs This Sunscreen Most' },
  { id: 'myths', label: 'Sunscreen Myths That Are Making Your Acne Worse' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🔴',
    problem: 'Sunscreen Triggering Fresh Breakouts',
    desc: 'Heavy emollients, pore-clogging silicones, and occlusive bases in conventional sunscreens are a perfect storm for acne-prone skin. They trap sebum in follicles, provide a warm environment for C. acnes bacteria to multiply, and cause new inflamed lesions within 24–48 hours of application.',
    solution: 'A non-comedogenic formula built on water-gel or lightweight fluid bases delivers UV protection without the pore-blocking layer. Look for zero comedogenic-rated ingredients and explicit dermatological testing certification — not just "oil-free," which alone does not guarantee non-comedogenicity.',
  },
  {
    icon: '⚫',
    problem: 'White Cast on Indian Skin Tones',
    desc: 'Physical sunscreens with high concentrations of uncoated zinc oxide or titanium dioxide leave a chalky white or grey residue that is particularly visible on the medium-to-dark complexions common across South Asia. For Indian skin tones, this white cast is both aesthetically unacceptable and a practical barrier to daily use.',
    solution: 'Tinted, translucent, or micronised mineral filters — and modern chemical filter combinations designed for South Asian skin — provide full-spectrum UV protection without residue. SPF protection only works when applied consistently, so a formula that disappears invisibly on Indian skin tones is a clinical requirement, not a cosmetic preference.',
  },
  {
    icon: '💧',
    problem: 'Greasy Finish Worsening Oily Skin',
    desc: 'India\'s climate turns a greasy sunscreen into a disaster for oily, acne-prone skin. Excess oil on the surface creates shine, but more critically, the occlusive film traps sweat and sebum against the skin throughout the day — directly feeding the conditions that cause closed comedones and inflamed pustules.',
    solution: 'Matte-finish, oil-controlling sunscreen formulas absorb excess sebum rather than adding to it. Ingredients like niacinamide, silica, and kaolin clay within the sunscreen base provide an active sebum-management function while the UV filters do their protective work — leaving skin matte for hours even in coastal humidity.',
  },
  {
    icon: '🌑',
    problem: 'Post-Acne Dark Spots Getting Darker Despite Treatment',
    desc: 'Post-inflammatory hyperpigmentation (PIH) is the longest-lasting consequence of acne on Indian skin. Indian and South Asian skin tones have higher baseline melanin activity, meaning UV exposure dramatically accelerates the darkening of PIH marks — turning weeks of potential fading into months of deepening discolouration.',
    solution: 'Broad-spectrum SPF 50 applied daily to active and healing acne lesions is the single most effective PIH prevention available. Without it, every brightening serum and vitamin C treatment fights against daily UV damage that re-darkens marks faster than any topical can fade them. Sunscreen is the prerequisite to every other treatment.',
  },
];

const skinTypes = [
  {
    type: 'Oily, Acne-Prone',
    icon: '💦',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'The ideal candidate. A matte, non-comedogenic sunscreen directly addresses both UV protection and oil control. Apply after actives and before any tinted product. The matte finish lasts longest on oily skin when applied to a well-moisturised, clean base.',
  },
  {
    type: 'Combination, Breakout-Prone',
    icon: '⚖️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Apply across the entire face rather than only to oily zones — UV damage does not respect the T-zone boundary. The non-comedogenic base is safe for drier cheek areas while controlling oil in the T-zone simultaneously.',
  },
  {
    type: 'Dry Skin With Acne',
    icon: '🏜️',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Dry skin with acne benefits from SPF protection but may find very matte finishes too drying during winter. Layer a lightweight, non-comedogenic moisturiser before sunscreen and allow it to absorb fully before SPF application.',
  },
  {
    type: 'Sensitive, Reactive Skin',
    icon: '🌸',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Perform a patch test on the inner arm before full-face application. Fragrance-free, mineral-leaning formulas are safest for reactive skin. The absence of heavy fragrance compounds and high-concentration drying alcohol reduces the risk of sensitisation.',
  },
  {
    type: 'Post-Acne, PIH-Prone',
    icon: '🎯',
    verdict: 'Essential',
    verdictClass: 'excellent',
    explanation: 'For anyone with active post-inflammatory hyperpigmentation, sunscreen is not optional — it is the most critical step in the routine. Without daily SPF 50 broad-spectrum coverage, every brightening active fights against UV-driven melanin stimulation that re-darkens marks daily.',
  },
  {
    type: 'Adult Acne, 30–45',
    icon: '✨',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Adult acne — increasingly prevalent in Indian women between 30 and 45 — coincides with the anti-ageing benefits of consistent SPF use. A non-comedogenic SPF 50 provides simultaneous acne-safe UV protection and photoageing prevention in one step.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Broad-Spectrum SPF 50 — Full UV Protection for Indian Sun Intensity',
    body1: `India's geographic position means UV Index values between 10 and 12 — classified as "extreme" by WHO standards — are routine across the majority of the country for six to eight months of the year. In cities like Chennai, Hyderabad, Bengaluru, and Mumbai, daily UV exposure during peak hours (10 AM to 4 PM) is sufficient to cause significant DNA damage to skin cells, trigger melanin overproduction in existing post-acne marks, and suppress the skin's natural immune response to bacterial infection. SPF 30 filters approximately 97% of UVB radiation. SPF 50 filters approximately 98%. In high-UV environments, this additional 1% translates to meaningfully less cumulative damage over months and years of daily exposure.

Broad-spectrum protection — which addresses both UVA (responsible for pigmentation, skin ageing, and immune suppression) and UVB (responsible for burning and direct DNA damage) — is non-negotiable in the Indian context. Many Indian consumers purchase SPF 30 on the basis that the difference from SPF 50 is minimal. The mathematical difference in filtered radiation is small; the practical difference in accumulated daily UV damage across India's high-UV environment over a year of use is not.`,
    body2: `For acne-prone skin specifically, UVA radiation matters beyond its pigmentation and ageing effects. UVA penetrates glass windows and clouds — meaning indoor exposure in offices near windows, car travel, and overcast days all contribute to the UV load on acne-marked skin. A person who drives 30 minutes each way to work in a city like Bengaluru or Pune receives meaningful left-side facial UVA exposure from window glass that compounds PIH darkening over months. This makes daily SPF application — including on cloudy days and even when primarily indoors — the correct protocol for Indian skin managing active or healing acne.`,
  },
  {
    number: '02',
    heading: 'Non-Comedogenic Formula — Clinically Rated Pore-Safe for Acne Skin',
    body1: `Comedogenicity — the tendency of an ingredient to clog pores and trigger acne — is rated on a scale of 0 to 5, where 0 is completely pore-safe and 5 is highly likely to cause breakouts. Many conventional sunscreens contain ingredients rated 3 to 5 on this scale: isopropyl myristate (rated 5), coconut oil (rated 4), certain silicones, heavy emollients, and some UV filter solvents. Applied daily to acne-prone skin, these ingredients progressively worsen pore congestion — which is precisely why many people with acne have concluded, incorrectly, that sunscreen itself causes their breakouts rather than the specific formula they were using.

A properly non-comedogenic sunscreen contains only ingredients rated 0 to 1 on the comedogenicity scale — with UV filters in water-dispersible or alcohol-free bases, lightweight hydrating compounds, and none of the heavy emollients that clog follicle openings. The result is a formula that sits on the skin's surface providing UV filtration without the occlusive layer that traps sebum and C. acnes bacteria in the follicle environment.`,
    body2: `This distinction between "oil-free" and "non-comedogenic" is one of the most important and most commonly misunderstood in the acne skincare category. An oil-free sunscreen replaces conventional oils with other occlusive agents — silicones, waxes, or synthetic emollients — some of which have equal or higher comedogenic ratings than the oils they replace. A non-comedogenic formula, by contrast, has been specifically formulated and tested to confirm that none of its ingredients, individually or in combination, triggers follicle blockage in acne-prone skin. For Indian consumers managing active acne, this distinction determines whether their SPF protection heals or harms the skin it is meant to protect.`,
  },
  {
    number: '03',
    heading: 'Matte Finish and Sebum Control — Oil Management Built Into the Formula',
    body1: `India's climate creates a specific challenge for oily, acne-prone skin that no other country's skincare culture fully grasps: the combination of high ambient temperature, high humidity — particularly in coastal cities and during monsoon across the country — intense UV radiation, and pollution creates conditions where sebum overproduction is both more severe and more consequential than in temperate climates. The skin's sebaceous glands respond to heat by increasing sebum output. Humidity prevents the skin's natural moisture evaporation that partially moderates this production. The result is excess oil on the surface that mixes with pollution particles, creates an environment for bacterial proliferation, and — when trapped under an occlusive sunscreen — directly feeds new acne formation.

A matte-finish sunscreen formula addresses this through active sebum-absorbing components built into the base rather than applied as a separate step. Ingredients such as silica microspheres, kaolin clay, and specific mattifying polymers absorb sebum produced throughout the day into the formula itself, reducing surface shine and — more importantly for acne skin — reducing the sebum available to mix with comedogenic environmental particles and clog pores.`,
    body2: `The practical benefit of this integrated matte function is a significant reduction in the midday oiliness cycle that most acne-prone Indian skin sufferers experience as inevitable. The pattern of clean skin at 8 AM becoming noticeably oily and prone to touch-triggered breakouts by noon is driven by the combination of sebum production and the absence of absorption. A mattifying sunscreen interrupts this cycle not by suppressing sebum production — which would require systemic intervention — but by absorbing it at the surface as it is produced, keeping the skin cleaner and reducing the window during which pore congestion can develop. For those who cannot reapply sunscreen midday due to office environments, this extended matte function is particularly valuable.`,
  },
  {
    number: '04',
    heading: 'PIH Protection — Preventing Post-Acne Marks From Deepening',
    body1: `Post-inflammatory hyperpigmentation is the single most common and most complained-about consequence of acne on Indian skin — and it is a consequence that sunscreen addresses more effectively than any other single product in a skincare routine. When an acne lesion heals, it leaves behind an area of increased melanin production in the skin — a flat mark ranging from pink in lighter Indian skin tones to dark brown or purple-black in deeper tones. These marks can persist for six to twenty-four months without UV protection, and for three to six months with consistent, correctly applied SPF 50 broad-spectrum coverage.

The mechanism is straightforward: UV radiation stimulates melanocytes — the cells responsible for melanin production — in the vicinity of the PIH mark, causing them to produce additional melanin that deepens and spreads the discolouration. Every day of unprotected UV exposure to a healing PIH mark potentially adds weeks to its fading timeline. Conversely, consistent daily broad-spectrum SPF 50 application over healing marks suppresses this UV-driven melanin stimulation, allowing the skin's natural turnover cycle to gradually replace hyperpigmented cells with normally pigmented ones.`,
    body2: `This is why dermatologists universally recommend sunscreen as the first step in PIH management — before vitamin C, before niacinamide, before kojic acid, before any brightening active. Those actives work by suppressing or dispersing melanin that has already been produced. Sunscreen prevents the production of additional melanin that would undo their work. Using brightening actives without daily SPF protection is the skincare equivalent of mopping water from a floor while leaving the tap running. The combination of a non-comedogenic SPF 50 applied daily with appropriate brightening actives in the evening routine typically reduces PIH fading timelines from twelve to twenty-four months without protection to three to six months with it — a difference that is genuinely life-changing for the self-confidence of Indian adults managing post-acne skin.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Cleanse Thoroughly Before Any SPF Application',
    desc: 'Sunscreen applied to a dirty face traps pollution particles, excess sebum, and residual product beneath the UV filter layer — directly worsening pore congestion. Use a gentle, low-pH cleanser appropriate for acne-prone skin every morning before sunscreen. Do not skip this step even when rushing.',
  },
  {
    num: '02',
    title: 'Apply Actives and Toners First — Allow Full Absorption',
    desc: 'If your morning routine includes toners, essences, niacinamide serums, or vitamin C, apply them in order of thinnest to thickest consistency before sunscreen. Allow each layer to absorb for 60 seconds minimum. Sunscreen applied over unabsorbed actives dilutes both the active and the SPF filter — reducing effectiveness of both.',
  },
  {
    num: '03',
    title: 'Use the Correct Amount — Two Finger-Lengths or Half a Teaspoon',
    desc: 'SPF testing uses 2 mg per cm² of skin — significantly more than most people apply daily. The practical guideline is two finger-lengths of sunscreen for the face alone, or approximately half a teaspoon. Under-application is the most common reason sunscreen users receive less protection than the SPF number indicates. Acne-prone skin is not exempt from this requirement.',
  },
  {
    num: '04',
    title: 'Apply to All Sun-Exposed Areas — Including Neck and Ears',
    desc: 'The neck, ears, and décolletage are equally exposed to UV radiation and equally susceptible to PIH acceleration on healing acne marks. Apply sunscreen to all these areas as part of the morning routine. For Indian urban commuters, the back of hands also deserves consistent attention.',
  },
  {
    num: '05',
    title: 'Allow to Set for Three to Five Minutes Before Makeup or Touching',
    desc: 'Allow sunscreen to set before applying any makeup or touching the face. Disturbing the sunscreen film before it has set disrupts the uniformity of the UV filter layer — creating areas of reduced protection adjacent to areas of excess product rather than the smooth, consistent film that delivers the rated SPF.',
  },
  {
    num: '06',
    title: 'Reapply Every Two Hours if Outdoors or After Significant Sweating',
    desc: 'SPF protection degrades with UV exposure, sweat, and rubbing. For outdoor activity, reapplication every two hours maintains the rated protection level. In air-conditioned indoor environments, a single morning application maintained without face touching remains effective through a standard workday.',
  },
];

const timeline = [
  {
    period: 'Day 1–7',
    title: 'No New Breakouts From the Sunscreen Itself',
    detail: 'The first milestone: a non-comedogenic formula does not trigger new acne within the first week of use. If new breakouts appear, assess whether they are at sunscreen application sites (possible comedogenic reaction) or in locations where actives are used (possible purging). A truly non-comedogenic sunscreen should not cause site-specific new lesions.',
  },
  {
    period: 'Week 2–3',
    title: 'Existing PIH Marks Stop Deepening',
    detail: 'With consistent daily SPF 50 application, the progressive darkening of post-acne marks begins to halt. Marks that were noticeably darker each week stabilise in colour. This is UV-driven melanin stimulation being blocked. Fading begins in subsequent weeks — stabilisation is the first visible signal the sunscreen is working.',
  },
  {
    period: 'Week 4–6',
    title: 'Skin Texture Evens and PIH Begins Lightening',
    detail: 'With new melanin production suppressed, the skin\'s natural cell turnover cycle begins replacing hyperpigmented surface cells with normally pigmented ones. Marks appear lighter, particularly compared to photographs from the start of the SPF routine. Overall skin tone begins to even across the face.',
  },
  {
    period: 'Month 3–6',
    title: 'Significant PIH Fading and Improved Overall Clarity',
    detail: 'Consistent daily SPF 50 combined with appropriate actives produces measurably significant PIH fading by month three to six. Marks that previously required heavy coverage to conceal reach or approach the threshold where a light coverage product suffices. This is the timeline dermatologists reference — consistency is the only variable.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧴',
    title: 'Check Comedogenicity of Every Listed Ingredient',
    body: 'Non-comedogenic label claims are unregulated in India — any brand can print them regardless of actual ingredient profile. Before purchasing, cross-reference the ingredient list against a comedogenicity database. Key red flags: isopropyl myristate, coconut oil, wheat germ oil, cocoa butter, lanolin, and any ingredient with "myristate" or "laurate" in the name. A genuinely non-comedogenic formula avoids all of these.',
  },
  {
    icon: '🔬',
    title: 'Broad-Spectrum vs. UVB-Only Protection',
    body: 'Many low-cost Indian sunscreens are formulated primarily for UVB protection without adequate UVA coverage. UVA protection is what prevents PIH deepening, skin ageing, and immune suppression. Look for the PA+++ or PA++++ rating alongside SPF 50. A sunscreen labelled only with an SPF number and no PA rating may provide incomplete protection for Indian skin managing acne marks.',
  },
  {
    icon: '🌿',
    title: 'Fragrance and Alcohol Content',
    body: 'Fragrance compounds — including "natural fragrance" and individual fragrant ingredients like limonene and linalool — are common sensitisers particularly problematic for inflamed, barrier-compromised acne skin. High concentrations of drying alcohols disrupt the skin barrier and can trigger reactive sebum overproduction. Acne-prone skin deserves a fragrance-free, non-drying formula.',
  },
  {
    icon: '💡',
    title: 'Texture Compatibility With Your Climate',
    body: 'A sunscreen that is theoretically perfect on paper but intolerable to wear in practice will not be used consistently — and consistency is the only variable that produces results. In Mumbai\'s monsoon humidity, a heavy cream sunscreen becomes a liability regardless of its SPF rating. In Delhi\'s dry winter, a very light gel may feel too tight. Match formula texture to your specific climate and skin preference.',
  },
];

const whoNeeds = [
  { icon: '🧑‍💼', label: 'Office Workers With Daily Commutes', desc: 'Even short outdoor commutes in Indian cities deliver meaningful UV exposure. Car window glass blocks UVB but not UVA — the ray responsible for PIH darkening. Daily SPF is non-negotiable for city commuters.' },
  { icon: '🎓', label: 'Students With Active Breakouts', desc: 'The combination of hormonal acne, stress-related flares, and outdoor campus exposure makes SPF protection one of the highest-leverage skincare investments for Indian students managing active breakouts.' },
  { icon: '👩‍⚕️', label: 'Adults Using Retinoids or AHAs', desc: 'Retinoids and exfoliating acids dramatically increase UV photosensitivity. Using these actives without daily SPF 50 accelerates the UV damage they are meant to address. Sunscreen is mandatory alongside prescription or OTC retinoids.' },
  { icon: '☀️', label: 'South Indian and Coastal City Residents', desc: 'Chennai, Kochi, Mangaluru, Vizag — year-round UV Index extremes make daily SPF 50 a baseline health requirement. Post-acne skin in these cities fades significantly slower without consistent broad-spectrum protection.' },
  { icon: '🏍️', label: 'Outdoor Workers and Two-Wheeler Commuters', desc: 'Motorcyclists and cyclists face both extreme UV exposure and wind-driven particulate pollution directly on the skin. Sunscreen is the critical first line of defence for this heavily exposed group.' },
  { icon: '💄', label: 'Makeup Wearers Relying on Foundation SPF', desc: 'SPF in makeup products is never applied in the 2 mg/cm² quantity required to achieve the rated protection. Those relying on SPF-containing foundations as their sole sun protection receive a fraction of the labelled SPF.' },
  { icon: '🌙', label: 'Night Routine Devotees Who Skip Mornings', desc: 'A comprehensive evening routine of actives produces zero long-term benefit if UV damage reverses it each morning. Sunscreen is the step that makes every night product worth using.' },
  { icon: '🧬', label: 'Fitzpatrick Skin Types IV–VI — Deeper Indian Tones', desc: 'Darker skin tones have more active melanocytes and a higher baseline risk of PIH from any inflammatory trigger. The misconception that dark skin needs no sunscreen is a primary driver of prolonged PIH in Indian adults.' },
];

const myths = [
  {
    myth: 'People with acne should skip sunscreen because it clogs pores',
    truth: 'Unprotected acne skin is a clinical problem, not just an aesthetic one. UV radiation suppresses the skin\'s local immune response — one of its primary defences against C. acnes overgrowth — and dramatically accelerates PIH darkening. The issue is not sunscreen; it is a comedogenic formula. A properly non-comedogenic SPF 50 is one of the most important products in an acne routine, not a product to avoid.',
  },
  {
    myth: 'Dark Indian skin does not need sunscreen because it has natural UV protection',
    truth: 'Higher baseline melanin provides approximately SPF 2–4 of natural protection — far less than the SPF 50 recommended for Indian UV exposure levels. More critically, higher melanin activity means darker Indian skin tones are more prone to PIH from acne, not less. The melanocytes that produce protective melanin also overproduce it in response to inflammation, making SPF more important for deeper skin tones in the context of acne management.',
  },
  {
    myth: 'Sunscreen needs to be washed off immediately every night to prevent damage',
    truth: 'Sunscreen should be removed each evening with a proper cleansing routine — the driver is hygiene and removal of accumulated UV-degraded filters, pollution particles, and sebum, not a specific toxicity of the sunscreen itself. A non-comedogenic formula does not continuously damage pores while on the skin; it becomes a problem only when left with accumulated daily pollution without evening cleansing.',
  },
  {
    myth: 'SPF 30 is perfectly adequate for Indian sun — SPF 50 is excessive marketing',
    truth: 'In moderate UV environments, the difference between SPF 30 and SPF 50 is minor. In India\'s extreme UV environment, the additional UVB filtration matters cumulatively. More critically, PA++++ UVA protection — typically associated with higher-SPF formulas — is what primarily determines PIH outcome on acne skin. For Indian skin managing post-acne marks, SPF 50 PA++++ is the clinical standard.',
  },
  {
    myth: 'Sunscreen makes oily skin oilier and should be avoided in summer',
    truth: 'The wrong sunscreen makes oily skin oilier. A mattifying, non-comedogenic formula with sebum-absorbing ingredients actively manages oil throughout the day. Avoiding sunscreen in summer — India\'s highest UV period — maximises UV-driven PIH darkening precisely when UV intensity is greatest. If summer heat makes current sunscreen intolerable, change the formula rather than abandoning SPF.',
  },
  {
    myth: 'Vitamin C serum provides enough antioxidant protection to replace sunscreen',
    truth: 'Vitamin C is a potent antioxidant that neutralises free radicals generated by UV exposure — it is an excellent complement to sunscreen, not a replacement. Antioxidants manage downstream damage caused by UV photons already absorbed by the skin. Sunscreen prevents those photons from reaching skin cells in the first place. These are sequential, complementary mechanisms — not alternatives to each other.',
  },
];

const faqs = [
  {
    q: 'Can sunscreen actually make acne worse?',
    a: 'A comedogenic sunscreen absolutely can worsen acne — this is why formula selection is critical. Sunscreens containing highly comedogenic emollients, certain silicones, or occlusive bases can block pores, trap sebum, and directly trigger new lesions in acne-prone skin. However, this is a formula problem, not a sunscreen category problem. A properly non-comedogenic SPF 50 formula not only does not worsen acne — it actively prevents UV-driven PIH deepening and immune suppression that compounds acne severity. The issue is choosing the right product, not avoiding the category.',
  },
  {
    q: 'What SPF is sufficient for acne-prone Indian skin?',
    a: 'The clinical recommendation for Indian skin managing active acne or post-inflammatory hyperpigmentation is SPF 50 PA+++ minimum, applied in adequate quantity — half a teaspoon for the face — and reapplied every two hours if outdoors. SPF 30 is insufficient for India\'s UV Index levels during peak months. The PA rating indicating UVA protection is as important as the SPF number for PIH management. Look for PA+++ or PA++++ alongside SPF 50 for complete broad-spectrum coverage.',
  },
  {
    q: 'How do I apply sunscreen if I am already using retinol or salicylic acid?',
    a: 'Retinoids and salicylic acid are typically evening-use actives that should not overlap with sunscreen in the morning routine. Apply them only at night, then apply sunscreen the following morning as part of your daytime routine. If you use salicylic acid in a morning cleanser or toner, apply it first, allow it to absorb fully, and then apply sunscreen as the final step before any makeup. Both types of actives increase photosensitivity — making sunscreen even more critical, not less.',
  },
  {
    q: 'Does sunscreen need to be reapplied indoors?',
    a: 'In a typical indoor office environment with no direct window sun exposure and no outdoor activity, a carefully applied morning sunscreen maintains meaningful protection through a standard workday without reapplication. However, if you sit near windows with significant natural light, commute by car, or step outdoors at lunch, the morning application should be followed by reapplication at the two-hour mark after initial sun exposure begins. UVA penetrates glass, so window proximity requires consideration for those managing active PIH.',
  },
  {
    q: 'Can I wear makeup over sunscreen if I have acne?',
    a: 'Yes — apply sunscreen as the final skincare step, allow three to five minutes to set, then apply makeup on top. Choose non-comedogenic makeup products to maintain the overall pore-safety of the routine. Do not use SPF-containing foundation as your primary sun protection — the quantity applied in practice is always far less than the 2 mg/cm² required to deliver the labelled SPF. Think of SPF in makeup as a minor bonus, not your sun protection strategy.',
  },
  {
    q: 'Is physical or chemical sunscreen better for acne-prone skin?',
    a: 'This is nuanced rather than absolute. Physical sunscreens with zinc oxide and titanium dioxide are less likely to cause allergic reactions and work immediately upon application — but historically produced white cast on Indian skin tones and required textures some acne-prone users found too heavy. Modern chemical filters are generally lighter and invisible — but specific filters like oxybenzone can cause sensitisation in very reactive skin. The most practical approach for Indian acne-prone skin is a well-formulated hybrid formula using micronised physical filters with modern chemical co-filters in a lightweight, non-comedogenic base.',
  },
  {
    q: 'Should I use sunscreen if I have active acne lesions?',
    a: 'Yes — active lesions are the skin condition that most urgently requires UV protection. An inflamed active lesion has a disrupted barrier and elevated melanocyte activity, meaning UV exposure to it is significantly more damaging than UV exposure to healthy surrounding skin. Skipping sunscreen over active lesions leaves them at maximum risk of darkening into prolonged PIH marks. Apply sunscreen gently to active areas using patting motions rather than rubbing to avoid mechanical irritation.',
  },
  {
    q: 'How long before sun exposure should I apply sunscreen?',
    a: 'For chemical sunscreen filters, a 15 to 20 minute pre-exposure application window allows filters to bind to the skin and activate fully. Physical filters — zinc oxide, titanium dioxide — work immediately upon application with no waiting required. As a practical morning routine rule, applying sunscreen as the last step before getting dressed and then leaving the house typically provides an adequate absorption window regardless of filter type. Do not apply sunscreen on the move — it should be applied to still, relaxed skin.',
  },
  {
    q: 'Can I use sunscreen during a course of isotretinoin?',
    a: 'Daily sunscreen use is strongly recommended — and typically explicitly prescribed — during isotretinoin therapy. Isotretinoin dramatically increases skin photosensitivity by thinning the outer skin layer and reducing its natural UV resilience. Dermatologists prescribing isotretinoin universally recommend SPF 50 broad-spectrum daily application as a mandatory accompaniment to the medication. A non-comedogenic formula is particularly appropriate during isotretinoin therapy, as the skin barrier is compromised and reactivity is elevated.',
  },
  {
    q: 'What is the correct order for sunscreen in a morning skincare routine?',
    a: 'The correct order is: cleanser → toner or essence (if used) → vitamin C or other water-based actives → lightweight moisturiser (if needed) → sunscreen as the final step. No product should be applied over sunscreen in the skincare routine, though makeup can be applied on top after sunscreen has set for three to five minutes. This order ensures the UV filter sits at the outermost layer of the skin where it can intercept UV radiation before it reaches skin cells.',
  },
];

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

export default function SunscreenAcneProneIndiaPage() {
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
            <span className={styles.tag}>Acne Care · SPF Guide · India 2026 · Dermatologist Approved</span>
            <h1 className={styles.heroTitle}>
              Best Sunscreen for
              <br />
              <em>Acne-Prone Skin</em>
              <br />
              <span className={styles.heroTitleSub}>in India — The Complete 2026 SPF Guide</span>
            </h1>
            <p className={styles.heroSub}>
              Using the wrong sunscreen makes acne worse. Using no sunscreen makes post-acne marks
              permanent. This guide explains exactly what acne-prone Indian skin needs from SPF —
              and why non-comedogenic, broad-spectrum protection is the most underutilised acne
              treatment available today.
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
              <span className={styles.heroSubNote}>Non-Comedogenic · SPF 50 · No White Cast · Matte Finish</span>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <div className={styles.imageSunRays} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/freshotil-sunguard.png"
                alt="Best Sunscreen for Acne-Prone Skin India 2026 — Non-Comedogenic SPF 50"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 420px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🛡️ SPF 50 PA++++</span>
              <span>✅ Non-Comedogenic</span>
              <span>🌑 No White Cast</span>
              <span>💎 Matte Finish</span>
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
          <h2 className={styles.sectionTitle}>Why Sunscreen Is Non-Negotiable for Acne-Prone Skin — and Why Most People Get It Wrong</h2>
          <p>
            If there is one step that dermatologists universally agree is the most neglected and
            the most consequential in an acne management routine, it is sunscreen. Not the
            exfoliating acid. Not the retinoid. Not the vitamin C serum. Sunscreen. The product
            that a significant proportion of acne-prone Indian adults actively avoid — because
            they believe, incorrectly, that it clogs their pores and makes their skin worse.
          </p>
          <p>
            The belief is understandable. Many people with acne have tried sunscreens and found
            their skin breaking out more, becoming shinier, and feeling worse for the experience.
            That reaction is real. But it is not caused by sunscreen as a category — it is caused
            by the specific formulas they were using: products built on heavy emollients,
            pore-blocking silicones, and occlusive bases designed for dry, sun-damaged skin rather
            than for oily, acne-prone complexions. The Indian sunscreen market has historically
            skewed toward these heavier formulas because the dominant marketing narrative centred
            on fair skin tone preservation rather than acne management. The result is a generation
            of acne-prone Indian consumers who gave up on sunscreen after a bad experience with
            the wrong product — and whose post-acne marks deepened progressively as a consequence.
          </p>
          <p>
            Post-inflammatory hyperpigmentation — the flat, dark marks left after acne heals — is
            the most common skincare complaint among Indian adults. Across medium-to-deep Indian
            skin tones, the melanocytes that produce skin colour are highly reactive to both
            inflammation from the acne lesion itself and UV radiation from India's extreme sun.
            Without consistent SPF 50 protection, every acne mark on every Indian face is being
            actively darkened each morning — and every brightening serum, vitamin C drop, and
            exfoliation treatment applied in the evening is fighting a losing battle against
            hours of UV-driven melanin stimulation.
          </p>
          <p>
            The stakes are not trivial. Post-inflammatory hyperpigmentation that could fade in
            three to six months with consistent SPF protection instead persists for twelve to
            twenty-four months without it. This affects the confidence, social experience, and
            professional life of millions of Indian adults between fifteen and forty-five who
            are managing acne and its aftermath. A non-comedogenic SPF 50 sunscreen — one that
            does not trigger new breakouts, does not leave a grey cast on Indian skin tones, and
            does not create the greasy film that makes acne worse — is not a luxury add-on to an
            acne routine. It is the treatment the routine cannot function without.
          </p>
          <p>
            This guide addresses the complete picture: why UV radiation specifically worsens acne
            outcomes beyond PIH; how to read a sunscreen ingredient list to confirm
            non-comedogenicity rather than trusting unregulated label claims; the specific texture
            and formula requirements for acne-prone skin in India's climate; a comprehensive skin
            type matching guide; a step-by-step application protocol that ensures the SPF on the
            label is the SPF actually received; and the myths — some of them deeply embedded in
            Indian skincare culture — that are actively preventing people with acne from using the
            product that would most meaningfully improve their skin's long-term outcome.
          </p>
          <p>
            India's UV environment is not forgiving. The country sits between latitudes 8°N and
            37°N — within the high UV band for the majority of its area — and experiences a UV
            Index of 10 to 12 for six to eight months of the year across most major population
            centres. Chennai routinely records UV Index readings above 11 by 10 AM. Mumbai's UV
            peaks occur even during the cloudy pre-monsoon months. Delhi's summer UV, combined
            with reflective urban surfaces, creates exposure levels that dermatologists in
            temperate climates would classify as requiring maximum protection. For acne-prone
            skin in any of these cities, daily SPF 50 is not overcautious — it is the minimum
            appropriate intervention.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of UV Radiation, Acne, and Post-Inflammatory Hyperpigmentation</h2>

          <h3 className={styles.subHeading}>How UV Radiation Worsens Active Acne</h3>
          <p>
            UV radiation affects acne through two distinct mechanisms that compound each other.
            The first is <strong>immune suppression</strong>: UV radiation — particularly UVA —
            suppresses the skin's local immune response by depleting Langerhans cells, the
            immune sentinels embedded in the epidermis. These cells are part of the skin's
            defence against bacterial infection, including the C. acnes bacteria responsible for
            inflamed acne lesions. Repeated UV exposure progressively reduces this localised
            immune defence — this is counter to the popular belief that sun exposure "dries out"
            and improves acne. A temporary surface-drying effect comes at the cost of deeper
            immune suppression that worsens acne over time.
          </p>
          <p>
            The second mechanism is <strong>sebum oxidation</strong>. UV radiation oxidises
            the squalene component of sebum — producing squalene peroxides that are directly
            comedogenic. Studies have established that UV-oxidised squalene is a more potent
            trigger of comedone formation than unoxidised sebum, meaning daily unprotected UV
            exposure actively increases the comedogenicity of the skin's own natural oil. This
            creates a feedback loop: UV exposure increases comedone formation, which creates
            conditions for more inflamed lesions, which creates more PIH marks.
          </p>

          <h3 className={styles.subHeading}>The Melanin-Acne-UV Triangle</h3>
          <p>
            Indian skin's higher baseline melanin content provides some UV protection —
            approximately SPF 2 to 4 of intrinsic photoprotection — but simultaneously creates
            a melanin overproduction response to inflammation that makes PIH formation more
            rapid and more severe than in lighter skin tones. An acne lesion triggers an
            inflammatory cytokine cascade that stimulates surrounding melanocytes to produce
            melanin as a protective response. In higher-melanin skin types, this response is
            both stronger and more persistent — producing a darker, more widespread PIH mark
            that persists longer than the equivalent mark on lighter skin.
          </p>
          <p>
            UV radiation then amplifies this at every stage: it deepens existing PIH by directly
            stimulating melanocytes in already-hyperpigmented areas; it extends PIH duration by
            repeatedly re-triggering melanocyte activity in marks that would otherwise be fading;
            and it creates new melanin in areas adjacent to healing marks through bystander
            melanocyte stimulation. For Indian skin managing acne, UV exposure is not a secondary
            concern — it is an active driver of the most visible and longest-lasting consequence
            of the condition.
          </p>

          <h3 className={styles.subHeading}>Why UVA Protection Is As Important As UVB for Acne Skin</h3>
          <p>
            UVB radiation is responsible for sunburn and direct DNA damage — the mechanism most
            people associate with sun protection. UVA radiation penetrates more deeply into the
            dermis, does not cause immediate burning, and is responsible for the pigmentation
            effects, immune suppression, and oxidative damage that accelerates ageing. For acne
            management: UVA is the wavelength that most directly drives PIH formation and
            deepening — and crucially, it penetrates glass. Office windows, car windscreens, and
            cloud cover do not filter UVA meaningfully.
          </p>
          <p>
            In India, the PA rating system — PA+, PA++, PA+++, PA++++ — indicates UVA protection
            level. PA++++ indicates the highest available UVA protection. For Indian acne-prone
            skin managing PIH, PA++++ is the appropriate standard. Many Indian sunscreens —
            particularly budget-focused products — carry PA++ (moderate UVA protection) rather
            than PA++++ — providing inadequate UVA coverage for the skin condition they are most
            commonly purchased to address.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>🔬</span>
            <div>
              <strong>Critical Insight:</strong> UV radiation accelerates PIH on Indian skin
              through a mechanism independent of general darkening. It specifically stimulates
              melanocytes immediately adjacent to healing acne marks, creating UV-driven PIH
              deepening that can add months to the fading timeline with each week of unprotected
              exposure. A post-acne mark that would fade in eight weeks with SPF 50 protection
              can persist for six months or longer with daily unprotected sun exposure. This is
              not a marginal difference — it is the single most impactful factor in PIH duration
              for Indian acne skin.
            </div>
          </div>
        </section>

        {/* ─── INGREDIENTS SECTION ────────────────────────────────────────── */}
        <section id="ingredients" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sunscreen Ingredients — What Acne-Prone Skin Needs and What to Avoid</h2>

          <h3 className={styles.subHeading}>UV Filters Safe for Acne-Prone Skin</h3>
          <p>
            The UV filter — the active ingredient responsible for absorbing or reflecting UV
            radiation — is the heart of any sunscreen formulation. For acne-prone skin, the
            choice of filter matters because different filters require different solvents and
            formulation bases, and those bases vary significantly in comedogenicity.
            <strong> Zinc oxide</strong> in micronised form is the most universally
            non-comedogenic UV filter available — rated 0 on the comedogenicity scale and
            providing broad-spectrum UVA/UVB coverage without requiring an occlusive base.
            <strong> Titanium dioxide</strong> is similarly safe, though it provides less
            UVA coverage and requires combination with UVA-active filters in a broad-spectrum
            formula. Modern chemical filters — including avobenzone, bemotrizinol (Tinosorb S),
            bisoctrizole (Tinosorb M), and mexoryl SX/XL — can all be formulated in lightweight,
            non-comedogenic bases, though individual sensitivity to specific chemical filters varies.
          </p>

          <h3 className={styles.subHeading}>Ingredients to Actively Avoid</h3>
          <p>
            Several ingredients commonly found in sunscreens are problematic for acne-prone skin
            regardless of UV filter quality. <strong>Isopropyl myristate</strong> (comedogenicity
            rating: 5) appears in many sunscreen formulations as an emollient.
            <strong> Coconut oil</strong> and its derivatives (rating: 4) are frequently found
            in "natural" or "mineral" sunscreens. <strong>Wheat germ oil</strong> (rating: 5)
            and <strong>cocoa butter</strong> (rating: 4) appear in some SPF-containing body
            products and moisturiser-sunscreen combinations. <strong>Certain silicones</strong>
            — particularly dimethicone in high concentrations — can create an occlusive film that
            traps sebum in follicles over time. Any of these in the ingredient list is sufficient
            cause to choose a different formula, regardless of SPF rating or brand reputation.
          </p>

          <h3 className={styles.subHeading}>Beneficial Bonus Ingredients for Acne Skin</h3>
          <p>
            Several non-filter ingredients found in well-formulated sunscreens provide direct
            additional benefit for acne-prone skin. <strong>Niacinamide</strong> (vitamin B3)
            at 2–5% reduces sebum production, strengthens the skin barrier, and has direct
            anti-inflammatory effects relevant to active acne.
            <strong> Centella asiatica extract</strong> supports barrier repair and reduces
            inflammation. <strong>Silica microspheres</strong> and <strong>kaolin clay</strong>
            provide sebum absorption that reduces shine throughout the day.
            <strong> Hyaluronic acid</strong> at low molecular weights provides lightweight
            hydration without comedogenic risk. A sunscreen that incorporates any combination
            of these ingredients provides compounded benefit beyond UV protection alone — and
            represents a meaningful upgrade over a formula that delivers only SPF.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Practical Tip:</strong> When evaluating a new sunscreen for acne-prone
              skin, search the full ingredient list on any free comedogenicity database before
              purchasing. This takes under two minutes and is significantly more reliable than
              trusting "non-comedogenic" label claims, which are unregulated in India.
              Ingredients are listed in descending order of concentration — ingredients in the
              top half of the list are present in higher quantities and have greater impact on
              skin behaviour than those near the bottom.
            </div>
          </div>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Acne-Sunscreen Problem — and the Specific Solution</h2>
          <p className={styles.sectionIntro}>
            Every resistance to using sunscreen on acne-prone skin has a specific, addressable
            cause. Here are the four most common concerns — and precisely what resolves each.
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

        {/* ─── SKIN TYPE GUIDE ────────────────────────────────────────────── */}
        <section id="skin-type-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>Skin Type Suitability Guide</h2>
          <p className={styles.sectionIntro}>
            Non-comedogenic SPF 50 is appropriate for every skin type — but application technique
            and layering order varies. Here is how each skin type interacts with acne-safe sunscreen.
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

        {/* ─── PRODUCT DEEP DIVE ──────────────────────────────────────────── */}
        <section id="product-deep-dive" className={styles.section}>
          <h2 className={styles.sectionTitle}>Product Deep Dive — Feature-by-Feature Breakdown</h2>

          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              SPF 50 PA++++ · Non-Comedogenic · Matte Finish · No White Cast on Indian Skin
            </p>
            <p className={styles.midCtaSub}>
              Sunscreen built specifically for acne-prone Indian skin — not repurposed from a dry-skin formula.
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
              a sunscreen that is <em>oil-free</em> and one that is <em>non-comedogenic</em>.
              Oil-free sunscreens replace oils with other emollients — some of which are equally
              or more comedogenic than the oils they replace. Non-comedogenic sunscreens have
              been specifically formulated and tested to confirm that none of their ingredients
              block pores in acne-prone skin. For Indian acne skin, only the second category
              is truly appropriate. The term "non-comedogenic" with evidence of dermatological
              testing is meaningfully different from "oil-free" alone — and the difference
              determines whether the product helps or harms your skin.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Apply Sunscreen Over an Acne Skincare Routine</h2>
          <p className={styles.sectionIntro}>
            Application order, quantity, and technique determine whether you receive the SPF
            protection on the label. Most people get at least one of these three wrong.
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
            💡 <strong>Pro Tip:</strong> The most common reason sunscreen-wearing acne patients
            still develop significant PIH is under-application — using less than half the quantity
            required to achieve the rated SPF. The cleanser you use immediately before sunscreen
            application also matters significantly: a low-pH, non-stripping cleanser preserves
            the acid mantle and allows sunscreen to sit evenly on the skin surface. Our{' '}
            <Link
              href="/blog/best-face-wash-oily-skin-india-2026"
              className={styles.internalLink}
            >
              complete guide to the best face wash for oily skin in India 2026
            </Link>{' '}
            covers exactly how to cleanse acne-prone skin before applying actives and SPF —
            the cleansing step determines how effectively everything applied after it absorbs
            and performs.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>What to Expect — Skin Improvement Timeline With Consistent SPF Use</h2>
          <p className={styles.sectionIntro}>
            Sunscreen results are measured in what does not happen and what fades faster.
            Here is the honest timeline of what consistent SPF 50 delivers for acne-prone Indian skin.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — Choosing a Sunscreen for Acne-Prone Indian Skin</h2>
          <p className={styles.sectionIntro}>
            The Indian sunscreen market offers hundreds of options and no shortage of misleading
            claims. Here is the precise framework for evaluating any sunscreen before purchase.
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

          <h3 className={styles.subHeading}>The Three Most Expensive Sunscreen Mistakes Indian Acne Skin Makes</h3>
          <p>
            The first and most consequential mistake is abandoning sunscreen after a bad experience
            with a comedogenic formula. The logic — "sunscreen broke me out, so sunscreen is bad
            for acne" — is the equivalent of concluding that all food is dangerous after eating
            something spoiled. The formula was wrong; the category is not. A person who quits
            sunscreen after a comedogenic reaction accepts permanent PIH deepening as an
            alternative to spending fifteen minutes identifying a non-comedogenic formula.
            The cost of that decision, measured in months of extended PIH duration and the
            associated confidence impact, vastly outweighs the effort of finding the right product.
          </p>
          <p>
            The second mistake is relying on the SPF in foundation, BB cream, or tinted
            moisturiser as the primary sun protection strategy. SPF testing is conducted at a
            standardised application density of 2 mg per cm² of skin. The average person
            applying foundation applies approximately 0.5 to 1 mg per cm² — one quarter to
            one half of the required density. At that application density, an SPF 30 foundation
            delivers approximately SPF 5 to 8 of actual protection. Indian skin managing active
            acne and PIH under Indian UV conditions cannot afford to build a sun protection
            strategy on this mathematical fiction.
          </p>
          <p>
            The third mistake is purchasing sunscreen by price alone. The Indian market has
            excellent non-comedogenic formulas across price points — but the cheapest options
            are disproportionately likely to contain comedogenic emollients, inadequate UVA
            coverage, and fragrance compounds that sensitise reactive acne skin. A sunscreen
            that triggers fresh breakouts costs more — in time, in additional treatment products
            required, in extended PIH duration — than any premium paid for a correctly formulated
            product. For acne-prone skin, sunscreen is not an area where economising on formula
            quality produces net savings.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              The right SPF formula exists. Your skin deserves it.
            </p>
            <p className={styles.midCtaSub}>
              Non-comedogenic. SPF 50 PA++++. Matte finish. No white cast on Indian skin tones.
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
          <h2 className={styles.sectionTitle}>Who Needs This Sunscreen Most</h2>
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
            Sunscreen works best as part of a complete, coordinated routine. Build the full
            protocol that acne-prone Indian skin needs — morning and evening.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/best-face-wash-oily-skin-india-2026"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🍊</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Face Wash for Oily Skin India 2026</p>
                <p className={styles.relatedCardSub}>FreshOLite Vitamin C — the cleanse that makes sunscreen work better</p>
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
                <p className={styles.relatedCardSub}>Calafine — soothe acne-irritated skin alongside your SPF routine</p>
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
                <p className={styles.relatedCardSub}>The non-comedogenic moisturiser that layers perfectly under SPF</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ──────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sunscreen Myths That Are Actively Making Your Acne Worse</h2>
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
          <h2 className={styles.sectionTitle}>Frequently Asked Questions — Sunscreen for Acne-Prone Skin India</h2>
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
          <h2 className={styles.bottomCtaTitle}>Your Post-Acne Marks Are Waiting for This</h2>
          <p>
            The marks left by acne are not permanent — but without daily SPF 50 broad-spectrum
            protection, they effectively become so. Every morning without sunscreen is a morning
            of UV-driven melanin stimulation that adds time to the fading timeline and undermines
            every treatment in your routine. A non-comedogenic SPF 50 PA++++ sunscreen that does
            not clog pores, does not leave a white cast, and does not make your skin oilier is
            not a difficult ask — it is a product that acne-prone Indian skin has always deserved.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy HairOShine Biotin Oil on Amazon →
          </a>
          <p className={styles.bottomNote}>Non-Comedogenic · SPF 50 PA++++ · All Indian Skin Tones · No White Cast · Free Delivery Available</p>
        </section>

      </div>
    </article>
  );
}