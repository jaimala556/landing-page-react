import React from "react";
import PriceCard from "./PriceCard";


export default function PriceTable() {
  return (
    <section className="mb-4 bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Purchase your plan and start to grow business
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="grid gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
         <PriceCard/>
         <PriceCard/>
         <PriceCard/>
        </div>
      </div>
    </section>
  );
}
