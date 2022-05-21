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
import EventWidget from "@/components/pages/events/EventWidget";
import EventHeader from "@/components/pages/events/EventHeader";
import { getBets } from "@/store/features/bet/betSlice";
import { useSelector, useDispatch } from "react-redux";

const Event = () => {
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
      {!loading && <EventHeader />}

      {loading && (
        <div className="h-full flex items-center justify-center grow">
          <Spinner />
        </div>
      )}

      {!loading && (
        <Tabs className="mt-1 grow h-full flex flex-col overflow-hidden">
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
            <>
              {bets.map((bet, i) => (
                <TabItem
                  defaultTab={bet.Stage == 1}
                  key={i}
                  tab={bet.Stage}
                  className="bg-[#2d799b] bg-opacity-25 md:bg-dark"
                >
                  {bet.Items.map((b, i) => (
                    <div key={i}>
                      <EventWidget bet={b} stage={bet.Stage} />
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

export default Event;
