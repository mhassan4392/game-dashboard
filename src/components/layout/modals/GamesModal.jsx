import { useEffect, useState } from "react";
import Axios from "@/utils/axios";

import { useSelector, useDispatch } from "react-redux";
import { setCountry } from "@/store/features/game/gameSlice";

import MobileModel from "./MobileModal";

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

const GamesMenu = ({ open = false, onClose }) => {
  const { translations } = useSelector((state) => state.lan);

  const { country } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  const [allGames, setAllGames] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [v, setV] = useState(null);
  useEffect(() => {
    // dispatch(setCountry("CN"));
    if (open) {
      setError(false);
      setLoading(true);
      Axios({ url: "/api/ox/getcata", method: "POST", data: { v } })
        .then((res) => {
          setAllGames(res?.data?.info || {});
          setV(res?.data?.v || null);
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [open]);

  const handleClick = (game) => {
    dispatch(setCountry(game));
    onClose();
  };

  return (
    <div>
      <MobileModel
        open={open}
        onBackClick={onClose}
        label="FILTER GAMES"
        containerClass="!z-[1000]"
      >
        {loading && (
          <div className="h-full flex items-center justify-center grow">
            <Spinner />
          </div>
        )}
        {!loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.keys(allGames).map((game, i) => (
              <div
                key={game}
                className={`flex items-center justify-center cursor-pointer bg-dark-light hover:bg-gray-800 h-24 hover:bg-opacity-75 py-4 px-2 transition-all duration-200 ${
                  game == country
                    ? "bg-gradient-to-r from-primary to-secondary text-white bg-opacity-75"
                    : ""
                }`}
                onClick={() => handleClick(game)}
              >
                <div className="flex flex-col items-center space-y-2">
                  <img className="w-12 h-12" src={images[game]} alt="" />
                  <p className="truncate text-sm">
                    {translations.CY[game] || ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </MobileModel>
    </div>
  );
};

export default GamesMenu;
