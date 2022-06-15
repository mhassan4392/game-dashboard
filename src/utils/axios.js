import axios from "axios";
const Axios = axios.create({
  baseURL: "https://devgame-playersite-api.yplatformctl.com",
});
export default Axios;
