import * as constants from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const INITIAL_STATE = 0;
const BALANCE_COOKIE = "BALANCE_COOKIE";

const balance = (state = INITIAL_STATE, action) => {
  let balance;
  switch (action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT:
      balance = action.deposit + state;
      break;
    case constants.WITHDRAW:
      balance = state - action.value;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }
  bake_cookie(BALANCE_COOKIE, balance);
  return balance;
};

export default balance;
