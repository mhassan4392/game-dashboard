import { AiFillLock } from "react-icons/ai";
import { BsFillPlayFill, BsX } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import eventgame from "@/assets/images/eventgame.png";
import play from "@/assets/images/play.png";
import fire from "@/assets/images/fire.gif";
import teamonelogo from "@/assets/images/teamonelogo.png";
import teamtwologo from "@/assets/images/teamtwologo.png";
import {
  TabButton,
  TabItem,
  Tabs,
  TabsButtons,
  TabsItems,
} from "@/components/tabs";

import GameResultWidget from "@/components/pages/gameresults/GameResultWidget";
import GameResultHeader from "../components/pages/gameresults/GameResultHeader";

const GameResult = () => {
  return (
    <div className="flex-grow flex flex-col overflow-hidden">
      <GameResultHeader />

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
          <TabItem
            defaultTab
            tab="match"
            className="bg-[#2d799b] bg-opacity-25 md:bg-dark"
          >
            {[...Array(20)].map((ar, i) => (
              <GameResultWidget key={i} />
            ))}
          </TabItem>
          <TabItem tab="firsthalf" className="bg-dark"></TabItem>
        </TabsItems>
      </Tabs>
    </div>
  );
};

export default GameResult;
