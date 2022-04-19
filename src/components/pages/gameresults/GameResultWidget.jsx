// icons
import { GiTrophyCup } from "react-icons/gi";

const GameResultWidget = () => {
  return (
    <>
      {/* md screen */}
      <div className="hidden md:flex items-center justify-between py-2 px-1 md:px-4 border-b border-opacity-20 border-secondary w-screen md:w-full space-x-1 md:space-x-4">
        <div className="text-xs text-[#d8d852] basis-1/6">Awaiting Result</div>
        <div className="basis-1/6 flex justify-center">
          <div className="border border-secondary border-opacity-50 w-20 md:w-24 text-sm md:text-lg flex items-center justify-center h-10 bg-dark-light ">
            <GiTrophyCup className="text-black" />
          </div>
        </div>
        <div className="text-xs md:text-sm flex items-center basis-3/6 justify-between space-x-1 md:space-x-10 text-center">
          <div>+15</div>
          <div>Point Handicap</div>
          <div>+16</div>
        </div>
        <div className="basis-1/6 flex justify-center">
          <div className="border border-secondary border-opacity-50 w-20 md:w-24 text-sm md:text-lg flex items-center justify-center h-10 bg-dark-light ">
            <GiTrophyCup className="text-black" />
          </div>
        </div>
      </div>

      {/* sm screen */}
      <div className="border-l-2 border-primary space-y-2 py-4 text-xs text-light md:hidden px-4 mb-3">
        <div className="flex items-center justify-between color">
          <div>Point Handicap</div>
          <div className="text-[#d8d852]">Awaiting Result</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="border border-[#2d4264] shadow-lg shadow-[#142131] flex items-center justify-between bg-[#142131] basis-[45%] py-1 px-2 rounded">
            <div>
              <div className="truncate">Team One</div>
              <div>+5</div>
            </div>
            <div className="text-white text-sm">
              <GiTrophyCup className="text-black" />
            </div>
          </div>

          <div className="border border-[#2d4264] shadow-lg shadow-[#142131] flex items-center justify-between bg-[#142131] basis-[45%] py-1 px-2 rounded">
            <div className="text-white text-sm">
              <GiTrophyCup className="text-black" />
            </div>
            <div className="text-right">
              <div className="truncate">Team Two</div>
              <div>+5</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameResultWidget;
