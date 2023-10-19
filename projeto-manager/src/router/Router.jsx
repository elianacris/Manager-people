import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";
import { WithNav } from "./RoutesLayout/WithNav";

const Router = () => {
  return (
    <Routes>
      <Route element={<WithNav/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
};
export default Router;
