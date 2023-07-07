import React from "react";
import Cardcarousel from "./Cardcarousel";
const Recommended = ({ similar, recommended, isMovie }) => {
  return (
    <div className="text-white mt-5">
      {recommended && (
        <Cardcarousel
          isMovie={isMovie}
          data={recommended}
          title={"Recommended"}
        />
      )}
      {similar && (
        <Cardcarousel isMovie={isMovie} data={similar} title={"Similar"} />
      )}
    </div>
  );
};

export default Recommended;
