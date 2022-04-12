import { Outlet } from "react-router";
import LeftSidebar from "../components/layout/LeftSidebar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RightSidebar from "../components/layout/RightSidebar";

import { useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();
  const showSidebars =
    location.pathname.includes("events") ||
    location.pathname.includes("game-results");
  return (
    <div className="">
      <div className="max-w-[1400px] mx-auto">
        <Navbar></Navbar>
        <div
          className={`grid gap-2 mt-2 mb-2 h-[88vh] lg:h-[83vh] overflow-hidden ${
            showSidebars
              ? "grid-cols-1 md:grid-cols-7 lg:grid-cols-5"
              : "grid-cols-1"
          }`}
        >
          {/* left sidebar */}
          {showSidebars && (
            <div className="lg:block hidden">
              <LeftSidebar />
            </div>
          )}
          {/* routes */}
          <div
            className={`bg-dark h-[88vh] lg:h-[83vh] ${
              showSidebars
                ? "col-span-1 md:col-span-5 lg:col-span-3"
                : "col-span-1"
            }`}
          >
            <Outlet />
          </div>
          {/* right sidebar */}
          {showSidebars && (
            <div className="md:col-span-2 lg:col-span-1 hidden md:block">
              <RightSidebar />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
