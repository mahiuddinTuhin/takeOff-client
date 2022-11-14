import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../AuthProvider/UserContext";
import ReviewCard from "./ReviewCard";

const SingleServiceReviews = ({ id }) => {
  const { reviews, setReviews, loading, setLoading } = useContext(MainContext);
  // const [reviews, setReviews] = useState([]);
  const [reviewById, setReviewsById] = useState([]);
  const [sorting, setSorting] = useState(-1);
  useEffect(() => {
    try {
      // console.log("try inside");
      setLoading(true);
      fetch(`http://localhost:5050/reviews/${id}?sorting=${sorting}`)
        .then((res) => res.json())
        .then((data) => setReviewsById(data));
    } catch {
      console.log("err");
    } finally {
      setLoading(false);
      // console.log(reviewById);
    }
  }, [sorting, reviews]);

  useEffect(() => {
    console.log(sorting, reviews);
  }, [sorting, reviews]);

  return (
    <div>
      <select
        name=""
        id=""
        onChange={(event) => setSorting(event.target.value)}
        className="my-auto mt-12 bg-gray-400 text-slate-900 px-4 py-1 rounded-sm"
      >
        <option value={"-1"}>Latest first</option>
        <option value={"1"}>Oldest first</option>
      </select>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 
    justify-items-center"
      >
        {/* {<Loader></Loader>} */}
        {reviewById &&
          reviewById.map((x) => {
            return <ReviewCard review={x} key={x._id}></ReviewCard>;
          })}
      </div>
    </div>
  );
};

export default SingleServiceReviews;
