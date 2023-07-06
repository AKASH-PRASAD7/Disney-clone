import React, { useContext, useEffect } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import Carditem from "./Carditem";
import Searchbar from "./Searchbar";

const Searchsection = () => {
  const data = useContext(MovieContext);
  const { upcoming, fetchUpcoming } = data;
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUpcoming();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Search Movies</h1>
      <Searchbar />
      <div className="flex flex-wrap gap-4">
        {upcoming &&
          upcoming.map((element) => {
            return (
              <Carditem
                key={element.id}
                data={element}
                image={element.poster_path}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Searchsection;
