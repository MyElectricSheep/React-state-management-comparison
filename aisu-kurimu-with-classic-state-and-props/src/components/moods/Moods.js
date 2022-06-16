import React from "react";
import { moods } from "../../data";

import { Planet } from "react-kawaii";

import styles from "./Moods.module.css";

const Moods = ({ selectedMood, onSelectMood }) => {
  return (
    <div className={styles.Moods}>
      {moods.map((mood) => (
        <span
          key={mood}
          className={`${styles.MoodWrapper} ${
            mood === selectedMood ? styles.MoodWrapperSelected : ""
          }`}
          onClick={() => onSelectMood(mood)}
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
