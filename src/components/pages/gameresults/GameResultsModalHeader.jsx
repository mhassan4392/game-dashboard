import { useState } from "react";
import { TabsButtons, TabButton } from "@/components/tabs";
import { AiOutlineAppstore } from "react-icons/ai";
import GamesMenu from "@/components/layout/modals/GamesModal";
import { useSelector, useDispatch } from "react-redux";
import { setTab } from "../../../store/features/game/gameSlice";

const GameResultsModalHeader = () => {
  const dispatch = useDispatch();
  const { translations } = useSelector((state) => state.lan);
  const { tabs, tab } = useSelector((state) => state.game);
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
            onClick={() => dispatch(setTab(tab.api))}
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
