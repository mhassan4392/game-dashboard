import { useEffect, useState } from "react";
import Axios from "@/utils/axios";

import Spinner from "@/components/spinner/Spinner";

// images
import CN from "@/assets/images/country/flags/svg/cn.svg";
import DE from "@/assets/images/country/flags/svg/de.svg";
import FR from "@/assets/images/country/flags/svg/fr.svg";
import HK from "@/assets/images/country/flags/svg/hk.svg";
import ID from "@/assets/images/country/flags/svg/id.svg";
import IT from "@/assets/images/country/flags/svg/it.svg";
import JP from "@/assets/images/country/flags/svg/jp.svg";
import KR from "@/assets/images/country/flags/svg/kr.svg";
import MY from "@/assets/images/country/flags/svg/my.svg";
import RU from "@/assets/images/country/flags/svg/ru.svg";
import SG from "@/assets/images/country/flags/svg/sg.svg";
import TH from "@/assets/images/country/flags/svg/th.svg";
import US from "@/assets/images/country/flags/svg/us.svg";
import { useSelector } from "react-redux";
const images = {
  CN,
  DE,
  FR,
  HK,
  ID,
  IT,
  JP,
  KR,
  MY,
  RU,
  SG,
  TH,
  US,
};

// links
const LeftSidebar = () => {
  const { translations } = useSelector((state) => state.lan);

  const [allGames, setAllGames] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [v, setV] = useState(null);
  useEffect(() => {
    setError(false);
    setLoading(true);
    Axios({ url: "/api/ox/getcata", method: "POST", data: { v } })
      .then((res) => {
        // console.log(res);
        setAllGames(res?.data?.info || {});
        setV(res?.data?.v || null);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="bg-dark-light overflow-y-auto scrollbar h-full left-sidebar">
        {loading && (
          <div className="h-full flex items-center justify-center grow">
            <Spinner />
          </div>
        )}
        {!loading &&
          Object.keys(allGames).map((game, i) => (
            <div
              key={game}
              className={`flex items-center justify-between cursor-pointer hover:bg-gray-800 hover:bg-opacity-75 py-4 px-2 transition-all duration-200 ${
                game == "CN"
                  ? "bg-gradient-to-r from-primary to-secondary text-white bg-opacity-75"
                  : ""
              }`}
            >
              <div className="flex items-center space-x-2">
                <img className="w-5 h-5" src={images[game]} alt="" />
                <p className="truncate text-sm">
                  {translations.CY[game] || ""}
                </p>
              </div>
              <div className="text-xs">{allGames[game]}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default LeftSidebar;
