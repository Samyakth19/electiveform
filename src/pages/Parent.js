import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Parent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Parent;
