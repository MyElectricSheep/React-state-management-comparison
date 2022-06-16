// import { createSlice } from "@reduxjs/toolkit";

// export const moodsSlice = createSlice({
//   name: "moods",
//   initialState: {
//     data: [
//   { id: "sad", isSelected: true },
//   { id: "shocked", isSelected: false },
//   { id: "happy", isSelected: false },
//   { id: "blissful", isSelected: false },
//   { id: "lovestruck", isSelected: false },
//   { id: "excited", isSelected: false },
//   { id: "ko", isSelected: false },
//     ],
//   },
//   reducers: {
//     setMood: (state, { payload }) => {
//       state.data = state.data.map((mood) => {
//         if (mood.id === payload) {
//           return {
//             ...mood,
//             isSelected: true,
//           };
//         }

//         return {
//           ...mood,
//           isSelected: false,
//         };
//       });
//     },
//   },
// });

// console.log(moodsSlice);

// export const { setMood } = moodsSlice.actions;
// export const getMoods = (state) => state.moods.data;
// export const getActiveMood = (state) =>
//   state.moods.data.find(({ isSelected }) => isSelected);

// export default moodsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const moodsSlice = createSlice({
  name: "moods",
  initialState: {
    data: [
      { id: "sad", isSelected: true },
      { id: "shocked", isSelected: false },
      { id: "happy", isSelected: false },
      { id: "blissful", isSelected: false },
      { id: "lovestruck", isSelected: false },
      { id: "excited", isSelected: false },
      { id: "ko", isSelected: false },
    ],
  },
  reducers: {
    setMood: (state, { payload }) => {
      state.data = state.data.map((mood) => {
        if (mood.id === payload) {
          return {
            ...mood,
            isSelected: true,
          };
        }

        return {
          ...mood,
          isSelected: false,
        };
      });
    },
  },
});

export const { setMood } = moodsSlice.actions;

export const getMoods = (state) => state.moods.data;
export const getActiveMood = (state) =>
  state.moods.data.find(({ isSelected }) => isSelected);

export default moodsSlice.reducer;
