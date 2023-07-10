import React from "react";
import Carditem from "./Carditem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Cardcarousel = (props) => {
  const data = props.data;
  return (
    <>
      <div className="text-white">
        <h1 className="mb-4 text-4xl font-semibold md:text-3xl  sm:text-2xl  xs:text-xl  xxs:text-xl">
          {data && props.title}
        </h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            350: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {data &&
            data.map((element, index) => {
              return (
                <SwiperSlide key={index} className="cardslider">
                  <Carditem
                    key={element.id}
                    data={element}
                    image={element.poster_path}
                    isMovie={props.isMovie}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default Cardcarousel;
