import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { HeaderCrossIcons, ToggleIcon } from "./common/Icons";
import Image from "next/image";

const Header = () => {
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
      <nav className="bg-[#040426] lg:py-6 py-5 border-b-[1px] border-[#222F4A] flex-grow-0">
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
          <div className="flex-1 flex items-center justify-between  lg:items-center xl:mr-3">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center justify-between">
                <Link
                  href="/"
                  className="text-white text-xl font-semibold flex items-center"
                >
                  <Image
                    height={67}
                    width={67}
                    src="/assets/images/svg/FooterLogo.svg"
                    alt="about image"
                  />
                  <div className="ms-3">
                    <p className="mb-0 text-3xl text-white font-bold lh_normal font-Montserrat tracking-[3.3px]">
                      IMPULSE
                    </p>
                    <p className="text-xl text-[#22EDCF] font-Montserrat font-medium lh_normal mb-0 tracking-[2.55px]">
                      PROXIES
                    </p>
                  </div>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="flex lg:gap-9 items-center">
                  <div className="relative group inline-block text-left">
                    {/* Dropdown button */}
                    <button className="text-white font-semibold tracking-[-0.38px] flex items-center leading-[150%] font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200">
                      Products
                      <Image
                        width={15}
                        height={10}
                        className="ms-2"
                        src="/assets/images/svg/productArrow.svg"
                      />
                    </button>

                    {/* Dropdown menu */}
                    <div className="top-[20px] py-3 overflow-hidden absolute right-0 mt-2 w-28 bg-[#040426] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out border-[1px] border-white">
                      <ul>
                        {/* Dropdown menu items */}
                        <li>
                          <Link
                            href="#"
                            className="block hover:opacity-70 transition-all ease-in-out duration-200 px-4 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl"
                          >
                            Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block px-4 text-white font-semibold tracking-[-0.38px] my-4 leading-[150%] font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                          >
                            Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block px-4 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                          >
                            Item 3
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* </Link> */}
                  <Link
                    href="#"
                    className="text-white font-semibold tracking-[-0.38px]  font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="#"
                    className="text-white font-semibold tracking-[-0.38px]  font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="text-white font-semibold tracking-[-0.38px]  font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                  >
                    Pricing
                  </Link>
                </div>
              </div>

              <div className="hidden lg:flex items-center">
                <button className="text-white font-Montserrat w-[197px] text-2xl font-bold border-cyan-green border-[2px] rounded-full bg-[#163A4F] py-4 px-16 flex items-center justify-center hover:bg-transparent transition-all h-[55px]">
                  Dashboard
                </button>
              </div>
            </div>
            <div className="flex items-center lg:hidden relative z-[200] sm:me-0 me-4">
              <div className="border_gradient h-[27px] mx-6 lg:mx-3"></div>
              {isToggleIconVisible && (
                <button
                  onClick={() => setActiveNavOverlay(true)}
                  type="button"
                  className="w-[30px] inline-flex items-center justify-center rounded-md"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <HeaderCrossIcons />
                </button>
              )}
              {!isToggleIconVisible && (
                <button
                  className="w-[30px]"
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
