import { AppActions, ActionNames } from "../types/actionData";

const numSpecialTimers = 3;
const defaultState = 0;
const specialTimerReducer = (state = defaultState, action: AppActions): number => {
  switch (action.type) {
    case ActionNames.ADD_SPECIAL_TIMER:
      return numSpecialTimers;

    case ActionNames.DECREMENT_SPECIAL_TIMER:
      return Math.max(state - 1, 0);

    default:
      return state;
  }
};

export default specialTimerReducer;
