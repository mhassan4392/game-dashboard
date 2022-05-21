import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDt, setDtTrigger } from "@/store/features/game/gameSlice";
import EventDateModal from "@/components/layout/event/EventDateModel";
import { format } from "date-fns";
import Slider from "react-slick";
import "./slider.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Axios from "@/utils/axios";
const EventDates = () => {
  const dispatch = useDispatch();
  const { tab, dt } = useSelector((state) => state.game);

  const [dates, setDates] = useState([]);

  const settings = {
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <FiChevronRight />,
    prevArrow: <FiChevronLeft />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    Axios({ url: "/api/ox/getearlytradedt" }).then((res) => {
      setDates(res.data.info);
      console.log(dates);
    });
  }, []);
  return (
    <>
      {(tab == "getearlytrade" || tab == "getjackpot") && (
        <>
          <div className="items-center bg-dark-light shrink-0 text-xs md:block hidden w-full dates-slider px-12">
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
          </div>
          <div className="items-center justify-center py-2 bg-dark-light px-4 flex-nowrap scrollbar-x shrink-0 text-xs flex md:hidden w-full">
            <EventDateModal />
          </div>
        </>
      )}
    </>
  );
};

export default EventDates;
