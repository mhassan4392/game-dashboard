import { useState, useEffect } from "react";
import { FaCog, FaWallet } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  MenuDivider,
} from "@szhsin/react-menu";

import "./index.scss";
import Banner from "../../Banner";

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
    <div className="hidden lg:block">
      {/* Top Navbar */}
      {/* <div className="flex justify-between items-center h-10"> */}
      <Banner />
      {/* </div> */}

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

          <div className="browser-menu">
            <Menu
              menuButton={
                <div className="py-3 px-3 border border-gray-700 cursor-pointer hover:border-gray-500 mr-2">
                  <MenuButton className="flex items-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
                    <FaCog className="text-primary" />
                  </MenuButton>
                </div>
              }
            >
              <SubMenu label="EURO">
                <MenuItem>EURO</MenuItem>
                <MenuItem>INDO</MenuItem>
                <MenuItem>HONGKONG</MenuItem>
              </SubMenu>
              <SubMenu label="EN">
                <MenuItem>中文</MenuItem>
                <MenuItem>ENG</MenuItem>
              </SubMenu>
              <MenuDivider className="!bg-primary !bg-opacity-20 !mx-2" />
              <MenuItem onClick={(e) => (e.keepOpen = true)}>
                RESULT ANIMATION
              </MenuItem>
              <MenuItem onClick={(e) => (e.keepOpen = true)}>
                Game Sound
              </MenuItem>
              <MenuItem
                onClick={(e) => (e.keepOpen = true)}
                className="flex items-center"
              >
                <AiFillSound className="mr-2" />
                <input type="range" name="" id="" className="slider" />
              </MenuItem>
              <MenuItem onClick={(e) => (e.keepOpen = true)}>
                Effects Sound
              </MenuItem>
              <MenuItem
                onClick={(e) => (e.keepOpen = true)}
                className="flex items-center"
              >
                <AiFillSound className="mr-2" />
                <input type="range" name="" id="" className="slider" />
              </MenuItem>
            </Menu>
          </div>
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
