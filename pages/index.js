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
      <ImpulseAbout />
      {/* <ImpulseFAQ /> */}
      <ImpulseFooter />
    </>
  );
}
