import { useState, useEffect } from "react";
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
    dispatch(getLan({ lan }));
  }, [lan]);

  const launch = async () => {
    await dispatch(getKey({ lan: pLan, key, name }));
    await dispatch(getLan({ lan: pLan }));
    await dispatch(getUser());
    await dispatch(getConfig());
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
            className={`flex w-full grow overflow-hidden max-w-[1400px] mx-auto`}
          >
            {/* left sidebar */}
            {showSidebars && (
              <div className="lg:block hidden overflow-hidden mr-2 lg:basis-1/5">
                <LeftSidebar />
              </div>
            )}
            {/* pages */}
            <div className={`bg-dark grow`}>
              <Outlet />
            </div>
            {/* right sidebar */}
            {showSidebars && (
              <div className="md:col-span-2 lg:col-span-1 hidden ml-2 md:basis-1/3 lg:basis-1/5 md:block">
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
