import { useState, useEffect, useRef } from "react";
import MobileModel from "@/components/layout/modals/MobileModal";
import { Tabs, TabsItems, TabItem } from "@/components/tabs";
import Spinner from "@/components/spinner/Spinner";
import GameResultsWidget from "./GameResultsWidget";
import GameResultsModalHeader from "./GameResultsModalHeader";
import { useDispatch, useSelector } from "react-redux";
import { getGames, resetGames, setTab } from "@/store/features/game/gameSlice";

const GameResultsModal = ({ open, onClose }) => {
  const isMounted = useRef(false);
  const { loading, country, games, tabs, tab } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
    };

    if (open) {
      run();
    }
  }, [country, open, tab]);

  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
      await dispatch(getGames());
    };
    if (isMounted.current && open) {
      run();
    } else {
      isMounted.current = true;
      if (open) {
        dispatch(resetGames());
      }
    }
  }, [country, open]);

  useEffect(() => {
    if (open) {
      dispatch(resetGames());
    }
  }, [tab, open]);

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
