import React from "react";

import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { MainApp } from "../../pages";
import ScrollToTop from "./ScrollToTop";

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/*" element={<MainApp />} />
      </Switch>
    </Router>
  );
};

export default Routes;
