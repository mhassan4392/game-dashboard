import { useState, useEffect, useRef } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import LeftSidebar from "@/components/layout/sidebar/LeftSidebar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import RightSidebar from "@/components/layout/sidebar/RightSidebar";
import { useLocation } from "react-router";
import AuthLoading from "@/components/layout/AuthLoading";
import { AnimatePresence, motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";

import { getConfig, getKey } from "@/store/features/config/configSlice";
import { getLan, setLan } from "@/store/features/language/lanSlice";
import { getUser } from "@/store/features/user/userSlice";

const Layout = () => {
  const isMounted = useRef(false);
  const isLaunched = useRef(false);

  const { lan } = useSelector((state) => state.lan);

  // get search params or from localstorage
  const [searchParams] = useSearchParams();
  const pLan = searchParams.get("lan") || localStorage.getItem("lan") || 0;
  const key = searchParams.get("key") || localStorage.getItem("key") || null;
  const name = searchParams.get("name") || localStorage.getItem("name") || "";

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setLan(pLan));
    launch().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if ((isMounted.current, isLaunched.current)) {
      dispatch(getLan({ lan }));
    } else {
      isMounted.current = true;
    }
  }, [lan]);

  const launch = async () => {
    await dispatch(getKey({ lan: pLan, key, name }));
    await dispatch(getLan({ lan: pLan }));
    await dispatch(getUser());
    await dispatch(getConfig());
    isLaunched.current = true;
  };

  const location = useLocation();

  const showSidebars =
    location.pathname.includes("events") ||
    location.pathname.includes("game-results");

  return (
    <AnimatePresence exitBeforeEnter>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AuthLoading />
        </motion.div>
      )}
      {!loading && (
        <motion.div
          key="layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen space-y-2 flex flex-col justify-between"
        >
          {/* Navbar */}
          <Navbar></Navbar>
          {/* Main Content */}
          <div
            className={`grid grid-cols-5 gap-2 w-full grow overflow-hidden max-w-[1400px] mx-auto`}
          >
            {/* left sidebar */}
            {showSidebars && (
              <div className="lg:flex flex-col h-full hidden overflow-hidden">
                <LeftSidebar />
              </div>
            )}
            {/* pages */}
            <div
              className={`bg-dark overflow-hidden col-span-5 ${
                showSidebars ? "md:col-span-3" : ""
              }`}
            >
              <Outlet />
            </div>
            {/* right sidebar */}
            {showSidebars && (
              <div className="md:col-span-2 lg:col-span-1 hidden overflow-hidden h-full md:flex flex-col">
                <RightSidebar />
              </div>
            )}
          </div>
          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Layout;
