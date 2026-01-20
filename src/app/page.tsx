import LuxuryHero from "@/components/homepage/LuxuryHero";
import BrandStory from "@/components/homepage/BrandStory";
import TopShelfPicksLuxury from "@/components/homepage/TopShelfPicksLuxury";
import NewReleasePlaceholder from "@/components/homepage/NewReleasePlaceholder";
import GrabTheDealsPlaceholder from "@/components/homepage/GrabTheDealsPlaceholder";
import IngredientPhilosophy from "@/components/homepage/IngredientPhilosophy";
import BrandMotto from "@/components/homepage/BrandMotto";
import LuxuryTestimonials from "@/components/homepage/LuxuryTestimonials";
import PressAwards from "@/components/homepage/PressAwards";
import FounderStory from "@/components/homepage/FounderStory";
import BlogHighlights from "@/components/homepage/BlogHighlights";
import AuthorizedRetailers from "@/components/homepage/AuthorizedRetailers";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <LuxuryHero />
      <BrandStory />
      <TopShelfPicksLuxury />
      <NewReleasePlaceholder />
      <GrabTheDealsPlaceholder />
      <IngredientPhilosophy />
      <BrandMotto />
      <LuxuryTestimonials />
      <PressAwards />
      <FounderStory />
      <BlogHighlights />
      <AuthorizedRetailers />
    </div>
  );
}
