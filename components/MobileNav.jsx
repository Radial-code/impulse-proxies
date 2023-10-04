import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        className={`fixed ps-4 items-start lg:hidden bg-[#204056] top-0 h-full flex flex-col pb-4 pt-24 transition-all duration-200 ease-in z-[100] w-full sm:max-w-[50%] ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col gap-4 xl:gap-5 items-start">
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
            <div className="top-[17px] py-3 overflow-hidden absolute right-0 mt-2 w-28 bg-[#040426] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out">
              <ul>
                {/* Dropdown menu items */}
                <li>
                  <Link
                    onClick={() => setActiveNavOverlay(false)}
                    href="#"
                    className="block hover:opacity-70 transition-all ease-in-out duration-200 px-4 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl"
                  >
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setActiveNavOverlay(false)}
                    href="#"
                    className="block px-4 text-white font-semibold tracking-[-0.38px] my-4 leading-[150%] font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                  >
                    Item 2
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setActiveNavOverlay(false)}
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
            onClick={() => setActiveNavOverlay(false)}
            href="#"
            className="text-white font-semibold tracking-[-0.38px]  font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
          >
            FAQ
          </Link>
          <Link
            href="#"
            onClick={() => setActiveNavOverlay(false)}
            className="text-white font-semibold tracking-[-0.38px]  font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
          >
            About Us
          </Link>
          <Link
            href="#"
            onClick={() => setActiveNavOverlay(false)}
            className="text-white font-semibold tracking-[-0.38px]  font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
          >
            Pricing
          </Link>
          <button className="text-white font-Montserrat w-[197px] text-2xl font-bold border-[#50EED7] border-[2px] rounded-full bg-[#163A4F] py-4 px-16 flex items-center justify-center hover:bg-transparent transition-all h-[55px]">
            Dashboard
          </button>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#00000047] lg:bg-transparent backdrop-sepia-[12px z-10 ${
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
