import { BsFillPlayFill, BsX } from "react-icons/bs";
import eventgame from "@/assets/images/eventgame.png";
import fire from "@/assets/images/fire.gif";
import teamonelogo from "@/assets/images/teamonelogo.png";
import teamtwologo from "@/assets/images/teamtwologo.png";

const GameResultHeader = () => {
  return (
    <div className="bg-secondary bg-opacity-25 flex flex-col md:flex-row justify-between items-start px-4 w-full relative">
      <div className="absolute right-0 top-0 p-2 bg-dark-light hover:bg-gradient-to-r from-primary to-secondary text-primary hover:text-white cursor-pointer transition-all duration-200">
        <BsX className="text-xl" />
      </div>

      <div className="flex text-sm items-center space-x-2 py-3 basis-1/4">
        <div>
          <img src={eventgame} className="w-5" alt="" />
        </div>
        <div>20:48</div>
        <span className="bg-red-500 px-1 py-0.5 text-white rounded-sm text-[10px]">
          INPLAY
        </span>
        <div>
          <BsFillPlayFill className="text-lg text-black" />
        </div>
        <div>
          <img src={fire} className="w-5" alt="" />
        </div>
      </div>

      <div className="flex items-center justify-between md:space-x-5 px-1 md:px-6 w-full basis-1 md:basis-3/4">
        <div className="flex flex-col items-center space-y-1">
          <img src={teamonelogo} className="w-10" alt="" />
          <p className="text-white text-xs md:text-sm xl:text-lg">Team One</p>
        </div>

        <div className="flex flex-col items-center space-y-1.5 py-3">
          <p className="text-sm truncate">NBA</p>
          <div className="flex relative items-center justify-between border border-secondary border-opacity-25 bg-dark-light h-10 w-36 sm:w-44 lg:w-52">
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
          <p className="text-sm">B01</p>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <img src={teamtwologo} className="w-10" alt="" />
          <p className="text-white text-xs md:text-sm xl:text-lg">Team Two</p>
        </div>
      </div>
    </div>
  );
};

export default GameResultHeader;
