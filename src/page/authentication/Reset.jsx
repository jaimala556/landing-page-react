import React, { useRef, useState } from "react";
import CompanyLogo from "../assests/images/companylogo.png";
import { Link } from "react-router-dom";

export default function Reset() {
  // svg for passwordbox
  const hidePasswordSvg = (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const showPasswordSvg = (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
      <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
      <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
    </svg>
  );

  // password show or hide code
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // reset input code
  const inputRefs = useRef([]);
  const handleInputChange = (index, event) => {
    const currentValue = event.target.value;
    // Move focus to the next input field if available
    if (currentValue !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen h-full dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 space-x-3 rtl:space-x-reverse"
        >
          <img src={CompanyLogo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Company
          </span>
        </Link>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
            <p className="tracking-widest text-gray-500 text-xs md:text-sm dark:text-gray-400">
              Enter the <span className="font-bold">One Time Password</span>{" "}
              that you have received from gmail
            </p>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                One Time Password
              </label>
              <div className="flex justify-between sm:w-9/12">
                {[...Array(6)].map((_, index) => (
                  <div key={index}>
                    <label
                      htmlFor={`code-${index + 1}`}
                      className="sr-only"
                    >{`Code ${index + 1}`}</label>
                    <input
                      type="text"
                      maxLength="1"
                      data-focus-input-init
                      id={`code-${index + 1}`}
                      className="bg-gray-50 w-9 h-9 py-3 border font-extrabold text-center border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      placeholder="0"
                      ref={(input) => (inputRefs.current[index] = input)}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                ))}
              </div>
              <p
                id="errorOTP"
                className="hidden mt-2 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
              >
                Lorem, ipsum dolor sit
              </p>
            </div>
            <div>
              <div className="relative">
                <label
                  htmlFor="newPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="newPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 top-7 flex items-center px-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? showPasswordSvg : hidePasswordSvg}
                </button>
              </div>
              <p
                id="errorNewPassword"
                className="hidden mt-2 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
              >
                Lorem, ipsum dolor sit
              </p>
            </div>
            <div>
              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                <button                  
                  className="absolute inset-y-0 right-0 top-7 flex items-center px-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? showPasswordSvg : hidePasswordSvg}
                </button>
              </div>
              <p
              id="errorConfirmPassword"
              className="hidden mt-2 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
            >
              Lorem, ipsum dolor sit
            </p>
            </div>
            <button              
              className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
