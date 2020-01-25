import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import testReducer from "../test/reducers/testReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  test: testReducer
});
