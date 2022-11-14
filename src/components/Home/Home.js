import React, { useContext, useEffect } from "react";
import { MainContext } from "../../AuthProvider/UserContext";
import Services from "../services/Services";
import Loader from "../shared/Loader";
import useDocumentTitle from "./../utilities/useDocumentTitle";
import Banner from "./Banner";
import Hero from "./Hero";
import Offering from "./Offering";
const Home = () => {
  const { setLoading } = useContext(MainContext);
  useDocumentTitle(`Takeoff 🛫`);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Loader></Loader>
      <Banner></Banner>
      <Services></Services>
      <Offering></Offering>
      <Hero></Hero>
      {setLoading(false)}
    </div>
  );
};

export default Home;
