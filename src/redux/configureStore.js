import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigurStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};
