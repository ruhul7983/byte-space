import BrandLogo from "./_sections/BrandLogo";
import CommunityFeedback from "./_sections/CommunityFeedback";
import CourseCategories from "./_sections/CourseCategories";
import CoursesSection from "./_sections/CoursesSection";
import Hero from "./_sections/Hero";
import JoinUs from "./_sections/JoinUs";
import PlatformGrowthSection from "./_sections/PlatformGrowthSection";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BrandLogo/>
      <CoursesSection/>
      <PlatformGrowthSection/>
      <CourseCategories/>
      <JoinUs/>
      <CommunityFeedback/>
    </div>
  );
}
