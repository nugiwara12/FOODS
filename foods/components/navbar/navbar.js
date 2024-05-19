"use client";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const serviceMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServiceMenu = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      serviceMenuRef.current &&
      !serviceMenuRef.current.contains(event.target)
    ) {
      setIsServiceMenuOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setIsServiceMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setIsServiceMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="py-4 w-full bg-transparent z-50 font-tight">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-4">
        <div className="text-white text-3xl font-bold">
          <a href="/">
            <img src="/logo.png" alt="logo" className="h-16 w-full max-w-xs" />
          </a>
        </div>
        <div
          className={`lg:flex flex-grow items-center justify-center ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="flex items-center font-normal">
            <a
              href="/"
              className="text-base font-semibold px-4 cursor-pointer hover:font-bold hover:text-sky-800 text-black transition-colors duration-300"
            >
              Home
            </a>
            <div className="relative" ref={serviceMenuRef}>
              <a
                onClick={toggleServiceMenu}
                className="text-base font-semibold px-4 cursor-pointer hover:font-bold hover:text-sky-800 text-black transition-colors duration-300 flex items-center"
              >
                Service
                <svg
                  className={`ml-1 h-5 w-5 transition-transform duration-300 ${
                    isServiceMenuOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              {isServiceMenuOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20">
                  <a
                    href="https://easethetics.kr/features/easethetics/"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-800 font-semibold hover:bg-sky-500 hover:text-white"
                  >
                    Easethetics
                  </a>
                  <a
                    href="https://easethetics.kr/features/easelife/"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-800 font-semibold hover:bg-sky-500 hover:text-white"
                  >
                    Easelife
                  </a>
                  <a
                    href="https://easethetics.kr/features/easemart/"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-800 font-semibold hover:bg-sky-500 hover:text-white"
                  >
                    Easemart
                  </a>
                </div>
              )}
            </div>
            <a
              href="/about"
              className="text-base font-semibold px-4 cursor-pointer hover:font-bold hover:text-sky-800 text-black transition-colors duration-300"
            >
              About
            </a>
          </div>
        </div>
        <div className="lg:flex justify-end text-end hidden">
          <a
            href="/contact"
            className="text-sm text-white font-normal px-6 py-2 rounded bg-sky-500 hover:bg-sky-400 cursor-pointer transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
        <div
          className={`flex lg:hidden items-center ${
            isMobileMenuOpen ? "hidden" : ""
          }`}
        >
          <button className="text-sky-400 px-4 py-2" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 z-50 w-full h-screen bg-sky-100 flex flex-col justify-center items-center">
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col gap-5 items-center">
              <a
                href="/"
                className="px-4 text-sky-700 hover:bg-sky-400 hover:text-white p-4 w-full font-normal text-center transition-colors duration-300"
              >
                Home
              </a>
              <div className="relative w-full text-center" ref={serviceMenuRef}>
                <a
                  onClick={toggleServiceMenu}
                  className="px-4 text-sky-700 hover:bg-sky-400 hover:text-white p-4 w-full font-normal text-center transition-colors duration-300 cursor-pointer flex justify-center items-center"
                >
                  Service
                  <svg
                    className={`ml-1 h-5 w-5 transition-transform duration-300 ${
                      isServiceMenuOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </a>
                {isServiceMenuOpen && (
                  <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20 font-tight">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 font-semibold hover:bg-sky-500 hover:text-white"
                    >
                      Easethetics
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 font-semibold hover:bg-sky-500 hover:text-white"
                    >
                      Easelife
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 font-semibold hover:bg-sky-500 hover:text-white"
                    >
                      Easemart
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/about"
                className="px-4 text-sky-700 hover:bg-sky-400 hover:text-white p-4 w-full font-normal text-center transition-colors duration-200"
              >
                About
              </a>
            </div>
            <a
              href="/contact"
              className="px-6 py-2 text-white bg-sky-400 hover:bg-sky-300 rounded cursor-pointer transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
