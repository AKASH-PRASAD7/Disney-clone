import React, { useContext, useState } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import Carditem from "./Carditem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Movielist = ({ movie, genre, data, isMovie }) => {
  const pages = useContext(MovieContext);
  const { setPage, page, loading, total } = pages;
  const fetchMoreData = () => {
    setPage((prev) => prev + 1);
    console.log("page=", page);
    console.log("total=", total);
    console.count("yes");
  };
  console.log(data);
  return (
    <>
      <p className="m-4 text-4xl font-semibold">{`Top ${movie} In ${genre}`}</p>
      <InfiniteScroll
        dataLength={total}
        next={fetchMoreData}
        hasMore={page < total}
        loader={<Loader />}
      >
        {loading && <Loader />}

        <div
          style={{ overflow: "hidden" }}
          className="flex w-full flex-wrap gap-4"
        >
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
      </InfiniteScroll>
    </>
  );
};

export default Movielist;
