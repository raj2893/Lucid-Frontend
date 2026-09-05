// ─────────────────────────────────────────────────────────────
//  LUCID PHARMATECH — CENTRAL PRODUCT DATA
//
//  Single source of truth. Homepage, /products and /products/[slug]
//  all read from here. To add a product: append to `products`, add an
//  image under /public/images, set the Amazon URL. The route, the
//  listing, the sitemap entry and the schema follow automatically.
//
//  Every fact below is read off the actual product packaging in
//  /public/images or taken from existing blog copy. Nothing invented.
//  Fields marked NEEDS REVIEW / AMAZON URL REQUIRED need confirmation.
// ─────────────────────────────────────────────────────────────

export type CategorySlug = 'face-care' | 'sun-care' | 'skin-care' | 'hair-care';

export type ConcernSlug =
  | 'oil-acne'
  | 'tone-dark-spots'
  | 'sun-protection'
  | 'soothing-relief'
  | 'daily-moisture'
  | 'hair-care';

export interface ProductCategory {
  slug: CategorySlug;
  name: string;
  blurb: string;
}

export interface ProductConcern {
  slug: ConcernSlug;
  label: string;
}

export interface Product {
  /** Route segment: /products/<slug> */
  slug: string;
  name: string;
  /** Short label for cards, chips and analytics. */
  shortName: string;
  category: CategorySlug;
  /** One line. What it is and who it is for. */
  positioning: string;
  /** 2–3 sentences for the product page overview. */
  description: string;
  image: string;
  imageAlt: string;
  /** Net content exactly as printed on pack. */
  size?: string;
  /** Pack configuration, only where confirmed. */
  pack?: string;
  /** Marketed-by / manufactured-by line from the pack. */
  marketedBy?: string;
  /** Verbatim actives listed on the pack. Never invent. */
  ingredients: string[];
  /** Factual, non-medical feature statements. */
  highlights: string[];
  /** Only where existing copy supports it. Empty array hides the section. */
  usage: string[];
  /** Who the product suits. Empty array hides the section. */
  suitedFor: string[];
  concerns: ConcernSlug[];
  /** '' hides every Amazon CTA for this product. Never fabricate. */
  amazonUrl: string;
  /**
   * Other amzn.in links found in the blog set that appear to belong to
   * this product (probably single vs pack-of-2 listings). NOT rendered —
   * documentation only, so the audit trail is not lost.
   */
  /** Blog slugs genuinely about this product. Drives two-way linking. */
  relatedBlogSlugs: string[];
  featured?: boolean;
  /** Set when something about this entry still needs human confirmation. */
  needsReview?: string;
}

export const categories: ProductCategory[] = [
  {
    slug: 'face-care',
    name: 'Face Care',
    blurb: 'Daily and targeted cleansers formulated for Indian skin and water.',
  },
  {
    slug: 'sun-care',
    name: 'Sun Care',
    blurb: 'Broad-spectrum daily protection that is wearable in Indian heat.',
  },
  {
    slug: 'skin-care',
    name: 'Skin Care',
    blurb:
      'Lotions, creams and gels for soothing, nourishment and daily comfort.',
  },
  {
    slug: 'hair-care',
    name: 'Hair Care',
    blurb: 'Scalp-first hair oil built around biotin and traditional botanicals.',
  },
];

export const concerns: ProductConcern[] = [
  { slug: 'oil-acne', label: 'Oily & acne-prone skin' },
  { slug: 'tone-dark-spots', label: 'Uneven tone & dark spots' },
  { slug: 'sun-protection', label: 'Sun protection' },
  { slug: 'soothing-relief', label: 'Soothing & relief' },
  { slug: 'daily-moisture', label: 'Daily moisturisation' },
  { slug: 'hair-care', label: 'Hair fall & frizz' },
];

