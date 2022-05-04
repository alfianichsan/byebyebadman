import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import { Footer, Navbar } from "../../components";
import { Products, Categories, Contact, Home, ProductDetail } from "../index";

const MainApp = () => {
  return (
    <>
      <Navbar />
      <div className="flex m-0 w-full h-auto pt-14 items-center justify-center">
        <Switch>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Home />} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default MainApp;
