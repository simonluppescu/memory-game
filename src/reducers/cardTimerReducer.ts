import { AppActions, ActionNames } from "../types/actionData";

const defaultState = 100;
const timeElapsedReducer = (state = defaultState, action: AppActions): number => {
  switch (action.type) {
    case ActionNames.COUNT_DOWN_TIMER:
      return state - 1;

    case ActionNames.RESET_TIMER:
      return defaultState;

    default:
      return state;
  }
};

export default timeElapsedReducer;
