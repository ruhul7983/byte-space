import React from 'react';
import {
  PencilRuler,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  type LucideIcon,
} from 'lucide-react';

interface CategoryItem {
  id: number;
  name: string;
  icon: LucideIcon;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    name: 'Design',
    icon: PencilRuler,
  },
  {
    id: 2,
    name: 'Development',
    icon: Code2,
  },
  {
    id: 3,
    name: 'IT & Software',
    icon: Laptop,
  },
  {
    id: 4,
    name: 'Business',
    icon: Building2,
  },
  {
    id: 5,
    name: 'Marketing',
    icon: Megaphone,
  },
  {
    id: 6,
    name: 'Photography',
    icon: Camera,
  },
];

export default function CourseCategories() {
  return (
    <section className="w-full bg-white py-[72px]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          {/* Heading S */}
          <h2 className="font-poppins text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-[120%] tracking-[-0.36px] text-[#040819]">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          {/* Vertical gap: 16px */}
          <div className="h-4" />

          {/* Body L */}
          <p className="font-satoshi text-[16px] sm:text-[18px] font-normal leading-[160%] text-[#82868E]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Vertical gap: 62px */}
        <div className="h-[62px]" />

        {/* Responsive Categories Grid (Mobile: 2 cols, Tablet/iPad: 3 cols, Desktop: 6 cols) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;

            return (
              <div
                key={category.id}
                className="group flex flex-col items-center justify-center rounded-[24px] border border-[#CED0D3] bg-white p-6 transition-all duration-300 hover:border-[#242528] hover:shadow-md cursor-pointer"
              >
                {/* Lime Icon Container */}
                <div className="flex h-16 w-16 sm:h-[72px] sm:w-[72px] items-center justify-center rounded-[40px] bg-[#D4FB20] transition-transform duration-300 group-hover:scale-105">
                  <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-[#242528]" strokeWidth={2.2} />
                </div>

                {/* Category Title */}
                <h3 className="mt-5 font-satoshi text-[18px] lg:text-[20px] font-medium leading-[120%] text-[#242528] whitespace-nowrap">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}