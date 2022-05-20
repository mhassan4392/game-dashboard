import { useRef, useEffect, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import "./index.scss";

import { motion } from "framer-motion";

import Axios from "@/utils/axios";

const MobileBanner = () => {
  const [showBanner, setShowBanner] = useState(0);
  const [bannerText, setBannerText] = useState("");
  const textRef = useRef();
  const [textWidth, setTextWidth] = useState(0);
  // reference for banner container
  const ref = useRef(null);

  useEffect(() => {
    Axios({ url: "/api/ox/get5msg", method: "POST" }).then((res) => {
      const d = res.data.map((d) => {
        return d[0] + d[1];
      });
      let text = "";
      for (let a in d) {
        text += "     ";
        text += d[a];
      }

      setBannerText(text);
      const percent =
        (ref.current.clientWidth * 100) / textRef.current.clientWidth;
      console.log(percent);
      console.log(textRef.current.clientWidth);

      setTimeout(() => {
        setShowBanner(true);
      }, 2000);
    });
  }, []);
  return (
    <div className="flex justify-between items-center h-8 lg:h-10 w-full">
      {/* Horn Icon */}
      <div className="bg-dark-light px-4 h-full flex items-center justify-center overflow-hidden shrink-0">
        <FaBullhorn className="text-primary" />
      </div>
      {/* Banner Text */}
      <div
        className="grow h-full relative flex items-center overflow-hidden"
        ref={ref}
      >
        <p
          className={`bg-transparent text-xs lg:sm banner-content min-w-max text-right`}
          ref={textRef}
          style={{
            transform: `translateX(${
              ref.current?.clientWidth ? ref.current.clientWidth + "px" : "100%"
            })`,
          }}
        >
          {bannerText}
        </p>
      </div>
    </div>
  );
};

export default MobileBanner;
