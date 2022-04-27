import { useState } from "react";
import MobileModel from "@/components/layout/modals/MobileModal";
import { TabItem, Tabs, TabsItems } from "@/components/tabs";
import EventWidget from "@/components/pages/events/EventWidget";
import EventModalHeader from "@/components/pages/events/EventModalHeader";

const EventModal = ({ open, onClose }) => {
  const [tabs] = useState([
    { id: 0, title: "match" },
    { id: 1, title: "first" },
    { id: 2, title: "second" },
  ]);
  return (
    <div className="">
      <Tabs defaultTab="match">
        <MobileModel
          onBackClick={onClose}
          open={open}
          modalBodyClass="overflow-hidden p-0 bg-[#2d799b] bg-opacity-25 md:bg-dark"
          modalHeaderClass="p-0"
          header={() => <EventModalHeader onXClick={onClose} />}
        >
          <TabsItems className="overflow-auto scrollbar flex-grow">
            {tabs.map((tab) => (
              <TabItem key={tab.id} tab={tab.title} className="py-2">
                {[...Array(20)].map((ar, i) => (
                  <div key={i}>
                    <EventWidget />
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

export default EventModal;
