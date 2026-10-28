'use client';

import Image, { type ImageProps } from 'next/image';
import { cdnImageLoader } from '@/lib/cdn-image';

type ProductPhotoProps = Omit<ImageProps, 'loader'> & { cdn: boolean };

export default function ProductPhoto({ cdn, ...props }: ProductPhotoProps) {
  return <Image {...props} loader={cdn ? cdnImageLoader : undefined} />;
}