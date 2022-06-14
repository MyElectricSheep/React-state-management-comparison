import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";

const reduxDevToolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, reduxDevToolsEnhancer);
