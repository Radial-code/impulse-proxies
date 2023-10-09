import Current from "@/components/Current";
import Hero from "@/components/Hero";
import ImpulseAbout from "@/components/ImpulseAbout";
import ImpulseFAQ from "@/components/ImpulseFAQ";
import ImpulseFooter from "@/components/ImpulseFooter";
import OurProxies from "@/components/OurProxies";
import WhyToChooseUs from "@/components/WhyToChooseUs";
import BackToTopButton from "@/components/common/BackToTopButton ";
import Preloader from "@/components/common/Preloader";
import PageMataTag from "@/components/PageMataTag";
import Faqs from "@/components/Faqs";
import Dashboard1 from "@/components/dashborad/Dashboard1";
import Dashboard3 from "@/components/dashborad/Dashboard3";
import DashboardThree from "@/components/dashborad/DashboardThree";
import Dashboard5 from "@/components/dashborad/Dashboard5";
export default function Home() {
  return (
    <>
      <PageMataTag />
      <div className="overflow-hidden">
        <BackToTopButton />
        <Preloader />
        <Hero />
        <Current />
        <WhyToChooseUs />
        <OurProxies />
        <ImpulseAbout />
        <Faqs />
        <ImpulseFooter />
      </div>
    </>
  );
}
