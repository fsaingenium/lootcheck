import balanceReducer from "./balance";
import * as constants from "../actions/constants";

describe("Balance reducer", () => {
  it("sets a balance", () => {
    const balance = 10;

    expect(
      balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
    ).toEqual(balance);
  });

  it("deposit into balance", () => {
    const deposit = 10;
    const INITIAL_STATE = 5;

    expect(
      balanceReducer(INITIAL_STATE, { type: constants.DEPOSIT, deposit })
    ).toEqual(INITIAL_STATE + deposit);
  });

  it("withdraw from account", () => {
    const value = 5;
    const INITIAL_STATE = 10;

    expect(
      balanceReducer(INITIAL_STATE, { type: constants.WITHDRAW, value })
    ).toEqual(INITIAL_STATE - value);
  });
});
