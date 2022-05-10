import { useEffect } from "react";
import MobileModel from "@/components/layout/modals/MobileModal";
import { TabItem, Tabs, TabsItems } from "@/components/tabs";
import EventWidget from "@/components/pages/events/EventWidget";
import EventModalHeader from "@/components/pages/events/EventModalHeader";
import { useSelector, useDispatch } from "react-redux";
import { getBets } from "@/store/features/bet/betSlice";
import Spinner from "@/components/spinner/Spinner";

const EventModal = ({ open, onClose, id }) => {
  const { bets, loading } = useSelector((state) => state.bet);
  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      dispatch(getBets({ id }));
    }
  }, [open]);
  return (
    <div className="">
      <Tabs defaultTab={bets && bets[0] ? bets[0].Stage : 0}>
        <MobileModel
          onBackClick={onClose}
          open={open}
          modalBodyClass="overflow-hidden p-0 bg-[#2d799b] bg-opacity-25 md:bg-dark"
          modalHeaderClass="p-0"
          header={() => <EventModalHeader onXClick={onClose} />}
        >
          {!loading && (
            <TabsItems className="overflow-auto scrollbar flex-grow">
              {bets.map((bet) => (
                <TabItem key={bet.Stage} tab={bet.Stage} className="py-2">
                  {bet.Items.map((b, i) => (
                    <div key={i}>
                      <EventWidget bet={b} />
                    </div>
                  ))}
                </TabItem>
              ))}
            </TabsItems>
          )}
          {loading && (
            <div className="h-full flex items-center justify-center">
              <Spinner />
            </div>
          )}
        </MobileModel>
      </Tabs>
    </div>
  );
};

export default EventModal;
