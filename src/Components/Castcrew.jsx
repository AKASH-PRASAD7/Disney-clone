import React, { useContext, useEffect } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Castcrew = ({ id }) => {
  const data = useContext(MovieContext);
  const { movieCast, fetchMoviecast } = data;
  const url = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    fetchMoviecast(id);
    // eslint-disable-next-line
  }, [id]);
  return (
    <div>
      <h1 className="text-4xl mt-4 ml-6 font-semibold">Cast</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper mb-5"
      >
        {movieCast.cast &&
          movieCast.cast.map((each, index) => {
            return (
              index < 8 && (
                <SwiperSlide key={index} className="cardslider">
                  <div className=" mt-6 min-h-48 min-w-48 ">
                    <img
                      className="rounded-full p-4 "
                      src={
                        each.profile_path
                          ? `${url}${each.profile_path}`
                          : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                      }
                      alt={each.name}
                    />
                    <div className=" text-sm">
                      <p className="font-bold text-lg">{each.original_name}</p>
                      <p>As : {each.character}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            );
          })}
      </Swiper>
      <h1 className="text-4xl mt-4 ml-6  font-semibold">Crew</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper mb-5"
      >
        {movieCast.crew &&
          movieCast.crew.map((each, index) => {
            return (
              index < 2 && (
                <SwiperSlide key={index} className="cardslider">
                  <div className=" mt-6 min-h-48 min-w-48 ">
                    <img
                      className="rounded-full p-4 "
                      src={
                        each.profile_path
                          ? `${url}${each.profile_path}`
                          : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                      }
                      alt={each.name}
                    />
                    <div className=" text-sm">
                      <p className="font-bold text-lg">{each.original_name}</p>
                      <p className="font-bold text-lg">{each.job}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            );
          })}
      </Swiper>
    </div>
  );
};

export default Castcrew;
