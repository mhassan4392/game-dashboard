import { configureStore } from "@reduxjs/toolkit";

import config from "@/store/features/config/configSlice";
import lan from "@/store/features/language/lanSlice";
import user from "@/store/features/user/userSlice";
import game from "@/store/features/game/gameSlice";

export default configureStore({
  reducer: {
    config,
    lan,
    user,
    game,
  },
});
