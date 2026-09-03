// ─────────────────────────────────────────────────────────────
//  LUCID PHARMATECH — CENTRAL CONSUMER PRODUCT DATA
//
//  Single source of truth for consumer products.
//  Homepage and /products both read from here.
//  To add a product: append to `products`. To feature it: featured: true.
//
//  Every fact below is taken from existing blog copy in src/app/blog/**
//  or from packaging visible in /public/images. Nothing is invented.
//  Fields marked NEEDS USER VALUE must be confirmed before go-live.
// ─────────────────────────────────────────────────────────────

export type CategorySlug = 'face-care' | 'sun-care' | 'skin-care' | 'hair-care';

export type ConcernSlug =
  | 'oil-acne'
  | 'sensitive-skin'
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

export interface RelatedArticle {
  title: string;
  href: string;
}

export interface Product {
  /** Stable key. Also the future /products/[slug] route segment. */
  slug: string;
  name: string;
  /** Short label for tight UI (chips, analytics). */
  shortName: string;
  category: CategorySlug;
  /** One line. What it is and who it is for. */
  positioning: string;
  /** Two or three sentences for a future product page. */
  description: string;
  image: string;
  imageAlt: string;
  size?: string;
  pack?: string;
  /** Factual, non-medical. 3–4 items max. */
  highlights: string[];
  concerns: ConcernSlug[];
  /** '' means no confirmed listing — the UI hides the Amazon CTA. */
  amazonUrl: string;
  relatedArticles: RelatedArticle[];
  featured?: boolean;
}

export const categories: ProductCategory[] = [
  {
    slug: 'face-care',
    name: 'Face Care',
    blurb: 'Daily cleansers formulated for Indian skin, climate and water.',
  },
  {
    slug: 'sun-care',
    name: 'Sun Care',
    blurb: 'Broad-spectrum daily protection that is wearable in Indian heat.',
  },
  {
    slug: 'skin-care',
    name: 'Skin Care',
    blurb: 'Lotions and creams for soothing, nourishment and everyday comfort.',
  },
  {
    slug: 'hair-care',
    name: 'Hair Care',
    blurb: 'Scalp-first hair oil built around biotin and traditional botanicals.',
  },
];

export const concerns: ProductConcern[] = [
  { slug: 'oil-acne', label: 'Oily & acne-prone skin' },
  { slug: 'sensitive-skin', label: 'Sensitive skin' },
  { slug: 'sun-protection', label: 'Sun protection' },
  { slug: 'soothing-relief', label: 'Soothing & relief' },
  { slug: 'daily-moisture', label: 'Daily moisturisation' },
  { slug: 'hair-care', label: 'Hair fall & frizz' },
];

