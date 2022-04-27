import { createContext, useState } from "react";
import Axios from "@/utils/axios";

const _user = {
  Name: "",
  balance: 0,
};

export const UserContext = createContext({ ..._user });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ ..._user });
  const getUser = async () => {
    const res = await Axios({ url: "/api/ox/userinfo" });
    setUser(res?.data?.info || _user);
  };
  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  );
};
