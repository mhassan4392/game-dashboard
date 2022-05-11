import { useEffect, useRef } from "react";
import GameResultsWidget from "@/components/pages/gameresults/GameResultsWidget";
import Spinner from "@/components/spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import { useDispatch, useSelector } from "react-redux";
import { getGames, resetGames } from "@/store/features/game/gameSlice";

import VisibilitySensor from "react-visibility-sensor";

const GameResults = () => {
  const isMounted = useRef(false);

  const { loading, country, games, tabs, tab } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
      console.log("hello");
      await dispatch(getGames());
    };
    if (isMounted.current) {
      run();
    } else {
      isMounted.current = true;
      dispatch(resetGames());
    }
  }, [country]);

  useEffect(() => {
    dispatch(resetGames());
  }, [tab]);

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
                  if (isVisible && isMounted) {
                    console.log("mounted");
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
