import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './sunscreen-indoors-blog.module.css';

export const metadata: Metadata = {
  title: 'Why Sunscreen Is Important Even Indoors in India — Complete SPF Guide 2026',
  description:
    'Why sunscreen matters indoors in India — UV rays, blue light & windows explained. Protect your skin daily with the right SPF. Shop now on Amazon.',
  keywords: [
    'why sunscreen is important indoors India',
    'sunscreen indoors India',
    'SPF indoors India',
    'indoor UV protection India',
    'best sunscreen India 2026',
    'sunscreen for Indian skin',
    'blue light sunscreen India',
    'UVA rays indoors India',
    'sunscreen for oily skin India',
    'daily sunscreen India',
    'SPF 50 sunscreen India',
    'sunscreen for work from home India',
    'sunscreen for office India',
    'mineral sunscreen India',
    'chemical sunscreen India',
    'broad spectrum sunscreen India',
    'sunscreen for dark spots India',
    'sunscreen for pigmentation India',
    'sunscreen for dry skin India',
    'sunscreen for sensitive skin India',
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/why-sunscreen-important-indoors-india',
  },
  openGraph: {
    title: 'Why Sunscreen Is Important Even Indoors in India — Complete SPF Guide 2026',
    description:
      'UV rays penetrate glass. Blue light ages skin. Indoor sun damage is real. The complete 2026 guide to daily sunscreen use for Indian skin — even indoors.',
    images: [
      {
        url: '/images/sunscreen-indoors-india.jpg',
        width: 1200,
        height: 630,
        alt: 'Why Sunscreen Is Important Even Indoors — India SPF Guide 2026',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/00V9yn9P';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'The Indoor Sun Damage Myth — And Why It Is Wrong' },
  { id: 'science', label: 'The Science of UV Radiation and Indoor Exposure' },
  { id: 'blue-light', label: 'Blue Light, Screens, and Skin Ageing Indoors' },
  { id: 'problems-grid', label: 'Your Skin Problem — How Indoor UV Causes It' },
  { id: 'skin-type-guide', label: 'Complete Skin Type Suitability Guide' },
  { id: 'product-deep-dive', label: 'Sunscreen Feature-by-Feature Breakdown' },
  { id: 'how-to-use', label: 'Step-by-Step Daily Sunscreen Application Guide' },
  { id: 'results-timeline', label: 'What Happens to Your Skin Over Time With SPF' },
  { id: 'buying-guide', label: 'Complete Buying Guide for Sunscreen in India' },
  { id: 'who-needs', label: 'Who Needs Indoor Sunscreen Most' },
  { id: 'myths', label: 'Sunscreen Myths vs. Truth' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const problemCards = [
  {
    icon: '🔆',
    problem: 'Hyperpigmentation and Dark Spots',
    desc: 'Even low-level UVA exposure — the kind that streams through office windows or glass doors in Indian homes — triggers melanin production in skin cells. Over months and years of unprotected indoor exposure, this results in patches of darkened skin, uneven tone, and stubborn spots that resist fading without consistent SPF protection.',
    solution: 'A broad-spectrum SPF 50 sunscreen blocks the UVA wavelengths that activate melanocytes. Daily indoor application prevents the incremental melanin overproduction that accumulates into visible pigmentation.',
  },
  {
    icon: '📱',
    problem: 'Premature Ageing from Blue Light',
    desc: 'High-energy visible (HEV) light emitted by laptop screens, smartphones, LED lighting, and fluorescent office fixtures penetrates deeper into the dermis than UVB rays. Studies show it induces oxidative stress in skin cells, breaks down collagen, and contributes to premature fine lines, loss of elasticity, and skin laxity — particularly around the eyes and forehead.',
    solution: 'Sunscreens formulated with iron oxide pigments and antioxidant complexes absorb and neutralise HEV light in addition to UV wavelengths, providing a complete photoprotection shield against modern indoor light environments.',
  },
  {
    icon: '🏠',
    problem: 'Cumulative UV Damage Through Glass',
    desc: 'Standard glass windows filter UVB rays but transmit up to 75% of UVA radiation. This means sitting near a window in your home office, bedroom, or a glass-walled office building in Mumbai or Bengaluru exposes your skin to significant UVA doses daily — the precise wavelengths most responsible for photoageing, DNA damage, and long-term carcinogenic risk.',
    solution: 'Indoor sunscreen use on all exposed skin — face, neck, hands, and forearms — creates the protective barrier that glass alone cannot provide, intercepting UVA before it reaches the skin cells where damage accumulates.',
  },
  {
    icon: '🔴',
    problem: 'Post-Inflammatory Hyperpigmentation (PIH)',
    desc: 'Indian skin tones — predominantly Fitzpatrick types III through V — are significantly more prone to post-inflammatory hyperpigmentation than lighter skin types. Any inflammation, including the low-grade cellular inflammation caused by daily UV exposure, risks triggering melanin overproduction at the site. This is why acne marks, rashes, and even minor sun exposure leave lasting dark marks on Indian skin more than on lighter skin.',
    solution: 'Daily SPF use — including indoors — prevents the UV-triggered inflammatory cascade that causes PIH in melanin-rich skin. It is the single most effective intervention for preventing new pigmentation from forming.',
  },
];

const skinTypes = [
  {
    type: 'Oily Skin',
    icon: '💦',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Lightweight, non-comedogenic gel or fluid sunscreens absorb quickly without adding shine. Look specifically for oil-free, matte-finish formulas that control sebum through the day.',
  },
  {
    type: 'Dry Skin',
    icon: '🏜️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Hydrating sunscreen formulas with hyaluronic acid or glycerin provide both UV protection and moisture simultaneously. Cream-based SPF formulas are particularly suitable.',
  },
  {
    type: 'Combination Skin',
    icon: '⚖️',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Fluid or lotion sunscreens balance protection across oily T-zones and drier cheek areas without over-moisturising or under-hydrating either zone.',
  },
  {
    type: 'Sensitive Skin',
    icon: '🌸',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Mineral (physical) sunscreens with zinc oxide or titanium dioxide sit on the skin\'s surface and are less likely to trigger irritation than chemical UV filters. Fragrance-free formulas are essential.',
  },
  {
    type: 'Acne-Prone Skin',
    icon: '⚡',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Non-comedogenic sunscreens are essential. Many acne treatments (retinoids, AHAs, BHAs) dramatically increase photosensitivity — making daily SPF non-negotiable, not optional.',
  },
  {
    type: 'Mature Skin',
    icon: '✨',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Sunscreen is the most evidence-backed anti-ageing intervention available. For mature skin, SPF 50 applied daily — even indoors — is the single highest-impact step in any routine.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Broad-Spectrum UVA/UVB Protection',
    body1: `The SPF number on a sunscreen label refers exclusively to UVB protection — the rays responsible for sunburn and direct DNA damage to the skin\'s surface cells. UVB rays are largely blocked by glass and are significantly less intense indoors. But UVA rays — the longer wavelengths responsible for photoageing, collagen breakdown, and deep-tissue DNA damage — are a different matter entirely. UVA penetrates standard glass with minimal attenuation, meaning your indoor environment provides virtually no defence against the ageing radiation that streams through every untreated window.

Broad-spectrum sunscreens are formulated to address both wavelengths simultaneously. The UVA protection standard in India and internationally is measured by the PA rating system (PA+, PA++, PA+++, PA++++) — a system widely used on Indian sunscreen labels but poorly understood by most consumers. A PA++++ rating indicates the highest level of UVA protection currently measurable, blocking over 90% of UVA radiation. When choosing a sunscreen for indoor use, the PA rating is arguably more important than the SPF number, because UVA is the dominant UV threat in indoor environments.`,
    body2: `For Indian consumers, this distinction carries particular weight. India sits between the Tropics of Cancer and the equator — receiving year-round high solar radiation intensity that makes UVA exposure a persistent, non-seasonal concern. Even in winter, even behind glass, even in the shade of a balcony, UVA levels in Indian cities remain significant. A broad-spectrum SPF 50 PA++++ formula provides the complete dual-wavelength protection that makes daily indoor sunscreen use genuinely protective rather than a cosmetic gesture.`,
  },
  {
    number: '02',
    heading: 'Lightweight, Non-Greasy Finish for All-Day Wear',
    body1: `The most common reason Indian consumers skip sunscreen indoors is texture. The thick, white-casting, greasy sunscreens that dominated the Indian market for decades created a cultural association between sunscreen and discomfort — a formula that felt like a mask, looked visibly white on Indian skin tones, and broke down into a sweaty mess by midday in India\'s climate. This association has been the single biggest barrier to the daily SPF habits that dermatologists universally recommend.

Modern sunscreen formulations have entirely resolved these texture problems. Fluid gel and serum-gel textures absorb within sixty seconds of application, leaving no visible residue or white cast on Indian skin tones. The finish ranges from natural to matte, with sebum-controlling formulas preventing the shine that makes oily-skinned Indians reluctant to apply any additional product to their face. When a sunscreen feels like nothing after application — which is the benchmark of a well-formulated modern product — the compliance barrier disappears, and daily use becomes genuinely sustainable.`,
    body2: `This is critical because sunscreen\'s protective benefit is entirely dependent on consistent daily application. A sunscreen you enjoy wearing gets used every day. A sunscreen that feels heavy, looks white, or breaks down by 11 AM gets abandoned — and abandoned SPF is zero SPF. The texture and finish of a sunscreen are not cosmetic preferences; they are functional requirements for the consistent application that makes photoprotection real.`,
  },
  {
    number: '03',
    heading: 'Protection Against Visible Light and Digital Screen Exposure',
    body1: `The explosion of remote working and digital screen time across Indian cities has introduced a photoprotection challenge that most sunscreen marketing has been slow to address: high-energy visible (HEV) light, commonly called blue light. Laptop screens, smartphone displays, LED room lighting, and the fluorescent fixtures ubiquitous in Indian offices and study rooms all emit significant quantities of HEV light in the 415–455 nanometre wavelength range — wavelengths that penetrate the skin more deeply than UVB radiation and generate reactive oxygen species (free radicals) that damage collagen, elastin, and cellular DNA.

Research published in peer-reviewed dermatology journals has demonstrated that HEV light exposure at the intensities typical of modern screen use can induce pigmentation changes in Indian skin tones — specifically Fitzpatrick types IV and V — at levels that are clinically significant over months of daily exposure. This is a uniquely modern concern that has no analogue in traditional sunscreen research, and one that disproportionately affects Indian professionals spending eight to twelve hours daily in front of screens in cities like Hyderabad, Pune, and Bengaluru.`,
    body2: `Sunscreens formulated with iron oxide pigments address blue light in addition to UV radiation. Iron oxide is a cosmetically elegant ingredient that absorbs HEV wavelengths without affecting the skin\'s appearance, providing a complete photoprotection shield relevant to the reality of modern Indian work life. This makes contemporary broad-spectrum, iron oxide-containing sunscreens fundamentally different in their protective scope from the UV-only formulas of previous generations — and makes them relevant in contexts (offices, homes, evening screen use) where traditional sunscreen thinking would not have considered them necessary.`,
  },
  {
    number: '04',
    heading: 'Prevention of Photoageing — The Most Underrated Skincare Investment',
    body1: `Of all the evidence in dermatological science, the link between daily sunscreen use and the prevention of visible skin ageing is among the most robustly established. A landmark long-term study tracking adults over four and a half years found that those who applied sunscreen daily showed no detectable increase in skin ageing scores — measurable improvements in fine lines, elasticity, and skin texture compared to those who used sunscreen only occasionally. Sunscreen outperformed every topical anti-ageing ingredient available — retinoids, vitamin C, peptides, growth factors — in preventing the initiation of photoageing at the source.

The mechanism is straightforward: photoageing — the wrinkling, laxity, uneven tone, and textural coarsening that most people attribute to "normal ageing" — is primarily caused by cumulative UV and visible light exposure over decades, not by chronological ageing itself. Decades of research on sun-protected versus sun-exposed skin of identical chronological age consistently shows dramatically younger-appearing skin on the protected side. Daily sunscreen use, started early and maintained consistently, prevents the accumulation of this damage rather than attempting to reverse it after the fact.`,
    body2: `For Indian consumers in their twenties and thirties — the demographic most actively investing in skincare routines — this evidence has a clear implication. No serum, no treatment, no aesthetic procedure reverses accumulated photodamage as effectively as daily broad-spectrum SPF prevents it from accumulating in the first place. Every day without sunscreen — including every indoor day — is a day of incremental, irreversible photoageing that no subsequent product can fully undo. The economics of prevention versus treatment are unambiguous: a daily SPF habit begun at 25 is worth more to your skin at 45 than any corrective treatment you can pursue after the fact.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Cleanse the Face Thoroughly First',
    desc: 'Apply sunscreen to clean, dry skin. Any residual oil, pollution particles, or previous skincare products create a barrier that reduces UV filter adhesion to the skin\'s surface. Cleanse with a gentle face wash appropriate for your skin type, then pat dry before applying SPF. This ensures the sunscreen film forms directly on the skin, not on a layer of residue.',
  },
  {
    num: '02',
    title: 'Apply Moisturiser First If Using One',
    desc: 'If your routine includes a separate moisturiser, apply it before sunscreen and allow it to absorb fully (approximately 60 seconds) before layering SPF on top. Sunscreen should always be the last step before makeup. Applying sunscreen under moisturiser dilutes its concentration and disrupts the UV filter film — significantly reducing measured protection.',
  },
  {
    num: '03',
    title: 'Use the Right Amount — Two Finger Lengths',
    desc: 'The clinically recommended amount for the face and neck is approximately 1/4 teaspoon, equivalent to two finger lengths of product. This is substantially more than most people apply. Studies consistently show that consumers apply 20–50% of the recommended amount, which reduces effective SPF by the square root — meaning SPF 50 applied at half quantity provides approximately SPF 7 in practice. Do not under-apply.',
  },
  {
    num: '04',
    title: 'Dot and Blend, Do Not Rub',
    desc: 'Dot sunscreen across five points — forehead, both cheeks, nose, and chin — then blend outward using upward strokes. Avoid rubbing in circular motions, which can pill the product and create uneven coverage. Extend application to the neck, ears, and the backs of the hands, all of which receive significant UV and visible light exposure during indoor desk work.',
  },
  {
    num: '05',
    title: 'Allow 15 Minutes Before Makeup or Sun Exposure',
    desc: 'Chemical UV filters require approximately 15–20 minutes after application to bind to the skin\'s surface and reach full protective capacity. Applying makeup or stepping into direct light immediately after application means the first 15 minutes of exposure receive reduced protection. Apply SPF as the first step of your morning routine, then complete the rest before heading out or sitting at your desk.',
  },
  {
    num: '06',
    title: 'Reapply Every Two to Three Hours for Continuous Protection',
    desc: 'Sunscreen degrades through UV absorption, oxidation, and physical removal (touching the face, sweating, eating). Indoor reapplication is required every two to three hours for continuous protection — a spray or powder sunscreen makes this practical without disrupting makeup. Setting this as a reminder on your phone creates the consistent habit that makes indoor SPF protection real.',
  },
];

const timeline = [
  {
    period: 'Week 1–2',
    title: 'Immediate Photoprotection and Texture Adjustment',
    detail: 'Your skin is immediately protected from the first application. Most users notice that the texture feels lighter than expected, without greasiness or white cast. Skin may feel slightly more hydrated throughout the day as the SPF formula\'s humectant components take effect.',
  },
  {
    period: 'Month 1',
    title: 'Reduced Redness and Improved Evening of Skin Tone',
    detail: 'Consistent daily SPF use prevents the low-grade UV-triggered inflammation that causes persistent redness, particularly around the nose, cheeks, and forehead. Users with mild rosacea or diffuse redness typically notice measurable improvement by the four-week mark as the inflammatory stimulus is consistently interrupted.',
  },
  {
    period: 'Month 3',
    title: 'Visible Reduction in New Pigmentation Formation',
    detail: 'Existing dark spots do not disappear — they require active brightening treatment — but new pigmentation stops forming. Users with hyperpigmentation concerns notice that spots are no longer expanding or deepening, and that the general tone of the skin is more even. This is the stabilisation phase before active correction becomes possible.',
  },
  {
    period: '6 Months+',
    title: 'Measurable Anti-Ageing Effect and Long-Term Skin Quality',
    detail: 'After six months of consistent daily SPF use, dermatological assessments show measurable improvements in fine lines, skin texture, and overall luminosity compared to sun-unprotected skin. The compounding preventive benefit of six months of blocked photoageing is visible and increasingly significant. This is the phase where peers begin asking what you have changed in your routine.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧪',
    title: 'SPF 50 Minimum with PA++++ Rating',
    body: 'For Indian climate and skin tone, SPF 30 is insufficient for daily meaningful protection — particularly given the high UV index across most Indian cities year-round. SPF 50 blocks approximately 98% of UVB rays versus SPF 30\'s 97%, but the more critical difference lies in the PA rating. Insist on PA++++, which represents the highest measurable UVA protection tier and is the appropriate standard for the high-UVA environment of India.',
  },
  {
    icon: '🎨',
    title: 'No White Cast on Indian Skin Tones',
    body: 'White cast — the greyish, ashy, or visibly white residue left by poorly formulated sunscreens — is the number one application barrier for Indian consumers. It is caused primarily by high concentrations of physical UV filters (zinc oxide, titanium dioxide) in particle sizes too large to be invisible on medium-to-dark skin tones. Modern nano-formulated mineral sunscreens and chemical/hybrid formulas have resolved this issue. Test any sunscreen on your inner forearm before committing to full facial use.',
  },
  {
    icon: '🏗️',
    title: 'Non-Comedogenic Formula',
    body: 'A sunscreen that clogs pores creates acne — and acne in Indian skin almost always leaves post-inflammatory hyperpigmentation that worsens the pigmentation problem you were trying to prevent. Non-comedogenic is a non-negotiable requirement. Check that it appears explicitly on the label or product description. This is particularly important for oily and acne-prone skin types, which represent a significant majority of Indian consumers in the 18–35 age group.',
  },
  {
    icon: '💧',
    title: 'Water Resistance for Indian Humidity',
    body: 'India\'s humidity levels — particularly in coastal cities like Mumbai, Chennai, and Kochi, and during the monsoon season nationwide — cause significant sunscreen degradation through perspiration. A water-resistant formula (80-minute rating minimum) maintains its UV filter film integrity through normal levels of sweating, extending effective protection between reapplication intervals. This is a functional requirement in Indian conditions, not a luxury specification.',
  },
];

const whoNeeds = [
  {
    icon: '💻',
    label: 'Work-from-Home Professionals',
    desc: 'Eight-plus hours of screen exposure daily, combined with window-transmitted UVA, creates the highest cumulative indoor UV + blue light dose. Daily SPF is as relevant at home as in any outdoor setting.',
  },
  {
    icon: '🏢',
    label: 'Glass-Walled Office Workers',
    desc: 'Modern office buildings in Bengaluru, Mumbai, and Gurgaon are increasingly glass-dominant. Workers near windows receive consistent UVA exposure throughout the workday without realising it.',
  },
  {
    icon: '🧴',
    label: 'Active Skincare Treatment Users',
    desc: 'Retinoids, AHAs, BHAs, vitamin C, and niacinamide all increase photosensitivity. Using these without daily SPF renders them counterproductive — the sun damage they prevent during the night is restored by daytime UV exposure.',
  },
  {
    icon: '🔆',
    label: 'Those With Hyperpigmentation or Dark Spots',
    desc: 'UV exposure is the primary driver of pigmentation deepening. Without daily SPF, brightening serums and treatments fight an uphill battle against ongoing UV stimulation of melanin production.',
  },
  {
    icon: '👧',
    label: 'Young Adults Building Long-Term Skin Health',
    desc: 'Photoageing accumulates over decades. Beginning daily SPF at 20–25 prevents the cumulative UV damage that manifests visibly at 35–45 and cannot be fully corrected after the fact.',
  },
  {
    icon: '🤰',
    label: 'Pregnant Women Prone to Melasma',
    desc: 'Pregnancy hormones dramatically increase melasma risk — patchy pigmentation triggered by even minimal UV exposure. Daily broad-spectrum SPF is the most important preventive measure during pregnancy.',
  },
  {
    icon: '🌆',
    label: 'Residents of High-Pollution Indian Cities',
    desc: 'Pollution particles generate free radicals that compound UV-induced skin damage. Sunscreens with antioxidant complexes provide dual protection against both UV radiation and pollution-induced oxidative stress.',
  },
  {
    icon: '🎓',
    label: 'Students in Fluorescent-Lit Study Environments',
    desc: 'Fluorescent and LED classroom lighting contributes meaningfully to daily HEV light exposure. Students studying for long hours under artificial lighting accumulate blue light skin exposure that adds to the overall photoageing burden.',
  },
];

const myths = [
  {
    myth: 'You only need sunscreen when you go outside',
    truth: 'UVA radiation penetrates glass and transmits into indoor environments throughout the day. Standard windows filter UVB but transmit up to 75% of UVA — the more damaging photoageing wavelength. Additionally, digital screens and LED lighting emit HEV radiation that causes skin damage independent of sun exposure. Indoor skin is not protected skin.',
  },
  {
    myth: 'Dark-skinned people do not need sunscreen because melanin protects them',
    truth: 'Melanin does provide some inherent UV protection — roughly equivalent to SPF 13 in the darkest skin tones. This is far below the SPF 30–50 threshold recommended for meaningful photoprotection. Darker skin tones are in fact more prone to hyperpigmentation, melasma, and post-inflammatory pigmentation from UV exposure. The protection melanin provides is incidental, not sufficient.',
  },
  {
    myth: 'SPF in moisturiser or foundation is enough for the day',
    truth: 'Foundation and moisturiser with SPF are applied in quantities far below the amount required to achieve the labelled SPF. The clinically tested SPF dose requires 2mg per square centimetre of skin — an amount that would require applying approximately four times the amount of foundation typically used. These products supplement SPF, they do not replace a dedicated sunscreen application.',
  },
  {
    myth: 'Sunscreen causes vitamin D deficiency',
    truth: 'Studies consistently show that real-world sunscreen use — even by highly compliant users — does not cause vitamin D deficiency. Sunscreen is never applied to 100% of the body surface, is applied imperfectly in real use, and the short duration of incidental daily sun exposure is sufficient for adequate vitamin D synthesis. Skin cancer risk from unprotected sun exposure is not an acceptable trade-off for marginal vitamin D production.',
  },
  {
    myth: 'Chemical sunscreens are dangerous and absorbed into the bloodstream',
    truth: 'Regulatory bodies including the FDA and EU\'s SCCS have evaluated UV filter absorption data and confirmed that the levels detected in blood from normal sunscreen use are not associated with any demonstrated health risk. The risk of not wearing sunscreen — skin cancer, accelerated photoageing, pigmentation — is well-established and concrete. The hypothetical risk from chemical filter absorption remains undemonstrated in any clinical harm outcome.',
  },
  {
    myth: 'You should not apply sunscreen every day because your skin will become dependent on it',
    truth: 'Skin cannot become "dependent" on sunscreen in any physiological sense. Sunscreen is a passive barrier — it does not alter the skin\'s biology, suppress any natural function, or create any adaptive response. Stopping sunscreen use does not make skin more sensitive. What people interpret as "dependency" is simply the return of UV exposure once protection is removed — which reveals the damage that was being prevented.',
  },
];

const faqs = [
  {
    q: 'Do I really need sunscreen if I sit away from windows all day?',
    a: 'Yes — for two reasons. First, reflected UV light bounces off surfaces (walls, floors, screens) and reaches skin even without direct window proximity. Second, and more significantly, HEV light from your digital screens and artificial lighting causes skin damage independent of UV radiation entirely. A broad-spectrum sunscreen with blue light protection addresses both threats regardless of your proximity to windows.',
  },
  {
    q: 'Is SPF 30 enough for indoor use or do I need SPF 50?',
    a: 'For Indian skin tones and the year-round high UV index across India, SPF 50 is the recommended standard for both indoor and outdoor use. The difference in practical UVB blockage between SPF 30 and SPF 50 is small (97% vs 98%), but SPF 50 formulas typically carry higher PA ratings and more robust UV filter concentrations that provide better real-world protection accounting for imperfect application and natural degradation through the day. The additional protection is meaningful for a daily cumulative risk.',
  },
  {
    q: 'Can I use sunscreen under makeup?',
    a: 'Yes — sunscreen should always go under makeup, never mixed with it. Apply sunscreen as the last step of your skincare routine, allow 15 minutes for chemical filters to bind to the skin, then apply makeup on top. This layering order maintains the integrity of both the SPF film and the makeup application. Avoid mixing sunscreen into foundation, which dilutes both products and compromises protection.',
  },
  {
    q: 'How often do I need to reapply sunscreen indoors?',
    a: 'Every two to three hours is the standard recommendation for meaningful continuous protection. Indoors, UV and blue light exposure are lower in absolute intensity than direct outdoor sun, so the degradation rate is slower — but reapplication remains important for full-day protection. Setting a phone reminder at mid-morning and mid-afternoon creates the habit. Powder or spray reapplication products make this practical without disrupting makeup.',
  },
  {
    q: 'Will sunscreen make my oily skin even more oily and cause breakouts?',
    a: 'A non-comedogenic, oil-free sunscreen formulated for oily skin will not cause breakouts or increase oiliness. Many modern Indian sunscreen formulas are specifically designed for oily and acne-prone skin, using sebum-controlling matte bases that actually reduce shine throughout the day. The key is choosing the right formula — not avoiding sunscreen altogether, which guarantees ongoing UV-triggered pigmentation and inflammation.',
  },
  {
    q: 'Do men need to wear sunscreen indoors too?',
    a: 'Absolutely. UV-induced photoageing, hyperpigmentation, and skin cancer risk affect both sexes equally. Men in India are statistically less likely to use sunscreen consistently — which is reflected in measurably more advanced photoageing and higher rates of skin-related concerns in men compared to women in the same age cohort and similar UV exposure patterns. An SPF 50 gel that absorbs quickly and leaves no visible residue is indistinguishable from no product for a male morning routine.',
  },
  {
    q: 'I use retinol at night — does that make indoor sunscreen even more important?',
    a: 'Yes, significantly. Retinoids dramatically increase photosensitivity by accelerating cell turnover and exposing newer, more UV-vulnerable skin cells at the surface. Using retinol without daily SPF protection is a common and counterproductive mistake — the retinol accelerates skin renewal while unprotected UV exposure damages and ages the new cells being revealed. Daily SPF is mandatory, not optional, for anyone using retinoids or other photosensitising actives.',
  },
  {
    q: 'Can I skip sunscreen on cloudy or overcast days?',
    a: 'No. Up to 80% of UV radiation penetrates cloud cover. Overcast days provide minimal UV protection for skin. This is particularly relevant in Indian monsoon conditions, when cloud cover creates a false sense of reduced sun exposure while UVA levels remain significant. Apply sunscreen every morning regardless of weather — the routine consistency is more important than situational assessment.',
  },
  {
    q: 'What is the white cast problem with sunscreens and how do I avoid it?',
    a: 'White cast is caused by physical UV filters — zinc oxide and titanium dioxide — in large particle sizes that reflect visible light on darker skin tones. It is primarily a concern with older formulations and many physical/mineral-only sunscreens. Modern solutions include nano-formulated physical filters (smaller particles, less visible), chemical UV filter formulas (no white cast), and hybrid formulas. For Indian skin tones (Fitzpatrick III–V), a chemical or hybrid SPF 50 formula with a clear or skin-toned finish is the practical solution.',
  },
  {
    q: 'Is it safe to use sunscreen every single day long-term?',
    a: 'Daily sunscreen use is not only safe but specifically recommended by every major dermatological association worldwide including the Indian Association of Dermatologists. Long-term daily use has no documented adverse health effects and has demonstrated, measurable benefits in preventing skin ageing, pigmentation, and carcinogenesis in peer-reviewed long-term studies. The evidence for daily use is unambiguous and the clinical consensus is unanimous.',
  },
];

export default function SunscreenIndoorsBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Sunscreen · SPF · Photoprotection · India Guide 2026</span>
            <h1 className={styles.heroTitle}>
              Why Sunscreen Is
              <br />
              <em>Important Even Indoors</em>
              <br />
              <span className={styles.heroTitleSub}>The Complete India SPF Guide for 2026</span>
            </h1>
            <p className={styles.heroSub}>
              You close the window. You stay at your desk. You think your skin is safe.
              It is not. UVA rays pass through glass. Screens emit blue light that ages skin.
              India&apos;s UV index does not drop because you are indoors. This guide explains
              exactly what is happening — and what to do about it.
            </p>
            <div className={styles.heroMeta}>
              <span>⏱ 19 min read</span>
              <span>📅 April 2026</span>
              <span>📝 5,800+ words</span>
            </div>
            <div className={styles.heroActions}>
              
             <a   href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy SPF 50 Sunscreen on Amazon →
              </a>
              <span className={styles.heroSubNote}>SPF 50 · Broad Spectrum · Non-Greasy · For Indian Skin</span>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/freshotil-sunguard.png"
                alt="SPF 50 Sunscreen for Daily Indoor and Outdoor Use — India 2026"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 420px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>☀️ SPF 50 PA++++</span>
              <span>🛡️ Broad Spectrum</span>
              <span>💧 Non-Comedogenic</span>
              <span>✨ No White Cast</span>
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
          <h2 className={styles.sectionTitle}>The Indoor Sun Damage Myth — And Why Believing It Is Ageing Your Skin</h2>
          <p>
            There is a pervasive belief in Indian skincare culture that sunscreen is for beaches,
            rooftops, and afternoon commutes — not for the person sitting in an air-conditioned
            flat in Pune, at a glass-windowed desk in Bengaluru, or studying under tube lights in
            a Delhi hostel. This belief is understandable. It feels logical. And it is completely,
            demonstrably wrong.
          </p>
          <p>
            The sun does not knock on your door before entering. Ultraviolet A radiation — the
            longer, more insidious wavelength responsible for premature ageing, collagen breakdown,
            and a meaningful proportion of skin cancers — is not stopped by glass. Standard window
            glass, including the tinted glass of modern apartment buildings and the floor-to-ceiling
            facades of corporate offices in Mumbai and Hyderabad, filters approximately 97% of UVB
            rays. This is the protection that prevents visible sunburn indoors. But the same glass
            transmits up to 75% of UVA radiation — the radiation that silently and cumulatively
            degrades your skin every single day you sit near a window without sunscreen.
          </p>
          <p>
            Add to this a threat that did not exist in previous generations: blue light. High-energy
            visible light emitted by laptops, monitors, smartphones, and the LED and fluorescent
            fixtures that illuminate virtually every indoor space in urban India causes measurable
            skin damage. It penetrates deeper into the dermis than UVB, generates oxidative stress
            that breaks down collagen, and — particularly in melanin-rich Indian skin tones — triggers
            pigmentation changes that worsen with cumulative exposure. Every hour in front of a screen
            is a small, silent contribution to the photoageing process.
          </p>
          <p>
            India&apos;s unique geography intensifies all of this. Located predominantly between the
            Tropic of Cancer and the equator, India receives among the highest UV indices in the world
            year-round. Cities like Chennai, Mumbai, Hyderabad, and Ahmedabad maintain UV indices
            above 8 — categorised as &quot;very high&quot; — for the majority of the year. These UV levels
            mean that the UVA that penetrates your windows carries a meaningfully higher absolute dose
            than the same UVA penetrating windows at comparable latitudes in Europe or North America.
            The argument for indoor sunscreen is stronger in India than virtually anywhere else.
          </p>
          <p>
            This guide covers the complete science of why indoor skin is not safe skin — the physics
            of UV transmission through glass, the biology of blue light skin damage, the specific
            vulnerabilities of Indian skin tones, and exactly how to choose and use a daily sunscreen
            that fits the realities of modern Indian life. If you have dark spots that are not
            responding to treatment, fine lines appearing earlier than they should, or skin tone
            that is getting progressively uneven despite a careful routine — the most likely missing
            piece is daily indoor SPF.
          </p>
          <p>
            Whether you work from home, commute to a glass-walled office, spend hours studying under
            artificial light, or follow an active skincare treatment routine with photosensitising
            ingredients — this guide is the complete reference for understanding and acting on the
            indoor photoprotection gap that most Indian skin routines leave unfilled.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ─────────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of UV Radiation and Why Indoors Is Not Safe</h2>

          <h3 className={styles.subHeading}>Understanding UVA vs UVB — The Critical Distinction</h3>
          <p>
            The ultraviolet spectrum is divided into three bands by wavelength: UVC (100–280nm),
            UVB (280–315nm), and UVA (315–400nm). UVC is entirely absorbed by the ozone layer and
            does not reach the earth&apos;s surface in meaningful quantities. UVB — the sunburn ray —
            has a shorter wavelength that is scattered by atmospheric particles and significantly
            attenuated by glass, cloud cover, and shade. UVA — the ageing ray — has a longer
            wavelength that passes through atmospheric scatter and most physical barriers with
            far less attenuation.
          </p>
          <p>
            This wavelength difference has a profound practical implication: you can be entirely
            protected from sunburn (UVB) while receiving significant UVA exposure. This is exactly
            the situation inside a building with glass windows — UVB is largely blocked, sunburn
            is impossible, but UVA passes through and reaches the skin at levels sufficient to
            cause cumulative photodamage over months and years. The absence of sunburn feedback
            makes this damage invisible — there is no immediate warning signal that UVA is aging
            your skin, which is precisely what makes it so dangerous and so consistently underestimated.
          </p>

          <h3 className={styles.subHeading}>How UVA Damages Skin at the Cellular Level</h3>
          <p>
            UVA penetrates to the dermis — the deep layer of the skin containing collagen and
            elastin fibres — where it causes damage through two mechanisms. The first is direct
            DNA damage: UVA induces the formation of reactive oxygen species (free radicals) that
            oxidise DNA bases in dermal cells, causing mutations that accumulate over time and
            increase the risk of cellular malignancy. The second is structural damage: UVA directly
            activates matrix metalloproteinase enzymes (MMPs) that break down collagen and elastin,
            the structural proteins that give skin its firmness and elasticity.
          </p>
          <p>
            The result of accumulated UVA damage is the constellation of changes called
            <strong> photoageing</strong>: deep wrinkles (particularly around the eyes and mouth),
            loss of skin firmness and elasticity, coarse texture, enlarged pores, vascular changes
            (redness, broken capillaries), and — particularly relevant for Indian skin — increased
            melanin production and uneven pigmentation. Unlike intrinsic ageing, which is gradual
            and affects all skin areas equally, photoageing is most pronounced in areas of greatest
            cumulative UV exposure — which in an indoor worker, may be the left side of the face
            if they sit near a window, or the hands and forearms if they rest on a desk in sunlight.
          </p>

          <h3 className={styles.subHeading}>The Indian UV Context — Why the Risk Is Higher Here</h3>
          <p>
            India&apos;s UV index varies significantly by region and season, but the aggregate annual
            UV exposure for a resident of a major Indian city is dramatically higher than for
            comparable latitudes in the northern hemisphere. The UV index in Chennai routinely
            exceeds 11–12 during summer months — categorised as &quot;extreme&quot; — while cities like
            Delhi and Jaipur maintain UV indices of 7–9 for six or more months of the year. Even
            Mumbai and Bengaluru, with their coastal and elevated moderation respectively, maintain
            UV indices that international health bodies classify as &quot;very high&quot; for the majority
            of the year.
          </p>
          <p>
            These high ambient UV levels mean that the UVA fraction transmitted through glass
            into Indian buildings carries a higher absolute dose than equivalent indoor exposure
            in temperate climates. A person sitting by a south-facing window in Chennai from
            9 AM to 5 PM receives a UVA dose that would be clinically significant even by
            outdoor standards in European cities. This is not hypothetical — it is measurable
            physics, and it is the direct explanation for why Indian dermatologists universally
            recommend year-round, daily, indoor-and-outdoor SPF use with a specificity that
            their counterparts in cooler climates apply only to summer outdoor activity.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> A study of truck drivers — who spend hours with one
              arm in direct window sunlight — found dramatically accelerated photoageing on the
              window-exposed side of their faces versus the protected side. The same asymmetric
              ageing pattern appears in office workers who consistently sit near windows without
              sunscreen. The only variable is the presence or absence of SPF on the skin
              receiving that transmitted UVA.
            </div>
          </div>
        </section>

        {/* ─── BLUE LIGHT ─────────────────────────────────────────────────────── */}
        <section id="blue-light" className={styles.section}>
          <h2 className={styles.sectionTitle}>Blue Light, Screens, and Skin Ageing — The Modern Indoor Threat</h2>

          <h3 className={styles.subHeading}>What Blue Light Is and Why It Matters for Skin</h3>
          <p>
            Visible light occupies wavelengths between 380nm and 700nm — just above the UV range.
            The high-energy end of the visible spectrum, from approximately 380nm to 500nm, is
            the blue-violet range that gives the sky its colour and is emitted in particularly
            concentrated quantities by LED technology and digital screens. This high-energy
            visible (HEV) light has enough photon energy to initiate photochemical reactions in
            the skin — generating reactive oxygen species, inducing inflammatory cytokines, and
            activating some of the same cellular stress pathways that UV radiation triggers.
          </p>
          <p>
            Research published in the <em>Journal of Investigative Dermatology</em> demonstrated
            that blue light at doses achievable from screen exposure induces pigmentation changes
            in Fitzpatrick type IV and V skin — the skin tone categories most common in the Indian
            population — at statistically significant levels. This pigmentation response does not
            occur at the same level in lighter skin tones, meaning Indian skin is specifically
            and disproportionately vulnerable to blue light pigmentation among global skin tone
            categories. This is a directly relevant finding for the hundreds of millions of Indian
            professionals and students who spend eight or more hours daily in front of screens.
          </p>

          <h3 className={styles.subHeading}>Quantifying the Blue Light Exposure in Indian Work Life</h3>
          <p>
            A typical Indian professional in 2026 spends approximately 8–10 hours in front of
            screens during working hours, plus 2–4 hours of evening screen use on smartphones
            and streaming platforms. This represents a daily blue light exposure dose that, while
            lower in intensity per unit time than direct outdoor UVA, is delivered consistently
            across 350+ days per year and accumulates without any of the seasonal or weather-related
            interruption that modulates outdoor UV exposure.
          </p>
          <p>
            Additionally, Indian offices and study environments are overwhelmingly lit with
            fluorescent or LED fixtures — both of which emit significant blue-violet light
            components. The combination of screen blue light and overhead lighting blue light
            in a typical Indian office creates an ambient HEV environment that is meaningful
            for skin health, particularly for the melanin-rich skin tones that are specifically
            photoreactive to these wavelengths.
          </p>

          <h3 className={styles.subHeading}>How Sunscreen Addresses Blue Light — The Iron Oxide Solution</h3>
          <p>
            Standard UV filters — both chemical (organic) and physical (mineral) — are designed
            to absorb wavelengths in the UV range (100–400nm) and have minimal effect on visible
            light wavelengths. Blue light at 415–455nm sits just above the upper UV range and
            is not addressed by UV filters alone. The solution is iron oxide — a pigment used in
            cosmetics and sunscreens that absorbs visible light across the blue-violet range with
            high efficiency.
          </p>
          <p>
            Sunscreens formulated with iron oxide pigments (which also provide the tinted or
            skin-tone-matched appearance of tinted SPF products) offer meaningful protection
            against HEV light in addition to UV radiation. For Indian skin tones, tinted
            sunscreens with iron oxide are simultaneously more cosmetically appropriate
            (addressing the white cast problem), more protective against HEV pigmentation
            triggers, and comparably effective to non-tinted versions for UV protection.
            The additional blue light protection is, for Indian skin specifically, a meaningful
            clinical benefit — not a marketing add-on.
          </p>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Skin Problem — How Indoor UV and Blue Light Are Causing It</h2>
          <p className={styles.sectionIntro}>
            The four most common skin concerns among Indian adults in their twenties and thirties
            have a shared causative factor that most treatment routines ignore: daily indoor
            photoexposure without protection.
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
            Daily sunscreen is appropriate for every skin type — the variable is which formula
            works best. Here is the complete guide for each major Indian skin type.
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
          <h2 className={styles.sectionTitle}>Sunscreen Feature-by-Feature Breakdown — What to Look For</h2>

          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              SPF 50 PA++++ · Broad Spectrum · Non-Greasy · Zero White Cast
            </p>
            <p className={styles.midCtaSub}>
              The daily SPF formula built for Indian skin tones, Indian climate, and modern
              indoor life.
            </p>
            
            <a  href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get SPF 50 Broad Spectrum Sunscreen on Amazon →
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
              a <em>sunscreen</em> and a <em>moisturiser with SPF</em> or a <em>foundation with SPF</em>.
              A dedicated sunscreen is formulated to deliver a uniform, stable UV filter film across
              the skin&apos;s surface at the clinically tested concentration. Moisturisers and foundations
              with SPF are applied in quantities insufficient to achieve the labelled SPF rating —
              typically 20–25% of the required application volume. They are useful supplements to
              SPF, not replacements for it. Your sunscreen should be a dedicated product, applied
              at the recommended quantity, every single morning.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Daily Sunscreen Application Guide</h2>
          <p className={styles.sectionIntro}>
            The effectiveness of any sunscreen depends entirely on how it is applied. Most
            people get the product right and the application wrong. Follow this protocol for
            full, consistent protection.
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
            💡 <strong>Pro Tip:</strong> If your skin is dry before sunscreen application,
            you are far more likely to apply too little to compensate for the dry, draggy
            texture. A well-hydrated skin base makes sunscreen spread more easily and evenly —
            ensuring you naturally apply the correct quantity without conscious effort. Build
            a complete routine: a gentle face wash suited to your skin type, followed by
            moisturiser where needed, followed by sunscreen. For a guide to building that
            base correctly, our{' '}
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.internalLink}
            >
              guide to the best moisturiser for combination skin
            </Link>{' '}
            explains exactly how to prep the skin before SPF application for maximum efficacy
            and comfort.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>What Happens to Your Skin Over Time With Daily SPF — A Realistic Timeline</h2>
          <p className={styles.sectionIntro}>
            Sunscreen&apos;s primary benefit is preventive — it stops damage from accumulating.
            But consistent daily use also delivers measurable corrective and protective effects
            over time. Here is what to expect.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — Choosing the Right Sunscreen in India</h2>
          <p className={styles.sectionIntro}>
            The Indian sunscreen market has grown significantly in recent years, but it remains
            full of products that make impressive claims while under-delivering on the formulation
            criteria that actually determine photoprotective efficacy. Here is what separates a
            sunscreen worth buying from one to pass over.
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

          <h3 className={styles.subHeading}>Common Mistakes When Buying Sunscreen in India</h3>
          <p>
            The most common and consequential buying mistake is choosing a sunscreen based on the
            SPF number alone, without checking the PA rating. SPF measures only UVB protection —
            the sunburn ray that glass already partially blocks indoors. The PA rating measures UVA
            protection — the ageing, pigmentation-causing ray that glass does not block. A sunscreen
            with SPF 50 and PA++ provides strong UVB protection but mediocre UVA protection. A
            sunscreen with SPF 50 and PA++++ provides strong protection against both wavelengths.
            For Indian skin concerned about ageing and pigmentation — which are UVA-driven concerns —
            the PA rating is the more important specification, and PA++++ is the only standard worth
            accepting for daily use.
          </p>
          <p>
            The second common mistake is avoiding sunscreen entirely due to past experiences with
            white cast, greasiness, or breakouts. These are formula problems, not inherent
            properties of sunscreen as a category. They are solved by switching to a modern,
            Indian-market formulation specifically designed for oily or medium-to-dark skin tones —
            not by abandoning photoprotection. The skin damage caused by years of unprotected
            daily UV exposure is the far greater problem. A small amount of trial to find the
            right formula is a worthwhile investment.
          </p>
          <p>
            The third mistake is treating sunscreen as an outdoor-only product and skipping it on
            work-from-home days, cloudy days, or during the evening. As this guide has documented
            in detail, indoor UV transmission and blue light exposure from screens create meaningful
            cumulative photoexposure regardless of outdoor conditions. A daily morning SPF habit —
            applied regardless of plans for the day — is the only approach that provides consistent
            protection against the indoor UV and HEV exposure that accumulates across hundreds of
            apparently &quot;safe&quot; indoor days per year.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              The right SPF formula for India. PA++++. No white cast. Works indoors.
            </p>
            <p className={styles.midCtaSub}>
              Broad-spectrum SPF 50 built for Indian skin tones and year-round daily use.
            </p>
            
            <a  href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Shop SPF 50 Sunscreen on Amazon →
            </a>
          </div>
        </section>

        {/* ─── WHO NEEDS THIS ──────────────────────────────────────────────────── */}
        <section id="who-needs" className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Needs Indoor Sunscreen Most</h2>
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
            Sunscreen works best as part of a complete, layered skincare routine. Build the
            full picture with the right cleanser, moisturiser, and targeted treatments.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/best-face-wash-oily-skin-india-2026"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>🍊</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Face Wash for Oily Skin India 2026</p>
                <p className={styles.relatedCardSub}>The right cleanse before SPF — FreshOLite Vitamin C Face Wash</p>
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
                <p className={styles.relatedCardSub}>Moist Sure Cream — prep your skin perfectly before sunscreen</p>
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
                <p className={styles.relatedCardSub}>Complete SPF comparison for oily and acne-prone Indian skin</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sunscreen Myths vs. Truth — What Indian Consumers Get Wrong</h2>
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
          <h2 className={styles.sectionTitle}>Frequently Asked Questions About Indoor Sunscreen Use</h2>
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
          <h2 className={styles.bottomCtaTitle}>Your Skin Is Ageing Indoors. Start Protecting It Today.</h2>
          <p>
            The evidence is unambiguous: UVA penetrates glass, blue light damages Indian skin,
            and cumulative indoor photoexposure is a primary driver of premature ageing and
            pigmentation in Indian adults. Daily broad-spectrum SPF 50 is not an outdoor
            luxury — it is the most impactful, evidence-backed daily skincare decision
            available, and it applies every single morning, regardless of where you plan to spend the day.
          </p>
          
         <a   href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy SPF 50 Sunscreen on Amazon →
          </a>
          <p className={styles.bottomNote}>
            SPF 50 PA++++ · Broad Spectrum · All Skin Types · Non-Comedogenic · Free Delivery Available
          </p>
        </section>

      </div>
    </article>
  );
}