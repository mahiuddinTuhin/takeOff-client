import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../AuthProvider/UserContext";
import Service from "./Service";

const Services = () => {
  const { services } = useContext(MainContext);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {services
          ?.slice(0, 3)
          .map((service) => (
            <Service service={service} key={service._id}></Service>
          )) || ""}
      </div>
      <NavLink
        to="/places"
        className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800 
        hover:bg-gray-800 hover:text-gray-100"
      >
        See all
      </NavLink>
    </div>
  );
};

export default Services;
