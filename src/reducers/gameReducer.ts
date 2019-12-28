import { AppActions, ActionNames } from "../types/actionData";

const defaultState = false;
const gameReducer = (state = defaultState, action: AppActions): boolean => {
  switch (action.type) {
    case ActionNames.END_GAME:
      return true;

    default:
      return state;
  }
};

export default gameReducer;
