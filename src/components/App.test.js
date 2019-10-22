import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);

  it("it rendres correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("contains a wallet component", () => {
    //console.log(app.debug());
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });
});
