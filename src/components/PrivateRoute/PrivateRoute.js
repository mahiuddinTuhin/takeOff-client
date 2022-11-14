import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MainContext } from "../../AuthProvider/UserContext";
import Loader from "../shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MainContext);
  const location = useLocation();
  if (loading) return <Loader />;
  if (!user)
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  return children;
};

export default PrivateRoute;
