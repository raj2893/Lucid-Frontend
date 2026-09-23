// One route for every catalogue product: /product-catalogue/<slug>.
// Fully static, no runtime data fetching. Adding an entry to
// src/data/catalogue-products.ts creates its page automatically.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { catalogueRouteProducts, getCatalogueProduct } from '@/data/catalogue';
import CatalogueProductView, { catalogueMetadata } from './CatalogueProductView';

export function generateStaticParams() {
  return catalogueRouteProducts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

type Params = { slug: string };

// Next 15 passes `params` as a Promise; Next 14 passes a plain object.
// Awaiting a non-thenable returns it unchanged, so this works on both.
type ParamsArg = { params: Promise<Params> | Params };

export async function generateMetadata({ params }: ParamsArg): Promise<Metadata> {
  const { slug } = await params;
  const product = getCatalogueProduct(slug);
  return product ? catalogueMetadata(product) : {};
}

export default async function CatalogueProductPage({ params }: ParamsArg) {
  const { slug } = await params;
  const product = getCatalogueProduct(slug);
  if (!product) notFound();

  return <CatalogueProductView product={product} />;
}