export const products: Product[] = [
  {
    slug: 'fresholite-vitamin-c-face-wash',
    name: 'Fresh O Lite Vitamin C Face Wash',
    shortName: 'Fresh O Lite Vitamin C',
    category: 'face-care',
    positioning:
      'A daily Vitamin C cleanser with natural orange extracts, for oily and combination skin.',
    description:
      'Fresh O Lite combines Vitamin C with natural orange extracts to cleanse thoroughly without over-stripping the skin. Formulated for daily use, morning and night, on oily and combination skin.',
    image: '/images/fresholite-facewash.png',
    imageAlt:
      'Fresh O Lite Vitamin C Face Wash with orange extracts, 100 ml, pack of 2',
    size: '100 ml',
    pack: 'Pack of 2',
    highlights: [
      'Vitamin C with natural orange extracts',
      'Cleanses without over-drying',
      'Suitable for daily use, morning and night',
    ],
    concerns: ['oil-acne'],
    // Used by 3 of the 5 Fresh O Lite posts. Two other short links exist
    // in the other posts — see NOTES, needs reconciling.
    amazonUrl: 'https://amzn.in/d/05QOka5b',
    relatedArticles: [
      {
        title: 'Best Face Wash for Oily Skin in India (2026 Guide)',
        href: '/blog/best-face-wash-oily-skin-india-2026',
      },
      {
        title: 'Best Face Wash for Daily Use Without Drying Skin',
        href: '/blog/best-face-wash-daily-use-without-drying-skin-india',
      },
      {
        title: 'Best Face Wash for Teenagers with Acne in India',
        href: '/blog/best-face-wash-teenagers-acne-india',
      },
    ],
    featured: true,
  },
  {
    slug: 'freshotil-sunguard-50',
    name: 'Freshotil Sunguard-50 Lotion',
    shortName: 'Freshotil Sunguard-50',
    category: 'sun-care',
    positioning:
      'SPF 50 broad-spectrum sun screen lotion — water resistant and non-greasy.',
    description:
      'A daily sun screen lotion offering SPF 50 broad-spectrum UVA and UVB protection. The lightweight base is water resistant and non-greasy, which makes it wearable on oily skin through Indian heat and humidity.',
    image: '/images/freshotil-sunguard.png',
    imageAlt: 'Freshotil Sunguard-50 SPF 50 sun screen lotion, 100 ml',
    size: '100 ml',
    pack: undefined, // NEEDS USER VALUE — pack size not stated in existing copy
    highlights: [
      'SPF 50, UVA and UVB protection',
      'Water resistant and non-greasy',
      'Suitable for all skin types',
    ],
    concerns: ['sun-protection', 'oil-acne'],
    // NOTE: three different short links across the three sunscreen posts.
    // This is the one used by the main SPF guide. See NOTES.
    amazonUrl: 'https://amzn.in/d/04MfDy1G',
    relatedArticles: [
      {
        title: 'Best Sunscreen for Oily Skin in India — SPF Guide',
        href: '/blog/best-sunscreen-oily-skin-india-spf-guide',
      },
      {
        title: 'Best Sunscreen for Acne-Prone Skin in India',
        href: '/blog/best-sunscreen-acne-prone-skin-india',
      },
      {
        title: 'Why Sunscreen Matters Even Indoors',
        href: '/blog/why-sunscreen-important-indoors-india',
      },
    ],
    featured: true,
  },
  {
    slug: 'calafine-calamine-lotion',
    name: 'Calafine Calamine Lotion',
    shortName: 'Calafine Lotion',
    category: 'skin-care',
    positioning:
      'Calamine lotion with zinc oxide, aloe vera and light liquid paraffin, for face and body.',
    description:
      'Calafine pairs classic calamine and zinc oxide with aloe vera and light liquid paraffin, so it soothes without the chalky dryness typical of older calamine formulations. Suitable for all skin types, on face and body.',
    image: '/images/calafine-lotion.png',
    imageAlt:
      'Calafine calamine lotion with zinc oxide, aloe vera and light liquid paraffin, 100 ml',
    size: '100 ml',
    pack: 'Pack of 2',
    highlights: [
      'Calamine and zinc oxide with aloe vera',
      'Light liquid paraffin to reduce dryness',
      'For face and body, all skin types',
    ],
    concerns: ['soothing-relief', 'daily-moisture'],
    // Used by 5 of the 7 calamine posts. See NOTES.
    amazonUrl: 'https://amzn.in/d/0foGtulz',
    relatedArticles: [
      {
        title: 'Calamine Lotion Uses & Benefits — Complete Guide',
        href: '/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026',
      },
      {
        title: 'Calamine Lotion for Sunburn Relief',
        href: '/blog/calamine-lotion-sunburn-relief-guide-india',
      },
      {
        title: 'Best Lotion for Skin Allergies & Rashes',
        href: '/blog/best-lotion-skin-allergies-rashes-india-calafine',
      },
    ],
    featured: true,
  },
  {
    slug: 'hairoshine-advance-hair-oil',
    name: 'HairOShine Advance Hair Oil',
    shortName: 'HairOShine Advance',
    category: 'hair-care',
    positioning:
      'Biotin hair oil with basil, brahmi, bhringraj, hibiscus and D-panthenol.',
    description:
      'A scalp-first hair oil that delivers biotin alongside traditional botanicals — basil, brahmi, bhringraj and hibiscus — in a base light enough for everyday use on fine or thick hair.',
    image: '/images/hairoshine-biotin-oil.png',
    imageAlt: 'HairOShine Advance Hair Oil with biotin, 100 ml',
    size: '100 ml',
    pack: 'Pack of 2',
    highlights: [
      'With biotin and D-panthenol',
      'Basil, brahmi, bhringraj and hibiscus',
      'Non-greasy, for all hair types',
    ],
    concerns: ['hair-care'],
    // NOTE: three different short links across the three hair posts. See NOTES.
    amazonUrl: 'https://amzn.in/d/04hhFpUS',
    relatedArticles: [
      {
        title: 'Best Hair Oil for Hair Growth in India — Biotin Guide',
        href: '/blog/best-hair-oil-hair-growth-india-biotin',
      },
      {
        title: 'Best Hair Oil for Dry and Frizzy Hair',
        href: '/blog/best-hair-oil-dry-frizzy-hair-india',
      },
      {
        title: 'How to Choose the Right Hair Oil for Your Hair Type',
        href: '/blog/how-to-choose-hair-oil-for-your-hair-type-india',
      },
    ],
    featured: true,
  },
  {
    slug: 'moist-sure-cream',
    name: 'Moist Sure Cream',
    shortName: 'Moist Sure',
    category: 'skin-care',
    positioning:
      'Aloe vera, Vitamin-E and jojoba oil moisturiser for face and body.',
    description:
      'A balanced moisturiser built around aloe vera, Vitamin-E and jojoba oil. Absorbs without a greasy finish, which makes it workable on combination skin as well as dry areas of the body.',
    image: '/images/moistsure-cream.png',
    imageAlt:
      'Moist Sure Cream with aloe vera, Vitamin-E and jojoba oil, pack of 2',
    size: undefined, // NEEDS USER VALUE — volume not stated in existing copy
    pack: 'Pack of 2',
    highlights: [
      'Aloe vera, Vitamin-E and jojoba oil',
      'Non-greasy finish',
      'For face and body',
    ],
    concerns: ['daily-moisture', 'sensitive-skin'],
    amazonUrl: 'https://amzn.in/d/0btC4bWY',
    relatedArticles: [
      {
        title: 'Best Moisturizer for Combination Skin',
        href: '/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba',
      },
      {
        title: 'Calamine Lotion vs Moisturizer — What Is the Difference?',
        href: '/blog/calamine-lotion-vs-moisturizer-difference-india-guide',
      },
    ],
  },
  {
    slug: 'fresho-sensitive-face-wash',
    // NEEDS USER VALUE — exact on-pack product name to confirm.
    // Derived from the image filename and the sensitive-skin blog post.
    name: 'Fresho Sensitive Face Wash',
    shortName: 'Fresho Sensitive',
    category: 'face-care',
    positioning: 'A pH-balanced, sulphate-free cleanser for sensitive skin.',
    description:
      'A gentle daily cleanser for skin that reacts easily. pH-balanced and sulphate-free, so it cleanses without disrupting the skin barrier.',
    image: '/images/fresho-sensitive-face-wash.png',
    imageAlt: 'Fresho Sensitive pH-balanced sulphate-free face wash',
    size: undefined, // NEEDS USER VALUE
    pack: undefined, // NEEDS USER VALUE
    highlights: ['pH-balanced', 'Sulphate-free', 'For sensitive, reactive skin'],
    concerns: ['sensitive-skin'],
    amazonUrl: 'https://amzn.in/d/0bmAFPGc',
    relatedArticles: [
      {
        title: 'Best Face Wash for Sensitive Skin in India',
        href: '/blog/best-face-wash-sensitive-skin-india',
      },
      {
        title: 'Face Wash for Acne vs Oily Skin — What Is Better?',
        href: '/blog/face-wash-acne-vs-oily-skin-india',
      },
    ],
  },
  {
    // Visible in /images/consumer-products-hero.png and
    // /images/featured-products-background.png. No blog post covers it,
    // so there is no Amazon link on file. Excluded from rendering by
    // listableProducts until an image and URL are supplied.
    slug: 'kojicid-facewash',
    name: 'Kojicid Facewash',
    shortName: 'Kojicid Facewash',
    category: 'face-care',
    positioning:
      'A targeted facewash with glutathione, kojic acid dipalmitate, glycolic and salicylic acid.',
    description:
      'A targeted cleanser formulated with glutathione, kojic acid dipalmitate, glycolic acid and salicylic acid.',
    image: '', // NEEDS USER VALUE — no standalone product image in /public/images
    imageAlt: 'Kojicid Facewash, 70 ml',
    size: '70 ml',
    pack: undefined,
    highlights: [
      'Glutathione and kojic acid dipalmitate',
      'With glycolic and salicylic acid',
    ],
    concerns: ['oil-acne'],
    amazonUrl: '', // NEEDS USER VALUE
    relatedArticles: [],
  },
  {
    slug: 'kojicid-gel',
    name: 'Kojicid Gel',
    shortName: 'Kojicid Gel',
    category: 'skin-care',
    positioning:
      'A gel with kojic acid dipalmitate, arbutin, niacinamide and Vitamin E acetate.',
    description:
      'A gel formulated with kojic acid dipalmitate, pine bark extract, arbutin, allantoin, Vitamin E acetate, niacinamide and octinoxate.',
    image: '', // NEEDS USER VALUE — no standalone product image in /public/images
    imageAlt: 'Kojicid Gel, 15 g',
    size: '15 g',
    pack: undefined,
    highlights: [
      'Kojic acid dipalmitate with arbutin',
      'Niacinamide and Vitamin E acetate',
    ],
    concerns: [],
    amazonUrl: '', // NEEDS USER VALUE
    relatedArticles: [],
  },
];

// ── Selectors ────────────────────────────────────────────────
// Pages use these rather than filtering inline, so adding a product
// never means editing a page component.

export const featuredProducts = products.filter((p) => p.featured);

/** Products complete enough to show publicly. */
export const listableProducts = products.filter((p) => p.image !== '');

export function getProductsByCategory(category: CategorySlug): Product[] {
  return listableProducts.filter((p) => p.category === category);
}

export function getProductsByConcern(concern: ConcernSlug): Product[] {
  return listableProducts.filter((p) => p.concerns.includes(concern));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Categories that currently have at least one listable product. */
export const activeCategories = categories.filter(
  (c) => getProductsByCategory(c.slug).length > 0
);