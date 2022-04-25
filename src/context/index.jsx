import { SettingsProvider } from "./settings";
const ContextStore = ({ children }) => {
  return <SettingsProvider>{children}</SettingsProvider>;
};

export default ContextStore;
