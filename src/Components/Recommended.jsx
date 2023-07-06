import React from "react";
import Cardcarousel from "./Cardcarousel";
const Recommended = ({ similar, recommended }) => {
  return (
    <div className="text-white mt-5">
      {recommended && <Cardcarousel data={recommended} title={"Recommended"} />}
      {similar && <Cardcarousel data={similar} title={"Similar Movies"} />}
    </div>
  );
};

export default Recommended;
