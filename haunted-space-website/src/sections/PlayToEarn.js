import React from "react";
import Characters from "../images/PlayToEarn.png";
function PlayToEarn() {
  return (
    <div className="z-30 ">
      <div>
        <div className="bg-[#272932] bg-pattern lg:flex md:block items-center py-16   bg-repeat">
          <div className="mx-auto pt-4 lg:w-1/2 w-full lg:px-0 px-10 ">
            <div className="text-center textlight font-BlenderBold text-white sm:text-4xl text-3xl">
              PLAY TO EARN
            </div>
            <div className="flex justify-center gap-2 pt-2 pb-6">
              <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
              <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
            </div>
            <div className="text-center textlight font-BlenderBold text-white sm:text-6xl  text-[50px] leading-none ">
              DOMINATE FOR SUPREMACY
            </div>

            <div className="  pt-4 pb-5">
              <p className="text-center  font-BlenderBook text-white sm:text-lg text-base ">
                The best part is that you can explore the game however you want,
                battling against each other or making alliances with others who
                want to burn 'em all down! There are tones of advanced features
                and jaw-dropping realistic graphics to give you the best
                experience you desire.
              </p>
            </div>
          </div>
          <div className="lg:w-[50%] w-1/2 mx-auto">
            <img
              src={Characters}
              className="lg:w-[90%] xl:w-[70%] w-[100%] mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayToEarn;
