import { useRef, useEffect, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import "./index.scss";

import { motion } from "framer-motion";

import Axios from "@/utils/axios";

const MobileBanner = () => {
  const [bannerText, setBannerText] = useState("");

  // reference for banner container
  const ref = useRef(null);

  useEffect(() => {
    Axios({ url: "/api/ox/get5msg", method: "POST" }).then((res) => {
      const d = res.data.map((d) => {
        return d[0] + " " + d[1];
      });
      let text = "";
      for (let a in d) {
        text += d[a];
      }

      setBannerText(text);
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
          {bannerText && (
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
              {bannerText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;
