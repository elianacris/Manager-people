import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layout/Header/Header";

export const WithNav = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};
