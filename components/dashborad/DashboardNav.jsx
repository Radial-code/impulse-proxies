import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  DashboardTweeter,
  HeaderCrossIcons,
  RewardGift,
  ToggleIcon,
  WhiteDiscord,
} from "../common/Icons";
import Image from "next/image";
import DeshboardMobileNav from "./DeshboardMobileNav";
const DashboardNav = () => {
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);
  const [isToggleIconVisible, setIsToggleIconVisible] = useState(true);
  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow-y-hidden");
      setIsToggleIconVisible(false);
    } else {
      document.body.classList.remove("overflow-y-hidden");
      setIsToggleIconVisible(true);
    }
  }, [activeNavOverlay]);
  return (
    <>
      <DeshboardMobileNav
        activeNavOverlay={activeNavOverlay}
        add
        setActiveNavOverlay={setActiveNavOverlay}
      />
      <nav className="dark-blue lg:py-6 sm:py-5 py-4 flex-grow-0">
        <div className="container lg:max-w-[1320px] mx-auto lg:px-3 px-8">
          <div className="flex-1 flex items-center justify-between  lg:items-center xl:mr-3">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center justify-between">
                <Link
                  href="/"
                  className="text-white text-xl font-semibold flex items-center relative z-[100]"
                >
                  <Image
                    height={62}
                    width={65}
                    src="/assets/images/svg/FooterLogo.svg"
                    alt="about image"
                    className="sm:w-[67px] sm:h-[67px] w-[40px] h-[40px]"
                  />
                  <div className="ms-3">
                    <p className="mb-0 text-[17px] text-white font-bold lh_normal font-Montserrat tracking-[3.3px]">
                      IMPULSE
                    </p>
                    <p className="text-[14px] text-cyan-green font-Montserrat font-medium lh_normal mb-0 tracking-[2.55px]">
                      PROXIES
                    </p>
                  </div>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="flex lg:gap-9 items-center">
                  {/* </Link> */}
                  <Link
                    href="#"
                    className="text-[#5E5E80] active:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full relative after:bg-white overflow-hidden after:start-[50%] active:after:start-0 after:bottom-0"
                  >
                    Residential
                  </Link>
                  <Link
                    href="#"
                    className="text-[#5E5E80] active:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full relative after:bg-white overflow-hidden after:start-[50%] active:after:start-0 after:bottom-0"
                  >
                    ISP & Datacenter
                  </Link>
                  <Link
                    href="#"
                    className="text-[#5E5E80] active:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full relative after:bg-white overflow-hidden after:start-[50%] active:after:start-0 after:bottom-0 flex items-center gap-2"
                  >
                    <span className="mb-1">
                      <RewardGift />
                    </span>
                    Rewards
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex items-center">
                <Link href="https://discord.com/" target="blank">
                  <WhiteDiscord />
                </Link>
                <Link
                  href="https://twitter.com/"
                  target="blank"
                  className="ms-5 hover:translate-y-[-5px] transition-all ease-in-out duration-200"
                >
                  <DashboardTweeter />
                </Link>
                <div className="bg-[#1D1D42] py-4 pe-5 ps-9 rounded-[10px] flex items-center justify-between ms-6">
                  <p className="text-md text-[#626296] font-Montserrat font-semibold lh_normal tracking-[-0.28px] mb-0">
                    Welcome Back
                    <span className="text-white block">Jack#1983</span>
                  </p>
                  <div className="rounded-full bg-white h-[37px] w-[37px] ms-7"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:hidden ">
              <div className="relative z-[200]">
                {isToggleIconVisible && (
                  <button
                    onClick={() => setActiveNavOverlay(true)}
                    type="button"
                    className="w-[46px] inline-flex items-center justify-center rounded-md "
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <HeaderCrossIcons />
                  </button>
                )}
                {!isToggleIconVisible && (
                  <button
                    className="w-[30px] sm:me-3 sm:translate-x-[157%]"
                    onClick={() => setActiveNavOverlay(false)}
                  >
                    <ToggleIcon />
                  </button>
                )}
              </div>
              <div className="bg-[#202046] hidden h-[65px] w-[65px] rounded-[10px] sm:flex items-center justify-center ms-4">
                <div className="rounded-full bg-white h-[37px] w-[37px]"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
