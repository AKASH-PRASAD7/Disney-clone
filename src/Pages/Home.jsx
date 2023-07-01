import React from "react";
import Mainsection from "../Components/Mainsection";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Mainsection />
    </div>
  );
};

export default Home;
