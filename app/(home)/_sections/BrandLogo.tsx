import React from 'react';
import Image from 'next/image';

const brands = [
  { id: 1, src: '/images/brand/brand1.png', alt: 'Brand Logo 1' },
  { id: 2, src: '/images/brand/brand2.png', alt: 'Brand Logo 2' },
  { id: 3, src: '/images/brand/brand3.png', alt: 'Brand Logo 3' },
  { id: 4, src: '/images/brand/brand4.png', alt: 'Brand Logo 4' },
  { id: 5, src: '/images/brand/brand5.png', alt: 'Brand Logo 5' },
];

export default function BrandLogo() {
  return (
    <section className="w-full bg-[#F5F5F6] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto px-6 lg:px-16 flex max-w-360 flex-wrap items-center justify-center gap-6 sm:gap-10 md:justify-between lg:gap-12">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center transition-opacity hover:opacity-80"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={167}
              height={41}
              className="h-auto w-[120px] object-contain sm:w-[140px] lg:h-[41px] lg:w-[167px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}