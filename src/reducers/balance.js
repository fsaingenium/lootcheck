import * as constants from "../actions/constants";

const INITIAL_STATE = 0;

const balance = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
      return action.deposit + state;
    case constants.WITHDRAW:
      return state - action.value;
    default:
      return state;
  }
};

export default balance;
