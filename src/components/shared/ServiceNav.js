import React from "react";
import { NavLink } from "react-router-dom";

const ServiceNav = ({ service }) => {
  const { title, _id } = service;
  return (
    <div className="hover:bg-gray-100 hover:text-blue-900 hover:rounded">
      <NavLink
        rel="noopener noreferrer"
        to={`/place/${_id}`}
        className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
      >
        {title}
      </NavLink>
    </div>
  );
};

export default ServiceNav;
