import React from "react";
import Navbar from "../Components/Navbar";
import Playmainsection from "../Components/Playmain.section";
import Footer from "../Components/Footer";

const Play = () => {
  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <div style={{ width: "90%" }}>
          <Playmainsection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Play;
