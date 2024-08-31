import React from "react";

export default function ServiceList() {
  return (
    <div className="space-y-4">
      <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        Alphabet Inc.
      </span>
      <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
        Official website
      </h3>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        Flowbite helps you connect with friends, family and communities of
        people who share your interests.
      </p>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
      >
        View case study
      </button>
    </div>
  );
}
