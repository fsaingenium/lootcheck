import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/balance";

export class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: undefined
    };
  }

  updateBalance = event => {
    this.setState({ balance: parseInt(event.target.value, 10) });
  };

  deposit = () => this.props.deposit(this.state.balance);

  withdraw = () => this.props.withdraw(this.state.balance);

  render() {
    const { balance } = this.props;
    return (
      <div>
        <h3 className="balance">Wallet balance: {balance}</h3>
        <br />
        <input
          type="text"
          className="input-wallet"
          onChange={this.updateBalance}
        />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state
});

const mapDispatchToProps = dispatch => ({
  deposit: value => dispatch(deposit(value)),
  withdraw: value => dispatch(withdraw(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
