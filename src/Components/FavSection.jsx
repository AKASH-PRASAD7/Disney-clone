import React, { useContext } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import Carditem from "./Carditem";
import "../App.css";

const FavSection = () => {
  const data = useContext(MovieContext);
  const { userData } = data;
  return (
    <>
      <p className="text-4xl font-semibold md:text-3xl mb-4 ml-5 sm:text-2xl  xs:text-2xl  xxs:text-2xl">
        Your Favourites
      </p>
      <div className="flex flex-wrap ml-5 gap-4">
        {userData.favourites &&
          userData.favourites.map((element) => {
            return (
              <Carditem
                key={element.id}
                data={element}
                image={
                  element.poster_path
                    ? element.poster_path
                    : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
                }
              />
            );
          })}
      </div>
    </>
  );
};

export default FavSection;
