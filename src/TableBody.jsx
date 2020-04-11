import React, { Component } from "react";
import { getOp } from "./utility";

export default class TableBody extends Component {
  getTd = (obj01, key) => {
    if (!obj01) return null;

    return (
      <td key={`key-${key}`}>
        {obj01.a} {getOp(obj01.op1)} {obj01.b}{" "}
        {obj01.op2 ? `${getOp(obj01.op2)} ${obj01.c}` : ""}
        {" ="}
      </td>
    );
  };

  getTableContent = (exercises) => {
    const { howMany } = this.props;
    const res = [];
    let tr01 = [];
    for (let i = 1; i < parseInt(howMany) + 1; i++) {
      tr01.push(this.getTd(exercises[i - 1], i - 1));
      if (i % 4 === 0) {
        res.push(
          <tr className="medium-font-1" key={`key-tr-${i / 5}`}>
            {tr01}
          </tr>
        );
        tr01 = [];
      }
    }
    if (tr01.length > 0)
      res.push(
        <tr className="medium-font-1" key={`key-tr-last`}>
          {tr01}
        </tr>
      );
    return res;
  };

  render() {
    const { exercises } = this.props;

    return <tbody>{this.getTableContent(exercises)}</tbody>;
  }
}
