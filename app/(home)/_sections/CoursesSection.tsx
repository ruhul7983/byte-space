'use client';

import CourseCard from '@/components/CourseCard/CourseCard';
import React, { useState } from 'react';

const categories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

const mockAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
];

const coursesData = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    billingPeriod: '/lifetime',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80',
    studentAvatars: mockAvatars,
    studentCount: '26+',
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    billingPeriod: '/lifetime',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    studentAvatars: mockAvatars,
    studentCount: '26+',
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    billingPeriod: '/lifetime',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    studentAvatars: mockAvatars,
    studentCount: '26+',
  },
  {
    id: 4,
    title: 'Balancing Productivity an...',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    billingPeriod: '/lifetime',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80',
    studentAvatars: mockAvatars,
    studentCount: '26+',
  },
  {
    id: 5,
    title: 'Mastering Money Manage...',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    billingPeriod: '/lifetime',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=80',
    studentAvatars: mockAvatars,
    studentCount: '26+',
  },
  {
    id: 6,
    title: 'From Idea to Startup Succ...',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    billingPeriod: '/lifetime',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    studentAvatars: mockAvatars,
    studentCount: '26+',
  },
];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('Featured');

  return (
<<<<<<< HEAD
    <section className="w-full bg-white py-[72px]">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
=======
    <section className="w-full bg-white pt-[72px]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
>>>>>>> origin/main
        {/* Header Section */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          {/* Heading M */}
          <h2 className="font-poppins text-[32px] sm:text-[38px] lg:text-[44px] font-semibold leading-[120%] tracking-[-0.44px] text-[#040819]">
            Discover Your Passion, <br className="hidden sm:inline" /> Build Your Skills
          </h2>

          {/* Gap between header and subtitle: 18px */}
          <div className="h-[18px]" />

          {/* Body L */}
          <p className="font-satoshi text-[16px] sm:text-[18px] font-normal leading-[160%] text-[#82868E]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pills & Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-[980px] mx-auto">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`flex items-center justify-center rounded-[24px] px-4 py-3 font-satoshi text-[16px] font-medium leading-[120%] transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#D4FB20] text-[#242528]'
                    : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EAEAEA]'
                }`}
              >
                {category}
              </button>
            );
          })}

          {/* + More Button */}
          <button
            type="button"
            className="flex items-center justify-center px-4 py-3 font-satoshi text-[16px] font-medium leading-[120%] text-[#003BE2] hover:underline cursor-pointer"
          >
            + More
          </button>
        </div>

        {/* Course Cards Responsive Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              author={course.author}
              rating={course.rating}
              lessons={course.lessons}
              duration={course.duration}
              comments={course.comments}
              level={course.level}
              price={course.price}
              billingPeriod={course.billingPeriod}
              studentAvatars={course.studentAvatars}
              studentCount={course.studentCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}