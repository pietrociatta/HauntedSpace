import React, { useEffect, useState, useRef } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

import '../index.css';

function RoadMap() {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const [hideButtons, setHideButtons] = useState(false);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 2000 ? 800 : 600;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else setHideButtons(true);
  };
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

  const [Current, setCurrent] = useState(value[0].id);
  const [titolo, setTitolo] = useState(value[0].h1);
  const [paragrafo, setParagrafo] = useState(value[0].p);
  return (
    <div
      className="bg-[#18191f] bg-pattern bg-repeat  w-full    "
      ref={parentRef}
    >
      <div className="bg-dividerColor z-10 mx-0 rotate-180   -my-6  w-full bg-cover absolute bg-center  bg-repeat-x ">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>
      <div className="text-center textlight font-BlenderBold pt-20 text-white text-[45px] lg:text-[45px]">
        ROADMAP
      </div>
      <div className="flex justify-center gap-2 pt-2 pb-6">
        <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
        <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
      </div>

      <div
        className=" overflow-x-scroll no-scrollbar select-none"
        ref={scrollRef}
      >
        <div className="grid grid-flow-col auto-cols-[250px] p-10   ">
          <button
            className={
              Current === 1
                ? 'bg-active  bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl '
            }
            onClick={() => {
              setCurrent(1);
              setTitolo(value[0].h1);
              setParagrafo(value[0].p);
            }}
          >
            PHASE 1
          </button>
          <div className="w-full"></div>
          <button
            className={
              Current === 3
                ? 'bg-active  bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl '
            }
            onClick={() => {
              setCurrent(3);
              setTitolo(value[2].h1);
              setParagrafo(value[2].p);
            }}
          >
            PHASE 3
          </button>
          <div className="w-full"></div>
          <button
            className={
              Current === 5
                ? 'bg-active  bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl '
            }
            onClick={() => {
              setCurrent(5);
              setTitolo(value[4].h1);
              setParagrafo(value[4].p);
            }}
          >
            PHASE 5
          </button>
          <div className="w-full"></div>
          <button
            className={
              Current === 7
                ? 'bg-active  bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl '
            }
            onClick={() => {
              setCurrent(7);
              setTitolo(value[6].h1);
              setParagrafo(value[6].p);
            }}
          >
            PHASE 7
          </button>
          <div className="w-full"></div>
          <button
            className={
              Current === 9
                ? 'bg-active  bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl '
            }
            onClick={() => {
              setCurrent(9);
              setTitolo(value[8].h1);
              setParagrafo(value[8].p);
            }}
          >
            PHASE 9
          </button>
        </div>

        <div className=" ">
          <div className="grid  grid-flow-col auto-cols-[250px] z-10 relative  h-10   w-full  text-center px-10  ">
            <button
              className={
                Current === 1
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(1)}
            ></button>

            <button
              className={
                Current === 2
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center'
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(2)}
            ></button>
            <button
              className={
                Current === 3
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center'
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(3)}
            ></button>
            <button
              className={
                Current === 4
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center'
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(4)}
            ></button>
            <button
              className={
                Current === 5
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center'
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(5)}
            ></button>

            <button
              className={
                Current === 6
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center'
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(6)}
            ></button>
            <button
              className={
                Current === 7
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center'
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(7)}
            ></button>
            <button
              className={
                Current === 8
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center'
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(8)}
            ></button>
            <button
              className={
                Current === 9
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center'
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(9)}
            ></button>
            <button
              className={
                Current === 10
                  ? 'bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center'
                  : 'bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center '
              }
              onClick={() => setCurrent(10)}
            ></button>
          </div>
        </div>
        <div className="h-7 flex w-[2800px] relative z-0 -mt-[30px] items-center  ">
          <div className="bg-white h-[3px] w-full" />
        </div>
        <div className="grid grid-flow-col auto-cols-[250px] p-10 text-center">
          <div className="w-full"></div>
          <button
            className={
              Current === 2
                ? 'bg-active  bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl '
            }
            onClick={() => {
              setCurrent(2);
              setTitolo(value[1].h1);
              setParagrafo(value[1].p);
            }}
          >
            PHASE 2
          </button>
          <div></div>
          <button
            className={
              Current === 4
                ? 'bg-active  bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl'
            }
            onClick={() => {
              setCurrent(4);
              setTitolo(value[3].h1);
              setParagrafo(value[3].p);
            }}
          >
            PHASE 4
          </button>
          <div></div>
          <button
            className={
              Current === 6
                ? 'bg-active  bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl'
            }
            onClick={() => {
              setCurrent(6);
              setTitolo(value[5].h1);
              setParagrafo(value[5].p);
            }}
          >
            PHASE 6
          </button>
          <div></div>
          <button
            className={
              Current === 8
                ? 'bg-active  bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl'
            }
            onClick={() => {
              setCurrent(8);
              setTitolo(value[7].h1);
              setParagrafo(value[7].p);
            }}
          >
            PHASE 8
          </button>
          <div></div>
          <button
            className={
              Current === 10
                ? 'bg-active  bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center textlight font-BlenderBold text-white sm:text-xl text-2xl'
                : 'bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center text-center  font-BlenderBold text-white sm:text-xl text-2xl'
            }
            onClick={() => {
              setCurrent(10);
              setTitolo(value[9].h1);
              setParagrafo(value[9].p);
            }}
          >
            PHASE 10
          </button>
          <div className=""></div>
        </div>
      </div>
      <div className="relative mx-4 ">
        {!hideButtons && (
          <>
            <div
              onClick={() => handleScroll('left')}
              className="absolute w-8 h-8 mt-20 z-20  text-white cursor-pointer left-0"
            >
              <AiFillLeftCircle size={40} />
            </div>
            <div
              onClick={() => handleScroll('right')}
              className="absolute w-8 h-8  mt-20 z-20 text-white cursor-pointer right-0"
            >
              <AiFillRightCircle size={40} />
            </div>
          </>
        )}
        <div className="relative text-right p-10 pb-20 mx-5">
          <h1 className="textlight font-BlenderBold text-white sm:text-4xl text-3xl">
            {titolo}
          </h1>
          <p className="font-BlenderBook text-white sm:text-lg text-base">
            {paragrafo}
          </p>
        </div>
      </div>
      <div className="bg-dividerColor z-10 mx-0    w-full bg-cover absolute bg-center  bg-repeat-x ">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>
    </div>
  );
}

export default RoadMap;