export const products: Product[] = [
  // ── FACE CARE ──────────────────────────────────────────────
  {
    slug: 'fresholite-vitamin-c-face-wash',
    name: 'Fresh O Lite Vitamin C Face Wash',
    shortName: 'Fresh O Lite Vitamin C',
    category: 'face-care',
    positioning:
      'A daily Vitamin C cleanser with natural orange extracts, for oily and combination skin.',
    description:
      'Fresh O Lite combines Vitamin C with natural orange extracts to cleanse thoroughly without over-stripping the skin. It is formulated for daily use, morning and night, and suits oily and combination skin through Indian heat and humidity.',
    image: '/images/fresholite-vitamin-c-face-wash.png',
    imageAlt:
      'Fresh O Lite Vitamin C Face Wash with orange extracts, 100 ml, pack of two tubes',
    size: '100 ml',
    pack: 'Pack of 2',
    marketedBy: 'Plethico Pharmaceuticals Pvt. Ltd.',
    ingredients: ['Vitamin C', 'Natural orange extracts'],
    highlights: [
      'Vitamin C with natural orange extracts',
      'Cleanses without over-drying',
      'Suitable for daily use, morning and night',
      'For oily and combination skin',
    ],
    usage: [
      'Apply a coin-sized amount to damp skin.',
      'Massage gently, then rinse thoroughly with water.',
      'Use twice daily, morning and night.',
    ],
    suitedFor: ['Oily skin', 'Combination skin', 'Dull, uneven-looking skin'],
    concerns: ['oil-acne', 'tone-dark-spots'],
    amazonUrl: 'https://amzn.in/d/05QOka5b',
    relatedBlogSlugs: [
      'best-face-wash-oily-skin-india-2026',
      'best-face-wash-daily-use-without-drying-skin-india',
      'best-face-wash-teenagers-acne-india',
      'chemical-vs-natural-face-wash-which-works-better',
      'face-wash-acne-vs-oily-skin-india',
      'best-face-wash-acne-prone-skin-india',
    ],
    featured: true,
  },
  {
    slug: 'kojicid-facewash',
    name: 'Kojicid Brightening Facewash',
    shortName: 'Kojicid Facewash',
    category: 'face-care',
    positioning:
      'A multi-action cleanser with kojic acid, L-glutathione, glycolic and salicylic acid.',
    description:
      'Kojicid Brightening Facewash combines four actives in one cleanser. Kojic acid dipalmitate and L-glutathione work on the look of dark spots and uneven tone, glycolic acid gently lifts dead surface cells, and salicylic acid — a BHA — helps clear pores and manage oil. It is an actives-led formula rather than a plain everyday cleanser.',
    image: '/images/kojicid-brightening-facewash.png',
    imageAlt: 'Kojicid Brightening Facewash, 70 ml tube, pack of 2',
    size: '70 ml',
    pack: 'Pack of 2',
    marketedBy: 'Tablets (India) Limited',
    ingredients: [
      'Kojic acid dipalmitate',
      'L-glutathione',
      'Glycolic acid',
      'Salicylic acid',
    ],
    highlights: [
      'Kojic acid dipalmitate with L-glutathione',
      'Glycolic acid to lift dead surface cells',
      'Salicylic acid (BHA) to help clear pores',
      'Suitable for all skin types',
    ],
    usage: [
      'Apply to damp skin and massage gently.',
      'Rinse thoroughly with water.',
      'Use daily for best results.',
    ],
    suitedFor: ['Dark spots and marks', 'Uneven skin tone', 'Congested, oily skin'],
    concerns: ['tone-dark-spots', 'oil-acne'],
    amazonUrl: 'https://amzn.in/d/0bmAFPGc',
    relatedBlogSlugs: ['best-face-wash-sensitive-skin-india'],
  },

  // ── SUN CARE ───────────────────────────────────────────────
  {
    slug: 'freshotil-sunguard-50',
    name: 'Freshotil Sunguard-50 Lotion',
    shortName: 'Freshotil Sunguard-50',
    category: 'sun-care',
    positioning:
      'SPF 50 sunscreen lotion with UVA & UVB protection — lightweight and non-greasy.',
    description:
      'Freshotil Sunguard 50 provides everyday protection against UVA and UVB rays during sun exposure. The lightweight lotion spreads comfortably over exposed skin without a heavy or sticky feel, which makes it practical for commuting, travelling, outdoor exercise or a full day outside.',
    image: '/images/freshotil-sunguard.png',
    imageAlt: 'Freshotil Sunguard-50 SPF 50 sun screen lotion, 100 mL tube',
    size: '100 mL',
    pack: undefined,
    marketedBy: 'Plethico Pharmaceuticals Pvt. Ltd.',
    ingredients: [],
    highlights: [
      'SPF 50',
      'UVA & UVB protection',
      'Lightweight, non-greasy formula',
      'For daily and outdoor use',
    ],
    usage: [
      'Apply before sun exposure, as part of your daily skincare routine.',
      'Apply generously and evenly to all exposed areas of skin.',
      'Reapply as directed — especially after swimming, sweating, towelling or prolonged outdoor activity.',
    ],
    suitedFor: ['Oily skin', 'Daily outdoor exposure', 'All skin types'],
    concerns: ['sun-protection', 'oil-acne'],
    amazonUrl: 'https://amzn.in/d/04MfDy1G',
    relatedBlogSlugs: [
      'best-sunscreen-oily-skin-india-spf-guide',
      'best-sunscreen-acne-prone-skin-india',
      'why-sunscreen-important-indoors-india',
    ],
    featured: true,
  },

  // ── SKIN CARE ──────────────────────────────────────────────
  {
    slug: 'calafine-calamine-lotion',
    name: 'Calafine Calamine Lotion',
    shortName: 'Calafine Lotion',
    category: 'skin-care',
    positioning:
      'Calamine lotion with zinc oxide, aloe vera and light liquid paraffin, for face and body.',
    description:
      'Calafine pairs classic calamine and zinc oxide with aloe vera and light liquid paraffin, so it soothes without the chalky dryness typical of older calamine formulations. It suits all skin types and can be used on both face and body.',
    image: '/images/calafine-lotion.png',
    imageAlt:
      'Calafine calamine lotion with zinc oxide, aloe vera and light liquid paraffin, 100 ml bottles with carton',
    size: '100 ml',
    pack: 'Pack of 2',
    marketedBy: 'Tablets (India) Limited',
    ingredients: ['Calamine', 'Zinc oxide', 'Aloe vera', 'Light liquid paraffin'],
    highlights: [
      'Calamine and zinc oxide with aloe vera',
      'Light liquid paraffin to reduce chalky dryness',
      'For face and body',
      'Suitable for all skin types',
    ],
    usage: [
      'Apply a thin, even layer to clean, dry skin.',
      'Use on affected areas of the face or body as needed.',
    ],
    suitedFor: ['Sun-exposed skin', 'Itchy or irritated skin', 'All skin types'],
    concerns: ['soothing-relief', 'daily-moisture'],
    amazonUrl: 'https://amzn.in/d/0foGtulz',
    relatedBlogSlugs: [
      'calamine-lotion-uses-benefits-calafine-complete-guide-2026',
      'calafine-lotion-sunburn-relief-acne-care-skin-nourishment',
      'calamine-lotion-uses-skin-complete-guide',
      'calamine-lotion-sunburn-relief-guide-india',
      'calamine-lotion-safe-daily-use-india',
      'calamine-lotion-vs-moisturizer-difference-india-guide',
      'best-lotion-skin-allergies-rashes-india-calafine',
    ],
    featured: true,
  },
  {
    slug: 'moist-sure-cream',
    name: 'Moist Sure Cream',
    shortName: 'Moist Sure Cream',
    category: 'skin-care',
    positioning:
      'A 60 g moisturising cream with aloe vera, Vitamin E and jojoba oil.',
    description:
      'Moist Sure Cream is a jar-format moisturiser built around aloe vera, Vitamin E and jojoba oil. It absorbs without a greasy finish, which makes it workable on combination skin as well as drier areas of the body.',
    image: '/images/moistsure-cream.png',
    imageAlt:
      'Moist Sure Cream jar and carton, moisturiser with aloe vera, Vitamin E and jojoba oil, 60 g',
    size: '60 g',
    pack: undefined,
    marketedBy: 'Tablets (India) Limited',
    ingredients: ['Aloe vera', 'Vitamin E', 'Jojoba oil'],
    highlights: [
      'Aloe vera, Vitamin E and jojoba oil',
      'Non-greasy finish',
      'For face and body',
    ],
    usage: [],
    suitedFor: ['Combination skin', 'Dry skin', 'Sensitive skin'],
    concerns: ['daily-moisture'],
    amazonUrl: 'https://amzn.in/d/0btC4bWY',
    relatedBlogSlugs: [
      'best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba',
      'calamine-lotion-vs-moisturizer-difference-india-guide',
    ],
  },
  {
    slug: 'moist-sure-lotion',
    name: 'Moist Sure Lotion',
    shortName: 'Moist Sure Lotion',
    category: 'skin-care',
    positioning:
      'A body lotion with aloe vera, glycerine, Vitamin E and jojoba oil for deep nourishment.',
    description:
      'Moist Sure Lotion combines aloe vera for soothing hydration with glycerine and Vitamin E to help protect against dryness and environmental stress. Jojoba oil, a natural emollient, helps lock in moisture. The lighter lotion texture spreads easily across larger areas of the body.',
    image: '/images/moist-sure-lotion.png',
    imageAlt:
      'Moist Sure Lotion bottle, moisturiser with aloe vera, glycerine, Vitamin E and jojoba oil, 100 mL',
    size: '100 mL',
    pack: 'Pack of 2',
    marketedBy: 'Tablets (India) Limited',
    ingredients: ['Aloe vera', 'Glycerine', 'Vitamin E', 'Jojoba oil'],
    highlights: [
      'Aloe vera for soothing hydration',
      'Glycerine and Vitamin E to help guard against dryness',
      'Jojoba oil to help lock in moisture',
      'Lighter lotion texture for body use',
    ],
    usage: [
      'Apply to clean, dry skin.',
      'Massage gently until absorbed.',
      'Use daily, or as often as needed.',
    ],
    suitedFor: ['Dry skin', 'Body moisturisation', 'Everyday use'],
    concerns: ['daily-moisture'],
    amazonUrl: 'https://amzn.in/d/02RlwKAg',
    relatedBlogSlugs: [],
  },
  {
    slug: 'kojicid-gel',
    name: 'Kojicid Gel',
    shortName: 'Kojicid Gel',
    category: 'skin-care',
    positioning:
      'A brightening gel with kojic acid, Vitamin E and pine bark extract, for dark spots and uneven tone.',
    description:
      'Kojicid Gel is a lightweight gel formulated to help reduce the appearance of dark spots, acne marks, sun tan and uneven skin tone. Kojic acid supports skin clarity, Vitamin E nourishes and supports the skin barrier, and pine bark extract supports skin texture. The non-greasy, fast-absorbing texture suits day and night use without clogging pores or leaving residue.',
    image: '/images/kojicid-gel.png',
    imageAlt: 'Kojicid Gel brightening gel, 15 g tube, pack of 2',
    size: '15 g',
    pack: 'Pack of 2',
    marketedBy: 'Tablets (India) Limited',
    ingredients: [
      'Kojic acid dipalmitate',
      'Vitamin E acetate',
      'Pine bark extract',
      'Arbutin',
      'Allantoin',
      'Niacinamide',
      'Octinoxate',
    ],
    highlights: [
      'Kojic acid with Vitamin E and pine bark extract',
      'Helps reduce the appearance of dark spots and uneven tone',
      'Non-greasy, fast-absorbing texture',
      'Suitable for day and night use',
    ],
    usage: [
      'Apply a small amount to clean, dry skin.',
      'Spread evenly over the affected area until absorbed.',
      'Use twice daily, morning and night.',
    ],
    suitedFor: ['Dark spots and acne marks', 'Sun tan', 'Uneven skin tone'],
    concerns: ['tone-dark-spots'],
    amazonUrl: 'https://amzn.in/d/0gFB5XaA',
    relatedBlogSlugs: [],
  },

  // ── HAIR CARE ──────────────────────────────────────────────
  {
    slug: 'hairoshine-advance-hair-oil',
    name: 'HairOShine Advance Hair Oil',
    shortName: 'HairOShine Advance',
    category: 'hair-care',
    positioning:
      'Biotin hair oil with basil, brahmi, bhringraj, hibiscus and D-panthenol.',
    description:
      'HairOShine Advance is a scalp-first hair oil that delivers biotin alongside traditional botanicals — basil, brahmi, bhringraj and hibiscus — in a base light enough for everyday use on fine or thick hair.',
    image: '/images/hairoshine-biotin-oil.png',
    imageAlt: 'HairOShine Advance Hair Oil with biotin, 100 ml bottle',
    size: '100 ml',
    pack: 'Pack of 2',
    marketedBy: 'Volant',
    ingredients: [
      'Biotin',
      'Basil',
      'Brahmi',
      'Bhringraj',
      'Hibiscus',
      'D-panthenol',
    ],
    highlights: [
      'Biotin with D-panthenol',
      'Basil, brahmi, bhringraj and hibiscus',
      'Non-greasy base',
      'For all hair types',
    ],
    usage: [
      'Apply in small drops directly onto the scalp.',
      'Massage gently to distribute across the scalp.',
    ],
    suitedFor: ['Dry hair', 'Frizzy hair', 'Fine and thick hair alike'],
    concerns: ['hair-care'],
    amazonUrl: 'https://amzn.in/d/04hhFpUS',
    relatedBlogSlugs: [
      'best-hair-oil-hair-growth-india-biotin',
      'best-hair-oil-dry-frizzy-hair-india',
      'how-to-choose-hair-oil-for-your-hair-type-india',
    ],
    featured: true,
  }
];

