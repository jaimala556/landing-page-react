import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../page/assests/images/companylogo.png";
import AccountInfoForm from "./PurchasePrice/AccountInfoForm";
import PersonalInfoForm from "./PurchasePrice/PersonalInfoForm";
import ConfirmInfoForm from "./PurchasePrice/ConfirmInfoForm";
import VerifiedInfoForm from "./PurchasePrice/VerifiedInfoForm";
export default function PurchasePriceForm() {
  return (
    <section className="bg-slate-200 dark:bg-slate-900 flex justify-between items-center min-w-screen w-full min-h-screen ">
      <div className="md:flex hidden md:flex-col items-center justify-start min-h-screen w-full sm:w-3/12 bg-blue-600">
        <div className="w-10/12 flex justify-between items-center p-2 mt-5 h-full rounded-lg bg-blue-500/30 mx-auto">
          <div>
            <Link
              to="/"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <img src={CompanyLogo} className="h-7" alt="Company Logo" />
              <span className="self-center text-xl font-extrabold sm:font-medium whitespace-nowrap text-white">
                Company
              </span>
            </Link>
          </div>
          <div className="flex gap-1 font-bold text-sm text-white">
            <div>
              <Link
                to="/"
                className="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <svg
                  className="w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m15 19-7-7 7-7"
                  />
                </svg>
                <span className="">Go back</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-10/12 p-4 mt-14 h-full rounded-lg bg-blue-500/30 mx-auto">
          <div className="">
            <h3 className="text-2xl font-bold text-white">Plan name</h3>
            <p className="tracking-wider mb-4 text-slate-50 md:text-base">
              30 days free demo
            </p>
            <ul className="space-y-4 text-left text-gray-200">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Benefits</span>
                <span className="font-bold">{" : "}1 month</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="min-h-screen  w-full sm:w-9/12 flex flex-col items-center sm:justify-center p-8 dark:bg-slate-900">
        <div className="w-11/12  sm:hidden flex justify-between items-center p-2 mt-1 mb-5 h-full rounded-lg bg-blue-600 mx-auto">
          <div>
            <Link
              to="/"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <img src={CompanyLogo} className="h-7" alt="Company Logo" />
              <span className="self-center text-xl font-extrabold sm:font-medium whitespace-nowrap text-white">
                Company
              </span>
            </Link>
          </div>
          <div className="flex gap-1 font-bold text-sm text-white">
            <div>
              <Link
                to="/"
                className="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <svg
                  className="w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m15 19-7-7 7-7"
                  />
                </svg>
                <span>Go back</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Personal info form  */}
        <PersonalInfoForm />
        {/* Account info form  */}
        {/* <AccountInfoForm /> */}
        {/* Confirm info form  */}
        {/* <ConfirmInfoForm/> */}
        {/* Verify info form  */}
        {/* <VerifiedInfoForm /> */}
      </div>
    </section>
  );
}
