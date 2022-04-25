import axios from "axios";
const Axios = axios.create({
  baseURL: "http://devplayerui.cotu.xyz:9901",
  headers: { "Access-Control-Allow-Origin": "false" },
});
export default Axios;
