import React from 'react';
import Header2 from '../components/Header2';
import TeamCard from '../components/TeamCard';
import team from '../Pages/team.json';
import '../Teampage.css';
function Teampage() {
  return (
    <div className="debug-screens ">
      <Header2 />
      <div className=" flex flex-col justify-center w-full h-full pt-24">
        <div className="pt-10">
          <div className="text-center textlight mx-4  lg:mx-52 font-BlenderBold text-white sm:text-5xl text-[45px] leading-none ">
            TEAM MEMBERS
          </div>
          <div className="flex justify-center gap-2 pt-4 pb-3">
            <div className="bg-[#932121] shape1Divider h-1 w-6"></div>
            <div className="bg-[#FA6A4F] shape2Divider h-1 w-20"></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mx-auto mt-12 h-fit w-[80%]">
          {team.member.map((utente, index) => (
            <div className="" key={index}>
              <TeamCard
                name={utente.nome}
                ruolo={utente.ruolo}
                image={utente.image}
                linkedin={utente.linkedin}
                twitter={utente.twitter}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teampage;
