import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../AuthProvider/UserContext";
import useDocumentTitle from "../utilities/useDocumentTitle";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  useDocumentTitle(`MyReviews 🕴`);
  const { user, reviews, setLoading, loading } = useContext(MainContext);
  const [myReviews, setMyreviews] = useState([]);
  useEffect(() => {
    setLoading(true);
    try {
      fetch(`http://localhost:5050/userreview/${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setMyreviews(data));
    } finally {
      setLoading(false);
    }
  }, [reviews]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
      {myReviews.map((myReview) => (
        <ReviewCard review={myReview} key={myReview._id}></ReviewCard>
      ))}
      {setLoading(false)}
    </div>
  );
};

export default MyReviews;
