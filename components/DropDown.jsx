
import { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["ISP Proxies", "Datacenter Proxies", "Residential Proxies"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="flex justify-center lg:inline-block lg:justify-start">
      <button
        onClick={toggleDropdown}
        className="text-white font-semibold flex items-center leading-[150%] font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200 "
      >
        {selectedOption || "Products"}
        <svg
          className=" ms-1 mb-1"
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
        <ul className="absolute z-10 w-60 mt-10 lg:mt-2 py-2 bg-[#040426] rounded-lg shadow-lg border-white border ">
          {options.map((option) => (
            <li
              key={option}
              //   onClick={() => selectOption(option)}
              className="block hover:opacity-70 cursor-pointer transition-all ease-in-out duration-200 px-4 my-3 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
