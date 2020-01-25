import { INCREMENT } from "../actions/types";
import { DECREMENT } from "../actions/types";

const initialState = {
  Data: 50
};
export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        Data: state.Data + 1
      };
    case DECREMENT:
      return {
        ...state,
        Data: state.Data - 1
      };
    default:
      return state;
  }
}
