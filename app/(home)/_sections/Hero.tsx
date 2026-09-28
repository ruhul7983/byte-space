"use client";

import React from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] sm:min-h-[750px] md:min-h-200 lg:min-h-230 w-full flex-col justify-between overflow-hidden bg-primary bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:44px_44px] md:bg-[size:88px_88px]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Floating Shapes as Next.js Image components */}
      <div className="pointer-events-none absolute inset-0 z-[1] select-none overflow-hidden">
        {/* Left Green Ribbon/Coil */}
        <div className="hidden sm:block absolute -left-3 sm:-left-2 top-[200px] md:top-[240px] lg:top-[280px] opacity-80 md:opacity-95">
          <Image
            src="/images/hero/twist-color.png"
            alt="Green Coil Shape"
            width={140}
            height={190}
            className="h-[120px] w-[85px] sm:h-[150px] sm:w-[105px] lg:h-[200px] lg:w-[140px]"
          />
        </div>

        {/* Left White Zigzag */}
        <div className="hidden md:block absolute left-[6%] lg:left-[13%] top-[380px] lg:top-[480px] opacity-80 md:opacity-90">
          <Image
            src="/images/hero/twist1.png"
            alt="White Zigzag Shape"
            width={80}
            height={110}
            className="h-[140px] w-[95px] lg:h-[220px] lg:w-[150px]"
          />
        </div>

        {/* Left White Torus */}
        <div className="hidden sm:block absolute bottom-12 md:bottom-16 lg:bottom-20 left-[2%] lg:left-[5%] opacity-85 md:opacity-95">
          <Image
            src="/images/hero/rounded.png"
            alt="White Torus Shape"
            width={190}
            height={190}
            className="h-[130px] w-[130px] md:h-[180px] md:w-[180px] lg:h-[250px] lg:w-[250px]"
          />
        </div>

        {/* Right Green Slanted Cylinder */}
        <div className="hidden sm:block absolute -right-3 sm:-right-2 top-[180px] md:top-[220px] lg:top-[250px] opacity-80 md:opacity-90">
          <Image
            src="/images/hero/ballon.png"
            alt="Green Cylinder Shape"
            width={160}
            height={220}
            className="h-[140px] w-[80px] md:h-[200px] md:w-[120px] lg:h-[280px] lg:w-[160px]"
          />
        </div>

        {/* Right White Pyramid */}
        <div className="hidden md:block absolute right-[6%] lg:right-[14%] top-[380px] lg:top-[470px] opacity-85 md:opacity-95">
          <Image
            src="/images/hero/cone.png"
            alt="White Pyramid Shape"
            width={110}
            height={130}
            className="h-[120px] w-[100px] lg:h-[180px] lg:w-[150px]"
          />
        </div>

        {/* Right White Helix/Spring */}
        <div className="hidden sm:block absolute right-[2%] lg:right-[4%] bottom-8 md:bottom-12 lg:bottom-[70px] opacity-85 md:opacity-95">
          <Image
            src="/images/hero/twist2.png"
            alt="White Helix Shape"
            width={130}
            height={160}
            className="h-[130px] w-[100px] md:h-[160px] md:w-[120px] lg:h-[200px] lg:w-[150px]"
          />
        </div>
      </div>

      {/* 3. Hero Text Content & Search Form */}
      <div className="relative z-10 mx-auto flex w-full max-w-240 flex-col items-center px-4 pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 text-center">
        {/* Heading L */}
        <h1 className="font-poppins text-[34px] sm:text-[48px] md:text-[58px] lg:text-[72px] font-semibold leading-[1.15] lg:leading-tight tracking-[-0.72px] text-text-primary">
          Get Access to Hundreds <br className="hidden sm:inline" /> Courses Available
        </h1>

        {/* Gap between two text */}
        <div className="h-3 sm:h-5 lg:h-8" />

        {/* Body L */}
        <p className="max-w-xs sm:max-w-md md:max-w-160 lg:max-w-175 font-satoshi text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed text-hero-sub">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Gap */}
        <div className="h-5 sm:h-8 lg:h-15" />

        {/* Search Capsule Input */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-[95%] sm:max-w-120 lg:max-w-135 items-center rounded-full bg-card py-1.5 sm:py-2 pr-1.5 sm:pr-2 pl-4 sm:pl-6 shadow-2xl"
        >
          <Search className="mr-2.5 sm:mr-3 h-5 w-5 sm:h-[22px] sm:w-[22px] shrink-0 text-text-muted" />

          <input
            type="text"
            placeholder="Course, topic, creator"
            className="w-full min-w-0 bg-transparent font-satoshi text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed text-text-muted outline-none placeholder:text-text-muted"
          />

          <button
            type="submit"
            className="flex shrink-0 items-center justify-center gap-2 rounded-3xl bg-accent px-4 sm:px-6 py-2.5 sm:py-3 font-satoshi text-sm sm:text-base lg:text-[18px] font-medium leading-tight text-accent-text transition-transform active:scale-95 cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      {/* 4. Giant Circle Ring + Student Photo Anchored to the Bottom + Floating Stat Cards */}
      <div className="relative mt-auto flex w-full items-end justify-center pt-6 sm:pt-10 lg:pt-0">
        {/* Giant Arch Ring */}
        <div className="pointer-events-none absolute left-1/2 z-[1] -translate-x-1/2 rounded-full border-accent-ring -bottom-[320px] h-[580px] w-[580px] border-[160px] sm:-bottom-[450px] sm:h-[820px] sm:w-[820px] sm:border-[230px] lg:-bottom-[640px] lg:h-[1149px] lg:w-[1149px] lg:border-[320px]" />

        {/* Centerpiece Image & Overlays */}
        <div className="relative z-10 flex w-full max-w-300 items-end justify-center px-2 sm:px-4 lg:px-0">
          {/* Human Image - Anchored Flush to the Bottom Most */}
          <div className="relative z-10 flex h-[310px] w-[330px] sm:h-[410px] sm:w-[440px] md:h-[470px] md:w-[500px] lg:h-[541px] lg:w-[578px] items-end justify-center leading-none">
            <Image
              src="/images/hero/boy.png"
              alt="Student with laptop"
              width={578}
              height={541}
              priority
              className="pointer-events-none block select-none object-contain lg:object-cover object-bottom h-full w-auto"
            />
          </div>

          {/* Card 1: UI/UX Design */}
          <div className="absolute top-2 sm:top-[40px] md:top-[60px] lg:top-[90px] left-1 sm:left-4 md:left-[calc(50%-260px)] lg:left-[calc(50%-310px)] z-20 flex min-w-[130px] sm:min-w-[160px] lg:min-w-[185px] flex-col gap-0.5 sm:gap-1 rounded-xl sm:rounded-2xl bg-card p-2.5 sm:p-3 lg:p-4 shadow-xl">
            <span className="font-satoshi text-xs sm:text-sm lg:text-[16px] font-medium leading-tight text-card-title">
              UI/UX Design
            </span>
            <span className="font-satoshi text-[10px] sm:text-[11px] lg:text-[12px] font-normal leading-relaxed text-text-muted">
              200 Courses &bull; 1000+ Students
            </span>
          </div>

          {/* Card 2: Learning Progress */}
          <div className="absolute top-3 sm:top-[50px] md:top-[70px] lg:top-[110px] right-1 sm:right-4 md:right-[calc(50%-270px)] lg:right-[calc(50%-330px)] z-20 flex min-w-[125px] sm:min-w-[170px] lg:min-w-[220px] flex-col rounded-xl sm:rounded-2xl bg-card p-2.5 sm:p-3.5 lg:p-5 shadow-xl">
            <span className="font-satoshi text-xs sm:text-sm lg:text-[14px] font-medium leading-tight text-card-title">
              Learning Progress
            </span>

            <span className="mt-1 lg:mt-2 font-poppins text-xl sm:text-3xl lg:text-[48px] font-semibold leading-tight tracking-[-0.48px] text-card-title">
              55%
            </span>

            {/* Progress bar container */}
            <div className="mt-1.5 sm:mt-2 lg:mt-3 h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-progress">
              <div className="h-full w-[55%] rounded-full bg-accent" />
            </div>
          </div>

          {/* Card 3: Happy Students */}
          <div className="absolute bottom-3 sm:bottom-[20px] md:bottom-[35px] lg:bottom-[50px] left-1 sm:left-4 md:left-[calc(50%-300px)] lg:left-[calc(50%-370px)] z-20 flex flex-col gap-1.5 sm:gap-2 lg:gap-2.5 rounded-xl sm:rounded-2xl bg-card p-2 sm:p-3 lg:p-4 shadow-xl">
            <div>
              <span className="block font-satoshi text-xs sm:text-sm lg:text-[16px] font-medium leading-tight text-card-title">
                Happy Students
              </span>

              <div className="mt-0.5 sm:mt-1 flex items-center gap-1">
                <span className="font-satoshi text-[10px] sm:text-xs lg:text-[12px] font-normal leading-relaxed text-card-title">
                  4.5
                </span>
                <span className="font-satoshi text-[10px] sm:text-xs lg:text-[12px] font-normal leading-relaxed text-text-muted">
                  (240)
                </span>
                <Star className="ml-0.5 h-2.5 w-2.5 sm:h-3 sm:w-3 fill-star text-star" />
              </div>
            </div>

            {/* Avatar Stack + 2K+ Badge */}
            <div className="flex items-center -space-x-1.5 sm:-space-x-2 pt-0.5 sm:pt-1">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Student 1"
                width={32}
                height={32}
                className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 rounded-full border-2 border-card object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Student 2"
                width={32}
                height={32}
                className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 rounded-full border-2 border-card object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Student 3"
                width={32}
                height={32}
                className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 rounded-full border-2 border-card object-cover"
              />
              <div className="z-10 flex h-7 w-7 sm:h-8 sm:w-8 lg:h-[43px] lg:w-[43px] shrink-0 items-center justify-center rounded-full border-2 border-card bg-accent font-satoshi text-[9px] sm:text-[10px] lg:text-[12px] font-bold leading-none sm:leading-6 text-accent-text">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}