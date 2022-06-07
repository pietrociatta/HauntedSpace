import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import { EffectCreative } from "swiper";

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

function MobileSlider() {
  return (
    <div className="">
      <div className="bg-divider  z-10 mx-0  w-full bg-cover absolute bg-center  bg-repeat-x -m-1">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>

      <div className="flex h-[46vh]">
        <div className="w-[56vw] sliderCharSide left-[0vw] z-[2] absolute">
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
                src={Assassin1}
                className="mx-auto h-[50vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Billionaire1}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Cyborg1}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Pirate1}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Woman1}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[56vw] sliderCharFinal right-[0vw] z-[2] absolute">
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
                src={Woman2}
                className="mx-auto h-[50vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Pirate2}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Cyborg2}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Billionaire2}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Assassin3}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="bg-divider z-10 mx-0 rotate-180  w-full bg-cover absolute bg-center  bg-repeat-x ">
        <h1 className="opacity-0 p-2  ">ciaocomcomcoc</h1>
      </div>
    </div>
  );
}

export default MobileSlider;
