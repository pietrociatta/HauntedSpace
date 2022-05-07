import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../SliderDesktop.css";

import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Gallery1 from "../images/Gallery/Gallery1.png";

function Gallery() {
  return (
    <div>
      <div className="bg-divider z-10 mx-0  w-full bg-cover absolute bg-center  bg-repeat-x -m-1">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>
      <div className="">
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <img
              src={Gallery1}
              className="h-[100vh] md:w-full mx-auto object-cover"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Gallery1}
              className="h-[100vh] md:w-full object-cover"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Gallery1}
              className="h-[100vh] md:w-full object-cover"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-dividerColor z-10 mx-0 rotate-180  w-full bg-cover absolute bg-center  bg-repeat-x -m-8">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>
    </div>
  );
}

export default Gallery;
