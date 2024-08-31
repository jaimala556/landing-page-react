import React from "react";
import FAQquestion from "./FAQquestion";

export default function FAQ() {
  return (
    <section className="bg-white mb-4 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="flex justify-evenly items-center flex-wrap gap-8 pt-8 text-left border-t border-gray-200 dark:border-gray-700">
          {/* <div> */}
          <FAQquestion />
          <FAQquestion />
          <FAQquestion />
          <FAQquestion />
          <FAQquestion />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
