import { useEffect, useRef } from "react";
import Spinner from "@/components/spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import banner from "@/assets/images/banner.jpg";
import GameResultsWidget from "@/components/pages/gameresults/GameResultsWidget";
import MobileBanner from "@/components/banner/MobileBanner";
import { useDispatch, useSelector } from "react-redux";
import { getGames, resetGames, setTab } from "@/store/features/game/gameSlice";

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
      await dispatch(getGames());
    };
    if (isMounted.current) {
      run();
    } else {
      isMounted.current = true;
      dispatch(resetGames());
      dispatch(setTab("gettodays"));
    }
  }, [country]);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(resetGames());
    }
  }, [tab]);

  return (
    <>
      <div className="lg:hidden">
        <MobileBanner />
      </div>
      {/* <div>
        <img src={banner} className="h-16 w-full" alt="" />
      </div> */}
      <TabsItems className="flex-grow h-full scrollbar overflow-y-auto overflow-x-hidden">
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
                      if (!isMounted.current) {
                        dispatch(resetGames());
                      }
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
    </>
  );
};

export default GameResults;
