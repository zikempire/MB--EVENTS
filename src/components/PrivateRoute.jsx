import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = true;

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
