import { useEffect, useRef, useState, memo } from "react";
import Spinner from "@/components/spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import GameResultsWidget from "@/components/pages/gameresults/GameResultsWidget";
import MobileBanner from "@/components/banner/MobileBanner";
import { useDispatch, useSelector } from "react-redux";
import {
  getGames,
  resetGames,
  setDt,
  setDtTrigger,
  setTab,
} from "@/store/features/game/gameSlice";

import { format } from "date-fns";
import isVisible from "@/utils/isVisible";

const GameResults = () => {
  const visibleRef = useRef();
  const isMounted = useRef(false);
  const { loading, country, games, tabs, tab, dt, dtTrigger } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
      await dispatch(getGames());
    };
    if (isMounted.current && dtTrigger) {
      run();
    }
  }, [dt]);

  useEffect(() => {
    const run = async () => {
      await dispatch(setDtTrigger(false));
      let date = new Date();
      date.setDate(date.getDate() + 1);
      await dispatch(setDt(format(date, "yyyy-MM-dd")));
      await dispatch(resetGames());
      await dispatch(getGames());
    };
    if (isMounted.current) {
      run();
    }
  }, [tab]);

  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
      await dispatch(getGames());
    };

    if (isMounted.current) {
      run();
    }
  }, [country]);

  const scrollDiv = async (e) => {
    const isvisible = isVisible(visibleRef);
    if (isvisible && e.deltaY > 0 && !loading) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    const run = async () => {
      await dispatch(getGames());
    };
    if (isMounted.current && visible) {
      run();
    }
  }, [visible]);

  useEffect(() => {
    const run = async () => {
      if (isMounted.current) {
        await dispatch(getGames());
      } else {
        await dispatch(setTab("gettodays"));
        await dispatch(resetGames());
        await dispatch(getGames());
        isMounted.current = true;
      }
    };

    run();
  }, []);

  return (
    <>
      <div className="lg:hidden">
        <MobileBanner />
      </div>
      <div
        className="flex-grow h-full scrollbar overflow-hidden overflow-x-hidden overflow-y-auto"
        onWheel={scrollDiv}
      >
        {loading && !games.length && (
          <div className={`flex items-center justify-center h-full`}>
            <Spinner />
          </div>
        )}
        <TabsItems className="">
          {tabs.map((tab) => (
            <div key={tab.id}>
              <TabItem tab={tab.title}>
                <div>
                  {games.map((game, i) => (
                    <div key={i}>
                      <GameResultsWidget game={game} />
                    </div>
                  ))}
                </div>
              </TabItem>
            </div>
          ))}
        </TabsItems>
        <div ref={visibleRef} className="s-screen w-full h-2"></div>
        {loading && games.length > 0 && (
          <div className={`flex items-center justify-center`}>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default memo(GameResults);
