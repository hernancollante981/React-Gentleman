import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import User from "../pages/user/User";
import Productos from "../pages/productos/Productos";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/User" element={<User />} />
      <Route path="/Productos" element={<Productos />} />
    </ReactDomRoutes>
  );
};

export default Routes;
