import { AppActions, ActionNames } from "../types/actionData";

const defaultState = 0;
const timeElapsedReducer = (state = defaultState, action: AppActions): number => {
  switch (action.type) {
    case ActionNames.INCREMENT_TIME:
      return state + 1;

    default:
      return state;
  }
};

export default timeElapsedReducer;
