import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "@/components/spinner/Spinner";
import {
  TabButton,
  TabItem,
  Tabs,
  TabsButtons,
  TabsItems,
} from "@/components/tabs";
import GameResultWidget from "@/components/pages/gameresults/GameResultWidget";
import GameResultHeader from "@/components/pages/gameresults/GameResultHeader";
import { getBets } from "@/store/features/bet/betSlice";
import { useSelector, useDispatch } from "react-redux";

const GameResult = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { translations } = useSelector((state) => state.lan);
  const { bets, loading } = useSelector((state) => state.bet);
  useEffect(() => {
    dispatch(getBets({ id }));
  }, []);
  return (
    <div className="flex h-full grow flex-col overflow-hidden">
      {/* Header */}
      {!loading && <GameResultHeader />}

      {loading && (
        <div className="h-full flex items-center justify-center grow">
          <Spinner />
        </div>
      )}

      {!loading && (
        <Tabs
          defaultTab={bets && bets[0] ? bets[0].Stage : 0}
          className="mt-1 grow h-full flex flex-col overflow-hidden"
        >
          <TabsButtons className="flex items-center bg-dark-light mb-1">
            {bets.map((bet) => (
              <TabButton
                activeClass="tab-active"
                className="px-3 py-3 text-sm flex flex-col items-center"
                tab={bet.Stage}
                key={bet.Stage}
              >
                {translations.Stage[bet.Stage]}
              </TabButton>
            ))}
          </TabsButtons>
          <TabsItems className="flex-grow h-full scrollbar overflow-y-auto overflow-x-hidden">
            {/* {!loading && ( */}
            <>
              {bets.map((bet) => (
                <TabItem
                  key={bet.Stage}
                  tab={bet.Stage}
                  className="bg-[#2d799b] bg-opacity-25 md:bg-dark"
                >
                  {bet.Items.map((b, i) => (
                    <div key={i}>
                      <GameResultWidget bet={b} />
                    </div>
                  ))}
                </TabItem>
              ))}
            </>
          </TabsItems>
        </Tabs>
      )}
    </div>
  );
};

export default GameResult;
