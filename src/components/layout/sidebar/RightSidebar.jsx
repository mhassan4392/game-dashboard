import {
  TabButton,
  TabItem,
  Tabs,
  TabsButtons,
  TabsItems,
} from "@/components/tabs";
import EmptyBet from "@/components/bet/EmptyBet";
import BetForm from "@/components/bet/BetForm";
import { useSelector } from "react-redux";

const RightSidebar = () => {
  const { translations } = useSelector((state) => state.lan);
  const { slip, status } = useSelector((state) => state.bet);
  return (
    // relative and z-10 class for mobile banner
    <div className="bg-dark overflow-y-auto overflow-x-hidden relative z-10 md:z-0 h-full scrollbar">
      <Tabs className="h-full flex flex-col">
        <TabsButtons className="flex items-center bg-dark-light mb-2">
          <TabButton
            activeClass="tab-active"
            className="basis-1/2 px-2 py-4 text-sm"
            tab="slip"
          >
            Bet Slip
          </TabButton>
          <TabButton
            activeClass="tab-active"
            className="basis-1/2 px-2 py-4 text-sm"
            tab="history"
          >
            Bet History
          </TabButton>
        </TabsButtons>
        <TabsItems className="flex-grow flex flex-col">
          <TabItem tab="slip" className="h-full" defaultTab>
            {!slip && !status && <EmptyBet />}
            {status == "add" && <BetForm />}
          </TabItem>
          <TabItem tab="history" className="flex-grow flex flex-col">
            <Tabs defaultTab="pending" className="flex flex-col flex-grow">
              <TabsButtons className="flex items-center bg-dark-light mb-2">
                <TabButton
                  activeClass="tab-active"
                  className="basis-1/2 px-2 py-4 text-sm"
                  tab="pending"
                >
                  Pending
                </TabButton>
                <TabButton
                  activeClass="tab-active"
                  className="basis-1/2 px-2 py-4 text-sm"
                  tab="setteled"
                >
                  Setteled
                </TabButton>
              </TabsButtons>
              <TabsItems className="flex-grow">
                <TabItem tab="pending" className="h-full">
                  <EmptyBet />
                </TabItem>
                <TabItem tab="setteled" className="h-full">
                  <EmptyBet />
                </TabItem>
              </TabsItems>
            </Tabs>
          </TabItem>
        </TabsItems>
      </Tabs>
    </div>
  );
};

export default RightSidebar;
