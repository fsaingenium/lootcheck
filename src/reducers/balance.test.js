import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import * as constants from "../actions/constants";

describe("Balance reducer", () => {
  const balance = 10;

  describe("when initializing", () => {
    it("sets a balance", () => {
      expect(
        balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
      ).toEqual(balance);
    });

    describe("them re-initializing", () => {
      it("reads the balance for cookies", () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
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
