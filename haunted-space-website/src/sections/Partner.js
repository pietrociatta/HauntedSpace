import React from 'react';
import '../Partner.css';
import google from '../images/google.png';

function Partner() {
  return (
    <div className="tech-slideshow bg-[#272932] bg-pattern">
      <div className="mover-1">
        <img src={google} alt="" />
        <img src={google} alt="" />
        <img src={google} alt="" />
        <img src={google} alt="" />
        <img src={google} alt="" />

        <img src={google} alt="" />
        <img src={google} alt="" />
        <img src={google} alt="" />
        <img src={google} alt="" />
        <img src={google} alt="" />
      </div>
    </div>
  );
}

export default Partner;
