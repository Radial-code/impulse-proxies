import React, { useState, useEffect } from "react";

const ProductsRangbar = () => {
  const [value, setValue] = useState(10);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateRangeStyle(newValue);
  };

  const updateRangeStyle = (newValue) => {
    const percentage = (newValue / 512) * 100;
    const rangeInput = document.querySelector(".range-input-2");

    if (rangeInput) {
      rangeInput.style.background = `linear-gradient(to right, #4FDCC7 0%, #4FDCC7 ${percentage}%, #3c3c6b ${percentage}%, #206E63 100%)`;
    }
  };

  useEffect(() => {
    // Set initial styling when the component mounts
    updateRangeStyle(value);
  }, [value]);

  const progressStyle = {
    width: `${(value / 512) * 100}%`,
  };

  return (
    <>
      <div className="progress" style={progressStyle}></div>
      <div className="range sm:mt-3">
        <div className="flex items-start mt-3 justify-between">
          <div className="flex justify-between items-start w-full">
            <div className="mb-0 w-full">
              <div>
                <div
                  className="flex relative justify-center items-center hidden h-[20px] w-full mx-auto rounded"
                  style={{
                    width: `calc(${(Math.min(value, 512) / 512) * 100}% - 4px)`,
                    display: `${value < 2 ? `none` : ``}`,
                  }}
                ></div>

                <input
                  type="range"
                  min="10"
                  max="512"
                  value={value}
                  onChange={handleChange}
                  className="custom-range w-full range-input-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-3 pt-2 flex justify-between items-center">
          <p className="text-sm font-Montserrat font-medium text-white mb-0">
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
