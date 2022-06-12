import React from "react";
import { Planet } from "react-kawaii";
import { useStoreState, useStoreActions } from "easy-peasy";
import styles from "./Moods.module.css";

export default function Moods() {
  const moods = useStoreState((state) => state.moodsSlice.moods);
  const setMoods = useStoreActions((actions) => actions.moodsSlice.setMoods);

  return (
    <div className={styles.Moods}>
      {moods.map((mood) => (
        <span
          className={`${styles.MoodWrapper} ${
            mood.isSelected ? styles.MoodWrapperSelected : ""
          }`}
          key={mood.id}
          onClick={() => setMoods(mood.id)}
        >
          <Planet
            className={styles.Mood}
            color="#fad201"
            mood={mood.id}
            size={70}
          />
        </span>
      ))}
    </div>
  );
}
