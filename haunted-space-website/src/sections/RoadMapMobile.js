import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import '../RoadMapMobile.css';

import Gallery1 from '../images/Gallery/Gallery1.png';

function RoadMapMobile() {
  let value = [
    {
      id: 1,
      h1: 'PUBLIC MINT',
      p: 'WL/Presale, Private Sale and Public Sale of the exclusive and unique NFT OG collection.',
    },
    {
      id: 2,
      h1: 'CREATION OF THE UTILITY TOKEN',
      p: 'Seed, Private sale, Public sale and listing of the Utility token',
    },
    {
      id: 3,
      h1: 'SINGLE PLAYER GAME RELEASE',
      p: 'Release of Haunted Space Single Player',
    },
    {
      id: 4,
      h1: 'CREATION OF A P2E MINIGAME',
      p: 'Right after the creation of the single player, it will be created a minigame',
    },
    {
      id: 5,
      h1: 'RELEASE OF HAUNTED SPACE PLAY-TO-EARN',
      p: 'Release of the official Multiplayer Play-To-Earn',
    },
  ];

  const [titolo, settitolo] = useState(value[0].h1);
  const [paragrafo, setparagrafo] = useState(value[0].p);
  return (
    <div className="bg-[#18191f] bg-pattern bg-repeat pb-14 ">
      <div className="bg-dividerColor z-10 mx-0 w-full rotate-180 bg-cover absolute bg-center  bg-repeat-x -mt-5 ">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>
      <div className="text-center textlight font-BlenderBold pt-14 text-white sm:text-4xl text-3xl">
        ROADMAP
      </div>
      <div className="flex justify-center gap-2 pt-2 pb-6">
        <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
        <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
      </div>
      <div className="items-center font-BlenderBold text-2xl w-7 mx-auto text-center rotate-[-90deg] p-2">
        <div className="animate-bounceAlpha text-white ">></div>
      </div>
      <div className="font-BlenderBold bg-active max-w-[250px] min-w-[250px] bg-contain bg-center bg-no-repeat mx-auto ">
        <Swiper
          direction={'vertical'}
          slidesPerView={'3'}
          spaceBetween={70}
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
            <h1>PHASE 1</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>PHASE 2</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>PHASE 3</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>PHASE 4</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>PHASE 5</h1>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="items-center font-BlenderBold text-2xl w-7 mx-auto text-center rotate-[90deg] p-2">
        <div className="animate-bounceAlpha text-white ">></div>
      </div>
      <div className="text-center text-white py-8 px-10">
        <h1 className="textlight font-BlenderBold text-white  text-3xl">
          {titolo}
        </h1>
        <p className="font-BlenderBook text-white sm:text-lg text-base pt-4">
          {paragrafo}
        </p>
      </div>
      <div className="bg-dividerColor z-10 mx-0 w-full bg-cover absolute bg-center  bg-repeat-x mt-10 ">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>
    </div>
  );
}

export default RoadMapMobile;
