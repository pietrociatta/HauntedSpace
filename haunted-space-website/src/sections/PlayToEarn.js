import React from 'react';
import Characters from '../images/CARDNFT.png';
import Characters2 from '../images/singleplayerimage.png';

function PlayToEarn() {
  return (
    <div className="z-30  ">
      <div>
        <div className="bg-divider z-10 mx-0  w-full bg-cover absolute bg-center  bg-repeat-x -m-1">
          <h1 className="opacity-0 p-2 ">ciao</h1>
        </div>
        <div className="bg-sfondoSpazio w-full bg-no-repeat bg-cover    items-center pt-32 pb-14   bg-re flex-col ">
          <div className="flex flex-col lg:flex-row items-center max-w-[1500px] mx-auto">
            <div className="mx-auto pt-4 lg:w-1/2  w-full  lg:px-8 px-10 ">
              <div className=" ">
                <div className="text-center  textlight font-BlenderBold text-white sm:text-4xl md:text-[45px] text-3xl">
                  SINGLE PLAYER
                </div>
                <div className="flex justify-center gap-2 pt-2 pb-6">
                  <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
                  <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
                </div>
                <div className="text-center textlight font-BlenderBold text-white sm:text-6xl md:text-[60px] text-[50px] leading-none ">
                  DREAD AMONGST THE STARS
                </div>

                <div className="  pt-4 pb-5">
                  <p className="text-center  font-BlenderBook text-white sm:text-lg text-base ">
                    You're Raider in service of the Human Empire and have
                    connected with millions of others who have settled in the
                    Neterun galaxy, seeking to harvest a rare source of energy
                    called Sonic Matter. Using the massive Metal Mother Facility
                    as your base of operations, you realize that not all is
                    peaceful in the empty darkness of Neterun's space.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full  mx-auto">
              <img
                src={Characters2}
                className="lg:w-[90%] xl:w-[70%] w-[80%] mx-auto"
                alt=""
              />
            </div>
          </div>

          <div className="z-30  ">
            <div>
              {/* <div className="bg-divider z-10 mx-0  w-full bg-cover absolute bg-center  bg-repeat-x -m-1">
          <h1 className="opacity-0 p-3 ">ciao</h1>
        </div> */}
              <div className=" lg:flex-row flex-col-reverse flex max-w-[1500px] mx-auto 	 items-center pt-16 pb-16   bg-repeat">
                <div className=" lg:w-[50%]  mx-auto">
                  <img
                    src={Characters}
                    className="lg:w-[70%] xl:w-[90%] w-[80%] pt-16 mx-auto"
                    alt=""
                  />
                </div>
                <div className="mx-auto pt-4 lg:w-3/5 w-full lg:px-9 px-10 ">
                  <div className="text-center textlight font-BlenderBold text-white sm:text-4xl md:text-[45px]  text-3xl">
                    PLAY TO EARN
                  </div>
                  <div className="flex justify-center gap-2 pt-2 pb-6">
                    <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
                    <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
                  </div>
                  <div className="text-center textlight font-BlenderBold text-white sm:text-6xl md:text-[60px]  text-[50px] leading-none ">
                    DOMINATE FOR SUPREMACY
                  </div>

                  <div className="  pt-4 pb-5">
                    <p className="text-center  font-BlenderBook text-white sm:text-lg text-base ">
                      The best part is that you can explore the game however you
                      want, battling against each other or making alliances with
                      others who want to burn 'em all down! There are tones of
                      advanced features and jaw-dropping realistic graphics to
                      give you the best experience you desire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayToEarn;
