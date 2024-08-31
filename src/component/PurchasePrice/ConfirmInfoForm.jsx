import React from "react";

export default function ConfirmInfoForm() {
  const focusNextInput = (event, nextId) => {
    const inputLength = event.target.value.length;
    if (inputLength === 1 && nextId) {
      document.getElementById(nextId).focus();
    }
  };
  return (
    <div className=" sm:w-5/6">
      <div className="pb-10">
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-700 dark:text-gray-400 sm:text-base">
          <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-400 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-400">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Personal{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-400 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-400">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
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
      <form className="dark:border-0 bg-slate-100 dark:bg-slate-800 p-6 rounded-md">
        <h1 className="text-xl font-bold leading-tight mb-5 tracking-tight md:text-2xl dark:text-white">
          Verify your email address
        </h1>
        <p className="tracking-widest mb-4 text-sm text-gray-500 md:text-sm dark:text-gray-400">
          We emailed you a six-digit code to{" "}
          <strong className="dark:text-white text-slate-900">
            name@company.com.{" "}
          </strong>
          Enter the code below to confirm your email address.
        </p>

        <div>
          <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index}>
                <label htmlFor={`code-${index}`} className="sr-only">
                  Code {index}
                </label>
                <input
                  type="text"
                  maxLength="1"
                  id={`code-${index}`}
                  className="block w-9 h-9 sm:w-12 sm:h-12 py-2 sm:mx-1 text-base font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  onKeyDown={(event) =>
                    focusNextInput(event, `code-${index + 1}`)
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="py-2 px-2 my-4 text-xs sm:text-sm border dark:border-slate-600 text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
          <span className="font-medium">
            Make sure to keep this window open while check your inbox.
          </span>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
          Verify account
        </button>
      </form>
    </div>
  );
}
