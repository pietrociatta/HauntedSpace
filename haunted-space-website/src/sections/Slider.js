import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Assassin1 from "../images/Slider/Assassin1.jpg";
import Assassin2 from "../images/Slider/Assassin2.jpg";
import Assassin3 from "../images/Slider/Assassin3.jpg";
import Billionaire1 from "../images/Slider/Billionaire1.jpg";
import Billionaire2 from "../images/Slider/Billionaire2.jpg";
import Billionaire3 from "../images/Slider/Billionaire3.jpg";
import Cyborg1 from "../images/Slider/Cyborg1.jpg";
import Cyborg2 from "../images/Slider/Cyborg2.jpg";
import Cyborg3 from "../images/Slider/Cyborg3.jpg";
import Pirate1 from "../images/Slider/Pirate1.jpg";
import Pirate2 from "../images/Slider/Pirate2.jpg";
import Pirate3 from "../images/Slider/Pirate3.jpg";
import Woman1 from "../images/Slider/Woman1.jpg";
import Woman2 from "../images/Slider/Woman2.jpg";
import Woman3 from "../images/Slider/Woman3.jpg";

import "swiper/css";
import { EffectCreative } from "swiper";

function Slider() {
  return (
    <div className="inline-block">
      <div className="bg-divider z-10 mx-0  w-full bg-cover absolute bg-center  bg-repeat-x -m-1">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>

      <div className="flex    ">
        <div className="w-[25vw] sliderCharSide  z-[1]  ">
          <Swiper
            slidesPerView={1}
            loop={true}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <img
                src={Assassin1}
                className="mx-auto h-[80vh] object-cover w-full "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Assassin2}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Assassin3}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[25vw] sliderCharCenter left-[18vw] z-[2] absolute">
          <Swiper
            slidesPerView={1}
            loop={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -1],
              },
              next: {
                translate: [0, "100%", 0],
              },
            }}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            modules={[Autoplay, EffectCreative]}
          >
            <SwiperSlide>
              <img
                src={Billionaire1}
                className="mx-auto h-[80vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Billionaire2}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Billionaire3}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[25vw] sliderCharCenter left-[38vw] z-[2] absolute">
          <Swiper
            slidesPerView={1}
            loop={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -1],
              },
              next: {
                translate: [0, "-100%", 0],
              },
            }}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            modules={[Autoplay, EffectCreative]}
          >
            <SwiperSlide>
              <img
                src={Cyborg1}
                className="mx-auto h-[80vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Cyborg2}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Cyborg3}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[25vw] sliderCharCenter left-[58vw] z-[2] absolute">
          <Swiper
            slidesPerView={1}
            loop={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -1],
              },
              next: {
                translate: [0, "100%", 0],
              },
            }}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            modules={[Autoplay, EffectCreative]}
          >
            <SwiperSlide>
              <img
                src={Pirate1}
                className="mx-auto h-[80vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Pirate2}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Pirate3}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[25vw] sliderCharFinal  absolute right-0 z-[1]  ">
          <Swiper
            slidesPerView={1}
            loop={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [-1, 0, 0],
              },
              next: {
                translate: ["-100%", 0, 0],
              },
            }}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            modules={[Autoplay, EffectCreative]}
          >
            <SwiperSlide>
              <img
                src={Woman1}
                className="mx-auto h-[80vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Woman2}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Woman3}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bg-divider z-10 mx-0 rotate-180  w-full bg-cover absolute bg-center  bg-repeat-x -m-8">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>
    </div>
  );
}

export default Slider;
