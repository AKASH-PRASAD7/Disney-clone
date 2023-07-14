import React from "react";
import Footer from "../Components/Footer";
import Mainsection from "../Components/Mainsection";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <Mainsection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
