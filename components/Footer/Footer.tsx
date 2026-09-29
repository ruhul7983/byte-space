'use client';

import React from 'react';
import Image from 'next/image';

const column1Links = [
  'Featured Courses',
  'Featured Categories',
  'Business',
  'IT',
  'Design',
];

const column2Links = [
  'Development',
  'Marketing',
  'Photography',
  'Finance',
  'Sport',
];

const column3Links = [
  'Become a Creator',
  'Affiliate Program',
  'Contact',
  'Help',
  'About',
];

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Main Footer Content */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="flex max-w-[480px] flex-col">
            {/* Logo with text combined */}
            <div className="relative h-9 w-[160px]">
              <Image
                src="/images/logo-footer.png"
                alt="ByteSpace"
                width={160}
                height={36}
                priority
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Newsletter Description */}
            <p className="mt-6 font-satoshi text-[14px] font-normal leading-[160%] text-[#242528]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Subscription Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-[340px] rounded-full border border-[#CED0D3] bg-white px-6 py-3 font-satoshi text-[16px] font-normal leading-[160%] text-[#242528] placeholder:text-[#242528] outline-none transition-colors focus:border-[#242528]"
              />

              <button
                type="submit"
                className="flex items-center justify-center rounded-[24px] bg-[#D4FB20] px-8 py-3 font-satoshi text-[18px] font-medium leading-[120%] text-[#242528] transition-transform active:scale-95 cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Privacy Disclaimer */}
            <p className="mt-4 font-satoshi text-[12px] font-normal leading-[160%] text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-16 xl:gap-20">
            {/* Column 1 */}
            <ul className="flex flex-col gap-4">
              {column1Links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-satoshi text-[14px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-75"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="flex flex-col gap-4">
              {column2Links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-satoshi text-[14px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-75"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="flex flex-col gap-4">
              {column3Links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-satoshi text-[14px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-75"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="mt-16 w-full border-t border-[#CED0D3] sm:mt-20 lg:mt-24" />

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-satoshi text-[12px] font-normal leading-[160%] text-[#242528]">
            &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <a
              href="#"
              className="font-satoshi text-[12px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-75"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-satoshi text-[12px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-75"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="font-satoshi text-[12px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-75"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}