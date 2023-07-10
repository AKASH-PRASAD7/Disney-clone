import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MovieContext from "../Context/Movies/MoviesContext";

/*
 compressed side
https://image.tmdb.org/t/p/w500/{poster_path}
original size
https://image.tmdb.org/t/p/original/{poster_path}
*/

const Carditem = (props) => {
  const data = useContext(MovieContext);
  const { setIsMovie } = data;
  const seTmovie = () => {
    props.isMovie ? setIsMovie(true) : setIsMovie(false);
  };

  const id = props.data.id;
  return (
    <Link to={`/play/${id}`}>
      <div
        onClick={seTmovie}
        className="card lg:w-48 lg:h-72 mb-2 md:w-40 md:h-60 sm:w-40 sm:h-60 xs:w-36 xs:h-56 xxs:w-36 xxs:h-56 "
      >
        <img
          className="h-full w-full  object-cover rounded-lg"
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
