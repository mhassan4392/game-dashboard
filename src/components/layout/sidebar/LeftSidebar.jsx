import allGames from "@/assets/images/games/all-games.svg";
import basketball from "@/assets/images/games/basketball.png";
import csgo from "@/assets/images/games/csgo.png";
import dota2 from "@/assets/images/games/dota2.png";
import fifa from "@/assets/images/games/fifa.png";
import kog from "@/assets/images/games/kog.png";
import lol from "@/assets/images/games/lol.png";
import mllogo from "@/assets/images/games/ML_logo.png";
import nba2k18 from "@/assets/images/games/nba2k18.png";
import rainbowsix from "@/assets/images/games/rainbowsix.png";
import startcraft2 from "@/assets/images/games/starcraft2.png";

// links
const LeftSidebar = () => {
  const games = [
    { title: "All Games", total_games: 234, logo: allGames, selected: true },
    { title: "CS:GO", total_games: 24, logo: csgo },
    { title: "Dota 2", total_games: 12, logo: dota2 },
    { title: "League of legends", total_games: 23, logo: lol },
    { title: "Basketball", total_games: 14, logo: basketball },
    { title: "Fifa", total_games: 28, logo: fifa },
    { title: "NBA 2K", total_games: 15, logo: nba2k18 },
    { title: "Mobile legend", total_games: 24, logo: mllogo },
    { title: "Rainbow six", total_games: 21, logo: rainbowsix },
    { title: "Starcraft ||", total_games: 36, logo: startcraft2 },
    { title: "King of glory", total_games: 25, logo: kog },
    { title: "Cricket", total_games: 24, logo: csgo },
    { title: "Footbal", total_games: 12, logo: dota2 },
    { title: "Hockey", total_games: 23, logo: lol },
    { title: "Tannis", total_games: 14, logo: basketball },
    { title: "Badminton", total_games: 28, logo: fifa },
    { title: "Swimming", total_games: 15, logo: nba2k18 },
    { title: "Running", total_games: 24, logo: mllogo },
    { title: "Crossfit", total_games: 21, logo: rainbowsix },
    { title: "Weight lifting", total_games: 36, logo: startcraft2 },
    { title: "Polo", total_games: 25, logo: kog },
  ];
  return (
    <>
      <div className="bg-dark-light overflow-y-auto scrollbar h-full left-sidebar">
        {games.map((game) => (
          <div
            key={game.title}
            className={`flex items-center justify-between cursor-pointer hover:bg-gray-800 hover:bg-opacity-75 py-4 px-2 transition-all duration-200 ${
              game.selected
                ? "bg-gradient-to-r from-primary to-secondary text-white bg-opacity-75"
                : ""
            }`}
          >
            <div className="flex items-center space-x-2">
              <img className="w-5 h-5" src={game.logo} alt="" />
              <p className="truncate text-sm">{game.title}</p>
            </div>
            <div className="text-xs">({game.total_games})</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftSidebar;
