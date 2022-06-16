import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../slices/colorsSlice";
import moodReducer from "../slices/moodsSlice";

export default configureStore({
  reducer: {
    colors: colorReducer,
    moods: moodReducer,
  },
});
