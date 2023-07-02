import React from "react";
import Cardcarousel from "./Cardcarousel";

const CardsContainer = () => {
  return (
    <div>
      <Cardcarousel title={"Latest release"} />
      <Cardcarousel title={"Popular shows"} />
      <Cardcarousel title={"Top Movies"} />
      <Cardcarousel title={"Top series"} />
    </div>
  );
};

export default CardsContainer;
