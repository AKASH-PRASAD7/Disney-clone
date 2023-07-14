import React, { useContext, useState } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import Carditem from "./Carditem";
import Loader from "./Loader";
// import InfiniteScroll from "react-infinite-scroll-component";

const Movielist = ({ data, isMovie }) => {
  const pages = useContext(MovieContext);
  const { setPage, page, loading, total } = pages;

  // const fetchMoreData = () => {
  //   setPage((prev) => prev + 1);
  // };

  return (
    <>
      <div>
        {/* <InfiniteScroll
          dataLength={total}
          next={fetchMoreData}
          hasMore={page < total}
          loader={<Loader />}
        > */}
        {loading && <Loader />}

        <div className="flex w-full flex-wrap justify-center    gap-4">
          {data.map((element, index) => {
            return (
              <Carditem
                key={index}
                data={element}
                isMovie={isMovie}
                image={
                  element.poster_path
                    ? element.poster_path
                    : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
                }
              />
            );
          })}
        </div>
        {/* </InfiniteScroll> */}
      </div>
    </>
  );
};

export default Movielist;
