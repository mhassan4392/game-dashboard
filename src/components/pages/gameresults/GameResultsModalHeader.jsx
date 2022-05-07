import { useState } from "react";
import { TabsButtons, TabButton } from "@/components/tabs";
import { AiOutlineAppstore } from "react-icons/ai";
import GamesMenu from "@/components/layout/modals/GamesModal";
import { useSelector } from "react-redux";

const GameResultsModalHeader = () => {
  const { translations } = useSelector((state) => state.lan);
  const [tabs] = useState([
    { id: 0, title: "today" },
    { id: 1, title: "early" },
    { id: 2, title: "minutes" },
    { id: 3, title: "jackpot" },
    { id: 4, title: "outright" },
    ,
  ]);
  const [gamesModal, setGamesModal] = useState(false);
  return (
    <>
      <GamesMenu open={gamesModal} onClose={() => setGamesModal(false)} />
      <TabsButtons className="flex items-end scrollbar-x bg-dark-light px-2 mb-1 flex-nowrap w-screen sm:w-full">
        {tabs.map((tab, i) => (
          <TabButton
            tab={tab.title}
            key={i}
            activeClass="tab-active"
            className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
            as="Link"
            to="/game-results"
          >
            <span>{translations.SecondMenu[tab.id]}</span>
          </TabButton>
        ))}
      </TabsButtons>
      <div className="absolute right-0.5 top-2.5 text-3xl text-secondary px-2 border-l border-secondary py-0 border-opacity-25">
        <AiOutlineAppstore onClick={() => setGamesModal(true)} />
      </div>
    </>
  );
};

export default GameResultsModalHeader;
