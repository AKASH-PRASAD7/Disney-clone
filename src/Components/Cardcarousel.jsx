import React from "react";
import Carditem from "./Carditem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";

const Cardcarousel = (props) => {
  const data = props.data;
  return (
    <>
      <div className="text-white">
        <h1 className="mb-4 text-4xl font-semibold">{props.title}</h1>
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
          {data &&
            data.map((element, index) => {
              return (
                <SwiperSlide key={index} className="cardslider">
                  <Carditem
                    key={element.id}
                    data={element}
                    image={element.poster_path}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

// {data &&
//   data.map((element) => {
//     return (
//
//  <SwiperSlide className="cardslider">
// <Carditem key={element.id} image={element.backdrop_path} />
// </SwiperSlide>
//     );
//   })}

export default Cardcarousel;
