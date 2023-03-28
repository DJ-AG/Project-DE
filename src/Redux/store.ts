import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ActionType } from "./actions-types";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// For low level reducer testing add and delete  cell

// store.dispatch({
//   type: ActionType.INSERT_CELL_BEFORE,
//   payload: {
//     id: null,
//     type: "code",
//   },
// });

// store.dispatch({
//     type: ActionType.INSERT_CELL_BEFORE,
//     payload: {
//       id: null,
//       type: "text",
//     },
//   });

//   store.dispatch({
//     type: ActionType.DELETE_CELL,
//     payload:"0nd"
//   });

console.log(store.getState())