import React from "react";
import "../App.css";

/*
 compressed side
https://image.tmdb.org/t/p/w500/{poster_path}
original size
https://image.tmdb.org/t/p/original/{poster_path}
*/

const Carditem = (props) => {
  return (
    <div className="card">
      <img
        className="h-full w-full object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/original${props.image}`}
        alt="avatar"
      />
    </div>
  );
};

export default Carditem;
