import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Herocarousel = () => {
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
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5224/1545224-i-ff5107005ceb"
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5224/1545224-i-ff5107005ceb"
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5224/1545224-i-ff5107005ceb"
            alt="#"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Herocarousel;
