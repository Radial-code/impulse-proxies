import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropDown from "./DropDown";
const MobileNav = ({ activeNavOverlay, setActiveNavOverlay }) => {
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
        className={`fixed px-4 items-center justify-center lg:hidden bg-[#040426] lg:z-[-1] top-0 h-full flex flex-col pb-4 pt-24 transition-all duration-200 ease-in z-[100] w-full sm:max-w-[100%] ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col gap-9 xl:gap-5 justify-center items-center w-full">
          <div className="relative group inline-block text-left w-full">
            {/* Dropdown button */}

            <DropDown />
          </div>
          {/* </Link> */}
          <Link
            aria-label="AboutUs"
            onClick={() => setActiveNavOverlay(false)}
            href="#AboutUs"
            className="text-white font-semibold tracking-[-0.38px]  font-Montserrat sm:text-[3vw] text-[4vw] hover:opacity-70 transition-all ease-in-out duration-200"
          >
            About Us
          </Link>
          <Link
            aria-label="Faqs"
            href="#Faqs"
            onClick={() => setActiveNavOverlay(false)}
            className="text-white font-semibold tracking-[-0.38px]  font-Montserrat sm:text-[3vw] text-[4vw] hover:opacity-70 transition-all ease-in-out duration-200"
          >
            FAQ’s
          </Link>
          <Link
            aria-label="proxies"
            href="#proxies"
            onClick={() => setActiveNavOverlay(false)}
            className="text-white font-semibold tracking-[-0.38px]  font-Montserrat sm:text-[3vw] text-[4vw] hover:opacity-70 transition-all ease-in-out duration-200"
          >
            Purchase
          </Link>
          <Link
            aria-label="dashboard"
            href="/dashboard"
            className="text-white font-Montserrat max-w-[330px] w-full sm:w-[210px]  sm:text-[3vw] text-[4vw] font-bold border-cyan-green border-[2px] rounded-full bg-[#163A4F] py-4 px-16 flex items-center justify-center hover:bg-transparent transition-all h-[55px]"
          >
            Dashboard
          </Link>
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

export default MobileNav;
