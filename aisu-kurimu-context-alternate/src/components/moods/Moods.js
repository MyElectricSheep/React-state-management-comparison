import React from "react";
import { moods } from "../../data";
import { useGlobalContext } from "../../context";

import { Planet } from "react-kawaii";

import styles from "./Moods.module.css";

const Moods = () => {
  const { setSelectedMood, isSelectedMood } = useGlobalContext();
  return (
    <div className={styles.Moods}>
      {moods.map((mood) => (
        <span
          key={mood}
          className={`${styles.MoodWrapper} ${
            isSelectedMood(mood) ? styles.MoodWrapperSelected : ""
          }`}
          onClick={() => setSelectedMood(mood)}
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
