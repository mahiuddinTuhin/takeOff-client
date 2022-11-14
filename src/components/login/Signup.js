import React, { useContext, useEffect } from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../../AuthProvider/UserContext";
import image from "./../../data/image/Signup.png";
import useDocumentTitle from "./../utilities/useDocumentTitle";
const Signup = () => {
  useDocumentTitle(`Signup 🔑 `);
  // to load page from start
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(MainContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const url = form.url.value;
    const password = form.password.value;
    const profile = {
      displayName: name,
      photoURL: url,
    };

    createUser(email, password)
      .then(() => {
        updateUserProfile(profile);
        form.reset();
        navigate(from, { navigate: true });
      })
      .catch((err) => console.log(err));
  };
  const signInWithGoogle = () => {
    return signingGoogle()
      .then((result) => {
        navigate(from, { navigate: true });
      })
      .catch((err) => console.log(err));
  };

  const signingGoogle = () => {
    return googleSignIn();
  };
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center"
      data-theme="garden"
    >
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8  text-gray-900 mx-10">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Signup to your account
        </h2>
        <p className="text-sm text-center text-gray-700">
          Already have an account?
          <NavLink to="/login" className="focus:underline hover:underline ml-2">
            Login here
          </NavLink>
        </p>

        <div className="flex mt-5 justify-center text-4xl">
          <div
            className="tooltip"
            data-tip="Sign in with Google"
            onClick={signInWithGoogle}
          >
            <FcGoogle className="mr-5 hover:cursor-pointer " />
          </div>
          <div className="tooltip" data-tip="Sign in with Facebook">
            <BsFacebook className="mr-5 hover:cursor-pointer text-blue-600" />
          </div>
          <div className="tooltip" data-tip="Sign in with Github">
            <BsGithub className="hover:cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-600">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form
          noValidate=""
          action=""
          className="space-y-8 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSignup}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Mr. Henry"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                data-temp-mail-org="2"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                data-temp-mail-org="2"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Photo url
              </label>
              <input
                required
                type="url"
                name="url"
                id="url"
                placeholder="https://i1.sndcdn.com/avatars.jpg"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                data-temp-mail-org="2"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <NavLink
                  rel="noopener noreferrer"
                  to="/"
                  className="text-xs hover:underline text-gray-600"
                >
                  Forgot password?
                </NavLink>
              </div>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 hover:bg-violet-700 hover:text-white"
          >
            Signup
          </button>
        </form>
      </div>
      <div>
        <img src={image} alt="" className="" />
      </div>
    </div>
  );
};

export default Signup;
