import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/MEDFITS.png";
import arrow from "../assets/images/arrow.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`${
          isScrolled ? "sticky top-0 z-50 bg-white w-full p-4 sticky-header" : ""
        } ${isMenuOpen ? "nav-open" : ""}`}
      >
        <header
          className={`${
            isScrolled
              ? "nav-header"
              : "w-full z-[102] left-0 nav-header header-wrap p-4"
          }`}
        >
          <div className="w-[88%] mx-auto md:max-w-[1300px]">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="w-[20%]">
                <Link to={"/"}><img src={logo} alt="Logo" /></Link>
              </div>

              {/* Navigation Links */}
              <div className="xl:block lg:hidden md:hidden max-sm:hidden">
                <ul className="flex items-center">
                  <Link to="/">
                    <li
                      className={`ml-3 text-[16px] font-semibold ${
                        location.pathname === "/"
                          ? "text-blue-600 font-bold" // Active link styling
                          : "text-[#727272]"
                      }`}
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/pricing">
                    <li
                      className={`ml-3 text-[16px] font-semibold ${
                        location.pathname === "/pricing"
                          ? "text-blue-600 font-bold"
                          : "text-[#727272]"
                      }`}
                    >
                      Pricing
                    </li>
                  </Link>
                  <Link to="/service">
                    <li
                      className={`ml-5 text-[16px] font-semibold ${
                        location.pathname === "/service"
                          ? "text-blue-600 font-bold"
                          : "text-[#727272]"
                      }`}
                    >
                      Service
                    </li>
                  </Link>
                  <Link to="/transformation">
                    <li
                      className={`ml-5 text-[16px] font-semibold ${
                        location.pathname === "/transformation"
                          ? "text-blue-600 font-bold"
                          : "text-[#727272]"
                      }`}
                    >
                      Transformation
                    </li>
                  </Link>
                  <Link to="/blog">
                    <li
                      className={`ml-5 text-[16px] font-semibold ${
                        location.pathname === "/blog"
                          ? "text-blue-600 font-bold"
                          : "text-[#727272]"
                      }`}
                    >
                      Blogs
                    </li>
                  </Link>
                </ul>
              </div>

              {/* Contact Buttons */}
              <div className="right-side-btn xl:block lg:flex md:flex lg:justify-between md:justify-between md:items-center lg:items-center max-sm:block w-[40%]">
                <div className="flex justify-evenly items-center">
                  <Link
                    to="/contact-us"
                    className="text-blue-600 text-[16px] px-5 py-2 font-mulish rounded-[8px] font-medium bg-white border border-blue-600 flex items-center signup-btn hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out w-fit"
                  >
                    Contact us
                    <span>
                      <img src={arrow} alt="" className="ml-3" />
                    </span>
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-blue-600 text-[16px] px-5 py-2 font-mulish rounded-[8px] font-medium bg-white border border-blue-600 flex items-center signup-btn hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out w-fit"
                  >
                    Get Free Consultation
                    <span>
                      <img src={arrow} alt="" className="ml-3" />
                    </span>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="xl:hidden lg:block max-sm:block max-md:block lg:ml-[20px] md:ml-[20px]">
                  <button
                    className="hamburger--btn relative z-[101] self-end sm:self-center"
                    onClick={handleHamburgerClick}
                  >
                    <span className="border-0 w-[24px] h-[18px] bg-transparent flex relative z-[199] m-0 cursor-pointer before:absolute before:content-[''] before:w-[100%] before:h-[3px] before:rounded-[100px] before:left-0 before:bg-black after:absolute after:content-[''] after:w-[100%] after:h-[3px] after:rounded-[100px] after:left-0 after:bg-black before:bottom-0 after:top-0 after:mt-0">
                      <span className="w-[100%] h-[3px] bg-black rounded-[100px] visible mb-0 mt-[-2px] opacity-[1] absolute left-0 top-[50%] translate-y-[25%]"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`right-side-slider transition-transform duration-300 ease-in-out fixed top-0 right-0 bottom-0 bg-white text-black flex items-center justify-center ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-[16px] text-[#BFC0C1] leading-[13px] list-none flex justify-between m-0 px-0 flex-col w-full xl:flex-row xl:w-[unset]">
          <li
            className={`group text-[15px] leading-[24px] border-b border-gray-200 flex items-start px-6 py-4 cursor-pointer ${
              location.pathname === "/" ? "text-blue-600 font-bold" : "text-gray-800"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`group text-[15px] leading-[24px] border-b border-gray-200 flex items-start px-6 py-4 cursor-pointer ${
              location.pathname === "/service" ? "text-blue-600 font-bold" : "text-gray-800"
            }`}
          >
            <Link to="/service">Service</Link>
          </li>
          <li
            className={`group text-[15px] leading-[24px] border-b border-gray-200 flex items-start px-6 py-4 cursor-pointer ${
              location.pathname === "/transformation" ? "text-blue-600 font-bold" : "text-gray-800"
            }`}
          >
            <Link to="/transformation">Transformation</Link>
          </li>
          <li
            className={`group text-[15px] leading-[24px] border-b border-gray-200 flex items-start px-6 py-4 cursor-pointer ${
              location.pathname === "/blog" ? "text-blue-600 font-bold" : "text-gray-800"
            }`}
          >
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
