import React from "react";
import All from "../assets/svgs/All.svg";
import Wheelers from "../assets/svgs/Wheelers.svg";
import Twowheelers from "../assets/svgs/Bikes.svg";
import Cars from "../assets/svgs/Cars.svg";
import Bicycles from "../assets/svgs/Bicycles.svg";
import GPS from "../assets/svgs/GPS.svg";
import Chargers from "../assets/svgs/Chargers.svg";
import Battery from "../assets/svgs/Battery.svg";

const Subheader = () => {
  return (
    <div className="flex w-full justify-around md:overflow-hidden overflow-scroll mt-5 px-3 md:text-xl text-xs">
      <div className="flex flex-col items-center justify-center">
        <img src={All} alt="all" className="md:h-auto h-12" />
        All
      </div>
      <div className="flex flex-col items-center md:ml-0 ml-4 truncate">
        <img src={Wheelers} alt="Wheelers" className="md:h-auto h-12" />
        3-Wheelers
      </div>
      <div className="flex flex-col items-center md:ml-0 ml-4 truncate">
        <img src={Twowheelers} alt="Bikes" className="md:h-auto h-12" />
        2-Wheelers
      </div>
      <div className="flex flex-col items-center md:ml-0 ml-4">
        <img src={Cars} alt="Cars" className="md:h-auto h-12" />
        Cars
      </div>
      <div className="flex flex-col items-center md:ml-0 ml-4">
        <img src={Bicycles} alt="Bicycles" className="md:h-auto h-12" />
        Bicycles
      </div>
      <div className="flex flex-col items-center md:ml-0 ml-4 truncate">
        <img src={Battery} alt="Battery" className="md:h-auto h-12" />
        Battery
      </div>
      <div className="flex flex-col items-center md:ml-0 ml-4 truncate">
        <img src={Chargers} alt="Chargers" className="md:h-auto h-12" />
        Chargers
      </div>
      <div className="flex flex-col items-center md:ml-0 ml-4">
        <img src={GPS} alt="GPS" className="md:h-auto h-12" />
        GPS
      </div>
    </div>
  );
};

export default Subheader;