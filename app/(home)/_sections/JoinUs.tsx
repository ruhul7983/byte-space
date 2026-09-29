import Image from 'next/image';

export default function JoinUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003BE2] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:44px_44px] md:bg-[size:88px_88px] py-14 sm:py-20 md:py-24 lg:py-28">
      {/* ================= FLOATING 3D SHAPES ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        {/* 1. Top-Left: Lime Ribbon / Coil (Tucked safely to the corner on mobile) */}
        <div className="absolute -top-5 -left-5 sm:-top-6 sm:-left-6 lg:-top-6 lg:-left-6 w-14 sm:w-24 md:w-32 lg:w-40 opacity-70 sm:opacity-95">
          <Image
            src="/images/hero/twist-color.png"
            alt="Lime Coil Shape"
            width={160}
            height={220}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* 2. Inner Top-Left: White Zigzag Wave (Hidden on mobile to prevent overlapping the heading) */}
        <div className="hidden sm:block absolute sm:top-4 sm:left-[10%] md:left-[13%] lg:top-4 lg:left-[16%] sm:w-16 md:w-28 lg:w-48 sm:opacity-90">
          <Image
            src="/images/hero/twist1.png"
            alt="White Zigzag Shape"
            width={100}
            height={130}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* 3. Bottom-Left Corner: White Cone / Pyramid */}
        <div className="absolute -bottom-3 -left-3 sm:bottom-0 sm:left-2 md:left-4 lg:-bottom-4 lg:left-0 w-12 sm:w-20 md:w-28 lg:w-48 opacity-75 sm:opacity-95">
          <Image
            src="/images/hero/cone.png"
            alt="White Cone Shape"
            width={110}
            height={130}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* 4. Bottom-Left Center: Lime Torus / Donut (Hidden on mobile to keep button area clear) */}
        <div className="hidden sm:block absolute sm:-bottom-14 sm:left-[10%] md:-bottom-18 md:left-[11%] lg:-bottom-14 lg:left-[12%] sm:w-24 md:w-36 lg:w-48 sm:opacity-95">
          <Image
            src="/images/hero/rounded.png"
            alt="Lime Torus Shape"
            width={200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* 5. Inner Top-Right: Lime Pyramid (Hidden on mobile to prevent overlapping heading) */}
        <div className="hidden sm:block absolute sm:top-4 sm:right-[10%] md:right-[14%] lg:top-4 lg:right-[18%] sm:w-16 md:w-28 lg:w-48 sm:opacity-95">
          <Image
            src="/images/hero/cone-color.png"
            alt="Lime Pyramid Shape"
            width={110}
            height={130}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* 6. Top-Right Corner: White Rounded Block */}
        <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 lg:-top-6 lg:-right-6 w-14 sm:w-24 md:w-36 lg:w-48 opacity-70 sm:opacity-90">
          <Image
            src="/images/hero/ballon.png"
            alt="White Balloon Shape"
            width={180}
            height={220}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* 7. Bottom-Right: Lime Coiled Spring */}
        <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:right-3 md:-bottom-4 md:right-6 lg:right-10 lg:bottom-0 w-14 sm:w-24 md:w-36 lg:w-64 opacity-75 sm:opacity-95">
          <Image
            src="/images/hero/twist-color2.png"
            alt="Lime Spring Shape"
            width={160}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-6 md:px-8 lg:px-8 text-center">
        {/* Heading M */}
        <h2 className="max-w-[850px] font-poppins text-[22px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-[125%] lg:leading-[120%] tracking-[-0.44px] text-[#F5F5F6]">
          Unlock Your Potential as a <br className="hidden sm:inline" /> Creator with ByteSpace
        </h2>

        {/* Vertical gap */}
        <div className="h-4 sm:h-6 md:h-8 lg:h-10" />

        {/* Body L */}
        <p className="max-w-[760px] font-satoshi text-[13.5px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[160%] text-[#F5F5F6]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* Vertical gap to button */}
        <div className="h-6 sm:h-8 lg:h-10" />

        {/* CTA Button */}
        <button
          type="button"
          className="flex items-center justify-center rounded-[24px] bg-[#D4FB20] px-7 py-3 sm:px-8 sm:py-3.5 font-satoshi text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[120%] text-[#242528] transition-transform active:scale-95 hover:brightness-105 cursor-pointer shadow-lg"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}