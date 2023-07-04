import React from "react";
import CardsContainer from "./CardsContainer";
import Herocarousel from "./Herocarousel";

const Mainsection = () => {
  return (
    <div style={{ width: "90%" }}>
      <Herocarousel />
      <CardsContainer />
    </div>
  );
};

export default Mainsection;
