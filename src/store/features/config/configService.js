import Axios from "@/utils/axios";
export const fetchKey = async (data) => {
  const res = await Axios({ url: "/api/ox/getCofig", data });
  return res.data.info;
};
