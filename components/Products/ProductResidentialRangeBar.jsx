import React, { useState, useEffect } from "react";

const ProductResidentialRangeBar = () => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateRangeStyle(newValue);
  };

  const updateRangeStyle = (newValue) => {
    const percentage = (newValue / 50) * 100; // Update the max value to 50
    const rangeInput = document.querySelector(".range-input-2");

    if (rangeInput) {
      rangeInput.style.background = `linear-gradient(to right, #4FDCC7 0%, #4FDCC7 ${percentage}%, #3c3c6b ${percentage}%, #206E63 100%)`;
    }
  };

  useEffect(() => {
    // Set initial styling when the component mounts
    updateRangeStyle(value);
  }, [value]);

  const handleNumberChange = (e) => {
    let newValue = parseInt(e.target.value, 10);
    // Ensure newValue is within the range [1, 50]
    newValue = Math.min(Math.max(1, newValue), 50);
    setValue(newValue);
    updateRangeStyle(newValue);

    // Update the custom range input value
    const rangeInput = document.querySelector(".range-input-2");
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
    width: `${(value / 50) * 100}%`, // Update the max value to 50
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
                    width: `calc(${(Math.min(value, 50) / 50) * 100}% - 4px)`, // Update the max value to 50
                    display: `${value < 2 ? `none` : ``}`,
                  }}
                ></div>

                <input
                  type="range"
                  min="1" // Update the min value to 1
                  max="50" // Update the max value to 50
                  value={value}
                  onChange={handleRangeChange}
                  className="custom-range w-full range-input-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-3 pt-2 flex justify-between items-center">
          <p className="text-sm font-Montserrat font-medium text-white mb-0">
            {value} GB
          </p>
          <input
            className="amount-range-value-box"
            type="number"
            value={value}
            onChange={handleNumberChange}
            placeholder={value}
          />
        </div>
      </div>
    </>
  );
};

export default ProductResidentialRangeBar;
