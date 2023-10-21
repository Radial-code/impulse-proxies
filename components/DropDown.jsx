import React, { useState, useRef, useEffect } from "react";
import { useGlobalInfoProvider } from "./common/Provider";
import Link from "next/link";
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { heading: "ISP Proxies", state: "ISP" },
    { heading: "Datacenter Proxies", state: "DC" },
    { heading: "Residential Proxies", state: "Residential" },
  ];
  const dropdownRef = useRef(null);
  const { activeTab, setActiveTab } = useGlobalInfoProvider();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleOptionClick = (value) => {
    // If the dropdown is open, select the option and close it
    setActiveTab(value);
    if (isOpen) {
      setSelectedOption();
      closeDropdown();
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white font-semibold flex items-center leading-[150%] font-Montserrat md:text-[3vw] text-[4vw] lg:text-2xl mx-auto relative hover:opacity-70 transition-all ease-in-out duration-200"
      >
        {selectedOption || "Products"}
        <svg
          className="ms-1 mb-1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M13 8.5L8 13.5L3 8.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          ref={dropdownRef}
          className="absolute left-[37%] left_30 z-20 w-60 mt-2 py-2 bg-[#040426] rounded-lg shadow-lg border-white border"
        >
          {options.map((option, i) => (
            <Link href="/product" key={i}>
              <li
                id={i++}
                onClick={() => handleOptionClick(option.state)}
                className="block hover:opacity-70 cursor-pointer transition-all ease-in-out duration-200 px-4 my-3 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl"
                // Disable the option when selected
                // disabled={option === selectedOption}
              >
                {option.heading}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
