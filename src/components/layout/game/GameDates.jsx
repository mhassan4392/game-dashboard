import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDt,
  setDtTrigger,
  getEarlytradeDates,
  getJackpottradeDates,
} from "@/store/features/game/gameSlice";
import { format } from "date-fns";
import Slider from "react-slick";
import "./slider.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GameDatesModal from "./GameDatesModel";

const GameDates = () => {
  const dispatch = useDispatch();
  // data from store
  const { tab, dt, dates } = useSelector((state) => state.game);

  // settings for slider
  const settings = {
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <FiChevronRight />,
    prevArrow: <FiChevronLeft />,
    // responsive: [
    //   {
    //     breakpoint: 1400,
    //     settings: {
    //       slidesToShow: 7,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToShow: 6,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1100,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };

  // initial run and when tab changes
  useEffect(() => {
    const run = async () => {
      // if eary trade
      if (tab == "getearlytrade") {
        await dispatch(getEarlytradeDates());
        // if jackpot
      } else if (tab == "getjackpot") {
        await dispatch(getJackpottradeDates());
      }
    };
    run();
  }, [tab]);

  return (
    // if early trade and jackpot page show this
    <>
      {(tab == "getearlytrade" || tab == "getjackpot") && (
        <>
          <div className="items-center bg-dark-light shrink-0 text-xs md:block hidden w-full dates-slider px-12">
            {/* Slider Start */}
            <Slider {...settings}>
              {dates.map((date, i) => (
                <div>
                  <div
                    onClick={async () => {
                      await dispatch(setDtTrigger(true));
                      await dispatch(
                        setDt(format(new Date(date), "yyyy-MM-dd"))
                      );
                    }}
                    className={`flex flex-col items-center justify-center py-2 space-y-1 flex-nowrap mx-2 cursor-pointer ${
                      dt == format(new Date(date), "yyyy-MM-dd")
                        ? "text-primary"
                        : ""
                    }`}
                    key={i}
                  >
                    <div className="w-max">
                      {format(new Date(date), "yyyy-MM-dd")}
                    </div>
                    <div className="font-extralight">
                      {format(new Date(date), "EE")}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            {/* Slider End */}
          </div>
          <div className="items-center justify-center py-2 bg-dark-light px-4 flex-nowrap scrollbar-x shrink-0 text-xs flex md:hidden w-full">
            {/* Game Dates Modal */}
            <GameDatesModal />
          </div>
        </>
      )}
    </>
  );
};

export default GameDates;
