import { createStore, action, computed, debug } from "easy-peasy";
import { colorsDefault, moodsDefault } from "../initialData";

const colorsSlice = {
  colors: colorsDefault,
  setColors: action((state, colorId) => {
    // console.log(debug(state));
    const newColors = state.colors.map((color) => ({
      ...color,
      isSelected: color.id === colorId
    }));

    state.colors = newColors;
  }),
  activeColor: computed(
    (state) => state.colors.find((color) => color.isSelected).id
  )
};

const moodsSlice = {
  moods: moodsDefault,
  setMoods: action((state, moodId) => {
    const newMoods = state.moods.map((mood) => ({
      ...mood,
      isSelected: mood.id === moodId
    }));
    state.moods = newMoods;
  }),
  activeMood: computed(
    (state) => state.moods.find((mood) => mood.isSelected).id
  )
};

const model = {
  colorsSlice,
  moodsSlice
};

export default createStore(model);
