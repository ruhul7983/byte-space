"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex w-full max-w-360 items-center justify-between px-6 pt-7 pb-4 lg:px-16">
      {/* ByteSpace Logo */}
      <a href="#" className="flex items-center gap-2.5">
        <Image
          src="/images/logo.png"
          alt="ByteSpace Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-7 sm:h-8 w-auto object-contain"
        />
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden items-center gap-10 md:flex">
        <a
          href="#"
          className="font-satoshi text-[16px] font-medium leading-[120%] text-nav-text transition-opacity hover:opacity-80"
        >
          Home
        </a>
        <a
          href="#"
          className="font-satoshi text-[16px] font-normal leading-[24px] text-nav-text transition-opacity hover:opacity-80"
        >
          Courses
        </a>
        <a
          href="#"
          className="font-satoshi text-[16px] font-normal leading-[24px] text-nav-text transition-opacity hover:opacity-80"
        >
          Creators
        </a>
      </nav>

      {/* Right Navigation & Cart */}
      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="#"
          className="hidden sm:block font-satoshi text-[16px] font-normal leading-6 text-nav-text transition-opacity hover:opacity-80"
        >
          Sign In
        </a>

        <a
          href="#"
          className="hidden sm:block font-satoshi text-[16px] font-normal leading-[24px] text-nav-text transition-opacity hover:opacity-80"
        >
          Join Us
        </a>

        {/* Lucide Cart Icon */}
        <button
          type="button"
          aria-label="Cart"
          className="p-1 transition-transform hover:scale-105"
        >
          <ShoppingBag className="h-[22px] w-[22px] text-nav-text" />
        </button>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="p-1 text-nav-text transition-transform active:scale-95 md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile & Tablet Slide-Down Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 z-50 flex w-full flex-col gap-4 border-t border-white/10 bg-primary/95 px-6 py-6 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="font-satoshi text-lg font-medium text-nav-text transition-opacity hover:opacity-80"
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="font-satoshi text-lg font-normal text-nav-text transition-opacity hover:opacity-80"
            >
              Courses
            </a>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="font-satoshi text-lg font-normal text-nav-text transition-opacity hover:opacity-80"
            >
              Creators
            </a>
          </nav>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:hidden">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="font-satoshi text-base font-normal text-nav-text transition-opacity hover:opacity-80"
            >
              Sign In
            </a>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl bg-accent py-2.5 text-center font-satoshi text-base font-medium text-accent-text transition-transform active:scale-95"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
