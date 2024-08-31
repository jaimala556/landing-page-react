import React from "react";
import CompanyLogo from "../assests/images/companylogo.png";
import { Link } from "react-router-dom";

export default function Forget() {
  return (
    <section className="min-h-screen h-full bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 sm:w-10/12 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 space-x-3 rtl:space-x-reverse"
        >
          <img src={CompanyLogo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Company
          </span>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forget your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <p className="tracking-widest text-gray-500 text-xs md:text-sm dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                minus perferendis molestias expedita accusamus!
              </p>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter your email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
                <p
                  id="errorEmail"
                  className="hidden mt-1 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
                >
                  Lorem, ipsum dolor sit
                </p>
              </div>
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-bold rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
                Find account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <button className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  <Link to="/login">Sign in</Link>
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
