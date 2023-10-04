import Image from "next/image";
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed right-6 flex items-center justify-center bottom-6 p-2 bg-[#16FDEC] text-white rounded-full z-50 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <Image
        width={25}
        height={25}
        className=" rotate-[-90deg]"
        src="/assets/images/svg/TopBtn.svg"
      />
    </button>
  );
};

export default BackToTopButton;
