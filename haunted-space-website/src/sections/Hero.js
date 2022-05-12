import React from "react";
import video from "../images/Hero-video.mp4";
import { IoMdArrowDropright } from "react-icons/io";
import Logo from "../images/Logo.svg";
import CharDesktop from "../images/Characters-Desktop.png";
function Hero() {
  return (
    <div className="">
      <div className="hidden md:flex  2xl:h-[1300px] xl:h-[1000px] lg:h-[900px] md:h-[700px] ">
        <div className="absolute w-full 2xl:top-[50%] xl:top-[45%] lg:top-[50%] md:top-[40%] top-[35%] left-1/2 right-1/2 positioning  ">
          <img src={Logo} className="w-3/5 max-w-xl mx-auto" alt="" />
          <h2 className="font-BlenderBook text-xl text-center mt-2 text-white opacity-70">
            The best game NFT projuect.
          </h2>
          <div className="flex justify-center pt-6 gap-4">
            <button className="text-white bg-[#FA6A4F] shapeButton font-BlenderMedium shape px-4 py-2 ">
              ESPLORA
            </button>
            <button className="text-white border-[#FA6A4F] border-2  font-BlenderMedium  px-4 py-2 ">
              TRAILER
            </button>
          </div>
        </div>
        <video
          muted
          autoPlay
          loop
          className="h-full brightness-50  w-full     object-cover z-[-1] "
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>

      <div className="md:hidden sm:pb-72 pb-52 pt-20 bg-hero bg-cover   w-full z-[-1] ">
        <div className="w-3/4 mx-auto pb-6">
          <img src={Logo} className="" alt="" />
          <h2 className="font-BlenderBook text-xl text-center mt-2 text-white opacity-70">
            The best game NFT projuect.
          </h2>
        </div>
        <div className="w-full    h-40">
          <div className="bg-black w-[80%] text-white flex items-center justify-center  h-full mx-auto border-[5px]  border-[#FA6A4F] ">
            <IoMdArrowDropright size={100} />
          </div>
        </div>
        <div className="flex justify-center pt-10 gap-4">
          <button className="text-white bg-[#FA6A4F] shapeButton font-BlenderMedium shape px-4 py-2 ">
            ESPLORA
          </button>
          <button className="text-white border-[#FA6A4F] border-2  font-BlenderMedium  px-4 py-2 ">
            TRAILER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
