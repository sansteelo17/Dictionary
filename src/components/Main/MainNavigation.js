import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../UI/Navbar";

const MainNavigation = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default MainNavigation;
