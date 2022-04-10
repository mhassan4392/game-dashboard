import { GiTrophyCup } from "react-icons/gi";
import eventgame from "../../../assets/images/eventgame.png";
import play from "../../../assets/images/play.png";
import fire from "../../../assets/images/fire.gif";
import teamonelogo from "../../../assets/images/teamonelogo.png";
import teamtwologo from "../../../assets/images/teamtwologo.png";

import { Link } from "react-router-dom";

const GameResultsStatus = () => {
  return (
    <Link to="/game-results/12345">
      <div className="flex items-center justify-between pl-2 my-1 bg-dark transition-all duration-200 hover:bg-secondary hover:bg-opacity-20">
        <div className="text-xs">
          <div className="flex items-center space-x-2">
            <img src={eventgame} className="w-5" alt="" />
            <span>6:30</span>
            {/* <span className="bg-red-500 px-1 py-0.5 text-white rounded-sm text-[10px]">
            INPLAY
          </span>
          <AiOutlinePlaySquare className="text-2xl opacity-25" />
          <img src={fire} className="w-5" alt="" /> */}
          </div>
          <div>EUROPA LEAGUE</div>
          <div>BO5</div>
        </div>
        <div className="text-xs flex items-center space-x-5">
          <div className="flex items-center justify-between w-44 h-14 border border-secondary border-opacity-50 py-2 px-3 bg-dark-light">
            <div>
              <img src={teamonelogo} className="w-7" alt="" />
            </div>
            <div className="text-right">
              <GiTrophyCup className="text-lg" />
              <div className="truncate">Top Esports Armor</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-20 h-14 border border-secondary border-opacity-50 py-2 px-3 bg-dark-light">
            <GiTrophyCup className="text-lg" />
            <p>Draw</p>
          </div>
          <div className="flex items-center justify-between w-44 h-14 border border-secondary border-opacity-50 py-2 px-3 bg-dark-light">
            <div className="text-left">
              <GiTrophyCup className="text-lg" />
              <div className="truncate">Top Esports Armor</div>
            </div>
            <div>
              <img src={teamtwologo} className="w-7" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-secondary bg-opacity-20 text-sm h-16 px-2 flex items-center">
          +149
        </div>
      </div>
    </Link>
  );
};

export default GameResultsStatus;
