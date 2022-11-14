import React, { useContext, useEffect } from "react";
import { MainContext } from "../../AuthProvider/UserContext";
import ServiceNav from "./ServiceNav";

const ServicesNav = () => {
  const { services, setServices, placeCount, setPlaceCount } =
    useContext(MainContext);
  useEffect(() => {
    fetch(`https://server-side-iota.vercel.app/places`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.result);
        setPlaceCount(data.count);
      });
  }, [setServices, setPlaceCount]);
  return (
    <div>
      <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-wrap dark:bg-gray-800 dark:text-gray-100 pb-4">
        {services
          ?.map((service) => (
            <ServiceNav service={service} key={service._id}></ServiceNav>
          ))
          .slice(0, 6) || ""}
      </div>
    </div>
  );
};

export default ServicesNav;
