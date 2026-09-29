import BrandLogo from "./_sections/BrandLogo";
import CoursesSection from "./_sections/CoursesSection";
import Hero from "./_sections/Hero";
import PlatformGrowthSection from "./_sections/PlatformGrowthSection";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BrandLogo/>
      <CoursesSection/>
      <PlatformGrowthSection/>
    </div>
  );
}
