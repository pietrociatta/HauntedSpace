import React from "react";
import Luca from "../images/Luca-Member.svg";

function Team() {
  return (
    <div className="bg-[#272932] bg-pattern">
      <div className="bg-divider z-10 mx-0 rotate-180  w-full bg-cover absolute bg-center  bg-repeat-x -m-8">
        <h1 className="opacity-0 p-2 ">ciao</h1>
      </div>
      <div className="md:pt-20 pt-10 pb-0 max-w-4xl mx-auto">
        <div className="text-center textlight font-BlenderBold text-white sm:text-4xl text-3xl">
          TEAM
        </div>
        <div className="flex justify-center gap-2 pt-2 pb-10">
          <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
          <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-x-14 sm:gap-x-10 mx-6  grid-cols-1 gap-y-10 sm:grid-cols-2">
          <div className="w-[100%] hover:scale-105 hover:transition hover:ease-in-out hover:duration-200    mx-auto">
            <img src={Luca} className="mx-auto" alt="" />
          </div>
          <div className="w-[100%] hover:scale-105 hover:transition hover:ease-in-out hover:duration-200  mx-auto">
            <img src={Luca} className="mx-auto" alt="" />
          </div>
          <div className="w-[100%] hover:scale-105 hover:transition hover:ease-in-out hover:duration-200  mx-auto">
            <img src={Luca} className="mx-auto" alt="" />
          </div>
          <div className="w-[100%] hover:scale-105 hover:transition hover:ease-in-out hover:duration-200  mx-auto">
            <img src={Luca} className="mx-auto" alt="" />
          </div>
          <div className="w-[100%] hover:scale-105 hover:transition hover:ease-in-out hover:duration-200  mx-auto">
            <img src={Luca} className="mx-auto" alt="" />
          </div>
          <div className="w-[100%] hover:scale-105 hover:transition hover:ease-in-out hover:duration-200  mx-auto">
            <img src={Luca} className="mx-auto" alt="" />
          </div>
        </div>
        <div className=" pt-14  mx-5">
          <div className="flex items-center gap-3 max-w-[300px] h-[80px] mx-auto justify-center text-white bg-[#FA6A4F] shapeButton font-BlenderMedium shape  text-2xl">
            <div className="flex items-center">
              <div className="animate-bounceAlpha ">></div>
            </div>
            <div>JOIN NOW</div>
            <div className="flex items-center rotate-180">
              <div className="animate-bounceAlpha ">></div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-center  font-BlenderMedium pt-24 pb-4 lg:mx-0 mx-10 text-white sm:text-lg text-base ">
            © All right reserved Italian Game Factory 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
