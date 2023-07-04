import React from "react";
import Carditem from "./Carditem";

const Playsection = () => {
  return (
    <>
      <div className="text-white">
        <div className="movieposter bg-orange-300 h-screen">
          <div className="backgorund image flex flex-row">
            <div className="bg-blue-200 w-1/3">
              <Carditem />
            </div>
            <div className="moviedetails">
              <div>
                <h1>title</h1>
                <p>ratings</p>
                <p>languages</p>
              </div>
              <div>
                <button className="rounded-full bg-cyan-400">Buy now</button>
              </div>
            </div>
          </div>
        </div>
        <div>about</div>
        <div>cast & crew</div>
        <div>reviews</div>
      </div>
    </>
  );
};

export default Playsection;
