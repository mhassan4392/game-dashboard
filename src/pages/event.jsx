// tabs component
import {
  TabButton,
  TabItem,
  Tabs,
  TabsButtons,
  TabsItems,
} from "@/components/tabs";

// single event widget
import EventWidget from "@/components/pages/events/EventWidget";
import EventHeader from "@/components/pages/events/EventHeader";

const Event = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Header */}
      <EventHeader />

      <Tabs className="mt-1 flex-grow flex flex-col overflow-hidden">
        <TabsButtons className="flex items-center bg-dark-light mb-1">
          <TabButton
            activeClass="tab-active"
            className="px-3 py-3 text-sm flex flex-col items-center"
            tab="match"
          >
            Match (2)
          </TabButton>
          <TabButton
            activeClass="tab-active"
            className="px-3 py-3 text-sm flex flex-col items-center"
            tab="firsthalf"
          >
            First Half (2)
          </TabButton>
        </TabsButtons>
        <TabsItems className="overflow-auto scrollbar grow">
          <TabItem defaultTab tab="match" className="bg-dark">
            {[...Array(20)].map((ar, i) => (
              <EventWidget />
            ))}
          </TabItem>
          <TabItem tab="firsthalf" className="bg-dark"></TabItem>
        </TabsItems>
      </Tabs>
    </div>
  );
};

export default Event;
