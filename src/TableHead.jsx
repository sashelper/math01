import React, { Component } from "react";
import { getTitle } from "./utility";
import { Col, Row } from "react-bootstrap";

export default class TableHead extends Component {
  render() {
    const { scope, howMany, class01, name, time, type } = this.props;
    return (
      <thead>
        <tr>
          <th colSpan={4} className="text-center large-font">
            {getTitle(scope, type)}
          </th>
        </tr>
        <tr>
          <th colSpan={4}>
            <Row>
              <Col>姓名：{name ? name : "____________"}</Col>
              <Col>
                班级：
                {class01 ? class01 : "____________"}
              </Col>
              <Col>___月___日</Col>
              <Col>
                用时：
                {time ? time : "______"} 分钟
              </Col>
              <Col md={3}>做对：_____/{howMany} 题</Col>
            </Row>
          </th>
        </tr>
      </thead>
    );
  }
}
