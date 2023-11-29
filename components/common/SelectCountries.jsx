import Image from "next/image";

const SelectCountries = ({
  selectedContinent = "Africa",
  onContinentChange,
  selectedCountry = "Algeria",
  onCountryChange,
}) => {
  const arry = [
    {
      title: "Africa",
      country: [
        "Algeria",
        "Angola",
        "Benin",
        "Botswana",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "Comoros",
        "Democratic Republic of the Congo",
        "Republic of the Congo",
        "Djibouti",
        "Egypt",
        "Equatorial Guinea",
        "Eritrea",
        "Eswatini",
        "Ethiopia",
        "Gabon",
        "Gambia",
        "Ghana",
        "Guinea",
        "Guinea-Bissau",
        "Ivory Coast",
        "Kenya",
        "Lesotho",
        "Liberia",
        "Libya",
        "Madagascar",
        "Malawi",
        "Mali",
        "Mauritania",
        "Mauritius",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Niger",
        "Nigeria",
        "Rwanda",
        "Sao Tome and Principe",
        "Senegal",
        "Seychelles",
        "Sierra Leone",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Sudan",
        "Tanzania",
        "Togo",
        "Tunisia",
        "Uganda",
        "Zambia",
        "Zimbabwe",
      ],
    },
    {
      title: "Antarctica",
      country: ["No countries"],
    },
    {
      title: "Asia",
      country: [
        "Afghanistan",
        "Armenia",
        "Azerbaijan",
        "Bahrain",
        "Bangladesh",
        "Bhutan",
        "Brunei",
        "Cambodia",
        "China",
        "Cyprus",
        "Georgia",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Israel",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Lebanon",
        "Malaysia",
        "Maldives",
        "Mongolia",
        "Myanmar",
        "Nepal",
        "North Korea",
        "Oman",
        "Pakistan",
        "Palestine",
        "Philippines",
        "Qatar",
        "Saudi Arabia",
        "Singapore",
        "South Korea",
        "Sri Lanka",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Thailand",
        "Timor-Leste",
        "Turkey",
        "Turkmenistan",
        "United Arab Emirates",
        "Uzbekistan",
        "Vietnam",
        "Yemen",
      ],
    },
    {
      title: "Europe",
      country: [
        "Albania",
        "Andorra",
        "Austria",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "Netherlands",
        "North Macedonia",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Ukraine",
        "United Kingdom",
        "Vatican City",
      ],
    },
    {
      title: "North America",
      country: [
        "Antigua and Barbuda",
        "Bahamas",
        "Barbados",
        "Belize",
        "Canada",
        "Costa Rica",
        "Cuba",
        "Dominica",
        "Dominican Republic",
        "El Salvador",
        "Grenada",
        "Guatemala",
        "Haiti",
        "Honduras",
        "Jamaica",
        "Mexico",
        "Nicaragua",
        "Panama",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Trinidad and Tobago",
        "United States",
      ],
    },
    {
      title: "South America",
      country: [
        "Argentina",
        "Bolivia",
        "Brazil",
        "Chile",
        "Colombia",
        "Ecuador",
        "Guyana",
        "Paraguay",
        "Peru",
        "Suriname",
        "Uruguay",
        "Venezuela",
      ],
    },
    {
      title: "Australia",
      country: [
        "Australia",
        "Fiji",
        "Kiribati",
        "Marshall Islands",
        "Micronesia",
        "Nauru",
        "New Zealand",
        "Palau",
        "Papua New Guinea",
        "Samoa",
        "Solomon Islands",
        "Tonga",
        "Tuvalu",
        "Vanuatu",
      ],
    },
  ];

  return (
    <div>
      <div className="relative">
        <select
          className="w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3  focus-visible:outline-none appearance-none text-white"
          name=""
          id=""
          value={selectedContinent}
          onChange={(event) => onContinentChange(event.target.value)}
        >
          {/* <option value="">Select Region</option> */}
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
      {selectedContinent && (
        <div>
          <h2 className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat mt-5">
            {/* {selectedContinent} */}
            Countries
          </h2>

          <div className="relative">
<<<<<<< HEAD
            <select className="w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3  focus-visible:outline-none appearance-none text-white">
=======
            <select
              className="w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3  focus-visible:outline-none appearance-none"
              value={selectedCountry}
              onChange={(event) => onCountryChange(event.target.value)}
            >
>>>>>>> 79c36a4b9794a2538ee008dd11fc966b9f33eea4
              {arry
                .find((obj) => obj.title === selectedContinent)
                .country.map((country, index) => (
                  <option
                    className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                    key={index}
                    value={country}
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
