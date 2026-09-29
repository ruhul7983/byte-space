"use client";

import React from "react";
import Image from "next/image";

// Testimonials community data[cite: 7]
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function CommunityFeedback() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* ================= RADIAL GLOWING EFFECTS ================= */}
      {/* 1. Header Mid Glow (Between the two header texts) */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[672px] w-[672px] -translate-x-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />

      {/* 2. Top Right Wall Half Circle Glow (50% Cropped) */}
      <div
        className="pointer-events-none absolute -top-[568px] -right-[568px] h-[1137px] w-[1137px] rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />

      {/* 3. Bottom Left Corner Half Circle Glow (50% Cropped) */}
      <div
        className="pointer-events-none absolute -bottom-[568px] -left-[568px] h-[1137px] w-[1137px] rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />

      {/* ================= MAIN CONTAINER (1440px) ================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Header: Title on Left, Description on Right */}
        <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <h2 className="max-w-[500px] font-poppins text-[28px] font-semibold leading-[120%] tracking-[-0.44px] text-[#000] sm:text-[36px] md:text-[40px] lg:text-[44px]">
            Discover What Our Community Is Saying
          </h2>

          <p className="max-w-[620px] font-satoshi text-[15px] font-normal leading-[160%] text-[#4F4F4F] sm:text-[16px] lg:text-[18px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-start rounded-[24px] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg"
            >
              {/* Avatar (80px x 80px) */}
              <div className="relative mb-6 h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <div className="mb-5 flex flex-col gap-1">
                <h3 className="font-poppins text-[18px] font-semibold leading-[120%] tracking-[-0.2px] text-[#000] sm:text-[20px]">
                  {item.name}
                </h3>
                <span className="font-satoshi text-[15px] font-normal leading-[160%] text-[#003BE2] sm:text-[16px] lg:text-[18px]">
                  {item.role}
                </span>
              </div>

              {/* Testimonial Quote */}
              <p className="font-satoshi text-[15px] font-normal leading-[160%] text-[#4F4F4F] sm:text-[16px] lg:text-[18px]">
                &ldquo;{item.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}