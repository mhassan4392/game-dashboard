import { useRef, useLayoutEffect } from "react";
import { FaBullhorn } from "react-icons/fa";
import "./index.scss";

import Axios from "@/utils/axios";

import { AnimatePresence, motion } from "framer-motion";

const MobileBanner = () => {
  const textRef = useRef();
  // reference for banner container
  const ref = useRef(null);

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
        <motion.p
          initial={{
            translateX: ref.current?.clientWidth
              ? ref.current.clientWidth + "px"
              : "100%",
          }}
          animate={{ translateX: "100%" }}
          transition={{ repeat: Infinity }}
          ref={textRef}
          className="bg-transparent text-xs lg:sm banner-content min-w-max text-right absolute"
          style={{
            transform: `translateX(${
              ref.current?.clientWidth ? ref.current.clientWidth + "px" : "100%"
            })`,
          }}
        ></motion.p>
      </div>
    </div>
  );
};

export default MobileBanner;
