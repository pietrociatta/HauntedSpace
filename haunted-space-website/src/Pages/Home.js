import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import CallToAction from '../sections/CallToAction';
import CalltoAction2 from '../sections/CalltoAction2';

import Hero from '../sections/Hero';
import Igf from '../sections/Igf';
import MobileShipSlider from '../sections/MobileShipSlider';
import MobileSlider from '../sections/MobileSlider';
import Partner from '../sections/Partner';
import PlayToEarn from '../sections/PlayToEarn';
import Product from '../sections/Product';
import RoadMap from '../sections/RoadMap';
import RoadMapMobile from '../sections/RoadMapMobile';
import ShipSlider from '../sections/ShipSlider';
import SinglePlayer from '../sections/SinglePlayer';
import Slider from '../sections/Slider';
import Team from '../sections/Team';

function Home() {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <div className="pt-14" id="hero">
        <Hero />
      </div>
      <div className="relative" id="thegame">
        <Product />
      </div>
      <div className="hidden md:flex h-[80vh] ">
        <Slider />
      </div>
      <div className="md:hidden flex h-[50vh]">
        <MobileSlider />
      </div>
      <div className="relative">
        <CallToAction />
      </div>
      <div className="hidden md:flex h-[80vh] ">
        <ShipSlider />
      </div>
      <div className="md:hidden flex h-[50vh]">
        <MobileShipSlider />
      </div>
      <div className="relative">
        <CalltoAction2 />
      </div>
      <div className="relative" id="playtoearn">
        <PlayToEarn />
      </div>

      <div className="hidden md:flex " id="roadmap">
        <RoadMap />
      </div>

      <div className=" md:hidden " id="roadmapm">
        <RoadMapMobile />
      </div>

      <div>
        <Igf />
      </div>
      <div id="team">
        <Team />
      </div>
    </div>
  );
}

export default Home;
