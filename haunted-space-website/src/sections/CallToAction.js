import React from 'react';
import CharDesktop from '../images/Characters-Desktop.png';
import CharMobile from '../images/Characters-Mobile.png';
function Product() {
  return (
    <div className="z-30 ">
      <div>
        <div className="bg-[#272932] bg-pattern bg-repeat ">
          <div className="mx-auto pt-24 pb-20 ">
            <div className="text-center textlight mx-4  lg:mx-52 font-BlenderBold text-white sm:text-5xl text-[45px] leading-none ">
              READY TO BE A PART OF OUR JOURNEY?
            </div>
            <div className="flex justify-center gap-2 pt-4 pb-3">
              <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
              <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
            </div>

            <div className="xl:px-56 lg:px-44 sm:px-12 px-8 pt-4 pb-6">
              <p className="text-center  font-BlenderBook text-white sm:text-lg text-base ">
                White paper and details about the game are coming soon.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5 w-4/5 h-[80px] mx-auto justify-center text-white bg-[#FA6A4F] shapeButton font-BlenderMedium shape px-4 text-3xl py-0 ">
                <div className="flex items-center">
                  <div className="animate-bounceAlpha ">></div>
                </div>
                <div className="md:text-xl">JOIN NOW</div>
                <div className="flex items-center rotate-180">
                  <div className="animate-bounceAlpha ">></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
