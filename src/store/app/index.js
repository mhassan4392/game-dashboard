import { configureStore } from "@reduxjs/toolkit";

import config from "@/store/features/config/configSlice";
import lan from "@/store/features/language/lanSlice";
import user from "@/store/features/user/userSlice";
import game from "@/store/features/game/gameSlice";
import bet from "@/store/features/bet/betSlice";
import order from "@/store/features/order/orderSlice";

export default configureStore({
  reducer: {
    config,
    lan,
    user,
    game,
    bet,
    order,
  },
});
