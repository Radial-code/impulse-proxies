import React from "react";
import Link from "next/link";
// import footerLogo from "../assets/impulseImg/FooterLogo.svg";
import { FooterImpluse } from "./common/Helper";
import { FooterDiscord, ImpulseTweeter } from "./common/Icons";
const ImpulseFooter = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div className=" bg-[#141436] pb-11">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 pt-14">
          <div className="flex flex-wrap mt-1 pb-7">
            <div className="lg:w-4/12 sm:w-6/12 w-full">
              <div className="flex items-center mb-5">
                {/* <img src={footerLogo} alt="footerLogo" height={67} width={67} /> */}
                <div className=" ms-3">
                  <p className="mb-0 text-3xl text-white font-bold lh_normal font-Montserrat tracking-[3.3px]">
                    IMPULSE
                  </p>
                  <p className="text-xl text-[#22EDCF] font-Montserrat font-medium lh_normal mb-0 tracking-[2.55px]">
                    PROXIES
                  </p>
                </div>
              </div>
              <p className=" text-white text-md font-medium font-Montserrat opacity-70 lg:max-w-[290px] leading-[192%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor
              </p>
            </div>
            <div className="lg:w-8/12 w-full lg:pt-0 pt-4">
              <div className="flex flex-wrap">
                {FooterImpluse.map((footer) => {
                  return (
                    <div
                      className="lg:w-3/12 sm:w-4/12 w-full flex lg:justify-center"
                      key={footer.id}
                    >
                      <ul>
                        <li className={`sm:pt-0 ${footer.padding}`}>
                          <p className=" inline-block text-white font-Montserrat text-xl font-semibold lh_normal">
                            {footer.heading}
                          </p>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className=" text-[#8888B1] font-Montserrat text-xl font-medium lh_normal pt-2"
                          >
                            {footer.option1}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className=" inline-block text-[#8888B1] font-Montserrat text-xl font-medium lh_normal pt-2"
                          >
                            {footer.option2}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className=" inline-block text-[#8888B1] font-Montserrat text-xl font-medium lh_normal pt-2"
                          >
                            {footer.option3}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="inline-block text-[#8888B1] font-Montserrat text-xl font-medium lh_normal pt-2"
                          >
                            {footer.option4}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <p className="text-[#8888B1] font-Montserrat text-sm font-semibold lh_normal">
              © Landsgesell & Graca Costa Solutions GbR {year}, All Rights
              Reserved
            </p>
            <div className=" flex items-center gap-4">
              <Link href="https://twitter.com/">
                <ImpulseTweeter />
              </Link>
              <Link href="https://discord.com/">
                <FooterDiscord />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImpulseFooter;
