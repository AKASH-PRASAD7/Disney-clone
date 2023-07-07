import React, { useContext } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import Carditem from "./Carditem";

const Movielist = ({ movie, genre, data }) => {
  const pages = useContext(MovieContext);
  const { setPage, page } = pages;
  //increase page to add pagination
  const addPage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <p className="m-4 text-4xl font-semibold">{`Top ${movie} In ${genre}`}</p>
      <div className="flex flex-wrap gap-4">
        {movie === "Movies" ? (
          <div className="flex flex-wrap gap-4">
            {data &&
              data.map((element) => {
                return (
                  <Carditem
                    key={element.id}
                    data={element}
                    isMovie={true}
                    image={
                      element.poster_path
                        ? element.poster_path
                        : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
                    }
                  />
                );
              })}
          </div>
        ) : (
          <div className="flex flex-wrap gap-4">
            {data &&
              data.map((element) => {
                return (
                  <Carditem
                    key={element.id}
                    data={element}
                    isMovie={false}
                    image={
                      element.poster_path
                        ? element.poster_path
                        : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
                    }
                  />
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default Movielist;
