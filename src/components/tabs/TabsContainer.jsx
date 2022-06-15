import { useContext, useEffect } from "react";

import { TabsContext } from "./TabsContext";

const TabsContainer = ({ children, className, defaultTab, ...rest }) => {
  const { tab, setTab } = useContext(TabsContext);
  useEffect(() => {
    if (defaultTab) {
      setTab(defaultTab);
    }
  }, []);
  return (
    <div className={`${className ? className : ""} tabs`} {...rest}>
      {typeof children == "function" ? children(tab) : children}
    </div>
  );
};

export default TabsContainer;
