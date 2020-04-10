import React, { PureComponent } from "react";
import { Card, Table } from "react-bootstrap";

export default class ContentPrint extends PureComponent {
  getTd = (obj01, key) => {
    if (!obj01) return null;
    return (
      <td key={`key-${key}`}>
        {obj01.a} {obj01.op1 === 1 ? "+" : "-"} {obj01.b}
        {" ="}
      </td>
    );
  };

  thead = () => {
    const { scope, howMany, class01, name, time } = this.props;
    return (
      <thead>
        <tr>
          <th colSpan={5} className="text-center large-font">
            {scope}以内加减法口算练习题
          </th>
        </tr>
        <tr className="medium-font-1">
          <th>姓名：{name ? name : "____________"}</th>
          <th>
            班级：
            {class01 ? class01 : "____________"}
          </th>
          <th>20___年___月___日</th>
          <th>
            用时：
            {time ? time : "______"} 分钟
          </th>
          <th>做对：_____/{howMany} 题</th>
        </tr>
      </thead>
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
    const { arrayExercises } = this.props;

    return (
      <Card id="printme">
        <Card.Header></Card.Header>
        <Card.Body>
          {arrayExercises.map((item) => (
            <Table responsive>
              {this.thead()}
              <tbody>{this.getTableContent(item)}</tbody>
            </Table>
          ))}
        </Card.Body>
      </Card>
    );
  }
}
