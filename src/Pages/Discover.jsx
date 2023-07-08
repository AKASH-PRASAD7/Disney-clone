import React from "react";
import AlltvMovie from "../Components/AlltvMovie";
import Navbar from "../Components/Navbar";

const Discover = () => {
  return (
    <div className="text-white">
      <div className="flex">
        <Navbar />
        <div className=" w-full">
          <AlltvMovie />
        </div>
      </div>
    </div>
  );
};

export default Discover;