// ── Selectors ────────────────────────────────────────────────

/** Products complete enough to list and to generate a route for. */
export const listableProducts = products.filter((p) => p.image !== '');

export const featuredProducts = listableProducts.filter((p) => p.featured);

export function getProductsByCategory(category: CategorySlug): Product[] {
  return listableProducts.filter((p) => p.category === category);
}

export function getProductsByConcern(concern: ConcernSlug): Product[] {
  return listableProducts.filter((p) => p.concerns.includes(concern));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Listable products only — used by the dynamic route. */
export function getListableProductBySlug(slug: string): Product | undefined {
  return listableProducts.find((p) => p.slug === slug);
}

/**
 * Same-category products first, then products sharing a concern.
 * Returns [] rather than padding with unrelated items.
 */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = listableProducts.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  );
  const sharedConcern = listableProducts.filter(
    (p) =>
      p.slug !== product.slug &&
      p.category !== product.category &&
      p.concerns.some((c) => product.concerns.includes(c))
  );
  return [...sameCategory, ...sharedConcern].slice(0, limit);
}

/** Categories that currently have at least one listable product. */
export const activeCategories = categories.filter(
  (c) => getProductsByCategory(c.slug).length > 0
);

/** Canonical product page path. */
export function productHref(slug: string): string {
  return `/products/${slug}`;
}