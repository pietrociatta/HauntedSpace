import React, { useState } from "react";
import Divider from "../images/Divider/Bottom-divider.png";
import Logo from "../images/Logo.svg";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="fixed w-full z-20 ">
      <div className="bg-[#272932] w-full z-40 fixed   ">
        <header className="flex justify-between items-center mx-[15px] pt-[15px]   text-white font-BlenderMedium  ">
          <div className="max-w-[250px] ">
            <img src={Logo} className="" alt="" />
          </div>
          <div className="flex items-center justify-around lg:gap-6 gap-2">
            <div className="">
              <ul className="hidden gap-4 xl:gap-8 lg:flex  ">
                <li>HOME</li>
                <li>THE GAME</li>
                <li>SINGLE PLAYER</li>
                <li>PLAY TO EARN</li>
                <li>ROADMAP</li>
                <li>ABOUT US</li>
              </ul>
            </div>
            <div className="shape sm:flex hidden bg-[#FA6A4F] p-2">
              <AiOutlineTwitter size={25} />
            </div>

            <div
              onClick={showSidebar}
              className="lg:hidden flex bg-[#FA6A4F] sm:shapeHamburger shape p-2"
            >
              <BiMenuAltRight size={25} />
            </div>
          </div>
        </header>
        <div className="bg-divider z-40 mx-0 fixed w-full bg-cover bg-center  bg-repeat-x -m-1">
          <h1 className="opacity-0 p-2 ">ciao</h1>
        </div>
      </div>

      <div className="z-20 fixed">
        <nav
          className={
            sidebar
              ? "nav-menu active flex-col overflow-x-hidden   bg-[#1e1f27]"
              : " nav-menu flex-col overflow-x-hidden"
          }
        >
          <ul className="text-white hover:  mb-auto font-BlenderMedium text-2xl ">
            <li className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] ">
              <div className="w-full flex justify-between items-center">
                <div className="items-center gap-4 flex">
                  <AiOutlineTwitter /> HOME
                </div>
                <div className="">
                  <IoMdArrowDropright />
                </div>
              </div>
            </li>
            <li className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] ">
              <div className="w-full flex justify-between items-center">
                <div className="items-center gap-4 flex">
                  <AiOutlineTwitter /> THE GAME
                </div>
                <div className="">
                  <IoMdArrowDropright />
                </div>
              </div>
            </li>
            <li className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] ">
              <div className="w-full flex justify-between items-center">
                <div className="items-center gap-4 flex">
                  <AiOutlineTwitter /> SINGLE PLAYER
                </div>
                <div className="">
                  <IoMdArrowDropright />
                </div>
              </div>
            </li>
            <li className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] ">
              <div className="w-full flex justify-between items-center">
                <div className="items-center gap-4 flex">
                  <AiOutlineTwitter /> PLAY TO EARN
                </div>
                <div className="">
                  <IoMdArrowDropright />
                </div>
              </div>
            </li>
            <li className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] ">
              <div className="w-full flex justify-between items-center">
                <div className="items-center gap-4 flex">
                  <AiOutlineTwitter /> ROADMAP
                </div>
                <div className="">
                  <IoMdArrowDropright />
                </div>
              </div>
            </li>
            <li className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] ">
              <div className="w-full flex justify-between items-center">
                <div className="items-center gap-4 flex">
                  <AiOutlineTwitter /> ABOUT US
                </div>
                <div className="">
                  <IoMdArrowDropright />
                </div>
              </div>
            </li>
          </ul>
          <div className=" mt-auto justify-center mx-4">
            <button className="p-4 w-full mx-auto rounded-xl mb-6  bg-white text-black ">
              CONNECT WALLET
            </button>
          </div>
          <div className=" justify-center text-white bg-[#272932] p-8 text-2xl gap-4  flex">
            <div>
              <AiOutlineTwitter />
            </div>
            <div>
              <AiOutlineTwitter />
            </div>
            <div>
              <AiOutlineTwitter />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
