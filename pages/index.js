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
import DashboardNav from "@/components/dashborad/DashboardNav";
import { DashbarFooter } from "@/components/dashborad/DashbarFooter";
import Dashboard1 from "@/components/dashborad/Dashboard1";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <BackToTopButton />
        <Preloader />
        <PageMataTag />
        <Hero />
        <Current />
        <WhyToChooseUs />
        <OurProxies />
        <ImpulseAbout />
        <ImpulseFAQ />
        <ImpulseFooter />
        {/* <DashboardNav />
        <DashbarFooter /> */}
        {/* <Dashboard1 /> */}
      </div>
    </>
  );
}
