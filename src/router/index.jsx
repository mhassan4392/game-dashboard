import { Route, Routes, Navigate } from "react-router-dom";

// layouts
import Layout from "@/layouts/layout";
import GameLayout from "@/layouts/game";

// pages
import Games from "@/pages/games";
import Game from "@/pages/game";
import Rules from "@/pages/rules";
import Announcement from "@/pages/announcement";
import Lootbox from "@/pages/lootbox";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/events" />} replace />
        <Route path="/events" element={<GameLayout />}>
          <Route index element={<Games />} />
          <Route path="/events/:id" element={<Game />} />
        </Route>
        <Route path="/game-results" element={<GameLayout />}>
          <Route index element={<Games />} />
          <Route path="/game-results/:id" element={<Game />} />
        </Route>
        <Route path="/rules" element={<Rules />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/lootbox" element={<Lootbox />} />
      </Route>
    </Routes>
  );
};

export default Router;
