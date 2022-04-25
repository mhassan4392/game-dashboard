import { useEffect } from "react";

import Router from "./router";
import Axios from "@/utils/axios";
import ContextStore from "./context";

const App = () => {
  useEffect(() => {
    Axios({ url: "/api/ox/getconfig" }).then((res) => console.log(res));
  }, []);
  return (
    <ContextStore>
      <Router />
    </ContextStore>
  );
};

export default App;
