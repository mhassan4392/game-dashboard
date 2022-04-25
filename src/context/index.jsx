import { UseSiteConfigProvider } from "./useSiteConfig";
const ContextStore = ({ children }) => {
  return <UseSiteConfigProvider>{children}</UseSiteConfigProvider>;
};

export default ContextStore;
