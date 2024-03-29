import React, { useEffect, useState } from "react";
import Link from "next/link";

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
    mediaQuery.addListener(handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);
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
        className={`mobile-nav-overlay md:pt-[7.5rem] ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col text-white gap-9 xl:gap-5 items-center w-full">
          <Link
            aria-label="AboutUs"
            onClick={() => setActiveNavOverlay(false)}
            href="#AboutUs"
            className="mobile-nav-li"
          >
            About Us
          </Link>
          <Link
            aria-label="Faqs"
            href="#Faqs"
            onClick={() => setActiveNavOverlay(false)}
            className="mobile-nav-li "
          >
            FAQ
          </Link>
          <Link
            aria-label="proxies"
            href="#proxies"
            onClick={() => setActiveNavOverlay(false)}
            className="mobile-nav-li "
          >
            Our Proxies
          </Link>
          <Link
            aria-label="dashboard"
            href="/dashboard-data-usage?type=residential"
            className="mobile-nav-dashboard-button"
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
