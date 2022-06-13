import React from "react";
import { Planet } from "react-kawaii";
import { useSelector, useDispatch } from "react-redux";
import { getMoods, setMood } from "../../slices/moodsSlice";
import styles from "./Moods.module.css";

export default function Moods() {
  const moods = useSelector(getMoods);
  const dispatch = useDispatch();

  return (
    <div className={styles.Moods}>
      {moods.map((mood) => (
        <span
          className={styles.MoodWrapper}
          key={mood.id}
          onClick={() => dispatch(setMood(mood.id))}
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
