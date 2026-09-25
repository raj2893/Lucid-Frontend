// ─────────────────────────────────────────────────────────────
//  LUCID PHARMATECH — PRODUCT CATALOGUE (types + selectors)
//
//  Entries live in ./catalogue-products.ts. This file defines their
//  shape, the formulation groups, and every selector the listing, the
//  detail route and the sitemap use — so a new entry needs no new page,
//  component or route.
//
//  The consumer range (Amazon, photography, blog links) stays in
//  ./products.ts. Catalogue rows that ARE a consumer product carry
//  `consumerSlug` and link to that existing page instead of getting a
//  duplicate one.
// ─────────────────────────────────────────────────────────────

import { products, productHref } from './products';
import { catalogueProducts } from './catalogue-products';

export type FormSlug =
  | 'tablets'
  | 'capsules'
  | 'liquids-dry-syrups'
  | 'injections'
  | 'ointments-lotions'
  | 'drops'
  | 'soaps'
  | 'others';

export interface CatalogueForm {
  slug: FormSlug;
  /** Section name as used in the Product Book. */
  name: string;
}

export interface CataloguePack {
  /** Pack size exactly as printed. null = not printed in the catalogue. */
  size: string | null;
  /** MRP in ₹ as printed. null = not printed. Rendered only if showMrp. */
  mrp: number | null;
  /** What the MRP is per: Strip, Bottle, Vial … null = not printed. */
  mrpUnit: string | null;
}

export interface CatalogueProduct {
  /** Route segment: /products/<slug>. Must be unique across the site. */
  slug: string;
  /** Brand name as printed in the Product Book. */
  name: string;
  form: FormSlug;
  /** Product-type line where the catalogue prints one (e.g. "Ear Drops"). */
  description?: string;
  /** e.g. "Each film coated tablet contains". Omit if not printed. */
  compositionBasis?: string;
  /** One line per ingredient, as printed. [] when not printed. */
  composition: string[];
  /** One entry per printed pack size. */
  packs: CataloguePack[];
  /** Indications printed in the catalogue. Rendered only if showIndications. */
  indications?: string[];
  /** Other printed notes, e.g. "Also available in alu-alu packing." */
  notes?: string[];
  /** Brand family key. Drives "From the same range" links. */
  family: string;
  /** Links this row to an existing consumer page in ./products.ts. */
  consumerSlug?: string;
  availability?: 'coming-soon';
  /**
   * Shows the product in the "In Focus" section at the top of the
   * catalogue. Set `highlighted: true` on any published entry; order
   * there follows the order of entries in catalogue-products.ts.
   */
  highlighted?: boolean;
  /** 'draft' = kept in data, never listed, routed or indexed. */
  status: 'published' | 'draft';
  /**
   * Product photograph under /public/images, e.g. '/images/azibit-250.png'.
   * Leave null until a real pack photo exists — never a placeholder.
   */
  image: string | null;
  /** Required once `image` is set. Describe the actual photo. */
  imageAlt?: string;
  /** Page number in the Product Book, for verification. Not rendered. */
  cataloguePage?: number;
  /** Open issue from the Excel's Check Status. Internal only, not rendered. */
  reviewNote?: string;
}

/**
 * Site-wide display switches. Both default to off:
 *  - MRPs change over time and several are flagged "Verify" in the Excel.
 *  - Publicly listing indications for prescription medicines needs
 *    regulatory sign-off (Drugs & Magic Remedies Act / Schedule H).
 * The data is already in place; turn a switch on once cleared.
 */
export const CATALOGUE_DISPLAY = {
  showMrp: false,
  showIndications: false,
} as const;

/** Order and names follow the Product Book sections. */
export const catalogueForms: CatalogueForm[] = [
  { slug: 'tablets', name: 'Tablets' },
  { slug: 'capsules', name: 'Capsules' },
  { slug: 'liquids-dry-syrups', name: 'Liquids & Dry Syrups' },
  { slug: 'injections', name: 'Injections' },
  { slug: 'ointments-lotions', name: 'Ointments & Lotions' },
  { slug: 'drops', name: 'Drops' },
  { slug: 'soaps', name: 'Soaps' },
  { slug: 'others', name: 'Others' },
];

