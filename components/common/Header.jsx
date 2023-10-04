import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Don't forget to import useState
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#040426] pt-10 pb-9 border-b-[1px] border-[#222F4A]">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
          <div className="flex items-center justify-between">
            {/* Use Next.js Link for client-side navigation */}
            <Link
              href="/"
              className="text-white text-xl font-semibold flex items-center"
            >
              <Image
                height={67}
                width={67}
                src="/assets/images/svg/FooterLogo.svg"
                alt="about image"
              />
              <div className="ms-3">
                <p className="mb-0 text-3xl text-white font-bold lh_normal font-Montserrat tracking-[3.3px]">
                  IMPULSE
                </p>
                <p className="text-xl text-[#22EDCF] font-Montserrat font-medium lh_normal mb-0 tracking-[2.55px]">
                  PROXIES
                </p>
              </div>
            </Link>

            {/* Hamburger menu for mobile */}
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-white p-2 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden lg:flex gap-12 items-center">
              {/* <Link
                href="#"
                className="text-white font-semibold tracking-[-0.38px] leading-[384%] font-Montserrat text-2xl"
              >
                Products
              </Link> */}
              <div className="relative group inline-block text-left">
                {/* Dropdown button */}
                <button className="text-white font-semibold tracking-[-0.38px] flex items-center leading-[150%] font-Montserrat text-2xl">
                  Products{" "}
                  <Image
                    width={15}
                    height={10}
                    className="ms-2"
                    src="/assets/images/svg/productArrow.svg"
                  />
                </button>

                {/* Dropdown menu */}
                <div className="top-[17px] py-3 overflow-hidden absolute right-0 mt-2 w-28 bg-[#040426] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out">
                  <ul>
                    {/* Dropdown menu items */}
                    <li>
                      <Link
                        href="#"
                        className="block px-4 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl"
                      >
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 text-white font-semibold tracking-[-0.38px] my-4 leading-[150%] font-Montserrat text-2xl"
                      >
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl"
                      >
                        Item 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="#"
                className="text-white font-semibold tracking-[-0.38px] leading-[384%] font-Montserrat text-2xl"
              >
                FAQ
              </Link>
              <Link
                href="#"
                className="text-white font-semibold tracking-[-0.38px] leading-[384%] font-Montserrat text-2xl"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-white font-semibold tracking-[-0.38px] leading-[384%] font-Montserrat text-2xl"
              >
                Pricing
              </Link>
            </div>
            <button className="text-white font-Montserrat text-2xl font-bold border-[#50EED7] border-[2px] rounded-full bg-[#163A4F] py-4 px-16">
              Dashboard
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Use Next.js Link for client-side navigation */}
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
