import React from "react";
import CharDesktop from "../images/Characters-Desktop.png";
import CharMobile from "../images/Characters-Mobile.png";
function Product() {
  return (
    <div className="z-30 ">
      <div>
        <div className=" w-full  hidden md:flex  2xl:-mt-[620px]  xl:-mt-[480px] lg:-mt-[400px] md:-mt-[310px]">
          <img src={CharDesktop} className=" " alt="" />
        </div>
        <div className=" w-full md:hidden flex sm:-mt-[280px]  -mt-[220px]">
          <img src={CharMobile} className=" " alt="" />
        </div>
        <div className="bg-[#272932] bg-pattern bg-repeat">
          <div className="mx-auto pt-4">
            <div className="text-center textlight font-BlenderBold text-white sm:text-4xl text-3xl">
              THE GAME
            </div>
            <div className="flex justify-center gap-2 pt-2 pb-6">
              <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
              <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
            </div>
            <div className="text-center textlight font-BlenderBold text-white sm:text-6xl text-[50px] leading-none ">
              EXPLORE,FIGHT <br />
              AND EARN
            </div>

            <div className="xl:px-56 lg:px-44 sm:px-12 px-8 pt-4 pb-10">
              <p className="text-center  font-BlenderBook text-white sm:text-lg text-base ">
                Haunted Space is a profound adventure that allows you to
                explore, play, and earn your way through star-choked skies in
                this immersive exploration of Time, Space, and Human
                Civilization's depths. There are two versions of the game: The
                Single-player and Multiplayer Version. Both are unique yet part
                of one fascinating and exciting world that any gamer will love
                to explore!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
