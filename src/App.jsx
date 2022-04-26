import { useContext, useEffect } from "react";

import { Helmet } from "react-helmet";

import Router from "./router";

import { SettingsContext } from "./context/settings";

import Axios from "@/utils/axios";

const App = () => {
  const { config } = useContext(SettingsContext);

  useEffect(() => {
    Axios({ url: "/api/ox/getcata", method: "POST" }).then((res) =>
      console.log(res)
    );
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{config.SiteName}</title>
        <link rel="icon" href={config.Ico} />
      </Helmet>
      <Router />
    </>
  );
};

export default App;
