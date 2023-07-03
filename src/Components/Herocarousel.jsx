import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css";
import "swiper/css/navigation";
import MovieContext from "../Context/Movies/MoviesContext";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Herocarousel = () => {
  const data = useContext(MovieContext);
  const { upcoming } = data;
  const url = "https://image.tmdb.org/t/p/original";
  const url1 =
    "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/726/1440726-i-db76422df351";
  return (
    <div className="h-96 w-full p-4 ">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-scale-down"
            src={upcoming ? url + upcoming[0].poster_path : url1}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={upcoming ? url + upcoming[1].poster_path : url1} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={upcoming ? url + upcoming[2].poster_path : url1} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={upcoming ? url + upcoming[3].poster_path : url1} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={upcoming ? url + upcoming[4].poster_path : url1} alt="#" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Herocarousel;
