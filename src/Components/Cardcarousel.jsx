import React from "react";
import Carditem from "./Carditem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";

const Cardcarousel = (props) => {
  return (
    <>
      <div className="text-white">
        <h1>{props.title}</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="cardslider">
            <Carditem />
          </SwiperSlide>
          <SwiperSlide className="cardslider">
            <Carditem />
          </SwiperSlide>
          <SwiperSlide className="cardslider">
            <Carditem />
          </SwiperSlide>
          <SwiperSlide className="cardslider">
            <Carditem />
          </SwiperSlide>
          <SwiperSlide className="cardslider">
            <Carditem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Cardcarousel;
