import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../RoadMapMobile.css";

import Gallery1 from "../images/Gallery/Gallery1.png";

function RoadMapMobile() {
  let value = [
    { id: 1, h1: "selected 1", p: "1 questo é un testo di prova" },
    { id: 2, h1: "selected 2", p: "2 questo é un testo di prova" },
    { id: 3, h1: "selected 3", p: "3 questo é un testo di prova" },
    { id: 4, h1: "selected 4", p: "4 questo é un testo di prova" },
    { id: 5, h1: "selected 5", p: "5 questo é un testo di prova" },
    { id: 9, h1: "selected 6", p: "6 questo é un testo di prova" },
    { id: 7, h1: "selected 7", p: "7 questo é un testo di prova" },
  ];

  const [titolo, settitolo] = useState(value[0].h1);
  const [paragrafo, setparagrafo] = useState(value[0].p);
  return (
    <div className="bg-[#18191f] bg-pattern bg-repeat">
      <div className="items-center font-BlenderBold text-2xl text-center rotate-[-90deg] p-2">
        <div className="animate-bounceAlpha text-white ">></div>
      </div>
      <div className="font-BlenderBold bg-active max-w-[250px] min-w-[250px] bg-contain bg-center bg-no-repeat mx-auto ">
        <Swiper
          direction={"vertical"}
          slidesPerView={"3"}
          spaceBetween={30}
          onSlideChange={(swiperCore) => {
            const { activeIndex } = swiperCore;

            settitolo(value[activeIndex].h1);
            setparagrafo(value[activeIndex].p);
          }}
          className="mySwiperMobile"
          slideActiveClass="picker-active"
          slideNextClass="picker-next"
          slidePrevClass="picker-next"
          centeredSlides={true}
        >
          <SwiperSlide>
            <h1>SLIDE 1</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>SLIDE 2</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>SLIDE 3</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>SLIDE 4</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>SLIDE 5</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>SLIDE 6</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>SLIDE 7</h1>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="items-center font-BlenderBold text-2xl text-center rotate-[90deg] p-2">
        <div className="animate-bounceAlpha text-white ">></div>
      </div>
      <div className="text-center text-white py-8">
        <h1 className="textlight font-BlenderBold text-white  text-3xl">
          {titolo}
        </h1>
        <p className="font-BlenderBook text-white sm:text-lg text-base">
          {paragrafo}
        </p>
      </div>
    </div>
  );
}

export default RoadMapMobile;
