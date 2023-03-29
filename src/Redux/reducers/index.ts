import cellsReducer from "./cellsReducer";
import bundleReducer from "./bundlesReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  cells: cellsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
