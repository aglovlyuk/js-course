import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

import { saveState, loadState } from "./helpers/localStorage";

const logger = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunkMiddleware, logger)
);

store.subscribe(() => {
  saveState({ investment: store.getState().investment });
});

export default store;
