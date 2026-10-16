import { ContactSection } from "@/components/home/sections/ContactSection";
import { ExpertiseSection } from "@/components/home/sections/ExpertiseSection";
import { FaqSection } from "@/components/home/sections/FaqSection";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { OfficeSection } from "@/components/home/sections/OfficeSection";
import { ApproachSection } from "@/components/home/sections/ApproachSection";
import { ReassuranceSection } from "@/components/home/sections/ReassuranceSection";
import { SpecialtiesSection } from "@/components/home/sections/SpecialtiesSection";
import { StorySection } from "@/components/home/sections/StorySection";
import { StoryBridgeSection } from "@/components/home/sections/StoryBridgeSection";
import { WelcomeSection } from "@/components/home/sections/WelcomeSection";
import { WhoWeHelpSection } from "@/components/home/sections/WhoWeHelpSection";
import { SiteFooter } from "@/layout/components/SiteFooter";
import { SiteHeader } from "@/layout/components/SiteHeader";
import { ResetFragmentOnLoad } from "@/layout/components/ResetFragmentOnLoad";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <ResetFragmentOnLoad />
      <main id="main-content">
        <HeroSection />
        <WelcomeSection />
        <WhoWeHelpSection />
        <ReassuranceSection />
        <ExpertiseSection />
        <ApproachSection />
        <StoryBridgeSection />
        <StorySection />
        <SpecialtiesSection />
        <ContactSection />
        <OfficeSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
