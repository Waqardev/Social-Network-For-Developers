import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//root reducer
import rootReducer from "./reducers";

const midleware = [thunk];
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...midleware))
);
export default store;
