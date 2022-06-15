import { useRef, useEffect, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import "./index.scss";

import Axios from "@/utils/axios";

const MobileBanner = () => {
  // reference for banner container
  const ref = useRef(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Axios({ url: "/api/ox/get5msg", method: "POST" }).then((res) => {
      setMessages(res.data || []);
    });
  }, []);
  return (
    <div className="flex justify-between items-center h-8 lg:h-10 w-full">
      {/* Horn Icon */}
      <div className="bg-dark-light px-4 h-full flex items-center justify-center overflow-hidden shrink-0">
        <FaBullhorn className="text-primary" />
      </div>
      {/* Banner Text */}
      <div className="grow h-full relative block overflow-hidden" ref={ref}>
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
    </div>
  );
};

export default MobileBanner;
