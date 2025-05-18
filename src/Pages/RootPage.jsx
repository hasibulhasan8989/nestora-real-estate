import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Custom.css";
import Footer from "../Components/Footer";


const RootPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:mt-20 mt-8">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
     
    </div>
  );
};

export default RootPage;
