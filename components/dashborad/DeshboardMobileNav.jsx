import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { DashboardTweeter, RewardGift, WhiteDiscord } from "../common/Icons";
const DeshboardMobileNav = ({ activeNavOverlay, setActiveNavOverlay }) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023.98px)");
    function handleScreenSizeChange(event) {
      if (event.matches) {
        if (activeNavOverlay) {
          document.body.classList.add("overflow-y-hidden");
        } else {
          document.body.classList.remove("overflow-y-hidden");
        }
      } else {
        document.body.classList.remove("overflow-y-hidden");
      }
    }
    // Attach the event listener and run it once to check the initial screen size
    mediaQuery.addListener(handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);
    // Cleanup the event listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleScreenSizeChange);
    };
  }, [activeNavOverlay]);
  const [open, setOpen] = useState();
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div
        className={`fixed ps-4 items-start lg:hidden bg-[#040426] lg:z-[-1] top-0 h-full flex flex-col pb-4 pt-24 transition-all duration-200 ease-in z-[100] w-full sm:max-w-[100%] ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <div className="2xl:w-full 2xl:px-24 xl:px-12 lg:px-8 px-6 mx-auto">
          <div className="flex flex-col gap-9 xl:gap-5 lg:items-start items-center w-full">
            {/* box */}
            <div
              className="bg-[#1D1D42] max-w-[327px] w-full py-4 sm:mt-16 mt-8 px-4 rounded-[10px] flex items-center justify-between"
              onClick={() => setActiveNavOverlay(false)}
            >
              <p className="text-md text-[#626296] font-Montserrat font-semibold lh_normal tracking-[-0.28px] mb-0">
                Welcome Back
                <span className="text-white block">Jack#1983</span>
              </p>
              <div className="rounded-full bg-white h-[37px] w-[37px] ms-7"></div>
            </div>
            {/* </Link> */}
            <Link
              href="#"
              className="text-[#5E5E80] active:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full relative after:bg-white overflow-hidden after:start-[50%] active:after:start-0 after:bottom-0"
              onClick={() => setActiveNavOverlay(false)}
            >
              Residential
            </Link>
            <Link
              href="#"
              className="text-[#5E5E80] active:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full relative after:bg-white overflow-hidden after:start-[50%] active:after:start-0 after:bottom-0"
              onClick={() => setActiveNavOverlay(false)}
            >
              ISP & Datacenter
            </Link>
            <Link
              href="#"
              className="text-[#5E5E80] active:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full relative after:bg-white overflow-hidden after:start-[50%] active:after:start-0 after:bottom-0 flex items-center gap-2"
              onClick={() => setActiveNavOverlay(false)}
            >
              <span className="mb-1">
                <RewardGift />
              </span>
              Rewards
            </Link>
            <div className="flex items-center">
              <Link href="https://discord.com/">
                <WhiteDiscord />
              </Link>
              <Link
                href="https://twitter.com/"
                className="ms-5 hover:translate-y-[-5px] transition-all ease-in-out duration-200"
              >
                <DashboardTweeter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute lg:hidden top-0 left-0 w-full h-full bg-[#000000a6] lg:bg-transparent backdrop-sepia-[12px z-50 ${
          activeNavOverlay
            ? "pointer-events-auto opacity-1"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setActiveNavOverlay(false)}
      ></div>
    </>
  );
};

export default DeshboardMobileNav;
