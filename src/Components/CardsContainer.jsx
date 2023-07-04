import React, { useContext, useEffect } from "react";
import Cardcarousel from "./Cardcarousel";
import MovieContext from "../Context/Movies/MoviesContext";

const CardsContainer = () => {
  const data = useContext(MovieContext);
  const {
    upcoming,
    fetchUpcoming,
    fetchtopRated,
    topRated,
    topSeries,
    fetchtopSeries,
    fetchtrendingSeries,
    trendingSeries,
  } = data;
  useEffect(() => {
    fetchUpcoming();
    fetchtopRated();
    fetchtopSeries();
    fetchtrendingSeries();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Cardcarousel data={upcoming} title={"Upcoming Movies"} />
      <Cardcarousel data={topRated} title={"Top Rated"} />
      <Cardcarousel data={topSeries} title={"Top Series"} />
      <Cardcarousel data={trendingSeries} title={"Trending series"} />
    </div>
  );
};

export default CardsContainer;
