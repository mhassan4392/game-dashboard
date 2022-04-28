import { useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TabsContext } from "./TabsContext";

const TabItem = ({ children, className, tab, defaultTab, ...rest }) => {
  const { tab: currentTab, setTab } = useContext(TabsContext);
  useEffect(() => {
    if (defaultTab) {
      setTab(tab);
    }
  }, [tab, defaultTab]);
  return (
    // <AnimatePresence>
    <>
      {currentTab == tab && (
        <div
          {...rest}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          className={`${className ? className : ""}`}
        >
          {children}
        </div>
      )}
    </>
    // </AnimatePresence>
  );
};

export default TabItem;
