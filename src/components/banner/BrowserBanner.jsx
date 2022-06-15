import { useRef, useEffect, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import { format } from "date-fns";
import "./index.scss";

import Axios from "@/utils/axios";

const BrowserBanner = () => {
  // reference for banner container
  const ref = useRef(null);

  // clock
  const [clock, setClock] = useState(format(new Date(), "HH:mm:ss"));
  //   date
  var [date] = useState(format(new Date(), "yyyy-MM-dd"));

  const [messages, setMessages] = useState([]);

  // update clock every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(format(new Date(), "HH:mm:ss"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    Axios({ url: "/api/ox/get5msg", method: "POST" }).then((res) => {
      setMessages(res.data);
    });
  }, []);
  return (
    <>
      <div className="flex justify-between items-center h-8 lg:h-10 w-full">
        {/* Horn Icon */}
        <div className="bg-dark-light h-full inline-flex items-center justify-center">
          <FaBullhorn className="text-primary mx-4" />
        </div>
        {/* Banner Text */}
        <div
          className="grow h-full block overflow-hidden items-center justify-center"
          ref={ref}
        >
          <div className="grid items-center h-full w-full">
            <p
              className="bg-transparent text-xs lg:sm banner-content min-w-max"
              style={{
                transform: `translateX(${
                  ref.current?.clientWidth
                    ? ref.current.clientWidth + "px"
                    : "100%"
                })`,
              }}
            >
              {/* {bannerText} */}
              <div className="flex items-center space-x-20">
                {messages.map((message, i) => (
                  <span key={i} className="flex items-center space-x-2">
                    <span>{message[0]}</span>
                    <span>{message[1]}</span>
                  </span>
                ))}
              </div>
            </p>
          </div>
        </div>
        {/* Date and Clock */}
        <div className="hidden lg:block bg-dark-light h-full px-2">
          <div className="bg-dark-light h-full flex items-center justify-center px-5 text-sm font-semibold">
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
