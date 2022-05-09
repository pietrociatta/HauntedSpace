import React, { useEffect, useState } from "react";

function RoadMap() {
  let value = [
    { id: 1, h1: "selected 1", p: "1 questo é un testo di prova" },
    { id: 2, h1: "selected 2", p: "2 questo é un testo di prova" },
    { id: 3, h1: "selected 3", p: "3 questo é un testo di prova" },
    { id: 4, h1: "selected 4", p: "4 questo é un testo di prova" },
    { id: 5, h1: "selected 5", p: "5 questo é un testo di prova" },
  ];

  const [Current, setCurrent] = useState(value[0].id);
  const [titolo, setTitolo] = useState(value[0].h1);
  const [paragrafo, setParagrafo] = useState(value[0].p);
  return (
    <div className="bg-[#18191f] bg-pattern bg-repeat pt-20 w-full  ">
      <div className="text-center textlight font-BlenderBold text-white sm:text-4xl text-3xl">
        ROADMAP
      </div>
      <div className="flex justify-center gap-2 pt-2 pb-6">
        <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
        <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
      </div>
      <div className="">
        <div className="grid grid-cols-5 p-10  ">
          <button
            className={
              Current === 1
                ? "bg-active  bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center"
                : "bg-active brightness-50 bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center "
            }
            onClick={() => {
              setCurrent(1);
              setTitolo(value[0].h1);
              setParagrafo(value[0].p);
            }}
          >
            1
          </button>
          <div className="w-full"></div>
          <button
            className={
              Current === 2
                ? "bg-active  bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center"
                : "bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center "
            }
            onClick={() => {
              setCurrent(2);
              setTitolo(value[2].h1);
              setParagrafo(value[2].p);
            }}
          >
            1
          </button>
          <div className="w-full"></div>
          <button
            className={
              Current === 3
                ? "bg-active  bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center"
                : "bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center "
            }
            onClick={() => {
              setCurrent(3);
              setTitolo(value[4].h1);
              setParagrafo(value[4].p);
            }}
          >
            1
          </button>
        </div>
        <div className="flex-col items-center   ">
          <div className="grid grid-cols-5 absolute h-3  w-full  text-center px-10  ">
            <button
              className={
                Current === 1
                  ? "bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center"
                  : "bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center "
              }
              onClick={() => setCurrent(1)}
            ></button>

            <button
              className={
                Current === 4
                  ? "bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center"
                  : "bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center "
              }
              onClick={() => setCurrent(4)}
            ></button>
            <button
              className={
                Current === 2
                  ? "bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center"
                  : "bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center "
              }
              onClick={() => setCurrent(2)}
            ></button>
            <button
              className={
                Current === 5
                  ? "bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center"
                  : "bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center "
              }
              onClick={() => setCurrent(5)}
            ></button>
            <button
              className={
                Current === 3
                  ? "bg-bulletActive  bg-no-repeat bg-cover  h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center"
                  : "bg-bullet  bg-no-repeat bg-cover h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] mx-auto bg-center "
              }
              onClick={() => setCurrent(3)}
            ></button>
          </div>
          <div className=" h-10 flex  items-center ">
            <div className="bg-white h-[3px] w-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-5 p-10 text-center">
          <div className="w-full"></div>
          <button
            className={
              Current === 4
                ? "bg-active  bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center"
                : "bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center "
            }
            onClick={() => {
              setCurrent(4);
              setTitolo(value[1].h1);
              setParagrafo(value[1].p);
            }}
          >
            1
          </button>
          <div></div>
          <button
            className={
              Current === 5
                ? "bg-active  bg-no-repeat bg-cover h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center"
                : "bg-active brightness-50 bg-no-repeat bg-cover  h-[79px] w-[180px] lg:h-[101px] lg:w-[230px] mx-auto bg-center "
            }
            onClick={() => {
              setCurrent(5);
              setTitolo(value[3].h1);
              setParagrafo(value[3].p);
            }}
          >
            1
          </button>
          <div></div>
        </div>
      </div>
      <div className="text-right p-10">
        <h1 className="textlight font-BlenderBold text-white sm:text-4xl text-3xl">
          {titolo}
        </h1>
        <p className="font-BlenderBook text-white sm:text-lg text-base">
          {paragrafo}
        </p>
      </div>
    </div>
  );
}

export default RoadMap;
