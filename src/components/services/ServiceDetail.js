import React, { useContext, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";
import { MainContext } from "../../AuthProvider/UserContext";
import AddReview from "../reviews/AddReview";
import SingleServiceReviews from "../reviews/SingleServiceReviews";
import useDocumentTitle from "../utilities/useDocumentTitle";

const ServiceDetail = () => {
  useDocumentTitle(`Service Details 💁`);
  const { _id, cost, description, images, ratings, services, title } =
    useLoaderData();
  const { user } = useContext(MainContext);
  // console.log(user);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={images[0]}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {title}
              <br />
              <span className="dark:text-violet-400 text-3xl">
                Your Dream Place
              </span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">{description}</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <NavLink
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 text-lg font-semibold rounded bg-indigo-200 text-gray-900 hover:bg-white hover:text-indigo-700 hover:font-bold"
              >
                Add to Favourite
              </NavLink>
              <NavLink
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-white hover:text-indigo-700 hover:font-bold"
              >
                Take OFF
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* second section */}
      {/* BusinessClass */}
      <div className="flex flex-col md:flex-row hover:bg-indigo-200 hover:-translate-y-6 overflow-hidden bg-white  shadow-lg items-center">
        <div className="w-1/3 bg-cover ml-2 rounde">
          <img src={images[1]} alt="" className="rounded" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl md:text-2xl lg:text-7xl font-bold text-blue-800 dark:text-white">
            {services}
          </h1>

          <p className="mt-2 text-lg lg:text-5xl text-gray-600 font-bold">
            Business Class
          </p>

          <div className="flex mt-2 item-center justify-center items-center">
            <p className="text-md lg:text-xl text-gray-600 font-bold mr-4">
              {ratings}
            </p>
            <span className="text-yellow-600 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
          </div>

          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-4xl">
            ${cost.BusinessClass}
          </h1>
          <div className=" mt-3 mx-auto">
            <button className="px-5 py-3 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              TakeOff
            </button>
          </div>
        </div>
      </div>
      {/* StandardClass */}
      {/* StandardClass */}
      <div className="mt-24 flex flex-col  md:flex-row-reverse hover:bg-indigo-200 hover:-translate-y-6 overflow-hidden bg-white  shadow-lg items-center">
        <div className="w-1/3 bg-cover ml-2 rounde">
          <img src={images[0]} alt="" className="rounded" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl md:text-2xl lg:text-7xl font-bold text-blue-800 dark:text-white">
            {services}
          </h1>

          <p className="mt-2 text-lg lg:text-5xl text-gray-600 font-bold">
            Standard Class
          </p>

          <div className="flex mt-2 item-center justify-center items-center">
            <p className="text-md lg:text-xl text-gray-600 font-bold mr-4">
              {ratings}
            </p>
            <span className="text-yellow-600 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
          </div>

          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-4xl">
            ${cost.StandardClass}
          </h1>
          <div className=" mt-3 mx-auto">
            <button className="px-5 py-3 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              TakeOff
            </button>
          </div>
        </div>
      </div>
      {/* BasicClass */}
      {/* BasicClass */}
      <div className="mt-24 flex flex-col md:flex-row hover:bg-indigo-200 hover:-translate-y-6 overflow-hidden bg-white  shadow-lg items-center">
        <div className="w-1/3 bg-cover ml-2 rounde">
          <img src={images[1]} alt="" className="rounded" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl md:text-2xl lg:text-7xl font-bold text-blue-800 dark:text-white">
            {services}
          </h1>

          <p className="mt-2 text-lg lg:text-5xl text-gray-600 font-bold">
            Basic Class
          </p>

          <div className="flex mt-2 item-center justify-center items-center">
            <p className="text-md lg:text-xl text-gray-600 font-bold mr-4">
              {ratings}
            </p>
            <span className="text-yellow-600 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
          </div>

          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-4xl">
            ${cost.BasicClass}
          </h1>
          <div className=" mt-3 mx-auto">
            <button className="px-5 py-3 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              TakeOff
            </button>
          </div>
        </div>
      </div>
      <SingleServiceReviews id={_id}></SingleServiceReviews>
      {user && user?.uid ? (
        <AddReview></AddReview>
      ) : (
        <div className="text-2xl text-gray-100 text-center my-12 flex justify-center px-8 py-2 bg-gray-600">
          <h1>
            To Give a review{" "}
            <NavLink className="text-white hover:underline" to="/login">
              Login
            </NavLink>{" "}
            first
          </h1>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
