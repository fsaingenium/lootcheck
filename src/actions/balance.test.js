import * as constants from "./constants";
import * as actions from "./balance";

it("create an action to set the balance", () => {
  const balance = 0;

  const expectedAction = { type: constants.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it("creates an action to deposit into the balance", () => {
  const deposit = 10;
  const expectedAction = { type: constants.DEPOSIT, deposit };

  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it("creates an action to withdraw from balance", () => {
  const value = 5;
  const expectedAction = { type: constants.WITHDRAW, value };

  expect(actions.withdraw(value)).toEqual(expectedAction);
});
