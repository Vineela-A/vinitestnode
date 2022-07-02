import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Tables } from "./pages/Tables";

const Routes = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/" component={Tables} />
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
