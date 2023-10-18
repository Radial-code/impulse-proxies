import React from "react";
import { useState } from "react";
const ProductsRangbar = () => {
const [minRange, setMinRange] = useState(22);
const [maxRange, setMaxRange] = useState(100);
const gap = 10;
const handleInputChange = (e) => {
  const targetClassName = e.target.className;

  if (maxRange - minRange < gap) {
    if (targetClassName === "range-min") {
      setMinRange(maxRange - gap);
    } else {
      setMaxRange(minRange + gap);
    }
  }
};
const handleMinRangeChange = (e) => {
  setMinRange(parseInt(e.target.value));
};

const handleMaxRangeChange = (e) => {
  setMaxRange(parseInt(e.target.value));
};
 const [value, setValue] = useState(500);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    // Calculate the percentage value
    const percentage = (newValue / 1000) * 100;
    // Apply the dynamic background color to the range input
    const rangeInput = document.querySelector(".range-input-2");
    if (rangeInput) {
      rangeInput.style.background = `linear-gradient(to right, #4FDCC7 0%, #4FDCC7 ${percentage}%, #206E63 ${percentage}%, #206E63 100%)`;
    }
  };
const progressStyle = {
  left: `${(minRange / 100) * 100}%`,
  right: `${100 - (maxRange / 100) * 100}%`,
}
  return (
    <>
            <div className="progress" style={progressStyle}></div>
      <div className=" range sm:mt-3 ">
        <div className="flex items-start mt-3 justify-between">
          <div className="flex justify-between items-start w-full">
            <div className="mb-0 w-full">
              <div>
                <div
                  className="fle x relative justify-center items-center hidden h-[20px] w-full mx-auto rounded"
                  style={{
                    width: ` ${
                      value > 500
                        ? `calc(${value}% - 4px)`
                        : `calc(${value}% + 3px)`
                    }`,
                    display: ` ${value < 2 ? `none` : ``}`,
                  }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={value}
                  onChange={handleChange}
                  className="custom-range w-full range-input-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-3 pt-2 flex justify-between items-center">
          <p className=" text-sm font-Montserrat font-medium text-white mb-0">
            {value} Proxies
          </p>
          <button className="bg-[#252550] text-white rounded-xl sm:w-[164px] w-[120px] text-start px-[18px] font-Montserrat font-medium text-[13px] py-[10px]">
            {value}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsRangbar;
