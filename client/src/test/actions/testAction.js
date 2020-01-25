import { INCREMENT, DECREMENT } from "./types";

export const testAdd = () => dispatch => {
  dispatch({ type: INCREMENT });
};

export const testRemove = () => dispatch => {
  dispatch({ type: DECREMENT });
};
