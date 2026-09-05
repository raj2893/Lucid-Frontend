// ─────────────────────────────────────────────────────────────
//  BLOG REGISTRY
//
//  A lightweight slug → title/blurb map so product pages can link back
//  to the articles that cover them, without importing the blog index's
//  large `posts` array or duplicating copy inside product components.
//
//  Titles here are shortened for use as inline link text. The canonical
//  SEO <title> of each article lives in that article's own metadata and
//  is not affected by anything in this file.
//
//  All 21 article routes under src/app/blog/ are represented.
// ─────────────────────────────────────────────────────────────

export interface BlogEntry {
  slug: string;
  /** Short link title. Not the article's SEO title. */
  title: string;
  /** One line describing what the reader gets. */
  blurb: string;
}

export const blogs: BlogEntry[] = [
  // ── Face wash ────────────────────────────────────────────
  {
    slug: 'best-face-wash-oily-skin-india-2026',
    title: 'Best face wash for oily skin in India',
    blurb: 'What oily skin actually needs from a cleanser, and what to avoid.',
  },
  {
    slug: 'best-face-wash-daily-use-without-drying-skin-india',
    title: 'A daily face wash that does not dry out your skin',
    blurb: 'Why most cleansers strip the barrier twice a day, and how to stop it.',
  },
  {
    slug: 'best-face-wash-teenagers-acne-india',
    title: 'Face wash for teenagers with acne',
    blurb: 'Hormonal acne, oily skin and blackheads through the teenage years.',
  },
  {
    slug: 'best-face-wash-acne-prone-skin-india',
    title: 'Best face wash for acne-prone skin',
    blurb: 'Salicylic acid, neem and vitamin C for recurring breakouts.',
  },
  {
    slug: 'best-face-wash-sensitive-skin-india',
    title: 'Best face wash for sensitive skin',
    blurb: 'pH, surfactants and water hardness for reactive Indian skin.',
  },
  {
    slug: 'face-wash-acne-vs-oily-skin-india',
    title: 'Face wash for acne vs oily skin',
    blurb: 'The two are not the same problem, and need different cleansers.',
  },
  {
    slug: 'chemical-vs-natural-face-wash-which-works-better',
    title: 'Chemical vs natural face wash',
    blurb: 'What the labels mean and what your cleanser is actually doing.',
  },

  // ── Sun care ─────────────────────────────────────────────
  {
    slug: 'best-sunscreen-oily-skin-india-spf-guide',
    title: 'Best sunscreen for oily skin — SPF guide',
    blurb: 'SPF, broad spectrum and water resistance in Indian conditions.',
  },
  {
    slug: 'best-sunscreen-acne-prone-skin-india',
    title: 'Best sunscreen for acne-prone skin',
    blurb: 'Protecting acne-prone skin without clogging pores.',
  },
  {
    slug: 'why-sunscreen-important-indoors-india',
    title: 'Why sunscreen matters even indoors',
    blurb: 'UV through glass, and what indoor exposure really adds up to.',
  },

  // ── Calamine / Calafine ──────────────────────────────────
  {
    slug: 'calamine-lotion-uses-benefits-calafine-complete-guide-2026',
    title: 'Calamine lotion uses and benefits — complete guide',
    blurb: 'Everything calamine does, and where it is the wrong answer.',
  },
  {
    slug: 'calafine-lotion-sunburn-relief-acne-care-skin-nourishment',
    title: 'Calafine for sunburn, dryness and acne care',
    blurb: 'One lotion across three of the most common skin complaints.',
  },
  {
    slug: 'calamine-lotion-uses-skin-complete-guide',
    title: 'Calamine lotion uses for skin',
    blurb: 'A practical guide to using calamine on face and body.',
  },
  {
    slug: 'calamine-lotion-sunburn-relief-guide-india',
    title: 'How to use calamine lotion for sunburn relief',
    blurb: 'Application, quantity and how long relief actually takes.',
  },
  {
    slug: 'calamine-lotion-safe-daily-use-india',
    title: 'Is calamine lotion safe for daily use?',
    blurb: 'Where daily calamine makes sense and where it does not.',
  },
  {
    slug: 'calamine-lotion-vs-moisturizer-difference-india-guide',
    title: 'Calamine lotion vs moisturiser',
    blurb: 'Two different jobs, and why substituting one causes problems.',
  },
  {
    slug: 'best-lotion-skin-allergies-rashes-india-calafine',
    title: 'Best lotion for skin allergies and rashes',
    blurb: 'Choosing a soothing lotion for irritated, reactive skin.',
  },

  // ── Moisturiser ──────────────────────────────────────────
  {
    slug: 'best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba',
    title: 'Best moisturiser for combination skin',
    blurb: 'Oily T-zone with dry cheeks, and how to treat both at once.',
  },

  // ── Hair care ────────────────────────────────────────────
  {
    slug: 'best-hair-oil-hair-growth-india-biotin',
    title: 'Best hair oil for hair growth — biotin guide',
    blurb: 'Scalp health, biotin and an honest results timeline.',
  },
  {
    slug: 'best-hair-oil-dry-frizzy-hair-india',
    title: 'Best hair oil for dry and frizzy hair',
    blurb: 'Cuticle damage, moisture loss and frizz control.',
  },
  {
    slug: 'how-to-choose-hair-oil-for-your-hair-type-india',
    title: 'How to choose a hair oil for your hair type',
    blurb: 'Matching oil to scalp type instead of buying by label claims.',
  },
];

const bySlug = new Map(blogs.map((b) => [b.slug, b]));

export function getBlog(slug: string): BlogEntry | undefined {
  return bySlug.get(slug);
}

/** Resolves a list of slugs, silently dropping any that do not exist. */
export function getBlogs(slugs: string[]): BlogEntry[] {
  return slugs
    .map((s) => bySlug.get(s))
    .filter((b): b is BlogEntry => b !== undefined);
}

export function blogHref(slug: string): string {
  return `/blog/${slug}`;
}