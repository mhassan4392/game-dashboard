import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import EventsIcon from "./EventsIcon";
import LootboxIcon from "./LootboxIcon";
import MobileSettingsMenu from "./MobileSettingsMenu";
import GamesModal from "@/components/layout/modals/GamesModal";

import { useSelector } from "react-redux";

const MobileNavbar = () => {
  const [gamesModal, setGamesModal] = useState(false);

  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="lg:hidden flex items-center justify-between bg-dark-light h-full py-2">
        <div className="flex items-center px-2">
          <MobileSettingsMenu />
          <div className="text-sm text-primary ml-3">¥ {user?.Balance}</div>
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
              onClick={() => setGamesModal(true)}
            />
          </div>
        </div>
      </div>
      <GamesModal open={gamesModal} onClose={() => setGamesModal(false)} />
    </>
  );
};

export default MobileNavbar;
