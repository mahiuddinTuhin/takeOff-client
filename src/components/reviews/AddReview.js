import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { MainContext } from "../../AuthProvider/UserContext";
import useDocumentTitle from "../utilities/useDocumentTitle";

const AddReview = () => {
  useDocumentTitle(`Add review 🙋`);
  const { user, services, reviews } = useContext(MainContext);
  const [reviewedPlace, setReviewedPlace] = useState("nothing");
  const [placeId, setPlaceId] = useState(0);
  const navigate = useNavigate();

  const handleAddReview = (event) => {
    event.preventDefault();

    // console.log(placeId);

    // console.log(reviewedPlace);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;
    // console.log(reviewedPlace);

    const newPlaceId = reviewedPlace?.palceId;
    const placeTitle = reviewedPlace?.title;
    const userImage = reviewedPlace?.userImage;
    const serviceImage = reviewedPlace?.serviceImage;
    const date = reviewedPlace?.date;

    // const serviceImage = new
    fetch(`https://server-side-iota.vercel.app/addreview`, {
      method: "POST",
      body: JSON.stringify({
        name,
        newPlaceId,
        placeTitle,
        userImage,
        email,
        review,
        serviceImage,
        date,
      }),

      headers: {
        "content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const notify = () => toast("Review Successfull");
        notify();
        <ToastContainer />;
        navigate(`/place/${newPlaceId}`);
      })
      .catch((err) => console.log(err));
    form.reset();
  };

  useEffect(() => {
    // ReviewedPlace;
    // console.log(placeId);
    // current time
    let currentDate = new Date()?.toJSON().slice(0, 10) || "";
    // console.log(currentDate);
    // finding place detail
    let newPlace;
    try {
      placeId
        ? (newPlace = services.find((service) => service._id === placeId))
        : (newPlace = "");
    } finally {
      // placeId!=='number' ?
      setReviewedPlace({
        palceId: newPlace?._id,
        title: newPlace?.title,
        userImage: user?.photoURL,
        serviceImage: newPlace?.images,
        date: currentDate,
      });
      // console.log(newPlace);
    }
    return () => {};
  }, [placeId]);

  return (
    <div>
      <form
        onSubmit={handleAddReview}
        className="flex flex-col mx-auto w-1/3 items-center"
      >
        {/* selecting option */}
        <label
          htmlFor="countries"
          selected
          className="block mb-2 text-2xl font-medium text-gray-100 dark:text-gray-400"
        >
          Add your reviews
        </label>
        <select
          name="placeName"
          required
          id="place"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
           rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-
           1/2"
          onChange={(event) => setPlaceId(event?.target?.value)}
        >
          <option>Choose a place</option>
          {services?.map((service) => (
            <option name={service.title} key={service._id} value={service._id}>
              {service.title}
            </option>
          )) || ""}
        </select>

        {/* input section */}
        <div>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            disabled
            placeholder="Your Full Name"
            className="input
          input-bordered input-info w-full max-w-xs bg-white text-white my-3"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Full Name"
            defaultValue={user?.email}
            disabled
            className="input 
          input-bordered input-info w-full max-w-xs bg-gray-400 text-white my-3"
          />
        </div>

        <div>
          <textarea
            required
            // onBlur={handleChangeReview}
            name="review"
            className="textarea textarea-info mx-auto bg-white text-slate-700 my-3"
            placeholder="Review"
          ></textarea>
        </div>
        <div className="bg-white text-gray-800 px-6 py-2 rounded-md hover:bg-green-600 hover:font-bold">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
