import { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineRight,
  AiOutlineClockCircle,
  AiOutlineThunderbolt,
  AiOutlineOrderedList,
  AiOutlineFlag,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import RulesModal from "@/components/pages/rules/RulesModal";
import GameResultsModal from "@/components/pages/gameresults/GameResultsModal";
import CurrencyModal from "@/components/layout/modals/CurrencyModal";
import LanguageModal from "@/components/layout/modals/LanguageModal";
import GamesModal from "@/components/layout/modals/GamesModal";
import BetHistoryModal from "@/components/layout/modals/BetHistoryModal";
import "./MobileSettingsMenu.css";

const MobileSettingsMenu = () => {
  const [gamesModal, setGamesModal] = useState(false);
  const [rulesModal, setRulesModal] = useState(false);
  const [currencyModal, setCurrencyModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [gameResultsModal, setGameResultsModal] = useState(false);
  const [betHistoryModal, setBetHistoryModal] = useState(false);
  return (
    <>
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
          <MenuItem onClick={() => setBetHistoryModal(true)}>
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
          <MenuItem onClick={() => setGameResultsModal(true)}>
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
              setRulesModal(true);
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
          <MenuItem onClick={() => setCurrencyModal(true)}>
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
          <MenuItem onClick={() => setLanguageModal(true)}>
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

      {/* Modals */}
      <GamesModal open={gamesModal} onClose={() => setGamesModal(false)} />
      <RulesModal open={rulesModal} onClose={() => setRulesModal(false)} />
      <CurrencyModal
        open={currencyModal}
        onClose={() => setCurrencyModal(false)}
      />
      <LanguageModal
        open={languageModal}
        onClose={() => setLanguageModal(false)}
      />
      <GameResultsModal
        open={gameResultsModal}
        onClose={() => setGameResultsModal(false)}
        gamesModal={setGamesModal}
      />
      <BetHistoryModal
        open={betHistoryModal}
        onClose={() => setBetHistoryModal(false)}
      />
    </>
  );
};

export default MobileSettingsMenu;
