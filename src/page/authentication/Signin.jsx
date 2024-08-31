import React from "react";
import CompanyLogo from "../assests/images/companylogo.png";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <section className="bg-gray-50 min-h-screen h-full  dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={CompanyLogo} alt="logo" />
          Company
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div className="mb-4 sm:mb-5">
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="youremail@gmail.com"
                    required
                  />
                   <p
                    id="errorEmail"
                    className="hidden mt-1 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
                  >
                    Lorem, ipsum dolor sit
                  </p>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="**********"
                    required
                  />
                  <p
                    id="errorPassword"
                    className="hidden mt-1 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
                  >
                    Lorem, ipsum dolor sit
                  </p>
                </div>
                <div className="my-5 flex w-full items-center justify-between">
                  <div className="flex items-start sm:ml-4">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-2 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to="/forget"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="flex  items-center space-x-4"></div>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 text-center dark:text-gray-400">
                Don’t have an account yet?{" "}
                <button className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  <Link to="/register">Sign up</Link>
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
