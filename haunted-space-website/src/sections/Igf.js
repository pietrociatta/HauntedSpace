import React from 'react';
import IgtTeam from '../images/Igf-Logo.svg';
function Igf() {
  return (
    <div className="bg-IgfBg bg-cover  bg-center bg-no-repeat ">
      <div className="pt-[200px] pb-[200px] text-center  max-w-2xl  mx-auto">
        <div className="flex  flex-col justify-center">
          <div className="justify-center flex ">
            <img src={IgtTeam} alt="max-w-[200px] " />
          </div>
          <div>
            {' '}
            <p className="text-center  font-BlenderMedium pt-8 lg:mx-0 mx-10 text-white sm:text-lg text-base ">
              The Haunted Space project is an all-Italian production developed
              by an AAA game development and production company that includes a
              team of more than 30 people including artists, designers and
              developers. Present on the market for 4 years now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Igf;
