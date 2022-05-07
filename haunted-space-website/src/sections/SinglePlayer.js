import React from "react";
import Characters from "../images/SpaceShip.png";
function SinglePlayer() {
  return (
    <div className="z-30  ">
      <div>
        <div className="bg-divider z-10 mx-0  w-full bg-cover absolute bg-center  bg-repeat-x -m-1">
          <h1 className="opacity-0 p-2 ">ciao</h1>
        </div>
        <div className="bg-[#272932] bg-pattern lg:flex-row flex-col-reverse flex 	 items-center py-24   bg-repeat">
          <div className="lg:w-2/5 w-4/5 mx-auto">
            <img src={Characters} alt="" />
          </div>
          <div className="mx-auto pt-4 lg:w-3/5 w-full lg:px-9 px-10 ">
            <div className="text-center textlight font-BlenderBold text-white sm:text-4xl text-3xl">
              SINGLE PLAYER
            </div>
            <div className="flex justify-center gap-2 pt-2 pb-6">
              <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
              <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
            </div>
            <div className="text-center textlight font-BlenderBold text-white sm:text-6xl  text-[50px] leading-none ">
              DREAD AMONGST THE STARS
            </div>

            <div className="  pt-4 pb-5">
              <p className="text-center  font-BlenderBook text-white sm:text-lg text-base ">
                You're Raider in service of the Human Empire and have connected
                with millions of others who have settled in the Neterun galaxy,
                seeking to harvest a rare source of energy called Sonic Matter.
                Using the massive Metal Mother Facility as your base of
                operations, you realize that not all is peaceful in the empty
                darkness of Neterun's space.
              </p>
            </div>
            <div className="flex justify-center pt-6 pb-10 gap-4">
              <button className="text-white bg-[#FA6A4F] shapeButton font-BlenderMedium shape px-4 py-2 ">
                ESPLORA
              </button>
              <button className="text-white border-[#FA6A4F] border-2  font-BlenderMedium  px-4 py-2 ">
                TRAILER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePlayer;