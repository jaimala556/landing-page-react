import React from "react";
import GetStartBtn from "./GetStartBtn";
import DashboardImage from "./images/dashboardimage.png";

export default function Template() {
  return (
    <section className="mb-4 bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        {/* put dashboard screenshot here in dark or light mode  */}
        <img
          className="w-full dark:hidden"
          src={DashboardImage}
          alt="dashboard"
        />
        <img
          className="w-full hidden dark:block"
          src={DashboardImage}
          alt="dashboard"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Let's create more tools and ideas that brings us together.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            CRM helps you connect with friends and communities of people who
            share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </p>
          <GetStartBtn />
        </div>
      </div>
    </section>
  );
}
