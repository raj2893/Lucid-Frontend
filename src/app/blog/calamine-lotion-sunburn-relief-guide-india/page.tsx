import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './calamine-lotion-blog.module.css';

export const metadata: Metadata = {
  title: 'How to Use Calamine Lotion for Sunburn Relief — India Guide 2026',
  description: 'Expert guide on calamine lotion for sunburn relief. Learn correct application, cooling benefits, and why it works for Indian skin. Get instant relief now.',
  keywords: [
    'how to use calamine lotion for sunburn relief',
    'calamine lotion for sunburn India',
    'sunburn relief India',
    'calamine lotion benefits',
    'sunburn treatment India',
    'cooling lotion for sunburn',
    'calamine for skin rashes',
    'best calamine lotion India',
    'sunburn home remedy India',
    'calamine lotion uses',
    'skin cooling lotion summer',
    'calamine for itchy skin',
    'sunburn relief cream',
    'Indian skin sunburn care',
    'after sun care India',
    'calamine lotion for heat rash',
    'sunburn first aid India',
    'calamine lotion for sensitive skin',
    'summer skin care India',
    'calamine for prickly heat'
  ],
  alternates: {
    canonical: 'https://www.lucidllp.com/blog/calamine-lotion-sunburn-relief-guide-india',
  },
  openGraph: {
    title: 'How to Use Calamine Lotion for Sunburn Relief — India Guide 2026',
    description: 'Expert dermatologist guide: correct calamine lotion application for sunburn relief. Cooling, healing, and protection for Indian skin. Get instant relief.',
    images: [
      {
        url: '/images/calafine-lotion.png',
        width: 1200,
        height: 630,
        alt: 'Calamine Lotion for Sunburn Relief - Cooling and Healing Formula',
      },
    ],
    type: 'article',
  },
};

const AMAZON_LINK = 'https://amzn.in/d/0foGtulz';

// ─── DATA ARRAYS ───────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'intro', label: 'Why Sunburn Is a Year-Round Problem in India' },
  { id: 'science', label: 'The Science of Sunburn — What UV Radiation Does to Your Skin' },
  { id: 'calamine-science', label: 'How Calamine Lotion Actually Works on Burnt Skin' },
  { id: 'problems-grid', label: 'Your Sunburn Problem — And How Calamine Solves It' },
  { id: 'skin-type-guide', label: 'Complete Skin Type Suitability Guide for Calamine' },
  { id: 'product-deep-dive', label: 'CALAFINE Lotion — Complete Feature Breakdown' },
  { id: 'how-to-use', label: 'Step-by-Step Guide: How to Apply Calamine for Sunburn' },
  { id: 'results-timeline', label: 'Sunburn Healing Timeline — What to Expect' },
  { id: 'buying-guide', label: 'Complete Buying Guide for Calamine Lotion in India' },
  { id: 'who-needs', label: 'Who Needs Calamine Lotion Most' },
  { id: 'myths', label: 'Sunburn and Calamine Myths vs. Truth' },
  { id: 'faq', label: 'Frequently Asked Questions About Calamine for Sunburn' },
];

const problemCards = [
  {
    icon: '🔥',
    problem: 'Intense Burning Sensation',
    desc: 'The immediate aftermath of sun exposure leaves your skin feeling like it is on fire. This is not just discomfort — it is an active inflammatory response where blood vessels dilate, immune cells flood the area, and nerve endings become hypersensitive to even the lightest touch or temperature change.',
    solution: 'Calamine lotion creates an immediate cooling effect through evaporative cooling as the water base evaporates from your skin. The zinc oxide and calamine particles also provide a physical barrier that soothes irritated nerve endings within minutes of application.',
  },
  {
    icon: '👋',
    problem: 'Painful Redness and Inflammation',
    desc: 'Sunburned skin turns red because UV radiation has triggered a massive inflammatory cascade. Prostaglandins and cytokines flood the damaged tissue, causing blood vessels to expand and leak fluid into surrounding areas — creating that characteristic swollen, hot-to-the-touch appearance.',
    solution: 'The zinc oxide in calamine lotion acts as a mild astringent, reducing fluid leakage from inflamed vessels. This directly counters the inflammatory swelling while the lotion\'s cooling effect reduces the sensation of heat radiating from your skin.',
  },
  {
    icon: '❄️',
    problem: 'Persistent Itching and Peeling',
    desc: 'As sunburn begins to heal, typically 48 to 72 hours after exposure, damaged skin cells detach and begin peeling away. This process triggers intense itching that, if scratched, can damage the healing tissue beneath and potentially lead to infection or scarring.',
    solution: 'Calamine lotion contains anti-pruritic (anti-itch) properties that calm the nerve signals responsible for the urge to scratch. The dried calamine powder layer also creates a physical barrier that protects peeling skin while you sleep or go about your day.',
  },
  {
    icon: '🌡️',
    problem: 'Trapped Body Heat',
    desc: 'Sunburn impairs your skin\'s ability to regulate body temperature. Damaged blood vessels cannot dilate and constrict properly, and the inflammatory fluid trapped beneath the skin\'s surface acts as an insulating layer that prevents heat from escaping your body efficiently.',
    solution: 'The water-based calamine lotion provides immediate surface cooling that compensates for your skin\'s impaired thermoregulation. As the water evaporates, it draws heat away from your skin surface — providing relief that systemic painkillers cannot match.',
  },
];

