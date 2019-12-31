import { AppActions, ActionNames } from "../types/actionData";

const numSpecialRetries = 1;
const defaultState = 0;
const specialRetryReducer = (state = defaultState, action: AppActions): number => {
  switch (action.type) {
    case ActionNames.ADD_SPECIAL_RETRY:
      return numSpecialRetries;

    case ActionNames.DECREMENT_SPECIAL_RETRY:
      return Math.max(state - 1, 0);

    default:
      return state;
  }
};

export default specialRetryReducer;
