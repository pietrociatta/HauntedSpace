import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Assassin1 from "../images/Slider/Assassin1.jpg";
import Assassin2 from "../images/Slider/Assassin2.jpg";
import Assassin3 from "../images/Slider/Assassin3.jpg";
import "swiper/css";
import { EffectCreative } from "swiper";

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
                src={Assassin2}
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
                src={Assassin1}
                className="mx-auto h-[50vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Assassin2}
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