// ── Selectors ────────────────────────────────────────────────

/** Everything visible in the catalogue listing. */
export const publishedCatalogue = catalogueProducts.filter(
  (p) => p.status === 'published'
);

/** Published entries that get their own /products/<slug> page. */
export const catalogueRouteProducts = publishedCatalogue.filter(
  (p) => !p.consumerSlug
);

/** Flagged products, for the "In Focus" section. Drafts never appear. */
export const highlightedCatalogue = publishedCatalogue.filter((p) => p.highlighted);

export function getCatalogueProduct(slug: string): CatalogueProduct | undefined {
  return catalogueRouteProducts.find((p) => p.slug === slug);
}

export function getCatalogueForm(slug: FormSlug): CatalogueForm | undefined {
  return catalogueForms.find((f) => f.slug === slug);
}

/** Forms that have at least one published product, with counts. */
export const activeCatalogueForms = catalogueForms
  .map((f) => ({
    ...f,
    count: publishedCatalogue.filter((p) => p.form === f.slug).length,
  }))
  .filter((f) => f.count > 0);

/** The catalogue lives on its own route, separate from /products. */
export const CATALOGUE_PATH = '/product-catalogue';

/** Canonical catalogue product path. */
export function catalogueProductHref(slug: string): string {
  return `${CATALOGUE_PATH}/${slug}`;
}

/** Consumer-linked rows point at the existing consumer page instead. */
export function catalogueHref(p: CatalogueProduct): string {
  return p.consumerSlug
    ? productHref(p.consumerSlug)
    : catalogueProductHref(p.slug);
}

/** Other published products of the same brand family. */
export function getCatalogueFamily(
  product: CatalogueProduct,
  limit = 6
): CatalogueProduct[] {
  return publishedCatalogue
    .filter((p) => p.family === product.family && p.slug !== product.slug)
    .slice(0, limit);
}

/** Short one-line summary for cards, metadata and schema. */
export function catalogueSummary(p: CatalogueProduct): string {
  if (p.composition.length > 0) return p.composition.join(' + ');
  return p.description ?? '';
}

/**
 * Everything a visitor might type: brand name, every ingredient line,
 * the product-type line and the pack sizes. Built once at build time so
 * the browser only has to run `includes` over it.
 */
export function catalogueSearchIndex(p: CatalogueProduct): string {
  return [
    p.name,
    p.description ?? '',
    ...p.composition,
    ...p.packs.map((pack) => pack.size ?? ''),
  ].join(' ');
}

/** Distinct printed pack sizes, e.g. "60 ml · 100 ml". */
export function cataloguePackLabel(p: CatalogueProduct): string {
  return p.packs
    .map((pack) => pack.size)
    .filter((s): s is string => Boolean(s))
    .join(' · ');
}

// ── Build-time integrity checks ──────────────────────────────
// Fail the build rather than ship two products on one URL.
(() => {
  const consumerSlugs = new Set(products.map((p) => p.slug));
  const seen = new Set<string>();
  for (const p of catalogueProducts) {
    if (p.consumerSlug) {
      if (!consumerSlugs.has(p.consumerSlug)) {
        throw new Error(`catalogue: unknown consumerSlug "${p.consumerSlug}" on ${p.name}`);
      }
      continue;
    }
    if (seen.has(p.slug)) {
      throw new Error(`catalogue: duplicate slug "${p.slug}"`);
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) {
      throw new Error(`catalogue: invalid slug "${p.slug}"`);
    }
    if (p.image && !p.imageAlt) {
      throw new Error(`catalogue: ${p.name} has an image but no imageAlt`);
    }
    seen.add(p.slug);
  }
})();