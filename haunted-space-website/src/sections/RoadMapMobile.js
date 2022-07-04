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
      h1: 'PUBLIC MINT (Q3 2022)',
      p: 'Public mint of OG NFT Collection',
    },
    {
      id: 2,
      h1: 'SEED & PRIVATE ROUND (Q3/Q4 2022)',
      p: 'Governance and Utility tokens SEED and PRIVATE round',
    },
    {
      id: 3,
      h1: ' SINGLE PLAYER (Q4 2022)',
      p: 'Single-Player Beta release on the mainstream gaming platforms',
    },
    {
      id: 4,
      h1: 'PUBLIC ROUND (Q4 2022)',
      p: 'Governance token PUBLIC round',
    },
    {
      id: 5,
      h1: 'RELEASE ON XBOX/PS/Steam (Q4 2022)',
      p: 'Single-player game release on Xbox, Playstation and Steam',
    },
    {
      id: 6,
      h1: 'TOKENS LISTING (Q1/Q2 2023)',
      p: 'Governance token listing on Centralized and Decentrilized exchanges',
    },
    {
      id: 7,
      h1: 'MARKETPLACE OPENING (Q1/Q2 2023)',
      p: 'Marketplace opening and first Battleships NFTs sale',
    },
    {
      id: 8,
      h1: 'P&E Beta release (Q2/Q3 2023)',
      p: 'Multiplayer P&E Public release',
    },

    {
      id: 9,
      h1: 'NEW GAME MODE (Q3/Q4 2023)',
      p: 'New game modes implementation and NFT sales',
    },
    {
      id: 10,
      h1: 'TOURNAMENTS (Q1/Q2 2024)',
      p: 'Tournaments implementation to reach a sustainable gaming ecosystem',
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
          spaceBetween={60}
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
          <SwiperSlide>
            <h1>PHASE 6</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>PHASE 7</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>PHASE 8</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>PHASE 9</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>PHASE 10</h1>
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
