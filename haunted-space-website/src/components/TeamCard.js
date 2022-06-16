import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';

const TeamCard = ({ key, name, image, ruolo, linkedin, twitter }) => {
  return (
    <div className="border-[#FA6A4F] border-2 shadow-md h-fit ">
      <div>
        <div className="">
          <img src={image} className="p-3 w-full " alt="" />
        </div>
        <div className="flex flex-col justify-center text-center pb-3 text-white ">
          <h1 className="font-BlenderBold text-xl">{name}</h1>
          <p className="font-BlenderBook">{ruolo}</p>
        </div>
        <div className="flex justify-center space-x-1 px-3 pb-3">
          <div className="flex-1   top-0 cursor-pointer text-white  bg-[#FA6A4F] p-[7px]">
            <a
              href={twitter}
              className="flex font-BlenderBook items-center space-x-[1px] "
            >
              <AiOutlineTwitter size={25} />
              <span className="flex-1 text-right">Twitter</span>
            </a>
          </div>
          <div className="flex-1   top-0 left-[39px] border-l-[1px] border-[#cb4d37] cursor-pointer text-white  bg-[#FA6A4F] p-[7px]">
            <a
              href={linkedin}
              className="flex font-BlenderBook items-center space-x-[1px] "
            >
              <AiFillLinkedin size={25} />
              <span className="flex-1 text-right">Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
