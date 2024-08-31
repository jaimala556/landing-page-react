import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import GetStartBtn from "./GetStartBtn";
import CompanyLogo from "../assests/images/companylogo.png";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={CompanyLogo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Company
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <GetStartBtn />
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 dark:text-white rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to="/">
              {" "}
              <li className="block py-2 px-3 md:p-0 text-gray-900 hover:text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Home
              </li>
            </Link>
            <Link to="/service">
              <li className="block py-2 px-3 md:p-0 text-gray-900 hover:text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Services
              </li>
            </Link>
            <Link to="/price">
              <li className="block py-2 px-3 md:p-0 text-gray-900 hover:text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Price
              </li>
            </Link>
            <Link to="/team">
              <li className="block py-2 px-3 md:p-0 text-gray-900 hover:text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Our Team
              </li>
            </Link>
            <Link to="/contact-us">
              <li className="block py-2 px-3 md:p-0 text-gray-900 hover:text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact Us
              </li>
            </Link>
            <Link to="/admin">
              <li className="block py-2 px-3 md:p-0 text-gray-900 hover:text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Admin
              </li>
            </Link>
            <li className="block py-2 px-3 md:p-0 text-gray-900 hover:text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
