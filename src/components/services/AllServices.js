import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../AuthProvider/UserContext";
import useDocumentTitle from "../utilities/useDocumentTitle";
import Service from "./Service";

const AllServices = () => {
  useDocumentTitle(`AllServices 🏧 `);
  const [perPage, setPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);
  const [places, setPlaces] = useState([]);
  const [count, setCount] = useState(0);

  const { searchQuery, setSearchQuery } = useContext(MainContext);

  useEffect(() => {
    // console.log(searchQuery);
    fetch(
      `https://server-side-iota.vercel.app/places?page=${currentPage}&size=${perPage}&search=${searchQuery}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data.result);
        setCount(data.count);
      });
    window.scrollTo({ top: 180, left: 0, behavior: "smooth" });
  }, [perPage, currentPage, searchQuery]);
  const totalPages = Math.ceil(count / perPage);
  const pagination = (
    <div>
      <div className="flex items-center justify-center">
        <div>
          {[...Array(totalPages).keys()].map((p) => (
            <button
              onClick={() => setCurrentPage(p)}
              type=""
              className="text-gray-500 text-3xl bg-white mx-2 px-4 py-1 rounded
             hover:bg-red-800 hover:text-slate-50 focus:bg-red-800 focus:text-slate-50 my-8"
            >
              {p + 1}
            </button>
          ))}
        </div>
        <select
          className="px-2 py-3 rounded bg-red-50 text-gray-900"
          onChange={(event) => setPerPage(event.target.value)}
          defaultValue="2"
        >
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
        </select>
      </div>
    </div>
  );
  return (
    <div>
      {pagination}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {places.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
      {pagination}
    </div>
  );
};

export default AllServices;
