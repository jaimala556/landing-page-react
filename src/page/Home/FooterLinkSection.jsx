import React from "react";
import { Link } from "react-router-dom";

export default function FooterLinkSection(props) {
  return (
    <div className="px-4">
      <h2 className="mb-3 text-sm font-medium text-gray-900 capitalize dark:text-white">
        {props.children}
      </h2>
      <ul className="text-gray-600 ml-3 text-xs  dark:text-gray-400">
        <li className="mb-2">
          <Link
            to="/"
            className="flex items-center  text-gray-700 dark:text-white"
          >
            Github
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/"
            className="flex items-center  text-gray-700 dark:text-white"
          >
            Github
          </Link>
        </li>
      </ul>
    </div>
  );
}
