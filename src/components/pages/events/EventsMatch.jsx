import { useState } from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";
import eventgame from "../../../assets/images/eventgame.png";
import play from "../../../assets/images/play.png";
import fire from "../../../assets/images/fire.gif";
import teamonelogo from "../../../assets/images/teamonelogo.png";
import teamtwologo from "../../../assets/images/teamtwologo.png";
import EventMenu from "../../layout/mobile/EventMenu";

import { useNavigate } from "react-router-dom";

// import fullConfig from "../../../theme";

const EventsMatch = () => {
  const [eventMenu, setEventMenu] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    // const lgWidth = Number(fullConfig.theme.screens.lg.replace("px", ""));
    const lgWidth = 1024;
    const bodyWidth = document.body.clientWidth;
    if (bodyWidth < lgWidth) {
      setEventMenu(true);
    } else {
      navigate("/events/12345");
    }
  };
  return (
    <>
      <EventMenu open={eventMenu} onClose={() => setEventMenu(false)} />
      <div
        onClick={handleClick}
        className="relative flex py-2 flex-col lg:flex-row lg:items-center justify-between border-l-4 pl-2 my-1 border-primary bg-dark-light cursor-pointer transition-all duration-200 hover:bg-secondary hover:bg-opacity-50 pr-20"
      >
        <div className="text-xs flex flex-row lg:flex-col justify-between mb-2 lg:mb-0">
          <div className="flex items-center space-x-2 order-2 lg:order-1">
            <img src={eventgame} className="w-5" alt="" />
            <span>6:30</span>
            <span className="bg-red-500 px-1 py-0.5 text-white rounded-sm text-[10px]">
              INPLAY
            </span>
            <AiOutlinePlaySquare className="text-2xl opacity-25" />
            <img src={fire} className="w-5" alt="" />
          </div>
          <div className="flex flex-row lg:flex-col order-1 lg:order-2">
            <div className="truncate">NBA</div>
            <div>BO5</div>
          </div>
        </div>

        <div className="text-xs flex items-center justify-around">
          <div className="flex items-center justify-between w-44 h-14 border border-secondary border-opacity-50 py-2 px-3 bg-dark-light hover:bg-secondary hover:bg-opacity-30 transition-all duration-200">
            <div>
              <img src={teamonelogo} className="w-7" alt="" />
            </div>
            <div className="text-right">
              <div className="text-md text-[16px]">2.38</div>
              <div className="truncate">Top Esports Armor</div>
            </div>
          </div>
          <div className="text-lg w-20 h-14 text-center flex items-center justify-center">
            vs
          </div>
          <div className="flex items-center justify-between w-44 h-14 border border-secondary border-opacity-50 py-2 px-3 bg-dark-light hover:bg-secondary hover:bg-opacity-30 transition-all duration-200">
            <div className="text-left">
              <div className="text-md text-[16px]">2.38</div>
              <div className="truncate">Top Esports Armor</div>
            </div>
            <div>
              <img src={teamtwologo} className="w-7" alt="" />
            </div>
          </div>
        </div>

        <div className="bg-secondary text-white flex items-center px-2 ml-10 absolute top-0 right-0 bottom-0">
          +149
        </div>
      </div>
    </>
  );
};

export default EventsMatch;
