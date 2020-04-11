import React, { Component } from "react";

export default class TableBody extends Component {
  getTd = (obj01, key) => {
    if (!obj01) return null;

    // get op
    let op;
    switch (obj01.op1) {
      case 1:
        op = "+";
        break;
      case 2:
        op = "-";
        break;

      case 3:
        op = "x";
        break;
      default:
        break;
    }

    return (
      <td key={`key-${key}`}>
        {obj01.a} {op} {obj01.b}
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
      if (i % 5 === 0) {
        res.push(
          <tr className="medium-font-2" key={`key-tr-${i / 5}`}>
            {tr01}
          </tr>
        );
        tr01 = [];
      }
    }
    if (tr01.length > 0)
      res.push(
        <tr className="medium-font-2" key={`key-tr-last`}>
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
