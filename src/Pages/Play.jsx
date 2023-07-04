import React from "react";
import Playsection from "../Components/Playsection";
import Recommended from "../Components/Recommended";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";

const Play = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="flex">
        <Navbar />
        <div style={{ width: "90%" }}>
          <Playsection />
          <Recommended />
        </div>
      </div>
    </>
  );
};

export default Play;
