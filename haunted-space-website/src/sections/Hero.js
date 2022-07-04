import React, { useState } from 'react';
import video from '../images/Hero-video.mp4';
import { IoMdArrowDropright } from 'react-icons/io';
import Logo from '../images/Logo.svg';
import CharDesktop from '../images/Characters-Desktop.png';
import sfondoSpazio from '../images/sfondospazio.jpeg';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

//2xl:top-[40%] xl:top-[35%] lg:top-[50%] md:top-[40%] top-[35%] left-1/2 right-1/2 positioning

function Hero() {
  const [isOpen, setOpen] = useState(false);
  const [istrailerOpen, settrailerOpen] = useState(false);
  return (
    <div className="">
      <ModalVideo
        channel="youtube"
        autoplay
        mute={0}
        isOpen={isOpen}
        videoId="_Km9D9tmnlU"
        onClose={() => setOpen(false)}
      />
      <ModalVideo
        channel="youtube"
        autoplay
        mute={0}
        isOpen={istrailerOpen}
        videoId="DxaJQ6ojYH8"
        onClose={() => settrailerOpen(false)}
      />
      <div className="hidden md:flex    2xl:h-[700px] xl:h-[700px] lg:h-[700px] md:h-[700px] 2xl:mb-[750px] xl:mb-[500px] lg:mb-[370px]  md:mb-56 sm:h-[900px]   ">
        <div className="flex flex-col justify-center items-center w-full    ">
          <img src={Logo} className="w-3/5 max-w-xl mx-auto" alt="" />
          <h2 className="font-BlenderBook text-xl text-center mt-2 text-white opacity-70">
            First Videogame that combines console and P&E
          </h2>
          <div className="mt-8  max-h-[350px] w-[50%] mx-auto">
            <div
              className=" w-full shapeHamburger  text-white flex items-center justify-center   mx-auto 

  aspect-w-16 aspect-h-8"
            >
              <IoMdArrowDropright
                className=" my-auto  hover:bg-[#c14934]  md:w-[150px] md:h-[150px] cursor-pointer mx-auto"
                onClick={() => setOpen(true)}
              />
            </div>
            <div className="flex justify-center pt-10 gap-4">
              {/* <button
                className="text-white bg-[#FA6A4F] shapeButton font-BlenderMedium shape px-4 py-2 "
                onClick={() => settrailerOpen(true)}
              >
                WATCH TRAILER
              </button> */}
              {/* <button
                className="text-white   border-[#FA6A4F] border-2  font-BlenderMedium  px-4 py-2 "
                onClick={() => settrailerOpen(true)}
              >
                TRAILER
              </button> */}
            </div>
          </div>
        </div>
        <video
          muted
          autoPlay
          loop
          className="h-[2000px] absolute  brightness-50   object-cover z-[-1] "
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <div className="">
        <div className="md:hidden flex flex-col  mb-[350px] sm:mb-[550px] ">
          <div className="absolute -z-[1] h-[500px]">
            <img
              src={sfondoSpazio}
              className="h-[1000px] object-cover"
              alt=""
            />
          </div>
          <div className="w-3/4 mx-auto pb-6 pt-20">
            <img src={Logo} className="" alt="" />
            <h2 className="font-BlenderBook text-xl text-center mt-2 text-white opacity-70">
              First Videogame that combines console and P&E
            </h2>
          </div>
          <div className="w-full    h-40">
            <div className="bg-cover  bg-center bg-sfondoVideo w-[80%] text-white flex items-center justify-center  h-full mx-auto border-[5px]  border-[#FA6A4F] aspect-w-16 aspect-h-7">
              <IoMdArrowDropright
                className=" w-[120px] h-[120px] mx-auto my-auto"
                onClick={() => setOpen(true)}
              />
            </div>
            <div className="flex justify-center pt-10 gap-4">
              <button
                onClick={() => settrailerOpen(true)}
                className="text-white bg-[#FA6A4F] shapeButton font-BlenderMedium shape px-4 py-2 "
              >
                WATCH TRAILER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
