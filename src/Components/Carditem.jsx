import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

/*
 compressed side
https://image.tmdb.org/t/p/w500/{poster_path}
original size
https://image.tmdb.org/t/p/original/{poster_path}
*/

const Carditem = (props) => {
  const id = props.data.id;
  return (
    <Link to={`/play/${id}`}>
      <div className="card">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={
            props.image
              ? `https://image.tmdb.org/t/p/original${props.image}`
              : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
          }
          alt="avatar"
        />
      </div>
    </Link>
  );
};

export default Carditem;
