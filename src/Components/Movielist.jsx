import React, { useContext, useState } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import Carditem from "./Carditem";
import Loader from "./Loader";
// import InfiniteScroll from "react-infinite-scroll-component";

const Movielist = ({ movie, genre, data, isMovie }) => {
  const pages = useContext(MovieContext);
  const { setPage, page, loading, total } = pages;
  // const fetchMoreData = () => {
  //   setPage((prev) => prev + 1);
  //   console.log("page=", page);
  //   console.log("total=", total);
  //   console.count("yes");
  // };
  // console.log(data);
  return (
    <>
      <p className="text-4xl font-semibold md:text-3xl  sm:text-2xl  xs:text-2xl  xxs:text-2xl ml-6">{`Top ${movie} In ${genre}`}</p>

      {/* <InfiniteScroll
        dataLength={total}
        next={fetchMoreData}
        hasMore={page < total}
        loader={<Loader />}
      > */}
      {loading && <Loader />}

      <div className="flex w-full flex-wrap justify-center    gap-4">
        <br />
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
    </>
  );
};

export default Movielist;
