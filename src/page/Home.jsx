import React from "react";
import Header from "./Home/Header";
import Template from "./Home/Template";
import PriceTable from "./Home/PriceTable";
import Team from "./Home/Team";
import ContactUs from "./Home/ContactUs";
import Footer from "./Home/Footer";
import Services from "./Home/Services";
import FAQ from "./Home/FAQ";

export default function Home() {
  return (
    <>
      <div className="w-full h-full bg-slate-200 dark:bg-gray-800">
        <header>
          <Header />
        </header>
        <main>
          <Template />
          <Services />
          <PriceTable />
          <Team />
          <FAQ />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
}