const skinTypes = [
  {
    type: 'Oily Skin',
    icon: '💧',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Calamine\'s mild astringent properties actually benefit oily skin by absorbing excess sebum while treating sunburn. The lotion dries to a powdery finish that does not clog pores or add to oiliness.',
  },
  {
    type: 'Dry Skin',
    icon: '🏜️',
    verdict: 'Good',
    verdictClass: 'good',
    explanation: 'Calamine can be slightly drying, so those with naturally dry skin should apply a moisturizer 20 minutes after calamine application, or use a modern formula like CALAFINE that includes glycerin and aloe vera for balanced hydration.',
  },
  {
    type: 'Combination Skin',
    icon: '🔄',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'The versatile nature of calamine works well across both oily and dry zones. Apply slightly more to oily areas like the forehead and nose, and less to dry cheeks — adjust based on your skin\'s response.',
  },
  {
    type: 'Sensitive Skin',
    icon: '🌸',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Calamine is one of the most gentle topical treatments available, with virtually no reported allergic reactions. It is routinely recommended for sensitive skin conditions including eczema, poison ivy, and general contact dermatitis.',
  },
  {
    type: 'Acne-Prone Skin',
    icon: '🔴',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'The anti-inflammatory and drying properties of calamine make it doubly beneficial for acne-prone individuals who also suffer from sunburn. It reduces redness and swelling from both conditions simultaneously.',
  },
  {
    type: 'Mature Skin',
    icon: '✨',
    verdict: 'Excellent',
    verdictClass: 'excellent',
    explanation: 'Mature skin is thinner and more susceptible to UV damage. Calamine provides gentle, non-irritating relief without the harsh chemicals that can aggravate aging skin. The zinc oxide also offers mild photoprotection for ongoing healing.',
  },
];

const benefits = [
  {
    number: '01',
    heading: 'Zinc Oxide — The Primary Healing Agent',
    body1: `Zinc oxide is not merely a passive ingredient in calamine lotion — it is the primary therapeutic agent responsible for the formula's healing and protective properties. When applied to sunburned skin, zinc oxide forms a physical barrier that reflects further UV radiation while simultaneously creating an environment conducive to tissue repair. The zinc ions released from this barrier actively participate in multiple stages of wound healing, including cell proliferation, collagen synthesis, and the regulation of inflammatory mediators.

What makes zinc oxide particularly effective for sunburn is its dual action as both a mild astringent and a skin protectant. The astringent effect reduces the fluid leakage from damaged capillaries that causes the swollen, weeping appearance of severe sunburn. Meanwhile, the protectant layer prevents friction and further irritation from clothing or accidental contact — giving your skin the uninterrupted healing time it desperately needs. For Indian skin types, which can be prone to post-inflammatory hyperpigmentation, this protection against further irritation is especially valuable.`,
    body2: `The concentration of zinc oxide matters significantly for therapeutic effect. Traditional calamine formulations contain approximately 15-20% zinc oxide, which is sufficient for mild to moderate sunburn. More severe burns benefit from higher concentrations or more frequent application. The zinc oxide also provides mild antimicrobial protection — not sufficient to treat established infection, but enough to prevent opportunistic bacteria from colonizing damaged tissue during the critical first 48 hours of healing.`,
  },
  {
    number: '02',
    heading: 'Ferric Oxide — The Calamine Pigment with Purpose',
    body1: `The characteristic pink color of calamine lotion comes from ferric oxide — iron oxide in its red form. While this pigment is often dismissed as merely cosmetic, it serves several functional purposes in sunburn treatment. The iron oxide particles contribute to the lotion's light-reflective properties, providing mild photoprotection that traditional clear gels cannot match. This is particularly relevant for sunburn treatment, as further UV exposure on already-damaged skin compounds injury significantly.

Ferric oxide also acts as a mild physical barrier that helps the lotion adhere to skin for extended periods without rubbing off. This extended adherence means you do not need to reapply as frequently as water-based gels or sprays, which is valuable during sleep when you cannot actively monitor and reapply treatment. The pigment also makes application visible — you can see exactly where you have applied the lotion and ensure complete coverage of all burned areas.`,
    body2: `In the Indian context, where sunburn often affects larger body areas including the back, shoulders, and arms, this visual confirmation of coverage prevents the common problem of missed patches that continue to cause pain while surrounding treated areas feel better. The ferric oxide also has very low potential for skin irritation or allergic reaction, making it safe even for sensitive skin types common across Indian skin tones.`,
  },
  {
    number: '03',
    heading: 'Cooling Evaporative Effect — Instant Relief Mechanism',
    body1: `The most immediate benefit of calamine lotion comes from something surprisingly simple: water evaporation. Traditional calamine lotion is approximately 70-80% water, with calamine and zinc oxide particles suspended in this aqueous base. When you apply this water base to hot, sunburned skin, the water begins evaporating immediately — and evaporation is an endothermic process, meaning it draws heat energy away from your skin surface.

This evaporative cooling is not just psychological — it is real, measurable temperature reduction that provides relief within 60 to 90 seconds of application. The effect lasts as long as the lotion remains wet on your skin, typically 15 to 20 minutes depending on humidity levels. In India's typically higher humidity environments, the cooling effect lasts longer because evaporation proceeds more slowly — an advantage for Indian users that those in dry climates do not experience.`,
    body2: `Modern calamine formulations like CALAFINE enhance this cooling effect through the addition of aloe vera and glycerin. Aloe vera contains its own cooling compounds and additional water content that extends the evaporative cooling window. Glycerin acts as a humectant, drawing moisture from the air to keep the application site hydrated longer — which in turn means the cooling effect persists for extended periods compared to traditional formulas.`,
  },
  {
    number: '04',
    heading: 'Anti-Inflammatory Action Without Steroids',
    body1: `One of calamine's most valuable properties for sunburn treatment is its anti-inflammatory effect achieved without the use of corticosteroids. Steroid creams, while effective for inflammation, carry risks when used on damaged skin including delayed healing, increased infection risk, and skin thinning with prolonged use. Calamine provides meaningful inflammation reduction through an entirely different mechanism.

The anti-inflammatory action comes from the combined effects of zinc oxide and calamine particles physically absorbing inflammatory exudate (the fluid that causes swelling), while zinc ions actively modulate the activity of inflammatory cytokines at the cellular level. This dual mechanism reduces both the visible redness and the underlying immune response driving that redness — without the side effect profile of pharmaceutical anti-inflammatories.`,
    body2: `For Indian skin, which can be prone to post-inflammatory hyperpigmentation (PIH), this gentle anti-inflammatory action is particularly valuable. Aggressive steroid use on facial sunburn can trigger rebound inflammation or perioral dermatitis when discontinued. Calamine provides consistent, non-steroidal relief that can be used multiple times daily for the entire duration of sunburn healing without these concerns.`,
  },
];

