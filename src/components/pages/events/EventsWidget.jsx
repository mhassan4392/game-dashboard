import { useState } from "react";
import EventModal from "./EventModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGame } from "@/store/features/game/gameSlice";
import { setStatus, setBet } from "@/store/features/bet/betSlice";

import BetFormModal from "@/components/bet/BetFormModal";

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

const EventsWidget = ({ game }) => {
  console.log(game);
  const [betFormModal, setBetFormModal] = useState(false);
  const { translations } = useSelector((state) => state.lan);
  const dispatch = useDispatch();
  const [eventModal, setEventModal] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    dispatch(setGame(game));
    e.stopPropagation();
    const lgWidth = 1024;
    const bodyWidth = document.body.clientWidth;
    if (bodyWidth < lgWidth) {
      setEventModal(true);
    } else {
      navigate(`/events/${game.Id}`);
    }
  };
  return (
    <>
      <BetFormModal
        open={betFormModal}
        onClose={() => setBetFormModal(false)}
      />
      <EventModal
        open={eventModal}
        id={game.Id}
        onClose={() => setEventModal(false)}
      />
      <div
        onClick={handleClick}
        className="relative flex py-2 flex-col lg:flex-row lg:items-center justify-between border-l-4 pl-2 my-1 border-primary bg-dark-light cursor-pointer transition-all duration-200 hover:bg-secondary hover:bg-opacity-50 pr-10 md:pr-20"
      >
        <div className="text-xs flex flex-row lg:flex-col justify-between mb-2 space-y-1 lg:mb-0">
          <div className="flex items-center space-x-2 order-2 lg:order-1">
            <img src={images[game.Na]} className="w-5" alt="" />
            <span>{game?.STime}</span>
          </div>
          <div className="flex flex-row lg:flex-col order-1 lg:order-2">
            <div className="truncate mr-1">
              {translations?.GameCategory[game.CateId]}
            </div>
            <div className="truncate">{translations?.Market[game?.Name]}</div>
          </div>
        </div>

        {/* on sm screen */}
        <div className="space-y-2 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center basis-1/3"></div>
            <div className="flex relative items-center justify-between border border-secondary border-opacity-25 bg-dark-light h-10 basis-1/3">
              <p className="text-2xl border-r border-secondary border-opacity-25 basis-1/2 h-full flex items-center justify-center pr-2">
                <span>-</span>
              </p>
              <p className="text-2xl basis-1/2 h-full flex items-center justify-center pl-2">
                <span>-</span>
              </p>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="border border-secondary py-0.5 px-1.5 text-sm bg-dark-light border-opacity-25">
                  VS
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center basis-1/3"></div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs truncate basis-1/3 text-center">
              {translations?.BetItems[game?.Items[0].Name]}
            </p>
            <p className="text-sm font-bold basis-1/3 text-center">Winner</p>
            <p className="text-xs truncate basis-1/3 text-center">
              {translations?.BetItems[game?.Items[1].Name]}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="basis-1/3 text-center flex items-center justify-center">
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setStatus("add"));
                  dispatch(
                    setBet({
                      odds: game.Items[0].Odds,
                      date: game.STime,
                      market: translations?.Market[game?.Name],
                      status: translations?.BetItems[game?.Items[0].Name],
                      itemId: game?.Items[0].Id,
                    })
                  );
                  setBetFormModal(true);
                }}
                className="border border-secondary py-1 bg-dark-light w-20 font-bold border-opacity-40"
              >
                {game.Items[0].Odds}
              </p>
            </div>
            <div className="basis-1/3 text-center flex items-center justify-center">
              <p className="text-xs border-2 text-[#25f09a] border-[#25f09a] rounded px-1 py-[1px] bg-dark-light font-bold border-opacity-40">
                OPEN
              </p>
            </div>
            <div className="basis-1/3 text-center flex items-center justify-center">
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setStatus("add"));
                  dispatch(
                    setBet({
                      odds: game.Items[1].Odds,
                      date: game.STime,
                      market: translations?.Market[game?.Name],
                      status: translations?.BetItems[game?.Items[0].Name],
                      itemId: game?.Items[1].Id,
                    })
                  );
                  setBetFormModal(true);
                }}
                className="border border-secondary py-1 bg-dark-light w-20 font-bold border-opacity-40"
              >
                {game.Items[1].Odds}
              </p>
            </div>
          </div>
        </div>

        {/* on md screen */}
        <div className="text-xs items-center justify-around pl-2 hidden md:flex">
          <div
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setStatus("add"));
              dispatch(
                setBet({
                  odds: game.Items[0].Odds,
                  date: game.STime,
                  market: translations?.Market[game?.Name],
                  status: translations?.BetItems[game?.Items[0].Name],
                  itemId: game?.Items[0].Id,
                })
              );
            }}
            className="flex items-center justify-end w-44 h-14 border border-secondary border-opacity-50 py-2 px-3 bg-dark-light hover:bg-secondary hover:bg-opacity-30 transition-all duration-200"
          >
            <div className="text-right space-y-1">
              <div className="text-md text-[14px] sm:text-lg">
                {game.Items[0].Odds}
              </div>
              <div className="truncate text-[12px]">
                {translations?.BetItems[game?.Items[0].Name]}
              </div>
            </div>
          </div>
          <div className="text-lg mx-2 lg:mx-6 xl:mx-10 h-14 text-center flex items-center justify-center">
            vs
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setStatus("add"));
              dispatch(
                setBet({
                  odds: game.Items[1].Odds,
                  date: game.STime,
                  market: translations?.Market[game?.Name],
                  status: translations?.BetItems[game?.Items[1].Name],
                  itemId: game?.Items[1].Id,
                })
              );
            }}
            className="flex items-center justify-start w-44 h-14 border border-secondary border-opacity-50 py-2 px-3 bg-dark-light hover:bg-secondary hover:bg-opacity-30 transition-all duration-200"
          >
            <div className="text-left space-y-1">
              <div className="text-md text-[14px] sm:text-lg">
                {game.Items[1].Odds}
              </div>
              <div className="truncate text-[12px]">
                {translations?.BetItems[game?.Items[1].Name]}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary text-xs md:text-sm text-white flex items-center w-10 justify-center absolute top-0 right-0 bottom-0">
          {game.No}
        </div>
      </div>
    </>
  );
};

export default EventsWidget;
