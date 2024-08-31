import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home";

// Error page
import Error404 from "./component/errorPage/Error404";

// home component full page
import TeamPage from "./page/Home/page/TeamPage";
import ContactPage from "./page/Home/page/ContactPage";
import ServicePage from "./page/Home/page/ServicePage";
import FAQPage from "./page/Home/page/FAQPage";
import PricePage from "./page/Home/page/PricePage";

// authentication pages
import Signup from "./page/authentication/Signup";
import Signin from "./page/authentication/Signin";
import Forget from "./page/authentication/Forget";
import Reset from "./page/authentication/Reset";

// product purchasing
import PurchasePriceForm from "./component/PurchasePriceForm";

// admin pages
import Admin from "./page/Admin";

export default function App() {
  return (
    <div className="min-h-screen min-w-screen max-h-full ">
      <Router>
        {" "}
        {/* Ensure that the entire app is wrapped within Router */}
        <Routes>
          {/* Define a catch-all route for page not found */}
          <Route path="*" element={<Error404 />} />

          {/* Home page routes  */}
          <Route path="/" element={<Home />} />

          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* authentication page routes  */}
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />

          {/* Product purchasing */}
          <Route path="/product-purchase" element={<PurchasePriceForm />} />

          {/* Admin */}
          <Route path="/admin" element={<Admin />} />         
        </Routes>
      </Router>
    </div>
  );
}
