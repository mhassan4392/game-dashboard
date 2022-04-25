import { createContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from "@/utils/axios";
export const SettingsContext = createContext({});

export const SettingsProvider = ({ children }) => {
  // initial state or data
  const [name, setName] = useState(null);
  const [key, setKey] = useState(null);
  const [lan, setLan] = useState(null);
  const [config, setConfig] = useState({
    SiteName: "Game Dashboard",
    Ico: "http://devplayerui.cotu.xyz:9901/swagger/favicon-16x16.png",
  });
  const [user, setUser] = useState(null);

  // query params
  const [searchParams] = useSearchParams();
  const paramName = searchParams.get("name") || "aaron";
  const paramKey = searchParams.get("key") || "abcdefgh";
  const paramLan = searchParams.get("lan") || 1;

  useEffect(() => {
    // set lan and name
    setName(searchParams.get("name"));
    setLan(searchParams.get("lan"));
    // launch settings
    const launch = async () => {
      // get key
      const res = await Axios({
        url: `/api/ox/launch?name=${paramName}&key=${paramKey}&lan=${paramLan}`,
      });
      setKey(res.data.info.KEY);
      // set axios default headers
      Axios.defaults.headers.common["Authorization"] = res.data.info.KEY;
      Axios.defaults.headers.common["Lan"] = lan;

      // get site configs
      const configRes = await Axios({ url: "/api/ox/getconfig" });
      setConfig(configRes.data.info);

      // get user info
      const userRes = await Axios({ url: "/api/ox/userinfo" });
      setUser(userRes.data.info);

      // get lan
      const lanRes = await Axios({ url: `/api/ox/getlan?lan=${paramLan}` });
      setLan(lanRes.data.info);
    };

    launch().catch((err) => console.log(err.message));
  }, []);
  return (
    <SettingsContext.Provider value={{ name, key, lan, config, user }}>
      {children}
    </SettingsContext.Provider>
  );
};