const steps = [
  {
    num: '01',
    title: 'Cool the Burn First — Never Apply to Hot Skin',
    desc: 'Before applying any calamine lotion, cool the burned area with plain cool (not cold) water for 10 to 15 minutes. Apply a cool, damp cloth or take a cool shower. This stops the ongoing thermal damage and reduces skin temperature before you apply any product. Applying calamine to skin that is still hot to the touch traps heat beneath the lotion layer, reducing its effectiveness.',
  },
  {
    num: '02',
    title: 'Shake the Bottle Thoroughly',
    desc: 'Calamine lotion is a suspension, not a solution. The calamine and zinc oxide particles settle at the bottom of the bottle between uses. Shake vigorously for at least 30 seconds until the liquid appears uniformly pink with no visible sediment at the bottom. Failure to shake properly results in watery application with insufficient active ingredients reaching your skin.',
  },
  {
    num: '03',
    title: 'Apply a Generous, Even Layer',
    desc: 'Pour a quarter-sized amount onto a cotton ball or clean fingertips and apply in a smooth, even layer over the entire burned area. Do not rub vigorously — sunburned skin is fragile, and aggressive rubbing causes micro-tears that prolong healing. The layer should be thick enough to appear visibly pink but thin enough that you can still see skin texture beneath.',
  },
  {
    num: '04',
    title: 'Allow to Dry Completely Before Covering',
    desc: 'Wait 10 to 15 minutes for the water base to evaporate, leaving the calamine and zinc oxide powder layer on your skin. Do not cover with clothing or bandages until fully dry, as covering traps moisture and prevents the cooling evaporative effect from working. Once dry, loose cotton clothing can be worn over treated areas.',
  },
  {
    num: '05',
    title: 'Reapply Every 3 to 4 Hours',
    desc: 'Calamine lotion remains effective for approximately three to four hours before the protective powder layer begins to wear off through normal contact with clothing and bedding. Reapply whenever you notice the pink color fading or when the burning sensation returns. For severe sunburn, set a timer for reapplication during the first 24 to 48 hours.',
  },
  {
    num: '06',
    title: 'Wash Off Before Reapplying After 24 Hours',
    desc: 'After the first day of treatment, gently wash off the previous day\'s calamine residue with cool water and mild soap before applying a fresh layer. Old product buildup combined with dead skin cells can create a barrier that prevents fresh calamine from contacting healing skin beneath. Be extremely gentle during washing — do not scrub peeling skin.',
  },
];

const timeline = [
  {
    period: 'First 2 to 4 Hours',
    title: 'Immediate Cooling and Pain Reduction',
    detail: 'Within minutes of first application, the evaporative cooling effect reduces skin temperature by several degrees. The burning sensation drops from intense to mild or moderate. Redness remains visible but the feeling of heat radiating from the skin diminishes significantly.',
  },
  {
    period: '12 to 24 Hours',
    title: 'Maximum Inflammation Control',
    detail: 'With consistent reapplication every three to four hours, the inflammatory response reaches its peak but is actively managed. Swelling subsides noticeably. The skin feels tender rather than painful. Blistering, if it was going to occur, typically appears during this window.',
  },
  {
    period: '48 to 72 Hours',
    title: 'Peeling Begins, Itching Replaces Pain',
    detail: 'The pain phase ends and the peeling phase begins. Dead skin cells detach, causing significant itching. Calamine\'s anti-itch properties become as valuable as its cooling effects were initially. Continue application to prevent scratching damage during sleep.',
  },
  {
    period: 'Days 4 to 7',
    title: 'Active Healing and Pigmentation Management',
    detail: 'New skin cells have replaced the damaged layers. Some residual redness may persist, particularly in darker Indian skin tones. Continue calamine application on any remaining pink or sensitive areas. For facial sunburn, this is the critical period for preventing post-inflammatory hyperpigmentation.',
  },
];

