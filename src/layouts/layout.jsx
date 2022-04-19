import { Outlet } from "react-router";
import LeftSidebar from "@/components/layout/sidebar/LeftSidebar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import RightSidebar from "@/components/layout/sidebar/RightSidebar";

import { useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();
  const showSidebars =
    location.pathname.includes("events") ||
    location.pathname.includes("game-results");
  return (
    <div className="h-screen space-y-2 flex flex-col justify-between">
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
    </div>
  );
};

export default Layout;
