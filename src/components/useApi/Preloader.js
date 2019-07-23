import React from "react";
import Loader from "react-loader-spinner";
import { globalContext } from "../App";
const Preloader = () => (
  <globalContext.Consumer>
    {({ theme }) => (
      <Loader type="Plane" color={theme} height="100" width="100" />
    )}
  </globalContext.Consumer>
);

export default Preloader;
