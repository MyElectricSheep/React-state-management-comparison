import React from "react";
import { Ghost, IceCream } from "react-kawaii";
import { useGlobalState, useDispatch } from "../../state";

import styles from "./LightToggler.module.css";

const LightToggler = () => {
  const dispatch = useDispatch();
  const { darkMode } = useGlobalState();

  const toggleDarkMode = () => {
    dispatch({
      type: "TOGGLE_DARK_MODE",
    });
  };

  return (
    <div onClick={toggleDarkMode} className={styles.LightToggler}>
      {darkMode ? <IceCream size={50} /> : <Ghost size={45} />}
    </div>
  );
};

export default LightToggler;
