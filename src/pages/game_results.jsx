import { useState, useEffect } from "react";
import GameResultsWidget from "@/components/pages/gameresults/GameResultsWidget";
import Spinner from "@/components/spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "@/store/features/game/gameSlice";

const GameResults = () => {
  const { tab } = useOutletContext();
  // loading
  const { loading, country, games } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, [country]);

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
      {loading && (
        <div className="h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {tabs.map((tab) => (
        <div key={tab.id}>
          {!loading && (
            <TabItem tab={tab.title} className="h-full">
              <>
                {games.map((game, i) => (
                  <div key={i}>
                    <GameResultsWidget game={game} />
                  </div>
                ))}
              </>
            </TabItem>
          )}
        </div>
      ))}
    </TabsItems>
  );
};

export default GameResults;
