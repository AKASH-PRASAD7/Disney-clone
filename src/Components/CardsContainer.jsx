import React, { useContext, useEffect } from "react";
import Cardcarousel from "./Cardcarousel";
import MovieContext from "../Context/Movies/MoviesContext";
import Loader from "./Loader";

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
    loading,
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
      {loading && <Loader />}
      <Cardcarousel isMovie={true} data={upcoming} title={"Upcoming Movies"} />
      <Cardcarousel isMovie={true} data={topRated} title={"Top Rated"} />
      <Cardcarousel isMovie={false} data={topSeries} title={"Top Series"} />
      <Cardcarousel
        isMovie={false}
        data={trendingSeries}
        title={"Trending series"}
      />
    </div>
  );
};

export default CardsContainer;
