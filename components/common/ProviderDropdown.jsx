import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const ProviderDropdown = () => {
  const providersData = [
    {
      provider: "Telecom",
      regions: ["Germany", "United Kingdom", "Netherlands"],
    },
    { provider: "Virgin Media", regions: ["United Kingdom"] },
    { provider: "GTT", regions: ["United Kingdom"] },
    { provider: "COLT", regions: ["United Kingdom"] },
    { provider: "Vodafone", regions: ["Netherlands"] },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = (provider) => {
    setOpenDropdown(openDropdown === provider ? null : provider);
  };

  const handleSelect = (value, provider) => {
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [provider]: value,
    }));
    setOpenDropdown(null); // Close the dropdown after selecting an option
  };

  return (
    <>
      <div className="flex justify-between sm:flex-row flex-col items-center gap-5 pt-6 relative z-70">
        <div className="sm:w-3/6 w-full">
          <p className="text-[10px] font-Montserrat font-semibold text-white mb-0">
            PROVIDER
          </p>
        </div>
        <div className="sm:w-3/6 w-full relative">
          <p className="text-white text-[10px] font-Montserrat font-semibold leading-normal mb-0">
            REGION
          </p>
        </div>
      </div>

      {providersData.map(({ provider, regions }) => (
        <div
          key={provider}
          className="flex justify-between sm:flex-row flex-col items-center gap-5 relative z-70"
        >
          {/* Left side field for each provider */}
          <div className="sm:w-3/6 w-full">
            <div className="w-full border-2 cursor-pointer border-white rounded-[10000px] sm:mt-[10px] mt-2 px-5 py-2">
              <p className="text-[14px] font-Montserrat font-semibold text-white">
                {provider}
              </p>
            </div>
          </div>

          {/* Right side dropdown for each provider */}
          <div className="sm:w-3/6 w-full relative">
            <div
              className={`w-full border-2 cursor-pointer border-white rounded-[10000px] sm:mt-[10px] mt-2 px-5 py-2 ${
                openDropdown === provider ? "bg-[#133147]" : ""
              }`}
              onClick={() => toggleDropdown(provider)}
            >
              <div className="flex justify-between items-center">
                <p
                  className={`text-[14px] font-Montserrat font-semibold text-white mb-0 ${
                    openDropdown === provider ? "text-[#50EED7]" : ""
                  }`}
                >
                  {selectedOptions[provider] ||
                    (regions.length > 0 ? regions[0] : "Select Region")}
                </p>
                <Image
                  src="/assets/images/webp/down-arrow.webp"
                  alt="down arrow icon"
                  height={13}
                  width={13}
                />
              </div>
              {openDropdown === provider && (
                <div className="absolute start-0 z-50 bg-[#252550] border-white border-2 mt-2 w-full rounded-[10px] p-1">
                  {regions.map((region) => (
                    <p
                      key={region}
                      className="text-[14px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent hover:border-white rounded-[10px] text-center py-1 px-4 cursor-pointer transition-all duration-200 ease-in-out"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent the click from propagating to the outer div
                        handleSelect(region, provider);
                      }}
                    >
                      {region}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProviderDropdown;
