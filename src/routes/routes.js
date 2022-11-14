import Blog from "../components/Blog/Blog";
import Login from "../components/login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddReview from "../components/reviews/AddReview";
import MyReviews from "../components/reviews/MyReviews";
import AddService from "../components/services/AddService";
import AllServices from "../components/services/AllServices";
import ServiceDetail from "../components/services/ServiceDetail";
import Error from "../Pages/Error";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Signup } = require("../components/login/Signup");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/places",
        element: <AllServices />,
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/place/:id",
        element: <ServiceDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5050/places/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
