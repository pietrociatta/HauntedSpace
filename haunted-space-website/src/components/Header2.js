import React, { useState } from 'react';

import Logo from '../images/Logo.svg';

import { Link as Linke } from 'react-router-dom';

function Header2() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="fixed w-full z-50 ">
      <div className="bg-[#272932] w-full z-40 fixed   ">
        <header className="flex justify-between items-center mx-[15px] pt-[15px]   text-white font-BlenderMedium  ">
          <div className="max-w-[180px] sm:max-w-[250px] ">
            <img src={Logo} className="" alt="" />
          </div>
          <div>
            <Linke to="/">
              <button className="shape flex items-center font-BlenderBold text-lg bg-[#FA6A4F] px-2 pb-3 pt-2">
                BACK HOME
              </button>
            </Linke>
          </div>
        </header>

        <div className="bg-divider z-40 mx-0 fixed w-full bg-cover bg-center  bg-repeat-x -m-1">
          <h1 className="opacity-0 p-2 ">ciao</h1>
        </div>
      </div>
    </div>
  );
}

export default Header2;
