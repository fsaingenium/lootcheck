import * as constants from "./constants";

export const setBalance = balance => {
  return {
    type: constants.SET_BALANCE,
    balance
  };
};

export const deposit = deposit => ({ type: constants.DEPOSIT, deposit });

export const withdraw = value => ({ type: constants.WITHDRAW, value });
