import React, { useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MovieContext from "../Context/Movies/MoviesContext";
import Rating from "@mui/material/Rating";
import { FaHeart } from "react-icons/fa";
import HoverText from "./Hovertext";
/*
 compressed side
https://image.tmdb.org/t/p/w500/{poster_path}
original size
https://image.tmdb.org/t/p/original/{poster_path }
*/

const Carditem = (props) => {
  const data = useContext(MovieContext);
  const { setIsMovie, setUserData, userData, isuser } = data;
  const Movdata = props.data;

  const addToFav = (e, movie) => {
    if (isuser) {
      setUserData((prev) => {
        const newFavourites = prev.favourites || [];
        const updatedFavourites = newFavourites.concat(movie);
        console.log(updatedFavourites);
        return {
          ...prev,
          favourites: updatedFavourites,
        };
      });
    }
  };
  useEffect(() => {
    if (isuser) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
    // eslint-disable-next-line
  }, [userData]);

  const seTmovie = () => {
    props.isMovie ? setIsMovie(true) : setIsMovie(false);
  };
  const id = props.data.id;
  return (
    <div
      onClick={seTmovie}
      className="card relative lg:w-48 lg:h-72 mb-2 md:w-40 md:h-60 sm:w-40 sm:h-60 xs:w-36 xs:h-56 xxs:w-36 xxs:h-56 "
    >
      <Link to={`/play/${id}`}>
        <div className="absolute w-full rounded-t-lg top-0 bg-gray-800">
          <Rating
            name="read-only"
            value={(props.data.vote_average / 10) * 5}
            readOnly
            size="small"
          />
        </div>
      </Link>
      <div
        onClick={(e) => addToFav(e, Movdata)}
        className="absolute bottom-0 right-0"
      >
        <HoverText text="Add to favourites">
          <FaHeart className="drop-shadow-2xl text-4xl text-red-600  hover:text-red-700" />
        </HoverText>
      </div>
      <Link to={`/play/${id}`}>
        <img
          className="h-full w-full  object-cover rounded-lg"
          src={
            props.image
              ? `https://image.tmdb.org/t/p/original${props.image}`
              : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
          }
          alt="avatar"
        />
      </Link>
    </div>
  );
};

export default Carditem;
