import { useState, useEffect } from "react";
import MobileModel from "@/components/layout/modals/MobileModal";
import { Tabs, TabsItems, TabItem } from "@/components/tabs";
import Spinner from "@/components/spinner/Spinner";
import GameResultsWidget from "./GameResultsWidget";
import GameResultsModalHeader from "./GameResultsModalHeader";
import { useDispatch, useSelector } from "react-redux";
import { getGames, resetGames } from "@/store/features/game/gameSlice";

import VisibilitySensor from "react-visibility-sensor";

const GameResultsModal = ({ open, onClose }) => {
  const { loading, country, games } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const [tabs] = useState([
    { id: 0, title: "today" },
    { id: 1, title: "early" },
    { id: 2, title: "minutes" },
    { id: 3, title: "jackpot" },
    { id: 4, title: "outright" },
    ,
  ]);

  const [tab, setTab] = useState("today");

  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
    };

    if (open) {
      run();
    }
  }, [country, open, tab]);

  return (
    <div>
      <Tabs defaultTab="today">
        {(tab) => {
          setTab(tab);
          return (
            <MobileModel
              label="Game Results"
              onBackClick={onClose}
              modalBodyClass="p-0"
              modalHeaderClass="p-0"
              open={open}
              header={() => <GameResultsModalHeader />}
            >
              <TabsItems className="overflow-auto h-full scrollbar">
                {loading && !games.length && (
                  <div className="h-4/5 flex items-center justify-center">
                    <Spinner />
                  </div>
                )}
                {tabs.map((tab) => (
                  <TabItem tab={tab.title} key={tab.id}>
                    <>
                      {games.map((game, i) => (
                        <div key={i}>
                          <GameResultsWidget game={game} />
                        </div>
                      ))}
                      <VisibilitySensor
                        onChange={(isVisible) => {
                          if (isVisible) {
                            dispatch(getGames());
                          }
                        }}
                      >
                        <div className="scroller w-full h-2"></div>
                      </VisibilitySensor>
                      {loading && games.length > 0 && (
                        <div className={`flex items-center justify-center`}>
                          <Spinner />
                        </div>
                      )}
                    </>
                  </TabItem>
                ))}
              </TabsItems>
            </MobileModel>
          );
        }}
      </Tabs>
    </div>
  );
};

export default GameResultsModal;
