import React from "react";
import useDocumentTitle from "../utilities/useDocumentTitle";

const AddService = () => {
  useDocumentTitle(`AddServices 🙂`);
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const description = form.description.value;
    const services = form.services.value;
    const images1 = form.images1.value;
    const images2 = form.images2.value;
    const images = [images1, images2];
    const BusinessClass = form.businessCost.value;
    const StandardClass = form.standardCost.value;
    const BasicClass = form.basicCost.value;
    const cost = {
      BusinessClass,
      StandardClass,
      BasicClass,
    };
    const ratings = form.ratings.value;
    fetch(`http://localhost:5050/addServices`, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify({
        title,
        description,
        images,
        ratings,
        cost,
        services,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        form.reset();
        alert("service added successfully!!");
      });
  };

  return (
    <div>
      <section className="p-6">
        <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-4">
          <p className="font-3xl text-center">Service Information</p>
          <p className="text-lg text-center mb-4">
            Add the valuable information you want to add to get provide by our
            TakeOff service.
          </p>
        </div>
        <form
          noValidate=""
          onSubmit={handleAddService}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="flex justify-center items-center lg:flex-row rounded-md shadow-sm bg-gray-100 pb-4">
            <div className="flex flex-wrap justify-center items-center w-1/3">
              <div className="mx-auto my-4 w-full">
                <label htmlFor="firstname" className="text-lg text-slate-900">
                  Place Name
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  placeholder="place name"
                  className="pl-2 py-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="mx-auto my-4 w-full">
                <label htmlFor="email" className="text-lg text-slate-900">
                  Description
                </label>
                <input
                  required
                  id="text"
                  name="description"
                  type="text"
                  placeholder="This is wounderful place to discover"
                  className="pl-2 py-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="mx-auto my-4 w-full">
                <label htmlFor="services" className="text-lg text-slate-900">
                  Services
                </label>
                <input
                  required
                  name="services"
                  id="services"
                  type="text"
                  placeholder="services"
                  className="pl-2 py-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="mx-auto my-4 w-full">
                <label htmlFor="email" className="text-lg text-slate-900">
                  Image
                </label>
                <input
                  required
                  name="images1"
                  id="text"
                  type="url"
                  placeholder="image url"
                  className="pl-2 py-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="mx-auto my-4 w-full">
                <label htmlFor="email" className="text-lg text-slate-900">
                  Images 2
                </label>
                <input
                  required
                  name="images2"
                  id="text"
                  type="url"
                  placeholder="image url"
                  className="pl-2 py-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="mx-auto my-4 w-full">
                <label htmlFor="email" className="text-lg text-slate-900">
                  Business Class Cost
                </label>
                <input
                  required
                  name="businessCost"
                  id="text"
                  type="number"
                  placeholder="$1200"
                  className="pl-2 py-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="mx-auto my-4 w-full">
                <label
                  htmlFor="standardCost"
                  className="text-lg text-slate-900"
                >
                  Standard Class Cost
                </label>
                <input
                  required
                  name="standardCost"
                  id="standardCost"
                  type="number"
                  placeholder="$1000"
                  className="pl-2 py-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="mx-auto my-4 w-full">
                <label htmlFor="basicCost" className="text-lg text-slate-900">
                  Basic Class Cost
                </label>
                <input
                  required
                  name="basicCost"
                  id="basicCost"
                  type="number"
                  placeholder="$800"
                  className="pl-2 py-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="mx-auto my-4 w-full">
                <label htmlFor="ratings" className="text-lg text-slate-900">
                  Ratings
                </label>
                <input
                  required
                  name="ratings"
                  id="ratings"
                  type="text"
                  placeholder="4.5"
                  className="pl-2 py-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" rounded mt-4 py-1 px-4 bg-gray-600 text-white hover:bg-slate-900 mx-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddService;
