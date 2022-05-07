import "./App.css";
import Header from "./components/Header";
import CallToAction from "./sections/CallToAction";
import Gallery from "./sections/Gallery";

import Hero from "./sections/Hero";
import MobileShipSlider from "./sections/MobileShipSlider";
import MobileSlider from "./sections/MobileSlider";
import PlayToEarn from "./sections/PlayToEarn";
import Product from "./sections/Product";
import RoadMap from "./sections/RoadMap";
import ShipSlider from "./sections/ShipSlider";
import SinglePlayer from "./sections/SinglePlayer";
import Slider from "./sections/Slider";

function App() {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <div className="pt-14">
        <Hero />
      </div>
      <div className="relative">
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
        <PlayToEarn />
      </div>
      <div className="relative">
        <SinglePlayer />
      </div>
      <div className=" ">
        <Gallery />
      </div>
      <div className=" ">
        <RoadMap />
      </div>
    </div>
  );
}

export default App;
