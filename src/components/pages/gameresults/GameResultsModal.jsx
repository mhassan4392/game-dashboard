import { useState, useEffect } from "react";
import MobileModel from "@/components/layout/modals/MobileModal";
import { Tabs, TabsItems, TabItem } from "@/components/tabs";
import Spinner from "@/components/spinner/Spinner";
import GameResultsWidget from "./GameResultsWidget";
import GameResultsModalHeader from "./GameResultsModalHeader";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "@/store/features/game/gameSlice";

const GameResultsModal = ({ open, onClose }) => {
  const { loading, country, games } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      dispatch(getGames());
    }
  }, [country, open]);

  const [tabs] = useState([
    { id: 0, title: "today" },
    { id: 1, title: "early" },
    { id: 2, title: "minutes" },
    { id: 3, title: "jackpot" },
    { id: 4, title: "outright" },
    ,
  ]);
  return (
    <div>
      <Tabs defaultTab="today">
        <MobileModel
          label="Game Results"
          onBackClick={onClose}
          modalBodyClass="p-0"
          modalHeaderClass="p-0"
          open={open}
          header={() => <GameResultsModalHeader />}
        >
          <TabsItems className="overflow-auto h-full scrollbar">
            {loading && (
              <div className="h-full flex items-center justify-center">
                <Spinner />
              </div>
            )}
            {!loading &&
              tabs.map((tab) => (
                <TabItem tab={tab.title} key={tab.id}>
                  {games.map((game, i) => (
                    <div key={i}>
                      <GameResultsWidget game={game} />
                    </div>
                  ))}
                </TabItem>
              ))}
          </TabsItems>
        </MobileModel>
      </Tabs>
    </div>
  );
};

export default GameResultsModal;
