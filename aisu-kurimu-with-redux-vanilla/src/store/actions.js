export const SET_COLOR = "SET_COLOR";
export const SET_MOOD = "SET_MOOD";

export const setColor = (color) => ({ type: SET_COLOR, payload: color });
export const setMood = (mood) => ({ type: SET_MOOD, payload: mood });
