import Hero from "@/components/homepage/Hero";
import BrandStory from "@/components/homepage/BrandStory";
import TopShelfPicks from "@/components/homepage/TopShelfPicks";
import NewReleasePlaceholder from "@/components/homepage/NewReleasePlaceholder";
import GrabTheDeal from "@/components/homepage/GrabTheDeal";
import IngredientPhilosophy from "@/components/homepage/IngredientPhilosophy";
import BrandMotto from "@/components/homepage/BrandMotto";
import Testimonials from "@/components/homepage/Testimonials";
import PressAwards from "@/components/homepage/PressAwards";
import FounderStory from "@/components/homepage/FounderStory";
import BlogHighlights from "@/components/homepage/BlogHighlights";
import AuthorizedRetailers from "@/components/homepage/AuthorizedRetailers";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <BrandStory />
      <TopShelfPicks />
      <NewReleasePlaceholder />
      <GrabTheDeal />
      <IngredientPhilosophy />
      <BrandMotto />
      <Testimonials />
      <PressAwards />
      <FounderStory />
      <BlogHighlights />
      <AuthorizedRetailers />
    </div>
  );
}
