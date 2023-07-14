import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Castcrew = ({ movie }) => {
  const url = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="text-white">
      <h1 className="mt-4 ml-6 font-semibold  text-4xl font-semibold md:text-3xl  sm:text-2xl  xs:text-2xl  xxs:text-2xl">
        {movie.cast && `Cast`}
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 3,
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
        {movie.cast &&
          movie.cast.map((each, index) => {
            return (
              index < 8 && (
                <SwiperSlide key={index} className="cardslider">
                  <div className=" mt-6 ">
                    <div className="lg:w-48 lg:h-48  md:w-40 md:h-40 sm:w-40 sm:h-40 xs:w-40 xs:h-40 xxs:w-36 xxs:h-36">
                      <img
                        className="rounded-full mb-4 p-4  "
                        src={
                          each.profile_path
                            ? `${url}${each.profile_path}`
                            : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                        }
                        alt={each.name}
                      />
                    </div>
                    <div className=" text-sm  lg:w-48 lg:h-48 mb-2 md:w-40 md:h-40 sm:w-40 sm:h-40 xs:w-36 xs:h-36 xxs:w-32 xxs:h-32 ">
                      <p className="font-bold text-lg">{each.original_name}</p>
                      <p>As : {each.character}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            );
          })}
      </Swiper>
      <h1 className="mt-4 ml-6 font-semibold  text-4xl font-semibold md:text-3xl  sm:text-2xl  xs:text-2xl  xxs:text-2xl">
        {movie.crew && `Crew`}
      </h1>
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
        {movie.crew &&
          movie.crew.map((each, index) => {
            return (
              index < 2 && (
                <SwiperSlide key={index} className="cardslider">
                  <div className=" mt-2  ">
                    <div className="lg:w-48 lg:h-48 mb-2 md:w-40 md:h-40 sm:w-40 sm:h-40 xs:w-40 xs:h-40 xxs:w-36 xxs:h-36">
                      <img
                        className="rounded-full mb-4 p-4 "
                        src={
                          each.profile_path
                            ? `${url}${each.profile_path}`
                            : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                        }
                        alt={each.name}
                      />
                    </div>
                    <div className=" text-sm text-sm  lg:w-48 lg:h-48 mb-2 md:w-40 md:h-40 sm:w-40 sm:h-40 xs:w-36 xs:h-36 xxs:w-32 xxs:h-32">
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
