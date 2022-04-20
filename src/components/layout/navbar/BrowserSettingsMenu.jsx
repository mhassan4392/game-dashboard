import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  MenuDivider,
} from "@szhsin/react-menu";
import { useState } from "react";
import { FaCog } from "react-icons/fa";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsVolumeMuteFill,
} from "react-icons/bs";
import Range from "@/components/Range/Range";
import Checkbox from "@/components/Checkbox/Checkbox";
import "./BrowserSettingsMenu.css";

const SettingsMenu = () => {
  const [resultAnimation, setResultAnimation] = useState(true);
  const [gameSound, setGameSound] = useState(60);
  const [effectsSound, setEffectsSound] = useState(0);

  return (
    <div className="browser-menu">
      <Menu
        menuButton={({ open }) => (
          <div
            className={`py-3 px-3 border border-gray-700 cursor-pointer hover:border-gray-500 mr-2 rounded transition-all duration-200 ${
              open ? "bg-gradient-to-r from-secondary to-primary" : ""
            }`}
          >
            <MenuButton className="flex items-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
              <FaCog className={`${open ? "text-dark" : "text-primary"}`} />
            </MenuButton>
          </div>
        )}
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
        <MenuItem
          onClick={(e) => (e.keepOpen = true)}
          className="hover:bg-transparent hover:cursor-default"
        >
          <div className="flex items-center w-full text-[11px] justify-between">
            <span>
              RESULT ANIMATION
              {/* {resultAnimation ? "checked" : "not checked"} */}
            </span>
            <Checkbox
              value={resultAnimation}
              onChange={(v) => setResultAnimation(v)}
            />
          </div>
        </MenuItem>
        <MenuItem
          onClick={(e) => (e.keepOpen = true)}
          className="hover:bg-transparent hover:cursor-default !mb-0 text-[11px]"
        >
          Game Sound
        </MenuItem>
        <MenuItem
          onClick={(e) => (e.keepOpen = true)}
          className="flex items-center justify-between hover:bg-transparent hover:cursor-default !mt-0"
        >
          <div className="w-10 h-4 flex items-center">
            {gameSound > 50 && <BsFillVolumeUpFill className="!text-xl" />}
            {gameSound < 50 && gameSound != 0 && (
              <BsVolumeDownFill className="!text-xl" />
            )}
            {gameSound == 0 && <BsVolumeMuteFill className="!text-xl" />}
          </div>
          <Range value={gameSound} onChange={(value) => setGameSound(value)} />
        </MenuItem>
        <MenuItem
          onClick={(e) => (e.keepOpen = true)}
          className="hover:bg-transparent hover:cursor-default !mb-0 text-[11px]"
        >
          Effects Sound
        </MenuItem>
        <MenuItem
          onClick={(e) => (e.keepOpen = true)}
          className="flex items-center justify-between hover:bg-transparent cursor-default !mt-0"
        >
          <div className="w-10 h-4 flex items-center">
            {effectsSound > 50 && <BsFillVolumeUpFill className="!text-xl" />}
            {effectsSound < 50 && effectsSound != 0 && (
              <BsVolumeDownFill className="!text-xl" />
            )}
            {effectsSound == 0 && <BsVolumeMuteFill className="!text-xl" />}
          </div>
          <Range
            value={effectsSound}
            onChange={(value) => setEffectsSound(value)}
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SettingsMenu;
