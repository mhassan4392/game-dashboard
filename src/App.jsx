import { useContext } from "react";

import { Helmet } from "react-helmet";

import Router from "./router";

import { SettingsContext } from "./context/settings";

const App = () => {
  const { config } = useContext(SettingsContext);

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
