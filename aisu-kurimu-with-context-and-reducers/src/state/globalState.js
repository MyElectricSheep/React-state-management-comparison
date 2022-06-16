import React, { createContext, useReducer, useContext } from "react";
import initialState from "./initialData";

// How to prevent re-renders with useContext + useReducer
// https://github.com/facebook/react/issues/15156#issuecomment-474590693
// https://www.nielskrijger.com/posts/2021-02-16/use-reducer-and-use-context/

const GlobalState = createContext();
const GlobalDispatch = createContext();

const useGlobalState = () => useContext(GlobalState);
const useDispatch = () => useContext(GlobalDispatch);

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_COLOR":
      return {
        ...state,
        selectedColor: payload,
      };
    case "SET_MOOD":
      return {
        ...state,
        selectedMood: payload,
      };
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      throw new Error();
  }
};

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalDispatch.Provider value={dispatch}>
      <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
    </GlobalDispatch.Provider>
  );
};

export { GlobalStateProvider, useGlobalState, useDispatch };
