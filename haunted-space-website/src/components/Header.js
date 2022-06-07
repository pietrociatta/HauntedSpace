import React, { useState } from 'react';
import Divider from '../images/Divider/Bottom-divider.png';
import Logo from '../images/Logo.svg';
import { AiFillHome, AiOutlineTwitter } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdArrowDropright, IoMdClose } from 'react-icons/io';
import { GiConsoleController, GiCoins } from 'react-icons/gi';
import { FaDiscord, FaUser } from 'react-icons/fa';
import { RiRoadMapFill, RiTeamFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

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
                <Link smooth to="hero">
                  <li className="cursor-pointer hover:scale-105 transition">
                    HOME
                  </li>
                </Link>
                <Link smooth to="thegame">
                  <li className="cursor-pointer hover:scale-105 transition">
                    THE GAME
                  </li>
                </Link>
                <Link smooth to="singleplayer">
                  <li className="cursor-pointer hover:scale-105 transition">
                    SINGLE PLAYER
                  </li>
                </Link>
                <Link smooth to="playtoearn">
                  <li className="cursor-pointer hover:scale-105 transition">
                    PLAY TO EARN
                  </li>
                </Link>
                <Link smooth to="roadmap">
                  <li className="cursor-pointer hover:scale-105 transition">
                    ROADMAP
                  </li>
                </Link>

                <Link smooth to="team">
                  <li className="cursor-pointer hover:scale-105 transition">
                    TEAM
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex space-x-2">
              <div className="shape sm:flex  hidden items-center bg-[#FA6A4F] p-2">
                <AiOutlineTwitter size={25} />
              </div>
              <div className=" sm:flex hidden items-center bg-[#FA6A4F] p-2">
                <FaDiscord size={25} />
              </div>
            </div>
            <div
              onClick={showSidebar}
              className="lg:hidden flex bg-[#FA6A4F] sm:shapeHamburger shape p-2"
            >
              {sidebar ? <IoMdClose size={25} /> : <BiMenuAltRight size={25} />}
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
              ? 'nav-menu active flex-col overflow-x-hidden   bg-[#1e1f27]'
              : ' nav-menu flex-col overflow-x-hidden'
          }
        >
          <ul className="text-white hover:  mb-auto font-BlenderMedium text-2xl ">
            <Link smooth to="hero">
              <li
                className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] "
                onClick={showSidebar}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="items-center gap-4 flex">
                    <AiFillHome /> HOME
                  </div>

                  <div className="">
                    <IoMdArrowDropright />
                  </div>
                </div>
              </li>
            </Link>
            <Link smooth to="thegame">
              <li
                className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] "
                onClick={showSidebar}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="items-center gap-4 flex">
                    <GiConsoleController /> THE GAME
                  </div>

                  <div className="">
                    <IoMdArrowDropright />
                  </div>
                </div>
              </li>
            </Link>
            <Link smooth to="singleplayer">
              <li
                className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] "
                onClick={showSidebar}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="items-center gap-4 flex">
                    <FaUser /> SINGLE PLAYER
                  </div>

                  <div className="">
                    <IoMdArrowDropright />
                  </div>
                </div>
              </li>
            </Link>
            <Link smooth to="playtoearn">
              <li
                className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] "
                onClick={showSidebar}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="items-center gap-4 flex">
                    <GiCoins /> PLAY TO EARN
                  </div>

                  <div className="">
                    <IoMdArrowDropright />
                  </div>
                </div>
              </li>
            </Link>
            <Link smooth to="roadmapm">
              <li
                className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] "
                onClick={showSidebar}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="items-center gap-4 flex">
                    <RiRoadMapFill /> ROADMAP
                  </div>

                  <div className="">
                    <IoMdArrowDropright />
                  </div>
                </div>
              </li>
            </Link>
            <Link smooth to="team">
              <li
                className="py-4 px-4 flex items-center gap-4 hover:bg-[#FA6A4F] border-b-[1px] border-[#272832] "
                onClick={showSidebar}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="items-center gap-4 flex">
                    <RiTeamFill /> TEAM
                  </div>

                  <div className="">
                    <IoMdArrowDropright />
                  </div>
                </div>
              </li>
            </Link>
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
              <FaDiscord />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
