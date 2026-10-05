import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import App from "./App";

describe("App", () => {
  it("renders the form", () => {
    const div = document.createElement("div");
    act(() => {
      ReactDOM.render(<App />, div);
    });
    expect(div.textContent).to.contain("口算练习题在线生成工具");
    expect(div.textContent).to.contain("生成习题");
    ReactDOM.unmountComponentAtNode(div);
  });
});
