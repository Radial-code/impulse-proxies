import Header from "@/components/common/Header";
import Current from "@/components/Current";
import Hero from "@/components/Hero";
import ImpulseAbout from "@/components/ImpulseAbout";
import ImpulseFAQ from "@/components/ImpulseFAQ";
import ImpulseFooter from "@/components/ImpulseFooter";
import OurProxies from "@/components/OurProxies";
import WhyToChooseUs from "@/components/WhyToChooseUs";
export default function Home() {
  return (
        < >
        <div className = "overflow-hidden" >
      <Header />
      <Hero />
      < Current/>
      <WhyToChooseUs/>
      <OurProxies/>
      {/* <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative"></div> */}
      <ImpulseAbout />
      <ImpulseFAQ />
      <ImpulseFooter />
        
      </div>
    </>
  );
}
