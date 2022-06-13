import React from "react";
import { useGlobalState, useDispatch } from "../../state";

import { Planet } from "react-kawaii";

import styles from "./Moods.module.css";

const Moods = () => {
  const { moods, selectedMood } = useGlobalState();
  const dispatch = useDispatch();

  const selectMood = (mood) => {
    dispatch({
      type: "SET_MOOD",
      payload: mood,
    });
  };

  return (
    <div className={styles.Moods}>
      {moods.map((mood) => (
        <span
          key={mood}
          className={`${styles.MoodWrapper} ${
            selectedMood === mood ? styles.MoodWrapperSelected : ""
          }`}
          onClick={() => selectMood(mood)}
        >
          <Planet
            className={styles.Mood}
            color="#fad201"
            mood={mood}
            size={70}
          />
        </span>
      ))}
    </div>
  );
};

export default Moods;
