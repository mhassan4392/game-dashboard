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
  // scrolling element reference
  const scrollElRef = useRef(null);

  // scroll more games visible or not
  const visibleRef = useRef();

  // if component is mounted or not
  const isMounted = useRef(false);

  // data from store
  const { loading, country, games, tabs, tab, dt, dtTrigger } = useSelector(
    (state) => state.game
  );

  const dispatch = useDispatch();

  // is scroll more games visible or not
  const [visible, setVisible] = useState(true);

  // run when date time changed
  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
      await dispatch(getGames());
    };
    if (isMounted.current && dtTrigger) {
      run();
    }
  }, [dt]);

  // run when tab changed
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

  // run when country changed
  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
      await dispatch(getGames());
    };

    if (isMounted.current) {
      run();
    }
  }, [country]);

  // run when scroll more games visible
  useEffect(() => {
    const run = async () => {
      await dispatch(getGames());
    };
    if (isMounted.current && visible) {
      run();
    }
  }, [visible]);

  // initial run
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

  // wheel handler
  const wheelHandler = async (e) => {
    const isvisible = isVisible(visibleRef);
    if (isvisible && e.deltaY > 0 && !loading) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // touch down handler on mobile screens
  let oldScroll = 0;
  const onTouchEnd = (e) => {
    let newScroll = scrollElRef.current.scrollTop;
    console.log(newScroll);
    const isvisible = isVisible(visibleRef);
    if (isvisible && newScroll > oldScroll && !loading) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    oldScroll = newScroll;
  };

  return (
    <>
      <div className="lg:hidden">
        <MobileBanner />
      </div>
      <div
        className="flex-grow h-full scrollbar overflow-hidden overflow-x-hidden overflow-y-auto"
        ref={scrollElRef}
        onWheel={wheelHandler}
        onTouchEnd={onTouchEnd}
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

export default GameResults;
