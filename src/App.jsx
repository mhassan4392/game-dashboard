import { Helmet } from "react-helmet";
import Router from "./router";

import { useSelector } from "react-redux";

const App = () => {
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
