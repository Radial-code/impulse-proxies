import Image from "next/image";
import React, { useState } from "react";
import SelectCountries from "../common/SelectCountries";

const CommonDashboardDropdown = ({proxyData, onProxyDataChange}) => {

  // I
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("United States");
  // II
  const [isLoadBalancerDropdownOpen, setIsLoadBalancerDropdownOpen] = useState(false);
  const [selectedLoadBalancer, setSelectedLoadBalancer] = useState("Load Balancer");
  // III
  const [isContinentDropdownOpen, setIsContinentDropdownOpen] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("Continent");
  // IV
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Country");
  // V
  const [isRotationDropdownOpen, setIsRotationDropdownOpen] = useState(false);
  const [selectedRotation, setSelectedRotation] = useState("Rotation Frequency");

  // const toggleDropdown = (dropdownState, setDropdownState) => {
  //   setDropdownState(!dropdownState);
  // };

  const handleSelect = (item, setDropdownState, setSelectedItem) => {
    setSelectedItem(item);
    setDropdownState(false);
  };

  const closeAllDropdowns = () => {
    setIsRegionDropdownOpen(false);
    setIsLoadBalancerDropdownOpen(false);
    setIsContinentDropdownOpen(false);
    setIsCountryDropdownOpen(false);
    setIsRotationDropdownOpen(false);
  };

  const toggleDropdown = (dropdownState, setDropdownState) => {
    if (!dropdownState) {
      closeAllDropdowns(); // Close all dropdowns before opening the clicked one
    }
    setDropdownState(!dropdownState);
  };

  const onContinentChange = (data) => {
    onProxyDataChange('continent', data)
    console.log(data, "continent")
  }

  const onCountryChange = (data) => {
    onProxyDataChange('country', data)
    console.log(data, "country")
  }
  
  return (
    <>
      <div className="ps-8 pe-12">
        {/* I REGION MENU */}
        <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat">
          Region
        </p>
        <div className="w-full relative">
          <div
            className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3 ${
              isRegionDropdownOpen ? "bg-[#212148]" : ""
            }`}
            onClick={() =>
              toggleDropdown(isRegionDropdownOpen, setIsRegionDropdownOpen)
            }
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-Montserrat text-white text-[14px] font-medium mb-0 leading-normal ${
                  isRegionDropdownOpen ? "text-[#fff]" : ""
                }`}
              >
                {proxyData?.region}
              </p>
              <Image
                src="/assets/images/webp/Polygon.webp"
                alt="down arrow icon"
                height={13}
                width={13}
                loading="lazy"
              />
            </div>
            {isRegionDropdownOpen && (
              <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px] py-4">
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  // onClick={() =>
                  //   handleSelect(
                  //     "USA",
                  //     setIsRegionDropdownOpen,
                  //     setSelectedRegion
                  //   )
                  // }
                  onClick={()=>{
                    onProxyDataChange('region', "USA")
                  }}
                >
                  USA
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={()=>{
                   onProxyDataChange('region', "Russia")
                  }}
                  // onClick={() =>
                  //   handleSelect(
                  //     "Russia",
                  //     setIsRegionDropdownOpen,
                  //     setSelectedRegion
                  //   )
                  // }
                >
                  Russia
                </p>
              </div>
            )}
          </div>
        </div>
        {/* II LOAD BALANCER MENU */}
        <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat mt-3">
          Load Balancer
        </p>
        <div className="w-full relative">
          <div
            className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3 ${
              isLoadBalancerDropdownOpen ? "bg-[#212148]" : ""
            }`}
            onClick={() =>
              toggleDropdown(
                isLoadBalancerDropdownOpen,
                setIsLoadBalancerDropdownOpen
              )
            }
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-Montserrat text-white text-[14px] font-medium mb-0 leading-normal ${
                  isLoadBalancerDropdownOpen ? "text-[#fff]" : ""
                }`}
              >
               {proxyData?.loadBalancer}
              </p>
              <Image
                src="/assets/images/webp/Polygon.webp"
                alt="down arrow icon"
                height={13}
                width={13}
                loading="lazy"
              />
            </div>
            {isLoadBalancerDropdownOpen && (
              <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px] py-4">
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    // handleSelect(
                    //   "Asia",
                    //   setIsLoadBalancerDropdownOpen,
                    //   setSelectedLoadBalancer
                    // )
                    onProxyDataChange('loadBalancer', "Asia")
                  }
                >
                  Asia
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    // handleSelect(
                    //   "Europe",
                    //   setIsLoadBalancerDropdownOpen,
                    //   setSelectedLoadBalancer
                    // )
                    onProxyDataChange('loadBalancer', "Europe")
                  }
                >
                  Europe
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    // handleSelect(
                    //   "United States",
                    //   setIsLoadBalancerDropdownOpen,
                    //   setSelectedLoadBalancer
                    // )
                    onProxyDataChange('loadBalancer', "United States")
                  }
                >
                  United States
                </p>
              </div>
            )}
          </div>
        </div>
        {/* III CONTINENT MENU */}
        {/* <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat mt-5">
          Continent
        </p>
        <div className="w-full relative">
          <div
            className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3 ${
              isContinentDropdownOpen ? "bg-[#212148]" : ""
            }`}
            onClick={() =>
              toggleDropdown(
                isContinentDropdownOpen,
                setIsContinentDropdownOpen
              )
            }
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-Montserrat text-white text-[14px] font-medium mb-0 leading-normal ${
                  isContinentDropdownOpen ? "text-[#fff]" : ""
                }`}
              >
                {selectedContinent}
              </p>
              <Image
                src="/assets/images/webp/Polygon.webp"
                alt="down arrow icon"
                height={13}
                width={13}
                loading="lazy"
              />
            </div>
            {isContinentDropdownOpen && (
              <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px] py-4">
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "Africa",
                      setIsContinentDropdownOpen,
                      setSelectedContinent
                    )
                  }
                >
                  Africa
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "Asia",
                      setIsContinentDropdownOpen,
                      setSelectedContinent
                    )
                  }
                >
                  Asia
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "Europe",
                      setIsContinentDropdownOpen,
                      setSelectedContinent
                    )
                  }
                >
                  Europe
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "North America",
                      setIsContinentDropdownOpen,
                      setSelectedContinent
                    )
                  }
                >
                  North America
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "Oceania",
                      setIsContinentDropdownOpen,
                      setSelectedContinent
                    )
                  }
                >
                  Oceania
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "South America",
                      setIsContinentDropdownOpen,
                      setSelectedContinent
                    )
                  }
                >
                  South America
                </p>
              </div>
            )}
          </div>
        </div> */}
        {/* IV COUNTRY MENU */}
        {/* <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat mt-5">
          Country
        </p>
        <div className="w-full relative">
          <div
            className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3 ${
              isCountryDropdownOpen ? "bg-[#212148]" : ""
            }`}
            onClick={() =>
              toggleDropdown(isCountryDropdownOpen, setIsCountryDropdownOpen)
            }
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-Montserrat text-white text-[14px] font-medium mb-0 leading-normal ${
                  isCountryDropdownOpen ? "text-[#fff]" : ""
                }`}
              >
                {selectedCountry}
              </p>
              <Image
                src="/assets/images/webp/Polygon.webp"
                alt="down arrow icon"
                height={13}
                width={13}
                loading="lazy"
              />
            </div>
            {isCountryDropdownOpen && (
              <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px] py-4">
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "America",
                      setIsCountryDropdownOpen,
                      setSelectedCountry
                    )
                  }
                >
                  America
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "China",
                      setIsCountryDropdownOpen,
                      setSelectedCountry
                    )
                  }
                >
                  China
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "England",
                      setIsCountryDropdownOpen,
                      setSelectedCountry
                    )
                  }
                >
                  England
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "France",
                      setIsCountryDropdownOpen,
                      setSelectedCountry
                    )
                  }
                >
                  France
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "New Zealand",
                      setIsCountryDropdownOpen,
                      setSelectedCountry
                    )
                  }
                >
                  New Zealand
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    handleSelect(
                      "India",
                      setIsCountryDropdownOpen,
                      setSelectedCountry
                    )
                  }
                >
                  India
                </p>
              </div>
            )}
          </div>
        </div> */}

        {/* ========== */}
        <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat mt-5">
          Continent
          {/* & Countries */}
        </p>
        <SelectCountries selectedContinent={proxyData?.continent} onContinentChange={onContinentChange} selectedCountry={proxyData?.country} onCountryChange={onCountryChange} />
        {/* ========== */}

        {/* V ROTATION MENU */}
        <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat mt-5">
          Rotation Frequency
        </p>
        <div className="w-full relative">
          <div
            className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3 ${
              isRotationDropdownOpen ? "bg-[#212148]" : ""
            }`}
            onClick={() =>
              toggleDropdown(isRotationDropdownOpen, setIsRotationDropdownOpen)
            }
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-Montserrat text-white text-[14px] font-medium mb-0 leading-normal ${
                  isRotationDropdownOpen ? "text-[#fff]" : ""
                }`}
              >
                  {proxyData?.rotationFrequency}
              </p>
              <Image
                src="/assets/images/webp/Polygon.webp"
                alt="down arrow icon"
                height={13}
                width={13}
                loading="lazy"
              />
            </div>
            {isRotationDropdownOpen && (
              <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px] py-4">
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    // handleSelect(
                    //   "5 minutes",
                    //   setIsRotationDropdownOpen,
                    //   setSelectedRotation
                    // )
                    onProxyDataChange('rotationFrequency', "5 minutes")
                  }
                >
                  5 minutes
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    // handleSelect(
                    //   "15 minutes",
                    //   setIsRotationDropdownOpen,
                    //   setSelectedRotation
                    // )
                    onProxyDataChange('rotationFrequency', "15 minutes")
                  }
                >
                  15 minutes
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    // handleSelect(
                    //   "30 minutes",
                    //   setIsRotationDropdownOpen,
                    //   setSelectedRotation
                    // )
                    onProxyDataChange('rotationFrequency', "30 minutes")
                  }
                >
                  30 minutes
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    // handleSelect(
                    //   "60 minutes",
                    //   setIsRotationDropdownOpen,
                    //   setSelectedRotation
                    // )
                    onProxyDataChange('rotationFrequency', "60 minutes")
                  }
                >
                  60 minutes
                </p>
                <p
                  className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                  onClick={() =>
                    // handleSelect(
                    //   "90 minutes",
                    //   setIsRotationDropdownOpen,
                    //   setSelectedRotation
                    // )
                    onProxyDataChange('rotationFrequency', "90 minutes")
                  }
                >
                  90 minutes
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonDashboardDropdown;
