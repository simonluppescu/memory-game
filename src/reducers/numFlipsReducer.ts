import { AppActions, ActionNames } from "../types/actionData";

const defaultState = 0;
const numFlipsReducer = (state = defaultState, action: AppActions): number => {
  switch (action.type) {
    case ActionNames.INCREMENT_FLIPS:
      return state + 1;

    default:
      return state;
  }
};

export default numFlipsReducer;
