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
export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <BackToTopButton />
        <Preloader />
        {/* <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 relative"></div> */}
       
        <PageMataTag/>
        <Hero />
        <Current />
        <WhyToChooseUs />
        <OurProxies />
        <ImpulseAbout />
        <ImpulseFAQ />
        <ImpulseFooter />
      </div>
    </>
  );
}
