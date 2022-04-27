import { useState, createContext } from "react";

export const ConfigContext = createContext({});

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({});
  return (
    <ConfigContext.Provider value={{ config }}>
      {children}
    </ConfigContext.Provider>
  );
};
