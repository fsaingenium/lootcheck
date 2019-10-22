import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Wallet } from "./Wallet";

Enzyme.configure({ adapter: new Adapter() });

describe("Wallter", () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);

  it("renders correctly", () => {
    expect(wallet).toMatchSnapshot(wallet);
  });

  it("display the balance from props", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });

  it("creates an input to withdraw or deposit from the balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });

  describe("when the user types into the wallet input", () => {
    const userBalance = "25";

    beforeEach(() => {
      wallet
        .find(".input-wallet")
        .simulate("change", { target: { value: userBalance } });
    });

    it("update the value in the `state` end converts it to a number", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe("and the user wants to make a deposit", () => {
      beforeEach(() => {
        wallet.find(".btn-deposit").simulate("click");
      });

      it("dispatches the `deposit()` it recieves from props with local balance", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe("and the user wants to make a withdraw", () => {
      beforeEach(() => {
        wallet.find(".btn-withdraw").simulate("click");
      });

      it("dispatches the `withdraw()`...", () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});
