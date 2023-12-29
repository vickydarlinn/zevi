import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import "./mainLayout.scss";

const MainLayout = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
