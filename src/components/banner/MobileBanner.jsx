import { useRef } from "react";
import { FaBullhorn } from "react-icons/fa";
import "./index.scss";

const MobileBanner = () => {
  // reference for banner container
  const ref = useRef(null);
  return (
    <div className="flex justify-between items-center h-8 lg:h-10 w-full">
      {/* Horn Icon */}
      <div className="bg-dark-light px-4 h-full flex items-center justify-center z-[1] overflow-hidden">
        <FaBullhorn className="text-primary" />
      </div>
      {/* Banner Text */}
      <div className="grow h-full relative flex items-center" ref={ref}>
        <p
          className="bg-transparent text-xs lg:sm banner-content min-w-max text-right absolute -z-0"
          style={{
            transform: `translateX(${
              ref.current?.clientWidth ? ref.current.clientWidth + "px" : "100%"
            })`,
          }}
        >
          2022 League of Legends Circuit Oceania Split 1, League of Legends,
          2022-03-28 13:47:00 (PEACE vs Pentanet.GG) All bets placed MAP 1 WHICH
          ROLE GET THE MAP MVP, MAP 3 WHICH ROLE GET THE MAP MVP will be
          considered VOID due to no official result after 24 hours from event
          time. Parlay calculation will be taken as one (1). We apologize for
          any inconvenience caused.
          {"           "}
          NBA, Basketball,2022-03-29 10:00:00（Tre Mann) All bets placed will be
          considered VOID due to are didn't play. Parlay calculation will be
          taken as one (1). We apologize for any inconvenience caused.
        </p>
      </div>
    </div>
  );
};

export default MobileBanner;
