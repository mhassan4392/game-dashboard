import { FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./BrowserNavbar.scss";
import Banner from "@/components/banner/BrowserBanner";
import BrowserSettingsMenu from "./BrowserSettingsMenu";

const BrowserNavbar = () => {
  //   links
  const links = [
    { title: "MATCHES", path: "/events", active: "events" },
    { title: "GAME RESULTS", path: "/game-results", active: "game-results" },
    { title: "RULES", path: "/rules", active: "rules" },
    { title: "ANNOUNCEMENT", path: "/announcement", active: "announcement" },
    { title: "LOOTBOX", path: "/lootbox", active: "lootbox" },
  ];

  return (
    <div className="hidden lg:block max-w-[1400px] mx-auto">
      {/* Top Navbar */}
      <Banner />

      {/* Bottom Navbar */}
      <div className="flex items-center justify-between bg-dark">
        <div className="flex flex-grow items-center justify-between">
          <div className="">
            {links.map((link) => (
              <NavLink
                className="py-5 inline-block text-[#b8d0ed] hover:text-primary transition-colors duration-200 navbar-link relative"
                key={link.path}
                to={link.path}
              >
                <span className="design"></span>
                <span className="border-r border-secondary border-opacity-25 px-5 inline-block">
                  {link.title}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Settings Menu */}
          <BrowserSettingsMenu />
        </div>

        <div className="w-44 flex border border-secondary mx-3 rounded">
          <div className="bg-secondary text-md flex items-center px-3 text-black mr-2">
            <FaWallet />
          </div>
          <div className="flex flex-col py-1">
            <span className="text-[12px]">OL8AARON1990</span>
            <span className="text-[13px] text-primary">¥ 0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrowserNavbar;
