import { SET_COLOR, SET_MOOD } from "./actions";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COLOR:
      return {
        ...state,
        colors: state.colors.map((c) => ({
          ...c,
          isSelected: c.id === payload,
        })),
      };
    case SET_MOOD:
      return {
        ...state,
        moods: state.moods.map((c) => ({
          ...c,
          isSelected: c.id === payload,
        })),
      };
    default:
      return state;
  }
};

export default reducer;
