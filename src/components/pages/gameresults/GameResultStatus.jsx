import { AiFillLock } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import eventgame from "../../../assets/images/eventgame.png";
import play from "../../../assets/images/play.png";
import fire from "../../../assets/images/fire.gif";
import teamonelogo from "../../../assets/images/teamonelogo.png";
import teamtwologo from "../../../assets/images/teamtwologo.png";
import { TabButton, TabItem, Tabs, TabsButtons, TabsItems } from "../../tabs";

const GameResultStatus = () => {
  return (
    <>
      <div className="bg-secondary bg-opacity-25 flex justify-between items-start px-4">
        <div className="flex text-sm items-center space-x-2 py-3 basis-1/4">
          <div>
            <img src={eventgame} className="w-5" alt="" />
          </div>
          <div>20:48</div>
          {/* <span className="bg-red-500 px-1 py-0.5 text-white rounded-sm text-[10px]">
            INPLAY
          </span> */}
          <div>
            <BsFillPlayFill className="text-lg text-black" />
          </div>
          {/* <div>
            <img src={fire} className="w-5" alt="" />
          </div> */}
        </div>

        <div className="flex items-center justify-between space-x-5 basis-3/4">
          <div className="flex flex-col items-center space-y-1">
            <img src={teamonelogo} className="w-10" alt="" />
            <p className="text-white text-lg">Team One</p>
          </div>

          <div className="flex flex-col items-center space-y-1.5 py-3">
            <p className="text-sm">NBA</p>
            <div className="flex relative items-center border border-secondary border-opacity-25 bg-dark-light">
              <p className="text-2xl px-12 py-1.5 border-r border-secondary border-opacity-25">
                -
              </p>
              <p className="text-2xl px-12 py-1.5">-</p>
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
            <p className="text-white text-lg">Team Two</p>
          </div>
        </div>
      </div>

      <Tabs className="mt-1 flex-grow flex flex-col overflow-hidden">
        <TabsButtons className="flex items-center bg-dark-light mb-1">
          <TabButton
            activeClass="tab-active"
            className="px-3 py-3 text-sm flex flex-col items-center"
            tab="match"
          >
            Match (2)
          </TabButton>
          <TabButton
            activeClass="tab-active"
            className="px-3 py-3 text-sm flex flex-col items-center"
            tab="firsthalf"
          >
            First Half (2)
          </TabButton>
        </TabsButtons>
        <TabsItems className="overflow-auto scrollbar flex-grow">
          <TabItem defaultTab tab="match" className="bg-dark">
            <div className="flex items-center justify-between py-2 px-4 border-b border-opacity-20 border-secondary space-x-4">
              <div className="text-xs basis-1/6">Awaiting Result</div>
              <div className="basis-1/6 flex justify-center">
                <div className="border border-secondary border-opacity-50 w-24 flex items-center justify-center h-10 bg-dark-light ">
                  <GiTrophyCup className="text-lg text-black" />
                </div>
              </div>
              <div className="text-sm flex items-center basis-3/6 justify-between space-x-10 text-center">
                <div></div>
                <div className="border border-secondary border-opacity-50 w-24 flex items-center justify-center h-10 bg-dark-light ">
                  <GiTrophyCup className="text-lg text-black" />
                </div>
                <div></div>
              </div>
              <div className="basis-1/6 flex justify-center">
                <div className="border border-secondary border-opacity-50 w-24 flex items-center justify-center h-10 bg-dark-light ">
                  <GiTrophyCup className="text-lg text-black" />
                </div>
              </div>
            </div>
            {[...Array(20)].map((ar, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row items-center justify-between py-2 px-4 border-b border-opacity-20 border-secondary space-x-4"
              >
                <div className="text-xs text-yellow-500 basis-1/6">
                  Awaiting Result
                </div>
                <div className="basis-1/6 flex justify-center">
                  <div className="border border-secondary border-opacity-50 w-24 flex items-center justify-center h-10 bg-dark-light ">
                    <GiTrophyCup className="text-lg text-black" />
                  </div>
                </div>
                <div className="text-sm flex items-center basis-3/6 justify-between space-x-10 text-center">
                  <div>+15</div>
                  <div>Point Handicap</div>
                  <div>+16</div>
                </div>
                <div className="basis-1/6 flex justify-center">
                  <div className="border border-secondary border-opacity-50 w-24 flex items-center justify-center h-10 bg-dark-light ">
                    <GiTrophyCup className="text-lg text-black" />
                  </div>
                </div>
              </div>
            ))}
          </TabItem>
          <TabItem tab="firsthalf" className="bg-dark">
            <div className="flex items-center justify-between py-2 px-4 border-b border-opacity-20 border-secondary space-x-4">
              <div className="text-xs basis-1/6">Pause</div>
              <div className="basis-1/6 flex justify-center">
                <div className="border border-secondary border-opacity-50 w-24 flex items-center justify-center h-10 bg-dark-light ">
                  <GiTrophyCup className="text-lg text-black" />
                </div>
              </div>
              <div className="text-sm flex items-center basis-3/6 justify-between space-x-10 text-center">
                <div></div>
                <div>Winner</div>
                <div></div>
              </div>
              <div className="basis-1/6 flex justify-center">
                <div className="border border-secondary border-opacity-50 w-24 flex items-center justify-center h-10 bg-dark-light ">
                  <GiTrophyCup className="text-lg text-black" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between py-2 px-4 border-b border-opacity-20 border-secondary space-x-4">
              <div className="text-xs text-yellow-500 basis-1/6">
                Awaiting Result
              </div>
              <div className="basis-1/6 flex justify-center">
                <div className="border border-secondary border-opacity-50 w-24 flex items-center justify-center h-10 bg-dark-light ">
                  <GiTrophyCup className="text-lg text-black" />
                </div>
              </div>
              <div className="text-sm flex items-center basis-3/6 justify-between space-x-10 text-center">
                <div>+15</div>
                <div>Point Handicap</div>
                <div>+16</div>
              </div>
              <div className="basis-1/6 flex justify-center">
                <div className="border border-secondary border-opacity-50 w-24 flex items-center justify-center h-10 bg-dark-light ">
                  <GiTrophyCup className="text-lg text-black" />
                </div>
              </div>
            </div>
          </TabItem>
        </TabsItems>
      </Tabs>
    </>
  );
};

export default GameResultStatus;
