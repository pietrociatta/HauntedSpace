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

function MobileShipSlider() {
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
                src={Woman1}
                className="mx-auto h-[50vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Ass1}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Pir1}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Cyb1}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Bill1}
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
                src={Bill2}
                className="mx-auto h-[50vh] object-cover "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Cyb2}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Ass1}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Pir1}
                className="mx-auto h-[50vh] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Woman2}
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

export default MobileShipSlider;
