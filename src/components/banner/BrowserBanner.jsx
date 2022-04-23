import { useRef, useEffect, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import { format } from "date-fns";
import "./index.scss";

const BrowserBanner = () => {
  // reference for banner container
  const ref = useRef(null);

  // clock
  const [clock, setClock] = useState(format(new Date(), "HH:mm:ss"));
  //   date
  var [date] = useState(format(new Date(), "yyyy-MM-dd"));

  // update clock every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(format(new Date(), "HH:mm:ss"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const response = fetch("/api/ox/getmsg", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <div className="flex justify-between items-center h-8 lg:h-10 w-full">
        {/* Horn Icon */}
        <div className="w-52 bg-dark-light h-full inline-flex items-center justify-center">
          <FaBullhorn className="text-primary" />
        </div>
        {/* Banner Text */}
        <div className="flex-grow overflow-hidden" ref={ref}>
          <p
            className="bg-transparent text-xs lg:sm banner-content min-w-max text-right"
            style={{
              transform: `translateX(${
                ref.current?.clientWidth
                  ? ref.current.clientWidth + "px"
                  : "100%"
              })`,
            }}
          >
            2022 League of Legends Circuit Oceania Split 1, League of Legends,
            2022-03-28 13:47:00 (PEACE vs Pentanet.GG) All bets placed MAP 1
            WHICH ROLE GET THE MAP MVP, MAP 3 WHICH ROLE GET THE MAP MVP will be
            considered VOID due to no official result after 24 hours from event
            time. Parlay calculation will be taken as one (1). We apologize for
            any inconvenience caused.
            {"           "}
            NBA, Basketball,2022-03-29 10:00:00（Tre Mann) All bets placed will
            be considered VOID due to are didn't play. Parlay calculation will
            be taken as one (1). We apologize for any inconvenience caused.
          </p>
        </div>
        {/* Date and Clock */}
        <div className="hidden lg:block bg-dark-light h-full">
          <div className="min-w-max bg-dark-light h-full flex items-center justify-center px-5 text-sm font-semibold">
            <span className="mr-4">{date}</span>
            <span className="border-l border-l-secondary border-opacity-25 pl-4">
              {clock}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowserBanner;
