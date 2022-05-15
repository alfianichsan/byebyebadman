import React from "react";

import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { Admin, Login, MainApp } from "../../pages";
import ScrollToTop from "./ScrollToTop";

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<MainApp />} />
      </Switch>
    </Router>
  );
};

export default Routes;
