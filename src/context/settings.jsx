import { createContext, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from "@/utils/axios";
import { LanguageContext } from "./language";
import { UserContext } from "./user";
export const SettingsContext = createContext({});

export const SettingsProvider = ({ children }) => {
  // initial state or data
  const [key, setKey] = useState(null);
  const [config, setConfig] = useState({
    SiteName: "Game Dashboard",
    Ico: "http://devplayerui.cotu.xyz:9901/swagger/favicon-16x16.png",
  });

  // query params
  const [searchParams] = useSearchParams();
  const paramName = searchParams.get("name") || "aaron";
  const paramKey = searchParams.get("key") || "abcdefgh";
  const paramLan = searchParams.get("lan") || 1;

  const getLaunch = async () => {
    const res = await Axios({
      url: `/api/ox/launch?name=${paramName}&key=${paramKey}&lan=${paramLan}`,
    });
    setKey(res.data.info.KEY);
    // set axios default headers
    Axios.defaults.headers.common["Authorization"] = res.data.info.KEY;
    Axios.defaults.headers.common["Lan"] = paramLan;
  };

  const getConfig = async () => {
    const configRes = await Axios({ url: "/api/ox/getconfig" });
    setConfig(configRes.data.info);
  };

  return (
    <SettingsContext.Provider value={{ key, config, getLaunch, getConfig }}>
      {children}
    </SettingsContext.Provider>
  );
};
