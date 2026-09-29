"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import CourseCard from "@/components/CourseCard/CourseCard";

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

const checklistItems = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function PlatformGrowthSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-18">
      {/* ================= EXACT 50% CROPPED GLOWING RADIAL EFFECTS ================= */}
      {/* 1. Top Left Half Cropped Glow */}
      <div
        className="pointer-events-none absolute -top-[568px] -left-[568px] h-[1137px] w-[1137px] rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />

      {/* 2. Top Right Half Cropped Glow */}
      <div
        className="pointer-events-none absolute -top-[568px] -right-[568px] h-[1137px] w-[1137px] rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />

      {/* 3. Middle Left Wall Half Cropped Glow */}
      <div
        className="pointer-events-none absolute top-1/2 -left-[568px] h-[1137px] w-[1137px] -translate-y-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.04) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />

      {/* 4. Bottom Left Half Cropped Glow */}
      <div
        className="pointer-events-none absolute -bottom-[336px] -left-[336px] h-[672px] w-[672px] rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />

      {/* 5. Bottom Right Half Cropped Glow */}
      <div
        className="pointer-events-none absolute -bottom-[568px] -right-[568px] h-[1137px] w-[1137px] rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />

      {/* ================= MAIN CONTAINER (1440px) WITH EXACT 72PX VERTICAL GAP ================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-14 sm:gap-16 lg:gap-[72px] px-5 sm:px-10 lg:px-16">
        {/* ================= BLOCK 1: STUDENT GROWTH (BOY SECTION) ================= */}
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Text & Stats */}
          <div className="flex max-w-[580px] flex-col">
            <h2 className="font-poppins text-[28px] font-semibold leading-[120%] tracking-[-0.44px] text-[#242528] sm:text-[36px] md:text-[40px] lg:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>

            {/* Vertical gap: 40px */}
            <div className="h-5 sm:h-7 lg:h-10" />

            <p className="font-satoshi text-[15px] font-normal leading-[160%] text-[#4B4C53] sm:text-[16px] lg:text-[18px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Vertical gap: 40px */}
            <div className="h-6 sm:h-8 lg:h-10" />

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-7 sm:gap-10 lg:gap-14">
              <div className="flex flex-col">
                <span className="font-poppins text-[28px] font-medium leading-[38px] tracking-[-0.36px] text-[#003BE2] sm:text-[32px] sm:leading-[44px] lg:text-[36px]">
                  12K
                </span>
                <span className="font-satoshi text-[15px] font-normal leading-[160%] text-[#4B4C53] sm:text-[16px] lg:text-[18px]">
                  Students
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-poppins text-[28px] font-medium leading-[38px] tracking-[-0.36px] text-[#003BE2] sm:text-[32px] sm:leading-[44px] lg:text-[36px]">
                  70+
                </span>
                <span className="font-satoshi text-[15px] font-normal leading-[160%] text-[#4B4C53] sm:text-[16px] lg:text-[18px]">
                  Courses
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-poppins text-[28px] font-medium leading-[38px] tracking-[-0.36px] text-[#003BE2] sm:text-[32px] sm:leading-[44px] lg:text-[36px]">
                  16
                </span>
                <span className="font-satoshi text-[15px] font-normal leading-[160%] text-[#4B4C53] sm:text-[16px] lg:text-[18px]">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Layer Composition */}
          <div className="relative mx-auto flex h-[440px] w-full max-w-[500px] items-center justify-center sm:h-[520px] sm:max-w-[540px] lg:h-[580px] lg:max-w-[560px]">
            {/* 1. Behind Static Course Card (Tucked Upper Left) */}
            <div className="pointer-events-none absolute top-1 left-0 z-0 w-[210px] scale-90 sm:top-4 sm:left-3 sm:w-[270px] sm:scale-100 lg:top-6 lg:left-6 lg:w-[390px]">
              <CourseCard
                image="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80"
                title="Learn Figma from Basic"
                author="purepearl studio"
                rating={4.5}
                lessons="17 Lessons"
                duration="2 hours 16 mins"
                comments="59 Comments"
                level="Beginner"
                price="$25"
                billingPeriod="/lifetime"
                studentAvatars={studentAvatars}
                studentCount="26+"
                className="shadow-xl"
              />
            </div>

            {/* 2. Boy Image */}
            <div className="absolute bottom-2 right-2 z-10 flex h-[350px] w-[290px] items-end justify-end sm:bottom-6 sm:right-6 sm:h-[450px] sm:w-[380px] lg:bottom-10 lg:right-10 lg:h-[660px] lg:w-[590px]">
              <Image
                src="/images/hero/boy.png"
                alt="Student Boy with Laptop"
                width={578}
                height={541}
                priority
                className="pointer-events-none block h-full w-auto translate-x-0 select-none object-contain object-bottom lg:translate-x-40"
              />
            </div>

            {/* 3. Floating Lime Twist (Top Right) */}
            <div className="pointer-events-none absolute top-2 right-0 z-50 w-20 sm:top-4 sm:right-2 sm:w-28 lg:top-38 lg:-right-20 lg:w-40">
              <Image
                src="/images/growth/twist.png"
                alt="Decorative Twist"
                width={180}
                height={240}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* 4. Learning Progress Card (Moved downward across all breakpoints) */}
            <div className="absolute top-52 right-2 z-20 flex min-w-[140px] flex-col rounded-2xl bg-white p-3 shadow-xl sm:top-60 sm:right-4 sm:min-w-[185px] sm:p-4 lg:top-66 lg:-right-14 lg:min-w-[215px] lg:p-5">
              <span className="font-satoshi text-[11px] font-medium leading-tight text-[#242528] sm:text-[13px] lg:text-[14px]">
                Learning Progress
              </span>

              <span className="mt-1 font-poppins text-xl font-semibold leading-tight tracking-[-0.48px] text-[#242528] sm:text-3xl lg:text-[44px]">
                55%
              </span>

              <div className="mt-2 sm:mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#F6F6F6] sm:h-2">
                <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= BLOCK 2: INSTRUCTOR & COURSE CREATION (GIRL SECTION) ================= */}
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Visual Layer Composition */}
          <div className="relative mx-auto flex h-[440px] w-full max-w-[500px] items-center justify-center sm:h-[520px] sm:max-w-[540px] lg:h-[580px] lg:max-w-[560px]">
            {/* 1. Total Revenue Card */}
            <div className="absolute top-3 left-0 z-10 flex min-w-[155px] flex-col rounded-[14px] bg-[#003BE2] p-3 shadow-xl backdrop-blur-[10px] sm:top-6 sm:left-2 sm:min-w-[185px] sm:rounded-[16px] sm:p-4 lg:top-4 lg:left-8">
              <div className="flex items-center justify-between gap-2.5 sm:gap-3">
                <span className="font-satoshi text-[12px] font-medium leading-[120%] text-[#F5F5F6] sm:text-[14px] lg:text-[16px]">
                  Total Revenue
                </span>
                <span className="font-satoshi text-[8px] font-normal leading-[120%] text-[#F5F5F6]/80 sm:text-[9px] lg:text-[10px]">
                  July 1-28
                </span>
              </div>

              <span className="mt-1 font-poppins text-base font-semibold leading-tight tracking-[-0.24px] text-[#F5F5F6] sm:text-[20px] sm:leading-[28px] lg:text-[24px] lg:leading-[32px]">
                $120.29
              </span>

              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[65%] rounded-full bg-[#D4FB20]" />
              </div>
            </div>

            {/* 2. Year to Date Card */}
            <div className="absolute top-28 left-0 z-10 flex min-w-[145px] flex-col rounded-[14px] bg-[#003BE2] p-3 shadow-xl backdrop-blur-[10px] sm:top-36 sm:left-2 sm:min-w-[165px] sm:rounded-[16px] sm:p-4 lg:top-32 lg:left-8 lg:min-w-[120px]">
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <span className="font-satoshi text-[12px] font-medium leading-[120%] text-[#F5F5F6] sm:text-[14px] lg:text-[16px]">
                  Year to Date
                </span>
                <span className="font-satoshi text-[8px] font-normal leading-[120%] text-[#F5F5F6]/80 sm:text-[9px] lg:text-[10px]">
                  2023
                </span>
              </div>

              <div className="mt-1 flex items-center justify-between gap-2">
                <span className="font-poppins text-base font-semibold leading-tight tracking-[-0.24px] text-[#F5F5F6] sm:text-[20px] sm:leading-[28px] lg:text-[24px] lg:leading-[32px]">
                  $1,200.38
                </span>
                <span className="rounded-full bg-[#D4FB20] px-1.5 py-0.5 font-satoshi text-[9px] font-bold text-[#242528] sm:text-[10px]">
                  +12%
                </span>
              </div>
            </div>

            {/* 3. Rotated Lime Twist */}
            <div className="pointer-events-none absolute top-1/3 -right-1 z-50 w-24 -translate-y-1/2 rotate-40 sm:right-2 sm:w-32 lg:right-20 lg:w-48">
              <Image
                src="/images/growth/twist.png"
                alt="Rotated Lime Twist"
                width={200}
                height={260}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* 4. Girl Centerpiece Image */}
            <div className="relative z-20 flex h-[360px] w-[280px] items-end justify-center sm:h-[450px] sm:w-[350px] lg:h-[530px] lg:w-[430px]">
              <Image
                src="/images/growth/girl.png"
                alt="Course Creator"
                width={500}
                height={600}
                className="pointer-events-none block h-full w-auto select-none object-contain object-bottom"
              />
            </div>

            {/* 5. Happy Students Card */}
            <div className="absolute right-1 bottom-3 z-30 flex flex-col gap-1 rounded-2xl bg-white p-3 shadow-xl sm:right-3 sm:bottom-5 sm:gap-1.5 sm:p-3.5 lg:right-24 lg:bottom-24">
              <div>
                <span className="block font-satoshi text-[12px] font-medium leading-tight text-[#242528] sm:text-[14px] lg:text-[16px]">
                  Happy Students
                </span>

                <div className="mt-0.5 flex items-center gap-1">
                  <span className="font-satoshi text-[10px] font-normal leading-relaxed text-[#242528] sm:text-[11px] lg:text-[12px]">
                    4.5
                  </span>
                  <span className="font-satoshi text-[10px] font-normal leading-relaxed text-[#82868E] sm:text-[11px] lg:text-[12px]">
                    (240)
                  </span>
                  <Star className="ml-0.5 h-2.5 w-2.5 sm:h-3 sm:w-3 fill-[#FFB800] text-[#FFB800]" />
                </div>
              </div>

              {/* Avatar Stack + 2K+ Badge */}
              <div className="flex items-center -space-x-2 pt-0.5">
                {studentAvatars.slice(0, 4).map((avatarUrl, index) => (
                  <Image
                    key={index}
                    src={avatarUrl}
                    alt={`Student ${index + 1}`}
                    width={28}
                    height={28}
                    className="h-6 w-6 rounded-full border-2 border-white object-cover sm:h-7 sm:w-7"
                  />
                ))}
                <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] font-satoshi text-[9px] font-bold text-[#242528] sm:h-7 sm:w-7 sm:text-[10px] lg:text-[11px]">
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Right Text & Checklist */}
          <div className="flex max-w-[580px] flex-col">
            <h2 className="font-poppins text-[28px] font-semibold leading-[120%] tracking-[-0.44px] text-[#242528] sm:text-[36px] md:text-[40px] lg:text-[44px]">
              Create & Manage <br className="hidden sm:inline" /> Courses
              Easily.
            </h2>

            {/* Vertical gap */}
            <div className="h-4 sm:h-5 lg:h-6" />

            <p className="font-satoshi text-[15px] font-normal leading-[160%] text-[#4B4C53] sm:text-[16px] lg:text-[18px]">
              <span className="font-bold text-[#242528]">
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </span>{" "}
              Whether you are an individual instructor or an organization, our
              tools make sharing expertise effortless.
            </p>

            {/* Vertical gap */}
            <div className="h-5 sm:h-6 lg:h-8" />

            {/* Checklist with Lucide ticks */}
            <ul className="flex flex-col gap-3.5 sm:gap-4 lg:gap-5">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-[#003BE2] sm:h-6 sm:w-6"
                    strokeWidth={2.4}
                  />
                  <span className="font-satoshi text-[15px] font-medium leading-[120%] text-[#242528] sm:text-[16px] lg:text-[18px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}