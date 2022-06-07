import React from 'react';
import Luca from '../images/Luca-Member.svg';
import Ivan from '../images/Ivan-Member.svg';
import Giorgio from '../images/Giorgio-Member.svg';
import Federico from '../images/Federico-Member.svg';
import Igf from '../images/Igf-Member.svg';
import Aries from '../images/Aries-Member.svg';
import {
  AiFillLinkedin,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';

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
          <div className="w-[80%] relative md:w-[100%]    mx-auto">
            <div className="hidden sm:flex absolute top-0 cursor-pointer text-white  bg-[#FA6A4F] p-[7px]">
              <a href="">
                <AiOutlineTwitter size={25} />
              </a>
            </div>
            <div className="hidden sm:flex absolute top-0 left-[39px] border-l-[1px] border-[#cb4d37] cursor-pointer text-white  bg-[#FA6A4F] p-[7px]">
              <a href="https://google.it">
                <AiFillLinkedin size={25} />
              </a>
            </div>
            <img src={Luca} className="mx-auto" alt="" />
            <div className="flex-row flex mt-2 space-x-1">
              <div className="flex-1 shapeButton sm:hidden  top-0 cursor-pointer text-white  bg-[#FA6A4F] p-[7px]">
                <a
                  href=""
                  className="flex font-BlenderBook items-center space-x-[1px] "
                >
                  <AiOutlineTwitter size={25} />
                  <span className="flex-1 text-right">Twitter</span>
                </a>
              </div>
              <div className="flex-1 sm:hidden  top-0 left-[39px] border-l-[1px] border-[#cb4d37] cursor-pointer text-white  bg-[#FA6A4F] p-[7px]">
                <a
                  href=""
                  className="flex font-BlenderBook items-center space-x-[1px] "
                >
                  <AiFillLinkedin size={25} />
                  <span className="flex-1 text-right">Linkedin</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-[80%] md:w-[100%]   mx-auto">
            <img src={Giorgio} className="mx-auto" alt="" />
          </div>
          <div className="w-[80%] md:w-[100%]   mx-auto">
            <img src={Ivan} className="mx-auto" alt="" />
          </div>
          <div className="w-[80%] md:w-[100%]   mx-auto">
            <img src={Federico} className="mx-auto" alt="" />
          </div>
          <div className="w-[80%] md:w-[100%]  mx-auto">
            <img src={Igf} className="mx-auto" alt="" />
          </div>
          <div className="w-[80%] md:w-[100%]  mx-auto">
            <img src={Aries} className="mx-auto" alt="" />
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
