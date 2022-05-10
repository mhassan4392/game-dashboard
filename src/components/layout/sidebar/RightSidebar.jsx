import {
  TabButton,
  TabItem,
  Tabs,
  TabsButtons,
  TabsItems,
} from "@/components/tabs";
import EmptyBet from "@/components/bet/EmptyBet";
import { useSelector } from "react-redux";

const RightSidebar = () => {
  const { translations } = useSelector((state) => state.lan);
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
            <EmptyBet />
          </TabItem>
          <TabItem tab="history" className="flex-grow flex flex-col">
            <Tabs defaultTab="yesterday" className="flex flex-col flex-grow">
              <TabsButtons className="flex items-center bg-dark-light mb-2">
                <TabButton
                  activeClass="tab-active"
                  className="basis-1/2 px-2 py-4 text-sm"
                  tab="yesterday"
                >
                  {translations?.Date[0]}
                </TabButton>
                <TabButton
                  activeClass="tab-active"
                  className="basis-1/2 px-2 py-4 text-sm"
                  tab="today"
                >
                  {translations?.Date[1]}
                </TabButton>
              </TabsButtons>
              <TabsItems className="flex-grow">
                <TabItem tab="yesterday" className="h-full">
                  <EmptyBet />
                </TabItem>
                <TabItem tab="today" className="h-full">
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
