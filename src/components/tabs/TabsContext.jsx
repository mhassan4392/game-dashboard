import { createContext, useState } from "react";

export const TabsContext = createContext({});

export const TabsProvider = ({ children }) => {
  const [tab, setTab] = useState(null);
  return (
    <TabsContext.Provider value={{ tab, setTab }}>
      {children}
    </TabsContext.Provider>
  );
};
