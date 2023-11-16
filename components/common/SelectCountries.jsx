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
      <select name="" id="" onChange={handleRegionChange}>
        <option value="">Select Region</option>
        {arry.map((obj, index) => (
          <option key={index} value={obj.title}>
            {obj.title}
          </option>
        ))}
      </select>
      {/* Selected region countries */}
      {selectedRegion && (
        <div>
          <h2>{selectedRegion} Countries</h2>
          <select name="" id="">
            {arry
              .find((obj) => obj.title === selectedRegion)
              .country.map((country, index) => (
                <option key={index}>{country}</option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};
export default SelectCountries;
