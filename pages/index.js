import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import ImpulseAbout from "@/components/ImpulseAbout";
import ImpulseFAQ from "@/components/ImpulseFAQ";
import ImpulseFooter from "@/components/ImpulseFooter";
import WhyToChooseUs from "@/components/WhyToChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyToChooseUs/>
      {/* <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative"></div> */}
      <ImpulseAbout />
      <ImpulseFAQ />
      <ImpulseFooter />
    </>
  );
}
