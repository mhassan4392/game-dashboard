import { configureStore } from "@reduxjs/toolkit";

import config from "@/store/features/config/configSlice";
import lan from "@/store/features/language/lanSlice";
import user from "@/store/features/user/userSlice";

export default configureStore({
  reducer: {
    config,
    lan,
    user,
  },
});
