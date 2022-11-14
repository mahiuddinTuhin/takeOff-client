import { Outlet } from "react-router-dom";

import Footer from "../components/shared/Footer";
import Headers from "../components/shared/Headers";
import ServicesNav from "../components/shared/ServicesNav";

const Main = () => {
  return (
    <div>
      {/* {loading ? <Loader /> : null} */}
      <Headers></Headers>
      <ServicesNav></ServicesNav>
      <Outlet></Outlet>
      <Footer></Footer>
      {/* {setLoading(false)} */}
    </div>
  );
};

export default Main;
