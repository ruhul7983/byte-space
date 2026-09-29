import React from 'react';
import Image from 'next/image';
import { Star, BarChart2 } from 'lucide-react';

export interface CourseCardProps {
  image: string;
  title: string;
  author: string;
  rating: number | string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  price: string | number;
  billingPeriod?: string;
  studentAvatars?: string[];
  studentCount?: string;
  className?: string;
}

export default function CourseCard({
  image,
  title,
  author,
  rating,
  lessons,
  duration,
  comments,
  level,
  price,
  billingPeriod = '/lifetime',
  studentAvatars = [],
  studentCount,
  className = '',
}: CourseCardProps) {
  const formattedPrice = typeof price === 'number' ? `$${price}` : price;

  return (
    <article
      className={`group flex w-full flex-col justify-between rounded-[24px] border border-[#CED0D3] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      <div>
        {/* Course Thumbnail & Frosted Metadata Badges */}
        <div className="relative h-[195px] w-full overflow-hidden rounded-[12px] bg-[#443131]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Frosted Metadata Badges Overlay */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1.5 px-[13px] pb-[19px]">
            <span className="flex items-center justify-center rounded-full bg-[#F6F6F6]/60 px-3 py-1.5 font-satoshi text-[12px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]">
              {lessons}
            </span>

            <span className="flex items-center justify-center rounded-full bg-[#F6F6F6]/60 px-3 py-1.5 font-satoshi text-[12px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]">
              {duration}
            </span>

            <span className="flex items-center justify-center rounded-full bg-[#F6F6F6]/60 px-3 py-1.5 font-satoshi text-[12px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]">
              {comments}
            </span>
          </div>
        </div>

        {/* 20px gap from image to text content */}
        <div className="mt-5">
          {/* Title & Rating Row */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 font-poppins text-lg font-semibold leading-tight text-[#242528] lg:text-[20px]">
              {title}
            </h3>

            <div className="flex items-center gap-1 shrink-0">
              <span className="font-satoshi text-[18px] font-normal leading-[160%] text-[#4F4F4F]">
                {rating}
              </span>
              <Star className="h-6 w-6 fill-[#CED0D3] text-[#CED0D3]" />
            </div>
          </div>

          {/* Author */}
          <p className="mt-1 font-satoshi text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
            by{' '}
            <span className="text-[#003BE2] hover:underline cursor-pointer">
              {author}
            </span>
          </p>
        </div>

        {/* Level Tag & Enrolled Student Avatars */}
        <div className="mt-4 flex items-center justify-between">
          {/* Level Pill */}
          <div className="flex items-center gap-1.5 rounded-full bg-[#F5F5F6] px-3 py-1.5">
            <BarChart2 className="h-3.5 w-3.5 text-[#4B4C53]" />
            <span className="font-satoshi text-[12px] font-medium leading-[120%] text-[#4B4C53]">
              {level}
            </span>
          </div>

          {/* Avatar Stack + Student Count Badge */}
          <div className="flex items-center -space-x-2">
            {studentAvatars.slice(0, 4).map((avatarUrl, index) => (
              <Image
                key={index}
                src={avatarUrl}
                alt={`Student ${index + 1}`}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border-2 border-white object-cover"
              />
            ))}
            {studentCount && (
              <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] font-satoshi text-[12px] font-medium leading-[20px] text-[#242528]">
                {studentCount}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Price Footer */}
      <div className="mt-5 flex items-baseline gap-1 pt-2">
        <span className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-[#003BE2]">
          {formattedPrice}
        </span>
        <span className="font-satoshi text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
          {billingPeriod}
        </span>
      </div>
    </article>
  );
}