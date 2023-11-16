import Image from "next/image";
import { useState } from "react";
const SelectCountries = () => {
  const arry = [
    {
      title: "Asia",
      country: [
        "India",
        "China",
        "Indonesia",
        "Pakistan",
        "Bangladesh",
        "Japan",
        "Philippines",
        "Vietnam",
        "Iran",
        "Turkey",
        "Thailand",
        "Myanmar",
        "South Korea",
        "Iraq",
        "Afghanistan",
        "Saudi Arabia",
      ],
    },
    {
      title: "Europe",
      country: [
        "Russia",
        "Germany",
        "United Kingdom",
        "France",
        "Italy",
        "Spain",
        "Poland",
        "Ukraine",
        "Romania",
        "Netherlands",
        "Belgium",
        "Sweden",
        "Czech Republic (Czechia)",
        "Greece",
        "Portugal",
        "Hungary",
      ],
    },
    {
      title: "United States",
      country: [
        "Spain",
        "Poland",
        "Ukraine",
        "Romania",
        "Netherlands",
        "Belgium",
        "Sweden",
        "Czech Republic (Czechia)",
        "Greece",
        "Portugal",
        "Hungary",
      ],
    },
  ];
  const [selectedRegion, setSelectedRegion] = useState("Asia");
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };
  return (
    <div>
      <div className="relative">
        <select
          className="w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3  focus-visible:outline-none appearance-none"
          name=""
          id=""
          onChange={handleRegionChange}
        >
          <option value="">Select Region</option>
          {arry.map((obj, index) => (
            <option
              className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
              key={index}
              value={obj.title}
            >
              {obj.title}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
          <Image
            src="/assets/images/webp/Polygon.webp"
            alt="down arrow icon"
            height={13}
            width={13}
            loading="lazy"
          />
        </div>
      </div>

      {/* SELECTED REGION COUNTRIES */}
      {selectedRegion && (
        <div>
          <h2 className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat mt-5">
            {/* {selectedRegion} */}
            Countries
          </h2>

          <div className="relative">
            <select
              className="w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3  focus-visible:outline-none appearance-none"
              name=""
              id=""
            >
              {arry
                .find((obj) => obj.title === selectedRegion)
                .country.map((country, index) => (
                  <option
                    className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                    key={index}
                  >
                    {country}
                  </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
              <Image
                src="/assets/images/webp/Polygon.webp"
                alt="down arrow icon"
                height={13}
                width={13}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SelectCountries;
