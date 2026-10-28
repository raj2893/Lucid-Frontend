import type { ImageLoaderProps } from 'next/image';

export const CDN_ORIGIN = 'https://cdn.lucidllp.com';

// Two sizes only → max 2 of the 5,000 free monthly transformations per photo.
const WIDTHS = [480, 960] as const;

function snap(width: number): number {
  return WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
}

export function cdnImageUrl(
  path: string,
  width: number = WIDTHS[WIDTHS.length - 1],
  format: 'auto' | 'jpeg' = 'auto'
): string {
  return `${CDN_ORIGIN}/cdn-cgi/image/width=${snap(width)},quality=80,format=${format},onerror=redirect${path}`;
}

export function cdnImageLoader({ src, width }: ImageLoaderProps): string {
  return cdnImageUrl(src, width);
}