import { createContext, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from "@/utils/axios";
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
  const paramName =
    searchParams.get("name") || localStorage.getItem("name") || "aaron";
  const paramKey =
    searchParams.get("key") || localStorage.getItem("key") || "abcdefgh";
  const paramLan = searchParams.get("lan") || localStorage.getItem("lan") || 1;

  localStorage.setItem("lan", paramLan);
  localStorage.setItem("key", paramKey);
  localStorage.setItem("name", paramName);

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
    // console.log(configRes.data.info);
    setConfig(configRes.data.info);
  };

  return (
    <SettingsContext.Provider value={{ key, config, getLaunch, getConfig }}>
      {children}
    </SettingsContext.Provider>
  );
};
