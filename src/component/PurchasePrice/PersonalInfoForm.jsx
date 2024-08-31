import React from "react";

export default function PersonalInfoForm() {
  return (
    <div className="sm:w-5/6">
      <div className="pb-10">
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-700 dark:text-gray-400 sm:text-base">
          <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-400 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-400">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span className="me-2">1</span>
              Personal{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-400 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-400">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span className="me-2">2</span>
              Account{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li className="flex items-center">
            <span className="me-2">3</span>
            Confirmation
          </li>
        </ol>
      </div>
      <form className="mx-auto dark:border-0 bg-slate-100 dark:bg-slate-800 p-6 rounded-md">
        <h1 className="text-xl font-bold leading-tight mb-5 tracking-tight md:text-2xl dark:text-white">
          Personal Information
        </h1>
        <div className="my-4">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Your Question
          </h3>
          <ul className="grid w-full gap-4">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                defaultValue="hosting-small"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="hosting-small"
                className="inline-flex items-center justify-between w-full py-3 px-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div>
                  <div className="w-full text-base font-semibold">Option 1</div>
                </div>
                <svg
                  className="w-5 h-5 ms-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                defaultValue="hosting-small"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="hosting-small"
                className="inline-flex items-center justify-between w-full py-3 px-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div>
                  <div className="w-full text-base font-semibold">Option 2</div>
                </div>
                <svg
                  className="w-5 h-5 ms-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                defaultValue="hosting-small"
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="hosting-small"
                className="inline-flex items-center justify-between w-full py-3 px-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div>
                  <div className="w-full text-base font-semibold">Option 3</div>
                </div>
                <svg
                  className="w-5 h-5 ms-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </label>
            </li>
          </ul>
        </div>
        <p
          id="errorOTP"
          className="mt-2 mb-4 hidden mx-2 sm:font-semibold text-sm text-red-500 dark:text-red-600"
        >
          Please choose any one
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
          Next : Account Info
        </button>
      </form>
    </div>
  );
}
