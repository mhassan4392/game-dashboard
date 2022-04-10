import { AiOutlinePlaySquare } from "react-icons/ai";
import eventgame from "../../../assets/images/eventgame.png";
import play from "../../../assets/images/play.png";
import fire from "../../../assets/images/fire.gif";
import teamonelogo from "../../../assets/images/teamonelogo.png";
import teamtwologo from "../../../assets/images/teamtwologo.png";
import { Link } from "react-router-dom";

const EventsMatch = () => {
  return (
    <Link to="/events/12345">
      <div className="flex items-center justify-between border-l-4 pl-2 my-1 border-primary bg-dark-light cursor-pointer transition-all duration-200 hover:bg-secondary hover:bg-opacity-50">
        <div className="text-xs">
          <div className="flex items-center space-x-2">
            <img src={eventgame} className="w-5" alt="" />
            <span>6:30</span>
            <span className="bg-red-500 px-1 py-0.5 text-white rounded-sm text-[10px]">
              INPLAY
            </span>
            <AiOutlinePlaySquare className="text-2xl opacity-25" />
            <img src={fire} className="w-5" alt="" />
          </div>
          <div className="truncate">NBA</div>
          <div>BO5</div>
        </div>
        <div className="text-xs flex items-center space-x-5">
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
        <div className="bg-secondary text-white h-16 px-2 flex items-center">
          +149
        </div>
      </div>
    </Link>
  );
};

export default EventsMatch;
