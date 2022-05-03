import React from "react";
import video from "../images/Hero-video.mp4";
import { IoMdArrowDropright } from "react-icons/io";
import Logo from "../images/Logo.svg";
function Hero() {
  return (
    <div className="">
      <div className="hidden sm:flex">
        <video
          muted
          autoPlay
          loop
          className="h-full brightness-50  w-full    absolute object-cover z-[-1] "
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>

      <div className="sm:hidden py-36 bg-hero bg-cover  absolute w-full z-[-1] ">
        <div className="w-3/4 mx-auto pb-10">
          <img src={Logo} className="" alt="" />
        </div>
        <div className="w-full    h-44">
          <div className="bg-black w-[80%] text-white flex items-center justify-center  h-full mx-auto border-[5px]  border-[#FA6A4F] ">
            <IoMdArrowDropright size={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
