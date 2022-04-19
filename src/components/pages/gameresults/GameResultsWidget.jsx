import { useState } from "react";
// assets
import eventgame from "@/assets/images/eventgame.png";
import fire from "@/assets/images/fire.gif";
import teamonelogo from "@/assets/images/teamonelogo.png";
import teamtwologo from "@/assets/images/teamtwologo.png";
import { AiOutlinePlaySquare } from "react-icons/ai";

// navigation
import { useNavigate } from "react-router-dom";

// Modal for small screens
import GameResultModal from "./GameResultModal";

const GameResultsStatus = () => {
  const [gameResultModal, setGameResultModal] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    const lgWidth = 1024;
    const bodyWidth = document.body.clientWidth;
    if (bodyWidth < lgWidth) {
      setGameResultModal(true);
    } else {
      navigate("/game-results/12345");
    }
  };
  return (
    <>
      <GameResultModal
        open={gameResultModal}
        onClose={() => setGameResultModal(false)}
      />
      <div
        onClick={handleClick}
        className="relative flex py-2 flex-col lg:flex-row lg:items-center justify-between border-l-4 pl-2 my-1 border-primary bg-dark-light cursor-pointer transition-all duration-200 hover:bg-secondary hover:bg-opacity-50 pr-10 md:pr-20"
      >
        <div className="text-xs flex flex-row lg:flex-col justify-between mb-2 lg:mb-0">
          <div className="flex items-center space-x-2 order-2 lg:order-1">
            <img src={eventgame} className="w-5" alt="" />
            <span>6:30</span>
            <span className="bg-red-500 px-1 py-[1px] text-white rounded-sm text-[8px] md:text-[1ppx]">
              INPLAY
            </span>
            <AiOutlinePlaySquare className="text-2xl opacity-25" />
            <img src={fire} className="w-5" alt="" />
          </div>
          <div className="flex flex-row lg:flex-col order-1 lg:order-2">
            <div className="truncate mr-1">NBA</div>
            <div className="truncate">BO5</div>
          </div>
        </div>

        {/* on sm screen */}
        <div className="space-y-2 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center basis-1/3">
              <img src={teamonelogo} className="w-7" alt="" />
            </div>
            <div className="flex relative items-center justify-between border border-secondary border-opacity-25 bg-dark-light h-10 basis-1/3">
              <p className="text-2xl border-r border-secondary border-opacity-25 basis-1/2 h-full flex items-center justify-center pr-2">
                <span>-</span>
              </p>
              <p className="text-2xl basis-1/2 h-full flex items-center justify-center pl-2">
                <span>-</span>
              </p>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="border border-secondary py-0.5 px-1.5 text-sm bg-dark-light border-opacity-25">
                  VS
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center basis-1/3">
              <img src={teamtwologo} className="w-7" alt="" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs truncate basis-1/3 text-center">Team One</p>
            <p className="text-sm font-bold basis-1/3 text-center">Winner</p>
            <p className="text-xs truncate basis-1/3 text-center">Team Two</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="basis-1/3 text-center flex items-center justify-center">
              <p className="border border-secondary py-1 bg-dark-light w-20 font-bold border-opacity-40">
                1.28
              </p>
            </div>
            <div className="basis-1/3 text-center flex items-center justify-center">
              <p className="text-xs border-2 text-[#d8d852] border-[#d8d852] rounded px-1 py-[1px] bg-dark-light font-bold border-opacity-40">
                Awaiting Result
              </p>
            </div>
            <div className="basis-1/3 text-center flex items-center justify-center">
              <p className="border border-secondary py-1 bg-dark-light w-20 font-bold border-opacity-40">
                1.28
              </p>
            </div>
          </div>
        </div>

        {/* on md screen */}
        <div className="text-xs items-center justify-around pl-2 hidden md:flex">
          <div className="flex items-center justify-between w-44 h-14 border border-secondary border-opacity-50 py-2 px-3 bg-dark-light hover:bg-secondary hover:bg-opacity-30 transition-all duration-200">
            <div>
              <img src={teamonelogo} className="w-7" alt="" />
            </div>
            <div className="text-right space-y-1">
              <div className="text-md text-[14px] sm:text-lg">2.38</div>
              <div className="truncate text-[12px]">Top Esports Armor</div>
            </div>
          </div>
          <div className="text-lg mx-2 lg:mx-6 xl:mx-10 h-14 text-center flex items-center justify-center">
            vs
          </div>
          <div className="flex items-center justify-between w-44 h-14 border border-secondary border-opacity-50 py-2 px-3 bg-dark-light hover:bg-secondary hover:bg-opacity-30 transition-all duration-200">
            <div className="text-left space-y-1">
              <div className="text-md text-[14px]">2.38</div>
              <div className="truncate text-[12px]">Top Esports Armor</div>
            </div>
            <div>
              <img src={teamtwologo} className="w-7" alt="" />
            </div>
          </div>
        </div>

        <div className="bg-secondary text-xs md:text-sm text-white flex items-center px-1 md:px-2 absolute top-0 right-0 bottom-0">
          +149
        </div>
      </div>
    </>
  );
};

export default GameResultsStatus;
