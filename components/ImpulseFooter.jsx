import React from "react";
import Link from "next/link";
import { footerImpluse } from "./common/Helper";
import { FooterDiscord, ImpulseTweeter } from "./common/Icons";
import Image from "next/image";
const ImpulseFooter = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div className=" bg-[#141436] sm:pb-5 pb-[31px] lg:pb-[52px]">
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 lg:pt-[51px] sm:pt-[26px] pt-6">
          <div className="flex justify-between flex-wrap sm:pb-7 md:pb-6 lg:pb-11 pb-2">
            <div className="md:w-4/12 sm:w-6/12 w-full">
              <div className="flex items-center lg:mb-4 mb-3">
                <Image
                  loading="lazy"
                  height={67}
                  width={67}
                  src="/assets/images/webp/FooterLogo.webp"
                  alt="aboutimage"
                  className="sm:w-[67px] sm:h-[67px] w-[47px] h-[47px]"
                />
                <div className=" ms-3">
                  <p className="mb-0 sm:text-3xl text-[16px] text-white font-bold lh_normal font-Montserrat tracking-[3.3px]">
                    IMPULSE
                  </p>
                  <p className="sm:text-xl text-[12px] text-[#22EDCF] font-Montserrat font-medium lh_normal mb-0 tracking-[2.55px]">
                    PROXIES
                  </p>
                </div>
              </div>
              <p className=" text-[#9898A3] text-md font-bold font-Montserrat opacity-70 lg:max-w-[338px] lg:leading-[192%]">
                All product and company names are trademarks™ or registered
                trademarks® of their respective holders. Their usage does not
                imply any affiliation with or endorsement by their holders
              </p>
            </div>
            <div className="md:w-8/12 w-full lg:pt-0 pt-4">
              <div className="flex flex-wrap">
                {footerImpluse.map((obj, i) => {
                  return (
                    <div
                      className=" w-full lg:w-3/12 sm:w-4/12 flex justify-between md:justify-center"
                      key={i}
                    >
                      <ul>
                        <li className={`sm:pt-0 ${obj.padding}`}>
                          <p className=" inline-block mb-2 text-white font-Montserrat lg:text-xl text-[15px] font-semibold lh_normal">
                            {obj.heading}
                          </p>
                        </li>
                        <li>
                          <Link
                            aria-label="ISPproxies"
                            href={obj.link1}
                            className="impulse-footer-li lh_normal"
                          >
                            {obj.option1}
                          </Link>
                        </li>
                        <li>
                          <Link
                            aria-label="ResidentialProxies"
                            href={obj.link2}
                            className="impulse-footer-li lh_normal inline-block"
                          >
                            {obj.option2}
                          </Link>
                        </li>
                        <li>
                          <Link
                            aria-label="DatacenterProxies"
                            href={obj.link3}
                            className="impulse-footer-li lh_normal inline-block"
                          >
                            {obj.option3}
                          </Link>
                        </li>
                        <li>
                          <Link
                            aria-label="Home"
                            href="#"
                            className="impulse-footer-li lh_normal inline-block "
                          >
                            {obj.option4}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" flex items-center sm:flex-row flex-col justify-between">
            <p className="text-[#8888B1] font-Montserrat text-center text-sm font-semibold lh_normal">
              © Landsgesell & Graca Costa Solutions GbR {year}, All Rights
              Reserved
            </p>
            <div className=" flex items-center sm:justify-normal justify-center gap-4 sm:me-20 sm:mt-0 mt-4 xl:me-0">
              <Link
                href="https://twitter.com/"
                target="blank"
                aria-label="twitter"
              >
                <ImpulseTweeter />
              </Link>
              <Link
                href="https://discord.com/"
                aria-label="discord"
                target="blank"
                className="hover:translate-y-[-5px] transition-all duration-300 ease-in-out"
              >
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