const buyingGuidePoints = [
  {
    icon: '🧪',
    title: 'Check the Zinc Oxide Concentration',
    body: 'Not all calamine lotions contain the same concentration of active ingredients. Look for products listing zinc oxide at 15% or higher for therapeutic effect on sunburn. Products with lower concentrations may provide cooling relief but significantly less healing and protective benefit. Premium formulations like CALAFINE optimize this concentration for maximum efficacy.',
  },
  {
    icon: '💧',
    title: 'Look for Enhanced Formulas with Aloe and Glycerin',
    body: 'Traditional calamine lotion works well but can be drying with repeated application. Modern formulations add aloe vera for additional cooling and anti-inflammatory benefits, plus glycerin to maintain skin hydration. These enhanced formulas provide superior results for sunburn treatment, particularly for dry or sensitive skin types.',
  },
  {
    icon: '🏺',
    title: 'Avoid Added Fragrances and Alcohol',
    body: 'Many budget calamine products add fragrances or denatured alcohol to improve smell or drying speed. Both ingredients irritate sunburned skin and can delay healing. Check the ingredient list — if you see "parfum", "fragrance", "alcohol denat", or "SD alcohol", choose a different product. The best calamine for sunburn has no added fragrance and uses a simple water base.',
  },
  {
    icon: '📏',
    title: 'Consider Pack Size for Full Treatment Course',
    body: 'A 100ml bottle of calamine lotion typically provides 10 to 15 full-body applications. For significant sunburn affecting large areas (back, shoulders, both arms and legs), a single bottle may not last the full healing period. Consider purchasing a pack of two or a larger 200ml bottle to ensure uninterrupted treatment through the full one-week healing timeline.',
  },
];

const whoNeeds = [
  { icon: '🏖️', label: 'Beach and Pool Goers', desc: 'Extended water exposure washes off sunscreen, and reflective water surfaces intensify UV exposure. Calamine provides immediate relief after water activities.' },
  { icon: '🏃', label: 'Outdoor Athletes and Runners', desc: 'Long hours of training in India\'s sun, particularly between 10 AM and 4 PM, regularly cause sunburn despite sunscreen use. Calamine is essential post-run recovery.' },
  { icon: '👒', label: 'People Who Forget to Reapply Sunscreen', desc: 'Even diligent morning sunscreen users often forget the critical two-hour reapplication. Calamine is the backup plan for those days.' },
  { icon: '🧑‍🌾', label: 'Outdoor Workers', desc: 'Farmers, construction workers, delivery personnel, and security guards face daily sun exposure that no sunscreen can fully block. Calamine provides end-of-day relief.' },
  { icon: '✈️', label: 'Frequent Travelers', desc: 'Airport to auto-rickshaw to outdoor sightseeing — travel days combine multiple sun exposure episodes. Calamine in your bag ensures you can treat burns the same evening.' },
  { icon: '👶', label: 'Parents of Active Children', desc: 'Children rarely tolerate sunscreen reapplication every two hours and often remove hats. Calamine is pediatrician-recommended for treating inevitable childhood sunburns.' },
  { icon: '☀️', label: 'High-Altitude Visitors', desc: 'Hill stations like Manali, Darjeeling, and Leh have significantly higher UV intensity than the plains. Visitors often underestimate this and burn badly on day one.' },
  { icon: '🧴', label: 'People with Sunscreen Allergies', desc: 'Some individuals cannot tolerate chemical sunscreens due to contact dermatitis. Calamine treats the burns that occur when physical sunscreens are the only option but are used imperfectly.' },
];

const myths = [
  {
    myth: 'Calamine lotion works best when applied to ice-cold skin right after sun exposure',
    truth: 'Applying calamine immediately after sun exposure, before cooling the skin, traps heat beneath the lotion layer and reduces effectiveness. Always cool sunburned skin with cool water for 10-15 minutes before applying any product. Calamine treats inflammation — it does not replace the first-aid step of stopping the ongoing thermal damage.',
  },
  {
    myth: 'The thicker you apply calamine, the faster your sunburn heals',
    truth: 'Calamine provides no additional benefit beyond a moderate, even layer. Excessively thick application creates a paste that cracks and falls off, wasting product. The active ingredients work at the skin surface — piling on more product does not increase penetration or healing speed. Apply enough to see an even pink layer and stop there.',
  },
  {
    myth: 'Calamine lotion works the same on all types of sunburn',
    truth: 'Calamine is effective for first-degree sunburn (redness, pain, no blistering). For second-degree sunburn with significant blistering, calamine provides symptom relief but medical attention may be needed. If blisters cover more than 20% of a body area or appear on the face, hands, or genitals, consult a doctor before relying solely on calamine.',
  },
  {
    myth: 'You can use calamine lotion as a sunscreen substitute',
    truth: 'Calamine lotion provides only minimal UV protection — approximately SPF 4 to 6. It is absolutely not a substitute for proper sunscreen. Never use calamine as your primary sun protection. It is a treatment for burns that have already occurred, not a prevention method. The zinc oxide content offers some reflection but at insufficient concentration for meaningful protection.',
  },
  {
    myth: 'Calamine lotion should be washed off immediately when peeling begins',
    truth: 'Peeling skin benefits from continued calamine application. The anti-itch properties prevent scratching that can damage healing tissue beneath peeling layers. Continue using calamine through the peeling phase, but wash off old product before each fresh application to prevent buildup on loosening skin cells.',
  },
  {
    myth: 'All calamine lotions are identical — buy the cheapest option',
    truth: 'Significant formulation differences exist between calamine products. Budget options often contain alcohol, fragrances, or lower zinc oxide concentrations. Premium formulations like CALAFINE add aloe vera, glycerin, and optimized ingredient ratios for superior cooling, hydration, and healing. For sunburn treatment, paying more for an enhanced formula produces measurably better results.',
  },
];

