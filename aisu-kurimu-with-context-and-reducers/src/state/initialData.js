const colors = [
  "#F6A7DC",
  "#F7F25D",
  "#90F9E8",
  "#9DE295",
  "#F6B672",
  "#DFABF2",
  "#C8C6EF",
  "#B2E2F7",
];

const moods = [
  "sad",
  "shocked",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
  "ko",
];

const initialState = {
  colors,
  moods,
  selectedColor: colors[0],
  selectedMood: moods[0],
  darkMode:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches,
};

export default initialState;
