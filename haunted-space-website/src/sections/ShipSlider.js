import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Woman1 from "../images/Slider/Alpha1.jpg";
import Woman2 from "../images/Slider/Alpha2.jpg";
import Woman3 from "../images/Slider/Alpha3.png";
import Ass1 from "../images/Slider/Ass1.jpg";
import Ass2 from "../images/Slider/Ass2.jpg";
import Ass3 from "../images/Slider/Ass3.jpg";
import Bill1 from "../images/Slider/Bill1.jpg";
import Bill2 from "../images/Slider/Bill2.jpg";
import Bill3 from "../images/Slider/Bill3.jpg";
import Cyb1 from "../images/Slider/Cyb1.jpg";
import Cyb2 from "../images/Slider/Cyb2.jpg";
import Cyb3 from "../images/Slider/Cyb3.jpg";
import Pir1 from "../images/Slider/Pir1.jpg";
import Pir2 from "../images/Slider/Pir2.jpg";
import Pir3 from "../images/Slider/Pir3.jpg";
import "swiper/css";
import { EffectCreative } from "swiper";

function ShipSlider() {
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
                src={Woman1}
                className="mx-auto h-[80vh] object-cover w-full "
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
                src={Ass1}
                className="mx-auto h-[80vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Ass2}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Ass3}
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
                src={Bill1}
                className="mx-auto h-[80vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Bill2}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Bill3}
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
                src={Cyb1}
                className="mx-auto h-[80vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Cyb2}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Cyb3}
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
                src={Pir1}
                className="mx-auto h-[80vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Pir2}
                className="mx-auto h-[80vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Pir3}
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

export default ShipSlider;