const faqs = [
  {
    q: 'How soon after sun exposure should I apply calamine lotion?',
    a: 'Apply calamine lotion immediately after cooling the burned skin with cool water for 10 to 15 minutes. Do not apply to hot skin — the cooling step is essential. The sooner you apply after the cooling step, the faster the inflammatory response is controlled. Waiting hours allows the full inflammatory cascade to develop, making treatment less effective.',
  },
  {
    q: 'Can I use calamine lotion on my face for sunburn?',
    a: 'Yes, calamine lotion is safe for facial sunburn. However, be careful to avoid the eye area and lips. Apply a thinner layer on the face than you would on body areas, as facial skin is more delicate. For facial application, enhanced formulas with aloe vera and glycerin are preferable to traditional calamine, which can be drying on the more sensitive skin of the face.',
  },
  {
    q: 'How many times per day should I apply calamine for sunburn?',
    a: 'Apply every three to four hours during waking hours for the first 48 hours after sunburn. This typically means four to five applications per day. For severe sunburn, set alarms to ensure consistent reapplication. After 48 hours, reduce to three applications daily as the acute inflammation subsides. Continue through the peeling phase as needed for itch relief.',
  },
  {
    q: 'Can I use calamine lotion on sunburn blisters?',
    a: 'Apply calamine carefully around blisters, but avoid applying directly to broken blisters or open skin. For intact blisters, calamine can be applied over them gently. If a blister has popped, treat it as an open wound — clean with mild soap and water, apply an antibiotic ointment, and only use calamine on the surrounding intact skin. Do not intentionally pop blisters to apply calamine.',
  },
  {
    q: 'Is calamine lotion effective for heat rash and prickly heat?',
    a: 'Yes, calamine lotion is highly effective for heat rash (miliaria) and prickly heat — common summer skin problems across India. The cooling effect relieves the intense itching, while the drying action helps clear blocked sweat ducts that cause the condition. Apply a thin layer to affected areas two to three times daily. This is one of the most common off-label uses of calamine in India\'s hot, humid climate.',
  },
  {
    q: 'Can I use calamine lotion along with aloe vera gel?',
    a: 'Use them separately rather than mixing. Apply aloe vera gel first, allow it to absorb for five to ten minutes, then apply calamine lotion over it. Aloe provides deep hydration and additional anti-inflammatory compounds, while calamine provides the cooling barrier and itch relief. Do not mix them in your hand before applying — apply in layers for best results.',
  },
  {
    q: 'Does calamine lotion expire? How long can I keep it?',
    a: 'Calamine lotion typically expires two to three years from the manufacturing date. Check the expiry date printed on the bottle. Expired calamine may separate permanently, develop an unusual odor, or lose its suspension properties — the powder settles into a hard layer that shaking cannot redisperse. Using expired calamine on sunburn is not dangerous but may be ineffective. Replace any bottle older than three years.',
  },
  {
    q: 'Can pregnant women use calamine lotion for sunburn?',
    a: 'Yes, calamine lotion is considered safe for use during pregnancy. The ingredients (calamine, zinc oxide, and the water base) are not absorbed systemically in significant amounts and have no known risks during pregnancy. However, pregnant women should be especially diligent about sun protection since pregnancy hormones can increase the risk of melasma (dark patches) triggered by UV exposure.',
  },
  {
    q: 'Why does my calamine lotion sometimes feel like it is burning when I apply it?',
    a: 'A mild stinging sensation for the first 30 to 60 seconds is normal, particularly on severe sunburn where the skin barrier is compromised. This is the water base evaporating and the active ingredients contacting hypersensitive nerve endings. If stinging persists beyond two minutes or intensifies, wash off immediately — you may have an allergic reaction (rare) or be using a formula with alcohol or fragrance (common in budget products). Switch to a pure, fragrance-free formula.',
  },
  {
    q: 'Can I apply moisturizer after calamine lotion?',
    a: 'Apply moisturizer before calamine, not after. Calamine forms a protective barrier layer — anything applied over it will not penetrate effectively. For dry skin types, apply a light, non-comedogenic moisturizer first, allow it to absorb for five minutes, then apply calamine over it. This provides hydration beneath the protective layer. Never apply moisturizer over dried calamine — it will just sit on top and feel greasy.',
  },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────────

export default function CalamineLotionBlogPage() {
  return (
    <article className={styles.blog}>

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Skincare · Sunburn Relief · Calamine Lotion · India Guide 2026</span>
            <h1 className={styles.heroTitle}>
              How to Use Calamine Lotion for
              <br />
              <em>Sunburn Relief in India</em>
            </h1>
            <p className={styles.heroSub}>
              The intense Indian sun does not take a break — and neither does your skin's need for protection.
              When sunburn happens despite your best efforts, calamine lotion is the most effective,
                  science-backed solution for cooling, healing, and preventing long-term damage. This complete
              guide covers everything from application technique to choosing the right formula for Indian skin.
            </p>
            <div className={styles.heroMeta}>
              <span>⏱ 16 min read</span>
              <span>📅 April 2026</span>
              <span>📝 5,200+ words</span>
            </div>
            <div className={styles.heroActions}>
              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Buy CALAFINE Calamine Lotion on Amazon →
              </a>
              <span className={styles.heroSubNote}>Enhanced with Aloe Vera & Glycerin · For Sunburn & Heat Rash</span>
            </div>
          </div>

          {/* ── PRODUCT IMAGE ── */}
          <div className={styles.imageWrap}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageCard}>
              <Image
                src="/images/calafine-lotion.png"
                alt="CALAFINE Calamine Lotion for Sunburn Relief - Cooling and Healing Formula for Indian Skin"
                fill
                sizes="(max-width: 580px) 90vw, (max-width: 920px) 45vw, 420px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.imagePills}>
              <span>🌿 Calamine + Zinc Oxide</span>
              <span>💧 Aloe Vera Enriched</span>
              <span>❄️ Instant Cooling</span>
              <span>🛡️ Anti-Itch Protection</span>
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
          <h2 className={styles.sectionTitle}>Why Sunburn Is a Year-Round Problem in India — Not Just Summer</h2>
          <p>
            You step out of your house in Mumbai in February, thinking the winter sun is harmless. By evening,
            your forearms are pink, tender, and radiating heat. This is not an accident — it is a fundamental
            misunderstanding of how UV radiation works in the Indian context. Unlike temperate countries where
            sunburn is strictly a summer phenomenon, India's geographical position between 8° and 37° North
            latitude means significant UV exposure reaches the ground every single day of the year.
          </p>
          <p>
            The numbers are stark: UV index readings in Indian cities routinely exceed 8 between 10 AM and
            4 PM, even during December and January. At this intensity, unprotected fair to medium Indian skin
            tones begin burning within 15 to 20 minutes. Darker skin tones have more natural melanin protection —
            equivalent to approximately SPF 4 to 8 — but this only extends the burning time to 30 to 45 minutes.
            A morning commute, a lunch break walk, an afternoon spent at an outdoor market — these everyday
            activities accumulate UV damage that your skin remembers.
          </p>
          <p>
            The problem is compounded by India's air quality. Particulate matter and pollution haze actually
            increase the scattering of UVB rays, meaning diffuse UV radiation reaches your skin even when you
            are standing in what appears to be shade. This is why you can develop sunburn on a cloudy day in
            Delhi or Kolkata — the clouds block visible light but not the UV radiation that causes burning.
          </p>
          <p>
            For Indian skin specifically, sunburn presents an additional challenge beyond pain and peeling.
            Post-inflammatory hyperpigmentation (PIH) — the darkening of skin following inflammation — is
            significantly more common and more persistent in skin types III through V, which represent the
            majority of the Indian population. A sunburn that heals in a week for someone with lighter skin
            can leave dark patches that persist for months on Indian skin. This makes proper, immediate
            treatment not just a comfort issue but a cosmetic necessity.
          </p>
          <p>
            This guide covers everything you need to know about using calamine lotion for sunburn relief in
            the Indian context: the science of UV damage, how calamine works at the cellular level, a complete
            breakdown of application techniques for different body areas, how to choose between traditional
            and enhanced calamine formulas, and a realistic timeline for healing and pigmentation management.
            If you have ever returned from a day outdoors with hot, red, painful skin — read this before
            your next sun exposure.
          </p>
        </section>

        {/* ─── SCIENCE SECTION ─────────────────────────────────────────────────── */}
        <section id="science" className={styles.section}>
          <h2 className={styles.sectionTitle}>The Science of Sunburn — What UV Radiation Actually Does to Your Skin</h2>

          <h3 className={styles.subHeading}>UVA vs. UVB: Two Different Types of Damage</h3>
          <p>
            Sunlight contains two distinct types of ultraviolet radiation that affect your skin differently.
            <strong> UVB rays</strong> have shorter wavelengths that penetrate only the outermost skin layer —
            the epidermis. UVB is responsible for the immediate redness, pain, and peeling of sunburn. It
            damages the DNA in your skin cells directly, triggering an inflammatory response designed to
            eliminate cells that have suffered irreparable genetic damage. This is why sunburn hurts — your
            body is deliberately destroying its own damaged cells to prevent them from becoming cancerous later.
          </p>
          <p>
            <strong>UVA rays</strong> have longer wavelengths that penetrate deeper into the dermis, where
            collagen and elastin fibers reside. UVA does not cause immediate burning, which makes it deceptive —
            you feel fine while significant damage accumulates beneath the surface. UVA is primarily responsible
            for premature aging, wrinkle formation, and the suppression of the skin's immune function. It also
            triggers the melanin production that causes tanning and, in Indian skin types, the uneven pigmentation
            that leads to dark spots and melasma.
          </p>
          <p>
            Both UVA and UVB reach the ground year-round in India, with peak intensity between 10 AM and 4 PM.
            The common belief that clouds or winter temperatures reduce UV risk is dangerously false — up to
            80% of UV radiation penetrates cloud cover, and temperature has no relationship to UV intensity.
            You can get a severe sunburn on a cool, overcast December day in Bengaluru.
          </p>

          <h3 className={styles.subHeading}>The Inflammatory Cascade: What Happens Inside Your Skin</h3>
          <p>
            When UV radiation damages skin cells, those cells release signaling molecules called
            <strong> cytokines</strong> and <strong>prostaglandins</strong>. These chemical messengers trigger
            a cascade of inflammatory responses: blood vessels dilate (causing redness), fluid leaks from
            capillaries into surrounding tissue (causing swelling), and nerve endings become hypersensitive
            (causing pain and tenderness). This cascade typically peaks 12 to 24 hours after UV exposure,
            which is why sunburn often feels worse the day after sun exposure than it did immediately after.
          </p>
          <p>
            The body's response also includes programmed cell death (apoptosis) of severely damaged cells.
            These dead cells detach from the underlying healthy skin layers, leading to the peeling phase
            that begins approximately 48 to 72 hours after sun exposure. This peeling is your body's way of
            removing cells that could potentially become cancerous if allowed to survive and replicate with
            damaged DNA.
          </p>
          <p>
            For Indian skin, this inflammatory cascade has an additional consequence. The melanocytes —
            pigment-producing cells — are particularly sensitive to inflammatory signals. When inflammation
            occurs, these cells often go into overdrive, producing excess melanin that deposits as dark patches
            long after the sunburn itself has healed. This PIH can persist for months and is notoriously
            difficult to treat once established, making prevention through proper sunburn treatment critically
            important.
          </p>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>💡</span>
            <div>
              <strong>Key Insight:</strong> The pain of sunburn serves a protective function — it forces you
              to avoid further UV exposure to the affected area. However, the inflammatory response that
              causes this pain also causes the long-term damage. Effective sunburn treatment does not just
              mask pain — it actively reduces inflammation, which directly reduces the risk of long-term
              pigmentation issues and skin damage. This is why calamine's anti-inflammatory action is more
              valuable than simple numbing agents.
            </div>
          </div>
        </section>

        {/* ─── CALAMINE SCIENCE DEEP DIVE ───────────────────────────────────────── */}
        <section id="calamine-science" className={styles.section}>
          <h2 className={styles.sectionTitle}>How Calamine Lotion Actually Works on Burnt Skin</h2>

          <h3 className={styles.subHeading}>Physical Cooling: The Immediate Relief Mechanism</h3>
          <p>
            The most immediate benefit of calamine lotion comes from something deceptively simple:
            evaporative cooling. Traditional calamine lotion is approximately 70 to 80 percent water,
            with calamine and zinc oxide particles suspended in this aqueous base. When you apply this
            water to hot, sunburned skin, the water begins evaporating immediately — and evaporation is
            an endothermic process, meaning it draws heat energy away from your skin surface.
          </p>
          <p>
            This is not psychological — it is real, measurable temperature reduction that provides
            meaningful relief within 60 to 90 seconds of application. The effect lasts as long as the
            lotion remains wet on your skin, typically 15 to 20 minutes depending on ambient humidity.
            In India's typically higher humidity environments, the cooling effect actually lasts longer
            because evaporation proceeds more slowly — an advantage for Indian users that those in dry
            climates do not experience.
          </p>

          <h3 className={styles.subHeading}>Zinc Oxide: The Primary Healing Agent</h3>
          <p>
            Zinc oxide is not merely a passive ingredient — it is the primary therapeutic agent responsible
            for calamine's healing and protective properties. When applied to sunburned skin, zinc oxide
            forms a physical barrier that reflects further UV radiation while simultaneously creating an
            environment conducive to tissue repair. The zinc ions released from this barrier actively
            participate in multiple stages of wound healing, including cell proliferation, collagen
            synthesis, and the regulation of inflammatory mediators.
          </p>
          <p>
            What makes zinc oxide particularly effective for sunburn is its dual action as both a mild
            astringent and a skin protectant. The astringent effect reduces the fluid leakage from damaged
            capillaries that causes the swollen, weeping appearance of severe sunburn. The protectant layer
            prevents friction and further irritation from clothing or accidental contact — giving your
            skin uninterrupted healing time.
          </p>

          <h3 className={styles.subHeading}>The Calamine Powder: Gentle Absorption of Inflammatory Fluids</h3>
          <p>
            Calamine itself — a combination of zinc oxide and ferric oxide — contributes additional
            therapeutic effects beyond those of zinc oxide alone. The finely milled powder particles
            physically absorb inflammatory exudate (the fluid that causes swelling and weeping) from
            the skin surface. This absorption reduces the moisture available for bacterial growth while
            simultaneously removing the chemical mediators that perpetuate the inflammatory cycle.
          </p>
          <p>
            The ferric oxide component also provides mild photoprotection through light reflection —
            not enough to replace sunscreen, but sufficient to protect healing skin from incidental
            UV exposure during the treatment period. The visible pink color, while often dismissed as
            cosmetic, serves the practical purpose of showing you exactly where you have applied the
            product, ensuring complete coverage of all burned areas.
          </p>
        </section>

        {/* ─── PROBLEMS GRID ──────────────────────────────────────────────────── */}
        <section id="problems-grid" className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Sunburn Problem — And How Calamine Solves It</h2>
          <p className={styles.sectionIntro}>
            Sunburn is not a single sensation but a collection of distinct problems, each requiring a
            specific therapeutic response. Here is how calamine lotion addresses each component of the
            sunburn experience.
          </p>
          <div className={styles.problemsGrid}>
            {problemCards.map((card) => (
              <div key={card.problem} className={styles.problemCard}>
                <span className={styles.problemIcon}>{card.icon}</span>
                <h3 className={styles.problemTitle}>{card.problem}</h3>
                <p className={styles.problemDesc}>{card.desc}</p>
                <div className={styles.problemFix}>
                  <span className={styles.fixLabel}>✓ Calamine Solution</span>
                  <p>{card.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SKIN TYPE GUIDE ────────────────────────────────────────────────── */}
        <section id="skin-type-guide" className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete Skin Type Suitability Guide for Calamine</h2>
          <p className={styles.sectionIntro}>
            While calamine lotion works across all skin types, understanding how it interacts with your
            specific skin type helps you use it most effectively.
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

          {/* Mid CTA 1 */}
          <div className={styles.midCta}>
            <p className={styles.midCtaHead}>
              Enhanced Calamine Formula with Aloe Vera and Glycerin
            </p>
            <p className={styles.midCtaSub}>
              More than traditional calamine — developed specifically for Indian skin needs and climate
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Get CALAFINE Lotion on Amazon — Pack of 2 →
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
              <strong>Important Distinction:</strong> Not all calamine lotions are created equal.
              Traditional calamine formulas contain only calamine, zinc oxide, and a water base with
              preservatives. Modern enhanced formulations like CALAFINE add <strong>aloe vera</strong>
              (for additional cooling and anti-inflammatory benefits), <strong>glycerin</strong>
              (to prevent the drying effect that can occur with traditional calamine), and optimized
              ingredient ratios for better suspension and application. For sunburn treatment, enhanced
              formulas produce superior results, particularly for dry or sensitive skin types.
            </div>
          </div>
        </section>

        {/* ─── HOW TO USE ─────────────────────────────────────────────────────── */}
        <section id="how-to-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Guide: How to Apply Calamine for Sunburn</h2>
          <p className={styles.sectionIntro}>
            Application technique significantly affects results. Follow this protocol precisely for
            maximum cooling, healing, and pigmentation prevention.
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
            💡 <strong>Pro Tip:</strong> For severe sunburn affecting large body areas (entire back, both
            shoulders and arms), apply calamine immediately after a cool shower while your skin is still
            slightly damp. The residual moisture helps the calamine spread more evenly and extends the
            evaporative cooling effect. For best long-term skin health, combine your sunburn recovery
            routine with a consistent daily moisturizing practice — our{' '}
            <Link
              href="/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba"
              className={styles.internalLink}
            >
              complete guide to the best moisturizer for combination skin
            </Link>{' '}
            explains how to maintain your skin barrier between sun exposure episodes.
          </div>
        </section>

        {/* ─── RESULTS TIMELINE ───────────────────────────────────────────────── */}
        <section id="results-timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sunburn Healing Timeline — What to Expect With Proper Calamine Use</h2>
          <p className={styles.sectionIntro}>
            Sunburn follows a predictable healing pattern when treated correctly. Here is what you should
            experience with consistent calamine application.
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
          <h2 className={styles.sectionTitle}>Complete Buying Guide — What to Look for in Calamine Lotion in India</h2>
          <p className={styles.sectionIntro}>
            The Indian market offers dozens of calamine products, but formulation quality varies
            dramatically. Here is exactly what separates an effective product from one that provides
            minimal benefit.
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

          <h3 className={styles.subHeading}>Common Mistakes People Make When Buying Calamine Lotion</h3>
          <p>
            The most common buying mistake is assuming all calamine products are identical and choosing
            the cheapest option. Budget calamine lotions often contain significant amounts of alcohol
            (listed as "alcohol denat" or "SD alcohol") to speed drying time and reduce manufacturing
            costs. Alcohol is highly irritating to sunburned skin, causing stinging that many users
            mistake for the product working — when in fact it is causing additional damage to already
            compromised skin barrier function.
          </p>
          <p>
            The second most common mistake is ignoring the ingredient list beyond calamine and zinc
            oxide. Premium products like CALAFINE add aloe vera for additional cooling and anti-inflammatory
            benefits, plus glycerin to prevent excessive drying. These additions transform calamine from
            a basic treatment into a comprehensive healing formula. The price difference between budget
            and premium calamine is typically small — often less than the cost of a single coffee —
            but the difference in results is substantial.
          </p>
          <p>
            The third mistake is buying a single small bottle when significant sunburn requires multiple
            applications over several days. A 100ml bottle provides approximately 10 full-body applications.
            For sunburn affecting large areas, a single bottle may not last the full treatment period.
            Purchasing a pack of two or a larger 200ml bottle ensures uninterrupted treatment through the
            critical first 72 hours when consistent application matters most.
          </p>

          <div className={styles.midCta} style={{ marginTop: '40px' }}>
            <p className={styles.midCtaHead}>
              The right calamine formula for Indian skin and climate
            </p>
            <p className={styles.midCtaSub}>
              CALAFINE Lotion — enhanced with aloe vera and glycerin for superior cooling and healing
            </p>
            <a
              href={AMAZON_LINK}
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
          <p className={styles.sectionIntro}>
            While anyone with sunburn benefits from calamine, these specific groups should always keep
            a bottle accessible.
          </p>
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
            Sunburn treatment is just one part of comprehensive skin health. Build a complete routine
            with products for every skin concern.
          </p>
          <div className={styles.relatedCards}>
            <Link
              href="/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>📘</span>
              <div>
                <p className={styles.relatedCardTitle}>Calamine Lotion Uses & Benefits — Complete 2026 Guide</p>
                <p className={styles.relatedCardSub}>Beyond sunburn: acne, rashes, prickly heat, and more</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
            <Link
              href="/blog/best-sunscreen-oily-skin-india-spf-guide"
              className={styles.relatedCard}
            >
              <span className={styles.relatedCardIcon}>☀️</span>
              <div>
                <p className={styles.relatedCardTitle}>Best Sunscreen for Oily Skin India — 2026 SPF Guide</p>
                <p className={styles.relatedCardSub}>Prevent sunburn before it happens with the right SPF</p>
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
                <p className={styles.relatedCardSub}>Aloe Vera, Vitamin-E & Jojoba Oil for balanced hydration</p>
              </div>
              <span className={styles.relatedArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ─── MYTHS SECTION ───────────────────────────────────────────────────── */}
        <section id="myths" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sunburn and Calamine Myths vs. Truth — What Indian Consumers Get Wrong</h2>
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
          <h2 className={styles.sectionTitle}>Frequently Asked Questions About Calamine for Sunburn</h2>
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
          <h2 className={styles.bottomCtaTitle}>Relief Is Minutes Away — Keep CALAFINE Within Reach</h2>
          <p>
            Sunburn does not have to mean days of pain, sleepless nights, and weeks of peeling,
            pigmented skin. With the right calamine formula applied correctly, you can cut healing
            time significantly and prevent the long-term skin damage that makes sunburn so problematic
            for Indian skin types. CALAFINE Lotion combines traditional calamine and zinc oxide with
            aloe vera and glycerin — the enhanced formula your skin deserves when the Indian sun has
            been unkind.
          </p>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Buy CALAFINE Calamine Lotion on Amazon →
          </a>
          <p className={styles.bottomNote}>Pack of 2 · All Skin Types · Enhanced with Aloe & Glycerin · Free Delivery Available</p>
        </section>

      </div>
    </article>
  );
}