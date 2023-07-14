import React from "react";
import FavSection from "../Components/FavSection";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Userinfo from "../Components/User.info";

const Favourites = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div style={{ width: "90%" }} className="h-full text-white ">
          <Userinfo />
          <FavSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
