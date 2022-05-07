import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Router from "./router";

import Axios from "@/utils/axios";

import { useSelector } from "react-redux";

const App = () => {
  useEffect(() => {
    Axios({ url: "/api/ox/getmsgs", method: "POST" }).then((res) => {
      console.log("/api/ox/getmsgs");
      console.log(res.data);
    });
    Axios({ url: "/api/ox/get5msg", method: "POST" }).then((res) => {
      console.log("/api/ox/get5msg");
      console.log(res.data);
    });
  }, []);
  const { config } = useSelector((state) => state.config);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{config?.SiteName}</title>
        <link rel="icon" href={config?.Ico} />
      </Helmet>
      <Router />
    </>
  );
};

export default App;
