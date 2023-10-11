import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { HeaderCrossIcons, ToggleIcon } from "./common/Icons";
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Image from "next/image";
import DropDown from "./DropDown";
const Header  = ()  =>  {
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
      <MobileNav
        activeNavOverlay={activeNavOverlay}
        add
        setActiveNavOverlay={setActiveNavOverlay}
      />
      <nav className="bg-[#040426] xl:py-9 md:py-[14px]  border-b-[1px] border-[#222F4A] flex-grow-0">
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
          <div className="flex-1 flex items-center justify-between  lg:items-center xl:mr-3">
            <div className="flex-1 flex items-center lg:justify-between justify-center">
              <div className="flex-shrink-0 flex items-center justify-between relative z-[200] md:py-0 py-[14px]">
                <Link
                  href="/"
                  className="text-white text-xl font-semibold flex items-center "
                >
                  <Image
                    height={66}
                    width={53}
                    src="/assets/images/svg/FooterLogo.svg"
                    alt="herologo"
                    className="xl:w-[53px] xl:h-[66px] md:w-[45px] md:h-[55px] w-[30px] h-[37px]"
                  />
                  <div className="ms-3">
                    <p className="mb-0 lg:text-[18px] sm:text-[15px] text-[10px] text-white font-bold lh_normal font-Montserrat lg:tracking-[3.3px] tracking-[2.178px]">
                      IMPULSE
                    </p>
                    <p className="lg:text-[14px] sm:text-[12px] text-[8px] text-cyan-green font-Montserrat font-medium lh_normal mb-0 tracking-[1.683px] lg:tracking-[2.55px]">
                      PROXIES
                    </p>
                  </div>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="flex lg:gap-9 items-center">
                  <div className="relative   inline-block text-left">
                    {/* Dropdown button */}
                    <DropDown/>
                  </div>
                  {/* </Link> */}
                  <Link
                    href="#AboutUs"
                    className="text-white font-semibold leading-normal font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#Faqs"
                    className="text-white font-semibold leading-normal font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                  >
                    FAQ’s
                  </Link>
                  <Link
                    href="#proxies"
                    className="text-white font-semibold leading-normal font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex items-center">
                <Link
                  href="/dashboard"
                  className="text-white font-Montserrat w-[197px] text-2xl font-semibold border-cyan-green border-[2px] rounded-full bg-[#163A4F] py-4 px-16 flex items-center justify-center hover:bg-transparent transition-all h-[55px]"
                >
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="flex items-center lg:hidden relative z-[200] sm:me-0 ">
              <div className="border_gradient h-[27px] mx-6 lg:mx-3"></div>
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
                  className="w-[30px] me-4"
                  onClick={() => setActiveNavOverlay(false)}
                >
                  <ToggleIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
