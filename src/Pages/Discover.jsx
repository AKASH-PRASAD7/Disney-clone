import React from "react";
import AlltvMovie from "../Components/AlltvMovie";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Discover = () => {
  return (
    <>
      <div className="text-white">
        <div className="flex  ">
          <Navbar />
          <div style={{ width: "90%" }}>
            <AlltvMovie />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discover;
