import { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineUser,
  AiOutlineRight,
  AiOutlineClockCircle,
  AiOutlineThunderbolt,
  AiOutlineOrderedList,
  AiOutlineFlag,
} from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import EventsIcon from "./EventsIcon";
import GamesMenu from "./GamesMenu";
import LootboxIcon from "./LootboxIcon";
import RulesMenu from "./RulesMenu";

import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import CurrencyMenu from "./CurrencyMenu";
import LanguageMenu from "./LanguageMenu";
import GameResultsMenu from "./GameResultsMenu";
import BetHistoryMenu from "./BetHistoryMenu";

const MobileNavbar = () => {
  const [gamesMenu, setGamesMenu] = useState(false);
  const [rulesMenu, setRulesMenu] = useState(false);
  const [currencyMenu, setCurrencyMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [gameResultsMenu, setGameresultsMenu] = useState(false);
  const [betHistoryMenu, setBetHistoryMenu] = useState(false);
  return (
    <div className="lg:hidden flex items-center justify-between bg-dark-light h-full">
      <div className="flex items-center space-x-4 px-2">
        <div className="mobile-menu text-sm">
          <Menu
            menuButton={
              <div>
                <MenuButton>
                  <BiMenuAltLeft className="bg-gray-800 bg-opacity-50 text-3xl p-1 text-primary" />
                </MenuButton>
              </div>
            }
          >
            <MenuItem onClick={(e) => (e.keepOpen = true)}>
              <div className="flex items-center w-full">
                <AiOutlineUser className="mr-2 text-primary" />
                <span className="text-primary">OL8AARON1990</span>
              </div>
            </MenuItem>
            <MenuDivider className="!bg-primary !bg-opacity-20 !mx-2" />
            <MenuItem onClick={() => setBetHistoryMenu(true)}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <AiOutlineClockCircle className="mr-2 text-primary" />
                  <span>BET HISTORY</span>
                </div>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
            </MenuItem>
            <MenuItem>
              <Link
                to="/events"
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center">
                  <AiOutlineThunderbolt className="mr-2 text-primary" />
                  <span>MATCHES</span>
                </div>
                <div>
                  <AiOutlineRight />
                </div>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setGameresultsMenu(true)}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <GiTrophyCup className="mr-2 text-primary" />
                  <span>GAME RESULTS</span>
                </div>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setRulesMenu(true);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <AiOutlineOrderedList className="mr-2 text-primary" />
                  <span>RULES</span>
                </div>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
            </MenuItem>
            <MenuDivider className="!bg-primary !bg-opacity-20 !mx-2" />
            <MenuItem onClick={() => setCurrencyMenu(true)}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <MdLanguage className="mr-2 text-primary" />
                  <span>EURO</span>
                </div>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
            </MenuItem>
            <MenuItem onClick={() => setLanguageMenu(true)}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <AiOutlineFlag className="mr-2 text-primary" />
                  <span>ENG</span>
                </div>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
            </MenuItem>
          </Menu>
        </div>
        <div className="text-sm text-primary">¥ 0.00</div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center bg-dark rounded-full overflow-hidden">
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `px-3 py-0.5 rounded-full bg-dark ${
                isActive ? "bg-gradient-to-r from-primary to-secondary" : ""
              }`
            }
          >
            <EventsIcon />
          </NavLink>
          <NavLink
            to="/lootbox"
            className={({ isActive }) =>
              `px-3 py-0.5 rounded-full bg-dark ${
                isActive ? "bg-gradient-to-r from-primary to-secondary" : ""
              }`
            }
          >
            <LootboxIcon />
          </NavLink>
        </div>
        <div className="pr-2 pl-3 ml-3 border-l border-secondary py-0 border-opacity-25">
          <AiOutlineAppstore
            className="text-3xl text-secondary"
            onClick={() => setGamesMenu(true)}
          />
        </div>
        <GamesMenu open={gamesMenu} onClose={() => setGamesMenu(false)} />
        <RulesMenu open={rulesMenu} onClose={() => setRulesMenu(false)} />
        <CurrencyMenu
          open={currencyMenu}
          onClose={() => setCurrencyMenu(false)}
        />
        <LanguageMenu
          open={languageMenu}
          onClose={() => setLanguageMenu(false)}
        />
        <GameResultsMenu
          open={gameResultsMenu}
          onClose={() => setGameresultsMenu(false)}
          gamesMenu={setGamesMenu}
        />
        <BetHistoryMenu
          open={betHistoryMenu}
          onClose={() => setBetHistoryMenu(false)}
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
