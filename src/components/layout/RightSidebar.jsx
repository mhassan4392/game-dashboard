import { TabButton, TabItem, Tabs, TabsButtons, TabsItems } from "../tabs";

import hand from "../../assets/images/hand.png";

const RightSidebar = () => {
  return (
    <div className="bg-dark overflow-auto h-[83vh] scrollbar right-sidebar">
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
            <div className="h-full flex flex-col items-center justify-center">
              <p className="text-center text-sm px-3">
                Your bet slip is empty. Start betting by clicking on the odds.
              </p>
              <button className="px-5 py-1 rounded border border-primary border-opacity-25 mt-3 hand-button">
                x.x.x
              </button>
              <img src={hand} className="w-10 ml-12 -mt-6 hand-image" alt="" />
            </div>
          </TabItem>
          <TabItem tab="history" className="flex-grow flex flex-col">
            <Tabs className="flex flex-col flex-grow">
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
                  tab="settled"
                >
                  Settled
                </TabButton>
              </TabsButtons>
              <TabsItems className="flex-grow">
                <TabItem tab="pending" className="h-full" defaultTab>
                  <div className="h-full flex flex-col items-center justify-center">
                    <p className="text-center text-sm px-3">
                      Your bet slip is empty. Start betting by clicking on the
                      odds.
                    </p>
                    <button className="px-5 py-1 rounded border border-primary border-opacity-25 mt-3 hand-button">
                      x.x.x
                    </button>
                    <img
                      src={hand}
                      className="w-10 ml-12 -mt-6 hand-image"
                      alt=""
                    />
                  </div>
                </TabItem>
                <TabItem tab="settled" className="h-full">
                  <div className="h-full flex flex-col items-center justify-center">
                    <p className="text-center text-sm px-3">
                      Your bet slip is empty. Start betting by clicking on the
                      odds.
                    </p>
                    <button className="px-5 py-1 rounded border border-primary border-opacity-25 mt-3 hand-button">
                      x.x.x
                    </button>
                    <img
                      src={hand}
                      className="w-10 ml-12 -mt-6 hand-image"
                      alt=""
                    />
                  </div>
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
