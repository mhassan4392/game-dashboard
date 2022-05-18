import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import { format } from "date-fns";
import "./index.scss";

import Axios from "@/utils/axios";

const BrowserBanner = () => {
  const textRef = useRef();
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
  useLayoutEffect(() => {
    Axios({ url: "/api/ox/get5msg", method: "POST" }).then((res) => {
      const d = res.data.map((d) => {
        return d[0] + d[1];
      });
      let text = "";
      for (let a in d) {
        text += "     ";
        text += d[a];
      }
      if (textRef.current) {
        textRef.current.innerText = text;
      }
    });
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
            ref={textRef}
            className="bg-transparent text-xs lg:sm banner-content min-w-max text-right overflow-x-scroll"
            style={{
              transform: `translateX(${
                ref.current?.clientWidth
                  ? ref.current.clientWidth + "px"
                  : "100%"
              })`,
            }}
          ></p>
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
