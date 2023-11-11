import React, { useState, useEffect } from "react";

const DashboardRangeBar = ({ identifier }) => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateRangeStyle(newValue);
  };
  const updateRangeStyle = (newValue) => {
    const percentage = (newValue / 50000) * 100;
    const rangeInput = document.querySelector(`.range-input-${identifier}`);

    if (rangeInput) {
      rangeInput.style.background = `linear-gradient(to right, #4FDCC7 0%, #4FDCC7 ${percentage}%, #3c3c6b ${percentage}%, #3c3c6b 100%)`;
    }
  };

  useEffect(() => {
    // Set initial styling when the component mounts
    updateRangeStyle(value);
  }, [value, identifier]);

  const handleNumberChange = (e) => {
    let newValue = parseInt(e.target.value, 10);
    // Ensure newValue is within the range [1, 50000]
    newValue = Math.min(Math.max(1, newValue), 50000);
    setValue(newValue);
    updateRangeStyle(newValue);

    // Update the custom range input value
    const rangeInput = document.querySelector(".range-input");
    if (rangeInput) {
      rangeInput.value = newValue;
    }
  };

  const handleRangeChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    updateRangeStyle(newValue);
  };

  const progressStyle = {
    width: `${(value / 50000) * 100}%`, // Update the max value to 50000
  };

  return (
    <>
      <div className="progress" style={progressStyle}></div>
      <div className="range">
        <div className="flex items-start justify-between">
          <div className="flex justify-between items-start w-full lg:flex-col xl:flex-row">
            <div className="mb-0 w-full">
              {/* <div> */}
              <div
                className="relative justify-center items-center hidden h-[20px] w-full mx-auto rounded"
                style={{
                  width: `calc(${
                    (Math.min(value, 50000) / 50000) * 100
                  }% - 4px)`, // Update the max value to 50000
                  display: `${value < 2 ? `none` : ``}`,
                }}
              ></div>
              <input
                type="range"
                min="1" // Update the min value to 1
                max="50000" // Update the max value to 50000
                value={value}
                onChange={handleRangeChange}
                // className="custom-range w-full range-input"
                className={`custom-range w-full range-input-${identifier}`}
              />
              {/* </div> */}
            </div>

            <input
              className="amount-range-value-box ms-8 lg:ms-0 xl:ms-8 lg:w-full xl:max-w-[124px] lg:mt-3 xl:mt-0"
              type="number"
              value={value}
              onChange={handleNumberChange}
              placeholder={value}
            />
          </div>
        </div>
        <p className="text-sm font-Montserrat font-medium text-white mb-0 mt-2 sm:mt-3">
          {value} Proxies
        </p>
      </div>
    </>
  );
};

export default DashboardRangeBar;
