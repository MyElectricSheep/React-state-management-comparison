import React from "react";
import { IceCream } from "react-kawaii";
import { useSelector } from "react-redux";

import Colors from "../components/colors";
import Moods from "../components/moods";
import { selectActiveColor } from "../slices/colorsSlice";
import { getActiveMood } from "../slices/moodsSlice";
import "./App.css";

function App() {
  const activeColor = useSelector(selectActiveColor);
  const activeMood = useSelector(getActiveMood);

  return (
    <div className="App">
      <div className="IceCream">
        <IceCream size={400} color={activeColor.id} mood={activeMood.id} />
      </div>
      <Colors />
      <Moods />
    </div>
  );
}

export default App;
