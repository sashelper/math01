import React, { Component } from "react";
import { getTitle } from "./utility";
import { Col, Row } from "react-bootstrap";

export default class TableHead extends Component {
  render() {
    const { scope, howMany, class01, name, time, type, title } = this.props;
    return (
      <thead>
        <tr>
          <th colSpan={4} className="text-center large-font">
            {getTitle(scope, type, title, howMany)}
          </th>
        </tr>
        <tr>
          <th colSpan={4}>
            <Row>
              <Col>姓名：{name ? name : "__________"}</Col>
              <Col>
                班级：
                {class01 ? class01 : "__________"}
              </Col>
              <Col>日期：__________</Col>
              <Col>
                用时：
                {time ? `${time}分钟` : "__________"}
              </Col>
            </Row>
          </th>
        </tr>
      </thead>
    );
  }
}
