import React from "react";
import { IceCream } from "react-kawaii";
import Colors from "../components/colors";
import Moods from "../components/moods";
import { useColors } from "../hooks/useColors";
import { useMoods } from "../hooks/useMoods";
import "./App.css";

function App() {
  const { activeColor } = useColors();
  const { activeMood } = useMoods();

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
