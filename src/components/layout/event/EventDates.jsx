import { useDispatch, useSelector } from "react-redux";
import { setDt, setDtTrigger } from "@/store/features/game/gameSlice";
import EventDateModal from "@/components/layout/event/EventDateModel";
import getDates from "@/utils/getDates";
import { format } from "date-fns";
import Slider from "react-slick";
import "./slider.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const EventDates = () => {
  const dispatch = useDispatch();
  const { tab, dt } = useSelector((state) => state.game);
  const dates = getDates();

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
                      await dispatch(setDt(date));
                    }}
                    className={`flex flex-col items-center justify-center py-2 space-y-1 flex-nowrap mx-2 cursor-pointer ${
                      dt == date ? "text-primary" : ""
                    }`}
                    key={i}
                  >
                    <div className="w-max">{date}</div>
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
