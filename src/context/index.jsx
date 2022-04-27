import { LanguageProvider } from "./language";
import { SettingsProvider } from "./settings";
import { UserProvider } from "./user";
const ContextStore = ({ children }) => {
  return (
    <LanguageProvider>
      <UserProvider>
        <SettingsProvider>{children}</SettingsProvider>
      </UserProvider>
    </LanguageProvider>
  );
};

export default ContextStore;
