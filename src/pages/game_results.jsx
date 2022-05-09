import { useState, useEffect } from "react";
import GameResultsWidget from "@/components/pages/gameresults/GameResultsWidget";
import Spinner from "@/components/spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGames, resetGames } from "@/store/features/game/gameSlice";

import VisibilitySensor from "react-visibility-sensor";

const GameResults = () => {
  const { tab } = useOutletContext();
  // loading
  const { loading, country, games } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
    };
    run();
  }, [country, tab]);

  const [tabs] = useState([
    { id: 0, title: "today" },
    { id: 1, title: "early" },
    { id: 2, title: "minutes" },
    { id: 3, title: "jackpot" },
    { id: 4, title: "outright" },
    ,
  ]);

  return (
    <TabsItems className="flex-grow flex flex-col overflow-auto scrollbar">
      {loading && !games.length && (
        <div className={`flex items-center justify-center h-4/5`}>
          <Spinner />
        </div>
      )}
      {tabs.map((tab) => (
        <div key={tab.id}>
          <TabItem tab={tab.title} className="h-full">
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
        </div>
      ))}
    </TabsItems>
  );
};

export default GameResults;
