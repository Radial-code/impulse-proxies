// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Hero from "@/components/Hero";
import ImpulseAbout from "@/components/ImpulseAbout";
import ImpulseFAQ from "@/components/ImpulseFAQ";
import ImpulseFooter from "@/components/ImpulseFooter";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative"></div> */}
      <ImpulseAbout />
      <ImpulseFAQ />
      <ImpulseFooter />
    </>
  );
}
