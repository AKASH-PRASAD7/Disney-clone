import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css";
import "swiper/css/navigation";
import MovieContext from "../Context/Movies/MoviesContext";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import loader from "../Images/giphy.webp";
import "../App.css";

const Herocarousel = () => {
  const data = useContext(MovieContext);
  const [loading, setLoading] = useState(true);
  const { upcoming } = data;
  useEffect(() => {
    if (upcoming.length > 0) {
      setLoading(false);
    }
  }, [upcoming]);

  const url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="h-96 w-full p-4 ">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide className="hero">
          <img
            className="rounded-lg "
            src={!loading ? url + upcoming[0].poster_path : loader}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide className="hero">
          {" "}
          <img
            className="rounded-lg"
            src={!loading ? url + upcoming[1].poster_path : loader}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide className="hero">
          {" "}
          <img
            className="rounded-lg"
            src={!loading ? url + upcoming[2].poster_path : loader}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide className="hero">
          {" "}
          <img
            className="rounded-lg"
            src={!loading ? url + upcoming[3].poster_path : loader}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide className="hero">
          {" "}
          <img
            className="rounded-lg"
            src={!loading ? url + upcoming[4].poster_path : loader}
            alt="#"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Herocarousel;
