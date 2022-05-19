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
} from "@/store/features/game/gameSlice";

import { format } from "date-fns";
import { setTab } from "../store/features/game/gameSlice";

const GameResults = () => {
  const visibleRef = useRef();
  const scrollableDiv = useRef();
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
      await dispatch(setDt(format(new Date(), "yyyy-MM-dd")));
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
    const rect = visibleRef.current.getBoundingClientRect();

    const isVis =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    console.log(isVis);
    if (isVis && e.deltaY > 0 && !loading) {
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
        ref={scrollableDiv}
      >
        {loading && !games.length && (
          <div className={`flex items-center justify-center h-4/5`}>
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
