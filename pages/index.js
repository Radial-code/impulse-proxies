import Hero from "@/components/Hero";
import ImpulseAbout from "@/components/ImpulseAbout";
import ImpulseFooter from "@/components/ImpulseFooter";
import OurProxies from "@/components/OurProxies";
import BackToTopButton from "@/components/common/BackToTopButton ";
import Preloader from "@/components/common/Preloader";
import PageMataTag from "@/components/PageMataTag";
import Faqs from "@/components/Faqs";
import Choose from "@/components/Choose";
export default function Home() {
  return (
    <>
      {/* <PageMataTag /> */}
      <div className="overflow-hidden">
        {/* <BackToTopButton /> */}
        {/* <Preloader /> */}
        {/* <Hero /> */}
        <Choose />
        {/* <OurProxies /> */}
        {/* <ImpulseAbout /> */}
        {/* <Faqs /> */}
        {/* <ImpulseFooter /> */}
      </div>
    </>
  );
}
