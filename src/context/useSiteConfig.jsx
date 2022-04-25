import { createContext } from "react";

const useSiteConfig = createContext();

export const UseSiteConfigProvider = ({ children }) => {
  return <useSiteConfig.Provider value={{}}>{children}</useSiteConfig.Provider>;
};
