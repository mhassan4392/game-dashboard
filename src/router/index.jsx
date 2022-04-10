import { Route, Routes, BrowserRouter } from "react-router-dom";

// layouts
import Layout from "../layouts/layout";
import EventLayout from "../layouts/event";
import GameResultLayout from "../layouts/gameresult";

// pages
import Events from "../pages/events";
import Event from "../pages/event";
import GameResults from "../pages/game_results";
import GameResult from "../pages/game_result";
import Rules from "../pages/rules";
import Announcement from "../pages/announcement";
import Lootbox from "../pages/lootbox";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/events" element={<EventLayout />}>
            <Route index element={<Events />} />
            <Route path="/events/:id" element={<Event />} />
          </Route>
          <Route path="/game-results" element={<GameResultLayout />}>
            <Route index element={<GameResults />} />
            <Route path="/game-results/:id" element={<GameResult />} />
          </Route>
          <Route path="/rules" element={<Rules />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/lootbox" element={<Lootbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
