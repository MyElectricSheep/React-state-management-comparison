import React from "react";
import { Planet } from "react-kawaii";
import styles from "./Moods.module.css";
import { useMoods } from "../../hooks/useMoods";

export default function Moods() {
  const { moods, setMood } = useMoods();
  return (
    <div className={styles.Moods}>
      {moods.map((mood) => (
        <span
          className={styles.MoodWrapper}
          key={mood.id}
          onClick={() => setMood(mood.id)}
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
